# Module 4: Agents, tools, and data access

## Orientation message

Welcome to the final module. This week covers agents, autonomous workflows, and connecting AI to your data.

Until now, everything you've done has been interactive — you type, Claude responds, you direct the next step. This module is about what happens when you step back and let the AI execute on its own: processing a folder of documents, querying a knowledge base, running tasks on a schedule.

You'll learn how `claude -p` enables non-interactive mode, how MCP connects AI to external data sources, and how real newsroom projects put all of these pieces together. The video walks through a live demo and a deep dive into a real-world project (Reroute NJ) that applies concepts from all four modules.

---

## Non-interactive mode: `claude -p`

In Modules 1 through 3, you've worked inside interactive Claude Code sessions — typing prompts, reviewing responses, course-correcting in real time. Non-interactive mode changes the dynamic. Running `claude -p "your prompt here"` sends a single prompt, gets a result, and exits. No session. No back-and-forth.

This is what makes autonomous workflows possible. A shell script that runs `claude -p` on every file in a folder. A cron job that checks data daily. A pipeline that processes 50 press releases and extracts key claims without you touching the keyboard.

The video demonstrates this live: running `claude -p` on a folder of sample documents, watching it process them one by one, and writing results to a CSV. The skill you're building here is knowing when to use this — batch processing, scheduled tasks, pipeline stages — and when not to. If you need to review intermediate steps or make judgment calls, stay interactive. If the task is well-defined and repeatable, `claude -p` lets you step away.

---

## Agents: tools with autonomy

A chatbot answers questions. An agent uses tools, makes decisions, and completes multi-step tasks without you guiding each one. It can search your archive, cross-reference sources, read files, call APIs, and synthesize results — deciding on its own which tool to use at each step.

The Washington Post's Haystacker helps investigative reporters sift through large datasets. The New York Times's Echo assists with content production workflows. Both keep humans in the review loop. That's by design.

The line that can't move: **editorial judgment stays with the journalist.** Agents can research, summarize, and draft. They cannot decide what's newsworthy, evaluate source credibility, or make ethical calls about what to publish.

---

## MCP: connecting AI to your data

MCP (Model Context Protocol) is Anthropic's open standard for connecting AI to external data sources — file systems, databases, APIs, web services. Instead of pasting data into a prompt, you point the AI at a data source and let it query what it needs.

In this week's exercise, you'll configure an MCP server to connect Claude Code to a folder of markdown files. This is the same pattern at small scale: AI reads your documents, retrieves what's relevant, and generates answers grounded in your sources rather than training data.

The configuration file you write is infrastructure. Commit it to version control alongside your CLAUDE.md and skills. Anyone who clones your project gets the same data connections.

**Every tool you connect costs context.** Each MCP server you configure consumes tokens in your session before you've asked anything — the server's schema, its available tools, its connection overhead. This is a real cost, not a theoretical one. Before connecting a data source, ask whether the capability it adds justifies what it takes from your context budget. A database connection you rarely need still consumes context on every session where you don't use it. A lean, purposeful set of integrations outperforms a crowded one.

## When Claude delegates: the subagent problem

For complex multi-step tasks, Claude sometimes delegates parts of the work to separate sub-sessions — subagents — that each handle a focused piece and return results. This happens automatically. You often won't know it's happening.

Two things are worth knowing about this before you build pipelines in this module.

First, model selection. By default, Claude spawns lighter, cheaper models for subagents, regardless of what's being delegated. For a journalism research task — synthesizing sources, evaluating evidence, identifying patterns — a lighter model produces worse results than the main session would. You can override this default. Add `Always use the most capable available model for research subagents` to your CLAUDE.md to override the default for delegated work.

Second, and more important for journalism: errors compound across handoffs. When one subagent's output becomes the next subagent's input, a fabricated statistic in step one becomes an assumed fact in the analysis at step two. By step three, it's a headline candidate. The failure is harder to trace than a single-session error because you never saw the intermediate steps.

The mitigation is the same principle that applies to any multi-source story: verify at every handoff. Don't pass a subagent's output to the next stage without checking it. Treat intermediate results the way you'd treat information from a source you haven't yet independently confirmed. "The AI said so" is not a source. "The document says so" is.

