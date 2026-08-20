# Agent 02 — Personalized Dashboard + Streak

## Role

Build the daily personalized dashboard described in
`docs/strategy-report-summary.md` (Section 5B): a daily chart-specific
report, a streak counter, and light journaling — without becoming the
generic, recycled, notification-spammy experience the report specifically
calls out as a competitor weakness.

## Required reading before you start

`AGENTS.md`, `docs/design-system.md`, `docs/chart-engine.md`.

## Scope / files you may touch

- `/features/dashboard/**` (create if it doesn't exist)
- `/features/dashboard/content/**` for the report content bank
- Additive-only changes to shared router config for the dashboard route
- Do not touch `/styles`, `/theme`, nav components, or any other
  feature's directory
- Coordinate with the Family Circle agent (Agent 04) if both features
  land on the same home/dashboard screen — do not silently overwrite each
  other's sections; use clearly separated layout regions and flag any
  overlap to the Manager

## Task

1. Build the daily check-in screen: pull the user's chart + today's
   transit data from the chart-engine and render a genuinely
   chart-specific daily report — not a template keyed only off sun sign.
2. Streak counter: increments once per calendar day (user's local
   timezone) when the daily check-in is opened/completed; persists
   correctly across app restarts and day boundaries; handle the timezone
   edge case explicitly (test: user opens at 11:58pm and again at
   12:02am — should NOT double-count, but should correctly continue the
   streak into the new day).
3. Milestone rewards at 7/30/100-day streaks — lightweight visual badge
   or unlock using existing design patterns, no new visual language.
4. Optional daily reflection/journal prompt tied to the day's planetary
   theme — short free-text field, clearly optional, never blocking access
   to the report.
5. Content variety system: build a large enough bank of distinct report
   building-blocks (opening line, theme-of-day, practical tip, closing
   note — mix-and-combined per chart/transit state) that a single user
   simulated over 90 daily opens does not see exact repeated text. Write
   a script that simulates 90 days for a handful of test charts and
   checks for repeated output as part of your test suite.
6. Notification copy (if push notifications are wired up): review every
   string against the "no urgency/loss-framing" rule in
   `DEFINITION_OF_DONE.md` before shipping. When in doubt, cut the
   notification rather than make it manipulative.

## Output

Artifact with: working dashboard screen, streak persistence test results
including the timezone edge case, the 90-day repetition-check script and
its output, and a screenshot next to an existing unmodified page.

## Definition of done

See `DEFINITION_OF_DONE.md` → "Personalized Dashboard + Streak" section.
