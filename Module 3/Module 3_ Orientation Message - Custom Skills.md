# Module 3: Custom skills for Claude Code

## Orientation message

Welcome to Week 3! This week, you'll learn to extend Claude Code with skills designed for journalism work.

Claude Code is useful out of the box, but its real power comes from customization. Skills are instruction files that teach Claude Code how to handle specific tasks—like verifying sources, filing FOIA requests, or analyzing datasets. Instead of explaining your workflow every time, you write it once and invoke it with a slash command.

By the end of this module, you'll have journalism-specific skills installed and know how to use them in your daily work.

---

## Learning objectives

By the end of this week, you will be able to:

1. **Explain what skills are and how they work** — Understand the structure of a SKILL.md file and how Claude Code loads instructions from it.

2. **Install skills from a GitHub repository** — Use the Claude Code CLI or Claude.ai Settings to add new skills to your environment.

3. **Use journalism skills in your workflow** — Apply the source-verification skill to check claims and the foia-requests skill to draft public records requests.

4. **Evaluate when to use a skill vs. a direct prompt** — Recognize situations where a pre-built skill saves time and improves consistency.

---

## This week's work

- **Readings:** Claude Code documentation on custom commands, plus an overview of the instructor's journalism skills repository
- **Exercise:** Install two journalism skills and use source-verification to fact-check a viral social media claim
- **Discussion:** Share your experience customizing AI tools and discuss what skills would help your newsroom
- **Quiz:** 5 questions on skill structure, installation, and usage

---

## A note on workflow

Skills work best when they encode decisions you make repeatedly. The source-verification skill, for example, follows the SIFT method (Stop, Investigate, Find better coverage, Trace claims). You could explain SIFT to Claude Code every time, but a skill means you just type `/source-verification` and the method is applied automatically.

This week is about moving from one-off prompts to reusable workflows.

Let's get started.
