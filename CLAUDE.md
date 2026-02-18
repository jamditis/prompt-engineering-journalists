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
├── Module 1/                # Escaping the chat window (programmatic AI control)
├── Module 2/                # Prompting with files and project context
├── Module 3/                # Custom skills (domain expertise → reusable tools, hooks)
├── Module 4/                # CLI workflows (Unix philosophy, cost-conscious pipelines)
├── Module 5/                # Agents and RAG (grounded knowledge, source attribution)
├── Final Project/           # Guidelines, proposal template, examples
├── Resources/
│   ├── examples/            # Sample files for exercises
│   ├── scripts/             # Starter shell scripts
│   ├── skills/              # Example Claude skills
│   ├── mcp-configs/         # MCP configuration examples
│   └── mollick-reading-list.md  # Curated Ethan Mollick articles by theme (referenced from Module 1 Optional Resources)
├── docs/                    # Course website (GitHub Pages)
└── [Original .docx templates from Knight Center]
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

Each module contains 8 markdown documents:
- **Orientation Message** - Week introduction and learning objectives
- **Midweek Message** - Mid-week check-in
- **End of the Week Message** - Summary and transition
- **Readings** - Required materials with URLs
- **Optional Resources** - Supplementary materials
- **Discussion Forums** - 2-3 discussion prompts
- **Quiz** - 5 multiple choice questions
- **Exercise** - Step-by-step hands-on tutorial

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

## Current state (as of Feb 2026)

All 5 modules + Introduction module have complete 8-document sets. Readings are populated across all modules with required articles added and Mollick synthesis document created.

### Readings pool — key sources added
- **Ethan Mollick** (One Useful Thing): ~15 articles synthesized in `Resources/mollick-reading-list.md`; two pieces assigned as required readings (intro + module 1)
- **Generative AI in the Newsroom** (generative-ai-newsroom.com): Nick Hagar (coding agents, beat reporting), Clare Spencer (multilingual newsrooms), Joe Amditis (vibe coding), Jessy de Cooker (quote extraction)
- **Joe Amditis** (925 Struggle Street Substack): agent architecture piece assigned to modules 2 and 5
- **Author diversity**: Clare Spencer, Jessy de Cooker included; agent research targeted Vicki Boykis, Hilke Schellmann, Meredith Broussard, Rachel Thomas, Joy Buolamwini, Rumman Chowdhury

### Pending work
- **Optional resources readings**: ~~Willison "Claude Skills are awesome" (Oct 2025), Doctorow skeptical AI piece (Sep 2025), Jesse Vincent "Superpowers" (Oct 2025)~~ — added: Willison to Module 3, Vincent + Doctorow to Module 5
- **URL verification**: existing reading URLs across all modules have not been verified as live
- **Exercise solution keys**: grader model answers not yet written for any module
- **Syllabus sync**: `SYLLABUS.md` (root) and `Introduction Module/Syllabus.md` are separate files that may have drifted out of sync

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
