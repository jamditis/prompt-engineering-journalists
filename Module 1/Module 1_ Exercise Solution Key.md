# Module 1: Exercise solution key

## Model student submission

I installed Gemini CLI. The installation itself went fine — I already had Node.js from a previous project, so `npm install -g @google/gemini-cli` ran without any issues. The authentication step was the first surprise: it opened a browser window and had me sign in with my Google account, then redirected back to the terminal. I was expecting to paste an API key somewhere. The browser handoff felt strange in a way I hadn't anticipated — this tool that lives in the terminal is still reaching out to a web login flow. That stuck with me.

Once I was authenticated, I ran the prompt:

```
gemini "What are three things journalists should know about using AI from the command line?"
```

The response came back in maybe five seconds. No loading spinner, no waiting for a page to render — just text appearing in my terminal. I then ran the same question in Gemini's web interface at gemini.google.com. The content of the answers was similar, though not identical. The CLI response was more terse, which I actually preferred. The web response added more throat-clearing at the start and bolded the headers, which looked nice on screen but would have been annoying to copy into a story or document.

The speed comparison is harder to measure than I thought it would be. The CLI felt faster, but when I actually timed it, a lot of what felt slow about the web interface was me — navigating to the site, waiting for it to load, clicking into the text box. If I'd had gemini.google.com already open in a tab, the gap would have been smaller. What I kept coming back to was the friction of context-switching: going from my terminal to a browser and back breaks a rhythm in a way that's hard to quantify but easy to feel.

The file processing comparison was the most clarifying part of the exercise. Creating the test article with `echo` and then piping it to Gemini:

```
gemini "Summarize this article in one sentence" < test_article.txt
```

That worked immediately. When I tried to do the same thing in the web interface, I had to open the file in a text editor, select everything, copy it, switch to the browser, paste it, then type the prompt. Six steps instead of one command. For a single file that's annoying but manageable. For a folder of 40 press releases, it's not workable at all.

One thing I didn't expect: the CLI output is just text, which means I can pipe it to other things or redirect it to a file. That started me thinking about what else I might be able to chain together.

The task I want to try is processing public records bulk exports. I've been sitting on a folder of about 200 PDFs from a FOIA request for months because going through them manually would take forever. I want to see if I can loop through them with a CLI tool and get a summary of each one. That feels like where the real value is — not replacing individual prompts, but automating the repetitive work.

---

## Grader notes

### What strong work looks like

Strong submissions do the comparison and get specific about what they observed. The best responses name actual differences — not "the CLI was faster" but "the web interface had six steps where the CLI had one command." They show evidence of having actually run both approaches and noticed something in the process. The journalism task at the end should be a real task from their actual work, not a vague hypothetical.

### Rubric

**Tool installed and setup documented (25%):** Student names the tool they chose, confirms it's installed and authenticated, and describes any friction they encountered. Issues don't need to be major — even "it worked fine" is acceptable if paired with some observation about the setup experience (authentication flow, first launch, etc.). Watch for submissions that skip this section or are so brief it's unclear the student actually did it.

**Simple prompt comparison (25%):** Student ran the same prompt in both CLI and web, and can describe at least one specific difference. Acceptable differences include: output length, formatting, speed, the feel of the interaction. They don't need to reach a strong conclusion about which is better. What matters is that they noticed something specific and can articulate it. Subtract points if the comparison is entirely abstract ("the CLI seemed more powerful") with no concrete observation.

**File processing comparison (25%):** This is the most important part of the exercise. The student should observe the difference between piping a file to the CLI versus copying and pasting into a browser. Strong responses quantify the friction in some way (number of steps, time estimate, or a "for 50 files" extrapolation). Partial credit if they completed the CLI file processing task but didn't attempt the web comparison. No credit if they only describe the CLI half.

**Journalism task (25%):** The proposed task should be plausible and connected to their actual beat or workflow. The best answers name something specific (a folder of documents, a type of source material, a deadline workflow). Generic answers ("I want to use it to summarize articles") are acceptable but weaker. The question is whether the student is starting to imagine the CLI as a workflow tool, not just a chat interface. No wrong answers here, but vague answers signal the student hasn't made that connection yet.

### Common issues to watch for

- Student describes the CLI experience without actually running the web comparison — they describe what they imagine the web interface would be like rather than what it actually produced.
- Student ran the wrong prompt in one environment (changed the wording slightly) and is now comparing outputs that were never equivalent.
- Submission describes installation problems in detail but rushes through the comparison sections. This is worth partial credit but flag it so the student knows the comparison was the core task.
- The journalism task at the end is something that doesn't actually require file access or batch processing — it's essentially the same as using a web interface. This isn't wrong, but it suggests the student hasn't yet seen the specific advantage of CLI tools. Consider leaving a note rather than taking off points.
- Student says the CLI was confusing or uncomfortable — this is fine and honest. Don't penalize uncertainty. What matters is that they completed the steps and reflected on the experience.
