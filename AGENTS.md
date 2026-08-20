# AGENTS.md — Global Rules for This Project

Every agent (manager and subagents) reads this file before starting any task.
It is not optional context — it is a hard constraint. If any instruction below
conflicts with a task prompt, this file wins.

## 0. What this project is

We are extending an existing astrology website. A basic UI already exists.
We are implementing four new feature areas from `ROADMAP.md`:
AI beginner assistant, personalized dashboard + streak, profile-based
calculators, and a family/friends growth loop — as specified in
`docs/strategy-report-summary.md`.

## 1. The one rule that overrides all others: DO NOT ALTER THE EXISTING DESIGN

- Do not change existing colors, fonts, spacing scale, border radii, shadows,
  breakpoints, component APIs, navigation structure, routing, or page layout
  that is already in the codebase.
- Do not "improve," refactor, restyle, or modernize anything you were not
  explicitly asked to touch, even if it looks inconsistent to you.
- Do not introduce a new UI library, CSS framework, icon set, or font family.
  Reuse what's already imported in the project.
- Every new screen or component must be visibly, unmistakably "of a piece"
  with the existing site — same header/footer, same nav pattern, same button
  and card styles, same spacing rhythm.
- If you need a design decision that genuinely isn't covered by the existing
  system (e.g., a new component type has no precedent), do not invent one.
  Flag it as an open question in your artifact and use the closest existing
  pattern as a placeholder. A human will resolve it.

## 2. Mandatory first step for every agent, every session

Before writing a single line of UI code, read `docs/design-system.md`.

If that file does not exist yet or looks stale (last updated before the most
recent commit touching `/styles`, `/theme`, `/components`, or the design
tokens file), stop and run the Design System Auditor task
(`agents/00_design_system_auditor.md`) first, or request that the Manager
run it. Do not proceed on assumptions about color hex codes, font names, or
spacing values — pull them from that file or from the source files directly.

## 3. File ownership boundaries

To let multiple agents work in parallel without collisions, each agent may
only modify files inside its assigned scope (see its own task file for the
exact paths). No agent may modify, outside its own scope:

- `/styles`, `/theme`, `tailwind.config.*`, or any global CSS variables file
- `/components/nav*`, `/components/header*`, `/components/footer*`
- `package.json` dependencies (adding a new dependency requires a flagged
  request in the agent's artifact, not a silent install)
- Any other agent's feature directory

If a task genuinely requires touching a shared file (e.g., adding one new
route to a shared router config), make the smallest possible diff, call it
out explicitly in the artifact, and prefer additive changes (new entries)
over edits to existing entries.

## 4. Working style

- Work in small, reviewable increments. Every agent produces an Artifact
  (task list, implementation plan, screenshots/browser recording of the
  result, and a diff summary) before marking a task complete.
- Prefer Plan mode for anything touching more than one file.
- Write or update tests alongside any new logic (calculators, streak logic,
  AI response handling, referral/compatibility logic). No feature is done
  without a passing test for its core logic.
- After any UI change, take a screenshot (or short browser recording) of the
  new screen next to an existing, unmodified screen, so a human reviewer can
  visually confirm consistency in one glance.
- Never fabricate astrological calculation logic. Chart/dasha/panchang/
  transit math must come from the project's existing chart-calculation
  module or a documented ephemeris library — do not hand-roll astronomical
  calculations.
- Never present AI-generated predictions as certain. Any user-facing AI
  copy must stay within the "educational, not deterministic" tone defined
  in `docs/strategy-report-summary.md`.

## 5. Definition of done

A task is not complete until it satisfies every item in
`DEFINITION_OF_DONE.md` for that feature area, including the design-
consistency check in Section 1 above. Do not mark a task complete based on
"the code runs" alone.

## 6. Escalation / human checkpoints

Require explicit human approval before:
- Adding any new npm/pip dependency
- Touching authentication, payment/wallet, or user data storage/consent code
- Deleting or renaming any existing file
- Anything the task file marks as `[HUMAN CHECKPOINT]`

Everything else can proceed autonomously within your file-ownership scope.
