# Module 4: Advanced prompting patterns

## Optional resources

These materials go deeper into the themes of Module 4: context management, sub-agents, cross-model review, tool evaluation, and editorial judgment. All are practitioner writing from 2025 or 2026. Pick based on what you want to dig into, not by completing the list.

---

## Evaluating Claude Code on real investigations

**"Building Investigative Tipsheets with Claude Code"** — Nick Hagar, Generative AI in the Newsroom, April 2026
https://generative-ai-newsroom.com/building-investigative-tipsheets-with-claude-code-2e872b26358e

The first GAIN piece to evaluate Claude Code on real Pulitzer-caliber investigations. Hagar built a skill that reads raw investigative datasets and generates tipsheets, then tested it against 30 leads pulled from **seven investigative Pulitzer winners and finalists** — the Washington Post's FEMA reporting, Bloomberg's gun exports, WSJ's Medicare fraud series, the Marshall Project / NYT work on prison guard abuse, the NYT's taxi medallion investigation, the Charleston Gazette-Mail's opioid exposé, and Kaiser Health News's hospital patient lawsuits.

The findings are honest: 20% of leads missed entirely, ~30% thin or only directionally aligned, ~50% real starting points for a reporter. Original findings did emerge — 354,000 FEMA applicants denied aid despite the agency's own inspectors flagging their homes as damaged; a mysterious 2015 pause in Virginia court filings worth investigating. Code quality is flagged as "not great, not something you'd mistake for a production codebase," which is the kind of clear-eyed honesty this field needs more of. Hagar's closing: *"A tipsheet is only one piece of the work, and a dataset is not a story."*

Read this if you want a concrete picture of what "Claude Code in an investigative newsroom" actually produces today.

---

## Sub-agents from a working developer's perspective

**"Superpowers: how I'm using coding agents in October 2025"** — Jesse Vincent
https://blog.fsck.com/2025/10/09/superpowers/

A working developer's account of integrating coding agents into daily work — less theoretical than most writing on the subject. Vincent describes specific tasks he delegates to agents and what breaks down at the edges. Useful for calibrating expectations before you run your own sub-agents and cross-model workflows.

---

## Tool evaluation as a methodology

**"Generating and Evaluating News Angles for a Story Discovery Tool"** — Sachita Nishal, Generative AI in the Newsroom, March 16, 2026
https://generative-ai-newsroom.com/generating-and-evaluating-news-angles-for-a-story-discovery-tool-047dcd64e5b8

Nishal tested four small, cheap models — GPT-5-nano, Phi 4, Gemma 3, and a zero-shot BART-MNLI baseline — on generating news angles for arXiv research papers. The raw quality winner was Gemma 3 (4.54/7) and Phi 4 (4.31/7). But the **calibration winner was GPT-5-nano** — the only model whose self-reported confidence scores actually tracked human quality ratings.

Her takeaway is the single best piece of practical tool-selection advice in this reading list: *"A model that scores higher on average but can't tell you which outputs to trust requires human review of everything. A model that scores slightly lower but reliably flags its own best outputs can be automated."*

Nishal also includes concrete numbers for running your own evaluation: 4–5 hours of human annotation for 4–5 months of production use. That's the realistic effort-to-payoff ratio for doing this well.

**"Giving your AI a Job Interview"** — Ethan Mollick, One Useful Thing, November 12, 2025
https://www.oneusefulthing.org/p/giving-your-ai-a-job-interview

Mollick's argument that you should treat new AI models the way you'd treat a new hire: give them a short, structured test on work you already know the right answer to before trusting them on anything real. Pairs directly with Nishal's piece above — Mollick gives the framing, Nishal shows the worked example.

---

## Context management and guardrails

**"Subagent control"** — extracted from *Advanced Claude Code Patterns That Move the Needle* by The Agentic Lab
https://github.com/jamditis/stash/blob/main/ai/claude-code-patterns/lessons/05-subagent-control.md

*Reading time: 8 minutes*

