# Module 3: Custom skills for Claude Code

## Optional resources

These materials provide additional context. Review them if you want to go deeper or explore related topics.

---

### Writing better skill instructions

**"Prompt engineering guide" — Anthropic Documentation**
https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview

The same principles that make prompts effective also apply to skill files. This guide covers structuring instructions, providing examples, and avoiding ambiguity. Useful if you plan to write your own skills.

---

### The SIFT method for source verification

**"SIFT (The Four Moves)" — Mike Caulfield**
https://hapgood.us/2019/06/19/sift-the-four-moves/

The source-verification skill is based on this method. Read the original to understand the reasoning behind Stop, Investigate the source, Find better coverage, and Trace claims. The skill encodes these steps, but understanding why they work helps you apply them in edge cases.

---

### FOIA request writing

**"FOIA Frequently Asked Questions" — Reporters Committee for Freedom of the Press**
https://www.rcfp.org/resources/foia-basics/

Background on the Freedom of Information Act and how to write effective requests. The foia-requests skill helps draft requests, but knowing the legal framework helps you refine them for specific agencies.

---

### MCP servers for newsrooms

**"MCP Quickstart" — Anthropic Documentation**
https://modelcontextprotocol.io/quickstart

If you want Claude Code to connect to live data sources (databases, APIs, document management systems), MCP is the path. This quickstart shows how to set up a basic server. More advanced than skills, but worth exploring if your newsroom has custom data infrastructure.

---

### Example: Data journalism skill in action

**"Analyzing campaign finance data with Claude Code" — [Course supplementary video]**

A 12-minute walkthrough showing the data-journalism skill applied to FEC filings. Demonstrates how skills can include data cleaning steps, chart generation, and story angle identification.

---

### Skills in practice

**"Claude skills are awesome, maybe a bigger deal than MCP"** — Simon Willison
https://simonwillison.net/2025/Oct/16/claude-skills/

Willison's take on why skills represent something qualitatively different from other Claude customization features. He argues that the ability to package domain expertise into reusable, shareable instructions is more practically significant for most users than the more technically complex MCP system. Good context for understanding why this week's work matters.

---

### Building your own skills

**"Custom slash commands" — Claude Code documentation**
https://docs.anthropic.com/en/docs/claude-code/tutorials#custom-slash-commands

When you're ready to create skills for your newsroom, start here. The tutorial covers file structure, YAML frontmatter, and best practices for instruction writing.

---

## Community resources

**Claude Code Discord community**
A place to share skills, ask questions, and see what other users are building. Search for journalism-related discussions or share your own skill ideas.

**Nieman Lab and journalism AI coverage**
https://www.niemanlab.org/

Ongoing coverage of AI tools in newsrooms. Useful for staying current on how other journalists are using these tools.
