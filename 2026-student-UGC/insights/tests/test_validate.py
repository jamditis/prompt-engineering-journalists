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
