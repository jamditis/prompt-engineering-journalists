#!/usr/bin/env bash
# Fails if student forum exports or course archives are in the repo.
# They hold students' names and posts, and this repo is public.
#   student-data-guard.sh           check every tracked file (CI)
#   student-data-guard.sh --staged  check the files staged for commit (pre-commit hook)
set -euo pipefail

list_files() {
  # -z gives literal names; default output quotes non-ASCII names and would slip past the checks.
  if [ "${1:-}" = "--staged" ]; then
    git diff --cached --name-only -z --diff-filter=ACMR
  else
    git ls-files -z
  fi
}

blocked() {
  local f=$1 lower
  lower=$(printf '%s' "$f" | tr '[:upper:]' '[:lower:]')
  # Course archives are blocked anywhere, including inside the allowed folders.
  case $lower in *.zip) return 0 ;; esac
  [[ $f =~ ^[0-9]{4}-student-UGC/ ]] || return 1
  case ${f#*/} in
    CLAUDE.md | README.md) return 1 ;;
    # Inside insights/, only the code may be committed, never the built data.
    insights/data/* | insights/dashboard/data/*) [[ $f == */.keep ]] && return 1 || return 0 ;;
    docs/* | insights/*) return 1 ;;
  esac
  return 0
}

bad=()
while IFS= read -r -d '' f; do
  if blocked "$f"; then bad+=("$f"); fi
done < <(list_files "${1:-}")

if [ ${#bad[@]} -gt 0 ]; then
  echo "student-data-guard: these files may hold student data and must stay out of this public repo:" >&2
  printf '  %s\n' "${bad[@]}" >&2
  echo "Keep raw forum exports and course archives offline or in private storage." >&2
  exit 1
fi
echo "student-data-guard: OK"
