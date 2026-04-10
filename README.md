# Advanced prompt engineering for journalists

A 4-week MOOC by [Joe Amditis](https://github.com/jamditis) for the [Knight Center for Journalism](https://journalismcourses.org/) at UT Austin.

**Prerequisite:** [Prompt Engineering 101 for Journalists](https://journalismcourses.org/product/prompt-engineering-101-for-journalists/) or equivalent experience with ChatGPT/Claude.

## What you'll learn

This course moves you from web-based AI chat interfaces to terminal CLI tools. By the end, you'll:

- Use Claude Code, Gemini CLI, and other AI tools from the command line
- Write project context files that give AI persistent instructions about your beat
- Build custom Claude skills, plugins, and hooks for journalism workflows
- Create automated pipelines you can schedule with cloud triggers or GitHub Actions
- Manage a CLI session as a manager — budgeting the context window, delegating to sub-agents, and running cross-model code review

**Course site:** [mooc.amditis.tech](https://mooc.amditis.tech)

## Course modules

| Week | Topic | What you'll build |
|------|-------|-------------------|
| 1 | [From chat window to command line](docs/module-1/) | CLI tool + beat context file + document processing |
| 2 | [Custom skills, plugins, and hooks](docs/module-2/) | Custom skill packaged as a plugin |
| 3 | [Automation, pipelines, and triggered workflows](docs/module-3/) | Automation pipeline with a scheduler or trigger |
| 4 | [Advanced prompting patterns](docs/module-4/) | Context-management and cross-model review exercise |

**Bonus modules:** [Git & GitHub for journalists](docs/bonus-git-github/) | [OSS etiquette with AI tools](docs/bonus-oss-etiquette/) | [Interviews](docs/bonus-interviews/)

## Quick start

### 1. Install Node.js 20+

```bash
# Check your version
node --version

# If needed, install via https://nodejs.org or:
brew install node    # macOS
winget install OpenJS.NodeJS  # Windows
```

### 2. Install a CLI tool

Pick one to start (Gemini CLI recommended for free tier):

```bash
# Gemini CLI (free: 1,000 requests/day)
npm install -g @google/gemini-cli
gemini

# Claude Code (requires Claude Pro/Max subscription)
npm install -g @anthropic-ai/claude-code
claude

# Codex CLI (requires ChatGPT Plus subscription)
npm install -g @openai/codex
codex
```

### 3. Try your first CLI prompt

```bash
gemini -p "Summarize the key points of the First Amendment in 3 bullets"
```

## Resources for students

- **[Starter kit](docs/starter-kit/)** - Pre-course setup checklist
- **[Quick reference](docs/quick-reference.md)** - Commands and shortcuts
- **[Troubleshooting](docs/troubleshooting.md)** - Common issues and fixes
- **[Concept explainers](docs/concepts/)** - Standalone guides on CLI basics, context files, hooks, and more
- **[Templates](docs/templates/)** - Downloadable CLAUDE.md, skill, pipeline, and project templates
- **[Example scripts](Resources/scripts/)** - Starter shell scripts
- **[Sample skills](Resources/skills/)** - Claude skill templates
- **[MCP configs](Resources/mcp-configs/)** - Configuration examples

## Tools covered

| Tool | Install | Cost | Best for |
|------|---------|------|----------|
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | `npm i -g @google/gemini-cli` | Free tier | Starting out |
| [Claude Code](https://claude.ai/code) | `npm i -g @anthropic-ai/claude-code` | $20-100/mo | Skills, plugins, sub-agents |
| [Codex CLI](https://github.com/openai/codex) | `npm i -g @openai/codex` | ChatGPT sub | OpenAI users |

## License

Course content is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Code examples are MIT.

## About the instructor

Joe Amditis is Associate Director of Operations at the [Center for Cooperative Media](https://centerforcooperativemedia.org/) at Montclair State University. He builds AI tools for newsrooms and teaches journalists to use them.

- [GitHub](https://github.com/jamditis)
- [Center for Cooperative Media](https://centerforcooperativemedia.org/)
