# Module 3: Custom skills for Claude Code

## Required readings

Complete these readings before starting the exercise.

---

### Reading 1: Claude Code custom commands documentation

**Source:** Anthropic Documentation
**URL:** https://docs.anthropic.com/en/docs/claude-code/tutorials#custom-slash-commands
**Time:** 15 minutes

This documentation explains how Claude Code loads and executes custom commands. Pay attention to:

- The difference between project commands (in `.claude/commands/`) and personal commands (in `~/.claude/commands/`)
- How YAML frontmatter defines command metadata
- The file naming convention: `skill-name.md` or `skill-name/SKILL.md`

**Key concepts to note:**
- Commands are invoked with `/command-name`
- The markdown content becomes Claude's instructions
- Commands can include examples, templates, and step-by-step procedures

---

### Reading 2: Journalism skills repository overview

**Source:** Instructor's GitHub repository
**URL:** https://github.com/jamditis/claude-skills-journalism
**Time:** 20 minutes

Review the README and browse the skill directories. The repository contains 36 skills, 13 hooks, and a plugin organized into categories:

**Journalism and media skills (11 skills):**
- `source-verification/` — SIFT method for checking claims
- `foia-requests/` — Drafting public records requests with 50-state reference
- `data-journalism/` — Data analysis and visualization workflows
- `fact-check-workflow/` — Claim extraction, evidence gathering, rating scales
- `interview-prep/` — Pre-interview research and question frameworks
- `interview-transcription/` — Recording workflows and quote management
- `story-pitch/` — Pitch templates for daily news, features, investigations
- `editorial-workflow/` — Story assignment tracking and deadline management
- `crisis-communications/` — Breaking news protocol and rapid verification
- `social-media-intelligence/` — Multi-platform monitoring and account analysis
- `web-scraping/` — Content extraction for research

**Writing and quality skills:**
- `newsroom-style/` — AP Style enforcement and attribution rules
- `ai-writing-detox/` — Detecting and removing AI-generated filler language
- `newsletter-publishing/` — Email newsletter creation and management

**Hooks (13 automated checks):**
- `ap-style-check` — Flags AP Style violations after edits
- `ai-slop-detector` — Scans for banned AI filler words and phrases
- `source-attribution-check` — Flags unattributed quotes and statistics
- And 10 more covering accessibility, data methodology, legal review, and pre-publish checklists

**Focus on these files:**
- Each skill's `SKILL.md` — Note the YAML frontmatter and instruction style
- The `hooks/` directory — See how automated checks work
- The skill descriptions — These tell Claude when to activate each skill

---

### Reading 3: Model Context Protocol (MCP) basics

**Source:** Anthropic Documentation
**URL:** https://modelcontextprotocol.io/introduction
**Time:** 10 minutes

MCP is a standard for connecting AI models to external tools and data sources. While skills are simpler (just instruction files), MCP servers provide live connections to databases, APIs, and file systems.

Read the introduction to understand:
- What MCP is and why it exists
- The difference between skills (static instructions) and MCP servers (live connections)
- When you might need MCP vs. when a skill is enough

For this module, we focus on skills. MCP becomes relevant when you need Claude Code to query databases or access live APIs during a task.

---

## Reading notes

As you read, consider:

1. What journalism tasks do you repeat weekly that could become skills?
2. Which existing skills in the repository would help your current work?
3. What's missing from the journalism skills collection that your newsroom needs?

Bring these observations to the discussion forum.
