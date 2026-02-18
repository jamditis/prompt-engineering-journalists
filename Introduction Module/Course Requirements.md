# Course requirements

## Technical requirements

This course requires software installation and terminal access. Make sure your computer meets these requirements before Module 1 begins.

### Operating system

- **Mac:** macOS 10.15 (Catalina) or later
- **Windows:** Windows 10 or later (Windows 11 recommended)
- **Linux:** Any recent distribution with terminal access

You need administrator privileges on your computer. If you use a work computer with restricted permissions, talk to your IT department before the course starts.

### Node.js

Most CLI AI tools require Node.js. Install version 20 or higher.

**To check if Node.js is installed:**
```
node --version
```

If you see a version number starting with 20 or higher (e.g., v20.10.0), you're set.

**To install Node.js:**
- Download from https://nodejs.org/ (use the LTS version)
- Or use a package manager:
  - Mac: `brew install node` (requires Homebrew)
  - Windows: `winget install OpenJS.NodeJS.LTS`

### Terminal application

You need a terminal application to run commands.

- **Mac:** Terminal (built-in, in Applications > Utilities) or iTerm2
- **Windows:** Windows Terminal (install from Microsoft Store) or PowerShell
- **Linux:** Your default terminal emulator

Windows users: Git Bash (included with the Git installer — see below) is helpful for following Mac/Linux commands.

### Text editor

You'll edit configuration files and write skills. VS Code works well and is free: https://code.visualstudio.com/

Any text editor will work. Avoid word processors like Microsoft Word.

### Git

Git is required for this course. You'll use it to track your projects and to clone skills and tools from GitHub starting in Module 2. Your CLI tool handles the Git commands for you, but Git needs to be installed on your system.

**To check if Git is installed:**
```
git --version
```

If you see a version number (e.g., `git version 2.43.0`), you're set.

**To install Git:**
- Download from https://git-scm.com/downloads
- Or use a package manager:
  - Mac: `brew install git` (requires Homebrew)
  - Windows: `winget install Git.Git`

Windows users: the Git installer includes Git Bash, which is helpful for following Mac/Linux commands.

---

## AI tool access

You need access to at least one AI API. Choose based on your budget and preferences.

### Option 1: Claude Code (recommended)

**Cost:** Requires Claude Pro subscription ($20/month) or Anthropic API credits

**Setup:**
1. Install: `npm install -g @anthropic-ai/claude-code`
2. Run: `claude` and follow the authentication prompts

Claude Code is the main tool for Modules 3-5. If you're unsure which tool to use, choose this one.

### Option 2: Gemini CLI

**Cost:** Free tier includes 1,000 requests per day

**Setup:**
1. Install: `npm install -g @google/gemini-cli` (see https://github.com/google-gemini/gemini-cli for full setup)
2. Sign in with your Google account

Good choice if you want to start without spending money.

### Option 3: OpenAI Codex CLI

**Cost:** Requires ChatGPT Plus subscription ($20/month)

**Setup:**
1. Install from https://github.com/openai/codex
2. Authenticate with your OpenAI account

Works well if you already have ChatGPT Plus.

### Option 4: Aider

**Cost:** Pay per use (requires API key from Anthropic, OpenAI, or other provider)

**Setup:**
1. Install: `pip install aider-chat` (requires Python)
2. Configure with your preferred API key

Flexible option that works with multiple providers.

---

## Time commitment

Plan for 4-6 hours per week.

**Typical weekly breakdown:**
- Readings: 1-2 hours
- Video lectures: 30-60 minutes
- Hands-on exercise: 1-2 hours
- Discussion participation: 30-60 minutes
- Quiz: 15-30 minutes

Some weeks will require more time, especially if you're new to the terminal or run into installation issues. Start early.

---

## Before Module 1 starts

Complete these steps before the course begins:

1. **Verify your operating system** meets the requirements above
2. **Install Node.js** and confirm it works by running `node --version`
3. **Install Git** and confirm it works by running `git --version`
4. **Open your terminal application** and make sure you can navigate folders
5. **Choose an AI tool** and set up your API access or subscription
6. **Install a text editor** if you don't have one

If you get stuck on any step, post in the "Technical help" forum. Include:
- Your operating system and version
- The command you ran
- The error message you received (copy the full text)

Don't wait until Module 1 to troubleshoot. Installation issues are easier to solve before deadlines.

---

## Hardware recommendations

Any computer from the last 5-6 years should work.

- **Storage:** You'll create project directories with journalism documents and context files. No special storage requirements beyond normal use.
- **Internet connection:** Required for all cloud-based AI tools. A stable connection is recommended for interactive CLI sessions.

---

## Accessibility

If you need accommodations for any course activities, contact the instructor. We can provide:

- Extended deadlines for exercises
- Alternative formats for video content
- Modified participation requirements

Terminal tools and text-based workflows can be accessibility features themselves. Let us know if you'd like to explore these options.
