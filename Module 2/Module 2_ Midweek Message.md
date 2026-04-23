# Module 2: Custom skills for Claude Code
## Midweek message

Hello everyone,

By now, you should have watched both videos and started on this week's exercise — turning a repeatable prompt from your beat into a reusable tool. A lot has been moving on the forums, so here's a midweek check-in.

**Erratum — skill file location.** Marjorie Roswell flagged two spots where we point to the wrong folder: Question 1 of the Module 2 quiz, and the slide at 1:26 in Video 2. Both say `.claude/commands/` where they should say `.claude/skills/` for skills specifically. Here's the clean version of the distinction in current Claude Code:

- **Custom slash commands** live in `.claude/commands/` (project) or `~/.claude/commands/` (personal). You type `/name` to invoke them.
- **Skills** live in `.claude/skills/` (project) or `~/.claude/skills/` (personal) as folders containing a `SKILL.md` file with YAML frontmatter. Claude auto-loads them based on the description when it thinks one applies.

Filipa is updating the quiz on the Knight Center side. I'll re-record the slide clip before the next run of the course. The forum thread is a good spot if you have follow-up questions — I'll keep answering there.

**Related fix on the journalism-skills repo.** Marjorie also caught a path typo in the install instructions for `claude-skills-journalism`. That's been fixed — the repo README now has the correct `~/.claude/skills/journalism` clone target.

**autocontext on Windows.** Eva started a thread in the instructor's forum about the autocontext skill misbehaving on Windows. If you've hit the same wall, drop a note in that thread — I want to collect enough signal to tell whether it's a genuine Windows limitation or a doc issue on my end.

**Playwright skill vs. the Playwright CLI.** Sharon asked a fair question about whether the Playwright skill I mentioned is just a wrapper over Microsoft's Playwright MCP. Short answer: yes. The skill wraps it with journalism-friendly defaults — screenshot a page, pull text, follow a link. If you're already comfortable calling Playwright directly, you can skip the skill. Both paths work.

**Thursday live session.** Our first live Q&A is Thursday, Apr 23, at 4:30 PM ET on the UT Austin Zoom. Link is in the Moodle course info — check the instructor's forum for any last-minute updates. Bring questions about your exercise.

**Lunch and share.** Marjorie also set up an unofficial noon-ET Zoom most weekdays for students to troubleshoot and swap projects. Not a course-run session, but a good option if you want real-time help from other students. The link is in her forum thread.

Discussion posts are due Friday. The "what skills does your newsroom need" thread has the most useful ideas so far — if you're stuck for a topic, start there.

Keep going. Most of the friction this week is about file paths and naming, not the underlying concept. Once one of your commands or skills loads cleanly, the rest click into place.

Joe Amditis
