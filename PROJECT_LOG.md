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

### 2026-02-09 — Add "Understanding GitHub" section to Module 2

**Context:** Module 3 requires students to install skills from GitHub (git clone or /install-github-plugin), but Git was listed as "optional" in Course Requirements. Students who skip Git would hit a wall in Week 3. GitHub is also where CLI tools, skills, and plugins live. Adding Git/GitHub to Module 2 bridges the gap — CLAUDE.md files live in repos, and this is where students learn that.

**Design decision:** Students use their CLI tool (Claude Code, Gemini CLI, etc.) to run Git commands, not the terminal directly. The focus is on understanding concepts (repos, commits, cloning) so they know what to ask for, not memorizing commands.

**Module 2 files updated (6):**
- `Module 2_ Orientation Message.md` — Added "Version control and GitHub" section between "Working with files" and "Learning objectives." Explains Git/GitHub concepts, emphasizes CLI tool handles commands. Added learning objective #6. Updated "This week's work" counts.
- `Module 2_ Exercise.md` — Added Part 2 (initialize Git repo via CLI tool). Students ask Claude Code to init/commit, then learn what happened behind the scenes. Renumbered Parts 3-7. Added optional Part 7 (push to GitHub via CLI tool). Fixed all cross-references.
- `Module 2_ Readings.md` — Added two required readings: GitHub "Hello World" guide and Jonathan Stray on version control for journalists.
- `Module 2_ Quiz.md` — Changed from 5 to 6 questions. Added Question 6 on what cloning a repository means.
- `Module 2_ Midweek Message.md` — Added FAQ entry "I've never used Git before — do I need to learn all of it?" Updated exercise reminder steps.
- `Module 2_ End of the Week Message.md` — Added Git to "What you learned" list. Updated Module 3 preview to mention cloning the journalism skills library.

**Course docs updated (3):**
- `Introduction Module/Syllabus.md` — Added Git topics to Module 2 section. Expanded learning objective #2. Updated activities list.
- `Introduction Module/Course Requirements.md` — Git changed from optional to required. Added install instructions, version check, package manager options. Added "Install Git" as step 3 in pre-Module 1 checklist.
- `docs/quick-reference.md` — Added "Git basics" section with concepts table, "what to ask your CLI tool" table, and install commands.

**Files not changed (confirmed no updates needed):**
- `Module 2_ Optional Resources.md` — Required readings cover Git basics sufficiently
- `Module 2_ Discussion Forums.md` — Q3 already discusses sharing context files; Git is a natural answer
- Module 1, Module 3-5, Final Project — No changes needed

### 2026-02-18 — Quiz standardization and bug fixes

**Context:** Audited all module files against SYLLABUS.md and COURSE_CHECKLIST.md requirements. Found one bug and format inconsistencies across all quizzes.

**Bug fixed:**
- `Introduction Module/Course Requirements.md` — Gemini CLI setup section had wrong npm install command (`@anthropic-ai/claude-code` instead of `@google/gemini-cli`)

**Quiz standardization (all modules now use Module 1/5 format):**
- Standard format: 5 questions, letter options (A-D), `**Correct answer:** X`, `**Explanation:**` per question
- Module 2: Removed Q6 (Git/cloning question added 2026-02-09); trimmed from 6 to 5 to match COURSE_CHECKLIST. Updated header. Converted from asterisk format to standard format. Added explanations.
- Module 3: Changed `**Correct answer: B**` → `**Correct answer:** B`, changed `*Explanation:*` → `**Explanation:**`. Added expanded explanations.
- Module 4: Removed asterisk-style answer marking and separate answer key. Added `**Correct answer:**` and `**Explanation:**` per question. Wrote explanations for all 5 questions.
- Modules 1 and 5 already used the standard format — no changes needed.

**Ethan Mollick readings and framework:**
- Added Mollick's "A guide to which AI to use in the agentic era" (One Useful Thing, Feb 17, 2026) as the first required reading in Module 1 — the conceptual foundation read before installing tools
- Source article saved in `Resources/readings/` as HTML
- Updated Module 1 Orientation Message to introduce Mollick's models/apps/harnesses framework as the conceptual anchor for why CLI tools matter
- Updated Introduction Module/Welcome Message to add the "from conversing to delegating" framing that runs through all five modules
- Updated CLAUDE.md with Mollick's framework as course philosophy section for future content development

