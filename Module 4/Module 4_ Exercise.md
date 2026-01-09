# Module 4: CLI workflows for newsrooms

## Exercise: Build an article-to-newsletter pipeline

In this exercise, you'll build a pipeline that:
1. Fetches an article from the web
2. Extracts the main content
3. Summarizes it with Claude
4. Formats it for a newsletter

By the end, you'll have a reusable script you can run on any URL.

---

## Prerequisites

Before starting, you need:

- **A terminal.** On macOS, use Terminal or iTerm. On Windows, use WSL (Windows Subsystem for Linux).
- **An Anthropic API key.** Get one at https://console.anthropic.com/
- **Basic tools installed.** We'll check these in Step 1.

---

## Step 1: Check your environment

Open your terminal and run these commands to verify your tools are installed:

```bash
# Check if curl is installed
curl --version

# Check if jq is installed
jq --version
```

If any command fails, install the missing tool:

- **macOS:** `brew install jq`
- **Ubuntu/Debian:** `sudo apt install jq`
- **Windows (WSL):** `sudo apt install jq`

Install the readability-cli tool for extracting article content:

```bash
npm install -g @peerless/readability-cli
```

If you don't have npm, install Node.js first: https://nodejs.org/

---

## Step 2: Set up your API key

Create a file to store your API key. Never put API keys directly in scripts.

```bash
# Create a config directory
mkdir -p ~/.config/newsletter-pipeline

# Create the API key file (replace with your actual key)
echo "YOUR_API_KEY_HERE" > ~/.config/newsletter-pipeline/anthropic_key

# Restrict permissions so only you can read it
chmod 600 ~/.config/newsletter-pipeline/anthropic_key
```

Test that you can read the key:

```bash
cat ~/.config/newsletter-pipeline/anthropic_key
```

You should see your API key printed.

---

## Step 3: Fetch an article

Pick any news article URL. We'll use this example:

```bash
# Fetch the HTML and save it
curl -s "https://www.theverge.com/2024/1/15/24038711/apple-vision-pro-release-date-preorder" > /tmp/article.html

# Check that it worked
head -20 /tmp/article.html
```

You should see HTML content.

---

## Step 4: Extract the article text

The readability tool removes ads, navigation, and other junk:

```bash
readable /tmp/article.html --low-confidence=keep
```

This outputs the clean article text. Let's save it:

```bash
readable /tmp/article.html --low-confidence=keep > /tmp/article.txt

# Check the result
head -30 /tmp/article.txt
```

---

## Step 5: Summarize with Claude

Now we'll send the article to Claude's API. Create this command:

```bash
API_KEY=$(cat ~/.config/newsletter-pipeline/anthropic_key)
ARTICLE=$(cat /tmp/article.txt)

curl -s https://api.anthropic.com/v1/messages \
  -H "Content-Type: application/json" \
  -H "x-api-key: $API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -d "{
    \"model\": \"claude-sonnet-4-20250514\",
    \"max_tokens\": 300,
    \"messages\": [{
      \"role\": \"user\",
      \"content\": \"Summarize this article in 2-3 sentences for a newsletter. Be direct, no preamble:\\n\\n$ARTICLE\"
    }]
  }"
```

This returns JSON. Extract just the summary text:

```bash
API_KEY=$(cat ~/.config/newsletter-pipeline/anthropic_key)
ARTICLE=$(cat /tmp/article.txt)

curl -s https://api.anthropic.com/v1/messages \
  -H "Content-Type: application/json" \
  -H "x-api-key: $API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -d "{
    \"model\": \"claude-sonnet-4-20250514\",
    \"max_tokens\": 300,
    \"messages\": [{
      \"role\": \"user\",
      \"content\": \"Summarize this article in 2-3 sentences for a newsletter. Be direct, no preamble:\\n\\n$ARTICLE\"
    }]
  }" | jq -r '.content[0].text'
```

---

## Step 6: Format for newsletter

Let's add a headline extraction and format the output as a newsletter item:

