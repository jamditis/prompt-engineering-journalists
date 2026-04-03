# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**Course:** Advanced prompt engineering for journalists
**Institution:** Knight Center for Journalism at UT Austin
**Instructor:** Joe Amditis, Center for Cooperative Media, Montclair State University
**Prerequisite:** Prompt Engineering 101 for Journalists (or equivalent)

This is the sequel to Prompt Engineering 101 for Journalists. It moves journalists from web-based AI chat interfaces to terminal CLI tools: Claude Code, Gemini CLI, and Codex CLI. Each module extends a concept from the 101 course: web prompting → CLI, typing context every time → writing it once in a file, one-off prompts → reusable skills, no-code automation → scripted pipelines, understanding AI → building with agents and RAG.

## Structure

```
├── Introduction Module/     # Welcome, syllabus, requirements, getting help
├── Introduction Module (example messages included)/  # Knight Center templates with sample content
├── Module 1/                # From chat window to command line (CLI setup + project context)
│                            #   Contains both Module 1_*.md and Module 2_*.md files (merged weeks)
├── Module 2/                # Custom skills (domain expertise → reusable tools, hooks)
├── Module 3/                # CLI workflows (Unix philosophy, cost-conscious pipelines)
├── Module 4/                # Agents and RAG (grounded knowledge, source attribution)
├── Final Project/           # Guidelines, proposal template, examples
├── Bonus Module_ Git and GitHub/  # Bonus module on Git/GitHub for journalists
├── Biography and Instructor Photo/  # Instructor bio and headshot
├── Resources/
│   ├── examples/            # Sample files for exercises
│   ├── readings/            # Saved reference articles (e.g. Mollick HTML)
│   ├── scripts/             # Starter shell scripts
│   ├── skills/              # Example Claude skills
│   ├── mcp-configs/         # MCP configuration examples
│   └── mollick-reading-list.md  # Curated Ethan Mollick articles by theme
├── docs/                    # Course website (GitHub Pages → mooc.amditis.tech)
│   ├── module-1/ … module-4/   # Module content pages
│   ├── syllabus/            # Syllabus page
│   ├── final-project/       # Final project page
│   ├── starter-kit/         # Pre-course starter kit
│   ├── bonus-git-github/    # Bonus: Git & GitHub guide
│   ├── bonus-oss-etiquette/ # Bonus: OSS etiquette guide
│   ├── bonus-interviews/    # Bonus: interviews page
│   ├── concepts/            # Concept explainer pages (context hygiene, hooks, CLI, etc.)
│   ├── templates/           # Downloadable templates (CLAUDE.md, skill, pipeline, etc.)
│   ├── slides/              # Slide decks for video modules
│   ├── credits/             # Credits page
│   ├── plans/               # Design/implementation plans (internal)
│   ├── assets/              # CSS, JS, images
│   ├── quick-reference.md   # Command quick-reference
│   ├── troubleshooting.md   # Troubleshooting guide
│   ├── review.html          # Content review tool
│   └── llms.txt, sitemap.xml, robots.txt, CNAME
├── SYLLABUS.md              # Canonical syllabus (markdown)
├── COURSE_CHECKLIST.md      # Knight Center deliverables checklist
├── PROJECT_LOG.md           # Development log
├── VIDEO_SCRIPTS.md         # Video script outlines
├── VIDEO_NARRATION_SCRIPTS.md  # Full narration scripts for videos
├── deploy.sh                # Cloudflare Pages fallback deploy script
└── review.html              # Standalone review tool (root copy)
```

## Key course repositories

- **Journalism skills:** https://github.com/jamditis/claude-skills-journalism (36 skills, 13 hooks)
- **AI tools for newsrooms:** https://github.com/jamditis/tools
- **Scrapefruit CLI:** https://github.com/jamditis/scrapefruit-cli

## Course philosophy

This course is grounded in Ethan Mollick's framework for understanding AI (see "A guide to which AI to use in the agentic era," One Useful Thing, Feb 2026):

