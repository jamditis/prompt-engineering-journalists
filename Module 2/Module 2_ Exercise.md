# Exercise: Set up a beat project and process journalism documents

## Module 2: Prompting with files and project context

This exercise walks you through creating a project directory, initializing it as a Git repository, processing journalism documents with a CLI tool, writing a context file, and comparing the results. By the end, you'll have a version-controlled beat project with a working CLAUDE.md file and a clear understanding of how project context changes AI output.

**Time estimate:** 60-90 minutes

---

## Part 1: Set up your project directory

Create a directory for a fictional city hall beat. You'll populate it with sample journalism documents provided in the course resources.

### Step 1: Create the directory

```bash
mkdir city-hall-beat
cd city-hall-beat
```

### Step 2: Copy the sample documents

Download or copy the following files from `Resources/examples/beat-project/` into your new directory:

- `press-release-park-closure.md` — A city press release about closing a park
- `council-minutes-excerpt.md` — Meeting minutes with budget discussion
- `interview-notes-martinez.md` — Raw interview notes with a council member
- `tip-email.md` — A reader email tip about a related story

You should now have a directory with four journalism documents and no context file.

---

## Part 2: Initialize a Git repository

Turn your project directory into a Git repository. This tracks your files and lets you share the project later.

You don't need to memorize Git commands. Your CLI tool can handle Git for you — you just need to know what to ask for and what's happening when it does.

### Step 1: Open your CLI tool and ask it to initialize a repo

Start a session in your `city-hall-beat` directory:

```
claude
```

(Or `gemini`, or whichever tool you're using.)

Then ask:

```
Initialize this directory as a Git repository and commit all the files with the message "Add sample journalism documents for city hall beat"
```

The tool will run the necessary Git commands for you. Watch what it does — you'll see it initialize the repo, stage the files, and create a commit.

### Step 2: Understand what happened

Ask your CLI tool:

```
What is the current Git status of this project?
```

It should tell you that all files are tracked and committed. Here's what happened behind the scenes:

- **git init** created a hidden `.git` folder that tracks your project's history
- **git add** staged your files (told Git "include these in the next snapshot")
- **git commit** saved a snapshot of your project at this point in time

You don't need to run these commands yourself. But understanding what they mean helps you talk to the tool and know what to ask for.

### Step 3: Why this matters

Later in this exercise, you'll create a CLAUDE.md file. When you do, it becomes a new file that Git isn't tracking yet. You can ask the tool to commit it — and Git will record that change as a separate snapshot. This is how version control works: you make changes, then save snapshots with messages describing what you did.

---

## Part 3: Process documents WITHOUT context

Open your CLI tool in the `city-hall-beat` directory and run the following prompts. Save or screenshot each response.

**Prompt 1 — Summarize the press release:**

```
claude "Read press-release-park-closure.md and write a 3-sentence summary suitable for a news brief"
```

(If using Gemini CLI: `gemini "Read press-release-park-closure.md and write a 3-sentence summary suitable for a news brief"`)

**Prompt 2 — Extract claims from the council minutes:**

```
claude "Read council-minutes-excerpt.md. List every factual claim made by a council member, and note which claims are attributed to a named source vs. unattributed"
```

**Prompt 3 — Identify follow-up questions from the interview:**

```
claude "Read interview-notes-martinez.md. What follow-up questions should I ask based on what Martinez said? Flag any claims that need independent verification"
```

**Prompt 4 — Assess the tip:**

```
claude "Read tip-email.md. Evaluate this tip: is it actionable? What would you need to verify before pursuing it?"
```

Save these four responses. You'll compare them to the with-context versions later.

---

## Part 4: Write your CLAUDE.md

Now create a context file. In your `city-hall-beat` directory, create a file called `CLAUDE.md` with instructions for covering this beat.

Use the sample at `Resources/examples/beat-project/sample-claude-md.md` as a reference, but write your own. Your file should include:

**Required sections:**

1. **Beat description** — What you cover, key entities (city name, officials, agencies)
2. **Style rules** — AP style? Oxford comma? How to refer to the city on second reference?
3. **Source standards** — How to handle attribution, what to flag as unverified
4. **Terminology** — Any beat-specific terms the AI might get wrong or confuse
5. **Things to avoid** — Phrases, framing, or patterns you don't want in the output

**Apply the deletion test:** Before saving, read each line and ask: would this instruction change the AI's output for *these specific documents*? If not, cut it.

---

## Part 5: Process documents WITH context

Run the exact same four prompts from Part 3 again. Don't change anything about the prompts — the only difference is that CLAUDE.md now exists in the directory.

```
claude "Read press-release-park-closure.md and write a 3-sentence summary suitable for a news brief"
```

```
claude "Read council-minutes-excerpt.md. List every factual claim made by a council member, and note which claims are attributed to a named source vs. unattributed"
```

```
claude "Read interview-notes-martinez.md. What follow-up questions should I ask based on what Martinez said? Flag any claims that need independent verification"
```

```
claude "Read tip-email.md. Evaluate this tip: is it actionable? What would you need to verify before pursuing it?"
```

Save these four responses alongside the Part 3 responses.

---

## Part 6: Try a second tool's context file (optional)

If you have access to a second CLI tool, try this:

1. Copy the content of your CLAUDE.md into a `GEMINI.md` file (for Gemini CLI) or `AGENTS.md` file (for Codex)
2. Run one of the four prompts using the second tool
3. Note any differences in how the tool interprets the same context

This step is optional but helps you understand how context files work across tools.

---

## Part 7: Push to GitHub (optional)

If you have a GitHub account, you can push your project to a remote repository. This isn't required, but it means your beat project — including your CLAUDE.md — will be available from any computer.

1. Go to https://github.com/new and create a new repository (name it `city-hall-beat`, leave it empty — no README)
2. In your CLI tool, ask:

```
Push this Git repository to GitHub at https://github.com/YOUR-USERNAME/city-hall-beat.git
```

The tool will connect your local repo to GitHub and push your files.

3. Refresh the GitHub page. You should see your files — including your CLAUDE.md.

If you're not comfortable with this step, skip it. You'll use `git clone` (downloading a repo from GitHub) in Module 3, and that works whether or not you've pushed your own repos.

---

## Submission

Write a 300-500 word reflection covering:

1. **What changed** between the without-context and with-context responses? Be specific — quote or paraphrase examples.
2. **What worked** in your context file? Which instructions had the most visible effect?
3. **What didn't work** or had no noticeable effect? What would you change?
4. **The deletion test in practice** — Did you cut anything from your first draft? What and why?

Submit your reflection along with your CLAUDE.md file (copy-paste the contents or attach the file).
