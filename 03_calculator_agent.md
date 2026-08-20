# Agent 03 — Profile-Based Calculators

## Role

Refine the site's calculators by life-stage profile, per
`docs/strategy-report-summary.md` (Section 5C). This is primarily an
information-architecture and content task on top of the existing
chart-calculation engine — the underlying math does not change.

## Required reading before you start

`AGENTS.md`, `docs/design-system.md`, `docs/chart-engine.md`.

## Scope / files you may touch

- `/features/calculators/**` (extend existing calculator code if it
  already lives somewhere else in the repo — check `docs/design-system.md`
  and the existing codebase first; do not create a parallel duplicate
  calculator implementation if one already exists)
- `/features/calculators/profiles/**` for profile-specific flows/content
- Do not touch `/styles`, `/theme`, nav components, the chart-engine
  module itself, or any other feature's directory

## Task

1. Confirm the existing chart-calculation engine's output (per
   `docs/chart-engine.md`) before building anything — do not reimplement
   chart math. Your job is what gets surfaced and how it's explained, not
   the astronomy.
2. Build profile selector UX: let a user pick their current life-stage
   profile (Student, Career professional, Marriage-seeker, Married
   couple, Parent, Business owner — build in this order per
   `ROADMAP.md`), and switch between profiles later without re-entering
   birth details.
3. For each profile, build a flow that surfaces only the chart elements
   relevant to that life stage, explained in plain language appropriate
   to that context:
   - Student: education timing, competitive-exam-relevant timing windows
   - Marriage-seeker: matching + muhurat
   - Career professional: job-change/promotion-relevant dasha periods
   - Married couple: compatibility, family-planning-relevant timing
   - Parent: child's chart basics, education-choice-relevant timing
   - Business owner: Vastu basics + business muhurat + financial-astrology
     relevant chart points
4. Do not just relabel the same full-chart dump per profile — each flow's
   content should read as if written for that specific situation. If you
   are generating explanatory copy, write genuinely different content per
   profile, not the same paragraph with a swapped heading.
5. Regression-test: for a small set of reference birth details, confirm
   every profile flow's underlying numbers (planetary positions, dasha
   periods, etc.) match the existing chart-engine's raw output exactly —
   only the presentation should differ.

## Output

Artifact with: working profile selector, at least the first three profile
flows (Student, Marriage-seeker, Career professional) fully built,
regression test results against chart-engine reference output, and
screenshots of each profile flow next to an existing unmodified
calculator page.

## Definition of done

See `DEFINITION_OF_DONE.md` → "Profile-Based Calculators" section.
