# Module 5: Agents and RAG

## Hands-on exercise: Configure Claude Code with MCP to query a local knowledge base

**Time estimate:** 90 minutes

**What you'll build:** A local knowledge base of markdown files that Claude Code can search and reference when answering questions.

**Prerequisites:**
- A computer running macOS, Windows, or Linux
- Basic familiarity with the command line
- A code editor (VS Code recommended)

---

## Part 1: Install Claude Code

### Step 1.1: Install Node.js

Claude Code requires Node.js. Check if you have it:

```bash
node --version
```

If you see a version number (v18 or higher), skip to Step 1.2. Otherwise, install Node.js from https://nodejs.org/ (choose the LTS version).

### Step 1.2: Install Claude Code

Open your terminal and run:

```bash
npm install -g @anthropic-ai/claude-code
```

Verify the installation:

```bash
claude --version
```

### Step 1.3: Authenticate

Run Claude Code and follow the prompts to authenticate with your Anthropic account:

```bash
claude
```

You'll be directed to a browser to log in. After authentication, you can close the browser and return to your terminal.

---

## Part 2: Create a sample knowledge base

We'll create a small knowledge base about a fictional local news organization. In a real project, this would be your archive, source documents, or research materials.

### Step 2.1: Create the directory structure

```bash
mkdir -p ~/journalism-kb/articles
mkdir -p ~/journalism-kb/sources
mkdir -p ~/journalism-kb/background
```

### Step 2.2: Create sample content

Create the following files using your text editor. Save each file in the indicated location.

**File: ~/journalism-kb/articles/city-budget-2025.md**

```markdown
# City approves $450M budget for 2025

Published: January 15, 2025
Reporter: Sarah Chen

The City Council approved a $450 million budget for fiscal year 2025 in a 7-2 vote Tuesday night.

Key allocations:
- Public safety: $125 million (up 8% from 2024)
- Infrastructure: $95 million (up 12% from 2024)
- Education partnerships: $45 million (unchanged)
- Parks and recreation: $28 million (down 5% from 2024)

Council members Martinez and Thompson voted against, citing concerns about reduced parks funding.

"We're seeing record usage of city parks since the pandemic," Martinez said. "This is the wrong time to cut."

Mayor Williams defended the budget: "Public safety and infrastructure are non-negotiable priorities. We've made difficult choices."

The budget takes effect March 1, 2025.
```

**File: ~/journalism-kb/sources/martinez-interview.md**

```markdown
# Interview: Council Member Martinez on budget vote

Date: January 16, 2025
Interviewer: Sarah Chen
Format: Phone interview, 15 minutes

## Key quotes

On the parks funding cut:
"Look, I understand we have finite resources. But parks aren't a luxury. They're public health infrastructure. During COVID, parks were the only safe gathering spaces we had."

On the public safety increase:
"I'm not against public safety funding. I'm against the framing that it has to come at the expense of everything else. We could have found other efficiencies."

On the vote:
"I voted no because I think we'll regret this in two years. Usage data shows parks visits are up 40% since 2019. We're cutting services at the moment of peak demand."

## Background

Martinez represents District 4, which includes three of the city's largest parks. She's been on the council since 2020 and chairs the Parks Committee.
```

**File: ~/journalism-kb/background/city-budget-history.md**

```markdown
# City budget history: 2020-2024

## Overview

The city's budget has grown from $380 million (2020) to $425 million (2024), a 12% increase over five years.

## Year-by-year breakdown

### 2020: $380M
- Public safety: $98M (26%)
- Infrastructure: $72M (19%)
- Education: $45M (12%)
- Parks: $32M (8%)
- Other: $133M (35%)

### 2021: $385M
- Flat growth due to pandemic revenue shortfall
- Parks temporarily increased to $38M for outdoor programming

### 2022: $395M
- Recovery began; infrastructure prioritized
- Parks returned to $32M

### 2023: $410M
- Public safety increased to $108M following staffing study
- Parks: $30M

### 2024: $425M
- Infrastructure bond approved
- Parks: $29.5M
- Public safety: $116M

## Trends

Public safety has grown from 26% to 27% of the budget.
Parks has declined from 8% to 7% of the budget.
Infrastructure has grown from 19% to 20% following the bond.
```

### Step 2.3: Create an index file

**File: ~/journalism-kb/index.md**

```markdown
# Journalism knowledge base

This knowledge base contains research materials for the city budget story (January 2025).

## Contents

### Articles
- city-budget-2025.md: Published story on the 2025 budget approval

### Sources
- martinez-interview.md: Interview transcript with Council Member Martinez

### Background
- city-budget-history.md: Five-year budget history (2020-2024)

## Usage notes

All quotes in source documents are verbatim from recorded interviews.
Budget figures are from official city documents.
```

---

## Part 3: Configure MCP for file access

Now we'll configure Claude Code to access your knowledge base using MCP.

### Step 3.1: Locate your Claude Code configuration

Claude Code stores its configuration in different locations depending on your operating system:

