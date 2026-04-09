# Full video narration scripts — all modules

**Course:** Advanced prompt engineering for journalists
**Instructor:** Joe Amditis, Center for Cooperative Media, Montclair State University

These are camera-ready narration scripts. The promo and welcome videos target 1-2 and 2-3 minutes respectively. Instructional videos (3-10) target ~20 minutes (~3,000 words at 150 wpm). Videos 11-14 are shorter (~10-14 min, ~1,500-2,000 words). Stage directions are in [BRACKETS].

## Updated video map (4-module structure)

| # | Video | Module | Format | Target length |
|---|-------|--------|--------|---------------|
| 1 | Promo video | — | Talking head | 60-90 sec |
| 2 | Welcome video | Intro | Talking head | 2-3 min |
| **3** | **What CLI LLMs are and why they matter** | **Module 1** | **Talking head + slides** | **~20 min** |
| **4** | **Getting started with Claude Code** | **Module 1** | **Screen recording** | **~20 min** |
| **5** | **The context file problem** | **Module 1** | **Talking head + slides** | **~20 min** |
| **6** | **Setting up your beat project** | **Module 1** | **Screen recording** | **~20 min** |
| **7** | **From prompts to skills** | **Module 2** | **Talking head + screen recording** | **~36 min (recorded)** |
| **8** | **Installing and using journalism skills** | **Module 2** | **Screen recording** | **~13 min (recorded)** |
| **9** | **Describing workflows and having AI build them** | **Module 3** | **Talking head + slides** | **~20 min** |
| **10** | **Ask Claude Code to build you a pipeline** | **Module 3** | **Screen recording** | **~20 min** |
| **11** | **Getting more out of your sessions** | **Module 4** | **Screen recording** | **~12-14 min** |
| **12** | **Settings, caching, and connecting to data** | **Module 4** | **Talking head + slides** | **~12 min** |
| **13** | **Calling other agents from the command line** | **Module 4** | **Screen recording** | **~10 min** |
| **14** | **What's next + course close** | **Module 4** | **Talking head + slides** | **~10 min** |

---

## Video 1: Promo video

**Format:** Talking head
**Length:** 60-90 seconds (~190 words)
**Module:** —

---

[TALKING HEAD]

Every time you open ChatGPT, you start from scratch. You paste in the document, explain what you cover, describe the output format — and next week you do all of it again. From scratch.

This course fixes that.

I'm Joe Amditis from the Center for Cooperative Media at Montclair State. This is Advanced Prompt Engineering for Journalists — four weeks, from the Knight Center.

Here's the shift. You move AI off the browser and onto your machine. It reads your files directly — no uploading, no pasting, no copy-paste dance. You write one file that tells it your beat, your sources, your standards. That file loads automatically, every session. No more re-explaining yourself.

From there you build real tools. Reusable commands that encode your newsroom's workflows. Automation you describe in plain English and the AI builds for you. Connections to your own documents — where the AI can search across them and cite its sources.

You don't need to code. The AI handles that. You need to describe what you want — and you already do that for a living.

If you use AI and want to go from chatting with it to delegating real work, this is the course. Sign up at JournalismCourses.org.

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

## Video 3: What CLI LLMs are and why they matter — ~20 minutes

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

[RECAP — after tools comparison]

Three tools, same idea. Claude Code if you want the best results and have $20/month. Gemini CLI if you want free. Codex if you already pay for ChatGPT Plus. Pick one and move on — you can always switch later.

