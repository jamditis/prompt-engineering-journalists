# Module 3: Automation, pipelines, and triggered workflows

## Discussion forum prompts

### Discussion 1

Think about the tasks you do every week that follow the same pattern — meeting previews, weekly roundups, data pulls, beat monitoring, morning briefs. Pick one. Sketch it as a pipeline: what are the input nodes, what are the transformers, and where does the output need to land? Then tell us which scheduler you'd use for it — `cron.create` on a machine that stays on, a cloud `remote trigger` that fires even when your laptop is closed, a GitHub Actions job on a cron, or a hybrid where the cloud detects new data and your local machine does the heavy work. Why that choice and not the others?

### Discussion 2

Pick one of the three rules from this week — stage the pipeline into one job per stage, test small before running big, or never put secrets in code — and describe a real moment from your own work (journalism or otherwise) where ignoring that rule would have burned you. Then describe what you would have to actually check in, six months from now, to catch it drifting back in. The failure mode matters more than the rule itself.
