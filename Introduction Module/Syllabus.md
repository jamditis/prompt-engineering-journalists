# Advanced prompt engineering for journalists

**Instructor:** Joe Amditis, associate director of operations, [Center for Cooperative Media](https://www.centerforcooperativemedia.org/), Montclair State University

**Email:** [amditisj@montclair.edu](mailto:amditisj@montclair.edu)
**Github:** [https://github.com/jamditis](https://github.com/jamditis/)
**Twitter:** [https://twitter.com/jsamditis](https://twitter.com/jsamditis)
**Substack:** [https://strugglestreet.substack.com](https://strugglestreet.substack.com/)

**Course duration:** 5 weeks
**Time commitment:** 4–6 hours per week

---

## Course description

This course is the sequel to [Prompt Engineering 101 for Journalists](https://journalismcourses.org/product/prompt-engineering-101-for-journalists/). The 101 course taught you to use AI through web interfaces — writing prompts, understanding context windows, and working with tools like ChatGPT and Claude.ai. This course moves you from the browser to the terminal, where AI becomes programmable: scriptable, automatable, and integrated with your files and workflows. For example, instead of pasting a city council transcript into ChatGPT and manually copying the summary, you can write a single command that reads the transcript from your hard drive, extracts action items, and formats a story draft — all without opening a browser.

The course is grounded in Ethan Mollick's framework for understanding AI in the agentic era. Mollick describes three layers: **models** (the underlying AI intelligence), **apps** (chat interfaces like ChatGPT.com and Claude.ai), and **harnesses** (systems that give models tools, file access, and the ability to take multi-step action). The 101 course taught you to use apps. This course teaches you to use harnesses — CLI tools like Claude Code, Gemini CLI, and Codex CLI that let AI read your files, run commands, and chain tasks together.

The philosophical shift: you stop prompting and start managing. Instead of crafting one-off messages in a chat window, you build persistent environments — context files, skills, workflows, agent configurations — and delegate work. Each module builds on a concept from the 101 course and extends it: web prompting becomes CLI prompting, typing context every time becomes writing it once in a file, one-off prompts become reusable skills, no-code automation becomes scripted pipelines, and understanding AI becomes hands-on work with agents and retrieval-augmented generation (RAG).

## Prerequisites

- Completion of [Prompt Engineering 101 for Journalists](https://journalismcourses.org/product/prompt-engineering-101-for-journalists/) (available as a self-directed course at [journalismcourses.org](https://journalismcourses.org/product/prompt-engineering-101-for-journalists/)) or equivalent experience with AI prompting (e.g., writing effective prompts, adjusting tone and format, iterating on outputs). This prerequisite is ideal but not strictly required
- Comfort with writing prompts and getting useful results from chat-based AI interfaces (e.g., ChatGPT, Claude.ai, Gemini)
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

### Pre-course orientation

Before Week 1 begins, complete the following setup steps. This orientation includes a welcome video and a checklist — there are no assignments this week.

**Pre-course checklist:**

- Install Node.js (https://nodejs.org) version 20 or higher and verify your terminal environment
- Set up Claude Code, Gemini CLI, or Codex CLI (see Required tools below for options)
- Create a GitHub account (https://github.com) and clone the course repository
- Review Git basics — what repositories, commits, and cloning are
- Familiarize yourself with basic terminal commands and navigation

---

### Module 1: Escaping the chat window

**Focus:** From apps to harnesses — understanding why the same model behaves differently in a chat window than it does in a CLI tool

**Topics:**
- Models, apps, and harnesses: Mollick's framework for the agentic era
- The CLI as programmatic control over AI (scripting, piping, file access)
- "Work where your files live" — no more upload/download cycles
- Comparing web and CLI workflows side by side on the same task
- Session commands: `/help`, `/plan`, `/compact`, `/clear`
- When CLI tools are worth the setup cost and when they are not

**Supplementary material:** [What is a CLI?](https://jamditis.github.io/prompt-engineering-journalists/concepts/what-is-a-cli.html) — plain-English explainer for journalists who haven't used a terminal

**Activities:**
- Required readings: Mollick's "A guide to which AI to use in the agentic era," Amditis's "Vibe coding for newsrooms," tool documentation (choose one: Claude Code, Gemini CLI, or Codex CLI)
- Exercise: Install Claude Code and compare web vs. CLI workflows on the same summarization task
- Discussion (choose one): Share your installation experience and first impressions of working in the terminal. Or: What surprised you about the differences between web-based and command-line AI tools?
- Quiz

---

### Module 2: Prompting with files and project context

**Focus:** From prompt engineering to context engineering — building persistent environments instead of crafting one-off messages

**Topics:**
- The "fresh conversation" problem: why web chat context evaporates
- Project context files: CLAUDE.md, GEMINI.md, AGENTS.md
- What goes in a context file (beat knowledge, style, source standards, terminology)
- The "deletion test" for context file content
- Processing journalism documents (press releases, minutes, transcripts) from the filesystem
- Git basics and GitHub for project management — what repositories, commits, and cloning are
- Context files as versionable infrastructure, not personal notes

**Supplementary material:** [How context files work](https://jamditis.github.io/prompt-engineering-journalists/concepts/how-context-files-work.html) — plain-English explainer on the blank slate problem and how context files solve it

**Activities:**
- Required readings: Context file documentation for Claude Code, Gemini CLI, and Codex; Schmid's "Prompt engineering vs. context engineering"; GitHub basics; Amditis's "I'm a Claude Code agent with my own Gmail account"
- Exercise: Set up a city hall beat project, initialize a Git repo, process documents with and without context, write a CLAUDE.md, and compare the results
- Discussion (choose one): What would you put in a context file for your beat, and why? Or: How does processing documents from the file system compare to pasting text into a chat window — what changes about your workflow?
- Quiz

---

### Module 3: Custom skills for Claude Code\*

**Focus:** Encoding domain expertise into reusable, shareable tools

*\*The lessons in this module will generally apply to other models/LLMs, but they will be tailored for Claude Code specifically.*

**Topics:**
- The progression: ad-hoc prompts → saved prompts → skills → hooks → plugins
- Creating custom slash commands: markdown files in `~/.claude/commands/` (personal) or `.claude/commands/` (project)
- Notify hooks vs. stop hooks: automated second readers and one-way-door guardrails
- Building on CLAUDE.md: from project context to reusable skills
- Installing and using the journalism skills library (36 skills, 13 hooks)
- Skills vs. MCP servers: static instructions vs. live data connections

**Activities:**
- Required readings: Claude Code custom commands documentation, journalism skills repo overview, MCP basics, Hagar's "Coding agents for investigative journalism"
- Exercise: Create a source-verification skill, invoke it with `/source-verification` on a viral claim, and test it on a real-world example
- Discussion (choose one): What skills would help your newsroom, and how would you share them with colleagues? Or: How do you decide which parts of your editorial process are worth encoding into reusable tools versus handling manually?
- Quiz

---

### Module 4: CLI workflows for newsrooms

**Focus:** Describe the workflow in plain English — let the LLM build the automation

**Topics:**
- From no-code automation to LLM-built workflow scripts
- Interactive mode vs. non-interactive mode (`claude -p`): when to use each
- Describing multi-stage pipelines: fetch, clean, analyze, format
- Testing small before running large — why this matters in batch work
- Checkpoint/resume, rate limiting, and error handling
- API key security (environment variables, not source files) and cost-conscious operations

**Supplementary material:** [How AI session memory works](https://jamditis.github.io/prompt-engineering-journalists/concepts/how-ai-session-memory-works.html) — plain-English explainer on context windows, caching, and why session setup matters

**Activities:**
- Required readings: Twelve-Factor App config (API key security), Claude Code API errors reference, Hagar's "Augmented beat reporting," Spencer's "Inside the new multilingual newsrooms using GenAI for translation"
- Exercise: Build a newsletter pipeline using `claude -p` to process articles through summarization and HTML formatting
- Discussion (choose one): What repeating task in your newsroom would benefit most from a scripted pipeline? Or: What are the risks of automating editorial workflows, and how would you mitigate them?
- Quiz

---

### Module 5: Agents and retrieval-augmented generation (RAG)

**Focus:** Parametric vs. grounded knowledge, and why the citation trail matters

**Topics:**
- Chatbots vs. agents: what makes an AI tool an agent (tools, autonomy, multi-step plans)
- Retrieval-augmented generation: query → retrieve → augment → generate
- Parametric knowledge (learned during training, no citations) vs. grounded knowledge (retrieved at query time, citable)
- MCP (Model Context Protocol) as a standard for connecting AI to external data sources
- MCP server types: filesystem, database, web, search, custom
- Real-world examples: Washington Post's Haystacker, NYT's Echo

**Activities:**
- Required readings: WaPo Haystacker and NYT Echo case studies, IBM's RAG explainer, Anthropic's MCP introduction and quickstart guide, de Cooker's "Extracting quotes from news articles with LLMs," Amditis's "I'm a Claude Code agent with my own Gmail account"
- Exercise: Configure Claude Code with an MCP filesystem server, create a local research document collection, and run RAG-style queries with source attribution
- Discussion (choose one): Where should newsrooms draw the line on AI autonomy, and what safeguards matter most? Or: When does RAG add enough value over a standard prompt to justify the setup cost?
- Quiz
- Final project due

---

## Assignments and participation

### Participation

**Discussion forums:** Each module includes a discussion forum with 2–3 prompts. Post at least one original contribution and respond to at least two classmates per module. Posts should be substantive (more than "I agree").

**Engagement:** Complete all required activities by the weekly deadline.

### Weekly exercises

Each module includes a hands-on exercise. Exercises are completed through the course website and demonstrate understanding of the module concepts. You must show your work: screenshots, code snippets, or command output.

- Module 1: Install Claude Code and compare web vs. CLI workflows on the same summarization task
- Module 2: Set up a beat project, create a CLAUDE.md, and process documents with and without context
- Module 3: Create a source-verification skill and test it on a viral claim
- Module 4: Build a newsletter pipeline using `claude -p` (non-interactive mode)
- Module 5: Configure an MCP filesystem server and run RAG-style document queries

### Final project

Design and document a CLI-based AI workflow for a real journalism task. Choose a problem from your own newsroom or a realistic scenario: processing public records, monitoring a beat, automating a recurring story format, or building a source-verification pipeline.

**Project proposal due:** End of Week 3

**Requirements:**
- A GitHub repository (or zip file) containing all code and configuration files
- A README documenting the problem, setup, usage, expected output, and limitations
- Sample input and output files
- Any custom skills or commands used

**Due:** End of Module 5

---

## Required tools

You will need access to the following (detailed in Course Requirements):

- A computer with terminal access (Mac, Windows, or Linux)
- Node.js version 20 or higher (https://nodejs.org)
- At least one AI API key or paid subscription — options include Google Gemini API (https://ai.google.dev, generous free tier), Anthropic Claude API (https://console.anthropic.com), or OpenAI API (https://platform.openai.com)
- A text editor: Sublime Text (https://www.sublimetext.com), Notepad++ (https://notepad-plus-plus.org), or VS Code (https://code.visualstudio.com) recommended
- GitHub account — sign up free at https://github.com (see GitHub's quickstart guide: https://docs.github.com/en/get-started/start-your-journey/creating-an-account)

## Course website

The course includes a companion website with exercises, templates, and plain-English concept explainers:

[https://jamditis.github.io/prompt-engineering-journalists/](https://jamditis.github.io/prompt-engineering-journalists/)

## Course repositories

The following GitHub repositories are used throughout the course:

- **Advanced prompt engineering for journalists:** [https://github.com/jamditis/prompt-engineering-journalists](https://github.com/jamditis/prompt-engineering-journalists) — course materials, exercises, and the course website for this 5-week course
- **Journalism skills library:** [https://github.com/jamditis/claude-skills-journalism](https://github.com/jamditis/claude-skills-journalism) — 36 skills and 13 hooks for Claude Code, covering source verification, FOIA requests, data journalism, editorial workflows, and more. Used in Module 3.
- **AI tools for newsrooms:** [https://github.com/jamditis/tools](https://github.com/jamditis/tools) — guides, templates, and workflow examples for AI in journalism. Referenced across modules.
- **Scrapefruit CLI:** [https://github.com/jamditis/scrapefruit-cli](https://github.com/jamditis/scrapefruit-cli) — a CLI tool for web scraping, referenced in workflow examples.

---

## Schedule summary

| Week | Module | Main deliverable |
|------|--------|------------------|
| Pre-course | Orientation | Setup checklist |
| 1 | Escaping the chat window | CLI tool setup |
| 2 | Prompting with files and project context | Context file exercise |
| 3 | Custom skills for Claude Code | Custom skill |
| 4 | CLI workflows for newsrooms | Workflow automation |
| 5 | Agents and RAG | Final project |
