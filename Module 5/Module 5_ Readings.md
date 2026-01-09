# Module 5: Agents and RAG

## Required readings

Complete these readings before the discussion forum and quiz.

---

### 1. Agentic AI in newsrooms

**"The Washington Post's Haystacker: How AI agents are reshaping investigative journalism"**
Nieman Lab, August 2025
[Link to be added by instructor]

*Reading time: 12 minutes*

This article examines the Post's internal tool that analyzes video, photos, and text across large document sets. Pay attention to:
- How the system handles multi-step research tasks
- The role of human editors in reviewing agent outputs
- Privacy and verification protocols

**"Inside the New York Times's 'Echo' system"**
Nieman Lab, February 2025
[Link to be added by instructor]

*Reading time: 10 minutes*

The Times built Echo to assist with article summarization, SEO headline generation, and newsletter drafting. Note:
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

**"RAG for journalism: Searching archives with source attribution"**
Geneea case study
[Link to be added by instructor]

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

## Reading notes template

As you read, consider these questions:

1. What tasks are newsrooms delegating to AI agents vs. keeping under direct human control?

2. How does RAG change the reliability of AI-generated content compared to standard prompting?

3. What infrastructure (data, systems, expertise) does a newsroom need to implement these technologies?

4. Where do you see risks of automation bias or over-reliance on AI outputs?
