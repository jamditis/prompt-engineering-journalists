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


def test_validate_extraction_rejects_one_missing_field():
    record = _minimal_valid()
    del record["role"]
    errors = validate_extraction(record)
    assert any("missing required field: role" in e for e in errors)


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


def test_sentiments_includes_neutral():
    assert "neutral" in SENTIMENTS


def test_confidence_values_constants():
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
