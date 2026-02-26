# Module 4: CLI workflows for newsrooms

## Quiz

5 multiple choice questions.

---

### Question 1

What does the pipe operator (`|`) do in a command-line pipeline?

A) Saves the output of a command to a file

B) Runs two commands at the same time

C) Takes the output of one command and sends it as input to the next command

D) Connects to a remote server

**Correct answer:** C

**Explanation:** The pipe operator is the foundation of the Unix philosophy — small tools that do one thing, connected together. The output of `curl` becomes the input to `readability`, which becomes the input to `claude`, all without creating temp files. This is what makes CLI workflows so composable.

---

### Question 2

You have a file called `articles.json` containing an array of article objects. Each object has a `headline` field. Which `jq` command extracts all the headlines?

A) `jq 'headline' articles.json`

B) `jq '.[].headline' articles.json`

C) `jq '.headline[]' articles.json`

D) `jq 'get headline' articles.json`

**Correct answer:** B

**Explanation:** `.[]]` iterates over all elements in the array; `.headline` selects the `headline` field from each object. `jq` is a lightweight command-line tool for transforming JSON — it pairs naturally with APIs and AI outputs that return structured data.

---

### Question 3

What is the purpose of a cron job?

A) To download files from the internet

B) To schedule commands to run automatically at specified times

C) To convert text between different formats

D) To test if a website is online

**Correct answer:** B

**Explanation:** Cron is the Unix scheduler. You specify time patterns (e.g., "run at 6am every weekday") and it executes your script automatically. This turns a one-off pipeline into an ongoing workflow — for example, a script that checks a government data source every morning and emails you if anything changed.

---

### Question 4

In the pipeline `curl -s https://example.com/article | readability | claude "Summarize this"`, what happens if the `curl` command fails?

A) The pipeline retries automatically

B) An empty string is passed to the next command

C) The entire pipeline pauses and waits

D) Claude receives the error message and summarizes it

**Correct answer:** B

**Explanation:** By default, a pipeline continues even if a stage fails. The failed stage produces no output, so subsequent commands receive empty input. This is why the module covers `set -e` (exit on error) and exit code checking — silent failures are hard to debug, and a pipeline that "succeeds" with empty input can produce misleading results.

---

### Question 5

Why might a journalist choose to run an AI model locally with Ollama instead of using a cloud API?

A) Local models are always more accurate than cloud models

B) Local models are free and unlimited, while cloud APIs charge per request

C) Sensitive data never leaves the journalist's computer

D) Local models can process images, while cloud APIs cannot

**Correct answer:** C

**Explanation:** Local models are useful when working with confidential sources, unpublished documents, or any material that shouldn't leave the reporter's machine. The tradeoff is capability — local models are generally less capable than frontier cloud models — but for sensitive reporting, keeping data local can be worth it.
