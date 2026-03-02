# Module 3: Custom skills for Claude Code

## Orientation message

Welcome to Week 3! This week, you'll learn to extend Claude Code with skills designed for journalism work.

In the 101 course, you learned to write good prompts. You got better at explaining context, setting expectations, and getting useful results. But every time you started a new session, you started from scratch. This week, you learn to save those prompts as permanent, reusable tools. The key insight: write it once, use it forever.

---

## Why skills matter

Most people start by typing the same instructions over and over. You explain the SIFT method to Claude. Then you explain it again the next day. Then you explain it to a colleague's Claude session. Skills break that cycle.

A skill is an instruction file that encodes your domain expertise into something Claude Code can follow on command. The source-verification skill, for example, contains the SIFT method, your newsroom's standards for attribution, and the checks an experienced reporter would run before publishing. You write it once. From then on, you type `/source-verification` and the method is applied automatically.

This matters because the Reuters Institute's 2025 survey found that 84% of UK journalists have never used AI for fact-checking or verification. That's not because AI can't help — it's because doing it well requires encoding specific methods and standards that are different for every beat and every newsroom. A generic chat prompt doesn't know the SIFT method or your source standards. A skill does.

Think of skills as the journalism equivalent of style guides or reporting checklists — except the AI follows them every time without reminders.

The maturity path looks like this:

**Ad-hoc prompts** → You type instructions each time. Works, but slow and inconsistent.

**Saved prompts** → You copy-paste from a document. Better, but still manual.

**Skills** → Claude Code loads instructions automatically when you invoke a slash command. Consistent and shareable across your team.

**Hooks** → Automated checks that run in the background. No invocation needed.

**Plugins** → Packaged skill libraries you can install from GitHub with a single command. A plugin can contain any combination of skills, hooks, and commands — all registered at once on installation.

**Concrete example: Superpowers (obra/superpowers)**

Superpowers is a third-party plugin that completely rewires how a coding agent approaches a project. Instead of jumping into writing code, it fires a brainstorming skill first — asking clarifying questions, building a spec you review, then generating a step-by-step implementation plan. Other skills enforce test-driven development, review completed tasks, and manage the handoff when a branch is ready to merge. All of this fires automatically. You don't invoke each skill individually — the plugin handles when each one runs.

Superpowers isn't journalism-specific, but it illustrates what's possible at the plugin level: a complete, opinionated workflow installed in a single command, where someone else has done the hard work of deciding what the agent should do at each stage. The journalism skills plugin you'll install this week works on the same model, just built for newsroom workflows instead of software development.

This week covers skills and hooks. By Module 5, you'll see how these fit into larger agent workflows.

---

## Hooks: your automated editor

Hooks are a special type of skill that runs automatically — you don't invoke them. They fire at specific points in your workflow without any input from you.

There are two kinds, and the distinction matters.

**Notify hooks** run in the background and flag issues without stopping your work. Think of them as an automated second reader: the work continues, but problems get marked for your review. A notify hook might flag an unattributed quote, highlight AI-generated filler language, or note that a specific claim hasn't been verified. You review the flags. You decide what to fix.

**Stop hooks** pause execution and ask for confirmation before proceeding. These exist for one-way doors — actions that are difficult or impossible to undo. Before Claude Code deletes a batch of files, pushes code to a repository, or sends output somewhere external, a stop hook can pause and say: "This is about to do X. Do you want to proceed?" You say yes or no.

The distinction matters because not all mistakes are equal. A flagged style violation is recoverable. A bulk delete or an accidental publish often isn't. Stop hooks create a deliberate checkpoint before the point of no return.

The journalism parallel is direct: editorial workflows don't just catch errors, they build in deliberate pause points before irreversible actions. A stop hook is the automated version of "does a human need to see this before it goes out?"

Practically: for output review, use notify hooks. For any action that writes to external systems, deletes files, or publishes anything, consider a stop hook. The rule is the same one newsrooms already know — the higher the stakes of a mistake, the more friction you want in the process.

**Concrete example: the one-way-door-check hook**

The journalism skills repository includes a hook called `one-way-door-check`. It intercepts every attempt by Claude Code to create a new file and checks whether that file represents a decision that's hard to reverse — a database schema, an infrastructure config, an API contract, a CI/CD pipeline. If it detects one of these patterns, it blocks the write and requires Claude to present you with at least two alternatives and explain what the decision commits you to before you proceed. Files that are easy to change later — UI components, documentation, utility functions — pass through silently.

