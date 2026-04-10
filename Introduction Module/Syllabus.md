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

The philosophical shift: you stop prompting and start managing. Instead of crafting one-off messages in a chat window, you build persistent environments — context files, skills, plugins, automated pipelines — and delegate work. Each module builds on a concept from the 101 course and extends it: web prompting becomes CLI prompting, typing context every time becomes writing it once in a file, one-off prompts become reusable skills, no-code automation becomes scheduled pipelines, and crafting single messages becomes managing a workflow — deciding what to delegate, when to step in, and how to verify the result.

## Prerequisites

- Completion of [Prompt Engineering 101 for Journalists](https://journalismcourses.org/product/prompt-engineering-101-for-journalists/) (available as a self-directed course at [journalismcourses.org](https://journalismcourses.org/product/prompt-engineering-101-for-journalists/)) or equivalent experience with AI prompting (e.g., writing effective prompts, adjusting tone and format, iterating on outputs). This prerequisite is ideal but not strictly required
- Comfort with writing prompts and getting useful results from chat-based AI interfaces (e.g., ChatGPT, Claude.ai, Gemini)
- Access to a computer with terminal access (to install software). If you cannot install software locally, cloud-based development environments like GitHub Codespaces, Replit, or Google AI Studio are alternatives — see Required tools below for details

## Learning objectives

By the end of this course, students will be able to:

1. Install and operate command-line AI tools, and explain the advantages of programmatic AI access over web interfaces
2. Write project context files (CLAUDE.md, GEMINI.md, AGENTS.md) and use them to process real newsroom documents from the filesystem
3. Create custom skills, hooks, and plugins that encode journalism expertise into reusable, shareable tools
4. Build automated, scheduled pipelines using cloud triggers, GitHub Actions, and GitHub Pages — and recognize where a workflow should stay manual
5. Manage a CLI session as a manager rather than a prompter — budgeting the context window, delegating to sub-agents, running cross-model code review, and applying editorial judgment to the result

---

## Weekly schedule

### Pre-course orientation

Before Week 1 begins, complete the following setup steps. This orientation includes a welcome video from the instructor and a written setup checklist — there are no graded assignments this week. The welcome video walks through what to expect and how the course is structured. Everything else is written instructions for getting your tools installed before Week 1 starts.

**Pre-course checklist:**

- Watch the welcome video (available in the course platform)
- Install Node.js (https://nodejs.org) version 20 or higher and verify your terminal environment
- Set up Claude Code, Gemini CLI, or Codex CLI (see Required tools below for options)
- Create a GitHub account (https://github.com) if you don't have one — optional for the main modules, required for the bonus Git and GitHub module
- Familiarize yourself with basic terminal commands and navigation
- Optional: if you're new to Git and GitHub, the separate bonus module in this course is a self-paced walkthrough you can do alongside Module 1 or later

---

### Module 1: From chat window to command line

**Focus:** From apps to harnesses — why the same AI model behaves differently in a chat window than in a CLI tool, and how to build a persistent project environment around it

This module covers the two foundational skills of the course: getting into the terminal and building a persistent project environment. You will learn why CLI tools give you access to your machine's compute power. Then you will set up a context file for a project so the AI knows your beat, sources, and standards before every session. By the end of the week, you will have a working CLI setup, a CLAUDE.md you wrote yourself, and experience processing real documents from the filesystem.

**Topics:**
- Models, apps, and harnesses: Mollick's framework for the agentic era
- The CLI as compute access: scripting, piping, file access, and long-running processes
- "Work where your files live" — no more upload/download cycles
- Comparing web and CLI workflows side by side on the same research task
- The "fresh conversation" problem: why web chat context evaporates
- The three layers of project context: global, project, and session
- Project context files: CLAUDE.md, GEMINI.md, AGENTS.md
- What goes in a context file (beat knowledge, style, source standards, terminology)
- The "deletion test" for context file content
- MEMORY.md, sub-memory files, and the four types of memory (user, feedback, project, reference)
- Treating context files as versionable workflow infrastructure, not personal notes
- Processing documents (press releases, datasets, transcripts) from the filesystem

**Supplementary material:**
- [What is a CLI?](https://mooc.amditis.tech/concepts/what-is-a-cli.html) — plain-English explainer for journalists who haven't used a terminal
- [How context files work](https://mooc.amditis.tech/concepts/how-context-files-work.html) — plain-English explainer on the blank slate problem and how context files solve it

**Activities:**
- Read before the exercise: tool documentation (choose one: Claude Code, Gemini CLI, or Codex CLI) and the context file documentation for whichever tool you picked
- Read after the exercise: Mollick's "A guide to which AI to use in the agentic era," Amditis's "Vibe coding for newsrooms," Schmid's "Prompt engineering vs. context engineering," Amditis's "I'm a Claude Code agent with my own Gmail account"
- Exercise: Install your CLI tool, set up a project folder (choose one: city hall beat, public data tracking, or content processing workspace), write a CLAUDE.md, and compare document processing with and without context — submit screenshots or command output showing the difference
- Discussion (choose one): What surprised you about working in the terminal compared to a web chat interface? Or: What would you put in a context file for your beat, and why?
- Quiz

*Version control is not a Module 1 topic in the filmed videos — Git and GitHub are covered in the separate bonus module if you want to learn them alongside the course.*

---

### Module 2: Custom skills, plugins, and hooks\*

**Focus:** Turning real workflows into reusable skills and shareable plugins

*\*The lessons in this module will generally apply to other models/LLMs, but they will be tailored for Claude Code specifically.*

Once you have a working project environment, the next step is encoding your editorial standards into reusable tools instead of typing them every session. This module covers skills, commands, hooks, and plugins — what each one is, when to use which, and how to package a real workflow so a colleague can install it with one command. The video walks through a full end-to-end live demo: scraping the most recent videos from NYC Mayor Zohran Mamdani's Twitter, TikTok, YouTube, Instagram, and Facebook accounts, transcribing them with Whisper, extracting frames, running content analysis, and building an interactive dashboard. The second video turns that same pipeline into a proper Claude Code plugin.

**Topics:**
- Skills, commands, plugins, and hooks: what each one is, as markdown files or bundles that load on demand
- Custom slash commands: markdown files in `~/.claude/commands/` (personal) or `.claude/commands/` (project)
- Hooks as guardrails: scripts that run before or after a Claude action — pre-hooks can block, post-hooks can validate or flag
- Building on CLAUDE.md: from project context to reusable skills
- A live end-to-end demo: scraping, transcribing, analyzing, and dashboarding a five-platform social media content pipeline
- The Superpowers plugin's brainstorming and sub-agent driven development skills
- `--dangerously-skip-permissions` and why it should only be used in tightly scoped demo or sandbox contexts, not real newsroom work
- The Browser Automation skill with Playwright for when direct scraping fails
- Packaging a workflow as a Claude Code plugin: `plugin.json`, versioning, and Anthropic's official plugin development skill
- The journalism skills library (36 skills, 13 hooks) — a working reference for what a plugin looks like in practice

**Activities:**
- Required readings: Claude Code custom commands and plugin documentation, the Superpowers plugin README, and Nick Hagar's "Coding agents for investigative journalism"
- Exercise: Create a custom skill (choose one: source-verification, data-cleaning, content formatting, or a scraping helper), invoke it with a slash command, and package it as a one-skill plugin a colleague could install
- Discussion (choose one): What skills would help your newsroom, and how would you share them with colleagues? Or: How do you decide which parts of your editorial process are worth encoding into reusable tools versus handling manually?
- Quiz

---

### Module 3: Automation, pipelines, and triggered workflows

**Focus:** Stop running workflows manually. Schedule them with cloud triggers, GitHub Actions, and GitHub Pages

This module is about the shift from "I can do this once" to "this runs on its own." You will learn to think about automation as a system — input nodes, conveyor belts, transformers, and output destinations — before writing any code. Then you will see how to schedule a workflow so it runs without you, either on a cloud trigger, through a GitHub Action, or via a hybrid where the cloud detects new data and your local machine does the heavy work. The module continues the multi-platform Mamdani scraping project from Module 2 and takes it fully automated, end to end.

**Topics:**
- Why non-programmers stall at this step, and how to get past it
- Thinking in systems: input nodes → conveyor belts → transformers → output destinations (with Factorio and Satisfactory as the mental-model reference)
- Planning before building: plan mode as a habit, not a feature
- Multi-stage pipelines with one job per stage (fetch, clean, process, save)
- Three rules: stage the pipeline, test small, and never put secrets in code
- Claude Code's two schedulers: in-session `cron.create` vs. cloud `remote trigger`
- Hybrid pipelines: cloud detects, local transcribes
- Google Drive desktop sync as a simpler alternative to the Drive API
- GitHub Actions and GitHub Pages for the output layer
- Debugging real Copilot review feedback, branch protection rules, and an accidental self-triggering PR loop

**Supplementary material:** [How AI session memory works](https://mooc.amditis.tech/concepts/how-ai-session-memory-works.html) — plain-English explainer on context windows, caching, and why session setup matters

**Activities:**
- Required readings: Nick Hagar's "Augmented beat reporting," Clare Spencer's "Inside the new multilingual newsrooms using GenAI for translation," and optional Simon Willison on evaluating LLM pipelines
- Exercise: Stage a small automated pipeline of your own (choose one: city council agenda prep sheet, web scraping pipeline, batch document processing, or weekly content roundup) — describe it in plain English to Claude, run it once end-to-end on real data, then schedule it to run on its own
- Discussion (choose one): Think about the tasks you do every week that follow the same pattern — meeting previews, weekly roundups, data pulls. Which one would you hand to an automated pipeline first, and what instructions would it need? Or: What are the risks of automating editorial workflows, and how would you mitigate them?
- Quiz

---

### Module 4: Advanced prompting patterns

**Focus:** From prompting to managing — context hygiene, sub-agents, cross-model code review, and the editorial judgment that still has to come from you

This module pulls back from the mechanics to the craft. Once you know how to install the tools, write context files, build skills and plugins, and schedule pipelines, the work shifts from prompting to managing — clear instructions, feedback, and evaluation criteria, the same skills you would use with a new staff writer. Module 4 is four short videos on the patterns that separate useful output from slop: managing the context window as a budget, delegating to sub-agents without losing editorial control, calling a different model for a cross-model code review before you commit, and running long work on a home machine while supervising it from your phone. The closing argument is the one the course keeps returning to: editorial judgment becomes more important as the tools get better, not less.

**Topics:**
- Effort and thinking levels: `/effort` low/medium/high/max/auto and what each one costs
- What actually lives in your context window: system prompt, tools, custom agents, memory files, skills, messages
- The million-token window and why quality degrades past 20–30% usage
- `/compact` with and without custom summarization instructions
- The 40% rule: capping conversations at 40% of the context window, and rewinding instead of patching
- Sub-agents, fresh context windows, and "agent telephone" — why sub-agent tasks must stay narrowly scoped
- The double-escape rewind trick for undoing bad decisions (but not past a compact)
- Cross-model code review: calling Copilot CLI and Codex CLI as non-interactive sub-agents from inside Claude Code via the `-p` flag
- Context isolation — sub-agent reviews don't count against your main session's tokens
- `/remote-control` for driving a session from the web or your phone, and picking up where you left off
- The journalist-as-product-manager framing, and four questions for picking any tool (what's the task, how much context, does it need tool access, what's your real money budget)

**Activities:**
- Required readings: Ethan Mollick's "Management as AI superpower," Clare Spencer's "How to Budget for Your Newsroom's AI Project" (GAIN), Simon Willison's "The normalization of deviance in AI," Jessy de Cooker's "Extracting quotes from news articles with LLMs" (GAIN), and Joe Amditis's "I'm a Claude Code agent with my own Gmail account"
- Exercise: Manage a full Claude Code session as a manager, not a prompter — take a context-window baseline, load a real file, compact the session, then call a different model (Codex CLI, Copilot CLI, or Gemini CLI) through its non-interactive `-p` flag for a second-opinion review of the most important file in the session, and reconcile the two reads
- Discussion (choose one): Where in your own work would you most easily slip into Willison's "normalization of deviance" pattern — and what would you have to check in six months to catch it? Or: Which part of your reporting workflow would you delegate to a sub-agent, which part would you keep, and why?
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

- Module 1: Install a CLI tool, write a beat context file, and compare document processing with and without it
- Module 2: Create a custom skill and package it as a one-skill plugin a colleague could install
- Module 3: Stage a real automated pipeline, run it end-to-end once, then schedule it to run on its own
- Module 4: Manage a full session as a manager — take a context baseline, compact, and call a different model through its `-p` flag for a cross-model review

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
| 2 | Custom skills, plugins, and hooks | Custom skill packaged as a plugin |
| 3 | Automation, pipelines, and triggered workflows | Automation pipeline with a scheduler or trigger |
| 4 | Advanced prompting patterns | Context-management and cross-model review exercise + final project (optional) |
