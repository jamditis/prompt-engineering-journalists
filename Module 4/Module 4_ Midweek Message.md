# Module 4: Agents, tools, and data access

## Midweek message

Hello everyone,

By mid-week, you should have watched the video (the `claude -p` demo and Reroute NJ deep dive), completed the readings, and started the MCP configuration exercise. If you've created the knowledge base folder structure and sample files, you're on track.

What I'm seeing in the forums:

**Conceptual questions.** Several of you are asking about the difference between agents and regular chat. The video covers this, but the short version: a chatbot answers questions. An agent uses tools and takes actions across multiple steps without you guiding each one. It can search your archive, cross-reference sources, and draft a summary without you prompting each step. Running `claude -p` on a folder of documents is an example of this — you describe the output, point at the data, and walk away.

**MCP configuration issues.** The most common problem is the path in `claude_desktop_config.json`. Use the full absolute path (e.g., `/Users/yourname/journalism-kb` on Mac, not `~/journalism-kb`). After editing the config, restart Claude Code completely.

**"Claude doesn't see my files."** This is the most common MCP issue, and it often fails silently — Claude won't error out, it'll just answer from training data instead of your documents. Check three things: (1) the path is correct, (2) the JSON syntax is valid (use a JSON validator), (3) you restarted Claude Code after saving the config. If Claude's answers don't reference specific filenames from your knowledge base, the connection probably isn't working.

The discussion threads this week tackle hard questions: where to draw the line on AI autonomy, what belongs in a knowledge base, and whether small newsrooms can keep up with large ones. These aren't questions with easy answers. That's the point.

Discussion posts are due Friday. The exercise submission (MCP configuration plus reflection questions) is due Sunday.

You're near the end. Keep going.

Joe Amditis
