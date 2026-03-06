# Full video narration scripts — all modules

**Course:** Advanced prompt engineering for journalists
**Instructor:** Joe Amditis, Center for Cooperative Media, Montclair State University

These are camera-ready narration scripts. The promo and welcome videos target 1-2 and 2-3 minutes respectively. Instructional videos (3-12) target ~20 minutes (~3,000 words at 150 wpm). Stage directions are in [BRACKETS].

## Updated video map (4-module structure)

| # | Video | Module | Format | Target length |
|---|-------|--------|--------|---------------|
| 1 | Promo video | — | Talking head | 60-90 sec |
| 2 | Welcome video | Intro | Talking head | 2-3 min |
| **3** | **What CLI LLMs are and why they matter** | **Module 1** | **Talking head + slides** | **~20 min** |
| **4** | **Getting started with Claude Code** | **Module 1** | **Screen recording** | **~20 min** |
| **5** | **The context file problem** | **Module 1** | **Talking head + slides** | **~20 min** |
| **6** | **Setting up your beat project** | **Module 1** | **Screen recording** | **~20 min** |
| **7** | **From prompts to skills** | **Module 2** | **Talking head + slides** | **~20 min** |
| **8** | **Installing and using journalism skills** | **Module 2** | **Screen recording** | **~20 min** |
| **9** | **Describing workflows and having AI build them** | **Module 3** | **Talking head + slides** | **~20 min** |
| **10** | **Ask Claude Code to build you a pipeline** | **Module 3** | **Screen recording** | **~20 min** |
| **11** | **Why AI makes things up (and how to fix it)** | **Module 4** | **Talking head + slides** | **~20 min** |
| **12** | **Connecting Claude to a knowledge base** | **Module 4** | **Screen recording** | **~20 min** |

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

## Video 7: From prompts to skills — ~20 minutes

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

## Video 8: Installing and using journalism skills — ~20 minutes

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

In the demo, I'm going to describe a journalism workflow in plain English, have Claude Code build it, and then intentionally break it — because seeing how to fix things is more useful than seeing things work on the first try. See you there.

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

Your project now has a context file from Module 1, custom skills from Module 2, and a tested, debugged, version-controlled workflow from Module 3. Each layer built on the last. The context file tells the AI what your beat is about. The skills give it reusable editorial instructions. The workflow chains those capabilities into a pipeline that runs on multiple documents without you sitting at the keyboard. And at every stage, you stayed in control — reviewing plans, checking outputs, approving fixes.

In Module 4, we're going to connect this project to external data sources — your own document archives, databases, APIs — and tackle the problem that makes all of that hard: getting the AI to cite its sources accurately and admit when it doesn't know something. See you there.

---


## Video 11: Why AI makes things up (and how to fix it) — ~20 minutes

**Format:** Talking head + slides
**Module:** 4 — Agents, tools, and data access

---

[TALKING HEAD]

AI makes things up. You know this. The term is hallucination — the model produces text that sounds confident and specific but has no basis in fact. A name that doesn't exist. A citation to a paper that was never published. A statistic that's close to the real number but off by enough to be wrong.

You've probably seen this yourself. You paste a document into Claude or ChatGPT and ask a question, and somewhere in the response there's a detail that doesn't come from the document at all. The model filled it in. It generated something plausible instead of something true.

For most uses of AI, this is annoying. For journalism, it's disqualifying. A hallucinated fact in a published story is a correction, a retraction, or a lawsuit. There's no middle ground. So if you're going to use AI in your reporting workflow — and you should, because the efficiency gains are real — you need to understand exactly why hallucination happens and what the fix looks like.

The explanation is straightforward. And it leads directly to the tools you'll use in this module.

[SLIDE: two types of knowledge — parametric vs. grounded]

Here's the core distinction. AI models have two ways of knowing things, and they're not equally reliable.

The first is **parametric knowledge**. This is everything the model absorbed during training. Billions of documents, web pages, books, articles — compressed into the model's parameters. When you ask Claude who won the 2020 presidential election, it's drawing on parametric knowledge. That information was in the training data.

