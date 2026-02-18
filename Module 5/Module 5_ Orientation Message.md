# Module 5: Agents and RAG

## Orientation message

Welcome to Week 5. This module covers two concepts that are changing how newsrooms work with AI: agents and retrieval-augmented generation (RAG).

Until now, we've focused on prompting AI models directly. But the most powerful applications in journalism connect AI to external data sources and give it the ability to take actions on your behalf.

This week, you'll learn how major news organizations are using these technologies right now, and you'll set up your own system to query a local knowledge base.

---

## Why RAG matters for journalists

Every large language model carries two types of knowledge. **Parametric knowledge** is what the model learned during training -- the patterns, facts, and associations baked into its weights. **Grounded knowledge** comes from documents you provide at query time -- your archives, your source materials, your reporting notes.

This distinction matters because parametric knowledge can be wrong or outdated, and you have no way to check where it came from. Grounded knowledge has a citation trail. For journalists, the citation trail is everything.

RAG is the technique that adds grounded knowledge to an AI's responses. Instead of relying on what the model "remembers," RAG retrieves relevant documents from a knowledge base and includes them in context before the model generates an answer. The result: you can trace an AI-generated response back to the specific document, paragraph, and source it drew from.

This is what makes RAG safe for newsrooms in ways that plain prompting is not. One of the biggest risks with AI in journalism is losing track of where information came from. RAG, done right, preserves attribution through the entire pipeline -- from retrieval to generation to the final output a reporter reads. The journalism rule is the same one you already follow: if you can't cite it, don't publish it. Grounded knowledge is citable. Parametric knowledge is not.

---

## Agents: tools with autonomy

AI agents go beyond question-and-answer. An agent can use tools, make decisions, and complete multi-step tasks: searching databases, calling APIs, reading files, and synthesizing results. The Washington Post's Haystacker helps investigative reporters sift through massive datasets. The New York Times's Echo assists with content production workflows.

But here's the line that can't move: **editorial judgment stays with the journalist.** Agents can research, summarize, and draft. They cannot decide what's newsworthy, evaluate source credibility, or make ethical calls about what to publish. The tools covered in this module -- MCP, knowledge bases, retrieval pipelines -- are designed to augment reporting, not replace it. Both Haystacker and Echo keep humans in the review loop. That's by design.

---

## MCP: connecting AI to your data

MCP (Model Context Protocol) is the bridge between Claude Code and external data sources -- file systems, databases, APIs. Think of it as giving the AI a library card instead of making it guess from memory.

In this week's exercise, you'll configure an MCP server to connect Claude Code to a folder of markdown files. This is a small-scale version of the same pattern that powers newsroom-scale RAG systems: AI reads your documents, retrieves what's relevant, and generates answers grounded in your sources.

The configuration file you write is infrastructure. Commit it to version control alongside your CLAUDE.md and skills. Anyone who clones your project gets the same data connections.

---

## From the field

Your instructor built a working example of this pipeline: the [Jay Rosen Digital Archive](https://github.com/jamditis/rosen-scraper), a collection of 765+ records from journalist Jay Rosen's career. The project applies entity extraction and RAG to primary source materials, using the Gemini API and Google Sheets to turn raw documents into a searchable knowledge base. This kind of archive-to-knowledge-base pipeline is exactly what Module 5 prepares you to build.

---

## Learning objectives

By the end of this module, you will be able to:

1. **Explain the difference between parametric and grounded knowledge** and why grounded, source-attributed AI responses are safer for journalism than responses drawn from training data alone.

2. **Describe how RAG works** and how it preserves source attribution through the retrieval-to-generation pipeline.

3. **Evaluate the tradeoffs** between AI autonomy and editorial control, identifying where human oversight is required in agent-based workflows.

4. **Configure a basic MCP server** to connect an AI assistant to a local knowledge base, demonstrating the practical mechanics of RAG.

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

**RAG (Retrieval-Augmented Generation)**: A technique that retrieves relevant documents from a knowledge base and includes them in the AI's context before generating a response.

**Parametric knowledge**: What an LLM learned during training -- patterns and associations stored in the model's weights. Can be outdated or wrong, and has no citation trail.

**Grounded knowledge**: Information provided to the model at query time from external documents. Traceable to specific sources.

**MCP (Model Context Protocol)**: Anthropic's open standard for connecting AI models to external data sources and tools.

**Knowledge base**: A structured collection of documents, data, or information that an AI system can search and reference.

**Grounding**: The practice of connecting AI responses to specific source documents, reducing hallucination and enabling attribution.

**Human-in-the-loop**: A design pattern where automated systems require human review and approval before outputs are finalized or published.

---

## Your project is infrastructure

Across five weeks, you've built:

- A **CLAUDE.md** that encodes your beat context and newsroom standards
- **Skills** that encode your verification methods and editorial processes
- **Hooks** that enforce those standards automatically
- A **pipeline** that fetches, cleans, and analyzes content at scale
- An **MCP configuration** that connects it all to your source materials

All of it lives in version control. All of it is portable. Clone the repo on a new machine and the same context, tools, and data sources come with it. Hand it to a colleague and they inherit your methods.

This is context engineering at scale. You started in Module 1 with one-off prompts and a chat window. You're ending Module 5 with a versioned environment any journalist on your team can clone and extend.

---

## What's ahead

The readings introduce you to real newsroom implementations: The Washington Post's Haystacker for investigative research and The New York Times's Echo for content production. You'll also read about the Model Context Protocol and how RAG systems work.

The discussion forum asks you to think critically about where AI should and shouldn't operate autonomously in journalism.

The hands-on exercise walks you through setting up Claude Code with MCP to query markdown files, giving you direct experience with the technology.

Let's get started.
