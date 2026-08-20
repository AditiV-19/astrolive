# DEFINITION_OF_DONE.md

The Manager checks every returned artifact against the relevant section
below. Any unchecked item = send the task back, named explicitly.

## Applies to every task, no exceptions

- [ ] Uses only colors, fonts, spacing, and components already documented
      in `docs/design-system.md` — no new hex codes, font imports, or
      one-off spacing values
- [ ] New screens use the existing header/footer/nav pattern unchanged
- [ ] No existing file outside the agent's declared scope was modified
- [ ] No new dependency was added without a flagged `[HUMAN CHECKPOINT]`
      request and approval
- [ ] Core logic (calculations, streak rules, matching logic, AI response
      gating) has a passing automated test
- [ ] A screenshot or recording is attached showing the new feature next
      to an existing, unmodified page for visual comparison
- [ ] No AI-generated or written copy states a prediction as certain
      (see tone guidance in `docs/strategy-report-summary.md`)

## AI Beginner Assistant (P1-1 – P1-4, P4-2)

- [ ] Explains at least one concept using the user's own chart data, not
      generic boilerplate text
- [ ] Correctly identifies at least 3 out of 5 test questions that should
      be escalated to a human astrologer (see test set in
      `agents/01_ai_assistant_agent.md`)
- [ ] Handoff to a human astrologer carries the conversation summary —
      verified by checking the astrologer-side view shows it without the
      user re-entering anything
- [ ] Works in at least English and Hindi before Phase 1 is marked
      complete

## Personalized Dashboard + Streak (P1-5 – P1-9)

- [ ] Daily report changes when the user's chart or the date changes —
      not a static template swapped by zodiac sign
- [ ] Streak counter persists correctly across sessions and days
      (including timezone edge cases)
- [ ] No notification or in-app copy uses urgency/loss-framing language
      (e.g., "don't lose your streak," "open now or miss out")
- [ ] Content bank has enough variation that the same exact report text
      does not repeat for a single user within a 90-day simulated run

## Profile-Based Calculators (P2-1 – P2-5)

- [ ] Each profile flow surfaces only the chart elements relevant to that
      life stage — verified by a reviewer checklist per profile, not just
      "the full chart is technically there"
- [ ] Switching profiles does not require re-entering birth details
- [ ] Underlying chart math matches the existing chart-engine's output
      exactly (regression test against known reference charts)

## Family Circle / Referral Growth (P2-6, P3-1 – P3-5)

- [ ] No family member's birth or chart data is visible to another member
      without that member's explicit, logged consent
- [ ] Share cards render correctly and open the intended deep link when
      shared via WhatsApp (tested, not assumed)
- [ ] Wallet-credit referral flow correctly attributes and credits both
      referrer and referee exactly once per unique signup
- [ ] [HUMAN CHECKPOINT] sign-off recorded for the consent/privacy review
      before this section can be marked done

## Release Gate (whole-project, run by Manager, not a subagent)

- [ ] All four features coexist on the home/dashboard screen without
      visual or functional conflict
- [ ] A full click-through of a new user's first session (assistant →
      dashboard → a calculator → inviting one family member) works
      end-to-end without errors
- [ ] Existing pre-existing pages/features are unchanged (spot-check a
      sample of at least 5 pages that were not part of this project)
- [ ] `ROADMAP.md` accurately reflects final status of every task
