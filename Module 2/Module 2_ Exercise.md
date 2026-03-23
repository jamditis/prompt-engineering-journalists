# Module 2: Custom skills for Claude Code

## Exercise: Building a custom skill and using the journalism skills repository

**Time required:** 45-60 minutes
**Prerequisites:** Claude Code installed, GitHub account

In this exercise, you'll build your own custom slash command (following the same progression shown in the video with meeting minutes extraction), install the journalism skills repository, and use source-verification to check a viral claim.

---

## Part 1: Build your own custom slash command (20 minutes)

The video this week showed the full progression: raw prompt, saved prompt, custom slash command, hook. In this part, you'll follow that same path for a task on your own beat.

### Choose a task

Pick one thing you do repeatedly that involves a consistent process — not a one-off question, but something with steps you follow every time. The video used meeting minutes extraction. Your task should be similarly specific to your work.

Good candidates:
- Reviewing a specific type of document (press releases, budget reports, public records)
- Drafting a recurring story format (meeting recap, weekly data brief, response to an official statement)
- Checking a specific category of claim (health statistics, crime data, government budget numbers)
- Extracting structured information from a specific source format

Not good candidates:
- "Summarize text" — too generic, no beat-specific knowledge
- "Be thorough" — not a process, not checkable

### Plan the skill before writing it

Before asking Claude Code to write your skill file, use plan mode. In Claude Code, type `/plan` and then describe what you want:

```
/plan

I want to create a custom slash command called [your-command-name]. Here's what it should do:
[describe the task and the steps in plain English]

Plan out the structure of this command file — what sections it will have, what steps it will include, what instructions you'd put in each section. Don't write the file yet.
```

Claude will show you what it plans to build: the structure, the sections, the steps, the framing. Review this before it writes anything. Ask yourself:
- Are the steps in the right order for how you actually work?
- Is anything missing that you'd always do in this task?
- Is there anything in the plan that doesn't belong (too generic, not beat-specific)?

Redirect it here if needed. Once the plan reflects what you actually want, tell it to proceed and write the file.

### Write the command file

```
Go ahead and write the command file based on that plan. Save it to .claude/commands/[your-command-name].md
```

Review what Claude writes. Apply the deletion test: read each instruction and ask whether removing it would change Claude's behavior. Cut anything that wouldn't.

### Test it

Invoke your new command on a real piece of content from your beat — a press release, a document, a set of meeting notes.

**Test on material you already know.** Don't use a fresh document you haven't read. Use something you've already worked through — a press release you already fact-checked, a council vote you already looked up, notes from a meeting you attended. Compare what the command produces against what you found yourself. If it misses something you caught, that tells you what instruction to add. If it flags something that wasn't a problem, that tells you what to cut or refine.

This is how you calibrate a skill before trusting it on live work. You wouldn't rely on a new source until you'd verified something you could already check. The same logic applies here.

### Commit it

Once you're satisfied with the command, commit it to your beat project repository:

```
Commit this command file to my beat project with a message describing what it does
```

Your first custom slash command is now versioned alongside your project context.

---

## Part 2: Install the journalism skills (15 minutes)

The instructor's journalism skills repository is available as a Claude Code plugin. This is the recommended installation method — it keeps skills up to date and installs everything (36 skills and 13 hooks) in one step. A manual fallback is included below if the plugin method doesn't work for your setup.

### Option A: Install as a plugin (recommended)

#### Step 1: Add the plugin

Open Claude Code in your terminal:

```bash
claude
```

Then run the following slash command to install the skills repository as a plugin:

```
/install-github-plugin https://github.com/jamditis/claude-skills-journalism.git
```

Claude Code will clone the repository and register its skills automatically. You'll be prompted to confirm the installation.

#### Step 2: Verify installation

After installation, type:

```
/source-verification
```

You should see Claude acknowledge the skill and be ready to apply it.

#### Step 3: Review a skill's structure

