# Video script outlines

**Course:** Advanced prompt engineering for journalists
**Instructor:** Joe Amditis, Center for Cooperative Media, Montclair State University

## Overview

Each module has at most 2 recorded lectures, plus possible guest interviews. The original plan called for 4 shorter videos per module (~6 min each). In practice, the content works better as 1-2 longer videos (~15-20 min) that combine talking head and screen recording in a single flow.

| # | Video | Module | Format | Length | Status |
|---|-------|--------|--------|--------|--------|
| 1 | Promo video | — | Talking head | 60-90 sec | Planned |
| 2 | Welcome video | Intro | Talking head | 2-3 min | Planned |
| A1 | Escaping the browser | Module 1 | Talking head + screen recording | ~20 min | Recorded |
| A2 | (TBD — possible second video or guest) | Module 1 | — | — | Open |
| B1 | From prompts to skills | Module 2 | Talking head + screen recording | ~15-20 min | Planned |
| B2 | (TBD — possible second video or guest) | Module 2 | — | — | Open |
| C1 | Describing workflows and having AI build them | Module 3 | Talking head + screen recording | ~15-20 min | Planned |
| C2 | (TBD — possible second video or guest) | Module 3 | — | — | Open |
| D1 | Agents, tools, and data access | Module 4 | Talking head + screen recording | ~15-20 min | Planned |
| D2 | (TBD — possible second video or guest) | Module 4 | — | — | Open |

---

## The project arc (thread through all videos)

Each module maps to a stage of an LLM-assisted journalism project. This arc should be introduced in the Welcome Video and called back in each module:

| Stage | Module | What happens |
|-------|--------|--------------|
| **CLI + context** | Module 1 | Install CLI tools, write context files, process documents, set up GitHub |
| **Skills** | Module 2 | Build reusable tools — skills and hooks that encode editorial expertise |
| **Workflows** | Module 3 | Describe automation in plain English; AI builds, you test and debug |
| **Agents + data** | Module 4 | Connect to live data via MCP; publish the project on GitHub |

---

## Video 1: Promo video

**Format:** Talking head (no slides)
**Length:** 60-90 seconds (~190 words)
**Purpose:** Marketing — get journalists curious enough to enroll

### Outline

**0:00-0:15 — Pain point hook**
Open with the frustration the audience already feels: starting from scratch every ChatGPT session. Pasting, explaining, formatting — then doing it all again next week.

**0:15-0:25 — Intro**
Joe Amditis, Center for Cooperative Media, Montclair State. Advanced Prompt Engineering for Journalists, four weeks, Knight Center.

**0:25-0:50 — The shift**
AI moves off the browser, onto your machine. Reads files directly. One file gives it your beat, sources, and standards — loads every session. No more re-explaining.

**0:50-1:05 — What you build**
Three outcomes, no jargon:
- Reusable commands that encode your newsroom's workflows
- Automation you describe in plain English and the AI builds
- Connections to your own documents with citable sources

**1:05-1:15 — Who it's for / CTA**
"You don't need to code. You need to describe what you want — and you already do that for a living." One-sentence qualifier + JournalismCourses.org.

---

## Video 2: Welcome video

**Format:** Talking head
**Length:** 2-3 minutes
**Purpose:** Set tone, introduce the project arc, tell students what to do first

### Outline

**0:00-0:20 — Greeting**
"Welcome. I'm Joe Amditis. Over the next four weeks, you're going to build something real — a journalism tool or workflow powered by AI, documented on GitHub, and ready to share with colleagues. Each module is one stage of that project."

**0:20-1:00 — The project arc [SLIDE: CLI + context → skills → workflows → agents + data]**
Introduce the arc. "Week one: you install a CLI tool, write a context file for your beat, and process real documents from the command line — with a working project on GitHub by the end of the week. Week two: you build reusable skills that encode your editorial expertise into shareable tools. Week three: you describe a workflow in plain English and the AI builds the automation. Week four: you connect the AI to your own data sources, handle the parts that break, and publish the finished project."

**1:00-1:30 — The key shift: apps to harnesses**
Brief Mollick framing: "You've been using AI apps — ChatGPT.com, Claude.ai — where you type in a browser and get a response. This course moves you to harnesses — tools where the same AI can read your files, run operations on your computer, and complete multi-step tasks. Same AI brain. Completely different capability. You stop prompting and start delegating."

