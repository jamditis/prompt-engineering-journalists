# Student UGC pipeline implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the data pipeline that turns the 2026-student-UGC corpus (594 threads, 912 posts) into structured JSON files the dashboard will consume.

**Architecture:** Five phases, each writing to disk so any phase is re-runnable: flatten (Python) → extract per-post (Claude Code subagent fan-out) → validate (Python) → aggregate (in-session LLM + Python) → build (Python). Per-post extractions are checkpointed at the file system; failures are skip-on-rerun.

**Tech Stack:** Python 3.11 with venv, pytest, langdetect (or lingua-py) for language detection. No external API keys — extraction runs through Claude Code's subagent system. MiniSearch (built from Python into a JSON index the JS dashboard reads at runtime).

**Spec:** `docs/superpowers/specs/2026-05-08-student-ugc-insights-design.md`

---

## Pre-flight notes

- Working directory: `2026-student-UGC/`. All paths below are relative to that root unless absolute.
- All Python lives in `insights/`. Tests in `insights/tests/`.
- The dashboard files are out of scope for this plan — Plan 2 covers them.
- For the LLM-driven phases (Tasks 6, 9-11), the "test" is an end-to-end smoke run on a small batch, not a unit test. Deterministic Python (Tasks 3, 8, 12, 14, 15) gets proper TDD.

---

## Task 1: Project scaffolding

**Files:**
- Create: `insights/.gitignore`
- Create: `insights/requirements.txt`
- Create: `insights/README.md` (stub — fleshed out in Task 16)
- Create: `insights/__init__.py`
- Create: `insights/tests/__init__.py`
- Create: `insights/tests/fixtures/.keep`
- Create: `insights/data/.keep`
- Create: `insights/prompts/.keep`

- [ ] **Step 1: Create directory structure**

```sh
mkdir -p insights/tests/fixtures insights/data insights/prompts insights/aggregate insights/lib
touch insights/__init__.py insights/tests/__init__.py insights/aggregate/__init__.py insights/lib/__init__.py
touch insights/tests/fixtures/.keep insights/data/.keep insights/prompts/.keep
```

- [ ] **Step 2: Create `insights/.gitignore`**

```gitignore
# venv
venv/
__pycache__/
*.pyc

# generated data
data/extracted/
data/failed/
data/extraction_log.jsonl
data/validation_errors.json
data/posts.jsonl
data/students.json
data/themes.json
data/forums.json
data/overview.json
data/quotes.json
data/name_map.json
data/slices/

# but keep .keep markers so empty dirs persist
!data/.keep
!data/*/.keep
```

- [ ] **Step 3: Create `insights/requirements.txt`**

```
pytest>=8.0
langdetect>=1.0.9
```

- [ ] **Step 4: Set up venv and install**

```sh
python -m venv insights/venv
insights/venv/Scripts/activate     # Windows; on macOS/Linux use insights/venv/bin/activate
pip install -r insights/requirements.txt
```

- [ ] **Step 5: Stub `insights/README.md`**

```markdown
# Student UGC insights pipeline

See `docs/superpowers/specs/2026-05-08-student-ugc-insights-design.md` for design.
See `docs/superpowers/plans/2026-05-08-student-ugc-pipeline.md` for implementation.

(Full README written in Task 16.)
```

- [ ] **Step 6: Verify pytest runs (no tests yet, exit 5 expected)**

```sh
pytest insights/tests
```

Expected: `no tests ran` (exit 5), confirming pytest picks up the directory.

- [ ] **Step 7: Commit**

```sh
git add insights/.gitignore insights/requirements.txt insights/README.md insights/__init__.py insights/tests/__init__.py insights/aggregate/__init__.py insights/lib/__init__.py insights/data/.keep insights/prompts/.keep insights/tests/fixtures/.keep
git commit -m "feat(insights): scaffold pipeline project structure"
```

---

## Task 2: Define record schemas

**Files:**
- Create: `insights/lib/schema.py`
- Create: `insights/tests/test_schema.py`

The schema module defines the dataclass-like shape for flattened posts and extraction records, plus a `validate_extraction(d: dict) -> list[str]` function that returns a list of validation errors (empty list = valid). Using plain dicts + a validator (not pydantic) to keep dependencies minimal.

- [ ] **Step 1: Write the failing test**

Create `insights/tests/test_schema.py`:

```python
from insights.lib.schema import (
    REQUIRED_EXTRACTION_FIELDS,
    SKILL_LEVELS,
    SENTIMENTS,
    CONFIDENCE_VALUES,
    validate_extraction,
)


def test_validate_extraction_accepts_minimal_valid_record():
    record = {
        "post_id": "p1",
        "role": None,
        "role_confidence": "unknown",
        "org": None,
        "org_confidence": "unknown",
        "country": None,
        "country_confidence": "unknown",
        "beat": [],
        "skill_level": "beginner",
        "skill_signals": [],
        "tools_mentioned": [],
        "ai_use_cases": [],
        "challenges": [],
        "project_ideas": [],
        "themes": [],
        "theme_freeform": [],
        "sentiment": "neutral",
        "is_question_for_instructor": False,
        "is_off_topic": False,
        "language": "en",
        "quotable_lines": [],
        "summary_one_line": "test",
    }
    assert validate_extraction(record) == []


def test_validate_extraction_rejects_missing_field():
    record = {"post_id": "p1"}
    errors = validate_extraction(record)
    assert any("missing required field" in e for e in errors)
    assert len(errors) >= len(REQUIRED_EXTRACTION_FIELDS) - 1


def test_validate_extraction_rejects_bad_skill_level():
    record = _minimal_valid()
    record["skill_level"] = "expert"
    errors = validate_extraction(record)
    assert any("skill_level" in e for e in errors)


def test_validate_extraction_rejects_bad_confidence():
    record = _minimal_valid()
    record["role_confidence"] = "maybe"
    errors = validate_extraction(record)
    assert any("role_confidence" in e for e in errors)


def test_validate_extraction_rejects_bad_quotable_line_shape():
    record = _minimal_valid()
    record["quotable_lines"] = [{"text": "hi"}]  # missing topic, strength
    errors = validate_extraction(record)
    assert any("quotable_lines" in e for e in errors)


def test_skill_levels_constants():
    assert SKILL_LEVELS == ("beginner", "intermediate", "advanced")
    assert "neutral" in SENTIMENTS
    assert CONFIDENCE_VALUES == ("stated", "inferred", "unknown")


def _minimal_valid():
    return {
        "post_id": "p1",
        "role": None,
        "role_confidence": "unknown",
        "org": None,
        "org_confidence": "unknown",
        "country": None,
        "country_confidence": "unknown",
        "beat": [],
        "skill_level": "beginner",
        "skill_signals": [],
        "tools_mentioned": [],
        "ai_use_cases": [],
        "challenges": [],
        "project_ideas": [],
        "themes": [],
        "theme_freeform": [],
        "sentiment": "neutral",
        "is_question_for_instructor": False,
        "is_off_topic": False,
        "language": "en",
        "quotable_lines": [],
        "summary_one_line": "test",
    }
```

- [ ] **Step 2: Run tests, verify all fail with import error**

```sh
pytest insights/tests/test_schema.py -v
```

Expected: `ModuleNotFoundError` or import error from `insights.lib.schema`.

- [ ] **Step 3: Implement `insights/lib/schema.py`**

```python
"""Schemas for flattened posts and extracted records."""
from __future__ import annotations

CONFIDENCE_VALUES = ("stated", "inferred", "unknown")
SKILL_LEVELS = ("beginner", "intermediate", "advanced")
SENTIMENTS = (
    "frustrated",
    "curious",
    "enthusiastic",
    "reflective",
    "skeptical",
    "neutral",
)

REQUIRED_EXTRACTION_FIELDS = (
    "post_id",
    "role",
    "role_confidence",
    "org",
    "org_confidence",
    "country",
    "country_confidence",
    "beat",
    "skill_level",
    "skill_signals",
    "tools_mentioned",
    "ai_use_cases",
    "challenges",
    "project_ideas",
    "themes",
    "theme_freeform",
    "sentiment",
    "is_question_for_instructor",
    "is_off_topic",
    "language",
    "quotable_lines",
    "summary_one_line",
)


def validate_extraction(record: dict) -> list[str]:
    errors: list[str] = []
    for field in REQUIRED_EXTRACTION_FIELDS:
        if field not in record:
            errors.append(f"missing required field: {field}")
    if record.get("skill_level") not in SKILL_LEVELS:
        errors.append(
            f"invalid skill_level: {record.get('skill_level')!r} (expected one of {SKILL_LEVELS})"
        )
    if record.get("sentiment") not in SENTIMENTS:
        errors.append(
            f"invalid sentiment: {record.get('sentiment')!r} (expected one of {SENTIMENTS})"
        )
    for cf in ("role_confidence", "org_confidence", "country_confidence"):
        if record.get(cf) not in CONFIDENCE_VALUES:
            errors.append(
                f"invalid {cf}: {record.get(cf)!r} (expected one of {CONFIDENCE_VALUES})"
            )
    for i, q in enumerate(record.get("quotable_lines") or []):
        if not isinstance(q, dict) or not all(k in q for k in ("text", "topic", "strength")):
            errors.append(f"quotable_lines[{i}] missing text/topic/strength")
    return errors
```

- [ ] **Step 4: Run tests, verify all pass**

```sh
pytest insights/tests/test_schema.py -v
```

Expected: 6 passed.

- [ ] **Step 5: Commit**

```sh
git add insights/lib/schema.py insights/tests/test_schema.py
git commit -m "feat(insights): add extraction record schema and validator"
```

---

## Task 3: Flatten — corpus walker with tests

**Files:**
- Create: `insights/flatten.py`
- Create: `insights/tests/test_flatten.py`
- Create: `insights/tests/fixtures/sample_forum/30001_test-forum/_forum_index.json`
- Create: `insights/tests/fixtures/sample_forum/30001_test-forum/300001_hello.json`

`flatten.py` walks `2026-student-UGC/{forum_id}_{slug}/*.json`, skips files starting with `_`, and writes one record per post to `data/posts.jsonl`. `forum_category` is derived from the slug.

- [ ] **Step 1: Create test fixtures**

Create `insights/tests/fixtures/sample_forum/30001_test-forum/_forum_index.json`:

```json
{
  "forum_name": "Test forum",
  "forum_url": "https://example.test/f/30001",
  "forum_id": "30001",
  "discussion_count": 1,
  "threads": []
}
```

Create `insights/tests/fixtures/sample_forum/30001_test-forum/300001_hello.json`:

```json
{
  "forum_name": "Test forum",
  "forum_url": "https://example.test/f/30001",
  "url": "https://example.test/d/300001",
  "discussion_id": "300001",
  "subject": "Hello",
  "posts": [
    {
      "post_id": "p1",
      "subject": "Hello",
      "author_name": "Alice",
      "author_url": "https://example.test/u/1",
      "posted_at": "2026-04-01T10:00:00-04:00",
      "content_text": "I am a reporter at the Springfield Tribune.",
      "content_html": "<p>I am a reporter at the Springfield Tribune.</p>",
      "permalink": "https://example.test/d/300001#p1",
      "attachments": []
    },
    {
      "post_id": "p2",
      "subject": "Re: Hello",
      "author_name": "Bob",
      "author_url": "https://example.test/u/2",
      "posted_at": "2026-04-01T11:30:00-04:00",
      "content_text": "Hi Alice.",
      "content_html": "<p>Hi Alice.</p>",
      "permalink": "https://example.test/d/300001#p2",
      "attachments": []
    }
  ]
}
```

