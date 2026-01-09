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

### Aider

| Action | Command |
|--------|---------|
| Start with Claude | `aider --model claude-sonnet-4-20250514` |
| Start with GPT-4 | `aider --model gpt-4o` |
| Add files to context | `aider file1.py file2.py` |
| Watch mode | `aider --watch` |

**Common flags:**

| Flag | Purpose |
|------|---------|
| `--model MODEL` | Choose AI model |
| `--edit-format diff` | Use diff format for edits |
| `--no-auto-commits` | Disable auto git commits |
| `--dark-mode` | Dark terminal theme |
| `--yes` | Auto-confirm prompts |

**In-session commands:**

| Command | Purpose |
|---------|---------|
| `/add file.py` | Add file to context |
| `/drop file.py` | Remove file from context |
| `/undo` | Undo last change |
| `/diff` | Show pending changes |
| `/clear` | Clear chat history |
| `/help` | Show all commands |

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

## Voice transcription setup

### Using Whisper (local, free)

```bash
# Install
pip install openai-whisper

# Transcribe audio file
whisper audio.mp3 --model base

# Faster, less accurate
whisper audio.mp3 --model tiny

# More accurate, slower
whisper audio.mp3 --model small
```

### Using OpenAI API (cloud, paid)

```bash
# Set API key
export OPENAI_API_KEY="sk-..."

# Transcribe via API (in Python)
python -c "
import openai
audio_file = open('audio.mp3', 'rb')
transcript = openai.audio.transcriptions.create(
  model='whisper-1',
  file=audio_file
)
print(transcript.text)
"
```

### Voice input for AI tools

**macOS built-in dictation:**
1. System Settings > Keyboard > Dictation
2. Enable dictation
3. Press `Fn Fn` (or configured key) to start
4. Speak your prompt, press `Fn` to stop

**SuperWhisper (macOS app):**
1. Download from superwhisper.com
2. Assign global hotkey
3. Speak, release hotkey
4. Text appears at cursor

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
| `ANTHROPIC_API_KEY` | Claude Code, Aider | Claude API access |
| `OPENAI_API_KEY` | Aider, Codex, Whisper API | OpenAI API access |
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
aider --help
```