---

## From the field

The video walks through [Reroute NJ](https://reroutenj.org) as a complete real-world example of what this course teaches. It's a public transit guide built during a real infrastructure disruption in New Jersey — 11 languages, zero build step, serving a real community. The project applies concepts from all four modules: a CLAUDE.md for project context (Module 1), reusable scripts for page generation and translation (Module 2), a cron-scheduled scraper that commits and pushes automatically (Module 3), and autonomous data connections to external sources like news sites and NJ Transit alerts (Module 4).

Your instructor also built the [Jay Rosen Digital Archive](https://github.com/jamditis/rosen-scraper), a collection of 765+ records from journalist Jay Rosen's career. The project applies entity extraction and grounded knowledge retrieval to primary source materials, turning raw documents into a searchable knowledge base.

---

## Learning objectives

By the end of this module, you will be able to:

1. **Explain the difference between chatbots and agents** — what tools, autonomy, and multi-step planning look like in practice, and where human oversight is required.

2. **Use `claude -p` for non-interactive mode**, enabling scripted and autonomous workflows that process documents without manual intervention.

3. **Configure a basic MCP server** to connect Claude Code to a local knowledge base, giving the AI access to your source documents.

4. **Evaluate the tradeoffs** between AI autonomy and editorial control, identifying where grounded, source-attributed responses matter and where things break down.

---

## This week's activities

| Activity | Time estimate |
|----------|---------------|
| Required readings | 60 minutes |
| Optional resources | 30-45 minutes |
| Discussion forum participation | 45 minutes |
| Hands-on exercise: MCP setup | 90 minutes |
| Quiz | 15 minutes |

---

## Key terms

**Agent**: An AI system that can use tools, make decisions, and complete tasks across multiple steps without continuous human input.

**Non-interactive mode (`claude -p`)**: Running Claude Code with a single prompt that executes and exits, without entering an interactive session. Enables scripted pipelines and autonomous workflows.

**MCP (Model Context Protocol)**: Anthropic's open standard for connecting AI models to external data sources and tools — file systems, databases, APIs.

**Knowledge base**: A structured collection of documents, data, or information that an AI system can search and reference.

**Grounded knowledge**: Information provided to the model at query time from external documents. Traceable to specific sources. Contrast with parametric knowledge (what the model learned during training), which can be outdated or wrong and has no citation trail.

**RAG (Retrieval-augmented generation)**: A technique that retrieves relevant documents from a knowledge base and includes them in the AI's context before generating a response. One pattern for connecting AI to data; MCP is another.

**Human-in-the-loop**: A design pattern where automated systems require human review and approval before outputs are finalized or published.

---

## Your project is infrastructure

Across four weeks, you've built:

- A **CLAUDE.md** that encodes your beat context and newsroom standards
- **Skills** that encode your verification methods and editorial processes
- **Hooks** that enforce those standards automatically
- A **pipeline** that fetches, cleans, and analyzes content at scale
- An **MCP configuration** that connects it all to your source materials

All of it lives in version control. All of it is portable. Clone the repo on a new machine and the same context, tools, and data sources come with it. Hand it to a colleague and they inherit your methods.

This is context engineering at scale. You started in Module 1 with one-off prompts and a chat window. You're ending Module 4 with a versioned environment any journalist on your team can clone and extend.

---

## What's ahead

The video demonstrates `claude -p` processing a folder of documents autonomously and walks through Reroute NJ as a real-world project that ties all four modules together. It's honest about where things break — MCP silent failures, rate limits, token limits, and the reality that the human is still the journalist.

The readings introduce you to real newsroom implementations: The Washington Post's Haystacker for investigative research and The New York Times's Echo for content production. You'll also read about the Model Context Protocol and how grounded knowledge systems work.

The discussion forum asks you to think critically about where AI should and shouldn't operate autonomously in journalism.

The hands-on exercise walks you through setting up Claude Code with MCP to query markdown files, giving you direct experience with the technology.

Let's get started.
