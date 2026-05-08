# Theme clustering prompt

You will receive a list of free-form theme strings extracted from forum posts. Some are near-duplicates ("error handling" vs "error-handling" vs "handling errors"). Some describe genuinely new themes that aren't in the canonical vocabulary.

## Canonical vocabulary

`coding-help`, `data-analysis`, `transcription`, `multilingual-workflows`, `fact-checking`, `scraping`, `cli-vs-web`, `cost-management`, `context-files`, `claude-md`, `skills-and-hooks`, `subagents`, `pipelines`, `rag-and-grounding`, `safety-and-bias`, `audience-engagement`, `newsroom-adoption`, `product-development`, `audio-and-podcast`, `video-and-image`, `pdf-extraction`, `ocr`, `email-summary`, `social-media-content`, `metrics-and-analytics`, `legal-and-court-docs`, `campaign-finance`, `accessibility-alt-text`, `translation`, `editing-and-style`

## Task
Given the freeform list:
1. Drop any items that already match (or are near-synonyms of) a canonical theme.
2. Cluster the remainder into 0-10 emergent themes.
3. For each emergent theme, write: a kebab-case `theme_id`, a short `label`, a one-sentence `description`, and the list of input strings that map to it.

## Output
Return ONLY a JSON array. No prose:

```json
[
  {
    "theme_id": "workflow-friction",
    "label": "Workflow friction",
    "description": "Pain points around copy-paste between AI chat and editor/notebook.",
    "merges": ["copy-paste pain", "switching tools mid-task", "context loss between apps"]
  }
]
```

If no emergent themes are warranted, return `[]`.
