# Project log: Advanced prompt engineering for journalists MOOC

## Project overview

5-week MOOC for the Knight Center for Journalism at UT Austin. Sequel to Prompt Engineering 101 for Journalists. Instructor: Joe Amditis, Center for Cooperative Media, Montclair State University.

The course moves journalists from web-based AI chat interfaces to terminal CLI tools. Each module extends a concept from the 101 course: web prompting to CLI, typing to voice, one-off prompts to reusable skills, no-code automation to scripted pipelines, understanding AI to building with agents and RAG.

## Session history

### 2025-01-15 — Initial commit

- Created full course structure: 5 modules + intro + final project
- All 8 components per module (orientation, midweek, end-of-week, readings, optional resources, exercise, discussion forums, quiz)
- Supporting resources: templates, example files, scripts, MCP configs
- GitHub Pages site with cyberpunk theme

### 2026-02-09 — Syllabus overhaul and content strengthening

**Context:** Reviewed the current repo against the 101 course materials (in zip file), the instructor's GitHub repos (claude-skills-journalism, tools, audiobash, yap, scrapefruit-cli, rosen-scraper), and identified gaps.

**Placeholder fixes:**
- Replaced 3 hallucinated article titles in Module 5 readings with real articles (Axios on WaPo Haystacker, Nieman Lab on NYT Echo, Geneea on RAG for newsrooms)
- Fixed Module 3 exercise git clone URL from `[instructor-repo]` to `jamditis`
- Replaced 9 `[Instructor name]` placeholders across midweek/end-of-week messages
- Fixed `[DATE]` placeholders in Module 5 discussion forums and exercise
- Replaced vague Benedict Evans link with specific article URL
- Updated Reuters Institute, Jay Rosen archive, and Geneea references in Module 5 optional resources

**Module 1 — CLI principles:**
- Reframed around programmatic control vs. interactive web interfaces
- Added "work where your files live" principle
- Connected explicitly to 101 course
- Addressed terminal anxiety directly

**Module 2 — Voice interaction principles:**
- Added raw mode vs. agent mode as core concept (two cognitive modes)
- Added privacy gradient section (OS dictation, local models, cloud APIs)
- Added custom vocabulary for beat reporters
- Framed voice as different thinking mode, not just input method
- AudioBash featured as recommended option; Yap removed (abandoned project)

**Module 3 — Skills/hooks principles:**
- Added maturity progression: ad-hoc prompts, saved prompts, skills, hooks, plugins
- New section on hooks as non-blocking editorial quality checks
- New section on CLAUDE.md as project memory with "deletion test"
- Updated exercise with plugin installation (Option A) and manual fallback (Option B)
- Updated skill count from 14 to 36 skills + 13 hooks

**Module 4 — Pipeline principles:**
- Connected to 101 course (no-code automation to scripted pipelines)
- Added Unix philosophy applied to AI
- Added cost-conscious AI operations principle
- Added checkpoint/resume and rate limiting
- Added scrapefruit-cli and tools repo as resources

**Module 5 — RAG/agent principles:**
- Added parametric vs. grounded knowledge distinction
- Added source attribution preservation through retrieval
- Human-in-the-loop framed as non-optional
- MCP framed as bridge between AI and data
- Referenced Jay Rosen Digital Archive as real-world example

**Syllabus and welcome message:**
- Course description now frames 101-to-advanced progression
- Module descriptions updated with conceptual framing
- Learning objectives sharpened
- Added "Course repositories" section with all GitHub repos

**File naming:**
- Removed `- CONTENT` suffix from 6 Module 1 files
- Removed `- Custom Skills` suffix from 6 Module 3 files
- All modules now follow `Module N_ Component Name.md` pattern

**Decisions made:**
- Yap excluded from course (abandoned project)
- Tools referenced as examples/options, not requirements — principles matter more than specific tools
- Hallucinated article references replaced with real articles on the same topics
- Module 3 exercise updated to plugin installation as primary method

## Current status

- All 5 modules complete with strengthened content
- All placeholder URLs replaced with real links
- File naming normalized
- Syllabus and welcome message updated
- CLAUDE.md updated

## Key files

- `Introduction Module/Syllabus.md` — Course syllabus with weekly schedule and grading
- `Introduction Module/Welcome Message.md` — Student-facing course introduction
- `Module N/Module N_ *.md` — 8 components per module
- `Final Project/` — Guidelines, proposal template, example projects
- `Resources/` — Example files, scripts, skills, MCP configs
- `docs/` — GitHub Pages course website
- `CLAUDE.md` — Project instructions for Claude Code
- `2025 materials-last year.zip` — Previous 101 course materials (reference)

## Dependencies

- Node.js 20+
- Claude Code, Gemini CLI, or Aider
- GitHub repos: jamditis/claude-skills-journalism, jamditis/tools, jamditis/audiobash, jamditis/scrapefruit-cli

## Future enhancements

- Convert markdown to .docx for Knight Center LMS upload
- Set up ftp-upload folder with final deliverables
- Verify all external URLs are still live
- Record video lectures referenced in orientation messages
- Create exercise solution keys for grading
