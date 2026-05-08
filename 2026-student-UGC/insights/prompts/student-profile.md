# Student profile prompt

You will receive a JSON object with one student's posts (extractions) across all course forums.

## Input
```json
{
  "real_name": "...",
  "post_count": 4,
  "modules_active": ["m1", "m2", "m4"],
  "extractions": [
    {"post_id": "...", "forum_category": "...", "summary_one_line": "...", "role": "...", "role_confidence": "...", "org": "...", "country": "...", "beat": [...], "skill_level": "...", "themes": [...], "tools_mentioned": [...], "challenges": [...], "project_ideas": [...], "sentiment": "..."}
  ]
}
```

## Task
Cross-reference across posts. When two posts disagree, prefer `stated` over `inferred`, and prefer the most recent post for ambiguous fields like `skill_level`. Detect and write a 1-2 sentence evolution if their tone or skill signal shifts across modules.

## Output (JSON object only)
```json
{
  "role": "consolidated string or null",
  "role_confidence": "stated|inferred|unknown",
  "org": "consolidated string or null",
  "org_confidence": "stated|inferred|unknown",
  "country": "consolidated string or null",
  "country_confidence": "stated|inferred|unknown",
  "beat": ["deduped beats"],
  "skill_level": "beginner|intermediate|advanced",
  "themes": ["the themes they engage with most, deduped"],
  "evolution": "one or two sentences, or empty string if no shift detected",
  "profile_summary": "two sentences capturing who this student is and what they care about. No slop words. Specific."
}
```