You don't have to remember to invoke it. It fires automatically on every new file creation. The hook script is readable — open it and you can see exactly what it checks and why. That transparency is intentional: you should understand what's running in the background on your behalf.

The instructor's journalism skills repository includes 13 hooks that check for common editorial problems. You'll install them alongside the skills this week.

---

## Skills vs. commands: the reliability question

Skills and commands look similar on the surface — both are files that shape Claude's behavior, both are invoked with a slash — but they work differently in ways that matter.

A **skill** contains domain knowledge Claude consults and applies using its judgment. When you invoke `/source-verification`, Claude reads the SKILL.md and decides how to apply the SIFT method to your specific situation. This is the right tool when the task requires judgment: evaluating a specific claim, analyzing a particular document, drafting a story with context-specific nuances.

A **command** is a deterministic trigger. When you invoke it, the defined workflow runs exactly as written — the same steps, the same sequence, every time. No interpretation. This is the right tool when consistency matters more than flexibility: a pre-publication checklist that should always run the same checks, a batch process that should always follow the same pipeline, a report format that should always use the same structure.

The journalism analogy: a skill is a style guide. A command is a mandatory pre-publication checklist. The style guide is reference material — reporters consult it when they think something needs checking, and they apply it with judgment. The checklist is a fixed sequence — it runs in the same order before every story, no skips, no interpretation. Both are valuable. They solve different problems.

The rule of thumb: when something needs to happen reliably and the same way every time, build a command. When something needs judgment and contextual interpretation, write a skill. The mistake is treating everything as a skill when some workflows need the determinism of a command.

## Capture failures while they're fresh

Fixing a mistake is not the same as learning from it. The correction that stays only in your head disappears when the session ends.

When an AI tool fails — generates a hallucinated quote, ignores a clear instruction, selects the wrong approach for a task — that failure has two forms. The immediate form: you correct it and move on. The lasting form: you captured the exact prompt that triggered it, what category of failure it was, and what rule should prevent it next time.

Most people take only the first form. The correction disappears into the session history. The next session makes the same mistake.

The practice: when something goes wrong, stop and capture it in a structured log entry before the session context evaporates. What exactly did you ask for? What category of failure was it — hallucination, instruction ignored, context lost, incomplete execution? What's your hypothesis for why it happened? What rule in your CLAUDE.md would prevent it next time?

The flip side: when something works unusually well — a prompt that produced exactly what you needed, a phrasing that landed cleanly — log that too. What made it effective? Can it be templated into a skill?

Over time, this log becomes more valuable than the individual corrections. It's the difference between fixing a source error once and developing a better source-evaluation practice.

In the exercise this week, you'll create `/log_error` and `/log_success` commands to formalize this habit.

---

## From context files to skills

Last week you wrote a CLAUDE.md file to give the AI persistent context about your beat. That file changed how the AI responds to *every* prompt in your project. This week, you'll build on that with skills and hooks — reusable tools that you trigger on demand for specific tasks.

If CLAUDE.md is the AI reading your newsroom's style guide before starting work, a skill is the AI following a specific reporting checklist when you tell it to.

Before trusting a new skill on live work, test it on material you've already covered — a press release you fact-checked last month, a council vote you looked up yourself. Compare what the skill catches against what you found. If it misses something you caught, that's an instruction to add. If it flags something that wasn't a problem, that's an instruction to cut. This is the same instinct reporters bring to new sources: verify something you can already check before relying on it for something you can't.

---

## Learning objectives

By the end of this week, you will be able to:

1. **Explain what skills and hooks are** — Understand the structure of a SKILL.md file, how Claude Code loads instructions from it, and the difference between notify hooks (flag issues, keep going) and stop hooks (pause before irreversible actions).

2. **Install a skills plugin from GitHub** — Use Claude Code's plugin system to add the journalism skills repository to your environment.

3. **Use journalism skills in your workflow** — Apply the source-verification skill to check claims and explore how hooks run automatically in the background.

4. **Write a simple custom skill** — Encode a task you do repeatedly into a SKILL.md file, test it, and apply the deletion test to its instructions.

5. **Recognize the progression from prompts to skills** — Understand when a task you keep repeating should become a reusable skill, and when project-level context belongs in CLAUDE.md instead.

---

## This week's work

- **Readings:** Claude Code documentation on custom commands, plus an overview of the instructor's journalism skills repository
- **Exercise:** Install journalism skills (as a plugin or manually) and use source-verification to fact-check a viral social media claim
- **Discussion:** Share your experience customizing AI tools and discuss what skills would help your newsroom
- **Quiz:** 5 questions on skill structure, installation, and usage

---

Let's get started.
