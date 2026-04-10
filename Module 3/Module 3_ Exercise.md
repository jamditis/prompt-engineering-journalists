# Module 3: Automation, pipelines, and triggered workflows

## Exercise: Stage and schedule a real automated pipeline

In this exercise you'll pick a recurring task from your own work, describe it to a CLI tool as a pipeline, run it end-to-end once on real data, and then schedule it so it runs without you. The goal is not a novel pipeline — it's a small, boring, correct one that actually runs on a schedule and produces output you'd show a colleague.

You will not write shell code. You'll describe the workflow to Claude Code (or Gemini CLI, or Codex CLI) in plain English, review what it plans to build, let it build it, test it on a small batch, and then hand it off to a scheduler. You stay in the driver's seat — you sketch the system, you approve the plan, you verify the output, you decide when it runs. The CLI tool does the typing.

---

## Prerequisites

Before starting, make sure you have:

- **A CLI tool installed and running.** Claude Code, Gemini CLI, or Codex CLI. If you haven't done this yet, return to Module 1.
- **A project folder for this module with its own CLAUDE.md (or GEMINI.md / AGENTS.md).** You set one of these up in Module 1. You can reuse it or create a new one for this week's work.
- **An API key with available credits** for whichever CLI tool you're using.
- **A GitHub account.** You will need one if you choose to use GitHub Actions as the scheduler — which is a good choice for this exercise even if you haven't used GitHub before. If you're new to Git and GitHub, the course's bonus module walks through the basics and is a good companion for this exercise.

---

## Part 1: Pick the pipeline

Pick exactly one of the four workflows below. If your actual beat has a recurring task that looks like any of them, use your real task instead — the goal is a pipeline you'd actually run, not a demo.