Before using the skill, take a minute to understand what you installed. Find the plugin directory (Claude Code will tell you where it cloned the repo) and open the `source-verification/SKILL.md` file in your editor. Note:
- The YAML frontmatter at the top (name, description)
- The step-by-step instructions for the SIFT method
- Any examples or templates included

This is what Claude reads when you invoke `/source-verification`. A skill is just a markdown file with structured instructions — there's no magic here, just well-organized prompts.

#### Step 4: Look at a hook file

Now open one of the hook files in the same repository. Find the hooks directory and open any `.md` file in it. Notice:
- How it describes what triggers the hook and what it checks
- Whether it's a notify hook (flags and continues) or a stop hook (pauses for confirmation)
- How the instructions differ from a skill — a hook doesn't wait for you to invoke it

Ask Claude Code: "What would have to happen for this hook to fire?" This helps you understand when it runs without having to test it against real output.

You now understand what you installed: a set of skills you invoke on demand, and a set of hooks that run automatically. The skills library is the same structure underneath — markdown files with instructions.

### Option B: Manual installation (fallback)

If the plugin method doesn't work, you can install skills manually by cloning the repo and copying files.

#### Step 1: Clone the skills repository

Open your terminal and clone the instructor's skills repository:

```bash
git clone https://github.com/jamditis/claude-skills-journalism.git
cd claude-skills-journalism
```

#### Step 2: Review the skill structure

Look at the source-verification skill:

```bash
ls source-verification/
```

You should see:
- `SKILL.md` — The main instruction file
- `examples/` — Sample verification scenarios (if present)

Open `SKILL.md` in your editor and review the YAML frontmatter, the SIFT method instructions, and any included examples.

#### Step 3: Copy skills to your commands directory

```bash
# Create the commands directory if it doesn't exist
mkdir -p ~/.claude/commands

# Copy the source-verification skill
cp -r source-verification ~/.claude/commands/

# Copy the foia-requests skill
cp -r foia-requests ~/.claude/commands/
```

#### Step 4: Verify installation

Start Claude Code and check that the skills are available:

```bash
claude
```

Then type:
```
/source-verification
```

You should see Claude acknowledge the skill and be ready to apply it.

---

## Part 3: Use source-verification on a viral claim (20 minutes)

### The scenario

A post is circulating on social media with this claim:

> "A new study from Harvard Medical School found that drinking coffee before 8am increases cortisol levels by 400%, leading to long-term adrenal fatigue. Doctors are now recommending waiting until 10am for your first cup."

This claim has been shared thousands of times. Your editor asks you to verify it before the newsroom amplifies or debunks it.

### Step 5: Apply the source-verification skill

In Claude Code, invoke the skill and provide the claim:

```
/source-verification

Claim to verify: "A new study from Harvard Medical School found that drinking coffee before 8am increases cortisol levels by 400%, leading to long-term adrenal fatigue. Doctors are now recommending waiting until 10am for your first cup."
```

### Step 6: Follow the SIFT process

Claude will guide you through each step:

**Stop:** Before researching, note your initial assumptions. Do you want this to be true or false? What would make you share it without checking?

**Investigate the source:** Where did this claim originate? Is there an actual Harvard study? Can you find the original research paper?

**Find better coverage:** Search for news coverage of this claim. Have fact-checkers addressed it? What do medical journalists say?

**Trace claims:** Follow the claim back. The "400%" figure is specific—where does it come from? What about "adrenal fatigue"—is this a recognized medical condition?

### Step 7: Document your findings

As you work through the verification, Claude will help you document:
- What evidence supports or contradicts the claim
- Which parts of the claim are accurate, misleading, or false
- What the original source actually said (if it exists)
- A summary suitable for editorial decision-making

---

## Part 4: Create error and success logging commands (15 minutes)

One of the most consistent lessons from experienced CLI practitioners: when an AI tool fails, the failure is most useful if you capture it immediately. Corrections that stay in your head evaporate. Corrections that get written down become rules.

