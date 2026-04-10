# Module 4: Advanced prompting patterns

## Orientation message

Welcome to the final module.

For three weeks you've been building the mechanics: you moved from a browser chat window to a terminal, you wrote project context files, you packaged a workflow as a plugin, you staged and scheduled a real pipeline. This module pulls back from the mechanics to the craft. The question is no longer *can I do this?* It's *am I doing this well?*

The honest framing for Module 4: once you know how to install the tools, write context files, build skills and plugins, and schedule pipelines, the work shifts from prompting to managing. You're doing less typing and more reviewing. You are making the same decisions you'd make with a new staff writer — clear instructions, evaluation criteria, feedback on what came back, and a judgment call on whether the result is ready to go out the door. The model is still doing the keystrokes, but the editorial judgment is yours.

Four short videos this week, each on a specific pattern that separates useful output from slop. None of them are novel. They're all about doing simple things well.

### This week's videos

**Video D1 (~11 min) — Effort and the context window as a budget.** How to pick an effort level (`/effort` low/medium/high/max/auto) based on the task, what actually lives in your context window (system prompt, tools, custom agents, memory files, skills, messages), and why the million-token window you were promised starts degrading in quality past about 20-30% usage. `/compact` with and without custom summarization instructions — when it saves you and when it silently throws away something you needed.

**Video D2 (~6 min) — The 40% rule, sub-agents, and rewinding.** The 40% rule: cap conversations at about 40% of the context window and rewind rather than patch. Sub-agents and why fresh context windows are valuable — and why "agent telephone" (sub-agent output feeding back into your main session) is the failure mode you have to watch for. The double-escape rewind trick for undoing a bad decision without losing the good ones before it, and why that trick stops working the moment you run `/compact`.

**Video D3 (~8 min) — Cross-model code review via the `-p` flag.** The single highest-leverage advanced pattern of the week: calling GitHub Copilot CLI and OpenAI Codex CLI as non-interactive sub-agents from inside Claude Code via each tool's `-p` flag. You get a second opinion from a different model family on the most important file in your session before you commit. The reviews don't count against your main session's tokens (that's context isolation), so you can do this cheaply and often. This is the pattern a working developer would use to catch the blind spots a single model misses.

**Video D4 (~14 min) — Remote control, four questions, and editorial judgment.** `/remote-control` for driving a long-running session from the web or your phone, and the four questions for picking any AI tool (what's the task, how much context, does it need tool access, what's your real money budget). The closing argument is the one the course keeps returning to: editorial judgment becomes *more* important as the tools get better, not less. A working pipeline that produces output nobody trusts is worse than no pipeline at all.

### Core concepts

**The context window is a budget.** Every tool you connect, every memory file that loads, every file you paste in — all of it consumes the same pool of tokens before you've asked anything. Treat it the way you'd treat any other budget: know what it's going to, cut the things you don't need, leave slack at the top for the quality you actually care about.

**The 40% rule.** Cap your conversations at about 40% of the context window. Past that, quality starts to drop and you should rewind and start fresh rather than patch your way out. This is the opposite of the habit most people bring from ChatGPT (which is to keep going), and it's the biggest behavioral shift of the week.

**Sub-agents and the agent telephone problem.** Delegating a narrowly-scoped piece of work to a sub-agent is cheap and useful — the sub-agent gets a fresh context window, does the one thing, returns a result. Chaining sub-agents together so one's output becomes the next one's input (the agent telephone pattern) is where errors compound and become hard to trace. Keep sub-agent work narrowly scoped. Don't build a chain of them.

**Cross-model code review via `-p`.** The `-p` flag on most CLI tools runs a single non-interactive prompt and exits. From inside your main Claude Code session, you can call out to Codex CLI, GitHub Copilot CLI, or Gemini CLI with `-p "review this file for..."` and get a second opinion from a different model family. The review runs in a separate process, so its tokens don't count against your main session. This is the single most useful advanced pattern in the module.

**Journalist as product manager.** You are not the writer anymore; you are the editor and the product manager. You decide what the model tries, what evaluation looks like, and whether the output ships. The better the model gets at typing, the more important your editorial judgment becomes. This is not a defensive claim — it's a practical one. The model can't tell you whether the lead is wrong.

### By the end of this week, you will be able to:

1. Pick an appropriate `/effort` level for the task in front of you, and explain what each level actually costs
2. Describe what lives in your context window at any given moment, apply the 40% rule to your own sessions, and use `/compact` without silently losing the things you needed to keep
3. Delegate a narrowly-scoped task to a sub-agent without falling into the agent telephone failure mode, and use the double-escape rewind trick to undo a bad decision without losing the good ones
4. Run a cross-model code review on the most important file in your session by calling Codex CLI, GitHub Copilot CLI, or Gemini CLI via its `-p` flag from inside Claude Code
5. Apply the four questions (task, context, tools, money) to choose any AI tool for any job — and explain why editorial judgment becomes *more* important, not less, as the tools get better

Let's finish the course.