[SLIDE: what you don't need]

Let me address something head-on, because I've heard it from every journalist I've talked to about this: "Do I need to learn to code?"

No. You don't need to learn to code. You don't need to memorize terminal commands. You don't need to understand programming languages. You don't even need to understand what a "script" is in a technical sense — we'll cover that when it matters, and when we do, the AI writes the scripts, not you.

What you need is the ability to describe what you want clearly enough that the AI can execute it. And that's a skill you already have. It's the same skill you use when you assign a story to a junior reporter: you give them the angle, the key sources, the format you want, and the deadline. If you leave something out, the result isn't what you wanted. If you're specific, it is.

Managing an AI assistant works the same way. The skills that matter aren't technical. They're editorial: clear requirements, direct feedback, organized documentation. You've been practicing those your entire career.

[RECAP — after "do I need to code"]

No coding. No terminal commands to memorize. You describe outcomes, the AI handles the steps. The skills that matter are editorial: clear requirements, direct feedback, organized documentation.

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

[RECAP — end of video, consolidating all concepts]

So here's the map. AI has three layers: models, apps, and harnesses. You've been using apps. This course moves you to harnesses — where the AI works with your files and takes multi-step action. Three tools do this: Claude Code, Gemini CLI, Codex CLI. You don't need to code. You describe outcomes, the AI handles execution. When something breaks — and it will — paste the error back and let the AI diagnose it. Four modules, each building on the last, ending with a shareable project on GitHub.

---

## Video 4: Getting started with Claude Code — ~20 minutes

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

[RECAP — after chaining demo]

So far: launch with one word, ask in plain English, it reads files without uploading, saves output as real files, and remembers what it just did within a session. That's the basic loop.

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

[RECAP — after Plan Mode]

Plan Mode: ask the AI to plan before it builds. Review the plan. Adjust it. Then approve. You keep oversight, and if something breaks, you know which step failed because the plan is documented.

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

[RECAP — after debugging loop]

Errors are information. Paste them back. The AI has context from the same conversation to diagnose the problem. That's the loop: see error, paste error, get fix. You'll use it more than any other pattern.

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

## Video 5: The context file problem — ~20 minutes

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

[RECAP — after short-sessions pattern]

Short sessions. Specific tasks. Handoff notes before closing. The context file carries the state between sessions so the AI picks up where you left off. That's the workflow.

[SLIDE: annotated CLAUDE.md example]

So what goes in a context file? Let me break it down into three categories, with examples from real journalism work.

**Category one: beat knowledge.** This is what makes your coverage specific to your beat. How local institutions are named — and this matters more than you'd think. "The city refers to its annual budget process as the appropriations cycle — never call it budget season." If Claude sees a document mentioning the appropriations cycle and you haven't told it this is about the budget, it won't make the connection. If it's writing a summary and calls it "budget season" when your publication uses "appropriations cycle," you have to manually fix it every time.

More examples: "The mayor is Sarah Chen. On second reference, use Chen, not the mayor, unless the sentence is about the office rather than the person." "City council has nine members. Five votes constitute a majority. When reporting votes, always specify whether it was unanimous." "The city manager is appointed, not elected. Do not refer to this position as being 'in office.'"

These are the things you know from covering the beat for months or years. The AI doesn't know any of them unless you write them down.

**Category two: style rules.** Your publication's specific standards. "AP style with no Oxford comma." "Numbers under 10 are spelled out except in data tables." "Headlines are sentence case, not title case." "When quoting from public documents, always include the document name and date in parentheses."

Some of these overlap with what the AI already knows about AP style. But the deviations matter: if your publication uses the Oxford comma despite AP not recommending it, you need that in the file. If your editor insists on a specific date format, specify it. The goal is that output from Claude matches what your publication actually publishes without manual corrections.

**Category three: workflow instructions.** These are rules about what the AI should and shouldn't do on its own. "Always flag claims that haven't been verified against a primary source." "Never write a lead — generate three options and let me choose." "When processing meeting minutes, always note items that were tabled or deferred — these tend to come back." "Never delete or overwrite files without asking first."

This category is where you encode editorial judgment. The AI is doing the mechanical work — but you're setting the editorial guardrails.

[RECAP — after three categories]

Three categories. Beat knowledge tells the AI what your coverage area looks like. Style rules keep the output matching your publication. Workflow instructions encode your editorial judgment about what the AI should and shouldn't do on its own.

[SLIDE: three examples with pass/fail markers]

Here's how you test whether something belongs in your context file. I call it the deletion test. Simple rule: if you removed this line, would the AI behave any differently?

"Be helpful." Delete it. Nothing changes — Claude is already helpful by default. That's a wasted line. It takes up space in the context window without changing behavior. Delete it.

"Always provide thorough and detailed responses." Delete it. Also nothing changes. Claude already tries to be thorough. These kinds of generic instructions are noise.

"The city refers to its annual budget process as the appropriations cycle — never call it budget season." Delete it and Claude uses the wrong term next time. That line passes the deletion test. It belongs in the file.

"When covering city council votes, always include the vote count and list any dissenting members by name." Delete it and Claude gives you a vague summary like "the council voted to approve." You lose the 5-2 vote count and the names of the two dissenters. That line passes. It belongs.

"Source verification: when summarizing a claim from a press release, note whether the claim cites a specific data source. If it doesn't, flag it as unverified." Delete it and Claude passes along claims without flagging. That passes.

Every line in your context file should survive this test. If removing it wouldn't change the AI's behavior, the line isn't doing work. Take it out. A shorter, tighter context file is better than a long one full of generic instructions — because every line takes up space in the context window, and you want that space used for things that matter.

[RECAP — after deletion test]

The deletion test: if removing a line wouldn't change the AI's behavior, it doesn't belong. Apply it to every line in your context file. Generic instructions like "be helpful" fail. Beat-specific rules like "use appropriations cycle, not budget season" pass.

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

## Video 6: Setting up your beat project — ~20 minutes

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

[RECAP — after CLAUDE.md written]

Beat knowledge, style rules, workflow instructions. Every line passes the deletion test. This file loads automatically at the start of every session in this folder. That's the foundation of the project.

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

[RECAP — after with/without comparison]

Same document, same AI, same question. The only variable was the context file. Generic output versus beat-ready output. That's the difference a few lines of plain text make.

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

[RECAP — after GitHub push]

One prompt, six Git operations. The project is on GitHub — context file, documents, structure. Clone the link and the full environment comes with it. That's how context files scale from personal notes to shared infrastructure.

[SCREEN: voiceover, terminal visible]

Let me summarize what we built in this session.

You have a project folder with a clean structure. A CLAUDE.md that encodes your beat knowledge, style rules, and workflow instructions. Real documents processed with and without context — so you've seen the difference firsthand. A handoff note pattern for continuity across sessions. And everything on GitHub, shareable and version-controlled.

That's the full Module 1 setup. You have a CLI tool, a context file that shapes how the AI reads your documents, a workflow for maintaining continuity across sessions, and a project on GitHub. Module 2 adds reusable skills to this project — commands you can invoke with a slash that encode specific editorial workflows. See you there.

---

## Video 7: From prompts to skills — ~36 minutes (recorded)

**Format:** Talking head + screen recording (live demo, unscripted)
**Actual length:** ~36 minutes
**Module:** 2
**Note:** This is a post-recording summary. The video was not scripted — Joe riffed and did live demos. What follows is a close representation of what was covered.

---

### Section 1 — Conceptual overview (~5 min)

[TALKING HEAD — Joe at desk, cat Reese visible ("special guest lecturer")]

So this is Module 2. We've got a special guest lecturer here — this is Reese. She's going to help me explain skills, commands, and customizing AI workflows for repeatability. Module 2 is about complicated workflows — things you want to do more than once, the same way, without retyping everything.

Let me start with definitions, because there are a few terms that get thrown around and they mean different things.

**What is a skill?** A skill is a markdown file. Plain language instructions. No code. The key thing is it only loads when you invoke it — unlike MCP, which is always loaded and always taking up space in the context window. Skills are token-efficient. They sit on disk until you call them.

**What is a plugin?** A plugin is a bundle of skills and commands. Example: PDF Playground at skills.amditis.tech has slide design skills packaged together. You install the whole bundle at once.

Skills and commands show up as slash commands when you type a forward slash. You type `/` and you see a list of everything available.

**Hooks** are different. Hooks run automatically — you never type a slash command for them. They fire based on conversation context or keywords.

Example: a hook that prevents pushing to the main branch. You're working, you tell Claude to push, and the hook catches it — stops the action, warns you, makes you confirm.

Another example: the one-way-door concept. Some decisions are hard to reverse — a database schema, a choice of programming language, an infrastructure config. The hook stops the model, uses AskUserQuestion to present alternatives, and makes you decide explicitly. That hook is available at skills.amditis.tech.

Quick recap: a skill is a single reusable tool — a markdown file. A plugin is a collection of skills shared as a package. Hooks run automatically in the background.

### Section 2 — Live demo: social media content analysis (~30 min)

[SCREEN — Claude Code open in MOOC folder, launched with --dangerously-skip-permissions]

Here's the task. I want to do a content analysis of NYC Mayor Zohran Mamdani's social media video content across five platforms: Instagram, YouTube, TikTok, Twitter, and Facebook. I paste in a prompt with all five social media URLs and request at least 15 videos from each platform.

The brainstorming skill triggers automatically — that's from the Superpowers plugin. It kicks in before any work starts to scope the project.

Then AskUserQuestion fires. This is the interactive decision-making tool. It walks me through a series of choices:

- Content/text analysis purpose
- OCR approach: use Claude's built-in vision, not Tesseract or EasyOCR — no need to install anything
- Project folder: current repo
- Frame sampling rate: every 3 seconds
- Whisper model: large
- Dashboard: single-page
- Pipeline approach: sequential
- Vision analysis: in-session, not API — saves money
- Content analysis scope: themes, sentiment/tone, and cross-platform comparison

The writing-plans skill creates an implementation plan with a work tree. I choose sub-agent driven development for implementation — Claude spawns sub-agents to handle different parts of the pipeline.

[SCREEN — video downloading phase]

**Video downloading.** YouTube and TikTok work right away with yt-dlp. 15 videos each, 30 total. No issues.

Twitter, Instagram, and Facebook — yt-dlp fails on all three. So Claude switches to browser automation via Playwright. I log into all three platforms manually so the browser session has my credentials.

Playwright navigates to Mamdani's profiles, finds video URLs, and downloads them. I give a navigation tip — look at timestamp indicators to identify video thumbnails vs. image posts. By the end: 76 total videos downloaded with JSON metadata. No watermarks, high resolution.

[SCREEN — transcription phase]

**Transcription.** Whisper large model runs on all 76 videos. It maxes the GPU and crashes OBS — the screen recording software — so I switch to the turbo model for faster processing. I mention batch processing APIs as an alternative for anyone dealing with large volumes. All 76 videos get transcribed successfully.

[SCREEN — dashboard creation]

**Dashboard.** The front-end design skill builds a dashboard skeleton while transcription is still running. The dashboard includes:

- Video catalog with expandable transcripts
- Topic analysis — budget, housing, and immigration come out as the top topics
- Sentiment distribution — positive, urgent, neutral, negative
- Cross-platform comparison
- Transcript search

I note some UI improvements I'd make: more color variety, modals instead of accordions for transcript display, and links back to the original videos.

[SCREEN — vision/frame analysis]

**Vision and frame analysis.** I sample a few videos rather than running the full set — running frame analysis on all 76 would take hours. The sampling shows it works.

[SCREEN — CLAUDE.md and README updates]

Claude updates the CLAUDE.md and README to log lessons learned from the session. That's the pattern from Module 1 — your context file evolves as you work.

[TALKING HEAD — recurring throughout the demo]

The message I keep coming back to: you can't do this in a browser chat window. Zero cost — no API charges because it's running in a Claude Code session. Every step is verifiable — you can see the files, read the transcripts, check the data. And it runs in the background while you do other things.

---

## Video 8: Installing and using journalism skills — ~13 minutes (recorded)

**Format:** Screen recording with voiceover (live demo, unscripted)
**Actual length:** ~13 minutes
**Module:** 2
**Note:** This is a post-recording summary, continuing directly from Video 7. The video was not scripted.

---

### Section 1 — Creating skills from the workflow (~8 min)

[SCREEN — Claude Code session, continuing from the Mamdani analysis]

I wish there were some more magical secret sauce here, but there isn't. Creating skills is just describing what you want and saving it as a file.

I ask Claude to create four modular skills based on the workflow we just ran:

1. **Video download** — the scraping/downloading pipeline
2. **Transcription pipeline** — Whisper processing
3. **Video frame analysis** — frame sampling and vision analysis
4. **Video dashboard** — building the front-end display

The decisions during creation:

- **Modular, not monolithic.** Each skill does one thing. That way I can use the transcription pipeline on a project that doesn't need a dashboard, or run the dashboard skill on videos I downloaded some other way. Flexibility across projects.

- **Project-only vs. global scope.** I initially want global so the skills are available everywhere. But hooks can "bleed" across projects — a hook designed for one project might fire unexpectedly in another. I start with project-only, then change to global during troubleshooting, then settle on a full Claude Code plugin with plugin.json, versioning, and the ability for others to install it.

Claude uses Anthropic's built-in plugin development skills to create the plugin structure: a plugin.json file, individual SKILL.md files in subfolders, and associated scripts.

The skill files themselves — they're not complex code documents. They're markdown with a little bit of bash. You can write them by hand or have the bot write them and review what it produces.

### Section 2 — Testing and troubleshooting (~3 min)

[SCREEN — trying to load the plugin]

The plugin doesn't show up after I run the reload plugins command. I quit Claude Code, restart it — still nothing. Try again. Still not working.

The issue: the plugin was created at the wrong directory path. Claude put the files in `claude-plugins` instead of `.claude/plugins`. Claude moves the files to the correct global location.

After the fix: `/video-frames`, `/video-download`, `/video-dashboard` all appear as slash commands. I test the video-dashboard skill — it loads and launches the workflow.

This is why we test. Don't just say it works — verify. Run the slash command, confirm it shows up, confirm it does what you expect.

### Section 3 — Assignment and wrap-up (~2 min)

[TALKING HEAD]

Your assignment: create or run your own workflow. It can be similar to what I just did or different — analyze a politician's social media, process a batch of documents, whatever fits your beat. Take notes as Claude works. Build your own slash commands or plugin based on what you learn.

It can be simple or complex — the more complex the workflow, the more likely you need skills and plugins to make it repeatable.

Check out skills.amditis.tech for pre-made skills: one-way-door hooks, PDF playground, plugins that help update the context of other skills. Browse, install, test. Then try building your own plugin.

Head to the instructor forums for discussion.

---


## Video 9: Describing workflows and having AI build them — ~20 minutes

**Format:** Talking head + slides
**Module:** 3 — CLI workflows for newsrooms

---

[TALKING HEAD]

You have a skill that works on one document. You type `/meeting-minutes`, paste a transcript, and get a structured summary. That works. But now you want it to work on every transcript in a folder. You want it to run while you're at lunch. You want it to check for new documents, process them, and save the results — without you sitting at the keyboard.

That's a workflow. And this module is about how to build one.

The jump from "I can do this once" to "this runs on its own" is where most people stall out. If you're a programmer, you write a script. If you're not — and most journalists aren't — you hit a wall. You know what you want to happen. You just can't make the computer do it automatically.

CLI tools remove that wall. You describe the sequence in natural language. Claude translates it into a script. You review the script, test it, and decide whether to run it. The AI writes the code. You manage the process. Same pattern as the rest of this course — you describe, it builds, you verify.

[SLIDE: what automation means with a CLI LLM]

Let me be specific about what "automation" means here, because the word can mean different things to different people.

In this course, automation means: a script that runs a sequence of steps in order. Each step has a clear input and a clear output. The script handles the mechanical work — reading files, calling APIs, formatting results, saving output. You handle the judgment work — deciding what to build, reviewing the results, catching problems the script can't see.

You are not handing control to the AI and walking away. You are delegating a defined task, checking the result, and deciding what happens next. That's the managing-not-prompting distinction from Module 1, applied to multi-step work.

Here's what the process looks like. You open Claude Code. You describe what you want: "I need a script that reads every PDF in this folder, extracts the text, summarizes each one in three bullet points, and saves the summaries as markdown files." Claude asks clarifying questions — what model should it use for summarization? Should it skip files that have already been processed? Do you want the summaries in one file or one per document? You answer those questions. Claude writes the script. You read through it. You test it on a small batch. If it works, you scale up. If it breaks, you paste the error back in and Claude fixes it.

At no point did you write code. You described a workflow. The AI translated it into something executable. Your skill was knowing what to ask for and evaluating whether the result was correct. Those are editorial skills, not engineering skills.

[SLIDE: plan mode — /plan command]

Before Claude writes anything, you want to see the plan. This is the same Plan Mode you've been using since Module 1, but it matters more here because workflows have multiple stages, and a mistake in the plan means wasted time in the build.

You type `/plan` and describe what you want. Claude presents an outline: here are the stages, here's what each one does, here's where the data flows. You review that outline the same way an editor reviews a story pitch. Are the stages right? Is anything missing? Is the order logical?

Think of it as seeing the outline before the reporter writes the story. You wouldn't let a reporter spend three hours on a draft without knowing the angle. Don't let Claude spend three minutes building a script without knowing the architecture.

Plan Mode catches problems that are expensive to fix later. If you need the script to handle paywalled articles but you don't mention that in the plan, Claude will build something that chokes on the first paywall it hits. If you need API keys handled securely but that's not in the plan, Claude might hardcode them into the script. The five minutes you spend reviewing the plan save you thirty minutes of debugging.

[SLIDE: multi-stage processing diagram]

The best way to think about a workflow is as a chain of stages. Each stage has one job.

Stage one: get the data. Read files from a folder, fetch URLs, pull records from a database. Stage two: clean the data. Strip HTML, remove ads, normalize formatting. Stage three: process the data. Summarize, extract, classify, translate. Stage four: save the results. Write to a file, update a spreadsheet, send a notification.

Each stage has a clear input and a clear output. The output of stage one becomes the input of stage two. If something fails at stage three, you know it's a processing problem — the data made it through fetching and cleaning. You don't have to debug the whole pipeline. You debug one stage.

This is the Unix philosophy applied to AI workflows: each piece does one thing. When you chain them together, you get something powerful. When something breaks, you know where to look.

And here's the practical benefit for debugging: when a stage fails, the error message tells you which stage failed and why. You paste that error back into Claude. Claude reads it in context — it already knows the full script — and explains what went wrong. You didn't have to describe the error. You just pasted it. That's the debugging loop from Module 1, applied to multi-step work.

[SLIDE: test before you scale]

This is the rule I want tattooed on the inside of your eyelids: test on five before you run on five thousand.

Every workflow should be tested on a small batch first. Five documents. Ten URLs. A handful of records. You run the small batch, check the output manually, and confirm the results are correct. Only then do you scale up.

Why does this matter? Three reasons.

First: API calls cost money. If your workflow calls Claude's API to summarize each document, and you have 10,000 documents, and the script has a bug that produces garbage output — you just paid for 10,000 API calls that produced nothing useful. If you'd tested on five documents first, you'd have caught the bug for a fraction of a cent instead of several dollars.

Second: time. A workflow that processes 10,000 documents might take hours. If it fails at document 8,000, you've wasted most of a workday. If you'd tested on five first, you'd have caught the problem in seconds.

Third: data quality. The first few results tell you whether the output is actually what you wanted. Maybe the summaries are too long. Maybe the extraction is missing a field. Maybe the formatting is wrong. You want to catch that before you've generated 10,000 bad outputs.

The pattern is simple: small test, verify output, scale up. Every time.

[SLIDE: cost awareness — fractions of a cent, multiplied]

Speaking of cost — let's be honest about the numbers. A single API call to summarize a document costs fractions of a cent. That's cheap. But fractions of a cent multiplied by thousands of documents adds up.

Nick Hagar, who builds AI tools for journalism research, runs a beat-monitoring pipeline that classifies news articles for relevance to a specific topic. His cost: about 15 cents a day. That's cheap enough that a newsroom wouldn't think twice about it. But he got to 15 cents a day by making deliberate choices about which model to use, how much text to send per call, and how to batch the work efficiently. If he'd used the most expensive model with the maximum context window for every article, that 15 cents could be five dollars — still not ruinous, but 33 times more expensive for the same result.

The lesson: cost awareness isn't about being cheap. It's about not wasting money on work that doesn't need the most expensive tool. Use the smaller, cheaper model for classification and extraction. Save the larger model for tasks that require real judgment. This is the same editorial instinct you already have — you don't assign your senior investigative reporter to rewrite press releases.

[SLIDE: security — API keys and environment variables]

Security. I'll keep this short because the principle is simple, but ignoring it is dangerous.

API keys should never appear in your scripts. Not in the code, not in comments, not in configuration files that get committed to GitHub. If your API key ends up in a public GitHub repository — and this happens more often than you'd think — anyone can use it. They run up charges on your account. They access services under your name.

The fix: environment variables. Instead of writing your API key directly in the script, you store it in an environment variable on your machine. The script reads the variable at runtime. The key never appears in the code.

When Claude builds a script for you, ask it: "Are there any hardcoded secrets in this script?" Better yet, ask Claude to audit its own code for security issues. It will check for hardcoded API keys, unencrypted credentials, and any unexpected data transmission — places where the script might send your data somewhere you didn't intend.

This takes 30 seconds and prevents the kind of mistake that costs you real money and real embarrassment.

[RECAP — after testing, cost, and security]

Three rules so far. Stage your pipeline so failures are localized. Test on a small batch before scaling up. Keep API keys out of your code — use environment variables and audit for secrets.

[SLIDE: the debugging loop]

Let me expand on the debugging loop, because you'll use it constantly when building workflows.

Something breaks. You see an error message in the terminal. Here's what you do: select the error message, copy it, paste it directly into Claude Code. That's it. You don't need to explain what the error means. You don't need to diagnose it yourself. Claude has the full context — it knows what script it wrote, what the script was trying to do, and what went wrong. You paste the error. Claude reads it. Claude explains the problem and proposes a fix. You approve the fix. You test again.

This loop — see the error, paste the error, get the fix, test again — is how you debug everything in this course. And it works because the AI has context. It's not seeing the error in isolation. It's seeing the error alongside the code it wrote, the plan it followed, and the conversation you've been having about what this workflow is supposed to do. That's a huge advantage over searching Stack Overflow, where you're reading solutions written for someone else's code.

When the fix doesn't work — and sometimes it won't — you paste the new error. Claude adjusts. You test again. The loop continues until the workflow runs clean. That's not a sign of failure. That's how iterative development works. Professional developers do the same thing. The difference is they read the error messages themselves. You have an AI that reads them for you.

[SLIDE: real-world case studies]

Let me ground this in real journalism work.

Nick Hagar built a beat-monitoring pipeline that scans news articles and classifies them as relevant or irrelevant to a reporter's beat. He published the results: 0.94 F1 score on relevance classification — meaning the AI correctly identified relevant articles 94% of the time. That's good. But here's the catch: when he compared the AI's picks to what human editors considered "newsworthy," the alignment dropped to 31%. The AI was good at saying "this article is about education" but bad at saying "this article is worth covering."

That gap — between relevance and newsworthiness — is the gap where editorial judgment lives. The pipeline handles the mechanical filtering. The reporter handles the editorial decision. Neither one replaces the other.

Clare Spencer has documented multilingual newsroom workflows — at La Voz, The Economist, and the BBC. These are pipelines that take articles written in one language, translate them, and adapt them for a different audience. The technical part — the translation — is fast and cheap. But every pipeline includes a human review step where a bilingual editor checks the translation for tone, cultural context, and accuracy. The automation handles volume. The editor handles quality.

The pattern is the same in both cases. Automate the mechanical work. Keep human review in the loop. Don't trust any step you haven't verified.

[RECAP — after case studies]

Two newsrooms, same principle: automate the volume, keep human judgment in the loop. Relevance classification is 94% accurate, but newsworthiness is a 31% match — the AI filters, the reporter decides what matters. Translation pipelines are fast, but a bilingual editor catches what the model misses.

[SLIDE: error handling — exponential backoff]

When your workflow calls an external API — a summarization model, a web scraper, a translation service — things will fail. The API might be overloaded. The network might drop. The service might rate-limit you for making too many requests too fast.

Naive error handling crashes the whole workflow when one request fails. Good error handling retries with a delay. The standard pattern is exponential backoff: wait one second after the first failure, two seconds after the second, four after the third. This gives the service time to recover without hammering it with repeated requests.

You don't need to know how to implement this. You describe it: "If an API call fails, retry up to three times with exponential backoff." Claude writes the implementation. But you do need to know to ask for it, because Claude won't always add it by default.

The other half of error handling is graceful degradation. If one document out of a hundred can't be processed — it's corrupted, it's behind a paywall, it's in an unexpected format — the workflow should skip it, log a warning, and keep going. Don't let one bad file kill a hundred-file batch.

[SLIDE: when automation is worth the setup cost]

Not everything should be automated. A workflow has a setup cost — the time to describe it, build it, test it, debug it. If you do a task once, the setup cost exceeds the time you'd spend doing it manually. If you do it every day, the setup cost pays for itself in a week.

Here's my rule of thumb: if you've done the task three times and you'll do it again, it's worth automating. If it's a one-off, just type the prompt. Don't build a pipeline to process one document.

There's a second dimension: how much does correctness matter? If you're reformatting data for internal use, a small error rate is acceptable — you'll catch mistakes when you look at the data. If you're generating content that goes directly to readers, the error rate needs to be near zero, and that means more testing, more validation steps, and more human review checkpoints. The setup cost goes up, but so does the value.

Think about the tasks in your newsweek. Which ones happen repeatedly, follow the same pattern, and consume time that could go to reporting? Those are your automation candidates. Press release processing. Meeting minutes extraction. Data standardization. Source monitoring. Newsletter assembly. These are all workflows — defined sequences of steps with clear inputs and outputs — and they're all good fits for the approach we're covering this week.

[SLIDE: batch processing pattern]

Let me crystallize the batch processing pattern, because you'll use it for almost every workflow.

Step one: build the workflow and test it on a single item. One document, one URL, one record. Confirm the output is correct.

Step two: test on a small batch. Five items. Check every output. Look for edge cases — documents that are shorter than expected, URLs that redirect, records with missing fields.

Step three: run the full batch. Monitor the first few results as they come in. If something looks wrong, stop the batch, debug, and restart.

Step four: spot-check the output. Even after the full batch completes, look at a random sample. Automation doesn't mean you stop checking. It means you check a sample instead of checking everything.

This pattern applies whether you're processing five documents or five thousand. The only thing that changes is the size of the batch at each step.

[SLIDE: arc check — from prototype to workflow]

Here's where we are in the course arc. In Module 1, you set up a project and a context file. In Module 2, you built reusable skills. Now, in Module 3, your prototype becomes a workflow. Before it runs on real data, you test it and check it. Before it runs at scale, you verify on a small batch. Before you commit it to your project, you audit it for security.

The progression: context gave the AI your beat knowledge. Skills gave it your editorial expertise. Workflows give it a defined sequence of steps to execute without you sitting at the keyboard. Each layer adds capability while keeping you in control.

[RECAP — closing]

Automation means staged pipelines: each step has one job, failures are localized. Test on five before five thousand. Keep secrets out of your code. When something breaks, paste the error — the AI has context to diagnose it. Automate the volume, keep human judgment in the loop. In the demo, I'm going to describe a workflow in plain English, have Claude Code build it, and intentionally break it — because seeing how to fix things is more useful than seeing things work. See you there.

---

## Video 10: Ask Claude Code to build you a pipeline — ~20 minutes

**Format:** Screen recording with voiceover
**Module:** 3 — CLI workflows for newsrooms

---

[SCREEN: Terminal, cursor blinking]

Today I'm going to describe a journalism workflow in plain English and have Claude Code build it. Then we're going to test it — and something is going to go wrong. That's the point. The debugging matters more than the building.

Here's the scenario. I'm a beat reporter and I want a pipeline that takes news article URLs, fetches the content, strips out the ads and navigation, summarizes each article in three bullet points, and saves the result as a markdown file. Think of it as an article-to-newsletter pipeline — I feed it URLs from my beat, and I get clean summaries I can scan or forward to my editor.

Let me open the project.

[SCREEN: Navigating to the greenfield-beat directory, typing `claude`]

I'm in my greenfield-beat directory — the same project from Modules 1 and 2. The CLAUDE.md is here with the beat context. Claude Code is running. Let's start with the plan.

[SCREEN: Claude Code session]

I type `/plan` and then describe the workflow:

"I want a Python script that does the following. It takes a list of URLs — news article links. For each URL, it fetches the page content, strips out ads and navigation to get the article text, summarizes the article in three bullet points using an LLM API call, and saves the summary as a markdown file in an output directory. The filename should be based on the article title. Plan this for me — show me the stages, what each one does, and how the data flows between them. Don't write the script yet."

[SCREEN: Claude presenting the plan]

Look at what Claude proposed. Four stages, just like I described. Stage one: fetch — use the `requests` library to download the page HTML. Stage two: clean — use `BeautifulSoup` to extract the article text and strip navigation, ads, and boilerplate. Stage three: summarize — send the cleaned text to Claude's API and get back three bullet points. Stage four: save — write the summary to a markdown file in the output directory.

It also noted some details I didn't mention. It's proposing to use the `newspaper3k` library for article extraction instead of raw BeautifulSoup — that's a smarter choice because `newspaper3k` is specifically designed for extracting article content from news pages. It's suggesting the output filename use a slugified version of the article title. And it's asking me a question: "Should I use the Anthropic API directly, or would you prefer to call Claude via a subprocess?"

Good question. I type: "Use the Anthropic API with the key read from an environment variable called ANTHROPIC_API_KEY. Never hardcode the key."

[SCREEN: Claude acknowledging, updated plan]

The plan looks right. The stages are clear. The API key is handled correctly. I type: "Looks good. Build it."

[SCREEN: Claude writing the script — several seconds of activity]

Watch it work. It's creating a file called `article_pipeline.py`. It's writing the import statements, the fetch function, the clean function, the summarize function, the save function, and a main function that ties them together. It's also creating a `requirements.txt` with the dependencies.

Claude is explaining as it goes: "The fetch stage uses requests with a timeout and a user-agent header so news sites don't block the request. The clean stage uses newspaper3k's Article class to extract the title and text. The summarize stage sends the text to Claude with a system prompt asking for exactly three bullet points. The save stage writes a markdown file with the title as a header and the bullets below."

[SCREEN: Script visible in the session]

Done. Let me glance at the script. I'm not going to read every line — that's not the point. I'm tracing the stages. Fetch: there's a function that takes a URL and returns HTML. Clean: there's a function that takes HTML and returns the article title and text. Summarize: there's a function that takes text and returns three bullet points. Save: there's a function that takes a title and bullets and writes a markdown file.

The stages match the plan. The API key is read from the environment variable — I can see `os.environ.get('ANTHROPIC_API_KEY')` in the summarize function. Good. No hardcoded secrets.

Now let's test it.

[SCREEN: Claude Code session]

I type: "Install the dependencies and then run the pipeline on these 5 URLs." And I paste five news article URLs from recent local news stories.

[SCREEN: Claude installing requirements, then running the script]

Dependencies installed. The script is running. First URL — processing. The output file appears in the `output/` directory. Let me check it.

[SCREEN: Opening the first output file]

There's the title as a header, three bullet points summarizing the article. The bullets are concise, factual, and they capture the main points. That's what I wanted.

Second URL — processing. Output looks good.

Third URL — and it fails.

[SCREEN: Error message visible in the terminal]

There it is. A rate limit error. `RateLimitError: 429 Too Many Requests`. The API is telling us we're sending requests too fast.

This is why you test before running a full batch. If I'd run this on 200 URLs, the first two would have worked and the next 198 would have failed. That's 198 wasted API calls — well, actually zero wasted calls since they were rejected, but 198 wasted attempts and a broken pipeline.

Let me fix it. And here's the key technique: I'm not going to describe the error. I'm going to paste it.

[SCREEN: Pasting the full error traceback into Claude Code]

I select the error message, paste it into the session, and type: "This happened on the third URL. Fix it."

[SCREEN: Claude reading the error and explaining]

Watch Claude's response. It identifies the problem: no delay between API calls. The script fires requests back-to-back, and the API rate-limits us after the second one. Claude proposes the fix: add a one-second delay between each URL's summarize step, and add retry logic with exponential backoff — if a request fails, wait one second and try again, then two seconds, then four.

I type: "Do it."

[SCREEN: Claude modifying the script]

It's editing the script. I can see the changes: a `time.sleep(1)` between iterations, and a retry wrapper around the API call with exponential backoff. Three retries maximum.

Let me test again. I type: "Run the pipeline again on the same 5 URLs. Delete the existing output files first."

[SCREEN: Script running, all 5 URLs processing]

First URL — done. One-second pause. Second URL — done. One-second pause. Third URL — the one that failed before — done. Fourth. Fifth. All five processed. No errors. The fix worked.

Let me check the output files.

[SCREEN: Browsing the output directory, opening a file]

Five markdown files. Each one has a title, three bullet points. Let me read through the third one — the one that failed on the first run. The summary looks correct. The content matches the article.

Good. But we're not done testing.

[RECAP — after rate-limit fix]

That's the first loop: build, test, break, paste the error, fix, test again. The pipeline works on five URLs now. But we're not done — the next failure is going to be sneakier.

[SCREEN: Claude Code session]

I'm going to test another failure scenario — one that isn't a code error. I type: "Run the pipeline on this URL." And I paste a URL I know is behind a paywall.

[SCREEN: Script running on the paywalled article]

It processes without crashing. No error. Let me look at the output file.

[SCREEN: Opening the output file]

The summary says: "Subscribe to continue reading. This article requires a premium membership. Sign up today for full access to our journalism."

That's not a summary of the article. That's a summary of the paywall message. The script did exactly what I told it to do — it fetched the page, extracted the text, and summarized it. But the text it extracted was the paywall notice, not the article.

This is a data quality problem, not a code error. The script ran correctly. The input was bad. And this is an important distinction: not every failure shows up as an error message. Some failures look like success — the script completes, the output exists, but the content is wrong. This is why you check the output, not just whether the script ran.

Let me fix this. I type: "Add a validation step after the clean stage. If the extracted article text is under 200 characters, skip that URL and log a warning that says 'Content too short — possible paywall or empty page.' Don't generate a summary for it."

[SCREEN: Claude modifying the script]

Claude adds the validation. After extraction, it checks the character count. If it's under 200, it prints a warning and moves to the next URL. No API call wasted on garbage input.

Let me test the paywall URL again.

[SCREEN: Running the script]

There it is: "WARNING: Content too short (127 chars) — possible paywall or empty page. Skipping." No output file generated. No API call made. That's the correct behavior.

[SCREEN: Claude Code session]

Now let me do a security review. This is a step you should build into every workflow before you share it or run it on real data. I type: "Audit this script for security issues. Check for hardcoded secrets, unnecessary data transmission, and any place where user data might be sent somewhere unexpected."

[SCREEN: Claude reviewing the code]

Claude scans the script and reports back. "No hardcoded API keys — the key is read from the environment variable. The script sends article text to the Anthropic API for summarization — this is expected and necessary for the workflow. No other outbound data transmission. The output is written to local files only. No logging of the API key. One suggestion: add error handling around the environment variable read so the script fails clearly if the key isn't set, rather than failing with a confusing None error during the API call."

That last point is worth doing. If someone clones this project and tries to run the pipeline without setting up their API key, the current script would fail deep inside the summarize function with an opaque error about None not being a valid authentication token. That's confusing. A clear message at startup — "ANTHROPIC_API_KEY not set, exiting" — tells them exactly what to do.

I type: "Make that change."

[SCREEN: Claude adding the check]

Done. The script now checks for the API key at startup and exits with a clear message if it's missing. That's the kind of small fix that separates a script you built for yourself from a tool a colleague can pick up and use.

[RECAP — after paywall fix and security audit]

Two types of failure, two different fixes. The rate limit was loud — the script crashed. The paywall was silent — the script succeeded but the content was wrong. The validation step catches the silent one. And the security audit catches leaked credentials before they become a problem.

[SCREEN: Claude Code session]

Time for the full test. I type: "Run the pipeline on these 10 URLs." And I paste ten article links — a mix of local news, state government coverage, and one more URL I suspect might be paywalled.

[SCREEN: Script running through 10 URLs]

Watch it go. Each URL processes with a one-second delay. URL four triggers the paywall warning — skipped. The rest process normally. Nine output files generated. One skipped with a logged warning.

Let me spot-check the results. I'll open three of them at random.

[SCREEN: Opening output files]

First one — clean summary, three bullets, captures the main points. Second — same, looks accurate. Third — good. The summaries are consistent in format and length. The pipeline is working.

[SCREEN: Claude Code session]

Now I want to show you something that comes up constantly in real work: modifying an existing pipeline. The workflow runs, but now you want it to do something slightly different. This is where the conversational nature of CLI tools pays off — you don't rebuild from scratch. You describe the change.

I type: "I want to add a field to the output. For each article, extract the publication date from the page metadata — look for meta tags like `article:published_time`, `datePublished`, or `og:published_time`. Add it below the title in the markdown output, formatted as 'Published: YYYY-MM-DD'. If no date is found, write 'Published: unknown'. Update the pipeline."

[SCREEN: Claude modifying the script]

Watch what happens. Claude doesn't rewrite the whole script. It adds a date extraction function that checks the HTML meta tags in the order I specified. It modifies the save function to include the date line. It updates the clean stage to return the date alongside the title and text.

The changes are surgical. The fetch stage is untouched. The summarize stage is untouched. The retry logic is untouched. Claude only modified the stages that needed to change. That's the benefit of the multi-stage architecture — changes are localized. If I'd built this as one monolithic function instead of four separate stages, every modification would risk breaking something unrelated. The staged design makes the pipeline easy to extend.

This is also a pattern you'll use constantly: once a pipeline works, you modify it by describing the change in a sentence or two. You don't rebuild. You iterate. The AI understands the existing code and applies targeted edits. Over time, your pipeline gets better — more fields, better validation, smarter error handling — and each improvement is just another natural-language request.

Let me test the updated pipeline on a few URLs.

[SCREEN: Running the script on 3 URLs]

All three process. Let me check the output.

[SCREEN: Opening an output file]

There it is: the title, then "Published: 2026-02-28", then the three bullet points. The date was extracted from the meta tags. Let me check another one.

[SCREEN: Opening a second output file]

"Published: 2026-03-01." Good. And I happen to know one of these test articles doesn't have clean metadata — let me find it.

[SCREEN: Opening a third output file]

"Published: unknown." The script handled the missing date correctly without crashing. That's the graceful degradation pattern in action — when the data isn't there, log what happened and keep going.

[SCREEN: Claude Code session]

Let me commit everything to Git. I type: "Commit the pipeline script, the requirements file, and the test output files to Git with the message 'Add article-to-newsletter pipeline with retry logic, paywall detection, and date extraction.'"

[SCREEN: Git commit happening]

Done. The pipeline is version-controlled. If I make changes next week, I can see what I changed. If a colleague clones the repo, they get the pipeline. If I break something, I can roll back.

Let me push it to GitHub too. I type: "Push to GitHub."

[SCREEN: Git push]

The project is on GitHub. The pipeline, the test outputs, the context file, the skills from Module 2 — all in one repository. Anyone who clones it gets the full toolkit. And because it's version-controlled, the commit history tells the story: here's when the pipeline was created, here's when retry logic was added, here's when paywall detection went in, here's when date extraction was added. If something breaks next month, you can trace back through the history and find when the problem was introduced.

[SCREEN: Terminal visible, voiceover]

Let me recap what just happened, because we covered a lot of ground.

I described a workflow in plain English. Claude planned it, I reviewed the plan, and Claude built it. We tested on a small batch and hit a rate limit error. I pasted the error — didn't describe it, pasted it — and Claude fixed it by adding delays and retry logic. We tested again and found a data quality issue: the pipeline summarized a paywall message instead of an article. We added a content-length check to catch that. We ran a security audit. We tested at full scale. We added a new feature — date extraction — by describing the change in natural language. And we committed the whole thing to version control.

That's the workflow for building any automation in this course. Describe, plan, build, test, break, fix, test again, secure, commit. The AI handles the code. You handle the decisions.

Notice what I didn't do at any point: I didn't write Python. I didn't debug by reading stack traces and tracing through code. I didn't look up library documentation. I described what I wanted, pasted errors when things broke, and approved fixes when they looked right. The technical skill was Claude's. The editorial skill — knowing what to build, what to test, and what to check — was mine.

One more thing. That paywall failure is the most important moment in this demo. The rate limit error was obvious — the script crashed and told us what went wrong. The paywall failure was silent. The script succeeded. The output existed. But the content was wrong. The lesson: you can't just check whether the script ran. You have to check what it produced. Automation without verification is just fast mistakes. Build the verification into your process — spot-check outputs, add validation steps, and never assume that a clean run means correct results.

[SCREEN: voiceover, project directory visible]

Your project now has a context file from Module 1, custom skills and hooks from Module 2, and a tested, debugged, version-controlled workflow from Module 3. Each layer built on the last. The context file tells the AI what your beat is about. The skills give it reusable editorial instructions. The workflow chains those capabilities into a pipeline that runs on multiple documents without you sitting at the keyboard. And at every stage, you stayed in control — reviewing plans, checking outputs, approving fixes.

In Module 4, we're going to connect this project to external data sources — your own document archives, databases, APIs — and tackle the problem that makes all of that hard: getting the AI to cite its sources accurately and admit when it doesn't know something. See you there.

---


## Video 11: Getting more out of your sessions — ~12-14 minutes

**Format:** Screen recording with voiceover
**Module:** 4 — Power user techniques and the landscape

---

[SCREEN: Claude Code session open in terminal]

You've been using Claude Code for three weeks now. You've built a project, written skills, created a pipeline. But there's a good chance you've been driving with half the gears. There are features in Claude Code that change the quality of your sessions — not just what you can do, but how well the AI thinks about what you're asking. This video covers four of them: extended thinking, structured outputs, plan mode, and session management.

None of these are complicated. But they're the difference between getting a quick answer and getting a good one.

### Extended thinking

[SLIDE: extended-thinking.svg]

[SCREEN: Claude Code session]

When you send a message to Claude, it normally responds right away. Extended thinking changes that. It tells Claude to pause and reason through the problem before responding — like asking a reporter to think about the story for five minutes before writing the lede instead of just typing the first thing that comes to mind.

You trigger it with natural language. "Think harder about this." "Think deeply about this before responding." You can also set a thinking budget — "use extended thinking" or adjust it in settings.

Let me show you the difference. I have two budget documents here — the original park renovation budget and the revised version from three months later. I'm going to ask Claude to compare them, first without extended thinking, then with it.

First pass. I type: "Compare these two budget documents and tell me what changed."

[SCREEN: Claude responding quickly with a surface-level comparison]

It catches the big number — the total went from $2.1 million to $3.4 million. It notes a few line-item changes. Fine. Correct. But shallow.

Now I type: "Think harder about this. Look at every line item, check if any categories were added or removed, and flag anything that looks unusual."

[SCREEN: Claude thinking indicator, then a detailed response]

Different answer. This time it caught that a $180,000 line item for "community engagement" appeared in the revised budget but wasn't in the original. It flagged that the soil remediation cost doubled between documents but the explanatory note didn't change. It noticed that three line items were reclassified from "capital" to "operating," which affects how the spending is reported in annual financial statements.

Any one of those could be a story. The reclassification one is subtle — moving spending from "capital" to "operating" changes which budget category absorbs the cost, and it can affect borrowing limits and reporting thresholds. That's the kind of detail a quick read misses. Extended thinking found it because it had time to compare every line, not just the totals.

That's what extended thinking gets you. It's slower — maybe 15-20 seconds instead of 5. But it catches what a quick pass misses. For simple questions, you don't need it. For anything that requires comparing documents, analyzing data, or finding patterns, it's worth the wait.

One thing to watch for: extended thinking uses more tokens, which means more cost. For a single budget comparison, the difference is small. If you're running extended thinking on 50 documents in a batch, it adds up. Use it where the depth matters. Skip it for straightforward lookups.

[RECAP]

Extended thinking tells Claude to reason before responding. Trigger it with "think harder" or "think deeply about this." It's slower but catches details that quick responses miss — useful for document comparison, data analysis, and anything where surface-level answers aren't enough.

### Structured outputs

[SLIDE: structured-outputs.svg]

[SCREEN: Claude Code session]

Most of the time when you ask Claude a question, you get prose back. A paragraph. A few sentences. That's fine for reading, but it's a dead end. You can't sort a paragraph. You can't filter it. You can't load it into a spreadsheet or feed it to another script.

Structured output means asking for data in a reusable format — JSON, CSV, a markdown table. The same information, organized so you can do something with it.

Let me show you. Here's a press release about the park renovation. I type: "Extract the key data from this press release as JSON. Include the project name, total cost, timeline, key contacts, and any dollar figures mentioned."

[SCREEN: Claude returning JSON]

Look at the output. Clean JSON with fields for each data point. Project name, cost, start date, end date, contacts with names and titles, a list of all dollar figures with descriptions. You could save this to a file, load it into Python, merge it with data from other press releases. The information went from prose — a press release you'd have to re-read every time — to structured data you can search, sort, and combine.

Now combine this with extended thinking. I type: "Think carefully about this press release and extract every claim that could be fact-checked, as a JSON array. For each claim, include the text, the type of claim (dollar amount, date, attribution, statistic), and what you'd need to verify it."

[SCREEN: Claude thinking, then returning structured fact-check list]

That's a fact-check checklist extracted from a press release in seconds. Each item has the claim text, the category, and what verification would look like. You could build a skill that does this for every press release that crosses your desk.

[RECAP]

Ask for JSON, CSV, or tables instead of prose. Structured data is reusable — you can sort it, filter it, feed it to scripts, or combine it with other data. Pair structured outputs with extended thinking for detailed extraction tasks like fact-check lists.

### Plan mode

[SLIDE: plan-mode-flow.svg]

[SCREEN: Claude Code session]

Plan mode is Claude proposing a plan before doing anything. Instead of immediately creating files and running commands, it lays out what it intends to do and waits for your approval.

You can trigger it with Shift+Tab in the input area, or type `/plan`. It's useful whenever the task has multiple steps and you want to review the approach before Claude starts executing.

Here's the scenario. I have 20 PDF press releases from the past month and I want to extract key data from each one. I type: "I have 20 PDFs in the press-releases folder. I want to extract the key data from each one — project name, dollar amounts, contacts, dates — and compile everything into a single CSV. Plan this before you start."

[SCREEN: Claude presenting a plan with numbered steps]

Look at the plan. Step one: list the files in the directory. Step two: read the first PDF and identify the data fields. Step three: build an extraction prompt. Step four: run it on all 20 files. Step five: compile the results into a CSV. Step six: spot-check three entries against the source PDFs.

I can approve this, edit it, or reject it. Maybe I want to add a step — "normalize the dollar figures to remove commas and dollar signs." Maybe I want to change the order — check the extraction on three files before running all 20. The plan is editable.

I approve with modifications. Claude starts executing, step by step. And I can watch each step as it runs. If step three produces a bad extraction prompt, I can stop, adjust, and restart — before it runs on all 20 files. That's the value: you catch the problem at the plan stage, not after it's been applied to your entire dataset.

Without plan mode, Claude would have started immediately — creating files, running extractions, building the CSV. It might have done all of it correctly. But if it made a wrong assumption about the data format in step two, you wouldn't find out until you opened the finished CSV and realized half the entries were wrong. Plan mode puts the checkpoint before the work, not after.

This is editorial oversight applied to a tool. You're not approving every keystroke, but you're reviewing the approach before work starts. The same instinct that makes you check a reporter's story plan before they spend a week on it.

[RECAP]

Plan mode (Shift+Tab or /plan) makes Claude propose before executing. You see the steps, approve or edit them, then Claude runs the plan. Use it for multi-step tasks where you want to review the approach first — the same editorial oversight you'd apply to any delegated work.

### Memory, /compact, and session management

[SLIDE: context-window-session.svg]

[SCREEN: Claude Code session with a long conversation visible]

Long sessions eat context. Every message you send and every response Claude gives takes up space in the context window. Eventually, the older parts of the conversation start falling off — the model can't see them anymore. Your carefully crafted instructions from the beginning of the session get pushed out by the volume of recent exchanges.

The `/compact` command compresses the conversation. It takes your session history and condenses it into a summary, freeing up space. Think of it like clearing your desk but keeping your notes — the details of every exchange go away, but the key decisions and context survive.

I type: `/compact`

[SCREEN: Claude compacting the session]

The session is shorter now. Claude still knows what we've been working on — the project, the decisions we made, the files we've touched — but the token count dropped. For long work sessions where you're iterating on something for an hour, running /compact every 20-30 minutes keeps the conversation responsive.

Memory works differently. When you tell Claude to remember something, it persists across sessions. I type: "Remember that we always use AP style in this project — more than, not over, for quantities."

[SCREEN: Claude confirming memory saved]

Next time I start a session in this project, Claude will know that rule. Memory is for persistent preferences — your style guide, your beat conventions, things that should carry forward. /compact is for session hygiene — keeping the current conversation from getting too long.

When should you start fresh? When you're switching topics entirely. When the session has gone on for more than an hour of heavy work. When Claude starts repeating itself or forgetting earlier instructions — that's a sign the context window is full.

The connection to the next video: all of this costs money. Every token in the context window has a price. How that pricing works — and how settings like prompt caching affect it — is what we'll cover next.

[RECAP]

Long sessions fill the context window. Use /compact to compress conversation history and free up space. Use memory ("remember that...") for rules that should persist across sessions. Start a fresh session when switching topics or when Claude starts losing earlier context. Session hygiene keeps your work responsive and your costs down.

[SCREEN: Terminal]

Those are the features. Extended thinking for deeper analysis. Structured outputs for reusable data. Plan mode for editorial oversight. And session management to keep everything running clean. Next video: what's happening under the hood — settings, caching, and how Claude connects to your data.

---


## Video 12: Settings, caching, and connecting to data — ~12 minutes

**Format:** Talking head + slides + brief screen demos
**Module:** 4 — Power user techniques and the landscape

---

[TALKING HEAD]

Before you type your first message in a Claude Code session, things are already happening. Settings load. MCP servers connect. The model initializes. This video covers what's going on under the hood — the configuration layer, how caching works, and how Claude connects to external data. Understanding this saves you money and keeps your sessions running well.

### Settings and configuration

[SLIDE: settings-hierarchy.svg]

[SCREEN: Claude Code /config menu]

Type `/config` in any session and you get the settings menu. This is where you control how Claude Code behaves: which model to use, how permissions work, what tools are available.

Permissions matter the most here. Claude Code has different permission modes. At one end: it asks before doing anything — reading a file, running a command, writing to disk. At the other end: it acts without asking. For a course project, the default is fine. For anything touching real data or production systems, you want Claude asking before it acts. You can adjust this in /config.

Settings have a hierarchy. There are three levels: global settings that apply to every project, project settings that apply to one repo, and session settings that apply to the current conversation only. Higher levels override lower ones.

Global settings live in your home directory. Project settings live in `.claude/settings.json` or `.claude.json` in the project root. Session settings are temporary — they last until you close the session.

Here's why this matters. Say you set the model to Claude Opus 4.6 globally. But for one project, you want to use Sonnet because it's faster and cheaper for simple tasks. You set the project-level config, and it overrides the global one — but only for that project. Everything else still uses Opus.

The `.claude.json` file is the one you'll touch most often. It holds project-level configuration, and it's where MCP server connections are defined. When you share a project on GitHub, this file goes with it — anyone who clones the repo gets the same configuration.

Here's a concrete example. Say you build a beat project that connects to a local document archive via MCP and uses Sonnet as the default model because it's fast enough for your daily tasks. You put both of those preferences in `.claude.json`. When a colleague clones your repo, their Claude Code session starts with those same settings — the MCP connection, the model preference, the permissions level. They don't have to configure anything. That's the payoff of project-level settings: they travel with the work.

One thing to know: you can also set project-level configurations through `.claude/settings.json`, which uses a slightly different format. Either works. The `.claude.json` file is the more common approach because it's visible in the project root and easy to find. If both exist, Claude Code merges them — and if they conflict, `.claude/settings.json` takes priority.

[RECAP]

Settings come in three layers: global, project, and session. Higher levels override lower ones. Project settings live in `.claude.json`, which travels with the repo. Permissions control how much Claude can do without asking — default is fine for coursework, tighten it for anything touching real data.

### Prompt caching

[SLIDE: prompt-caching.svg]

[TALKING HEAD]

This is something most tutorials skip, and it costs people money.

When you have a conversation with Claude, Anthropic caches the conversation prefix — the earlier messages in your session. The next time you send a message, the system doesn't reprocess everything from scratch. It reads from the cache, which is faster and cheaper.

Here's where it goes wrong: if you switch models mid-session, the cache breaks. Every previous message in the conversation has to be reprocessed with the new model. That costs more, it's slower, and the quality can drop because you're forcing a cold start in the middle of a conversation that had context built up.

The rule is simple: decide which model you're using before you start the session. If you need to switch models, start a fresh session. Don't switch mid-conversation.

This also connects to /compact. When you compress your session history, the new compacted conversation creates a fresh cache. That's part of why /compact helps with long sessions — it resets the cache to a clean state instead of letting it grow stale with hundreds of exchanges.

For this course, the cost differences are small — we're talking fractions of a cent per message. But the principle matters because it scales. If you build a pipeline that processes 200 documents, a mid-session model switch could double the processing cost for no reason.

[RECAP]

Anthropic caches your conversation prefix to save time and money. Switching models mid-session breaks the cache and reprocesses everything. Rule: pick your model before starting. Need to switch? Start a fresh session. This also explains why /compact helps — it resets the cache to a clean state.

### MCP: connecting Claude to data

[SLIDE: mcp-architecture.svg]

[TALKING HEAD]

Model Context Protocol — MCP — is how you connect Claude to external data sources. It's an open standard that lets AI models talk to files, databases, APIs, and other services through a consistent interface.

Think of it as a bridge. On one side: Claude, which needs to read and search data. On the other side: your data, wherever it lives. MCP servers are the bridge. Each server exposes one data source in a standardized way.

There are MCP servers for the filesystem — so Claude can read files in a specific directory. There are servers for Google Drive, Slack, GitHub, databases. Dozens of them, built by different developers.

[SCREEN: Brief view of a .mcp.json file]

The configuration lives in `.mcp.json` or in the `.claude.json` file I mentioned earlier. It's JSON that tells Claude Code which servers to connect to and where to find them. You don't have to write this by hand — you can describe what you want to connect and Claude will generate the config.

[SLIDE: parametric-vs-grounded.svg]

Here's why MCP matters for journalism, in 60 seconds.

An AI model knows two kinds of things. **Parametric knowledge** is what it absorbed during training — billions of documents compressed into its parameters. It's broad, it has a cutoff date, and you can't cite it. "The model's training data" is not an attribution.

**Grounded knowledge** is information from a specific document that the model reads at query time. It has a source. You can verify it. "According to council-minutes-2026-03-12.md, paragraph 4" — that's citable.

MCP is what gives Claude access to grounded knowledge. Without it, Claude answers from training data. With it, Claude searches your documents and cites specific files.

For a beat project, the filesystem MCP server is the most useful starting point. Point it at a folder of your source documents — council minutes, press releases, interview transcripts — and Claude can search and cite from that folder. You ask "what did the city council decide about the park renovation?" and instead of generating something from training data, Claude reads your actual council minutes and tells you, citing the file and paragraph.

That's the difference that matters for reporting. "According to council-minutes-2026-03-12.md, paragraph 4" is a verifiable citation. "Based on my training data" is not.

I'll be honest about the rough edges. MCP connections break. Tokens expire. Paths change. A server that worked yesterday returns errors today because a config file has a typo. The debug cycle is the same one you learned in Module 3: see the error, paste it to Claude, get the fix. Most MCP problems are config problems — wrong paths, expired credentials, malformed JSON. The readings for this module go deeper into MCP setup and troubleshooting.

The exercise for this module walks you through setting up an MCP connection to a document archive. It's hands-on — you'll configure the server, query your documents, and see the citations in action. I'm covering the concepts here so you know what's happening when you do that work.

[RECAP]

MCP connects Claude to data sources through a standard protocol. Servers bridge Claude to files, APIs, databases. Config lives in .mcp.json or .claude.json. The key distinction: parametric knowledge (from training, uncitable) vs. grounded knowledge (from your documents, citable). MCP gives you grounded knowledge. Expect config to break sometimes — same debug cycle as Module 3.

[TALKING HEAD]

Now you know what's under the hood. Settings control behavior and travel with the project. Caching saves money but breaks if you switch models. MCP connects Claude to your data and gives you citable answers. Next video: Claude Code isn't the only CLI agent, and you can use them together.

---


## Video 13: Calling other agents from the command line — ~10 minutes

**Format:** Screen recording with voiceover
**Module:** 4 — Power user techniques and the landscape

---

[SCREEN: Terminal with Claude Code, Gemini CLI, and Codex logos side by side]

Claude Code isn't the only CLI agent. There are four major ones right now, and you can use them together — even calling one from inside another. This video covers the landscape and shows you the pattern.

### The landscape

[SLIDE: cli-agents-landscape.svg]

[SCREEN: Split view showing different CLI tools]

Four CLI agents, four companies, four models.

**Claude Code** is from Anthropic. It's the tool you've been using all course. It's a paid subscription. It reads CLAUDE.md for project context. It has strong tool use — file access, shell commands, MCP connections. You know how it works.

**Gemini CLI** is from Google. It has a free tier — 1,000 requests per day, which is generous for experimentation. It reads GEMINI.md for project context. Same idea as CLAUDE.md, different filename. The free tier makes it a good second opinion on any task where you want to compare outputs.

**Codex CLI** is from OpenAI. It's a paid tool. It reads AGENTS.md for project context. It has its own strengths — particularly with code generation and refactoring. Different model architecture, different training data, different tendencies.

**GitHub Copilot CLI** is from GitHub, which is Microsoft. It has a free tier plus a Pro plan. It uses the repository context directly — your code, your README, your issues. It's built for developers but useful for anyone working in a repo.

Different models, different strengths. Like different reporters covering the same story — they'll notice different things, lead with different angles, miss different details. That's the point. A second opinion costs nothing when one of the tools has a free tier.

[RECAP]

Four CLI agents: Claude Code (Anthropic, paid, CLAUDE.md), Gemini CLI (Google, free tier, GEMINI.md), Codex CLI (OpenAI, paid, AGENTS.md), and GitHub Copilot CLI (GitHub/Microsoft, free tier, repo context). Each reads its own context file format and has different strengths.

### Calling other agents from Claude Code

[SLIDE: cross-agent-workflow.svg]

[SCREEN: Claude Code session]

Here's the practical part. You can call other CLI agents from inside Claude Code using subprocess calls — shelling out to another tool, getting the result back, and continuing your work.

The pattern looks like this. I'm in a Claude Code session. I have a press release I want analyzed. I want to see how two different models handle the same task.

I type: "Run this press release through Gemini CLI and ask it to extract the key claims as JSON. Use the command `gemini -p` with the prompt. Then compare its output with your own extraction."

[SCREEN: Claude Code running gemini -p as a subprocess]

Watch what happens. Claude Code shells out to Gemini CLI using `gemini -p` — the `-p` flag means non-interactive, just process the prompt and return the result. The Gemini model reads the press release, extracts claims, and returns JSON. Claude Code captures that output.

Now Claude does its own extraction on the same press release. Two sets of results from two different models.

[SCREEN: Side-by-side comparison]

Look at the differences. Both models caught the headline claim and the dollar figures. But Gemini flagged a quote attribution that Claude missed — it noticed the press release attributed a statement to the "parks department" without naming a specific person. Claude caught a date inconsistency that Gemini missed — the press release says "last Tuesday" but the dateline is from a Wednesday.

Neither model caught everything. Together, they caught more than either one alone. That's the value of multi-model comparison. Same input, different blind spots.

The key limit: each subprocess call is fresh. When Claude Code shells out to Gemini CLI, Gemini doesn't know anything about your Claude Code session — your project context, your conversation history, your CLAUDE.md. It gets the prompt and nothing else. So the prompts you send to external agents need to be self-contained. You have to include the full text of whatever you want analyzed, plus clear instructions about the output format. Don't assume the other model knows anything about your project.

In practice, this means you structure the prompt carefully. Instead of "analyze that press release from earlier," you'd say "Here's a press release. Extract the key claims as a JSON array. Each claim should have the text, the type, and what verification would require." Self-contained. No dependencies on prior conversation.

GitHub Copilot CLI has another useful pattern. Inside Copilot, the `/delegate` command sends a task to a cloud-based agent that creates a draft pull request and works in the background. It's free parallel compute for code changes. You describe the task, and the cloud agent does the work asynchronously — you can keep working on other things while it runs.

[RECAP]

Call other CLI agents from Claude Code using subprocess patterns — `gemini -p`, `copilot -p`. Each subprocess is a fresh session with no shared context, so prompts need to be self-contained. Multi-model comparison catches what a single model misses. Copilot's /delegate creates cloud-based PRs in the background.

### When to use which

[SCREEN: Terminal]

I'm not going to give you a feature comparison chart. Those go stale in weeks. Instead, here's a framework — four questions to ask when choosing a tool for a specific task.

**Task type.** Is this analysis, code generation, document search, or something else? Some models handle certain task types better. Try the same task in two tools and see which output you'd trust more. For instance, if you're extracting structured data from a long document, run the same extraction through two models and see which one gets the edge cases right.

**Context needs.** Does this task need your full project context — your CLAUDE.md, your skills, your MCP connections? If yes, use the tool you've configured. If it's a standalone question — "what's the AP style for this?" or "summarize this article" — any tool works.

**Tool access.** Does the task need file access, shell commands, or MCP connections? Claude Code and Codex CLI have strong tool use. Gemini CLI is more limited in what it can access directly. If you need the tool to read files from disk, create scripts, and run them, stick with Claude Code or Codex.

**Cost.** Gemini CLI's free tier handles 1,000 requests a day. For experimentation, comparison checks, and second opinions, free is hard to beat. Save the paid tools for tasks that need their specific capabilities.

Honest assessment: for most journalism tasks at this level, any of these tools works. The differences matter more for code-heavy work and large-scale automation. The most useful habit isn't picking the "best" tool — it's trying more than one and comparing the output. If you only ever use one model, you don't know what its blind spots are. Two models looking at the same document will catch more than one.

One more practical note. Each tool reads its own context file format — CLAUDE.md, GEMINI.md, AGENTS.md. If you work with multiple tools on the same project, you'd ideally maintain multiple context files. That's more overhead than most people need. A simpler approach: pick a primary tool and use the others for spot-checking. Your primary tool gets the full project setup. The others get self-contained prompts for specific tasks.

[SCREEN: Terminal]

That's the landscape. Four CLI agents, one subprocess pattern to connect them, and a framework for choosing. Last video: where this is all heading and the course wrap-up.

---


## Video 14: What's next + course close — ~10 minutes

**Format:** Talking head + slides
**Module:** 4 — Power user techniques and the landscape

---

[TALKING HEAD]

The tools will change. The way of working won't.

That's been the premise of this course from the beginning, and it's worth spending the last video on what it means in practice. Where are CLI agents heading, how do you stay current without burning out on the news cycle, and what did you actually build over these four weeks?

### Where this is heading

[SLIDE: autonomy-spectrum.svg]

CLI agents are getting more capable every month. The models get smarter. The tool access gets broader. The context windows get larger. Six months from now, the specific commands you learned in this course might have slightly different syntax. The models behind them will be different versions. Some of the limitations we worked around — context window limits, caching quirks — might be resolved.

But the direction is clear: more autonomy, more capability, more integration with external systems.

Multi-agent coordination is already happening. One agent researches. Another writes. A third reviews the output. You've seen a simple version of this — calling Gemini CLI from inside Claude Code. The next version is agents coordinating without you in the middle, passing tasks to each other and reporting back.

That's where the autonomy question gets harder, not easier. As these tools get more capable, the temptation is to let them do more without oversight. But for journalism, the opposite should happen. The more capable the tool, the more important the human in the loop becomes. Because the errors get harder to spot. A model that's right 99% of the time is more dangerous than one that's right 80% of the time — you stop checking.

[SLIDE: tool-evaluation-framework.svg]

When new tools appear — and they will, every few weeks — here are four questions to evaluate them.

**Does it have file access?** Can you point it at your project directory and have it read, write, and modify files? If not, you're back to copy-pasting into a chat window.

**Does it support context files?** Can you write a CLAUDE.md or equivalent — persistent instructions the tool reads at the start of every session? If not, you're re-explaining your preferences every time.

**Does it have tool use?** Can it run commands, connect to data sources, call APIs? Or does it only generate text? Tool use is what separates a harness from an app.

**Is it transparent?** Can you see what it's doing — which files it read, which commands it ran, what plan it's following? If the tool is a black box, you can't verify its work.

Those four questions tell you whether a new tool is a step forward or sideways. File access, context files, tool use, transparency. If it has all four, it's worth trying. If it's missing any, you know what the tradeoff is.

[RECAP]

CLI agents will keep getting more capable. Multi-agent coordination is next — agents passing tasks to each other. The autonomy question gets harder as tools improve. When evaluating new tools, check four things: file access, context file support, tool use, and transparency.

### Staying current

[TALKING HEAD]

New AI tools ship every week. New models, new features, new frameworks. You can't track all of it, and you shouldn't try. Here's what works.

Three sources that are worth following regularly.

**Simon Willison's blog** (simonwillison.net). He's a developer who tests everything and writes honest, detailed notes about what works and what doesn't. No hype. When a new tool comes out, his write-up is usually the best first read.

**Generative AI in the Newsroom** (generative-ai-newsroom.com). This is the journalism-specific source — practitioners writing about how they're using AI in actual newsrooms. You've been reading articles from this site all course. It stays relevant because it's grounded in real work, not product announcements.

**Ethan Mollick's One Useful Thing** (oneusefulthing.substack.com). Mollick is the researcher whose models/apps/harnesses framework we used in Module 1. He writes about AI from a practical standpoint — how to think about these tools, not just how to use them.

Here's the filter for everything else: "Does this change how I'd do a task I already do?" If a new tool or feature doesn't change your workflow on something concrete, you can file it away and check back later. If it does — if it makes a task faster, or more reliable, or possible for the first time — that's worth an afternoon of testing.

One more thing: keep your CLAUDE.md files alive. As your workflow evolves, update the context files. The skills you built in Module 2, the pipelines from Module 3 — those aren't finished products. They're living documents. A context file you wrote three months ago and never updated is doing less work than it should be.

[RECAP]

Follow Willison's blog, Generative AI in the Newsroom, and Mollick's One Useful Thing for durable, hype-free coverage. Filter new tools with one question: does this change how I'd do a task I already do? And keep your context files updated — they're living documents, not finished products.

### Course recap and send-off

[TALKING HEAD]

Let me close out the course. Here's what you built.

In Module 1, you moved from the browser to the terminal. You installed Claude Code, set up a beat project, and wrote a CLAUDE.md file — a context document that gives the AI your beat knowledge, your style preferences, and your workflow rules at the start of every session. You learned the difference between apps and harnesses. You started working at the harness layer.

In Module 2, you turned your domain expertise into reusable skills. You built custom slash commands for your beat — source verification, fact extraction, whatever your reporting needs. You installed hooks that enforce rules automatically. The prompts became infrastructure.

In Module 3, you described a multi-step workflow in plain English and had Claude build it. You tested it on one document, then five, then twenty. You watched it fail, diagnosed the failure, and fixed it. You learned the core loop: describe, build, test, break, fix, commit. And you learned to check the security and cost of what you build before running it at scale.

In Module 4, you went under the hood. Extended thinking for deeper analysis. Structured outputs for reusable data. Plan mode for editorial oversight. Settings and caching to keep sessions efficient. MCP to connect Claude to your data. Other CLI agents to get second opinions. And now this — where it's heading and how to stay current.

[SLIDE: course-arc.svg]

The arc of the course: from prompting to managing. In week one, you typed messages into a chat window. By week four, you're delegating tasks to an AI agent that has your project context, your custom tools, and your editorial rules — and you're reviewing its work like you'd review a junior reporter's draft.

That shift — from prompting to managing — is the skill that transfers. The specific tools will change. Claude Code might look different in a year. New CLI agents will appear. Models will get smarter. But the way of working stays the same: clear context, reusable tools, tested workflows, grounded data, human oversight.

Those are journalism skills applied to a new tool. Clear communication. Organized documentation. Skepticism of unverified claims. Showing your work. You already had those skills. Now you have a new place to use them.

Your final project asks you to build something real — a pipeline, a skill library, a RAG setup, or some combination — for your beat. The requirements are in the exercise description. It solves a real problem, it has a CLAUDE.md, it's documented, and it's on GitHub.

Good luck with the final project. I'll see you in the discussion forums.

---

## Production notes (updated for all modules)

### The running project
The greenfield-beat project threads through all demo videos. It starts as an empty folder in Video 4 and grows into a full project by Video 10.

### Module 1 (4 videos)
Module 1 has more videos than other modules because it covers the merged content (CLI intro + context files). Videos 3 and 5 are talking head/conceptual. Videos 4 and 6 are screen recordings showing the same project being built incrementally. Consider recording 4 and 6 back-to-back since they use the same project.

### Module 4 (4 videos)
Module 4 has 4 shorter videos (11-14) instead of 2 longer ones. Videos 11 and 13 are screen recordings. Videos 12 and 14 are talking head + slides. Consider recording 11 and 13 back-to-back (both voiceover over screen), and 12 and 14 back-to-back (both talking head).

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
- What automation means with a CLI LLM (Video 9)
- Plan mode flow diagram (Video 9)
- Multi-stage processing chain: fetch → clean → process → save (Video 9)
- Test-before-you-scale checklist (Video 9)
- Cost awareness: fractions of a cent, multiplied by volume (Video 9)
- Security: API keys as environment variables (Video 9)
- Debugging loop: see → paste → fix → test (Video 9)
- Real-world case studies: Hagar (beat monitoring), Spencer (multilingual pipelines) (Video 9)
- Error handling: exponential backoff diagram (Video 9)
- When automation is worth it: frequency vs. setup cost (Video 9)
- Batch processing pattern: one → five → full (Video 9)
- Arc check: context → skills → workflows (Video 9)
- Extended thinking diagram (Video 11)
- Structured outputs diagram (Video 11)
- Plan mode flow diagram (Video 11)
- Context window and session management diagram (Video 11)
- Settings hierarchy: global → project → session (Video 12)
- Prompt caching diagram (Video 12)
- MCP architecture: server, client, protocol (Video 12)
- Parametric vs. grounded knowledge (Video 12)
- CLI agents landscape: Claude Code, Gemini CLI, Codex CLI, Copilot CLI (Video 13)
- Cross-agent workflow diagram (Video 13)
- Autonomy spectrum: read-only → supervised → autonomous (Video 14)
- Tool evaluation framework: file access, context files, tool use, transparency (Video 14)
- Course arc diagram: prompting → managing (Video 14)

### Files needed before recording
- `Resources/examples/beat-project/park-closure.md` — sample press release
- `Resources/examples/beat-project/council-minutes-excerpt.md` — sample transcript
- Two budget documents (original and revised) for the extended thinking comparison demo (Video 11)
- A clean terminal with increased font size (24pt minimum)
- The greenfield-beat project pre-scaffolded for Videos 6 and 8 (or build live)
- 10 news article URLs for Video 10 (mix of accessible and paywalled)
- A paywalled article URL confirmed to return < 200 chars of content (Video 10)
- ANTHROPIC_API_KEY set in the environment (Video 10)
- `article_pipeline.py` pre-built for fallback if live coding takes too long (Video 10)
- 20 PDF press releases in a folder for the plan mode demo (Video 11)
- Gemini CLI installed and authenticated for cross-agent demo (Video 13)
- A press release prepared for the multi-model comparison demo (Video 13)
