# Module 3: Custom skills for Claude Code

## Exercise: Installing and using journalism skills

**Time required:** 45-60 minutes
**Prerequisites:** Claude Code installed, GitHub account

In this exercise, you'll install two journalism skills and use one to verify a viral claim.

---

## Part 1: Install the journalism skills (20 minutes)

### Step 1: Clone the skills repository

Open your terminal and clone the instructor's skills repository:

```bash
git clone https://github.com/[instructor-repo]/claude-skills-journalism.git
cd claude-skills-journalism
```

### Step 2: Review the skill structure

Look at the source-verification skill:

```bash
ls source-verification/
```

You should see:
- `SKILL.md` — The main instruction file
- `examples/` — Sample verification scenarios (if present)

Open `SKILL.md` in your editor and note:
- The YAML frontmatter at the top (name, description)
- The step-by-step instructions for the SIFT method
- Any examples or templates included

### Step 3: Install skills to your personal commands directory

Copy the skills to your Claude commands folder:

```bash
# Create the commands directory if it doesn't exist
mkdir -p ~/.claude/commands

# Copy the source-verification skill
cp -r source-verification ~/.claude/commands/

# Copy the foia-requests skill
cp -r foia-requests ~/.claude/commands/
```

### Step 4: Verify installation

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

## Part 3: Reflection and submission (10 minutes)

### What to submit

1. **Screenshot or transcript** of your source-verification session showing the SIFT process

2. **Written summary** (200-300 words) answering:
   - What did you find about the coffee/cortisol claim?
   - How did the skill structure your verification process?
   - What would you have done differently without the skill?
   - Did the skill miss anything you would have checked?

3. **Skill modification idea:** Suggest one change to the source-verification skill that would make it more useful for your beat or newsroom. Be specific about what you would add or change in the SKILL.md file.

---

## Troubleshooting

**Skills not loading?**
- Check that the files are in `~/.claude/commands/`
- Ensure the directory name matches the skill name
- Restart Claude Code after adding new skills

**Claude not following the skill instructions?**
- Re-invoke the skill with `/source-verification`
- Check that `SKILL.md` has valid YAML frontmatter
- Try the skill on a simpler claim first

**Need help?**
Post in the course discussion forum with your error message and what you've tried.

---

## Grading criteria

- **Skill installation:** Skills correctly installed and functional (20%)
- **SIFT application:** All four SIFT steps documented with evidence (40%)
- **Finding accuracy:** Correct assessment of the claim's veracity (20%)
- **Reflection quality:** Thoughtful analysis of the skill's usefulness (20%)
