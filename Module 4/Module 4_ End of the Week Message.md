# Module 4: Advanced prompting patterns

## End of the week message

You've completed the final module of the course.

This week was deliberately different from the first three. Modules 1-3 built mechanics — how to set up the tools, write context files, package skills and plugins, and schedule pipelines. Module 4 pulled back from the mechanics to the craft. The shift is real and it's the point: you do not finish this course as a better prompter. You finish it as a project coordinator for a model that's doing the coding keystrokes on the scripts, skills, and pipelines that support your reporting.

**What you learned:**

- How to pick an `/effort` level for the task in front of you, and what each level actually costs
- What lives in your context window at any given moment — system prompt, tools, custom agents, memory files, skills, messages — and why knowing the contents matters more than knowing the total
- The million-token window is real, and quality still starts degrading past about 20-30% usage. Big context is a budget, not a free lunch.
- `/compact` with and without a custom summarization instruction — how to tell it what to keep, and why bare `/compact` silently throws away things you needed
- The 40% rule: cap conversations at about 40% of the window, rewind rather than patch, and feel the discomfort of starting over
- Sub-agents and fresh context windows. Why delegating a narrowly-scoped task is cheap and useful, and why "agent telephone" — chaining sub-agents so one's output becomes the next one's input — is the failure mode to avoid
- The double-escape rewind trick for undoing a bad decision, and why it stops working the moment you run `/compact`
- Cross-model code review via the `-p` flag. Calling Codex CLI, GitHub Copilot CLI, or Gemini CLI as non-interactive sub-agents from inside Claude Code to get a second opinion from a different model family on the most important file in your session. The outside review runs in its own context, but any output you bring back into your Claude Code session still counts against that session's context budget — so what you get is cheaper output, not free output.
- `/remote-control` for driving a long-running session from the web or your phone, and picking up where you left off
- The four questions for picking any AI tool: what's the task, how much context does it need, does it need tool access, what's your real money budget
- Editorial judgment as the skill that becomes *more* important, not less, as the tools get better

**The full arc of the course.** In Module 1 you moved from a browser chat window to a terminal and learned to write project context that follows your work across sessions. In Module 2 you encoded editorial expertise as reusable skills and packaged a real workflow as a shareable plugin. In Module 3 you sketched an automation as a system, staged a real pipeline, and scheduled it so it runs without you. In Module 4 you learned to manage the session itself — to treat the context window as a budget, to delegate narrowly to sub-agents, to get a second opinion from a different model before you commit, and to keep editorial judgment in your own hands while the model handles more of the code-side keystrokes.

Four weeks, four shifts: typing → context files, ad-hoc prompts → reusable skills and plugins, one-off runs → scheduled pipelines, prompting → managing. Each shift makes the next one possible. You finish this course with a set of habits and a toolchain that compounds every time you use them.

**The closing argument, one more time.** Editorial judgment becomes more important as the tools get better, not less. A working pipeline that produces output nobody trusts is worse than no pipeline at all. The model cannot tell you whether the lead is wrong, whether the quote is out of context, whether the source is credible, whether the story is worth telling. Those are your calls. They always were. The tools just gave you more time and more leverage to make them well.

**Final project reminder.** The final project applies everything from the four modules. It's optional — you don't need it to earn a certificate of completion — but it's the best place to consolidate what you learned. The proposal was due at the end of Module 2. The submission is due at the end of Module 4. Details are in the Final Project section of the course.

If you've stuck with this course through four weeks of real work — and if you're reading this message, you have — you already have what you need to keep going without me. The thing that compounds from here is habit, not knowledge. Use the tools. Write your context files. Build your skills. Schedule your pipelines. Read the model's output with an editor's eye. That's the course.

Thanks for taking it.

Joe Amditis
