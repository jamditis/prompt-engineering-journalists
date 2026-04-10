# Module 4: Advanced prompting patterns

## Midweek message

Hi everyone,

By now you should have watched all four short videos (D1-D4), read at least Mollick's "Management as AI superpower" and Willison's "The normalization of deviance in AI," and started the context-management exercise. If you've taken a context-window baseline, loaded a real file from your own work into a Claude Code session, and run at least one `/compact`, you're on track. The cross-model review step is where most people stop to think, and that's good — this is the week to think.

A few common sticking points this week.

**"I don't have Codex CLI or Copilot CLI installed — can I still do the cross-model review?"** Yes. The exercise asks you to call a *different* model through its non-interactive `-p` flag. If you're a Claude Code user and you don't have another CLI tool installed, Gemini CLI has a free tier — the install is `npm install -g @google/gemini-cli` and you run the review with `gemini -p "..."`. You don't need a second paid subscription to do this exercise. You need access to a different model family than the one you've been running your main session on.

**"`/compact` deleted something I needed."** That's exactly what the video is warning you about. The lesson isn't "don't use `/compact`." The lesson is "use `/compact` with a custom summarization instruction that says what to keep." If you just ran bare `/compact`, rewind (double-escape) before you go any further, then run it again with something like `/compact keeping all decisions about [the thing you're working on] and the full contents of [the file you loaded]`. The habit is: tell `/compact` what matters before you run it.

**"My cross-model review said something different from Claude. Now what?"** That is the exercise working as intended. The whole point of cross-model review is to surface the things one model family misses that another catches. Read both reviews and decide. Don't assume either is right by default — they're both wrong in different ways, and your job this week is to reconcile the two reads into a judgment. Write down which points each model flagged that the other didn't, and then make the call yourself. That's editorial judgment. That's the skill.

**"I hit 40% and want to keep going."** Don't. This is the behavioral shift of the week, and it's uncomfortable the first few times. Past 40%, quality starts to drop and your work gets worse in ways you often can't see until much later. Rewind to a clean state, write a short summary of what you'd decided so far into a file (not into the chat), launch a fresh session, load the summary file, and continue. You'll feel like you're losing progress. You're not. You're protecting the work you already did from the context rot that's about to hit.

**"`/remote-control` is confusing — do I have to use it for the exercise?"** No. Remote control is a Video D4 feature for driving a long-running session from your phone or a web browser. It's useful but optional. The required exercise is the cross-model review in Video D3, not remote control. If you want to try remote control separately, go for it — but it's not on the grading rubric.

**One reframe for the hard part of this week.** You are the product manager now. The model is the writer, the intern, the junior hire. Your job is to give it clear instructions, evaluate the work it returns, and decide what ships. If you find yourself doing the typing, stop and ask whether you should be delegating that part to the model and reviewing the output instead. If you find yourself accepting output without reading it, stop and remember that editorial judgment is the thing that can't be delegated.

[INSERT STUDENT THREADS/DISCUSSIONS]

Joe Amditis
