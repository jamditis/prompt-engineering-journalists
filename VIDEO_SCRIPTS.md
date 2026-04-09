# Video script outlines

**Course:** Advanced prompt engineering for journalists
**Instructor:** Joe Amditis, Center for Cooperative Media, Montclair State University

## Overview

Modules 1-3 have 1-2 recorded lectures each (~15-20 min), combining talking head and screen recording in a single flow. Module 4 has 4 shorter videos (~10-14 min each) with varied formats — screen recording with voiceover, talking head with slides, and mixed.

| # | Video | Module | Format | Length | Status |
|---|-------|--------|--------|--------|--------|
| 1 | Promo video | — | Talking head | 60-90 sec | Planned |
| 2 | Welcome video | Intro | Talking head | 2-3 min | Planned |
| A1 | Escaping the browser | Module 1 | Talking head + screen recording | ~20 min | Recorded |
| A2 | (TBD — possible second video or guest) | Module 1 | — | — | Open |
| B1 | From prompts to skills | Module 2 | Talking head + screen recording | ~36 min | Recorded |
| B2 | Skills from workflows | Module 2 | Screen recording + voiceover | ~13 min | Recorded |
| C1 | Describing workflows and having AI build them | Module 3 | Talking head + screen recording | ~15-20 min | Planned |
| C2 | (TBD — possible second video or guest) | Module 3 | — | — | Open |
| 11 | Getting more out of your sessions | Module 4 | Screen recording + voiceover | ~12-14 min | Planned |
| 12 | Settings, caching, and connecting to data | Module 4 | Talking head + slides + screen demos | ~12 min | Planned |
| 13 | Calling other agents from the command line | Module 4 | Screen recording + voiceover | ~10 min | Planned |
| 14 | What's next + course close | Module 4 | Talking head + slides | ~10 min | Planned |

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

## Module 2, Video B1: From prompts to skills (RECORDED)

**Format:** Combined talking head + screen recording
**Length:** ~36 minutes
**File:** `MOOC-B1_eng.srt`
**Topic:** What skills, commands, plugins, and hooks are; live demo building a social media video content analysis pipeline across five platforms using Claude Code

### What was covered

**0:00-5:00 — Introduction and concepts**
- Opens with Joe and his cat Reese as "guest lecturer"
- What are skills, commands, plugins, hooks? Skills = markdown files that load on demand via slash commands. Plugins = bundles of skills. Hooks = auto-triggered actions (notify and stop types).
- One-way-door concept: stop hooks block irreversible actions for human review
- References skills.amditis.tech as a resource

**5:00-36:00 — Live demo: social media video content analysis pipeline**
Full live walkthrough building a multi-platform video analysis pipeline for NYC Mayor Zohran Mamdani's social media presence (Instagram, YouTube, TikTok, Twitter, Facebook).

- **Planning phase:** Uses the Superpowers plugin (brainstorming skill, writing-plans skill, subagent-driven development skill) for structured planning. AskUserQuestion tool for interactive decision-making during the planning process.
- **Video download — YouTube + TikTok:** yt-dlp downloads 15 videos from each platform successfully
- **Video download — Twitter, Instagram, Facebook:** yt-dlp fails for these platforms. Switches to Playwright browser automation, logging into social accounts manually so Playwright can access the content
- **Result:** 76 total videos downloaded across 5 platforms
- **Whisper transcription:** Starts with the large model, but GPU maxes out while running OBS for screen recording. Switches to the turbo model to free up resources.
- **Frame extraction + vision analysis:** Sampled frames from videos, not full frame-by-frame extraction
- **Interactive dashboard:** Builds a local dashboard with video catalog, transcript search, topic analysis, sentiment distribution, and cross-platform comparison
- **Project hygiene:** Updates CLAUDE.md and README with project state and lessons learned as the workflow progresses

### Key themes from the recording
- The CLI can do things the browser interface cannot (file access, tool chaining, persistent output)
- No external API cost — all processing happens locally
- Traceable and verifiable — every step produces files you can inspect
- Work continues in the background while you do other things

---

## Module 2, Video B2: Skills from workflows (RECORDED)

**Format:** Screen recording with voiceover
**Length:** ~13 minutes
**File:** `MOOC-B2_eng.srt`
**Topic:** Turning the B1 demo workflow into reusable skills and a proper Claude Code plugin; assignment walkthrough

### What was covered

**0:00-8:00 — Building skills from the pipeline**
- Continuation from B1 — taking the ad-hoc workflow and packaging it as reusable skills
- Creates 4 modular skills: video download, transcription, frame analysis, video dashboard
- Builds a proper Claude Code plugin with plugin.json and versioning

