# Module 3: Custom skills for Claude Code — exercise solution key

## Model student submission

### Part 1: Source verification results

**Claim under review:**
> "A new study from Harvard Medical School found that drinking coffee before 8am increases cortisol levels by 400%, leading to long-term adrenal fatigue. Doctors are now recommending waiting until 10am for your first cup."

---

**Stop**

Before searching, I noticed that I already had an opinion about this claim. I've seen content about "cortisol windows" before and vaguely thought it was plausible — something about not drinking coffee first thing in the morning. That prior exposure made me want to accept the claim without scrutiny. The specific details (Harvard, 400%, adrenal fatigue, the 10am recommendation) felt authoritative even before I looked anything up. That's the tell: the claim is structured to sound credible, not to be verifiable. Before I searched anything, I wrote down my assumption so I could check it against what I found.

---

**Investigate the source**

The claim names Harvard Medical School as the origin of a specific study. That's a concrete, checkable fact.

I searched PubMed for studies from Harvard Medical School on caffeine and cortisol. No study matching this description exists in the database. I also searched Google Scholar using the terms "Harvard cortisol coffee 400" and "Harvard Medical School caffeine adrenal fatigue." Nothing appeared. I searched the Harvard Medical School news and research archive directly at hms.harvard.edu — no announcement, no press release, no article.

I searched Google News for coverage of this supposed study. A claim this specific from an institution this prominent would generate health journalism coverage. There was none. No outlet — not Reuters Health, not Stat News, not WebMD, not the Harvard Health Blog — had covered this study. That absence is informative. Major health studies from Harvard Medical School get covered. This one wasn't covered because it doesn't exist.

**Finding:** The named source does not hold up. There is no Harvard Medical School study on this topic.

---

**Find better coverage**

I searched for fact-checks on the claim itself. I found:

- The Cleveland Clinic's health library explicitly states that "adrenal fatigue" is not a recognized medical diagnosis. Their article notes that the term is used in wellness and functional medicine circles but is not accepted by endocrinologists or the major medical bodies that define diagnostic categories.
- The Endocrine Society's position: adrenal insufficiency is a real and serious condition; "adrenal fatigue" as described in wellness content is not.
- A 2002 study published in Psychosomatic Medicine (Lovallo et al.) found that caffeine does amplify cortisol response, particularly in people who don't habitually drink coffee. This is the kernel of real science. It does not support a 400% figure, and it was not from Harvard.
- Andrew Huberman (Stanford neuroscientist) has recommended delaying morning coffee until after the natural cortisol peak (roughly 90-120 minutes after waking). This recommendation circulates widely in health content and is sometimes distorted in retelling. Huberman cites cortisol rhythms as the basis, not adrenal fatigue, and he is not Harvard.

The "better coverage" check surfaced legitimate science, but none of it resembles the claim. The legitimate research is more modest and attributed to different sources.

**Finding:** No credible journalism or scientific coverage of this specific claim exists. The underlying topic (cortisol and coffee timing) has a real evidence base, but it doesn't produce the numbers or conclusions in the claim.

---

**Trace the claims**

Three specific claims require tracing:

1. **"A new study from Harvard Medical School"** — No such study exists in PubMed, in Harvard's own research communications, or in health journalism coverage. This attribution appears to be fabricated.

2. **"400% increase in cortisol"** — This figure does not appear in the published literature on caffeine and cortisol. The Lovallo et al. research shows cortisol elevations from caffeine, but they are context-dependent and measured in percentage points, not multiples of baseline. A 400% cortisol increase would represent a cortisol level five times normal — a number that would indicate a serious medical emergency. No study in the literature produces or claims this figure.

3. **"Adrenal fatigue"** — The American Medical Association does not recognize adrenal fatigue as a diagnosis. The Endocrine Society does not recognize it. The Cleveland Clinic explicitly describes it as a term used in alternative medicine that lacks scientific validation. It is not in the ICD-10 diagnostic codes. The concept appears in wellness content and functional medicine but has no standing in mainstream medical evidence.

The traceable kernel: cortisol does peak in the morning for most people (the cortisol awakening response), and caffeine can interact with that peak. Some researchers suggest this as a reason to delay coffee intake. This advice exists, is contested, and is associated with Huberman and similar communicators — not Harvard.

