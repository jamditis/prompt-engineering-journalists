# Module 3: Automation, pipelines, and triggered workflows — exercise solution key

---

## Model student submission

---

**Exercise submission — Exercise 3**

I picked the "city council agenda prep sheet" option because I actually do that by hand every Monday afternoon for my beat and I was curious whether this week's pipeline approach would make it go away as a recurring task. It did.

Here's what I submitted.

---

### 1. One-line description of the pipeline

The pipeline watches my city's council agenda page (published as a PDF the Friday before each Monday meeting), pulls out the items most likely to matter to readers, and writes a short Monday-morning prep doc with each item, the proposed vote, a plain-English explanation of what it means for residents, and a direct link to the agenda PDF page.

### 2. Screenshot of the scheduler firing successfully

I used GitHub Actions. The workflow is on a cron schedule of `0 10 * * 1` — 10:00 UTC every Monday, which works out to about 6 a.m. Eastern on my beat (Claude reminded me that GitHub Actions cron always runs in UTC, so I wrote the conversion as a comment at the top of the workflow YAML so I'd remember why next time, and I also know scheduled runs can be delayed a few minutes during high load). The Actions tab shows three successful runs so far — two test runs I kicked off manually with the `workflow_dispatch` button and one real scheduled run that fired on its own last Monday. The run log shows each of my four stages firing in order (fetch agenda PDF → extract items → summarize in newsletter voice → write prep doc to the repo) and the final step committing the prep doc back to the repo on a branch named `prep/YYYY-MM-DD`.

### 3. Example output on real data

Here's one of the items from the prep doc the pipeline generated last Monday. I have not edited it.

---

**Stormwater fee increase and flood-prevention bond (Item 14, Regular Agenda)**

The council will vote on a $12 million bond issue to pay for stormwater upgrades in six flood-prone neighborhoods on the east side of town, funded by a $2.40/month increase in the existing stormwater utility fee. The council staff report recommends approval. Two council members have publicly said they'll vote no, citing concerns about the fee increase for fixed-income residents. The agenda packet includes the engineering consultant's flood modeling — that's on pages 42-58 of the linked PDF and is where the $12M number comes from.

→ **What to watch:** whether the two dissenting members succeed in amending the item to tier the fee by household income instead of charging every household the same $2.40.

→ **Source:** [Agenda packet, April 12 2026 regular meeting (PDF, 184 pages)](https://example-town.gov/agenda/2026-04-12-regular.pdf)

---

That is a prep item I would use on a Monday morning without editing it.

### 4. The single most useful iteration

The first draft of the pipeline produced prep items that read like meeting minutes — "The Town Council will consider Resolution 2026-114 authorizing..." It was accurate and it was also useless for a prep doc, because it led with the resolution number instead of the stakes.

I told Claude Code:

> "The prep items lead with the resolution number or the agenda item number. I want them to lead with what the vote actually means for residents — the newsworthy fact first, then the mechanism. The system prompt should also tell the model not to start with the organization's name. Rewrite the summarization stage to produce that instead."

Claude rewrote the system prompt on the summarization stage. The new prompt told the model to open with the substantive fact (dollar amount, policy change, who's affected), to keep the tone conversational rather than procedural, to include the vote count only when it matters to the story, and to never open with the council's name or the resolution number. It also added a "What to watch" line for any item that had a visible floor-vote disagreement, which I did not explicitly ask for but which turned out to be the single most useful part of the output.

The second run was immediately better. The prep item above came from the third run, after one more small adjustment to make the "What to watch" line optional for routine items.

---

---

## Grader notes

---

### What strong work looks like

Strong submissions do four things that separate them from adequate ones.

1. **They sketched the pipeline as a system before building it.** The strongest submissions describe the four parts — input, conveyor belt, transformers, output — explicitly, either in the submission itself or inside the prompt they handed to Claude. That's the systems-thinking habit the week is built around. Submissions that jump straight to "I told Claude to build a thing" skipped the step that makes the rest of the pipeline maintainable.

2. **They used plan mode and can prove it.** The exercise explicitly requires plan mode in Part 2. Strong submissions describe the plan Claude proposed — "Claude sketched four stages: fetch the PDF, extract item blocks, summarize each item, write the prep doc" — and mention at least one thing they changed about the plan before approving it. Submissions that say nothing about a plan review, or say they just asked Claude to "build the pipeline," skipped a required step. Grade accordingly.

3. **Their scheduled run is real and visible.** A successful GitHub Actions run log, a `cron.create` confirmation, or a cloud `remote trigger` invocation that's verifiable is the evidence that the pipeline actually moved from "ran once on my machine" to "runs on its own." Submissions with no evidence the scheduler fired — or only evidence of a local one-off run — get partial credit at best, because the scheduling step is the point of the exercise.

4. **Their iteration note is specific and shows editorial judgment.** Weak submissions say "the first version wasn't great so I asked Claude to make it better." Strong submissions say what was wrong (too procedural, led with the resolution number, missed the dissenting votes) and what they told Claude to fix it (specific language about leading with the newsworthy fact, explicit instructions to drop the organization name). The specificity is where the journalism expertise enters the pipeline, and that's the skill the course is trying to build.

---

### Rubric

| Element | Full credit | Partial credit | No credit |
|---|---|---|---|
| **Pipeline description** (20%) | One or two sentences that cover the input, the transformers, and the output destinations. Clear which of the four workflow options the student picked (or that they used their own real beat task). | Description is present but vague — missing the input, the output destination, or what actually happens to the data. | Missing, or describes a different exercise entirely. |
| **Scheduler screenshot / proof** (30%) | GitHub Actions run log, cloud `remote trigger` invocation log, or `cron.create` confirmation that clearly shows the pipeline fired end-to-end in a scheduled environment — not just on the student's own terminal. | Evidence of the scheduler being set up but not of it firing successfully, or only evidence of a manual local run with no scheduling involved. | No screenshot; no evidence the scheduler works. |
| **Example output on real data** (30%) | One item (or short sample) from the pipeline's real output that would be usable as-is by a human editor. Lead with the story, not the structure. Plausible as something the student would actually use on the beat. | Output exists but reads like a first-draft AI summary — too formal, too structural, too generic. Would need significant editing before use. | Clearly unedited first-draft AI slop, or not from the student's actual pipeline run. |
| **Iteration description** (20%) | Describes both what the first output looked like and specifically what the student told their CLI tool to fix it. Shows cause and effect and editorial judgment. | Describes the problem with the first output but is vague about the fix, or vice versa. | Says only "I iterated" with no specifics. |

---

### Common issues to watch for

**The student skipped plan mode.** The exercise explicitly requires plan mode in Part 2. If a submission describes the build step but says nothing about reviewing a plan, or says they just asked Claude to "build the pipeline," they skipped a required step. Ask them to redo Part 2 and describe what the plan review looked like and what (if anything) they changed about the plan before approving it.

**The API key is visible in a screenshot.** This happens. If a student shares a screenshot showing `ANTHROPIC_API_KEY=sk-ant-...` in the terminal, in a script, or — worst case — in a committed repo file, let them know gently that they should rotate the key immediately (console.anthropic.com → API Keys → revoke). Don't dock points — it's a learning moment — but flag it clearly. If the repo is public, the key is already compromised.

**The scheduled environment isn't actually different from the local environment.** A subtle failure mode: the student sets up `cron.create` inside a Claude Code session on their laptop, closes the laptop, and the scheduled run never fires — but they don't notice because the pipeline "worked" when they tested it locally. If a submission shows only local test runs and no evidence the scheduler fired while the machine was idle, ask them to either (a) verify the scheduler fired on its own, or (b) switch to a cloud-based scheduler (GitHub Actions or a cloud `remote trigger`) that doesn't depend on their machine being awake.

**The student treated GitHub Actions cron like local time.** GitHub Actions scheduled workflows run on GitHub-hosted runners in UTC. If a submission says "I set the cron for 6 a.m. so it runs at 6 a.m. my time," the job will fire at 6 UTC — which is 1-2 a.m. Eastern depending on daylight saving. Ask the student to either (a) convert the desired local time to UTC and update the cron expression, or (b) add a note in the workflow YAML explaining the conversion so future-them doesn't forget. Also worth mentioning: GitHub Actions scheduled runs can be delayed by several minutes (occasionally longer) during high load, so the schedule is best-effort, not guaranteed-to-the-minute.

**The scheduled run fails with a secret-not-found error.** Very common for students using GitHub Actions for the first time. Local runs work because the API key is in the shell environment; the Action run fails because the same key isn't in the repo's encrypted secret store. The fix is: repo Settings → Secrets and variables → Actions → New repository secret → add the key. Then reference it in the workflow YAML as `${{ secrets.MY_API_KEY }}`. If a submission describes this exact failure and a fix, give full credit — it's the most authentic debugging experience the week offers.

**The self-triggering PR loop.** If the pipeline pushes its output back to the repo and that push re-triggers the Action, the student will see repeated runs stacking up. This is exactly the bug the live demo in Video 2 hits on camera. The fix is a path filter or a commit-author filter so commits made by the Action itself don't re-trigger the workflow. Students who mention this bug and how they fixed it are paying attention — give them credit.

**The iteration description is vague.** "I asked it to make the summary better" doesn't show editorial judgment. The point of Part 3 is that students apply their journalism instincts — they recognize something reads wrong and they describe what's wrong specifically. "Too formal" is a start; "leads with the resolution number instead of the impact on residents" is better. Prompt vague submissions to go back and add specifics.

**The output is generic and could describe anything.** A signal that the extraction stage returned empty content and the LLM is making up plausible-sounding text from nothing. A tell is a summary that's generic enough to apply to any story ("the council voted on a budget measure affecting residents"). If the submitted output feels suspiciously non-specific, ask the student what input they ran it on and whether they can verify the output against the original source.

---

### What the grader does not need to check

The grader does not need to see the actual source code the student's CLI tool produced. The exercise is about whether the student can run the four-stage loop — sketch the pipeline as a system, review the plan, test small, schedule it — not about whether the script under the hood is elegant. If the pipeline runs on a schedule and produces usable output, the code works well enough. Stage-by-stage code review is a Module 4 skill, not a Module 3 grading criterion.