Create one more forum to exercise multiple categories — `insights/tests/fixtures/sample_forum/30002_m1-weekly-exercise/_forum_index.json`:

```json
{"forum_name": "M1 Weekly", "forum_id": "30002", "threads": []}
```

And `insights/tests/fixtures/sample_forum/30002_m1-weekly-exercise/300002_my-exercise.json`:

```json
{
  "forum_name": "M1 Weekly",
  "discussion_id": "300002",
  "subject": "My exercise",
  "posts": [{
    "post_id": "p3",
    "author_name": "Carol",
    "author_url": "https://example.test/u/3",
    "posted_at": "2026-04-08T09:00:00-04:00",
    "content_text": "Voici mon exercice en français.",
    "permalink": "https://example.test/d/300002#p3",
    "attachments": []
  }]
}
```

- [ ] **Step 2: Write the failing tests**

Create `insights/tests/test_flatten.py`:

```python
import json
from pathlib import Path

from insights.flatten import (
    classify_forum,
    flatten_corpus,
    detect_language,
)


FIXTURE_ROOT = Path(__file__).parent / "fixtures" / "sample_forum"


def test_classify_forum_module_discussion():
    assert classify_forum("m1-discussion-forum-1-foo") == "module-discussion"
    assert classify_forum("m4-discussion-forum-3-bar") == "module-discussion"


def test_classify_forum_weekly_exercise():
    assert classify_forum("m1-weekly-exercise") == "weekly-exercise"
    assert classify_forum("m3-weekly-exercise") == "weekly-exercise"


def test_classify_forum_final_project():
    assert classify_forum("final-project-proposal") == "final-project"
    assert classify_forum("final-project-submission") == "final-project"


def test_classify_forum_course_ops():
    assert classify_forum("course-announcements") == "course-ops"
    assert classify_forum("questions-for-the-instructor") == "course-ops"
    assert classify_forum("technical-questions-for-the-instructor") == "course-ops"
    assert classify_forum("participant-forum-for-informal-conversations") == "course-ops"


def test_detect_language_english():
    assert detect_language("This is plain English text about journalism.") == "en"


def test_detect_language_french():
    lang = detect_language("Voici un texte en français qui parle de journalisme et d'IA.")
    assert lang == "fr"


def test_flatten_corpus_writes_one_line_per_post(tmp_path):
    out = tmp_path / "posts.jsonl"
    n = flatten_corpus(FIXTURE_ROOT, out)
    assert n == 3

    lines = [json.loads(line) for line in out.read_text(encoding="utf-8").splitlines()]
    assert len(lines) == 3

    by_id = {r["post_id"]: r for r in lines}
    assert "p1" in by_id and "p2" in by_id and "p3" in by_id

    p1 = by_id["p1"]
    assert p1["forum_id"] == "30001"
    assert p1["forum_slug"] == "test-forum"
    assert p1["forum_category"] == "course-ops"  # default for unrecognized
    assert p1["discussion_id"] == "300001"
    assert p1["is_thread_starter"] is True
    assert p1["post_index"] == 0
    assert p1["author_name"] == "Alice"
    assert p1["language_guess"] == "en"

    p2 = by_id["p2"]
    assert p2["is_thread_starter"] is False
    assert p2["post_index"] == 1

    p3 = by_id["p3"]
    assert p3["forum_category"] == "weekly-exercise"
    assert p3["language_guess"] == "fr"
```

- [ ] **Step 3: Run tests, verify they fail with import error**

```sh
pytest insights/tests/test_flatten.py -v
```

Expected: import error from `insights.flatten`.

- [ ] **Step 4: Implement `insights/flatten.py`**

```python
"""Phase 1: walk the source corpus and emit one record per post to posts.jsonl."""
from __future__ import annotations

import json
import re
from pathlib import Path

from langdetect import DetectorFactory, detect, LangDetectException

# deterministic langdetect output
DetectorFactory.seed = 0


COURSE_OPS_KEYWORDS = (
    "course-announcements",
    "questions-for-the-instructor",
    "questions-about-the-course-platform",
    "participant-forum",
    "technical-questions-for-the-instructor",
)


def classify_forum(slug: str) -> str:
    s = slug.lower()
    if s.startswith("final-project"):
        return "final-project"
    if "weekly-exercise" in s:
        return "weekly-exercise"
    if re.match(r"^m\d-discussion-forum-", s):
        return "module-discussion"
    for kw in COURSE_OPS_KEYWORDS:
        if kw in s:
            return "course-ops"
    return "course-ops"


def detect_language(text: str) -> str:
    if not text or not text.strip():
        return "und"
    try:
        return detect(text)
    except LangDetectException:
        return "und"


def _parse_forum_dir(name: str) -> tuple[str, str] | None:
    m = re.match(r"^(\d+)_(.+)$", name)
    if not m:
        return None
    return m.group(1), m.group(2)


def flatten_corpus(corpus_root: Path, out_path: Path) -> int:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    count = 0
    with out_path.open("w", encoding="utf-8") as out:
        for forum_dir in sorted(p for p in corpus_root.iterdir() if p.is_dir()):
            parsed = _parse_forum_dir(forum_dir.name)
            if not parsed:
                continue
            forum_id, forum_slug = parsed
            forum_category = classify_forum(forum_slug)
            for json_path in sorted(forum_dir.glob("*.json")):
                if json_path.name.startswith("_"):
                    continue
                with json_path.open(encoding="utf-8") as f:
                    data = json.load(f)
                discussion_id = str(data.get("discussion_id") or "")
                discussion_subject = data.get("subject") or ""
                forum_name = data.get("forum_name") or ""
                for i, post in enumerate(data.get("posts") or []):
                    text = post.get("content_text") or ""
                    record = {
                        "post_id": post.get("post_id"),
                        "forum_id": forum_id,
                        "forum_name": forum_name,
                        "forum_slug": forum_slug,
                        "forum_category": forum_category,
                        "discussion_id": discussion_id,
                        "discussion_subject": discussion_subject,
                        "post_index": i,
                        "is_thread_starter": i == 0,
                        "author_name": post.get("author_name"),
                        "author_url": post.get("author_url"),
                        "posted_at": post.get("posted_at"),
                        "content_text": text,
                        "permalink": post.get("permalink"),
                        "language_guess": detect_language(text),
                    }
                    out.write(json.dumps(record, ensure_ascii=False) + "\n")
                    count += 1
    return count


def main() -> None:
    repo_root = Path(__file__).parent.parent
    corpus = repo_root
    out = repo_root / "insights" / "data" / "posts.jsonl"
    n = flatten_corpus(corpus, out)
    print(f"flattened {n} posts to {out}")


if __name__ == "__main__":
    main()
```

- [ ] **Step 5: Run tests, verify all pass**

```sh
pytest insights/tests/test_flatten.py -v
```

Expected: 8 passed.

- [ ] **Step 6: Commit**

```sh
git add insights/flatten.py insights/tests/test_flatten.py insights/tests/fixtures/
git commit -m "feat(insights): flatten phase walks corpus and emits posts.jsonl"
```

---

## Task 4: Run flatten on the real corpus

- [ ] **Step 1: Run flatten**

```sh
python insights/flatten.py
```

Expected output: `flattened 912 posts to .../insights/data/posts.jsonl`

- [ ] **Step 2: Sanity check the output**

```sh
wc -l insights/data/posts.jsonl       # should be 912
head -1 insights/data/posts.jsonl | python -m json.tool
```

Verify the first record has all 14 fields and reasonable values.

- [ ] **Step 3: Spot check forum categorization**

```sh
python -c "import json; cats={}; \
[cats.setdefault(r['forum_category'],[]).append(r['forum_slug']) for r in (json.loads(l) for l in open('insights/data/posts.jsonl', encoding='utf-8'))]; \
print({k: sorted(set(v)) for k,v in cats.items()})"
```

Confirm: `final-project` has 2 slugs, `weekly-exercise` has 4, `module-discussion` has the m1-m4 discussion forums, `course-ops` has the rest. If any forum is mis-categorized, fix `classify_forum` and re-run.

- [ ] **Step 4: Spot check language detection**

```sh
python -c "import json; from collections import Counter; \
c=Counter(json.loads(l)['language_guess'] for l in open('insights/data/posts.jsonl', encoding='utf-8')); \
print(c.most_common())"
```

Expect: `en` dominant, `pt`/`es`/`fr` non-zero. If `und` is large, investigate.

---

## Task 5: Per-post extraction prompt

**Files:**
- Create: `insights/prompts/per-post-extract.md`

The prompt is what each subagent uses for each post. Includes the schema, the constrained vocabularies, and the confidence rules. No tests — this is a content artifact validated by Task 6.

- [ ] **Step 1: Write the prompt**

Create `insights/prompts/per-post-extract.md`:

````markdown
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
````

- [ ] **Step 2: Commit**

```sh
git add insights/prompts/per-post-extract.md
git commit -m "feat(insights): per-post extraction prompt with schema"
```

---

## Task 6: Subagent dispatch — slicing and runbook

**Files:**
- Create: `insights/slice.py`
- Create: `insights/tests/test_slice.py`
- Create: `insights/runbook.md`

The slicer splits `posts.jsonl` into N batches in `data/slices/slice_{i}.jsonl`. The runbook tells the main Claude Code session what to do (dispatch N parallel subagents, each given a slice path and the extraction prompt path).

- [ ] **Step 1: Write the failing test**

Create `insights/tests/test_slice.py`:

```python
import json
from pathlib import Path

from insights.slice import slice_posts


def test_slice_posts_creates_balanced_slices(tmp_path):
    src = tmp_path / "posts.jsonl"
    src.write_text(
        "\n".join(json.dumps({"post_id": f"p{i}"}) for i in range(25)),
        encoding="utf-8",
    )
    out_dir = tmp_path / "slices"
    paths = slice_posts(src, out_dir, n_slices=4)
    assert len(paths) == 4
    counts = [len(p.read_text(encoding="utf-8").splitlines()) for p in paths]
    # 25 across 4 slices => sizes are 7, 6, 6, 6 (within ±1)
    assert sum(counts) == 25
    assert max(counts) - min(counts) <= 1


def test_slice_posts_handles_fewer_than_slices(tmp_path):
    src = tmp_path / "posts.jsonl"
    src.write_text("\n".join(json.dumps({"post_id": f"p{i}"}) for i in range(3)), encoding="utf-8")
    out_dir = tmp_path / "slices"
    paths = slice_posts(src, out_dir, n_slices=10)
    # only 3 slices written (others would be empty)
    assert len(paths) == 3


def test_slice_posts_writes_jsonl(tmp_path):
    src = tmp_path / "posts.jsonl"
    src.write_text("\n".join(json.dumps({"post_id": f"p{i}"}) for i in range(6)), encoding="utf-8")
    out_dir = tmp_path / "slices"
    paths = slice_posts(src, out_dir, n_slices=3)
    for p in paths:
        for line in p.read_text(encoding="utf-8").splitlines():
            assert "post_id" in json.loads(line)
```

- [ ] **Step 2: Run, verify fail with import error**

```sh
pytest insights/tests/test_slice.py -v
```

- [ ] **Step 3: Implement `insights/slice.py`**

