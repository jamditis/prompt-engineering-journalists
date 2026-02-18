# Module 5: Agents and RAG

## Optional resources

These materials go deeper into the technical and ethical dimensions of agents and RAG. Choose based on your interests and background.

---

## Academic papers

**"Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"**
Lewis et al., 2020
https://arxiv.org/abs/2005.11401

The original RAG paper from Facebook AI Research. Technical but foundational. Read the abstract and introduction for the key concepts; the methods section is optional unless you want the full picture.

**"ReAct: Synergizing Reasoning and Acting in Language Models"**
Yao et al., 2023
https://arxiv.org/abs/2210.03629

Describes the ReAct pattern used in many AI agents: interleaving reasoning steps with tool use. Explains why agents that "think out loud" perform better on complex tasks.

**"Toolformer: Language Models Can Teach Themselves to Use Tools"**
Schick et al., 2023
https://arxiv.org/abs/2302.04761

How language models learn to call external APIs and tools. Useful background for understanding how agents decide when to retrieve information vs. generate from memory.

---

## Case studies and industry reports

**"Generative AI and news report 2025: How people think about AI's role in journalism and society"**
Reuters Institute for the Study of Journalism, October 2025
https://reutersinstitute.politics.ox.ac.uk/generative-ai-and-news-report-2025-how-people-think-about-ais-role-journalism-and-society

Survey data on how newsrooms and audiences are engaging with AI tools. Good for benchmarking and understanding industry-wide patterns.

**"The Jay Rosen Digital Archive: AI enrichment and knowledge graphs"**
Project documentation
https://github.com/jamditis/rosen-scraper

Your instructor's project applying entity extraction and RAG to a journalism archive of 765+ records. Shows how these techniques work with primary source materials, including entity extraction with the Gemini API and Google Sheets integration.

**"Geneea Newsroom Assistant"**
Geneea product documentation
https://geneea.com/assistant/

Technical details on implementing RAG for news archives, including how their system handles chunking, retrieval, and source attribution for newsroom search.

---

## Technical deep dives

**"Building effective agents"**
Anthropic cookbook
https://github.com/anthropics/anthropic-cookbook/tree/main/misc/building_effective_agents

Practical guide to agent architectures, including when to use simple prompts vs. multi-step agents.

**"MCP specification"**
Model Context Protocol documentation
https://spec.modelcontextprotocol.io/

The full technical specification. Reference material for the hands-on exercise and future projects.

**"Vector databases explained"**
Pinecone learning center
https://www.pinecone.io/learn/vector-database/

RAG systems use vector databases to find relevant documents. This explains how semantic search works under the hood.

**"Deterministic quoting for healthcare LLM safety"** — Simon Willison
https://simonwillison.net/2024/May/7/deterministic-quoting/

A technique specifically designed to guarantee quote accuracy in RAG systems: the LLM decides *which* section to cite, but the text retrieval is a traditional database lookup that bypasses the LLM entirely. "That's the only way to guarantee that an LLM has not transformed text: don't send it through the LLM in the first place." Developed for healthcare, but the journalism application is obvious — if your knowledge base contains interview transcripts and source documents, verbatim accuracy matters. This explains one architectural approach to ensuring it.

---

## Podcasts and videos

**"New Washington Post AI tool sifts massive data sets"**
Axios, August 2024
https://www.axios.com/2024/08/20/washington-post-ai-tool-data

Reporting on Haystacker, the Post's internal AI tool for investigative journalism. Covers how the engineering team built it and how reporters use it.

**"Journalism, media, and technology trends and predictions 2026"**
Reuters Institute, January 2026
https://reutersinstitute.politics.ox.ac.uk/journalism-media-and-technology-trends-and-predictions-2026

Annual forecast covering AI adoption in newsrooms, including agent-based tools and automation trends across the industry.

---

## Practitioner perspectives

**"Superpowers: how I'm using coding agents in October 2025"** — Jesse Vincent
https://blog.fsck.com/2025/10/09/superpowers/

A working developer's account of integrating coding agents into daily work. Less theoretical than the academic papers in this module — Vincent describes specific tasks he's delegating to agents and what breaks down at the edges. Useful for calibrating expectations before the exercise.

---

**"AI psychosis and the warped mirror"** — Cory Doctorow, Pluralistic
https://pluralistic.net/2025/09/17/automating-gang-stalking-delusion/

A skeptical take on the gap between AI capability claims and documented harms, particularly around agentic systems given autonomous authority. Doctorow's argument: the danger isn't superintelligence, it's that we're building systems that confidently automate bad reasoning at scale. Worth reading before designing any agent-based workflow.

---

**"First impressions of Claude Cowork, Anthropic's general agent"** — Simon Willison
https://simonwillison.net/2026/Jan/12/claude-cowork/

Willison's hands-on look at Claude Cowork, Anthropic's agent tool designed for non-developers. Key observation: the underlying technology is nearly identical to Claude Code, but the interface removes technical barriers and runs in a sandboxed filesystem. He tested it on his own blog drafts — the kind of document-centric task a journalist would actually run. Also covers the ongoing unsolved problem of securing agents against prompt injection when they work with external content.

---

**"The normalization of deviance in AI"** — Simon Willison
https://simonwillison.net/2025/Dec/10/normalization-of-deviance/

Applies Diane Vaughan's "normalization of deviance" concept — originally used to explain the Challenger disaster — to AI systems. Organizations that repeatedly use risky AI practices without visible consequences begin to treat those practices as safe. The article's warning: "organizations confuse the absence of a successful attack with the presence of robust security." The pattern for journalists is real: if you automate a pipeline that produces mostly-correct output and nothing visibly fails, it becomes easy to stop checking. That's when the failures compound.

---

**"How to stop AI's 'lethal trifecta'"** — Simon Willison
https://simonwillison.net/2025/Sep/26/how-to-stop-ais-lethal-trifecta/

A practical breakdown of the lethal trifecta framework and what you can actually do about it. The three components are: private data access + untrusted content exposure + external network communication. The recommended defense: eliminate exfiltration vectors entirely, rather than trying to make the AI perfect. In security terms, 99% reliability is still a failing grade. Relevant to the Module 5 exercise, where you're giving Claude access to your documents — understanding what risks that creates and how to mitigate them is part of doing it responsibly.

---

**"Living dangerously with Claude"** — Simon Willison
https://simonwillison.net/2025/Oct/22/living-dangerously-with-claude/

What happens when you give Claude Code full permissions and let it run without confirmation prompts. Willison completed three research projects in 48 hours — and clearly explains why this is a security risk when agents touch external content. His framework: the "lethal trifecta" of private data access + untrusted content exposure + external network access is what creates actual danger. His recommendation: use YOLO mode in sandboxed environments only. Useful for understanding what the Module 5 exercise is actually doing when it grants Claude file access.

---

## Tools to explore

**Claude Code**
https://claude.ai/code

The tool you'll use in this week's exercise. Free tier available.

**LangChain**
https://www.langchain.com/

Open-source framework for building RAG and agent applications. More complex than MCP but widely used.

**Ollama**
https://ollama.ai/

Run open-source language models locally. Useful if you want to experiment with RAG using free, local models.
