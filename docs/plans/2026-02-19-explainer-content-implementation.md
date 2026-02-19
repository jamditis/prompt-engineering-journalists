# Explainer content implementation plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add plain-English framing sections to Module 1 and Module 4 HTML pages, and create three standalone concept explainer articles at `docs/concepts/`.

**Architecture:** Four new HTML pages following the existing design (Fraunces/Inter/JetBrains Mono, same color tokens, same nav structure). Two existing module pages get a new "Before you start" section inserted before the Key concepts section. All pages link to each other via a concepts index.

**Tech Stack:** Plain HTML, Tailwind CSS CDN, same config.js and amditis.css as all other pages.

**Writing rules (non-negotiable for all content in this plan):**
- Sentence case everywhere — no Title Case in headings or UI text
- No banned words: comprehensive, sophisticated, robust, transformative, leveraging, seamlessly, innovative, holistic, empower
- No "not just X — it's Y" patterns
- No filler phrases ("it's worth noting", "with that in mind", "in order to")
- Active voice, short paragraphs (2-4 sentences)
- Analogies must be specific and accurate
- No padding — every sentence earns its place

---

### Task 1: Create the concepts index page

**Files:**
- Create: `docs/concepts/index.html`

**Step 1: Create the file**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concepts | Advanced prompt engineering for journalists</title>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="../assets/js/config.js"></script>
    <link rel="stylesheet" href="../assets/css/amditis.css">
    <link rel="icon" type="image/svg+xml" href="../assets/favicon.svg" />
</head>
<body class="antialiased font-sans bg-void text-chrome">
    <a href="#main" class="skip-link">Skip to main content</a>

    <div class="relative z-10 flex min-h-screen flex-col">
        <header class="border-b border-white/10 bg-panel/50 backdrop-blur-md sticky top-0 z-50">
            <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="../" class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-acid text-void flex items-center justify-center font-bold font-display text-xl rounded-lg">P</div>
                    <span class="font-display font-bold text-sm tracking-wider text-chrome">PROMPT_ENG</span>
                </a>
                <nav aria-label="Module navigation" class="hidden md:flex gap-4 text-xs font-mono">
                    <a href="../module-1/" class="text-gray-400 hover:text-ice transition-colors">[ 01 ]</a>
                    <a href="../module-2/" class="text-gray-400 hover:text-ice transition-colors">[ 02 ]</a>
                    <a href="../module-3/" class="text-gray-400 hover:text-ice transition-colors">[ 03 ]</a>
                    <a href="../module-4/" class="text-gray-400 hover:text-ice transition-colors">[ 04 ]</a>
                    <a href="../module-5/" class="text-gray-400 hover:text-ice transition-colors">[ 05 ]</a>
                </nav>
            </div>
        </header>

        <section class="py-12 px-6 border-b border-white/10">
            <div class="max-w-5xl mx-auto">
                <div class="text-xs text-acid font-mono mb-4">CONCEPTS</div>
                <h1 class="font-display text-4xl md:text-5xl font-bold text-white">Plain-English explainers</h1>
                <p class="text-gray-300 text-lg font-sans mt-4 max-w-2xl">Short articles that explain the core ideas behind each module — written for journalists, not developers.</p>
            </div>
        </section>

        <main id="main" class="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
            <div class="space-y-4">

                <a href="what-is-a-cli.html" class="block border border-white/10 bg-panel p-6 hover:border-ice/40 transition-colors group">
                    <div class="text-xs text-ice font-mono mb-2">MODULE 01</div>
                    <h2 class="font-display text-xl text-white group-hover:text-ice transition-colors mb-2">What is a CLI?</h2>
                    <p class="text-gray-300 text-sm leading-relaxed">You've been typing prompts into a browser. A CLI is a different window to the same capability — and it unlocks things the browser can't do.</p>
                </a>

                <a href="how-context-files-work.html" class="block border border-white/10 bg-panel p-6 hover:border-ice/40 transition-colors group">
                    <div class="text-xs text-ice font-mono mb-2">MODULE 02</div>
                    <h2 class="font-display text-xl text-white group-hover:text-ice transition-colors mb-2">How context files work</h2>
                    <p class="text-gray-300 text-sm leading-relaxed">Every time you start a new chat, the AI has no memory of you. A context file changes that — you write your briefing once, and the AI reads it every session.</p>
                </a>

                <a href="how-ai-session-memory-works.html" class="block border border-white/10 bg-panel p-6 hover:border-ice/40 transition-colors group">
                    <div class="text-xs text-ice font-mono mb-2">MODULE 04</div>
                    <h2 class="font-display text-xl text-white group-hover:text-ice transition-colors mb-2">How AI session memory works</h2>
                    <p class="text-gray-300 text-sm leading-relaxed">AI tools don't remember conversations the way people do. Understanding how their memory actually works helps you structure sessions that stay focused and cost less.</p>
                </a>

            </div>
        </main>

        <footer class="border-t border-white/10 bg-panel">
            <div class="max-w-5xl mx-auto px-6 py-8">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div class="text-xs font-mono text-gray-300">Advanced prompt engineering for journalists</div>
                    <div class="flex items-center gap-6">
                        <a href="../" class="text-xs font-mono text-gray-300 hover:text-acid transition-colors">HOME</a>
                        <a href="./" class="text-xs font-mono text-acid">CONCEPTS</a>
                        <a href="https://github.com/jamditis/prompt-engineering-journalists" class="text-xs font-mono text-gray-300 hover:text-ice transition-colors">GITHUB</a>
                    </div>
                </div>
                <div class="mt-6 pt-6 border-t border-white/5 text-center">
                    <p class="text-xs font-sans text-gray-300">&copy; 2026 Knight Center for Journalism in the Americas</p>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
