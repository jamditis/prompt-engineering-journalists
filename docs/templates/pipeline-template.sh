#!/bin/bash

# ==============================================================================
# TEMPLATE: Data processing pipeline
#
# Usage: ./pipeline-template.sh [options]
#
# This script provides a structure for fetch-process-output workflows.
# Customize each section for your specific use case.
# ==============================================================================

set -euo pipefail  # Exit on error, undefined vars, pipe failures

# ------------------------------------------------------------------------------
# CONFIGURATION
# Set your defaults here. Override with environment variables.
# ------------------------------------------------------------------------------

# Input/output paths
INPUT_DIR="${INPUT_DIR:-./input}"
OUTPUT_DIR="${OUTPUT_DIR:-./output}"
LOG_FILE="${LOG_FILE:-./pipeline.log}"

# API configuration (if needed)
API_URL="${API_URL:-https://api.example.com}"
API_KEY="${API_KEY:-}"

# Processing options
BATCH_SIZE="${BATCH_SIZE:-100}"
DRY_RUN="${DRY_RUN:-false}"

# ------------------------------------------------------------------------------
# HELPER FUNCTIONS
# ------------------------------------------------------------------------------

log() {
    # Log message with timestamp
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] $1" | tee -a "$LOG_FILE"
}

error() {
    # Log error and exit
    log "ERROR: $1"
    exit 1
}

check_command() {
    # Verify a required command exists
    if ! command -v "$1" &> /dev/null; then
        error "Required command not found: $1"
    fi
}

# ------------------------------------------------------------------------------
# VALIDATION
# Check prerequisites before running.
# ------------------------------------------------------------------------------

validate() {
    log "Validating prerequisites..."

    # Check required commands
    check_command "curl"
    check_command "jq"
    # Add other required commands here

    # Check required environment variables
    if [[ -z "$API_KEY" ]]; then
        error "API_KEY environment variable is required"
    fi

    # Check input directory exists
    if [[ ! -d "$INPUT_DIR" ]]; then
        error "Input directory does not exist: $INPUT_DIR"
    fi

    # Create output directory if needed
    mkdir -p "$OUTPUT_DIR"

    log "Validation complete"
}

# ------------------------------------------------------------------------------
# FETCH STAGE
# Retrieve data from source (API, file, database, etc.)
# ------------------------------------------------------------------------------

fetch() {
    log "Starting fetch stage..."

    # Example: Fetch from API
    # local response=$(curl -s -H "Authorization: Bearer $API_KEY" "$API_URL/data")

    # Example: Read from file
    # local data=$(cat "$INPUT_DIR/source.json")

    # Your fetch logic here
    # ...

    log "Fetch complete"
}

# ------------------------------------------------------------------------------
# PROCESS STAGE
# Transform, filter, or analyze the data.
# ------------------------------------------------------------------------------

process() {
    log "Starting process stage..."

    # Example: Process with jq
    # cat "$INPUT_DIR/data.json" | jq '.items[] | select(.active == true)' > "$OUTPUT_DIR/filtered.json"

    # Example: Loop through files
    # for file in "$INPUT_DIR"/*.json; do
    #     local filename=$(basename "$file")
    #     log "Processing: $filename"
    #     # Process each file
    # done

    # Your processing logic here
    # ...

    log "Process complete"
}

# ------------------------------------------------------------------------------
# OUTPUT STAGE
# Save results to destination.
# ------------------------------------------------------------------------------

output() {
    log "Starting output stage..."

    if [[ "$DRY_RUN" == "true" ]]; then
        log "Dry run - skipping output"
        return
    fi

    # Example: Write JSON output
    # echo "$result" > "$OUTPUT_DIR/result.json"

    # Example: Upload to server
    # curl -X POST -d @"$OUTPUT_DIR/result.json" "$API_URL/upload"

    # Your output logic here
    # ...

    log "Output complete"
}

# ------------------------------------------------------------------------------
# CLEANUP
# Remove temporary files, close connections, etc.
# ------------------------------------------------------------------------------

cleanup() {
    log "Cleaning up..."

    # Remove temporary files
    # rm -f "$OUTPUT_DIR"/*.tmp

    # Your cleanup logic here
    # ...

    log "Cleanup complete"
}

# Ensure cleanup runs on exit
trap cleanup EXIT

# ------------------------------------------------------------------------------
# MAIN
# ------------------------------------------------------------------------------

main() {
    log "Pipeline started"
    log "Input: $INPUT_DIR"
    log "Output: $OUTPUT_DIR"

    validate
    fetch
    process
    output

    log "Pipeline completed successfully"
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --dry-run)
            DRY_RUN="true"
            shift
            ;;
        --input)
            INPUT_DIR="$2"
            shift 2
            ;;
        --output)
            OUTPUT_DIR="$2"
            shift 2
            ;;
        --help)
            echo "Usage: $0 [--dry-run] [--input DIR] [--output DIR]"
            exit 0
            ;;
        *)
            error "Unknown option: $1"
            ;;
    esac
done

main
