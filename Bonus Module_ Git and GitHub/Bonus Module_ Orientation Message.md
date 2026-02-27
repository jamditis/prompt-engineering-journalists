# Bonus Module: Git and GitHub for journalists

## Orientation message

Welcome to the bonus module.

This module exists because a pattern kept coming up in the main course: you'd build something with Claude Code — a script, a project folder, a set of processed documents — and then wonder how to keep track of what changed, go back to a version that worked, or share the project with a colleague. The answer to all three is the same: Git.

Git is a version control system. That phrase sounds technical, but the idea is simple. **Version control means keeping a history of every change you make to a project, so you can always go back.** If you've ever saved a file as `story_final.docx`, then `story_final_v2.docx`, then `story_FINAL_actually_final.docx`, you've been doing manual version control badly. Git does it automatically and correctly.

GitHub is where your Git projects live online. It's a website that stores your project history in the cloud, lets other people see your work, and gives you tools for collaboration. Think of Git as the system running on your computer, and GitHub as the shared workspace on the internet.

**Here's what matters for this course:** you don't need to memorize Git commands. Claude Code knows Git fluently. Your job is to understand the concepts well enough to know what to ask for and when to ask for it. When you tell Claude Code "commit my changes with a message describing what I just did," it runs the right commands. When you say "push this to GitHub so my editor can see it," it handles the details. But you need to understand what "commit" and "push" mean, or you won't know when to say those things.

This module teaches Git the way the rest of the course teaches everything else: **you learn the concepts, Claude Code handles the execution.** The video that inspired this module — "Git Will Finally Make Sense After This" by LearnThatStack — takes the same approach. It explains what's happening inside Git using visual metaphors, not by drilling command syntax. We're building on that here.

By the end of this module, you will be able to:

1. **Explain what Git tracks and why** — commits, branches, and the three areas where your files live
2. **Know when to ask Claude Code to commit, branch, merge, push, or pull** — and why each action matters
3. **Set up a GitHub repository** for a journalism project using Claude Code
4. **Collaborate on a shared project** by understanding pull requests, merge conflicts, and remote repositories

## What you will do this week

- Watch the recommended video and complete the readings on Git fundamentals
- Work through the hands-on exercise: setting up a journalism project with Git and GitHub using Claude Code
- Participate in the discussion forum about version control in newsroom workflows
- Take the module quiz

## Why this matters for journalists

Every project in this course produces files — scripts, processed documents, context files, skill definitions. Without version control, one bad edit can destroy working code with no way back. With Git, every change is recorded. You can always return to the version that worked.

Version control also solves the collaboration problem. If you're working with a colleague on a data project, emailing files back and forth creates conflicts and confusion. GitHub gives you a shared workspace where changes are tracked, attributed, and mergeable.

And if you're building tools for your newsroom using the skills from this course, GitHub is where you publish them. The journalism skills repository referenced throughout this course (github.com/jamditis/claude-skills-journalism) is a Git repository. Every open-source tool you'll encounter is a Git repository. Understanding how they work means you can use them, contribute to them, and build your own.

Let's get started.
