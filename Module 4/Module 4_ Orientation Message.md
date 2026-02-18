# Module 4: CLI workflows for newsrooms

## Orientation message

Hello, and welcome to Module 4.

In the 101 course, you learned to automate tasks with no-code tools like Zapier and Make. Those tools work well for straightforward workflows: trigger an event, move some data, send a notification. But if you've ever hit the wall where your Zap can't handle a weird edge case, or where you need to process 500 documents and the no-code tool charges per operation, you've felt the limits of that approach.

CLI LLMs are the next level. They give you more control, more flexibility, and the ability to handle the messy, unpredictable data that journalism actually produces. This week, you'll describe workflows in plain English and have your CLI LLM translate them into working scripts. You won't write shell code — you'll describe what you want to automate, Claude Code will write the implementation, and you'll test and refine the result. By the end, you'll have a working pipeline that fetches content, processes it with AI, and outputs formatted results.

### Describe the workflow, let the LLM build it

The key shift in Module 4: instead of asking Claude Code to help you with one document, you describe an entire workflow — a sequence of steps from input to output — and it builds the script that automates it.

"Fetch this URL, strip out the ads, summarize it in three bullets, save it as a markdown file with today's date in the filename" — that's a workflow description. Claude Code turns it into a reusable script. You review the script, test it on a few real examples, and refine it until the output is what you want. Then you can run it on 50 documents, schedule it to run automatically, or share it with a colleague.

The right way to build a pipeline: separate stages, each with a clear input and output. Fetch. Clean. Analyze. Format. When something breaks, you know which stage failed — and you paste the error back into your session to get a diagnosis. Because each stage is independent, you can fix one without touching the others.

### Plan before you build

Before you ask your CLI LLM to build anything — a script, a pipeline, a configuration file — ask it to plan first. See the approach before any file is written or any command is run.

Most CLI tools have a built-in mode for this:

- **Claude Code:** Type `/plan` before describing your task. Claude enters plan mode: it explores the request, thinks through the approach, and presents a plan for your review. Nothing is executed until you approve.
- **Gemini CLI:** There's no single `/plan` command, but you get the same result by being explicit: "Before doing anything, plan this out step by step and wait for my approval before taking any action."
- **Codex CLI:** Ask it to plan explicitly: "Plan this out step by step and wait for my approval before writing any code." You can also start with `codex --approval-mode suggest`, which shows proposed changes before applying them.

The underlying habit is the same regardless of tool: **describe what you want, review what it plans to do, then authorize it to proceed.**

This matters more as tasks get larger. For a one-sentence summary, it doesn't matter much if the LLM gets it wrong on the first try — you just try again. For a pipeline that makes real API calls, writes files, and costs money to run, you want to see the approach before it starts. A misunderstood requirement caught at the planning stage costs you 30 seconds. The same misunderstanding caught after a failed 50-document batch run costs you time and money.

Think of it the same way you'd think about editing: you'd review a reporter's outline before they spend three days writing the story. Plan mode is the outline stage for LLM-built automation. It's also how you catch scope creep — an LLM given a loosely described task will sometimes build something bigger than you asked for. Reviewing the plan tells you that before it happens.

The plan step is also where you refine your description. You might describe a workflow and see the LLM propose a more complex approach than you need, or a simpler one that misses a step. That's a better moment to course-correct than after it's built.

### Principles for building real pipelines

These aren't abstract best practices. They come from building and running actual data pipelines in newsrooms.

**Test small before running big.** Real API calls cost money. Before you process 500 documents through a paid API, test on 5. Better yet, validate your inputs with a free local model (like Ollama) before sending anything to a paid service. The principle: use cheap tools to catch problems before running expensive operations.

**Design for failure.** Long operations fail. Networks drop, APIs rate-limit, your laptop goes to sleep. Build pipelines that save their progress to disk — a simple log of which files have been processed — so they can restart from where they left off instead of starting over from scratch.

**Respect rate limits.** APIs have rate limits for a reason. Building pauses into your scripts (`sleep 2` between API calls) isn't a workaround — it's responsible engineering that keeps your API access alive. A script that blasts 1,000 requests in ten seconds will get you throttled or banned. A script that spaces them out will finish the job reliably.

### Learning objectives

By the end of this module, you will be able to:

1. **Describe a multi-step journalism workflow** and have your CLI LLM translate it into a working, reusable script — without writing code yourself.

2. **Test AI-built scripts** on a small number of real examples before running them on full workloads, and understand why this step prevents wasted API costs and bad output.

3. **Diagnose pipeline failures** by pasting errors back into your CLI session and iterating on fixes — the core debugging loop you'll use throughout this course and beyond.

4. **Apply security practices** — API keys in environment variables, scripts reviewed before deployment, sensitive documents handled appropriately.

5. **Apply cost-conscious practices** — test on small samples, add rate limiting, build in checkpointing so long jobs can resume instead of restart.

### This week's activities

- **Videos:** Watch the two video lectures on CLI basics and building pipelines
- **Readings:** Complete the required readings on shell fundamentals and automation patterns
- **Exercise:** Build a working "clip article → summarize → format" pipeline
- **Discussion:** Share your newsroom automation ideas in the forum
- **Quiz:** Complete the 5-question quiz on CLI concepts

### A note on getting stuck

This week involves more moving parts than previous modules, and you will hit errors. That's expected. When you do:

1. **Paste the error into your CLI tool and ask what it means.** Don't paraphrase — paste the exact error message. Your tool already knows the code it built for you, so it can read the error in context and usually identify the problem immediately. "Here's what I got when I ran it — what went wrong and how do I fix it?" is often all you need to type. This is one of the most useful things about working with a CLI LLM: your debugging collaborator is already there, already has context, and can read error messages directly.

2. **If it's an installation or setup issue**, check that you've installed the required tools listed in the exercise.

3. **If your CLI tool can't resolve it**, post in the "Technical help" forum with the exact error message and a description of what you tried.

Please complete all activities before the end of the week.

Best,
Joe Amditis
