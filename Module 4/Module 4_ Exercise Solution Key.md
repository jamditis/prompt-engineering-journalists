# Module 4: CLI workflows for newsrooms — exercise solution key

---

## Model student submission

---

**Discussion post — Exercise 4**

This one clicked for me in a way I didn't expect. I've been hand-copying article summaries into our weekly newsletter for two years. Tuesday I described what I was doing out loud to Claude Code and it built a script that does it for me in about 15 seconds per article.

Here's what I submitted.

---

### 1. Screenshot description / pipeline run

After creating the `newsletter-pipeline` folder and launching Claude Code, I entered plan mode with `/plan` and gave it this description:

> "I want to build a pipeline that takes a news article URL as input, fetches the article, strips out the junk like ads and navigation, summarizes it in 2-3 sentences in a tone suitable for a newsletter, and saves the output to a markdown file with today's date in the filename. I want to be able to run this from the command line by passing in a URL. Plan this out — don't build anything yet."

Claude presented a four-stage plan in the terminal: (1) use `curl` to fetch the raw HTML, (2) pipe it through `npx @mozilla/readability-cli` to strip navigation and ads, (3) call the Anthropic API via `curl` with the extracted text as the prompt, (4) write the formatted output to a dated `.md` file. It flagged the API key handling up front — read from `$ANTHROPIC_API_KEY`, never hardcoded. I told it to proceed.

It built `pipeline.sh` and walked me through what each section did when I asked. Setting the environment variable required adding `export ANTHROPIC_API_KEY="your-key-here"` to my `.zshrc` and running `source ~/.zshrc`. Once that was done, I ran:

```
./pipeline.sh "https://www.nj.com/middlesex/2026/02/south-brunswick-council-approves-12m-stormwater-plan.html"
```

The terminal showed:

```
Fetching article...
Extracting content...
Summarizing with Claude...
Saving to newsletter-2026-02-18.md
Done.
```

The output file was sitting in the folder 14 seconds after I hit enter.

---

### 2. Example newsletter item generated

The test article was a South Brunswick, NJ city council story about a stormwater infrastructure vote. After one round of iteration (described below), the pipeline produced this:

---

**South Brunswick approves $12M stormwater plan after years of basement flooding complaints**

South Brunswick's town council voted 5-2 Tuesday to approve a $12 million stormwater infrastructure overhaul targeting six flood-prone neighborhoods on the borough's east side. The project, funded through a state infrastructure grant and a modest increase to the municipal stormwater fee, is expected to begin construction in spring 2027. Two council members dissented, citing concerns about the fee increase's impact on fixed-income residents.

