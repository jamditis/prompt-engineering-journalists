# Module 4: Advanced prompting patterns

## Orientation message

Welcome to the final module.

For three weeks you've been building the mechanics: you moved from a browser chat window to a terminal, you wrote project context files, you packaged a workflow as a plugin, you staged and scheduled a real pipeline. This module pulls back from the mechanics to the craft. The question is no longer *can I do this?* It's *am I managing this well?*

A note on scope before we start. Module 4 is about managing the *code side* of your workflow — the scripts, skills, pipelines, configs, and back-office infrastructure the model is helping you build and maintain. The framing for the week borrows from project coordination: gather requirements, give clear instructions, read what the model returns, give direct feedback, and decide what you'll keep. Those are the same skills a non-developer uses to work usefully with a developer on a code change, and they're the skills this module is asking you to practice on the tools you built in Modules 1-3.

This module is not about handing your reporting to a model. Your reporting, your writing, your editing, and your judgment about what's a story and what isn't stay with you, the same way they always have. The model can't tell you whether a lead is right, whether a quote is in context, whether a source is credible, or whether a story is worth telling — and it shouldn't try. Everything this week is about working with a model that's writing code for you, not writing journalism for you. Keep that line clear from the start of the week.

Four short videos this week, each on a specific pattern that separates useful output from slop when you're managing the code side of the work. None of them are novel. They're all about doing simple things well.

### This week's videos

**Video D1 (~11 min) — Effort and the context window as a budget.** How to pick an effort level (`/effort` low/medium/high/max/auto) based on the task, what actually lives in your context window (system prompt, tools, custom agents, memory files, skills, messages), and why the million-token window you were promised starts degrading in quality past about 20-30% usage. `/compact` with and without custom summarization instructions — when it saves you and when it silently throws away something you needed.

**Video D2 (~6 min) — The 40% rule, sub-agents, and rewinding.** The 40% rule: cap conversations at about 40% of the context window and rewind rather than patch. Sub-agents and why fresh context windows are valuable — and why "agent telephone" (sub-agent output feeding back into your main session) is the failure mode you have to watch for. The double-escape rewind trick for undoing a bad decision without losing the good ones before it, and why that trick stops working the moment you run `/compact`.

**Video D3 (~8 min) — Cross-model code review via the `-p` flag.** The single highest-leverage advanced pattern of the week: calling GitHub Copilot CLI and OpenAI Codex CLI as non-interactive sub-agents from inside Claude Code via each tool's `-p` flag. You get a second opinion from a different model family on the most important file in your session before you commit. Context isolation is the thing that makes this cheap enough to do often — the other tool's reasoning runs in its own separate process and doesn't load anything into your Claude Code session. The returned review text does land in your main session and does consume some tokens there, but you're paying for the final review instead of the full reasoning chain that produced it. This is the pattern a working developer would use to catch the blind spots a single model misses.

**Video D4 (~14 min) — Remote control, four questions, and editorial judgment.** `/remote-control` for driving a long-running session from the web or your phone, and the four questions for picking any AI tool (what's the task, how much context, does it need tool access, what's your real money budget). The closing argument is the one the course keeps returning to: editorial judgment becomes *more* important as the tools get better, not less. A working pipeline that produces output nobody trusts is worse than no pipeline at all.

### Core concepts

**The context window is a budget.** Every tool you connect, every memory file that loads, every file you paste in — all of it consumes the same pool of tokens before you've asked anything. Treat it the way you'd treat any other budget: know what it's going to, cut the things you don't need, leave slack at the top for the quality you actually care about.

**The 40% rule.** Cap your conversations at about 40% of the context window. Past that, quality starts to drop and you should rewind and start fresh rather than patch your way out. This is the opposite of the habit most people bring from ChatGPT (which is to keep going), and it's the biggest behavioral shift of the week.

**Sub-agents and the agent telephone problem.** Delegating a narrowly-scoped piece of work to a sub-agent is cheap and useful — the sub-agent gets a fresh context window, does the one thing, returns a result. Chaining sub-agents together so one's output becomes the next one's input (the agent telephone pattern) is where errors compound and become hard to trace. Keep sub-agent work narrowly scoped. Don't build a chain of them.

**Cross-model code review via `-p`.** The `-p` flag on most CLI tools runs a single non-interactive prompt and exits. From inside your main Claude Code session, you can call out to Codex CLI, GitHub Copilot CLI, or Gemini CLI with `-p "review this file for..."` and get a second opinion from a different model family. The other tool's reasoning runs in its own separate process — none of its intermediate thinking pollutes your Claude Code session. The returned review text does come back into your main session and does cost some tokens there, but you're paying only for the final review, not the full reasoning chain. That's the useful form of context isolation: separate processing, cheaper (but not free) output. This is the single most useful advanced pattern in the module.

**Coordinating the code-side work.** When the model is doing the keystrokes on the scripts, skills, and pipelines your workflow runs on, your job at the keyboard is to coordinate that work — gather requirements, give clear instructions, read what comes back, give direct feedback, and decide what you'll keep. These are the skills a project coordinator brings to working with a developer, not the skills a writer brings to drafting a story. Your reporting stays with you. The model can't tell you whether the lead is wrong, and this module is not asking it to.

### By the end of this week, you will be able to:

1. Pick an appropriate `/effort` level for the task in front of you, and explain what each level actually costs
2. Describe what lives in your context window at any given moment, apply the 40% rule to your own sessions, and use `/compact` without silently losing the things you needed to keep
3. Delegate a narrowly-scoped task to a sub-agent without falling into the agent telephone failure mode, and use the double-escape rewind trick to undo a bad decision without losing the good ones
4. Run a cross-model code review on the most important file in your session by calling Codex CLI, GitHub Copilot CLI, or Gemini CLI via its `-p` flag from inside Claude Code
5. Apply the four questions (task, context, tools, money) to choose any AI tool for any job — and explain why editorial judgment becomes *more* important, not less, as the tools get better

Let's finish the course.
