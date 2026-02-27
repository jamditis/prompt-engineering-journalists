# Bonus Module: Git and GitHub for journalists

## Hands-on exercise: Version-controlling a journalism project with Claude Code

**Time required:** 45-60 minutes

**What you will do:** Use Claude Code to set up a Git repository for a journalism project, make commits at meaningful checkpoints, create a branch to try an experiment, and push the project to GitHub.

---

## Part 1: Initialize a project with Git (15 minutes)

### Step 1: Launch Claude Code

Open your terminal and start an interactive session:

```terminal
claude
```

### Step 2: Ask Claude Code to create a project folder and initialize Git

Paste this prompt into your Claude Code session:

```claude code
Create a new folder called "city-hall-tracker" with the following files:

1. A CLAUDE.md file that says this is a project for tracking city council votes, with instructions for Claude to format all output as markdown and include source attribution.
2. A file called README.md explaining that this project tracks city council voting records.
3. A file called votes.csv with five made-up rows of city council vote data: date, council member name, issue, and vote (yes/no).

After creating all the files, initialize a Git repository in this folder and make the first commit with the message "Initial project setup with context file, README, and sample data."
```

Claude Code will create the files, run `git init`, stage everything, and commit. Watch what it does — you'll see it running Git commands on your behalf.

### Step 3: Ask Claude Code to show you the project history

```claude code
Show me the Git log for this project. Explain what each part of the output means.
```

You should see one commit. Claude Code will explain the commit hash (a unique ID), the author, the date, and the message you wrote. This is the first entry in your project's permanent record.

---

## Part 2: Make changes and commit them (10 minutes)

### Step 4: Add data and commit the change

```claude code
Add five more rows of made-up city council vote data to votes.csv. Make sure the new entries cover different issues than the first five — things like park funding, zoning changes, and library hours.

Then commit this change with a message that describes what you added.
```

### Step 5: Create an analysis script and commit it

```claude code
Write a Python script called analyze_votes.py that reads votes.csv and prints a summary: how many total votes, how many yes vs. no, and which council member voted "no" the most.

Commit this new file with a descriptive message.
```

### Step 6: Check the history again

```claude code
Show me the full Git history of this project. I should see three commits now. For each one, show me what files changed.
```

This is the payoff. You now have three checkpoints in your project's history. If the analysis script breaks something, you can always go back to the version before you added it.

---

## Part 3: Branching — try something without risk (10 minutes)

### Step 7: Create a branch for an experiment

```claude code
Create a new Git branch called "add-visualization" and switch to it. Then write a Python script called chart_votes.py that creates a simple bar chart of yes vs. no votes by council member. Use matplotlib if it's available, or create a text-based chart if not.

Commit this new file to the add-visualization branch.
```

### Step 8: See the difference between branches

```claude code
Show me which branches exist and which one I'm on. Then show me the list of files on this branch compared to the main branch. I want to understand what the branch added without affecting main.
```

### Step 9: Merge the experiment back

```claude code
Switch back to the main branch and merge the add-visualization branch into it. Then show me the Git log to confirm the merge happened.
```

If everything went well, your main branch now has the visualization script. If it hadn't worked, you could have deleted the branch and main would be untouched.

---

## Part 4: Push to GitHub (10 minutes)

### Step 10: Create a GitHub repository

```claude code
Create a new private repository on GitHub called "city-hall-tracker" and push this local project to it. Use my GitHub credentials that are already configured.

If GitHub CLI (gh) isn't installed or authenticated, walk me through what I need to do to set it up.
```

Note: If Claude Code can't authenticate with GitHub automatically, it will tell you what steps are needed. This might involve installing the GitHub CLI (`gh`) and running `gh auth login`. Follow the instructions Claude Code gives you.

### Step 11: Verify the push

```claude code
Confirm that the repository is on GitHub. Show me the remote URL and verify that all three commits plus the merge are visible in the history.
```

### Step 12: Make one more change and push it

```claude code
Add a comment at the top of analyze_votes.py explaining what the script does and when it was last updated. Commit this change with an appropriate message, then push it to GitHub.
```

This is the workflow you'll repeat for every project going forward: make changes, commit with a meaningful message, push to GitHub when you want to back up or share.

---

## Part 5: Understanding what just happened (5 minutes)

### Step 13: Ask Claude Code to summarize

```claude code
Give me a plain-English summary of everything we just did with Git in this project. List each action, what it accomplished, and when I'd want to do it again in a real project. Don't use any Git commands in the explanation — just describe what happened in terms a journalist who has never used Git would understand.
```

Save this summary. It's your reference card for knowing when to ask Claude Code to commit, branch, merge, push, or pull.

---

## Submission

Submit a short writeup (300-500 words) covering:

1. What happened when you asked Claude Code to initialize the repository and make the first commit — what did you see it do?
2. The moment the value of version control clicked for you (or didn't — describe what's still unclear)
3. What happened when you created and merged the branch — was the concept of branching clearer after watching Claude Code do it?
4. Whether you successfully pushed to GitHub, and any issues you encountered
5. One project from your journalism work where you'd use this workflow going forward
