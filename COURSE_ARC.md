# Course arc

**Course:** Advanced Prompt Engineering for Journalists
**Instructor:** Joe Amditis, Center for Cooperative Media at Montclair State University
**Delivered by:** Knight Center for Journalism in the Americas at UT Austin
**Length:** 4 weeks, 10 main videos + 2 bonus interviews

This file is the master index of what was actually filmed. Use it as the source of truth when updating SYLLABUS.md, the `docs/` site, and the Knight Center delivery documents in Google Drive. If anything here is wrong, fix it here first — the site, the docs, and the syllabus follow.

## Through-line

```
Module 1 → Module 2 → Module 3 → Module 4
  setup      build      automate    refine
```

Each module answers a different question about working with CLI AI tools:

- **Module 1 — setup.** How do I get out of the browser and give the model persistent memory?
- **Module 2 — build.** How do I turn a one-off workflow into a reusable tool I can share?
- **Module 3 — automate.** How do I stop running workflows manually and let them run on a schedule?
- **Module 4 — refine.** Now that I know the mechanics, what are the advanced prompting patterns that make the work better?

Modules 1–3 are a linear progression (out of the browser → into the CLI → into a reusable plugin → into an automated pipeline). Module 4 pulls back to the craft: context management, sub-agents, cross-model review, and editorial judgment. Joe explicitly flags this shift at the top of Module 4 video 1.

## Module titles and themes

| # | Title | Theme | Videos |
|---|---|---|---|
| 1 | From chat window to command line | Escape the browser, set up your CLI workspace, and give the model persistent memory with CLAUDE.md | A1, A2 |
| 2 | Custom skills, plugins, and hooks | Turn real workflows into reusable skills and shareable plugins. Features a live five-platform video scraping demo | B1, B2 |
| 3 | Automation, pipelines, and triggered workflows | Stop running workflows manually. Schedule them with cloud triggers, GitHub Actions, and GitHub Pages | C1, C2 |
| 4 | Advanced prompting patterns | Context, effort, sub-agents, cross-model code review, and editorial judgment | D1, D2, D3, D4 |

**Bonus interviews** sit outside the main module arc and live under Module 1 as bonus content:
- **A1a — Madi McCool**, NJ Civic Information Consortium. Rebuilt her org's website with Claude Code, no prior coding background.
- **A1b — Mike Janssen**, Current.org. Using Codex CLI and AI tools in a small public media newsroom.

## Video list

Each row lists: video code, title, approximate duration, the folder it lives in under the Knight Center delivery Drive, and the companion Google Doc ID that was generated from the transcript.

### Module 1 — From chat window to command line

| Code | Title | Duration | Drive folder | Companion doc |
|---|---|---|---|---|
| **A1** | Getting out of the browser and setting up Claude Code | ~26 min | `Module 1/Videos/MOOC-A1/` (`1YnzVZ-9PINM8QGWVxXSUYd_fyDlJO_pp`) | `1Oqnx8m3kmBfy4GH-oZ600mFQI9Gll7j-YBL_h5d-AQY` |
| **A2** | Context files, CLAUDE.md, and memory | ~22 min | `Module 1/Videos/MOOC-A2/` (`1pQvGGp5wIUvMp65aQwbJmU15AsGxZvki`) | `1W-lOt9_rRzYR-lxrXRQMjqZMWmm5EwzLRXZ_DiAqrKE` |

**A1 covers:** course framing, why escape the browser (harnesses, Mollick), installing Claude Code in PowerShell, first `claude` session, a live side-by-side comparison of Claude Code vs. Claude on the web on the same research task (CCM staff profile extraction), `/init` and creating a CLAUDE.md, and the "That is all, Senator" demonstration of CLAUDE.md actually being read.

**A2 covers:** the three layers of context (global, project, session), what belongs in each CLAUDE.md, the "deletion test" for what makes good context, MEMORY.md and sub-memory files, the four types of memory (user, feedback, project, reference), treating context files as workflow infrastructure, committing CLAUDE.md to GitHub, and Joe's custom LESSONS.md experiment for tracking failures.

### Module 2 — Custom skills, plugins, and hooks

