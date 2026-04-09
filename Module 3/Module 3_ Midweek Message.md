# Module 3: CLI workflows for newsrooms

## Midweek message

Hi everyone,

By now you should have watched the videos — the conceptual overview of pipeline automation and the live demo where I add scheduling and deployment to a real project — and made progress on the article-to-newsletter pipeline exercise. If you've described your pipeline to Claude Code, reviewed the plan, and tested it on at least one article, you're on track.

Common sticking points this week:

**Tool installation.** The readability tool causes the most trouble. If your CLI tool's suggested install fails, paste the error back and ask it to troubleshoot. Don't debug install issues manually — that's what the tool is for.

**API key setup.** As I showed in the video, API keys are passwords. Store them in environment variables, not in the script itself. If Claude Code wrote your API key directly into the script, ask it to move the key to an environment variable and show you how to set it up.

**Empty output from content extraction.** Some websites block automated requests or use heavy JavaScript rendering. If your test URL returns nothing, try a different news site. Most newspaper sites work well. Ask your CLI tool: "The content extraction step returned empty output for this URL. How do I check whether the site is blocking the request?"

**The error debugging loop.** When something breaks — and it will — paste the exact error message back into your CLI session. Don't paraphrase. Your CLI tool already knows the code it built for you, so it can read the error in context and usually identify the problem immediately. This is the most important workflow pattern from this module.

[INSERT STUDENT THREADS/DISCUSSIONS]

Joe Amditis

