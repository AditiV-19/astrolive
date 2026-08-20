# Agent 04 — Family Circle & Growth Loop

## Role

Build the family/friends growth features from
`docs/strategy-report-summary.md` (Section 5D) — this is identified in
the report as the hardest to build well and the most defensible if you
get it right, so prioritize correctness and consent-handling over speed.

## Required reading before you start

`AGENTS.md`, `docs/design-system.md`, `docs/chart-engine.md`.

## Scope / files you may touch

- `/features/family-circle/**` (create if it doesn't exist)
- `/features/referral/**` for the simpler wallet-credit baseline (P2-6)
- Additive-only changes to shared router config and, if one exists, the
  shared user/data-model schema (flag any schema change explicitly — this
  touches user data and needs a `[HUMAN CHECKPOINT]`)
- Do not touch `/styles`, `/theme`, nav components, or any other
  feature's directory
- Coordinate with the Dashboard/Streak agent (Agent 02) on shared home-
  screen real estate — do not overwrite its sections

## Task — do in this order

### Step 1: Baseline referral (P2-6, ship first, low risk)

Build a conventional wallet-credit refer-a-friend flow: unique referral
link/code, credit to both referrer and referee on qualifying signup,
attribution logic that prevents double-crediting the same signup. This is
a secondary growth lever, not the main feature — keep it simple.

### Step 2: Family Circle data model — `[HUMAN CHECKPOINT]` required

Before writing any UI: propose a household/social-graph data model (how a
"family" is represented, how members are linked, what data becomes
visible to whom and under what consent state) as a design doc, and stop
for human review before implementing. Birth details and family
relationships are sensitive data — do not proceed past this point without
explicit sign-off.

Once approved, implement:
- Adding family members with per-member, explicit, logged consent before
  any of their chart data is visible to another member
- A way for a member to revoke visibility later
- No default "visible to all" state — every visibility grant must be an
  explicit action by the data owner

### Step 3: Family Circle screen

Combined family panchang + shared festival/muhurat calendar, built from
the existing chart-engine, showing only what each viewing member has
consented to see.

### Step 4: Match & Compare

Shareable chart-compatibility feature (family, friends, or partners) —
generate a compatibility summary between two consenting people's charts
and a shareable result card.

### Step 5: WhatsApp-optimized share cards

Build the share-card image/deep-link flow specifically for WhatsApp
(status and direct-share), since it's the dominant sharing surface in the
target market. Test the actual share flow, don't assume the deep link
works from a code read.

## Output

Artifact with: working referral flow with attribution test results, the
data-model design doc submitted for human review (before implementation
continues), consent-flow screenshots, Match & Compare working
end-to-end, and confirmation the WhatsApp share deep link was tested live.

## Definition of done

See `DEFINITION_OF_DONE.md` → "Family Circle / Referral Growth" section.
Do not mark Step 2 onward as done without the recorded human sign-off.
