# Module 2: Custom skills for Claude Code

## Midweek message

Hello everyone,

By mid-week, you should have watched the video demo (the meeting minutes skill progression) and started building your own custom slash command for the exercise.

Common issues I'm seeing when creating custom commands:

**File location matters.** Your command file needs to go in `.claude/commands/` inside your project directory (for project-specific commands) or `~/.claude/commands/` in your home folder (for commands available everywhere). If the file isn't in the right place, the slash command won't show up. After adding a new command file, restart Claude Code.

**File naming = command name.** The filename determines the slash command. A file named `extract-minutes.md` becomes `/extract-minutes`. Don't add spaces or special characters to the filename. Keep it lowercase with hyphens.

**Folder structure.** If your command needs supporting files (templates, examples), use a folder: `extract-minutes/SKILL.md` with optional subdirectories. A single markdown file works for simple commands.

**"Claude isn't following my command instructions."** Make sure you invoke the command explicitly with the slash at the start of your task. Type `/your-command-name` first, then provide the input. If you just describe what you want without invoking the command, Claude won't load your custom instructions.

**The meeting minutes example from the video.** If you're building something similar, remember the key insight: your command should encode the specific format and standards for *your* meetings, not generic summarization. What makes it a skill is the beat-specific knowledge baked in.

Discussion posts are due Friday. The "what skills does your newsroom need" thread has useful ideas. If you haven't posted yet, think about tasks you do weekly that follow a consistent pattern — those are your best candidates for custom commands.

Joe Amditis
