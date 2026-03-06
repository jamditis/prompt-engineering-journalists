# Full video narration scripts — modules 1 and 2

**Course:** Advanced prompt engineering for journalists
**Instructor:** Joe Amditis, Center for Cooperative Media, Montclair State University

These are camera-ready narration scripts. The promo and welcome videos target 1-2 and 2-3 minutes respectively. Instructional videos (3-8) target ~6 minutes (~900 words at 150 wpm). Stage directions are in [BRACKETS].

## Updated video map (4-module structure)

| # | Video | Module | Format | Target length |
|---|-------|--------|--------|---------------|
| 1 | Promo video | — | Talking head | 1-2 min |
| 2 | Welcome video | Intro | Talking head | 2-3 min |
| **3** | **What CLI LLMs are and why they matter** | **Module 1** | **Talking head + slides** | **~6 min** |
| **4** | **Getting started with Claude Code** | **Module 1** | **Screen recording** | **~6 min** |
| **5** | **The context file problem** | **Module 1** | **Talking head + slides** | **~6 min** |
| **6** | **Setting up your beat project** | **Module 1** | **Screen recording** | **~6 min** |
| **7** | **From prompts to skills** | **Module 2** | **Talking head + slides** | **~6 min** |
| **8** | **Installing and using journalism skills** | **Module 2** | **Screen recording** | **~6 min** |
| 9 | Describing workflows and having AI build them | Module 3 | Talking head + slides | ~6 min |
| 10 | Ask Claude Code to build you a pipeline | Module 3 | Screen recording | ~6 min |
| 11 | Why AI makes things up (and how to fix it) | Module 4 | Talking head + slides | ~6 min |
| 12 | Connecting Claude to a knowledge base | Module 4 | Screen recording | ~6 min |

---

## Video 1: Promo video

**Format:** Talking head
**Length:** 1-2 minutes
**Module:** —

---

[TALKING HEAD]

You have a city council meeting transcript. You need every action item, every vote, and every named official in a formatted table — before deadline. You describe that to an AI assistant running on your laptop. It reads the transcript and hands you the table. No browser, no upload, no copy-pasting. That's what this course teaches.

I'm Joe Amditis from the Center for Cooperative Media at Montclair State University, and this is Advanced Prompt Engineering for Journalists — a four-week course from the Knight Center at UT Austin. You already know how to use AI. This course teaches you to use it as a collaborator on real journalism projects.

