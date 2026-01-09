# Exercise: Set up voice input and dictate a story outline to Claude Code

## Module 2: Voice-controlled AI

This hands-on exercise walks you through setting up voice input on your computer and using it to interact with Claude Code. By the end, you will have dictated a story outline using only your voice.

---

## Part 1: Choose your transcription tool

Pick one of the following options based on your operating system and preferences.

### Option A: Windows voice typing (easiest, Windows only)

1. Open any text field (Notepad, a browser, etc.)
2. Press **Win+H** to activate voice typing
3. Speak and watch your words appear
4. Press Win+H again to stop

No setup required. Works immediately.

### Option B: macOS dictation (easiest, Mac only)

1. Go to **System Settings > Keyboard > Dictation**
2. Turn on Dictation
3. Choose your preferred shortcut (default: press Control key twice)
4. Open any text field and use the shortcut to start dictating

### Option C: Gemini Flash API (free, any platform)

1. Go to https://aistudio.google.com/
2. Sign in with a Google account
3. Click "Get API key" and create a key
4. Save the key somewhere secure
5. Use a tool that supports Gemini for transcription (e.g., AudioBash, or build your own with the API)

This option requires more setup but works on any platform and offers high accuracy.

### Option D: Local Whisper (offline, any platform)

1. Install Python 3.8 or later
2. Run: `pip install openai-whisper`
3. Run: `whisper audio.wav --model base`
4. Whisper will transcribe the audio file locally

This option keeps all audio on your machine. Useful for sensitive content.

---

## Part 2: Test your setup

Before using voice with Claude Code, practice with a simple test.

1. Open a text editor or note-taking app
2. Activate voice input using the method you chose
3. Dictate the following sentence:

   "The city council voted 5 to 2 to approve the new budget."

4. Check the transcription for accuracy
5. Try again with a more complex sentence:

   "According to the mayor, the $4.2 million allocation will fund three new programs."

Note any errors. Numbers, names, and technical terms often need correction.

---

## Part 3: Dictate a story outline to Claude Code

Now use voice input to interact with Claude Code.

### Step 1: Open Claude Code

Open your terminal and start Claude Code:

```
claude
```

### Step 2: Plan your story

Think of a simple local news story you could write. Examples:
- A city council meeting about a new park
- A school board decision on bus routes
- A local business opening or closing

### Step 3: Dictate your request

Activate voice input and speak your request to Claude Code. For example:

"Help me outline a news story. The story is about a city council meeting where they voted to close a community pool due to budget cuts. The vote was 4 to 3. The mayor supported keeping the pool open but was outvoted. Give me a five point outline for an 800 word article."

Pause briefly after speaking, then review what was transcribed.

### Step 4: Submit and review

Press Enter to submit your dictated prompt. Review Claude Code's response.

### Step 5: Iterate with voice

Continue the conversation using voice. Try:

"Add a section about community reaction."

or

"What questions should I ask the mayor in an interview?"

---

## Part 4: Reflection

After completing the exercise, answer these questions (you can type or dictate your answers):

1. How accurate was the transcription?
2. What types of words or phrases caused errors?
3. Was speaking faster or slower than typing for this task?
4. In what situations would you use voice input in your actual work?

---

## Submission

Post a short summary (3-5 sentences) in the discussion forum describing:
- Which transcription method you used
- One thing that worked well
- One challenge you encountered

No need to share your actual story outline unless you want to.
