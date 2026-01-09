# Final project guidelines

## Overview

Your final project is to build a working CLI workflow that solves a real problem in your newsroom or journalism practice. This is a practical capstone: you'll apply the prompt engineering and automation skills from this course to create something you can actually use in your daily work.

## Requirements

Your project must meet all four criteria:

### 1. Use at least one CLI AI tool
Choose from:
- Claude Code
- Gemini CLI
- Aider
- Another CLI-based AI tool (get instructor approval first)

### 2. Include automation
Your workflow must go beyond a single prompt. Include at least one of:
- A shell script that chains multiple operations
- A cron job or scheduled task
- A pipeline that processes multiple inputs
- A custom Claude skill or command

### 3. Solve a real journalism problem
The project should address an actual challenge in your work:
- Something you currently do manually that takes too long
- A task you avoid because it's tedious
- A process that would benefit from AI assistance
- A workflow that needs better consistency or speed

### 4. Include documentation
Your submission must include a README that explains:
- What problem your workflow solves
- How to install and configure it
- How to run it
- What the expected output looks like
- Any limitations or edge cases

## Suggested project ideas

These are starting points. You can adapt them to your beat or invent something new.

**Newsletter automation pipeline**
Build a workflow that gathers content from your beat, summarizes recent developments, and drafts newsletter sections. Include a script that runs weekly and outputs markdown ready for your newsletter platform.

**Interview transcript processor**
Create a pipeline that takes raw interview audio or transcripts and extracts key quotes, identifies themes, and generates a structured document for story research. Include commands for different interview types (source interviews, press conferences, etc.).

**Source verification workflow**
Build a custom skill that helps verify claims, check backgrounds, and document sources. Include prompts for different verification scenarios and output formats compatible with your newsroom's fact-checking process.

**Social media content generator**
Create a script that takes a published story and generates platform-specific social posts, thread versions, and promotional copy. Include configuration for different platforms and voice guidelines.

**Custom Claude skill for your beat**
Build a specialized skill for your coverage area (courts, city hall, schools, etc.). Include domain-specific context, common document types you analyze, and prompts tailored to your beat's recurring tasks.

**Meeting notes processor**
Create a workflow that takes notes from public meetings (city council, school board, etc.) and extracts action items, identifies newsworthy decisions, and flags items requiring follow-up.

**Data cleaning pipeline**
Build an automation that takes messy public records (PDFs, spreadsheets, text files) and standardizes them for analysis. Include error handling and validation steps.

## Submission format

Submit one of the following:
- **GitHub repository**: Public or private repo with your code and documentation. If private, add the instructor as a collaborator.
- **Zip file**: Archive containing all project files, uploaded to the course LMS.

Your submission must include:
- All code and configuration files
- A README.md explaining the project
- Sample input/output files demonstrating the workflow
- Any custom skills or commands you created

## Grading rubric

Final project is worth 20% of your course grade.

| Criterion | Weight | Description |
|-----------|--------|-------------|
| Functionality | 40% | Does the workflow run successfully? Does it produce useful output? Can it handle realistic inputs? |
| Relevance | 30% | Does this solve an actual journalism problem? Would you use this in your work? Is it appropriate for your newsroom context? |
| Documentation | 20% | Can someone else understand how to use this? Are setup instructions clear? Is the code commented where needed? |
| Creativity | 10% | Does this show original thinking? Did you adapt the tools in an interesting way? Does it go beyond the course examples? |

### Grading scale

- **A (90-100)**: Workflow runs reliably, solves a clear journalism problem, documentation is thorough, shows thoughtful design
- **B (80-89)**: Workflow works with minor issues, addresses a real problem, documentation covers the basics, competent execution
- **C (70-79)**: Workflow works but has significant limitations, problem relevance is unclear, documentation is incomplete
- **D (60-69)**: Workflow partially works, limited journalism application, minimal documentation
- **F (below 60)**: Workflow doesn't function, no clear journalism purpose, missing documentation

## Timeline

- **Week 3**: Submit project proposal (see Project Proposal Template)
- **Week 4**: Work on project, use office hours for troubleshooting
- **End of course**: Submit final project

## Getting help

- Post questions in the course discussion forum
- Attend office hours for one-on-one troubleshooting
- Share work-in-progress in the peer review thread for feedback
- Review the example projects document for scope guidance
