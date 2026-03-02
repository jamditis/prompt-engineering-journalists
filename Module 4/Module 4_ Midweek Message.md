# Module 5: Agents and RAG

## Midweek message

Hello everyone,

By mid-week, you should have completed the readings on agents and RAG, and started the MCP configuration exercise. If you've created the knowledge base folder structure and sample files, you're on track.

What I'm seeing in the forums:

**Conceptual questions.** Several of you are asking about the difference between agents and regular chat. The key distinction: agents can use tools and take actions across multiple steps without you guiding each one. A chatbot answers questions. An agent can search your archive, cross-reference sources, and draft a summary without you prompting each step.

**MCP configuration issues.** The most common problem is the path in `claude_desktop_config.json`. Use the full absolute path (e.g., `/Users/yourname/journalism-kb` on Mac, not `~/journalism-kb`). After editing the config, restart Claude Code completely.

**"Claude doesn't see my files."** Check three things: (1) the path is correct, (2) the JSON syntax is valid (use a JSON validator), (3) you restarted Claude Code after saving the config.

The discussion threads this week tackle hard questions: where to draw the line on AI autonomy, what belongs in a knowledge base, and whether small newsrooms can keep up with large ones. These aren't questions with easy answers. That's the point.

Discussion posts are due Friday. The exercise submission (MCP configuration plus reflection questions) is due Sunday.

You're near the end. Keep going.

Joe Amditis
