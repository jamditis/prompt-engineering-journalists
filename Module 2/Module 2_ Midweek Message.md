# Module 2: Prompting with files and project context

## Midweek message

We're halfway through Week 2. Here are some common questions and tips for the exercise.

---

### Common questions so far

**"How long should my CLAUDE.md be?"**

Short enough to be useful. A context file that's 10 pages long defeats the purpose — the AI has to process all of it on every interaction, and bloated files dilute the important instructions. Start with 10-20 lines of your most important beat knowledge and style rules. You can always add more later.

A good starting point: write five instructions you'd give a new reporter on their first day covering your beat. That's your context file.

**"What if I use Gemini CLI instead of Claude Code?"**

The exercise focuses on CLAUDE.md because it's the most documented format. But the concept transfers directly. If you're using Gemini CLI, create a `GEMINI.md` file with the same content. If you're using Codex, use `AGENTS.md`. The structure and thinking are identical — only the filename changes.

**"How do I know if my context file is working?"**

The exercise has you process the same documents with and without a context file. That comparison is the proof. If your context file says "always identify unnamed sources and flag them for follow-up," you should see the AI flagging sources in the with-context run that it ignored in the without-context run.

If you're not seeing differences, your context file might be too generic. Go back to the deletion test: are your instructions specific enough to change the AI's behavior on *these particular documents*?

**"Can I have context files in subdirectories?"**

Yes. Claude Code looks for CLAUDE.md in the current directory and all parent directories. You can have a project-level context file and a more specific one in a subdirectory. The tool merges them. This is useful if you have a newsroom-wide context file and want to add beat-specific instructions for individual projects.

---

### Exercise reminder

If you haven't started the hands-on exercise yet, now is the time. The key steps:

1. Create a project directory with the provided sample documents
2. Process the documents without any context file
3. Write your CLAUDE.md
4. Process the same documents again with the context file active
5. Compare and write up the differences

Start early if you can. Writing a good context file takes a few iterations — your first draft probably won't be your final version, and that's fine.

---

If you have questions, post in the discussion forum. Other students are working through the same issues.

Joe Amditis
