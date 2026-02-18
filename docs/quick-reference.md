# Quick reference

A cheat sheet for AI coding tools covered in this course.

---

## CLI tool commands

### Claude Code

| Action | Command |
|--------|---------|
| Start interactive session | `claude` |
| Run single prompt | `claude "your prompt here"` |
| Continue last session | `claude --continue` |
| Resume specific session | `claude --resume` |
| Print conversation (no AI) | `claude --print` |

**Common flags:**

| Flag | Purpose |
|------|---------|
| `--model claude-sonnet-4-20250514` | Use a specific model |
| `--output-format json` | Get JSON output |
| `--max-turns 10` | Limit conversation turns |
| `--no-tools` | Disable tool use |
| `--verbose` | Show debug info |

**Keyboard shortcuts (in session):**

| Keys | Action |
|------|--------|
| `Ctrl+C` | Cancel current generation |
| `Ctrl+D` | Exit session |
| `Ctrl+L` | Clear screen |
| `Tab` | Autocomplete file paths |
| `Up/Down` | Navigate command history |

**Slash commands:**

| Command | Purpose |
|---------|---------|
| `/help` | Show all commands |
| `/clear` | Clear conversation history |
| `/model` | Change model mid-session |
| `/cost` | Show token usage and cost |
| `/compact` | Summarize and compress context |
| `/config` | View/edit settings |
| `/doctor` | Check installation health |

---

### Gemini CLI

| Action | Command |
|--------|---------|
| Start interactive session | `gemini` |
| Run single prompt | `gemini "your prompt here"` |
| Use specific model | `gemini -m gemini-2.0-flash "prompt"` |
| Sandbox mode (safer) | `gemini --sandbox` |

**Common flags:**

| Flag | Purpose |
|------|---------|
| `-m MODEL` | Specify model |
| `--sandbox` | Run in isolated environment |
| `--debug` | Show debug output |

**Keyboard shortcuts:**

| Keys | Action |
|------|--------|
| `Ctrl+C` | Cancel generation |
| `Ctrl+D` | Exit session |
| `@` | Reference a file |
| `!` | Run shell command |

---

### OpenAI Codex CLI

| Action | Command |
|--------|---------|
| Start interactive session | `codex` |
| Run single prompt | `codex "your prompt here"` |
| Full auto mode | `codex --approval-mode full-auto "prompt"` |
| Suggest mode (read-only) | `codex --approval-mode suggest "prompt"` |

**Common flags:**

| Flag | Purpose |
|------|---------|
| `--model MODEL` | Choose model (o4-mini, o3, gpt-4.1) |
| `--approval-mode MODE` | suggest, auto-edit, or full-auto |
| `--quiet` | Less verbose output |

---

## Shell basics for journalists

These commands work in Terminal (macOS/Linux) and WSL (Windows).

### Navigation

| Command | What it does | Example |
|---------|--------------|---------|
| `pwd` | Print current directory | `pwd` |
| `ls` | List files | `ls -la` (detailed) |
| `cd` | Change directory | `cd ~/Documents` |
| `cd ..` | Go up one level | `cd ..` |
| `cd -` | Go to previous directory | `cd -` |

### Reading files

| Command | What it does | Example |
|---------|--------------|---------|
| `cat` | Print file contents | `cat notes.txt` |
| `head` | First 10 lines | `head -20 data.csv` |
| `tail` | Last 10 lines | `tail -f server.log` |
| `less` | Scrollable viewer | `less article.md` |

### Pipes and redirects

| Syntax | What it does | Example |
|--------|--------------|---------|
| `\|` | Send output to next command | `cat data.csv \| head` |
| `>` | Write output to file (overwrite) | `ls > files.txt` |
| `>>` | Append output to file | `echo "note" >> log.txt` |
| `<` | Read input from file | `wc -l < data.csv` |

### Useful combos

```bash
# Count lines in a file
wc -l data.csv

# Find files by name
find . -name "*.md"

# Search file contents
grep "keyword" article.txt

# Search all files recursively
grep -r "keyword" .

# See disk usage
du -sh *
```

---

## Git basics

You don't need to type Git commands yourself — your CLI tool handles them. But understanding the concepts helps you know what to ask for.

### Key concepts

