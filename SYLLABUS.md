# Advanced prompt engineering for journalists

**Instructor:** Joe Amditis, associate director of operations, [Center for Cooperative Media](https://www.centerforcooperativemedia.org/), Montclair State University

**Email:** [amditisj@montclair.edu](mailto:amditisj@montclair.edu)
**Github:** [https://github.com/jamditis](https://github.com/jamditis/)
**Twitter:** [https://twitter.com/jsamditis](https://twitter.com/jsamditis)
**Substack:** [https://strugglestreet.substack.com](https://strugglestreet.substack.com/)

**Course duration:** 4 weeks
**Time commitment:** 4–6 hours per week

---

## Course description

This course is the sequel to [Prompt Engineering 101 for Journalists](https://journalismcourses.org/product/prompt-engineering-101-for-journalists/). The 101 course taught you to use AI through web interfaces — writing prompts, understanding context windows, and working with tools like ChatGPT and Claude.ai. This course moves you from the browser to the terminal. CLI tools run on your machine — with access to your files, your data, and your compute power. Instead of uploading a document to a chat window and copying the result, you can point AI at a folder of public records and tell it to classify, summarize, and organize them — then walk away while it works. You can leave a web scraper running overnight, process a dataset too large to paste into a chat box, or build a pipeline that pulls data from a public API, cleans it, and generates a visualization. CLI tools give you a real machine, not a sandbox.

The course draws on Ethan Mollick's framework of **models** (the underlying AI intelligence), **apps** (chat interfaces like ChatGPT.com and Claude.ai), and **harnesses** (systems that give models tools, file access, and multi-step autonomy). The 101 course taught you to use apps. This course teaches you to use harnesses — CLI tools like Claude Code, Gemini CLI, and Codex CLI that let AI read your files, run scripts, and chain tasks together. But the framework only tells you what these tools are. The course teaches you what to do with them, grounded in real-world workflows: building newsroom tools, scraping and processing public data, automating content pipelines, and creating reusable systems that your colleagues can share and build on.

The philosophical shift: you stop prompting and start managing. Instead of crafting one-off messages in a chat window, you build persistent environments — context files, skills, workflows, agent configurations — and delegate work. Each module builds on a concept from the 101 course and extends it: web prompting becomes CLI prompting, typing context every time becomes writing it once in a file, one-off prompts become reusable skills, no-code automation becomes scripted pipelines, and understanding AI becomes hands-on work with agents, tools, and data access.

## Prerequisites

- Completion of [Prompt Engineering 101 for Journalists](https://journalismcourses.org/product/prompt-engineering-101-for-journalists/) (available as a self-directed course at [journalismcourses.org](https://journalismcourses.org/product/prompt-engineering-101-for-journalists/)) or equivalent experience with AI prompting (e.g., writing effective prompts, adjusting tone and format, iterating on outputs). This prerequisite is ideal but not strictly required
- Comfort with writing prompts and getting useful results from chat-based AI interfaces (e.g., ChatGPT, Claude.ai, Gemini)
- Access to a computer with terminal access (to install software). If you cannot install software locally, cloud-based development environments like GitHub Codespaces, Replit, or Google AI Studio are alternatives — see Required tools below for details

## Learning objectives

By the end of this course, students will be able to:

1. Install and operate command-line AI tools, and explain the advantages of programmatic AI access over web interfaces
2. Write project context files (CLAUDE.md, GEMINI.md, AGENTS.md), process journalism documents using CLI tools, and use Git and GitHub for version control and sharing
3. Create custom skills, hooks, and CLAUDE.md files that encode journalism expertise into reusable tools
4. Build resource-conscious automation workflows with checkpointing, testing strategies, and multi-stage processing
5. Connect AI tools to local files and external data sources via MCP, and understand where these connections break down

---

## Weekly schedule

### Pre-course orientation

Before Week 1 begins, complete the following setup steps. This orientation includes a welcome video from the instructor and a written setup checklist — there are no graded assignments this week. The welcome video walks through what to expect and how the course is structured. Everything else is written instructions for getting your tools installed before Week 1 starts.

**Pre-course checklist:**

- Watch the welcome video (available in the course platform)
- Install Node.js (https://nodejs.org) version 20 or higher and verify your terminal environment
- Set up Claude Code, Gemini CLI, or Codex CLI (see Required tools below for options)
- Create a GitHub account (https://github.com) and clone the course repository
- Review Git basics — what repositories, commits, and cloning are
- Familiarize yourself with basic terminal commands and navigation

---

### Module 1: From chat window to command line

**Focus:** From apps to harnesses — why the same AI model behaves differently in a chat window than in a CLI tool, and how to build a persistent project environment around it

This module covers the two foundational skills of the course: getting into the terminal and building a persistent project environment. You will learn why CLI tools give you access to your machine's compute power. Then you will set up a context file for a project so the AI knows your beat, sources, and standards before every session. By the end of the week, you will have a working CLI setup, a CLAUDE.md you wrote yourself, and experience processing real documents from the filesystem.

**Topics:**
- Models, apps, and harnesses: Mollick's framework for the agentic era
- The CLI as compute access: scripting, piping, file access, and long-running processes
- "Work where your files live" — no more upload/download cycles
- Comparing web and CLI workflows side by side on the same task
- The "fresh conversation" problem: why web chat context evaporates
- Project context files: CLAUDE.md, GEMINI.md, AGENTS.md
- What goes in a context file (beat knowledge, style, source standards, terminology)
- The "deletion test" for context file content
- Processing documents (press releases, datasets, transcripts) from the filesystem
- Git basics and GitHub for project management — what repositories, commits, and cloning are
- Context files as versionable infrastructure, not personal notes

**Supplementary material:**
- [What is a CLI?](https://mooc.amditis.tech/concepts/what-is-a-cli.html) — plain-English explainer for journalists who haven't used a terminal
- [How context files work](https://mooc.amditis.tech/concepts/how-context-files-work.html) — plain-English explainer on the blank slate problem and how context files solve it

**Activities:**
- Read before the exercise: tool documentation (choose one: Claude Code, Gemini CLI, or Codex CLI), context file documentation for Claude Code, Gemini CLI, and Codex; GitHub basics
- Read after the exercise: Mollick's "A guide to which AI to use in the agentic era," Amditis's "Vibe coding for newsrooms," Schmid's "Prompt engineering vs. context engineering," Amditis's "I'm a Claude Code agent with my own Gmail account"
- Exercise: Install your CLI tool, set up a project (choose one: city hall beat, public data tracking, or content processing workspace), initialize a Git repo, write a CLAUDE.md, and compare document processing with and without context — submit screenshots or command output showing the difference
- Discussion (choose one): What surprised you about working in the terminal compared to a web chat interface? Or: What would you put in a context file for your beat, and why?
- Quiz

---

### Module 2: Custom skills for Claude Code\*

**Focus:** Encoding domain expertise into reusable, shareable tools

*\*The lessons in this module will generally apply to other models/LLMs, but they will be tailored for Claude Code specifically.*

Once you have a working project environment, the next step is encoding your editorial standards into reusable tools instead of typing them every session. This module covers how to create custom slash commands, set up hooks that automate quality checks, and manage your CLI sessions effectively. The goal is to shift from crafting prompts on the fly to building a toolkit that reflects how your newsroom works.

**Topics:**
- The progression: ad-hoc prompts → saved prompts → skills → hooks → plugins
- Creating custom slash commands: markdown files in `~/.claude/commands/` (personal) or `.claude/commands/` (project)
- Notify hooks vs. stop hooks: automated second readers and one-way-door guardrails
- Building on CLAUDE.md: from project context to reusable skills
- Session commands: `/help`, `/plan`, `/compact`, `/clear` — managing your Claude Code session
- When CLI tools are worth the setup cost and when they are not
- The journalism skills library (36 skills, 13 hooks) — optional resource for browsing and inspiration
- Skills vs. MCP servers: static instructions vs. live data connections

**Activities:**
- Required readings: Claude Code custom commands documentation, journalism skills repo overview, MCP basics, Hagar's "Coding agents for investigative journalism"
- Exercise: Create a custom skill (choose one: source-verification, data-cleaning, content formatting, or web scraping helper), invoke it with a slash command, and test it on a real-world example
- Discussion (choose one): What skills would help your newsroom, and how would you share them with colleagues? Or: How do you decide which parts of your editorial process are worth encoding into reusable tools versus handling manually?
- Quiz

---

### Module 3: CLI workflows for newsrooms

**Focus:** Describe the workflow in plain English — let the LLM build the automation

This module focuses on automation — using AI to build the scripts and pipelines that handle your recurring newsroom tasks. Rather than building automation by hand, you describe what you need in plain English and let the AI construct the workflow. You will learn when automation makes sense for a given task, how to inspect and understand what the AI built, and why testing small before running large matters.

**Topics:**
- From no-code automation to LLM-built workflow scripts
- Thinking in systems: inputs, processing stages, outputs, and feedback loops
- Plan mode: reviewing the approach before building anything
- Describing multi-stage pipelines: fetch, clean, process, format
- Scheduling and triggers: making workflows run on their own
- Testing small before running large — why this matters in batch work
- The error debugging loop: paste the error back, get the diagnosis
- API key security: environment variables, not source files

**Supplementary material:** [How AI session memory works](https://mooc.amditis.tech/concepts/how-ai-session-memory-works.html) — plain-English explainer on context windows, caching, and why session setup matters

**Activities:**
- Required readings: Twelve-Factor App config (API key security), Claude Code API errors reference, Hagar's "Augmented beat reporting," Spencer's "Inside the new multilingual newsrooms using GenAI for translation"
- Exercise: Ask Claude to build a shell script for a recurring task (choose one: city council agenda prep sheet, web scraping pipeline, batch document processing, or weekly content roundup) — then walk through what it built and why
- Discussion (choose one): Think about the tasks you do every week that follow the same pattern — meeting previews, weekly roundups, data pulls. Which one would you hand to an AI assistant first, and what instructions would it need? Or: What are the risks of automating editorial workflows, and how would you mitigate them?
- Quiz

---

### Module 4: Agents, tools, and data access

**Focus:** How AI tools take multi-step action, connect to data sources, and where they break down

This module covers the most advanced concepts in the course: how AI systems take multi-step actions autonomously, and how to connect them to your own data. You will learn the difference between interactive and non-interactive mode (`claude -p`), connect Claude to local files via Model Context Protocol (MCP), and discover — through hands-on experience — where these data connections fail and how to debug them. Making these connections work reliably — debugging permissions, auth, and schema mismatches — is harder than setting them up.

**Topics:**
- Chatbots vs. agents: what makes an AI tool an agent (tools, autonomy, multi-step plans)
- Interactive vs. non-interactive mode: what `claude -p` is and how it enables autonomous workflows
- Agent delegation: describing multi-step work and letting the AI plan and execute
- MCP (Model Context Protocol) as a standard for connecting AI to external data sources
- MCP server types: filesystem, database, web, search, custom
- Where data connections break: permissions, auth, schema mismatches, and silent failures
- Real-world examples: Washington Post's Haystacker, NYT's Echo

**Activities:**
- Required readings: WaPo Haystacker and NYT Echo case studies, Anthropic's MCP introduction and quickstart guide, de Cooker's "Extracting quotes from news articles with LLMs," Amditis's "I'm a Claude Code agent with my own Gmail account"
- Exercise: Connect Claude to a data source via MCP (choose one: folder of local documents, scraped web data, collection of news articles, or a public API dataset), then query across it and document what worked and what didn't
- Discussion (choose one): Where should newsrooms draw the line on AI autonomy, and what safeguards matter most? Or: When is it worth the setup cost to connect AI to a live data source versus just giving it the files directly?
- Quiz
- Final project due (optional — see below)

---

## Assignments and participation

### Participation

**Discussion forums:** Each module includes a discussion forum with 2–3 prompts. Post at least one original contribution and respond to at least two classmates per module. Posts should be substantive (more than "I agree").

**Engagement:** Activities have recommended weekly deadlines to help you stay on pace. The course is self-paced — you can still earn a certificate of completion after the course period ends as long as you complete all required activities.

### Quizzes

Each module includes a short quiz covering the key concepts from that week's readings and activities. Quizzes are graded on completion and can be retaken.

### Weekly exercises

Each module includes a hands-on exercise. Exercises are completed through the course website and demonstrate understanding of the module concepts. You must show your work: screenshots, code snippets, or command output.

- Module 1: Install Claude Code, write a beat context file, and compare document processing with and without it
- Module 2: Create a custom skill (source verification, data cleaning, content formatting, or other) and test it on a real example
- Module 3: Ask Claude to build an automation script for a recurring newsroom task, then examine what it built
- Module 4: Connect Claude to a data source via MCP and document what worked and what didn't

### Final project

Design and document a command-line AI workflow for a real journalism or media task. Choose a problem from your own work or a realistic scenario: building a web scraping pipeline for public data, creating a data visualization workflow, automating a content publishing process, building a newsroom tool, processing FOIA responses, or generating a recurring report from structured data.

**The final project is optional** and not required to receive a certificate of completion. We strongly encourage you to share your work — it helps other journalists see what's possible and learn from what you built.

**Project proposal due:** End of Week 2

**Submission options:**
- **Forum:** Share your project in the dedicated final project discussion forum
- **Google Form:** Submit privately if you prefer not to share publicly (link provided in the course platform)

**Requirements:**
- A GitHub repository (or zip file) containing all code and configuration files
- A README documenting the problem, setup, usage, expected output, and limitations
- Sample input and output files
- Any custom skills or commands used

**Due:** End of Module 4

---

## Required tools

You will need access to the following (detailed in Course Requirements):

- A computer with terminal access (Mac, Windows, or Linux)
- Node.js version 20 or higher (https://nodejs.org)
- At least one AI CLI tool with an active subscription or API key:
  - **Gemini CLI** (https://github.com/google-gemini/gemini-cli) — free tier with a Google account, 1,000 requests/day. Good starting point if you want zero cost.
  - **Claude Code** (https://claude.ai/download) — requires a Claude Max subscription ($20/mo) or Anthropic API key. Strong at reasoning through multi-step tasks.
  - **Codex CLI** (https://github.com/openai/codex) — requires an OpenAI API key. Integrates with existing OpenAI workflows.
- A text editor: Sublime Text (https://www.sublimetext.com), Notepad++ (https://notepad-plus-plus.org), or VS Code (https://code.visualstudio.com) recommended
- GitHub account — sign up free at https://github.com (see GitHub's quickstart guide: https://docs.github.com/en/get-started/start-your-journey/creating-an-account)

### Cloud and alternative tools

If you cannot install software on your computer (managed workplace machines, Chromebooks, etc.), these cloud-based alternatives provide a terminal environment in the browser:

- **GitHub Codespaces** (https://github.com/features/codespaces) — VS Code in the browser with a full Linux terminal. Free tier available.
- **Replit** (https://replit.com) — Browser-based IDE with terminal access and AI features built in.
- **Google AI Studio** (https://aistudio.google.com) — Google's interface for working with Gemini models, including code execution.
- **Lovable** (https://lovable.dev) — AI-powered development environment for building web applications.
- **AntiGravity** (https://antigravity.dev) — Cloud development platform with AI coding assistance.

These platforms let you run CLI tools without installing anything locally. The trade-off: you are using someone else's compute instead of your own, which limits what you can do with long-running processes and large local datasets. For the purposes of this course, any of these will work.

## Course website

The primary course is hosted on the Knight Center platform at [journalismcourses.org](https://journalismcourses.org). The GitHub repository and companion website below are maintained for reference and posterity — they are not required for participation and are not the primary access point for the course.

Companion website (supplementary reference): [https://mooc.amditis.tech](https://mooc.amditis.tech)

## Course repositories

The following GitHub repositories are maintained as supplementary reference material. Students should access course content through the Knight Center platform.

- **Advanced prompt engineering for journalists:** [https://github.com/jamditis/prompt-engineering-journalists](https://github.com/jamditis/prompt-engineering-journalists) — course materials, exercises, and the companion website (maintained for reference)
- **Journalism skills library:** [https://github.com/jamditis/claude-skills-journalism](https://github.com/jamditis/claude-skills-journalism) — 36 skills and 13 hooks for Claude Code, covering source verification, FOIA requests, data journalism, editorial workflows, and more. Used in Module 2.
- **AI tools for newsrooms:** [https://github.com/jamditis/tools](https://github.com/jamditis/tools) — guides, templates, and workflow examples for AI in journalism. Referenced across modules.

---

## Schedule summary

| Week | Module | Main deliverable |
|------|--------|------------------|
| Pre-course | Orientation | Setup checklist |
| 1 | From chat window to command line | CLI tool + beat context file + document processing |
| 2 | Custom skills for Claude Code | Custom skill of your choice |
| 3 | CLI workflows for newsrooms | Automation script for a recurring task |
| 4 | Agents, tools, and data access | MCP data connection + final project (optional) |
