# Student UGC dashboard

Read-only static dashboard over the Plan 1 extraction outputs. Eight views, no build step, no backend, no API keys. Reads the seven JSON files in `data/` (gitignored — produced by the insights pipeline in the parent directory).

## Run it

From this folder:

    python -m http.server 9876

Open http://localhost:9876/. The default route is `#/overview`. Any free port is fine — the example above avoids the AudioBash-occupied 8765.

## Views

- `#/overview` — cohort numbers, posting timeline, role and country breakdowns, top tools, top discussions
- `#/themes` — 40 themes (canonical + emergent), expandable for sample quotes
- `#/people` — three subtabs: roles, countries, organizations
- `#/skills` — beginner/intermediate/advanced split, per-level top themes, top tools cohort-wide
- `#/forums` — 21 forums grouped by week
- `#/students` — filterable list, detail panel
- `#/quotes` — 531 verbatim lines with strength/theme/language/sentiment/forum filters
- `#/search` — MiniSearch over all 912 posts (lazy-loads on first open)

## Names

Names are mapped to `Student NNNN` by default. The header has a "Show real names" toggle. The toggle never modifies the JSON files — it switches a runtime flag. State is per-browser via `localStorage`.

The repo is public and the `data/` directory is gitignored. If you take screenshots with names visible, do not share them externally.

## File layout

```
index.html              — single page, hash-routed
css/tokens.css          — color, type, spacing tokens
css/shell.css           — header, nav, layout
css/views.css           — view-level styles
js/app.js               — router and view loader
js/data.js              — fetch + cache for the seven JSONs
js/anonymize.js         — name-map lookup and toggle wiring
js/format.js            — number/date/percent helpers
js/dom.js               — html`` tagged template + mount() — auto-escapes interpolated values
js/views/*.js           — one module per view
data/                   — gitignored output of the insights pipeline
```

## Regenerating the data

Re-run the insights pipeline (see `../README.md` and `../runbook.md`). The dashboard will pick up the new files on the next browser refresh.

## Deferred work the dashboard handles gracefully

- **Forum narratives** are empty for all 21 forums (Phase 3b not yet run). Each forum card shows "Narrative pending" plus the structural rollups and standout quotes.
- **Student profile narratives** are empty for the 108 multi-post students (Phase 3c not yet run). Detail panels show "Profile narrative pending" plus the structured fields.
- The student detail panel also doesn't show `tools_mentioned`, `project_ideas`, or `challenges` — those exist per-post but weren't aggregated into `students.json`. They'd require an extra aggregation pass over `data/extracted/*.json`.

## Browsers

Tested in Chrome and Firefox on Windows. Mobile breakpoint at 720px — single column, hamburger nav, two-pane Students view collapses to list-then-detail.
