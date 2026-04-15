# Context file instructions for AI coding tools

These are reusable instructions you can copy into your CLAUDE.md, GEMINI.md, or AGENTS.md files. Pick the sections that apply to your work — you don't need all of them.

---

## Writing style

```markdown
NEVER use or write in Title Case. Always use and write in Sentence case.
```

---

## Engineering principles

```markdown
Always adhere to the general principles of engineering:

1. Make it work.
2. Make it simple.
3. Make it efficient/fast.
4. Make it secure.
```

---

## Workflow orchestration

### Plan mode

```markdown
### Plan mode default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately — don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity
```

### Subagent strategy

```markdown
### Subagent strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution
```

### Self-improvement loop

```markdown
### Self-improvement loop
- After ANY correction from the user: update your lessons with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project
```

### Verification before done

```markdown
### Verification before done
- Never mark a task complete without proving it works
- Diff your behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness
```

### Demand elegance (balanced)

```markdown
### Demand elegance (balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes — don't over-engineer
- Challenge your own work before presenting it
```

### Autonomous bug fixing

```markdown
### Autonomous bug fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests — then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how
```

---

## Task management

```markdown
### Task management
1. **Plan first**: Write plan with checkable items
2. **Verify plan**: Check in before starting implementation
3. **Track progress**: Mark items complete as you go
4. **Explain changes**: High-level summary at each step
5. **Document results**: Add review section to your plan
6. **Capture lessons**: Update your lessons file after corrections
```

---

## Core principles

```markdown
### Core principles
- **Simplicity first**: Make every change as simple as possible. Impact minimal code.
- **No laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal impact**: Changes should only touch what's necessary. Avoid introducing bugs.
```

---

## Reasoning framework

```markdown
Before taking action, reason about:

1. **Logical dependencies**: What must happen first? Will this action prevent something else?
2. **Risk assessment**: What could go wrong? For exploratory tasks, missing optional params is low risk.
3. **Hypotheses**: What's the most likely cause? Don't discard unlikely causes prematurely.
4. **Adaptability**: Does the previous result change your plan?
5. **Persistence**: Don't give up. On transient errors, retry. On other errors, change strategy.
```

---

## Bug-fixing workflow

```markdown
### Bug fixing
When a bug is reported, don't immediately try to fix it. Instead:
1. Write a failing test that reproduces the bug
2. Launch subagents to work on fixing the bug
3. Verify the fix by running the test — a passing test proves the bug is fixed
```

---

## AI writing guidelines (anti-slop)

### Words to delete or replace

```markdown
| Word | Alternative |
|------|-------------|
| comprehensive | "full", "complete", or delete |
| sophisticated | "advanced", or describe what makes it complex |
| robust | "reliable", "stable", or delete |
| transformative | "changed", "improved", or be specific |
| leveraging | "using" |
| seamlessly | Delete, or describe actual integration |
| innovative | Describe what's actually new |
| cutting-edge / state-of-the-art | Be specific about the technology |
| holistic | "complete", "full", or be specific |
| synergy / ecosystem / paradigm | Describe the actual thing |
| empower | Be specific about what capability is given |
```

### Patterns to rewrite

```markdown
### Cliche patterns to rewrite
- "Not just X — it's Y" -> State the thing directly
- "Fundamentally transforms..." -> Describe the actual change
- "A critical enhancement / major milestone" -> Just describe what was done
- "With that in mind..." / "Building on this foundation..." -> Just make the next point
```

### Filler phrases to delete

```markdown
### Filler phrases to delete
- "It's worth noting that..." / "It's important to understand that..."
- "In order to..." -> "To..."
- "Due to the fact that..." -> "Because..."
- "At the end of the day..." / "Moving forward..." / "Going forward..."
- "In terms of..." / "With respect to..." -> "About..." or "For..."
```

### The quick test

```markdown
### Quick test before accepting AI output
1. Can I delete this word/phrase without losing meaning? -> Delete it
2. Is this the simplest way to say this? -> Simplify
3. Would I say this out loud to a colleague? -> If not, rewrite
4. Does this add information or just sound impressive? -> Cut it
```

---

## Web development rules

```markdown
### Web development
- Every HTML page must have an SVG favicon
- Every page must have full social/OG meta tags (og:title, og:description, og:image, twitter:card)
- Favicons should match the style and theme of the site
```

---

## How to use these instructions

1. **Start with the sections most relevant to your work.** You don't need everything.
2. **Put them in the right file for your tool:**
   - Claude Code: `CLAUDE.md` in your project root
   - Gemini CLI: `GEMINI.md` in your project root
   - Codex CLI: `AGENTS.md` in your project root
3. **Global vs project:** Instructions that apply to all your work go in `~/.claude/CLAUDE.md` (global). Beat-specific instructions go in the project-level file.
4. **Apply the deletion test.** Before adding a line, ask: would deleting it change anything for someone who already knows your beat? If not, cut it.
5. **Update over time.** When the AI makes a mistake, add a rule that prevents it. When something works well, note what made it effective.
