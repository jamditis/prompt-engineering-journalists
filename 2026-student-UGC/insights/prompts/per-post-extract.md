# Per-post extraction prompt

You will be given a single forum post from a journalism-focused AI course. Extract structured information about the author and the content per the schema below. Return ONLY a single JSON object — no surrounding prose, no code fence, no commentary.

## Input
You will receive a JSON object with: `post_id`, `forum_name`, `forum_category`, `discussion_subject`, `author_name`, `posted_at`, `content_text`, `language_guess`.

## Output schema
Return exactly this object shape (every field required, use `null` for unknown scalars and `[]` for unknown lists):

```json
{
  "post_id": "<copy from input>",
  "role": "string or null (e.g. 'data journalist', 'editor', 'professor', 'producer', 'media trainer')",
  "role_confidence": "stated|inferred|unknown",
  "org": "string or null (organization name)",
  "org_confidence": "stated|inferred|unknown",
  "country": "string or null (country name in English)",
  "country_confidence": "stated|inferred|unknown",
  "beat": ["string", ...],
  "skill_level": "beginner|intermediate|advanced",
  "skill_signals": ["one short phrase per signal"],
  "tools_mentioned": ["Claude", "Claude Code", "ChatGPT", "Gemini", "Copilot", ...],
  "ai_use_cases": ["short phrases like 'data analysis', 'transcription', 'fact-checking'"],
  "challenges": ["short phrases describing pain points or frustrations"],
  "project_ideas": ["concrete projects/applications the author mentions"],
  "themes": ["pick from canonical list below"],
  "theme_freeform": ["any themes the post covers that are not in the canonical list"],
  "sentiment": "frustrated|curious|enthusiastic|reflective|skeptical|neutral",
  "is_question_for_instructor": true|false,
  "is_off_topic": true|false,
  "language": "ISO 639-1 code based on the actual content",
  "quotable_lines": [
    {"text": "verbatim sentence from the post", "topic": "matching theme id", "strength": "high|medium"}
  ],
  "summary_one_line": "one-sentence neutral summary of what the author says"
}
```

## Confidence rules
- `stated`: the post says it explicitly ("I'm a reporter at ProPublica" → role + org both `stated`)
- `inferred`: implied but not said (mentions "covering federal courts" → role=journalist, beat=courts, both `inferred`)
- `unknown`: not derivable from this single post; use `null` for the value

## Canonical theme vocabulary
Pick zero or more from this list. Anything that doesn't fit goes in `theme_freeform`:

`coding-help`, `data-analysis`, `transcription`, `multilingual-workflows`, `fact-checking`, `scraping`, `cli-vs-web`, `cost-management`, `context-files`, `claude-md`, `skills-and-hooks`, `subagents`, `pipelines`, `rag-and-grounding`, `safety-and-bias`, `audience-engagement`, `newsroom-adoption`, `product-development`, `audio-and-podcast`, `video-and-image`, `pdf-extraction`, `ocr`, `email-summary`, `social-media-content`, `metrics-and-analytics`, `legal-and-court-docs`, `campaign-finance`, `accessibility-alt-text`, `translation`, `editing-and-style`

## Heuristics
- A post asking "how do I install X?" is `is_question_for_instructor=true` even if it doesn't address the instructor by name.
- Off-topic = chit-chat unrelated to journalism/AI/the course (rare; default false).
- `skill_level` should reflect what the AUTHOR demonstrates in THIS post, not their general expertise. A senior reporter who is new to AI should still be `beginner` here.
- `quotable_lines`: pick at most 3 sentences that would work standalone in a deck or article. Skip if nothing is quotable.
- `tools_mentioned`: keep names canonical (e.g. always "ChatGPT" not "chatgpt"; "Claude Code" not "claude code"; "Google Gemini" → "Gemini").

## Example output

For input post:
> "I'm a data journalist at the Toronto Star. I've been using ChatGPT for code help but the copy-paste workflow is killing me. Want to try Claude Code on the command line."

Return:

```json
{
  "post_id": "p1",
  "role": "data journalist",
  "role_confidence": "stated",
  "org": "Toronto Star",
  "org_confidence": "stated",
  "country": "Canada",
  "country_confidence": "inferred",
  "beat": ["data"],
  "skill_level": "intermediate",
  "skill_signals": ["uses ChatGPT for code help", "wants to move to CLI tools"],
  "tools_mentioned": ["ChatGPT", "Claude Code"],
  "ai_use_cases": ["code generation", "data analysis"],
  "challenges": ["copy-paste workflow friction between chat and editor"],
  "project_ideas": [],
  "themes": ["coding-help", "cli-vs-web", "workflow-friction"],
  "theme_freeform": ["workflow-friction"],
  "sentiment": "frustrated",
  "is_question_for_instructor": false,
  "is_off_topic": false,
  "language": "en",
  "quotable_lines": [
    {"text": "the copy-paste workflow is killing me", "topic": "cli-vs-web", "strength": "high"}
  ],
  "summary_one_line": "Wants to leave ChatGPT's copy-paste cycle behind for a CLI workflow."
}
```

Now process the input. Return the JSON object only.
