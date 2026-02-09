# Module 3: Custom skills for Claude Code

## Orientation message

Welcome to Week 3! This week, you'll learn to extend Claude Code with skills designed for journalism work.

In the 101 course, you learned to write good prompts. You got better at explaining context, setting expectations, and getting useful results. But every time you started a new session, you started from scratch. This week, you learn to save those prompts as permanent, reusable tools. The key insight: write it once, use it forever.

---

## Why skills matter

Most people start by typing the same instructions over and over. You explain the SIFT method to Claude. Then you explain it again the next day. Then you explain it to a colleague's Claude session. Skills break that cycle.

A skill is an instruction file that encodes your domain expertise into something Claude Code can follow on command. The source-verification skill, for example, contains the SIFT method, your newsroom's standards for attribution, and the checks an experienced reporter would run before publishing. You write it once. From then on, you type `/source-verification` and the method is applied automatically.

Think of skills as the journalism equivalent of style guides or reporting checklists — except the AI follows them every time without reminders.

The maturity path looks like this:

**Ad-hoc prompts** → You type instructions each time. Works, but slow and inconsistent.

**Saved prompts** → You copy-paste from a document. Better, but still manual.

**Skills** → Claude Code loads instructions automatically when you invoke a slash command. Consistent and shareable across your team.

**Hooks** → Automated checks that run in the background. No invocation needed.

**Plugins** → Packaged skill libraries you can install from GitHub with a single command.

This week covers skills and hooks. By Module 5, you'll see how these fit into larger agent workflows.

---

## Hooks: your automated editor

Hooks are a special type of skill that runs automatically — you don't invoke them. They act as non-blocking quality checks, like a good editor looking over your shoulder.

Here's what that means in practice: a hook can flag AP style violations, unattributed quotes, or AI-generated filler language in Claude's output. It doesn't stop your work. It flags issues for you to review. This mirrors how editorial review actually works in a newsroom — flag, don't block.

The instructor's journalism skills repository includes 13 hooks that check for common editorial problems. You'll install them alongside the skills this week.

---

## CLAUDE.md as project memory

Beyond individual skills, there's another file worth understanding: `CLAUDE.md`. This file sits in your project directory and encodes tribal knowledge — the stuff that's hard to google. It tells Claude Code about your project's conventions, your newsroom's style preferences, your beat's terminology, and the decisions your team has already made.

A useful test for what belongs in a CLAUDE.md file: if an experienced journalist on your team would already know it, it probably doesn't need to be there. The file should capture the things a new person would need to learn, not the things everyone already knows. We call this the "deletion test" — if you can delete a line and nothing breaks for someone with domain expertise, that line was probably unnecessary.

---

## Learning objectives

By the end of this week, you will be able to:

1. **Explain what skills and hooks are** — Understand the structure of a SKILL.md file, how Claude Code loads instructions from it, and how hooks automate quality checks without blocking your workflow.

2. **Install a skills plugin from GitHub** — Use Claude Code's plugin system to add the journalism skills repository to your environment.

3. **Use journalism skills in your workflow** — Apply the source-verification skill to check claims and the foia-requests skill to draft public records requests.

4. **Recognize the progression from prompts to skills** — Understand when a task you keep repeating should become a reusable skill, and when project-level context belongs in CLAUDE.md instead.

---

## This week's work

- **Readings:** Claude Code documentation on custom commands, plus an overview of the instructor's journalism skills repository
- **Exercise:** Install journalism skills (as a plugin or manually) and use source-verification to fact-check a viral social media claim
- **Discussion:** Share your experience customizing AI tools and discuss what skills would help your newsroom
- **Quiz:** 5 questions on skill structure, installation, and usage

---

Let's get started.
