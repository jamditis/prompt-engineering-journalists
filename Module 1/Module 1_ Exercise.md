# Module 1: Escaping the chat window

## Hands-on exercise: Web vs CLI workflow comparison

**Time required:** 45-60 minutes

**What you will do:** Install a command-line AI tool, run your first prompts, and compare the experience to using a web interface.

---

## Part 1: Set up your environment (20 minutes)

### Step 1: Open your terminal

- **Mac:** Press `Cmd + Space`, type "Terminal", press Enter
- **Windows:** Press `Win + X`, select "Windows Terminal" or "PowerShell"
- **Linux:** Press `Ctrl + Alt + T`

### Step 2: Check if you have Node.js installed

Run this command:

```bash
node --version
```

If you see a version number (like `v20.10.0`), skip to Step 4.

If you see "command not found," continue to Step 3.

### Step 3: Install Node.js (if needed)

Go to https://nodejs.org/ and download the LTS version. Run the installer and follow the prompts.

After installation, close and reopen your terminal, then run `node --version` again to confirm it works.

### Step 4: Install your CLI tool

Pick ONE of the following (we recommend Gemini CLI for beginners since it has a free tier):

**Option A: Gemini CLI (free tier available)**
```bash
npm install -g @google/gemini-cli
```

**Option B: Claude Code**
```bash
npm install -g @anthropic-ai/claude-code
```
Or on Mac with Homebrew:
```bash
brew install --cask claude-code
```

**Option C: Aider**
```bash
pip install aider-chat
```

### Step 5: Verify installation

Run the tool name to confirm it installed:

```bash
gemini --version
```
or
```bash
claude --version
```
or
```bash
aider --version
```

You should see version information, not an error.

---

## Part 2: Your first CLI prompt (10 minutes)

### Step 6: Authenticate (if required)

Most tools need an API key or login on first use. Follow the prompts in your terminal.

- **Gemini CLI:** Will open a browser for Google authentication
- **Claude Code:** Requires an Anthropic API key or Claude subscription
- **Aider:** Requires an API key from your chosen LLM provider

### Step 7: Run a simple prompt

Navigate to your home directory:

```bash
cd ~
```

Now run a prompt. For Gemini CLI:

```bash
gemini "What are three things journalists should know about using AI from the command line?"
```

For Claude Code, you typically start an interactive session:

```bash
claude
```

Then type your prompt in the interface.

### Step 8: Save the output

Note the response. You will use it for comparison in Part 3.

---

## Part 3: Compare web vs CLI (15 minutes)

### Step 9: Run the same prompt in a web interface

Go to the web version of your chosen AI:
- Gemini: https://gemini.google.com
- Claude: https://claude.ai
- ChatGPT: https://chat.openai.com

Ask the same question: "What are three things journalists should know about using AI from the command line?"

### Step 10: Document your comparison

Create a text file with your observations. Answer these questions:

1. **Speed:** Which felt faster? Consider login time, typing, and response generation.

2. **Output format:** How did the responses differ in formatting? Was one easier to copy or reuse?

3. **Friction:** What extra steps did each method require? (Authentication, navigation, scrolling, etc.)

4. **File access:** Open a folder with some documents. How would you process them in each interface?

5. **Preference:** For a quick one-off question, which would you use? For processing 50 files, which would you choose?

---

## Part 4: Test file access (10 minutes)

This is where CLI tools show their advantage.

### Step 11: Create a test file

In your terminal:

```bash
echo "City council voted 5-2 Tuesday to approve a $12 million budget for road repairs. Council member Jane Smith opposed the measure, citing concerns about funding sources. The work will begin in March." > test_article.txt
```

### Step 12: Process the file with your CLI tool

For Gemini CLI:

```bash
gemini "Summarize this article in one sentence" < test_article.txt
```

For Claude Code (in interactive mode):

```
Summarize the file test_article.txt in one sentence
```

For Aider, point it at the file:

```bash
aider test_article.txt
```

Then ask it to summarize.

### Step 13: Try the same in a web interface

Copy the text from `test_article.txt` and paste it into the web interface. Ask for the same summary.

Notice the extra steps: open file, select text, copy, switch to browser, paste, type prompt.

---

## Submission

Submit a short writeup (300-500 words) covering:

1. Which tool you installed and any installation issues you encountered
2. Your comparison of web vs CLI for the simple prompt
3. Your comparison of web vs CLI for the file processing task
4. One journalism task you now want to try with CLI tools

There are no wrong answers here. The goal is to document your experience and identify where CLI tools might fit into your workflow.
