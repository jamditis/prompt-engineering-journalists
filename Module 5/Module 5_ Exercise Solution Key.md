# Module 5: Agents and RAG — exercise solution key

## Model student submission

### Part 1: Query results (in place of screenshots)

The following describes what a successful terminal session looks like for each of the four test prompts in Part 4. Each response is written as Claude would actually answer given the knowledge base files configured via MCP.

---

**Verification prompt: "What files are available in my knowledge base?"**

Before running the four test prompts, the exercise asks students to verify their MCP connection. A successful response looks like this:

> I can see the following files in your journalism-kb directory:
>
> - `index.md` — knowledge base index
> - `articles/city-budget-2025.md` — published story on the 2025 budget
> - `sources/martinez-interview.md` — interview transcript with Council Member Martinez
> - `background/city-budget-history.md` — five-year budget history (2020–2024)
>
> Would you like me to read any of these?

If Claude lists the files by name and path, the MCP filesystem server is working. If Claude responds that it doesn't have file access or asks the student to paste the content manually, the configuration has not loaded correctly.

---

**Prompt 1: "What was the total city budget approved for 2025?"**

A correct response draws from `articles/city-budget-2025.md` and provides the vote count along with the total figure:

> According to `city-budget-2025.md`, the City Council approved a **$450 million budget** for fiscal year 2025 in a **7-2 vote** on Tuesday, January 15, 2025.
>
> Key allocations from the approved budget:
> - Public safety: $125 million (up 8% from 2024)
> - Infrastructure: $95 million (up 12% from 2024)
> - Education partnerships: $45 million (unchanged)
> - Parks and recreation: $28 million (down 5% from 2024)
>
> Council members Martinez and Thompson voted against the budget.

The response must name the source file. It should not fabricate additional details (e.g., committee hearing names, specific revenue sources) that are not in the document.

---

**Prompt 2: "How does the 2025 parks budget compare to previous years?"**

This prompt requires Claude to cross-reference `articles/city-budget-2025.md` and `background/city-budget-history.md`. A correct response shows the trend across all available years and cites both files:

> Based on `city-budget-2025.md` and `city-budget-history.md`, here is how parks funding has changed:
>
> | Year | Budget total | Parks allocation | Parks as % of total |
> |------|-------------|-----------------|---------------------|
> | 2020 | $380M | $32M | 8% |
> | 2021 | $385M | $38M | ~10% (temporary pandemic increase) |
> | 2022 | $395M | $32M | ~8% |
> | 2023 | $410M | $30M | ~7.3% |
> | 2024 | $425M | $29.5M | ~6.9% |
> | 2025 | $450M | $28M | ~6.2% |
>
> The trend is clear: parks funding has declined both in raw dollars (from $32M in 2020 to $28M in 2025) and as a share of the total budget (from 8% in 2020 to just over 6% in 2025). The background document notes that parks has fallen from 8% to 7% of budget over five years; the 2025 cut continues that trajectory.
>
> The 2021 figure is an outlier — parks funding temporarily increased to $38M that year for outdoor programming during the pandemic, then returned to pre-pandemic levels in 2022.

Note that the 2025 parks percentage (6.2%) requires arithmetic Claude performs from the documents: $28M ÷ $450M. Students should accept that figure or calculate it themselves to verify. The background document says parks went from 8% to 7% over 2020–2024, covering five years of data. The 2025 figure extends beyond the background document's range, which is why both files are required to give the full picture.

---

**Prompt 3: "What did Council Member Martinez say about the parks funding cut? Include the exact quote."**

This prompt tests whether Claude reads from the interview transcript rather than the published story. The published story (`city-budget-2025.md`) contains one Martinez quote about parks: *"We're seeing record usage of city parks since the pandemic. This is the wrong time to cut."* The interview transcript (`sources/martinez-interview.md`) contains three distinct quotes. A correct response cites the interview transcript specifically and provides the longer, more detailed quotes:

> From `sources/martinez-interview.md` (phone interview conducted January 16, 2025 by Sarah Chen):
>
> On the parks funding cut:
> *"Look, I understand we have finite resources. But parks aren't a luxury. They're public health infrastructure. During COVID, parks were the only safe gathering spaces we had."*
>
> On the vote:
> *"I voted no because I think we'll regret this in two years. Usage data shows parks visits are up 40% since 2019. We're cutting services at the moment of peak demand."*
>
> On the public safety increase:
> *"I'm not against public safety funding. I'm against the framing that it has to come at the expense of everything else. We could have found other efficiencies."*
>
> The index notes that all quotes in source documents are verbatim from recorded interviews.