**8:00-10:00 — Troubleshooting**
- Plugin didn't show up after creation — wrong directory placement
- Had to move files to the correct location and restart Claude Code multiple times before the plugin loaded

**10:00-11:00 — Testing**
- Runs the video-dashboard skill to verify the plugin works end-to-end

**11:00-13:00 — Assignment walkthrough**
- Students should run their own workflow (any topic, any platforms), take notes on pain points and insights, then build their own slash commands or plugin from what they learned
- Points to skills.amditis.tech for pre-made skills (one-way-door, PDF playground, etc.)
- Directs students to instructor forums for discussion and help

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

## Module 4, Video 11: Getting more out of your sessions

**Format:** Screen recording with voiceover
**Length:** ~12-14 minutes
**Topic:** Extended thinking, structured outputs, plan mode, memory, /compact, and session management — the features that change the quality and durability of your Claude Code sessions

### Outline (flexible — riff on these beats, don't read them)

**Opening (~1 min) — You've been driving with half the gears**
You've been using Claude Code for three weeks now. You've set up projects, built skills, automated workflows. But you've been using the tool on autopilot — there are features built into Claude Code that most people never discover, and they change the quality of what you get back. This video covers the ones that matter most.

**Extended thinking (~3 min) — Explain + demo**
- What it is: you can tell Claude to think before it responds. Instead of generating an answer immediately, it works through the problem step by step — reading, comparing, checking — before giving you a result.
- How to trigger it: just say "think harder" or "think deeply about this." You can also set a thinking budget in settings.
- Demo: take two budget documents. Ask Claude to compare them — first normally, then with "think carefully about this." Show how the extended thinking version catches discrepancies the quick version misses.
- The tradeoff: slower, uses more tokens, not worth it for simple asks. Use it when the task requires actual analysis, not just retrieval.
- [SLIDE: extended-thinking.svg]

**Structured outputs (~3 min) — Explain + demo**
- The idea: instead of getting prose back, ask for data in a specific format — JSON, CSV, markdown table, YAML.
- Why this matters: a JSON array of extracted sources can feed a script or spreadsheet. A CSV of quotes can go into a database. Prose summaries just sit there — you can't do anything with them programmatically.
- Demo: take a press release. Ask Claude to extract all named people, dollar amounts, and dates — first as prose, then as JSON. Show how the JSON is immediately usable.
- Combining with extended thinking: "Think carefully about which quotes in this transcript are newsworthy, then return them as a JSON array with speaker, quote, and context fields."
- [SLIDE: structured-outputs.svg]

**Plan mode (~3 min) — Explain + demo**
- What it is: instead of Claude just starting to work, it proposes a plan first. You review the plan, and you can approve it, edit it, or reject it.
- How to enter: type /plan or press shift+tab.
- Demo: "I need to process 20 PDFs and extract the budget line items from each one." Claude proposes its approach — which files to read first, what to extract, where to save results. Walk through approving, editing a step, then letting it run.
- The journalism lesson: plan mode is editorial oversight applied to the tool itself. You're reviewing the approach before it executes, the same way an editor reviews a story plan before the reporter writes.
- [SLIDE: plan-mode-flow.svg]

**Memory, /compact, and session management (~3-4 min) — Explain + demo**
- The problem: long sessions eat context. Claude has a finite window — and as the conversation fills up, it starts losing track of what you said earlier. You'll notice it repeating itself, missing details, or getting sluggish.
- /compact: manually compress the conversation. Claude summarizes what's happened so far and frees up space. Use it when you notice the session degrading.
- Memory: Claude can remember things across sessions. Tell it "remember that we use AP style" or "remember that my editor is Sarah" and it persists. Show how to check what it remembers.
- Session hygiene: when to start a new session vs. keep going. Rule of thumb — if you're switching topics or the session feels off, start fresh. A clean session with a good CLAUDE.md beats a long session with accumulated context.
- This connects to the caching discussion in the next video.
- [SLIDE: context-window-session.svg]

**Close (~30 sec)**
"Those are the features that change how you work inside a session. Extended thinking for complex analysis, structured outputs for reusable data, plan mode for oversight, and context management to keep sessions healthy. Next video: what's happening under the hood when you start a session, and how to control it."

---

## Module 4, Video 12: Settings, caching, and connecting to data

**Format:** Talking head + slides + brief screen demos
**Length:** ~12 minutes
**Topic:** Settings and configuration, prompt caching and why mid-session changes hurt, MCP at a conceptual level — what's happening under the hood

### Outline (flexible — riff on these beats, don't read them)

**Opening (~1 min) — What happens before your first message**
Every time you launch Claude Code, a bunch of things happen before you type anything. It reads your CLAUDE.md, loads your settings, connects to any configured MCP servers, sets up the model, and initializes the context window. This video is about understanding and controlling that process.

