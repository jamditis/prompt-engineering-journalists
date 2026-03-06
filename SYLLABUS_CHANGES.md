# Syllabus revision plan

Compiled from section-by-section walkthrough (2026-03-02).

---

## Course header (no changes)

- **Title:** Keep "Advanced prompt engineering for journalists" — discoverability outweighs the framing mismatch
- **Social links:** Keep Twitter as-is
- **Time commitment:** Keep 4–6 hours/week

---

## Course description (revise)

### Paragraph 1 — opening example
- **Change:** Replace the city council transcript example with examples that reflect the actual work: scraping web content, processing datasets, data classification/visualization, building digital content tools for small newsrooms
- **Core argument to add:** The advantage of CLI tools is **access to local compute power** — AI running on your machine, with your files, using your hardware. You can leave a scraper running, process large datasets locally, chain operations without upload/download cycles. Web apps are sandboxed; CLI tools run on a real machine.
- **This is the "why CLI" argument:** Not aesthetics or hacker culture — compute ownership

### Paragraph 2 — Mollick framework
- **Change:** Make Mollick less prominent. Keep the framework but lead with practical benefits and Joe's own work (vibe coding guides, agent Gmail piece, CCM tools). Mollick supports the framing, he doesn't anchor it.

### Paragraph 3 — five progressions
- **Change:** Reframe the RAG progression. Instead of "understanding AI → hands-on work with agents and RAG," frame it around managed memory/filesystem access and connecting AI to tools and data sources
- **Teach the MCP/RAG failure reality:** Where these tools break (permissions, auth, schema mismatches) is where the real skill lives. Include this as a course theme.

---

## Prerequisites (minor changes)

- Keep 101 course reference as "ideal but not strictly required"
- **Add:** Cloud-based alternatives for students without admin access — Replit, Lovable, AntiGravity, Google AI Studio, GitHub Codespaces, and other subscription IDEs/SDK tools. More than a single sentence — a proper paragraph or short subsection.

---

## Learning objectives (reframe two)

1. ✅ Keep as-is: Install and operate CLI AI tools, explain advantages over web interfaces
2. ✅ Keep as-is: Write project context files, process documents, use Git/GitHub
3. ✅ Keep as-is: Create custom skills, hooks, CLAUDE.md files
4. **Reframe:** "cost-conscious" → "resource-conscious" — covers tokens, context windows, rate limits, and time, not just API dollars
5. **Reframe:** "Configure retrieval-augmented generation pipelines that preserve source attribution" → reframe around connecting AI tools to local files and web sources via MCP. Drop the RAG-pipeline-with-attribution framing.

### Examples throughout objectives
- Update examples to reflect scraping, data processing, visualization, content tools for small newsrooms
- This is about guiding example choice, not restructuring objectives

---

## Pre-course orientation (minor changes)

- Keep all three CLI tool options (Claude Code, Gemini CLI, Codex CLI)
- Git/terminal basics: **both** video coverage and links to specific resources
- Ordering is correct (orientation comes first in weekly schedule)

---

## Module 1: From chat window to command line (consolidate)

### Topics — trim from 13 to ~10
**Move to Module 2:**
- Session commands (/help, /plan, /compact, /clear)
- "When CLI tools are worth the setup cost and when they are not"

**Keep in Module 1 (consolidate where possible):**
- Mollick's framework (models/apps/harnesses)
- CLI as programmatic control (scripting, piping, file access)
- "Work where your files live" — the compute access argument
- Web vs CLI comparison side by side
- The "fresh conversation" problem
- Project context files (CLAUDE.md, GEMINI.md, AGENTS.md)
- What goes in a context file
- The "deletion test" (keep as named concept)
- Processing journalism documents from filesystem
- Git basics and GitHub
- Context files as versionable infrastructure

### Exercise
- **Change:** Offer 2-3 scenario options instead of only "city hall beat project"
  - City hall/municipal beat project
  - Data tracking project (public spending, crime stats, etc.)
  - Content processing workspace (newsroom tool-building)
- Students pick the one closest to their work

