# Module 4: Advanced prompting patterns — exercise solution key

---

## Model student submission

---

**Exercise submission — Exercise 4**

I used my own beat context file (a 3,400-word CLAUDE.md I wrote for covering the state courts in my jurisdiction) and the draft of a story I'm working on about a recent appellate ruling. I ran the session in Claude Code and used Gemini CLI (free tier) for the cross-model review. Here's what I submitted.

---

### 1. The three context-window readings

- **Step 2 (baseline, empty session):** ~11% used, around 120K tokens. Claude's breakdown: system prompt ~2%, tools and schemas ~3%, my CLAUDE.md ~5%, memory file ~1%. Working room to 40%: 29%, or about 320K tokens. Already over my own expectation — I had assumed a fresh session was closer to 3-5%.
- **Step 4 (after loading the draft article):** ~23%. The draft added ~12% on its own. I was a little surprised by this — the article is only about 2,200 words, and I had expected it to consume maybe 3-4% of the window. Claude's reply pointed out that the token cost includes both the file contents and the turn-by-turn back-and-forth we'd had up to that point, which I hadn't been counting as part of "the file." Worth noting for next time.
- **After the bare `/compact`:** ~14%. Gave me back about 9% of the window but dropped things I had explicitly asked it to keep. I rewound and re-ran with a custom instruction, which got me to ~16% but preserved the things I needed.

### 2. What bare `/compact` lost that instructed `/compact` kept

Bare `/compact` kept the high-level gist of the article but dropped one of the three "most important things" Claude had identified in Step 3 — specifically the observation that the draft buried a dollar figure ($2.4M in fees at stake) in the fourth paragraph when it should have been in the lede. When I asked Claude the diagnostic question after the bare compact, it gave me a generic "the article covers a recent appellate ruling" answer and couldn't retrieve the buried-dollar-figure observation. After rewinding and running `/compact keeping everything about the draft including the three most important things and my original editor framing`, the same diagnostic question returned the specific buried-dollar-figure observation. That's the lesson of the week for me in one sentence: **tell `/compact` what matters before you run it, not after**.

### 3. Raw output from the cross-model review (Gemini CLI)

I called `gemini -p` on the draft article via Claude. Here's the raw Gemini output, copy-pasted:

> Review of [draft article] — top three editorial issues from a journalism perspective:
>
> 1. **The lede is procedural, not substantive.** The article opens with "A three-judge panel of the New Jersey Appellate Division on Wednesday affirmed..." which leads with the court's action rather than the stake. The actual story — that $2.4 million in attorneys' fees are at stake and the ruling effectively resets precedent for similar cases in the state — is buried in paragraph four. Consider leading with the stake.
>
> 2. **Attribution imbalance.** The article quotes the prevailing party's attorney twice (once directly, once paraphrased) and the losing side's attorney zero times. The losing side submitted a written response that's referenced but not excerpted. For a 1,200-word appellate-ruling story, giving both sides actual voice is both fairer and more interesting.
>
> 3. **The "similar cases in the state" claim is unsourced.** Paragraph 6 says this ruling "could affect dozens of similar cases currently pending in New Jersey appellate courts," but doesn't cite where that number comes from. If it's from the prevailing attorney, say so. If it's from the reporter's own court-records research, say so. Unsourced magnitude claims in appellate coverage are a credibility problem.

The Claude side of the review (from Step 3, before the cross-model call) had flagged the buried dollar figure and the attribution imbalance, but had not flagged the unsourced magnitude claim in paragraph 6. That's the single most useful thing the cross-model review did for me. Claude had read over that paragraph without stopping on it, and Gemini stopped on it immediately.

### 4. Reconciled judgment

Based on both reviews, here's what I'd actually do next with the draft:

> Rewrite the lede to lead with the $2.4M at stake and the precedent reset, not the panel's procedural action. Add a sourced citation for the "dozens of similar cases" claim in paragraph 6 — I wrote that number from memory after talking to the winning side's attorney, so I need to either attribute it to him on the record or pull a real court-records count before the story goes out. Call the losing side's attorney for a quote; a written response is not a substitute in a story this short. Everything else — the paragraph ordering, the transition between the ruling summary and the impact section, the closing graf — stays as-is.

The cross-model review didn't change my mind on anything Claude had already flagged. It caught one additional thing (the unsourced magnitude claim) that changed my pre-publication checklist. That's the shape of the exercise: most of the value was reinforcement, and the high-leverage value was one specific catch that I wouldn't have made on my own.

### 5. The single most useful thing I learned about managing a session

Running `/compact` without a custom instruction is gambling. For anything I care about, I'm going to write the summarization instruction in a note first, paste it in after `/compact`, and then verify the thing I wanted preserved is actually preserved with a diagnostic question — before I continue working. That's a habit I didn't have before this exercise.

---

---

## Grader notes

---

### What strong work looks like

Strong submissions do four things that separate them from adequate ones.

1. **They show real context-window numbers, not "I took a baseline."** The exercise asks for three specific readings (Step 2, Step 4, and after `/compact`). Strong submissions include the percentages and note where they were surprising — "I had assumed a fresh session was ~3%, the real number was ~11%." Weak submissions just say "I took a baseline" without ever showing the numbers. The whole point of the baseline step is that students see what's actually in their window. If the numbers aren't in the submission, the student probably skipped the step.