When Claude delegates work to sub-agents, it defaults to lighter models (Sonnet/Haiku) for efficiency. For knowledge-intensive tasks — research, analysis, synthesis — this often means worse results than doing the work in the main session. This piece covers when and how to override that default, plus two failure modes worth understanding before you build any multi-agent pipeline.

The hallucination chain problem is directly relevant to journalism: when one sub-agent's output becomes the next sub-agent's input, errors compound. A hallucinated claim in step one becomes an analysis premise in step two, a headline candidate in step three. The mitigation pattern — insert deterministic verification between handoffs, don't trust sub-agent claims without checking — is the same principle as not treating a model's source citations as verified sources.

The second failure mode is sub-agent overload: a single sub-agent handling multiple unrelated tasks accumulates the same context pollution problems that affect main sessions. More sub-agents, each focused on one task, consistently outperform fewer sub-agents with broader mandates.

*Original guide by [The Agentic Lab](https://www.youtube.com/channel/UCD-gasIQYzXqQ4dr7mGPRfw). Extracted and organized in [jamditis/stash](https://github.com/jamditis/stash/tree/main/ai/claude-code-patterns).*

---

## When to trust the tool with full permissions

**"Living dangerously with Claude"** — Simon Willison, October 22, 2025
https://simonwillison.net/2025/Oct/22/living-dangerously-with-claude/

What happens when you give Claude Code full permissions and let it run without confirmation prompts. Willison completed three research projects in 48 hours — and clearly explains why this is a security risk when agents touch external content. His framework: the "lethal trifecta" of private data access + untrusted content exposure + external network access is what creates actual danger. His recommendation: use YOLO mode in sandboxed environments only.

Useful background for anything you do with `--dangerously-skip-permissions` in this course or after it.

**"How to stop AI's 'lethal trifecta'"** — Simon Willison, September 26, 2025
https://simonwillison.net/2025/Sep/26/how-to-stop-ais-lethal-trifecta/

A practical breakdown of the lethal trifecta framework and what you can actually do about it. The three components: private data access + untrusted content exposure + external network communication. The recommended defense: eliminate exfiltration vectors entirely rather than trying to make the AI perfect. In security terms, 99% reliability is still a failing grade.

---

## Tool comparison and trying more than one

**"First impressions of Claude Cowork, Anthropic's general agent"** — Simon Willison, January 12, 2026
https://simonwillison.net/2026/Jan/12/claude-cowork/

Willison's hands-on look at Claude Cowork, Anthropic's agent tool designed for non-developers. The underlying technology is nearly identical to Claude Code, but the interface removes technical barriers and runs in a sandboxed filesystem. He tested it on his own blog drafts — the kind of document-centric task a journalist would actually run. Also covers the ongoing unsolved problem of securing agents against prompt injection when they work with external content.

---

## Skeptical counterweights

**"AI psychosis and the warped mirror"** — Cory Doctorow, Pluralistic, September 17, 2025
https://pluralistic.net/2025/09/17/automating-gang-stalking-delusion/

A skeptical take on the gap between AI capability claims and documented harms, particularly around agentic systems given autonomous authority. Doctorow's argument: the danger isn't superintelligence, it's that we're building systems that confidently automate bad reasoning at scale. Worth reading before designing any agent-based workflow.

---

## Reference material (background only)

If you want the underlying documentation for the tools this module covers:

- **Claude Code documentation** — https://code.claude.com/docs — Scheduler, sub-agents, `/compact`, `/effort`, `/remote-control` reference
- **GitHub Copilot CLI** — https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-in-the-cli — Non-interactive mode (the `-p` flag) used in video 3 for cross-model review
- **OpenAI Codex CLI** — https://platform.openai.com/docs/codex — Same non-interactive pattern in a different tool
- **Anthropic Model Context Protocol** — https://modelcontextprotocol.io/ — MCP is not a Module 4 topic in the filmed course, but the docs exist here if you want to explore it on your own

These are listed for reference only. The practitioner writing above is where the Module 4 concepts actually come from.
