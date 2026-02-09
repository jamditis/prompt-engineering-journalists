# Syllabus

## Advanced prompt engineering for journalists

**Instructor:** Joe Amditis, Associate Director of Operations, Center for Cooperative Media, Montclair State University

**Email:** amditisj@montclair.edu

**Course duration:** 5 weeks

**Time commitment:** 4-6 hours per week

---

## Course description

This course is the sequel to Prompt Engineering 101 for Journalists. The 101 course taught you to use AI through web interfaces — writing prompts, understanding context windows, and working with tools like ChatGPT and Claude.ai. This course moves you from the browser to the terminal, where AI becomes programmable: scriptable, automatable, and integrated with your files and workflows.

Each module builds on a concept from the 101 course and extends it: web prompting becomes CLI prompting, typing context every time becomes writing it once in a file, one-off prompts become reusable skills, no-code automation becomes scripted pipelines, and conceptual understanding of AI becomes hands-on work with agents and RAG.

## Prerequisites

- Completion of Prompt Engineering 101 for Journalists (or equivalent experience with AI prompting)
- Comfort writing prompts and getting useful results from chat-based AI interfaces
- Access to a computer with administrator privileges (to install software)

## Learning objectives

By the end of this course, students will be able to:

1. Install and operate command-line AI tools, and explain the advantages of programmatic AI access over web interfaces
2. Write project context files (CLAUDE.md, GEMINI.md, AGENTS.md), process journalism documents using CLI tools, and use Git and GitHub for version control and sharing
3. Create custom skills, hooks, and CLAUDE.md files that encode journalism expertise into reusable tools
4. Build cost-conscious automation workflows with checkpointing, rate limiting, and multi-stage processing
5. Configure retrieval-augmented generation pipelines that preserve source attribution

---

## Weekly schedule

### Module 1: Escaping the chat window

**Focus:** From interactive web interfaces to programmable terminal tools

**Topics:**
- The CLI as programmatic control over AI (scripting, piping, scheduling)
- "Work where your files live" — no more upload/download cycles
- Installing Node.js and terminal prerequisites
- Setting up Claude Code, Gemini CLI, or Aider
- Basic terminal commands and navigation

**Activities:**
- Required readings: Tool documentation and CLI background articles
- Exercise: Install one CLI tool and compare web vs. CLI workflows
- Discussion: Share your installation experience and first impressions
- Quiz

---

### Module 2: Prompting with files and project context

**Focus:** Persistent context files and file-based journalism workflows

**Topics:**
- The "fresh conversation" problem: why web chat context evaporates
- Project context files: CLAUDE.md, GEMINI.md, AGENTS.md
- What goes in a context file (beat knowledge, style, source standards, terminology)
- The "deletion test" for context file content
- Processing journalism documents (press releases, minutes, transcripts) from the filesystem
- Git basics and GitHub for project management — what repositories, commits, and cloning are

**Activities:**
- Required readings: Context file documentation for Claude Code, Gemini CLI, and Codex; Git and GitHub basics
- Exercise: Set up a beat project, initialize a Git repo, process documents with and without context, write a CLAUDE.md
- Discussion: What would you put in a context file for your beat?
- Quiz

---

### Module 3: Custom skills for Claude Code

**Focus:** Encoding domain expertise into reusable, shareable tools

**Topics:**
- The progression: ad-hoc prompts → saved prompts → skills → hooks → plugins
- Writing SKILL.md files with YAML frontmatter
- Hooks as non-blocking editorial quality checks
- Building on CLAUDE.md: from project context to reusable skills
- Installing and using the journalism skills library (36 skills, 13 hooks)

**Activities:**
- Required readings: Claude Code docs on custom commands, journalism skills repo overview
- Exercise: Install journalism skills plugin and verify a viral claim using source-verification
- Discussion: What skills would help your newsroom?
- Quiz

---

### Module 4: CLI workflows for newsrooms

**Focus:** The Unix philosophy applied to AI — small tools connected by pipes

