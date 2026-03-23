# Module 1: From chat window to command line

## Orientation message

Welcome to Module 1 of Advanced Prompt Engineering for Journalists.

In the 101 course, you learned how to write effective prompts and get useful results from AI through web interfaces like ChatGPT and Claude.ai. You can now write clear instructions, provide context, and iterate on responses. That skill set carries forward into everything we do here.

The difference is where and how you deliver those prompts.

This course is about escaping the browser. We are going to get out of the web chat interface and bring these tools onto your local machine, where they can interact with, edit, create — and in some cases delete — real files and folders. The tools you will use here are much more powerful than what you have been working with in a browser, and you can build more useful things when you can take advantage of your machine's processing power, run scripts and workflows, schedule recurring tasks, and let something run overnight without needing to babysit a browser tab.

**You need a paid account.** To do most of what we cover in this course, you need a paid subscription to one of the three major models: ChatGPT/Codex, Gemini/Gemini CLI, or Claude/Claude Code. The $20/month plan is fine. API-based billing also works, though it tends to be more expensive for the kind of sustained usage we will be doing. The only exception is Gemini CLI, which has a free tier that allows you to use the CLI agent at no cost.

**You do not need to use the terminal.** If you are on a company machine where IT controls your admin access, or if the terminal feels intimidating, there are other options. You can use your favorite IDE — VS Code, Cursor, Windsurf, AntiGravity — as long as it gives you access to a large language model. Any environment where you can interact with one of the three major models will work. That said, the video demonstrations in this course use PowerShell primarily, so the things I show and explain will be geared toward that modality.

**Why we are escaping the browser.** Before you install anything, it helps to understand why the environment matters. Ethan Mollick's framework for thinking about AI has three layers: **models** (the underlying intelligence), **apps** (the interfaces like ChatGPT.com and Claude.ai), and **harnesses** (systems that give models tools, file access, and the ability to act). You have been using apps. This course teaches you to use harnesses. The same model — Claude Opus 4.6, for example — behaves differently in a chat window than it does running inside Claude Code. The chat window gives it a system prompt geared toward conversational responses. The harness gives it a different system prompt, different tools, and the ability to work with your file system. It is not just a smarter chat — it is a different kind of tool.

In the video, I demonstrate this side by side: the same research task, run simultaneously in Claude on the web and Claude Code in the terminal. Claude on the web finishes faster but produces a surface-level report with citation links. Claude Code takes longer but saves structured files to your computer, extracts deeper information, and produces materials you can reference in future sessions. And when Claude on the web hits its tool use limit, everything lives only in that chat. With Claude Code, the files are already on your desktop.

**The adoption gap is in back-office work.** A 2025 Reuters Institute survey of 949 UK journalists found that the tasks with the highest daily AI adoption are all information-processing tasks: transcription (22% daily), translation (15%), story research (12%), and summarization (11%). The tasks with the lowest adoption — audio/video generation, page layout, bias detection — are production tasks where AI output is less reliable and harder to verify. ([Source](https://reutersinstitute.politics.ox.ac.uk/ai-adoption-uk-journalists-and-their-newsrooms-surveying-applications-approaches-and-attitudes))

The pattern maps directly to what CLI tools are good at. Batch processing, document summarization, data extraction, translation — these are file-in, file-out tasks that benefit from automation and direct filesystem access. Web interfaces force you to upload and download one document at a time. CLI tools let you point at a folder and say "process everything in here."

**Your project environment starts with CLAUDE.md.** Once you have a CLI tool installed, you will set up a project folder and create a context file called CLAUDE.md (or GEMINI.md or AGENTS.md, depending on your tool). This file gets read automatically every time you start a new session in that directory. It tells the AI who you are, what you are working on, and how it should behave. In the video, I show the `/init` command, which lets Claude Code explore your project folder and generate a CLAUDE.md automatically. I also show how you can customize it — I added a silly instruction ("always call me Senator Joe") and it followed it immediately in the next session.

There are two levels of context files: a **global** one that lives at your user level (in a folder called `.claude`) and applies to every session on your machine, and **project-level** ones that live inside each project folder. The global file is where you put style preferences, your skill level, and general instructions. The project-level file is where you put things specific to that project — what it does, what mistakes to avoid, what terminology to use. You will update these files throughout the course.

**GitHub is your Google Drive for code.** Before I learned GitHub, I was using Google Drive to store and sync my code. The result was a nightmare of version control mismatches, overwrites, and accidental deletions. GitHub solved all of that. Even if not every project strictly requires it, we will use GitHub throughout this course as the standard way to store, version, and share your work.

**Resources.** I have put together reference materials at two sites: [mooc.amditis.tech](https://mooc.amditis.tech) (the course companion site) and [tools.amditis.tech](https://tools.amditis.tech) (guides to slash commands, `@` file tagging, and other ways to interact with Claude Code). Both will be updated throughout the course.

By the end of this module, you will be able to:

1. **Install and configure at least one command-line AI tool** (Claude Code, Gemini CLI, or Codex CLI)
2. **Execute basic AI prompts from your terminal** instead of a web browser
3. **Explain the practical differences** between browser-based and terminal-based AI workflows — specifically around file access, persistence, and depth of output
4. **Create a CLAUDE.md context file** using the `/init` command and customize it for your beat
5. **Identify journalism tasks** that benefit from programmatic AI access over a chat window

## What you will do this week

- Watch the Module 1 video
- Complete the required readings on CLI tool installation and use cases
- Work through the hands-on exercise comparing web vs terminal workflows
- Participate in the discussion forum
- Take the module quiz

## Getting started

Before anything else, make sure you have a terminal application or IDE on your computer:

- **Windows:** PowerShell (recommended — used in the video demonstrations), Windows Terminal, or Git Bash
- **Mac:** Terminal (built-in) or iTerm2
- **Linux:** Your default terminal emulator
- **IDE alternative:** VS Code, Cursor, Windsurf, or AntiGravity — if you cannot or prefer not to use the terminal directly

If you have never used the terminal before, do not worry. The exercise walks you through each step. You can also explore the slash commands and configuration options by typing a forward slash inside Claude Code and using your arrow keys to browse — play around with it. One setting I recommend is **explanatory output mode** (accessible via `/usage`), which adds a brief insight at the end of each response explaining why the tool did what it did.

Let's get started.
