# Example projects

These examples show acceptable scope for the final project. They range from straightforward to ambitious. Your project doesn't need to match these exactly—use them as reference points for what's expected.

---

## Example 1: Press release triage script (simpler scope)

**Problem**: A local news reporter receives 50+ press releases per week by email. Most are irrelevant to their beat (education). Reading through them to find newsworthy items takes 2-3 hours weekly.

**Solution**: A pipeline — described to Claude Code and built by it — that:
1. Takes a folder of press release text files as input
2. Analyzes each release against beat criteria (local education, K-12 or higher ed, NJ-based)
3. Categorizes releases as "cover," "follow up later," or "skip"
4. Outputs a prioritized summary with the key facts from each relevant release

**Submission includes**:
- `triage.sh` - Main script
- `CLAUDE.md` - Custom instructions for the analysis
- `README.md` - Setup and usage instructions
- `sample-releases/` - Example input files
- `sample-output.md` - Example of what the script produces

**Why this works**: Solves a real time problem, uses CLI AI tool, includes automation (batch processing), appropriate scope for the course timeline.

---

## Example 2: Council meeting prep workflow (moderate scope)

**Problem**: A city hall reporter covers weekly council meetings. Before each meeting, they need to review the agenda, identify items connected to ongoing stories, and prepare questions. This prep work takes 3-4 hours and is rushed before deadline.

**Solution**: A Claude Code workflow with a custom skill — described to Claude Code and built with its help — that:
1. Takes the council agenda (PDF or text) as input
2. Extracts each agenda item and its attachments
3. Compares items against a "story tracker" file of ongoing coverage
4. Flags items related to active stories with suggested questions
5. Identifies new items that might be newsworthy
6. Outputs a prep document formatted for the reporter's notes system

**Submission includes**:
- `council-prep/` - Custom Claude skill directory
- `council-prep/SKILL.md` - Skill instructions
- `story-tracker-template.json` - Template for tracking ongoing stories
- `run-prep.sh` - Script to run the workflow
- `README.md` - Setup, configuration, and usage
- `sample-agenda.pdf` and `sample-output.md` - Examples

**Why this works**: Addresses recurring journalism task, shows how to build a custom skill, includes multiple components (skill + script + data file), demonstrates configuration for a specific newsroom context.

---

## Example 3: FOIA response processor (moderate scope)

**Problem**: An investigative reporter files many FOIA requests and receives responses in various formats (PDFs, spreadsheets, scanned documents). Organizing these responses and extracting key information is time-consuming and inconsistent.

**Solution**: A pipeline — described to Claude Code and built with its help — that:
1. Watches a designated folder for new FOIA response files
2. Uses Claude Code to identify the document type and agency
3. Extracts key metadata (dates, names, responsive pages vs. redactions)
4. Generates a standardized summary document
5. Adds an entry to a tracking spreadsheet
6. Moves processed files to an organized archive folder

**Submission includes**:
- `foia-processor.sh` - Main processing script
- `watch-foia.sh` - Folder watch script (uses fswatch or similar)
- `templates/summary-template.md` - Output format template
- `CLAUDE.md` - Processing instructions
- `README.md` - Setup and usage, including how to configure the watch folder
- `sample-responses/` - Example FOIA documents
- `sample-tracking.csv` - Example of the tracking output

**Why this works**: Solves a real investigative journalism problem, includes meaningful automation (folder watching), produces multiple outputs (summary + tracking entry + file organization), could actually be used in daily work.

---

## Example 4: Multi-platform story distribution (ambitious scope)

**Problem**: After publishing a story, a reporter needs to create social posts for multiple platforms, each with different character limits, tone, and format requirements. This takes 30-45 minutes per story and often gets skipped under deadline pressure.

**Solution**: A complete distribution workflow — described to Claude Code and built with its help — that:
1. Takes a published story URL or text file as input
2. Analyzes the story for key facts, quotes, and angles
3. Generates platform-specific content:
   - Twitter/X thread (280 char posts with thread logic)
   - LinkedIn post (professional tone, longer format)
   - Instagram caption (casual tone, hashtag suggestions)
   - Newsletter blurb (subscriber-focused angle)
4. Outputs all versions in a single document for review
5. Includes a configuration file for newsroom voice guidelines

**Submission includes**:
- `distribute/` - Custom Claude skill
- `distribute/SKILL.md` - Main skill with platform instructions
- `voice-config.json` - Configurable tone and style settings
- `run-distribute.sh` - Script to run the workflow
- `platforms/` - Individual platform prompt files
- `README.md` - Complete documentation including customization options
- `examples/` - Input story and output for each platform

**Why this works**: Addresses real workflow gap, shows advanced skill design with configuration, produces multiple useful outputs, demonstrates how to customize AI behavior for different contexts.

---

## Scope guidance

**Too small**:
- A single prompt with no automation
- A workflow that only works on one specific file
- Something that takes 5 minutes to build

**Too large**:
- A full application with a GUI
- Something requiring multiple weeks of development
- A system that needs significant infrastructure (databases, servers, etc.)

**Right size**:
- Takes 4-8 hours to build and test
- Could be explained to a colleague in 5 minutes
- Produces output you would actually use
- Includes at least one custom skill or script

When in doubt, start simpler. A working simple project is better than an ambitious broken one.
