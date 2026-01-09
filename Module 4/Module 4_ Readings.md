# Module 4: CLI workflows for newsrooms

## Required readings

Complete these readings before attempting the exercise.

---

### 1. The Unix philosophy and why it matters for journalists

**"The Art of Unix Programming: Basics of the Unix Philosophy"** by Eric S. Raymond
https://www.catb.org/~esr/writings/taoup/html/ch01s06.html

Read sections 1.6.1 through 1.6.6. Focus on these principles:
- Write programs that do one thing well
- Write programs that work together
- Write programs that handle text streams (the universal interface)

These ideas from the 1970s explain why piping commands together works so well today.

**Time:** 15 minutes

---

### 2. Command-line basics for non-programmers

**"The Command Line Crash Course"** from Learn Code the Hard Way
https://learncodethehardway.org/command-line-crash-course/

Complete lessons 1-8. You need to understand:
- How to navigate directories (`cd`, `ls`, `pwd`)
- How to view file contents (`cat`, `head`, `tail`)
- How to redirect output to files (`>`, `>>`)
- How the pipe operator works (`|`)

Skip the later lessons on programming for now.

**Time:** 30 minutes

---

### 3. Piping and text processing

**"Pipes and Filters"** from Software Carpentry
https://swcarpentry.github.io/shell-novice/04-pipefilter.html

This lesson shows how to chain commands. Pay attention to:
- How data flows from left to right through pipes
- Using `wc`, `sort`, and `head` to process text
- Building longer pipelines step by step

**Time:** 20 minutes

---

### 4. Working with APIs from the command line

**"curl Tutorial"** by Daniel Stenberg (sections 1-4)
https://curl.se/docs/tutorial.html

Learn how to:
- Make GET requests to APIs
- Save output to files
- Pass headers and authentication

You'll use `curl` to fetch web content and API responses in your pipelines.

**Time:** 15 minutes

---

### 5. Processing JSON with jq

**"jq Manual: Basic filters"**
https://jqlang.github.io/jq/manual/#basic-filters

Read the sections on:
- Identity (`.`)
- Object identifier (`.field`)
- Array indexing (`.[0]`)
- Pipe operator within jq

Understanding `jq` lets you extract specific fields from API responses before passing them to AI tools.

**Time:** 15 minutes

---

## Total reading time: ~1.5 hours

Complete these readings before the video lectures. The exercise assumes you understand these concepts.