If Claude only returns the shorter quote from the published article, it did not read the interview transcript — that is a partial answer and worth partial credit only. Graders should check which file Claude cites.

---

**Prompt 4: "Write a 100-word summary of the budget story for social media, based on the documents in my knowledge base."**

This prompt tests synthesis. Claude should draw from all three content files and should not add information not present in any of them. A correct response looks like this:

> The City Council approved a $450 million budget for 2025 in a 7-2 vote, with Council members Martinez and Thompson dissenting. Public safety and infrastructure both received increases — 8% and 12%, respectively — while parks funding dropped 5% to $28 million, continuing a five-year decline. Martinez, who chairs the Parks Committee, called parks "public health infrastructure" and said usage data shows visits are up 40% since 2019. "We're cutting services at the moment of peak demand," she said. Mayor Williams defended the budget, calling public safety and infrastructure "non-negotiable priorities." The budget takes effect March 1.

This is 99 words. Acceptable responses will vary in phrasing but must:
- Mention the $450M total and 7-2 vote
- Name Martinez (and ideally Thompson) as the dissenting votes
- Reference both the public safety/infrastructure increases and the parks decrease
- Include at least one Martinez quote
- Not fabricate information (e.g., quotes from the mayor beyond what appears in the article, committee vote details, public testimony)

---

### Part 2: Reflection answers (5 questions)

**1. Accuracy: Did Claude correctly cite information from your knowledge base? Did you notice any errors or hallucinations?**

For the most part, Claude was accurate on the factual retrieval questions. When I asked for the budget total and the vote count, it pulled the correct figures directly from the article and cited the file by name. The cross-reference question was where I had to pay attention — Claude had to do a small calculation to express the 2025 parks budget as a percentage of the total, and I verified that math myself ($28M ÷ $450M = 6.2%).

The place where Claude could easily go wrong — and where I stayed alert — was the synthesis prompt. If I had asked about something the knowledge base doesn't cover, like what community groups said about the parks cut or how the budget compared to neighboring cities, Claude would have either admitted it didn't know or, in a worse case, made something up. I didn't push it that far in this exercise, but that boundary is important to understand. The knowledge base is only as good as what's in it. If you ask a question it can't answer from the documents, you have to treat that response with real skepticism.

**2. Attribution: How useful was having source documents for verifying Claude's responses?**

Having the source files made verification fast in a way that just using Claude.ai directly doesn't. When Claude said Martinez called parks "public health infrastructure," I could immediately open `martinez-interview.md` and confirm the quote was verbatim. I didn't have to go find a web link or hope the AI was paraphrasing accurately.

This matters for journalism specifically because there's a real difference between a verbatim quote and a paraphrase, and that difference is ethically significant. If Claude had slightly reworded the quote or merged two different things Martinez said into one sentence, the document was right there for me to catch it. In a typical ChatGPT session with pasted context, you'd have the same ability in principle, but the workflow here — with named files and explicit citations — made me more likely to actually check rather than assume.

The index file also helped. Knowing that the knowledge base index notes all quotes are "verbatim from recorded interviews" gave me a useful framing for how to treat anything Claude returned from that file.

**3. Limitations: What questions could Claude NOT answer well, given the limited knowledge base?**

A few gaps were obvious even before I started. The knowledge base has nothing about the mayor beyond a single quote in the news article. If I asked "What has Mayor Williams said about parks funding over the past few years?" Claude would have nothing to draw from and might either say so (good) or fill in the gap with something plausible-sounding that isn't in any document (bad).

Similarly, the knowledge base covers only one story and its background. There's no community reaction, no information about what happened at the public hearing before the vote, no coverage of parks advocacy groups or park usage data beyond what Martinez cited. The moment a question goes beyond what's in those three content files, the system's usefulness drops sharply.

This points to a design principle: a knowledge base is only as good as what you put in it, and gaps in the knowledge base create hallucination risk. If a reporter uses this setup to answer questions about a story and asks something the documents don't cover, they need to know to treat Claude's response as potentially invented rather than retrieved.

