# Copilot review instructions

## Project

Advanced prompt engineering for journalists — a Knight Center MOOC teaching journalists to use AI CLI tools. Course website at mooc.amditis.tech, deployed via GitHub Pages from `docs/`.

## Style rules

- Always use sentence case. Never Title Case.
- No emojis in source code.
- Flag banned words: "comprehensive", "robust", "leveraging", "seamlessly", "innovative", "cutting-edge", "holistic", "synergy", "ecosystem", "paradigm", "empower", "transformative", "sophisticated", "state-of-the-art".
- Course content must follow anti-slop writing guidelines — flag AI filler patterns.
- Never include AI attribution ("Generated with Claude Code", etc.) in PRs, commits, code, or docs.

## Exercise design rules (critical)

These are strict rules for exercise content in `docs/module-*/index.html`:

1. **Only three code block types exist:**
   - `terminal` (text-acid color): Only for `claude`, `cd ~/folder`, or install commands
   - `claude code` (text-gray-300): Prompts pasted inside a Claude Code session
   - `claude.ai` (text-gray-300): Web interface prompts (Module 1 only)

2. **Never use `claude "..."` one-shot invocations.** Always use bare `claude` launch + a separate prompt block.

3. **Students don't type terminal commands beyond `claude` and `cd`.** File creation, git, scripts — all done by Claude inside the session.

4. **LESSON.md and RULE.md are not official Claude Code file types.** Only CLAUDE.md and `.claude/commands/` are official. Flag any references to LESSON.md or RULE.md.

## Website

- Zero-build static HTML with Tailwind CDN.
- Dark theme (bg-void, text-chrome, text-acid for accents).
- Every page needs SVG favicon and OG/Twitter meta tags.
- Mobile responsiveness required — check for `max-width` and responsive breakpoints.

## Course content

- Frame CLI tools as "harnesses" (not just "interfaces") per Ethan Mollick's framework.
- Current model names: Claude Opus 4.6, Claude Sonnet 4.6, Gemini 3.1 Pro, Codex (GPT 5.2).
- The course is 4 weeks (not 5 — old Module 1+2 were merged).