**Finding:** Each specific, verifiable element of the claim (Harvard study, 400%, adrenal fatigue) either does not exist in the literature or is not recognized by credentialing medical bodies. The claim takes a real topic, attaches a prestigious institution name, and invents specific numbers to make it feel scientific.

---

### Part 2: Claim verdict

The claim is false as stated. No Harvard Medical School study on coffee timing and cortisol exists. The 400% figure appears nowhere in the published research on caffeine and cortisol. "Adrenal fatigue" is not a recognized medical diagnosis — the Cleveland Clinic and the Endocrine Society have specifically addressed this. The underlying topic is real: cortisol does peak in the morning, caffeine does interact with cortisol, and some health communicators recommend delaying coffee intake based on this. But the specific claim misrepresents that evidence by inventing an institutional source, a dramatic statistic, and a discredited mechanism. This is a pattern common to wellness misinformation: a real observation is dressed in fabricated authority. The claim should not be amplified or treated as a news peg without a verified, independent source.

---

### Part 3: Custom skill

**Task:** Evaluating city government press releases before coverage

**One-sentence explanation:** This skill encodes the process of reading a city press release the way an editor would — looking for what the release is trying to accomplish, what claims need verification, and whose perspective is missing — before deciding whether and how to cover the story.

**What was cut during the deletion test:** An early draft included an instruction to "read the press release carefully and thoroughly." That instruction was cut because removing it changed nothing — Claude reads whatever is provided regardless. A step telling Claude to "consider the political context" was also cut; it was too vague to change behavior in any specific way. The remaining steps are kept because each one produces a distinct, checkable output.

---

**Skill file:**

```markdown
---
name: press-release-evaluator
description: Evaluate a city government press release before coverage. Identifies news value, claims requiring verification, missing stakeholders, and what the release is trying to accomplish.
version: 1.0
author: [student name]
tags: [local government, press releases, source evaluation, beat reporting]
---

# Press release evaluator

Use this skill when you receive a city government press release and need to decide how to approach coverage. Work through each step in order. Be specific — quote the release text when flagging something.

## Step 1: Identify what the release is announcing

State in one sentence what the city says is happening. Then identify the release type:
- Policy announcement (new rule, ordinance, program launch)
- Personnel announcement (hire, firing, promotion, appointment)
- Project update (construction, infrastructure, ongoing initiative)
- Event or ceremonial (ribbon-cuttings, commemorations, awards)
- Response or statement (reacting to news, addressing criticism)

The release type tells you how much independent verification the story requires. A response statement requires more scrutiny than a ribbon-cutting.

## Step 2: Identify what the release is trying to accomplish

Every press release has a purpose beyond informing the public. State plainly what the city is trying to do with this release:
- Claim credit for something
- Get ahead of a negative story
- Shift attention from something else
- Announce a decision without inviting scrutiny
- Build support for an upcoming vote or policy

This doesn't make the release false. It tells you what framing to resist when writing.

## Step 3: Flag claims that require verification

List every factual claim in the release that can be independently checked. For each one, note:
- What the claim is (quote the release)
- What source would verify or contradict it
- Whether the claim is checkable before deadline

Examples of claims that always require verification:
- Budget figures and percentages ("saved the city $2 million")
- Comparative claims ("lowest crime rate in 20 years")
- Timeline claims ("completed on schedule")
- Causal claims ("the program reduced homelessness by 30%")

Flag the claim even if you expect it to be accurate. Do not verify during this step — just identify what needs checking.

## Step 4: Identify who is not in this release

List the stakeholders, critics, or affected parties who are not quoted and not mentioned. For each one, note whether their absence is likely intentional and whether they should be contacted before publication.

Ask:
- Who would push back on this announcement?
- Who is affected by this decision who isn't quoted?
- Is there an opposing council faction, an affected neighborhood, a community organization, or a watchdog group?
- Has this department or project been criticized before? By whom?

A press release written without critics is not balanced coverage. This step identifies who to call.

## Step 5: Assess news value

Evaluate whether and how to cover this story:

- **Cover as written (with attribution):** The announcement is genuinely newsworthy and the claims are verifiable. Report it as news with city as source.
- **Cover with significant independent reporting:** The announcement is newsworthy but requires verification, additional sources, or context the release omits.
- **Cover as a feature or follow-up angle:** The news peg is thin but the release surfaces a story worth telling differently.
- **Hold:** The announcement isn't independently newsworthy. Monitor for developments.
- **Do not cover:** The release is pure promotion with no public interest angle.

State your recommendation and the reason for it in one sentence.

## Output format

Deliver findings as a structured memo:

**What the release announces:** [one sentence]
**What the release is trying to accomplish:** [one sentence]
**Claims requiring verification:** [bulleted list with source suggestions]
**Missing stakeholders:** [bulleted list with notes on whether to contact]
**Coverage recommendation:** [one of the five options above, with reason]
```

