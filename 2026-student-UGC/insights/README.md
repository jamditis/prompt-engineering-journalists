# Student UGC insights pipeline

Turns the spring 2026 cohort's forum corpus (594 threads, 912 posts) into structured JSON the dashboard can render.

## Prerequisites
- Python 3.11+
- A venv with `pip install -r requirements.txt`
- Claude Code with subagent dispatch capability (the LLM phases run in-session through subagents)

## Phases

| Phase | What | How |
|---|---|---|
| 1 | Flatten | `python insights/flatten.py` |
| 2 | Slice + extract | `python insights/slice.py` then follow `insights/runbook.md` Phase 2 inside Claude Code |
| 2.5 | Validate | `python insights/validate.py` |
| 3a-c | LLM aggregation | Follow `insights/runbook.md` Phases 3a, 3b, 3c |
| 3d | Overview rollups | `python -m insights.aggregate.overview` |
| 4 | Build | `python insights/build.py` |

## Re-running
- Re-run phase 1: deletes and re-creates `data/posts.jsonl`. Cheap.
- Re-run phase 2 after editing the prompt: delete the relevant files in `data/extracted/` and re-dispatch. Cached files are skipped.
- Re-run phase 3 after editing aggregator code: just run the relevant module.
- Re-run phase 4 after any of the above: cheap, deterministic.

## Files written by the pipeline (gitignored)
- `data/posts.jsonl` — flattened source
- `data/slices/` — sliced posts.jsonl for parallel extraction
- `data/extracted/` — one JSON per post (912 files)
- `data/failed/` — extractions that failed twice (review by hand)
- `data/extraction_log.jsonl` — per-post processing log
- `data/themes.json`, `data/forums.json`, `data/students.json`, `data/overview.json`, `data/name_map.json` — aggregator outputs
- `dashboard/data/*.json` — copied/transformed for the dashboard

## See also
- Spec: `docs/superpowers/specs/2026-05-08-student-ugc-insights-design.md`
- Plan: `docs/superpowers/plans/2026-05-08-student-ugc-pipeline.md`
- Runbook (LLM phases): `insights/runbook.md`