**1:30-2:00 — What you won't need**
"You do not need to know programming. You do not need to memorize terminal commands. The AI handles that. What you need is the ability to describe what you want clearly — and you already know how to do that."

**2:00-2:20 — How to succeed**
- Do the exercises: reading about this is not the same as doing it
- Post in the forums: your classmates are solving the same problems
- Start Module 1's installation early — don't troubleshoot under deadline pressure

**2:20-2:30 — What to do right now**
"Read the Course Requirements document. Check that your computer meets the specs. Then read the syllabus. See you in Module 1."

---

## Module 1, Video A1: Escaping the browser (RECORDED)

**Format:** Combined talking head + screen recording
**Length:** ~20 minutes
**File:** `MOOC-A1_eng.srt`
**Topic:** Why we are leaving the browser; what CLI tools can do that web chat cannot; live Claude Code vs. Claude.ai comparison; CLAUDE.md setup via /init; global vs. project-level context files

### What was covered

**0:00-2:00 — Introduction**
- Who Joe is (associate director of operations, CCM, Montclair State)
- Course premise: escaping the browser to bring AI onto your local machine
- Self-taught framing — approaching from a non-expert perspective
- Paid subscription requirement ($20/mo for ChatGPT, Gemini, or Claude)
- IDE alternatives for those who cannot use the terminal (VS Code, Cursor, Windsurf, AntiGravity)
- PowerShell as the primary tool for demonstrations

**2:00-4:00 — Resources and setup**
- Course websites: mooc.amditis.tech and tools.amditis.tech
- GitHub as "Google Drive for code" — personal experience with version control nightmares before GitHub
- Three major models: ChatGPT/Codex, Gemini CLI, Claude Code

**4:00-5:30 — Why the environment matters**
- Mollick's harness concept: models behave differently based on the environment they operate in
- System prompts differ between web chat and CLI — web chat is geared toward conversational responses, CLI harness gives different tools and file access
- Not a smarter chat window — a different kind of tool

**5:30-7:00 — Opening Claude Code**
- Creating a folder on the desktop, navigating with `cd`
- Typing `claude` to launch — trust the folder prompt
- Interface walkthrough: version info, model display, status line, slash commands
- Saying hello — demonstrating natural language interaction

**7:00-13:00 — Live comparison: Claude Code vs. Claude.ai**
- Same task: "Look on the internet and find everything you can about the Center for Cooperative Media and give me a report"
- Both using Opus 4.6, sent simultaneously
- Claude.ai: finishes faster, produces surface-level report with citation links, hits tool use limit
- Claude Code: takes longer, asks for permissions (Firecrawl), creates folders and files, extracts deeper information, saves structured output to filesystem
- Key difference: when session ends, Claude Code's files persist on desktop; Claude.ai's output lives only in the chat
- Downloading annual reports from CCM website while Claude Code works (parallel work)
- Claude.ai hits tool use limit — everything lost; Claude Code already finished with saved files

**13:00-16:00 — File persistence and continued work**
- Asking Claude Code to create detailed staff/project profiles as markdown files in a new folder
- Files persist across sessions — future Claude Code sessions can reference them
- Comparison to Claude.ai Projects feature (limited, less customizable)

**16:00-18:00 — CLAUDE.md setup**
- `/init` command to auto-generate a CLAUDE.md from project contents
- "Senator Joe" demo — adding a custom instruction, restarting session, verifying it follows instructions
- Global vs. project-level CLAUDE.md: global for style/preferences, project-level for project-specific context
- Updating CLAUDE.md when the tool makes mistakes or misinterprets instructions

**18:00-20:00 — Configuration and wrap-up**
- Slash commands: typing `/` to browse available commands
- `@` symbol for tagging files and folders
- `/usage` for configuration settings
- Explanatory output mode recommendation
- Call to action: set up your environment, play with settings, head to the discussion forums

### Topics from the original plan that were NOT covered in this video
These may be addressed in a second Module 1 video, in written materials, or in later modules:
- The "deletion test" for context file content (mentioned in midweek message instead)
- Error debugging loop ("paste the error back in")
- Git/GitHub hands-on demo (creating repos, committing, pushing)
- Processing documents with vs. without context (formal comparison)
- CLAUDE.md content categories breakdown (beat knowledge, style rules, workflow instructions)
- Node.js installation walkthrough
- Gemini CLI or Codex CLI setup demos

