# Agent 00 — Design System Auditor

## Role

You run first, alone, before any feature agent starts. Your job is not to
build anything new. It is to document what already exists so precisely
that no other agent has to guess.

## Scope / files you may touch

- Read access: the entire repository
- Write access: `docs/design-system.md`, `docs/chart-engine.md`,
  `docs/analytics-events.md` only (create these files; do not touch
  anything else)

## Task

1. Scan the codebase for the existing design system. Depending on the
   stack, this typically means: a Tailwind config / CSS variables file /
   theme object, a component library folder, a global stylesheet, and any
   design-token JSON/YAML files. Find the real source, not a guess.
2. Produce `docs/design-system.md` containing:
   - **Color palette**: every named color/token with its actual value
     (hex/HSL/var name) and where it's used (primary, secondary,
     background, text, accent, error/success states, etc.)
   - **Typography**: font families, weights, and the size scale actually
     in use, with which heading/body levels map to which
   - **Spacing scale**: the actual spacing units/tokens used across the
     site
   - **Component inventory**: list every reusable component you find
     (buttons, cards, modals, inputs, nav items, etc.) with its file path
     and a one-line description of its API (props)
   - **Navigation structure**: the full existing nav/menu tree, including
     mobile nav pattern if different from desktop, and the routing
     structure (URL patterns, page directory layout)
   - **Layout patterns**: header/footer structure, page container widths,
     grid/breakpoint system
   - **Screenshots**: capture the current homepage and 2–3 other existing
     pages so there's a visual reference alongside the written spec
3. Locate the existing astrology chart-calculation logic (kundli, dasha,
   panchang, transits — whatever the current site already computes).
   Document its module path, function signatures, inputs/outputs, and any
   external astrology API it calls, in `docs/chart-engine.md`. Do not
   reimplement or modify this logic — every downstream feature agent will
   call into it as-is.
4. Check whether analytics/event tracking already exists (e.g., an
   analytics library already initialized). Document what's there in
   `docs/analytics-events.md`, and propose (don't implement yet) the
   event names Phase 1 will need: `assistant_opened`,
   `assistant_escalated_to_human`, `dashboard_opened`,
   `dashboard_streak_incremented`, `calculator_profile_selected`,
   `family_member_invited`, `referral_completed`.

## Output

An Artifact containing:
- Links to the three new docs files
- Screenshots of 3–4 existing pages
- A short list of anything ambiguous or inconsistent you found in the
  existing design (e.g., two different button styles used inconsistently)
  — flag it, do not silently pick one as "correct"

## Definition of done

See "Applies to every task" in `DEFINITION_OF_DONE.md`, plus: every other
agent's task file references `docs/design-system.md` — if a value a
feature agent needs isn't in your doc, that's a gap you missed. Be
thorough rather than fast here; every hour spent here saves rework across
every other agent.
