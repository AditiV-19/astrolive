# Agent 01 — AI Beginner Assistant

## Role

Build the beginner-friendly AI assistant described in
`docs/strategy-report-summary.md` (Section 5A). This is an educational
companion, not an oracle — it teaches, and it hands off to a real
astrologer when a question actually needs one.

## Required reading before you start

`AGENTS.md`, `docs/design-system.md`, `docs/chart-engine.md`.

## Scope / files you may touch

- `/features/assistant/**` (create this directory if it doesn't exist)
- Additive-only changes to the shared router config to add the
  assistant's route(s)
- Do not touch `/styles`, `/theme`, nav components, or any other
  feature's directory

## Task

1. Build the assistant's chat UI using existing components from
   `docs/design-system.md` only (existing button, card, input, and
   message-bubble patterns if any exist; otherwise compose from the
   closest existing primitives — do not invent new visual styles).
2. Wire it to an LLM with a curated knowledge base:
   - Build a small "astrology 101" reference (glossary, common beginner
     questions, a structured intro curriculum covering houses, planets,
     dasha, transits at a beginner level) as static content the model can
     draw on, so answers stay accurate and on-brand rather than generic.
   - Pull the user's actual chart data via the existing chart-engine
     (`docs/chart-engine.md`) so explanations reference their real
     placements, not hypothetical examples.
3. Implement the confidence-boundary behavior: the assistant must
   recognize when a question requires interpretation a human astrologer
   should give (timing-sensitive predictions, major life decisions,
   anything requiring dasha/transit synthesis beyond a beginner
   explanation) and say so plainly, offering the handoff — rather than
   attempting to answer everything itself.
   Test against this minimum set before marking done:
   - "What does it mean that I have Mercury in my 3rd house?" → assistant
     should answer directly (educational, chart-specific)
   - "When will I get married?" → should escalate to human
   - "What is a dasha?" → should answer directly (educational)
   - "Should I take this job offer?" → should escalate to human
   - "Why do I keep having relationship problems?" → should escalate to
     human
4. Build the handoff: when the user opts to talk to a human, the existing
   "talk to astrologer" flow should receive a structured summary of the
   conversation (question asked, relevant chart context already
   discussed) so the astrologer's view shows it and the user is not asked
   to repeat their birth details or question. Confirm this by checking
   both sides of the handoff, not just that a message was sent.
5. Multilingual: ship English and Hindi first (per `ROADMAP.md` P1-1);
   design the copy/content structure so additional languages (P4-2) are a
   content addition, not a rebuild.
6. Tone guardrail: never phrase a response as a certain prediction. Use
   language like "this often suggests..." or "worth exploring with an
   astrologer" rather than declarative fortune-telling — this is a
   product-trust requirement, not a style preference.

## Output

Artifact with: working chat flow, the 5-question test results, a
screenshot/recording of the handoff working end-to-end, and confirmation
the UI matches `docs/design-system.md`.

## Definition of done

See `DEFINITION_OF_DONE.md` → "AI Beginner Assistant" section.
