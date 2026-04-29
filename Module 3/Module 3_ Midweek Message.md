# Module 3: Automation, pipelines, and triggered workflows

## Midweek message

Hi everyone,

By now you should have watched both videos — the conceptual overview of thinking in systems and the live demo where we schedule the Mamdani project and push it to a live GitHub Pages dashboard — and made a start on your own pipeline. If you've described your workflow to Claude Code in plain English, sketched out the four stages (input → conveyor belt → transformer → output), reviewed the plan in plan mode, and run it once end-to-end on real data, you're on track. Scheduling and deployment come next.

A few things from the forums this week.

**Live office hours today at 4:30 PM ET.** Filipa and I will be on Zoom for an open Q&A — bring your pipeline, your error message, your plan-mode output, whatever's stuck. Join here: https://utexas.zoom.us/j/81431451207. If you can't make it live, drop the question in the instructor's forum and I'll answer there.

**Missing reading link, fixed.** Linda Ho caught that one of the Module 3 reading links wasn't going anywhere. The article I meant to include is Simon Willison's "Code proven to work": https://simonwillison.net/2025/Dec/18/code-proven-to-work/. Filipa and Amy are swapping it on the Knight Center side. It's worth reading even if you've already moved past the readings — it's the cleanest framing I've seen for thinking about pipelines as "what do I actually trust this output for?" Linda's thread: https://www.kccourses.org/mod/forum/discuss.php?d=308305

**Environment variables aren't gatekeeping.** Judith Denkmayr started a thread about frantically Googling "environment variables" after Video 1, and Yvonne Pöppelbaum followed up about hidden dotfiles suddenly appearing on her desktop. If you're new to either of those concepts, you are exactly the audience this module is designed for. Don't try to learn shell security as a separate side quest. Paste the unfamiliar term into Claude Code with "I just heard this in a video about pipelines — explain it like I've never opened a terminal before, then show me what to do for my project." That is the workflow, not a workaround. https://www.kccourses.org/mod/forum/discuss.php?d=308319

**Why did the same search find different videos?** Adam Marcus asked a sharp question on the safeguards thread: in the Mamdani video, why did a re-run surface clips the first run missed, and what does that say about reliability? Short answer — model output is non-deterministic, search APIs return different ranked results across calls, and pipelines amplify both. The three safeguards Todd Schmiedeke listed (knowing where your secrets live, knowing where your backups live, knowing how to stop the thing) are how you live with that non-determinism instead of pretending it isn't there. I'll go deeper on this in office hours if there's interest. Adam's question: https://www.kccourses.org/mod/forum/discuss.php?d=308324 — Todd's list: https://www.kccourses.org/mod/forum/discuss.php?d=308308

**Pipelines you're building.** A few that stood out from the exercise thread: Yvonne's Weltreporter feed-to-Circle skill for German-speaking correspondents, Judith's daily 7am TikTok monitoring, Reinaldo Chaves's Brazil disinformation scraper, Margot Martin's podcast-script-to-everything content pipeline, Konstantinos Papadopoulos's per-journalist performance analytics, and Chloé Sondervorst's public-broadcaster topic-visibility tracker. Read each other's threads — the variety is the point. Most of you are not building the same pipeline, and that's exactly what we want.

A few common sticking points worth naming.

**Which scheduler should I pick?** If your pipeline needs to run while your laptop is closed or on battery, the answer is not the in-session scheduler. That's great when you have a machine that stays on, but it disappears with the tmux session. For anything that needs to run on its own, use a cloud remote trigger, a GitHub Actions scheduled job, or a hybrid. If you're stuck, describe your data, your cadence, and the machine you'd want doing the work, and let Claude Code walk through the tradeoffs with you.

**My GitHub Action keeps failing.** Two common causes: (1) the Action doesn't have permission to write back to the repo (Settings → Actions → General → Workflow permissions), and (2) a secret that exists on your laptop isn't wired up to GitHub's secret store. Paste the exact error from the Actions tab into Claude Code. Don't paraphrase — Claude already knows the workflow YAML it wrote for you, and the real error text usually points at the right fix on the first try.

**Plan mode is a habit, not a button.** If you only used `/plan` on the first build and then stopped, go back. Plan mode is for the small tweaks that look obviously correct, not just the big ones. The pipeline you're 100% sure will work is the one that needs the two-minute review.

Discussion posts are due Friday. The safeguards forum has the most substantive thread going right now — if you don't have a topic yet, start there.

Keep going. The gap between "I wrote a working pipeline" and "I have a pipeline running on its own while I'm asleep" is smaller than it looks from the outside, and most of you are already on the far side of it.

Joe Amditis
