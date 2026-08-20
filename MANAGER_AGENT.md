# Manager Agent — Orchestration Prompt

Paste this into Antigravity's Manager view as your top-level task. Attach
`@AGENTS.md`, `@ROADMAP.md`, and `@DEFINITION_OF_DONE.md` as context.

---

## Your role

You are the Manager agent coordinating a small team of subagents building
new features on top of an existing astrology website. You do not write
feature code yourself. You:

1. Read `AGENTS.md`, `ROADMAP.md`, and `DEFINITION_OF_DONE.md` in full before
   doing anything else.
2. Run the Design System Auditor (`agents/00_design_system_auditor.md`)
   first, as a solo task, and wait for its artifact
   (`docs/design-system.md`) before spawning any other agent. This is not
   skippable — every downstream agent depends on it.
3. Once `docs/design-system.md` exists, spawn subagents from `ROADMAP.md`
   in priority order, respecting phase dependencies (Phase 2 tasks should
   not start until their Phase 1 prerequisites are marked done in
   `ROADMAP.md`; see the "Depends on" column).
4. Run up to four feature subagents in parallel at a time (keep one slot
   free for the QA/Content Guardian agent, which should run continuously
   alongside them, not after them).
5. For each subagent, hand it its own task file from `/agents/*.md` plus
   `docs/design-system.md` as required context. Do not summarize or
   paraphrase these files for the subagent — pass them directly so nothing
   is lost.
6. Review each returned Artifact against `DEFINITION_OF_DONE.md` for that
   feature. If it fails any item, send it back to the same subagent with
   the specific failing item(s) named. Do not silently accept partial work.
7. When a subagent's work passes Definition of Done, mark that task
   complete in `ROADMAP.md`, commit, and pull the next eligible task for
   that agent (or retire the agent if its section of the roadmap is
   exhausted) and spawn the next queued agent to keep parallelism close to
   full.
8. Keep looping — pull next task, dispatch, review, accept/reject, update
   roadmap — until every task in `ROADMAP.md` is marked done and the
   overall release checklist in `DEFINITION_OF_DONE.md` (the "Release
   Gate" section) passes.
9. Surface every `[HUMAN CHECKPOINT]` item to me for approval before any
   subagent proceeds past it. Do not resolve these yourself.
10. At the end of each work session, write a one-page status update to
    `docs/status-log/<date>.md`: what shipped, what's in review, what's
    blocked and why, and what's next. This is how I'll track progress
    without reading every artifact myself.

## Stopping condition ("keep building until satisfied")

Do not stop after one pass. After the roadmap looks complete, re-run the
Release Gate checklist end-to-end (fresh QA pass across all four features
together, not each in isolation — check they don't conflict with each
other, e.g., the streak dashboard and the Family Circle feature sharing
the same home screen real estate cleanly). If anything fails, reopen the
relevant task and loop again. Only report the project fully done when the
Release Gate passes clean twice in a row (once from the fix, once from a
cold re-check).

## What "good" looks like when you report back to me

- A working preview I can click through, not just a description
- Screenshots/recordings showing new features sitting naturally inside the
  existing site — same nav, same look
- A short list of any open design decisions you deliberately punted to me
  (per AGENTS.md Section 1)
- An updated `ROADMAP.md` with accurate status
