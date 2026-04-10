# Module 3: Automation, pipelines, and triggered workflows

## Quiz

5 multiple choice questions.

---

### Question 1

Why should you use plan mode before asking your CLI tool to build a pipeline?

A) Plan mode makes the AI write better code

B) It lets you review the approach before any files are written or API calls are made

C) Plan mode is required — the tool won't build anything without it

D) It automatically tests the pipeline before running it

**Correct answer:** B

**Explanation:** Plan mode shows you what the AI intends to build before it starts. Catching a misunderstanding at the planning stage costs 30 seconds. Catching the same problem after a failed scheduled run that fires at 3 a.m. costs time, money, and — worse — gives you a pipeline you can't trust. Plan mode should be a habit on every significant build, not a feature you remember once.

---

### Question 2

Where should API keys be stored when building automation scripts?

A) In the script file, near the top where they're easy to find

B) In your CLAUDE.md file so the AI can access them every session

C) In environment variables on your machine, and in GitHub's encrypted secret store for scheduled Actions — never in source files or committed to a repo

D) In a shared Google Doc so your team can access them

**Correct answer:** C

**Explanation:** API keys are passwords. Storing them in a script file means anyone who sees the code — including anyone who finds it on GitHub — has access to your account. Environment variables keep secrets separate from code on your own machine, and GitHub Actions has its own encrypted secret store for the same purpose. If a key does end up in a commit, rotate it immediately. This is one of the three rules of the week for a reason.

---

### Question 3

You've built a pipeline that processes news articles. Before running it on your full list of 200 URLs, what should you do first?

A) Run it on the full list overnight so it finishes by morning

B) Test it on 3-5 articles you've already read, so you can verify the output

C) Ask the AI to review its own output for accuracy

D) Add a disclaimer to the output noting it was AI-generated

**Correct answer:** B

**Explanation:** Testing on a small batch of known material lets you catch problems before they scale. If you test on articles you've already read, you can tell whether a bad summary reflects a pipeline problem or just a hard-to-summarize article. Running 200 articles through a broken pipeline wastes API credits and produces output you can't trust. "Test small" is the second of the three rules of the week.

---

### Question 4

You have a daily beat-monitoring pipeline that needs to run at 6 a.m. every weekday. Your laptop is closed at 6 a.m. Which scheduler is the right fit?

A) Claude Code's in-session `cron.create`, because it's built into the CLI

B) A cloud-based `remote trigger` (or a GitHub Actions scheduled job), because it runs on someone else's infrastructure even when your machine is asleep

C) A desktop cron job on your laptop

D) It doesn't matter — any scheduler will work regardless of whether your machine is on

**Correct answer:** B

**Explanation:** `cron.create` is great for pipelines that run inside a long-lived session on a machine that stays on — a home desktop, an always-on mini PC, a server. It disappears the moment that session ends. If your laptop is closed at the scheduled time, `cron.create` will never fire. A cloud `remote trigger` or a GitHub Actions cron job runs on infrastructure that's always awake, which is why the module walks through both as options for scheduled work. A hybrid pipeline can combine them — cloud detects, local processes — when you need it.

---

### Question 5

What does "thinking in systems" mean in the context of this module?

A) Memorizing which shell commands chain together to build a pipeline

B) Sketching any automation as input nodes → conveyor belts → transformers → output destinations before writing any code

C) Using the most advanced AI model available for every step

D) Always choosing the scheduler with the lowest latency

**Correct answer:** B

**Explanation:** Before writing code, describe the automation as a system: where does the data come from (input nodes), how does it move (conveyor belts), what happens to it along the way (transformers), where does the result land (output destinations)? Every pipeline in this module is some version of that diagram. If you can't sketch it, you don't understand it yet — and if you can't understand it, asking a CLI tool to build it from plain English is going to produce something you can't maintain.

---
