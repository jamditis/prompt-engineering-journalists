# Module 4: CLI workflows for newsrooms

## Orientation message

Hello, and welcome to Module 4.

In the 101 course, you learned to automate tasks with no-code tools like Zapier and Make. Those tools work well for straightforward workflows: trigger an event, move some data, send a notification. But if you've ever hit the wall where your Zap can't handle a weird edge case, or where you need to process 500 documents and the no-code tool charges per operation, you've felt the limits of that approach.

CLI workflows are the next level. They give you more control, more flexibility, and the ability to handle the messy, unpredictable data that journalism actually produces. This week, you'll learn to chain AI tools with other command-line utilities. By the end, you'll be able to build automated pipelines that fetch content, process it with AI, and output formatted results — all without clicking through browser tabs.

### The Unix philosophy, applied to AI

Unix was built on a simple idea: small tools that each do one thing well, connected by pipes. `curl` fetches a web page. `jq` extracts a JSON field. `sort` sorts lines. Each tool is simple on its own, but piped together they become powerful.

The same principle applies to AI workflows. Don't build one massive script that tries to do everything. Build stages: fetch, clean, analyze, format. Each stage is independently testable. When something breaks (and it will), you can isolate the problem to one step instead of debugging a monolith.

A pipeline that clips an article, summarizes it with Claude, and formats it for your newsletter takes seconds to run once you've built it. And because each stage is separate, you can swap out any piece — use a different summarizer, change the output format, add a translation step — without rewriting the whole thing.

### Principles for building real pipelines

These aren't abstract best practices. They come from building and running actual data pipelines in newsrooms.

**Test small before running big.** Real API calls cost money. Before you process 500 documents through a paid API, test on 5. Better yet, validate your inputs with a free local model (like Ollama) before sending anything to a paid service. The principle: use cheap tools to catch problems before running expensive operations.

**Design for failure.** Long operations fail. Networks drop, APIs rate-limit, your laptop goes to sleep. Build pipelines that save their progress to disk — a simple log of which files have been processed — so they can restart from where they left off instead of starting over from scratch.

**Respect rate limits.** APIs have rate limits for a reason. Building pauses into your scripts (`sleep 2` between API calls) isn't a workaround — it's responsible engineering that keeps your API access alive. A script that blasts 1,000 requests in ten seconds will get you throttled or banned. A script that spaces them out will finish the job reliably.

### Learning objectives

By the end of this module, you will be able to:

1. **Use piping to connect tools.** Chain the output of one command into another using the pipe operator (`|`).

2. **Build AI-powered shell pipelines.** Combine utilities like `curl`, `jq`, and Claude's CLI to automate content processing.

3. **Write reusable shell scripts.** Package your pipelines into scripts you can run repeatedly.

4. **Schedule automated tasks.** Use cron jobs to run pipelines on a schedule (e.g., daily news digests, weekly data pulls).

5. **Apply cost-conscious practices.** Test on small samples, validate with free tools, and build in rate limiting and checkpointing.

### This week's activities

- **Videos:** Watch the two video lectures on CLI basics and building pipelines
- **Readings:** Complete the required readings on shell fundamentals and automation patterns
- **Exercise:** Build a working "clip article → summarize → format" pipeline
- **Discussion:** Share your newsroom automation ideas in the forum
- **Quiz:** Complete the 5-question quiz on CLI concepts

### A note on getting stuck

The command line will feel unfamiliar if you haven't used it before. That's normal. The exercise this week walks you through each step. If you get stuck:

1. Read the error message carefully — it usually tells you what went wrong
2. Check that you've installed the required tools
3. Post in the "Technical help" forum with your error message and what you tried

Please complete all activities before the end of the week.

Best,
Joe Amditis