```

**Step 2: Commit**

```bash
cd ~/projects/prompt-engineering-journalists
git add docs/concepts/index.html
git commit -m "feat: add concepts index page"
```

---

### Task 2: Create the CLI explainer article + add framing to Module 1

**Files:**
- Create: `docs/concepts/what-is-a-cli.html`
- Modify: `docs/module-1/index.html` (insert framing section before `<!-- Key concepts -->`)

**Step 1: Create `docs/concepts/what-is-a-cli.html`**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>What is a CLI? | Advanced prompt engineering for journalists</title>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="../assets/js/config.js"></script>
    <link rel="stylesheet" href="../assets/css/amditis.css">
    <link rel="icon" type="image/svg+xml" href="../assets/favicon.svg" />
</head>
<body class="antialiased font-sans bg-void text-chrome">
    <a href="#main" class="skip-link">Skip to main content</a>

    <div class="relative z-10 flex min-h-screen flex-col">
        <header class="border-b border-white/10 bg-panel/50 backdrop-blur-md sticky top-0 z-50">
            <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="../" class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-acid text-void flex items-center justify-center font-bold font-display text-xl rounded-lg">P</div>
                    <span class="font-display font-bold text-sm tracking-wider text-chrome">PROMPT_ENG</span>
                </a>
                <nav aria-label="Module navigation" class="hidden md:flex gap-4 text-xs font-mono">
                    <a href="../module-1/" class="text-gray-400 hover:text-ice transition-colors">[ 01 ]</a>
                    <a href="../module-2/" class="text-gray-400 hover:text-ice transition-colors">[ 02 ]</a>
                    <a href="../module-3/" class="text-gray-400 hover:text-ice transition-colors">[ 03 ]</a>
                    <a href="../module-4/" class="text-gray-400 hover:text-ice transition-colors">[ 04 ]</a>
                    <a href="../module-5/" class="text-gray-400 hover:text-ice transition-colors">[ 05 ]</a>
                </nav>
            </div>
        </header>

        <section class="py-12 px-6 border-b border-white/10">
            <div class="max-w-5xl mx-auto">
                <div class="text-xs text-acid font-mono mb-4">CONCEPTS — MODULE 01</div>
                <h1 class="font-display text-4xl md:text-5xl font-bold text-white">What is a CLI?</h1>
                <p class="text-gray-300 text-lg font-sans mt-4 max-w-2xl">A plain-English explanation for journalists who've used AI in the browser but haven't touched a terminal.</p>
            </div>
        </section>

        <main id="main" class="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
            <div class="max-w-prose space-y-8">

                <div class="prose-section">
                    <h2 class="font-display text-2xl text-chrome mb-4">The interface you know</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">When you use Claude.ai or ChatGPT, you're using a web application. There's a text box. You type something in. The AI responds. You copy the output and paste it wherever you need it.</p>
                    <p class="text-gray-300 leading-relaxed">That interface is convenient, but it has a hard limit: everything passes through your clipboard. The AI can't reach into a folder on your computer, process 50 files in sequence, or hand its output directly to another tool.</p>
                </div>

                <div class="prose-section">
                    <h2 class="font-display text-2xl text-chrome mb-4">What a CLI actually is</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">A CLI — command-line interface — is a text-based window for talking to your computer. Instead of clicking icons and menus, you type short commands and press Enter. The results appear as text.</p>
                    <p class="text-gray-300 leading-relaxed mb-4">On a Mac, this window is called Terminal. On Windows, it's Command Prompt or PowerShell. You've probably seen it in movies — the black screen with green text. That's the same thing, dressed up for dramatic effect.</p>
                    <p class="text-gray-300 leading-relaxed">The terminal isn't the AI. It's where you run the AI — and everything else on your computer.</p>
                </div>

                <div class="border border-white/10 bg-panel p-6">
                    <h3 class="font-display text-lg text-acid mb-3">A journalism analogy</h3>
                    <p class="text-gray-300 text-sm leading-relaxed mb-3">Imagine you're researching a story and you have 200 interview transcripts saved as text files. Using a web browser interface, you'd open each one, copy the text, paste it into Claude.ai, ask your question, copy the response, and paste it somewhere. That's 200 copy-paste cycles.</p>
                    <p class="text-gray-300 text-sm leading-relaxed">With a CLI tool, you write one command that says: <em>"Read every file in this folder, find mentions of [source name], and save a summary to a new file."</em> The AI processes all 200 transcripts while you do something else.</p>
                </div>

                <div class="prose-section">
                    <h2 class="font-display text-2xl text-chrome mb-4">What changes when you use a CLI tool</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">The underlying AI model is the same whether you access it through a browser or a terminal. Claude Sonnet is Claude Sonnet either way. What changes is what you can do with the output.</p>
                    <p class="text-gray-300 leading-relaxed mb-4">CLI tools can read files directly from your computer. They can write files back. They can chain together: one command's output becomes the next command's input. They can loop through hundreds of items automatically. And they can be scripted — saved as a recipe you run again next week without retyping anything.</p>
                    <p class="text-gray-300 leading-relaxed">For journalists, this is the difference between using AI as a chat partner and using it as a tool that fits into how you already work.</p>
                </div>

                <div class="prose-section">
                    <h2 class="font-display text-2xl text-chrome mb-4">What you don't need to know</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">You don't need to understand how computers work at a deep level. You don't need to write software. The commands in this course are short — usually one line — and you'll have a reference to look them up.</p>
                    <p class="text-gray-300 leading-relaxed">The main adjustment is mental: instead of clicking buttons, you'll be typing short instructions. The computer follows them exactly. If something doesn't work, the error message usually tells you what went wrong.</p>
                </div>

                <div class="border border-acid/20 bg-acidDim p-6">
                    <p class="text-sm font-sans text-gray-300"><span class="text-acid font-mono font-bold">READY?</span> Head back to <a href="../module-1/" class="text-ice hover:text-acid transition-colors">Module 1</a> to install the tools and run your first CLI command.</p>
                </div>

            </div>
        </main>

        <footer class="border-t border-white/10 bg-panel">
            <div class="max-w-5xl mx-auto px-6 py-8">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div class="text-xs font-mono text-gray-300">Advanced prompt engineering for journalists</div>
                    <div class="flex items-center gap-6">
                        <a href="../" class="text-xs font-mono text-gray-300 hover:text-acid transition-colors">HOME</a>
                        <a href="./" class="text-xs font-mono text-gray-300 hover:text-acid transition-colors">CONCEPTS</a>
                        <a href="../module-1/" class="text-xs font-mono text-acid">MODULE 01</a>
                    </div>
                </div>
                <div class="mt-6 pt-6 border-t border-white/5 text-center">
                    <p class="text-xs font-sans text-gray-300">&copy; 2026 Knight Center for Journalism in the Americas</p>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
```

