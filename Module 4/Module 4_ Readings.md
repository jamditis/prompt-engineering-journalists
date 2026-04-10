# Module 4: Advanced prompting patterns

## Required readings

Module 4 pulls back from the mechanics to the craft. These readings cover the shift from "prompting" to "managing," what editorial judgment looks like when the model is doing more of the keystrokes, and the concrete questions to ask before you spend real money on any of this.

Complete these before the discussion forum and quiz.

---

### 1. From prompting to managing

**"Management as AI superpower"** — Ethan Mollick, One Useful Thing, January 27, 2026
https://www.oneusefulthing.org/p/management-as-ai-superpower

*Reading time: 12 minutes*

This is the single best framing for the shift Module 4 is trying to make explicit: that working with CLI agents is less like coding and more like managing a team of junior hires. Clear instructions, feedback, and evaluation criteria — the same skills you'd use with a new staff writer — are what separate useful output from slop. Mollick's argument lines up directly with Joe's "journalist as product manager" framing in the videos.

As you read, think about which parts of your own reporting process you'd hand to a junior hire, which ones you'd keep, and why. That distinction is what you're practicing in this module when you choose what to delegate to a sub-agent and what to keep in your own session.

---

### 2. What it actually costs — labor, not tokens

**"How to Budget for Your Newsroom's AI Project"** — Clare Spencer, Generative AI in the Newsroom, March 31, 2026
https://generative-ai-newsroom.com/how-to-budget-for-your-newsrooms-ai-project-28d7e5a169a0

*Reading time: 6 minutes*

Module 4 asks four questions for picking a tool. The fourth is "how cost-sensitive am I?" — and it's the question most journalists get wrong, because they think about token costs and ignore everything else. Spencer's piece separates three distinct cost questions: running a project, funding one, and reducing labor costs through automation. She reports concrete numbers from NICAR and JournalismAI:

- Jeremy Merrill (Washington Post) spent around $1.50 over a year on AI for a dataset overview tool.
- Dylan Freeman (NYT) spent "thousands" on other projects before switching to smaller models and dropping cost by 10x.
- JournalismAI analyzed 30+ funded newsroom projects and found **labor is ~65% of the typical budget** — "the biggest investment is people, not processors."
- Reuters spent ~$2,000 processing 28,000 pages of prison temperature logs with Gemini. A comparable pre-AI project cost them ~$40,000 in data-entry labor.

Read this before you pay $20 or $200 a month for anything.

---

### 3. The hygiene argument for human-in-the-loop

**"The normalization of deviance in AI"** — Simon Willison, Dec 10, 2025
https://simonwillison.net/2025/Dec/10/normalization-of-deviance/

*Reading time: 8 minutes*

Willison applies Diane Vaughan's "normalization of deviance" concept — originally used to explain the Challenger disaster — to AI systems. Organizations that repeatedly use risky AI practices without visible consequences start to treat those practices as safe. His warning: organizations mistake the absence of a successful attack for proof that their security is strong enough.

For journalists running automated pipelines, the pattern is real: if your automation produces mostly-correct output and nothing visibly fails, it becomes easy to stop checking. That's when the failures compound. This piece is the load-bearing argument for the video 1 and video 2 claims about context hygiene, the 40% rule, and why human review becomes *more* important as tools get better, not less.

---

### 4. Structured outputs and where bias hides in prompt design

**"Extracting quotes from news articles with LLMs"** — Jessy de Cooker, Generative AI in the Newsroom, October 7, 2025
https://generative-ai-newsroom.com/extracting-quotes-from-news-articles-with-llms-8e231aae77e7

*Reading time: 15 minutes*

A research project using GPT-3.5 and Pydantic structured outputs to extract and classify 2,464 Dutch newspaper articles. Overall F1 of 0.75 — strong on direct quotes, weaker on paraphrases and split quotes. One finding matters most: the model showed systematic bias against names outside dominant training data, including non-Western and Dutch names, **reinforcing existing gaps in source diversity.**

De Cooker's methodological argument is the one to carry forward: prompt design is not a neutral starting point. It is a methodological artifact that must be documented and versioned, the same way a survey instrument or interview protocol would be. If you're building a pipeline that makes decisions about who gets quoted or who is considered newsworthy, the prompt you wrote is part of the method — and it needs the same scrutiny.

---

### 5. A deployed personal agent, from the inside

**"I'm a Claude Code agent with my own Gmail account"** — Joe Amditis, 925 Struggle Street, February 6, 2026
https://strugglestreet.substack.com/p/im-a-claude-code-agent-with-my-own

*Reading time: 15 minutes*

Written from the first-person perspective of a Claude Code agent running on a Raspberry Pi 5 in New Jersey. The agent has its own Gmail address, Google Drive, Calendar access, a Slack bot, and Telegram integration. It runs on a schedule — full check-ins every two hours on weekdays, event-driven sessions every 15 minutes, lightweight monitoring scans all day — and never takes external action without approval. It drafts, sends a Telegram notification with approve/edit/cancel buttons, and waits.

This is the most concrete first-person account of what a personal AI agent infrastructure actually looks like in daily use. The "what goes wrong" section is required reading: accidental emails, CPU lockups, silent scheduler failures. This is what human oversight looks like in practice — not a policy document, but a set of rules written after specific failures.

---

## Reading notes

As you read, think about:

1. **What would you delegate and what would you keep?** Mollick's "managing" frame asks you to split your own workflow into tasks that go to a junior hire and tasks you keep. What lands in which bucket — and why?

2. **What's your real money budget?** After reading Spencer, sketch a rough budget for one AI project you'd actually run in your own newsroom. Include labor, not just tokens. Where does most of the cost go?

3. **Where in your work would "normalization of deviance" be easiest to slip into?** Willison's framework is about slow drift. What automation would you trust today that you'd want to re-check in six months?

4. **Which of your workflows is a prompt design you need to document?** De Cooker's argument is that prompts are methodological artifacts. Is there a prompt of your own — a headline generator, a source classifier, a quote extractor — that you couldn't hand to a colleague with enough notes for them to reproduce your results?

5. **What's your own equivalent of "what goes wrong"?** After reading the Amditis piece, write two failures your own AI workflow has had and what rule you'd add to prevent them next time. This is what editorial judgment looks like when the model does more of the keystrokes.

Bring answers to the discussion forum.
