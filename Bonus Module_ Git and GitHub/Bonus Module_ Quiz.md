# Bonus Module: Git and GitHub for journalists

## Quiz questions

### Question 1

What is a Git commit?

A) A command that saves your file to disk
B) A snapshot of your entire project at a specific point in time, stored permanently in the project's history
C) A message you send to GitHub to upload your files
D) A copy of your project folder with a new name

**Correct answer:** B

**Explanation:** A commit is a snapshot — a permanent record of what every tracked file in your project looked like at that moment. It's different from saving a file (which overwrites the current version on disk) and different from pushing to GitHub (which uploads your commits to a remote server). Each commit has a unique ID, a timestamp, and a message describing what changed.

---

### Question 2

You've been working on a data analysis script and it's currently working. You want to try a different approach without risking the working version. What should you ask Claude Code to do?

A) Save the current file with a different name, like `analysis_backup.py`
B) Create a new Git branch, then make the changes on that branch
C) Delete the current script and start over
D) Push the current version to GitHub and then edit it

**Correct answer:** B

**Explanation:** Branches exist for exactly this purpose. A new branch lets you experiment freely — if the new approach works, you merge it back to main. If it doesn't, you delete the branch and the main branch is untouched. Renaming files is the old approach that Git was designed to replace.

---

### Question 3

What are the three areas where files live in a Git project?

A) Desktop, cloud, and archive
B) Working directory, staging area, and repository
C) Local, remote, and backup
D) Draft, review, and published

**Correct answer:** B

**Explanation:** The working directory is where you edit files. The staging area is where you prepare changes for the next commit (like a drafting table). The repository is where committed snapshots are stored permanently. Files move from working directory to staging area to repository as you prepare and commit changes.

---

### Question 4

You and a colleague are both working on a shared project on GitHub. You've made changes locally and want to share them. What's the correct sequence of actions to ask Claude Code for?

A) Push, then commit, then pull
B) Commit your changes, pull any new changes from GitHub, then push your changes
C) Delete your local copy and download theirs, then add your changes
D) Email your files to your colleague and ask them to merge manually

**Correct answer:** B

**Explanation:** The standard collaboration workflow is: commit your own changes first (creating a checkpoint), pull your colleague's latest changes from GitHub (to make sure you're up to date), then push your combined work back to GitHub. Pulling before committing risks losing your own uncommitted work. Pushing before pulling risks conflicts with your colleague's changes.

---

### Question 5

A merge conflict occurs when:

A) Two people edit different files in the same project
B) Two people edit the same lines of the same file in different branches, and Git can't automatically combine the changes
C) Someone forgets to commit before pushing
D) The internet connection drops during a push to GitHub

**Correct answer:** B

**Explanation:** Git can automatically merge changes to different files, or even different parts of the same file. A conflict only happens when two branches change the same lines — Git doesn't know which version to keep, so it asks you to decide. In Claude Code, you can ask it to show you the conflict and help you resolve it by choosing which version to keep or combining them.