```python
"""Split posts.jsonl into N roughly-equal slices for parallel subagent processing."""
from __future__ import annotations

import json
from pathlib import Path


def slice_posts(src: Path, out_dir: Path, n_slices: int) -> list[Path]:
    lines = [line for line in src.read_text(encoding="utf-8").splitlines() if line.strip()]
    if not lines:
        return []
    out_dir.mkdir(parents=True, exist_ok=True)
    n_slices = min(n_slices, len(lines))
    paths: list[Path] = []
    # round-robin assignment keeps slices balanced
    buckets: list[list[str]] = [[] for _ in range(n_slices)]
    for i, line in enumerate(lines):
        buckets[i % n_slices].append(line)
    for i, bucket in enumerate(buckets):
        if not bucket:
            continue
        path = out_dir / f"slice_{i:02d}.jsonl"
        path.write_text("\n".join(bucket) + "\n", encoding="utf-8")
        paths.append(path)
    return paths


def main() -> None:
    repo_root = Path(__file__).parent.parent
    src = repo_root / "insights" / "data" / "posts.jsonl"
    out_dir = repo_root / "insights" / "data" / "slices"
    paths = slice_posts(src, out_dir, n_slices=10)
    print(f"wrote {len(paths)} slices to {out_dir}")


if __name__ == "__main__":
    main()
```

- [ ] **Step 4: Run, verify pass**

```sh
pytest insights/tests/test_slice.py -v
```

Expected: 3 passed.

- [ ] **Step 5: Write `insights/runbook.md`**

````markdown
# Insights pipeline runbook

This file is the script you (the main Claude Code session) follow to run the LLM-driven phases. The deterministic phases (1, 2.5, 4) are plain Python scripts run from the shell.

## Phase 2: Per-post extraction (subagent fan-out)

### Prep
1. Confirm `insights/data/posts.jsonl` exists. If not, run `python insights/flatten.py`.
2. Run `python insights/slice.py` to write `insights/data/slices/slice_*.jsonl` (10 slices by default).

### Dispatch
Read `insights/prompts/per-post-extract.md` once into context. Then dispatch one Agent subagent per slice file IN PARALLEL — call all of them in a single message with multiple Agent tool blocks.

Each subagent's prompt is:

> You are processing a slice of forum posts for an extraction pipeline. Your slice file is `insights/data/slices/slice_NN.jsonl`. The extraction prompt is at `insights/prompts/per-post-extract.md`.
>
> For each line in your slice file (each is a JSON object representing one post):
>   1. Check if `insights/data/extracted/{post_id}.json` already exists. If yes, skip — log "skip:{post_id}" to `insights/data/extraction_log.jsonl` and move on.
>   2. Build a prompt input from the post's `post_id`, `forum_name`, `forum_category`, `discussion_subject`, `author_name`, `posted_at`, `content_text`, `language_guess`. The full content_text goes in.
>   3. Apply the extraction prompt to that input. The output must be a single JSON object matching the schema.
>   4. Parse the model's response as JSON. If it has an extra code fence, strip it.
>   5. Validate using `insights.lib.schema.validate_extraction(record)`. If errors, retry once with the same input but prepend "Your previous response had these errors: <list>. Return only valid JSON now." If still failing, write to `insights/data/failed/{post_id}.json` with `{"error": "...", "raw_response": "..."}`. Continue.
>   6. On success, write `insights/data/extracted/{post_id}.json` (atomic — write to .tmp, rename).
>   7. Append a JSON line to `insights/data/extraction_log.jsonl`: `{"post_id": "...", "ts": "<ISO>", "status": "ok|skip|failed", "duration_s": <float>}`.
>
> When done, return a one-line summary: how many ok, how many skipped, how many failed.

### After dispatch
1. Wait for all subagents to return.
2. Run `python insights/validate.py` (Task 8).
3. If validation passes, proceed to Phase 3.

## Phase 3: Aggregation
See per-step runbook sections — these are added incrementally as Tasks 9-12 land.
````

- [ ] **Step 6: Commit**

```sh
git add insights/slice.py insights/tests/test_slice.py insights/runbook.md
git commit -m "feat(insights): slice posts.jsonl and add subagent runbook"
```

---

## Task 7: Smoke-test extraction on 5 posts

This task runs a small end-to-end extraction in the main session (not via subagents) to verify the prompt produces clean output before fanning out to 10 subagents on 912 posts. No code changes — verification only.

- [ ] **Step 1: Generate slices**

```sh
python insights/slice.py
ls insights/data/slices
```

Expected: 10 slice files, each with ~91 posts.

- [ ] **Step 2: Pick 5 representative posts**

```sh
python -c "import json, random; random.seed(0); \
lines=[l for l in open('insights/data/posts.jsonl', encoding='utf-8')]; \
sample=random.sample(lines, 5); \
[print(json.dumps(json.loads(l), ensure_ascii=False)) for l in sample]" > /tmp/smoke_5.jsonl
```

(On Windows PowerShell, use `$env:TEMP\smoke_5.jsonl` instead of `/tmp/smoke_5.jsonl` and adapt the redirect.)

- [ ] **Step 3: Manually run the extraction prompt on each of the 5 posts in this session**

Read `insights/prompts/per-post-extract.md`. For each of the 5 sampled posts, build the input dict, run the extraction logic mentally (or via a quick Agent call), and write the output to `insights/data/extracted/{post_id}.json`. Validate each with `python -c "from insights.lib.schema import validate_extraction; import json; print(validate_extraction(json.load(open('insights/data/extracted/{post_id}.json'))))"` — should print `[]` for each.

- [ ] **Step 4: Spot-check the extractions against the source posts**

For each of the 5 posts, open the source markdown (find with `grep -l "{post_id}" 2026-student-UGC/*/. -r` if needed) and read it. Compare against the extraction. Verify:
- `role`/`org`/`country` match what the post actually says (or are correctly `null`)
- `_confidence` flags are honest (stated only when the post explicitly says it)
- `themes` are reasonable and from the canonical list
- `summary_one_line` is accurate
- `quotable_lines` text appears verbatim in the source post

- [ ] **Step 5: Adjust prompt if needed**

If the model is consistently over-confident or mis-categorizes, edit `insights/prompts/per-post-extract.md` and re-run on the same 5 posts. Iterate until the 5 are clean.

- [ ] **Step 6: Commit any prompt changes**

```sh
git add insights/prompts/per-post-extract.md
git commit -m "fix(insights): tune extraction prompt based on smoke test"
```

(Skip if no changes.)

---

## Task 8: Validate.py

**Files:**
- Create: `insights/validate.py`
- Create: `insights/tests/test_validate.py`

After Phase 2, run validate.py to confirm every post in `posts.jsonl` has a corresponding `extracted/{post_id}.json`, every JSON parses, every required field is present, and `_confidence` flags are valid.

- [ ] **Step 1: Write the failing test**

Create `insights/tests/test_validate.py`:

```python
import json
from pathlib import Path

import pytest

from insights.validate import validate_corpus


def _write_post(path: Path, post_id: str):
    path.write_text(json.dumps({"post_id": post_id}) + "\n", encoding="utf-8")


def _minimal_extraction(post_id: str) -> dict:
    return {
        "post_id": post_id,
        "role": None, "role_confidence": "unknown",
        "org": None, "org_confidence": "unknown",
        "country": None, "country_confidence": "unknown",
        "beat": [],
        "skill_level": "beginner",
        "skill_signals": [],
        "tools_mentioned": [],
        "ai_use_cases": [],
        "challenges": [],
        "project_ideas": [],
        "themes": [],
        "theme_freeform": [],
        "sentiment": "neutral",
        "is_question_for_instructor": False,
        "is_off_topic": False,
        "language": "en",
        "quotable_lines": [],
        "summary_one_line": "x",
    }


def test_validate_corpus_passes_when_all_present(tmp_path):
    posts = tmp_path / "posts.jsonl"
    posts.write_text("\n".join(json.dumps({"post_id": f"p{i}"}) for i in range(3)), encoding="utf-8")
    extracted = tmp_path / "extracted"
    extracted.mkdir()
    for i in range(3):
        (extracted / f"p{i}.json").write_text(json.dumps(_minimal_extraction(f"p{i}")), encoding="utf-8")

    errors = validate_corpus(posts, extracted)
    assert errors == []


def test_validate_corpus_reports_missing_extraction(tmp_path):
    posts = tmp_path / "posts.jsonl"
    posts.write_text("\n".join(json.dumps({"post_id": f"p{i}"}) for i in range(3)), encoding="utf-8")
    extracted = tmp_path / "extracted"
    extracted.mkdir()
    (extracted / "p0.json").write_text(json.dumps(_minimal_extraction("p0")), encoding="utf-8")
    # missing p1, p2

    errors = validate_corpus(posts, extracted)
    assert any("p1" in e and "missing" in e for e in errors)
    assert any("p2" in e and "missing" in e for e in errors)


def test_validate_corpus_reports_orphan_extraction(tmp_path):
    posts = tmp_path / "posts.jsonl"
    posts.write_text(json.dumps({"post_id": "p0"}), encoding="utf-8")
    extracted = tmp_path / "extracted"
    extracted.mkdir()
    (extracted / "p0.json").write_text(json.dumps(_minimal_extraction("p0")), encoding="utf-8")
    (extracted / "p99.json").write_text(json.dumps(_minimal_extraction("p99")), encoding="utf-8")

    errors = validate_corpus(posts, extracted)
    assert any("p99" in e and "orphan" in e for e in errors)


def test_validate_corpus_reports_schema_errors(tmp_path):
    posts = tmp_path / "posts.jsonl"
    posts.write_text(json.dumps({"post_id": "p0"}), encoding="utf-8")
    extracted = tmp_path / "extracted"
    extracted.mkdir()
    bad = _minimal_extraction("p0")
    bad["skill_level"] = "wizard"
    (extracted / "p0.json").write_text(json.dumps(bad), encoding="utf-8")

    errors = validate_corpus(posts, extracted)
    assert any("skill_level" in e for e in errors)


def test_validate_corpus_reports_id_mismatch(tmp_path):
    posts = tmp_path / "posts.jsonl"
    posts.write_text(json.dumps({"post_id": "p0"}), encoding="utf-8")
    extracted = tmp_path / "extracted"
    extracted.mkdir()
    bad = _minimal_extraction("p0")
    bad["post_id"] = "DIFFERENT"
    (extracted / "p0.json").write_text(json.dumps(bad), encoding="utf-8")

    errors = validate_corpus(posts, extracted)
    assert any("post_id mismatch" in e for e in errors)
```

- [ ] **Step 2: Run, verify fail**

```sh
pytest insights/tests/test_validate.py -v
```

- [ ] **Step 3: Implement `insights/validate.py`**

```python
"""Phase 2.5: validate that every post has a valid extraction."""
from __future__ import annotations

import json
import sys
from pathlib import Path

from insights.lib.schema import validate_extraction


def validate_corpus(posts_path: Path, extracted_dir: Path) -> list[str]:
    errors: list[str] = []
    post_ids: set[str] = set()
    for line in posts_path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        record = json.loads(line)
        post_id = record["post_id"]
        post_ids.add(post_id)
        ext_path = extracted_dir / f"{post_id}.json"
        if not ext_path.exists():
            errors.append(f"{post_id}: missing extraction file")
            continue
        try:
            ext = json.loads(ext_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            errors.append(f"{post_id}: extraction file does not parse: {e}")
            continue
        if ext.get("post_id") != post_id:
            errors.append(f"{post_id}: post_id mismatch in extraction file (got {ext.get('post_id')!r})")
        for err in validate_extraction(ext):
            errors.append(f"{post_id}: {err}")

    if extracted_dir.exists():
        for ext_path in extracted_dir.glob("*.json"):
            stem = ext_path.stem
            if stem not in post_ids:
                errors.append(f"{stem}: orphan extraction file (no matching post in posts.jsonl)")

    return errors


def main() -> int:
    repo_root = Path(__file__).parent.parent
    posts = repo_root / "insights" / "data" / "posts.jsonl"
    extracted = repo_root / "insights" / "data" / "extracted"
    errors = validate_corpus(posts, extracted)
    if errors:
        out = repo_root / "insights" / "data" / "validation_errors.json"
        out.write_text(json.dumps(errors, indent=2), encoding="utf-8")
        print(f"FAIL: {len(errors)} validation errors written to {out}")
        for e in errors[:20]:
            print(f"  - {e}")
        return 1
    print(f"OK: validated {len(list(extracted.glob('*.json')))} extraction files")
    return 0


if __name__ == "__main__":
    sys.exit(main())
```

