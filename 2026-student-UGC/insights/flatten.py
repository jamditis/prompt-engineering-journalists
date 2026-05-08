"""Phase 1: walk the source corpus and emit one record per post to posts.jsonl."""
from __future__ import annotations

import json
import re
from pathlib import Path

from langdetect import DetectorFactory, detect, LangDetectException

# deterministic langdetect output
DetectorFactory.seed = 0


def classify_forum(slug: str) -> str:
    """Map a forum slug to one of four categories.

    Order matters: the more specific patterns are checked first.
    Anything that doesn't match a more specific category falls through
    to "course-ops" (which covers announcements, instructor Q&A,
    platform questions, and informal participant chat).
    """
    s = slug.lower()
    if s.startswith("final-project"):
        return "final-project"
    if "weekly-exercise" in s:
        return "weekly-exercise"
    if re.match(r"^m\d-discussion-forum-", s):
        return "module-discussion"
    return "course-ops"


def detect_language(text: str) -> str:
    if not text or not text.strip():
        return "und"
    try:
        return detect(text)
    except LangDetectException:
        return "und"


def _parse_forum_dir(name: str) -> tuple[str, str] | None:
    m = re.match(r"^(\d+)_(.+)$", name)
    if not m:
        return None
    return m.group(1), m.group(2)


def flatten_corpus(corpus_root: Path, out_path: Path) -> int:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    count = 0
    with out_path.open("w", encoding="utf-8") as out:
        for forum_dir in sorted(p for p in corpus_root.iterdir() if p.is_dir()):
            parsed = _parse_forum_dir(forum_dir.name)
            if not parsed:
                continue
            forum_id, forum_slug = parsed
            forum_category = classify_forum(forum_slug)
            for json_path in sorted(forum_dir.glob("*.json")):
                if json_path.name.startswith("_"):
                    continue
                with json_path.open(encoding="utf-8") as f:
                    data = json.load(f)
                discussion_id = str(data.get("discussion_id") or "")
                discussion_subject = data.get("subject") or ""
                forum_name = data.get("forum_name") or ""
                for i, post in enumerate(data.get("posts") or []):
                    text = post.get("content_text") or ""
                    record = {
                        "post_id": post.get("post_id"),
                        "forum_id": forum_id,
                        "forum_name": forum_name,
                        "forum_slug": forum_slug,
                        "forum_category": forum_category,
                        "discussion_id": discussion_id,
                        "discussion_subject": discussion_subject,
                        "post_index": i,
                        "is_thread_starter": i == 0,
                        "author_name": post.get("author_name"),
                        "author_url": post.get("author_url"),
                        "posted_at": post.get("posted_at"),
                        "content_text": text,
                        "permalink": post.get("permalink"),
                        "language_guess": detect_language(text),
                    }
                    out.write(json.dumps(record, ensure_ascii=False) + "\n")
                    count += 1
    return count


def main() -> None:
    corpus_root = Path(__file__).parent.parent
    out = corpus_root / "insights" / "data" / "posts.jsonl"
    n = flatten_corpus(corpus_root, out)
    print(f"flattened {n} posts to {out}")


if __name__ == "__main__":
    main()
