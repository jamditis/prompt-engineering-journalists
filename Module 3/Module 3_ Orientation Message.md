# Module 3: CLI workflows for newsrooms

## Orientation message

Hello, and welcome to Module 3.

Last week you built reusable skills and hooks — tools that encode your editorial expertise into something the AI follows on command. This week you take the next step: describing entire workflows in plain English and having the AI build the automation for you.

The key shift: you stop doing things one at a time and start making them run on their own.

In the 101 course, you may have used no-code tools like Zapier or Make for basic automation. Those work well for simple triggers, but they hit a wall with the messy, unpredictable data journalism produces. CLI tools give you more control. You describe what you want — fetch this, clean it, process it, save the result — and the AI builds the script. You review it, test it on a few real examples, and refine it until the output is right.

### This week's videos

**Video 1 (~12 min)** covers the conceptual framework for automation: thinking in systems (inputs, processing stages, outputs), breaking workflows into modular pipelines where each stage has one job, why you should always plan before building, and the security basics every automated workflow needs. The analogy: you wouldn't let a reporter spend three days on a draft without reviewing the pitch first. Don't let the AI spend tokens on a script without reviewing the plan.

**Video 2 (~29 min)** is a live demo. I pick up the social media analysis project from Module 2 and build automation around it — setting up scheduled monitoring for new content, exploring different scheduling approaches (local schedulers, cloud-based remote triggers, and GitHub Actions), deploying a live dashboard to GitHub Pages, and debugging the failures that come up along the way. You'll see the error debugging loop in action: something breaks, I paste the error back in, the AI diagnoses it, and we fix it. That loop is the most important workflow pattern from this module.

### Core concepts

**Plan mode.** Before asking the AI to build anything, ask it to plan first. In Claude Code, type `/plan`. In Gemini CLI or Codex, ask it explicitly to plan before taking action. Review the approach before any files are written or API calls are made.

**Staged pipelines.** Break workflows into separate stages — fetch, clean, process, save — where each stage has one job. When something fails, you know which stage broke and can fix it without touching the others.

**Test small before running big.** Run your pipeline on 5 articles before running it on 500. Test on material you've already read so you can verify the output. A broken pipeline caught early costs nothing. A broken pipeline caught after 500 API calls costs time and money.

**API key security.** API keys are passwords. They go in environment variables, not in script files. If a script has a key in it, that file never goes to GitHub.

### By the end of this week, you will be able to:

1. Describe a multi-step workflow and have your CLI tool translate it into a working script
2. Test AI-built scripts on a small number of real examples before running them on full workloads
3. Diagnose pipeline failures by pasting errors back into your CLI session and iterating on fixes
4. Apply security practices — API keys in environment variables, scripts reviewed before deployment
5. Apply cost-conscious practices — test on small samples, add rate limiting, build in checkpointing

Let's get started.

