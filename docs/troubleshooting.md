# Troubleshooting guide

Common issues and fixes for AI coding tools.

---

## Installation issues

### "command not found" after installation

**Symptom:** You installed a tool but typing its name shows `command not found: claude` (or similar).

**Cause:** The tool isn't in your system's PATH, or your shell hasn't reloaded.

**Fix:**

```bash
# Reload your shell config
source ~/.zshrc    # if using zsh (macOS default)
source ~/.bashrc   # if using bash

# Or just open a new terminal window

# If still not working, find where npm installed it
npm list -g --depth=0

# Add npm global bin to PATH (add to ~/.zshrc)
export PATH="$PATH:$(npm config get prefix)/bin"
```

---

### Node.js version too old

**Symptom:** Error like `SyntaxError: Unexpected token` or `engine node >= 18 required`.

**Cause:** Your Node.js version is outdated. Most AI tools require Node 18+.

**Fix:**

```bash
# Check current version
node --version

# Install latest LTS via nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.zshrc
nvm install --lts
nvm use --lts

# Or via Homebrew (macOS)
brew install node@20
```

---

### npm permission errors

**Symptom:** `EACCES: permission denied` when running `npm install -g`.

**Cause:** npm is trying to write to a directory you don't own.

**Fix (recommended):** Configure npm to use your home directory:

```bash
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

**Fix (not recommended):** Using `sudo npm install -g` works but creates future permission problems. Avoid this.

---

### PATH not updated after installation

**Symptom:** Tool works in one terminal but not another, or works after running `source ~/.zshrc` but not in new windows.

**Cause:** Your shell profile isn't loading, or you added the PATH to the wrong file.

**Fix:**

```bash
# Check which shell you're using
echo $SHELL

# For zsh (macOS default), edit ~/.zshrc
# For bash, edit ~/.bashrc or ~/.bash_profile

# Verify your PATH includes the tool location
echo $PATH | tr ':' '\n' | grep -E "(npm|node|bin)"

# Find where a command lives
which claude
which node
```

---

## Authentication issues

### API key not working

**Symptom:** `Error: Invalid API key` or `401 Unauthorized`.

**Cause:** Key is wrong, expired, revoked, or not set correctly.

**Fix:**

```bash
# Verify the key is set
echo $ANTHROPIC_API_KEY

# Check for invisible characters (copy-paste issues)
echo $ANTHROPIC_API_KEY | cat -A

# Re-set it carefully (no spaces around =)
export ANTHROPIC_API_KEY="sk-ant-api03-..."

# Test the key works
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{"model":"claude-sonnet-4-20250514","max_tokens":10,"messages":[{"role":"user","content":"Hi"}]}'
```

---

### Claude Code login problems

**Symptom:** `claude` command asks for login but authentication fails or loops.

**Cause:** Browser auth flow interrupted, or account issue.

**Fix:**

```bash
# Log out and back in
claude logout
claude login

# If browser doesn't open, copy the URL manually

# Clear cached credentials if stuck
rm -rf ~/.claude

# Check account status at console.anthropic.com
```

---

### Gemini free tier limits

**Symptom:** `429 Resource Exhausted` or `quota exceeded` errors.

**Cause:** You've hit the free tier rate limits (typically 60 requests/minute, 1500/day for Gemini Flash).

**Fix:**

```bash
# Wait and retry (limits reset over time)

# Switch to a smaller model if available
gemini -m gemini-2.0-flash-lite "your prompt"

# Check your usage at aistudio.google.com

# Upgrade to paid tier if needed
```

---

### Workspace/school account restrictions

**Symptom:** `Access denied` or `This account cannot access this service`.

**Cause:** Your organization blocks AI tools or API access.

**Fix:**

1. Use a personal Google/email account instead of your work account
2. Ask your IT department to whitelist the service
3. For Gemini: try `gcloud auth application-default login` with a personal account

---

## Runtime issues

### Slow responses

**Symptom:** AI takes 30+ seconds to respond, or seems stuck.

**Cause:** Large context, complex request, or API congestion.

**Fix:**

```bash
# Reduce context size
/compact          # In Claude Code
/clear            # Start fresh

# Use a faster model
claude --model claude-sonnet-4-20250514  # Instead of claude-opus-4-20250514

# Check if it's a network issue
ping api.anthropic.com
```

---

### Timeout errors

**Symptom:** `Error: Request timed out` or connection dropped.

**Cause:** Request took too long, network instability, or VPN issues.

**Fix:**

```bash
# Retry the command

# Simplify the request (smaller task)

# Check your internet connection
curl -I https://api.anthropic.com

# Disable VPN if using one

# Some tools have timeout settings
aider --timeout 120
```

---

### Rate limiting

**Symptom:** `429 Too Many Requests` or `rate limit exceeded`.

**Cause:** Sending too many requests too fast.

**Fix:**

```bash
# Wait a minute, then retry

# Space out your requests

# Check your tier limits:
# - Anthropic: console.anthropic.com/settings/limits
# - OpenAI: platform.openai.com/usage
# - Google: aistudio.google.com
```

---

### Token/context limit exceeded

**Symptom:** `context_length_exceeded` or truncated responses.

**Cause:** Your prompt + files exceed the model's context window.

**Fix:**

```bash
# In Claude Code
/compact          # Compress conversation history

# In Aider
/drop large-file.py    # Remove files from context
/clear                 # Reset chat

# Break large tasks into smaller pieces

# Use /cost or similar to check token usage
```

---

## macOS issues

### Gatekeeper blocks installation

**Symptom:** `"X" cannot be opened because it is from an unidentified developer`.

**Cause:** macOS security blocking unsigned software.

**Fix:**

```bash
# For CLI tools, usually not an issue