- **macOS:** `~/.claude/`
- **Windows:** `%APPDATA%\Claude\`
- **Linux:** `~/.config/claude/`

### Step 3.2: Create or edit the MCP configuration

Create a file called `claude_desktop_config.json` in your Claude configuration directory:

**macOS/Linux: ~/.claude/claude_desktop_config.json**

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/YOUR_USERNAME/journalism-kb"
      ]
    }
  }
}
```

**Windows: %APPDATA%\Claude\claude_desktop_config.json**

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "C:\\Users\\YOUR_USERNAME\\journalism-kb"
      ]
    }
  }
}
```

Replace `YOUR_USERNAME` with your actual username.

### Step 3.3: Restart Claude Code

Close and reopen Claude Code for the configuration to take effect:

```bash
claude
```

---

## Part 4: Test your knowledge base

Now test that Claude Code can access your knowledge base.

### Step 4.1: Verify the connection

In Claude Code, type:

```
What files are available in my knowledge base?
```

Claude should list the files in your journalism-kb directory. If it doesn't, check your configuration file for typos.

### Step 4.2: Query the knowledge base

Try these prompts:

**Prompt 1: Basic retrieval**
```
What was the total city budget approved for 2025?
```

Expected: Claude should cite the city-budget-2025.md article and provide the $450 million figure.

**Prompt 2: Cross-reference**
```
How does the 2025 parks budget compare to previous years?
```

Expected: Claude should pull from both the article and the background document to show the trend.

**Prompt 3: Source attribution**
```
What did Council Member Martinez say about the parks funding cut? Include the exact quote.
```

Expected: Claude should cite the interview transcript and provide the verbatim quote.

**Prompt 4: Synthesis**
```
Write a 100-word summary of the budget story for social media, based on the documents in my knowledge base.
```

Expected: Claude should synthesize information from multiple documents.

---

## Part 5: Verify before you trust

Before reflecting on what worked, do a verification pass. This is a habit worth building now, before you use these tools on real reporting.

### Step 5.1: Check the numbers

From your Prompt 2 response (how the parks budget changed over years), find the relevant line in `city-budget-history.md` and confirm the numbers Claude cited match what the document actually says. Don't skim — read the exact figures.

If they match: note it. If they don't: that's a hallucination, and it's the exercise working as intended. Run `/log_error` if you set it up in Module 3.

### Step 5.2: Check the quote

From your Prompt 3 response (the Martinez quote on parks funding), find the quote in `martinez-interview.md` and read it verbatim. Does Claude's response reproduce it exactly, or has it paraphrased, combined, or subtly changed it?

If Claude paraphrased: the paraphrase may be accurate in meaning but it is not a direct quote. A RAG system that retrieves quotes can still hallucinate them if the model summarizes instead of pulling the exact text. Note whether the phrasing Claude used is faithful or not.

### Step 5.3: What this means for pipelines

When you build a pipeline that processes many documents and synthesizes their content — as in Module 4, or in a real newsroom RAG system — errors in step three aren't visible until you check. A fabricated paraphrase at the retrieval stage can become a cited fact at the synthesis stage. The verification you just did manually is what you'd need to build into any automated pipeline: a check that compares AI-generated outputs against the source documents before the output leaves the pipeline.

---

## Part 6: Reflection questions

After completing the exercise, answer these questions in your course journal or discussion post:

1. **Accuracy:** Did Claude correctly cite information from your knowledge base? Did you notice any errors or hallucinations during the verification step?

2. **Attribution:** How useful was having source documents for verifying Claude's responses? What would you have missed without the originals?

3. **Limitations:** What questions could Claude NOT answer well, given the limited knowledge base?

4. **Journalism applications:** How might you use this setup in your own reporting? What documents would you include in your knowledge base?

5. **Maintenance:** If this were a production system, who would be responsible for keeping the knowledge base current? What processes would you need?

6. **Verification cost:** How long did the verification step in Part 5 take? If you were processing 200 documents instead of 3, what would that cost in time? What's the minimum verification that would give you enough confidence to publish?

---

## Troubleshooting

**Claude doesn't recognize the knowledge base:**
- Check that the path in your configuration file is correct
- Ensure there are no typos in the JSON file
- Restart Claude Code after making changes

**Permission errors:**
- Make sure the knowledge base directory is readable
- On macOS/Linux, run: `chmod -R 755 ~/journalism-kb`

**MCP server fails to start:**
- Ensure Node.js is installed and up to date
- Try running the server manually: `npx @modelcontextprotocol/server-filesystem ~/journalism-kb`

**Still stuck?**
Post in the course discussion forum with:
- Your operating system
- The exact error message
- Your configuration file (remove any sensitive paths)

---

## Extension activities (optional)

If you finish early or want to go deeper:

1. **Add your own documents:** Replace the sample files with real research materials from a story you're working on.

2. **Test the limits:** Add 20+ documents and see how well Claude handles larger knowledge bases.

3. **Compare with and without RAG:** Ask the same questions with and without the MCP connection. Document the differences in accuracy and attribution.

4. **Explore other MCP servers:** Check the MCP documentation for other server types (databases, APIs, etc.).

---

## Submission

Submit a screenshot showing:
1. Your Claude Code terminal with a successful query
2. Claude's response citing information from your knowledge base

Also submit your answers to the five reflection questions (Part 5).

**Due:** End of Module 5