### 2026-02-18 — Video script outlines (v2 — correct framing)

Created `VIDEO_SCRIPTS.md` with outlines for all 12 videos. First version was revised to correct a fundamental framing error: early outlines treated the videos as terminal/CLI tutorials. Correct framing:

- The course teaches how to work WITH LLMs (Claude Code, Gemini CLI, Codex) — the terminal is just where those interfaces live
- Demo videos show asking the LLM to do things in plain English, not students typing terminal commands
- GitHub operations are done by asking the LLM, not by learning git syntax
- The idea → GitHub → prototype → testing + security → live + shareable arc is the connecting spine through all five modules

**The arc as mapped to modules:**
- Module 1: Idea — install the tools, understand what's now possible
- Module 2: GitHub — scaffold the project, write context file, get into version control
- Module 3: Prototype — build first reusable skill
- Module 4: Testing + security — automate, test on real data, API key safety, security review
- Module 5: Live + shareable — MCP knowledge base, publish to GitHub

**The running project:** Demo videos use the same beat project (greenfield-beat) across all five modules — students see one project evolve from empty folder to published GitHub repo.

### 2026-02-18 — Context engineering framing, operational principles, crisis/recovery arc

**Context:** Audited project CLAUDE.md files and CHANGELOG.md files across all real projects (social-scraper, rosen-frontend, springfield, llm-advisor, scrapefruit, python-explorer, houseofjawn) to extract hard-won lessons from actual LLM-assisted development work. Interviewed instructor on course design decisions. Four key decisions made:

1. Use real failure stories from real projects as course teaching examples (not fictionalized, not generic)
2. Weave 8 operational principles throughout modules where they fit naturally — not siloed into one module
3. Module 4 demo includes a crisis/recovery moment — rate limit failure, diagnosis, fix
4. Shift mindset framing from "prompt engineering" to "context engineering" — name it explicitly in Module 2 and seed it in the Welcome Message