```bash
API_KEY=$(cat ~/.config/newsletter-pipeline/anthropic_key)
ARTICLE=$(cat /tmp/article.txt)
URL="https://www.theverge.com/2024/1/15/24038711/apple-vision-pro-release-date-preorder"

SUMMARY=$(curl -s https://api.anthropic.com/v1/messages \
  -H "Content-Type: application/json" \
  -H "x-api-key: $API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -d "{
    \"model\": \"claude-sonnet-4-20250514\",
    \"max_tokens\": 300,
    \"messages\": [{
      \"role\": \"user\",
      \"content\": \"Summarize this article in 2-3 sentences for a newsletter. Be direct, no preamble:\\n\\n$ARTICLE\"
    }]
  }" | jq -r '.content[0].text')

# Format as newsletter item
echo "---"
echo ""
echo "$SUMMARY"
echo ""
echo "Read more: $URL"
echo ""
echo "---"
```

---

## Step 7: Create a reusable script

Save everything as a script you can run on any URL.

Create a file called `summarize-article.sh`:

```bash
#!/bin/bash

# Usage: ./summarize-article.sh <url>

set -e  # Exit on any error

URL="$1"

if [ -z "$URL" ]; then
    echo "Usage: ./summarize-article.sh <url>"
    exit 1
fi

# Load API key
API_KEY=$(cat ~/.config/newsletter-pipeline/anthropic_key)

# Fetch and extract article
echo "Fetching article..." >&2
curl -s "$URL" > /tmp/article.html
readable /tmp/article.html --low-confidence=keep > /tmp/article.txt

# Check if we got content
if [ ! -s /tmp/article.txt ]; then
    echo "Error: Could not extract article content" >&2
    exit 1
fi

ARTICLE=$(cat /tmp/article.txt)

# Summarize with Claude
echo "Summarizing..." >&2
SUMMARY=$(curl -s https://api.anthropic.com/v1/messages \
  -H "Content-Type: application/json" \
  -H "x-api-key: $API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -d "{
    \"model\": \"claude-sonnet-4-20250514\",
    \"max_tokens\": 300,
    \"messages\": [{
      \"role\": \"user\",
      \"content\": \"Summarize this article in 2-3 sentences for a newsletter. Be direct, no preamble:\\n\\n$ARTICLE\"
    }]
  }" | jq -r '.content[0].text')

# Output formatted item
echo "---"
echo ""
echo "$SUMMARY"
echo ""
echo "Read more: $URL"
echo ""
echo "---"
```

Make it executable and test it:

```bash
chmod +x summarize-article.sh
./summarize-article.sh "https://www.theverge.com/2024/1/15/24038711/apple-vision-pro-release-date-preorder"
```

---

## Step 8: Process multiple articles

Create a file called `urls.txt` with several article URLs (one per line).

Then batch process them:

```bash
while read url; do
    ./summarize-article.sh "$url"
    sleep 1  # Pause between requests to avoid rate limits
done < urls.txt > newsletter-items.md
```

The output file `newsletter-items.md` now contains formatted summaries of all articles.

---

## Step 9: Schedule with cron (optional)

To run this automatically every morning:

```bash
# Open your crontab
crontab -e

# Add this line to run at 7 AM every day
0 7 * * * /path/to/summarize-article.sh "https://example.com/rss-to-process" >> ~/newsletter-items.md
```

---

## Troubleshooting

**"curl: command not found"**
Install curl with your package manager.

**"jq: command not found"**
Install jq: `brew install jq` (macOS) or `apt install jq` (Linux).

**"readable: command not found"**
Install with npm: `npm install -g @peerless/readability-cli`

**API errors from Claude**
Check that your API key is correct and has credit. Print the full response (remove the `| jq` part) to see error messages.

**Empty article text**
Some websites block scrapers. Try a different article from a news site that allows scraping.

---

## What you built

You now have:

1. A script that turns any article URL into a newsletter-ready summary
2. Experience with piping data between CLI tools
3. A pattern you can adapt for other workflows

Next steps to consider:
- Add error handling for rate limits
- Output to different formats (HTML, Markdown, plain text)
- Integrate with your newsletter platform's API
- Add a human review step before publishing

---

## Submit your work

Post in the exercise forum:

1. A screenshot of your script running successfully
2. One example newsletter item it generated
3. One idea for how you'd modify this pipeline for your newsroom