**Settings and configuration (~4 min) — Explain + show**
- The settings menu: type /config. Walk through what's there — model selection, permissions, theme.
- Permission modes: you can adjust what Claude does without asking. Useful when you trust the workflow. Dangerous when you don't. Show the spectrum from "ask me everything" to "just do it."
- The settings hierarchy: global settings (~/.claude/settings.json) → project settings (.claude.json) → session overrides (/config). Higher layers override lower ones. This means you can set defaults globally and customize per project.
- The .claude.json file: project-specific settings that live in the repo and travel with it. Anyone who clones the repo gets the same configuration.
- [SLIDE: settings-hierarchy.svg]

**Prompt caching and mid-session changes (~4 min) — Explain with slides**
- What prompt caching is: Anthropic caches the beginning of your conversation so it doesn't have to reprocess it every turn. This makes responses faster and cheaper.
- Why it breaks: if you switch models mid-session — say, from Sonnet to Opus — the cache is invalidated. The entire conversation has to be reprocessed from scratch. You lose the speed benefit and pay full price.
- Same thing happens if you change certain settings mid-session.
- The practical rule: decide your model and settings before you start working. If you need to switch, just start a fresh session. It's faster than fighting a broken cache.
- This isn't just about cost — it affects response quality too. A cache miss means the model is reprocessing everything cold.
- [SLIDE: prompt-caching.svg]

**MCP: connecting Claude to external data (~4 min) — Explain with slides**
- What MCP is: Model Context Protocol. An open standard for connecting AI to data sources — files, databases, APIs, Google Drive, Slack. Think of it as a bridge.
- What an MCP server does: it's a small program that makes a data source available to Claude in a standardized way. There are dozens of them for different things.
- What the config looks like: show a .mcp.json file briefly. "This is JSON. It tells Claude where to find the server and what it can access. You don't have to write this by hand — describe what you want and Claude generates it."
- The grounded vs. parametric distinction in 60 seconds: when Claude answers from documents it's actually reading, it can cite them. When it answers from training data, it's guessing. That distinction matters for journalism — citable vs. not.
- Honest about the rough edges: MCP connections break. Tokens expire. Paths change. Permissions shift. This is the part of the tool stack that's still being figured out.
- Where to go deeper: the readings for this module cover MCP setup and RAG in detail for students who want to try it.
- [SLIDE: mcp-architecture.svg, parametric-vs-grounded.svg]

**Close (~30 sec)**
"Now you know what's happening under the hood — settings, caching, data connections. Next video: Claude Code isn't the only CLI agent, and the interesting part is you can use them together."

---

## Module 4, Video 13: Calling other agents from the command line

**Format:** Screen recording with voiceover
**Length:** ~10 minutes
**Topic:** The CLI agent landscape (Claude Code, Gemini CLI, Codex CLI, Copilot CLI), calling one from inside another, and a framework for choosing

### Outline (flexible — riff on these beats, don't read them)

**Opening (~1 min) — You don't have to pick one**
This course has focused on Claude Code, but it's not the only CLI agent. There are four major ones right now, and the interesting thing is you don't have to choose just one. You can use them together — even from inside the same session.

**The landscape: four CLI agents (~3 min) — Explain with slides**
- Claude Code (Anthropic): the tool you've been using. Paid — requires API credits or a Max subscription. Context file: CLAUDE.md.
- Gemini CLI (Google): free tier with 1,000 requests per day. Context file: GEMINI.md. Good for quick tasks where you want to save money.
- Codex CLI (OpenAI): paid, requires API credits or subscription. Context file: AGENTS.md.
- GitHub Copilot CLI (GitHub/Microsoft): comes with Copilot Pro, also has a limited free tier. Uses repo context rather than a dedicated context file.
- They use different models underneath. Different strengths, different pricing, different context conventions. Think of them as different reporters covering the same story — you'd ask each one different questions.
- [SLIDE: cli-agents-landscape.svg]

**Calling other agents from inside Claude Code (~4 min) — Demo**
- The pattern: Claude Code can shell out to any command-line tool, including other AI agents. It's just a subprocess call.
- Demo: inside a Claude Code session, ask it to run gemini -p "summarize this article" or copilot -p "review this code." Show the output coming back into the Claude Code session.
- Copilot's /delegate: offloads tasks to a cloud agent that creates a draft PR. Free parallel compute.
- Journalism demo: take the same press release. Run it through Claude and Gemini. Compare what each one flags as the lead. "Two models, same document, different editorial instincts."
- The practical limit: each subprocess call is a fresh session with no shared context. The calling agent doesn't know what the other agent "thought" — only what it returned.
- [SLIDE: cross-agent-workflow.svg]