---

## Module 1, Video A2: (open slot)

**Status:** Not yet recorded. Possible topics for a second video or guest interview:
- Git and GitHub walkthrough (creating a repo, committing via Claude Code)
- Context file deep dive (what goes in, the deletion test, beat-specific examples)
- Guest interview with a journalist using CLI tools
- Deeper comparison: processing documents with and without CLAUDE.md

---

## Module 2, Video B1: From prompts to skills

**Format:** Combined talking head + screen recording
**Length:** ~20 minutes
**Topic:** The maturity progression from ad-hoc prompts to reusable skills and automated hooks, demonstrated live using meeting minutes extraction as the running example

### Outline (flexible — you will riff on these beats, not read them)

**Opening (~2 min) — The problem with retyping**
You have a prompt you use every week for extracting action items from council meeting minutes. Every week you retype it or dig through your notes to find it. That's not a system. This module turns your best prompts into reusable tools.

**The progression (~3 min) — Show the maturity ladder**
Walk through the five stages with the meeting minutes example:
1. **Ad-hoc prompt**: you type the extraction instructions from memory each time
2. **Saved prompt**: you paste it from a notes doc — better, but still manual
3. **Skill**: a markdown file in `.claude/commands/` that Claude Code loads as a slash command — type `/meeting-minutes` and it runs
4. **Hook**: runs automatically on a trigger — e.g., every time Claude writes a file, a hook checks that all claims are attributed to named sources
5. **Plugin**: a shareable package of skills and hooks that colleagues can install

Most journalists are at stage 1 or 2. This module gets you to 3 and introduces 4.

**Live demo: building the skill (~8 min) — Screen recording**
1. Start with the raw prompt — paste a meeting minutes extraction prompt into Claude Code, run it on a sample transcript, show the output
2. Explain: "I've typed this prompt dozens of times. Let's turn it into something permanent."
3. Ask Claude Code to create a custom slash command: "Create a slash command called /meeting-minutes that does what I just asked — extracts action items, votes, and named officials from a transcript and outputs them as a structured list"
4. Watch Claude create the file in `.claude/commands/meeting-minutes.md`
5. Open the file — show that it's just a markdown file with the prompt instructions inside
6. Quit the session, relaunch, type `/meeting-minutes` on a different transcript — show it works
7. Iterate: "Add a section that flags any votes where the margin was close — 5-4 or 4-3 — and mark those as 'contested'"

**Hooks intro (~4 min) — Explain and show**
- Two kinds: notify hooks (flag issues in the background) and stop hooks (block actions that need human approval)
- Show or describe a concrete example: an attribution-check hook that runs after every Claude response and flags any claim not tied to a named source
- Mention the journalism skills library (36 skills, 13 hooks) as a resource — students don't need to install it, but they can browse it for ideas
- Mention Superpowers (obra/superpowers) as an example of what a full plugin looks like at the high end

**Session commands (~2 min) — Quick tips**
Cover the Claude Code session management basics that will be useful from now on:
- `/help` — see all available commands
- `/plan` — have Claude outline an approach before building
- `/compact` — compress the conversation when it gets long
- `/clear` — start fresh

**Wrap-up (~1 min)**
Your project now has a working custom skill. In Module 3, you'll build a workflow that runs automatically — scheduled tasks, pipelines, and scripts that do the work without you sitting at the keyboard.

### Topics NOT covered in this video (addressed in written materials)
- Detailed SKILL.md file format (covered in exercise)
- Installing the journalism skills library (optional resource, not required)
- How hooks are configured technically (settings.json) — covered in exercise tips

---

## Module 2, Video B2: (open slot)

**Status:** Not yet recorded. Possible topics for a second video or guest interview:
- Walking through the journalism skills library in detail
- Guest: a journalist who built custom skills for their beat
- Deep dive on hooks — building one from scratch, testing it, iterating
- Session management tips and configuration walkthrough

---

## Module 3, Video C1: CLI workflows for newsrooms

**Format:** Combined talking head + screen recording
**Length:** ~20 minutes
**Topic:** What automation looks like when you describe it in plain English and let the AI build it; demo of a real scheduled workflow; introduction to Reroute NJ as a real-world project example

### Outline (flexible — you will riff on these beats, not read them)

