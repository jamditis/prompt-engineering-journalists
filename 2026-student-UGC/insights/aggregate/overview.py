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
