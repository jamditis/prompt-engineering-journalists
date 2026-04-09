# Module 4 revision: the power user's guide

**Date:** 2026-04-09
**Status:** Approved design, pending implementation
**Context:** Module 4 was originally "Agents, tools, and data access" — two ~20-minute videos (Video 11: hallucination/RAG lecture, Video 12: live MCP demo). Joe felt Module 3 was tough to record and leaned too heavily into live build sessions. Module 4 needed a different energy: shorter, focused videos that teach techniques and features rather than walking through another continuous project build.

---

## Design decisions

**What changed and why:**
- Dropped the 20-minute RAG/hallucination lecture (Video 11). The concepts (parametric vs. grounded knowledge) get a brief mention in the settings/MCP video instead.
- Dropped the 20-minute live MCP setup demo (Video 12). MCP gets covered conceptually without a full build session.
- Moved from 2 long videos to 4 short ones (~10-14 min each). Each video is self-contained — students can rewatch the ones relevant to their work.
- Added content the original plan didn't cover: prompt caching, plan mode, memory, /compact, multi-agent CLI workflows, GitHub Copilot CLI.
- Course wrap-up is baked into the last video (~3 min outro) instead of a separate segment.

**What stays from the original Module 4:**
- MCP as a concept (what it is, what configs look like, why it matters) — just not a live demo
- The grounded vs. parametric knowledge distinction — compressed to ~60 seconds
- The Pi agent story can be used as a brief anecdote in Video 14 if desired
- The autonomy spectrum / human-in-the-loop principle — revisited in the course close

---

## Video map

| # | Video | Focus | Format | Target |
|---|-------|-------|--------|--------|
| 11 | Getting more out of your sessions | Advanced prompting + session management | Screen recording + voiceover | ~12-14 min |
| 12 | Settings, caching, and connecting to data | Under the hood + customization + MCP | Talking head + slides + brief screen demos | ~12 min |
| 13 | Calling other agents from the command line | Multi-tool workflows | Screen recording + voiceover | ~10 min |
| 14 | What's next + course close | Landscape + wrap-up | Talking head + slides | ~10 min |

**Total runtime:** ~44-46 min across 4 videos

---

## Video 11: Getting more out of your sessions (~12-14 min)

**Format:** Screen recording with voiceover
**Hook:** You've been using Claude Code for three weeks. You've been driving a car without knowing about half the gears. This video shows you the features that change the quality and durability of your sessions.

### Extended thinking (~3 min)
- What it is: Claude "thinks" before responding, working through the problem step by step before giving an answer
- When to turn it on: complex analysis, multi-document comparison, anything where the first-pass answer tends to be shallow
- How to trigger: `think harder`, `think deeply about this`, thinking budget in settings
- Journalism example: comparing budget documents — show output difference with and without extended thinking
- Tradeoff: slower, uses more tokens, not worth it for simple asks

### Structured outputs (~3 min)
- What they are: asking for output in a specific format (JSON, CSV, markdown tables, YAML) instead of prose
- Why it matters for journalism: structured data is reusable — a JSON list of sources can feed a spreadsheet, a CSV of extracted quotes can go into a database. Prose summaries just sit there.
- Prompting pattern: "Return the results as a JSON array with fields for [name, date, amount, source_file]"
- Quick demo: extract structured data from a press release, show the JSON output
- Combining with extended thinking: "Think carefully about which quotes are newsworthy, then return them as a JSON array with speaker, quote, and context fields"

### Plan mode (~3 min)
- What it is: Claude proposes a plan before executing, you review and approve
- When to use: multi-step tasks where you want to see the approach before it starts running
- How to enter: `/plan` or shift+tab, how to approve/edit/reject
- Journalism example: "I need to process 20 PDFs and extract the budget line items" — show Claude proposing its approach, tweaking it, approving
- The lesson: plan mode is editorial oversight applied to the tool itself