**Opening (~2 min) — From one-off to automatic**
Last module you built a skill that works on one document at a time. This module is about making things run without you. Scheduled tasks. Batch processing. Pipelines that fetch, process, and save — on a schedule, in the background, while you're doing other work.

**What automation actually looks like (~3 min) — Explain the concept**
- A workflow is a sequence of steps: fetch this, clean it, process it, save the result, notify me if something looks off
- You describe the sequence in plain English. Claude translates it into a script.
- You don't write the script. You review it, test it on a small batch, fix what breaks, then decide whether to schedule it.
- The key concept: `/plan` first — have Claude outline the approach before building anything. Like seeing the outline before the reporter writes the story.

**Live demo: show a real scheduled workflow (~8 min) — Screen recording**
Show one of your actual automation setups — the scheduler that runs on a cron schedule:
1. Open the scheduler script and walk through what it does at a high level — not every line, but the stages: what triggers it, what it checks, what it does with the results, where the output goes
2. Show the cron entry or systemd timer that makes it run on a schedule — "this is what 'run every 2 hours' looks like"
3. Show the output from a recent run — what it actually produced
4. Explain the development process: "I didn't write this by hand. I described what I wanted to Claude Code, tested it on a small scale, fixed the things that broke, and then scheduled it. That's the workflow you'll follow in the exercise."

**Testing and the error loop (~3 min)**
- Always test small before running at scale — 5 documents, not 500
- When it breaks (and it will): paste the error back into Claude Code. The tool knows the code it helped you write and can trace the failure immediately.
- Demo or describe a real failure: a rate limit, a permission error, a malformed input — and how you diagnosed and fixed it by pasting the error back

**Security basics (~2 min)**
Three rules:
1. API keys are passwords — they go in environment variables, not in script files
2. If a script has a key in it, that file never goes to GitHub
3. Before running a workflow on sensitive documents, ask Claude to review it for anything unexpected — data being sent somewhere it shouldn't be

**Reroute NJ reference (~2 min)**
Briefly reference Reroute NJ as a real example of what this workflow approach produces at scale:
- A zero-build static site in 11 languages for the NJ Transit Portal North Bridge cutover
- Built entirely with CLI tools — page generation scripts, coverage scrapers, translation pipeline
- The scraper runs on a cron schedule, commits and pushes changes automatically
- "This is what it looks like when you take the skills from Module 2 and the workflow approach from this module and apply them to a real community need. We'll go deeper into this project in Module 4."

**Wrap-up (~1 min)**
Your project now has automation — something that runs on its own and does useful work. Module 4 connects the AI to live data sources and brings the project together as something you can share.

### Topics NOT covered in this video (addressed in written materials)
- Detailed shell script syntax (exercise walks through with Claude)
- `claude -p` non-interactive mode (moved to Module 4)
- Specific pipeline architectures (exercise offers multiple scenarios)

---

## Module 3, Video C2: (open slot)

**Status:** Not yet recorded. Possible topics for a second video or guest interview:
- Walking through a batch document processing pipeline step by step
- Guest: a journalist who automated a recurring reporting task
- API cost management and rate limiting strategies
- Deeper dive on cron scheduling and long-running processes

---

## Module 4, Video D1: Agents, tools, and data access

**Format:** Combined talking head + screen recording
**Length:** ~20 minutes
**Topic:** What makes something an "agent" vs. a chatbot; non-interactive mode with `claude -p`; connecting AI to data sources via MCP; Reroute NJ as a real-world agent-driven project; where these tools break down

### Outline (flexible — you will riff on these beats, not read them)

**Opening (~2 min) — Chatbots vs. agents**
Everything you've done so far has been interactive — you type, Claude responds, you direct. An agent is what happens when you step back and let the AI execute a multi-step plan on its own. It has tools (file access, web access, code execution), it makes decisions about which tool to use, and it keeps going until the task is done or it hits something it can't resolve.

This module covers two things: how to run Claude autonomously using `claude -p`, and how to connect it to your data using MCP.

**Non-interactive mode: `claude -p` (~4 min) — Explain + demo**
- `claude -p "process all the PDFs in this folder and extract key dates"` — Claude runs the task, writes the output, and exits. No back-and-forth. No session to manage.
- Show a live demo: run `claude -p` on a folder of sample documents. Watch it process them one by one and write results to an output file.
- Explain when to use it: batch processing, scheduled tasks (pair with cron from Module 3), pipeline stages where you want consistent behavior without human interaction
- Explain when NOT to use it: when you need to review intermediate steps, when the task requires judgment calls, when you're exploring and iterating

