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

## Module 2, Video 1: From prompts to skills

**Format:** Talking head + slides
**Length:** ~6 minutes
**Topic:** The prompt → skill progression; what SKILL.md files are; hooks as editorial quality checks

### Outline

**0:00-0:30 — Hook**
"You've written a really good prompt for something — extracting action items from council minutes, say. You use it every week. Every week you either retype it from memory or hunt for it in your notes. That's not a system. Skills fix it."

**0:30-1:30 — The maturity progression [SLIDE: progression diagram]**
- Ad-hoc prompt: typed from memory each time
- Saved prompt: in a notes app, copied and pasted
- Skill: a markdown file that Claude Code loads as a slash command — type `/meeting-minutes` and the prompt is applied instantly
- Hook: runs automatically on a trigger
- Plugin: a shareable package of skills and hooks

"Most journalists are at stage 1 or 2. This module moves you to 3. Stage 4 is covered in this module too — hooks are one of the most useful things you'll build."

**1:30-2:30 — What a SKILL.md file looks like [SLIDE: annotated skill example]**
Show the structure: a short description at the top, then the instructions in plain English. The instructions ARE the prompt — but now they live in a file, they're versioned in Git, and they're invoked with a slash command instead of being retyped. You can read them, edit them, share them. They're just text files.

**2:30-3:30 — Hooks: notify vs. stop [SLIDE: hook flow diagram]**
Two kinds. Notify hooks run in the background and flag issues without stopping your work — attribution warnings, style checks, fact-checkable claims. Stop hooks pause execution and require your confirmation before proceeding. These are for one-way doors: actions that are hard to undo.

Concrete example: the `one-way-door-check` hook from the journalism skills library. Every time Claude Code tries to create a new file, this hook checks the filename against a list of patterns — database schemas, infrastructure configs, API contracts. If there's a match, it blocks the write and forces Claude to present you with options and trade-offs. Two-way door files — documentation, components, utilities — pass through silently. You never have to think about invoking it. It fires automatically.

The hook script is readable — you can open it and see exactly what it's checking. A few dozen lines of bash. That transparency is the point: you should understand what's running in the background.

And at the upper end of what's possible: Superpowers (obra/superpowers on GitHub). A third-party plugin that fires different skills automatically at each stage of a project — brainstorming before any code is written, TDD enforcement during implementation, code review between tasks. A complete structured workflow, installed in one command. The journalism skills plugin follows the same model, built for newsroom work instead of software development.

**3:30-4:30 — The journalism skills library [SLIDE: skills by category]**
36 skills, 13 hooks. Source verification, FOIA requests, data journalism, editorial workflows. Installing it is one request to Claude Code — it clones the repository to your skills directory and registers everything. The skills appear as slash commands. You don't install them one by one.

**4:30-5:30 — Arc check: you're building the prototype**
"In Module 1, you set up the project and got it on GitHub. This week you add your first real tool to it. By the end of Module 2, your project will have a working skill you created yourself — something that encodes a workflow you actually use. That's the prototype stage."

**5:30-6:00 — What's next**
"In the demo, I'll install the journalism skills library and use the source-verification skill on a real claim. Then I'll show you how to create your own skill — which is the exercise this week."

---

## Module 2, Video 2: Installing and using journalism skills

**Format:** Screen recording with voiceover
**Length:** ~6 minutes
**Topic:** Installing the journalism skills plugin; running /source-verification; creating a simple custom skill

### Outline

**0:00-0:30 — What we're doing**
"Today: install the journalism skills library, verify a claim using the source-verification skill, and create one simple skill of our own. This is the prototype stage — the point where your project starts doing real work."

**0:30-1:30 — Install via Claude Code [SCREEN: Claude Code session]**
Open Claude Code in the beat project directory.
Type: `/install-github-plugin jamditis/claude-skills-journalism`
Watch Claude clone and install the library.
Type `/help` — show the new skills listed.
"One request. No terminal syntax. The skills are now part of your toolkit."

