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
