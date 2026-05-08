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


def test_build_search_index_emits_minisearch_documents(tmp_path):
    from insights.build import build_search_index

    posts = tmp_path / "posts.jsonl"
    posts.write_text(
        json.dumps({
            "post_id": "p1", "content_text": "Hello world",
            "discussion_subject": "Greeting", "forum_slug": "m1-discussion-forum-1",
            "forum_name": "M1 Discussion Forum 1",
            "forum_category": "module-discussion", "language_guess": "en",
            "posted_at": "2026-04-01T12:00:00Z",
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
    assert d["themes"] == ["coding-help"]
    assert d["discussion_subject"] == "Greeting"
    assert d["forum_name"] == "M1 Discussion Forum 1"
    assert d["forum_slug"] == "m1-discussion-forum-1"
    assert d["posted_at"] == "2026-04-01T12:00:00Z"
    assert d["role"] == "reporter"
    assert d["skill_level"] == "intermediate"
