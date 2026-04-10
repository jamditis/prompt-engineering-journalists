# Module 3: CLI workflows for newsrooms

## Optional resources

These materials go deeper into topics from this week. Use them if you want to expand your skills after completing the required work.

---

### AI tools and guides for newsrooms
**jamditis/tools** by Joe Amditis
https://github.com/jamditis/tools

The instructor's repository of AI tools and guides built for newsrooms. Includes workflow templates and working examples of the kinds of pipelines covered in this module.

### Proving your pipeline worked
**"Code proven to work"** — Simon Willison
https://simonwillison.net/2025/Dec/18/code-proven-to-work/

Willison's argument: submitting code — or publishing pipeline outputs — without personally verifying it shifts the verification burden onto the reader. The principle maps directly to automated newsroom pipelines: you are responsible for checking that what your script produced is correct, not just that it ran without errors.

### A pipeline with one job per stage, on real documents
**"Wrangling Messy Documents with Coding Agents"** — Nick Hagar, Generative AI in the Newsroom, March 3, 2026
https://generative-ai-newsroom.com/wrangling-messy-documents-with-coding-agents-196b9b8e8959

The clearest practitioner illustration of the "stage the pipeline, one job per stage" rule from this module. Hagar built a single skill with three modes — Transcription, Structuring, and Automated OCR — then tested it on three published investigations: Wired's reporting on Neuralink primate deaths, a Pulitzer-winning NYT lobbying investigation, and a Marshall Project / NYT Pulitzer finalist on New York prison discipline records. Along the way he crosses from Claude Code to Gemini 3.1 Pro and back when one model's vision capability isn't good enough for a stage, which is the same cross-model pattern Module 4 teaches in the opposite direction.

The piece is honest about what breaks. LLM transcription can fabricate text in ways traditional OCR cannot — "a fundamentally different failure mode." And Hagar's final line is the editorial judgment argument this course keeps returning to: *"Coding agents are versatile tools for handling a range of labor-intensive tasks under the supervision of an expert human."*

### How AI session memory works
https://mooc.amditis.tech/concepts/how-ai-session-memory-works.html

A standalone explainer on context windows, prompt caching, and why session setup matters for pipelines. Covers four practical rules: put stable context first, don't switch models mid-investigation, plan your session setup before starting, and add new context as notes rather than rewriting your briefing.