Parametric knowledge has three problems. First, it's frozen at a cutoff date. The model doesn't know what happened after its training data ends. If a city council voted on something last Tuesday, the model has no idea. Second, even within its training window, it's sometimes wrong. The training data contains errors, contradictions, and outdated information. The model absorbed all of it. Third — and this is the one that matters most for journalism — parametric knowledge is not citable. You can't trace it back to a specific source. "The model's training data" is not an attribution.

The second type is **grounded knowledge**. This is information retrieved from actual documents at the time you ask the question. The model didn't memorize it during training — it's reading it right now, from a specific file, and it can tell you which file it came from. Grounded knowledge has a source. It has a citation. It traces back to an origin you can verify.

That distinction — parametric versus grounded — is the entire foundation of this module.

[SLIDE: RAG pipeline — retrieve, then generate]

The technique for replacing parametric knowledge with grounded knowledge is called RAG — retrieval-augmented generation. The name describes exactly what it does. You augment the generation step with a retrieval step.

Here's how it works. You ask a question. Before the model generates a response, the system searches a knowledge base — a collection of documents you've provided. It finds the documents most relevant to your question. Those documents get passed to the model along with your question. The model then generates its response based on those retrieved documents, not its training data.

The result is different in a specific way: the response cites its sources. Not "according to my training data" — but "according to council-minutes-2026-02-12.md, paragraph 4." You can open that file and check. The attribution survives the AI step.

For a journalist, that's the difference between a tool you can use and a tool you can't.

[SLIDE: attribution chain — question to source to output]

Let me make this concrete with a reporting scenario.

You're covering a city budget dispute. You have 40 documents: council minutes, press releases, budget memos, interview transcripts. You ask your AI assistant: "What was the original cost estimate for the Riverside Park renovation, and how has it changed?"

Without RAG — without grounded knowledge — the model draws on whatever it absorbed during training. Maybe it saw a news article about a park renovation in some city. Maybe it saw budget figures from a different municipality. It generates a plausible-sounding answer with specific numbers that may or may not be real. You have no way to verify where those numbers came from without doing the research yourself, which defeats the purpose.

With RAG, the model searches your 40 documents. It finds the relevant council minutes and the budget memo. It pulls the actual figures from those documents. It tells you: "The original estimate was $2.1 million according to the March budget memo. The revised estimate of $3.4 million appears in the June council minutes, with the increase attributed to soil remediation costs." You can open both files and check.

"Claude said this" is not attributable. "Claude synthesized this from council-minutes-2026-02-12.md, paragraph 4" is. That's the standard. If you can't trace an AI-generated claim back to a source document, it doesn't belong in your reporting.

[SLIDE: newsroom examples — Washington Post, New York Times, Geneea]

Newsrooms are already building this way. Let me walk through three examples at different scales.

The Washington Post built an internal tool called **Haystacker**. It analyzes video, photos, and text across large document sets — the kind of multi-step research that would take a team of reporters days to do manually. Haystacker can process thousands of pages of court filings or government documents and surface patterns, connections, and anomalies. Think about what that means for an investigative team sitting on a document dump from a FOIA request: instead of dividing pages among reporters and hoping nobody misses the one paragraph that matters, the tool can surface every potentially relevant passage across the entire set. But — and this is the part that matters — human editors review every output before anything goes to publication. The tool does the searching. The journalists do the verification and the editorial judgment.

The New York Times built **Echo**, an internal tool for article summarization, SEO headline generation, and newsletter drafting. Some of Echo's tasks are more automated than others. Summarization and headline suggestions run with lighter oversight — the output is a starting point that editors refine. Newsletter drafting gets heavier review. The Times drew a line: tasks where a wrong output is easy to catch and low-stakes get more automation. Tasks where a wrong output could mislead readers get more human review. That's a thoughtful way to draw the line, and it maps to a principle you can apply in your own work.

**Geneea**, a Czech AI company, built a RAG system specifically for newsrooms. Journalists query their own archives — years of published articles — and get answers with citations to the original stories. Need to reconstruct the timeline of a political scandal from three years of coverage? Ask the system. It returns the timeline with links to each source article. The citations aren't decorative — they're the point. The system is useful because you can verify every claim it makes against the original reporting.

