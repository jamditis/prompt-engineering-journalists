# Module 1: Escaping the chat window

## Orientation message

Welcome to Module 1 of Advanced Prompt Engineering for Journalists.

In the 101 course, you learned how to write effective prompts and get useful results from AI through web interfaces like ChatGPT and Claude.ai. You can now write clear instructions, provide context, and iterate on responses. That skill set carries forward into everything we do here.

The difference is how you deliver those prompts.

Web interfaces are interactive: you type, the AI responds, you type again. Terminal-based AI tools are programmable: you can script them, pipe data through them, chain them with other tools, and schedule them to run on their own. This is the real unlock. You already know how to prompt. Now you will learn to prompt at scale and with automation.

Before you install anything, read the first required reading — Ethan Mollick's guide to AI in 2026. He introduces a framework that will help you understand exactly what this course is about. AI systems have three layers: **models** (the underlying intelligence), **apps** (the interfaces like ChatGPT.com and Claude.ai), and **harnesses** (systems that give models tools, file access, and the ability to act). You have been using apps. This course teaches you to use harnesses. The same model — Claude Opus 4.6, for example — behaves very differently in a chat window than it does running inside Claude Code. The chat window lets it respond. The harness lets it act.

That distinction is why this course exists. And as Mollick puts it: you will stop prompting and start managing. This module is where that shift begins.

**Work where your files live.** In a web interface, you upload files one at a time, then download the results. In the terminal, the AI works directly on your file system. It can read entire directories, process batches of documents, and write results to files — no upload/download cycle. If you have 200 PDFs from a FOIA request, you do not need to drag them into a chat box one by one.

**Show the tool what broke.** When something goes wrong in a web chat, debugging is a translation problem. You see an error, you try to describe it, and the AI tries to reconstruct enough context to help — usually from scratch, in a new session, without knowing what it built before. With a CLI tool, you skip the translation. Copy the error message exactly as it appears and paste it back into the same session. Ask: "What does this mean? How do I fix it?" The tool knows the code it just helped you write. It can read the error in that context and usually tell you exactly where the problem is.

This works for terminal errors, Python tracebacks, API error responses, and browser developer console errors. It also works with screenshots — Claude Code is multimodal, so you can drag in a screenshot of a broken webpage, a chart that looks wrong, or a dev console error you don't recognize. "Why does this look like that?" is a 10-second question instead of a paragraph-long explanation.

Every script has bugs. Every pipeline breaks eventually. This feedback loop — see error, paste error, get fix — is one of the most practical benefits of working in the terminal with a CLI LLM, and you'll use it throughout this course.

**The terminal is just a text interface.** If you have never used the command line, this might feel unfamiliar. But you already work in text every day — articles, notes, emails, messages. The terminal is the same thing: you type text, the computer responds with text. There are no buttons or menus, which means there is nothing to click by accident. What you type is what happens.

By the end of this module, you will be able to:

1. **Install and configure at least one command-line AI tool** (Claude Code, Gemini CLI, Codex, or Aider)
2. **Execute basic AI prompts from your terminal** instead of a web browser
3. **Explain the practical differences** between browser-based and terminal-based AI workflows — specifically around file access, scripting, and automation
4. **Identify three journalism tasks** that benefit from programmatic AI access over a chat window

## What you will do this week

- Complete the required readings on CLI tool installation and use cases
- Work through the hands-on exercise comparing web vs terminal workflows
- Participate in the discussion forum
- Take the module quiz

## Getting started

Before anything else, make sure you have a terminal application on your computer:

- **Mac:** Terminal (built-in) or iTerm2
- **Windows:** Windows Terminal, PowerShell, or Git Bash
- **Linux:** Your default terminal emulator

If you have never used the terminal before, do not worry. The exercise walks you through each step, and you will have typed your first AI prompt from the command line before the week is over.

Let's get started.