| Code | Title | Duration | Drive folder | Companion doc |
|---|---|---|---|---|
| **B1** | Skills, plugins, hooks, and a live video scraping demo | ~36 min | `Module 2/Videos/MOOC-B1/` (`1zt4ttNTbIx0NWygL7JXQYQuJPP8mZAA9`) | `1fUpWOGYmDS5rtdYujxjxeAO09qNhwrtVq9S3tqSe8aY` |
| **B2** | Turning a workflow into a reusable plugin | ~13 min | `Module 2/Videos/MOOC-B2/` (`1WWMzM-sAQlSwC07HwNNUlJi-57fKXJKc`) | `1Oa0qlwnwi393TL3D3RePe1WuLKC_U75yiaSSbNeaG6o` |

**B1 covers:** what skills, commands, plugins, and hooks are (markdown files that load on demand); hooks and one-way doors as guardrails; then a live end-to-end demo scraping the most recent videos from NYC Mayor Zohran Mamdani's Twitter, TikTok, YouTube, Instagram, and Facebook accounts, transcribing them with Whisper, extracting frames, running content analysis, and building an interactive dashboard. Features the Superpowers plugin's brainstorming and sub-agent driven development skills, `--dangerously-skip-permissions`, and the Browser Automation skill with Playwright when scraping fails. 76 videos downloaded in under 40 minutes for zero dollars.

**B2 covers:** turning the B1 pipeline into four modular skills packaged as a proper Claude Code plugin with `plugin.json` and versioning. Walks through Anthropic's official plugin development skill, an HTML documentation page with SVG animations, and a real plugin install path debugging session — a clean example of "this is why we test."

### Module 3 — Automation, pipelines, and triggered workflows

| Code | Title | Duration | Drive folder | Companion doc |
|---|---|---|---|---|
| **C1** | Automation, pipelines, and thinking in systems | ~12 min | `Module 3/Videos/MOOC-C1/` (`18ZE0Wd4kDVt3X0cdWJeM_QFMdPuauVMG`) | `1DcvogXcU4QDAbNnxhmE7ggxwxsudtmZ2SDYweVC5YqA` |
| **C2** | Automating the Mamdani pipeline with remote triggers and GitHub Actions | ~29 min | `Module 3/Videos/MOOC-C2/` (`13clKtZ9I3coXyUyWeDib_T3pPkxk3FP6`) | `1oGyIqB34kIZVk1TDHCtSQc_IHTmO9tLit8_PoTAs8yA` |

**C1 covers:** the shift from "I can do this once" to "this runs on its own," why non-programmers stall here, thinking in systems (input nodes → conveyor belts → transformers → output destinations, with Factorio and Satisfactory as the mental-model reference), what an automation actually is, planning before building, multi-stage pipelines with one job per stage (fetch, clean, process, save), modularization and chaining, secret hygiene, and three rules: stage the pipeline, test small, never put secrets in code.

**C2 covers:** continuing the Mamdani project from Module 2 and automating it end to end. Compares Claude Code's two schedulers (in-session `cron.create` vs. cloud `remote trigger`), builds a hybrid where the cloud detects new videos and the local machine does transcription, uses Google Drive desktop sync as a simpler alternative to the Drive API, publishes the dashboard via GitHub Pages and GitHub Actions, and debugs Copilot review feedback, branch protection rules, and an accidental self-triggering PR loop live.

### Module 4 — Advanced prompting patterns

| Code | Title | Duration | Drive folder | Companion doc |
|---|---|---|---|---|
| **D1** | Effort, thinking, and managing your context window | ~11 min | `Module 4/Videos/MOOC-D1/` (`1vddv7B6vBSmJsPn-PojGZQ4Q86omi0SI`) | `1ntYEMdoVWju7KpLNendh5_bDZUQAHqRFb5lvAUQfpC4` |
| **D2** | The 40% rule, sub-agents, and rewinding conversations | ~6 min | `Module 4/Videos/MOOC-D2/` (`1wogh7QPb1p-RASFbOLornapWF47aCNKX`) | `1QEYUEnfrLKN2Yx64rKZtSZnLzA93z5lqNRT_G61N3d4` |
| **D3** | Cross-model code review with Copilot CLI and Codex as sub-agents | ~8 min | `Module 4/Videos/MOOC-D3/` (`1KghaRynwoYpO8KYg-kgxNSIEBvZ1jJ4D`) | `1S6TlyvEzRXUupxmKKBzeJMoc3f1bocSvIomTAo1-CrY` |
| **D4** | Remote control, editorial judgment, and four questions for picking a tool | ~14 min | `Module 4/Videos/MOOC-D4/` (`1nKNp1GambZp1pk2JMGT7fXCLDBY1NpbN`) | `1Ejt-msdyeKQGJ7rR2OQSKg6CwPFCLgVkCUjcQ61-HRk` |

