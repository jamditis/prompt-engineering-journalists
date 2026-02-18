# Module 1: Escaping the chat window

## Optional resources

These are not required but may be useful depending on your interests and experience level.

### Understanding the tools

**"Think of language models like ChatGPT as a 'calculator for words'"** — Simon Willison
https://simonwillison.net/2023/Apr/2/calculator-for-words/

A short but useful framing piece: LLMs are tools for manipulating language, not for retrieving facts. The analogy — calculator for words, not a search engine — helps explain why these tools hallucinate and why the right use is giving them facts to work with rather than asking them to find facts on their own. Drawing on Ted Chiang's "blurry JPEG" metaphor. The framing underpins everything else in this course.

---

### The 2025 AI landscape

**"The year in LLMs"** — Simon Willison
https://simonwillison.net/2025/Dec/31/the-year-in-llms/

Willison's end-of-year review of what actually happened in AI in 2025: the rise of reasoning models, coding agents going from experimental to generating $1 billion in run-rate revenue, Chinese models topping benchmarks, and "vibe coding" entering the vocabulary. A fast, opinionated orientation that covers why CLI tools like Claude Code exist and why they matter now. Good background reading before starting the course.

---

### Further reading on Mollick's work

Ethan Mollick's framework (models / apps / harnesses) runs through this entire course. If the required readings sparked your interest, a curated list of his other articles is available in the course resources:

**Mollick reading list** — `Resources/mollick-reading-list.md`

Organized by theme: getting started, working methods, agents and automation, AI capabilities and limits, and education. Each entry includes a direct link and a brief description of why it's relevant to journalism work.

---

### Deeper dives on CLI AI tools

**"Mastering Claude Code in 30 minutes"** — Anthropic (official)
https://www.youtube.com/watch?v=6eBSHbLKuN0

28-minute video from Anthropic covering advanced Claude Code features: shortcuts, workflow patterns, plan mode, multi-file editing, and how to get consistent results across sessions. Good watch after you've completed the week's exercise and want to see what the tool can do beyond the basics.

---

**Claude Code: everything you need to know** — wesammustafa (GitHub)
https://github.com/wesammustafa/Claude-Code-Everything-You-Need-to-Know

Community-maintained reference covering prompt engineering for Claude Code, custom slash commands, MCP integrations, hooks, and the BMAD method for structuring complex tasks. Includes ready-to-use skill files. More comprehensive than the official docs for day-to-day workflow questions.

---

- **Simon Willison's LLM CLI tool**
  - https://llm.datasette.io/
  - A lightweight Python CLI for interacting with many LLM providers. Good for quick experiments.

- **Fabric by Daniel Miessler**
  - https://github.com/danielmiessler/fabric
  - Open source framework for augmenting humans with AI. Includes pre-built prompts for summarization, extraction, and analysis.

### Web basics (if needed)

**"HTML for beginners: how to make websites"** — TechSquidTV
https://www.youtube.com/watch?v=3jJ6r6e3CTM

16-minute video covering HTML elements, tags, attributes, and the DOM structure browsers use to render pages. Not required — but useful background if you've never looked at page source code before. It's relevant to Module 4, where pipelines fetch and extract content from web pages. Knowing what HTML is helps you understand what the extraction step is actually stripping away.

---

### Terminal skills

- **Warp** (Mac only)
  - https://www.warp.dev/
  - A modern terminal with AI built in. Good training wheels if you find traditional terminals intimidating.

- **The Art of Command Line**
  - https://github.com/jlevy/the-art-of-command-line
  - Reference guide covering everything from basics to advanced tricks.

- **The Odin Project: Text Editors**
  - https://www.theodinproject.com/lessons/foundations-text-editors
  - Short lesson on setting up a code editor for working with project files. Covers VS Code basics. Worth reading if you've never configured a text editor for code and plain-text work.

### Journalism-specific applications

- **Bellingcat's digital forensics toolkit**
  - https://bellingcat.gitbook.io/toolkit
  - Many tools here are command-line based. Shows how investigators use terminal workflows.

- **The Markup's data tools**
  - https://github.com/the-markup
  - Real examples of command-line data processing in investigative journalism.

### API and cost management

- **OpenRouter**
  - https://openrouter.ai/
  - Access multiple LLM providers through one API. Useful for comparing models and managing costs.

- **LiteLLM**
  - https://docs.litellm.ai/
  - Unified interface for 100+ LLM providers. Good for switching between models without changing your code.
