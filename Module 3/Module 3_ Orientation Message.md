# Module 3: Automation, pipelines, and triggered workflows

## Orientation message

Hello, and welcome to Module 3.

Last week you built reusable skills and packaged a plugin — tools that turn your editorial expertise into something a colleague can install with one command. This week is about the next shift: from "I can do this once" to "this runs on its own."

That shift is where non-programmers usually stall. You know how to run something manually in a terminal session. You don't yet know how to hand it off to a machine that runs it at 6 a.m. every Monday without you. That's what Module 3 is for.

The mental model is simpler than it sounds. Any automation — no matter how elaborate — is four things:

- **Input nodes** (where the data comes from)
- **Conveyor belts** (how the data moves through the system)
- **Transformers** (what happens to the data at each stop)
- **Output destinations** (where the result lands)

If you've played Factorio or Satisfactory, you already have this model. If you haven't, picture a conveyor belt in a newsroom — a press release comes in, gets cleaned, gets summarized, gets added to the morning brief. Same pattern, same four parts. We think in systems before we write code, because every script you build this week is going to be some version of that diagram.

### This week's videos

**Video 1 (~12 min)** covers the conceptual side: why non-programmers stall at this step, how to think about a workflow as a system with inputs and outputs before writing any code, why plan mode should be a habit rather than a feature you use once, and three rules that apply to every pipeline you build: stage the pipeline into one job per stage, test small before running big, and never put secrets in code. The analogy: you wouldn't let a reporter spend three days on a draft without reviewing the pitch first. Don't let a CLI tool spend tokens on a script without reviewing the plan.

**Video 2 (~29 min)** is a live demo that picks up the multi-platform social media analysis project from Module 2 and takes it fully automated, end-to-end. You'll see Claude Code's two schedulers — the in-session `cron.create` for running something on a schedule inside a tmux or long-lived session, and the cloud-based `remote trigger` for running something on Anthropic's infrastructure when your machine is asleep. You'll also see a hybrid pipeline pattern, where the cloud does the detection and your local machine does the heavy compute. The output layer is GitHub Actions and GitHub Pages, which turns the whole workflow into a live public dashboard. Along the way we debug real Copilot review feedback, branch protection rules, and an accidental self-triggering pull request loop. That debugging is the second-most-important workflow pattern of the week.

### Core concepts

**Systems thinking.** Before writing any code, draw the workflow as a pipeline. Where does the data come from? How does it move? What happens to it? Where does it end up? Every automation is some version of input → belt → transformer → output. If you can't sketch it, you don't understand it yet.

**Plan mode as a habit.** In Claude Code, type `/plan` before describing the work. In Gemini CLI or Codex, ask for a plan explicitly: "Plan this out step by step before writing any code." Review the plan before any files get written or API calls get made. The goal is not to use plan mode once; the goal is to use it every time.

**Three rules for every pipeline.**

1. **Stage the pipeline.** Break the workflow into separate stages, each with one job — fetch, clean, process, save. When something fails, you know which stage broke and can fix it without touching the others.
2. **Test small.** Run the pipeline on 5 inputs before you run it on 500. Use material you've already seen so you can verify the output. A broken pipeline caught early costs nothing. A broken pipeline caught after 500 API calls costs time and money.
3. **Never put secrets in code.** API keys are passwords. They go in environment variables, never in scripts. If a script has a key in it, that file never goes to GitHub.

**Two schedulers, plus hybrid.** Claude Code can schedule work two ways: `cron.create` runs a job inside a long-lived session (tmux, a second terminal, or a home machine that stays on), and `remote trigger` runs a job on Anthropic's cloud infrastructure even when your laptop is closed. A hybrid pipeline uses both: the cloud detects that new data exists, and your local machine does the heavy processing. Picking the right one is a question about where your data lives and what you actually want the machine to do.

**GitHub Actions as the output layer.** Once you have a working pipeline, GitHub Actions can run it on a schedule for free (within generous limits) and publish the result to a live page via GitHub Pages. That turns a local script into a public dashboard with no hosting to manage. The Mamdani project from Module 2 becomes a public dashboard by the end of Video 2.

### By the end of this week, you will be able to:

1. Sketch any recurring newsroom workflow as a pipeline of inputs, belts, transformers, and outputs before writing a single line of code
2. Use plan mode as a habit on every significant build, not as a feature you remember once
3. Apply the three rules — stage the pipeline, test small, keep secrets out of code — to every pipeline you build
4. Choose between `cron.create`, a cloud `remote trigger`, and a hybrid pipeline depending on where your data lives and when the work needs to run
5. Use GitHub Actions and GitHub Pages to turn a working local pipeline into a scheduled, public, maintained workflow

Let's get started.