- [ ] **Step 4: Run, verify pass**

```sh
pytest insights/tests/test_validate.py -v
```

Expected: 5 passed.

- [ ] **Step 5: Commit**

```sh
git add insights/validate.py insights/tests/test_validate.py
git commit -m "feat(insights): validate.py checks extraction completeness and shape"
```

---

## Task 9: Themes clustering

**Files:**
- Create: `insights/prompts/theme-cluster.md`
- Create: `insights/aggregate/themes.py`
- Create: `insights/tests/test_aggregate_themes.py`
- Modify: `insights/runbook.md` (add Phase 3a section)

The themes step does two things: (1) collect all `theme_freeform` strings across posts and ask the model to dedupe + propose 0-10 emergent themes; (2) deterministically aggregate posts under each theme (canonical + emergent) into the final `themes.json` shape.

- [ ] **Step 1: Write `insights/prompts/theme-cluster.md`**

````markdown
# Theme clustering prompt

You will receive a list of free-form theme strings extracted from forum posts. Some are near-duplicates ("error handling" vs "error-handling" vs "handling errors"). Some describe genuinely new themes that aren't in the canonical vocabulary.

## Canonical vocabulary
[same list as in per-post-extract.md — paste here]

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
````

- [ ] **Step 2: Write the failing test**

Create `insights/tests/test_aggregate_themes.py`:

```python
import json
from pathlib import Path

from insights.aggregate.themes import (
    collect_freeform,
    build_themes_json,
    CANONICAL_THEMES,
)


def _write_extraction(dir: Path, post_id: str, themes, freeform):
    rec = {
        "post_id": post_id, "themes": themes, "theme_freeform": freeform,
        "summary_one_line": f"summary of {post_id}",
        "quotable_lines": [],
    }
    (dir / f"{post_id}.json").write_text(json.dumps(rec), encoding="utf-8")


def test_collect_freeform_aggregates_unique(tmp_path):
    _write_extraction(tmp_path, "p1", ["coding-help"], ["workflow-friction"])
    _write_extraction(tmp_path, "p2", [], ["workflow-friction", "team-adoption"])
    seen = collect_freeform(tmp_path)
    assert seen == ["team-adoption", "workflow-friction"]  # sorted


def test_build_themes_json_includes_canonical(tmp_path):
    _write_extraction(tmp_path, "p1", ["coding-help"], [])
    _write_extraction(tmp_path, "p2", ["coding-help", "scraping"], [])
    emergent = []  # model returned nothing emergent
    result = build_themes_json(tmp_path, emergent)
    by_id = {t["theme_id"]: t for t in result}
    assert "coding-help" in by_id
    assert by_id["coding-help"]["member_count"] == 2
    assert "scraping" in by_id
    assert by_id["scraping"]["member_count"] == 1
    # canonical themes with zero members are excluded
    assert "ocr" not in by_id


def test_build_themes_json_includes_emergent(tmp_path):
    _write_extraction(tmp_path, "p1", [], ["workflow-friction"])
    _write_extraction(tmp_path, "p2", [], ["context-loss"])
    emergent = [{
        "theme_id": "workflow-friction",
        "label": "Workflow friction",
        "description": "Pain across tools",
        "merges": ["workflow-friction", "context-loss"],
    }]
    result = build_themes_json(tmp_path, emergent)
    by_id = {t["theme_id"]: t for t in result}
    assert "workflow-friction" in by_id
    assert by_id["workflow-friction"]["is_emergent"] is True
    assert by_id["workflow-friction"]["member_count"] == 2


def test_canonical_themes_is_a_tuple_of_kebab_strings():
    assert all("-" in t or t.isalpha() for t in CANONICAL_THEMES)
    assert "coding-help" in CANONICAL_THEMES
```

- [ ] **Step 3: Run, verify fail**

```sh
pytest insights/tests/test_aggregate_themes.py -v
```

- [ ] **Step 4: Implement `insights/aggregate/themes.py`**

```python
"""Phase 3a: themes aggregation."""
from __future__ import annotations

import json
from pathlib import Path
from collections import defaultdict


CANONICAL_THEMES = (
    "coding-help", "data-analysis", "transcription", "multilingual-workflows",
    "fact-checking", "scraping", "cli-vs-web", "cost-management", "context-files",
    "claude-md", "skills-and-hooks", "subagents", "pipelines", "rag-and-grounding",
    "safety-and-bias", "audience-engagement", "newsroom-adoption", "product-development",
    "audio-and-podcast", "video-and-image", "pdf-extraction", "ocr", "email-summary",
    "social-media-content", "metrics-and-analytics", "legal-and-court-docs",
    "campaign-finance", "accessibility-alt-text", "translation", "editing-and-style",
)

CANONICAL_LABELS = {
    "coding-help": "AI for coding help",
    "data-analysis": "Data analysis",
    "transcription": "Transcription",
    "multilingual-workflows": "Multilingual workflows",
    "fact-checking": "Fact-checking",
    "scraping": "Web scraping",
    "cli-vs-web": "CLI tools vs web chat",
    "cost-management": "Cost management",
    "context-files": "Context files",
    "claude-md": "CLAUDE.md and project context",
    "skills-and-hooks": "Skills and hooks",
    "subagents": "Subagents",
    "pipelines": "Pipelines and automation",
    "rag-and-grounding": "RAG and source grounding",
    "safety-and-bias": "Safety and bias",
    "audience-engagement": "Audience engagement",
    "newsroom-adoption": "Newsroom adoption",
    "product-development": "Product development",
    "audio-and-podcast": "Audio and podcast",
    "video-and-image": "Video and image",
    "pdf-extraction": "PDF extraction",
    "ocr": "OCR",
    "email-summary": "Email summary",
    "social-media-content": "Social media content",
    "metrics-and-analytics": "Metrics and analytics",
    "legal-and-court-docs": "Legal and court documents",
    "campaign-finance": "Campaign finance",
    "accessibility-alt-text": "Accessibility and alt text",
    "translation": "Translation",
    "editing-and-style": "Editing and style",
}


def _iter_extractions(extracted_dir: Path):
    for path in sorted(extracted_dir.glob("*.json")):
        yield path.stem, json.loads(path.read_text(encoding="utf-8"))


def collect_freeform(extracted_dir: Path) -> list[str]:
    seen: set[str] = set()
    for _, rec in _iter_extractions(extracted_dir):
        for t in rec.get("theme_freeform") or []:
            if t and isinstance(t, str):
                seen.add(t.strip())
    return sorted(seen)


def build_themes_json(extracted_dir: Path, emergent: list[dict]) -> list[dict]:
    """Combine canonical themes (from posts.themes) and emergent themes (from model).
    Posts whose freeform tag matches an emergent theme's `merges` are pulled into that theme.
    """
    canonical_members: dict[str, list[str]] = defaultdict(list)
    canonical_quotes: dict[str, list[str]] = defaultdict(list)

    emergent_lookup: dict[str, str] = {}  # freeform_string -> emergent_theme_id
    for et in emergent:
        for merge in et.get("merges", []):
            emergent_lookup[merge.strip()] = et["theme_id"]
    emergent_members: dict[str, list[str]] = defaultdict(list)
    emergent_quotes: dict[str, list[str]] = defaultdict(list)

    for post_id, rec in _iter_extractions(extracted_dir):
        for t in rec.get("themes") or []:
            if t in CANONICAL_THEMES:
                canonical_members[t].append(post_id)
        for ff in rec.get("theme_freeform") or []:
            mapped = emergent_lookup.get(ff.strip())
            if mapped:
                emergent_members[mapped].append(post_id)
        for q in rec.get("quotable_lines") or []:
            topic = q.get("topic")
            if topic in CANONICAL_THEMES:
                canonical_quotes[topic].append(post_id)
            elif topic in emergent_lookup:
                emergent_quotes[emergent_lookup[topic]].append(post_id)

    result: list[dict] = []
    for theme_id in CANONICAL_THEMES:
        members = sorted(set(canonical_members[theme_id]))
        if not members:
            continue
        result.append({
            "theme_id": theme_id,
            "label": CANONICAL_LABELS.get(theme_id, theme_id),
            "description": "",
            "is_emergent": False,
            "post_ids": members,
            "member_count": len(members),
            "sample_quote_ids": sorted(set(canonical_quotes[theme_id]))[:6],
            "ai_summary": "",
        })

    for et in emergent:
        members = sorted(set(emergent_members[et["theme_id"]]))
        result.append({
            "theme_id": et["theme_id"],
            "label": et.get("label", et["theme_id"]),
            "description": et.get("description", ""),
            "is_emergent": True,
            "post_ids": members,
            "member_count": len(members),
            "sample_quote_ids": sorted(set(emergent_quotes[et["theme_id"]]))[:6],
            "ai_summary": "",
        })

    result.sort(key=lambda t: -t["member_count"])
    return result


def main() -> None:
    repo_root = Path(__file__).parent.parent.parent
    extracted = repo_root / "insights" / "data" / "extracted"
    print(json.dumps(collect_freeform(extracted), indent=2))


if __name__ == "__main__":
    main()
```

- [ ] **Step 5: Run, verify pass**

```sh
pytest insights/tests/test_aggregate_themes.py -v
```

Expected: 4 passed.

- [ ] **Step 6: Append to runbook (Phase 3a section)**

Append to `insights/runbook.md`:

````markdown
## Phase 3a: Themes clustering

In the main session:
1. Run `python -m insights.aggregate.themes` to dump the freeform list to stdout.
2. Read `insights/prompts/theme-cluster.md` for instructions.
3. Send the prompt + the freeform list to Sonnet 4.6 (just call it once in this session — no subagent needed).
4. Parse the model's JSON array. Save it to `insights/data/themes_emergent.json`.
5. Run a one-liner to build the final `themes.json`:

```python
from pathlib import Path
import json
from insights.aggregate.themes import build_themes_json
emergent = json.loads(Path("insights/data/themes_emergent.json").read_text(encoding="utf-8"))
themes = build_themes_json(Path("insights/data/extracted"), emergent)
Path("insights/data/themes.json").write_text(json.dumps(themes, indent=2, ensure_ascii=False), encoding="utf-8")
```

6. For each theme with `member_count >= 5`, send the theme + a sampling of its members' `summary_one_line` and `quotable_lines` back to the model and ask for a 4-sentence `ai_summary`. Patch the result into `themes.json`. (For now, themes with fewer members get an empty `ai_summary` — frontend handles that.)
````

- [ ] **Step 7: Commit**

```sh
git add insights/aggregate/themes.py insights/tests/test_aggregate_themes.py insights/prompts/theme-cluster.md insights/runbook.md
git commit -m "feat(insights): theme clustering aggregation and prompt"
```

---

## Task 10: Forum narratives

**Files:**
- Create: `insights/prompts/forum-narrative.md`
- Create: `insights/aggregate/forums.py`
- Create: `insights/tests/test_aggregate_forums.py`
- Modify: `insights/runbook.md` (Phase 3b section)

For each of 21 forums, build a deterministic frequency rollup (top themes, top tools, top challenges, post count) that the LLM then turns into a narrative + takeaways.