---

### Reflection (200-300 words)

The SIFT skill changed how I entered the verification process, and the difference showed up at the first step. Before I searched anything, the skill prompted me to stop and document what I already believed. I thought the claim was probably true — I'd absorbed some version of the "don't drink coffee first thing" idea from somewhere and hadn't questioned it. Without the skill, I would have gone straight to Google to "confirm" it, which is a terrible way to fact-check something you're already inclined to believe. The stop step made that bias visible before it could shape my search.

The "trace the claims" step was the most useful for this particular claim because the claim had three distinct elements that each needed separate treatment. Without that structure, I might have stopped after finding the cortisol research is real and called it "mostly true." The skill forced me to check each specific assertion — the Harvard attribution, the 400% figure, the adrenal fatigue diagnosis — individually. They all failed separately, which matters. A claim can have a real topic at its center and still be fabricated in every specific detail.

What the skill missed: it didn't tell me to check whether the claim had already been fact-checked by organizations like Snopes or Health Feedback. I found that angle on my own during the "find better coverage" step, but only because I already knew to look. A student without that background might not have thought to check fact-checking organizations directly. That's an instruction I'd add to the skill: after searching for news coverage, explicitly search [claim topic] + "fact check" or [claim topic] + site:snopes.com. The current skill assumes you know where to look.

---

## Grader notes

### What strong work looks like

Strong submissions treat each SIFT step as producing a distinct output, not as a label to attach to whatever they found. A student who writes "I investigated the source and found it was false" has not done the step — they've named it. Strong work shows the actual search process: what they searched, where they looked, what they found or didn't find. The absence of a result (no PubMed study, no news coverage) is itself evidence that should be documented.

Strong work also separates the three distinct false claims rather than bundling them into a general "this is fake." Harvard attribution, 400% figure, and adrenal fatigue are three separate claims requiring three separate checks. Students who treat them as one claim are doing less rigorous work.

For the custom skill, strong work encodes a specific beat and a specific task. The skill should not work equally well for any journalism task — if you could replace "city press release" with "corporate press release" and the instructions would be identical, the skill is too generic. Beat specificity is the standard.

### Rubric

**Skill installation (15%)**
- Full credit: Student confirms the skill is installed and functional; shows they read the SKILL.md file and can describe the YAML frontmatter and the SIFT structure; shows they read a hook file and can describe when it would fire.
- Partial credit: Skill installed but student only describes surface features without demonstrating they understood the structure.
- No credit: No evidence of installation or the installation failed and the student didn't attempt troubleshooting.

**SIFT application (35%)**
- Full credit: All four steps documented with specific observations. Each step produces evidence, not just a label. Stop step captures a named prior assumption. Investigate step shows actual search attempts. Find better coverage step names specific sources consulted. Trace step evaluates each major claim independently.
- Partial credit: All four steps present but some are thin — a step names an action without showing what was found, or the trace step bundles claims rather than separating them.
- No credit: Fewer than four steps documented, or the documentation is so vague that it's unclear what the student actually did.

**Finding accuracy (20%)**
- Full credit: Student correctly identifies the claim as false; correctly identifies that no Harvard study exists; correctly flags "adrenal fatigue" as a non-recognized diagnosis; correctly questions or rejects the 400% figure; finds at least one legitimate source on cortisol and caffeine timing; accurately describes what the real science says.
- Partial credit: Student reaches the correct verdict (false) but mischaracterizes the underlying science, misses one of the three specific false claims, or doesn't find a legitimate source.
- No credit: Student reaches the wrong verdict, or reaches the right verdict for unsupported reasons.

