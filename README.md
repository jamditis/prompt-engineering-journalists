# Advanced prompt engineering for journalists

A 5-week MOOC by [Joe Amditis](https://github.com/jamditis) for the [Knight Center for Journalism](https://journalismcourses.org/) at UT Austin.

**Prerequisite:** [Prompt Engineering 101 for Journalists](https://journalismcourses.org/product/prompt-engineering-101-for-journalists/) or equivalent experience with ChatGPT/Claude.

## What you'll learn

This course moves you from web-based AI chat interfaces to terminal CLI tools. By the end, you'll:

- Use Claude Code, Gemini CLI, and other AI tools from the command line
- Write project context files that give AI persistent instructions about your beat
- Build custom Claude skills for journalism workflows
- Create automated pipelines that chain AI with other tools
- Connect AI to your own archives using RAG and MCP

## Course modules

| Week | Topic | What you'll build |
|------|-------|-------------------|
| 1 | [Escaping the chat window](docs/module-1/) | Compare web vs CLI workflows |
| 2 | [Prompting with files and project context](docs/module-2/) | Write a CLAUDE.md and process documents |
| 3 | [Custom skills for Claude Code](docs/module-3/) | Install and use journalism skills |
| 4 | [CLI workflows](docs/module-4/) | Article → summary → newsletter pipeline |
| 5 | [Agents and RAG](docs/module-5/) | Connect Claude to a knowledge base |

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

# Aider (pay-as-you-go, works with multiple LLMs)
pip install aider-chat
aider
```

### 3. Try your first CLI prompt

```bash
gemini -p "Summarize the key points of the First Amendment in 3 bullets"
```

## Resources for students

- **[Quick reference](docs/quick-reference.md)** - Commands and shortcuts
- **[Troubleshooting](docs/troubleshooting.md)** - Common issues and fixes
- **[Example scripts](Resources/scripts/)** - Starter shell scripts
- **[Sample skills](Resources/skills/)** - Claude skill templates
- **[MCP configs](Resources/mcp-configs/)** - Configuration examples

## Tools covered

| Tool | Install | Cost | Best for |
|------|---------|------|----------|
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | `npm i -g @google/gemini-cli` | Free tier | Starting out |
| [Claude Code](https://claude.ai/code) | `npm i -g @anthropic-ai/claude-code` | $20-100/mo | Skills, MCP |
| [Aider](https://aider.chat) | `pip install aider-chat` | Pay-as-you-go | Multi-LLM |
| [Codex CLI](https://github.com/openai/codex-cli) | `npm i -g @openai/codex` | ChatGPT sub | OpenAI users |

## License

Course content is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Code examples are MIT.

## About the instructor

Joe Amditis is Associate Director of Operations at the [Center for Cooperative Media](https://centerforcooperativemedia.org/) at Montclair State University. He builds AI tools for newsrooms and teaches journalists to use them.

- [GitHub](https://github.com/jamditis)
- [Center for Cooperative Media](https://centerforcooperativemedia.org/)
