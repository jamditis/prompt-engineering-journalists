# Module 3: Automation, pipelines, and triggered workflows

## End of the week message

You finished the week the course was really built around.

This is where a lot of journalists stop — right at the edge between "I can do this once if I'm sitting at the keyboard" and "this runs on its own while I do reporting." Getting past that edge changes what the rest of the course can teach. Module 4 only makes sense if the automation work from this week feels like something you could actually pick up and use.

**What you learned:**

- How to sketch any recurring workflow as a system of inputs, conveyor belts, transformers, and outputs before writing a single line of code
- How to use plan mode as a habit, not a one-time ritual — and why reviewing the plan is cheaper than fixing a broken pipeline later
- The three rules for any pipeline: stage it, test small, keep secrets out of code
- Claude Code's two schedulers — in-session `cron.create` for machines that stay on, cloud `remote trigger` for when your laptop is closed — and how to pick between them
- Hybrid pipelines, where the cloud detects new data and your local machine does the heavy work
- GitHub Actions and GitHub Pages as a free, scheduled output layer that turns a local script into a public dashboard with no hosting to manage
- How to read Copilot review feedback, how branch protection rules work in practice, and how to unblock a self-triggering pull request loop when you accidentally build one

**Next week:** Module 4 pulls back from the mechanics to the craft. Once you know how to install the tools, write context files, build skills and plugins, and schedule pipelines, the work shifts from prompting to managing — giving clear instructions, setting evaluation criteria, and reading the result with the same editorial eye you'd use on a new staff writer's draft. Module 4 is four short videos on the patterns that separate useful output from slop: managing the context window as a budget, delegating narrowly-scoped work to sub-agents, calling a different model for a cross-model code review before you commit, and running long work on a home machine while supervising it from your phone. The closing argument is the one the course keeps returning to: editorial judgment becomes more important as the tools get better, not less.

If you struggled this week, that's expected and it's actually a good sign. Automation is the step where most non-programmer journalists hit a wall, and pushing through that wall with a CLI tool as your collaborator is unfamiliar work. The important thing is that you have the pattern now: sketch the system, plan the build, test small, check the output, pick a scheduler, schedule it. Everything else is iteration on that loop.

The skills from this week feed directly into the final project, where you'll build something you actually use in your own newsroom. If you finished this week with a pipeline that's running on a schedule and producing output you'd show to a colleague, you already have the first half of that project.

See you in Module 4.

Joe Amditis
