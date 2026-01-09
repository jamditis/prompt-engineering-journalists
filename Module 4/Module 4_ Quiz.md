# Module 4: CLI workflows for newsrooms

## Quiz

5 multiple choice questions. The correct answer is marked with an asterisk (*).

---

### Question 1

What does the pipe operator (`|`) do in a command-line pipeline?

a. Saves the output of a command to a file

b. Runs two commands at the same time

c. Takes the output of one command and sends it as input to the next command *

d. Connects to a remote server

---

### Question 2

You have a file called `articles.json` containing an array of article objects. Each object has a `headline` field. Which `jq` command extracts all the headlines?

a. `jq 'headline' articles.json`

b. `jq '.[].headline' articles.json` *

c. `jq '.headline[]' articles.json`

d. `jq 'get headline' articles.json`

---

### Question 3

What is the purpose of a cron job?

a. To download files from the internet

b. To schedule commands to run automatically at specified times *

c. To convert text between different formats

d. To test if a website is online

---

### Question 4

In the pipeline `curl -s https://example.com/article | readability | claude "Summarize this"`, what happens if the `curl` command fails?

a. The pipeline retries automatically

b. An empty string is passed to the next command *

c. The entire pipeline pauses and waits

d. Claude receives the error message and summarizes it

---

### Question 5

Why might a journalist choose to run an AI model locally with Ollama instead of using a cloud API?

a. Local models are always more accurate than cloud models

b. Local models are free and unlimited, while cloud APIs charge per request

c. Sensitive data never leaves the journalist's computer *

d. Local models can process images, while cloud APIs cannot

---

## Answer key

1. c
2. b
3. b
4. b
5. c