Three different scales, three different implementations, same principle: the AI retrieves from real documents and the humans verify the output.

[SLIDE: autonomy spectrum — read-only, supervised action, autonomous]

This brings us to a broader question: how much autonomy should an AI tool have?

There's a spectrum. On one end: **read-only**. The AI researches and summarizes, but it takes no action. You read the output and decide what to do with it. On the other end: **autonomous**. The AI acts on its own — sends emails, publishes content, updates databases — and you review the log afterward.

In the middle: **supervised action**. The AI proposes actions — drafts an email, suggests a story lead, flags a discrepancy in a dataset — and you approve, modify, or reject each one before it happens.

For journalism, supervised action is the right level. Not because there's a regulation that says so, but because you are still the journalist. The AI is a research collaborator, not a reporter. It doesn't have sources. It doesn't have editorial judgment. It doesn't understand the political context of why a council member's vote matters. You do.

Human-in-the-loop is not optional. Not as a disclaimer, not as a compliance checkbox — but because every fact that goes into a published story needs a human who decided it belonged there.

[SLIDE: agents vs. chatbots — tools, autonomy, multi-step plans]

You've been hearing the word "agent" more and more. Let me define it precisely, because it gets used loosely.

A chatbot takes your input and produces output. One turn at a time. You ask, it answers. That's what you've been doing in browser-based AI interfaces.

An **agent** is different in three specific ways. First, it has **tools** — access to files, databases, APIs, web searches, or other software. It can take actions beyond generating text. Second, it has **autonomy** — it can decide which tools to use and in what order, without you specifying every step. Third, it executes **multi-step plans** — it breaks a complex task into subtasks and works through them sequentially, adjusting its approach based on the results of each step.

Claude Code, the tool you've been using all course, is an agent. When you say "read all the PDFs in this folder and find every mention of Greenfield Construction," Claude Code decides how to approach that — which files to read first, how to search them, how to organize the results. It uses tools (file reading, text search) and follows a multi-step plan. You didn't specify the steps. You specified the goal.

In non-interactive mode — `claude -p` with a prompt passed directly — the agent runs without back-and-forth. It takes the prompt, executes the plan, and returns the result. That's how scheduled automation works: you describe the task, the agent handles the execution. You saw this pattern in Module 3 when we built a pipeline that could run on a schedule. The difference in Module 4 is that the agent has access to external data — not just the files in your project folder, but a structured knowledge base it can search and cite.

[SLIDE: MCP architecture — server, client, protocol]

So how do you connect an agent to your data? That's where MCP comes in.

**Model Context Protocol** is an open standard created by Anthropic for connecting AI models to external data sources and tools. Think of it as a bridge between Claude and the things Claude needs to access — your files, a database, an API, a spreadsheet.

An MCP server is a small program that exposes a data source in a standardized way. There are MCP servers for file systems, databases, Google Drive, Slack, GitHub — dozens of them. When you configure Claude Code to use an MCP server, Claude gains the ability to search, read, and interact with that data source as if it were a native tool.

In today's demo, you'll see this in action: a folder of journalism documents becomes a queryable knowledge base. Claude searches it, retrieves relevant content, and cites specific files in its answers. That's RAG, implemented through MCP.

The configuration is a JSON file — and you don't have to write it yourself. You describe what you want to connect, and Claude handles the setup. That's the pattern for this whole course.

