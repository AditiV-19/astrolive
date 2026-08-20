import { checkConfidenceBoundary } from '../features/assistant/confidenceBoundary';
import { buildHandoffSummary } from '../features/assistant/handoffSummary';
import { calculateUpdatedStreak, StreakState } from '../features/dashboard/streakTracker';
import { simulate90Days } from '../features/dashboard/contentBank';

function runPhase1TestSuite() {
  console.log('========================================');
  console.log('       RUNNING PHASE 1 TEST SUITE       ');
  console.log('========================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, testName: string) {
    if (condition) {
      console.log(`✅ PASS: ${testName}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${testName}`);
      failed++;
    }
  }

  // --- 1. AI Assistant Confidence Boundary 5-Question Test ---
  console.log('--- Test Set 1: AI Assistant Confidence Boundary ---');

  const q1 = checkConfidenceBoundary("What does it mean that I have Mercury in my 3rd house?");
  assert(q1.shouldEscalate === false, 'Educational query "Mercury in 3rd house" answered directly');

  const q2 = checkConfidenceBoundary("When will I get married?");
  assert(q2.shouldEscalate === true, 'Timing query "When will I get married?" escalated to human');

  const q3 = checkConfidenceBoundary("What is a dasha?");
  assert(q3.shouldEscalate === false, 'Educational query "What is a dasha?" answered directly');

  const q4 = checkConfidenceBoundary("Should I take this job offer?");
  assert(q4.shouldEscalate === true, 'Decision query "Should I take this job offer?" escalated to human');

  const q5 = checkConfidenceBoundary("Why do I keep having relationship problems?");
  assert(q5.shouldEscalate === true, 'Synthesis query "Why do I keep having relationship problems?" escalated to human');

  // --- 2. Handoff Summary Builder Test ---
  console.log('\n--- Test Set 2: Astrologer Handoff Summary ---');
  const handoff = buildHandoffSummary("When will I get married?", [
    { role: 'user', text: "Hello" },
    { role: 'assistant', text: "Namaste" },
    { role: 'user', text: "When will I get married?" }
  ]);
  assert(handoff.userQuestion === "When will I get married?", 'Handoff captures exact user question');
  assert(handoff.chartSummary.rashi !== '', 'Handoff carries chart summary context');
  assert(handoff.conversationHistorySnippet.length > 0, 'Handoff includes history snippet');

  // --- 3. Dashboard 90-Day Content Non-Repetition Test ---
  console.log('\n--- Test Set 3: 90-Day Daily Report Variety ---');
  const repetitionResult = simulate90Days('test_chart_123');
  assert(repetitionResult.totalDays === 90, 'Simulated 90 days');
  assert(repetitionResult.hasDuplicates === false, 'Zero exact repeated reports over 90 days');

  // --- 4. Streak Counter & Timezone Edge Cases ---
  console.log('\n--- Test Set 4: Streak Counter & Timezone Logic ---');
  const initialStreak: StreakState = {
    currentStreak: 5,
    lastCheckInDate: '2026-08-15',
    highestStreak: 5,
    milestonesUnlocked: [],
  };

  // Same day double check-in (11:58pm vs 11:59pm)
  const sameDay = new Date('2026-08-15T23:58:00');
  const sameDayResult = calculateUpdatedStreak(initialStreak, sameDay);
  assert(sameDayResult.isNewCheckIn === false, 'Same day check-in does not double count');

  // Next day check-in (12:02am on 2026-08-16)
  const nextDay = new Date('2026-08-16T00:02:00');
  const nextDayResult = calculateUpdatedStreak(initialStreak, nextDay);
  assert(nextDayResult.isNewCheckIn === true, 'Next day check-in correctly increments streak');
  assert(nextDayResult.newState.currentStreak === 6, 'Streak count updated to 6');

  console.log('\n========================================');
  console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('========================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runPhase1TestSuite();