[SLIDE: four things you'll walk away with]

Four things you'll walk away with.

First: conversations with AI that can read your files and take action on your computer — not in a browser tab, on your machine. And a persistent context file that gives the AI your beat knowledge, your style, and your sources before every session. You write it once. It loads automatically.

Second: reusable journalism tools — skills and hooks — that encode your editorial workflows into commands you can share with colleagues.

Third: the ability to describe an automation task in plain English and have the AI build it for you.

Fourth: connecting AI to your own document archives with proper source attribution — and understanding where those connections break down.

[TALKING HEAD]

If you've taken Prompt Engineering 101 or you know how to write a good AI prompt — and you want to go from typing in a browser to delegating real journalism work — this is your course. Sign up at JournalismCourses.org.

---

## Video 2: Welcome video

**Format:** Talking head
**Length:** 2-3 minutes
**Module:** Intro

---

[TALKING HEAD]

Welcome. I'm Joe Amditis. Over the next four weeks, you're going to build something real — a journalism tool or workflow powered by AI, documented on GitHub, and ready to share with colleagues. Each module is one stage of that project.

[SLIDE: four-stage arc — CLI + context → skills → workflows → agents + data]

Here's the arc. Week one: you install a CLI tool, write a context file for your beat, and process real documents — press releases, transcripts, datasets — from the command line. By the end of the week, you'll have a working project on GitHub with a context file that shapes how the AI reads your documents.

Week two: you build reusable skills that encode your editorial expertise into shareable tools — slash commands and hooks that turn your best prompts into something consistent and repeatable.

Week three: you describe a recurring workflow in plain English and the AI builds the automation. You'll test it, debug it, and learn the loop you'll use every time something breaks.

Week four: you connect the AI to your own data sources via MCP, handle the parts that break — permissions, auth, schema mismatches — and publish the finished project on GitHub.

Each week builds on the last. By the end, everything you've made is in one repository — context file, skills, workflow scripts, data connections — and anyone who clones it inherits the same setup.

[TALKING HEAD]

The key shift: you've been using AI apps — ChatGPT.com, Claude.ai — where you type in a browser and get a response. This course moves you to harnesses — tools where the same AI can read your files, run scripts, and complete multi-step tasks on your machine. Same AI. Different capability. You stop prompting and start managing.

You don't need to know programming. You don't need to memorize terminal commands. The AI handles the technical work. What you need is the ability to describe what you want clearly — and you already know how to do that.

Three things that will help you succeed. One: do the exercises. Reading about this isn't the same as doing it — the gap between understanding a concept and being able to use it is the exercise. Two: post in the forums. Your classmates are solving the same problems, and the best debugging happens in public. Three: start Module 1's installation early. Don't troubleshoot your setup under deadline pressure.

Here's what to do right now. Read the Course Requirements document. Check that your computer meets the specs. Then read the syllabus. See you in Module 1.

---

## Video 3: What CLI LLMs are and why they matter

**Format:** Talking head + slides
**Length:** ~6 minutes
**Module:** 1

---

[TALKING HEAD]

You've been talking to AI through a browser. You type, it responds, you type again. That works for a lot of things. But here's what happens every time: the session forgets you. You can't hand it a folder of 200 documents. You can't say "run this every morning while I'm in the budget meeting." You're always in the middle — dragging files back and forth, retyping context you've already explained. CLI tools remove that bottleneck.

Let me show you what I mean.

[SLIDE: models / apps / harnesses diagram]

Ethan Mollick — a professor at Wharton who writes about AI more clearly than almost anyone — has a useful framework. AI has three layers. At the bottom, **models**. That's the actual intelligence: Claude Opus, GPT-5, Gemini 3 Pro. Those are the brains. Above that, **apps**: ChatGPT.com, Claude.ai, Gemini.google.com. The chat interfaces you've been using. And then there's a third layer: **harnesses**. Harnesses give the same model tools, file access, and the ability to take multi-step action on its own.

Here's the thing: the same model behaves differently depending on which layer you're using. Claude Opus in the Claude.ai chat window can answer questions about a document you paste in. Claude Opus inside Claude Code can read every file in a folder, write a script to process them, run that script, and hand you the results — without you touching any of it. Same brain. Different capability. That's the shift this course is about.

[SLIDE: Claude Code screenshot — terminal with prompt]

So what does this look like? Claude Code looks like a terminal. If you've never used one, don't worry — it's just a text interface. You type. It responds. No buttons, no menus. Text in, text out.

The difference from Claude.ai isn't the interface — it's what it can do. You type in plain English. You say "read the press release in my downloads folder and pull out the five most important facts." It finds the file, reads it, gives you the answer. You didn't upload anything. You didn't copy-paste anything. You described what you wanted.

That's the pattern for this whole course: you describe outcomes. The AI handles the steps in between.

[SLIDE: side-by-side — before and after]

Here's a concrete comparison. You've got a FOIA request back — 200 PDFs from a city agency. You need every mention of a specific contractor.

With the web interface: you download the PDFs. You open Claude.ai. You upload one PDF. You ask your question. You copy the output. You upload the next one. You do this 200 times. That's not AI-assisted journalism. That's data entry with extra steps.

With Claude Code: you open your terminal, type "read all the PDFs in this folder and find every mention of Greenfield Construction," and wait. You read the results. That's it. No technical knowledge required. You described what you wanted and the AI did the work.

[SLIDE: tool comparison — three options]

Three tools to choose from.

**Claude Code** is what I use and what most of this course is built around. It's Anthropic's CLI tool — you need a subscription at $20 a month, or an API key. The reason I recommend it: Claude Code is the best at interpreting what you *mean*, not just what you literally typed. When your instructions are a little ambiguous — and they will be, because you're describing things in natural language — it fills in the gaps correctly. For someone who isn't a programmer, that matters. You need a tool that understands intent, not just syntax.

**Gemini CLI** is Google's tool. Free — 1,000 requests a day with a Google account. If you're not sure you want to pay for anything yet, start here. Everything in Module 1 works with it.

**Codex CLI** is OpenAI's tool. Requires a ChatGPT Plus subscription. It's more literal — if something's ambiguous, it asks you to clarify instead of interpreting. That's fine, but it can slow you down when you're learning.

You only need one installed. Pick what fits your budget.

[SLIDE: cost note]

A word about cost, because I know it's on your mind. The actual cost for the kind of work we do here is small — usually pennies per task. Gemini CLI is free. Claude Code's subscription covers usage. And as we get into later modules, we'll talk about using the cheapest available model for each specific task — you don't need the most powerful model for everything. Routine work like formatting or sorting can run on a lighter, cheaper model. You save the expensive model for the tasks that need real judgment.

This is accessible. It's a subscription and a terminal, not a thousand-dollar infrastructure project.

[SLIDE: arc diagram — 4 modules]

Here's the arc of the course. Four modules, each building on the last. Module 1 — this week — you install the tools and understand what's possible. Module 2, you build reusable skills that encode your editorial expertise. Module 3, you describe workflows in plain English and the AI builds them. Module 4, you connect AI to your own data sources and publish your project.

By the end, you'll have a working journalism tool on GitHub that colleagues can clone and use. It starts here — getting installed and having your first conversation.

Read Mollick's guide in the required readings first. It gives you the map for everything we'll do. In the next video, I'll open Claude Code on screen and walk you through your first conversation with it — so you can see what this looks like before you try it yourself.

---

## Video 4: Getting started with Claude Code

**Format:** Screen recording with voiceover
**Length:** ~6 minutes
**Module:** 1

---

[SCREEN: Terminal, cursor blinking]

In this video, I'm going to open Claude Code and show you what it looks and feels like — how you talk to it, how it compares to Claude.ai, and where the differences matter. I'm not teaching you terminal commands. The point is to show you this is a conversation, and you already know how to have conversations.

[SCREEN: Typing `claude`, Claude Code launching]

Here's my terminal. I type `claude` and press Enter. That's it. Claude Code launches and I see a prompt — a cursor waiting for input. I type here, same as I type in a chat window. No send button. Just Enter.

Let me try something simple. I'll type: "Hello. What can you do?"

[SCREEN: Claude's response listing capabilities]

Look at the response. It's listing its capabilities — file access, code execution, working with my filesystem. That's what makes it different from the web version. It has access to my machine.

Now let me show you where that matters.

[SCREEN: Claude.ai in browser]

Here's Claude.ai in a browser. I'm going to give it a simple task: extract the five most important facts from a press release. I paste the text in. I get a response. If I want to save it, I copy the output and put it somewhere myself.

Fine. That works. Now watch what happens in Claude Code.

[SCREEN: Back to Claude Code terminal]

I type: "There's a press release in my project folder called park-closure.md. Read it and give me the five most important facts."

[SCREEN: Claude finding and reading the file, then responding]

It found the file. I didn't paste anything. I didn't give it an exact file path — I described where it was and what it was called. Claude located it, read it, and returned the facts.

Now I'll push further: "Save those facts as a bulleted list in a new file called notes.md."

[SCREEN: Claude creating the file, confirmation]

It created the file. If I open it, the notes are there. I described an outcome — Claude handled the file lookup, the formatting, the saving.

[SCREEN: split or sequential comparison]

Let me break this down.

**What's the same:** You write in plain English. The AI responds conversationally. You can iterate, ask follow-ups, change your mind. Every prompting skill you learned in the 101 course carries over.

**What's different:** Claude Code can see and work with your local files. It can create files, run scripts, take action on your machine. And sessions have memory — if I ask a follow-up about those notes, it knows exactly what I'm talking about because it just created them.

[SCREEN: Claude Code terminal]

One more thing. I want to show you a pattern you'll use throughout this course: asking Claude to plan before building.

I type: "I have a folder of press releases from the city. How would you approach extracting key facts from all of them and compiling a summary? Don't do it yet — just plan the approach."

[SCREEN: Claude presenting a plan]

Look at this. It's proposing a multi-step approach: read each file, extract facts using a consistent structure, compile a summary document, flag anything that looks like it needs human review. It's not executing — it's planning. I can review the approach before any work happens.

This is Plan Mode. You describe what you want done, the AI proposes how to do it, you review before anything gets built. Whether you're processing documents, creating a tool, or setting up a project — plan first, review, then approve. You'll use this pattern throughout the course.

[SCREEN: voiceover, terminal visible]

A quick note on when to use which. Claude.ai for quick one-off questions, mobile, pure conversation. Claude Code when you're working with files, building something, or running anything you want to save and reuse.

One last thing before the exercise: when something breaks — and it will — don't close the session and start over. Copy the error message exactly as it appears. Paste it back into the same session. Ask: "What does this mean? How do I fix it?"

Claude wrote the code that broke. It can read the error in context and tell you where the problem is. Don't paraphrase the error. Don't try to interpret it yourself. Just paste it and ask. That's the debugging loop you'll use throughout this course.

The exercise this week asks you to install a tool, have your first conversation, and compare the experience to using a web interface.

But there's a second half to this module. You've seen what Claude Code can do with a single file. Next, we're going to talk about why it forgets everything between sessions — and how to fix that with a context file. That's the next video.

---

## Video 5: The context file problem

**Format:** Talking head + slides
**Length:** ~6 minutes
**Module:** 1

---

[TALKING HEAD]

Every time you open a new Claude Code session, it doesn't know who you are. It doesn't know your beat, your publication's style, or what the city council calls its budget process. Every session starts from zero.

And the problem compounds. Even within a single long session, the AI starts to drift. The conversation gets so long that the model loses track of its earlier instructions. It starts making things up — not because it's broken, but because it has too much context and not enough structure. Long, unfocused sessions are where hallucinations come from.

Context files fix both problems.

[SLIDE: context window diagram]

Here's what's happening technically. AI context is temporary. It exists for a session and disappears. Every new session is a fresh start. But a file called CLAUDE.md — a plain text file that lives in your project folder — gets read automatically every time you open a session in that directory. It's your project's memory. Same concept for other tools: GEMINI.md for Gemini CLI, AGENTS.md for Codex.

But here's the practical workflow that makes this powerful: don't run one long session. Run short, focused sessions. You open Claude Code, give it a specific task, get it done, and before you close the session, you ask Claude to update your CLAUDE.md with a handoff note — a few lines summarizing what was accomplished and what's left to do. Next session, it reads that file and picks up exactly where you left off.

Short sessions. Handoff notes. That's the pattern. It keeps the context window manageable and prevents the drift that leads to errors.

[SLIDE: annotated CLAUDE.md example]

What goes in a context file? Three categories.

**Beat knowledge.** How local institutions are named, who the regular sources are, what jargon the city uses. "The city refers to its annual budget process as the appropriations cycle — never call it budget season." That kind of thing.

**Style rules.** AP deviations specific to your publication. Formatting preferences. Whether you use the Oxford comma. How you refer to officials on second reference.

**Workflow instructions.** What to flag for human review. How to handle attribution. What the AI should never do on its own — publishing, sending emails, deleting files without confirmation.

[SLIDE: three examples with pass/fail markers]

Here's how you test whether something belongs in your context file. I call it the deletion test. If you removed this line, would the AI behave any differently?

"Be helpful." Delete it. Nothing changes — Claude is already helpful. That's a wasted line.

"The city refers to its annual budget process as the appropriations cycle — never call it budget season." Delete it and Claude uses the wrong term next time. That line passes. It belongs.

"When covering city council votes, always include the vote count and list any dissenting members by name." Delete it and Claude gives you a vague summary without the breakdown. That passes too.

Every line in your context file should survive this test. If removing it wouldn't change anything, the line isn't doing work.

[SLIDE: hierarchy diagram]

Context files scale. Claude Code supports a hierarchy: a global file at `~/.claude/CLAUDE.md` that applies everywhere on your machine, a project-level file in the project directory, and subdirectory-level files for specific areas. The most specific file takes precedence.

In practice: a newsroom could have a shared global file for standards that apply to every reporter — AP style, attribution requirements, the publication's voice. Each beat reporter then has a project-level file with their own sources, terminology, and preferences. The city hall reporter's file knows about the appropriations cycle. The courts reporter's file knows the difference between a motion to dismiss and a summary judgment.

Open Claude Code in a beat folder and both files load. Shared standards plus beat-specific knowledge. That's institutional context, not personal notes.

[SLIDE: version control mention]

One more thing. Your context file should live in a Git repository. That means it's version-controlled — you can see what changed and when, share the project with colleagues who inherit your context automatically, and roll back if something breaks. You don't have to learn Git to do this. You tell Claude "put this project on GitHub" and it handles the setup.

In the demo, you'll see this in action — we'll write a CLAUDE.md, test it on a real document, and push the whole project to GitHub. See you there.

---

## Video 6: Setting up your beat project

**Format:** Screen recording with voiceover
**Length:** ~6 minutes
**Module:** 1

---

[SCREEN: Terminal, cursor]

Today I'm setting up a beat project using Claude Code. I won't be typing directory commands or Git syntax — I'll describe what I want and let Claude handle the mechanics. This is how the whole course works from here.

[SCREEN: Typing `claude`, session opening]

I type `claude`. Now I'm in a session. First thing I do: ask Claude to plan the project before creating anything.

I type: "I want to create a new project called greenfield-beat in my Documents folder. It's for covering Greenfield city government for a local news outlet. Plan the directory structure — what folders should it have, what files should be at the root? Don't create anything yet."

[SCREEN: Claude proposing a structure]

See what it did? It proposed a structure: folders for documents, notes, and data. A CLAUDE.md at the root. A README. It's asking whether this looks right before it creates anything.

I didn't say "mkdir." I didn't specify a tree format. I described a goal and asked it to plan first. That's the pattern.

The structure looks right. I type: "Looks good — go ahead and create it."

[SCREEN: Claude creating the directories and files]

Done. Folders created, empty CLAUDE.md in place. Now let's fill in that context file.

[SCREEN: Claude Code session]

I type: "I cover Greenfield city government for the Daily News. My main sources are the mayor's office, city council members, and the city manager. The city uses the term 'appropriations cycle' for its budget process — never say budget season. I follow AP style, no Oxford comma. When covering council votes, always include the vote count and name any dissenting members. Write a CLAUDE.md for this project."

[SCREEN: Claude writing the file]

Look at what it generated. It organized everything into sections — beat context, style rules, source guidelines, workflow standards. Every line passes the deletion test. Remove any of these and Claude's behavior changes.

This is a starting point. You'll add to it as you work. When Claude uses the wrong term, that's a line to add. When it handles something well, that's worth noting too. The file grows with the project.

[SCREEN: Claude Code session]

Now let me show you what the context file does in practice. I've got a sample press release — park-closure.md. I'm going to process it two ways.

First, I'll open a brand new Claude Code session in a different folder — one with no CLAUDE.md — and ask it to summarize this same press release.

I type: "Summarize the file at ~/Documents/greenfield-beat/documents/park-closure.md."

[SCREEN: Generic summary]

Fine summary. Generic. No beat terminology. Doesn't flag the vote count. Doesn't name dissenters. It has no idea what matters to me.

Now I'll close this session and reopen Claude Code inside the greenfield-beat project folder — where my CLAUDE.md lives.

I type: "Summarize park-closure.md."

[SCREEN: Context-aware summary]

Look at that. "Appropriations cycle" instead of "budget." The 5-2 vote count is there. The dissenting member is named. Same document, same AI. The only difference is the context file. That's what a few lines of plain text instructions do.

[SCREEN: Claude Code session]

Last thing: let's get this on GitHub. I type: "Initialize a Git repo here, commit everything, create a repository on my GitHub account called greenfield-beat, and push."

[SCREEN: Claude running git init, commit, remote setup, push]

One prompt. It ran `git init`, staged the files, committed, created the remote repo, added the remote, and pushed. All of that from a single sentence.

[SCREEN: Browser — GitHub showing the repo]

There it is. CLAUDE.md, the project structure, the sample files — all on GitHub. If a colleague clones this repo and opens Claude Code in that folder, the context file loads automatically. They inherit the same beat knowledge, style rules, and workflow instructions. That's the payoff of version control here — the context travels with the project.

So that's the full Module 1 setup. You have a CLI tool, a context file that shapes how the AI reads your documents, and a project on GitHub. Module 2 adds reusable skills to this project. See you there.

---

## Video 7: From prompts to skills

**Format:** Talking head + slides
**Length:** ~6 minutes
**Module:** 2

---

[TALKING HEAD]

You've written a prompt that works. It extracts action items from council minutes. You use it every week. And every week you either retype it from memory — slightly different each time — or dig through your notes to find it. That's not a system. That's a workaround.

Skills fix it.

[SLIDE: progression diagram]

Here's the maturity path. Most journalists are at stage one or two.

**Stage one: ad-hoc prompts.** You type the instructions from memory each time. It works, but the results vary depending on how you phrase it that day.

**Stage two: saved prompts.** You keep them in a doc or a notes app. Copy-paste when you need them. Better, but still manual.

**Stage three: skills.** A skill is a markdown file that Claude Code loads as a slash command. Type `/meeting-minutes` and the prompt applies instantly. No copy-pasting. No hunting through notes.

**Stage four: hooks.** These run automatically. You don't invoke them. They fire on their own at specific points in your workflow.

**Stage five: plugins.** A package of skills and hooks installed from GitHub in one command.

This module covers stages three and four.

[SLIDE: annotated skill file]

A skill file is just a markdown document. It lives in your project's `.claude/commands/` directory. The filename becomes the command — `meeting-minutes.md` becomes `/meeting-minutes`. The content is the instructions Claude follows when you invoke it.

Here's the key: skills inject context only when you need it. Your CLAUDE.md loads every session — that's the right behavior for beat knowledge and style rules. But a skill only loads when you invoke the command. If you're not doing source verification right now, those instructions aren't in the AI's context. They're sitting in a file, waiting.

That matters because context has a cost — not in dollars, but in attention. The more instructions the AI is holding in memory at once, the more likely it is to lose track of something. Skills let you keep specialized instructions out of the background and bring them in only when they're relevant. You can think of a skill as a colleague you pull into a conversation for their specific expertise, then let them go back to their desk.

[SLIDE: hook flow diagram]

Hooks are different. Two kinds, and the distinction matters.

**Notify hooks** run in the background and flag issues without stopping your work. Think of them as an automated second reader. The work keeps going, but problems get marked for your attention. A notify hook might flag an unattributed quote, catch AI-generated filler language, or note that a claim hasn't been verified.

**Stop hooks** pause execution and require your confirmation. These are for one-way doors — actions that are hard to undo.

Concrete example: the journalism skills library includes a hook called `one-way-door-check`. Every time Claude Code tries to create a new file, this hook checks whether that file represents a hard-to-reverse decision — a database schema, an API contract, an infrastructure config. If it matches, Claude has to stop and present you with alternatives before proceeding. Routine files — documents, notes, scripts — pass through without interruption.

You never invoke this. It fires automatically. And the hook script is readable — open it, see exactly what it checks, decide whether you agree with the rules.

Newsrooms already work this way: you build pause points before irreversible actions. A stop hook is the automated version of "does someone need to see this before it goes out?"

[SLIDE: skills by category]

The journalism skills library has 36 skills and 13 hooks. Source verification, FOIA drafting, data journalism workflows, editorial quality checks. Installing it is one request to Claude Code — it clones the repository and registers everything. Skills show up as slash commands immediately.

You don't have to use all of them. Browse the library. Find the skills that fit your work. Ignore the rest. The exercise asks you to install the library, use the source-verification skill on a real claim, and create one custom skill of your own.

The concept generalizes beyond journalism-specific tools. Say you're building a source-tracking system — a tool that suggests sources for a story topic and then generates a summary of who you actually quoted. That tool has two tasks: suggesting sources and analyzing the finished article. Those are two skills. Build each one, invoke each one when you need it, and neither clutters your context when you're doing other work.

[SLIDE: arc diagram — module 2 highlighted]

In Module 1, you set up the project and got context files working. This week you add reusable tools. By the end of Module 2, your project will have a custom skill you built yourself and a library of journalism-specific tools. Module 3, you'll describe a full workflow and have the AI build it.

In the demo, I'll install the journalism skills library, run source-verification on a claim, and walk through creating a custom skill. See you there.

---

## Video 8: Installing and using journalism skills

**Format:** Screen recording with voiceover
**Length:** ~6 minutes
**Module:** 2

---

[SCREEN: Terminal, Claude Code open in greenfield-beat directory]

Today: install the journalism skills library, verify a claim, and create a custom skill. By the end of this video, your project has working tools.

I'm in my greenfield-beat directory. Claude Code is open. Let's install the library.

I type: `/install-github-plugin jamditis/claude-skills-journalism`

[SCREEN: Claude cloning and installing]

It cloned the repository, registered the skills and hooks. One command. Let me verify — I'll type `/help` and scroll.

[SCREEN: Help output showing new slash commands]

See all those new commands? `/source-verification`, `/foia-requests`, `/data-journalism`, `/fact-check-workflow`. Each one is a markdown file with instructions Claude follows when you invoke it.

[SCREEN: Opening a skill file in editor or terminal]

Let me show you what's inside. I type: "Open the source-verification skill file so I can read it."

[SCREEN: SKILL.md content visible]

It's a markdown document. YAML header at the top — name, description. Then the body: step-by-step instructions for the SIFT method. Check the source. Find the original claim. Trace it upstream. Look for independent confirmation. Note what can and can't be verified.

This is the method you'd follow manually. The skill makes it consistent and fast. You can read every line. You can edit it. You can copy it and modify it for your beat. It's transparent.

[SCREEN: Claude Code session]

Now let's use it. I've got a claim to check. I'll paste it in:

"A Facebook post claims the city of Greenfield spent $4.2 million on a parking garage with only 200 spaces, making it the most expensive per-space parking structure in the state."

Now I invoke the skill: `/source-verification`

[SCREEN: Claude working through the SIFT method]

Watch what it does. First, it pulls out the specific claims: the dollar amount, the space count, the comparative claim about per-space cost. Then it looks for the original source of the Facebook post. It searches for primary documentation — city council minutes, budget records, news coverage.

[SCREEN: Structured output appearing]

Look at the results. The city did approve a parking garage project, but the council-approved amount was $3.8 million, not $4.2 million. The 200-space count appears in the original council resolution — that checks out. The "most expensive in the state" claim is flagged as unverifiable without a statewide dataset for comparison.

Three claims checked. One partially wrong, one confirmed, one unverifiable. And notice what it didn't do — it didn't call the post "false." It told you which parts held up and which didn't, and where it ran out of evidence. It's reporting uncertainty, not hiding it.

That's 30 seconds of your time versus 20 minutes of manual checking, and the method is consistent every time you run it.

[SCREEN: Claude Code session]

Now let's build a custom skill. I'll start with Plan Mode — this is the same approach from Module 1.

I type: "I want to create a skill called meeting-minutes that extracts action items, votes, and named officials from a city council transcript. Output should be a structured summary with vote counts and names of dissenters. Plan the skill file structure — sections, steps, output format — but don't write it yet."

[SCREEN: Claude presenting a proposed structure]

It's proposing a plan. YAML header. An input section describing what the skill expects. Processing rules: what to look for — motions, votes, named officials, action items with deadlines. An output format specifying the summary structure.

I'll add one thing: "Also flag any agenda items that were tabled or deferred — those tend to come back."

[SCREEN: Claude updating the plan]

Good, it incorporated the addition. Now: "Looks good — write the skill file."

[SCREEN: Claude creating the SKILL.md in .claude/commands/]

Done. The skill is in my project's commands directory. Let me test it on the sample transcript in my project folder.

I type: `/meeting-minutes`

Then: "Apply this to council-minutes-excerpt.md."

[SCREEN: Claude processing the transcript]

There it is. Action items with responsible parties and deadlines. Votes with full counts and dissents listed. Tabled items flagged separately. A structured summary ready for reporting notes.

[SCREEN: Output visible]

Plan first. Review. Build. Test. That's the workflow for creating tools in this course. You describe what you want the skill to do. The AI proposes the structure. You review it. It writes the file. You test it on real material and adjust.

Your exercise this week: create a skill for a task you actually do — source verification, data cleaning, content formatting, whatever fits your beat. Test it on real material. Post what you built in the forum. See you in Module 3.

---

## Production notes (updated for 4-module structure)

### The running project
The greenfield-beat project threads through all demo videos. It starts as an empty folder in Video 4 and grows into a full project by Video 12.

### Module 1 (4 videos)
Module 1 has more videos than other modules because it covers the merged content (CLI intro + context files). Videos 3 and 5 are talking head/conceptual. Videos 4 and 6 are screen recordings showing the same project being built incrementally. Consider recording 4 and 6 back-to-back since they use the same project.

### Slides to prepare
- Four takeaways list (Video 1)
- Four-stage arc diagram: CLI + context → skills → workflows → agents + data (Video 2)
- Models / apps / harnesses diagram (Video 3)
- Claude Code screenshot with terminal prompt (Video 3)
- Side-by-side before/after workflow comparison (Video 3)
- Tool comparison table: Claude Code, Gemini CLI, Codex CLI (Video 3)
- Cost note slide (Video 3)
- 4-module arc diagram (Videos 3, 7)
- Context window diagram (Video 5)
- Annotated CLAUDE.md example (Video 5)
- Deletion test examples with pass/fail markers (Video 5)
- Context file hierarchy diagram (Video 5)
- Prompt maturity progression diagram (Video 7)
- Annotated skill file structure (Video 7)
- Hook flow diagram: notify vs. stop (Video 7)
- Skills by category overview (Video 7)

### Files needed before recording
- `Resources/examples/beat-project/park-closure.md` — sample press release
- `Resources/examples/beat-project/council-minutes-excerpt.md` — sample transcript
- A real or realistic Facebook claim for the source-verification demo
- A clean terminal with increased font size (24pt minimum)
- The greenfield-beat project pre-scaffolded for Videos 6 and 8 (or build live)
