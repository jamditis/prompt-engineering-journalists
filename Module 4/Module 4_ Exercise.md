# Module 4: Advanced prompting patterns

## Exercise: Manage a full session as a manager, not a prompter

In this exercise you'll manage a complete Claude Code session the way a project coordinator works with a developer: taking a context-window baseline, loading a real file, compacting the session, then calling a different model family through its non-interactive `-p` flag for a second-opinion review of the most important file you're working with, and finally reconciling the two reads into a judgment you'd actually act on.

The file you load should be a code-side artifact from your workflow — a skill, a pipeline script, a config file, a `CLAUDE.md` context file, a shell script, a scraped dataset you re-use each week. Don't use this exercise to run an editorial review on a draft news story. Module 4 is about managing the *software side* of your work — the scripts, skills, and pipelines the model is helping you build — not delegating the journalism itself. The cross-model review step is most useful when what you're looking for is code-side problems: reliability, correctness, missing edge cases, fragile assumptions, things that will bite you when the script runs unattended.

You will not write shell code. You will not install MCP servers. You will not build a pipeline. The entire exercise happens inside one Claude Code session and one one-shot call-out to a different model. The skill you're practicing is managing the session — not stacking tools on top of it.

---

## Prerequisites

Before starting, make sure you have:

- **Claude Code installed and authenticated.** If you haven't done this yet, return to Module 1.
- **A project folder with a CLAUDE.md (or GEMINI.md / AGENTS.md).** You set one of these up in Module 1 — reuse it.
- **At least one real code-side file in the project folder** that you actually care about. Good options: a skill you wrote in Module 2, a pipeline script from Module 3, a `CLAUDE.md` context file, a beat context file, a scraped dataset or CSV you re-use, a config file that keeps breaking, a shell script you use for your beat. Pick something from your own work that isn't toy data — but do *not* pick a draft news story. The exercise is about reviewing the code and infrastructure the model helps you manage, not about editing your journalism.
- **A second CLI tool installed for the cross-model review.** One of:
  - **OpenAI Codex CLI** (`npm install -g @openai/codex`) — requires a ChatGPT Plus subscription or OpenAI API key
  - **GitHub Copilot CLI** (`npm install -g @github/copilot`) — requires a GitHub Copilot subscription
  - **Gemini CLI** (`npm install -g @google/gemini-cli`) — free tier with a Google account, 1,000 requests per day. This is the zero-cost option if you don't have a second paid subscription.

The cross-model review step needs a *different* model family than the one running your main session. If your main session is Claude Code, your second tool can be any of the three above. If you're running your main session in Gemini CLI instead, your second tool should be Claude Code, Codex, or Copilot.

---

## Part 1: Start clean and take a baseline

### Step 1: Launch Claude Code in your project folder

Open a terminal and launch Claude Code from inside the project folder that has your CLAUDE.md.

```terminal
cd ~/your-project-folder
claude
```

Claude should load the CLAUDE.md automatically. If it doesn't, you're not in the right directory.

### Step 2: Take a context-window baseline

Before you do anything else, ask Claude what's already in the context window:

```claude code
Before I do anything else in this session, give me a baseline reading of what's currently in my context window. Specifically:

1. How much of the context window is used right now? Give me the percentage and the approximate token count.
2. What's actually loaded? Break it down by category — system prompt, tools, memory files, skills, my CLAUDE.md, anything else. For each category, tell me roughly what percentage of the window it takes.
3. Given the 40% rule we covered in the videos, how much "working room" do I have for the rest of this session?

Be specific. Don't round so aggressively that I lose the signal.
```

Write down (on paper, in a notes file — anywhere outside the chat) three numbers from Claude's answer: the current percentage used, the approximate tokens used, and the percentage consumed by your CLAUDE.md specifically. You're going to compare these later.

---

## Part 2: Load a real file and feel the budget

### Step 3: Pick and load the most important file from your project folder

Tell Claude which file to read and ask for a baseline understanding of it:

