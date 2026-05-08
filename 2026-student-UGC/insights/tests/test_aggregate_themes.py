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
