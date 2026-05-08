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
