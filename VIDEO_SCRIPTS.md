# Video script outlines

**Course:** Advanced prompt engineering for journalists
**Instructor:** Joe Amditis, Center for Cooperative Media, Montclair State University

## Overview

| # | Video | Module | Format | Target length |
|---|-------|--------|--------|---------------|
| 1 | Promo video | — | Talking head | 1-2 min |
| 2 | Welcome video | Intro | Talking head | 2-3 min |
| 3 | What CLI LLMs are and why they matter | Module 1 | Talking head + slides | ~6 min |
| 4 | Getting started with Claude Code | Module 1 | Screen recording | ~6 min |
| 5 | The context file problem | Module 2 | Talking head + slides | ~6 min |
| 6 | Setting up your beat project | Module 2 | Screen recording | ~6 min |
| 7 | From prompts to skills | Module 3 | Talking head + slides | ~6 min |
| 8 | Installing and using journalism skills | Module 3 | Screen recording | ~6 min |
| 9 | Describing workflows and having AI build them | Module 4 | Talking head + slides | ~6 min |
| 10 | Ask Claude Code to build you a pipeline | Module 4 | Screen recording | ~6 min |
| 11 | Why AI makes things up (and how to fix it) | Module 5 | Talking head + slides | ~6 min |
| 12 | Connecting Claude to a knowledge base | Module 5 | Screen recording | ~6 min |

---

## The project arc (thread through all videos)

Each module maps to a stage of an LLM-assisted journalism project. This arc should be introduced in the Welcome Video and called back in each module:

| Stage | Module | What happens |
|-------|--------|--------------|
| **Idea** | Module 1 | Install CLI LLM tools; understand what's now possible |
| **GitHub** | Module 2 | Set up the project, write the context file, get it into version control |
| **Prototype** | Module 3 | Build your first reusable tool — a skill or workflow |
| **Testing + security** | Module 4 | Automate, test on real data, handle API keys safely |
| **Live + shareable** | Module 5 | Connect to live data via MCP; publish the project on GitHub |

---

## Video 1: Promo video

**Format:** Talking head
**Length:** 1-2 minutes
**Purpose:** Marketing — get journalists curious enough to enroll

### Outline

**0:00-0:15 — Hook**
Open with a concrete scenario: "You have a city council meeting transcript. You need every action item, every vote, and every named official in a formatted table — right now, before deadline. You describe that to an AI assistant running on your laptop. It reads the transcript and hands you the table. No browser, no upload, no copy-pasting. That's what this course teaches."

**0:15-0:45 — What this course is**
"I'm Joe Amditis from the Center for Cooperative Media at Montclair State University, and this is Advanced Prompt Engineering for Journalists — a free five-week course from the Knight Center at UT Austin. You already know how to use AI. This course teaches you to work with AI as a collaborator on real journalism projects: from the initial idea, through a GitHub repository, to something you can share with your whole newsroom."

**0:45-1:15 — What you'll walk away with**
Five concrete skills:
- Have conversations with AI that can read your files and take action on your computer
- Give your AI persistent knowledge of your beat, your sources, and your style
- Build reusable journalism tools that encode your editorial workflows
- Describe automation tasks in plain English and have the AI build them for you
- Connect AI to your own document archives with proper source attribution

**1:15-1:30 — Who it's for / CTA**
"If you've taken Prompt Engineering 101 or know how to write a good AI prompt — and if you want to go from typing prompts in a browser to actually delegating journalism work to an AI — this is your course. It's free. Sign up at JournalismCourses.org."

---

## Video 2: Welcome video

**Format:** Talking head
**Length:** 2-3 minutes
**Purpose:** Set tone, introduce the project arc, tell students what to do first

### Outline

**0:00-0:20 — Greeting**
"Welcome. I'm Joe Amditis. Over the next five weeks, you're going to build something real — a journalism tool or workflow powered by AI, documented on GitHub, and ready to share with colleagues. Each module is one stage of that project."

