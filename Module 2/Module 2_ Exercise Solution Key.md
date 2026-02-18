# Module 2: Exercise solution key

## Model student submission

### CLAUDE.md

```markdown
# CLAUDE.md — City hall beat, Greenfield Daily News

## Beat

I cover Greenfield city government for the Greenfield Daily News. This includes the mayor's office, city council (7 members), the city manager's office, and city departments: Parks & Recreation, Public Works, Finance, Police, Fire.

Current officials:
- Mayor Diana Torres (D), elected November 2023, took office January 2024
- Council President: Margaret Walsh
- City Manager: Harold Briggs (appointed, not elected — does not face voters)
- City Engineer: Robert Huang

Meridian Infrastructure LLC is the contractor for the Riverside Park project, selected through competitive bidding in early 2025.

## Style

- AP style for all writing
- No Oxford comma
- "The city" on second reference, not "Greenfield" every time
- Spell out numbers one through nine; use numerals for 10 and above
- Dollar amounts: $2.3 million, not $2,300,000
- "Council member," not "councilman" or "councilwoman," unless the person uses a different title
- Do not use "officials" as a vague shorthand — name the person or title

## Source standards

- Every factual claim gets an attribution. No orphaned assertions.
- Distinguish verified facts (confirmed by documents or multiple sources) from attributed claims (what one source said)
- If a source makes a numerical claim — a date, a dollar amount, a vote count — note whether it can be independently verified
- Anonymous sources: note why they requested anonymity and what their relationship to the story is
- Tip emails are not sources — they are starting points for reporting. Do not treat them as facts.

## Terminology

- The annual budget process in Greenfield is called the "appropriations cycle"
- City council binding decisions are "resolutions"; city legislation is "ordinances" — do not use these interchangeably
- The Capital Improvement Program (CIP) is the multi-year infrastructure funding plan — do not call it "the capital budget"
- "Change orders" are modifications to a construction contract after it has been awarded — flag any change orders over $50,000 as potentially requiring full council approval (this is disputed; see hard-won lessons when updated)
- The competitive bidding process selects contractors by lowest qualified bid — "lowest bid" and "best bid" are not the same thing

## Avoid

- Do not use "taxpayers" as a synonym for "residents" — not all residents pay property taxes
- Do not use "slammed," "blasted," "ripped," or "fired back" for council disagreements — use "criticized," "questioned," or "pushed back on"
- Do not editorialize about whether spending is appropriate — present the numbers and the arguments on both sides
- Do not use "according to sources" — name the source or explain the anonymity with specifics
- Do not assume a claim is uncontested because only one side was quoted — note when the other party has not responded

## Hard-won lessons

(Empty — add entries here as mistakes happen and get corrected.)
```

---

### Reflection

The biggest change I noticed was in the claim-extraction prompt. Without context, the response to "list every factual claim made by a council member" included several unattributed assertions — things said in the meeting that the model grouped under a general heading without flagging whether they came from a named official or were just characterizations of the discussion. After adding the CLAUDE.md, the same prompt produced a list that explicitly distinguished between named attributions ("Council Member Kim asked whether Meridian had performed work for the city before") and unattributed statements ("it was suggested that phasing the project could reduce budget impact"). That's a direct result of the source standards section: "Distinguish verified facts from attributed claims."

The tip-email prompt also changed in a specific way. Before context, the response described the tip as "potentially actionable" and included a sentence that said the Kerrigan-Whitfield family connection "raises questions about the integrity of the bidding process." That's editorializing, and it's exactly what I told the context file to avoid. With the CLAUDE.md in place, the response reframed the same information: the family connection is unverified information from an anonymous source, the actionable step is to check public records on Whitfield's role in procurement, and the tip should not be characterized as implying wrongdoing until reporting is done. That shift mattered. The without-context version was making a judgment; the with-context version was mapping a reporting path.

The style rules had the least visible effect, probably because the sample documents didn't produce many situations where "taxpayers vs. residents" or "council member vs. councilman" would come up. I kept the style section because it will matter when I'm drafting, but for the analysis prompts in this exercise, it was close to a non-factor.

For the deletion test: my first draft of the CLAUDE.md included a sentence saying "be objective and accurate in all reporting." I cut it. That instruction would not change anything — it's the kind of thing any AI defaults to without being told. I also cut a section I'd written about my personal deadline schedule. It might be useful for planning prompts, but it had no effect on any of the four document-analysis tasks I was running.

