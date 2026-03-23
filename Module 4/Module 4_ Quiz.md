# Module 4: Agents, tools, and data access

## Quiz

Complete this quiz after finishing the readings and hands-on exercise. You have **two attempts**; the higher score counts.

---

### Question 1

What distinguishes an AI agent from a standard chatbot?

A) Agents use larger language models with more parameters

B) Agents can use tools, make decisions, and complete multi-step tasks without continuous human input

C) Agents are always connected to the internet

D) Agents can only work with text, not images or video

**Correct answer:** B

**Explanation:** The defining characteristic of an agent is its ability to take actions (use tools), make decisions about what to do next, and work through multi-step tasks. A standard chatbot responds to individual prompts; an agent pursues goals across multiple steps.

---

### Question 2

What does running `claude -p "your prompt here"` do differently from launching an interactive Claude Code session?

A) It uses a different, more powerful model

B) It sends a single prompt, prints the result to stdout, and exits — no interactive session, no back-and-forth

C) It bypasses the CLAUDE.md context file

D) It runs the prompt but requires manual approval before producing output

**Correct answer:** B

**Explanation:** Non-interactive mode (`claude -p`) sends one prompt, gets a result, and exits. This makes it possible to use Claude in shell scripts, cron jobs, and automated pipelines — anywhere you need consistent, hands-off processing. An interactive session is better when you need to review intermediate steps or iterate on results.

---

### Question 3

What problem does the Model Context Protocol (MCP) solve?

A) It encrypts all communications between AI systems

B) It provides a standard way to connect AI models to external data sources and tools

C) It prevents AI models from generating false information

D) It translates between different programming languages

**Correct answer:** B

**Explanation:** MCP is Anthropic's open standard for connecting AI models to external data sources (like databases, file systems, or APIs) and tools (like web browsers or code executors). Before MCP, each integration required custom code; MCP provides a common protocol.

---

### Question 4

Why does connecting AI to your own documents (via MCP or a knowledge base) reduce hallucination compared to standard prompting?

A) Connected data sources are always verified and accurate

B) The AI is slower when reading files, giving it more time to think

C) The AI generates responses grounded in your source documents rather than relying on what it learned during training, which can be outdated or wrong

D) MCP servers filter out false information automatically

**Correct answer:** C

**Explanation:** Without a data connection, AI relies on "parametric knowledge" — patterns learned during training that can be outdated, incomplete, or wrong, with no way to check the source. When connected to your documents, the AI can draw from material you've provided and cite specific files. This doesn't eliminate errors, but it creates a citation trail: you can check what the AI said against what the document actually says.

---

### Question 5

A journalist builds an agent pipeline that works in three stages: a first subagent searches her archive for relevant articles, a second subagent extracts key facts from what the first found, and a third subagent drafts a briefing document from those facts. In stage one, the first subagent misidentifies an article's year, reporting a 2019 event as 2021. What is the most likely outcome?

A) The later subagents will catch and correct the error because they have access to the original documents

B) The error will likely compound — the second subagent analyzes incorrect facts, and the third subagent drafts a briefing based on them, making the final document wrong in ways that aren't obvious

C) The pipeline will automatically halt when it detects inconsistent information

D) Only the briefing document will be affected; the archive search results are stored separately

**Correct answer:** B

**Explanation:** When subagents pass outputs to each other, errors in early stages become inputs to later stages. The second subagent has no way to know the year was wrong — it works with what it received. The third subagent has no way to know either. The final document is wrong, the error is harder to trace than a single-session mistake, and there's no automatic detection. This is why verification at each handoff matters: check intermediate outputs before passing them to the next stage, the same way you'd verify a source's claims before citing them in a story.

---

## Quiz scoring

- 5 correct: Excellent
- 4 correct: Good
- 3 correct: Review the readings before proceeding
- 2 or fewer: Schedule office hours with the instructor
