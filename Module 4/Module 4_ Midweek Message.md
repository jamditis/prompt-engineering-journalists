# Module 4: Advanced prompting patterns

## Midweek message

Hi everyone,

By now you should have watched all four short videos (D1-D4), read at least Mollick's "Management as AI superpower" and Willison's "The normalization of deviance in AI," and started the context-management exercise. If you've taken a context-window baseline, loaded a real file from your own work into a Claude Code session, and run at least one `/compact`, you're on track. The cross-model review step is where most people stop to think, and that's good — this is the week to think.

This is the last full week of the course. Next, the final project.

Before we jump into the student posts, a quick reminder:

**Our final live office hours are tomorrow, Thursday, May 7, at 11:30 AM ET.** Filipa and I will be on Zoom for one last open Q&A — bring your final project, your context-management questions, your cross-model review reconciliation, whatever's stuck. The Zoom link is in the Knight Center course info and the Course Announcements forum. If you can't make it live, drop the question in the instructor's forum and I'll answer there.

A few things from the forums this week:

**The exercise, done on a real pipeline, end to end.** [Hajar Erraji ran the manager + sub-agent flow on her actual ai-news-pipeline project](https://www.kccourses.org/mod/forum/discuss.php?d=308650) — context baseline at 38%, loaded `run_all.py`, ran a focused `/compact`, then called Gemini CLI as the cross-model reviewer. When Gemini's OAuth refused the non-interactive call, Claude Code adapted and ran the review itself, which is exactly the kind of orchestrator behavior the videos are pointing at. The reconciliation surfaced three high-severity bugs in a pipeline that looked fine from the outside, including silent JSON corruption. That is the model exercise this week.

**A different exercise shape — workflow plus cron plus second-model review.** [Konstantinos Papadopoulos built an SEO workflow in Claude CLI mode](https://www.kccourses.org/mod/forum/discuss.php?d=308552) — pulls Google Trends, scans competitor sites for keywords, identifies content gaps, proposes article ideas. He had Codex review the workflow, approved the suggested fixes, and set the whole thing up to run on a cron job with a Python equivalent he can fire from his browser, with all findings pushed to a private GitHub folder. Read it for what an end-to-end pipeline can look like when it isn't shaped like anyone else's.

**Normalization of deviance, with World Cup stakes.** [Felipe Nuñez caught himself in the exact pattern Willison is warning about](https://www.kccourses.org/mod/forum/discuss.php?d=308579) — running the same prompt 48 times to generate team profiles for the FIFA World Cup, and slowly starting to trust the model's factual accuracy instead of double-checking it against current rosters. The Willison piece in this week's reading list tells you what to do once you notice this. The hard part is noticing.

**What to delegate to a sub-agent, in one sentence.** [Daniel Wolfe sketched a clean delegation pattern](https://www.kccourses.org/mod/forum/discuss.php?d=308783): main agent does the broad task (extract the most interesting figures from an earnings article), sub-agent does the narrow task (build a sample chart), and a human still does the math check, the brand check, and the publish call. Read it once, then go check whether your own pipeline is doing the broad-and-narrow split or asking one agent to do both at once.

**Four questions, four roles, one credit card.** [Judith Denkmayr's reflection on the four-questions framework](https://www.kccourses.org/mod/forum/discuss.php?d=308631) is the most honest piece I've read this week on what it feels like to evaluate a tool inside an organization — editorial, strategy, product, and the question of who holds the budget. The four questions aren't only a tool-picking framework. They're a way of finding out where the silos actually are.

A few common sticking points this week.

**"I don't have Codex CLI or Copilot CLI installed — can I still do the cross-model review?"** Yes. The exercise asks you to call a *different* model through its non-interactive `-p` flag. If you're a Claude Code user and you don't have another CLI tool installed, Gemini CLI has a free tier — the install is `npm install -g @google/gemini-cli` and you run the review with `gemini -p "..."`. You don't need a second paid subscription to do this exercise. You need access to a different model family than the one you've been running your main session on.

**"`/compact` deleted something I needed."** That's exactly what the video is warning you about. The lesson isn't "don't use `/compact`." The lesson is "use `/compact` with a custom summarization instruction that says what to keep." If you just ran bare `/compact`, rewind (double-escape) before you go any further, then run it again with something like `/compact keeping all decisions about [the thing you're working on] and the full contents of [the file you loaded]`. The habit is: tell `/compact` what matters before you run it.

**"My cross-model review said something different from Claude. Now what?"** That is the exercise working as intended. The whole point of cross-model review is to surface the things one model family misses that another catches. Read both reviews and decide. Don't assume either is right by default — they're both wrong in different ways, and your job this week is to reconcile the two reads into a judgment. Write down which points each model flagged that the other didn't, and then make the call yourself. That's editorial judgment. That's the skill.

**"I hit 40% and want to keep going."** Don't. This is the behavioral shift of the week, and it's uncomfortable the first few times. Past 40%, quality starts to drop and your work gets worse in ways you often can't see until much later. Rewind to a clean state, write a short summary of what you'd decided so far into a file (not into the chat), launch a fresh session, load the summary file, and continue. You'll feel like you're losing progress. You're not. You're protecting the work you already did from the context rot that's about to hit.

**"`/remote-control` is confusing — do I have to use it for the exercise?"** No. Remote control is a Video D4 feature for driving a long-running session from your phone or a web browser. It's useful but optional. The required exercise is the cross-model review in Video D3, not remote control. If you want to try remote control separately, go for it — but it's not on the grading rubric.

**One reframe for the hard part of this week.** When you're working on the code side of your workflow — a script, a skill, a pipeline, a config file — the skills that pay off are the project-coordinator ones: specify what you want clearly, read what the model returns, give direct feedback, and decide what you'll keep. If you find yourself typing code you could have described in a sentence, stop and delegate it. If you find yourself accepting the model's code without reading it, stop and read it — that's the judgment call that can't be delegated. (Your reporting and your writing are separate from all of this. Module 4 is not about handing the model your story.)

Discussion posts and the exercise are due Friday. The final project is the last big lift — submit it here: [Filipa, please add the final project submission Google Form link]. If you don't have a topic yet, pick one of the patterns above and adapt it. Most of you have already built most of what you need over the last three weeks.

Joe Amditis