What surprised me about the context-vs-prompt question is how much of what I wrote in CLAUDE.md I would have typed into every single prompt without thinking about it. The attribution standards, the "don't treat the tip as a fact" instruction, the terminology distinctions — I would have added those to each individual prompt as a reminder, every time. Having them in a committed file means I don't have to remember to say them. The AI is already calibrated when the session starts. That's a different relationship with the tool than I had before this exercise.

---

## Grader notes

### What strong work looks like

Strong submissions can cite specific before-and-after differences in the AI's output, not just report that it "improved." The best responses quote or paraphrase the actual change — what the AI said without context, what it said with context, and which instruction caused the shift. The CLAUDE.md should read like a working document for a real beat, not a generic list of writing principles. Beat-specific content — named officials, local terminology, specific coverage concerns — is the test.

### Rubric

**CLAUDE.md quality (30%):** The context file should contain beat-specific content that would only apply to this reporter's situation. Strong files name real (fictional) officials, use the correct local terminology (appropriations cycle, CIP, resolutions vs. ordinances), and include at least one rule in the "avoid" section that reflects a real editorial judgment. Generic instructions like "be accurate" or "write clearly" should have been cut by the deletion test. If the student's CLAUDE.md reads like a style guide that could apply to any beat at any publication, that's a sign they didn't do the specificity work. Partial credit for a file that has the right structure but generic content.

**Specific before/after comparison (30%):** This is the most important criterion. The student should cite at least one concrete example of how the output changed. Acceptable evidence: a direct quote from one of the responses, a paraphrase that identifies a specific claim or framing shift, or a description of a structural difference (e.g., "without context it gave me a flat list; with context it separated verified from unverified claims"). "The output was more accurate and professional" does not count. No credit for this criterion without at least one specific example.

**What worked / what didn't (15%):** The student should name at least one instruction that had a visible effect and at least one that didn't, or explain why they couldn't tell. Strong responses connect the "what worked" to a specific section of the CLAUDE.md. It's fine if the style rules didn't produce noticeable differences on these particular documents — what matters is that the student noticed that and has a hypothesis about why.

**Deletion test in practice (10%):** The student should report cutting at least something, or explain why they kept everything after genuinely testing it. Red flag: a student who reports cutting nothing from their first draft. That almost certainly means they didn't apply the test rigorously. Conversely, a student who cut so much the context file is nearly empty may have over-applied it — look at whether what remains is actually sufficient.

**Context vs. prompt framing (15%):** The student should articulate, in some form, that writing instructions into a committed file changes the baseline rather than adjusting a single conversation. The best responses describe a specific instruction they would have typed into every prompt before. Even a rough version of this insight — "I realized I was about to add the attribution rules to every prompt" — counts. Look for any evidence that the student grasps the difference between per-prompt instructions and persistent context.

### Common issues to watch for

- Student submits a CLAUDE.md that copies the sample file from the course resources almost verbatim. The sample is labeled as a reference — the student should have customized it. Look for whether the official names and terminology have been changed, and whether any new sections have been added based on the student's actual beat (or their fictional interpretation of it).
- The before/after comparison is entirely about tone or quality ("it sounded more professional") rather than substance. Push back on these with a comment asking for a specific example of what changed and why.
- Student ran the prompts with context first, then without — or only ran them with context. If the reflection doesn't describe anything surprising or unexpected in the without-context responses, this is a possible sign. The without-context outputs on these documents have some clear weaknesses (especially on attribution), and a student who did the full comparison usually notices at least one of them.
- CLAUDE.md is very long and includes information that has no bearing on document analysis — a detailed personal biography, information about deadline schedules, general journalism ethics principles. The student should have applied the deletion test more aggressively. Note this in feedback.
- The reflection answers the five questions in order but each answer is one or two sentences. The exercise asks for 300-500 words, and a five-answer structure that totals 150 words is probably not engaging seriously with the questions. Credit the completion but note the depth gap.
- Student says the context file "had no effect" on any of the prompts. This is almost certainly a setup issue — CLAUDE.md wasn't in the right directory, or the session was started before the file was created. Encourage them to retry. It's worth one troubleshooting email before penalizing.