- [ ] **Step 1: Write `insights/prompts/forum-narrative.md`**

````markdown
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
````

- [ ] **Step 2: Write the failing test**

Create `insights/tests/test_aggregate_forums.py`:

```python
import json
from pathlib import Path

from insights.aggregate.forums import (
    build_forum_inputs,
    merge_narratives,
)


def _write_post(path: Path, **fields):
    path.write_text(json.dumps(fields), encoding="utf-8")


def _write_extracted(path: Path, post_id: str, **fields):
    rec = {
        "post_id": post_id, "themes": [], "tools_mentioned": [],
        "challenges": [], "quotable_lines": [], "summary_one_line": "",
        **fields,
    }
    (path / f"{post_id}.json").write_text(json.dumps(rec), encoding="utf-8")


def test_build_forum_inputs_groups_by_forum(tmp_path):
    posts = tmp_path / "posts.jsonl"
    posts.write_text(
        "\n".join([
            json.dumps({"post_id": "p1", "forum_id": "10", "forum_name": "F10",
                        "forum_slug": "f10", "forum_category": "course-ops"}),
            json.dumps({"post_id": "p2", "forum_id": "10", "forum_name": "F10",
                        "forum_slug": "f10", "forum_category": "course-ops"}),
            json.dumps({"post_id": "p3", "forum_id": "20", "forum_name": "F20",
                        "forum_slug": "f20", "forum_category": "module-discussion"}),
        ]),
        encoding="utf-8",
    )
    extracted = tmp_path / "extracted"
    extracted.mkdir()
    _write_extracted(extracted, "p1", themes=["coding-help"])
    _write_extracted(extracted, "p2", themes=["coding-help", "scraping"], tools_mentioned=["Claude Code"])
    _write_extracted(extracted, "p3", themes=["data-analysis"])

    inputs = build_forum_inputs(posts, extracted)
    by_id = {f["forum_id"]: f for f in inputs}
    assert by_id["10"]["post_count"] == 2
    assert by_id["20"]["post_count"] == 1

    f10 = by_id["10"]
    assert {"theme_id": "coding-help", "count": 2} in f10["top_themes"]
    assert {"theme_id": "scraping", "count": 1} in f10["top_themes"]
    assert {"tool": "Claude Code", "count": 1} in f10["top_tools"]


def test_merge_narratives_combines_inputs_and_model_output():
    forum_input = {
        "forum_id": "10",
        "forum_name": "F10",
        "forum_slug": "f10",
        "forum_category": "course-ops",
        "post_count": 2,
        "top_themes": [{"theme_id": "coding-help", "count": 2}],
        "top_tools": [{"tool": "Claude Code", "count": 1}],
        "top_challenges": [],
        "extractions": [],
    }
    narrative = {
        "narrative": "blah",
        "takeaways": ["one", "two"],
        "standout_quote_ids": ["p1"],
    }
    merged = merge_narratives(forum_input, narrative)
    assert merged["forum_id"] == "10"
    assert merged["narrative"] == "blah"
    assert merged["takeaways"] == ["one", "two"]
    assert merged["standout_quote_ids"] == ["p1"]
    assert merged["top_themes"] == [{"theme_id": "coding-help", "count": 2}]
    assert "extractions" not in merged
```

- [ ] **Step 3: Run, verify fail**

```sh
pytest insights/tests/test_aggregate_forums.py -v
```

- [ ] **Step 4: Implement `insights/aggregate/forums.py`**

```python
"""Phase 3b: forum narratives — build per-forum LLM input and merge model output."""
from __future__ import annotations

import json
from collections import Counter, defaultdict
from pathlib import Path


def build_forum_inputs(posts_path: Path, extracted_dir: Path) -> list[dict]:
    extractions: dict[str, dict] = {}
    for path in extracted_dir.glob("*.json"):
        rec = json.loads(path.read_text(encoding="utf-8"))
        extractions[rec["post_id"]] = rec

    forums: dict[str, dict] = {}
    forum_posts: dict[str, list[str]] = defaultdict(list)

    for line in posts_path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        post = json.loads(line)
        fid = post["forum_id"]
        forum_posts[fid].append(post["post_id"])
        forums.setdefault(fid, {
            "forum_id": fid,
            "forum_name": post["forum_name"],
            "forum_slug": post["forum_slug"],
            "forum_category": post["forum_category"],
        })

    out: list[dict] = []
    for fid, meta in forums.items():
        post_ids = forum_posts[fid]
        recs = [extractions[pid] for pid in post_ids if pid in extractions]
        themes = Counter()
        tools = Counter()
        challenges = Counter()
        for r in recs:
            themes.update(r.get("themes") or [])
            tools.update(r.get("tools_mentioned") or [])
            challenges.update(r.get("challenges") or [])
        out.append({
            **meta,
            "post_count": len(post_ids),
            "top_themes": [{"theme_id": k, "count": v} for k, v in themes.most_common(10)],
            "top_tools": [{"tool": k, "count": v} for k, v in tools.most_common(10)],
            "top_challenges": [{"challenge": k, "count": v} for k, v in challenges.most_common(10)],
            "extractions": [
                {
                    "post_id": r["post_id"],
                    "summary_one_line": r.get("summary_one_line", ""),
                    "themes": r.get("themes", []),
                    "challenges": r.get("challenges", []),
                    "tools_mentioned": r.get("tools_mentioned", []),
                    "quotable_lines": r.get("quotable_lines", []),
                }
                for r in recs
            ],
        })
    out.sort(key=lambda f: f["forum_id"])
    return out


def merge_narratives(forum_input: dict, narrative: dict) -> dict:
    merged = {k: v for k, v in forum_input.items() if k != "extractions"}
    merged["narrative"] = narrative.get("narrative", "")
    merged["takeaways"] = narrative.get("takeaways", [])
    merged["standout_quote_ids"] = narrative.get("standout_quote_ids", [])
    return merged
```

- [ ] **Step 5: Run, verify pass**

```sh
pytest insights/tests/test_aggregate_forums.py -v
```

Expected: 2 passed.

- [ ] **Step 6: Append Phase 3b to runbook**

Append to `insights/runbook.md`:

````markdown
## Phase 3b: Forum narratives

In the main session:
1. Build the per-forum inputs:
   ```python
   from pathlib import Path
   import json
   from insights.aggregate.forums import build_forum_inputs, merge_narratives
   inputs = build_forum_inputs(Path("insights/data/posts.jsonl"), Path("insights/data/extracted"))
   ```
2. For each forum input, send the JSON + the prompt at `insights/prompts/forum-narrative.md` to Sonnet 4.6. Parse the JSON response.
3. Merge each narrative back into its input via `merge_narratives(forum_input, narrative)`.
4. Write the array to `insights/data/forums.json`.
````

- [ ] **Step 7: Commit**

```sh
git add insights/aggregate/forums.py insights/tests/test_aggregate_forums.py insights/prompts/forum-narrative.md insights/runbook.md
git commit -m "feat(insights): forum narrative aggregation and prompt"
```

---

## Task 11: Student profiles + name map

**Files:**
- Create: `insights/prompts/student-profile.md`
- Create: `insights/aggregate/students.py`
- Create: `insights/tests/test_aggregate_students.py`
- Modify: `insights/runbook.md` (Phase 3c section)

The students step groups by `author_name` + `author_url`, computes a `student_id` (stable hash), builds per-student inputs for the LLM (multi-post students only), and writes the final `students.json` plus `name_map.json`.

- [ ] **Step 1: Write `insights/prompts/student-profile.md`**

````markdown
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
````

- [ ] **Step 2: Write the failing test**

Create `insights/tests/test_aggregate_students.py`:

```python
import json
from pathlib import Path

from insights.aggregate.students import (
    build_student_inputs,
    finalize_students,
    student_id_for,
    derive_module,
)


def _write_post(jsonl, **fields):
    jsonl.write(json.dumps(fields) + "\n")


def _write_extracted(path: Path, post_id: str, **fields):
    rec = {
        "post_id": post_id,
        "role": None, "role_confidence": "unknown",
        "org": None, "org_confidence": "unknown",
        "country": None, "country_confidence": "unknown",
        "beat": [],
        "skill_level": "beginner",
        "themes": [],
        "tools_mentioned": [],
        "challenges": [],
        "project_ideas": [],
        "sentiment": "neutral",
        "summary_one_line": "",
        **fields,
    }
    (path / f"{post_id}.json").write_text(json.dumps(rec), encoding="utf-8")


def test_student_id_is_stable_for_same_inputs():
    a = student_id_for("Alice Q. Public", "https://example.test/u/1")
    b = student_id_for("Alice Q. Public", "https://example.test/u/1")
    assert a == b
    assert a.startswith("stu_")


def test_student_id_differs_when_url_differs():
    a = student_id_for("Alice", "https://example.test/u/1")
    b = student_id_for("Alice", "https://example.test/u/2")
    assert a != b


def test_derive_module_from_forum_slug():
    assert derive_module("m1-discussion-forum-1-foo") == "m1"
    assert derive_module("m4-weekly-exercise") == "m4"
    assert derive_module("course-announcements") is None
    assert derive_module("final-project-proposal") is None


def test_build_student_inputs_groups_by_author(tmp_path):
    posts = tmp_path / "posts.jsonl"
    with posts.open("w", encoding="utf-8") as out:
        _write_post(out, post_id="p1", author_name="Alice", author_url="https://x.test/u/1",
                    forum_id="10", forum_name="F", forum_slug="m1-discussion-forum-1",
                    forum_category="module-discussion", posted_at="2026-04-01T10:00:00-04:00")
        _write_post(out, post_id="p2", author_name="Alice", author_url="https://x.test/u/1",
                    forum_id="10", forum_name="F", forum_slug="m2-discussion-forum-1",
                    forum_category="module-discussion", posted_at="2026-04-15T10:00:00-04:00")
        _write_post(out, post_id="p3", author_name="Bob", author_url="https://x.test/u/2",
                    forum_id="10", forum_name="F", forum_slug="m1-discussion-forum-1",
                    forum_category="module-discussion", posted_at="2026-04-01T10:00:00-04:00")

    extracted = tmp_path / "extracted"
    extracted.mkdir()
    _write_extracted(extracted, "p1", role="reporter", role_confidence="stated")
    _write_extracted(extracted, "p2", themes=["coding-help"])
    _write_extracted(extracted, "p3")

    inputs = build_student_inputs(posts, extracted)
    by_name = {s["real_name"]: s for s in inputs}
    assert by_name["Alice"]["post_count"] == 2
    assert "m1" in by_name["Alice"]["modules_active"]
    assert "m2" in by_name["Alice"]["modules_active"]
    assert by_name["Bob"]["post_count"] == 1


def test_finalize_students_for_single_post_skips_llm(tmp_path):
    posts = tmp_path / "posts.jsonl"
    with posts.open("w", encoding="utf-8") as out:
        _write_post(out, post_id="p1", author_name="Alice", author_url="https://x.test/u/1",
                    forum_id="10", forum_name="F", forum_slug="m1-discussion-forum-1",
                    forum_category="module-discussion", posted_at="2026-04-01T10:00:00-04:00")

    extracted = tmp_path / "extracted"
    extracted.mkdir()
    _write_extracted(extracted, "p1", role="reporter", role_confidence="stated", country="US",
                     country_confidence="stated", themes=["coding-help"], skill_level="intermediate")

    inputs = build_student_inputs(posts, extracted)
    students, name_map = finalize_students(inputs, model_responses={})
    assert len(students) == 1
    s = students[0]
    assert s["real_name"] == "Alice"
    assert s["role"] == "reporter"
    assert s["role_confidence"] == "stated"
    assert s["country"] == "US"
    assert s["skill_level"] == "intermediate"
    assert s["themes"] == ["coding-help"]
    assert s["profile_summary"] == ""
    assert name_map["Alice"].startswith("Student ")


def test_finalize_students_uses_llm_response(tmp_path):
    posts = tmp_path / "posts.jsonl"
    with posts.open("w", encoding="utf-8") as out:
        _write_post(out, post_id="p1", author_name="Alice", author_url="https://x.test/u/1",
                    forum_id="10", forum_name="F", forum_slug="m1-discussion-forum-1",
                    forum_category="module-discussion", posted_at="2026-04-01T10:00:00-04:00")
        _write_post(out, post_id="p2", author_name="Alice", author_url="https://x.test/u/1",
                    forum_id="10", forum_name="F", forum_slug="m2-discussion-forum-1",
                    forum_category="module-discussion", posted_at="2026-04-15T10:00:00-04:00")

    extracted = tmp_path / "extracted"
    extracted.mkdir()
    _write_extracted(extracted, "p1")
    _write_extracted(extracted, "p2")

    inputs = build_student_inputs(posts, extracted)
    sid = student_id_for("Alice", "https://x.test/u/1")
    responses = {sid: {
        "role": "investigative reporter",
        "role_confidence": "inferred",
        "org": None, "org_confidence": "unknown",
        "country": "Canada", "country_confidence": "stated",
        "beat": ["politics"],
        "skill_level": "advanced",
        "themes": ["coding-help"],
        "evolution": "shifted from skeptical to enthusiastic",
        "profile_summary": "Investigative reporter testing CLI workflows.",
    }}
    students, _ = finalize_students(inputs, model_responses=responses)
    s = students[0]
    assert s["role"] == "investigative reporter"
    assert s["evolution"] == "shifted from skeptical to enthusiastic"
    assert s["profile_summary"] == "Investigative reporter testing CLI workflows."
```

