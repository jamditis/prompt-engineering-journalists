# Module 3: Custom skills for Claude Code

## Midweek message

Hello everyone,

By mid-week, you should have cloned the skills repository and installed the source-verification and foia-requests skills to your `~/.claude/commands/` directory.

Common issues I'm seeing:

**Skills not loading.** Make sure you copied the entire folder, not just the SKILL.md file. The folder name should match the skill name (e.g., `source-verification/SKILL.md`, not `source-verification.md` floating loose). After copying, restart Claude Code.

**"Claude isn't following the skill instructions."** Skills work best when you invoke them explicitly at the start of a task. Type `/source-verification` first, then provide the claim. If you just describe what you want, Claude may not load the skill's methodology.

**The coffee claim exercise.** Don't rush to Google the answer. The point is to use the SIFT method the skill provides. Document each step: your initial assumptions, what you found about the source, what other coverage exists, and where the specific claims originated. Your submission should show the process, not just the conclusion.

Discussion posts are due Friday. The "what skills does your newsroom need" thread has useful ideas. If you haven't posted yet, think about tasks you do weekly that follow a consistent pattern.

The goal this week is to shift from one-off prompts to reusable workflows. Once you've verified one claim using the skill, you'll see how much easier it is than explaining SIFT from scratch every time.

Joe Amditis
