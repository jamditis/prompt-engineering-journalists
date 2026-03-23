# Module 1: From chat window to command line

## Midweek message

Hello everyone,

By now you should have completed the readings and started the hands-on exercise. If you have a CLI tool installed and running, you're on track.

A few things I'm seeing in the forums:

**Installation trouble.** Node.js version mismatches and PATH issues are common. If `node --version` shows nothing or an old version, reinstall from nodejs.org and restart your terminal. The Technical Help forum has solutions for specific error messages.

**"This is slower than the web interface."** That's normal for single prompts. As I showed in the video, Claude on the web finished the CCM research task faster — but it also hit its tool use limit and lost everything when the session ended. Claude Code took longer but saved real files to my desktop. The speed advantage of CLI tools is not about individual responses. It is about what you can do with the output afterward.

**Which tool to choose?** If you're stuck deciding, go with Gemini CLI for its free tier or Claude Code if you already have a Claude subscription. You can always try another tool later.

**CLAUDE.md tips.** If you have reached Part 5 of the exercise, here are a few things to know about `/init` and your context file:
- The file `/init` generates is a starting point, not a finished product. Review it and cut anything generic.
- Your context file should contain things that change how the tool behaves. If you deleted a line and nothing would change, that line does not need to be there.
- If you are using Gemini CLI or Codex, you will not have `/init` — just ask the tool to create a GEMINI.md or AGENTS.md by describing your project.
- You can always edit the file later. It is just a text file. You will keep refining it throughout the course.

Your discussion posts are due by Friday. I've read some good observations about workflow friction and newsroom adoption barriers. If you haven't posted yet, start with Discussion 1 (your current AI workflow) since it requires the least technical setup.

Keep going. The terminal will feel more natural by the end of the week.

Joe Amditis
