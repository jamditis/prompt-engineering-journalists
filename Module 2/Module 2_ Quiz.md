# Quiz

## Module 2: Prompting with files and project context

5 multiple choice questions.

---

### Question 1

What is the primary purpose of a CLAUDE.md file?

A) To store the AI's responses for future reference

B) To provide persistent project-level instructions that Claude Code reads automatically

C) To log errors and debugging information

D) To replace the need for writing prompts

**Correct answer:** B

**Explanation:** CLAUDE.md is a context file that Claude Code reads automatically when you open a session in that directory. It persists your instructions across every conversation in the project — beat-specific terminology, source standards, style rules — so you don't have to repeat them.

---

### Question 2

You're writing a context file for your city hall beat. Which of the following instructions best passes the "deletion test"?

A) "Write accurate journalism"

B) "The city calls its annual budget process the 'appropriations cycle' — use this term, not 'budget season'"

C) "Be helpful and thorough"

D) "Follow AP style" (without any specific AP rules listed)

**Correct answer:** B

**Explanation:** The deletion test asks: if you removed this line, would the AI behave differently? Option B would change the AI's output — it would use generic language instead of the city's specific term. Options A, C, and D are generic enough that the AI would behave the same way without them.

---

### Question 3

How does a context file change the AI's behavior?

A) It replaces the AI's training data with your instructions

B) It adds your instructions to every conversation in that project directory, so the AI applies them without being asked

C) It prevents the AI from generating responses that contradict your instructions under any circumstances

D) It speeds up the AI's response time by reducing the context it needs to process

**Correct answer:** B

**Explanation:** A context file is prepended to every conversation as additional context — it doesn't modify the model or override its core behavior. The AI can still make mistakes, but it starts each session already knowing your project's rules and terminology.

---

### Question 4

What is the equivalent of CLAUDE.md in other CLI tools?

A) Gemini CLI uses GEMINI.md; Codex uses AGENTS.md

B) All tools use the same CLAUDE.md filename

C) Gemini CLI uses config.json; Codex uses settings.yaml

D) Other tools don't support project context files

**Correct answer:** A

**Explanation:** Each CLI tool has its own context file convention. Claude Code uses CLAUDE.md, Gemini CLI uses GEMINI.md, and OpenAI Codex CLI uses AGENTS.md. The concept is the same across all of them — a project file the tool reads on startup that provides persistent context for every session.

---

### Question 5

When should you use a project context file instead of including instructions in each prompt?

A) When the instructions apply to a single prompt only

B) When the instructions are generic and apply to all AI interactions everywhere

C) When the same instructions should apply to every conversation in a specific project

D) When you want to override the AI's safety guidelines

**Correct answer:** C

**Explanation:** Context files are for project-specific, recurring instructions. If you're writing the same thing at the start of every session — "I cover city hall for the Daily News, use AP style, always attribute claims" — that belongs in a context file. One-off instructions still go in the prompt.
