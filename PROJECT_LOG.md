# Project log: Advanced prompt engineering for journalists MOOC

## Project overview

5-week MOOC for the Knight Center for Journalism at UT Austin. Sequel to Prompt Engineering 101 for Journalists. Instructor: Joe Amditis, Center for Cooperative Media, Montclair State University.

The course moves journalists from web-based AI chat interfaces to terminal CLI tools. Each module extends a concept from the 101 course: web prompting to CLI, typing context every time to writing it once in a file, one-off prompts to reusable skills, no-code automation to scripted pipelines, understanding AI to building with agents and RAG.

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

### 2026-02-09 — Module 2 curriculum replacement

**Context:** Module 2 previously taught voice input and AudioBash. This content was a detour — it didn't feed into Modules 3-5 and broke the skill-building chain. After Module 1 (install CLI tools, first prompt), students jumped to Module 3 (skills and plugins) with no module where they actually used the tools for real journalism work.

**What changed:**

- Replaced Module 2 "Voice-controlled AI" with "Prompting with files and project context"
- New module teaches context files (CLAUDE.md, GEMINI.md, AGENTS.md), the deletion test, and file-based document processing
- Created 5 sample journalism documents in `Resources/examples/beat-project/` for the exercise (press release, council minutes, interview notes, tip email, sample CLAUDE.md)
- Exercise has students process the same documents with and without a context file, then compare results

**New course progression:**
1. Install the tools (Module 1)
2. Use the tools effectively — files and persistent context (Module 2, NEW)
3. Make your work reusable — skills, hooks, plugins (Module 3)
4. Chain tools into pipelines (Module 4)
5. Connect tools to external data — MCP, RAG (Module 5)

**Files rewritten (8):**
- All 8 files in `Module 2/` — complete replacement

**Files updated (6):**
- `Introduction Module/Syllabus.md` — Module 2 description, learning objectives, schedule summary, grading, course repositories (removed AudioBash)
- `CLAUDE.md` — Structure comment, key repos (removed AudioBash), tools covered (replaced voice with context files), 101-to-advanced mapping
- `README.md` — Module 2 table row and "what you'll learn" bullet
- `Introduction Module/Course Requirements.md` — Hardware recommendations (removed microphone/GPU, updated for file processing)
- `docs/quick-reference.md` — Replaced "Voice transcription setup" section with "Project context file setup" section
- `Module 3/Module 3_ Orientation Message.md` — Removed "CLAUDE.md as project memory" section (now in Module 2), added bridge sentence referencing Module 2

**Files created (5):**
- `Resources/examples/beat-project/press-release-park-closure.md`
- `Resources/examples/beat-project/council-minutes-excerpt.md`
- `Resources/examples/beat-project/interview-notes-martinez.md`
- `Resources/examples/beat-project/tip-email.md`
- `Resources/examples/beat-project/sample-claude-md.md`

**Files unchanged (confirmed no updates needed):**
- `Module 1/Module 1_ End of the Week Message.md` — Already previews the new Module 2 content correctly
- Module 3 exercise, Modules 4-5, Final Project — No voice/AudioBash references

**Decisions made:**
- Deletion test moved from Module 3 to Module 2 (where it fits better as part of writing context files)
- AudioBash removed from course repositories in both syllabus and CLAUDE.md
- Voice content fully removed — no partial references retained
- Sample documents form a coherent narrative (Riverside Park closure in Greenfield) to make the exercise feel like real beat reporting

## Current status

- All 5 modules complete with strengthened content
- Module 2 replaced: voice → files and project context
- All placeholder URLs replaced with real links
- File naming normalized
- Syllabus, welcome message, and CLAUDE.md updated
- Sample journalism documents created for Module 2 exercise

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
- GitHub repos: jamditis/claude-skills-journalism, jamditis/tools, jamditis/scrapefruit-cli

## Future enhancements

- Convert markdown to .docx for Knight Center LMS upload
- Set up ftp-upload folder with final deliverables
- Verify all external URLs are still live
- Record video lectures referenced in orientation messages
- Create exercise solution keys for grading
