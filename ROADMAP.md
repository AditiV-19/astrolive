# ROADMAP.md — Task Backlog

Source: `docs/strategy-report-summary.md` (condensed from the full
competitive strategy report). Status values: `todo`, `in-progress`,
`in-review`, `blocked`, `done`.

The Manager updates the Status column as work proceeds. Do not delete
completed rows — they're the audit trail.

## Phase 0 — Foundation (blocks everything else)

| ID | Task | Owner agent | Depends on | Status |
|----|------|-------------|------------|--------|
| P0-1 | Audit existing codebase, extract design tokens, nav structure, component inventory into `docs/design-system.md` | Design System Auditor | — | done |
| P0-2 | Set up shared chart-calculation access (confirm existing ephemeris/astrology-API module and document its interface in `docs/chart-engine.md`) | Design System Auditor | P0-1 | done |
| P0-3 | Set up analytics event scaffolding (page/feature open events, streak events, referral events) if not already present | Design System Auditor | P0-1 | done |

## Phase 1 — Months 0–3: Foundations

| ID | Task | Owner agent | Depends on | Status |
|----|------|-------------|------------|--------|
| P1-1 | Scoped AI beginner assistant: chat UI using existing component library, multilingual copy scaffold (English + Hindi to start) | AI Assistant Agent | P0-1 | done |
| P1-2 | Chart-aware explanations: wire assistant to chart-engine so answers reference the user's real chart, not generic text | AI Assistant Agent | P1-1, P0-2 | done |
| P1-3 | Confidence-boundary logic: assistant explicitly flags when a question needs a human astrologer | AI Assistant Agent | P1-2 | done |
| P1-4 | Human handoff: carry conversation summary into the existing "talk to astrologer" flow so the user isn't re-asked their details | AI Assistant Agent | P1-3 | done |
| P1-5 | Daily personalized dashboard screen: chart-specific daily report (reuse chart-engine, not templated by sun-sign) | Dashboard/Streak Agent | P0-1, P0-2 | done |
| P1-6 | Streak counter + milestone rewards (7/30/100 days), no loss-framed/urgency copy | Dashboard/Streak Agent | P1-5 | done |
| P1-7 | Optional daily reflection/journal prompt tied to day's planetary theme | Dashboard/Streak Agent | P1-5 | done |
| P1-8 | Content variety system: bank of non-repeating report building blocks large enough to avoid noticeable repetition within ~3 months of daily use | Dashboard/Streak Agent | P1-5 | done |
| P1-9 | Instrumentation: track assistant drop-off points, unanswerable questions, and dashboard open/completion rates | QA/Content Guardian | P1-1, P1-5 | done |

## Phase 2 — Months 3–6: Depth

| ID | Task | Owner agent | Depends on | Status |
|----|------|-------------|------------|--------|
| P2-1 | Profile-based calculator flow: Student / exam-timing | Calculator Agent | P0-2 | todo |
| P2-2 | Profile-based calculator flow: Marriage-seeker (matching + muhurat) | Calculator Agent | P0-2 | todo |
| P2-3 | Profile-based calculator flow: Career professional | Calculator Agent | P0-2 | todo |
| P2-4 | Profile-based calculator flow: Married couple / Parent / Business owner (as capacity allows, same pattern) | Calculator Agent | P2-1..P2-3 pattern proven | todo |
| P2-5 | Profile selector UX: let a user pick or switch their active profile without re-entering birth details | Calculator Agent | P2-1 | todo |
| P2-6 | Baseline wallet-credit referral program (simple, low-risk growth lever) | Family Circle Agent | P0-1 | todo |

## Phase 3 — Months 6–9: The real moat

| ID | Task | Owner agent | Depends on | Status |
|----|------|-------------|------------|--------|
| P3-1 | Household/social-graph data model: add family members with explicit per-member consent for visibility | Family Circle Agent | P0-2, [HUMAN CHECKPOINT: data model + consent flow review] | todo |
| P3-2 | Family Circle screen: combined family panchang + shared festival/muhurat calendar | Family Circle Agent | P3-1 | todo |
| P3-3 | Match & Compare: shareable chart-compatibility feature (family, friends, partners) | Family Circle Agent | P3-1 | todo |
| P3-4 | Share cards optimized for WhatsApp (image + deep link) | Family Circle Agent | P3-3 | todo |
| P3-5 | Consent and privacy review for all family-data features | QA/Content Guardian | P3-1, [HUMAN CHECKPOINT] | todo |

## Phase 4 — Months 9–12: Scale and differentiate on economics

| ID | Task | Owner agent | Depends on | Status |
|----|------|-------------|------------|--------|
| P4-1 | Flat/predictable pricing tier pilot alongside existing pay-per-minute flow | Dashboard/Streak Agent (pricing surfaces) | [HUMAN CHECKPOINT: payments logic] | todo |
| P4-2 | Regional-language expansion beyond English/Hindi | AI Assistant Agent + Calculator Agent | P1-1, P2-1 | todo |
| P4-3 | Astrologer trust/reputation layer beyond star ratings | QA/Content Guardian (spec) + relevant feature agent | P1-4 | todo |

## Release Gate (checked by Manager before declaring "done")

- [ ] All Phase 1–3 tasks marked `done`
- [ ] Full cross-feature QA pass (see `DEFINITION_OF_DONE.md`)
- [ ] Zero unresolved design-consistency flags
- [ ] Zero unresolved `[HUMAN CHECKPOINT]` items
- [ ] Two consecutive clean Release Gate passes