| Concept | What it means |
|---------|---------------|
| **Repository (repo)** | A project folder tracked by Git. Has a hidden `.git` folder that stores the history. |
| **Commit** | A saved snapshot of your project at a point in time, with a message describing what changed. |
| **Clone** | Download a copy of a repository from GitHub to your computer. |
| **Push** | Upload your local commits to GitHub. |
| **Pull** | Download the latest changes from GitHub to your computer. |
| **Stage** | Mark files to be included in the next commit. |

### What to ask your CLI tool

| What you want to do | What to ask |
|----------------------|-------------|
| Start tracking a project | "Initialize this directory as a Git repository" |
| Save a snapshot | "Commit all changes with the message 'description of what changed'" |
| Check what's changed | "What is the current Git status?" |
| Download a project from GitHub | "Clone the repository at https://github.com/user/repo" |
| Upload to GitHub | "Push this repository to GitHub" |
| Get the latest version | "Pull the latest changes from the remote repository" |

### Installing Git

Git needs to be installed on your system even if your CLI tool runs the commands.

```bash
# Check if installed
git --version

# Install (Mac)
brew install git

# Install (Windows)
winget install Git.Git
```

---

## Project context file setup

### Claude Code — CLAUDE.md

Create a `CLAUDE.md` file in your project directory:

```markdown
# Project context

## Beat
I cover Greenfield city government for the Daily News.

## Style
- AP style
- No Oxford comma
- "The city" on second reference

## Source standards
- Attribute all claims to named sources
- Flag unverified claims separately
```

Claude Code reads this file automatically when you open a session in that directory. You can also have a user-level CLAUDE.md at `~/.claude/CLAUDE.md` for instructions that apply to all projects.

### Gemini CLI — GEMINI.md

Create a `GEMINI.md` file in your project directory with the same kind of instructions. Gemini CLI reads it on startup.

```markdown
# Project context

## Beat
I cover Greenfield city government for the Daily News.

## Style
- AP style, no Oxford comma
```

### OpenAI Codex — AGENTS.md

Create an `AGENTS.md` file:

```markdown
# Project context

## Instructions
- Follow AP style
- Attribute all claims to named sources
```

### Context file inheritance

Claude Code looks for CLAUDE.md in the current directory and all parent directories. You can have:
- A newsroom-wide file at the top level
- A beat-specific file in a subdirectory
- A personal file at `~/.claude/CLAUDE.md`

All are merged, with more specific files taking precedence.

---

## API key setup

### Claude (Anthropic)

```bash
# Get key from: console.anthropic.com/settings/keys

# Set temporarily (current session)
export ANTHROPIC_API_KEY="sk-ant-..."

# Set permanently (add to ~/.zshrc or ~/.bashrc)
echo 'export ANTHROPIC_API_KEY="sk-ant-..."' >> ~/.zshrc
source ~/.zshrc
```

### OpenAI

```bash
# Get key from: platform.openai.com/api-keys

export OPENAI_API_KEY="sk-..."

# Permanent
echo 'export OPENAI_API_KEY="sk-..."' >> ~/.zshrc
```

### Google (Gemini)

```bash
# Get key from: aistudio.google.com/apikey

export GEMINI_API_KEY="..."

# Or use Google Cloud auth
gcloud auth application-default login
```

### Verify keys are set

```bash
# Check if variable exists
echo $ANTHROPIC_API_KEY
echo $OPENAI_API_KEY
echo $GEMINI_API_KEY

# Should print the key (or nothing if not set)
```

---

## Environment variables

| Variable | Used by | Purpose |
|----------|---------|---------|
| `ANTHROPIC_API_KEY` | Claude Code | Claude API access |
| `OPENAI_API_KEY` | Codex CLI, Whisper API | OpenAI API access |
| `GEMINI_API_KEY` | Gemini CLI | Google AI API access |
| `EDITOR` | Many tools | Default text editor |
| `SHELL` | System | Current shell (bash, zsh) |

### Setting your default editor

```bash
# For VS Code
export EDITOR="code --wait"

# For Vim
export EDITOR="vim"

# For Nano (beginner-friendly)
export EDITOR="nano"
```

---

## File path tips

```bash
# Home directory shortcut
cd ~
cd ~/Documents

# Current directory
./script.sh

# Parent directory
cd ..
cd ../sibling-folder

# Absolute path (starts from root)
/Users/yourname/Documents/project

# Spaces in names: use quotes
cd "My Folder Name"
cd My\ Folder\ Name
```

---

## Getting help

```bash
# Built-in manual pages
man ls
man grep

# Quick help (most commands)
ls --help
grep --help

# AI tool help
claude --help
gemini --help
codex --help
```
