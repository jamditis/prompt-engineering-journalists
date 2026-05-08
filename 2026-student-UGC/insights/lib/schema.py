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
    """Validate an extraction record dict. Returns a list of error strings (empty = valid)."""
    errors: list[str] = []
    post_id = record.get("post_id", "?")
    for field in REQUIRED_EXTRACTION_FIELDS:
        if field not in record:
            errors.append(f"[{post_id}] missing required field: {field}")
    if record.get("skill_level") not in SKILL_LEVELS:
        errors.append(
            f"[{post_id}] invalid skill_level: {record.get('skill_level')!r} (expected one of {SKILL_LEVELS})"
        )
    if record.get("sentiment") not in SENTIMENTS:
        errors.append(
            f"[{post_id}] invalid sentiment: {record.get('sentiment')!r} (expected one of {SENTIMENTS})"
        )
    for cf in ("role_confidence", "org_confidence", "country_confidence"):
        if record.get(cf) not in CONFIDENCE_VALUES:
            errors.append(
                f"[{post_id}] invalid {cf}: {record.get(cf)!r} (expected one of {CONFIDENCE_VALUES})"
            )
    for i, q in enumerate(record.get("quotable_lines") or []):
        if not isinstance(q, dict) or not all(k in q for k in ("text", "topic", "strength")):
            errors.append(f"[{post_id}] quotable_lines[{i}] missing text/topic/strength")
    return errors