**The 8 operational principles and where they're woven in:**
- Version control, changelog: Module 1 (start from day one), Module 2 (CLAUDE.md as committed infrastructure)
- Tests/lints before full run: Module 4 (test small before running large — now demonstrated in video)
- Stop hooks / one-way door checks: Module 3 (hooks as editorial guardrails)
- Multi-platform testing → reframed as "test on known material" and placed in Module 3 (test new skills against documents you've already fact-checked before trusting them on live work)
- Error logging: Module 4 (ask Claude to audit the script)
- Code as infrastructure: Module 2 → Module 5 (CLAUDE.md first, then skills/hooks, then pipeline scripts, then MCP configs)
- Containerization: intentionally excluded — veers into software engineering/DevOps territory that's out of scope for a journalism-focused course

**Files updated (5):**
- `Module 2/Module 2_ Orientation Message.md` — Added "From prompt engineering to context engineering" section; strengthened CLAUDE.md-as-infrastructure in version control section; fixed quiz count from 6 to 5
- `Module 2/Module 2_ Exercise.md` — Added commit step and infrastructure framing to Part 4; added context engineering reflection prompt to submission
- `Introduction Module/Welcome Message.md` — Added context engineering seed paragraph after module progression list
- `VIDEO_SCRIPTS.md` — Module 4 Video 2 reworked with crisis/recovery arc (rate limit failure → diagnosis → fix → retest); Module 4 Video 1 updated to preview the failure in demo
- `PROJECT_LOG.md` — This entry

**Decisions made:**
- "Prompt engineering" vs. "context engineering": don't change the course title (Knight Center controls that), but name the shift explicitly in Module 2 and seed it in the Welcome Message
- Failure stories should name the actual project (e.g., "a batch processing project") without exposing private project details — give enough specificity to be believable, not enough to be identifiable
- Crisis/recovery in Module 4 Video 2 is rate limiting, not data loss — rate limiting is universal, recoverable, and teaches two lessons (test small, add delay/backoff)
- Commit messages should document what broke and how it was fixed — introduced as part of Module 4 video close

### 2026-02-18 — Error feedback loop, Module 4 reframe

**Context:** Added the paste-error-and-fix workflow as a named principle throughout the course. Module 4 orientation message still had terminal-skills framing in its intro and learning objectives — fixed.

**New principle added: the debugging loop**
- Copy the exact error (don't describe it, don't paraphrase) → paste it into the CLI session → ask what it means and how to fix it
- Works for: terminal errors, Python tracebacks, API error responses, browser dev console errors, screenshots of broken UI
- Framed as: your debugging collaborator is already there and already has context — use it first, not the forum
- Added to: Module 1 Orientation (plant it early), Module 4 Orientation (make it step 1 of getting stuck), VIDEO_SCRIPTS Module 1 Video 2 (closing point), VIDEO_SCRIPTS Module 4 Video 1 (principle), VIDEO_SCRIPTS Module 4 Video 2 (shown explicitly in crisis/recovery demo)

**Module 4 Orientation Message reframe:**
- Intro rewritten: "describe workflows, let the LLM build them" — removed "chain AI tools with other command-line utilities"
- "Unix philosophy" section replaced with "Describe the workflow, let the LLM build it" — keeps the stages concept, removes shell-syntax framing
- Learning objectives rewritten: removed "use piping," "write reusable shell scripts," "schedule cron jobs" — replaced with describe-workflow, test small, debug loop, security, cost-conscious practices

**Files updated (5):**
- `Module 1/Module 1_ Orientation Message.md` — Added "Show the tool what broke" section (error feedback loop, screenshots, multimodal debugging)
- `Module 4/Module 4_ Orientation Message.md` — Updated intro, replaced Unix philosophy section, rewrote learning objectives, updated "A note on getting stuck" to make paste-the-error step 1
- `VIDEO_SCRIPTS.md` — Module 1 Video 2 closing: "paste errors, don't close the session"; Module 4 Video 1: added principle note in multi-stage section; Module 4 Video 2: explicit paste-error scene in crisis/recovery arc

### 2026-02-18 — Module 3 hooks, stop hooks, custom skill exercise

**What changed:**

**Module 3 Orientation Message — Hooks section expanded:**
- Added notify vs. stop hooks distinction
- Added "one-way door" concept: stop hooks fire before irreversible actions (bulk delete, publish, push)
- Framed in journalism terms: the higher the stakes, the more friction you want
- Added 5th learning objective: write a simple custom skill

**Module 3 Exercise — two additions:**
- Part 1 now includes Step 4: explore a hook file (same conceptual pattern as exploring a skill file)
- New Part 3: Write your own skill — choose a beat-specific task, write the SKILL.md, apply deletion test, test it, commit it
- Current Part 3 (reflection) renumbered to Part 4
- Submission updated: custom skill file replaces "suggest a modification" (passive → active)
- Grading criteria updated to include custom skill (20%)
- Troubleshooting updated: paste-error first, then forum

**Files updated (2):**
- `Module 3/Module 3_ Orientation Message.md`
- `Module 3/Module 3_ Exercise.md`

### 2026-02-18 — Self-improvement loop and hard-won lessons format

**Context:** Reviewed officejawn CLAUDE.md (600+ line living document). Key observation: the file has a named "hard-won lessons" section with incident-named entries, a self-improvement loop protocol ("after any correction: document the lesson"), and writing style rules baked in. None of this was in the course. Module 2 was teaching "write a CLAUDE.md" without teaching "come back and update it."

**Module 2 Orientation — new section "Your CLAUDE.md will grow":**
- Added after the deletion test section
- Names the self-improvement loop explicitly: AI gets something wrong → correct it → add a rule → mistake doesn't recur
- Introduces "hard-won lessons" section format: named incident, one sentence on what happened, rule that came out of it
- Shows a journalism-specific example (vote counts in press releases vs. official minutes)
- Sets expectation: empty after week 2, should have entries by end of course

**Module 2 Exercise — hard-won lessons as required section:**
- Added as item 6 in the "Required sections" list for the CLAUDE.md students write
- Instructed to leave it empty for now but establish the header
- Framing: this section grows over time as the AI makes mistakes you correct

**Files updated (2):**
- `Module 2/Module 2_ Orientation Message.md`
- `Module 2/Module 2_ Exercise.md`

### 2026-02-18 — Changelog-from-day-one and Module 5 capstone framing

**Module 1 Exercise — changelog-from-day-one:**
- Added Step 14 at end of Part 4: students ask their CLI tool to create a CHANGELOG.md before submitting
- Framing: "a changelog started before there's anything to track captures the full arc"
- Sets up Module 2's version control section where the file gets committed

**Module 5 Orientation Message — three additions:**
- RAG attribution section: added the journalism parallel — "if you can't cite it, don't publish it. Grounded knowledge is citable. Parametric knowledge is not."
- MCP section: added explicit infrastructure framing — commit the MCP config alongside CLAUDE.md and skills; anyone who clones gets the same data connections
- New "Your project is infrastructure" capstone section before "What's ahead": lists all five layers built across the course (CLAUDE.md, skills, hooks, pipeline, MCP config), names the portability and shareability, closes the context engineering arc — "You started in Module 1 with one-off prompts and a chat window. You're ending Module 5 with a versioned environment any journalist on your team can clone and extend."

**Files updated (2):**
- `Module 1/Module 1_ Exercise.md`
- `Module 5/Module 5_ Orientation Message.md`

### 2026-02-18 — Module 3: one-way-door and Superpowers examples

Added concrete plugin/hook examples to Module 3 orientation message and video script:

**one-way-door-check** (from `jamditis/claude-skills-journalism`):
- Stop hook that intercepts every Write call and checks filename against irreversible-decision patterns
- Blocks on: schema files, Dockerfiles, CI/CD configs, API contracts, firebase configs, etc.
- Exits 0 (silent pass) on two-way door files
- Requires Claude to present options before proceeding; forces discussion, not just a warning
- Added as concrete example in hooks section of Module 3 Orientation Message

**Superpowers** (`obra/superpowers`):
- Third-party plugin for structured development workflow
- Fires skills automatically at each stage: brainstorming → spec → implementation plan → TDD → code review
- Cited as example of the upper end of what plugins can do
- Added to the "Plugins" entry in the maturity progression and Module 3 Video 1 outline

**Files updated (2):**
- `Module 3/Module 3_ Orientation Message.md` (examples added)
- `VIDEO_SCRIPTS.md` (Module 3 Video 1 hooks section expanded)

## Current status

- All 5 modules complete with strengthened content
- Module 2 replaced: voice → files and project context
- Module 2 expanded: Git/GitHub section added, Git now required for course
- Context engineering framing added to Module 2 and Welcome Message
- Error feedback loop (paste error → get fix) added as named principle in Modules 1, 3, and 4
- Module 3 hooks section expanded: notify vs. stop hooks, one-way door concept, one-way-door-check and Superpowers as concrete examples
- Module 3 exercise expanded: hook exploration + write-your-own-skill added
- Module 4 orientation message reframed: LLM-first, not terminal-skills
- Module 5 capstone section added: "your project is infrastructure" names all 5 layers and closes the context engineering arc
- Module 5 RAG section: journalism attribution rule added ("if you can't cite it, don't publish it")
- Module 5 MCP section: infrastructure framing added (commit the config, clone gets the connections)
- Module 1 exercise: changelog-from-day-one habit established at Step 14
- All placeholder URLs replaced with real links
- File naming normalized
- Syllabus, welcome message, and CLAUDE.md updated
- Sample journalism documents created for Module 2 exercise
- Module 2 orientation expanded: self-improvement loop + hard-won lessons format added after deletion test section
- Module 2 exercise expanded: hard-won lessons added as required section 6 in CLAUDE.md template
- VIDEO_SCRIPTS.md: 12 video outlines with LLM-first framing, project arc, crisis/recovery in Module 4, paste-error workflow in Modules 1 and 4
- VIDEO_SCRIPTS.md Module 5: journalism citation rule added to Video 1; infrastructure call-out added to Video 2 GitHub reveal

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
