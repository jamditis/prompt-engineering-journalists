# Student UGC dashboard implementation plan

> **Reference spec:** `docs/superpowers/specs/2026-05-08-student-ugc-dashboard-design.md`. The spec is the source of truth for visual design, copy, and architecture. This plan covers task ordering, file boundaries, and acceptance per task.

**Goal:** Build a static, no-build, mobile-responsive dashboard at `2026-student-UGC/insights/dashboard/` that reads the seven JSON files in `data/` and renders eight views.

**Architecture:** Single-page hash-routed app. Plain HTML + CSS + ES modules. MiniSearch loaded from esm.sh. Render-time anonymization. Auto-escaping HTML helper used everywhere — no direct assignment of HTML strings to elements.

**Tech stack:** HTML, CSS custom properties, ES modules, fetch, MiniSearch 6. No bundler.

**Working directory:** `2026-student-UGC/`

---

## File structure

```
insights/dashboard/
├── index.html
├── css/
│   ├── tokens.css      # color, type, spacing variables
│   ├── shell.css       # header, nav, layout
│   └── views.css       # all view-level styles, appended per task
├── js/
│   ├── app.js          # router + view loader
│   ├── data.js         # cached fetch helpers
│   ├── anonymize.js    # name_map + toggle
│   ├── format.js       # number/date helpers
│   ├── dom.js          # html`` tagged template + mount() helper
│   └── views/
│       ├── overview.js
│       ├── themes.js
│       ├── people.js
│       ├── skills.js
│       ├── forums.js
│       ├── students.js
│       ├── quotes.js
│       └── search.js
├── data/               # gitignored — already populated
└── README.md
```

---

## Conventions

- Sentence case for every visible string. Never title case.
- No AI-slop words. Apply on every label, button, heading.
- ES modules only.
- All real names go through `anonymize(name)` before render.
- All HTML rendering goes through the `html` tagged template + `mount` helper. Interpolated values auto-escaped. Wrap pre-built markup with `raw()` to inject as-is.
- Keep view modules under ~300 lines.
- Fetch each JSON once and cache in `data.js`.
- No `Co-Authored-By` trailers in commits.

---

## Tasks

### Task 1 — Scaffold (shell + helpers)

Create `index.html`, `css/tokens.css`, `css/shell.css`, `js/dom.js`, `js/data.js`, `js/anonymize.js`, `js/format.js`, `js/app.js`.

**Acceptance:** `python -m http.server` runs, header renders, nav links visible, clicking a link shows "Could not load this view" (views not built yet). No console errors except the dynamic-import 404 for missing view modules.

Commit: `feat(dashboard): scaffold static shell, router, and dom helpers`

### Task 2 — Shared view styles

Create `css/views.css` with reusable patterns: view-head, numbers-row, bar-list, chip, blockquote.quote, filter-row, two-pane, grid-2, grid-3, category-head, muted/tabular helpers.

Commit: `feat(dashboard): shared view styles`

### Task 3 — Overview view

`js/views/overview.js`. Lede sentence + four big numbers (posts/students/countries/languages) + posting timeline + top discussions + roles + countries + skill levels + sentiments/languages chips + top tools + top themes.

Append timeline-bars styles to views.css.

**Acceptance:** `#/overview` shows real numbers from `overview.json`. Timeline draws bars.

Commit: `feat(dashboard): overview view`

### Task 4 — Themes view

`js/views/themes.js`. 40 cards sorted by member_count desc. Click "Read" expands to show description, ai_summary (where present), and 2–3 sample quotes joined from `quotes.json`. Empty fields render as "no description yet" gracefully.

Append theme-card styles to views.css.

**Acceptance:** `#/themes` shows 40 cards. Clicking expands. Quotes appear with anonymized names.

Commit: `feat(dashboard): themes view`

### Task 5 — People view

`js/views/people.js`. Three subtabs (roles / countries / organizations) over `students.json`. Each row shows the value, count, dominant confidence tag, and an expand-to-list-students disclosure.

Append subtabs/dim-row styles.

**Acceptance:** `#/people` defaults to roles. Subtabs switch. Expand reveals student list with anonymization.

Commit: `feat(dashboard): people view`

### Task 6 — Skills view

`js/views/skills.js`. 100% stacked bar (beginner/intermediate/advanced). Top tools across cohort. Per-skill-level top themes (3-up grid).

Append stack-bar/legend styles.

**Acceptance:** `#/skills` renders. Stacked-bar segments sum to total students.

Commit: `feat(dashboard): skills view`

### Task 7 — Forums view

`js/views/forums.js`. 21 forums grouped by category (course-ops, m1-m4 discussion, m1-m4 exercise, final). Each forum: name, post count, top themes/tools/challenges as chips, 2 standout quotes.

Append forum-grid/forum-card/pill-block styles.

**Acceptance:** `#/forums` renders all 21 forums grouped under category headers.

Commit: `feat(dashboard): forums view`

### Task 8 — Students view

`js/views/students.js`. Two-pane (list / detail). Filters: role, country, skill, module active, free-text. Sort by post_count desc. Detail shows themes, beat, project_ideas, tools_mentioned, challenges, post ids.

Append student-list/detail-head styles.

**Acceptance:** `#/students` filters work. Selecting a student updates the detail. Anonymization toggle flips names.

Commit: `feat(dashboard): students view`

### Task 9 — Quote bank

`js/views/quotes.js`. 531 quotes filtered by strength (default high), theme, language, sentiment, forum, free-text. Verbatim. Copy-to-clipboard with permalink. Cap rendering at 200 results.

**Acceptance:** `#/quotes` defaults to high-strength. Filters narrow results. Copy button copies verbatim text plus a permalink footnote.

Commit: `feat(dashboard): quote bank view`

### Task 10 — Search view

`js/views/search.js`. Lazy-load MiniSearch and `search-docs.json` on view open. Build index. Search across `text`, `author_name`, `forum_name`, `discussion_subject`. Forum + language filters. Highlight terms with `<mark>`. Cap rendering at 60 hits.

Append search-hit + mark styles.

**Acceptance:** `#/search` shows "Loading index…" then "912 posts indexed". Searching for `claude code` returns hits.

Commit: `feat(dashboard): search view with MiniSearch`

### Task 11 — README, mobile QA, final commit

Write `insights/dashboard/README.md` (how to run, layout, name handling, regen, supported browsers). Smoke-test all eight routes. Resize to 360px and confirm responsive layout. Toggle anonymization in students/quotes/overview-top-discussions and confirm names flip. No console errors.

Commit: `docs(dashboard): README and run instructions`

---

## Acceptance for the whole build

- `python -m http.server 8765` from `insights/dashboard/` serves the dashboard.
- Each of the eight routes renders with no console errors.
- The anonymization toggle flips every visible name (Students, Quotes, Overview top discussions if any).
- Layout collapses cleanly at 720px.
- No commit contains a `Co-Authored-By` trailer.
- No student PII committed to git (the dashboard reads gitignored data; commits contain only renderer code).
