# Exercise: Set up voice input and dictate a story outline to Claude Code

## Module 2: Voice-controlled AI

This hands-on exercise walks you through setting up voice input on your computer and using it to interact with Claude Code. By the end, you will have dictated a story outline using only your voice.

---

## Part 1: Choose your voice tool

Pick one of the following options based on your operating system and preferences.

### Option A: AudioBash (recommended)

AudioBash is a voice-controlled terminal. Instead of recording, copying, and pasting, you speak directly into the terminal.

1. Download AudioBash from https://github.com/jamditis/audiobash/releases (Windows .exe or macOS .dmg)
2. Run the installer
3. Set up a transcription engine:
   - **Gemini Flash** (recommended): Get a free API key from https://aistudio.google.com/
   - **Windows Speech**: Works immediately with no setup
4. Open AudioBash — it's a full terminal with voice input built in
5. Press the record button or use the hotkey to speak

AudioBash supports agent mode, which converts natural speech like "show me the git status" into actual commands.

### Option B: Windows voice typing (simplest, no install)

1. Open any text field (Notepad, a browser, etc.)
2. Press **Win+H** to activate voice typing
3. Speak and watch your words appear
4. Press Win+H again to stop

No setup required. Works immediately, but you'll need to copy-paste into your terminal.

### Option C: macOS dictation (simplest, Mac only)

1. Go to **System Settings > Keyboard > Dictation**
2. Turn on Dictation
3. Choose your preferred shortcut (default: press Control key twice)
4. Open any text field and use the shortcut to start dictating

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