**1:30-2:30 — Explore a skill file [SCREEN: VS Code showing a SKILL.md file]**
Ask Claude Code: "Open the source-verification skill file so I can read it."
Walk through the file: "This is just a markdown document. These are the instructions Claude follows when you invoke this skill. You can read them, edit them, copy them. Everything in this library is like this."

**2:30-4:30 — Run /source-verification [SCREEN: Claude Code session]**
Use a realistic example — a viral claim from a recent news cycle.
Paste the claim. Type `/source-verification`.
Walk through what Claude does: applies the SIFT method, identifies the origin of the claim, looks for primary source documentation, notes what it can and can't verify.
Show the structured output.
"This is what you'd do manually in 20-30 minutes. The skill makes it consistent and fast. Notice it tells you what it couldn't verify — it's not suppressing uncertainty, it's flagging it."

**4:30-5:30 — Create a simple custom skill [SCREEN: Claude Code + VS Code]**
Type `/plan` first, then describe the skill:
"I want to create a skill called meeting-minutes that extracts action items, votes, and named officials from a city council transcript. Plan the structure of the skill file — what sections it will have, what steps it will include — but don't write it yet."

Watch Claude present the proposed structure. Read it.
"This is the plan. The skill will have a YAML header, a section for what it looks for, a section for how it formats the output. It looks right to me. Now I'll approve and have it write the actual file."

Type: "Looks good — go ahead and write it."
Watch Claude draft the SKILL.md. Invoke it on a sample transcript.
"Plan first, then build. You reviewed the approach before any file was written. Same principle applies every time you're asking Claude to build something you'll actually use."

**5:30-6:00 — Arc check + what's next**
"Your project now has a working prototype. In Module 3, you'll automate it — build a workflow that runs this on new transcripts automatically. See you there."

---

## Module 3, Video 1: Describing workflows and having AI build them

**Format:** Talking head + slides
**Length:** ~6 minutes
**Topic:** What automation looks like with a CLI LLM; how to describe multi-step workflows; cost and security before deploying

### Outline

**0:00-0:30 — Hook**
"You have a skill that works on one document. Now you want it to work on every document in a folder, automatically, every time a new one arrives. That's a workflow. And the way you build it is the same way you've been doing everything else in this course: you describe what you want and Claude builds it."

**0:30-1:30 — What automation means with a CLI LLM [SLIDE: workflow diagram]**
Explain that a workflow is a sequence of steps. With a CLI LLM, you describe the sequence in natural language — "fetch this, process it this way, save it here, notify me if anything looks off" — and Claude translates that into a script. The script can be run manually, scheduled, or triggered automatically. You don't write the script. You review it, test it, and decide whether to run it.

"But before Claude builds anything, you can ask it to plan first. In Claude Code, that's the `/plan` command. Gemini CLI and Codex CLI have equivalent approaches — ask them to plan before building. You describe what you want, Claude proposes an approach, you review it before any code is written. Think of it as seeing the outline before the reporter writes the story — you catch misunderstandings at the planning stage instead of after the pipeline is already built."

**1:30-2:30 — Multi-stage processing [SLIDE: stages example]**
Walk through the concept, not the syntax: each stage has a clear input and a clear output. If something goes wrong, you know which stage failed. This is how you build automation you can actually trust — because you can audit each stage separately.

"And when a stage fails, you don't have to guess what went wrong. Paste the error message back into your CLI session and ask Claude to explain it. Your tool already knows the code it helped you write. It can read the exact error, trace it to the right stage, and tell you what to fix — or fix it for you. You'll see this happen in the demo."

**2:30-3:30 — Testing before running at scale [SLIDE: test small → run big]**
"Before you run a workflow on 10,000 documents, you run it on 5. You check the output. You confirm it's doing what you expected. API calls cost money. An untested workflow that runs overnight and produces garbage results costs both money and time. Always test small first. In the demo, you'll see what happens when you skip this step — it fails after two articles. You'll also see how quickly you can diagnose and fix it when you have a collaborator who can read the error."

