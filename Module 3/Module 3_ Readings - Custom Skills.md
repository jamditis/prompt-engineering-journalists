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
**URL:** [Provided in course materials]
**Time:** 20 minutes

Review the README and browse the skill directories. The repository contains 14 skills organized into categories:

**Journalism and media skills:**
- `source-verification/` — SIFT method for checking claims
- `foia-requests/` — Drafting public records requests
- `data-journalism/` — Data analysis and visualization workflows
- `web-scraping/` — Collecting web content for research

**Academic and research skills:**
- `academic-writing/` — Scholarly communication patterns
- `digital-archive/` — Archiving with AI enrichment

**Focus on these files:**
- Each skill's `SKILL.md` — Note the structure and instruction style
- The `examples/` directories — See how skills handle real scenarios
- Any `templates/` directories — Pre-built formats for common tasks

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
