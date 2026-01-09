#!/bin/bash
# summarize-article.sh
# A starter script for summarizing articles with Claude
#
# USAGE:
#   ./summarize-article.sh path/to/article.html
#
# REQUIREMENTS:
#   - Claude Code CLI installed (claude)
#   - The article file must exist
#
# WHAT IT DOES:
#   1. Reads an HTML or text file
#   2. Sends it to Claude with a summarization prompt
#   3. Outputs the summary to terminal (or a file if you modify it)

# --- Configuration ---
# Change this prompt to customize the summary style
PROMPT="Summarize this article in 3 bullet points. Focus on: who, what, and why it matters."

# --- Input validation ---
if [ -z "$1" ]; then
    echo "Error: No file provided"
    echo "Usage: ./summarize-article.sh path/to/article.html"
    exit 1
fi

if [ ! -f "$1" ]; then
    echo "Error: File not found: $1"
    exit 1
fi

# --- Main process ---

# Read the file content
ARTICLE_CONTENT=$(cat "$1")

# Send to Claude
# The -p flag runs a single prompt without interactive mode
echo "Summarizing: $1"
echo "---"

claude -p "$PROMPT

---
$ARTICLE_CONTENT"

# --- Optional: Save to file ---
# Uncomment these lines to save the summary to a file:
#
# OUTPUT_FILE="${1%.html}-summary.txt"
# claude -p "$PROMPT

# ---
# $ARTICLE_CONTENT" > "$OUTPUT_FILE"
# echo "Summary saved to: $OUTPUT_FILE"
