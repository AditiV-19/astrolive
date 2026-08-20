# Setup Guide — Wiring This Into Antigravity

## 1. File placement

Copy this whole folder structure into your website's repository:

```
your-repo/
├── AGENTS.md                          ← repo root, Antigravity reads this automatically
├── MANAGER_AGENT.md
├── ROADMAP.md
├── DEFINITION_OF_DONE.md
├── docs/
│   └── strategy-report-summary.md
└── agents/
    ├── 00_design_system_auditor.md
    ├── 01_ai_assistant_agent.md
    ├── 02_dashboard_streak_agent.md
    ├── 03_calculator_agent.md
    ├── 04_family_circle_agent.md
    └── 05_qa_content_guardian_agent.md
```

`AGENTS.md` at the repo root is picked up automatically by Antigravity as
a persistent rules file every agent reads before working — this is the
same mechanism as a global `~/.gemini/GEMINI.md`, but scoped to this
project so it only applies here.

## 2. Kick off the Design System Auditor first — solo

Open Antigravity, switch to Manager view (Cmd+E / Ctrl+E), start a new
conversation, and paste the contents of `agents/00_design_system_auditor.md`
as the task. Use Plan mode (this touches many files by reading them).
Wait for it to finish and produce `docs/design-system.md`,
`docs/chart-engine.md`, and `docs/analytics-events.md` before doing
anything else. Review those three files yourself once — they're the
foundation everything else depends on, and they're cheap to fix now and
expensive to fix after five agents have built on top of a wrong
assumption.

## 3. Start the Manager

New conversation in Manager view. Paste the contents of
`MANAGER_AGENT.md` as the task. Attach `@AGENTS.md`, `@ROADMAP.md`, and
`@DEFINITION_OF_DONE.md` using Antigravity's file-attach so the Manager
has them as live context rather than a one-time paste.

## 4. Let it spawn subagents

The Manager will spawn subagents itself, handing each one its
corresponding `agents/0X_*.md` file. Antigravity's Manager view supports
up to five parallel agents — this project is sized for exactly that (four
feature agents + one continuous QA agent), so you shouldn't need to queue.

## 5. Review checkpoints

You will be prompted for approval at every `[HUMAN CHECKPOINT]` marked in
`ROADMAP.md` and `DEFINITION_OF_DONE.md` — most importantly the Family
Circle data-model/consent design in Phase 3, and any new dependency or
payments-related change. Don't rubber-stamp these; they're the points
where a wrong autonomous decision would be expensive to unwind.

## 6. Keep it running

For the "keeps building until satisfied" behavior:
- Within a session, the Manager loops on its own per its instructions in
  `MANAGER_AGENT.md` (pull task → dispatch → review against
  `DEFINITION_OF_DONE.md` → accept or send back → next task) until
  `ROADMAP.md` is fully done and the Release Gate passes twice clean.
- Across sessions, use Antigravity's scheduled-task feature to re-open the
  Manager conversation periodically (e.g., daily) with a short prompt
  like: "Continue per MANAGER_AGENT.md — check ROADMAP.md for the next
  eligible task and proceed." This gives you the continuous-loop behavior
  without needing to sit and re-trigger it yourself.

## 7. Model assignment (optional, for cost/speed tuning)

If your Antigravity setup lets you choose a model per agent: boilerplate-
heavy work (content banks, test scaffolding, documentation) can run on a
faster/cheaper model, while the Design System Auditor, the Family Circle
data-model design, and QA's cross-feature checks benefit from your most
capable model, since mistakes there are the most expensive to unwind.

## 8. What to check yourself, periodically

Even with a good Definition of Done, spot-check in person every so often:
- Open the live preview and click through a new-user journey yourself
- Compare a new screen side-by-side with an old one — if you can tell
  which one is "new" just by looking, the design-consistency rule is
  being violated somewhere
- Read `docs/status-log/<date>.md` (the Manager writes these) rather than
  every individual agent artifact, to stay oriented without drowning in
  detail