### Memory, /compact, and managing long sessions (~3-4 min)
- The problem: long sessions eat context. Eventually Claude starts forgetting earlier conversation.
- `/compact` — manually compress the conversation to free up space. Use when the session gets sluggish or starts repeating itself.
- Memory — Claude remembers things across sessions. What it stores, how to check, when to explicitly tell it to remember something ("remember that our style guide uses AP style")
- Session hygiene: when to start fresh vs. keep going, how to tell when a session is too long
- Connects to caching discussion in Video 12

### Does not cover
Settings UI (Video 12). Multi-agent workflows (Video 13). This video is about what happens inside a single session.

---

## Video 12: Settings, caching, and connecting to data (~12 min)

**Format:** Talking head + slides + brief screen demos
**Hook:** Every time you start a Claude Code session, a bunch of things happen before you type your first message. This video shows you what's happening under the hood and how to control it.

### Settings and configuration (~4 min)
- The settings landscape: what you can customize and where it lives
- `/config` — the settings menu: model selection, permissions, theme, etc.
- Permission modes: adjusting what Claude can do without asking (useful when you trust the workflow, dangerous when you don't)
- Quick tour of settings that matter for daily work vs. ones you can ignore
- `.claude.json` at the project level — project-specific settings that travel with the repo

### Prompt caching and why mid-session changes cost you (~4 min)
- What prompt caching is: Anthropic caches conversation context so repeated prefixes are cheaper and faster
- Why switching models mid-session (e.g., Sonnet to Opus) invalidates the cache — lose speed benefit, pay full price for new context
- Same problem with changing system-level settings mid-session
- Practical rule: decide model and settings before you start working. If you need to switch, start a fresh session.
- Not just a cost issue — affects response quality. Fresh cache means re-processing the entire conversation.

### MCP: connecting Claude to external data (~4 min)
- What MCP is conceptually: a protocol for giving Claude access to data sources beyond project files
- What an MCP server does: filesystem access, databases, APIs, Google Drive, Slack — dozens of connectors exist
- What the config looks like: brief look at a `.mcp.json` file (show, don't build)
- Journalism use case: connecting Claude to a folder of FOIA documents, a published article archive, a shared team drive
- Grounded vs. parametric knowledge — 60-second version: when Claude answers from documents it's reading vs. training data, citations become possible
- Honest about limitations: MCP setup breaks (tokens expire, paths change, permissions shift). Still rough.
- Where to go deeper: point to readings (Anthropic's MCP docs, RAG articles) for students who want to set this up

### Does not cover
Full live MCP setup demo. Deep RAG theory. This is awareness-level: know what these things are and when to reach for them.

---

## Video 13: Calling other agents from the command line (~10 min)

**Format:** Screen recording with voiceover
**Hook:** Claude Code isn't the only CLI agent. And the interesting part is you don't have to pick one — you can use them together.

### The landscape: four CLI agents (~3 min)
- Claude Code (Anthropic), Gemini CLI (Google), Codex CLI (OpenAI), GitHub Copilot CLI (GitHub/Microsoft)
- Cost reality: Gemini CLI has a generous free tier. Copilot CLI comes with Copilot Pro (and has a limited free tier). Claude Code and Codex require paid API access or subscriptions.
- Different models, different strengths, different context file conventions (CLAUDE.md vs. GEMINI.md vs. AGENTS.md)
- Mental model: different reporters on the same story

### Calling other agents from inside Claude Code (~4 min)
- The pattern: Claude Code can shell out to other CLI tools, including other AI agents
- Demo: inside a Claude Code session, ask Claude to run `gemini -p "summarize this article"` or `copilot -p "review this code"` via subprocess
- Copilot angle: `copilot -p` for quick non-interactive prompts, `/delegate` for offloading tasks to a cloud agent that creates a draft PR
- Journalism example: same press release through two models — compare what each flags as the lead
- Practical limit: each subprocess call is a fresh session with no shared context

### When to use which tool (~3 min)
- Framework, not feature comparison (features get stale in months)
- Decision factors: task type, context needs, tool access, cost sensitivity
- Honest take: most journalism tasks work with any of them. Differences matter most at the edges (long documents, complex reasoning, structured output reliability).
- Encourage trying more than one — develop your own sense of which fits your workflow

### Does not cover
Installing Gemini CLI or Codex (pre-course setup). Deep API/pricing comparisons (stale immediately). Multi-agent orchestration or autonomous agent chains (too advanced for this audience).

---

## Video 14: What's next + course close (~10 min)

**Format:** Talking head + slides
**Hook:** You've spent four weeks learning a way of working. The specific tools will change. Here's how to keep up — and here's what you built.

### Where this is all heading (~4 min)
- The trend line: CLI agents are getting more capable fast. More tool access, longer context, better reasoning, more autonomy. What you learned is the floor, not the ceiling.
- Multi-agent patterns at a high level: agents that coordinate — one does research, one writes, one reviews. Not something to build today, but the direction.
- The autonomy question revisited: as tools get more capable, editorial judgment gets harder, not easier. Human-in-the-loop doesn't expire — it gets more important.
- How to evaluate new tools: Does it have file access? Context files? Tool use? Can I see what it's doing? Four questions that filter out most hype.

### Staying current without drowning (~3 min)
- The problem: new tools, features, models every week. Can't track all of it.
- Sources worth following: Anthropic changelog, Simon Willison's blog, Generative AI in the Newsroom, course repo resources page
- Test for whether a new feature matters: "Does this change how I'd do a task I already do?" If not, skip it.
- Keep CLAUDE.md files alive — update as you learn, as your beat changes, as tools evolve. The context file is the living document.

### Course recap and send-off (~3 min)
- Module 1: moved from browser to terminal, wrote a context file
- Module 2: turned expertise into reusable skills
- Module 3: described a workflow and had the AI build it
- Module 4: learned the features, techniques, and landscape that make you a power user
- The arc: from prompting to managing. Building environments, delegating work, maintaining tools.
- Final project plug: build something real from your beat, put it on GitHub, someone else can clone and use it.
- Sign off

### Does not cover
Specific product announcements or release dates. Detailed multi-agent architecture. Anything requiring new infrastructure setup.

---

## Impact on other Module 4 deliverables

The 9 LMS documents (orientation message, midweek message, end-of-week message, readings, optional resources, discussion, quiz, exercise, exercise solution key) need to be updated to reflect the new video content and module framing. Key changes:

- **Orientation message:** Reframe from "agents, tools, and data access" to "the power user's guide" — techniques, features, and landscape
- **Readings:** Keep MCP and RAG readings as supplementary/optional. Add readings on prompt caching, CLI agent comparison, or other topics covered in the new videos.
- **Quiz:** Rewrite to cover the new content (extended thinking, structured outputs, plan mode, caching, MCP concepts, multi-agent CLI landscape)
- **Exercise:** Needs significant rework. Current exercise is a full MCP setup. New exercise should match the module's energy — possibly a "try these features" sampler rather than a single build.
- **Discussion:** Revise prompts to match new topics

These updates are a separate implementation task, not part of this design doc.

---

## What this design preserves from the existing course

- The 4-module arc (CLI setup → skills → workflows → power user / capstone)
- The Mollick framework (models, apps, harnesses)
- The "prompting to managing" philosophical throughline
- The Greenfield beat project as the running example (referenced but not actively built in Module 4)
- The 9-document LMS structure per module
- The final project as the capstone deliverable
- Learning objective #5 from the syllabus: "Connect AI tools to local files and external data sources via MCP, and understand where these connections break down" — covered conceptually in Video 12

## What this design changes

- Module 4 title: from "Agents, tools, and data access" to something like "Going deeper" or "The power user's guide"
- Video count: from 2 (Videos 11-12) to 4 (Videos 11-14)
- Video format: from long-form (2 × ~20 min) to short-form (4 × ~10-14 min)
- Content emphasis: from infrastructure/setup (MCP demo, RAG deep-dive) to techniques/features/landscape (extended thinking, caching, multi-agent CLI, what's next)
- Total video numbers in course: from 12 to 14