**0:20-1:00 — The project arc [SLIDE: idea → GitHub → prototype → testing + security → live + shareable]**
Introduce the arc. "Week one: you get your tools set up and you understand what's now possible. Week two: you scaffold a real project and get it into version control. Week three: you build your first prototype — a reusable skill that encodes something you do repeatedly. Week four: you automate it, test it on real data, and handle it securely. Week five: you connect it to live data and publish it."

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

## Module 1, Video 1: What CLI LLMs are and why they matter

**Format:** Talking head + slides
**Length:** ~6 minutes
**Topic:** Apps vs. harnesses; what CLI LLMs look like; what they can do that browser tools can't; the project arc begins

### Outline

**0:00-0:30 — Hook**
"You've been talking to AI through a browser. You type, it responds, you type again. That works for a lot of things. But every session forgets the last one. You can't hand it a folder of documents. You can't say 'do this every morning.' You're always the one in the middle, carrying information back and forth. CLI LLMs remove that bottleneck."

**0:30-1:30 — Apps vs. harnesses [SLIDE: models / apps / harnesses diagram]**
Mollick's three-layer model. Apps (ChatGPT.com, Claude.ai) are chat interfaces. Harnesses (Claude Code, Gemini CLI, Codex) give the same AI models tools, file access, and the ability to act. The same Claude Opus 4.6 that answers questions in a browser window will, inside Claude Code, read a directory of documents, write a script to process them, run that script, and show you the results — without you touching the files yourself.

**1:30-2:30 — What it actually looks like [SLIDE: Claude Code screenshot]**
"Claude Code looks like a terminal, but you use it like a chat window. You type in plain English. It responds, asks questions, and takes action. The difference from Claude.ai is what it can do: it has access to your file system, it can run code, and it can complete multi-step tasks. It's not a smarter chat window — it's a different kind of tool."

Show or describe: opening Claude Code, the prompt interface, a simple request in plain English.

**2:30-3:30 — What this means for journalism [SLIDE: side-by-side — before and after]**
Two scenarios:
- Before: download FOIA PDFs → upload one at a time to Claude.ai → copy output → paste somewhere else → repeat 200 times
- After: open Claude Code, say "read all the PDFs in this folder and find every mention of [contractor name]," wait, read the results

The second scenario requires no technical knowledge — only the ability to describe what you want.

**3:30-4:30 — The tools and which to start with [SLIDE: tool comparison table]**
Claude Code, Gemini CLI, Codex. Gemini CLI is free (1,000 requests/day) — good starting point if you don't have a paid subscription yet. Claude Code is the primary tool for Modules 3-5 because it has the most developed skills/hooks ecosystem. You only need one tool installed to complete Module 1.

**4:30-5:30 — The project arc [SLIDE: arc diagram again]**
"This module is the 'idea' stage. You're going to pick a real journalism problem you want to solve — something you do repeatedly that takes more time than it should. By the end of this week, you'll have installed a CLI LLM tool and had your first conversation with it about that problem. By the end of the course, you'll have a working solution on GitHub."

**5:30-6:00 — What's next**
"Read Mollick's guide in the required readings first — it gives you the conceptual map for everything we'll do. Then work through the exercise. See you in the forums."

---

## Module 1, Video 2: Getting started with Claude Code

**Format:** Screen recording with voiceover
**Length:** ~6 minutes
**Topic:** What Claude Code looks like when you open it; talking to it in plain English; what changes compared to Claude.ai

### Outline

**0:00-0:30 — What this video is**
"In this video, I'm going to open Claude Code and show you what it looks and feels like — how you talk to it, how it's similar to Claude.ai, and how it's different. The goal is not to teach you terminal commands. The goal is to show you that this is a conversation interface, and you already know how to have conversations."

**0:30-1:30 — Opening Claude Code [SCREEN: Terminal with Claude Code launching]**
Open the terminal. Run `claude`. Show the prompt — it looks like a text cursor waiting for input. "This is it. You type here, just like you type in a chat window. There's no send button — you press Enter."

