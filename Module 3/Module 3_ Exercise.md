# Module 3: Custom skills for Claude Code

## Exercise: Installing and using journalism skills

**Time required:** 45-60 minutes
**Prerequisites:** Claude Code installed, GitHub account

In this exercise, you'll install two journalism skills and use one to verify a viral claim.

---

## Part 1: Install the journalism skills (20 minutes)

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

## Part 2: Use source-verification on a viral claim (25 minutes)

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

## Part 3: Write your own skill (15 minutes)

The best way to understand skills is to write one. In this part, you'll create a simple skill for a task you do regularly.

### Choose a task

Pick one thing you do repeatedly that involves a consistent process — not a one-off question, but something with steps you follow every time.

Good candidates:
- Reviewing a specific type of document (press releases, budget reports, public records)
- Drafting a recurring story format (meeting recap, weekly data brief, response to an official statement)
- Checking a specific category of claim (health statistics, crime data, government budget numbers)

Not good candidates:
- "Summarize text" — too generic, no beat-specific knowledge
- "Be thorough" — not a process, not checkable

### Plan the skill before writing it

Before asking Claude Code to write your skill file, use plan mode. In Claude Code, type `/plan` and then describe what you want:

```
/plan

I want to create a custom skill called [your-skill-name]. Here's what it should do:
[describe the task and the steps in plain English]

Plan out the structure of this skill file — what sections it will have, what steps it will include, what instructions you'd put in each section. Don't write the file yet.
```

Claude will show you what it plans to build: the structure, the sections, the steps, the framing. Review this before it writes anything. Ask yourself:
- Are the steps in the right order for how you actually work?
- Is anything missing that you'd always do in this task?
- Is there anything in the plan that doesn't belong in a skill file (too generic, not beat-specific)?

Redirect it here if needed. Once the plan reflects what you actually want, tell it to proceed and write the file.

### Write the skill file

```
Go ahead and write the SKILL.md file based on that plan.
```

Review what Claude writes. Apply the deletion test: read each instruction and ask whether removing it would change Claude's behavior. Cut anything that wouldn't.

### Save and test it

Ask Claude Code to save the file to your skills directory and invoke it on a real piece of content from your beat — a press release, a document, a claim.

**Test on material you already know.** Don't use a fresh document you haven't read. Use something you've already worked through — a press release you already fact-checked, a council vote you already looked up, a claim you already verified. Compare what the skill finds against what you found yourself. If it misses something you caught, that tells you what instruction to add. If it flags something that wasn't a problem, that tells you what to cut or refine.

This is how you calibrate a skill before trusting it on live work. You wouldn't rely on a new source until you'd verified something you could already check. The same logic applies here.

### The commit

Once you're satisfied with the skill, commit it to your beat project repository:

```
Commit this skill file to my beat project with a message describing what it does
```

Your first custom skill is now versioned alongside your project context.

---

## Part 4: Reflection and submission (10 minutes)

### What to submit

1. **Screenshot or transcript** of your source-verification session showing the SIFT process

2. **Written summary** (200-300 words) answering:
   - What did you find about the coffee/cortisol claim?
   - How did the skill structure your verification process?
   - What would you have done differently without the skill?
   - Did the skill miss anything you would have checked?

3. **Your custom skill file** — paste the contents of your SKILL.md. Include a one-sentence explanation of the task it encodes and what you cut during the deletion test.

---

## Troubleshooting

**First step for any error:** Paste the exact error message into your Claude Code session and ask what it means. The tool has context about what you installed and can usually diagnose the problem directly. Don't paraphrase the error — paste it.

**Skills not loading?**
- Check that the files are in `~/.claude/commands/`
- Ensure the directory name matches the skill name
- Restart Claude Code after adding new skills
- Ask Claude Code: "Why isn't my [skill-name] skill showing up?"

**Claude not following the skill instructions?**
- Re-invoke the skill with `/source-verification`
- Check that `SKILL.md` has valid YAML frontmatter
- Ask Claude Code to open the skill file and confirm it can read it

**Still stuck after trying the above?**
Post in the "Technical help" forum with the exact error message and what you've already tried.

---

## Grading criteria

- **Skill installation:** Skills correctly installed and functional (15%)
- **SIFT application:** All four SIFT steps documented with evidence (35%)
- **Finding accuracy:** Correct assessment of the claim's veracity (20%)
- **Custom skill:** Submitted skill file encodes a real beat-specific task and passes the deletion test (20%)
- **Reflection quality:** Thoughtful analysis of the skill's usefulness (10%)
