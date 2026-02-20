# Module 3: Custom skills for Claude Code

## Optional resources

These materials provide additional context. Review them if you want to go deeper or explore related topics.

---

### Writing better skill instructions

**"Prompt engineering guide" — Anthropic Documentation**
https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview

The same principles that make prompts effective also apply to skill files. This guide covers structuring instructions, providing examples, and avoiding ambiguity. Useful if you plan to write your own skills.

---

### The SIFT method for source verification

**"SIFT (The Four Moves)" — Mike Caulfield**
https://hapgood.us/2019/06/19/sift-the-four-moves/

The source-verification skill is based on this method. Read the original to understand the reasoning behind Stop, Investigate the source, Find better coverage, and Trace claims. The skill encodes these steps, but understanding why they work helps you apply them in edge cases.

---

### FOIA request writing

**"FOIA Frequently Asked Questions" — Reporters Committee for Freedom of the Press**
https://www.rcfp.org/resources/foia-basics/

Background on the Freedom of Information Act and how to write effective requests. The foia-requests skill helps draft requests, but knowing the legal framework helps you refine them for specific agencies.

---

### AI hallucinations in practice

**"AI Hallucination Cases database"** — Damien Charlotin (via Simon Willison)
https://simonwillison.net/2025/May/25/ai-hallucination-cases/

A database of documented cases where lawyers were caught submitting AI-generated hallucinations in legal proceedings — verified instances where courts confirmed the fabricated content. As of May 2025: 116 cases across 12 countries, with 20 in that single month alone. The legal profession has had years of public warnings. It hasn't mattered. The pattern is directly relevant to journalism: professional settings with high stakes and time pressure create conditions where people use AI shortcuts and skip verification. The database is the read; the acceleration is the argument.

---

**"Hallucinations in code are the least dangerous form of LLM mistakes"** — Simon Willison
https://simonwillison.net/2025/Mar/2/hallucinations-in-code/

The counterintuitive argument: when an LLM hallucinates a method that doesn't exist, you find out immediately when you run the code. Code errors are self-revealing. What's actually dangerous is hallucinated prose — fabricated quotes, invented facts, plausible-sounding information that requires subject expertise to catch. For journalists, this reframes where to focus skepticism: the pipeline ran without errors, but did it produce accurate content?

---

### MCP servers for newsrooms

**"MCP Quickstart" — Anthropic Documentation**
https://modelcontextprotocol.io/quickstart

If you want Claude Code to connect to live data sources (databases, APIs, document management systems), MCP is the path. This quickstart shows how to set up a basic server. More advanced than skills, but worth exploring if your newsroom has custom data infrastructure.

---

### Example: Data journalism skill in action

**"Analyzing campaign finance data with Claude Code" — [Course supplementary video]**

A 12-minute walkthrough showing the data-journalism skill applied to FEC filings. Demonstrates how skills can include data cleaning steps, chart generation, and story angle identification.

---

### Skills in practice

**"Claude skills are awesome, maybe a bigger deal than MCP"** — Simon Willison
https://simonwillison.net/2025/Oct/16/claude-skills/

Willison's take on why skills represent something qualitatively different from other Claude customization features. He argues that the ability to package domain expertise into reusable, shareable instructions is more practically significant for most users than the more technically complex MCP system. Good context for understanding why this week's work matters.

---

**"OpenAI are quietly adopting skills"** — Simon Willison
https://simonwillison.net/2025/Dec/12/openai-skills/

A few months after Willison declared skills a bigger deal than MCP, OpenAI added skills support to both ChatGPT and Codex CLI. The same folder-based, markdown-file approach now works across Claude Code, Codex CLI, and ChatGPT. Relevant context for this week: the skills you write here aren't Claude-specific — the concept is converging across platforms.

---

### Advanced patterns: commands, hooks, and error logging

The three resources below are drawn from *Advanced Claude Code Patterns That Move the Needle*, a guide based on 2,000+ hours of building with LLMs. They extend directly from this module's core topics — skills, hooks, and workflow automation. Read any or all, in order.