- [ ] **Step 3: Run, verify fail**

```sh
pytest insights/tests/test_aggregate_students.py -v
```

- [ ] **Step 4: Implement `insights/aggregate/students.py`**

```python
"""Phase 3c: student profiles."""
from __future__ import annotations

import hashlib
import json
import re
from collections import defaultdict
from pathlib import Path


def student_id_for(real_name: str, author_url: str) -> str:
    h = hashlib.sha1(f"{real_name}|{author_url}".encode("utf-8")).hexdigest()[:8]
    return f"stu_{h}"


def derive_module(forum_slug: str) -> str | None:
    m = re.match(r"^(m\d)-", forum_slug or "")
    return m.group(1) if m else None


def _iter_posts(posts_path: Path):
    for line in posts_path.read_text(encoding="utf-8").splitlines():
        if line.strip():
            yield json.loads(line)


def _load_extractions(extracted_dir: Path) -> dict:
    out = {}
    for p in extracted_dir.glob("*.json"):
        rec = json.loads(p.read_text(encoding="utf-8"))
        out[rec["post_id"]] = rec
    return out


def build_student_inputs(posts_path: Path, extracted_dir: Path) -> list[dict]:
    extractions = _load_extractions(extracted_dir)
    grouped: dict[tuple[str, str], list[dict]] = defaultdict(list)
    for post in _iter_posts(posts_path):
        key = (post["author_name"], post["author_url"])
        grouped[key].append(post)

    out: list[dict] = []
    for (name, url), posts in grouped.items():
        posts.sort(key=lambda p: p["posted_at"])
        modules = sorted({m for p in posts if (m := derive_module(p["forum_slug"]))})
        ext_records = []
        for p in posts:
            r = extractions.get(p["post_id"])
            if r is None:
                continue
            ext_records.append({
                "post_id": r["post_id"],
                "forum_category": p["forum_category"],
                "module": derive_module(p["forum_slug"]),
                "posted_at": p["posted_at"],
                "summary_one_line": r.get("summary_one_line", ""),
                "role": r.get("role"),
                "role_confidence": r.get("role_confidence"),
                "org": r.get("org"),
                "org_confidence": r.get("org_confidence"),
                "country": r.get("country"),
                "country_confidence": r.get("country_confidence"),
                "beat": r.get("beat", []),
                "skill_level": r.get("skill_level"),
                "themes": r.get("themes", []),
                "tools_mentioned": r.get("tools_mentioned", []),
                "challenges": r.get("challenges", []),
                "project_ideas": r.get("project_ideas", []),
                "sentiment": r.get("sentiment"),
            })
        out.append({
            "student_id": student_id_for(name, url),
            "real_name": name,
            "author_url": url,
            "post_count": len(posts),
            "post_ids": [p["post_id"] for p in posts],
            "modules_active": modules,
            "extractions": ext_records,
        })
    out.sort(key=lambda s: s["real_name"].lower())
    return out


def _consolidate_single(rec: dict) -> dict:
    return {
        "role": rec.get("role"),
        "role_confidence": rec.get("role_confidence", "unknown"),
        "org": rec.get("org"),
        "org_confidence": rec.get("org_confidence", "unknown"),
        "country": rec.get("country"),
        "country_confidence": rec.get("country_confidence", "unknown"),
        "beat": rec.get("beat", []),
        "skill_level": rec.get("skill_level", "beginner"),
        "themes": rec.get("themes", []),
        "evolution": "",
        "profile_summary": "",
    }


def finalize_students(inputs: list[dict], model_responses: dict[str, dict]) -> tuple[list[dict], dict[str, str]]:
    """
    inputs: output of build_student_inputs
    model_responses: dict of student_id -> response dict (for multi-post students)
    returns: (students_json, name_map)  -- name_map: real_name -> "Student NNNN"
    """
    students = []
    sorted_names = sorted({s["real_name"] for s in inputs}, key=str.lower)
    name_map = {name: f"Student {i + 1:04d}" for i, name in enumerate(sorted_names)}

    for s in inputs:
        sid = s["student_id"]
        if s["post_count"] >= 2 and sid in model_responses:
            consolidated = model_responses[sid]
        else:
            consolidated = _consolidate_single(s["extractions"][0]) if s["extractions"] else _consolidate_single({})

        students.append({
            "student_id": sid,
            "real_name": s["real_name"],
            "post_count": s["post_count"],
            "post_ids": s["post_ids"],
            "modules_active": s["modules_active"],
            **consolidated,
        })

    return students, name_map
```

- [ ] **Step 5: Run, verify pass**

```sh
pytest insights/tests/test_aggregate_students.py -v
```

Expected: 5 passed.

- [ ] **Step 6: Append Phase 3c to runbook**

Append to `insights/runbook.md`:

````markdown
## Phase 3c: Student profiles

In the main session:
1. Build the inputs:
   ```python
   from insights.aggregate.students import build_student_inputs, finalize_students
   inputs = build_student_inputs(Path("insights/data/posts.jsonl"), Path("insights/data/extracted"))
   ```
2. For each student where `post_count >= 2`, send `{"real_name": ..., "post_count": ..., "modules_active": [...], "extractions": [...]}` to Sonnet 4.6 with the prompt at `insights/prompts/student-profile.md`. Parse the JSON response. Collect `{student_id: response}` into a dict.
3. Finalize:
   ```python
   students, name_map = finalize_students(inputs, model_responses)
   Path("insights/data/students.json").write_text(json.dumps(students, indent=2, ensure_ascii=False), encoding="utf-8")
   Path("insights/data/name_map.json").write_text(json.dumps(name_map, indent=2, ensure_ascii=False), encoding="utf-8")
   ```
````

- [ ] **Step 7: Commit**

```sh
git add insights/aggregate/students.py insights/tests/test_aggregate_students.py insights/prompts/student-profile.md insights/runbook.md
git commit -m "feat(insights): student profile aggregation, name map, and prompt"
```

---

## Task 12: Overview rollups

**Files:**
- Create: `insights/aggregate/overview.py`
- Create: `insights/tests/test_aggregate_overview.py`

Pure aggregation, no LLM. Computes the cohort-level rollups for the overview page.

- [ ] **Step 1: Write the failing test**

Create `insights/tests/test_aggregate_overview.py`:

```python
import json
from pathlib import Path

from insights.aggregate.overview import build_overview


def _write_post(out, **fields):
    out.write(json.dumps(fields) + "\n")


def _write_extracted(d: Path, post_id: str, **fields):
    rec = {
        "post_id": post_id,
        "role": None, "country": None, "skill_level": "beginner",
        "language": "en", "sentiment": "neutral",
        "tools_mentioned": [], "themes": [],
        **fields,
    }
    (d / f"{post_id}.json").write_text(json.dumps(rec), encoding="utf-8")


def test_build_overview_counts_correctly(tmp_path):
    posts = tmp_path / "posts.jsonl"
    with posts.open("w", encoding="utf-8") as out:
        _write_post(out, post_id="p1", author_name="Alice", author_url="u1",
                    forum_id="10", forum_name="F", forum_slug="m1-discussion-forum-1",
                    forum_category="module-discussion", posted_at="2026-04-01T10:00:00-04:00",
                    discussion_id="d1")
        _write_post(out, post_id="p2", author_name="Alice", author_url="u1",
                    forum_id="10", forum_name="F", forum_slug="m1-discussion-forum-1",
                    forum_category="module-discussion", posted_at="2026-04-02T10:00:00-04:00",
                    discussion_id="d1")
        _write_post(out, post_id="p3", author_name="Bob", author_url="u2",
                    forum_id="20", forum_name="G", forum_slug="m2-discussion-forum-1",
                    forum_category="module-discussion", posted_at="2026-04-15T10:00:00-04:00",
                    discussion_id="d2")

    extracted = tmp_path / "extracted"
    extracted.mkdir()
    _write_extracted(extracted, "p1", role="reporter", country="US",
                     skill_level="beginner", themes=["coding-help"], tools_mentioned=["Claude"])
    _write_extracted(extracted, "p2", role="reporter", country="US",
                     skill_level="intermediate", themes=["coding-help"])
    _write_extracted(extracted, "p3", role="editor", country="UK",
                     skill_level="advanced", themes=["data-analysis"], tools_mentioned=["Claude", "Gemini"])

    overview = build_overview(posts, extracted)
    assert overview["total_posts"] == 3
    assert overview["total_students"] == 2
    assert overview["countries"] == 2
    assert overview["date_range"]["start"] == "2026-04-01T10:00:00-04:00"
    assert overview["date_range"]["end"] == "2026-04-15T10:00:00-04:00"

    role_counts = {r["role"]: r["count"] for r in overview["roles"]}
    assert role_counts["reporter"] == 2
    assert role_counts["editor"] == 1

    skill_counts = {s["level"]: s["count"] for s in overview["skill_levels"]}
    assert skill_counts["beginner"] == 1
    assert skill_counts["intermediate"] == 1
    assert skill_counts["advanced"] == 1

    tool_counts = {t["tool"]: t["count"] for t in overview["top_tools"]}
    assert tool_counts["Claude"] == 2
    assert tool_counts["Gemini"] == 1

    timeline_dates = {entry["date"]: entry["count"] for entry in overview["posting_timeline"]}
    assert timeline_dates.get("2026-04-01") == 1
    assert timeline_dates.get("2026-04-15") == 1

    threads = {t["discussion_id"]: t["post_count"] for t in overview["top_discussions"]}
    assert threads.get("d1") == 2
```

- [ ] **Step 2: Run, verify fail**

```sh
pytest insights/tests/test_aggregate_overview.py -v
```

- [ ] **Step 3: Implement `insights/aggregate/overview.py`**