**3:30-4:30 — Security: what you need to know [SLIDE: API key dos and don'ts]**
Three rules, explained in plain terms:
1. Your API key is a password. It lives in an environment variable, not in a script file.
2. If a script file contains your API key, that file must never go to GitHub. Claude Code knows this and will warn you.
3. Before running a workflow that touches sensitive documents, ask Claude to review it for anything that phones home or sends data to unexpected places.

"You don't need to audit the code yourself. Ask Claude to audit it. That's part of having a collaborator."

**4:30-5:30 — Arc check: testing and security stage [SLIDE: arc with stage 4 highlighted]**
"You're at the stage where your prototype becomes a workflow. Before it runs on real data, you test it and you check it. This week's demo shows exactly that process: you'll describe the workflow, Claude will build it, and then you'll walk through testing and security review together."

**5:30-6:00 — What's next**
"In the demo, I'll ask Claude Code to build an article-to-newsletter pipeline, test it on a handful of articles, and review it for anything that needs attention before running it on a real workload. See you there."

---

## Module 3, Video 2: Ask Claude Code to build you a pipeline

**Format:** Screen recording with voiceover
**Length:** ~6 minutes
**Topic:** Describing a multi-step workflow to Claude Code; reviewing and testing the script it produces; security check before deploying

### Outline

**0:00-0:30 — What we're building**
"Today I'm going to describe a journalism workflow in plain English and have Claude Code build it. Then we're going to test it — and something is going to go wrong. That's not an accident. Showing you the failure and how to recover from it is the point."

**0:30-2:00 — Plan the workflow first [SCREEN: Claude Code session]**
Type `/plan`, then describe the workflow:
"I want a pipeline that takes a news article URL, fetches the article, strips out the ads and navigation, summarizes it in three bullets for a weekly newsletter, and saves the result as a markdown file. I'll run this on multiple articles per week. Plan this out — don't build anything yet."

Watch Claude present a plan: what stages it proposes, what tool it plans to use for extraction, how it plans to handle the API key.

"Before any code is written, I can see the whole approach. Are the stages right — fetch, extract, summarize, save? Is the API key handled as an environment variable, not hardcoded? Is there anything here I'd want to change before it starts? In this case it looks right, so I'll approve it."

Type: "That looks good — go ahead and build it."

Watch Claude:
- Ask a clarifying question or two (format preferences for the output?)
- Write the script
- Explain what it built

"Notice I didn't say 'use curl' or 'write a bash script.' I described the outcome. The plan stage let me review the approach. Claude figured out the implementation."

**2:00-2:30 — Glance at the script [SCREEN: Script file in VS Code]**
Ask Claude to open the script file. Read the key sections together — fetch, parse, summarize, save.
"You don't need to understand every line. But you should be able to trace the stages: it fetches, it cleans, it summarizes, it saves. If any section is unclear, ask Claude to explain it before running anything."

**2:30-3:30 — Test it — and it breaks [SCREEN: Claude Code session]**
Type: "Run this script on these five article URLs and save the output."
Watch it run on the first two articles fine. Then it errors out — the API rate limit kicks in. The terminal shows an error response.

"Look at that. The script ran fine on two articles, then failed on the third. This is why you test before running a full batch. If I'd just pointed it at my full list of 50 articles and walked away, I'd come back to 48 failed runs and maybe a bill for the two API calls that did go through."

Highlight the error in the terminal. Copy it. Paste it directly back into Claude Code with:
```
Here's what I got when I ran the script — what went wrong and how do I fix it?
[paste error message]
```
"I didn't describe the error. I pasted it. The tool built this script, so it can read the error in context and diagnose it immediately. This is the loop you'll use every time something breaks: see the error, paste the error, get the fix. No paraphrasing. No context rebuilding. Just paste and ask."

Watch Claude explain: no delay between API calls — the external service started returning rate limit errors. This is a real failure mode from real projects.

**3:30-4:30 — Diagnose and fix [SCREEN: Claude Code session]**
Ask Claude: "Update the script to add a one-second delay between requests, and add retry logic — if a request fails, wait five seconds and try once more before giving up."

Watch Claude write the fix. Brief explanation of what it's adding.

"I described the problem and what I wanted. Claude wrote the fix. Now run the test again."

Run it on the same five articles. It works all the way through.

"That pause between requests? That's the difference between a script that works on your desk and one that works on a real article list. You would have found this out eventually. Better to find it on five articles than fifty."

**4:30-5:00 — Security review [SCREEN: Claude Code session]**
Type: "Before I run this on my full article list, review the script — including the retry logic we just added — for security issues. Is anything hardcoded that shouldn't be? Any API keys in the code instead of environment variables?"
Watch Claude audit and report.
"Ask your collaborator to check its own work. This takes 30 seconds."

**5:00-5:30 — Commit to GitHub [SCREEN: Claude Code session]**
Type: "Commit this script to the beat project repository with a commit message that describes what it does and notes the rate limiting fix."
Watch Claude run the git add/commit. Note: the commit message documents the fix, so future-you knows what happened.
"Version control isn't just backup. That commit message is a record of what broke and how you fixed it."

**5:30-6:00 — Arc check + what's next**
"Your project has a tested, debugged, secured, version-controlled workflow. You hit a real problem, diagnosed it with Claude, and fixed it. That process — describe the problem, get a diagnosis, implement the fix, test again — is the core loop of building anything with a CLI LLM. Next week you connect it to live data and make it shareable. See you in Module 4."

---

## Module 4, Video 1: Why AI makes things up (and how to fix it)

**Format:** Talking head + slides
**Length:** ~6 minutes
**Topic:** Parametric vs. grounded knowledge; RAG; why source attribution matters; MCP; human-in-the-loop

### Outline

**0:00-0:30 — Hook**
"AI makes things up. You know this. It's called hallucination. But it's worth understanding exactly why it happens, because the explanation leads directly to the fix. And the fix matters a lot if you're using AI in journalism."

**0:30-1:30 — Parametric vs. grounded knowledge [SLIDE: two memory types]**
Parametric: baked into the model during training — vast, but frozen at a cutoff date, and sometimes wrong. Grounded: retrieved from actual documents at query time. RAG is the technique of replacing parametric memory with grounded memory for a specific domain. When the AI cites a specific document, that's grounded knowledge. That's citable.

**1:30-2:30 — How RAG works [SLIDE: retrieve-then-generate pipeline]**
The pattern: you ask a question → the system searches a knowledge base → relevant documents are retrieved and passed to the model → the model generates a response based on those documents, not its training data. The sources are cited. The response can be traced back to its origin.

**2:30-3:30 — Why this matters for journalism [SLIDE: attribution chain]**
"'Claude said this' is not attributable. 'Claude synthesized this from council-minutes-2026-02-12.md, paragraph 4' is. RAG makes the second version possible. And for journalism, attribution that survives the AI step is not a nice-to-have — it's the baseline."

"You already know this rule: if you can't cite it, don't publish it. RAG is how you make that rule hold when AI is in the workflow."

**3:30-4:30 — Agents and human-in-the-loop [SLIDE: autonomy spectrum]**
Spectrum: read-only (AI researches, you decide) → supervised action (AI proposes, you approve) → autonomous (AI acts, you review the log). For most journalism use cases, supervised action is the right level. "Human-in-the-loop is not optional" — not as a regulatory disclaimer but because you are still the journalist. The AI is a research collaborator, not a reporter.

**4:30-5:30 — MCP as the bridge [SLIDE: MCP architecture]**
Model Context Protocol: Anthropic's open standard for connecting AI models to external data sources and tools. An MCP server exposes a database, file system, or API to Claude in a standardized way. Today's demo: a directory of journalism documents becomes a queryable knowledge base. Claude searches it, retrieves relevant content, and cites its sources.

**5:30-6:00 — Arc check + what's next**
"You're at the final stage: live and shareable. In the demo, you'll connect Claude to a local archive using MCP, see it cite specific documents in its answers, and publish the finished project to GitHub. That's the capstone."

---

## Module 4, Video 2: Connecting Claude to a knowledge base

**Format:** Screen recording with voiceover
**Length:** ~6 minutes
**Topic:** Configuring MCP; querying a knowledge base with source citations; publishing the finished project to GitHub

### Outline

**0:00-0:30 — What we're doing**
"Today I'm connecting Claude to a local archive of journalism documents using MCP — and then I'm going to ask Claude to configure it for me, because that's how we do things in this course. At the end, we're publishing the project to GitHub."

**0:30-1:30 — Ask Claude to set up MCP [SCREEN: Claude Code session]**
Type: "I want to connect Claude to a local folder called beat-archive as a knowledge base. Set up an MCP server that lets me query those documents. Walk me through it and handle the configuration."
Watch Claude:
- Explain what MCP is and what it will do
- Create or update the claude.json config file
- Prompt you to restart Claude Code
- Verify the connection with `/doctor` or `/mcp`

"I didn't write any configuration JSON. I asked Claude to configure itself."

**1:30-2:30 — Populate the archive [SCREEN: Finder / Claude Code]**
Ask Claude to populate the beat-archive folder with the example documents from the project.
Show the folder contents — press releases, council minutes, interview notes.
"This is the knowledge base. These are real documents. Claude doesn't know their contents yet — it will retrieve them as needed when you ask questions."

**2:30-4:00 — Query with source citations [SCREEN: Claude Code session]**
Ask questions:
- "What did the city council decide about Riverside Park?"
- "Are there any mentions of contractor billing in these documents?"
- "Write a background paragraph on the park closure situation, citing your sources."

For each response, point out the citations — specific file names and context.
Compare to asking the same question without MCP: Claude's answer is generic or fabricated.
"Same question. With MCP, Claude has real documents to cite. Without it, it's filling in from training data — which is exactly where hallucination comes from."

**4:00-5:00 — Publish the finished project [SCREEN: Claude Code session + GitHub]**
Type: "Write a README for this project that explains what it does, how to set it up, and how to use it. Then commit everything and push to GitHub."
Watch Claude write the README, commit, push.
Open the GitHub repo in a browser. Show the finished project: CLAUDE.md, skills, pipeline script, MCP config, README.
"Look at what's in this repo: CLAUDE.md, skills, hooks, pipeline script, MCP config. Every decision about how Claude works on this project is committed here. Clone this on a new machine and the same context comes with it. Give the link to a colleague and they inherit the same environment. That's context engineering at full scale — and that's what you've spent four weeks building."

**5:00-5:30 — Final project framing**
"Your final project asks you to build something like this for a real journalism use case. It can be a pipeline, a skill library, a RAG setup, or some combination. The requirements are: it solves a real problem, it has a CLAUDE.md, and it's documented on GitHub. The rest is your design."

**5:30-6:00 — Course close**
"That's the arc: idea, GitHub, prototype, testing and security, live and shareable. You came in knowing how to use AI through a browser. You're leaving knowing how to work with AI as a collaborator — with your files, on your terms, in a form you can share. The tools will change. The way of working won't. Good luck with the final project."

---

## Production notes

### Talking head videos
- Record in one setup with consistent framing and lighting
- Slides should be minimal — diagrams and frameworks only, not text walls
- Arc diagram appears in multiple videos — design it once and reuse it
- Suggested slide tool: Google Slides or Keynote with clean dark theme

### Screen recording videos
- Use a clean desktop with no personal files visible
- Increase terminal and Claude Code font size before recording (24pt minimum)
- Use the beat project scaffolded in Module 1 as the running context through Modules 2-4
- Record at 1080p minimum
- The "greenfield-beat" project is the through-line — use consistent file names across all demo videos

### Files to prepare before recording
- `Resources/examples/beat-project/` files — press releases, council minutes, interview notes
- A real news article URL for the pipeline demo (Module 3)
- A viral claim or questionable press release for the source-verification demo (Module 2)
- A populated `~/beat-archive/` that is the same as or extends the beat project files (Module 4)
- A clean GitHub account or test account to show the push-to-GitHub steps without exposing personal repos

### The running project
The demo videos should use the same project throughout — starting as an empty folder in Module 1, growing into a full project by Module 4. This makes the arc concrete and visible. Students see one project evolve across four weeks, not four disconnected demos.
