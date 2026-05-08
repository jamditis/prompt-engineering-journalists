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