**MCP: connecting to data sources (~4 min) — Explain the concept**
- Model Context Protocol is a standard for giving AI access to external data — files, databases, APIs, web services
- The idea: instead of pasting data into a prompt, you point the AI at a data source and let it query what it needs
- An MCP server exposes data in a way Claude can read. A filesystem MCP server makes a folder queryable. A database MCP server lets Claude run queries.
- Where this breaks: permissions, authentication, schema mismatches, silent failures. The real skill is debugging the connection, not just setting it up.

**Live demo: `claude -p` on a document folder (~4 min) — Screen recording**
1. Show a folder of sample journalism documents (press releases, transcripts, notes)
2. Run `claude -p "Read every document in this folder. For each one, extract: the date, the main topic, all named people, and any dollar amounts mentioned. Save the results as a CSV."`
3. Watch it process. Show the output CSV.
4. "I didn't sit here and feed these in one at a time. I described the output format I wanted, pointed at the folder, and walked away. This is what autonomous processing looks like."

**Reroute NJ deep dive (~4 min) — Real-world agent example**
Walk through Reroute NJ as a complete example of what this course teaches:
- **Module 1 concepts in action**: the project has a CLAUDE.md, lives on GitHub, built from the terminal
- **Module 2 concepts**: the page generation and translation workflows are reusable scripts — describe what you want, Claude builds it
- **Module 3 concepts**: the coverage scraper runs on a cron schedule, commits and pushes automatically, handles dirty worktrees
- **Module 4 concepts**: the scraper connects to external data sources (news sites, NJ Transit alerts), processes them autonomously, and publishes results without human intervention
- 11 languages, zero build step, serving a real community during a real infrastructure disruption
- "This is what it looks like when you put all four modules together on a real project."

**Where things break (~2 min)**
Be honest about what doesn't work:
- MCP connections fail silently — you think it's querying your data but it's actually hallucinating
- Rate limits, token limits, and context window limits are real constraints
- Autonomous mode can do damage if you're not careful — it will happily delete files or overwrite data if you ask it to
- The human is still the journalist — the AI is a collaborator, not a replacement

**Course wrap-up (~1 min)**
"Over four weeks, you went from typing prompts in a browser to building a project that runs on your machine, uses custom skills, automates workflows, and connects to real data. Every piece of that project is documented on GitHub — clone it on a new machine and it works. Share it with a colleague and they inherit the context. That's the shift: from prompting to building. Good luck with the final project."

### Topics NOT covered in this video (addressed in written materials)
- Detailed MCP configuration (exercise walks through it with Claude)
- RAG as a formal concept (woven into MCP discussion naturally)
- Parametric vs. grounded knowledge terminology (written materials cover this)
- Specific MCP server types and setup (exercise + readings)

---

## Module 4, Video D2: (open slot)

**Status:** Not yet recorded. Possible topics for a second video or guest interview:
- Setting up an MCP server for local files and querying across them
- Guest: a journalist using AI agents in their newsroom
- Deep dive on where MCP/data connections fail and how to debug them
- Demonstration of a more advanced agent workflow (multi-step delegation)

---

## Production notes

### Recording style
- Combined talking head + screen recording in a single continuous take (~20 min each)
- No formal script — outline the beats, then riff naturally
- Transitions between talking head and screen recording happen organically (minimize jump cuts)
- PowerShell is the primary terminal for demos (matches Module 1 video)

### Technical setup
- Use a clean desktop with no personal files visible
- Increase terminal and Claude Code font size before recording (24pt minimum)
- Record at 1080p minimum
- Use the same project folder across all demos — students should see continuity

### Files to prepare before recording
- `Resources/examples/beat-project/` files — press releases, council minutes, interview notes
- A sample city council meeting transcript for the Module 2 skill demo
- The scheduler/cron setup for the Module 3 automation demo
- A folder of sample documents for the Module 4 `claude -p` demo
- Reroute NJ project accessible for Module 3 reference and Module 4 deep dive

### The running project
The demo videos should use the same project throughout — starting as an empty folder in Module 1, growing into a full project by Module 4. This makes the arc concrete and visible. Students see one project evolve across four weeks, not four disconnected demos.