**Topics:**
- From no-code automation to scripted CLI pipelines
- Multi-stage processing: fetch, clean, analyze, format
- Cost-conscious AI operations (test small before running big)
- Checkpoint/resume and rate limiting
- API key management and security

**Activities:**
- Required readings: Unix philosophy, shell basics, curl, jq
- Exercise: Build an article-to-newsletter pipeline
- Discussion: Workflow ideas for your newsroom
- Quiz

---

### Module 5: Agents and RAG

**Focus:** Parametric vs. grounded knowledge, and why the citation trail matters

**Topics:**
- AI agents: tools with autonomy, but human-in-the-loop is not optional
- Retrieval-augmented generation and source attribution
- Parametric knowledge vs. grounded knowledge
- MCP (Model Context Protocol) as a bridge between AI and your data
- Real-world examples: Washington Post's Haystacker, NYT's Echo

**Activities:**
- Required readings: Agent architecture, RAG concepts, MCP documentation
- Exercise: Configure Claude Code with MCP to query a local knowledge base
- Discussion: Where to draw the line on AI autonomy in newsrooms
- Quiz
- Final project due

---

## Assignments and grading

### Participation (30%)

**Discussion forums:** Each module includes a discussion forum. Post at least one original contribution and respond to at least two classmates per module. Posts should be substantive (more than "I agree").

**Engagement:** Complete all required activities by the weekly deadline.

### Weekly exercises (50%)

Each module includes a hands-on exercise. Exercises are graded on completion and demonstrated understanding. You must show your work: screenshots, code snippets, or command output.

- Module 1: CLI tool installation and comparison (10%)
- Module 2: Context file and document processing exercise (10%)
- Module 3: Custom skill creation (10%)
- Module 4: Workflow automation (10%)
- Module 5: RAG pipeline exercise (10%)

### Final project (20%)

Design and document a CLI-based AI workflow for a real journalism task. This can be for your own newsroom or a hypothetical scenario.

**Requirements:**
- Written description of the problem and solution (500-1000 words)
- Working code or configuration files
- Screenshots or video demonstrating the workflow
- Reflection on what you learned

**Due:** End of Module 5

---

## Course policies

### Late work

Weekly exercises can be submitted up to 48 hours late with a 10% penalty. After 48 hours, exercises receive no credit. The final project deadline is firm.

### Academic integrity

All submitted work must be your own. You may use AI tools to complete assignments (that's the point of this course), but you must document which tools you used and how. Copying another student's work is not permitted.

### Technical problems

If you encounter technical issues that prevent you from completing an assignment, contact the instructor before the deadline. We will work out a solution.

### Communication

Use the discussion forums for questions about course content. Other students likely have the same questions. Email the instructor for personal matters.

---

## Required tools

You will need access to the following (detailed in Course Requirements):

- A computer with terminal access (Mac, Windows, or Linux)
- Node.js version 20 or higher
- At least one AI API key or subscription (Gemini API has a free tier)
- A text editor (VS Code recommended)
- Git

## Course repositories

The following GitHub repositories are used throughout the course:

- **Journalism skills library:** https://github.com/jamditis/claude-skills-journalism — 36 skills and 13 hooks for Claude Code, covering source verification, FOIA requests, data journalism, editorial workflows, and more. Used in Module 3.
- **AI tools for newsrooms:** https://github.com/jamditis/tools — Guides, templates, and workflow examples for AI in journalism. Referenced across modules.
- **Scrapefruit CLI:** https://github.com/jamditis/scrapefruit-cli — CLI tool for archiving complete web pages. Referenced in Module 4.

---

## Schedule summary

| Week | Module | Main deliverable |
|------|--------|------------------|
| 1 | Escaping the chat window | CLI tool setup |
| 2 | Prompting with files and project context | Context file exercise |
| 3 | Custom skills for Claude Code | Custom skill |
| 4 | CLI workflows for newsrooms | Workflow automation |
| 5 | Agents and RAG | Final project |
