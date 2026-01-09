# Module 1: Escaping the chat window

## Quiz questions

### Question 1

What is the main advantage of using AI tools from the command line instead of a web interface?

A) Command-line tools are always faster than web interfaces
B) Command-line tools can access local files and be scripted for automation
C) Command-line tools are free while web interfaces require subscriptions
D) Command-line tools use more advanced AI models

**Correct answer:** B

**Explanation:** The key advantage of CLI tools is their ability to work with local files directly and integrate into automated workflows. Speed, cost, and model quality vary by tool and are not inherent advantages of the command line.

---

### Question 2

Which of the following CLI tools offers a free tier with 1,000 requests per day?

A) Claude Code
B) OpenAI Codex
C) Gemini CLI
D) Aider

**Correct answer:** C

**Explanation:** Gemini CLI from Google includes a free tier with 1,000 requests per day. Claude Code and Codex require paid subscriptions. Aider uses pay-per-use pricing through whichever LLM provider you configure.

---

### Question 3

To install Claude Code using npm, which command would you run?

A) `npm install claude-code`
B) `npm install -g @anthropic-ai/claude-code`
C) `pip install claude-code`
D) `brew install claude-code`

**Correct answer:** B

**Explanation:** The correct npm installation command is `npm install -g @anthropic-ai/claude-code`. The `-g` flag installs the package globally so it can be run from any directory. Note that `brew install --cask claude-code` is also valid for Mac users.

---

### Question 4

Which journalism task would benefit LEAST from a command-line AI workflow?

A) Batch-processing 200 PDF documents to extract key quotes
B) Asking a quick factual question during an interview
C) Generating alt-text for 50 images in a folder
D) Analyzing a dataset and producing summary statistics

**Correct answer:** B

**Explanation:** Quick, one-off questions during time-sensitive work like interviews are better suited to web interfaces or mobile apps. CLI tools shine for batch processing, file operations, and tasks that can be scripted and repeated.

---

### Question 5

What does the `-g` flag mean when running `npm install -g [package]`?

A) Install the package for guest users only
B) Install the package globally so it runs from any directory
C) Install the package in debug mode
D) Install the package with graphical interface support

**Correct answer:** B

**Explanation:** The `-g` flag tells npm to install the package globally rather than in the current project directory. Global installation makes the command available system-wide, which is necessary for CLI tools you want to run from anywhere.
