"""Phase 2.5: validate that every post has a valid extraction."""
from __future__ import annotations

import json
import sys
from pathlib import Path

from insights.lib.schema import validate_extraction


def validate_corpus(posts_path: Path, extracted_dir: Path) -> list[str]:
    errors: list[str] = []
    post_ids: set[str] = set()
    for line in posts_path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        record = json.loads(line)
        post_id = record["post_id"]
        post_ids.add(post_id)
        ext_path = extracted_dir / f"{post_id}.json"
        if not ext_path.exists():
            errors.append(f"{post_id}: missing extraction file")
            continue
        try:
            ext = json.loads(ext_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            errors.append(f"{post_id}: extraction file does not parse: {e}")
            continue
        if ext.get("post_id") != post_id:
            errors.append(f"{post_id}: post_id mismatch in extraction file (got {ext.get('post_id')!r})")
        for err in validate_extraction(ext):
            errors.append(f"{post_id}: {err}")

    if extracted_dir.exists():
        for ext_path in extracted_dir.glob("*.json"):
            stem = ext_path.stem
            if stem not in post_ids:
                errors.append(f"{stem}: orphan extraction file (no matching post in posts.jsonl)")

    return errors


def main() -> int:
    repo_root = Path(__file__).parent.parent
    posts = repo_root / "insights" / "data" / "posts.jsonl"
    extracted = repo_root / "insights" / "data" / "extracted"
    errors = validate_corpus(posts, extracted)
    if errors:
        out = repo_root / "insights" / "data" / "validation_errors.json"
        out.write_text(json.dumps(errors, indent=2), encoding="utf-8")
        print(f"FAIL: {len(errors)} validation errors written to {out}")
        for e in errors[:20]:
            print(f"  - {e}")
        return 1
    print(f"OK: validated {len(list(extracted.glob('*.json')))} extraction files")
    return 0


if __name__ == "__main__":
    sys.exit(main())
