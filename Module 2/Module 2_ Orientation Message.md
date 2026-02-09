# Orientation message

## Module 2: Voice-controlled AI

Hello, and welcome to Module 2 of Advanced Prompt Engineering for Journalists.

This week we focus on voice-controlled AI: speaking to your terminal instead of typing. For many journalists, typing is second nature. But voice input does more than save keystrokes. It changes how you think about prompts. When you speak instead of type, you tend to explain what you want rather than trying to craft the "perfect" phrasing. That shift often produces better results, because you're describing intent instead of performing syntax.

Voice-to-text technology has improved dramatically in recent years. Free and local transcription options now rival expensive commercial services. This module teaches you to set up voice input for your terminal and use it to interact with AI coding assistants like Claude Code.

### Learning objectives

By the end of this module, you will be able to:

1. Explain the difference between raw transcription mode and agent mode for terminal voice input, and choose the right one for a given task
2. Set up at least one voice transcription tool on your computer
3. Use voice dictation to give commands to an AI coding assistant
4. Evaluate transcription tools along a privacy gradient, from fully offline to cloud-based, and choose appropriately for sensitive reporting
5. Identify when voice input is faster than typing for journalism workflows

### Raw mode vs. agent mode

Before you start, understand the two cognitive modes you'll be working with. **Raw mode** transcribes exactly what you say — word for word, no interpretation. It is useful for dictating text: drafting stories, writing emails, composing notes. **Agent mode** interprets your speech as intent and generates appropriate terminal commands. It is useful for operating your tools: running scripts, navigating files, issuing instructions to Claude Code.

These are different ways of thinking, not just different settings. In raw mode, you are the author and the tool is a stenographer. In agent mode, you are giving direction and the tool decides how to execute. Knowing which mode you need before you start speaking will save you from dictating a paragraph when you meant to run a command, or vice versa.

### The privacy gradient

Not all transcription engines handle your audio the same way, and this matters for journalists. The options fall along a privacy gradient:

- **OS-level dictation** (Windows Speech, macOS Dictation) — Runs locally, requires no setup, but transcription quality is lower and custom vocabulary support is limited.
- **Local models** (Whisper, Parakeet) — Runs on your machine using your GPU. Audio never leaves your computer. High-quality transcription with no cloud dependency.
- **Cloud APIs** (Gemini Flash, OpenAI API) — Sends audio to remote servers for processing. Highest accuracy, but your speech data travels over the internet.

If you are working with confidential sources, recording sensitive interviews, or handling leaked documents, make a conscious choice about where your audio goes. Local-only transcription costs more in setup time but keeps everything on your machine. Cloud APIs are easier to configure but introduce a third party.

### Custom vocabulary for beat reporters

Generic transcription engines mangle the names that matter most to journalists: local officials, municipal agencies, legislation, technical terms specific to your beat. If you cover a city council, you know the difference between getting a council member's name right and getting it wrong.

Tools that support custom vocabulary mapping let you define corrections — telling the transcription engine that "Councilwoman Kowalski" is not "council woman cow walski." This week's exercise touches on setting up vocabulary lists. If you cover a specialized beat, start building yours early.

### This week's activities

- Watch the video lectures on voice transcription tools and terminal integration
- Complete the readings on voice-to-text for developers
- Try the hands-on exercise: dictating a story outline to Claude Code
- Participate in the discussion forums
- Complete the quiz

The video lectures walk through several transcription options and a purpose-built voice-to-terminal tool:

- **AudioBash** (Windows and macOS) — A voice-controlled terminal with built-in transcription, split panes, and context-aware agent mode that converts speech into commands.

AudioBash supports multiple transcription engines: Gemini Flash (free API, any platform), Windows Speech (built-in, no setup), and OpenAI Whisper. You also have standalone options like Parakeet (local GPU, fully offline) and your OS's built-in dictation. Pick the combination that matches your setup and your privacy requirements.

Check into the discussion forums this week. Voice input is personal. What works for one person may not work for another. Share your experiences, and learn from your classmates.

Please complete all module activities before the end of the week.

If you have questions about the course content, post in the "Question for the instructor" forum.

See you online.