2. **Their `/compact` before/after is specific about what was lost.** A strong submission names a specific thing bare `/compact` dropped and shows how the instructed `/compact` kept it. A weak submission says "bare compact was worse than instructed compact" without evidence. The whole point of Steps 5-6 is that students feel the difference between the two compacts on the same file. If the student can't name what was dropped, they either ran only one compact or didn't do the diagnostic question.

3. **They actually ran the cross-model review with a different model family, and they pasted the raw output.** This is the most load-bearing step in the exercise and the one most likely to be skipped or faked. A strong submission pastes the actual raw output from Gemini/Codex/Copilot and names at least one thing the second model caught that the first model didn't — or honestly notes that the two reviews agreed on everything, and explains why that's a signal about the file itself (probably cleaner than the student thought). A weak submission describes the cross-model review in the abstract without showing either tool's output.

4. **Their reconciled judgment is a specific plan, not a vague conclusion.** The reconciled judgment paragraph (Step 9) is the exercise's equivalent of the Module 3 editorial iteration note. Strong submissions say exactly what they'd change and why, drawing on specific points from both reviews. Weak submissions say "I learned that managing a session matters." The point of the exercise is to produce editorial judgment that looks like editorial judgment — a specific next action on a specific file for a specific reason.

---

### Rubric

| Element | Full credit | Partial credit | No credit |
|---|---|---|---|
| **Three context-window readings** (15%) | All three readings present with numbers, at least one moment of noticing something unexpected about the readings. | Some numbers present but not all three, or no reflection on what the numbers meant. | No numbers at all; student describes "taking a baseline" without showing it. |
| **Before/after `/compact` note** (20%) | Names a specific thing bare `/compact` dropped and shows how instructed `/compact` kept it. Shows the diagnostic question's results in both cases. | Mentions the difference but without a specific dropped item. | No comparison, or only one `/compact` run. |
| **Raw cross-model review output** (30%) | Real raw output from a second model family (Gemini, Codex, Copilot — not ChatGPT web, not "Claude on a different day"). Student identifies at least one thing the second model caught that the first didn't, or honestly notes full agreement. | Output is described rather than pasted; or cross-model review was simulated ("I asked Claude twice"). | No cross-model review performed, or performed against the same model. |
| **Reconciled judgment paragraph** (30%) | A specific next action with specific reasons, drawing on specific points from both reviews. Reads like an editor's note, not a summary. | Generic conclusion ("I'd iterate more") without specific changes. | No judgment paragraph, or judgment paragraph has nothing to do with the reviews. |
| **Session-management takeaway** (5%) | One concrete habit the student is going to carry forward. Specific enough to actually change behavior. | Generic reflection about "context management being important." | Missing. |

---

### Common issues to watch for

**The student skipped the baseline reading and pretended it happened.** If the three numbers are missing or suspiciously round ("I had 5% at the start, 15% after the file, 10% after compact"), push back. The whole point of Steps 2 and 4 is that students see the real numbers. Ask them to re-run and submit the actual Claude Code readings.

**The student simulated the cross-model review with a second Claude session.** This is the most common shortcut and the one that defeats the exercise. The point of cross-model review is that you get a second opinion from a *different* model family with *different* blind spots. Asking Claude twice — even in a separate session — doesn't give you that. If a submission's "cross-model review" is clearly a second Claude response, ask the student to install Gemini CLI (free tier) and re-run. Do not award the 30% for this step without evidence of an actual second model.

**The student pasted Gemini (or Codex or Copilot) output but didn't actually use the `-p` flag.** This is subtle. Some students will install the tool, launch an interactive session, paste the file contents in by hand, and paste the response back into their submission. That works for the educational purpose — they did get a second opinion — but it misses the specific skill the exercise is teaching, which is orchestrating the cross-model review from inside Claude Code via `-p` without leaving the session. Award the review step, but note in feedback that the `-p` flag is the pattern worth learning because it makes the second opinion fast enough to use routinely.

**The reconciled judgment is vague.** "I would iterate and improve the file based on both reviews" is not a reconciled judgment — it's a non-answer. A real reconciled judgment names a specific change, a specific reason drawn from one or both reviews, and acknowledges which parts of the reviews the student is *not* going to act on and why. Prompt vague submissions to rewrite the reconciled judgment with at least one specific action.

**The student ran everything but didn't `/compact` at all.** The before/after `/compact` step is required. If the submission talks about the file and the cross-model review but not about `/compact`, they skipped Steps 5-6. Ask them to go back and run the two compacts on a fresh session.

**The student used bare `/compact` only and says it was fine.** This is possible but unlikely. Bare `/compact` does often lose something from Step 3 because the "three most important things" question is exactly the kind of specific detail that gets smoothed over in a generic summary. If a student claims bare `/compact` preserved everything, ask them to show the diagnostic answer they got. Usually the answer is generic enough to reveal that the specifics were lost even though the student didn't notice.

**The student used a file that's too small for the exercise to matter.** If the "most important file" is 200 words of toy content, the `/compact` step won't have anything to lose and the cross-model review won't have anything interesting to catch. Ask the student to re-run on a real file — a draft story, a beat context file, a pipeline script, anything real from their Module 1-3 work.

---

### What the grader does not need to check

The grader does not need to verify the technical correctness of the two reviews themselves. If Claude and Gemini disagree about whether a lede is procedural, that's an editorial question, not a grading question. The grader is assessing whether the student ran the exercise, noticed the disagreement, and produced editorial judgment about how to resolve it — not whether the judgment matches what the grader would have done on the same file.
