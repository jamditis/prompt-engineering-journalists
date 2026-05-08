"""Phase 3c: student profiles."""
from __future__ import annotations

import hashlib
import json
import re
from collections import defaultdict
from pathlib import Path


def student_id_for(real_name: str, author_url: str) -> str:
    h = hashlib.sha1(f"{real_name}|{author_url}".encode("utf-8")).hexdigest()[:8]
    return f"stu_{h}"


def derive_module(forum_slug: str) -> str | None:
    m = re.match(r"^(m\d)-", forum_slug or "")
    return m.group(1) if m else None


def _iter_posts(posts_path: Path):
    for line in posts_path.read_text(encoding="utf-8").splitlines():
        if line.strip():
            yield json.loads(line)


def _load_extractions(extracted_dir: Path) -> dict:
    out = {}
    for p in extracted_dir.glob("*.json"):
        rec = json.loads(p.read_text(encoding="utf-8"))
        out[rec["post_id"]] = rec
    return out


def build_student_inputs(posts_path: Path, extracted_dir: Path) -> list[dict]:
    extractions = _load_extractions(extracted_dir)
    grouped: dict[tuple[str, str], list[dict]] = defaultdict(list)
    for post in _iter_posts(posts_path):
        key = (post["author_name"], post["author_url"])
        grouped[key].append(post)

    out: list[dict] = []
    for (name, url), posts in grouped.items():
        posts.sort(key=lambda p: p["posted_at"])
        modules = sorted({m for p in posts if (m := derive_module(p["forum_slug"]))})
        ext_records = []
        for p in posts:
            r = extractions.get(p["post_id"])
            if r is None:
                continue
            ext_records.append({
                "post_id": r["post_id"],
                "forum_category": p["forum_category"],
                "module": derive_module(p["forum_slug"]),
                "posted_at": p["posted_at"],
                "summary_one_line": r.get("summary_one_line", ""),
                "role": r.get("role"),
                "role_confidence": r.get("role_confidence"),
                "org": r.get("org"),
                "org_confidence": r.get("org_confidence"),
                "country": r.get("country"),
                "country_confidence": r.get("country_confidence"),
                "beat": r.get("beat", []),
                "skill_level": r.get("skill_level"),
                "themes": r.get("themes", []),
                "tools_mentioned": r.get("tools_mentioned", []),
                "challenges": r.get("challenges", []),
                "project_ideas": r.get("project_ideas", []),
                "sentiment": r.get("sentiment"),
            })
        out.append({
            "student_id": student_id_for(name, url),
            "real_name": name,
            "author_url": url,
            "post_count": len(posts),
            "post_ids": [p["post_id"] for p in posts],
            "modules_active": modules,
            "extractions": ext_records,
        })
    out.sort(key=lambda s: s["real_name"].lower())
    return out


def _consolidate_single(rec: dict) -> dict:
    return {
        "role": rec.get("role"),
        "role_confidence": rec.get("role_confidence", "unknown"),
        "org": rec.get("org"),
        "org_confidence": rec.get("org_confidence", "unknown"),
        "country": rec.get("country"),
        "country_confidence": rec.get("country_confidence", "unknown"),
        "beat": rec.get("beat", []),
        "skill_level": rec.get("skill_level", "beginner"),
        "themes": rec.get("themes", []),
        "evolution": "",
        "profile_summary": "",
    }


def finalize_students(inputs: list[dict], model_responses: dict[str, dict]) -> tuple[list[dict], dict[str, str]]:
    """
    inputs: output of build_student_inputs
    model_responses: dict of student_id -> response dict (for multi-post students)
    returns: (students_json, name_map)  -- name_map: real_name -> "Student NNNN"
    """
    students = []
    sorted_names = sorted({s["real_name"] for s in inputs}, key=str.lower)
    name_map = {name: f"Student {i + 1:04d}" for i, name in enumerate(sorted_names)}

    for s in inputs:
        sid = s["student_id"]
        if s["post_count"] >= 2 and sid in model_responses:
            consolidated = model_responses[sid]
        else:
            consolidated = _consolidate_single(s["extractions"][0]) if s["extractions"] else _consolidate_single({})

        students.append({
            "student_id": sid,
            "real_name": s["real_name"],
            "post_count": s["post_count"],
            "post_ids": s["post_ids"],
            "modules_active": s["modules_active"],
            **consolidated,
        })

    return students, name_map
