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

A journalist has been building a beat project for six weeks. Her CLAUDE.md has grown to 80 lines and includes instructions from early drafts she's since changed, notes she made to herself, and generic reminders like "always verify facts." She notices responses feel less focused than they were in week one. What's the most likely cause?

A) The AI model has been downgraded since she started the project

B) Her CLAUDE.md has grown so long that generic and outdated instructions are diluting the specific ones that matter

C) She needs to restart Claude Code to clear the cache

D) Context files stop working after 30 days and need to be rewritten from scratch

**Correct answer:** B

**Explanation:** Context files work by prepending their content to every conversation. When a context file grows bloated — with generic instructions that don't change the AI's behavior, or outdated rules that conflict with current ones — those tokens compete with the instructions that actually matter. Applying the deletion test to an existing CLAUDE.md is as important as applying it when writing it. If a line wouldn't change the AI's output for someone who knows your beat, cut it.
