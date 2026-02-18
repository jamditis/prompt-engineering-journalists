# Optional resources

## Module 2: Prompting with files and project context

These materials go deeper into context files and file processing if you want to explore beyond the required readings.

---

### Git fundamentals

**"Git will finally make sense after this"** — LearnThatStack
https://www.youtube.com/watch?v=Ala6PHlYjmw

13-minute video explaining how Git works internally: commits as complete snapshots (not just diffs), branches as lightweight pointers, the three areas where code lives (working directory, staging area, repository), and when to use checkout vs reset vs revert vs rebase. Conceptual rather than command-by-command.

The Module 2 exercise has you directing your CLI tool to create repos, stage files, and commit. Watching this first means you can verify what the tool actually did — not just trust that it worked.

---

**The Odin Project: Introduction to Git**
https://www.theodinproject.com/lessons/foundations-introduction-to-git

Text-based lesson on what Git is and why it exists. Covers the problems version control solves and how Git addresses them. Slower and more thorough than the video above — good if you want to read rather than watch.

---

**The Odin Project: Commit Messages**
https://www.theodinproject.com/lessons/foundations-commit-messages

Short lesson on writing good commit messages: what to include, what to skip, and why the history of your commits matters when something breaks six months later. Directly applicable to the Module 2 exercise, where your CLI tool will be writing commit messages on your behalf.

---

### Advanced CLAUDE.md examples

**Claude Code best practices** by Anthropic
https://docs.anthropic.com/en/docs/claude-code/best-practices

Anthropic's own guide to getting the most out of Claude Code, including tips on writing effective CLAUDE.md files and structuring projects for AI-assisted work.

---

**"My CLAUDE.md"** by various developers (GitHub search)
https://github.com/search?q=filename%3ACLAUDE.md&type=code

Search GitHub for real CLAUDE.md files in public repositories. Seeing how other people structure their context files is one of the fastest ways to improve your own. Look for files from journalism or writing-focused projects.

---

### Context engineering in practice

**"Prompt engineering is dead, long live context engineering"** by Swyx
https://www.latent.space/p/context-engineering

An argument that the important skill isn't writing better prompts — it's giving the AI better context. Relevant framing for why CLAUDE.md files matter more than individual prompt tricks.

---

**"System prompts are a hidden superpower"** by Simon Willison
https://simonwillison.net/tags/systemprompts/

Simon Willison's collected writing on system prompts, including analysis of how major AI products use them. Context files are a form of system prompt that you control.

---

**"My experience with Claude Code 2.0 and how to get better at using coding agents"** by Sankalp
https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/

A practitioner's breakdown of what actually changes when you treat AI tools as agents rather than chat interfaces. Key argument: context engineering — managing what's in the AI's attention window — matters more than chasing model upgrades. Covers CLAUDE.md files, sub-agents, and hooks as ways to reduce cognitive overhead without losing control. Written from a developer perspective but the workflow principles apply directly to what this module teaches.

---

### Newsroom configuration examples

**Journalism skills repository** by Joe Amditis
https://github.com/jamditis/claude-skills-journalism

The instructor's skills repository includes example CLAUDE.md patterns designed for newsroom use. Look at the repository's own CLAUDE.md for an example of how a journalism-focused project structures its context file. This repository is covered in depth in Module 3.

---

### Cross-tool comparison

**"How I use AI tools differently"** by Matt Webb
https://interconnected.org/home/

Matt Webb writes about practical AI workflows from a design perspective. His posts on working with Claude Code and project-level configuration are relevant to understanding how non-engineers use context files.