```claude code
Read the file [path/to/your/file] and tell me:

1. What is this file for? What workflow does it sit inside, and what problem is it solving for me?
2. What are the three things in it that are most load-bearing — the things that, if they broke, would break the workflow? Not style issues. Real dependencies, real assumptions, real failure modes.
3. What questions would you ask me, as the person responsible for this file, before you made any changes to it?

Don't suggest changes yet. Just read it and prove to me you understood it.
```

This is the Mollick framing in practice — you're giving Claude a specific code-side assignment and asking for evidence it understood the file before it starts making changes. A good project coordinator doesn't hand off work without confirming the developer knows what they're touching.

### Step 4: Take a second context-window reading

Now ask Claude what loading that file did to your budget:

```claude code
Now that you've read [the file], take a second context-window reading. How much has my context window usage grown since the baseline you gave me in Step 2? What's in the window now that wasn't there before? Am I still under 40%?
```

Write down the new percentage and the delta from Step 2. That delta is the cost of loading that file — not a theoretical cost, an actual one. This is what the "context window is a budget" lesson feels like in practice.

---

## Part 3: Compact with and without instructions, and compare

### Step 5: Run a bare `/compact` and see what you lose

Run `/compact` with no custom instructions:

```claude code
/compact
```

Claude will summarize the session so far and continue. Now ask:

```claude code
After that bare /compact, tell me:

1. What did you keep from the pre-compact conversation?
2. What did you drop?
3. Specifically: do you still remember the three load-bearing things I asked you to identify about [the file] in Step 3? If I asked you one of those questions right now, could you answer without re-reading the file?
```

Read the answer carefully. If Claude says it kept everything important, check by asking one of the specific things from Step 3 — without letting it re-read the file. If it can't answer, that's the lesson: bare `/compact` throws away things you needed. Write down what you lost.

### Step 6: Rewind and try again with a custom instruction

If you're inside a rewind-capable turn history, press escape twice to rewind to before the bare `/compact`. (This works only if you haven't done something the rewind can't undo — if it doesn't work cleanly, just restart from Step 3 in a fresh session.)

Now run `/compact` with a custom summarization instruction:

```claude code
/compact

Keep everything about [the file], including the three load-bearing things you identified in Step 3, the questions you'd ask me before making changes, and my original instructions for how to read the file. Compact only the meta-conversation about context windows and the baseline readings.
```

Then ask Claude the same diagnostic question from Step 5:

```claude code
Same diagnostic as before. What did you keep and what did you drop? Can you still answer the three-load-bearing-things question about [the file] without re-reading it?
```

Write down the difference. This is the pattern you'll use in real work: tell `/compact` what matters *before* you run it, not after it's already thrown away things you needed.

---

## Part 4: Cross-model code review via the `-p` flag

### Step 7: Call a different model family for a second opinion

This is the highest-leverage advanced pattern of the week. From inside your main Claude Code session, ask Claude to call a different CLI tool non-interactively for a second-opinion review of the same file.

```claude code
I want a cross-model second opinion on [path/to/your/file]. Run one of the following, depending on what I have installed, as a non-interactive call using the -p flag. Pick the one I have access to:

- gemini -p "Review the file at [full path]. What are the top three issues a careful reviewer should catch in this file — correctness problems, missing edge cases, reliability risks, fragile assumptions, or things that will break when the file runs under real-world conditions? Be specific. If the file has a clear purpose, evaluate it against that purpose. Don't stop at surface-level style."
- codex -p "[same prompt]"
- copilot -p "[same prompt]"

Run the one that's installed. Show me the raw output. Then tell me: which of these three things, if any, would you (Claude) have missed if I had only asked you?
```

Claude will call out to the other tool as a subprocess and return its output. The other tool's reasoning runs entirely in its own separate process — none of its intermediate thinking, file reads, or working memory shows up in your Claude Code session. That's the useful form of context isolation. What does come back into your main session is the final review text itself, and that text does consume tokens once it lands in the conversation. So you're paying for cheaper output (just the final review), not free output (the whole reasoning chain that produced it).