Type: "Hello. What can you do?" — show Claude's response. Point out: it describes its tools, its file access, its ability to run commands. "Notice it's telling you it can work with your files. That's the key difference from Claude.ai."

**1:30-2:30 — The same task, two ways [SCREEN: Claude.ai and Claude Code side by side, or switch between them]**
Pick a simple task: extract the 5 most important facts from a news article.

In Claude.ai: paste the article text → get a response → you manually copy the output.

In Claude Code: "There's a press release in my downloads folder called park-closure.md. Read it and give me the 5 most important facts." Claude finds the file, reads it, returns the facts. "I didn't paste anything. I didn't know the exact file path. I just described what I wanted."

**2:30-3:30 — Ask it to do something with the output [SCREEN: Claude Code]**
Build on the previous exchange: "Save those facts as a bulleted list in a new file called notes.md."
Show Claude creating the file. Open it — the notes are there.
"I described an outcome. Claude handled everything in between: finding the file, reading it, formatting the output, saving it."

**3:30-4:30 — Comparing to Claude.ai: what's the same, what's different [SCREEN: side-by-side comparison or diagram]**
Same:
- You write in plain English
- The AI responds conversationally
- You can iterate, ask follow-ups, change your mind

Different:
- Claude Code can see and work with your local files
- It can run operations on your computer (create files, run scripts)
- Sessions can be resumed and extended — it has memory of what it just did
- It's running on your machine, not in a browser tab

**4:30-5:30 — When to use which [SCREEN: simple comparison slide or just voiceover]**
Use Claude.ai when: you need a quick answer, you're on your phone, or you're having a pure conversation.
Use Claude Code when: you're working on a project with files, you want to save outputs, or you want to build something you can run again.

"As the course progresses, almost everything we build will be done through Claude Code. You'll describe what you want. Claude will do the work. You'll review, refine, and direct."

**5:30-6:00 — Exercise preview**
"One more thing before the exercise: when something breaks — and it will — don't close the session and start over. Paste the error message directly into Claude Code and ask what it means. The tool has the context to help you. That's the debugging loop you'll use throughout this course.

The exercise this week asks you to install a tool, have your first conversation with it about a real journalism problem, and compare that experience to using a browser-based tool. Post your observations in the forum. See you in Module 2."

---

## Module 2, Video 1: The context file problem

**Format:** Talking head + slides
**Length:** ~6 minutes
**Topic:** Why AI forgets everything; what context files are; the deletion test; GitHub as version control

### Outline

**0:00-0:30 — Hook**
"Every time you open a new session with Claude Code, it doesn't know who you are. It doesn't know your beat, your publication's style, or what the city council calls its budget process. You're starting from zero each time. Context files fix that."

**0:30-1:30 — The fresh conversation problem [SLIDE: context window diagram]**
AI context is ephemeral — it exists for a session and disappears. A CLAUDE.md file gets read automatically every time you open a session in that directory. It's not magic — it's instructions that live in a file instead of your head. Same concept for Gemini CLI (GEMINI.md) and Codex (AGENTS.md).

**1:30-2:30 — What goes in a context file [SLIDE: annotated CLAUDE.md example]**
Three categories:
1. Beat knowledge — how local institutions are named, who the regular sources are, what jargon the city uses
2. Style rules — AP deviations specific to your publication, formatting preferences
3. Workflow instructions — what to flag for human review, how to attribute sources, what to never do

**2:30-3:30 — The deletion test [SLIDE: three examples, pass/fail]**
"The deletion test: if you removed this line, would the AI behave any differently? 'Be helpful' — delete it, nothing changes. 'The city refers to its annual budget process as the appropriations cycle — never call it budget season' — delete it, Claude uses the wrong term. That second line passes. That's what belongs in your context file."

**3:30-4:30 — How context files scale [SLIDE: hierarchy diagram]**
Global (~/.claude/CLAUDE.md), project-level (in the project directory), subdirectory-level. Claude Code reads all of them, most specific taking precedence. A newsroom-wide file for shared standards, a beat-specific file for your particular coverage area.

