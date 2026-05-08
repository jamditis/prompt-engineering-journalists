"""Phase 3a: themes aggregation."""
from __future__ import annotations

import json
from pathlib import Path
from collections import defaultdict


CANONICAL_THEMES = (
    "coding-help", "data-analysis", "transcription", "multilingual-workflows",
    "fact-checking", "scraping", "cli-vs-web", "cost-management", "context-files",
    "claude-md", "skills-and-hooks", "subagents", "pipelines", "rag-and-grounding",
    "safety-and-bias", "audience-engagement", "newsroom-adoption", "product-development",
    "audio-and-podcast", "video-and-image", "pdf-extraction", "ocr", "email-summary",
    "social-media-content", "metrics-and-analytics", "legal-and-court-docs",
    "campaign-finance", "accessibility-alt-text", "translation", "editing-and-style",
)

CANONICAL_LABELS = {
    "coding-help": "AI for coding help",
    "data-analysis": "Data analysis",
    "transcription": "Transcription",
    "multilingual-workflows": "Multilingual workflows",
    "fact-checking": "Fact-checking",
    "scraping": "Web scraping",
    "cli-vs-web": "CLI tools vs web chat",
    "cost-management": "Cost management",
    "context-files": "Context files",
    "claude-md": "CLAUDE.md and project context",
    "skills-and-hooks": "Skills and hooks",
    "subagents": "Subagents",
    "pipelines": "Pipelines and automation",
    "rag-and-grounding": "RAG and source grounding",
    "safety-and-bias": "Safety and bias",
    "audience-engagement": "Audience engagement",
    "newsroom-adoption": "Newsroom adoption",
    "product-development": "Product development",
    "audio-and-podcast": "Audio and podcast",
    "video-and-image": "Video and image",
    "pdf-extraction": "PDF extraction",
    "ocr": "OCR",
    "email-summary": "Email summary",
    "social-media-content": "Social media content",
    "metrics-and-analytics": "Metrics and analytics",
    "legal-and-court-docs": "Legal and court documents",
    "campaign-finance": "Campaign finance",
    "accessibility-alt-text": "Accessibility and alt text",
    "translation": "Translation",
    "editing-and-style": "Editing and style",
}


def _iter_extractions(extracted_dir: Path):
    for path in sorted(extracted_dir.glob("*.json")):
        yield path.stem, json.loads(path.read_text(encoding="utf-8"))


def collect_freeform(extracted_dir: Path) -> list[str]:
    seen: set[str] = set()
    for _, rec in _iter_extractions(extracted_dir):
        for t in rec.get("theme_freeform") or []:
            if t and isinstance(t, str):
                seen.add(t.strip())
    return sorted(seen)


def build_themes_json(extracted_dir: Path, emergent: list[dict]) -> list[dict]:
    """Combine canonical themes (from posts.themes) and emergent themes (from model).
    Posts whose freeform tag matches an emergent theme's `merges` are pulled into that theme.
    """
    canonical_members: dict[str, list[str]] = defaultdict(list)
    canonical_quotes: dict[str, list[str]] = defaultdict(list)

    emergent_lookup: dict[str, str] = {}  # freeform_string -> emergent_theme_id
    for et in emergent:
        for merge in et.get("merges", []):
            emergent_lookup[merge.strip()] = et["theme_id"]
    emergent_members: dict[str, list[str]] = defaultdict(list)
    emergent_quotes: dict[str, list[str]] = defaultdict(list)

    for post_id, rec in _iter_extractions(extracted_dir):
        for t in rec.get("themes") or []:
            if t in CANONICAL_THEMES:
                canonical_members[t].append(post_id)
        for ff in rec.get("theme_freeform") or []:
            mapped = emergent_lookup.get(ff.strip())
            if mapped:
                emergent_members[mapped].append(post_id)
        for q in rec.get("quotable_lines") or []:
            topic = q.get("topic")
            if topic in CANONICAL_THEMES:
                canonical_quotes[topic].append(post_id)
            elif topic in emergent_lookup:
                emergent_quotes[emergent_lookup[topic]].append(post_id)

    result: list[dict] = []
    for theme_id in CANONICAL_THEMES:
        members = sorted(set(canonical_members[theme_id]))
        if not members:
            continue
        result.append({
            "theme_id": theme_id,
            "label": CANONICAL_LABELS.get(theme_id, theme_id),
            "description": "",
            "is_emergent": False,
            "post_ids": members,
            "member_count": len(members),
            "sample_quote_ids": sorted(set(canonical_quotes[theme_id]))[:6],
            "ai_summary": "",
        })

    for et in emergent:
        members = sorted(set(emergent_members[et["theme_id"]]))
        result.append({
            "theme_id": et["theme_id"],
            "label": et.get("label", et["theme_id"]),
            "description": et.get("description", ""),
            "is_emergent": True,
            "post_ids": members,
            "member_count": len(members),
            "sample_quote_ids": sorted(set(emergent_quotes[et["theme_id"]]))[:6],
            "ai_summary": "",
        })

    result.sort(key=lambda t: -t["member_count"])
    return result


def main() -> None:
    repo_root = Path(__file__).parent.parent.parent
    extracted = repo_root / "insights" / "data" / "extracted"
    print(json.dumps(collect_freeform(extracted), indent=2))


if __name__ == "__main__":
    main()