If none of those tools are installed, this is the moment to install one. `gemini` is free for this exercise — `npm install -g @google/gemini-cli` and a Google account is all you need. The other two require paid subscriptions. You must do this step with a second model family, not by asking Claude twice.

### Step 8: Compare the two reads

Now you have two reads on the same file: Claude's from Part 2, and the second model's from Step 7. Ask Claude to help you compare:

```claude code
Compare the two reads on [the file]:

1. What did both models agree on?
2. What did each model flag that the other missed?
3. For the things only one model flagged, tell me which are worth taking seriously and why.
4. Which review, if either, seems to be working from a better understanding of the file?

Don't try to be diplomatic. Tell me what you actually think, and tell me where the other model caught something you missed.
```

This is the judgment moment. Read Claude's comparison carefully and make your own call. Don't assume either review is right by default. Don't assume the second model is automatically smarter because it's a "second opinion." Your job is to reconcile the two reads into a single decision about what, if anything, you'd actually change in the file.

---

## Part 5: Reconcile and debrief

### Step 9: Write the reconciled judgment yourself

Outside of the chat — in a notes file, in a Google Doc, on paper — write a short paragraph that answers this question: **"Based on both reviews, what would I actually do next with this file?"** Be specific. Don't say "I would iterate." Say something concrete, like: "I would add a retry with exponential backoff around the fetch call and log the HTTP status code before swallowing errors, because both reviews flagged the bare `except:` as silently hiding network failures and the Gemini review pointed out there's no request timeout either." The specificity is where the judgment lives — a project coordinator who can't name the exact change they want isn't coordinating anything.

### Step 10: Write the session debrief

Finally, step back and write a short session debrief (for your own notes):

1. What did the bare `/compact` lose that the instructed `/compact` kept?
2. What did the other model catch that Claude missed — if anything?
3. Looking at the context-window readings from Steps 2 and 4, how much of your 40% budget had you used by the time you were ready to do actual work? What would you cut if you had to run this session tighter next time?
4. What would you delegate to a sub-agent next time, and what would you keep in your main session? Why?

---

## Troubleshooting

**"Claude can't read the context window directly."** Claude Code exposes some context-window metadata through `/context` and related session commands. If your Claude's answer to Step 2 is vague, try running `/context` first and then asking Claude to interpret it. The specific percentages matter less than the relative deltas between readings.

**"The `-p` call-out fails."** Three common causes: (1) the second CLI tool isn't on your `PATH` — ask Claude to verify and point at the install instructions, (2) the second tool needs its own auth flow — Gemini CLI in particular needs `gemini auth login` once before it can run non-interactively, (3) the file path you passed to the `-p` call isn't absolute — relative paths often don't resolve when a subprocess runs in a different working directory.

**"The double-escape rewind doesn't work."** You've probably already run `/compact`, which fuses older messages and makes fine-grained rewinding impossible. Start a fresh session from Step 3.

**"The two model reviews agree on everything and there's nothing to reconcile."** Congratulations, the file is probably clean — or you asked an overly general review prompt and got two generic responses. Try a more specific review prompt: ask each model about a specific stake in the file, not "review this."

**"I only have Claude Code installed."** Install Gemini CLI for the cross-model review. It's free, it's one command, and the exercise doesn't work without a second model family. `npm install -g @google/gemini-cli` followed by `gemini` to authenticate. This is a one-time setup.

---

## Submit your work

Post in the exercise forum:

1. **The three context-window readings** you wrote down in Steps 2, 4, and after `/compact`. Rough numbers are fine.
2. **A before/after note on `/compact`** — what bare `/compact` lost that the instructed `/compact` kept, in one or two sentences
3. **The raw output of the cross-model review** (Step 7). Don't paraphrase — paste the actual output the second tool returned.
4. **Your reconciled judgment paragraph** (Step 9). This is the most important part of the submission. It's where your editorial judgment becomes visible.
5. **One sentence on the single most useful thing you learned about managing a session** — what you'd do differently in your next Claude Code session because of this exercise.
