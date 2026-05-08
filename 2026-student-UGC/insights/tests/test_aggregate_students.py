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