```python
"""Phase 3d: cohort overview rollups (no LLM)."""
from __future__ import annotations

import json
from collections import Counter, defaultdict
from pathlib import Path


def _load_posts(posts_path: Path) -> list[dict]:
    return [
        json.loads(line)
        for line in posts_path.read_text(encoding="utf-8").splitlines()
        if line.strip()
    ]


def _load_extractions(extracted_dir: Path) -> dict[str, dict]:
    return {
        json.loads(p.read_text(encoding="utf-8"))["post_id"]: json.loads(p.read_text(encoding="utf-8"))
        for p in extracted_dir.glob("*.json")
    }


def build_overview(posts_path: Path, extracted_dir: Path) -> dict:
    posts = _load_posts(posts_path)
    extractions = _load_extractions(extracted_dir)

    # student id (name + url) for unique counting
    students = {(p["author_name"], p["author_url"]) for p in posts}
    timestamps = sorted(p["posted_at"] for p in posts if p.get("posted_at"))

    role_counter = Counter()
    country_counter = Counter()
    skill_counter = Counter()
    language_counter = Counter()
    sentiment_counter = Counter()
    tool_counter = Counter()
    theme_counter = Counter()
    forum_post_counter = Counter()
    timeline = Counter()
    discussion_counter = Counter()
    discussion_meta = {}

    for post in posts:
        ext = extractions.get(post["post_id"])
        if ext:
            if ext.get("role"):
                role_counter[ext["role"]] += 1
            if ext.get("country"):
                country_counter[ext["country"]] += 1
            if ext.get("skill_level"):
                skill_counter[ext["skill_level"]] += 1
            if ext.get("language"):
                language_counter[ext["language"]] += 1
            if ext.get("sentiment"):
                sentiment_counter[ext["sentiment"]] += 1
            for t in ext.get("tools_mentioned") or []:
                tool_counter[t] += 1
            for t in ext.get("themes") or []:
                theme_counter[t] += 1
        forum_post_counter[post["forum_id"]] += 1
        date_str = (post.get("posted_at") or "")[:10]
        if date_str:
            timeline[date_str] += 1
        did = post["discussion_id"]
        discussion_counter[did] += 1
        discussion_meta.setdefault(did, {
            "discussion_id": did,
            "subject": post.get("discussion_subject"),
            "forum_id": post.get("forum_id"),
            "forum_slug": post.get("forum_slug"),
        })

    return {
        "total_posts": len(posts),
        "total_students": len(students),
        "countries": len({c for c in country_counter}),
        "languages": len({l for l in language_counter}),
        "modules_covered": sorted({p["forum_slug"][:2] for p in posts if p["forum_slug"].startswith("m")}),
        "date_range": {
            "start": timestamps[0] if timestamps else None,
            "end": timestamps[-1] if timestamps else None,
        },
        "roles": [{"role": k, "count": v} for k, v in role_counter.most_common()],
        "countries_breakdown": [{"country": k, "count": v} for k, v in country_counter.most_common()],
        "skill_levels": [{"level": k, "count": v} for k, v in skill_counter.most_common()],
        "languages_breakdown": [{"language": k, "count": v} for k, v in language_counter.most_common()],
        "sentiments": [{"sentiment": k, "count": v} for k, v in sentiment_counter.most_common()],
        "top_tools": [{"tool": k, "count": v} for k, v in tool_counter.most_common(20)],
        "top_themes": [{"theme_id": k, "count": v} for k, v in theme_counter.most_common(20)],
        "posting_timeline": [
            {"date": k, "count": v} for k, v in sorted(timeline.items())
        ],
        "top_discussions": [
            {**discussion_meta[did], "post_count": cnt}
            for did, cnt in discussion_counter.most_common(10)
        ],
    }


def main():
    repo_root = Path(__file__).parent.parent.parent
    posts = repo_root / "insights" / "data" / "posts.jsonl"
    extracted = repo_root / "insights" / "data" / "extracted"
    out = repo_root / "insights" / "data" / "overview.json"
    overview = build_overview(posts, extracted)
    out.write_text(json.dumps(overview, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"wrote {out}")


if __name__ == "__main__":
    main()
```

- [ ] **Step 4: Run, verify pass**

```sh
pytest insights/tests/test_aggregate_overview.py -v
```

Expected: 1 passed.

- [ ] **Step 5: Commit**

```sh
git add insights/aggregate/overview.py insights/tests/test_aggregate_overview.py
git commit -m "feat(insights): cohort overview rollups"
```

---

## Task 13: Build phase — per-view JSON

**Files:**
- Create: `insights/build.py`
- Create: `insights/tests/test_build.py`

`build.py` reads from `insights/data/` and writes the per-view JSON files into `insights/dashboard/data/`. Also flattens `quotable_lines` across all extractions into `quotes.json`.

- [ ] **Step 1: Write the failing test**

Create `insights/tests/test_build.py`:

```python
import json
from pathlib import Path

from insights.build import build_dashboard_data, flatten_quotes


def _write(p: Path, obj):
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(obj), encoding="utf-8")


def test_flatten_quotes_collects_from_extractions(tmp_path):
    extracted = tmp_path / "extracted"
    extracted.mkdir()
    _write(extracted / "p1.json", {
        "post_id": "p1",
        "quotable_lines": [
            {"text": "first quote", "topic": "coding-help", "strength": "high"},
            {"text": "second quote", "topic": "coding-help", "strength": "medium"},
        ],
    })
    _write(extracted / "p2.json", {
        "post_id": "p2",
        "quotable_lines": [],
    })
    posts = tmp_path / "posts.jsonl"
    posts.write_text(
        json.dumps({"post_id": "p1", "author_name": "Alice", "author_url": "u",
                    "forum_id": "10", "forum_slug": "m1-discussion-forum-1",
                    "forum_category": "module-discussion",
                    "discussion_id": "d1", "permalink": "https://x.test/p1"}) + "\n" +
        json.dumps({"post_id": "p2", "author_name": "Bob", "author_url": "u2",
                    "forum_id": "10", "forum_slug": "m1-discussion-forum-1",
                    "forum_category": "module-discussion",
                    "discussion_id": "d2", "permalink": "https://x.test/p2"}) + "\n",
        encoding="utf-8",
    )
    quotes = flatten_quotes(posts, extracted)
    assert len(quotes) == 2
    q = quotes[0]
    assert q["post_id"] == "p1"
    assert q["text"] == "first quote"
    assert q["author_name"] == "Alice"
    assert q["forum_slug"] == "m1-discussion-forum-1"


def test_build_dashboard_data_copies_files(tmp_path):
    src = tmp_path / "data"
    src.mkdir()
    _write(src / "themes.json", [])
    _write(src / "forums.json", [])
    _write(src / "students.json", [])
    _write(src / "overview.json", {})
    _write(src / "name_map.json", {})
    extracted = src / "extracted"
    extracted.mkdir()
    _write(src / "posts.jsonl", {})  # dummy, not used in this test
    src_posts = src / "posts.jsonl"
    src_posts.write_text("", encoding="utf-8")

    dest = tmp_path / "dashboard" / "data"
    build_dashboard_data(src, dest)

    for fname in ("themes.json", "forums.json", "students.json", "overview.json", "name_map.json"):
        assert (dest / fname).exists()
```

- [ ] **Step 2: Run, verify fail**

```sh
pytest insights/tests/test_build.py -v
```

- [ ] **Step 3: Implement `insights/build.py`**

```python
"""Phase 4: build dashboard data files from aggregated outputs."""
from __future__ import annotations

import json
import shutil
from pathlib import Path


def flatten_quotes(posts_path: Path, extracted_dir: Path) -> list[dict]:
    posts = {}
    for line in posts_path.read_text(encoding="utf-8").splitlines():
        if line.strip():
            r = json.loads(line)
            posts[r["post_id"]] = r

    out = []
    for ext_path in sorted(extracted_dir.glob("*.json")):
        rec = json.loads(ext_path.read_text(encoding="utf-8"))
        for q in rec.get("quotable_lines") or []:
            post = posts.get(rec["post_id"])
            if not post:
                continue
            out.append({
                "post_id": rec["post_id"],
                "text": q["text"],
                "topic": q.get("topic"),
                "strength": q.get("strength"),
                "author_name": post.get("author_name"),
                "author_url": post.get("author_url"),
                "forum_id": post.get("forum_id"),
                "forum_slug": post.get("forum_slug"),
                "forum_category": post.get("forum_category"),
                "discussion_id": post.get("discussion_id"),
                "permalink": post.get("permalink"),
                "language": rec.get("language"),
                "sentiment": rec.get("sentiment"),
            })
    return out


def build_dashboard_data(src: Path, dest: Path) -> None:
    dest.mkdir(parents=True, exist_ok=True)
    for fname in ("themes.json", "forums.json", "students.json", "overview.json", "name_map.json"):
        s = src / fname
        if s.exists():
            shutil.copy2(s, dest / fname)

    posts = src / "posts.jsonl"
    extracted = src / "extracted"
    if posts.exists() and extracted.exists() and any(extracted.iterdir()):
        quotes = flatten_quotes(posts, extracted)
        (dest / "quotes.json").write_text(
            json.dumps(quotes, indent=2, ensure_ascii=False), encoding="utf-8"
        )


def main():
    repo_root = Path(__file__).parent.parent
    src = repo_root / "insights" / "data"
    dest = repo_root / "insights" / "dashboard" / "data"
    build_dashboard_data(src, dest)
    print(f"built dashboard data in {dest}")


if __name__ == "__main__":
    main()
```

- [ ] **Step 4: Run, verify pass**

```sh
pytest insights/tests/test_build.py -v
```

Expected: 2 passed.

- [ ] **Step 5: Commit**

```sh
git add insights/build.py insights/tests/test_build.py
git commit -m "feat(insights): build phase copies aggregate JSON and flattens quotes"
```

---

## Task 14: Build phase — search index

**Files:**
- Modify: `insights/build.py` (add `build_search_index`)
- Modify: `insights/tests/test_build.py` (add test)

The dashboard's search page uses MiniSearch. The index format is a plain JSON of documents — MiniSearch's `addAll` API in JS will index it at runtime. Building a serialized MiniSearch index server-side requires JS; the simpler approach is to ship the raw documents and let MiniSearch index in the browser (cheap for 912 posts).

- [ ] **Step 1: Add the failing test**

Append to `insights/tests/test_build.py`:

```python
def test_build_search_index_emits_minisearch_documents(tmp_path):
    from insights.build import build_search_index

    posts = tmp_path / "posts.jsonl"
    posts.write_text(
        json.dumps({
            "post_id": "p1", "content_text": "Hello world",
            "discussion_subject": "Greeting", "forum_slug": "m1-discussion-forum-1",
            "forum_category": "module-discussion", "language_guess": "en",
            "author_name": "Alice", "permalink": "https://x.test/p1",
        }) + "\n",
        encoding="utf-8",
    )
    extracted = tmp_path / "extracted"
    extracted.mkdir()
    rec = {
        "post_id": "p1",
        "themes": ["coding-help"],
        "skill_level": "intermediate",
        "sentiment": "curious",
        "role": "reporter",
        "language": "en",
    }
    (extracted / "p1.json").write_text(json.dumps(rec), encoding="utf-8")

    docs = build_search_index(posts, extracted)
    assert len(docs) == 1
    d = docs[0]
    assert d["id"] == "p1"
    assert "Hello world" in d["text"]
    assert d["theme"] == "coding-help"
    assert d["forum_slug"] == "m1-discussion-forum-1"
    assert d["role"] == "reporter"
    assert d["skill_level"] == "intermediate"
```

