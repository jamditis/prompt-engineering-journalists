# Bonus Module: Exercise solution key

## Model student submission

I started the exercise by launching Claude Code and asking it to create the city-hall-tracker project folder with the three files. Claude Code created the directory, wrote the CLAUDE.md context file, the README, and a votes.csv with five rows of sample data. Then it initialized a Git repository and made the first commit. I could see it running commands — `git init`, `git add`, `git commit` — but I didn't type any of those myself. What struck me was how fast it was. The whole setup took maybe 30 seconds.

The value of version control clicked for me in Part 2 when I asked Claude Code to show the full history after three commits. Seeing the list of commits with their messages and timestamps made it concrete. Each commit was a checkpoint I could return to. Before this, I understood version control in theory but hadn't felt the weight of having a recoverable history. When Claude Code showed me which files changed in each commit, I could see the project growing in layers, each one on top of the last.

Branching was the hardest concept for me going in, but watching Claude Code do it made it tangible. When I asked it to create the add-visualization branch and write the charting script, it showed me that the main branch was untouched. The new script only existed on the experiment branch. When I switched back to main and ran the merge, I could see the chart script appear. The idea that you can try things in isolation without risking the working version finally made sense. In a newsroom context, I can see this being useful when testing a new analysis approach on an existing data project — you try it on a branch, and if it works, you merge. If it doesn't, you just delete the branch.

Pushing to GitHub required me to install the GitHub CLI and authenticate with `gh auth login`. Claude Code walked me through it, and the browser-based authentication flow was similar to what I'd seen with Gemini CLI in Module 1. After that, it created the remote repository and pushed everything. I verified by checking the GitHub URL, and all four commits (including the merge) were there.

Going forward, I want to use this for a voter guide project I'm working on. I have a spreadsheet of candidate responses that I'm turning into a structured database. Right now, if I break the formatting script, I have to remember what it looked like before. With Git, I'd commit after each working version and be able to roll back. I'd also like to share the project with another reporter on the team, and GitHub gives us a shared workspace for that.

---

## Grader notes

### What strong work looks like

Strong submissions describe what they observed Claude Code doing — not the Git commands themselves, but the actions and their effects. The best responses connect the exercise to their own journalism work in specific terms ("my voter guide project" rather than "future projects"). They can articulate the branching concept in their own words, even if it's still somewhat fuzzy. Honest confusion about specific concepts is fine and should not be penalized.

### Rubric

**Repository initialization and first commit (20%):** Student describes asking Claude Code to create files and make the first commit. They should be able to describe what they saw Claude Code do, even if they don't reference specific commands. Look for evidence that they actually ran the exercise rather than describing it hypothetically.

**Understanding commit history (20%):** Student asked Claude Code to show the log after multiple commits and can describe what they saw. Strong answers explain commits as checkpoints or snapshots. Weak answers describe commits as "saving" without distinguishing between file saves and Git commits. The midweek message covers this distinction, so look for awareness of it.

**Branching and merging (25%):** This is the conceptual core of the exercise. The student should be able to explain what a branch does in their own words — isolation, experimentation, safe merging. They don't need to understand the mechanics perfectly. What matters is whether they grasp the idea that changes on a branch don't affect main until you merge. If they describe confusion that they then worked through, give full credit.

**GitHub push (15%):** Student pushed the project to GitHub (or described what happened when they tried). Authentication issues are common and should not be penalized as long as the student describes the experience. If they couldn't push because of GitHub CLI setup issues, partial credit for describing the attempt and what went wrong.

**Journalism application (20%):** The proposed project should be specific and plausible. Best answers name a real project, dataset, or workflow. Acceptable answers describe a category of work ("data projects" or "FOIA processing") with enough detail to show they understand why version control applies. Vague answers ("I would use it for my work") without specifics are weak.

### Common issues to watch for

- Student describes the exercise steps but doesn't reflect on what they learned or observed. This is completion without comprehension — partial credit for the technical portions, less for the conceptual portions.
- Student conflates saving files with committing. This is the most common misconception. The midweek message addresses it directly.
- Student didn't successfully push to GitHub but doesn't describe why. Prompt them to describe the obstacle — the failure itself is instructive.
- Student describes branching as "making a copy of the project." This is close but not quite right — a branch is a pointer, not a copy. Don't heavily penalize this, but note it for feedback.
- Student's journalism application is a task that doesn't benefit from version control (like sending an email). Suggest a revision that connects to file-based project work.