- **Models** — the underlying AI intelligence (Claude Opus 4.6, GPT-5.2, Gemini 3 Pro)
- **Apps** — the interfaces users interact with (ChatGPT.com, Claude.ai, Gemini.google.com)
- **Harnesses** — systems that give models tools, file access, and the ability to take multi-step autonomous action

This course moves students from apps to harnesses. CLI tools (Claude Code, Gemini CLI, Codex CLI) are harnesses. Context files, skills, hooks, pipelines, and MCP are all harness-layer techniques.

The philosophical shift the course teaches: from prompting (conversational, one-off) to managing (task delegation, oversight, course-correction). As Mollick puts it: "You aren't prompting, you are managing."

When writing course content, frame CLI tools as harnesses, not just "different interfaces." The student already knows how to use apps. This course teaches them to delegate work.

## Module content pattern

Each module contains 9 markdown documents:
- **Orientation Message** - Week introduction and learning objectives
- **Midweek Message** - Mid-week check-in
- **End of the Week Message** - Summary and transition
- **Readings** - Required materials with URLs
- **Optional Resources** - Supplementary materials
- **Discussion Forums** - 2-3 discussion prompts
- **Quiz** - 5 multiple choice questions
- **Exercise** - Step-by-step hands-on tutorial
- **Exercise Solution Key** - Model answer and grader rubric

Note: Module 1's directory contains two sets of 9 files (`Module 1_*.md` and `Module 2_*.md`) because the old Modules 1 and 2 were merged into a single week. The Bonus Module (Git and GitHub) also follows the 9-document pattern.

## Grading

- Participation (discussions): 30%
- Weekly exercises: 50%
- Final project: 20%

## Tools covered

- **Claude Code:** `npm install -g @anthropic-ai/claude-code`
- **Gemini CLI:** `npm install -g @google/gemini-cli` (free tier: 1,000 req/day)
- **Codex CLI:** `npm install -g @openai/codex`
- **Context files:** CLAUDE.md, GEMINI.md, AGENTS.md

## Notes

- Content is markdown, ready for conversion to .docx or LMS upload
- Original Knight Center .docx templates preserved for reference
- All content uses LLM-first framing: exercises describe a workflow to hand to an LLM, not step-by-step technical instructions students follow manually
- Aider has been removed from all content — tools are Claude Code, Gemini CLI, and Codex CLI only

## Exercise design rules

This section governs how all exercise steps must be written. These rules apply to the `docs/module-*/index.html` files and any future exercise content.

### Core principle: students launch Claude, then delegate everything

Students open a terminal, type `claude`, and press Enter. They are now inside an interactive session. From that point, they do not type terminal commands — they paste natural-language prompts and Claude does the work.

The student's job is to **specify what they want clearly enough that Claude can execute it**. That is the skill the course teaches.

### Code block visual vocabulary

Every code block in an exercise has a label and a text color. There are exactly three types:

| Label | Text color class | When to use |
|-------|-----------------|-------------|
| `terminal` | `text-acid` | Real shell commands the student types in the terminal |
| `claude code` | `text-gray-300` | Prompts the student pastes inside an active Claude Code interactive session |
| `claude.ai` | `text-gray-300` | Prompts for the Claude.ai web interface (Module 1 comparison only) |

### The only allowed terminal commands

A `terminal` / `text-acid` block should contain **only** these commands:

- `claude` — bare, no arguments, to launch an interactive session
- `cd ~/folder-name` — only when a directory change is necessary for CLAUDE.md to load correctly (Module 2 specifically)
- `npm install -g @anthropic-ai/claude-code` — first-time install
- The Gemini CLI install command — first-time install

**Nothing else belongs in a terminal block.** File creation, folder setup, git operations, script writing, JSON editing — all of that is done by Claude inside the session, not by the student in the terminal.

### The forbidden pattern: `claude "..."` one-shots

Never write:

```
claude "Read this file and summarize it"
```

This is a non-interactive one-shot invocation. Students running it never enter a session, can't see Claude's reasoning, and can't course-correct. It also misrepresents how Claude Code is meant to be used.

