"""Phase 4: build dashboard data files from aggregated outputs."""
from __future__ import annotations

import json
import shutil
from pathlib import Path


def flatten_quotes(posts_path: Path, extracted_dir: Path) -> list[dict]:
    posts = {}
    for line in posts_path.read_text(encoding="utf-8").splitlines():
        if line.strip():
            r = json.loads(line)
            posts[r["post_id"]] = r

    out = []
    for ext_path in sorted(extracted_dir.glob("*.json")):
        rec = json.loads(ext_path.read_text(encoding="utf-8"))
        for q in rec.get("quotable_lines") or []:
            post = posts.get(rec["post_id"])
            if not post:
                continue
            out.append({
                "post_id": rec["post_id"],
                "text": q["text"],
                "topic": q.get("topic"),
                "strength": q.get("strength"),
                "author_name": post.get("author_name"),
                "author_url": post.get("author_url"),
                "forum_id": post.get("forum_id"),
                "forum_slug": post.get("forum_slug"),
                "forum_category": post.get("forum_category"),
                "discussion_id": post.get("discussion_id"),
                "permalink": post.get("permalink"),
                "language": rec.get("language"),
                "sentiment": rec.get("sentiment"),
            })
    return out


def build_search_index(posts_path: Path, extracted_dir: Path) -> list[dict]:
    extractions = {}
    for p in extracted_dir.glob("*.json"):
        r = json.loads(p.read_text(encoding="utf-8"))
        extractions[r["post_id"]] = r

    docs = []
    for line in posts_path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        post = json.loads(line)
        ext = extractions.get(post["post_id"]) or {}
        themes = ext.get("themes") or []
        docs.append({
            "id": post["post_id"],
            "text": post.get("content_text", ""),
            "subject": post.get("discussion_subject", ""),
            "author_name": post.get("author_name", ""),
            "permalink": post.get("permalink", ""),
            "forum_slug": post.get("forum_slug", ""),
            "forum_category": post.get("forum_category", ""),
            "language": ext.get("language") or post.get("language_guess", ""),
            "theme": themes[0] if themes else None,
            "themes": themes,
            "role": ext.get("role"),
            "skill_level": ext.get("skill_level"),
            "sentiment": ext.get("sentiment"),
        })
    return docs


def build_dashboard_data(src: Path, dest: Path) -> None:
    dest.mkdir(parents=True, exist_ok=True)
    for fname in ("themes.json", "forums.json", "students.json", "overview.json", "name_map.json"):
        s = src / fname
        if s.exists():
            shutil.copy2(s, dest / fname)

    posts = src / "posts.jsonl"
    extracted = src / "extracted"
    if posts.exists() and extracted.exists() and any(extracted.iterdir()):
        quotes = flatten_quotes(posts, extracted)
        (dest / "quotes.json").write_text(
            json.dumps(quotes, indent=2, ensure_ascii=False), encoding="utf-8"
        )
        docs = build_search_index(posts, extracted)
        (dest / "search-docs.json").write_text(
            json.dumps(docs, ensure_ascii=False), encoding="utf-8"
        )


def main():
    repo_root = Path(__file__).parent.parent
    src = repo_root / "insights" / "data"
    dest = repo_root / "insights" / "dashboard" / "data"
    build_dashboard_data(src, dest)
    print(f"built dashboard data in {dest}")


if __name__ == "__main__":
    main()
