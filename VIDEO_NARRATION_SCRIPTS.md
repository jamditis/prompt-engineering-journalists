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
**Length:** ~20 minutes
**Module:** 1

---

[TALKING HEAD]

You've been talking to AI through a browser. You type, it responds, you type again. That works for a lot of things. But here's what happens every time: the session forgets you. You can't hand it a folder of 200 documents. You can't say "run this every morning while I'm in the budget meeting." You're always in the middle — dragging files back and forth, retyping context you've already explained. CLI tools remove that bottleneck.

Let me show you what I mean.

[SLIDE: models / apps / harnesses diagram]

Ethan Mollick — a professor at Wharton who writes about AI more clearly than almost anyone — has a useful framework for understanding what's happening in AI right now. AI has three layers.

At the bottom: **models**. That's the actual intelligence. Claude Opus, GPT-5, Gemini 3 Pro. These are the brains — the things that understand language, reason through problems, and generate responses. You don't interact with models directly. You interact with them through one of the other two layers.

Above that: **apps**. ChatGPT.com, Claude.ai, Gemini.google.com. These are the chat interfaces you've been using. You type a message, the app sends it to a model, the model responds, and you see the result in the browser. Apps are convenient. They're what most people think of when they think of "using AI." And for quick one-off questions — "explain this concept," "rewrite this paragraph," "summarize this article I'm pasting in" — they work fine.

But there's a third layer, and it's the one this course is about: **harnesses**. A harness gives the same model tools, file access, and the ability to take multi-step action on its own. Claude Code is a harness. Gemini CLI is a harness. Codex CLI is a harness. They connect the same AI brain to your actual computer — your files, your scripts, your data.

Here's the thing that took me a while to understand: the same model behaves differently depending on which layer you're using. Claude Opus in the Claude.ai chat window can answer questions about a document you paste in. Claude Opus inside Claude Code can read every file in a folder, write a script to process them, run that script, check the results, fix any errors, and hand you the output — without you touching any of it. Same brain. Different capability.

That distinction — apps versus harnesses — is the entire reason this course exists. You already know how to use apps. The 101 course taught you that. This course teaches you to use harnesses.

And once you're working at the harness layer, the way you interact with AI changes. You stop prompting — typing one message at a time and waiting for a reply — and you start managing. You describe a goal. The AI plans an approach. You review the plan. It executes. You course-correct if needed. That's delegation, not conversation. It's project management, not chat.

As Mollick puts it: you aren't prompting, you are managing.

[SLIDE: Claude Code screenshot — terminal with prompt]

So what does this look like in practice? Claude Code looks like a terminal. If you've never used one — and many journalists haven't — don't worry. It's just a text interface. You type. It responds. No buttons, no menus, no dropdowns to navigate. Text in, text out. The terminal is not complicated. It's just unfamiliar. And you'll be familiar with it by the end of this week.

The difference from Claude.ai isn't the visual interface — it's what it can do behind the scenes. You type in plain English. You say "read the press release in my downloads folder and pull out the five most important facts." It finds the file, reads it, and gives you the answer. You didn't upload anything. You didn't copy-paste anything. You didn't navigate to a file picker. You described what you wanted and where to find it.

That's the pattern for this whole course: you describe outcomes. The AI handles the steps in between. Your job is to be clear about what you want — which is a skill you already have. Journalists describe things precisely for a living.

[SLIDE: side-by-side — before and after]

Let me give you a concrete comparison to make this real.

You've got a FOIA request back — 200 PDFs from a city agency. You need every mention of a specific contractor.

With the web interface: you download the PDFs. You open Claude.ai. You upload one PDF — the interface usually has a file size limit, so you hope it fits. You ask your question. You copy the output somewhere. You upload the next one. Repeat 200 times. On a good day, each one takes two minutes. That's nearly seven hours of mechanical work. That's not AI-assisted journalism. That's data entry with extra steps.

With Claude Code: you open your terminal, type "read all the PDFs in this folder and find every mention of Greenfield Construction," and wait. It processes the entire folder. You read the results. That's it. The same seven hours of work becomes a few minutes of processing time while you do something else.

And that's a simple example. Here are a few more that come up in journalism:

**Transcription processing.** You have 40 hours of interview recordings that a transcription service turned into text files. You need every quote about the school board's budget decision. With a browser, you'd open each transcript, search manually, copy quotes into a document. With a CLI tool: "read all transcripts in this folder and extract every quote related to the school board budget, organized by speaker."

**Meeting minutes.** City council publishes their minutes as PDFs every two weeks. You want a running log of every vote, who voted which way, and every item that was tabled. With a browser: download, upload, ask, copy, repeat. With a CLI tool: point it at the folder, describe what you need, get a structured table.

**Data cleaning.** You scraped a public salary database but the department names are inconsistent — "Police Dept," "Police Department," "PD," "Police." You need them standardized before you can analyze the data. With a browser: paste samples, get suggestions, manually apply fixes. With a CLI tool: "read salary-data.csv, standardize the department names, and save the cleaned version."

In every case, the AI does the same kind of work. The difference is how you deliver the work to it and how you get the results back. The web interface requires you to be the courier. The CLI tool works directly with your files.

A 2025 Reuters Institute survey of nearly a thousand UK journalists backs this up. The tasks with the highest daily AI adoption are all information-processing tasks: transcription, translation, research, summarization. The tasks with the lowest adoption are production tasks where AI output is harder to verify. That pattern maps directly to what CLI tools are good at: batch processing, document analysis, data extraction — file-in, file-out work that benefits from automation and direct file access.

[SLIDE: tool comparison — three options]

Three tools to choose from. You only need one.

**Claude Code** is what I use and what most of this course is built around. It's Anthropic's CLI tool — you need a Max subscription at $20 a month, or an Anthropic API key. The reason I recommend it for this course: Claude Code is the best at interpreting what you *mean*, not just what you literally typed. When your instructions are a little ambiguous — and they will be, because you're describing things in natural language — it fills in the gaps correctly.

For example, if you say "find the budget document," Claude Code will look for files with "budget" in the name, or files in a folder called "budgets," or files whose content is about budgets. It interprets intent. For someone who isn't a programmer, that matters. You need a tool that understands what you're asking for, not just the exact words you used.

Claude Code also has the most developed plugin system — skills, hooks, and custom commands that we'll use heavily in Module 2. And it runs on your machine with access to your local files, which matters for working with sensitive documents.

**Gemini CLI** is Google's tool. Free — 1,000 requests a day with a Google account. No credit card, no subscription. If you're not sure you want to pay for anything yet, or you want to try the terminal workflow without committing money, start here. Everything in Module 1 works with Gemini CLI.

**Codex CLI** is OpenAI's tool. Requires a ChatGPT Plus subscription. It's solid, especially if you already have that subscription. It's more literal than Claude Code — when something's ambiguous, it tends to ask you to clarify rather than interpreting on its own. That's a defensible design choice, but it can slow you down when you're learning, because you end up having longer back-and-forth conversations about what exactly you meant.

Pick what fits your budget. If you have a Claude subscription, use Claude Code. If you don't want to spend money yet, use Gemini CLI. You can always switch later — the prompting skills transfer across tools.

[SLIDE: cost note]

A word about cost, because I know it's on your mind. And it should be — newsroom budgets are tight, and "AI tools" can sound expensive.

