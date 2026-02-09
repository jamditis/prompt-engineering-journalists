# Module 3: Custom skills for Claude Code

## Quiz: Custom skills structure and usage

5 questions. Select the best answer for each.

---

### Question 1

Where should you place a skill file so it's available across all your Claude Code projects?

A) In the `.claude/commands/` directory of your current project
B) In the `~/.claude/commands/` directory (your home folder)
C) In the root of the GitHub repository
D) In the `/usr/local/claude/skills/` directory

**Correct answer: B**

*Explanation:* Skills placed in `~/.claude/commands/` are personal commands available in all projects. Skills in `.claude/commands/` within a project are only available in that project.

---

### Question 2

What is the correct file structure for a skill with supporting templates?

A) `skill-name.md` containing all templates inline
B) `skill-name/SKILL.md` with optional `templates/` and `examples/` subdirectories
C) `SKILL-skill-name.md` in the commands root
D) `skills/skill-name/main.md` with `assets/` folder

**Correct answer: B**

*Explanation:* Skills can be either a single `skill-name.md` file or a directory `skill-name/` containing `SKILL.md` plus optional subdirectories for templates, examples, and scripts.

---

### Question 3

The source-verification skill uses the SIFT method. What does SIFT stand for?

A) Search, Identify, Fact-check, Track
B) Stop, Investigate the source, Find better coverage, Trace claims
C) Source, Information, Fact, Truth
D) Scan, Inspect, Filter, Test

**Correct answer: B**

*Explanation:* SIFT is Mike Caulfield's lateral reading method: Stop before sharing, Investigate the source, Find better coverage, and Trace claims to their origin.

---

### Question 4

How do you invoke a skill named `foia-requests` in Claude Code?

A) Run `claude skill foia-requests` in the terminal
B) Type `/foia-requests` in the Claude Code conversation
C) Add `--skill=foia-requests` to your prompt
D) Import it with `use foia-requests` at the start of your session

**Correct answer: B**

*Explanation:* Skills are invoked as slash commands. Typing `/foia-requests` in Claude Code loads the skill's instructions and applies them to the conversation.

---

### Question 5

What is the difference between a skill and an MCP server?

A) Skills run on Anthropic's servers; MCP servers run locally
B) Skills are static instruction files; MCP servers provide live connections to external tools and data
C) Skills work with Claude Code; MCP servers only work with the API
D) Skills are free; MCP servers require a paid subscription

**Correct answer: B**

*Explanation:* Skills are markdown files containing instructions that Claude follows. MCP (Model Context Protocol) servers are active connections to databases, APIs, or other systems that Claude can query during a task.

---

## Quiz scoring

- 5 correct: Excellent. You understand skill structure and usage.
- 4 correct: Good. Review the concept you missed.
- 3 or fewer: Re-read the module materials before proceeding to the exercise.