**4:30-5:30 — GitHub: version control via your LLM [SLIDE: GitHub concepts — why journalists use it]**
"Your context file lives in a project folder. That folder should be a Git repository. Not because you need to learn Git commands — your CLI LLM handles those for you — but because: you can track what changed in your context file and when, you can clone skills and tools from GitHub in Module 3, and you can share your project with colleagues at the end of the course. You describe what you want: 'put this project on GitHub.' Claude does the rest."

**5:30-6:00 — What's next**
"The arc check: you have your idea from Module 1. This week you build the GitHub scaffold — the project folder, the context file, and version control. See you in the demo."

---

## Module 2, Video 2: Setting up your beat project

**Format:** Screen recording with voiceover
**Length:** ~6 minutes
**Topic:** Asking Claude Code to scaffold a project, write a CLAUDE.md, process documents, and set up GitHub — all in plain English

### Outline

**0:00-0:30 — Setup**
"Today I'm going to set up a beat project using Claude Code. I won't be typing directory commands or Git syntax — I'll be describing what I want and letting Claude handle the mechanics. This is how the whole course works."

**0:30-1:30 — Ask Claude Code to create the project [SCREEN: Claude Code session]**
Type: "I want to create a new project called greenfield-beat in my Documents folder. Set up the directory structure for a beat reporting project."
Watch Claude create the folder, possibly suggest a structure, possibly ask clarifying questions.
Point out: "I didn't type `mkdir`. I described a goal. Claude made it happen."

**1:30-2:30 — Ask Claude Code to write the CLAUDE.md [SCREEN: Claude Code session]**
Type: "I cover Greenfield city government for the Daily News. My main sources are the mayor's office, city council members, and the city manager. The city uses the term 'appropriations cycle' for its budget process. I follow AP style with no Oxford comma. Write a CLAUDE.md for this project."
Watch Claude generate a draft. Review it together.
"This is a starting point — you'll customize it for your actual beat. Notice it passes the deletion test: every line changes how Claude behaves."

**2:30-3:30 — Process documents with and without context [SCREEN: Claude Code session]**
Ask Claude to demonstrate the difference:
- "Read press-release.md and summarize it. Ignore the CLAUDE.md for this first attempt." — generic summary
- "Now read it again, applying the context in CLAUDE.md." — uses beat terminology, flags relevant details

"Same document, same AI, different instructions. That's the context file working."

**3:30-4:30 — Initialize Git and push to GitHub [SCREEN: Claude Code session]**
Type: "Initialize this directory as a Git repository and make an initial commit."
Watch Claude run git init, add files, commit.
Then: "Create a repository on my GitHub account called greenfield-beat and push this."
Watch Claude handle the GitHub setup — creating the remote repo, adding the remote, pushing.
"I described what I wanted. Claude ran the commands. You now have a project on GitHub."

**4:30-5:30 — Verify on GitHub [SCREEN: GitHub in browser]**
Open github.com, show the repository exists, show the CLAUDE.md and project files are there.
"This is the second stage of the arc: your idea is now a GitHub project. In Module 3, you're going to clone a library of journalism skills from GitHub — and that cloning will go into a project just like this one."

**5:30-6:00 — What's next**
"Module 3 is where this project gets its first real tool. See you there."

---

## Module 3, Video 1: From prompts to skills

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
"In Module 2, you set up the project and got it on GitHub. This week you add your first real tool to it. By the end of Module 3, your project will have a working skill you created yourself — something that encodes a workflow you actually use. That's the prototype stage."

**5:30-6:00 — What's next**
"In the demo, I'll install the journalism skills library and use the source-verification skill on a real claim. Then I'll show you how to create your own skill — which is the exercise this week."

---

