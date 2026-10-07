#!/usr/bin/env bash
# Fails if student forum exports or course archives are in the repo.
# They hold students' names and posts, and this repo is public.
#   student-data-guard.sh           check every tracked file (CI)
#   student-data-guard.sh --staged  check the files staged for commit (pre-commit hook)
set -euo pipefail

if [ "${1:-}" = "--staged" ]; then
  files=$(git diff --cached --name-only --diff-filter=ACMR)
else
  files=$(git ls-files)
fi

ugc='^[0-9]{4}-student-UGC/'
bad=$(printf '%s\n' "$files" | grep -E \
  -e "${ugc}[^/]+$" \
  -e "${ugc}[^/]+/" \
  -e '\.zip$' \
  | grep -vE \
  -e "${ugc}(CLAUDE|README)\.md$" \
  -e "${ugc}docs/" \
  -e "${ugc}insights/" \
  || true)
# Inside insights/, only the code may be committed, never the built data.
bad+=$'\n'$(printf '%s\n' "$files" | grep -E "${ugc}insights/(data|dashboard/data)/" | grep -vE '/\.keep$' || true)
bad=$(printf '%s\n' "$bad" | sed '/^$/d')

if [ -n "$bad" ]; then
  echo "student-data-guard: these files may hold student data and must stay out of this public repo:" >&2
  printf '%s\n' "$bad" | sed 's/^/  /' >&2
  echo "Keep raw forum exports and course archives offline or in private storage." >&2
  exit 1
fi
echo "student-data-guard: OK"
