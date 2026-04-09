# Module 3: CLI workflows for newsrooms

## Quiz

5 multiple choice questions.

---

### Question 1

Why should you use plan mode before asking your CLI tool to build a pipeline?

A) Plan mode makes the AI write better code

B) It lets you review the approach before any files are written or API calls are made

C) Plan mode is required — the tool won't build anything without it

D) It automatically tests the pipeline before running it

**Correct answer:** B

**Explanation:** Plan mode shows you what the AI intends to build before it starts. Catching a misunderstanding at the planning stage costs 30 seconds. Catching the same problem after a failed batch run costs time and money. It's the same reason you'd review a reporter's outline before they spend three days on a draft.

---

### Question 2

Where should API keys be stored when building automation scripts?

A) In the script file, near the top where they're easy to find

B) In your CLAUDE.md file so the AI can access them every session

C) In environment variables, never in source files or committed to GitHub

D) In a shared Google Doc so your team can access them

**Correct answer:** C

**Explanation:** API keys are passwords. Storing them in a script file means anyone who sees the code — including anyone who finds it on GitHub — has access to your account. Environment variables keep secrets separate from code. If a key does end up in a commit, rotate it immediately.

---

### Question 3

You've built a pipeline that processes news articles. Before running it on your full list of 200 URLs, what should you do first?

A) Run it on the full list overnight so it finishes by morning

B) Test it on 3-5 articles you've already read, so you can verify the output

C) Ask the AI to review its own output for accuracy

D) Add a disclaimer to the output noting it was AI-generated

**Correct answer:** B

**Explanation:** Testing on a small batch of known material lets you catch problems before they scale. If you test on articles you've already read, you can tell whether a bad summary reflects a pipeline problem or just a hard-to-summarize article. Running 200 articles through a broken pipeline wastes API credits and produces output you can't trust.

---

### Question 4

Your pipeline script throws an error halfway through processing. What's the most effective next step?

A) Rewrite the script from scratch

B) Search the internet for the error message

C) Paste the exact error message back into your CLI session and ask what went wrong

D) Switch to a different AI tool and try again

**Correct answer:** C

**Explanation:** Your CLI tool already knows the code it built for you. When you paste the error back in, it can read the error in context and usually identify the problem immediately. This describe-build-test-break-fix loop is the core workflow pattern for building automation with CLI tools.

---

### Question 5

What is the main benefit of breaking a pipeline into separate stages (fetch, clean, process, save)?

A) Each stage uses a different AI model for better results

B) When something fails, you know which stage broke and can fix it without touching the others

C) Separate stages run faster because they process in parallel

D) It reduces the number of API calls needed

**Correct answer:** B

**Explanation:** Modular stages make failures localized. If the fetch stage works but the processing stage breaks, you fix the processing stage without redoing the fetch. Each stage has one job, produces a clear output, and can be tested independently. This is the same principle behind newsroom workflows — separate the reporting from the editing from the publishing.

