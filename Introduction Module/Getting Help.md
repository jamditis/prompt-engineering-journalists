# Getting help

This page explains how to get help when you're stuck.

---

## Discussion forums

The discussion forums are your first resource for questions. Other students often have the same problems and can help.

### Forum types

**Question for the instructor**
- Use for questions about course content, assignments, or policies
- The instructor monitors this forum daily
- Expect a response within 24 hours (usually faster)

**Technical help**
- Use for installation problems, error messages, and tool issues
- Include your operating system and the full error text
- Screenshots help

**General discussion**
- Use for conversations with classmates
- Share resources, tips, and experiences

### How to ask good questions

Include these details when posting about a problem:

1. **What you were trying to do** (the goal, not just the command)
2. **What you did** (exact commands, steps taken)
3. **What happened** (full error message, screenshot if helpful)
4. **What you already tried** (so others don't suggest the same thing)

Bad question: "Claude Code doesn't work. Help?"

Good question: "I installed Claude Code with `npm install -g @anthropic-ai/claude-code` on Mac. When I run `claude`, I get 'Error: EACCES: permission denied'. I tried running with sudo but got the same error. macOS Sonoma 14.2."

### Responding to classmates

When you solve a problem, share your solution. This helps others and reinforces your learning.

---

## Office hours

The instructor holds weekly office hours via Zoom.

**When:** [Day/time to be announced in Module 1]

**Format:** Drop-in. No appointment needed.

**Best for:**
- Questions that are hard to explain in text
- Live troubleshooting
- Discussing project ideas

Office hours are recorded and posted in the course materials. If you can't attend live, watch the recordings.

---

## Email

Email the instructor at amditisj@montclair.edu for:

- Personal matters (extensions, accommodations)
- Issues you don't want to post publicly
- Urgent problems close to deadlines

For content questions, use the forums. Your question probably helps others too.

---

## Troubleshooting resources

Before posting, try these steps:

### Installation problems

1. **Check the tool's official documentation.** Error messages often have known solutions.
2. **Search the error message.** Copy the exact text into a search engine.
3. **Check GitHub issues.** Most tools have issue trackers where others report problems.
4. **Restart your terminal.** Some changes require a new terminal session.
5. **Check your PATH.** Many installation issues come from PATH configuration.

### Common issues by platform

**Mac:**
- Permission errors: Try `sudo npm install -g [package]` or fix npm permissions
- Command not found: Check that `/usr/local/bin` is in your PATH
- Xcode tools: Run `xcode-select --install` if prompted

**Windows:**
- PowerShell execution policy: Run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`
- Command not found: Restart Windows Terminal after installation
- Path issues: Add Node.js to your PATH manually if the installer didn't

**Linux:**
- Permission errors: Use `sudo` or configure npm to use a user directory
- Missing dependencies: Install build-essential if compilation fails

### API and authentication problems

- **"Invalid API key":** Check for typos, extra spaces, or missing characters
- **"Quota exceeded":** Wait for reset or add payment method
- **"Unauthorized":** Re-authenticate with the tool's login command

---

## Response time expectations

**Discussion forums:** Within 24 hours from instructor, often faster from classmates

**Email:** Within 24-48 hours

**Office hours:** Immediate

**Before deadlines:** Post at least 24 hours ahead. Last-minute questions may not get answered in time.

---

## Peer support

Your classmates are a resource. Many have different technical backgrounds and experiences.

**Ways to help each other:**
- Answer questions in forums when you know the answer
- Share what worked for you
- Post useful resources you find
- Test each other's custom skills in Module 3

Learning from peers is part of the course. The discussion participation grade reflects this.

---

## When nothing works

If you've tried everything and still can't solve a problem:

1. Post in the forums with full details
2. Attend office hours for live help
3. Email the instructor explaining what you've tried

We will not let technical issues prevent you from completing the course. If a tool genuinely won't work on your system, we'll find an alternative.
