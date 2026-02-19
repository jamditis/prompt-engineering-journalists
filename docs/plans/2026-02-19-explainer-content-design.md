# Explainer content design

## Goal

Add plain-English explanatory content for journalists coming from the 101 course — people who know how to prompt AI in a browser but have no terminal experience.

## Two content types

### 1. Module page framing sections

Add 1-2 paragraph "framing" sections to three module pages:
- `docs/module-1/index.html` — what a CLI is
- `docs/module-2/index.html` — what a context file does
- `docs/module-4/index.html` — how AI session memory works

Each section bridges from what the student already knows (web-based prompting) to what the module teaches. Placed between the module intro and the key concepts section. No jargon without immediate definition.

### 2. Standalone explainer articles

Three new HTML pages at `docs/concepts/`:
- `what-is-a-cli.html` — for Module 1
- `how-context-files-work.html` — for Module 2
- `how-ai-session-memory-works.html` — for Module 4

Plus a `docs/concepts/index.html` that lists all three.

Each article: ~400-600 words, same design tokens as the rest of the site (Fraunces headings, Inter body, JetBrains Mono for code), linked from its module page.

## Target reader

Journalists who completed the 101 course. They know what a prompt is and have used Claude.ai or ChatGPT. They have not used a terminal. Use journalism analogies where possible (beats, source files, interview notes).

## Writing rules

- Sentence case everywhere
- No banned words: comprehensive, sophisticated, robust, transformative, leveraging, seamlessly, innovative, holistic, empower
- No "not just X — it's Y" patterns
- No filler: "it's worth noting", "with that in mind", "in order to"
- Active voice
- Short paragraphs (2-4 sentences max)
- Analogies must be specific and accurate, not decorative
- No padding — every sentence earns its place

## Navigation

Module pages link to their concept article: "Read the full explanation →"
The concepts index page links back to the course home and to each module.

## Files to create

- `docs/concepts/index.html`
- `docs/concepts/what-is-a-cli.html`
- `docs/concepts/how-context-files-work.html`
- `docs/concepts/how-ai-session-memory-works.html`

## Files to modify

- `docs/module-1/index.html` — add framing section + link to concept article
- `docs/module-2/index.html` — add framing section + link to concept article
- `docs/module-4/index.html` — add framing section + link to concept article
