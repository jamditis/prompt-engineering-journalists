import json
from pathlib import Path

from insights.slice import slice_posts


def test_slice_posts_creates_balanced_slices(tmp_path):
    src = tmp_path / "posts.jsonl"
    src.write_text(
        "\n".join(json.dumps({"post_id": f"p{i}"}) for i in range(25)),
        encoding="utf-8",
    )
    out_dir = tmp_path / "slices"
    paths = slice_posts(src, out_dir, n_slices=4)
    assert len(paths) == 4
    counts = [len(p.read_text(encoding="utf-8").splitlines()) for p in paths]
    # 25 across 4 slices => sizes are 7, 6, 6, 6 (within ±1)
    assert sum(counts) == 25
    assert max(counts) - min(counts) <= 1


def test_slice_posts_handles_fewer_than_slices(tmp_path):
    src = tmp_path / "posts.jsonl"
    src.write_text("\n".join(json.dumps({"post_id": f"p{i}"}) for i in range(3)), encoding="utf-8")
    out_dir = tmp_path / "slices"
    paths = slice_posts(src, out_dir, n_slices=10)
    # only 3 slices written (others would be empty)
    assert len(paths) == 3


def test_slice_posts_writes_jsonl(tmp_path):
    src = tmp_path / "posts.jsonl"
    src.write_text("\n".join(json.dumps({"post_id": f"p{i}"}) for i in range(6)), encoding="utf-8")
    out_dir = tmp_path / "slices"
    paths = slice_posts(src, out_dir, n_slices=3)
    for p in paths:
        for line in p.read_text(encoding="utf-8").splitlines():
            assert "post_id" in json.loads(line)
