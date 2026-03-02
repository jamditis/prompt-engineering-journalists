# Module 3: Custom skills for Claude Code

## Quiz: Custom skills structure and usage

5 questions. Select the best answer for each.

---

### Question 1

Where should you place a skill file so it's available across all your Claude Code projects?

A) In the `.claude/commands/` directory of your current project

B) In the `~/.claude/commands/` directory (your home folder)

C) In the root of the GitHub repository

D) In the `/usr/local/claude/skills/` directory

**Correct answer:** B

**Explanation:** Skills placed in `~/.claude/commands/` are personal commands available in all projects. Skills in `.claude/commands/` within a project are only available in that project. The distinction matters when sharing skills with a team — project-level skills travel with the repo; personal skills stay on your machine.

---

### Question 2

What is the correct file structure for a skill with supporting templates?

A) `skill-name.md` containing all templates inline

B) `skill-name/SKILL.md` with optional `templates/` and `examples/` subdirectories

C) `SKILL-skill-name.md` in the commands root

D) `skills/skill-name/main.md` with `assets/` folder

**Correct answer:** B

**Explanation:** Skills can be either a single `skill-name.md` file or a directory `skill-name/` containing `SKILL.md` plus optional subdirectories for templates, examples, and scripts. Use the directory structure when your skill needs supporting files — for example, a FOIA skill might include letter templates.

---

### Question 3

The source-verification skill uses the SIFT method. What does SIFT stand for?

A) Search, Identify, Fact-check, Track

B) Stop, Investigate the source, Find better coverage, Trace claims

C) Source, Information, Fact, Truth

D) Scan, Inspect, Filter, Test

**Correct answer:** B

**Explanation:** SIFT is Mike Caulfield's lateral reading method: Stop before sharing, Investigate the source, Find better coverage, and Trace claims to their origin. Encoding it in a skill means the AI applies the full method — including the steps journalists might skip when pressed for time.

---

### Question 4

How do you invoke a skill named `foia-requests` in Claude Code?

A) Run `claude skill foia-requests` in the terminal

B) Type `/foia-requests` in the Claude Code conversation

C) Add `--skill=foia-requests` to your prompt

D) Import it with `use foia-requests` at the start of your session

**Correct answer:** B

**Explanation:** Skills are invoked as slash commands. Typing `/foia-requests` in Claude Code loads the skill's instructions and applies them to the conversation. This is the same pattern as built-in commands like `/help` and `/clear`.

---

### Question 5

A reporter runs a batch job every Monday that processes 50 press releases, extracts all factual claims, checks each against a source database, and formats the results into a verification report. She wants this to work identically every week. Should she build this as a skill or a command, and why?

A) A skill, because skills are designed for repeatable tasks

B) A command, because a command provides a deterministic trigger — the same workflow runs in the same order every time, regardless of how Claude interprets the situation

C) Either would work equally well

D) A command, because commands run faster than skills

**Correct answer:** B

**Explanation:** Skills are knowledge files that Claude applies using its judgment. When a workflow needs to run the same way every time — same steps, same sequence, no variation — a command is the right tool. Commands are deterministic: you define the workflow, and it executes as written. Skills are probabilistic: Claude reads them and applies them contextually. For batch processes with fixed requirements, consistency matters more than flexibility.

---

## Quiz scoring

- 5 correct: Excellent. You understand skill structure and usage.
- 4 correct: Good. Review the concept you missed.
- 3 or fewer: Re-read the module materials before proceeding to the exercise.
