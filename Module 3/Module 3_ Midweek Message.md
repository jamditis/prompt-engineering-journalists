# Module 3: Automation, pipelines, and triggered workflows

## Midweek message

Hi everyone,

By now you should have watched both videos — the conceptual overview of thinking in systems and the live demo where we schedule the Mamdani project and push it to a live GitHub Pages dashboard — and made a start on your own scheduled pipeline. If you've described your workflow to Claude Code in plain English, sketched out the four stages (input → conveyor belt → transformer → output), reviewed the plan in plan mode, and run it once end-to-end on real data, you're on track. The scheduling step comes next.

A few common sticking points this week.

**"Which scheduler should I pick?"** If your pipeline needs to run while your laptop is closed or on battery, the answer is not `cron.create`. The in-session scheduler is great when you have a machine that stays on — a home desktop, an always-on mini PC, a server — but it disappears with the tmux session it lives in. For anything that needs to run on its own, use a cloud `remote trigger`, a GitHub Actions scheduled job, or a hybrid where the cloud wakes the system up and your local machine does the heavy work. If you're still unsure, ask Claude Code to help you decide — describe where your data lives, how often the pipeline needs to run, and what machine you'd want doing the work, and let it walk through the tradeoffs with you.

**Plan mode is a habit, not a button.** If you only hit `/plan` on the first build and then stopped using it, go back. The whole point of plan mode is that you use it every time, including — especially — on the small tweaks that look "obviously correct." The pipeline that you're 100% sure will work is the one that needs a two-minute plan review, not a rushed edit.

**"My GitHub Action keeps failing."** Two of the most common causes: (1) the Action doesn't have permission to write back to the repo (you need to enable write permissions in the repo settings under Actions → General → Workflow permissions), and (2) a secret isn't wired up — the Action is trying to read an environment variable that exists on your laptop but not in GitHub's secret store. Paste the exact error from the Actions tab back into Claude Code. Don't paraphrase — Claude already knows the workflow YAML it wrote for you, and with the real error text it can usually point at the right fix on the first try.

**Watching out for a self-triggering PR loop.** If your pipeline pushes results back to the repo and that push triggers a new run of the pipeline, congratulations, you've built a loop. The fix is usually a branch filter or a path filter on the Action so that commits the Action itself makes don't re-trigger it. The live demo in Video 2 hits this bug on camera — if you're debugging the same thing, you are not alone. Watch that segment again.

**Rule of thumb on the three rules.** If you're stuck, ask yourself which of the three rules you'd be breaking with the next thing you're about to try. If the answer is "test small," go run it on 3 inputs before you touch the 300-input batch. If the answer is "never put secrets in code," stop and move that key to an environment variable before you do anything else. The rules exist so that the interesting mistakes happen to somebody else, not to you.

Keep going. The gap between "I wrote a working pipeline" and "I have a pipeline that runs on its own while I'm asleep" is smaller than it looks from the outside, and you're already on the far side of it.

Joe Amditis