Always use the bare `claude` launch + a `claude code` prompt block instead.

### What "LLM-first" means in practice

When writing an exercise step, ask: "Is the student doing this, or is Claude doing this?" If Claude should be doing it, the step is a `claude code` prompt, not a terminal command. Examples:

- Creating a folder → `claude code` prompt asking Claude to create it
- Writing a config file → `claude code` prompt asking Claude to write it (with correct auto-detected values)
- Running a script → `claude code` prompt asking Claude to build and run it
- Verifying a result → `claude code` prompt asking Claude to confirm it worked

Steps where the student does something in the terminal: launch Claude (`claude`), change directory before relaunching when strictly necessary.

### Official Claude Code file types

Only these are official Claude Code patterns:

- **CLAUDE.md** — project context file, read automatically at session start
- **`.claude/commands/`** — custom slash commands (filename = command name, e.g. `source-check.md` → `/source-check`)

**LESSON.md and RULE.md are not official Claude Code file types.** They were personal conventions. Do not reference them in course content.

## Current state (as of Apr 2026)

All 4 modules have complete 9-document sets. The Introduction module has its own 5-document structure (Welcome, Syllabus, Requirements, Readings, Getting Help). Readings are populated across all modules with required articles added and Mollick synthesis document created.

**Course is now 4 weeks** (merged old Modules 1+2 into Module 1). Old Module 1 LMS files live in `Module 1/Module 1_*.md`; old Module 2 LMS files live in `Module 1/Module 2_*.md` (labeled "Project context" in review tool). Modules 3→2, 4→3, 5→4.

### Deployment

- **Live site**: https://mooc.amditis.tech (GitHub Pages via Cloudflare proxy)
- **Deploy**: Push to `main` — GitHub Actions workflow (`.github/workflows/pages.yml`) deploys `docs/` automatically
- **Custom domain**: `CNAME` file in `docs/` + Cloudflare DNS CNAME `mooc` → `jamditis.github.io` (proxied)
- **Fallback**: `./deploy.sh "message"` still works for Cloudflare Pages direct upload if needed

### Readings pool — key sources added
- **Ethan Mollick** (One Useful Thing): ~15 articles synthesized in `Resources/mollick-reading-list.md`; two pieces assigned as required readings (intro + module 1)
- **Generative AI in the Newsroom** (generative-ai-newsroom.com): Nick Hagar (coding agents, beat reporting), Clare Spencer (multilingual newsrooms), Joe Amditis (vibe coding), Jessy de Cooker (quote extraction)
- **Joe Amditis** (925 Struggle Street Substack): agent architecture piece assigned to modules 2 and 4
- **Author diversity**: Clare Spencer, Jessy de Cooker included; agent research targeted Vicki Boykis, Hilke Schellmann, Meredith Broussard, Rachel Thomas, Joy Buolamwini, Rumman Chowdhury

### Completed work (as of Apr 2026)

- **4-module restructure**: old Modules 1+2 merged into Module 1; 3→2, 4→3, 5→4; docs/index.html, README.md, CLAUDE.md, review.html all updated
- **Optional resources readings**: Willison → Module 2; Vincent + Doctorow → Module 4
- **URL verification**: 7 dead links fixed or removed across all modules; 403s from generative-ai-newsroom.com and Axios flagged as bot-blocking (likely live)
- **Exercise solution keys**: written for all 4 modules (model answer + grader rubric, one file per module)
- **Syllabus sync**: both files now identical canonical version
- **Exercise rewrites**: all 4 module exercises rewritten to follow the LLM-first rules documented above — no more `claude "..."` one-shots, no more heredoc patterns, no more manual terminal commands beyond `claude` and `cd`
- **LESSON.md/RULE.md removed**: Module 2 skill types card corrected; these are not official Claude Code file types
- **CSS word wrap**: `pre code` blocks now wrap globally across the course site (`docs/assets/css/amditis.css`)
- **Review tool**: `docs/review.html` — Module 1 shows as two groups ("From chat window to command line" + "Project context supplement") to distinguish the merged content
- **Google Doc syllabus sync**: syllabus page HTML updated to match the final Google Doc version; hyperlinks added to all readings; stale URLs fixed
- **Stale module-5 references removed**: 13 HTML files + sitemap.xml cleaned of links to deleted module-5
- **Mobile responsiveness** (`docs/assets/css/amditis.css`):
  - Inner-page nav visible on mobile via CSS override targeting `aria-label` attributes (homepage has its own JS menu)
  - `.bullet-item` grid→block fix for mobile: CSS Grid treats inline elements (`<a>`, `<code>`, `<strong>`) as separate grid items, breaking layout on narrow screens. Switched to `display: block` + hanging indent on mobile.
  - `scroll-padding-top`: 5rem desktop, 7rem mobile — anchor links clear the sticky header
  - `review.html`: modal width clamped with `min(680px, 92vw)`, sidebar stacks on mobile