## Module 3, Video 2: Installing and using journalism skills

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
Ask Claude Code: "I want to create a skill called meeting-minutes that extracts action items, votes, and named officials from a city council transcript. Write the skill file for me."
Watch Claude draft the SKILL.md. Review it. Save it. Invoke it on a sample transcript.
"You described what you wanted. Claude wrote the skill. You just built a journalism tool."

**5:30-6:00 — Arc check + what's next**
"Your project now has a working prototype. In Module 4, you'll automate it — build a workflow that runs this on new transcripts automatically. See you there."

---

## Module 4, Video 1: Describing workflows and having AI build them

**Format:** Talking head + slides
**Length:** ~6 minutes
**Topic:** What automation looks like with a CLI LLM; how to describe multi-step workflows; cost and security before deploying

### Outline

**0:00-0:30 — Hook**
"You have a skill that works on one document. Now you want it to work on every document in a folder, automatically, every time a new one arrives. That's a workflow. And the way you build it is the same way you've been doing everything else in this course: you describe what you want and Claude builds it."

**0:30-1:30 — What automation means with a CLI LLM [SLIDE: workflow diagram]**
Explain that a workflow is a sequence of steps. With a CLI LLM, you describe the sequence in natural language — "fetch this, process it this way, save it here, notify me if anything looks off" — and Claude translates that into a script. The script can be run manually, scheduled, or triggered automatically. You don't write the script. You review it, test it, and decide whether to run it.

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

## Module 4, Video 2: Ask Claude Code to build you a pipeline

**Format:** Screen recording with voiceover
**Length:** ~6 minutes
**Topic:** Describing a multi-step workflow to Claude Code; reviewing and testing the script it produces; security check before deploying

### Outline

**0:00-0:30 — What we're building**
"Today I'm going to describe a journalism workflow in plain English and have Claude Code build it. Then we're going to test it — and something is going to go wrong. That's not an accident. Showing you the failure and how to recover from it is the point."

**0:30-2:00 — Describe the workflow [SCREEN: Claude Code session]**
Type: "I want a workflow that takes a news article URL, fetches the article, strips out the ads and navigation, summarizes it in three bullets for a weekly newsletter, and saves the result as a markdown file. I'll run this on multiple articles per week. Build me a script I can reuse."

Watch Claude:
- Ask clarifying questions (what tool to use for fetching? any format preferences for the output?)
- Propose an approach
- Write the script
- Explain what it built

"Notice I didn't say 'use curl' or 'write a bash script.' I described the outcome. Claude figured out the implementation."

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
"Your project has a tested, debugged, secured, version-controlled workflow. You hit a real problem, diagnosed it with Claude, and fixed it. That process — describe the problem, get a diagnosis, implement the fix, test again — is the core loop of building anything with a CLI LLM. Next week you connect it to live data and make it shareable. See you in Module 5."

---

## Module 5, Video 1: Why AI makes things up (and how to fix it)

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

## Module 5, Video 2: Connecting Claude to a knowledge base

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
"Look at what's in this repo: CLAUDE.md, skills, hooks, pipeline script, MCP config. Every decision about how Claude works on this project is committed here. Clone this on a new machine and the same context comes with it. Give the link to a colleague and they inherit the same environment. That's context engineering at full scale — and that's what you've spent five weeks building."

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
- Use the beat project scaffolded in Module 2 as the running context through Modules 3-5
- Record at 1080p minimum
- The "greenfield-beat" project is the through-line — use consistent file names across all demo videos

### Files to prepare before recording
- `Resources/examples/beat-project/` files — press releases, council minutes, interview notes
- A real news article URL for the pipeline demo (Module 4)
- A viral claim or questionable press release for the source-verification demo (Module 3)
- A populated `~/beat-archive/` that is the same as or extends the beat project files (Module 5)
- A clean GitHub account or test account to show the push-to-GitHub steps without exposing personal repos

### The running project
The demo videos should use the same project throughout — starting as an empty folder in Module 1, growing into a full project by Module 5. This makes the arc concrete and visible. Students see one project evolve across five weeks, not five disconnected demos.