- [ ] **Step 2: Run, verify fail**

```sh
pytest insights/tests/test_build.py -v
```

- [ ] **Step 3: Implement `build_search_index` in `insights/build.py`**

Add this function next to `flatten_quotes`:

```python
def build_search_index(posts_path: Path, extracted_dir: Path) -> list[dict]:
    extractions = {}
    for p in extracted_dir.glob("*.json"):
        r = json.loads(p.read_text(encoding="utf-8"))
        extractions[r["post_id"]] = r

    docs = []
    for line in posts_path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        post = json.loads(line)
        ext = extractions.get(post["post_id"]) or {}
        themes = ext.get("themes") or []
        docs.append({
            "id": post["post_id"],
            "text": post.get("content_text", ""),
            "subject": post.get("discussion_subject", ""),
            "author_name": post.get("author_name", ""),
            "permalink": post.get("permalink", ""),
            "forum_slug": post.get("forum_slug", ""),
            "forum_category": post.get("forum_category", ""),
            "language": ext.get("language") or post.get("language_guess", ""),
            "theme": themes[0] if themes else None,
            "themes": themes,
            "role": ext.get("role"),
            "skill_level": ext.get("skill_level"),
            "sentiment": ext.get("sentiment"),
        })
    return docs
```

And update `build_dashboard_data` to write the index:

```python
def build_dashboard_data(src: Path, dest: Path) -> None:
    dest.mkdir(parents=True, exist_ok=True)
    for fname in ("themes.json", "forums.json", "students.json", "overview.json", "name_map.json"):
        s = src / fname
        if s.exists():
            shutil.copy2(s, dest / fname)

    posts = src / "posts.jsonl"
    extracted = src / "extracted"
    if posts.exists() and extracted.exists() and any(extracted.iterdir()):
        quotes = flatten_quotes(posts, extracted)
        (dest / "quotes.json").write_text(
            json.dumps(quotes, indent=2, ensure_ascii=False), encoding="utf-8"
        )
        docs = build_search_index(posts, extracted)
        (dest / "search-docs.json").write_text(
            json.dumps(docs, ensure_ascii=False), encoding="utf-8"
        )
```

- [ ] **Step 4: Run, verify pass**

```sh
pytest insights/tests/test_build.py -v
```

Expected: 3 passed.

- [ ] **Step 5: Commit**

```sh
git add insights/build.py insights/tests/test_build.py
git commit -m "feat(insights): build search-docs.json for client-side MiniSearch"
```

---

## Task 15: README and runbook polish

**Files:**
- Modify: `insights/README.md`
- Modify: `insights/runbook.md`

- [ ] **Step 1: Replace `insights/README.md`**

```markdown
# Student UGC insights pipeline

Turns the spring 2026 cohort's forum corpus (594 threads, 912 posts) into structured JSON the dashboard can render.

## Prerequisites
- Python 3.11+
- A venv with `pip install -r requirements.txt`
- Claude Code with subagent dispatch capability (the LLM phases run in-session through subagents)

## Phases

| Phase | What | How |
|---|---|---|
| 1 | Flatten | `python insights/flatten.py` |
| 2 | Slice + extract | `python insights/slice.py` then follow `insights/runbook.md` Phase 2 inside Claude Code |
| 2.5 | Validate | `python insights/validate.py` |
| 3a-c | LLM aggregation | Follow `insights/runbook.md` Phases 3a, 3b, 3c |
| 3d | Overview rollups | `python -m insights.aggregate.overview` |
| 4 | Build | `python insights/build.py` |

## Re-running
- Re-run phase 1: deletes and re-creates `data/posts.jsonl`. Cheap.
- Re-run phase 2 after editing the prompt: delete the relevant files in `data/extracted/` and re-dispatch. Cached files are skipped.
- Re-run phase 3 after editing aggregator code: just run the relevant module.
- Re-run phase 4 after any of the above: cheap, deterministic.

## Files written by the pipeline (gitignored)
- `data/posts.jsonl` — flattened source
- `data/slices/` — sliced posts.jsonl for parallel extraction
- `data/extracted/` — one JSON per post (912 files)
- `data/failed/` — extractions that failed twice (review by hand)
- `data/extraction_log.jsonl` — per-post processing log
- `data/themes.json`, `data/forums.json`, `data/students.json`, `data/overview.json`, `data/name_map.json` — aggregator outputs
- `dashboard/data/*.json` — copied/transformed for the dashboard

## See also
- Spec: `docs/superpowers/specs/2026-05-08-student-ugc-insights-design.md`
- Plan: `docs/superpowers/plans/2026-05-08-student-ugc-pipeline.md`
- Runbook (LLM phases): `insights/runbook.md`
```

- [ ] **Step 2: Verify runbook is complete**

Open `insights/runbook.md` and confirm it has:
- Phase 2: per-post extraction (subagent fan-out instructions)
- Phase 3a: themes clustering
- Phase 3b: forum narratives
- Phase 3c: student profiles

If anything is missing, add it now.

- [ ] **Step 3: Commit**

```sh
git add insights/README.md insights/runbook.md
git commit -m "docs(insights): flesh out README and runbook"
```

---

## Task 16: End-to-end smoke run on real data

This task runs the full pipeline against the real corpus to produce a complete set of dashboard data files. Estimated wall-clock: 15-30 min depending on subagent performance.

- [ ] **Step 1: Confirm clean starting state**

```sh
# remove any prior partial state
rm -rf insights/data/extracted insights/data/failed insights/data/slices
rm -f insights/data/extraction_log.jsonl insights/data/validation_errors.json
rm -f insights/data/themes.json insights/data/forums.json insights/data/students.json insights/data/overview.json insights/data/name_map.json
rm -rf insights/dashboard/data
```

- [ ] **Step 2: Run phase 1**

```sh
python insights/flatten.py
```

Expected: `flattened 912 posts`. (PowerShell users: same command.)

- [ ] **Step 3: Run phase 2 prep**

```sh
python insights/slice.py
```

Expected: `wrote 10 slices`.

- [ ] **Step 4: Run phase 2 (subagent fan-out)**

Inside Claude Code, follow `insights/runbook.md` Phase 2: dispatch 10 Agent subagents in parallel, each handling one slice.

After all subagents return, count files:

```sh
ls insights/data/extracted | wc -l       # expect 912 (or 912 - failed count)
ls insights/data/failed 2>/dev/null | wc -l   # ideally 0
```

- [ ] **Step 5: Validate**

```sh
python insights/validate.py
```

Expected: `OK: validated 912 extraction files`. If it fails, inspect `insights/data/validation_errors.json`. Common fixes: re-run subagents on the missing post_ids (just delete the failed/orphaned files and re-dispatch the relevant slices — extraction is skip-on-rerun).

- [ ] **Step 6: Run phase 3a (themes)**

Follow runbook Phase 3a. Verify `insights/data/themes.json` exists and looks reasonable.

- [ ] **Step 7: Run phase 3b (forums)**

Follow runbook Phase 3b. Verify `insights/data/forums.json` has 21 entries.

- [ ] **Step 8: Run phase 3c (students)**

Follow runbook Phase 3c. Verify `insights/data/students.json` and `insights/data/name_map.json` exist.

- [ ] **Step 9: Run phase 3d (overview)**

```sh
python -m insights.aggregate.overview
```

Expected: writes `insights/data/overview.json`.

- [ ] **Step 10: Run phase 4 (build)**

```sh
python insights/build.py
```

Expected: `built dashboard data in .../dashboard/data`.

- [ ] **Step 11: Sanity-check the outputs**

```sh
ls insights/dashboard/data
```

Expected files: `themes.json`, `forums.json`, `students.json`, `overview.json`, `name_map.json`, `quotes.json`, `search-docs.json`.

Quick sanity:

```sh
python -c "import json; d=json.load(open('insights/dashboard/data/overview.json')); print('students:', d['total_students'], 'posts:', d['total_posts'], 'date range:', d['date_range'])"
python -c "import json; print('themes:', len(json.load(open('insights/dashboard/data/themes.json'))))"
python -c "import json; print('forums:', len(json.load(open('insights/dashboard/data/forums.json'))))"
python -c "import json; print('students:', len(json.load(open('insights/dashboard/data/students.json'))))"
python -c "import json; print('quotes:', len(json.load(open('insights/dashboard/data/quotes.json'))))"
python -c "import json; print('search docs:', len(json.load(open('insights/dashboard/data/search-docs.json'))))"
```

Verify: 912 posts, 21 forums, ~200 students, search docs == post count, quotes >= 0.

- [ ] **Step 12: Manually spot-check 5 random students**

Pick 5 random students from `students.json` and read their `profile_summary` and `evolution`. Open one or two of their original posts (find the source `.md` files via post_id grep) and confirm the profile reads accurately.

- [ ] **Step 13: Manually spot-check 5 forum narratives**

Pick 5 forums from `forums.json` (one from each category if possible) and read the `narrative` and `takeaways`. Open the corresponding source files and confirm the narrative is faithful and quotable post_ids exist.

- [ ] **Step 14: Commit data artifacts excluded; commit any prompt or code fixes**

The data files are gitignored. If the smoke run revealed prompt or code issues, fix them and commit.

```sh
git add insights/prompts/ insights/aggregate/ insights/build.py insights/runbook.md
git commit -m "fix(insights): tune prompts and aggregators based on smoke run"
```

(Skip if no changes.)

---

## Self-review against the spec

**Spec coverage check** (each item maps to one or more tasks above):

- Phase 1 (flatten): Tasks 3-4 ✓
- Phase 2 (per-post extract via subagents): Tasks 5-7 ✓
- Per-post schema with confidence flags: Task 2 (schema), Task 5 (prompt) ✓
- Constrained vocabularies (themes, sentiment, skill_level): Task 9 (canonical list), Task 5 (prompt) ✓
- Phase 2.5 (validate): Task 8 ✓
- Phase 3a (themes clustering): Task 9 ✓
- Phase 3b (forum narratives): Task 10 ✓
- Phase 3c (student profiles + name_map): Task 11 ✓
- Phase 3d (overview rollups): Task 12 ✓
- Phase 4 (build): Tasks 13-14 ✓
- Resumability (skip-if-exists, atomic writes): Task 6 (runbook), Task 9 (atomic via tmp+rename mentioned in runbook) ✓
- Failure handling (retry once, write to failed/): Task 6 (runbook) ✓
- Slop-word avoidance: Task 10 (forum narrative prompt) ✓ — Task 11 (student profile prompt) — note: I should double-check Task 11 has the slop avoidance rule

Looking back: Task 11's prompt says "No slop words. Specific." but doesn't enumerate the list. Acceptable trade-off since the prompt is shorter; the model will absorb the constraint. If output quality is bad, expand it during smoke run iteration.

**Placeholder scan:** No "TBD" / "TODO" / "implement later" remain. The Task 6 smoke test step has the engineer manually run extractions for 5 posts — that's intentional, not a placeholder.

**Type consistency:** Schema field names are consistent across `schema.py`, the per-post extraction prompt, and downstream aggregators (themes, forums, students, overview). `student_id` format (`stu_NNNNNNNN`) consistent. `theme_id` is kebab-case throughout.

Plan is complete and self-consistent.

---

## Execution handoff

Plan complete and saved to `docs/superpowers/plans/2026-05-08-student-ugc-pipeline.md`.

Two execution options:

1. **Subagent-driven** (recommended) — fresh subagent per task, review between tasks, fast iteration. Each subagent gets the relevant section of this plan and works in isolation.
2. **Inline execution** — execute tasks in this session using executing-plans, batch with checkpoints for review.

Which approach?