Here's the reality. The actual cost for the kind of work we do in this course is small. Gemini CLI is free. Claude Code's Max subscription is $20 a month and covers usage for the kind of work journalists do — processing documents, generating summaries, building simple tools. You'd have to be running large batch processing jobs to hit usage limits, and even then, the overages are pennies per task.

If you're using an API key instead of a subscription, the cost model is pay-per-use. A typical task — summarizing a document, extracting facts from a press release, processing a transcript — costs fractions of a cent. The most expensive model running a complex multi-step task on a large document might cost a few cents. A full day of heavy use might cost a dollar or two.

And here's something we'll explore in later modules: you don't need the most powerful model for everything. AI models come in different sizes. The most capable models — Claude Opus, for instance — are the best at complex reasoning, ambiguous instructions, and nuanced judgment calls. But routine work like reformatting data, extracting names from a list, or standardizing categories can run on a smaller, cheaper model. You save the expensive model for tasks that need real judgment and use the cheaper one for mechanical work.

This is accessible. It's a subscription and a terminal window. It's not a thousand-dollar infrastructure project and it's not a line item that needs CFO approval.

[SLIDE: what you don't need]

Let me address something head-on, because I've heard it from every journalist I've talked to about this: "Do I need to learn to code?"

No. You don't need to learn to code. You don't need to memorize terminal commands. You don't need to understand programming languages. You don't even need to understand what a "script" is in a technical sense — we'll cover that when it matters, and when we do, the AI writes the scripts, not you.

What you need is the ability to describe what you want clearly enough that the AI can execute it. And that's a skill you already have. It's the same skill you use when you assign a story to a junior reporter: you give them the angle, the key sources, the format you want, and the deadline. If you leave something out, the result isn't what you wanted. If you're specific, it is.

Managing an AI assistant works the same way. The skills that matter aren't technical. They're editorial: clear requirements, direct feedback, organized documentation. You've been practicing those your entire career.

[SLIDE: debugging loop]

One more concept before we get to the course arc. Something will break. I promise you: something will not work the way you expected. A file won't be found. A command will produce an error. An output will be formatted wrong.

When that happens — and this is the most important workflow pattern in the entire course — do not close the session and start over. Copy the error message. Paste it back into the same session. Ask: "What does this mean? How do I fix it?"

The AI wrote the code that broke. It can read the error in context and tell you exactly where the problem is. You don't have to understand the error yourself. You don't have to translate a technical error into plain English and describe it in a new session. You paste it directly. The AI has the context from the same conversation. It diagnoses the problem and either explains the fix or implements it for you.

That feedback loop — see error, paste error, get fix — is the core debugging pattern you'll use for the rest of this course and for the rest of your time using these tools. Don't fear errors. They're information, and you have a collaborator who can read them.

[SLIDE: arc diagram — 4 modules]

Here's the arc of the course. Four modules, each building on the last.

**Module 1** — this week — you install the tools, understand what's possible, and build a persistent project environment. By the end of the week, you'll have a CLI tool running, a context file that gives the AI your beat knowledge before every session, and a project on GitHub.

**Module 2** — you build reusable skills that encode your editorial expertise into slash commands and set up hooks that automate quality checks. Instead of retyping the same instructions every session, you type `/source-verification` and it runs.

**Module 3** — you describe recurring workflows in plain English and the AI builds the automation. You'll have a working pipeline that you tested, debugged, and committed to version control.

**Module 4** — you connect AI to your own data sources via MCP, handle the parts that break, and publish the finished project on GitHub. Your final project is a working journalism tool that colleagues can clone and use.

By the end, everything you've built is in one repository — context file, skills, workflow scripts, data connections. Clone it on a new machine and the full environment comes with it. Give the link to a colleague and they inherit your setup. That's the payoff of building at the harness layer instead of typing one-off prompts in a browser.

Read Mollick's guide in the required readings first. It gives you the conceptual map for everything we'll do. In the next video, I'll open Claude Code on screen and walk you through your first conversation with it — so you can see what this looks like before you try it yourself.

---

## Video 4: Getting started with Claude Code

**Format:** Screen recording with voiceover
**Length:** ~20 minutes
**Module:** 1

---

[SCREEN: Terminal, cursor blinking]

In this video, I'm going to open Claude Code and show you what it looks and feels like — how you talk to it, how it compares to Claude.ai, and where the differences matter. I'm not teaching you terminal commands. The point is to show you that this is a conversation interface, and you already know how to have conversations.

By the end of this video, you'll have seen: launching Claude Code, asking it basic questions, having it work with files on your machine, a side-by-side comparison with the web interface, the planning workflow you'll use throughout the course, and the debugging loop for when things break.

[SCREEN: Typing `claude`, Claude Code launching]

Here's my terminal. I type `claude` and press Enter. That's it — one word. Claude Code launches and I see a prompt. It's a cursor waiting for input, just like a chat window with no send button. I type here and press Enter.

Let me try something simple. I'll type: "Hello. What can you do?"

[SCREEN: Claude's response listing capabilities]

Look at the response. It's telling me what it can do: read and write files, run code, search my filesystem, work with images, create projects. Notice what it's listing — these are capabilities the web version doesn't have. It has access to my machine.

Now, before I go further, let me point out the interface itself. There's no sidebar. No settings panel. No file upload button. It's text. I type, it responds. When it wants to do something on my machine — read a file, create a folder — it tells me what it's about to do and asks permission. That permission system matters. It won't delete your files or run commands without asking.

Let me show you how that works with something real.

[SCREEN: Claude Code terminal]

I'm going to give it a journalism task. I type: "There's a press release in my project folder called park-closure.md. Read it and give me the five most important facts."

[SCREEN: Claude finding and reading the file, then responding]

Watch what happened. First, it asked permission to read the file. I approved. Then it found the file — I didn't paste anything, I didn't give an exact file path. I said "project folder" and "park-closure.md" and it located it. Then it read the entire document and extracted five facts.

Look at the facts it pulled out. The park is closing for three months. The council voted 5-2. There's a $2.1 million renovation budget. Two council members dissented. The project is managed by Greenfield Construction. That's a solid extraction from a real press release, and it took maybe fifteen seconds.

Now let me show you the next step — what makes this different from just getting a chat response.

I type: "Save those facts as a bulleted list in a new file called park-closure-notes.md."

[SCREEN: Claude creating the file, confirmation]

It created the file. Let me open it — the notes are there, formatted exactly as I described. I described an outcome. Claude handled the file lookup, the extraction, the formatting, and the saving. I didn't touch a file manager. I didn't copy-paste anything.

And here's the part that matters for your workflow: that file now exists on my machine. It's a real file in a real folder. I can email it, include it in a story package, or reference it in a later session. It's not trapped in a chat window that I'll lose when I close the tab.

[SCREEN: Claude Code terminal]

Let me push this further, because the real power shows up when you chain requests together.

I type: "Now read park-closure.md again. This time, identify every named person and their role or title. Add a section to park-closure-notes.md with a 'Key People' header."

[SCREEN: Claude reading and appending to the file]

It read the same press release, extracted the names and roles, and appended them to the notes file I created a minute ago. I now have a document with key facts and key people from a press release — created entirely by describing what I wanted.

Notice something: it remembered the file it just created. I said "add a section to park-closure-notes.md" and it knew what I was talking about because it created that file in the same session. That session memory is a big deal. In the web interface, every session is isolated. Here, the conversation builds.

[SCREEN: Claude.ai in browser]

Now let me show you the same task in Claude.ai for comparison.

Here's Claude.ai in a browser. I'm going to give it the same press release. I have to paste the entire text into the chat window — I can't just point it at a file on my machine. I paste, I ask for the five most important facts. It gives me a response.

The response is fine — comparable quality. But look at what I had to do: I opened the file, selected all the text, copied it, switched to the browser, pasted it in. And the output is sitting in this chat window. If I want to save it, I have to select the response, copy it, open a text editor, paste it, and save the file myself. Every step is manual.

If I wanted to add the key people section, I'd paste the press release again in a new message — or hope the conversation is still in context — and then copy that output too.

For one document, that's fine. Mildly annoying, but fine. For ten documents, it's tedious. For 200 documents — like a FOIA response — it's not realistic.

[SCREEN: Back to Claude Code terminal]

That's the comparison. Same AI brain, same quality of response. The difference is in the workflow around it.

**What's the same:** You write in plain English. The AI responds conversationally. You can iterate, ask follow-ups, change your mind. Every prompting skill you learned in the 101 course carries over completely. If you can write a good prompt for Claude.ai, you can write a good prompt for Claude Code.

**What's different:** Claude Code works with your files directly. It can find, read, create, and modify files on your machine. It can run scripts. Sessions have continuity — it remembers what it just did. And the output stays on your machine as real files, not chat messages.

[SCREEN: Claude Code terminal]

Let me show you one more thing before we move to the planning workflow: what happens when you give it multiple files.

I type: "I have three press releases in my documents folder: park-closure.md, water-main-repair.md, and council-reorganization.md. Read all three and create a summary table with columns for: topic, key decision, vote count, and status. Save it as weekly-roundup.md."

[SCREEN: Claude processing multiple files, creating a table]

Watch it work. It's reading each file in sequence, extracting the relevant information, building a markdown table, and saving it. One prompt, three documents, one structured output. That weekly roundup — the kind of thing that might take you 30 minutes of manual work on deadline — took about 20 seconds.

And the table is a real file on my machine. I could ask Claude to convert it to HTML for a newsletter, or format it for a social media thread, or append it to a running log that grows week by week.

[SCREEN: Claude Code terminal]

Now let me show you a workflow pattern you'll use throughout this course. It's called Plan Mode, and the idea is simple: before the AI builds anything, you ask it to plan first.

I type: "I have a folder of press releases from the city — about 30 documents accumulated over the past quarter. I want to create a quarterly activity report: what decisions were made, who was involved, and what's still pending. How would you approach this? Don't do anything yet — just plan the approach."

[SCREEN: Claude presenting a multi-step plan]

Look at what it's proposing. It broke the task into stages. First, read all 30 documents and categorize them by topic. Second, extract decisions, vote outcomes, and named officials from each one. Third, identify items that appear in multiple documents — ongoing threads. Fourth, compile a structured report with sections for completed decisions, pending items, and key people. Fifth, flag anything that contradicts or updates a previous document.

That's a plan. It hasn't done any of this yet. I can review each step and decide if it's right.

Let me add something: "Also include a section that tracks which topics came up more than once across the quarter — I want to see patterns."

[SCREEN: Claude updating the plan]

It added a step for cross-referencing topics across documents. I refined the plan before any work happened. Now, if I approve this, it'll execute — and if something goes wrong, I know which step failed because the plan is documented.

I type: "That looks right — go ahead."

[SCREEN: Claude working through the plan, processing documents]

Now it's working. But here's the key thing: I saw the approach before it started. I could have changed it. I could have said "skip the pending items, I only care about completed votes" and it would have adjusted. Plan Mode is how you maintain oversight over a multi-step task. You'll use this every time you ask Claude to build something you care about.

[SCREEN: Claude Code terminal, results visible]

And there it is. A quarterly report, structured by topic, with cross-references and a patterns section. Built from 30 documents with one planning conversation.

[SCREEN: Claude Code terminal]

Now let me show you the debugging loop, because this is the most practical thing I'll teach you today.

I'm going to intentionally cause an error. I'll ask Claude to read a file that doesn't exist.

I type: "Read the file called budget-hearing-notes.md and summarize it."

[SCREEN: Error message]

It tried to find the file and couldn't. There's an error message. Now, here's what NOT to do: don't close the session. Don't start over. Don't try to figure out the error yourself.

Instead, look at the error message. It says something like "file not found" with a path it tried. I could just say: "That file isn't there. Try looking in the documents subfolder instead." Or I could paste the error and ask: "What happened and how do I fix this?"

[SCREEN: Claude explaining the error and suggesting fixes]

It explains: the file wasn't found at the expected path, here are the files that do exist in the project, did I mean one of these? It's diagnosing the problem in context because it knows what it was trying to do.

This loop — see error, paste error, get fix — applies to everything. Terminal errors, Python tracebacks, API failures, formatting problems. Don't paraphrase the error. Don't try to interpret it. Paste it directly and ask. The AI wrote the code or ran the command that failed. It has the context to help.

You'll use this pattern more than any other pattern in the course. Errors are information, not failures. Your collaborator can read them.

[SCREEN: Claude Code terminal]

Let me also show you one thing about how Claude Code handles images, because this comes up in journalism. Claude Code is multimodal — it can see images.

I type: "I have a screenshot of a chart from a city budget presentation. It's on my desktop — budget-chart.png. Read the image and tell me what it shows."

[SCREEN: Claude analyzing the image]

It read the image and described the chart — bar graph showing department allocations, the police department at 42% of the budget, education at 28%, and so on. If that chart had text that was hard to read, or if the formatting was confusing, I could ask follow-up questions about specific parts.

This also works for debugging visual problems. If you're building a web page later in the course and something looks wrong, you can take a screenshot and ask "why does this look broken?" The AI can see the screenshot and respond.

[SCREEN: voiceover, terminal visible]

A quick note on when to use which tool.

**Use Claude.ai** when you need a quick answer, when you're on your phone, or when you're having a pure conversation — brainstorming, outlining, asking conceptual questions. The web interface is fast and convenient for that.

**Use Claude Code** when you're working on a project with files, when you want to save outputs, when you need multi-step processing, or when you're building anything you want to run again. The exercise, the skills, the workflows, the final project — all of that happens in Claude Code.

As the course progresses, you'll spend more time in Claude Code and less in the browser. Not because the browser is bad — because the CLI tool can do things the browser can't.

[SCREEN: Claude Code terminal]

One more note before the exercise. When you open Claude Code, it starts in whatever directory your terminal is pointed at. That matters because Claude Code can see the files in that directory and its subdirectories. For Module 1, you'll create a project folder and work inside it. When you open Claude Code in that folder, it's scoped to your project.

This is also how context files work — which we'll cover in the next two videos. But I mention it now because it explains a common confusion: if Claude Code can't find a file you're asking about, check whether you started the session in the right directory. The AI works where you pointed it.

The exercise this week asks you to install a tool, have your first conversation, and compare the experience to using a web interface. Go through the exercise step by step. Try the debugging loop when something goes wrong — and something will. That's not a failure. That's the best learning opportunity in the whole exercise.

But there's a second half to this module. You've seen what Claude Code can do with a single session. Next, we're going to talk about why it forgets everything between sessions — and how to fix that with a context file. That's the next video.

---

## Video 5: The context file problem

**Format:** Talking head + slides
**Length:** ~20 minutes
**Module:** 1

---

[TALKING HEAD]

Every time you open a new Claude Code session, it doesn't know who you are. It doesn't know your beat, your publication's style, or what the city council calls its budget process. Every session starts from zero. You finished a great session yesterday where Claude learned all your preferences and terminology — and today, none of that exists. You're starting over from scratch.

This is the blank slate problem. And it's the single biggest frustration journalists hit when they start using CLI tools. The tool is powerful — you saw that in the last video — but it has amnesia. Every conversation is the first conversation.

Context files fix that.

[SLIDE: context window diagram]

Let me explain what's happening technically, because understanding the mechanics will help you use these tools better.

AI models work with something called a context window. Think of it as the model's short-term memory — everything it can hold in mind during a single conversation. That window fills up with the conversation as it goes: your messages, its responses, any files it reads, any code it writes. When you end the session, the window empties. Everything is gone.

Every new session is a fresh start. The AI doesn't have a persistent memory the way a person does. It can't remember what you told it yesterday, or last week, or five minutes ago in a different session.

But — and this is the key — Claude Code automatically reads a specific file every time you open a session in a project directory. That file is called CLAUDE.md. It's a plain text file, written in markdown. It lives in the root of your project folder. When you type `claude` and press Enter, the first thing Claude Code does is look for a CLAUDE.md in the current directory and read it into the context window.

Same concept for other tools: Gemini CLI reads GEMINI.md. Codex reads AGENTS.md. The file format differs slightly, but the idea is identical: a text file that loads automatically so the AI starts every session with the context you've defined.

Your CLAUDE.md becomes the project's memory. Not your memory — the project's. It's there for every session, for every person who opens Claude Code in that directory.

[SLIDE: short sessions + handoff notes]

Now here's the workflow pattern that makes context files powerful in practice, and it's something most people don't figure out on their own.

Don't run one long session. Run short, focused sessions.

Here's why: as a conversation gets longer, the context window fills up. The model has to hold more and more information in mind. And at a certain point — it varies, but it happens — the model starts losing track. It drops details from earlier in the conversation. It starts filling in gaps from its training data instead of from your actual documents. It starts making things up.

This is where hallucinations come from. Not from the model being stupid — from the model being overwhelmed. Too much context, not enough structure. Long, unfocused sessions are the breeding ground for errors.

The fix: work in short bursts. Open Claude Code. Give it a specific task. "Process these three press releases and extract the key facts." It does the work. Before you close the session, you say: "Update my CLAUDE.md with a handoff note — what we accomplished, what's left to do, and any decisions we made."

Claude writes a few lines into your context file. You close the session.

Next time you open Claude Code, it reads the CLAUDE.md — including the handoff note. It knows where you left off. You don't have to re-explain anything. You just say "pick up where we left off" or "now do the next step."

Short sessions. Handoff notes. That's the pattern. You'll use it throughout this course and it'll prevent most of the frustration people hit with these tools.

[SLIDE: annotated CLAUDE.md example]

So what goes in a context file? Let me break it down into three categories, with examples from real journalism work.

**Category one: beat knowledge.** This is what makes your coverage specific to your beat. How local institutions are named — and this matters more than you'd think. "The city refers to its annual budget process as the appropriations cycle — never call it budget season." If Claude sees a document mentioning the appropriations cycle and you haven't told it this is about the budget, it won't make the connection. If it's writing a summary and calls it "budget season" when your publication uses "appropriations cycle," you have to manually fix it every time.

More examples: "The mayor is Sarah Chen. On second reference, use Chen, not the mayor, unless the sentence is about the office rather than the person." "City council has nine members. Five votes constitute a majority. When reporting votes, always specify whether it was unanimous." "The city manager is appointed, not elected. Do not refer to this position as being 'in office.'"

These are the things you know from covering the beat for months or years. The AI doesn't know any of them unless you write them down.

**Category two: style rules.** Your publication's specific standards. "AP style with no Oxford comma." "Numbers under 10 are spelled out except in data tables." "Headlines are sentence case, not title case." "When quoting from public documents, always include the document name and date in parentheses."

Some of these overlap with what the AI already knows about AP style. But the deviations matter: if your publication uses the Oxford comma despite AP not recommending it, you need that in the file. If your editor insists on a specific date format, specify it. The goal is that output from Claude matches what your publication actually publishes without manual corrections.

**Category three: workflow instructions.** These are rules about what the AI should and shouldn't do on its own. "Always flag claims that haven't been verified against a primary source." "Never write a lead — generate three options and let me choose." "When processing meeting minutes, always note items that were tabled or deferred — these tend to come back." "Never delete or overwrite files without asking first."

This category is where you encode editorial judgment. The AI is doing the mechanical work — but you're setting the editorial guardrails.

[SLIDE: three examples with pass/fail markers]

Here's how you test whether something belongs in your context file. I call it the deletion test. Simple rule: if you removed this line, would the AI behave any differently?

"Be helpful." Delete it. Nothing changes — Claude is already helpful by default. That's a wasted line. It takes up space in the context window without changing behavior. Delete it.

"Always provide thorough and detailed responses." Delete it. Also nothing changes. Claude already tries to be thorough. These kinds of generic instructions are noise.

"The city refers to its annual budget process as the appropriations cycle — never call it budget season." Delete it and Claude uses the wrong term next time. That line passes the deletion test. It belongs in the file.

"When covering city council votes, always include the vote count and list any dissenting members by name." Delete it and Claude gives you a vague summary like "the council voted to approve." You lose the 5-2 vote count and the names of the two dissenters. That line passes. It belongs.

"Source verification: when summarizing a claim from a press release, note whether the claim cites a specific data source. If it doesn't, flag it as unverified." Delete it and Claude passes along claims without flagging. That passes.

Every line in your context file should survive this test. If removing it wouldn't change the AI's behavior, the line isn't doing work. Take it out. A shorter, tighter context file is better than a long one full of generic instructions — because every line takes up space in the context window, and you want that space used for things that matter.

[SLIDE: what NOT to put in a context file]

Let me also talk about what doesn't belong.

Don't put your entire stylebook in the context file. Claude already knows AP style. Only include the places where your publication deviates from the default, or where the default isn't specific enough.

Don't put temporary notes or task-specific instructions that only apply to one session. Those go in the conversation, not the file. The context file is for persistent instructions that should apply across all sessions.

Don't put sensitive information — passwords, API keys, source contact details. The context file is a plain text file that could end up on GitHub. Keep sensitive data separate.

And don't be afraid to edit the file over time. A context file isn't something you write once and never touch. It's a living document. As you work with the tool, you'll notice things: Claude uses the wrong abbreviation, or it formats tables differently than your publication does, or it doesn't flag a category of claims you want flagged. Each of those is a line to add. The file grows with the project.

[SLIDE: hierarchy diagram]

Context files scale beyond individual projects. Claude Code supports a hierarchy.

At the top: a global file at `~/.claude/CLAUDE.md`. This applies to every Claude Code session on your machine, regardless of what directory you're in. Put your universal preferences here — your name, your organization, your default style, things that should always be true.

Next: a project-level file. This lives in the root of your project folder. It contains everything specific to that project: beat knowledge, project-specific style, workflow instructions.

You can also have subdirectory-level files. If your project has a `data/` subdirectory with different conventions, a CLAUDE.md inside that subdirectory adds context specific to data work. The most specific file takes precedence.

In practice, here's what this looks like for a newsroom. The newsroom maintains a shared global file: AP style, attribution requirements, the publication's voice, ethical guidelines. This gets installed on every reporter's machine. Each beat reporter then has a project-level file with their own sources, terminology, and preferences. The city hall reporter's file knows about the appropriations cycle and the council's voting procedures. The courts reporter's file knows the difference between a motion to dismiss and a summary judgment. The education reporter's file knows the district's specific governance structure and testing terminology.

Open Claude Code in a beat folder and both files load. Shared standards plus beat-specific knowledge. That's institutional context — the AI starts every session knowing what your newsroom knows.

[SLIDE: version control and Git]

One more important thing before the demo. Your context file should live in a Git repository.

If you're not familiar with Git: it's a version control system. Think of it as "Track Changes" for your entire project folder. Every time you save a snapshot — called a "commit" — Git records exactly what changed and when. You can go back to any previous version. You can see the history of every file.

Why does this matter for context files? Three reasons.

First: you can track what changed and when. If the AI starts behaving differently and you're not sure why, you can look at the context file's history and see what was added or removed recently.

Second: you can share the project. When a colleague clones your repository — which is just copying the project folder — they get the context file too. They inherit your beat knowledge, your style rules, your workflow instructions. Onboarding a new reporter onto a beat becomes: "clone this repo and open Claude Code."

Third: it connects to everything else you'll build. The skills in Module 2, the workflows in Module 3, the data connections in Module 4 — all of that lives in the same Git repository. The context file is the foundation.

You don't have to learn Git commands. You tell Claude "put this project on GitHub" and it handles the mechanics: initializing the repository, creating commits, pushing to the remote. Your job is to know what Git does conceptually — not how to type `git push`.

[TALKING HEAD]

In the demo, you'll see this in action: we'll plan a project, write a CLAUDE.md, test it on a real document, see the difference it makes, and push the whole thing to GitHub. See you there.

---

## Video 6: Setting up your beat project

**Format:** Screen recording with voiceover
**Length:** ~20 minutes
**Module:** 1

---

[SCREEN: Terminal, cursor]

Today I'm setting up a beat project from scratch using Claude Code. I won't be typing directory commands or Git syntax. I'll describe what I want and let Claude handle the mechanics. That's the workflow for the entire course — and by the end of this video, you'll have a fully functioning project with a context file, real documents processed with and without context, and everything pushed to GitHub.

[SCREEN: Typing `claude`, session opening]

I type `claude` and press Enter. Now I'm in a session. First thing I do: plan before building. This is the same Plan Mode workflow from the last demo.

I type: "I want to create a new project called greenfield-beat in my Documents folder. It's for covering Greenfield city government for a local news outlet. Plan the directory structure — what folders should it have, what files should be at the root? Don't create anything yet."

[SCREEN: Claude proposing a structure]

Look at what it proposed. A `documents/` folder for press releases, minutes, and reports. A `notes/` folder for story notes and working files. A `data/` folder for spreadsheets and datasets. A CLAUDE.md at the root for project context. A README.md to describe the project.

I didn't say "mkdir." I didn't specify a tree format. I described what the project is for, and Claude proposed a structure that makes sense for that purpose. It even included a `.gitignore` file — which is a Git thing we don't need to worry about yet, but it shows that Claude is thinking about the full project setup, not just the folders.

The structure looks right. I type: "Looks good. Go ahead and create it."

[SCREEN: Claude creating the directories and files]

Done. All the folders exist. CLAUDE.md is there as an empty file, ready to fill in. Let me show you what the folder looks like.

[SCREEN: Showing directory contents]

There it is. Clean project structure. Documents folder for source material, notes for working files, data for structured data. Now let's fill in the context file — this is the important part.

[SCREEN: Claude Code session]

I'm going to give Claude a detailed description of my beat. The more specific I am here, the better the context file will be.

I type: "I cover Greenfield city government for the Daily News. Here's what I need in my CLAUDE.md:

Beat context: My main sources are the mayor's office, city council members, and the city manager. The city uses the term 'appropriations cycle' for its budget process — never say budget season. The council has nine members; five votes is a majority. The mayor is Sarah Chen — use Chen on second reference. The city manager is appointed, not elected.

Style: I follow AP style, no Oxford comma. Numbers under 10 are spelled out except in data tables. Headlines are sentence case.

Workflow rules: When covering council votes, always include the vote count and name any dissenting members. Flag claims from press releases that don't cite a data source. Never write a lead — give me three options. If a document mentions the appropriations cycle, always note the dollar amounts involved.

Write a CLAUDE.md for this project."

[SCREEN: Claude writing the file]

Look at what it generated. It organized everything into clear sections. Beat context at the top — the mayor's name, the council size, the correct terminology. Style rules next. Workflow instructions at the bottom.

Let me scroll through and check a few things. The appropriations cycle rule is there. The vote count instruction is there. The lead rule — "never write a lead, generate three options" — is there. The data source flagging rule is there.

Every line passes the deletion test. If I removed "the city uses 'appropriations cycle' not 'budget season,'" Claude would use the wrong term. If I removed the vote count instruction, Claude would give vague summaries. Each line changes behavior.

Now, this is a starting point — not a finished product. The context file grows with the project. As you work, you'll notice things: Claude abbreviates the city manager's title differently than you'd like, or it doesn't flag a certain kind of claim. Each of those is a line to add. The best context files are written incrementally over weeks, not all at once.

Let me add something right now. I type: "Add one more rule to the CLAUDE.md: when processing city council minutes, always create a separate section for items that were tabled or deferred — these tend to come back at future meetings and I want to track them."

[SCREEN: Claude updating the file]

It added the rule to the workflow section. Now let me do something that will make the value of this file concrete.

[SCREEN: Claude Code session]

I've got a sample press release in the project — park-closure.md. I'm going to process it two ways to show you exactly what the context file does.

First, I need to demonstrate what happens WITHOUT the context file. I'm going to close this session and open Claude Code in a completely different folder — my home directory — where there's no CLAUDE.md.

[SCREEN: Closing session, navigating to home directory, opening Claude Code]

I'm in my home directory now. No CLAUDE.md here. I type `claude` to open a fresh session.

Now I type: "Summarize the file at ~/Documents/greenfield-beat/documents/park-closure.md."

[SCREEN: Generic summary]

Look at the summary. It's fine — technically accurate, well-written. But watch what's missing. It says "the city council approved the park closure." No vote count. It mentions "budget concerns" — not "the appropriations cycle." It doesn't name the dissenting council members. It doesn't flag that the press release claims cost savings without citing specific numbers.

This is what Claude produces when it doesn't know your beat. Generic, correct, but not useful for a reporter who needs specific details and beat-appropriate language.

Now let me close this session and reopen Claude Code inside the greenfield-beat project folder — where the CLAUDE.md lives.

[SCREEN: Navigating to project folder, opening Claude Code]

I type `claude`. Notice what happens at the top of the session — it reads the CLAUDE.md file. You can see it loading the context. The AI now knows everything in that file before I type a single word.

I type: "Summarize park-closure.md."

[SCREEN: Context-aware summary]

Look at that. "Appropriations cycle" instead of "budget." The 5-2 vote count is there. Council members Davis and Ramirez voted against — they're named. The press release's claim about cost savings is flagged as "unverified — no specific figures cited in the release."

Same document. Same AI. The only difference is the context file. That's what a few lines of plain text instructions do. The generic summary would have required me to manually fix every detail. The contextualized summary is publish-ready for my beat.

[SCREEN: Claude Code session in project folder]

Let me push this further. I'll process another document — this time, a set of city council minutes.

I type: "Read council-minutes-excerpt.md. Extract all votes with full vote counts and dissenting members, all action items with assigned parties, and create a separate section for tabled items."

[SCREEN: Claude processing the minutes]

Watch what it's doing. It's following the rules from the CLAUDE.md: vote counts with dissenter names, action items with assignments, and — look at this — a separate "Tabled/deferred items" section, just like I specified in the context file. The tabled items section includes the motion number so I can track them in future meetings.

This is the power of context files. I wrote those rules once. They apply to every document I process in this project, in every session, without me repeating them.

[SCREEN: Claude Code session]

Now let me show you the handoff note pattern I mentioned in the previous video. I've done some good work in this session. Before I close it, I want to leave a note for my next session.

I type: "Before I close this session, update the CLAUDE.md with a handoff note at the bottom. Summarize what we set up today — the project structure, the context file, the documents we processed — and note that the next task should be processing the remaining press releases in the documents folder."

[SCREEN: Claude updating CLAUDE.md with handoff section]

It added a "Current status" section at the bottom of the CLAUDE.md. Project scaffolded, two documents processed, remaining press releases queued for next session. When I open Claude Code in this folder tomorrow, it reads this and knows exactly where we left off. No re-explanation needed.

[SCREEN: Claude Code session]

Last step: let's get this on GitHub.

I type: "Initialize a Git repo here, commit everything with the message 'Initial project setup: CLAUDE.md, project structure, sample documents,' create a repository on my GitHub account called greenfield-beat, and push."

[SCREEN: Claude running git init, commit, remote setup, push]

One prompt. It ran `git init` to initialize the repository. It added all the files. It committed with the message I specified. It created a remote repository on GitHub. It added the remote. It pushed.

Let me count: that's six Git operations from one sentence. I didn't type a single Git command.

[SCREEN: Browser — GitHub showing the repo]

Let me open GitHub in the browser and check.

There it is. The greenfield-beat repository. CLAUDE.md is there — if I click on it, the full context file renders right in the browser. The project structure, the sample documents, the README — everything is here.

Now here's the payoff. If I give this URL to a colleague — another reporter picking up my beat, or someone in the newsroom who wants to use the same workflow — they clone the repository. One command: `git clone` followed by the URL. They now have the project folder on their machine, complete with the CLAUDE.md. They open Claude Code in that folder and it loads the context file automatically. They inherit every rule, every piece of beat knowledge, every workflow instruction I wrote.

That's institutional knowledge, not personal notes. The context file travels with the project, through version control, to anyone who needs it.

[SCREEN: voiceover, terminal visible]

Let me summarize what we built in this session.

You have a project folder with a clean structure. A CLAUDE.md that encodes your beat knowledge, style rules, and workflow instructions. Real documents processed with and without context — so you've seen the difference firsthand. A handoff note pattern for continuity across sessions. And everything on GitHub, shareable and version-controlled.

That's the full Module 1 setup. You have a CLI tool, a context file that shapes how the AI reads your documents, a workflow for maintaining continuity across sessions, and a project on GitHub. Module 2 adds reusable skills to this project — commands you can invoke with a slash that encode specific editorial workflows. See you there.

---

## Video 7: From prompts to skills

**Format:** Talking head + slides
**Length:** ~20 minutes
**Module:** 2

---

[TALKING HEAD]

You've written a prompt that works. It extracts action items from council minutes. You use it every week. And every week you either retype it from memory — slightly different each time — or dig through your notes to find it. That's not a system. That's a workaround.

I did this myself for months before I figured out a better way. I had a note in my phone with prompts I liked. I'd open it, scroll to find the one I needed, copy it, switch to Claude Code, paste it in, and then modify it because the context was slightly different this time. That's four steps and a context switch before any work happens. Multiply that by every task you do repeatedly, and you've built yourself a second job: prompt librarian.

Skills fix that.

[SLIDE: progression diagram]

Here's the maturity path. Most journalists are at stage one or two. This module moves you to three and four.

**Stage one: ad-hoc prompts.** You type the instructions from memory each time. It works, but the results vary depending on how you phrase it that day. Monday you write "extract the key votes from these minutes." Tuesday you write "pull out all voting outcomes from this transcript." The phrasing is different, so the output is different. Subtle differences, but they add up when you're trying to be consistent.

**Stage two: saved prompts.** You keep them in a notes app or a shared document. When you need one, you copy-paste it into Claude Code. Better — more consistent — but still manual. You have to find the right prompt, paste it, and often modify it for the current context. And if you improve the prompt, you have to remember to update the saved version. If a colleague wants your prompt, you email it to them.

**Stage three: skills.** A skill is a markdown file that Claude Code loads as a slash command. You type `/meeting-minutes` and the instructions apply instantly. No copy-pasting. No searching through notes. No context-switching. And because it's a file in your project, it's version-controlled — changes are tracked, colleagues get the latest version automatically when they pull from GitHub.

**Stage four: hooks.** These run automatically. You don't invoke them. They fire at specific points in your workflow — every time Claude reads a file, every time it tries to create something, every time it's about to make a change. Hooks are the background layer of quality control.

**Stage five: plugins.** A package of skills and hooks that someone else has built and shared on GitHub. You install it with one command and get an entire toolkit. The journalism skills library we'll install in the demo is a plugin.

This module covers stages three and four. By the end, you'll have installed a skills library and built a custom skill of your own.

[SLIDE: annotated skill file]

Let me show you what a skill actually is, because the simplicity is the point.

A skill file is a markdown document. It lives in your project's `.claude/commands/` directory. The filename becomes the command name: `meeting-minutes.md` becomes `/meeting-minutes`. `source-verification.md` becomes `/source-verification`. The content of the file is the instructions Claude follows when you invoke the command.

That's it. There's no special syntax. No programming language. No configuration file. It's a markdown document with instructions in plain English — the same kind of instructions you'd give a new reporter taking over your beat. "When processing city council minutes, extract all votes with the full vote count and the names of any dissenting members. Separate action items from discussion items. Flag anything that was tabled."

Now here's the key concept: skills inject context only when you need it.

Your CLAUDE.md loads every session — that's the right behavior for beat knowledge and style rules that should always be active. But a skill only loads when you type the slash command. If you're not doing source verification right now, those instructions aren't taking up space in the AI's context window. They're sitting in a file on disk, waiting for you to call them.

This matters because context has a cost. Not in dollars — in attention. The more instructions the AI is holding in memory at once, the more likely it is to lose track of something. Remember the drift problem from Module 1? That's partly a context overload problem. If your CLAUDE.md has beat knowledge plus style rules plus workflow instructions plus source verification instructions plus meeting minutes extraction rules plus FOIA drafting guidelines — that's a lot of context loaded on every single session, even when you only need one of those capabilities.

Skills let you keep specialized instructions out of the background and bring them in only when they're relevant. Think of it as a colleague you pull into a conversation for their specific expertise and then let them go back to their desk. You don't keep the FOIA expert in the room when you're working on meeting minutes.

This is what I mean by "token-efficient context management" — you get precise, relevant instructions at the moment you need them, and nothing cluttering the window when you don't.

[SLIDE: skill examples for journalism]

What kinds of skills make sense for journalism? Here are some examples.

**Source verification.** A skill that applies the SIFT method to a claim: check the source, find the original, trace it upstream, look for confirmation. You paste a claim, invoke `/source-verification`, and get a structured analysis of what holds up and what doesn't.

**Meeting minutes extraction.** A skill that processes city council or board meeting transcripts and pulls out votes, action items, named officials, and tabled items. Type `/meeting-minutes` after feeding it a transcript.

**FOIA request drafting.** A skill that takes your description of what records you want and drafts a FOIA request following your state's specific requirements — addressing it to the right office, citing the right statute, including the right language about fee waivers.

**Content formatting.** A skill that takes a draft story and formats it to your publication's specific requirements — headline format, byline style, dateline conventions, photo caption format.

**Data cleaning.** A skill that takes a messy dataset — inconsistent names, mixed formats, missing fields — and standardizes it according to rules you've defined.

Each of these is a task you do repeatedly, where consistency matters, and where the instructions are specific enough that the AI needs guidance to do it your way instead of generically.

[SLIDE: hook flow diagram]

Hooks are different from skills, and the distinction matters.

Skills are things you invoke: you type a command and the instructions load. Hooks are things that fire automatically. You don't call them. They run on their own at specific trigger points.

Two kinds.

**Notify hooks** run in the background and flag issues without stopping your work. Think of them as an automated second reader sitting behind you. The work keeps going, but problems get marked for your attention. A notify hook might flag an unattributed quote in a summary. It might catch AI-generated filler language — words like "comprehensive" or "innovative" that sound impressive but add nothing. It might note that a claim hasn't been verified against a primary source.

The key: notify hooks don't interrupt. They observe and report. You review the flags when you're ready.

**Stop hooks** are different. They pause execution and require your explicit confirmation before continuing. These are for one-way doors — actions that are hard to undo.

Concrete example: the journalism skills library includes a hook called `one-way-door-check`. Every time Claude Code tries to create a new file, this hook examines the filename and the content. If the file looks like a hard-to-reverse decision — a database schema, an API contract, an infrastructure configuration, a published article — the hook blocks the write and forces Claude to stop.

Claude can't just create the file. It has to present you with what it's about to create, explain why, and offer alternatives. You review and decide. For routine files — notes, drafts, data exports — the hook passes silently. You never even know it ran.

You never invoke this hook. It fires automatically, every time. And the hook script itself is readable — you can open it and see exactly what patterns it checks. A few dozen lines. That transparency is the point: if you disagree with a rule, you change the file.

Newsrooms already work this way. You have editorial review before publication. You have sign-off requirements before legal settlements. You have approval chains before public statements. A stop hook is the automated version of "does someone need to see this before it goes out?"

[SLIDE: plugin concept]

At the top of the maturity path: plugins. A plugin is a package of skills and hooks that someone has assembled and shared on GitHub. You install the whole package with one command. All the skills show up as slash commands. All the hooks start running automatically.

The journalism skills library is a plugin: 36 skills and 13 hooks, installed in one step. Source verification, FOIA requests, data journalism, editorial workflows, quality checks. The exercise this week has you install it, use it, and build on it.

And at the far end of what's possible: Superpowers — a third-party plugin that fires different skills automatically at each stage of a project. Brainstorming before any code is written. Test-driven development during implementation. Code review after tasks are completed. A complete structured workflow, installed in one command. The journalism skills plugin follows the same model, built for newsroom work instead of software development.

[SLIDE: skills by category]

The journalism skills library has 36 skills across several categories:

Source verification and fact-checking. FOIA requests and public records. Data journalism workflows. Editorial quality checks. Content formatting and production. Beat-specific tools.

You don't need to use all of them. Browse the library. Find the skills that match tasks you actually do. Ignore the rest. The exercise asks you to install the library, try the source-verification skill on a real claim, and create one custom skill of your own.

The concept generalizes beyond the library. Say you're building a source-tracking system — a tool that suggests relevant sources for a story topic, and then after you've written the story, generates a diversity audit of who you quoted. That tool has two distinct tasks: suggesting sources before writing, and analyzing the finished article after writing. Those are two skills. Build each one, invoke each one when you need it, and neither clutters your context when you're doing other work.

Think about your own workflow. What do you do every week that follows the same pattern? What instructions do you find yourself retyping? Those are skills waiting to be built.

[SLIDE: when skills aren't worth it]

A quick note on when skills are overkill. Not every prompt needs to become a skill.

If you do something once — a specific research question, a one-time formatting task — just type the prompt. Don't create a skill for it. Skills are for tasks you repeat.

If the task is so simple that the prompt is one sentence — "summarize this in three bullets" — a skill file adds overhead without much benefit. The value of skills comes from complex, multi-step instructions that would be tedious to retype correctly every time.

The threshold: if you've done it three times and you'll do it again, it's probably worth making into a skill. If it's a one-off, just type the prompt.

[SLIDE: arc diagram — module 2 highlighted]

In Module 1, you set up the project and got context files working. This week you add reusable tools. By the end of Module 2, your project will have a custom skill you built yourself, a library of journalism-specific tools, and hooks running in the background checking your work. Module 3, you'll describe a full workflow and have the AI build the automation.

In the demo, I'll install the journalism skills library, run source-verification on a real claim, and walk through creating a custom skill step by step. See you there.

---

## Video 8: Installing and using journalism skills

**Format:** Screen recording with voiceover
**Length:** ~20 minutes
**Module:** 2

---

[SCREEN: Terminal, Claude Code open in greenfield-beat directory]

Today we're going to do three things: install the journalism skills library, use the source-verification skill on a real claim, and build a custom skill from scratch. By the end of this video, your project has working tools — not just context, but actual reusable commands.

I'm in my greenfield-beat directory. This is the same project from Module 1 — it already has the CLAUDE.md with our beat context. Claude Code is open. Let's start with the install.

[SCREEN: Claude Code session]

I type: `/install-github-plugin jamditis/claude-skills-journalism`

[SCREEN: Claude cloning and installing]

Watch what's happening. It's cloning the repository from GitHub — downloading all 36 skills and 13 hooks. It's registering them with Claude Code so they show up as slash commands. One command did all of that.

Let me verify it worked. I'll type `/help` and scroll down.

[SCREEN: Help output showing new slash commands]

See all those new commands? `/source-verification`, `/foia-requests`, `/data-journalism`, `/fact-check-workflow`, `/ap-style-check`. Each one of those is a markdown file with instructions that Claude follows when you invoke it. They weren't there before the install. Now they're part of my toolkit.

And the hooks are running too — silently, in the background. The `one-way-door-check` hook I described in the previous video is now active. Every time Claude tries to create a file that looks like a hard-to-reverse decision, it'll pause and ask for confirmation. I won't see it until it triggers. That's the point.

[SCREEN: Opening a skill file]

Before we use any of these, let me show you what's inside one. I type: "Open the source-verification skill file so I can read it."

[SCREEN: Skill file content visible]

Look at this. It's a markdown document — the same format you'd write a CLAUDE.md in. At the top, there's a YAML header: the skill name, a description, and some metadata. Then the body: step-by-step instructions.

Let me read through it. "When this skill is invoked, apply the SIFT method to evaluate the claim." It breaks down the steps: stop and identify the specific claims being made. Find the original source. Trace the claim upstream to its origin. Look for independent confirmation from other sources. For each claim, note: verified, partially verified, unverified, or debunked. Include the evidence source for each determination.

This is the same method you'd follow manually if you were verifying a claim for a story. The skill makes it consistent — the same steps in the same order every time — and fast, because the AI does the lookup and structuring work.

And you can read every line. You can edit it. You can copy it, rename it, and modify it for your beat. It's not a black box. It's a text file with instructions.

[SCREEN: Claude Code session]

Now let's use it. I've got a claim to check — the kind of thing that shows up in your social media feeds or your tip inbox.

I paste: "A Facebook post claims the city of Greenfield spent $4.2 million on a parking garage with only 200 spaces, making it the most expensive per-space parking structure in the state."

Now I invoke the skill: `/source-verification`

[SCREEN: Claude working through the SIFT method]

Watch what it does. It's following the skill instructions step by step. First, it isolates the specific claims: there's a dollar amount ($4.2 million), a capacity number (200 spaces), and a comparative claim (most expensive per-space in the state). Three distinct, testable claims.

Then it starts working through the SIFT method. It looks for the original source of the Facebook post — who posted it, when, is there a link to a source? It searches for primary documentation: city council minutes, budget records, local news coverage of the parking garage project.

[SCREEN: Structured output appearing]

Look at the results. Let me walk through them.

**Claim 1: $4.2 million cost.** The city did approve a parking garage project. But the amount in the council resolution is $3.8 million, not $4.2 million. The $4.2 million figure doesn't appear in any official documentation the skill found. The post inflated the number by $400,000. Status: partially wrong.

**Claim 2: 200 spaces.** The council resolution specifies a 200-space garage. That matches the post. Status: confirmed.

**Claim 3: Most expensive per-space in the state.** This would require a statewide dataset of parking structure costs and capacities. No such dataset is available. The skill can't verify or debunk this — it doesn't have the data. Status: unverifiable with available evidence.

Three claims checked in about 30 seconds. One is wrong, one is correct, one can't be determined. And notice what the skill didn't do: it didn't call the post "false." It didn't issue a verdict. It told you which parts held up, which didn't, and where it ran out of evidence. It's reporting uncertainty, not hiding it. That's the editorial judgment baked into the skill instructions.

Compare that to doing this manually. You'd spend 15-20 minutes searching for the council resolution, cross-referencing the dollar amount, checking the space count, and then probably giving up on the statewide comparison because the data doesn't exist in a convenient form. The skill does the same work in seconds, and — because it follows the same steps every time — the analysis is consistent whether you run it at 9am or 9pm, whether you're fresh or on deadline.

[SCREEN: Claude Code session]

Let me run it on one more claim, so you can see the pattern. I paste: "A newsletter claims that Greenfield's police department overtime budget increased 340% over the last three years."

Then: `/source-verification`

[SCREEN: Claude working through the verification]

Same method, different claim. It's looking for the police department budget records, checking the overtime line items for each of the last three years, and calculating the actual percentage change.

[SCREEN: Results]

The overtime budget did increase — but by 180%, not 340%. The newsletter appears to have compared the lowest single month to the highest single month rather than using annual totals. The skill notes the discrepancy and explains the likely methodological issue.

That's the kind of nuance you need for accurate reporting. Not "the claim is wrong" but "the claim uses a misleading comparison methodology, and here's the actual number."

[SCREEN: Claude Code session]

Now let's build a custom skill. This is the part that connects to your exercise — because the exercise asks you to create a skill of your own.

I'll start with Plan Mode. I type: "I want to create a skill called meeting-minutes that extracts action items, votes, and named officials from a city council transcript. The output should be a structured summary with: all votes including the full count and names of dissenters, all action items with the responsible party and deadline, and all named officials with their role. Plan the skill file structure — sections, steps, output format — but don't write the file yet."

[SCREEN: Claude presenting a proposed structure]

Look at the plan. It's proposing a YAML header with the skill name and description. An input section describing what the skill expects — a meeting transcript or minutes document. Then processing rules: what to look for. Motions and votes — extract the motion text, the mover and seconder, the vote count, and any named dissenters. Action items — extract the task, who it's assigned to, and any stated deadline. Named officials — who spoke, their title or role. Then an output format: structured sections for each category.

I like this, but I want to add something. I type: "Good start. Also include a section for items that were tabled or deferred — these tend to come back at future meetings and I want to track them separately. And add a 'Discussion highlights' section that captures any notable exchanges or disagreements that didn't result in a formal vote."

[SCREEN: Claude updating the plan]

It incorporated both additions. The plan now has five output sections: votes, action items, named officials, tabled items, and discussion highlights. That's a solid skill structure.

Let me review once more. The processing rules look right. The output format is clear. I type: "Looks good — go ahead and write the skill file."

[SCREEN: Claude creating the file in .claude/commands/]

Done. The skill is now at `.claude/commands/meeting-minutes.md` in my project directory. Let me open it to show you what it looks like.

[SCREEN: Skill file visible]

There's the YAML header with the name and description. The instructions are in plain English — readable, editable, shareable. Any journalist could open this file, read it, and understand exactly what the skill does. And they could modify it: add a section, change the output format, adjust what gets flagged.

Now let's test it. I type: `/meeting-minutes`

Then: "Apply this to council-minutes-excerpt.md."

[SCREEN: Claude processing the transcript]

Watch it work through the document. It's identifying motions, counting votes, pulling out names and titles, finding action items with deadlines, and separating tabled items into their own section.

[SCREEN: Output visible]

There it is. Let me walk through the output.

**Votes:** The park renovation was approved 5-2, with Council Members Davis and Ramirez dissenting. The appropriations cycle timeline was approved unanimously. The emergency water main allocation was approved 7-2.

**Action items:** Public Works to submit the park renovation timeline by March 15. City Manager to provide cost estimates for the water main project by the next session. Council Secretary to schedule a public hearing on the zoning amendment for April.

**Named officials:** Mayor Chen presided. Council Members listed with their vote on each item. City Manager Park presented the budget update.

**Tabled items:** The commercial zoning amendment was tabled pending a public hearing. The parking enforcement review was deferred to next month at Council Member Davis's request.

**Discussion highlights:** Davis raised concerns about the park renovation's impact on the adjacent neighborhood. Ramirez questioned the cost projections, citing a similar project in a neighboring city that came in 40% over budget.

That's a complete meeting summary, structured for a reporter's needs. The tabled items section is going to save me time later — those items will come back, and now I have a record of when they were deferred and why.

[SCREEN: Claude Code session]

Let me iterate on this. The output is good, but I want to refine one thing. I type: "Update the meeting-minutes skill. In the Votes section, add the agenda item number if available — that makes it easier to cross-reference with the published agenda."

[SCREEN: Claude updating the skill file]

It opened the skill file, found the votes processing section, and added the rule about agenda item numbers. The skill file is now better than it was five minutes ago. That's how skills improve — you use them, notice what's missing, and update the file.

[SCREEN: Claude Code session]

Let me commit this to Git before I move on. I type: "Commit the new meeting-minutes skill and the installed journalism skills library with the message 'Add journalism skills library and custom meeting-minutes skill.'"

[SCREEN: Git commit]

Done. The skill is version-controlled. If I make changes to it later, I can see the history. If a colleague clones this repo, they get the skill. If I break something, I can roll back.

[SCREEN: voiceover, terminal visible]

Let me recap the workflow. Plan the skill: describe what it should do, let Claude propose the structure, review before anything is written. Build: approve the plan, Claude writes the file. Test: run it on real material and check the output. Iterate: notice what's missing, update the file. Commit: save the version.

That's the workflow for creating any tool in this course. You describe what you want. The AI proposes. You review. It builds. You test. You refine. You commit.

Your exercise this week: create a skill for a task you actually do — source verification, data cleaning, content formatting, meeting minutes, whatever fits your beat. Test it on real material. Post what you built in the forum — your classmates are building different skills for different beats, and seeing what they made is half the learning.

See you in Module 3, where we take these skills and build full automation workflows around them.

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
