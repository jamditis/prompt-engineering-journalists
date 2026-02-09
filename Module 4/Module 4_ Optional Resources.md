# Module 4: CLI workflows for newsrooms

## Optional resources

These materials go deeper into topics from this week. Use them if you want to expand your skills after completing the required work.

---

## Instructor tools and templates

### AI tools and guides for newsrooms
**jamditis/tools** by Joe Amditis
https://github.com/jamditis/tools

The instructor's repository of AI tools and guides built for newsrooms. Includes terminal setup guides, workflow templates, and working examples of the kinds of pipelines covered in this module. A good starting point if you want to see how the concepts from this week look in practice.

### scrapefruit-cli
**jamditis/scrapefruit-cli** by Joe Amditis
https://github.com/jamditis/scrapefruit-cli

A CLI tool for archiving complete web pages — HTML, assets, and metadata. Useful for preserving source material before it changes or disappears. Pairs well with the pipelines from this week's exercise: archive first, then process.

---

## Shell scripting tutorials

### Bash scripting for beginners
**"Bash Scripting Tutorial"** by Ryan Chadwick
https://ryanstutorials.net/bash-scripting-tutorial/

A full tutorial covering variables, conditionals, loops, and functions. Good reference for when you want to add logic to your pipelines.

### Shell script best practices
**"Shell Style Guide"** by Google
https://google.github.io/styleguide/shellguide.html

How to write maintainable scripts. Useful if you're building tools your team will share.

---

## Scheduling and automation

### Cron job basics
**"Cron Jobs for Beginners"** by Hostinger
https://www.hostinger.com/tutorials/cron-job

How to schedule scripts to run automatically. Includes the cron syntax reference.

### Crontab.guru
https://crontab.guru/

Interactive tool for building and testing cron schedules. Bookmark this.

### macOS-specific: launchd
**"A launchd Tutorial"** by Alvin Alexander
https://alvinalexander.com/mac-os-x/mac-osx-startup-crontab-launchd-jobs/

On macOS, `launchd` is the native scheduler. This tutorial covers the basics.

---

## AI CLI tools

### Claude CLI documentation
https://docs.anthropic.com/en/docs/claude-cli

Official documentation for using Claude from the command line.

### Ollama (local AI)
https://ollama.ai/

Run AI models locally on your machine. Useful for validating inputs before sending them to paid APIs, or when you don't want to send content to external services.

### LLM CLI by Simon Willison
https://llm.datasette.io/

A command-line tool that works with multiple AI providers. Good for building pipelines that switch between models.

---

## Web scraping tools

### yt-dlp documentation
https://github.com/yt-dlp/yt-dlp#readme

Download videos and metadata from YouTube, TikTok, and hundreds of other sites. The `--dump-json` flag outputs metadata you can pipe to other tools.

### Readability CLI
https://gitlab.com/gardenappl/readability-cli

Extracts the main article text from web pages. Removes navigation, ads, and sidebars.

### Trafilatura
https://trafilatura.readthedocs.io/

Python tool for web scraping that outputs clean text or markdown. Works from the command line.

---

## Text processing

### GNU Coreutils manual
https://www.gnu.org/software/coreutils/manual/

Reference for standard Unix tools: `cut`, `sort`, `uniq`, `tr`, `wc`, and more.

### sed and awk one-liners
**"Sed One-Liners Explained"** by Peteris Krumins
https://catonmat.net/sed-one-liners-explained-part-one

Quick patterns for text manipulation. Useful when you need to clean up text before sending it to AI.

---

## Books

### "Data Science at the Command Line" by Jeroen Janssens
https://jeroenjanssens.com/dsatcl/

Free online book. Covers building data pipelines with Unix tools. Written for analysts, not programmers.

### "The Linux Command Line" by William Shotts
https://linuxcommand.org/tlcl.php

Free PDF. A thorough introduction to working in the terminal.