**4. Journalism applications: How might you use this setup in your own reporting? What documents would you include in your knowledge base?**

The clearest use case I can see is source organization during an investigation with a lot of documents. If I'm working a FOIA dump — say, 200 pages of city emails — I could process them into structured markdown files (or use Claude Code to do that processing), index them, and then query across the whole set. Instead of ctrl-F searching one PDF at a time, I could ask "Which emails mention the parks maintenance contract?" and get a response that cites specific documents.

For beat reporting, a knowledge base of background files — a mayor's voting history, key sources' previous quotes, budget trends going back five years — would let me quickly check context before interviews or while writing. The budget history file in this exercise is a good example of what that looks like: a reference document I'd maintain and update each year.

For breaking news with multiple documents coming in fast (court filings, press releases, statements), having a structured place to drop them and query across them is faster than switching between browser tabs and re-reading everything from scratch.

The documents I'd include would depend on the beat, but the general categories are: primary source documents (official records, filings), interview notes and transcripts, my own published stories as searchable background, and running reference files for recurring topics.

**5. Maintenance: If this were a production system, who would be responsible for keeping the knowledge base current? What processes would you need?**

This is the question the exercise made me think about most seriously. The knowledge base in this exercise is a snapshot — it reflects what was known as of mid-January 2025. If the city passed a budget amendment in March, or if Martinez gave a press conference with updated comments on the parks cut, that wouldn't be in the knowledge base. Claude would still answer based on the old documents. That's a real problem if you're using this as a reference system rather than a one-time research tool.

For a production setup, someone has to own the knowledge base. In a newsroom, that probably means a specific reporter on a specific beat, or a data/research desk if the organization has one. You'd need a process for adding new documents (court filings, official statements, interview transcripts) as they come in, and for updating or retiring outdated documents rather than just leaving old versions alongside new ones.

Version tracking matters for the same reason it matters in any collaborative document system: if Claude cites `city-budget-history.md` from 2023 and that file hasn't been updated since, you need to know that. Clear file naming conventions (dates in filenames, explicit "last updated" headers in the documents) would help. Stale documents that look authoritative are worse than no documents, because they give the system false confidence.

The honest answer is that maintaining a knowledge base is ongoing editorial work. The technology is the easy part. The discipline of keeping it current is what determines whether it's useful or a liability.

---

## Grader notes

### What strong work looks like

Strong submissions demonstrate that the student understood what RAG actually does — that Claude is reading from documents, not retrieving from training data — and can articulate why that distinction matters for journalism. The best reflection answers go beyond "it worked" to think about edge cases, failure modes, and the conditions under which this setup is and isn't trustworthy.

On the technical side, strong work shows correct file paths in the MCP configuration (no `YOUR_USERNAME` placeholder left in), a working verification screenshot, and query responses that cite specific filenames rather than generic statements like "according to my knowledge base."

The synthesis prompt (Prompt 4) is the best single indicator of whether the student understood the exercise's core point. If the summary adds information not in the knowledge base — details about the mayor's track record, community response, comparisons to other cities — the student didn't catch that Claude was hallucinating. If the summary stays within the documents and is clearly grounded in them, the student understood what they were building.

### Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| MCP configuration (Part 3) | 15 | Config file exists and is correctly formatted; path points to actual knowledge base directory; no placeholder username remaining |
| Verification screenshot (Part 4.1) | 10 | Claude lists the knowledge base files by name, confirming MCP connection works |
| Prompt 1 response (Part 4.2) | 10 | Correct figure ($450M), correct vote count (7-2), source file cited |
| Prompt 2 response (Part 4.2) | 15 | Cross-references both article and history file; shows multi-year trend; cites both files |
| Prompt 3 response (Part 4.2) | 15 | Cites interview transcript (not just the article); returns verbatim quotes; distinguishes between the two source documents |
| Prompt 4 response (Part 4.2) | 10 | Synthesis stays within the knowledge base; includes vote, Martinez opposition, budget changes; no invented details |
| Reflection questions (Part 5) | 25 | All five answered; at least three show genuine engagement with implications, not just "it worked fine" |
| **Total** | **100** | |

Partial credit on query responses: if Claude's answer is correct but doesn't cite a filename, deduct 3 points. If the answer is partially correct (e.g., gives the right budget total but misses the vote count), deduct proportionally.