1. **City council agenda prep sheet.** A pipeline that fetches the next meeting's agenda from your city's or county's public website, pulls out the items most likely to matter to readers (budgets, rezonings, police oversight, votes that weren't in the consent calendar), and produces a short prep doc with links and a couple of lines of context per item.
2. **Web scraping pipeline.** A pipeline that watches a public website for new items — press releases from a state agency, a court docket, an RFP board, a social media account — and produces a running log of what's new, with the date, the source URL, and a short summary per item.
3. **Batch document processing.** A pipeline that takes a folder of documents (PDFs, press releases, transcripts, public-records responses) and runs a consistent transformation on all of them — classifying them, extracting names and dates, pulling quotes, flagging specific phrases, or summarizing them — into a single output file you can search and sort.
4. **Weekly content roundup.** A pipeline that collects the most important items from several sources (your own newsroom's CMS, an RSS feed, a Google Alerts feed, a newsletter archive) over the last seven days and assembles a draft newsletter, morning brief, or end-of-week recap that a human editor can polish before sending.

Write down — in one or two sentences — which one you picked, where the input is coming from, and what the output should look like. You'll hand this to Claude Code in Part 2.

## Part 2: Describe the pipeline and review the plan

### Step 1: Launch your CLI tool in your module project folder

Open a terminal, change into your project folder, and launch Claude Code.

```terminal
cd ~/your-module-3-folder
claude
```

(Use `gemini` or `codex` instead of `claude` if you're working with those tools.)

### Step 2: Turn on plan mode and describe the workflow as a system

Before Claude builds anything, you want it to plan. In Claude Code, turn on plan mode by typing `/plan` inside the session. In Gemini CLI or Codex, add the instruction explicitly at the top of your first message.

Then paste a prompt like this — substituting the workflow you picked in Part 1:

```claude code
/plan

I want to stage an automated pipeline for my beat and then schedule it so it runs without me.

The workflow: [one or two sentences describing the task you picked in Part 1 — what comes in, what happens to it, what comes out]

Before writing any code, sketch this as a pipeline: input nodes, conveyor belts, transformers, output destinations. Tell me which steps are "stages" in the one-job-per-stage sense. Then propose a plan for building it — what files you'd create, what tools you'd use, how you'd handle the API key, how you'd handle rate limiting if we hit a list of items. Don't build anything yet. I want to review the plan first.
```

Claude will present the pipeline as a system (input → belt → transformer → output) and then propose a plan with the stages, tools, and security considerations. **Read the plan before approving it.** Specifically check:

- Are the stages separated — one job per stage, so failures are localized?
- Is the API key handling mentioned, and is it going to use an environment variable (not a hardcoded string)?
- Is the output going somewhere you can actually inspect — a file, a folder, a markdown doc — not just printed to the terminal and lost?
- Does the plan include a small-batch test mode, so you can run it on 3-5 inputs before running it on the full batch?

If anything looks wrong, say so before approving. This is the whole point of plan mode — redirect the plan now, not after the pipeline is built.

### Step 3: Let Claude build it, then ask Claude to explain what it built

Once you approve the plan, Claude will build the pipeline. When it's done, ask:

```claude code
Walk me through what you built, stage by stage. For each stage, tell me what the input is, what happens to the data, and what the output is. Then tell me where the API key is read from and how to set it. Then tell me how I'd run this on 3 inputs as a small-batch test before running it on the full batch.
```

The answer you get is your mental model of the pipeline. If any part of the walkthrough is surprising to you, stop and ask follow-ups until you understand it. You're going to schedule this thing to run without you — you need to actually know what it does.

---

## Part 3: Run it once end-to-end on real data

### Step 4: Do the small-batch test

Ask Claude to run the pipeline on a small number of real inputs first:

```claude code
Run the pipeline on 3 real inputs — the first 3 items from my actual source, not test data. Show me the output for each one. If any stage fails, show me the exact error and propose a fix before touching anything else.
```

Review the three outputs. For each one, ask yourself:

- Does the output look right — would you actually send it to a colleague or use it in your reporting?
- Is anything missing that a human would include?
- Is anything there that shouldn't be?

If the output is wrong in the same way across all three inputs, that's a prompt or extraction problem — describe what you want instead and ask Claude to fix the relevant stage. If only one of the three is wrong, that's either a bad input or an edge case — look at the input before changing the pipeline.

### Step 5: Iterate until the output is something you'd actually use

This is the editorial-judgment step and it's the most important one in the exercise. A pipeline that runs on a schedule and produces output nobody trusts is worse than one that doesn't run at all. Keep iterating until the small-batch output passes your own "would I show this to an editor" check.

When you're describing a change to Claude, be specific. "Make the summaries better" produces nothing useful. "The summaries lead with the organization's name — rewrite the prompt so they lead with the newsworthy fact instead" produces a targeted fix. The specificity is where your journalism expertise enters the pipeline.

### Step 6: Run it on the full batch

Once the small-batch output is right, run the pipeline on the full list. Ask Claude to keep the small-batch test as a separate mode you can re-run anytime — you'll want it later for debugging.

---

## Part 4: Schedule it

### Step 7: Pick a scheduler

Ask Claude to help you choose between the three options from Video 2:

```claude code
I want to schedule this pipeline to run without me. My machine situation is: [describe — laptop that sleeps, desktop that stays on, or nothing always on]. The pipeline needs to run [describe — daily at 6am, every Monday morning, etc]. Walk me through whether cron.create, a cloud remote trigger, or a GitHub Actions scheduled job is the right fit, and why. Then pick one and recommend it.
```

Three valid answers:

- **`cron.create`** inside a long-lived Claude Code session on a machine that stays on
- **A cloud `remote trigger`** that runs on Anthropic's infrastructure even when your laptop is closed
- **A GitHub Actions scheduled job** on a cron, which is the best fit for most people doing this exercise for the first time — it's free within generous limits, it doesn't need any machine to be on, and it gives you a log you can inspect after the fact

If you don't have a strong reason to pick the other two, use GitHub Actions.

### Step 8: Set up the scheduler

Describe the schedule you want and let Claude set it up:

```claude code
Set up the pipeline to run on [the schedule you picked] using [the scheduler you picked]. Walk me through each setup step — including any secrets I need to wire up, any permissions I need to grant, and anything I need to click on a website. Don't assume anything. I'm doing this for the first time.
```

For GitHub Actions, this will involve creating a `.github/workflows/` YAML file, adding the pipeline's API key to the repo's encrypted secrets, and enabling write permissions for the Action if the pipeline needs to commit its output back to the repo.

### Step 9: Verify it actually fires

Don't just trust that the scheduler is wired up correctly. Trigger one run manually to confirm the pipeline runs end-to-end in the scheduled environment. For GitHub Actions, the `workflow_dispatch` trigger lets you run a scheduled workflow by hand from the Actions tab in your repo. For `cron.create`, run it once in the session and inspect the log. For a cloud remote trigger, fire one test invocation and read the result.

If the manual run succeeds and the output looks right, you're done. The scheduler will fire on its own from here.

---

## Troubleshooting

**Plan mode skipped.** If you caught yourself letting Claude build something without a plan review, that's the single most common mistake this week. Stop, revert, and re-run with `/plan`. Making it a habit is the whole point.

**The API key is in the script.** Ask Claude to move it to an environment variable (for local) or to the repo's secret store (for GitHub Actions), and rotate the key immediately if the repo is public or shared.

**GitHub Action fails with a permissions error.** Two common causes: the Action doesn't have write permissions (fix in the repo settings under Actions → General → Workflow permissions → Read and write), or the pipeline is trying to read a secret that isn't wired up (fix in Settings → Secrets and variables → Actions → New repository secret).

**Pipeline works locally but fails in the scheduled environment.** Usually a path problem or a missing dependency. Paste the exact error from the Action log (or the cron log) back into your Claude Code session. Don't paraphrase — Claude already knows the pipeline it built, so with the real error text it can usually point at the fix on the first try.

**Self-triggering PR loop.** If the pipeline pushes its output back to the repo and that push triggers a new Action run, you've built a loop. Ask Claude to add a path filter or a commit-author filter so commits from the Action itself don't re-trigger the workflow. This is the same bug the live demo in Video 2 hits, so if you're debugging it, you are not alone.

---

## Submit your work

Post in the exercise forum:

1. A one-line description of the pipeline you built (which of the four workflows, what the inputs and outputs are)
2. A screenshot of the scheduler firing successfully — a GitHub Actions log page, a cloud trigger log, or a `cron.create` confirmation
3. One example of the output the pipeline produced on real data (paste the text, link to a published page, or attach a file)
4. The single most useful iteration you made during Part 3 — what the first output looked like, what you told Claude to fix it, and how the output changed