In this part, you'll create two personal commands that formalize this practice: `/log_error` for failures and `/log_success` for wins.

### Step 1: Create the log directory

Ask your CLI tool to set up a log directory in your home folder:

```
Create a directory at ~/.claude/logs/ to store my AI error and success logs
```

### Step 2: Create the /log_error command

```
Create a personal command called log_error that I can invoke whenever Claude does something wrong. When I invoke it, the command should:

1. Ask me what I was trying to do (the exact prompt or task)
2. Ask me what category of failure it was — options: hallucination (invented something), instruction ignored, context lost (forgot earlier info), wrong approach, incomplete
3. Ask what Claude did instead of what I wanted
4. Ask what I think caused the failure
5. Write a structured log entry to ~/.claude/logs/errors.md with: date, category, my prompt (verbatim), expected behavior, actual behavior, root cause hypothesis

Save the command to ~/.claude/commands/log_error.md
```

### Step 3: Create the /log_success command

```
Create a personal command called log_success that I can invoke when a prompt works well. When I invoke it, the command should:

1. Ask me what I was trying to do
2. Ask me what made the response unusually good
3. Ask whether this prompt could be templated into a reusable skill
4. Write a structured entry to ~/.claude/logs/successes.md with: date, what I asked for, what worked, whether to template

Save the command to ~/.claude/commands/log_success.md
```

### Step 4: Test both commands

Invoke `/log_error` and document something that went wrong in this exercise — even something minor, like a prompt that needed a second attempt. Then invoke `/log_success` and document something that went well.

Check that the entries were written to the correct files in `~/.claude/logs/`.

### The habit

These commands are only useful if you use them consistently. The trigger: whenever you have to re-ask a question or correct a response, pause and run `/log_error` first. When something works better than expected, run `/log_success`. Over a few weeks, the log becomes a record of what your AI environment actually does — and what instructions prevent the failures from repeating.

---

## Part 5: Reflection and submission (10 minutes)

### What to submit

1. **Your custom slash command file** — paste the contents of your command file. Include a one-sentence explanation of the task it encodes and what you cut during the deletion test.

2. **Screenshot or transcript** of your source-verification session showing the SIFT process

3. **Written summary** (200-300 words) answering:
   - What did you find about the coffee/cortisol claim?
   - How did building your own command (Part 1) change how you understood the source-verification skill (Part 3)?
   - What would you have done differently without the skill?
   - Did the skill miss anything you would have checked?

---

## Troubleshooting

**First step for any error:** Paste the exact error message into your Claude Code session and ask what it means. The tool has context about what you installed and can usually diagnose the problem directly. Don't paraphrase the error — paste it.

**Custom command not showing up?**
- Check that the file is in `.claude/commands/` (project-level) or `~/.claude/commands/` (personal)
- The filename is the command name — `extract-minutes.md` becomes `/extract-minutes`
- No spaces or special characters in the filename
- Restart Claude Code after adding new command files
- Ask Claude Code: "Why isn't my [command-name] command showing up?"

**Skills from the repository not loading?**
- Check that the files are in `~/.claude/commands/`
- Ensure the directory name matches the skill name
- Restart Claude Code after adding new skills

**Claude not following the command/skill instructions?**
- Re-invoke the command explicitly with the slash
- Check that the markdown file has valid YAML frontmatter
- Ask Claude Code to open the file and confirm it can read it

**Still stuck after trying the above?**
Post in the "Technical help" forum with the exact error message and what you've already tried.

---

## Grading criteria

- **Custom slash command:** Submitted command file encodes a real beat-specific task, uses plan mode, and passes the deletion test (30%)
- **SIFT application:** All four SIFT steps documented with evidence (25%)
- **Finding accuracy:** Correct assessment of the claim's veracity (20%)
- **Skills installation:** Journalism skills repository installed and functional (10%)
- **Reflection quality:** Thoughtful analysis comparing the custom command experience with the pre-built skill (15%)