**Step 2: Insert framing section into `docs/module-1/index.html`**

Find this comment in the file (around line 62):
```html
            <!-- Key concepts -->
```

Insert the following block immediately before it:

```html
            <!-- Before you start -->
            <section>
                <div class="border-b border-white/10 pb-4 mb-6">
                    <h2 class="font-display text-xl text-chrome">Before you start</h2>
                </div>
                <div class="space-y-4">
                    <p class="text-gray-300 text-sm leading-relaxed">You've used AI through a browser — typed a prompt, read the response, copied it somewhere. That works, but it puts the clipboard between you and the tool. Every file you want to analyze has to be copied in by hand. Every response has to be copied back out.</p>
                    <p class="text-gray-300 text-sm leading-relaxed">This module moves you into a terminal, where AI tools can read files directly from your computer, write results back to disk, and be chained together into automated workflows. The model you're using is the same. The interface changes what you can do with it.</p>
                    <a href="../concepts/what-is-a-cli.html" class="inline-flex items-center gap-2 text-ice text-sm hover:text-acid transition-colors">
                        Read the full explanation: what is a CLI? →
                    </a>
                </div>
            </section>

```

**Step 3: Commit**

```bash
git add docs/concepts/what-is-a-cli.html docs/module-1/index.html
git commit -m "feat: add CLI explainer article and module-1 framing section"
```

