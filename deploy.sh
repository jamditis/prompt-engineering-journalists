#!/bin/bash
# Deploy docs/ to Cloudflare Pages
# Usage: ./deploy.sh
# Or with a message: ./deploy.sh "add module 3 exercise"

set -e

MSG="${1:-update site}"
CF_TOKEN=$(~/.claude/pass-get claude/api/cloudflare-full)

echo "Deploying docs/ to Cloudflare Pages..."
CLOUDFLARE_API_TOKEN="$CF_TOKEN" wrangler pages deploy docs/ \
  --project-name=prompt-engineering-journalists \
  --branch=gh-pages \
  --commit-message="$MSG"
