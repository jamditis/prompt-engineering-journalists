#!/bin/bash
# batch-process.sh
# Process multiple articles through Claude
#
# USAGE:
#   ./batch-process.sh /path/to/articles/
#
# REQUIREMENTS:
#   - Claude Code CLI installed (claude)
#   - A directory containing .html or .txt files
#
# WHAT IT DOES:
#   1. Finds all HTML/TXT files in the specified directory
#   2. Processes each one with Claude
#   3. Saves summaries to an output directory

# --- Configuration ---
PROMPT="Summarize this article in 2-3 sentences for a news digest."
OUTPUT_DIR="./summaries"

# --- Input validation ---
if [ -z "$1" ]; then
    echo "Error: No directory provided"
    echo "Usage: ./batch-process.sh /path/to/articles/"
    exit 1
fi

if [ ! -d "$1" ]; then
    echo "Error: Directory not found: $1"
    exit 1
fi

# --- Setup ---
mkdir -p "$OUTPUT_DIR"

# Count files to process
FILE_COUNT=$(find "$1" -maxdepth 1 -type f \( -name "*.html" -o -name "*.txt" \) | wc -l | tr -d ' ')

if [ "$FILE_COUNT" -eq 0 ]; then
    echo "No .html or .txt files found in $1"
    exit 1
fi

echo "Found $FILE_COUNT files to process"
echo "Output directory: $OUTPUT_DIR"
echo "---"

# --- Process each file ---
PROCESSED=0

for FILE in "$1"/*.html "$1"/*.txt; do
    # Skip if no matches (glob didn't expand)
    [ -e "$FILE" ] || continue

    FILENAME=$(basename "$FILE")
    OUTPUT_FILE="$OUTPUT_DIR/${FILENAME%.*}-summary.txt"

    echo "Processing: $FILENAME"

    # Read and process
    CONTENT=$(cat "$FILE")

    claude -p "$PROMPT

---
$CONTENT" > "$OUTPUT_FILE"

    PROCESSED=$((PROCESSED + 1))
    echo "  -> Saved to: $OUTPUT_FILE"
done

echo "---"
echo "Done. Processed $PROCESSED files."

# --- Tips for students ---
#
# To modify this script:
#
# 1. Change the PROMPT variable to get different outputs
#    Example: "Extract all quotes from this article with speaker attribution"
#
# 2. Add more file types by editing the find command:
#    find "$1" -type f \( -name "*.html" -o -name "*.txt" -o -name "*.md" \)
#
# 3. Add a delay between requests to avoid rate limits:
#    Add this line after each claude call: sleep 2
#
# 4. Process subdirectories too:
#    Remove -maxdepth 1 from the find command