[Source](https://www.nj.com/middlesex/2026/02/south-brunswick-council-approves-12m-stormwater-plan.html)

---

That's a newsletter item I'd actually use without editing it.

---

### 3. Iteration: what changed

**First output:**

The initial summary read like a press release abstract:

> "The South Brunswick Township Council approved Resolution 2026-87 authorizing expenditure of $12,000,000 for stormwater infrastructure improvements across six residential districts. The resolution passed with a 5-2 vote. Funding will be sourced from a New Jersey Infrastructure Bank grant and an increase to the existing stormwater utility fee."

It was accurate. It was also dead on arrival for a newsletter — no context, no stakes, reads like it was written for a government agenda packet.

**What I told Claude:**

> "The summary reads like it was copied from a meeting agenda. I want newsletter style — lead with the most newsworthy fact, include what it means for residents, and write it in plain English. Rewrite the prompt section of the script to produce that instead."

**What changed:**

Claude rewrote the system prompt in the API call from a generic "summarize this article in 2-3 sentences" instruction to something more specific. The new version told the model to identify the single most important fact for a local audience, explain what it means for residents in plain terms, include any vote count or dollar figure if present, and keep the tone conversational rather than formal. It also added a line telling the model not to start with the organization's name.

The difference was immediate. The second run produced the newsletter item above.

---

---

## Grader notes

---

### What strong work looks like

Strong submissions do three things that separate them from adequate ones:

1. **They pick a test article they actually read.** The exercise specifically tells students to test on familiar material. Strong students mention this — "I used an article I'd already read about the county budget vote" — and their iteration notes show they caught a real problem because they knew what the article actually said. Students who tested on a random URL often can't tell whether a bad summary reflects a prompt problem or a hard-to-summarize article.

2. **Their iteration is specific.** Weak submissions say "the first version wasn't great so I asked Claude to make it better." Strong submissions say what was wrong (too formal, missing context, started every summary with the organization name) and what they asked for to fix it. The specificity shows they're exercising editorial judgment, not just running the exercise.

3. **Their newsletter item is publication-ready.** Strong submissions produce output that reads like something from a real newsletter — active verbs, local stakes, plain language. If the example item sounds like a government report, the student didn't iterate enough.

---

### Rubric

| Element | Full credit | Partial credit | No credit |
|---|---|---|---|
| **Screenshot / pipeline run description** (33%) | Clear description of what command was run, what stages appeared in the terminal, and confirmation the output file was created. API key handling mentioned. | Command is shown but terminal output or file creation isn't described. | Screenshot is missing or description is too vague to assess whether the pipeline actually ran. |
| **Newsletter item** (33%) | Reads like actual newsletter copy — leads with newsworthy fact, explains stakes, plain language, plausible as published. | Accurate but reads like an abstract or press release. Some editing would be needed before use. | Clearly unedited first-draft AI output, or not about an actual article. |
| **Iteration description** (33%) | Describes both what the first output looked like and specifically what they said to their CLI tool to fix it. Shows cause and effect. | Describes the problem with the first output but is vague about what the fix was, or vice versa. | Says only "I iterated" with no specifics. |

---

### Sample pipeline script (for grader reference)

This is the kind of script a CLI LLM would realistically produce for this exercise. Not every student's script will look like this — the LLM might use a Node.js wrapper, might use `wget` instead of `curl`, might call a different readability tool — but the core structure should be similar: URL as argument, readability extraction, API call reading key from environment, output to dated file, basic error handling, rate limit sleep.

```bash
#!/bin/bash
# pipeline.sh — article-to-newsletter pipeline
# Usage: ./pipeline.sh "https://example.com/article"
# Requires: ANTHROPIC_API_KEY environment variable, npx, curl, jq

set -e  # exit on error

# ── check for required argument ──────────────────────────────────────────────
if [ -z "$1" ]; then
  echo "Error: no URL provided."
  echo "Usage: ./pipeline.sh \"https://example.com/article\""
  exit 1
fi

URL="$1"

# ── check for API key ─────────────────────────────────────────────────────────
if [ -z "$ANTHROPIC_API_KEY" ]; then
  echo "Error: ANTHROPIC_API_KEY is not set."
  echo "Add this to your ~/.zshrc or ~/.bashrc:"
  echo "  export ANTHROPIC_API_KEY=\"your-key-here\""
  echo "Then run: source ~/.zshrc"
  exit 1
fi

# ── set up output file ────────────────────────────────────────────────────────
DATE=$(date +%Y-%m-%d)
OUTPUT_FILE="newsletter-${DATE}.md"

echo "Fetching article: $URL"

# ── stage 1: fetch and extract article content ────────────────────────────────
# readability-cli strips ads, navigation, and boilerplate from the page
CONTENT=$(npx @mozilla/readability-cli "$URL" 2>/dev/null | \
  python3 -c "import sys, json; data=json.load(sys.stdin); print(data.get('textContent', ''))" \
  2>/dev/null)

if [ -z "$CONTENT" ]; then
  echo "Error: could not extract content from $URL"
  echo "The site may be blocking automated requests, or the URL may be invalid."
  exit 1
fi

echo "Content extracted (${#CONTENT} characters)"
echo "Summarizing with Claude..."

# ── stage 2: summarize via Anthropic API ──────────────────────────────────────
# Truncate content to avoid hitting token limits (first 4000 chars is usually enough)
TRUNCATED="${CONTENT:0:4000}"

SUMMARY=$(curl -s https://api.anthropic.com/v1/messages \
  --header "x-api-key: $ANTHROPIC_API_KEY" \
  --header "anthropic-version: 2023-06-01" \
  --header "content-type: application/json" \
  --data "{
    \"model\": \"claude-3-5-haiku-20241022\",
    \"max_tokens\": 256,
    \"system\": \"You write newsletter summaries for a local news publication. Your readers are local residents, not government insiders. Lead with the single most newsworthy fact. Explain what the story means for residents in plain English. If there is a vote count, dollar figure, or timeline, include it. Keep the tone conversational, not formal. Do not start the summary with the name of an organization or government body. Write 2-3 sentences only.\",
    \"messages\": [{
      \"role\": \"user\",
      \"content\": \"Summarize this article for our newsletter:\\n\\n$TRUNCATED\"
    }]
  }" | python3 -c "import sys, json; data=json.load(sys.stdin); print(data['content'][0]['text'])" \
  2>/dev/null)

if [ -z "$SUMMARY" ]; then
  echo "Error: API call returned empty response. Check your API key and try again."
  exit 1
fi

# ── stage 3: format and save output ──────────────────────────────────────────
{
  echo "## Newsletter item — $DATE"
  echo ""
  echo "$SUMMARY"
  echo ""
  echo "[Source]($URL)"
  echo ""
  echo "---"
  echo ""
} >> "$OUTPUT_FILE"

echo "Saved to $OUTPUT_FILE"
echo ""
echo "--- Preview ---"
cat "$OUTPUT_FILE"

# ── rate limiting pause (for batch use) ───────────────────────────────────────
# 2-second sleep prevents hitting API rate limits when called in a loop
sleep 2
```

And the companion batch script:

```bash
#!/bin/bash
# process-batch.sh — run pipeline on every URL in urls.txt
# Usage: ./process-batch.sh
# Reads from: urls.txt (one URL per line)
# Output: newsletter-draft-YYYY-MM-DD.md (all items collected)

set -e

INPUT_FILE="urls.txt"
DATE=$(date +%Y-%m-%d)
BATCH_OUTPUT="newsletter-draft-${DATE}.md"

if [ ! -f "$INPUT_FILE" ]; then
  echo "Error: $INPUT_FILE not found."
  echo "Create a file called urls.txt with one article URL per line."
  exit 1
fi

# count non-empty lines
TOTAL=$(grep -c '[^[:space:]]' "$INPUT_FILE" || true)
CURRENT=0

echo "Processing $TOTAL URLs from $INPUT_FILE"
echo "Output will be saved to $BATCH_OUTPUT"
echo ""

while IFS= read -r URL || [ -n "$URL" ]; do
  # skip blank lines and comment lines
  [[ -z "$URL" || "$URL" == \#* ]] && continue

  CURRENT=$((CURRENT + 1))
  echo "[$CURRENT/$TOTAL] $URL"

  # run single-article pipeline; append its output to batch file
  ./pipeline.sh "$URL" >> "$BATCH_OUTPUT" 2>&1 || {
    echo "  Warning: pipeline failed for this URL, continuing..."
    echo "## [FAILED] $URL" >> "$BATCH_OUTPUT"
    echo "" >> "$BATCH_OUTPUT"
    echo "---" >> "$BATCH_OUTPUT"
    echo "" >> "$BATCH_OUTPUT"
  }

  # rate limiting — 2 seconds between requests
  if [ "$CURRENT" -lt "$TOTAL" ]; then
    sleep 2
  fi

done < "$INPUT_FILE"

echo ""
echo "Batch complete. $CURRENT items processed."
echo "Draft saved to $BATCH_OUTPUT"
```

---

### Common issues to watch for

**The student didn't use plan mode.** The exercise explicitly requires it — students should describe the workflow and review the plan before approving it. If a submission says nothing about reviewing a plan, or says they just asked Claude to "build the pipeline," they skipped a required step. Ask them to redo Part 1 and describe what the plan review looked like.

**The API key is in the screenshot.** This happens. If a student shares a screenshot showing `ANTHROPIC_API_KEY=sk-ant-...` in the terminal or in the script, let them know gently that they should rotate the key immediately (console.anthropic.com → API Keys → revoke). Don't dock points — it's a learning moment — but flag it clearly.

**The newsletter item reads like an abstract.** This is the most common signal that the student ran the pipeline once and stopped. The first output from a generic summarization prompt almost always sounds like an abstract. If the submitted newsletter item sounds like it was written for an academic paper or a government agenda, the student either didn't iterate or didn't meaningfully direct the iteration. Partial credit; encourage them to go back and describe what editorial changes they want.

**The iteration description is vague.** "I asked it to make the summary better" doesn't show editorial judgment. The point of the iteration step is that students apply their journalism instincts — they recognize something reads wrong and they describe why, specifically. "Too formal" is a start; "leads with the resolution number instead of the impact on residents" is better. Prompt vague submissions to add specifics.

**The script hardcodes the API key.** If the student shares their script and the key is a literal string rather than `$ANTHROPIC_API_KEY` or equivalent, flag it for security and for the exercise requirement — Part 1 explicitly covers API key handling. Ask them to rewrite that section and rotate the key.

**Content extraction failed silently.** Some students will have output files that look fine but are actually just the LLM making up a summary because the extraction step returned empty content. This is hard to catch without seeing the actual article, but a tell is a summary that's generic enough to apply to any story ("the city council voted on a budget measure"). If the newsletter item feels suspiciously non-specific, ask the student what article they ran it on and whether they can verify the summary against the original.

**No mention of rate limiting.** Part 3 is a required step, not optional. If the submission covers the single-article pipeline but doesn't mention adding rate limiting before batch processing, that's incomplete. The sleep between API calls is described explicitly in the exercise — students should be able to say where it ended up in their script.
