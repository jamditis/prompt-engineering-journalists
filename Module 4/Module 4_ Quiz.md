# Module 4: Advanced prompting patterns

## Quiz

Complete this quiz after finishing the readings and hands-on exercise. You have **two attempts**; the higher score counts.

---

### Question 1

Claude Code advertises a million-token context window. At what point does quality actually start to degrade, according to the videos and readings in this module?

A) It varies by model so unpredictably that there's no rule of thumb

B) Only past 80% of the window, when the model is actively pruning older messages

C) Past about 20-30% of the window, quality starts to drop and the model's reasoning gets less reliable

D) The million-token claim is accurate — quality stays consistent until you hit the hard limit

**Correct answer:** C

**Explanation:** The million-token window is real in the sense that the model will accept that much input, but the quality of reasoning on that input starts to degrade well before you hit the limit — in practice around 20-30% usage. This is why the module teaches the context window as a *budget* rather than a ceiling, and why `/compact`, sub-agents, and the 40% rule all exist. Knowing the contents of your context window matters more than knowing the total.

---

### Question 2

You're in a Claude Code session and you've just made a bad decision — you asked Claude to refactor a file, it went off in a direction you didn't want, and you want to undo it without losing the five good decisions you made before that. Which of the following is the right move, and when does it stop working?

A) Press escape twice to rewind to an earlier state in the session. This works until you've run `/compact`, which fuses older messages together and makes fine-grained rewinding impossible.

B) Press escape twice to rewind. It always works regardless of whether you've run `/compact`.

C) Close the session entirely and start over — there's no way to rewind a Claude Code session

D) Type `/undo` — Claude Code has a built-in undo command for every action

**Correct answer:** A

**Explanation:** The double-escape rewind trick is the fastest way to undo a bad decision without losing the good ones before it. The critical gotcha is that rewinding only works within uncompacted history — once you've run `/compact`, the older messages have been fused into a summary and the fine-grained turn-by-turn history you'd need to rewind into is gone. The practical lesson: rewind before you compact, not after.

---

### Question 3

What is the "40% rule" as taught in Module 4, and why does it matter?

A) `/compact` reduces a session's context usage by about 40% on average

B) At most 40% of your work should be delegated to AI — keep 60% manual

C) Only 40% of the tokens in the context window actually contain your conversation — the rest is system prompt and tool definitions you can't control

D) Cap your Claude Code conversations at about 40% of the context window and start a fresh session rather than pushing past that point. Quality drops sharply past 40%, and rewinding is cheaper than patching a session that has already degraded.

**Correct answer:** D

**Explanation:** The 40% rule is a behavioral discipline, not a technical limit. Once a conversation has consumed about 40% of the context window, quality starts to drop and you should compact, clear, or start a fresh session — not keep pushing. This feels wasteful the first few times because it looks like you're throwing away progress. You're not. You're protecting the work you already did from the context rot that's about to hit. The honest way to continue past 40% is to summarize the session's decisions into a file, launch a fresh session, and load the file — not to keep going in the same window.

---

### Question 4

You're inside a Claude Code session and you want a second opinion on the most important file from a different model family before you commit. You have Claude Code (Anthropic), Codex CLI (OpenAI), and Gemini CLI (Google) all installed. What's the pattern the module teaches for getting that second opinion, and why?

A) Copy the file into a web interface for ChatGPT and paste the response back — same result, easier workflow

B) Ask Claude inside your main session to review the file again — Claude is smart enough to catch its own mistakes

C) From inside your Claude Code session, ask Claude to call the other model with its non-interactive `-p` flag (e.g., `codex -p "review this file for..."` or `gemini -p "..."`). The other tool's reasoning runs in its own separate process, so none of its intermediate thinking consumes your main session's context budget, and you get a second opinion from a different model family that has different blind spots than Claude.

D) Open a second terminal window, launch an interactive Codex or Gemini session, and paste the file in by hand

**Correct answer:** C

**Explanation:** The `-p` flag runs a single non-interactive prompt and exits. From inside Claude Code, you can have Claude call `codex -p "..."` or `gemini -p "..."` (or `copilot -p "..."`) as a one-shot sub-agent that returns a second opinion from a different model family. Context isolation in practice: the other tool's full reasoning chain runs in its own separate process, so none of its intermediate thinking, file reads, or working memory show up in your Claude Code session. Only the final review text comes back into your main session, so it's cheaper and cleaner than running the same review inside your main session. The reason this pattern matters is that a second model family has different blind spots than yours, and editorial judgment gets sharper when two models with different failure modes disagree and you have to reconcile them.

---

### Question 5

Module 4's closing argument is about editorial judgment. Which statement best captures it?

A) Editorial judgment matters less as the tools get better, because the tools will eventually catch the things journalists currently catch

B) Editorial judgment becomes *more* important as the tools get better, not less. The model can't tell you whether the lead is wrong, the quote is out of context, or the story is worth telling — and a pipeline that produces output nobody trusts is worse than no pipeline at all.

C) Editorial judgment matters about the same — AI is a neutral tool that amplifies existing skill

D) Editorial judgment becomes less important for routine work but more important for investigative reporting

**Correct answer:** B

**Explanation:** The video argument — and the argument the course keeps returning to — is that the better the model gets at the back-office work, the more important your editorial judgment becomes. The model can write the scripts, run the pipelines, assemble the data, handle the formatting, schedule the jobs, package the outputs. It cannot make the call about whether the lead is wrong, whether a source is credible, whether a story is worth telling, whether the framing is fair. Those are your calls, and they become load-bearing in exact proportion to how much of the code side of your workflow you're delegating to the model. A working pipeline that produces output nobody trusts is worse than no pipeline at all, which is why the Module 3 rule about checking the output and the Module 4 rule about managing the session are really the same rule said twice.

---

## Quiz scoring

- 5 correct: Excellent
- 4 correct: Good
- 3 correct: Review the readings before proceeding
- 2 or fewer: Schedule office hours with the instructor