*Original guide by [The Agentic Lab](https://www.youtube.com/channel/UCD-gasIQYzXqQ4dr7mGPRfw). Extracted and organized in [jamditis/stash](https://github.com/jamditis/stash/tree/main/ai/claude-code-patterns).*

---

**"Commands as lightweight local apps"** — The Agentic Lab via jamditis/stash
https://github.com/jamditis/stash/blob/main/ai/claude-code-patterns/lessons/02-commands-as-apps.md

*Reading time: 10 minutes*

The clearest explanation of what makes slash commands different from skills. A skill contains domain knowledge that Claude consults probabilistically — whether it activates and how closely it follows the instructions varies. A `/command` is a deterministic trigger: when you invoke it, the workflow runs as defined, every time.

The framing here — "Claude as a Service" — is useful for newsrooms. Each `/command` is a micro-application with a defined interface, specific workflow, and consistent output. The piece includes a worked example of a multi-phase command that launches parallel subagents, assembles assets, and writes output — showing what's possible when you stop thinking of commands as chat shortcuts and start treating them as automation tools.

For Module 3's exercise, the relevant distinction is: the source-verification skill you installed is knowledge-based and invocable; if you wanted that workflow to run automatically on every article before publication, you'd wrap it in a command.

---

**"Hooks for deterministic safety"** — The Agentic Lab via jamditis/stash
https://github.com/jamditis/stash/blob/main/ai/claude-code-patterns/lessons/03-hooks-for-safety.md

*Reading time: 12 minutes*

This extends what Module 3's required readings cover about hooks. Where the journalism skills library uses hooks as editorial quality checks (flagging AP Style violations, source attribution gaps, AI filler language), this piece covers hooks as safety guardrails — programmatic blocks that run before or after any CLI action.

The practical setup described — hooks combined with `--dangerously-skip-permissions` — removes constant permission prompts while maintaining hard blocks on specific patterns (recursive deletes, force pushes to protected branches). The approach illustrates a general principle for any automated journalism workflow: the right place to enforce constraints is in code that cannot be bypassed, not in prompts that might be ignored.

The bash examples translate directly. If you're building pipelines that touch source documents, the pattern of "allow by default, block specific patterns explicitly" is worth understanding before those pipelines touch anything you can't recover.

---

**"The error logging system"** — The Agentic Lab via jamditis/stash
https://github.com/jamditis/stash/blob/main/ai/claude-code-patterns/lessons/01-error-logging-system.md

*Reading time: 10 minutes*

The Module 3 exercise asks you to add a "Hard-won lessons" section to your skill file — one entry per correction you have to make. This piece makes the case for why that section is the most important part of your CLAUDE.md over time, and shows how to build a structured system for capturing it.

The core pattern is two slash commands — `/log_error` and `/log_success` — that fork the current conversation, interview you about what went wrong or right, and write a structured entry to a log file. Failure categories covered: hallucination, instruction ignored, context lost, wrong tool selection, incomplete execution. Each entry captures the exact triggering prompt, expected vs. actual behavior, and a hypothesis for the root cause.

For journalists, the practical payoff is a record of what your AI environment gets wrong — and a log of what prompts reliably produce good results. Both are more valuable than they appear now and become more valuable as your beat project accumulates history.

---

### Building your own skills

**"Custom slash commands" — Claude Code documentation**
https://docs.anthropic.com/en/docs/claude-code/tutorials#custom-slash-commands

When you're ready to create skills for your newsroom, start here. The tutorial covers file structure, YAML frontmatter, and best practices for instruction writing.

---

## Community resources

**Claude Code Discord community**
A place to share skills, ask questions, and see what other users are building. Search for journalism-related discussions or share your own skill ideas.

**Nieman Lab and journalism AI coverage**
https://www.niemanlab.org/

Ongoing coverage of AI tools in newsrooms. Useful for staying current on how other journalists are using these tools.
