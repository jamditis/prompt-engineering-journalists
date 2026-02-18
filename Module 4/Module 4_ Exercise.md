# Module 4: CLI workflows for newsrooms

## Exercise: Build an article-to-newsletter pipeline

In this exercise, you'll describe a pipeline to your CLI LLM and have it build the automation for you. The pipeline:

1. Fetches an article from the web
2. Extracts the main content
3. Summarizes it with AI
4. Formats it for a newsletter

You won't write shell code. You'll describe what you want, review what the LLM builds, test it on an article you already know, and refine it until the output is good enough to actually use. By the end, you'll have a reusable script you can run on any URL.

---

## Prerequisites

Before starting, make sure you have:

- **Claude Code (or Gemini CLI) installed and running.** If you haven't done this yet, return to Module 1.
- **An API key with available credits.** Anthropic API at console.anthropic.com, or Gemini API (free tier) at aistudio.google.com.
- **Node.js installed** (from Module 1).

You'll also need a readability tool installed — this is what strips ads and navigation from web pages before summarizing. Ask your CLI tool to install it for you:

> "I need a command-line tool that can fetch a URL and extract just the article text, stripping out ads, navigation, and other junk. What's the best option and how do I install it?"

Follow the instructions it gives you. If the install fails, paste the error back and ask it to troubleshoot.

---

## Part 1: Describe the pipeline and review what gets built

### Step 1: Set up a project folder

Open your terminal, create a folder for this exercise, and start your CLI LLM:

```
mkdir newsletter-pipeline
cd newsletter-pipeline
claude
```

(Or use `gemini` if you're working with Gemini CLI.)

### Step 2: Describe the full pipeline

Start by describing the whole workflow in plain English. Don't worry about implementation details — describe the goal:

> "I want to build a pipeline that takes a news article URL as input, fetches the article, strips out all the junk like ads and navigation, summarizes it in 2-3 sentences in a tone suitable for a newsletter, and saves the output to a markdown file with today's date in the filename. I want to be able to run this from the command line by passing in a URL. Build it."

Your CLI LLM will write a script. **Read it before you run anything.**

### Step 3: Review the script before running it

Ask your CLI tool to walk you through what it built:

> "Walk me through what this script does, step by step. Are there any security concerns I should know about?"

Specifically, check where the API key is handled. It should never be hardcoded in the script — it should read from an environment variable. If it isn't, ask:

> "The API key is hardcoded in the script. Rewrite it to read from an environment variable instead. Also show me how to set that environment variable on my system."

Follow the instructions for setting the environment variable. You'll likely need to add a line to your shell profile (`.zshrc` or `.bashrc`) and either restart your terminal or run `source ~/.zshrc`.

---

## Part 2: Test on something you already know

### Step 4: Pick an article you've actually read

Before running the pipeline, pick a news article you've actually read recently — something where you know what it says. This is the same principle from Module 3: test new tools on material you can verify.

If you test on an article you've never read, you can't tell if a bad summary is a pipeline problem or just a hard-to-summarize article. Use something familiar first.

### Step 5: Run it and check the output

Run the script on your test article. The exact command will depend on what your CLI tool built for you, but it will look something like:

```
./pipeline.sh "https://[the article URL]"
```

Check the output file. Ask yourself:
- Is the summary accurate?
- Is the length and tone right for a newsletter — or does it read like an abstract?
- Is anything missing that a reader would need?

### Step 6: Refine the output

If the summary isn't what you wanted, describe the problem:

> "The summary reads like an academic abstract. Rewrite the prompt so the output is punchier — one or two sentences that lead with the most newsworthy fact."

Or:

> "The output file has no headline — just the summary and the URL. Add a step that asks the model to extract the article's headline and put it at the top of the output."

Iterate until the output looks like something you'd actually use in a newsletter.

---

## Part 3: Add rate limiting and batch processing

### Step 7: Add rate limiting before processing multiple articles

Before you run this on a batch of articles, ask your CLI tool to add rate limiting:

> "I want to process multiple articles. Add a 2-second pause between API calls so I don't get rate-limited. Also add a progress indicator that shows which article it's currently processing."

This isn't optional. Sending 20 requests in 10 seconds will get you throttled. The pause is responsible engineering, not a workaround.

### Step 8: Add batch processing

Ask your CLI tool to extend the pipeline for batch use:

> "Build a separate script called process-batch.sh that reads URLs from a text file called urls.txt (one URL per line) and runs the pipeline on each one. Collect all the output into a single file called newsletter-draft.md. Include the timestamp in the filename."

Then create a `urls.txt` file with 3-5 article URLs. Start with articles you've already read so you can verify the output. Run it on the small batch before adding more.

### Step 9: Add checkpointing (optional)

If you plan to process large batches, ask your CLI tool to add checkpointing:

> "If the batch job fails halfway through, I don't want to restart from the beginning. Add a checkpoint log that tracks which URLs have already been processed. On restart, skip the ones already done."

This matters when you're processing 50 or 100 documents. You won't need it for 5 URLs, but it's a good habit to build into any pipeline you plan to reuse.

---

## Step 10: Schedule it (optional)

If you want the pipeline to run automatically — every morning, or on a schedule — ask your CLI tool:

> "I want to run this pipeline automatically at 7 AM every weekday. How do I schedule it on my operating system? Walk me through the setup."

Follow the instructions. The approach will vary by OS. Review whatever it sets up before you consider it done.

---

## Troubleshooting

When something breaks, paste the error directly into your CLI session:

> "Here's what I got when I ran the script — what went wrong and how do I fix it?"
> [paste error message]

Paste the exact error text. Don't paraphrase. Your CLI tool already knows the code it wrote, so it can read the error in context and usually identify the problem immediately.

**Common situations:**

**"API key not found" or similar.**
Your environment variable probably isn't set, or you need to restart your terminal after adding it. Ask: "The script can't find my API key environment variable. What might be wrong?"

**Article content comes back empty.**
Some sites block automated requests. Ask: "The content extraction step returned empty output for this URL. How do I check whether the site is blocking the request, and what are my options?"

**Output format looks wrong.**
Paste a sample of the bad output and describe what you expected: "The summary came back as a bulleted list, but I want flowing prose. How do I fix the prompt that generates it?"

**Rate limit errors.**
Paste the error: "I'm getting rate limit errors. Can you add exponential backoff to the retry logic?"

**The script runs but produces nothing.**
Ask: "The script completed without errors but the output file is empty. Walk me through how to add debug output so I can see what's happening at each stage."

---

## What you built

You now have:

1. A working pipeline that turns article URLs into newsletter-ready summaries — built by describing the workflow, not writing code
2. Output you refined by testing on material you already knew and iterating on the prompt until it was right
3. A script you understand because you reviewed it and directed its construction

The technique — describe the workflow, let the LLM build it, test on known material, iterate — works for any automation task you'll encounter. Different pipeline, same method.

---

## Submit your work

Post in the exercise forum:

1. A screenshot of your pipeline running successfully on at least one article
2. One example newsletter item it generated
3. One thing you changed through iteration — what did the first output look like, and what did you describe to your CLI tool to improve it?