**When to use which tool (~2 min) — Framework, not comparison**
- Don't do a feature-by-feature comparison — that's stale in months.
- Instead, four questions: What's the task? How much context does it need? Does it need tool access? How cost-sensitive am I?
- Honest take: for most journalism tasks, any of these will work. The differences matter at the edges — long documents, complex multi-step reasoning, structured output reliability.
- The real advice: try more than one. Develop your own sense. You wouldn't use one source for every story.

**Close (~30 sec)**
"You now know the full landscape of CLI agents and how to use them together. Last video: where all of this is heading, how to stay current, and a recap of the whole course."

---

## Module 4, Video 14: What's next + course close

**Format:** Talking head + slides
**Length:** ~10 minutes
**Topic:** Where CLI agents are heading, how to evaluate new tools, staying current without drowning, course recap and send-off

### Outline (flexible — riff on these beats, don't read them)

**Opening (~30 sec) — The tools will change, the way of working won't**
This is the last video. I want to talk about what comes next — not specific product announcements, but where this whole space is heading and how to keep up without losing your mind.

**Where this is heading (~4 min) — Talking head + slides**
- The trend: CLI agents are getting more capable fast. More tools, longer context windows, better reasoning, more autonomy. What you learned in this course is the floor, not the ceiling.
- Multi-agent patterns: agents that coordinate with each other — one does research, another writes, another reviews. You're not there yet, but it's the direction.
- The autonomy question: as these tools get more powerful, the editorial judgment question gets harder, not easier. The human-in-the-loop principle from this course doesn't expire — it gets more important. The more capable the tool, the more carefully you need to supervise it.
- How to evaluate new tools when they show up: four questions. Does it have file access? Does it support context files? Can it use tools? Can you see what it's doing? If a new tool passes all four, it's worth trying. If not, it's probably hype.
- [SLIDE: autonomy-spectrum.svg, tool-evaluation-framework.svg]

**Staying current without drowning (~3 min)**
- The problem: new tools, new features, new models every week. Nobody can track all of it.
- Sources worth following: Simon Willison's blog (best single source on what's actually new vs. hype), Generative AI in the Newsroom (journalism-specific), Ethan Mollick's One Useful Thing (the big picture).
- The test for whether a new feature matters: "Does this change how I'd do a task I already do?" If yes, learn it. If not, skip it and check back in six months.
- Keep your CLAUDE.md files alive. Update them as you learn new things, as your beat changes, as tools evolve. The context file is the living document of your working relationship with the tool.

**Course recap and send-off (~3 min) — Talking head**
- Module 1: you moved from the browser to the terminal. You installed Claude Code, set up a project, and wrote a context file. You learned what a harness is and started using one.
- Module 2: you turned your expertise into reusable tools. Custom skills, hooks, slash commands that encode your editorial standards.
- Module 3: you described a workflow in plain English and had the AI build it. You tested it, broke it, debugged it, and committed it.
- Module 4: you learned the features and techniques that make you a power user — extended thinking, structured outputs, plan mode, caching, multi-agent workflows, and how to evaluate what comes next.
- The arc: from prompting to managing. You're not typing messages into a chat window anymore. You're building environments, delegating work, and maintaining tools.
- Final project: build something real for your beat. Put it on GitHub. Someone can clone it and inherit your setup.
- "Good luck with the final project. I'll see you in the discussion forums."
- [SLIDE: course-arc.svg]

### Production notes
- All 4 videos are shorter than the Module 1-3 videos (~10-14 min vs. ~20 min)
- Videos 11 and 13 are screen recordings with voiceover — no talking head segments
- Video 12 mixes talking head with slides and brief screen demos
- Video 14 is talking head with slides — no screen recording
- Keep demos short and focused: show one thing, explain it, move on. Don't build anything from scratch.
- Slide references point to SVGs in docs/slides/module-4-diagrams/

---

## Production notes

### Recording style
- Modules 1-3: combined talking head + screen recording in a single continuous take (~15-20 min each)
- Module 4: shorter videos (~10-14 min), varied formats (see per-video notes above)
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
- Social media accounts bookmarked for a live demo (Module 2 used Zohran Mamdani)
- The scheduler/cron setup for the Module 3 automation demo
- Two budget documents for the Module 4 extended thinking demo
- A press release for the Module 4 structured outputs and cross-agent demos
- 20 sample PDFs for the Module 4 plan mode demo
- A .mcp.json config file to show briefly in Video 12

### The running project
The demo videos should use the same project throughout — starting as an empty folder in Module 1, growing into a full project by Module 4. This makes the arc concrete and visible. Students see one project evolve across four weeks, not four disconnected demos.
