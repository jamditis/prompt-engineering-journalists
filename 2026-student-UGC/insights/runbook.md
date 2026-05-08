# Insights pipeline runbook

This file is the script you (the main Claude Code session) follow to run the LLM-driven phases. The deterministic phases (1, 2.5, 4) are plain Python scripts run from the shell.

## Phase 2: Per-post extraction (subagent fan-out)

### Prep
1. Confirm `insights/data/posts.jsonl` exists. If not, run `python insights/flatten.py`.
2. Run `python insights/slice.py` to write `insights/data/slices/slice_*.jsonl` (10 slices by default).

### Dispatch
Read `insights/prompts/per-post-extract.md` once into context. Then dispatch one Agent subagent per slice file IN PARALLEL — call all of them in a single message with multiple Agent tool blocks.

Each subagent's prompt is:

> You are processing a slice of forum posts for an extraction pipeline. Your slice file is `insights/data/slices/slice_NN.jsonl`. The extraction prompt is at `insights/prompts/per-post-extract.md`.
>
> For each line in your slice file (each is a JSON object representing one post):
>   1. Check if `insights/data/extracted/{post_id}.json` already exists. If yes, skip — log "skip:{post_id}" to `insights/data/extraction_log.jsonl` and move on.
>   2. Build a prompt input from the post's `post_id`, `forum_name`, `forum_category`, `discussion_subject`, `author_name`, `posted_at`, `content_text`, `language_guess`. The full content_text goes in.
>   3. Apply the extraction prompt to that input. The output must be a single JSON object matching the schema.
>   4. Parse the model's response as JSON. If it has an extra code fence, strip it.
>   5. Validate using `insights.lib.schema.validate_extraction(record)`. If errors, retry once with the same input but prepend "Your previous response had these errors: <list>. Return only valid JSON now." If still failing, write to `insights/data/failed/{post_id}.json` with `{"error": "...", "raw_response": "..."}`. Continue.
>   6. On success, write `insights/data/extracted/{post_id}.json` (atomic — write to .tmp, rename).
>   7. Append a JSON line to `insights/data/extraction_log.jsonl`: `{"post_id": "...", "ts": "<ISO>", "status": "ok|skip|failed", "duration_s": <float>}`.
>
> When done, return a one-line summary: how many ok, how many skipped, how many failed.

### After dispatch
1. Wait for all subagents to return.
2. Run `python insights/validate.py` (Task 8).
3. If validation passes, proceed to Phase 3.

## Phase 3: Aggregation
See per-step runbook sections — these are added incrementally as Tasks 9-12 land.

## Phase 3a: Themes clustering

In the main session:
1. Run `python -m insights.aggregate.themes` to dump the freeform list to stdout.
2. Read `insights/prompts/theme-cluster.md` for instructions.
3. Send the prompt + the freeform list to Sonnet 4.6 (just call it once in this session — no subagent needed).
4. Parse the model's JSON array. Save it to `insights/data/themes_emergent.json`.
5. Run a one-liner to build the final `themes.json`:

```python
from pathlib import Path
import json
from insights.aggregate.themes import build_themes_json
emergent = json.loads(Path("insights/data/themes_emergent.json").read_text(encoding="utf-8"))
themes = build_themes_json(Path("insights/data/extracted"), emergent)
Path("insights/data/themes.json").write_text(json.dumps(themes, indent=2, ensure_ascii=False), encoding="utf-8")
```

6. For each theme with `member_count >= 5`, send the theme + a sampling of its members' `summary_one_line` and `quotable_lines` back to the model and ask for a 4-sentence `ai_summary`. Patch the result into `themes.json`. (For now, themes with fewer members get an empty `ai_summary` — frontend handles that.)

## Phase 3b: Forum narratives

In the main session:
1. Build the per-forum inputs:
   ```python
   from pathlib import Path
   import json
   from insights.aggregate.forums import build_forum_inputs, merge_narratives
   inputs = build_forum_inputs(Path("insights/data/posts.jsonl"), Path("insights/data/extracted"))
   ```
2. For each forum input, send the JSON + the prompt at `insights/prompts/forum-narrative.md` to Sonnet 4.6. Parse the JSON response.
3. Merge each narrative back into its input via `merge_narratives(forum_input, narrative)`.
4. Write the array to `insights/data/forums.json`.

## Phase 3c: Student profiles

In the main session:
1. Build the inputs:
   ```python
   from insights.aggregate.students import build_student_inputs, finalize_students
   inputs = build_student_inputs(Path("insights/data/posts.jsonl"), Path("insights/data/extracted"))
   ```
2. For each student where `post_count >= 2`, send `{"real_name": ..., "post_count": ..., "modules_active": [...], "extractions": [...]}` to Sonnet 4.6 with the prompt at `insights/prompts/student-profile.md`. Parse the JSON response. Collect `{student_id: response}` into a dict.
3. Finalize:
   ```python
   students, name_map = finalize_students(inputs, model_responses)
   Path("insights/data/students.json").write_text(json.dumps(students, indent=2, ensure_ascii=False), encoding="utf-8")
   Path("insights/data/name_map.json").write_text(json.dumps(name_map, indent=2, ensure_ascii=False), encoding="utf-8")
   ```
