# Forum narrative prompt

You will receive a JSON object describing one forum from a journalism AI course, including all extracted records for posts in that forum.

## Input
```json
{
  "forum_name": "...",
  "forum_category": "...",
  "post_count": 102,
  "extractions": [
    {"post_id": "...", "summary_one_line": "...", "themes": [...], "challenges": [...], "tools_mentioned": [...], "quotable_lines": [...]}
  ]
}
```

## Output
Return ONLY a JSON object:

```json
{
  "narrative": "Two to three paragraphs (300-450 words) summarizing what students said in this forum. No headings, no bullets — pure prose. Group related ideas. Name patterns and tensions. Avoid 'students discussed' generic openings.",
  "takeaways": [
    "5 to 7 short bullet items (one sentence each). Specific, not generic. e.g. 'Several students asked for guidance on cost-tracking when running large extraction batches.'"
  ],
  "standout_quote_ids": ["post_id_1", "post_id_2", "..."]
}
```

Pick standout_quote_ids from posts that have `quotable_lines` with `strength: "high"`. Up to 8.
Do not invent post_ids — only return ones present in the input.

Avoid the slop word list: "comprehensive", "robust", "transformative", "leveraging", "seamlessly", "sophisticated", "holistic", "ecosystem", "paradigm", "empower". Avoid "fundamentally transforms", "not just X, but Y", "a major milestone".
