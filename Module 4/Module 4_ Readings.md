# Module 5: Agents and RAG

## Required readings

Complete these readings before the discussion forum and quiz.

---

### 1. Agentic AI in newsrooms

**"New Washington Post AI tool sifts massive data sets"**
Axios, August 2024
https://www.axios.com/2024/08/20/washington-post-ai-tool-data

*Reading time: 12 minutes*

This article examines the Post's internal tool, Haystacker, which analyzes video, photos, and text across large document sets. Pay attention to:
- How the system handles multi-step research tasks
- The role of human editors in reviewing agent outputs
- Privacy and verification protocols

**"The New York Times will let reporters use AI tools while its lawyers litigate AI tools"**
Nieman Lab, February 2025
https://www.niemanlab.org/2025/02/the-new-york-times-will-let-reporters-use-ai-tools-while-its-lawyers-litigate-ai-tools/

*Reading time: 10 minutes*

The Times built an internal tool called Echo for article summarization, SEO headline generation, and newsletter drafting. Note:
- Which tasks the system handles automatically vs. with human review
- How editors describe changes to their workflow
- Concerns raised by newsroom staff

---

### 2. Understanding RAG

**"What is retrieval-augmented generation?"**
IBM Research
https://research.ibm.com/blog/retrieval-augmented-generation-RAG

*Reading time: 8 minutes*

A technical but accessible explanation of how RAG works. Focus on:
- The retrieve-then-generate pipeline
- Why RAG reduces hallucination
- The difference between parametric knowledge (in the model) and non-parametric knowledge (retrieved)

**"Newsrooms can save thousands of hours with a RAG-based AI research system"**
Geneea News, April 2025
https://geneea.com/news/newsrooms-can-save-thousands-of-hours-with-a-rag-based-ai-research-system

*Reading time: 10 minutes*

Geneea's RAG system lets journalists query newsroom archives with citations to original sources. Consider:
- How attribution is preserved through the retrieval process
- Use cases for fact-checking and timeline generation
- Limitations of the approach

---

### 3. Model Context Protocol (MCP)

**"Introducing the Model Context Protocol"**
Anthropic blog, November 2024
https://www.anthropic.com/news/model-context-protocol

*Reading time: 6 minutes*

Anthropic's announcement of MCP explains why a standard protocol matters. Note:
- The problem MCP solves (connecting AI to data sources)
- The server/client architecture
- Examples of MCP integrations

**"MCP Quickstart Guide"**
Anthropic documentation
https://modelcontextprotocol.io/quickstart

*Reading time: 15 minutes*

Skim this technical documentation before the hands-on exercise. You don't need to memorize the details, just get familiar with:
- What an MCP server does
- How tools and resources are exposed
- The basic configuration format

---

### 4. LLM-assisted content analysis and structured outputs

**"Extracting quotes from news articles with LLMs"** — Jessy de Cooker, Generative AI in the Newsroom, October 7, 2025
https://generative-ai-newsroom.com/extracting-quotes-from-news-articles-with-llms-8e231aae77e7

*Reading time: 15 minutes*

A research project using GPT-3.5 + Pydantic structured outputs to extract and classify quotes from 2,464 Dutch newspaper articles. Overall F1 score of 0.75 — strong on direct quotes, weaker on paraphrases and split quotes. One finding worth noting: the model showed systematic bias against names outside dominant training data, including non-Western and Dutch names, reinforcing existing gaps in source diversity. The author argues that prompt design is a methodological artifact that must be documented and versioned, not treated as a neutral given.

This piece bridges RAG and agents: Pydantic structured outputs are a core pattern for building agents that return clean, reliable data instead of free-form text that has to be parsed manually.

---

### 5. A deployed personal agent: architecture from the inside

**"I'm a Claude Code agent with my own Gmail account"** — Joe Amditis, 925 Struggle Street, February 6, 2026
https://strugglestreet.substack.com/p/im-a-claude-code-agent-with-my-own

*Reading time: 15 minutes*

Written from the first-person perspective of a Claude Code agent running on a Raspberry Pi 5 in New Jersey. The agent has its own Gmail address, Google Drive, Calendar access, a Slack bot, and Telegram integration. It runs on a schedule: full check-ins every two hours on weekdays, event-driven sessions every 15 minutes, lightweight monitoring scans all day. It never takes external action without approval — it drafts, sends a Telegram notification with approve/edit/cancel buttons, and waits.

This is the most detailed first-person account of what a personal AI agent infrastructure looks like in daily operation. Read it alongside the large-newsroom pieces (Washington Post, New York Times) to compare what institutions build vs. what one journalist built on a $180 computer.

The "what goes wrong" section is required reading: accidental emails, CPU lockups, silent scheduler failures. This is what human oversight looks like in practice — not a policy, but a set of rules written after specific failures.

---

## Reading notes template

As you read, consider these questions:

1. What tasks are newsrooms delegating to AI agents vs. keeping under direct human control?

2. How does RAG change the reliability of AI-generated content compared to standard prompting?

3. What infrastructure (data, systems, expertise) does a newsroom need to implement these technologies?

4. Where do you see risks of automation bias or over-reliance on AI outputs?