### Readings
- **Restructure** into "read before the exercise" (tool docs, context file docs) and "read after" (Mollick, Joe's pieces, Schmid)

### Discussion prompts
- Keep both as-is

---

## Module 2: Custom skills for Claude Code (absorb topics)

### Topics — absorb from Module 1
- **Add:** Session commands (/help, /plan, /compact, /clear)
- **Add:** When CLI tools are worth the setup cost and when they are not

### Exercise
- **Change:** Offer 2-3 skill ideas — students choose
  - Source-verification skill
  - Data-cleaning/processing skill
  - Content formatting skill
  - Web scraping helper
- Keep the mechanics the same (create skill, invoke with /command, test on real example)

### Skills library
- **Demote** from core requirement to optional/supplementary
- Mention as a resource, don't require installation as a graded step

### Discussion prompts
- Keep both as-is

---

## Module 3: CLI workflows for newsrooms (simplify)

### Topics
- **Move `claude -p` to Module 4** — non-interactive mode pairs better with agents/autonomous workflows
- **Keep:** LLM-built workflow scripts, shell scripts inside interactive sessions, multi-stage pipelines, testing small before running large
- **Reframe:** "API key security and cost-conscious operations" → "API key security + testing small before running large" (practical, not cost-theory)

### Exercise
- **Change:** Offer multiple scenarios
  - City council agenda → reporter prep sheet
  - Web scraping pipeline (public data source)
  - Batch document processing (PDFs, transcripts)
  - Weekly content roundup generator

### Discussion prompts
- Keep both as-is

---

## Module 4: Agents, tools, and data access (major reframe)

### Title change
- **From:** "Agents and retrieval-augmented generation (RAG)"
- **To:** "Agents, tools, and data access"

### Focus change
- **From:** "Parametric vs. grounded knowledge, and why the citation trail matters"
- **To:** Agents that access tools and data (MCP, filesystem, web). RAG as one pattern among several, not the organizing concept.

### Topics — rework
- **Keep:** Chatbots vs. agents (tools, autonomy, multi-step plans)
- **Add:** `claude -p` (non-interactive mode) — moved from Module 3
- **Add:** Agent delegation and multi-step autonomous workflows
- **Reframe:** MCP as connecting AI to data sources (filesystem, database, web, APIs) — not "RAG pipeline"
- **Reframe:** Drop "parametric vs. grounded knowledge" as a headline topic. Keep the concept, weave into MCP discussion naturally.
- **Add:** Where MCP/RAG tools actually fail (permissions, auth, schema mismatches, silent failures) — the real skill is debugging these, not just setting them up
- **Keep:** Real-world examples (WaPo Haystacker, NYT Echo) — but contextualize as "agents in newsrooms" not "RAG in newsrooms"

### Exercise
- **Change:** Offer multiple dataset options
  - Government documents (budget, minutes, crime stats)
  - Scraped web data
  - Folder of news articles
  - Dataset from a public API

### Discussion prompts
- Revise to match the reframe (agents + data access, not RAG)

---

## Assignments and participation (minor changes)

### Final project examples
- **Update:** Add scraping pipelines, data visualization workflows, content publishing automation, newsroom tool-building
- Keep 2-3 original examples alongside the new ones

### Final project status
- Keep optional — Knight Center audience is diverse

### Grading math
- **Flag for Knight Center:** How do they handle optional components (20% final project) in their LMS? Ask them.

---

## Required tools (update)

### API vs. subscription
- **Update:** Lead with subscription options (Claude Max plan $20/mo, Gemini CLI free tier) rather than API key setup
- Still mention API keys as an option for students who prefer them

### Cloud/alternative tools
- **Add a proper subsection** covering:
  - Replit
  - Lovable
  - AntiGravity
  - Google AI Studio
  - GitHub Codespaces
  - Other subscription IDEs and SDK tools
- Frame as alternatives for students who can't install locally, not as equals to local compute (tie back to the "compute access" argument)

---

## Schedule summary table

- Update Module 4 title to "Agents, tools, and data access"
- Update exercise/deliverable descriptions to reflect "choose your scenario" approach
- Update Module 2 deliverable from "source-verification skill" to "custom skill of your choice"

---

## Cross-cutting themes to weave throughout

1. **Compute access is the core argument** — CLI tools give you a real machine, not a sandbox. You can run long processes, access local files, chain operations, leave scrapers running. This is the "why" of the whole course.
2. **Examples should reflect actual work** — scraping, data processing, classification, visualization, content tools for small newsrooms. Not just "verify sources" and "check attribution."
3. **MCP/RAG honesty** — teach where these tools fail, not just where they work. Permissions, auth, schema mismatches, silent failures. The skill is debugging the connection, not just making the connection.
4. **Joe's own work as primary reference** — vibe coding guides, agent Gmail piece, CCM tools, journalism skills library. Mollick supports, doesn't anchor.