[SLIDE: De Cooker's quote extraction research]

Before we move to the demo, I want to highlight one piece of research that connects several ideas from this module.

Jessy de Cooker, writing for Generative AI in the Newsroom, built a system to extract and classify quotes from newspaper articles using GPT-3.5 and Pydantic structured outputs. She tested it on 2,464 Dutch newspaper articles and measured the results against human annotation. The overall F1 score — a standard measure of accuracy — was 0.75. Strong on direct quotes, weaker on paraphrases and split quotes.

Two findings matter here. First, the model showed systematic bias against non-Western names and Dutch names outside the dominant training data. Names that appeared less frequently in the training corpus were more likely to be missed or misattributed. That's a parametric knowledge problem — the model's training data has gaps, and those gaps create blind spots in the output. If you're using AI to process source material, you need to know that some sources are less visible to the model than others.

Second — and this connects to everything we've covered about context files and skills — de Cooker argues that prompt design is a methodological artifact. The specific wording of the prompt changes the results. Different prompts produce different extraction patterns. That means the prompt isn't neutral. It's a research instrument, and like any research instrument, it needs to be documented, versioned, and shared. That's exactly what CLAUDE.md files and skills do. They make the prompt visible, repeatable, and auditable.

[SLIDE: Joe's agent infrastructure — Raspberry Pi, Gmail, Slack, Telegram]

I want to tell you about something I built, because it illustrates both the potential and the problems of agent infrastructure.

I have a Claude Code agent running on a Raspberry Pi — a $180 computer sitting on a shelf in my home office. It has its own Gmail account, Google Drive, and Calendar access. It connects to Slack and Telegram. It runs on a schedule: full check-ins every two hours on weekdays, lighter monitoring scans every 15 minutes.

The agent reads my email, checks for new meeting transcripts, monitors Slack channels for mentions, and drafts responses. It never sends anything without my approval. It drafts an email, sends me a Telegram notification with approve, edit, and cancel buttons, and waits. I tap a button on my phone. That's the human-in-the-loop.

I wrote about this in detail on my Substack — that article is in your readings for this module — and the "what goes wrong" section is the most important part. Because things go wrong.

Early on, a test accidentally sent an email to a real contact. The approval system wasn't fully wired up yet, and a button tap during testing triggered a send. That's a one-way door — you can't unsend an email. The fix: a confirmation step that shows the full recipient list before sending. Written after the failure, not before.

The CPU locked up during a heavy processing job — the Raspberry Pi ran out of memory and the whole system froze. The fix: resource limits on agent sessions, with automatic shutdown if memory usage crosses a threshold.

The scheduler silently failed for three days. No errors in the logs — it just stopped running. A cron job wasn't loading the right environment variables after a system update. I didn't notice because there were no error notifications — the absence of activity is hard to detect. The fix: a heartbeat check that sends an alert if the scheduler hasn't run in the expected window.

Each of those failures produced a rule. The rules are written into the system's configuration files — the same kind of context files you've been building all course. What oversight looks like in practice isn't a policy document. It's a set of rules written after specific things went wrong.

[SLIDE: where data connections break]

Let me be direct about what's hard. Setting up an MCP connection or a RAG pipeline is not the difficult part. Making it work reliably over time is.

Permissions change. An API token expires and your pipeline silently returns empty results instead of throwing an error. A database schema gets updated and the fields your queries depend on no longer exist. A file path changes because someone reorganized a shared drive. The MCP server you configured yesterday can't connect today because a firewall rule changed overnight.

These aren't exotic failure modes. They're Tuesday. Making data connections work reliably is harder than setting them up in the first place. And the failure pattern is almost always the same: something silently stops working, and you don't notice until you look at the output and realize it's wrong or empty.

The defense is the same one we've used all course: test frequently, check outputs, and don't trust a pipeline that hasn't been verified recently. The debug cycle you learned in Module 3 — see the error, paste the error, get the fix — applies here too. Most MCP problems are config problems. Wrong paths, expired tokens, typos in JSON. Claude can diagnose them if you show it the error.

[SLIDE: arc check — live and shareable]

You're at the final stage of the course arc. In Module 1, you set up the project and put it on GitHub. In Module 2, you built skills — reusable tools that encode your editorial expertise. In Module 3, you built workflows and learned to test and debug them. Now, in Module 4, you connect your project to real data and make it a complete, shareable system.

The arc check for this stage: your project is live — connected to documents, producing grounded, citable output — and shareable. Someone can clone your repository and inherit the same setup: the context file, the skills, the workflows, the data connections.

[TALKING HEAD]

In the demo, you'll see all of this in practice. I'm going to connect Claude to a local archive of journalism documents using MCP, query those documents with source citations, show you what happens when the knowledge base doesn't have the answer, debug a common configuration error, and then commit the finished project and push it to GitHub.

This is the last demo of the course. And at the end, I'm going to close out the four modules and tell you what comes next. See you there.

---

## Video 12: Connecting Claude to a knowledge base — ~20 minutes

**Format:** Screen recording with voiceover
**Module:** 4 — Agents, tools, and data access

---

[SCREEN: Terminal, cursor blinking]

Today I'm connecting Claude to a local archive of journalism documents using MCP. At the end of this video, we're publishing the finished project to GitHub. This is the last demo of the course — the capstone. Everything you've built over four weeks comes together here.

Let me open the project.

[SCREEN: Typing `cd ~/Documents/greenfield-beat && claude`]

I navigate to the beat project directory — the same project we've been building since Module 1. I type `claude` and press Enter.

This project already has a CLAUDE.md with beat context and style rules. It has skills from Module 2 — source verification, meeting minutes extraction. It has the article-to-newsletter pipeline from Module 3. Now we're adding the last piece: a connection to a document archive that Claude can search and cite.

[SCREEN: Claude Code session open]

First, I need to set up MCP. I'm going to describe what I want and let Claude handle the configuration.

I type: "I want to connect Claude to a local folder called beat-archive as a knowledge base. Set up an MCP server that lets me query those documents. Walk me through what you're doing."

[SCREEN: Claude explaining and configuring MCP]

Watch what Claude does here. It's explaining what MCP is — a protocol for connecting AI to data sources. It's going to create or update a configuration file that tells Claude Code where to find the MCP server and what it can access.

Claude is writing the config now. It's setting up a filesystem MCP server pointed at the `beat-archive` directory inside our project. The configuration goes into `.claude.json` — that's the file Claude Code reads at startup to know which MCP connections are available.

Let me look at what it wrote. There's the server definition — the type, the path to the archive directory, the permissions. This is JSON, and it's readable. You could open this file and understand what it's doing. But you didn't have to write it. You described the goal and Claude produced the configuration.

Now I need to restart Claude Code to load the new MCP connection. I'll exit and re-launch.

[SCREEN: Exiting session, typing `claude` again]

Back in. Let me verify the connection is active. I type: `/mcp`

[SCREEN: MCP status showing the filesystem server]

There it is. The filesystem server is connected, pointed at the beat-archive directory. Claude now has access to those files as a queryable knowledge base.

But the archive is empty. Let's fix that.

[SCREEN: Claude Code session]

I type: "Organize the example documents we've been using throughout the course — the press releases, council minutes, and interview notes — into the beat-archive folder. Create a clean directory structure."

[SCREEN: Claude moving and organizing files]

Claude is creating subdirectories inside beat-archive: `press-releases`, `council-minutes`, `interviews`. It's copying the documents we've used in previous demos — the park closure press release, the council minutes excerpt, the budget memo, the interview transcripts. These are the same files from Modules 1 through 3, now organized as a searchable archive.

Let me show you what the folder looks like.

[SCREEN: Directory listing of beat-archive]

There it is. Six documents across three categories. This is a small archive — in a real newsroom, you'd have hundreds or thousands of documents. You might have five years of council minutes, a decade of budget reports, a folder of interview transcripts that grows every week. The principle is the same at any scale — the more documents in the archive, the more useful the queries become, because the model has more material to search and cross-reference. Let's start querying.

[SCREEN: Claude Code session]

First question. I type: "What did the city council decide about Riverside Park?"

[SCREEN: Claude searching the archive and responding]

Watch the response. Claude searched the archive, found the relevant council minutes, and pulled the specific decision. Look at the citation: it names the file — `council-minutes/council-minutes-excerpt.md` — and references the specific section where the vote is recorded. The park renovation was approved 5-2, with Davis and Ramirez dissenting.

That's not parametric knowledge. Claude didn't pull this from its training data. It read a specific document in your archive and cited it. If you wanted to verify this, you'd open that file and check. The attribution chain is intact.

Second question. I type: "Are there any mentions of contractor billing in these documents?"

[SCREEN: Claude searching and responding]

This one is more interesting because it has to search across multiple documents. Claude found references in the council minutes — a discussion about cost overruns on the park project — and in the budget memo, which itemizes contractor payments. It cites both files, with the relevant sections noted.

Notice what it didn't do: it didn't invent a contractor billing scandal that isn't in the documents. It reported what it found. The response is grounded in the actual files.

Third question. I type: "Write a background paragraph on the park closure situation, citing your sources."

[SCREEN: Claude generating a sourced paragraph]

This is where the value becomes clear for daily reporting. Claude wrote a paragraph that synthesizes information from three documents: the press release announcing the closure, the council minutes recording the vote, and the budget memo showing the cost estimates. Each claim in the paragraph has a citation. The cost figure comes from the budget memo. The vote count comes from the council minutes. The closure timeline comes from the press release.

If this paragraph appeared in a story, every fact in it traces back to a source document. That's the standard.

Now let me push it further. I type: "Cross-reference the budget figures mentioned in the press release with the council minutes. Do the numbers match?"

[SCREEN: Claude cross-referencing documents]

This is a multi-step analysis. Claude is reading both documents, pulling the dollar figures from each, and comparing them. The press release says the renovation will cost $2.1 million. The council minutes reference a revised estimate of $3.4 million due to soil remediation. The press release was issued before the cost revision — it's using outdated figures.

That's a discrepancy that a reporter should know about. The press release went out to the public with one number; the council approved a different, higher number. Was the press release written before the revision? Did someone in the mayor's office use the old figure deliberately? Those are editorial questions — Claude can't answer them. But it surfaced the discrepancy, which is the hard part. Finding the mismatch across two documents buried in a stack of files. That's what the archive connection gives you.

And Claude found it by reading two documents and comparing the numbers. Not from training data — from your archive.

[SCREEN: Claude Code session]

Now I want to show you something equally important: what happens when the archive doesn't have the answer.

I type: "What's the mayor's position on the new highway project?"

[SCREEN: Claude responding that it doesn't have relevant documents]

Look at the response. Claude searched the archive and didn't find any documents about a highway project. Instead of making something up — instead of generating a plausible-sounding answer from its training data — it told me it doesn't have the evidence.

This is the correct behavior. This is what you want. An AI tool that says "I don't have documents about that" is more useful than one that fabricates an answer. The absence of evidence is information. It tells you the archive doesn't cover this topic, which means you need to find the source material yourself before reporting on it.

If this were a chatbot without grounded knowledge, you might get a paragraph about highway projects that sounds specific but has no basis in any real document. That's worse than no answer at all, because it looks like it could be real.

[SCREEN: Claude Code session]

Now let me show you what happens when the MCP configuration breaks, because it will break. This is the most common class of problems you'll hit.

I'm going to simulate a config error. I'll ask Claude to read the MCP config file and I'll change the archive path to something that doesn't exist.

I type: "Open the .claude.json file and show me the MCP configuration."

[SCREEN: Config file visible]

There's the config. The archive path is `./beat-archive`. I'm going to change it to `./beat-archives` — plural, a typo. A one-character difference.

I type: "Change the beat-archive path in the MCP config to beat-archives — I want to test what happens with a wrong path."

[SCREEN: Claude updating the config]

Done. Now I'll restart Claude Code and try a query.

[SCREEN: Exiting and relaunching Claude]

I type: "What did the city council decide about Riverside Park?"

[SCREEN: Error or empty response]

There it is. The MCP server either threw an error or returned nothing. The path doesn't exist, so there's nothing to search. In some cases you'd see an explicit error message. In others — and this is the more dangerous case — you'd get silence. No results, no error. Just an empty response that looks like the archive has no relevant documents, when the real problem is that the archive isn't connected at all.

This is what I meant in the lecture about silent failures. The system doesn't always tell you something's wrong. Sometimes it just gives you nothing and you have to figure out why.

Let me fix it. I paste the error back — or describe the symptom — to Claude.

I type: "The MCP filesystem server isn't returning any results. I just changed the path in .claude.json. Can you check the config and fix it?"

[SCREEN: Claude diagnosing and fixing the typo]

Claude opened the config, found the typo — `beat-archives` instead of `beat-archive` — and fixed it. One character. That's all it took to break the entire knowledge base connection.

Most MCP problems are config problems: wrong paths, missing permissions, typos in JSON. If you remember one thing from this debugging section, make it this: when your MCP connection stops working, check the config file first. Nine times out of ten, that's where the problem is. The debug cycle is the same one you've used all course. See the problem. Show it to Claude. Get the fix.

Let me restart one more time and verify.

[SCREEN: Relaunching, running /mcp, asking a test query]

Connection is back. The test query returns results with citations. We're good.

[SCREEN: Claude Code session]

Now let me compare grounded versus ungrounded answers side by side, so you can see the difference clearly.

I type: "Without using the MCP knowledge base, just from your general knowledge, what do you know about the Riverside Park renovation in Greenfield?"

[SCREEN: Claude's ungrounded response]

Look at this. Without the archive, Claude either says it doesn't have specific information about this — which is honest — or it generates a generic response about park renovations that sounds plausible but isn't about this specific project. There are no citations. No file names. No specific dates or dollar figures from real documents.

Now I ask the same thing with the archive connected.

I type: "Now use the beat-archive to answer: what do you know about the Riverside Park renovation?"

[SCREEN: Claude's grounded response with citations]

Same question. With MCP, the response has specific figures from the budget memo, vote counts from the council minutes, timeline details from the press release. Every claim has a citation.

That's the difference between parametric and grounded knowledge, made visible. Same model, same question. The archive is what makes it citable. And if you take the archive away — if you disconnect the MCP server — the model goes back to generating from training data. The grounding isn't permanent. It depends on the connection being active and the documents being accessible. That's why the config matters, and that's why you test it.

[SCREEN: Claude Code session]

Let's write a README for this project. It's going to be the documentation that someone sees when they find the repo on GitHub.

I type: "Write a README for this project. Explain what it does, what's in the repository, how to set it up including the MCP configuration, how to use it, and what its limitations are. Be specific about the limitations — what the system can't do, what kinds of questions it won't answer well, where human judgment is still required."

[SCREEN: Claude writing the README]

Let me scroll through what it wrote. There's a project description — a beat reporting toolkit for covering Greenfield city government. A list of what's in the repo: CLAUDE.md for project context, skills for meeting minutes and source verification, the newsletter pipeline from Module 3, the MCP configuration for the document archive.

Setup instructions: clone the repo, install Claude Code, restart to load MCP. Usage examples: sample queries with expected output. And the limitations section — this is the important part. The system only knows what's in the archive. It can't verify claims against external sources. It can't assess whether a source is credible, only whether a document contains a particular claim. Budget figures may be outdated if newer documents haven't been added. Human review is required before any output is used in published reporting.

That limitations section is doing real work. It tells the next person who uses this project exactly where the boundaries are.

[SCREEN: Claude Code session]

Time to commit and push. I type: "Commit everything — the MCP configuration, the beat-archive folder, the README, and any other changes — with the message 'Add document archive with MCP, README, and course capstone.' Then push to GitHub."

[SCREEN: Claude running git add, commit, push]

Done. Let me open the repository in a browser.

[SCREEN: GitHub repository page]

There it is. Look at what's in this repo.

CLAUDE.md — the context file you wrote in Module 1. Every beat-specific rule, every style preference, every workflow instruction. Claude reads this at the start of every session.

The `.claude/commands/` directory — your skills from Module 2. Meeting minutes extraction, source verification. Reusable tools that encode your editorial expertise as slash commands.

The pipeline script from Module 3 — the article-to-newsletter workflow you built, tested, broke, fixed, and committed.

The `.claude.json` config — the MCP connection to your document archive. The bridge between Claude and your source material.

The `beat-archive/` folder — the actual documents. Press releases, council minutes, interview transcripts. The knowledge base that grounds Claude's answers in real sources.

And the README — documentation that tells anyone who finds this repo what it does and how to use it.

Every decision about how Claude works on this project is committed here. Clone this repository on a new machine and the same context comes with it. The same skills load. The same MCP connection configures itself. The same editorial rules apply. Hand the link to a colleague and they inherit the same environment you built.

That's context engineering at full scale. That's what you've spent four weeks building.

[SCREEN: GitHub repo, then transition to voiceover]

Your final project asks you to build something like this for a real journalism use case. It can be a pipeline, a skill library, a RAG setup, or some combination. The requirements are: it solves a real problem on your beat, it has a CLAUDE.md, it's documented, and it's on GitHub. The rest is your design. The exercise description has the full details and the rubric.

[VOICEOVER, screen fades to course title card]

Let me close out the course.

Four weeks ago, you were using AI through a browser. You'd type a message, get a response, type another message. Each session started from zero. You couldn't hand the AI a folder of documents. You couldn't save a workflow and reuse it. You couldn't share what you'd built with a colleague.

Here's what you built.

In Module 1, you moved from the browser to the terminal. You installed Claude Code, set up a project, and wrote a context file that gives the AI your beat knowledge at the start of every session. You learned the difference between apps and harnesses — and you started working at the harness layer.

In Module 2, you turned your best prompts into skills — reusable tools that run with a slash command instead of being retyped from memory. You installed a journalism skills library and built a custom skill for your own beat. The prompts became infrastructure.

In Module 3, you described a multi-step workflow in plain English and had Claude build it. You tested it, watched it fail, diagnosed the failure, and fixed it. You learned the core loop: describe, build, test, break, fix, commit. And you learned to check the security of what you build before running it on real data.

In Module 4 — today — you connected Claude to a document archive and saw the difference between parametric and grounded knowledge. You asked questions and got answers with citations to specific files. You saw the system refuse to answer when it didn't have the evidence. And you pushed the finished project to GitHub, where anyone can clone it and inherit the same setup.

That's the arc: from typing into a chat window to building a documented, tested, shareable AI workflow that's grounded in your own source material.

The tools will change. Claude Code will get updates. New CLI tools will appear. MCP will evolve. Models will get more capable. The specific software you used in this course will look different in a year.

The way of working won't change. Writing clear context. Building reusable tools. Testing before deploying. Grounding AI output in real sources. Keeping a human in the loop. Documenting what you build so others can use it. Those are durable skills. They're the same skills you use in journalism — clear communication, organized documentation, skepticism of unverified claims, and showing your work.

You came in knowing how to use AI through a browser. You're leaving knowing how to work with AI as a collaborator — with your files, on your terms, in a form you can share.

Good luck with the final project. I'll see you in the discussion forums.

---

## Production notes (updated for all modules)

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
- Two types of knowledge: parametric vs. grounded (Video 11)
- RAG pipeline: retrieve → generate (Video 11)
- Attribution chain: question → source → output (Video 11)
- Newsroom examples: Washington Post Haystacker, NYT Echo, Geneea (Video 11)
- Autonomy spectrum: read-only → supervised → autonomous (Video 11)
- Agents vs. chatbots: tools, autonomy, multi-step plans (Video 11)
- MCP architecture: server, client, protocol (Video 11)
- De Cooker's quote extraction research summary (Video 11)
- Joe's agent infrastructure: Raspberry Pi, Gmail, Slack, Telegram (Video 11)
- Where data connections break (Video 11)
- Arc check: live and shareable (Video 11)

### Files needed before recording
- `Resources/examples/beat-project/park-closure.md` — sample press release
- `Resources/examples/beat-project/council-minutes-excerpt.md` — sample transcript
- A real or realistic Facebook claim for the source-verification demo
- A clean terminal with increased font size (24pt minimum)
- The greenfield-beat project pre-scaffolded for Videos 6 and 8 (or build live)
- 10 news article URLs for Video 10 (mix of accessible and paywalled)
- A paywalled article URL confirmed to return < 200 chars of content (Video 10)
- ANTHROPIC_API_KEY set in the environment (Video 10)
- `article_pipeline.py` pre-built for fallback if live coding takes too long (Video 10)
- beat-archive folder with 6+ documents across 3 categories for Video 12
- A `.claude.json` MCP config pre-built for fallback if live setup takes too long (Video 12)
