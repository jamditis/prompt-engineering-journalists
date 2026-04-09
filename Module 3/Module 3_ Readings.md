# Module 3: CLI workflows for newsrooms

## Required readings

### Real pipeline results: beat monitoring and translation

**"Augmented beat reporting: where LLMs excel and where reporters still win"** — Nick Hagar, Generative AI in the Newsroom, October 28, 2025
https://generative-ai-newsroom.com/augmented-beat-reporting-where-llms-excel-and-where-reporters-still-win-135decbe8675

**Time:** 10 minutes

A working beat-monitoring pipeline built with n8n and Google Alerts RSS feeds, costing about $0.15/day to run. LLMs (including o3, GPT-4o, and GPT-5) hit an F1 score of 0.94 at extracting relevant use cases from articles, but only 31% exact alignment with human newsworthiness assessments. A one-week pilot surfaced three high-value leads the reporter hadn't found elsewhere.

This piece is useful for the exercise because it gives you real cost and accuracy numbers to reason with. The central lesson: LLMs are good first-pass filters, but the decision about what's actually worth pursuing stays with the journalist.

---

**"Inside the new multilingual newsrooms using GenAI for translation"** — Clare Spencer, Generative AI in the Newsroom, November 4, 2025
https://generative-ai-newsroom.com/inside-the-new-multilingual-newsrooms-using-genai-for-translation-4c3b17269811

**Time:** 10 minutes

Three newsroom translation pipelines: Chicago's La Voz (an AI fellow built a Sun-Times-to-Spanish pipeline; the team published a Pope profile same day in both languages, driving 5x their normal traffic), The Economist's Español TikTok channel (HeyGen video translation), and BBC News Polska (DeepL + human editor review). All three kept a linguistically fluent editor in the loop.

Pay attention to the workflow designs — specifically how each team structured the human review step. A pipeline without a review gate is faster; it's also the way errors reach readers.

---

### Optional reading

**"How to evaluate an LLM pipeline"** — Simon Willison's Weblog
https://simonwillison.net/tags/llms/

Simon Willison writes practical, non-hype coverage of working with LLMs in real projects. Browse his recent posts on pipelines, automation, and prompt engineering. His "what I've learned" posts are particularly relevant to Module 3.

---

## Reading notes

As you read, think about:

1. What recurring task in your own work is a good automation candidate: high volume, consistent structure, clear data source?
2. Where do your API keys currently live? (Hint: if the answer is "in a text file somewhere," that's worth changing.)
3. What would you do if your pipeline failed halfway through processing 50 documents?

Bring answers to the discussion forum.

