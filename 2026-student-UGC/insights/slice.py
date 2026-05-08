"""Split posts.jsonl into N roughly-equal slices for parallel subagent processing."""
from __future__ import annotations

import json
from pathlib import Path


def slice_posts(src: Path, out_dir: Path, n_slices: int) -> list[Path]:
    lines = [line for line in src.read_text(encoding="utf-8").splitlines() if line.strip()]
    if not lines:
        return []
    out_dir.mkdir(parents=True, exist_ok=True)
    n_slices = min(n_slices, len(lines))
    paths: list[Path] = []
    # round-robin assignment keeps slices balanced
    buckets: list[list[str]] = [[] for _ in range(n_slices)]
    for i, line in enumerate(lines):
        buckets[i % n_slices].append(line)
    for i, bucket in enumerate(buckets):
        if not bucket:
            continue
        path = out_dir / f"slice_{i:02d}.jsonl"
        path.write_text("\n".join(bucket) + "\n", encoding="utf-8")
        paths.append(path)
    return paths


def main() -> None:
    corpus_root = Path(__file__).parent.parent
    src = corpus_root / "insights" / "data" / "posts.jsonl"
    out_dir = corpus_root / "insights" / "data" / "slices"
    paths = slice_posts(src, out_dir, n_slices=10)
    print(f"wrote {len(paths)} slices to {out_dir}")


if __name__ == "__main__":
    main()