### Expected query results (for graders to check against)

**Prompt 1 — correct answer elements:**
- Total: $450 million
- Vote: 7-2
- No votes: Martinez and Thompson
- Source: `articles/city-budget-2025.md`
- Optionally: key allocation figures (public safety $125M, infrastructure $95M, parks $28M)

Do not penalize for including or omitting the allocation table — the prompt only asked about the total. Penalize if Claude adds information not in the document (e.g., fabricated dissenting council members other than Martinez and Thompson).

**Prompt 2 — correct answer elements:**
- 2025 parks: $28M (from `city-budget-2025.md`)
- 2024 parks: $29.5M (from `city-budget-history.md`)
- 2023 parks: $30M (from `city-budget-history.md`)
- 2022 parks: $32M (from `city-budget-history.md`)
- 2021 parks: $38M — note this was a temporary pandemic increase, should be flagged as an outlier
- 2020 parks: $32M (from `city-budget-history.md`)
- Both source files cited
- Trend: parks declined from 8% to 7% of total budget over 2020–2024, continuing down in 2025

Partial credit if student only has one file's data (e.g., only 2024 and 2025 from the article). Full credit requires cross-reference.

**Prompt 3 — correct answer elements:**
- Source cited: `sources/martinez-interview.md` (not just `articles/city-budget-2025.md`)
- Verbatim quote on parks: "Look, I understand we have finite resources. But parks aren't a luxury. They're public health infrastructure. During COVID, parks were the only safe gathering spaces we had."
- Optionally: quote on the vote ("I voted no because I think we'll regret this in two years...") and quote on public safety ("I'm not against public safety funding...")

This prompt has the clearest right/wrong answer. If Claude returns only the quote from the published article ("We're seeing record usage of city parks since the pandemic. This is the wrong time to cut."), it did not read the interview transcript. Award 8/15 for that outcome and note the issue.

**Prompt 4 — correct answer elements:**
- Mentions $450M total
- Mentions 7-2 vote
- Names Martinez as a dissenting vote (Thompson optional but acceptable)
- References both increases (public safety, infrastructure) and the parks decrease
- Includes at least one direct quote
- Does not add information not present in the knowledge base (e.g., no public testimony, no mayoral record, no comparison to other city budgets)
- Approximately 100 words (85–115 is acceptable)

Deduct 5 points if the summary includes fabricated details. Deduct 3 points if it runs significantly over or under word count without explanation.

### Common issues to watch for

**Configuration errors that look like exercise completion:**
Some students will paste their MCP configuration but not actually verify it works. If the screenshot shows Claude Code open but not listing knowledge base files — or if the student skipped the verification step — the MCP connection was not confirmed. Do not award full configuration points without evidence the connection worked.

**"YOUR_USERNAME" left in the config:**
This is the most common error. It means Claude Code cannot find the knowledge base path and the configuration is not functional. It's worth a comment but not automatic zero — the student may have corrected it in practice and just submitted the uncleaned example from the exercise instructions.

**Using the article quote for Prompt 3 instead of the interview transcript:**
A student whose Claude response to Prompt 3 only returns "We're seeing record usage of city parks since the pandemic. This is the wrong time to cut." got the basic answer but missed the richer interview content. This is worth flagging in feedback because it reveals a gap in understanding: the student may not have checked which document Claude was reading from.

**Synthesis that invents details:**
If the 100-word summary mentions community opposition, a public hearing, advocacy groups, other council members' comments, or anything else not in the three content files, Claude hallucinated. Students who notice this and flag it in their reflection demonstrate real understanding of the exercise's purpose. Students who don't notice it — and submit the invented summary without comment — should get feedback about why this matters.

**Reflection answers that stay surface-level:**
The reflection is 25% of the grade. Answers that say only "yes it worked" or "I would use this for research" without engaging with the implications of accuracy, attribution, limitations, and maintenance are not meeting the standard. Use the model answers above as a benchmark. The maintenance question in particular rewards students who think ahead to editorial process and workflow, not just the technology.

**Students who report Claude refusing to access files:**
This usually means the MCP server didn't start. Common causes: Node.js not installed or outdated, path in the config file is wrong, or Claude Code was not restarted after the config change. Point them to the troubleshooting section of the exercise and ask them to try again if time allows.