- **NICAR 2026 skills repo**: added Aaron Kessler's `amkessler/nicar2026_skills_in_codex_claude` as optional resource in Module 2 (site + starter kit + syllabus Google Doc)
- **Starter kit references**: added `jamditis/mooc-starter-kit` to syllabus Google Doc (pre-course checklist, course repositories section) and Introductory Materials Google Doc
- **OSS etiquette guide**: new standalone page at `docs/bonus-oss-etiquette/index.html` — full article on responsible open source contribution with AI tools. Case studies (curl, Ghostty, tldraw, OCaml, PSF), Willison's "proven to work" framework, 10-item checklist, disclosure standards, 3 Cs framework, 12 sourced references. Brief callout + link added to bonus Git & GitHub module. Card added to homepage grid. Sitemap updated. No nav bar entry (standalone resource, not a top-level module).
- **Bonus interviews page**: `docs/bonus-interviews/index.html`
- **Concept explainer pages**: 8 standalone pages in `docs/concepts/` covering context hygiene, error logging, hooks as guardrails, AI session memory, context files, skills vs commands, CLI basics, and working with subagents
- **Templates**: downloadable templates in `docs/templates/` (CLAUDE.md, exercise log, MCP config, pipeline script, project proposal, skill template, quick reference, troubleshooting)
- **Slide decks**: 4 HTML slide decks in `docs/slides/` for video modules
- **Video scripts**: `VIDEO_SCRIPTS.md` (outlines) and `VIDEO_NARRATION_SCRIPTS.md` (full narration scripts)
- **Bonus Module (Git & GitHub)**: full 9-document set in `Bonus Module_ Git and GitHub/`
- **Starter kit page**: `docs/starter-kit/index.html`
- **Credits page**: `docs/credits/index.html`
- **llms.txt**: `docs/llms.txt` for LLM-readable site description

# AI Writing Guidelines: Avoiding Slop Phrases
Use this file as a reference when reviewing AI-generated content. These patterns indicate lazy, filler writing that should be edited or avoided.

## Severely Overused Words (Delete or Replace)
| Word | Problem | Alternative |
|------|---------|-------------|
| **comprehensive** | Almost never necessary | "full", "complete", or just delete |
| **sophisticated** | Vague filler | "advanced", or describe what makes it complex |
| **robust** | Meaningless modifier | "reliable", "stable", or delete |
| **transformative** | Hyperbolic | "changed", "improved", or be specific |
| **leveraging** | Corporate jargon | "using" |
| **seamlessly** | Almost always false | Delete, or describe actual integration |
| **innovative** | Empty praise | Describe what's actually new |
| **cutting-edge** | Dated buzzword | Be specific about what's new |
| **state-of-the-art** | Cliché | Describe the actual technology |
| **holistic** | Vague | "complete", "full", or be specific |
| **synergy** | Corporate jargon | Describe the actual benefit |
| **ecosystem** | Overused metaphor | "system", "environment", or be specific |
| **paradigm** | Often misused | Use only when discussing actual paradigm shifts |
| **empower** | Vague corporate-speak | Be specific about what capability is given |

