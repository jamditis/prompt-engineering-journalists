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
