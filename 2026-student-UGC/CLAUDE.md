# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this directory is

This is a static export of student-generated content (UGC) from the Knight Center course "Advanced prompt engineering for journalists" (course id 172 on kccourses.org, a Moodle instance). It contains every forum, discussion thread, and post produced by participants during the spring 2026 cohort taught by Joe Amditis.

There is no application here — no build, test, or lint. The directory is a data archive. Tasks against it are typically reading, search, summarization, theme extraction, quoting, or quantitative analysis of student responses.

The parent directory (`prompt-engineering-journalists/`) holds the course materials themselves (modules, exercises, syllabus). This directory holds the participants' answers and conversations.

## Layout

The top-level `_manifest.json` is the index for everything. It lists 21 forums and, for each forum, every discussion thread with its id, subject, post count, and source URL.

Each forum has its own folder named `{forum_id}_{slugified-forum-name}/`. Inside each forum folder:

- `_forum_index.json` — metadata for that forum, plus a list of every thread.
- One `{discussion_id}_{slugified-subject}.json` per thread — structured post data: author name and profile URL, ISO-8601 timestamp, raw text, rendered HTML, permalink, attachments. Threads can have multiple posts (original + replies); the `posts` array preserves order.
- One `{discussion_id}_{slugified-subject}.md` per thread — the same content rendered as readable markdown with `## Post N:` sections.

The JSON and MD files for a discussion are paired by id and slug. Slugs lowercase the subject and replace non-alphanumerics with dashes, so subjects with apostrophes, accents, or punctuation get collapsed (e.g. `n-o-estou-conseguindo-configurar-o-gemini-cli` for a Portuguese subject).

## Forum categories

The 21 forums fall into a few groups, identifiable by the slug:

- **Course operations:** `course-announcements`, `participant-forum-...`, `questions-for-the-instructor`, `questions-about-the-course-platform`, `technical-questions-for-the-instructor`.
- **Module discussion forums:** prefixed `m1-`, `m2-`, `m3-`, `m4-`. These are the substantive student responses to weekly prompts (e.g. `m1-discussion-forum-1-your-current-ai-workflow`, `m2-discussion-forum-2-customization-vs-flexibility-trade-offs`).
- **Weekly exercises:** `m1-weekly-exercise`, `m2-weekly-exercise`, `m3-weekly-exercise`, `m4-weekly-exercise`. Students post their hands-on work here.
- **Final project:** `final-project-proposal`, `final-project-submission`.

The discussion forums (m1d1, m1d2, m2d1, etc.) are the densest source of student perspective; the weekly-exercise forums contain longer, project-style writeups.

## Working with this data

- For reading content, prefer the `.md` files — they are human-readable and quotable as-is.
- For programmatic work (filtering by author, counting posts, sorting by date, extracting permalinks), use the `.json` files. Timestamps are ISO-8601 with timezone, so they sort lexicographically.
- The `posts` array in a discussion JSON includes both the original post and replies in order; the first element is the thread starter.
- Some posts are not in English (Portuguese, Spanish, French appear). Don't assume English when summarizing — preserve the original where it matters and translate explicitly when asked.
- Author names and profile URLs are real participants. When sharing or summarizing publicly, treat names as identifying information and follow the user's instructions about anonymization on a per-task basis.
- Content is frozen at export time. Permalinks point to kccourses.org but the course platform is gated; treat the local files as the source of truth.

## Conventions to follow when writing about this content

These come from the parent CLAUDE.md and apply here too:

- Sentence case for all headings, headlines, and labels — never title case.
- Watch for AI-slop phrases (`comprehensive`, `robust`, `transformative`, `leveraging`, `seamlessly`, `not just X but Y`, `fundamentally transforms`). The parent `CLAUDE.md` has the full list; apply it to any summaries or reports drawn from this corpus.
- When quoting students, quote verbatim. Don't smooth their grammar.