# For downloaded apps:
# 1. Right-click the app > Open
# 2. Or: System Settings > Privacy & Security > Allow anyway

# If npm package triggers this:
xattr -d com.apple.quarantine /path/to/file
```

---

### Homebrew problems

**Symptom:** `brew` command not found, or brew install fails.

**Cause:** Homebrew not installed or PATH not set.

**Fix:**

```bash
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Add to PATH (for Apple Silicon Macs)
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc

# For Intel Macs, path is /usr/local/bin/brew

# Fix broken Homebrew
brew doctor
brew update
```

---

### Rosetta issues on Apple Silicon

**Symptom:** `Bad CPU type in executable` or Intel-only software fails.

**Cause:** Running x86 software on ARM Mac without Rosetta.

**Fix:**

```bash
# Install Rosetta 2
softwareupdate --install-rosetta

# Run terminal in Rosetta mode:
# 1. Find Terminal in Applications > Utilities
# 2. Right-click > Get Info
# 3. Check "Open using Rosetta"
```

---

## Windows issues

### WSL vs PowerShell confusion

**Symptom:** Commands work in WSL but not PowerShell, or vice versa.

**Cause:** These are different environments with different tools installed.

**Fix:**

```powershell
# Check if you're in WSL or PowerShell
echo $SHELL       # WSL shows /bin/bash or /bin/zsh
$PSVersionTable   # PowerShell shows version info

# Install tools in the environment you use
# For WSL: use Linux instructions
# For PowerShell: use Windows instructions

# Access WSL from PowerShell
wsl

# Access Windows files from WSL
cd /mnt/c/Users/YourName
```

---

### Execution policy blocks scripts

**Symptom:** `cannot be loaded because running scripts is disabled on this system`.

**Cause:** PowerShell security policy blocks script execution.

**Fix (run PowerShell as Administrator):**

```powershell
# Check current policy
Get-ExecutionPolicy

# Allow local scripts
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# Or for this session only
Set-ExecutionPolicy Bypass -Scope Process
```

---

### Line ending problems

**Symptom:** Scripts fail with `\r` errors or `bad interpreter`.

**Cause:** Windows line endings (CRLF) in files meant for Linux/macOS (LF).

**Fix:**

```bash
# In WSL, convert file
sed -i 's/\r$//' script.sh

# Or use dos2unix
apt install dos2unix
dos2unix script.sh

# Configure git to handle this
git config --global core.autocrlf input
```

---

## Linux issues

### Permission denied

**Symptom:** `Permission denied` when running a script or accessing files.

**Cause:** File lacks execute permission, or you're not the owner.

**Fix:**

```bash
# Make script executable
chmod +x script.sh

# Check file permissions
ls -la script.sh

# Run with sudo if needed (careful!)
sudo ./script.sh

# Fix ownership
sudo chown $USER:$USER file.txt
```

---

### Missing dependencies

**Symptom:** `libXXX.so not found` or `package not found`.

**Cause:** Required system libraries not installed.

**Fix:**

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install build-essential

# For Node.js native modules
sudo apt install python3 make g++

# Search for packages
apt search package-name
```

---

## Context file issues

### CLAUDE.md not being read

**Symptom:** Claude Code ignores instructions in your CLAUDE.md file.

**Cause:** File is in the wrong directory, has the wrong filename, or contains syntax issues.

**Fix:**

1. Make sure the file is named exactly `CLAUDE.md` (case-sensitive on macOS/Linux)
2. Make sure you're running `claude` from the same directory or a subdirectory
3. Run `/config` inside Claude Code to see which files it loaded
4. Check that the file is valid markdown (no encoding issues)

```bash
# Verify the file exists in your project directory
ls -la CLAUDE.md

# Check if Claude Code sees it (inside a session)
# Type: /config
```

---

### Context file not changing AI output

**Symptom:** You have a CLAUDE.md but the AI's responses look the same with or without it.

**Cause:** Instructions are too generic to affect output.

**Fix:**

Apply the deletion test. Replace vague instructions with specific ones:

- Instead of "Be accurate" → "Flag any dollar amounts that differ between the press release and the council minutes"
- Instead of "Follow AP style" → "Use 'council member,' not 'councilman.' Spell out numbers under 10. Use $2.3 million format."

---

### Context files conflicting across directories

**Symptom:** Unexpected AI behavior when working in subdirectories.

**Cause:** Claude Code merges CLAUDE.md files from the current directory and all parent directories. Conflicting instructions can cause confusion.

**Fix:**

```bash
# Check all CLAUDE.md files in the path
ls -la CLAUDE.md
ls -la ../CLAUDE.md
ls -la ../../CLAUDE.md

# More specific (child) files take precedence over general (parent) files
```

---

## Still stuck?

1. **Read the error message carefully.** It usually tells you what's wrong.

2. **Search the error.** Copy the exact error text into Google or the tool's GitHub issues.

3. **Check the tool's documentation:**
   - Claude Code: docs.anthropic.com
   - Gemini CLI: github.com/google-gemini/gemini-cli
   - Aider: aider.chat/docs
   - Codex: github.com/openai/codex

4. **Ask for help:**
   - Post in the course discussion forum with the full error message
   - Include: your OS, the command you ran, and the complete output

5. **Start fresh:**
   ```bash
   # Uninstall and reinstall the tool
   npm uninstall -g @anthropic-ai/claude-code
   npm install -g @anthropic-ai/claude-code

   # Clear cached data
   rm -rf ~/.claude
   ```