---

### Task 3: Create the context files explainer article

**Files:**
- Create: `docs/concepts/how-context-files-work.html`

Note: Module 2's HTML page covers voice input, not context files, so this article is standalone — linked from the concepts index only.

**Step 1: Create `docs/concepts/how-context-files-work.html`**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How context files work | Advanced prompt engineering for journalists</title>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="../assets/js/config.js"></script>
    <link rel="stylesheet" href="../assets/css/amditis.css">
    <link rel="icon" type="image/svg+xml" href="../assets/favicon.svg" />
</head>
<body class="antialiased font-sans bg-void text-chrome">
    <a href="#main" class="skip-link">Skip to main content</a>

    <div class="relative z-10 flex min-h-screen flex-col">
        <header class="border-b border-white/10 bg-panel/50 backdrop-blur-md sticky top-0 z-50">
            <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="../" class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-acid text-void flex items-center justify-center font-bold font-display text-xl rounded-lg">P</div>
                    <span class="font-display font-bold text-sm tracking-wider text-chrome">PROMPT_ENG</span>
                </a>
                <nav aria-label="Module navigation" class="hidden md:flex gap-4 text-xs font-mono">
                    <a href="../module-1/" class="text-gray-400 hover:text-ice transition-colors">[ 01 ]</a>
                    <a href="../module-2/" class="text-gray-400 hover:text-ice transition-colors">[ 02 ]</a>
                    <a href="../module-3/" class="text-gray-400 hover:text-ice transition-colors">[ 03 ]</a>
                    <a href="../module-4/" class="text-gray-400 hover:text-ice transition-colors">[ 04 ]</a>
                    <a href="../module-5/" class="text-gray-400 hover:text-ice transition-colors">[ 05 ]</a>
                </nav>
            </div>
        </header>

        <section class="py-12 px-6 border-b border-white/10">
            <div class="max-w-5xl mx-auto">
                <div class="text-xs text-acid font-mono mb-4">CONCEPTS — MODULE 02</div>
                <h1 class="font-display text-4xl md:text-5xl font-bold text-white">How context files work</h1>
                <p class="text-gray-300 text-lg font-sans mt-4 max-w-2xl">AI tools start every session with no memory of you. A context file is how you fix that — once.</p>
            </div>
        </section>

        <main id="main" class="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
            <div class="max-w-prose space-y-8">

                <div class="prose-section">
                    <h2 class="font-display text-2xl text-chrome mb-4">The blank slate problem</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">Every time you open a new chat with an AI tool, it has no memory of previous conversations. It doesn't know your beat, your publication, your style guide, your sources, or what you worked on last week. You start from zero every session.</p>
                    <p class="text-gray-300 leading-relaxed">For a one-off question, that's fine. For ongoing investigative work, it means you're spending the first few minutes of every session re-explaining the same background — which is time you could spend on the actual work.</p>
                </div>

                <div class="prose-section">
                    <h2 class="font-display text-2xl text-chrome mb-4">What a context file does</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">A context file — called <code class="text-acid bg-surface px-1 text-sm">CLAUDE.md</code> for Claude Code — is a plain text file you create in your project folder. When you start a session, Claude reads it automatically before you type anything.</p>
                    <p class="text-gray-300 leading-relaxed mb-4">You write the briefing once. The AI gets it every time, without you having to paste it in manually.</p>
                    <p class="text-gray-300 leading-relaxed">Think of it like a source file for a beat reporter. You maintain a running document with background on your key sources, ongoing story threads, and institutional context. You consult it before every interview. The context file does the same job — except Claude reads it, not you.</p>
                </div>

                <div class="border border-white/10 bg-panel p-6">
                    <h3 class="font-display text-lg text-acid mb-3">What goes in a context file</h3>
                    <p class="text-gray-300 text-sm leading-relaxed mb-4">A context file can contain anything that's true across multiple sessions. Common contents for journalism work:</p>
                    <ul class="space-y-2 text-sm font-sans text-gray-300">
                        <li class="flex items-start gap-3"><span class="text-acid">—</span> Your beat and publication</li>
                        <li class="flex items-start gap-3"><span class="text-acid">—</span> Key people, organizations, and their relationships to your stories</li>
                        <li class="flex items-start gap-3"><span class="text-acid">—</span> Style preferences (AP style, your publication's house style)</li>
                        <li class="flex items-start gap-3"><span class="text-acid">—</span> Recurring tasks you want the AI to handle consistently</li>
                        <li class="flex items-start gap-3"><span class="text-acid">—</span> Folder structure for your project files</li>
                    </ul>
                </div>

                <div class="prose-section">
                    <h2 class="font-display text-2xl text-chrome mb-4">Project context vs. global context</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">You can have multiple context files. A global one covers preferences that apply to all your work — your writing style, common instructions. A project-level one lives inside a specific story folder and covers just that investigation.</p>
                    <p class="text-gray-300 leading-relaxed">When you're inside a project folder, Claude reads both: global context first, then project context. This means you don't repeat yourself — general rules live in one place, project-specific details in another.</p>
                </div>

                <div class="prose-section">
                    <h2 class="font-display text-2xl text-chrome mb-4">What this changes about how you work</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">With a context file, your first message in a session can be the actual task — not the background. "Analyze the new budget documents against last year's" instead of "I'm a reporter covering city hall, our publication is X, here's some background..."</p>
                    <p class="text-gray-300 leading-relaxed">The setup cost shifts from every session to once per project. As your context file improves over time, so does the AI's usefulness — because it's working with better information about what you actually need.</p>
                </div>

                <div class="border border-acid/20 bg-acidDim p-6">
                    <p class="text-sm font-sans text-gray-300"><span class="text-acid font-mono font-bold">NEXT:</span> Head to <a href="../module-2/" class="text-ice hover:text-acid transition-colors">Module 2</a> to write your first context file for a real journalism project.</p>
                </div>

            </div>
        </main>

        <footer class="border-t border-white/10 bg-panel">
            <div class="max-w-5xl mx-auto px-6 py-8">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div class="text-xs font-mono text-gray-300">Advanced prompt engineering for journalists</div>
                    <div class="flex items-center gap-6">
                        <a href="../" class="text-xs font-mono text-gray-300 hover:text-acid transition-colors">HOME</a>
                        <a href="./" class="text-xs font-mono text-gray-300 hover:text-acid transition-colors">CONCEPTS</a>
                        <a href="../module-2/" class="text-xs font-mono text-acid">MODULE 02</a>
                    </div>
                </div>
                <div class="mt-6 pt-6 border-t border-white/5 text-center">
                    <p class="text-xs font-sans text-gray-300">&copy; 2026 Knight Center for Journalism in the Americas</p>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
```

**Step 2: Commit**

```bash
git add docs/concepts/how-context-files-work.html
git commit -m "feat: add context files explainer article"
```

---

### Task 4: Create the session memory explainer article + add framing to Module 4

**Files:**
- Create: `docs/concepts/how-ai-session-memory-works.html`
- Modify: `docs/module-4/index.html` (insert framing section before `<!-- Key concepts -->`)

Note: Module 4 already has a "How AI session memory works" section in the optional resources area (added in an earlier session). The standalone article goes deeper and is written as a proper explainer, not a reference card. The framing section on the module page is a brief bridge paragraph — not a duplicate of the optional resources content.

**Step 1: Create `docs/concepts/how-ai-session-memory-works.html`**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How AI session memory works | Advanced prompt engineering for journalists</title>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="../assets/js/config.js"></script>
    <link rel="stylesheet" href="../assets/css/amditis.css">
    <link rel="icon" type="image/svg+xml" href="../assets/favicon.svg" />
</head>
<body class="antialiased font-sans bg-void text-chrome">
    <a href="#main" class="skip-link">Skip to main content</a>

    <div class="relative z-10 flex min-h-screen flex-col">
        <header class="border-b border-white/10 bg-panel/50 backdrop-blur-md sticky top-0 z-50">
            <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="../" class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-acid text-void flex items-center justify-center font-bold font-display text-xl rounded-lg">P</div>
                    <span class="font-display font-bold text-sm tracking-wider text-chrome">PROMPT_ENG</span>
                </a>
                <nav aria-label="Module navigation" class="hidden md:flex gap-4 text-xs font-mono">
                    <a href="../module-1/" class="text-gray-400 hover:text-ice transition-colors">[ 01 ]</a>
                    <a href="../module-2/" class="text-gray-400 hover:text-ice transition-colors">[ 02 ]</a>
                    <a href="../module-3/" class="text-gray-400 hover:text-ice transition-colors">[ 03 ]</a>
                    <a href="../module-4/" class="text-acid">[ 04 ]</a>
                    <a href="../module-5/" class="text-gray-400 hover:text-ice transition-colors">[ 05 ]</a>
                </nav>
            </div>
        </header>

        <section class="py-12 px-6 border-b border-white/10">
            <div class="max-w-5xl mx-auto">
                <div class="text-xs text-acid font-mono mb-4">CONCEPTS — MODULE 04</div>
                <h1 class="font-display text-4xl md:text-5xl font-bold text-white">How AI session memory works</h1>
                <p class="text-gray-300 text-lg font-sans mt-4 max-w-2xl">AI tools don't remember conversations the way people do. Understanding how their memory actually works changes how you set up sessions.</p>
            </div>
        </section>

        <main id="main" class="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
            <div class="max-w-prose space-y-8">

                <div class="prose-section">
                    <h2 class="font-display text-2xl text-chrome mb-4">Not memory — context</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">When people talk about AI "remembering" things, they're using the wrong word. AI language models don't have memory the way you do. They don't store information between sessions. They don't have a filing cabinet somewhere with notes about past conversations.</p>
                    <p class="text-gray-300 leading-relaxed">What they have is a context window: a block of text that they can see at any given moment. Everything the AI "knows" during a session is in that block — your messages, its responses, and any files you've shared. When the session ends, that block is gone.</p>
                </div>

                <div class="prose-section">
                    <h2 class="font-display text-2xl text-chrome mb-4">What fits in a context window</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">Context windows are measured in tokens — roughly, chunks of text. A typical long-form article is about 2,000–3,000 tokens. Current Claude models have context windows large enough to hold hundreds of pages of text.</p>
                    <p class="text-gray-300 leading-relaxed mb-4">The practical limit isn't the window size — it's your attention to what you're putting in it. A context window loaded with irrelevant background, repeated instructions, and conversational filler gives the AI more noise to work through when finding what's actually relevant to your question.</p>
                    <p class="text-gray-300 leading-relaxed">The quality of the AI's output depends heavily on the quality of what's in the context window.</p>
                </div>

                <div class="border border-white/10 bg-panel p-6">
                    <h3 class="font-display text-lg text-acid mb-3">A filing analogy</h3>
                    <p class="text-gray-300 text-sm leading-relaxed mb-3">Imagine you're briefing a researcher on a complex investigation. You could hand them a folder with your most relevant documents on top — or you could hand them an unsorted box of everything you've ever written, including grocery lists.</p>
                    <p class="text-gray-300 text-sm leading-relaxed">They're equally capable either way. But one setup produces better research faster. The context window is the folder. You decide what goes in it.</p>
                </div>

                <div class="prose-section">
                    <h2 class="font-display text-2xl text-chrome mb-4">How the cache works — and why order matters</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">When you send a message to Claude, it processes everything in the context window. For long sessions, this processing has a cost — both in time and, for API users, in money. To reduce that cost, Claude caches parts of the context that haven't changed.</p>
                    <p class="text-gray-300 leading-relaxed mb-4">The cache works by prefix: it stores the beginning of the context window and reuses it for subsequent messages. If the beginning of your context doesn't change between messages, Claude doesn't have to reprocess it — it just reads from cache.</p>
                    <p class="text-gray-300 leading-relaxed">This means order matters. Put stable content — your context file, your system instructions, your background documents — at the top. Put dynamic content — today's task, this specific question — at the bottom. Putting a timestamp or session-specific note at the top busts the cache on every message, which slows things down.</p>
                </div>

                <div class="border border-white/10 bg-panel p-6">
                    <h3 class="font-display text-lg text-acid mb-3">Four rules for efficient sessions</h3>
                    <ul class="space-y-3 text-sm font-sans text-gray-300">
                        <li class="flex items-start gap-3"><span class="text-acid font-mono">1.</span> <span><strong class="text-chrome">Stable context first, current task last.</strong> Your briefing document goes at the top. The specific question you're asking right now goes at the bottom.</span></li>
                        <li class="flex items-start gap-3"><span class="text-acid font-mono">2.</span> <span><strong class="text-chrome">Don't switch models mid-session.</strong> Each model has its own cache. Switching from Claude Sonnet to Claude Opus mid-session discards the cached context and starts fresh.</span></li>
                        <li class="flex items-start gap-3"><span class="text-acid font-mono">3.</span> <span><strong class="text-chrome">Add new context by appending, not rewriting.</strong> Adding a note at the end of your context file preserves the cached prefix. Rewriting the existing briefing forces Claude to reprocess everything from the edit point down.</span></li>
                        <li class="flex items-start gap-3"><span class="text-acid font-mono">4.</span> <span><strong class="text-chrome">Plan your session setup before starting.</strong> Five minutes spent thinking about what context you need saves a scattered session where you keep adding background mid-conversation.</span></li>
                    </ul>
                </div>

                <div class="prose-section">
                    <h2 class="font-display text-2xl text-chrome mb-4">What this means for journalism workflows</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">If you're building an automated pipeline — a script that processes new documents daily, or a scheduled task that checks sources — session setup matters a lot. A pipeline that starts each run with a stable briefing document is faster and cheaper than one that reconstructs context each time.</p>
                    <p class="text-gray-300 leading-relaxed">For one-off research sessions, the practical rule is simpler: start with context, end with task. Your CLAUDE.md file handles the first part automatically.</p>
                </div>

                <div class="border border-acid/20 bg-acidDim p-6">
                    <p class="text-sm font-sans text-gray-300"><span class="text-acid font-mono font-bold">SOURCE:</span> The cache behavior described here was documented by <a href="https://twitter.com/trq212/status/2024574133011673516" target="_blank" rel="noopener" class="text-ice hover:text-acid transition-colors">@trq212 on Twitter/X</a>, based on analysis of Claude Code's internals.</p>
                </div>

                <div class="border border-acid/20 bg-acidDim p-6">
                    <p class="text-sm font-sans text-gray-300"><span class="text-acid font-mono font-bold">NEXT:</span> Head to <a href="../module-4/" class="text-ice hover:text-acid transition-colors">Module 4</a> to build your first CLI workflow pipeline.</p>
                </div>

            </div>
        </main>

        <footer class="border-t border-white/10 bg-panel">
            <div class="max-w-5xl mx-auto px-6 py-8">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div class="text-xs font-mono text-gray-300">Advanced prompt engineering for journalists</div>
                    <div class="flex items-center gap-6">
                        <a href="../" class="text-xs font-mono text-gray-300 hover:text-acid transition-colors">HOME</a>
                        <a href="./" class="text-xs font-mono text-gray-300 hover:text-acid transition-colors">CONCEPTS</a>
                        <a href="../module-4/" class="text-xs font-mono text-acid">MODULE 04</a>
                    </div>
                </div>
                <div class="mt-6 pt-6 border-t border-white/5 text-center">
                    <p class="text-xs font-sans text-gray-300">&copy; 2026 Knight Center for Journalism in the Americas</p>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
```

**Step 2: Insert framing section into `docs/module-4/index.html`**

Find this comment in the file (the Key concepts section header):
```html
            <!-- Key concepts -->
```

Insert immediately before it:

```html
            <!-- Before you start -->
            <section>
                <div class="border-b border-white/10 pb-4 mb-6">
                    <h2 class="font-display text-xl text-chrome">Before you start</h2>
                </div>
                <div class="space-y-4">
                    <p class="text-gray-300 text-sm leading-relaxed">This module is about building automated pipelines — scripts that run a sequence of AI tasks without you manually intervening. To use them well, it helps to understand what's actually happening inside an AI session: how context is stored, why order matters, and what "caching" means for how quickly your pipeline runs.</p>
                    <a href="../concepts/how-ai-session-memory-works.html" class="inline-flex items-center gap-2 text-ice text-sm hover:text-acid transition-colors">
                        Read the full explanation: how AI session memory works →
                    </a>
                </div>
            </section>

```

**Step 3: Commit**

```bash
git add docs/concepts/how-ai-session-memory-works.html docs/module-4/index.html
git commit -m "feat: add session memory explainer article and module-4 framing section"
```

---

### Task 5: Verify and push

**Step 1: Verify no slop in any new file**

Run a quick scan for banned words:
```bash
grep -rn "comprehensive\|sophisticated\|robust\|transformative\|leveraging\|seamlessly\|innovative\|holistic\|empower" \
  docs/concepts/ docs/module-1/index.html docs/module-4/index.html
```
Expected: no output.

**Step 2: Verify links resolve**

Check that all cross-links in the new files point to paths that exist:
- `docs/concepts/index.html` links to `what-is-a-cli.html`, `how-context-files-work.html`, `how-ai-session-memory-works.html` — all created
- `docs/module-1/index.html` framing links to `../concepts/what-is-a-cli.html` — exists
- `docs/module-4/index.html` framing links to `../concepts/how-ai-session-memory-works.html` — exists

**Step 3: Push**

```bash
git push origin main
```

GitHub Pages deploys automatically. The concepts pages will be live at:
- `https://jamditis.github.io/prompt-engineering-journalists/concepts/`
- `https://jamditis.github.io/prompt-engineering-journalists/concepts/what-is-a-cli.html`
- `https://jamditis.github.io/prompt-engineering-journalists/concepts/how-context-files-work.html`
- `https://jamditis.github.io/prompt-engineering-journalists/concepts/how-ai-session-memory-works.html`
