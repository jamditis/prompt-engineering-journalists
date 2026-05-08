"""Phase 3b: forum narratives — build per-forum LLM input and merge model output."""
from __future__ import annotations

import json
from collections import Counter, defaultdict
from pathlib import Path


def build_forum_inputs(posts_path: Path, extracted_dir: Path) -> list[dict]:
    extractions: dict[str, dict] = {}
    for path in extracted_dir.glob("*.json"):
        rec = json.loads(path.read_text(encoding="utf-8"))
        extractions[rec["post_id"]] = rec

    forums: dict[str, dict] = {}
    forum_posts: dict[str, list[str]] = defaultdict(list)

    for line in posts_path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        post = json.loads(line)
        fid = post["forum_id"]
        forum_posts[fid].append(post["post_id"])
        forums.setdefault(fid, {
            "forum_id": fid,
            "forum_name": post["forum_name"],
            "forum_slug": post["forum_slug"],
            "forum_category": post["forum_category"],
        })

    out: list[dict] = []
    for fid, meta in forums.items():
        post_ids = forum_posts[fid]
        recs = [extractions[pid] for pid in post_ids if pid in extractions]
        themes = Counter()
        tools = Counter()
        challenges = Counter()
        for r in recs:
            themes.update(r.get("themes") or [])
            tools.update(r.get("tools_mentioned") or [])
            challenges.update(r.get("challenges") or [])
        out.append({
            **meta,
            "post_count": len(post_ids),
            "top_themes": [{"theme_id": k, "count": v} for k, v in themes.most_common(10)],
            "top_tools": [{"tool": k, "count": v} for k, v in tools.most_common(10)],
            "top_challenges": [{"challenge": k, "count": v} for k, v in challenges.most_common(10)],
            "extractions": [
                {
                    "post_id": r["post_id"],
                    "summary_one_line": r.get("summary_one_line", ""),
                    "themes": r.get("themes", []),
                    "challenges": r.get("challenges", []),
                    "tools_mentioned": r.get("tools_mentioned", []),
                    "quotable_lines": r.get("quotable_lines", []),
                }
                for r in recs
            ],
        })
    out.sort(key=lambda f: f["forum_id"])
    return out


def merge_narratives(forum_input: dict, narrative: dict) -> dict:
    merged = {k: v for k, v in forum_input.items() if k != "extractions"}
    merged["narrative"] = narrative.get("narrative", "")
    merged["takeaways"] = narrative.get("takeaways", [])
    merged["standout_quote_ids"] = narrative.get("standout_quote_ids", [])
    return merged