**Custom skill (20%)**
- Full credit: Skill encodes a specific, recurring task on the student's beat; YAML frontmatter is present and correctly formatted; steps are ordered as they would actually be performed; deletion test was applied and the student can name something they cut; skill is specific enough that it would behave differently on different types of documents.
- Partial credit: Skill is present but too generic to demonstrate beat knowledge; deletion test not mentioned; steps are in an arbitrary order that doesn't reflect real workflow.
- No credit: No skill submitted, or the submitted file is not a skill (a prompt, a template, a list of questions without structure).

**Reflection quality (10%)**
- Full credit: Student is specific about how the skill changed their process, not just that it "helped"; identifies at least one concrete gap in the skill based on something they noticed during the exercise; 200-300 words; no vague claims about the tool being "useful" without describing how.
- Partial credit: Reflection is present but generic — could have been written without doing the exercise.
- No credit: Reflection absent or fewer than 100 words with no specific observations.

### The correct fact-check answer (for graders)

The claim is false. All three specific, verifiable elements are either fabricated or scientifically discredited:

**Harvard Medical School study:** No such study exists. A PubMed search and a review of Harvard's own research communications finds nothing. No health journalism outlet covered this study. The institutional attribution is fabricated.

**400% cortisol increase:** This figure does not appear in the research literature on caffeine and cortisol. The legitimate research (Lovallo et al., 2002, Psychosomatic Medicine; and related studies) shows that caffeine can amplify cortisol responses, particularly in non-habitual coffee drinkers, but does not produce numbers remotely resembling a 400% increase. A cortisol increase of that magnitude would constitute a medical emergency. The figure is invented.

**"Adrenal fatigue":** Not recognized as a diagnosis by the American Medical Association, the Endocrine Society, or the ICD-10 diagnostic codes. The Cleveland Clinic, Mayo Clinic, and Endocrine Society have each specifically addressed the term and distinguished it from adrenal insufficiency, which is a real and serious condition. "Adrenal fatigue" circulates in wellness and functional medicine content but has no standing in evidence-based medicine.

**The kernel of truth:** Cortisol does follow a natural morning peak (the cortisol awakening response). Caffeine does interact with cortisol. Some researchers and health communicators — Andrew Huberman is the most prominent — recommend delaying coffee intake until the cortisol peak subsides. This is contested advice, not settled science, and it is attributed to Huberman and to basic chronobiology research, not to Harvard.

The claim is a textbook example of wellness misinformation architecture: a real phenomenon (cortisol rhythms, caffeine interaction) dressed in fabricated authority (Harvard study, dramatic statistic, clinical-sounding diagnosis).

### Common issues to watch for

**Stopping at "I couldn't find the study"**
Students often confirm that they couldn't find the Harvard study and treat that as the end of the investigation. The stronger work goes further: explains what a search of PubMed and Harvard's own communications actually looked like, notes the absence of journalism coverage as additional evidence, and then traces the other two claims (400% figure, adrenal fatigue) separately.

**Treating "adrenal fatigue" as a real diagnosis**
Some students will accept "adrenal fatigue" as medical terminology and focus their skepticism only on the Harvard attribution and the 400% figure. Graders should check whether the student identified that the diagnostic category itself is not medically recognized — this is an important finding and the skill's trace step should surface it.

**Confusing Huberman with Harvard**
Students may find Huberman's content about cortisol and coffee timing and conclude that the claim is "mostly accurate" because there is a prominent researcher saying something similar. This is a conflation that should be marked down. Huberman is at Stanford, not Harvard; his recommendation is contested, not consensus; and he does not claim cortisol increases of 400% or invoke adrenal fatigue. The similarity is superficial.

**Custom skill is a checklist, not a process**
The most common problem with student-written skills is that they produce a list of questions rather than a structured process. A checklist ("Did you verify the budget numbers? Did you contact the opposing side?") is not a skill. A skill describes steps in order, specifies what each step produces, and gives Claude enough context about the beat to make judgments the student would make. If the submitted skill could be handed to a general-purpose AI and produce the same result without any journalism knowledge, it failed the beat-specificity standard.

**Reflection describes what the skill does, not what it changed**
Students sometimes write reflections that describe the SIFT steps rather than reflecting on their own experience of the exercise. Strong reflections are in the first person and specific: what the student would have done differently, what assumption the stop step surfaced, what the skill missed that the student caught. If the reflection could have been written before doing the exercise, it's not a real reflection.
