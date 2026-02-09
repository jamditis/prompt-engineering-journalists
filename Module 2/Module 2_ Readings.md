# Reading materials

## Module 2: Prompting with files and project context

Please complete the following readings before the end of the week.

---

### Required readings

**Claude Code CLAUDE.md documentation** by Anthropic
https://docs.anthropic.com/en/docs/claude-code/memory

How Claude Code reads and applies CLAUDE.md files. Covers file location, inheritance (project vs. user-level), and what kinds of instructions work well. This is the primary context file format used in the exercise.

---

**Gemini CLI customization** by Google
https://github.com/google-gemini/gemini-cli/blob/main/docs/customization.md

How Gemini CLI reads GEMINI.md files and other configuration. Useful for understanding how the same context concept works in a different tool.

---

**OpenAI Codex AGENTS.md documentation** by OpenAI
https://github.com/openai/codex/blob/main/docs/AGENTS.md

How Codex CLI reads AGENTS.md files for project instructions. The third implementation of the same pattern — write a file, the tool reads it.

---

**"Prompt engineering vs. context engineering"** by Philipp Schmid
https://www.philschmid.de/context-engineering

A practical article on why giving AI the right context matters more than crafting the perfect prompt. Relevant framing for understanding why context files work.

---

**"What I learned from building with LLMs"** by Eugene Yan
https://eugeneyan.com/writing/llm-patterns/

Covers patterns for working with LLMs in production, including the importance of system prompts and persistent instructions. The sections on evaluation and prompting are most relevant to this module.

---

### Bonus reading

**"Principles of context engineering"** by Simon Willison
https://simonwillison.net/

Simon Willison writes frequently about practical AI use, system prompts, and how to give AI tools the right context. Browse his recent posts for practical examples of context engineering in action. (Note: his blog doesn't have a single canonical post on this topic — search for "system prompt" or "CLAUDE.md" on the site.)
