# Student UGC insights dashboard — design spec

**Date:** 2026-05-08
**Author:** Joe Amditis (with Claude Code)
**Project root:** `2026-student-UGC/insights/`

## Overview

A static HTML dashboard that turns the spring 2026 cohort's forum posts (594 threads, 912 posts, ~258K tokens of content from the Knight Center course "Advanced prompt engineering for journalists") into something Joe can browse, search, quote, and lift material from for talks, articles, classes, and research. The corpus already lives at `2026-student-UGC/{forum}/{discussion}.{json,md}`. This project adds an `insights/` sibling directory that runs an LLM-driven extraction pass over every post, computes cross-cutting summaries (themes, per-forum narratives, per-student profiles, cohort rollups), and renders an 8-view static site.

No external API keys, no per-token billing — extraction runs through Claude Code's existing harness via parallel subagents on Joe's subscription. The dashboard itself is zero-build vanilla HTML + ES modules with self-hosted fonts, served from any static file host or a local Python server.

## Goals

- Surface what students are actually working on (project ideas, themes, problems they're trying to solve), in a form Joe can read, filter, and quote.
- Surface who is in the cohort (roles, jobs, orgs, countries, beats) without needing to grep raw JSON.
- Surface the cohort's skill levels and pain points to inform the next iteration of the course.
- Produce attributable quotes Joe can drop into talks, articles, and decks with one click.
- Stay shareable: anonymization is built in and on by default, so nothing leaks accidentally during a screenshare.

## Non-goals

- Not a live forum, not a publishing platform, not a tool for students.
- Not real-time — the dashboard reads pre-computed JSON; you re-run the pipeline when you want fresh analysis.
- Not multi-cohort. Scoped to spring 2026. Future cohorts can run the same pipeline against new exports.
- Not a RAG/Q&A tool. Search is lexical. If we want semantic Q&A later, that's a separate project.
- No API key management, no token costing, no external service dependencies at runtime.

## Architecture

Five phases, each writing to disk so any phase can be re-run independently:

1. **Flatten** (Python, no LLM) — walks the source corpus, emits one JSON line per post with stable fields.
2. **Extract per-post** (subagent fan-out, LLM) — 10 parallel Claude Code subagents read slices of the flattened corpus and write structured records.
3. **Aggregate** (main session, LLM + deterministic) — themes clustering, per-forum narratives, per-student profiles, cohort rollups.
4. **Build** (Python, no LLM) — compiles per-view JSON files the dashboard pages fetch.
5. **Serve** (any static file host) — vanilla HTML + ES modules, no bundler.

Every phase is checkpointed at the file system. Phase 2 is resumable: if a post's extraction file exists, it's skipped on re-run.

## File layout

```
insights/
├── README.md                  # how to run extraction + build
├── runbook.md                 # the Claude Code "script" Joe executes in-session
├── flatten.py                 # phase 1
├── validate.py                # post-extraction validation
├── build.py                   # phase 4
├── prompts/
│   ├── per-post-extract.md
│   ├── theme-cluster.md
│   ├── forum-narrative.md
│   └── student-profile.md
├── data/
│   ├── posts.jsonl            # flattened source (phase 1 output)
│   ├── extracted/             # one JSON per post (phase 2 output, resumable)
│   ├── failed/                # extractions that failed twice (manual review)
│   ├── extraction_log.jsonl   # progress log
│   ├── validation_errors.json
│   ├── students.json          # phase 3 output
│   ├── themes.json
│   ├── forums.json
│   ├── overview.json
│   └── name_map.json          # real → pseudonym mapping (gitignored or local-only)
└── dashboard/
    ├── index.html             # overview / landing
    ├── themes.html
    ├── people.html
    ├── skills.html
    ├── forums.html
    ├── student.html           # ?id=…
    ├── quotes.html
    ├── search.html
    ├── assets/
    │   ├── styles.css
    │   ├── app.js             # shared logic: anon toggle, name-map, formatters
    │   ├── views/             # one ES module per view
    │   ├── fonts/             # self-hosted serif + sans + mono
    │   └── search-index.json  # built at compile time, MiniSearch
    └── data/                  # built JSON the pages fetch
```

## Phase 1: flatten

`flatten.py` walks every `{forum_id}_{slug}/*.json` under `2026-student-UGC/`, skips files starting with `_`, opens each, and emits one record per post in the `posts` array to `data/posts.jsonl`. Each record:

```json
{
  "post_id": "p000000",
  "forum_id": "00000",
  "forum_name": "Example forum name",
  "forum_slug": "example-forum-slug",
  "forum_category": "module-discussion",
  "discussion_id": "000000",
  "discussion_subject": "Example discussion subject",
  "post_index": 0,
  "is_thread_starter": true,
  "author_name": "Example Reporter",
  "author_url": "https://www.kccourses.org/user/view.php?id=000000&course=172",
  "posted_at": "2026-04-13T16:54:53-04:00",
  "content_text": "...",
  "permalink": "https://www.kccourses.org/mod/forum/discuss.php?d=000000#p000000",
  "language_guess": "en"
}
```

`forum_category` is computed from the slug pattern: `course-ops`, `module-discussion`, `weekly-exercise`, or `final-project`. `language_guess` uses a fast library like `langdetect` or `lingua-py`. Mechanical and deterministic — runs in seconds.

## Phase 2: per-post extraction

A runbook section in `runbook.md` instructs the main Claude Code session to dispatch 10 subagents (general-purpose), each with:

- A slice of `posts.jsonl` (e.g. agent 1 gets posts 0-91, agent 2 gets posts 92-183, …).
- The extraction prompt at `prompts/per-post-extract.md`.
- Instructions to write `data/extracted/{post_id}.json` for each post, skipping any post whose file already exists.
- Instructions to append a line to `data/extraction_log.jsonl` for each post processed.
- A retry-once policy on extractions that fail to parse or fail schema validation; on second failure, write to `data/failed/{post_id}.json` and continue.

### Per-post extraction schema

```json
{
  "post_id": "p000000",
  "role": "data journalist",
  "role_confidence": "stated|inferred|unknown",
  "org": "ProPublica",
  "org_confidence": "stated|inferred|unknown",
  "country": "United States",
  "country_confidence": "stated|inferred|unknown",
  "beat": ["data", "investigations", "courts"],
  "skill_level": "beginner|intermediate|advanced",
  "skill_signals": ["string", "..."],
  "tools_mentioned": ["Claude Code", "ChatGPT", "Gemini", "Copilot", "..."],
  "ai_use_cases": ["data analysis", "code generation", "transcription", "..."],
  "challenges": ["string", "..."],
  "project_ideas": ["string", "..."],
  "themes": ["coding-help", "context-management", "workflow-friction"],
  "theme_freeform": ["string"],
  "sentiment": "frustrated|curious|enthusiastic|reflective|skeptical|neutral",
  "is_question_for_instructor": false,
  "is_off_topic": false,
  "language": "en",
  "quotable_lines": [
    {"text": "...", "topic": "context-management", "strength": "high|medium"}
  ],
  "summary_one_line": "…"
}
```

### Confidence rules

Every inferential field carries a `_confidence` flag:

- `stated` — the post explicitly says it ("I'm a reporter at ProPublica").
- `inferred` — the post implies it ("I cover federal courts" → role=data journalist, beat=courts, both inferred).
- `unknown` — not derivable from the post alone.

The dashboard treats `inferred` values with a subtle visual marker (a thin underline or a small dot) so Joe knows which signals are hard data and which are LLM guesses. `unknown` values display as em dashes.

### Constrained vocabularies

To make aggregation clean, three fields use a closed vocabulary the model picks from:

- `themes` — about 30 canonical themes seeded from the course content (e.g. `coding-help`, `transcription`, `multilingual-workflows`, `fact-checking`, `data-analysis`, `scraping`, `cli-vs-web`, `cost-management`, `context-files`, `skills-and-hooks`, `subagents`, `pipelines`, `rag-and-grounding`). The model can also write to `theme_freeform` for things outside the list — these get clustered in phase 3.
- `sentiment` — fixed enum.
- `skill_level` — fixed enum.

`tools_mentioned`, `ai_use_cases`, `challenges`, `project_ideas`, and `beat` are free-form (clustered/aggregated downstream).

## Phase 3: aggregation

Four steps, run by the main session:

### 3a. Themes clustering → `themes.json`

Read all `theme_freeform` values across all posts. Send to Sonnet 4.6 with a prompt asking to: dedupe near-synonyms, group related items, propose 5-10 emergent themes that aren't already in the canonical list, and re-label posts that should have been tagged with one of the new emergent themes. Write final structure:

```json
[
  {
    "theme_id": "coding-help",
    "label": "AI for coding help",
    "description": "Students using AI to write, debug, or refactor code, mostly for data tasks.",
    "post_ids": ["p000000", "..."],
    "member_count": 47,
    "sample_quote_ids": ["p000000", "p000001", "..."],
    "ai_summary": "…",
    "is_emergent": false
  }
]
```

### 3b. Per-forum narratives → `forums.json`

For each of 21 forums, send all extracted records for that forum's posts to Sonnet 4.6 with a prompt that asks for:

- A 2-3 paragraph narrative summary of what students said in this forum.
- 5-7 key takeaways as bullet items.
- A list of standout quotes with `post_id` references (no need to repeat the text — it's in `posts.jsonl`).
- Frequency tables: top themes, top tools, top challenges within this forum.

```json
[
  {
    "forum_id": "32811",
    "forum_name": "M1: Discussion Forum 1: Your current AI workflow",
    "forum_slug": "m1-discussion-forum-1-your-current-ai-workflow",
    "forum_category": "module-discussion",
    "post_count": 102,
    "narrative": "…",
    "takeaways": ["…", "…"],
    "standout_quote_ids": ["p000000", "..."],
    "top_themes": [{"theme_id": "coding-help", "count": 28}, "..."],
    "top_tools": [{"tool": "Claude Code", "count": 41}, "..."],
    "top_challenges": [{"challenge": "context loss in long chats", "count": 14}, "..."]
  }
]
```

### 3c. Per-student profiles → `students.json`

Group posts by `author_name`. For students with 2+ posts, send their full set of extracted records to Sonnet 4.6 with a prompt that asks for:

- Consolidated role/org/country (cross-checked across posts; resolve disagreements by preferring `stated` over `inferred`, latest over earliest).
- Inferred beat/expertise areas as a deduplicated list.
- Themes they engaged with most.
- Evolution narrative across modules — does their tone or skill signal change between Module 1 and Module 4?
- 1-2 sentence profile summary.

For students with one post, copy the per-post extraction forward without an extra LLM call.

```json
[
  {
    "student_id": "stu_0042",
    "real_name": "Example Reporter",
    "post_count": 3,
    "post_ids": ["p000000", "..."],
    "modules_active": ["m1", "m2", "m4"],
    "role": "data journalist",
    "role_confidence": "inferred",
    "org": null,
    "country": "United States",
    "country_confidence": "inferred",
    "beat": ["data", "investigations"],
    "skill_level": "intermediate",
    "themes": ["coding-help", "context-management"],
    "evolution": "…",
    "profile_summary": "…"
  }
]
```

`student_id` is a stable hash of `real_name + author_url`. Used as the URL parameter on `student.html?id=stu_0042` and as the pseudonym key in `name_map.json`.

### 3d. Cohort rollups → `overview.json`

No LLM. Pure aggregation over `extracted/*.json` and `students.json`:

- Cohort scale: total students, total posts, modules covered, date range, country count, language count.
- Distributions: by role, country, skill level, language, sentiment, module activity.
- Top 20 tools, top 20 themes (with member counts).
- Posting timeline: posts-per-day, colored by module (derivable from `posted_at` and `forum_category`).
- Response density: which discussions got replies vs which were one-offs.
- Top 10 most-discussed threads (by post count).

This drives every chart on the overview page.

## Dashboard views

Eight views, each its own HTML file. All share `assets/styles.css`, `assets/app.js` (anon toggle, name-map, formatters, filter primitives), and the same top bar.

### 1. Overview (`index.html`)

Reads `overview.json`. Hero band with cohort-scale numbers (students, posts, countries, modules covered, date range). Below: posting timeline (line chart by day, colored by module), geographic spread (small map or sorted country bars), role distribution (horizontal bars), skill-level breakdown, top 20 tools (bar), top 20 themes (bar), 6 "standout discussions" cards (most-replied threads, links to per-forum view). Each panel is screenshot-able for decks.

### 2. Themes & project ideas (`themes.html`)

Reads `themes.json`. Two-column layout. Left: theme list with member counts, sortable by frequency or alphabetical. Right: when a theme is selected, shows AI-written summary, participating students (anonymized cards), 4-6 sample quotes with permalinks, project-ideas subsection listing concrete projects within that theme. The page Joe opens when he's writing a talk and needs "what are people actually working on" material.

### 3. Roles & affiliations (`people.html`)

Reads `students.json` + slices of `overview.json`. Filterable grid of student cards. Filters: role, country, skill level, language, beat. Each card: anonymized handle (or real name when toggled), role/org/country with confidence flags, post count, modules they participated in, top 3 themes. Click → `student.html?id=…`.

### 4. Skills & challenges (`skills.html`)

Reads `overview.json` + `challenges.json` slice. Three sections stacked: skill-level distribution and how it changes module-to-module, top challenges/pain points with member counts and example quotes, top tools paired with how each is being used. For shaping the next iteration of the course.

### 5. Per-forum deep dive (`forums.html`)

Reads `forums.json`. Sidebar lists all 21 forums grouped by category (course-ops / module-discussion / weekly-exercise / final-project). Main panel: AI narrative summary, key takeaways list, standout quotes, theme/tool/challenge frequency for that forum, filterable post list. Each post row links to its source `.md` file in the parent corpus directory (relative path).

### 6. Per-student profile (`student.html?id=…`)

Reads `students.json`. Header with consolidated role/org/country and confidence flags. Sections: AI-written profile paragraph, all posts in chronological order across all forums, theme tags, evolution narrative, quotable lines pulled out. The "click an anonymized card and see who they really are" page.

### 7. Quote bank (`quotes.html`)

Reads a flattened `quotes.json` (built in phase 4 from per-post `quotable_lines`). Card grid of quotes, filterable by theme, role, sentiment, forum, language, strength (`high`/`medium`). Each card: quote text, attribution (anon or real), forum context, permalink, "copy with attribution" button. One click to drop into a deck.

### 8. Search (`search.html`)

Reads `assets/search-index.json` (MiniSearch index built at compile time over `posts.jsonl`). Plain text box. Returns ranked posts with snippet highlights. Filters: forum, language, role, theme, skill level, sentiment. Each result links to the per-student profile and the source `.md`. Lexical only — no embeddings, no server.

## Visual design

Editorial archive aesthetic. The constraints below are anti-defaults — they exist to keep the dashboard from reading as another generic AI-generated front-end.

### Type-driven hierarchy, not cards-in-grids

Most AI-generated dashboards default to evenly-sized cards with rounded corners and soft shadows. The editorial alternative leans on type weight, scale, and rhythm. A serif headline at 48px next to a sans-serif annotation at 12px does more visual work than another bordered card. Charts sit inline with prose where they make sense — a sentence ending in "…across these 18 countries:" followed by the chart, not a chart in a tile labeled "Country Distribution." Pull quotes get the magazine treatment: large, set apart, attribution as a small caps line beneath.

### Asymmetric layouts where they help

The themes and forums pages have natural sidebar/main structures. The overview, per-student, and quote bank pages break out of the grid: narrow text columns next to wide chart bands, marginalia (sample quotes, definitions, glossary) hanging in the gutter on desktop, collapsing inline on mobile. Body text never edge-to-edge — max measure ~70ch.

### Custom data viz, not Chart.js defaults

Bar charts, timelines, and donuts are needed but the defaults from Chart.js or Recharts make every page feel like the same SaaS product. Plan: D3 for the charts that benefit from it (timeline, geographic, sankey for module-to-module skill flow). Inline SVG for everything simple — small bars, sparklines, dot plots. A consistent dot/bar/rule vocabulary across views so it reads as a single system.

### Color and material

- Background: off-white (`#fafaf6`).
- Ink: near-black (`#111`).
- One structural accent: deep red (`#b3261e` or a desaturated brick) used sparingly for interactive states and key data emphasis.
- One subtle wash for callouts: warm grey (`#f1ede4`).
- No gradients. No glassy effects. No purple-to-blue blur. Borders are 1px hairlines, never soft shadows. Section dividers are simple rules or old-print ornaments used consistently.

### Type stack (self-hosted, in `/assets/fonts/`)

- Serif (headlines, pull quotes): Source Serif 4 or EB Garamond.
- Sans (UI, body): Inter or IBM Plex Sans.
- Mono (permalinks, post-ids, attributions): JetBrains Mono or IBM Plex Mono.
- Default browser fonts as fallback so the dashboard works offline without flashing.

### Responsive strategy

Mobile-first CSS, no framework. Three breakpoints:

- Phone (<= 640px): single column, sidebars collapse to top nav, charts use full width, no marginalia.
- Tablet (641-1024px): two columns where it makes sense, marginalia collapses inline.
- Desktop (>1024px): full asymmetric layouts, marginalia in gutters.

Every chart has a mobile variant. The geographic chart on desktop is a small map; on mobile it's a sorted bar list. Filters become a slide-in drawer on mobile, sticky sidebar on desktop. The anon toggle and search live in a top bar that becomes a hamburger only when truly needed.

### Anti-generic checklist

Things to deliberately avoid because they're the giveaways:

- No "Welcome to your dashboard" copy.
- No emoji icons in headers or section titles.
- No purple-to-blue gradients.
- No "Powered by AI" or sparkle/shimmer badges.
- No identical card grids on every page.
- No chart-with-title-in-a-box-with-subtitle pattern repeated 12 times.
- No center-aligned hero with three-up feature blocks below.
- No stock illustration art.
- No "Generated on [date]" footer slug.
- No tooltips that just repeat the visible label.
- No "Show all 47 →" links that lead to a modal.

The frontend-design skill (`frontend-design:frontend-design`) is built for distinctive, polished, anti-generic UI. Implementation will invoke it; this spec encodes the constraints it should push against.

## Anonymization

Anonymized by default. Render-time anonymization, not pipeline-time, so the data files retain real names for Joe's own work and the toggle remains useful.

### Mechanism

1. Phase 3c writes `data/name_map.json` — a JSON object mapping `real_name` → `pseudonym` (e.g. `"Example Reporter" → "Student 0042"`). Pseudonyms are deterministic and stable across re-runs (sorted real names, indexed).
2. The dashboard's `app.js` loads `name_map.json` once. A single `displayName(realName)` function reads `localStorage.getItem("anonymize")` (default `"true"`) and returns either the pseudonym or the real name.
3. Every place a name is rendered goes through `displayName`. Lint rule at code review: any literal `author_name` in the HTML/JS is a bug.
4. The anon toggle in the top bar flips `localStorage` and re-renders the current view.

### Validation checks before declaring done

- Load each page with anon mode on. Regex-scan rendered DOM for any of the real names. Should find zero.
- Network tab: confirm no JSON file fetched at runtime contains real names when anon mode is on. (The name-map is the only JSON with names; in anon mode, the map is loaded but only the pseudonym side is used by `displayName`.)
- Per-student URLs use `student_id`, never `author_name`, so URLs don't leak names.

## Error handling and resumability

### Phase 2 (extraction)

- Each post's extraction is its own file. Skip-if-exists makes re-runs cheap.
- Failed extractions retry once with a stricter prompt. Second failures go to `data/failed/{post_id}.json` with the error reason. The pipeline continues — Joe reviews failures at the end.
- Subagent crashes are recoverable: the next run picks up where the file system left off. No central state to corrupt.
- Progress is logged to `data/extraction_log.jsonl` (one line per post processed, with timestamp, duration, success/failure).

### Phase 3 (aggregation)

- Deterministic operations re-run cheaply (under a minute). Always re-run all four after any extraction change.
- LLM calls (themes clustering, forum narratives, student profiles) write atomically — write to `.tmp`, rename on success.
- Failures here halt the phase; Joe re-runs after fixing.

### Phase 1 and 4 (flatten, build)

- Pure Python, deterministic. Failures mean malformed source data — investigate, don't paper over.

### Validation

`validate.py` runs after extraction, before aggregation:

- Every post in `posts.jsonl` has an `extracted/{post_id}.json`.
- Every extraction file parses as JSON.
- Every required field is present.
- `_confidence` flags are valid enum values.
- `language` matches `language_guess` from phase 1 (warning, not failure, on mismatch).
- No extraction file references a `post_id` that doesn't exist in `posts.jsonl`.
- All errors logged to `data/validation_errors.json`. Pipeline halts if any.

## Verification before "done"

Before declaring the dashboard complete, run all of the following and confirm in writing:

- Hit each of the 8 pages on phone (~375px), tablet (~800px), and desktop (~1280px) widths. Confirm layout adapts and nothing overflows.
- Confirm the anon toggle works on every page including the per-student profile.
- Spot-check 5 random posts: open the source `.md`, then find that post's record in `extracted/`, confirm the extraction agrees with what the post actually says (flag false-positive `stated` confidence, check skill level inference is reasonable).
- Confirm "click a quote → see its source" path resolves on every page that has quotes.
- Confirm search returns results for 5 representative queries.
- Confirm the network tab shows no real names in any fetched JSON when anon mode is on.

Type checking and code passing tests does not equal feature correctness — manual verification on real data is required.

## How to run

```sh
# from the working directory root: 2026-student-UGC/

# Phase 1: flatten (~10 sec)
python insights/flatten.py

# Phase 2: extract (~10-20 min wall-clock with 10 subagents)
# Inside Claude Code: "run the extraction phase from insights/runbook.md"

# Phase 2.5: validate
python insights/validate.py

# Phase 3: aggregate (~5-10 min)
# Inside Claude Code: "run the aggregation phase from insights/runbook.md"

# Phase 4: build (~30 sec)
python insights/build.py

# Phase 5: serve
python -m http.server 8000 --directory insights/dashboard
# open http://localhost:8000
```

Re-running phase 2 after editing the extraction prompt: delete affected files in `data/extracted/` and re-run — cached files get skipped.

## Open questions deliberately deferred

- **Multi-cohort support.** This spec is single-cohort. Adding cohorts later means: cohort-aware paths in the data dir, cohort selector in the top bar, cohort-aware aggregation. Out of scope for now.
- **Semantic search / RAG.** Lexical search is what we're building. If "ask the corpus a question" becomes valuable, that's a follow-up.
- **Live re-extraction from inside the dashboard.** The dashboard reads pre-built JSON. If Joe wants to tweak prompts and see results without leaving the browser, that's a different architecture (interactive Streamlit app).
- **Sharing publicly.** Anonymization works for safe sharing, but we haven't designed for hosting on a public URL. If that's wanted later, add a build flag that strips `name_map.json` from the deployed bundle.
- **Tracking changes across cohort iterations.** Could be valuable for "did Module 3 land better than last time?" — would need historical extracts and a comparison view. Future work.
