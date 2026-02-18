# Module 2: Prompting with files and project context

## Orientation message

Welcome to Week 2. Last week you installed a command-line AI tool and saw how it differs from web chat. This week, you'll use it for real journalism work — and learn the feature that makes CLI tools worth the setup.

---

## The fresh conversation problem

In the 101 course, you typed everything into a chat window. Every session started blank. If you wanted Claude to follow AP style, you told it. If you wanted it to understand your beat, you explained your beat. If you wanted it to avoid certain phrases, you listed them. Every single time.

That's how web interfaces work. Each conversation is isolated. Your context evaporates when the session ends.

CLI tools solve this. They read your filesystem. They can follow persistent instructions stored in files. You write your preferences once, and the tool picks them up automatically every time you work in that project directory.

This is the single biggest practical difference between web AI and terminal AI: **persistent project context**.

---

## What are context files?

A context file is a plain-text document that tells the AI tool about your project, your standards, and your preferences. Different tools use different filenames, but the concept is the same:

**Claude Code** reads `CLAUDE.md` — a markdown file in your project directory. Everything in this file becomes part of Claude's instructions for that project.

**Gemini CLI** reads `GEMINI.md` — same concept, different filename.

**OpenAI Codex** reads `AGENTS.md` — again, same idea.

When you open any of these tools in a directory that contains the right file, the tool reads it before you type a single word. Your first prompt already has context.

---

## What goes in a context file?

Think about what you'd tell a new reporter joining your beat. Not the obvious stuff everyone in journalism knows — the specific things about *your* coverage area, *your* newsroom's conventions, and *your* preferences.

Good context file content:

- **Beat knowledge:** "I cover Greenfield city government. The current mayor is Diana Torres (D), elected 2023. City council has 7 members."
- **Style preferences:** "Use AP style. Don't use Oxford commas. Refer to the organization as 'the Center' on second reference."
- **Source standards:** "Always attribute claims to named sources. Flag any unverified claims."
- **Terminology:** "In Greenfield, the budget process is called the 'appropriations cycle,' not 'budget season.'"
- **Things to avoid:** "Never use the phrase 'according to sources.' Always name the source or explain why they're anonymous."

Bad context file content (too generic):

- "Be helpful and accurate" (the tool already tries to do this)
- "Write clearly" (too vague to change behavior)
- "Follow journalism ethics" (which ethics? be specific)

---

## The deletion test

Here's a useful way to decide what belongs in your context file: **if you can delete a line and nothing changes for someone who knows your beat, that line was unnecessary.**

An experienced city hall reporter wouldn't need to be told "verify facts before publishing." But they might need to know "the city uses 'resolution' for binding votes and 'ordinance' for legislation — don't confuse these." The first is generic knowledge. The second is beat-specific context that changes the AI's output.

Put another way: context files should contain the things that make your project *different* from every other project, not the things that are true of all journalism.

---

## Your CLAUDE.md will grow

The context file you write this week is a starting point. Come back to it.

Every time the AI gets something wrong for your beat — wrong terminology, misattributed claims, a source it handled incorrectly — you have an opportunity: add a rule that prevents that mistake next time. This is the self-improvement loop:

1. The AI gets something wrong
2. You correct it
3. You open your CLAUDE.md and add a rule
4. The AI doesn't make that mistake again in this project

The most useful context files aren't the ones written carefully from scratch on day one. They're the ones that have been corrected repeatedly. Each correction makes the file stronger.

Keep a "Hard-won lessons" section at the bottom of your CLAUDE.md for these. Each lesson should have a name, a one-sentence note on what happened, and the rule that came out of it. Here's a journalism-specific example:

```
## Hard-won lessons

### Never trust vote counts in press releases
The AI summarized a council vote as "unanimous" based on the mayor's press release,
which described the project as "unanimously supported by the community" — not the vote
itself. The actual vote was 5-2. Rule: always pull vote counts from official meeting
minutes or the clerk's certified record.
```

You won't have anything to put in this section after Week 2. That's fine — leave the header there as a placeholder. By the end of the course, you should have a few entries.

---

## Working with files

The other major feature of CLI tools is file access. In a web chat, you upload files one at a time through a browser. In the terminal, the AI can read any file in your project directory — and you can point it at specific documents.

This changes how you work with press releases, meeting minutes, interview transcripts, and other journalism documents. Instead of copy-pasting text into a chat window, you tell the tool to read the file directly:

```
claude "Read press-release.md and identify the key claims that need verification"
```

```
gemini "Summarize council-minutes.md. Focus on budget items over $100,000"
```

The AI sees the full document with its formatting intact. No truncation from copy-paste. No formatting lost in a browser upload.

---

## Version control and GitHub

Your context file is useful. But right now it only exists on your computer. What happens when you want to share it with a colleague? What happens when you want to use it on a different machine? What happens when you change something and want to go back to the previous version?

This is where Git and GitHub come in.

**Git** is a version control system. It tracks changes to your files over time. Every time you save a snapshot (called a "commit"), Git records what changed, when, and a message describing why. You can go back to any previous version.

**GitHub** is a website where you can store and share Git repositories. A repository (or "repo") is a project folder tracked by Git. When you push a repo to GitHub, other people can download it, use it, and contribute to it.

Why does this matter for this course?

First, your CLAUDE.md is infrastructure. Not a note to yourself. Not a draft that lives on your desktop. Infrastructure. It gets committed to Git, versioned alongside your project files, and deployed with everything else. When you push your project to GitHub, your CLAUDE.md goes with it. When a colleague clones your repo, your context comes with it. When you pull the project on a new machine, your accumulated beat knowledge is already there. Treat it accordingly: write it carefully, commit it consistently, and update it when things change.

Second, the tools themselves live on GitHub. Claude Code, Gemini CLI, Codex — their documentation, source code, and plugins are all hosted in GitHub repositories. In Module 3, you'll install journalism skills by cloning a repo from GitHub. Understanding what a repo is and how `git clone` works removes a barrier before you get there.

Third, GitHub is how journalists share reusable tools. The skills library you'll use in Module 3, the workflow scripts in Module 4, the MCP configurations in Module 5 — they're all shared through GitHub repos. Knowing the basics means you can find, download, and use tools other journalists have built.

You don't need to become a Git expert. You don't even need to memorize Git commands — your CLI tool can run them for you. What you need is an understanding of the concepts: what a repository is, what a commit does, what cloning means, and why version control matters. When you ask Claude Code to "initialize a Git repo and commit these files," it handles the details. But you need to know *what you're asking for* and *why*. The exercise this week walks you through it.

---

## From prompt engineering to context engineering

You enrolled in a course called "Advanced Prompt Engineering." By the end of this week, you'll understand why "context engineering" is a more accurate name for what you're actually learning.

Prompt engineering is about crafting better individual requests — writing clearer instructions, adding useful examples, specifying tone and format. That skill is real and it carries into everything you do here.

But the more powerful move is this one: you stop rewriting the same context every prompt, and you start building an environment. Instead of telling the AI your beat in each message, you write it once in CLAUDE.md and it's there automatically. Instead of including your style rules in every request, they're part of the project. Instead of specifying how to handle anonymous sources each time, you define that once and it follows you.

That's context engineering. You're not optimizing a single prompt — you're designing the environment in which every future conversation happens. Your CLAUDE.md, your skills, your hooks, your project structure: these are the context you're engineering. Every module in this course adds another layer to that environment.

The course title won't change. But keep this reframe in mind as you work through the material. When you're writing your CLAUDE.md this week, you're not doing prompt work. You're doing infrastructure work.

---

## Learning objectives

By the end of this week, you will be able to:

1. **Explain what project context files are** and how they differ across tools (CLAUDE.md, GEMINI.md, AGENTS.md)

2. **Write a context file** with beat-specific instructions, style preferences, and newsroom conventions

3. **Use the deletion test** to decide what belongs in a context file and what doesn't

4. **Process journalism documents** (press releases, transcripts, public records) using a CLI tool

5. **Compare AI outputs** with and without project context to see the practical difference

6. **Understand Git and GitHub** — what repositories, commits, and cloning are, and how context files, skills, and project configurations are stored and shared through GitHub

---

## This week's work

- **Readings:** Documentation on context files for Claude Code, Gemini CLI, and Codex CLI, plus articles on context engineering and Git basics
- **Exercise:** Set up a beat project directory, initialize it as a Git repo, process journalism documents with and without context, write your own CLAUDE.md
- **Discussion:** Share what you'd put in a context file for your beat, and compare results with and without context
- **Quiz:** 5 questions on context files, the deletion test, file processing, and Git basics

---

Let's get started.
