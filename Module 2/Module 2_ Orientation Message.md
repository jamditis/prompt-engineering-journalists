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

## Learning objectives

By the end of this week, you will be able to:

1. **Explain what project context files are** and how they differ across tools (CLAUDE.md, GEMINI.md, AGENTS.md)

2. **Write a context file** with beat-specific instructions, style preferences, and newsroom conventions

3. **Use the deletion test** to decide what belongs in a context file and what doesn't

4. **Process journalism documents** (press releases, transcripts, public records) using a CLI tool

5. **Compare AI outputs** with and without project context to see the practical difference

---

## This week's work

- **Readings:** Documentation on context files for Claude Code, Gemini CLI, and Codex CLI, plus practical articles on context engineering
- **Exercise:** Set up a beat project directory, process journalism documents with and without context, write your own CLAUDE.md
- **Discussion:** Share what you'd put in a context file for your beat, and compare results with and without context
- **Quiz:** 5 questions on context files, the deletion test, and file processing

---

Let's get started.