## Cliché Sentence Patterns (Rewrite)
### "Not just X—it's Y" pattern
❌ "This isn't just a tool—it's a platform"
❌ "This wasn't just documentation—it was a knowledge base"
❌ "Not just a technical milestone, but a conceptual shift"
✅ State the thing directly without the dramatic setup
### "Fundamentally transforms" pattern
❌ "This fundamentally transforms how we..."
❌ "This represents a fundamental shift in..."
✅ Describe the actual change without the hyperbole
### Inflated achievement claims
❌ "A critical enhancement"
❌ "A major milestone"
❌ "A significant improvement"
❌ "A game-changer"
❌ "A breakthrough"
✅ Just describe what was done and let readers judge significance
### Empty transitions
❌ "With that in mind..."
❌ "Building on this foundation..."
❌ "Taking this a step further..."
✅ Just make the next point

## Filler Phrases to Delete
These phrases add no meaning and can usually be removed entirely:
- "It's worth noting that..."
- "It's important to understand that..."
- "In order to..."  → "To..."
- "Due to the fact that..." → "Because..."
- "At the end of the day..."
- "When all is said and done..."
- "In today's world..."
- "Moving forward..."
- "Going forward..."
- "At this point in time..." → "Now..."
- "In terms of..."
- "With respect to..." → "About..." or "For..."

## Vague Intensifiers
Words that pretend to add meaning but don't:
- "very" (usually delete)
- "extremely" (be specific instead)
- "incredibly" (hyperbolic)
- "absolutely" (usually unnecessary)
- "truly" (usually unnecessary)
- "literally" (often misused)
- "actually" (often unnecessary)
- "basically" (often unnecessary)
- "essentially" (often better to just state the thing)

## Redundant Modifiers
- "completely finished" → "finished"
- "totally unique" → "unique"
- "very unique" → "unique" (uniqueness isn't gradable)
- "absolutely essential" → "essential"
- "critically important" → "important"
- "end result" → "result"
- "future plans" → "plans"
- "past history" → "history"
- "general consensus" → "consensus"
- "close proximity" → "proximity"

## The "Rich" Problem
AI loves the word "rich" as a modifier:
- "rich data"
- "rich knowledge graph"
- "rich ecosystem"
- "rich feature set"
Usually it means nothing. Delete it or be specific about what makes something substantial.

## Red Flags in Technical Writing
Watch for these patterns that suggest AI-generated padding:
1. **Lists of near-synonyms**: "comprehensive, sophisticated, and robust" (pick one or none)
2. **Excessive hedging**: "may potentially be able to possibly..."
3. **Noun stacking**: "production-ready deployment system infrastructure"
4. **Passive voice hiding agency**: "It was determined that..." (by whom?)
5. **Circular definitions**: "The system enables users to use the functionality that the system provides"

## Quick Test
Before accepting AI-generated text, ask:
1. Can I delete this word/phrase without losing meaning? → Delete it
2. Is this the simplest way to say this? → Simplify
3. Would I say this out loud to a colleague? → If not, rewrite
4. Does this add information or just sound impressive? → If the latter, cut it

## Examples of Good Rewrites
❌ "The comprehensive entity extraction system leverages sophisticated algorithms to enable robust knowledge graph construction."
✅ "The entity extraction system builds knowledge graphs from archive records."
❌ "This transformative milestone fundamentally reshapes the archive's research capabilities."
✅ "This changes how researchers can use the archive."
❌ "A comprehensive suite of data maintenance tools was developed to ensure the quality and consistency of the archived data."
✅ "We built tools to maintain data quality."

*Remember: Good writing is invisible. If readers notice the writing, it's getting in the way of the content.*

---

## Multi-machine workflow

This repo is developed across multiple machines (MacBook, work Windows PC, home Windows PC). GitHub is the source of truth.

**Before switching machines:**
```bash
git add . && git commit -m "WIP" && git push
```

**After switching machines:**
```bash
git pull
```