**D1 covers:** effort and thinking levels (`/effort` low/medium/high/max/auto and how max burns tokens), what actually lives in your context window (system prompt, system tools, custom agents, memory files, skills, messages), the million-token window and why quality degrades past 20–30% usage, `/compact` with and without custom summarization instructions, and the fact that full conversation transcripts are saved to disk as JSONL (with the security implications that follow).

**D2 covers:** capping conversations at 40% of the context window, why one conversation per task is a test of your context hygiene, warning signs of the degradation zone, sub-agents getting their own fresh context windows, "agent telephone" and why sub-agent tasks must be narrowly scoped, and the double-escape rewind trick for undoing bad decisions (but not past a compact).

**D3 covers:** calling Copilot CLI and Codex CLI as non-interactive sub-agents from inside Claude Code via the `-p` flag, getting a pre-PR code review without generating GitHub notification noise, installing Copilot CLI on the fly, context isolation (the sub-agent reviews don't count against your main session's tokens), and a concrete moment where Codex catches two high-severity issues Claude Code and Copilot both missed.

**D4 covers:** Joe's port-forwarding cautionary tale, Claude Code's `/remote-control` feature for driving the session from the web or your phone, picking up sessions where you left off, the "you're still early" reassurance, the journalist-as-product-manager framing, why editorial judgment gets more important as models get more powerful (not less), four questions for picking a tool (what's the task, how much context, does it need tool access, what's your real money budget), and the closing argument for trying more than one tool.

## Bonus interviews

| Code | Title | Duration | Companion doc |
|---|---|---|---|
| **A1a** | Madi McCool, NJ Civic Information Consortium | ~22 min | `1jdFnU2p9aLEKKBLxDNMKWVrpehtJke6OcCBiIcCA3OM` |
| **A1b** | Mike Janssen, Current.org | — | (existing doc in `Module 1/Videos/MOOC-A1.2/`) |

Bonus interviews are short conversations with journalists who use these tools in their day jobs. They're linked from the course but don't block the module arc — students can watch them out of order.

## Course arc drift notes

Things that changed between the filmed videos and earlier versions of the site and syllabus. These are the sections of SYLLABUS.md, `docs/`, and the Knight Center docs that need to track back to what Joe actually filmed.

- **Module 4 was originally designed as "Agents, tools, and data access"** with heavy MCP framing. The filmed videos pivoted completely. MCP is now not a Module 4 topic — it's a side mention at most. The Module 4 site page still references MCP 30+ times as of this writing and needs a full rewrite.
- **Module 3 was originally "CLI workflows for newsrooms"** with a generic "build pipelines" framing. The filmed videos are specifically about automation with cloud triggers, GitHub Actions, and GitHub Pages — a much narrower and more demo-heavy focus.
- **Git and GitHub moved out of Module 1** and into the bonus module. The filmed Module 1 doesn't cover Git directly; Git shows up incidentally during Module 2 and Module 3 demos. SYLLABUS.md still lists Git basics as a Module 1 topic.
- **The "prompt-to-skill progression" framing for Module 2** (ad-hoc prompt → saved prompt → custom slash command → hook) was the original structure. The filmed Module 2 dropped this framing in favor of a live end-to-end demo and a plugin build, which is more concrete for students.
- **Module 4's original learning objective 5** ("Connect AI tools to local files and external data sources via MCP") no longer matches the videos. The new Module 4 learning objectives are about context management, sub-agents, cross-model review, and editorial judgment.

## Cross-reference: file locations

- **Knight Center delivery folder (Drive, source of truth):** `1awY_UgsS8yhFNpTTdNpsTQfs2BijBD91`
- **Course repo (this repo):** `jamditis/prompt-engineering-journalists`
- **Course site:** https://mooc.amditis.tech (GitHub Pages, deployed from `docs/` via `.github/workflows/pages.yml`)
- **Student starter kit:** `jamditis/mooc-starter-kit`
- **Tools catalog:** https://tools.amditis.tech
- **Skills catalog:** https://skills.amditis.tech

## Maintenance

When Joe adds, replaces, or renames a video:

1. Update the row in the video list table above with the new duration, folder, and companion doc ID.
2. Update any changed section in the "Course arc drift notes" if the new video changes the module's arc.
3. Regenerate (or manually update) the companion doc in the video's Drive folder.
4. Cascade the change to `SYLLABUS.md`, `docs/module-N/index.html`, and the Knight Center `Module N/*.md` documents.
5. Check `docs/index.html` for module card descriptions that may need updating.
