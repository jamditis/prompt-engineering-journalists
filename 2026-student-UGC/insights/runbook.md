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
