# Module 4: CLI workflows for newsrooms

## Required readings

Complete these readings before starting the exercise. They don't require any programming knowledge — the goal is to understand what makes a good automation candidate in journalism, how to handle API keys safely, and what to do when automated workflows break.

---

### 1. How the AP uses automation for high-volume reporting

**"The Associated Press' journey with automated journalism"** — AP Blog
https://blog.ap.org/products-and-services/automated-journalism-expanding-ap-s-earnings-reports-coverage
*(Instructor: verify this URL before publishing — the AP blog occasionally reorganizes. If broken, search "AP automated journalism earnings reports" for the current link.)*

The AP uses automation to publish thousands of earnings reports, sports recaps, and data-driven stories each year — more than any human team could produce. This piece explains how they decide what's worth automating (high volume, consistent structure, clear data source) and what isn't (anything requiring editorial judgment or original reporting).

Read it to understand the automation decision framework before you describe your own workflow. The question "is this worth automating?" matters more than "can the LLM build this?"

**Time:** 15 minutes

---

### 2. Store config in the environment

**"The Twelve-Factor App: Config (Factor III)"**
https://12factor.net/config

One page. Required reading.

Your pipeline will use API keys. Those keys should never go in your code, your CLAUDE.md, or any file you commit to GitHub. This document explains why, and what to do instead: store secrets in environment variables, not in source files.

The principle applies whether you write the code yourself or have Claude Code write it for you. When Claude writes your pipeline script, it will use this pattern automatically — but you need to understand it to verify the output and catch mistakes.

**Time:** 5 minutes

---

### 3. Errors, rate limits, and what to do about them

**Claude Code API errors reference** — Anthropic Documentation
https://docs.anthropic.com/en/api/errors

Read the overview and the section on rate limit errors. Your pipeline will hit errors — rate limits when processing many documents, authentication failures when API keys are wrong, and occasional model errors. This reference shows what each error code means and the standard patterns for handling them.

The patterns here — exponential backoff, retry logic, graceful degradation — are what Claude Code will write when you ask it to "handle errors properly." Understanding them lets you check the implementation and ask better follow-up questions when something breaks.

**Time:** 15 minutes

---

### Optional reading

**"How to evaluate an LLM pipeline"** — Simon Willison's Weblog
https://simonwillison.net/tags/llms/

Simon Willison writes practical, non-hype coverage of working with LLMs in real projects. Browse his recent posts on pipelines, automation, and prompt engineering. His "what I've learned" posts are particularly relevant to Module 4.

---

## Reading notes

As you read, think about:

1. What recurring task in your own work fits the AP's automation criteria: high volume, consistent structure, clear data source?
2. Where do your API keys currently live? (Hint: if the answer is "in a text file somewhere," that's worth changing.)
3. What would you do if your pipeline failed halfway through processing 50 documents?

Bring answers to the discussion forum.
