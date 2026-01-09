# Module 4: CLI workflows for newsrooms

## Midweek message

Hello everyone,

By now you should have completed the readings and made progress on the article-to-newsletter pipeline exercise. If you've successfully fetched an article with curl and extracted its content with readability, you're on track.

Common sticking points this week:

**Tool installation.** jq and readability-cli cause the most trouble. On Mac, `brew install jq` usually works. For readability, make sure npm is installed first (`node --version` to check), then `npm install -g @peerless/readability-cli`. Windows users: WSL makes this much easier than native Windows.

**API key setup.** Store your Anthropic key in a file, not in the script itself. The exercise shows how: `~/.config/newsletter-pipeline/anthropic_key`. Check permissions with `ls -la` to confirm only you can read it.

**Empty output from readability.** Some websites block scrapers or use heavy JavaScript rendering. If your test URL returns nothing, try a different news site. The Verge, Ars Technica, and most newspaper sites work well.

**Pipes not working.** Each step needs to succeed before the pipe passes data to the next step. Run each command separately first. Once each works alone, chain them together.

Discussion posts are due Friday. The thread on automating repetitive tasks has good ideas about what to build. If you haven't posted yet, think about what you do every morning or for every story.

The exercise takes longer than previous weeks. Budget at least 90 minutes. Getting stuck is part of the learning.

[Instructor name]
