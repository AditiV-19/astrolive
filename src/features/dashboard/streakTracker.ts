export interface StreakState {
  currentStreak: number;
  lastCheckInDate: string; // YYYY-MM-DD local format
  highestStreak: number;
  milestonesUnlocked: number[]; // e.g. [7, 30, 100]
}

export function calculateUpdatedStreak(currentState: StreakState, now: Date): { newState: StreakState; isNewCheckIn: boolean } {
  const todayStr = now.toLocaleDateString('en-CA'); // Formats YYYY-MM-DD in local timezone

  if (currentState.lastCheckInDate === todayStr) {
    // Already checked in today - no change
    return { newState: currentState, isNewCheckIn: false };
  }

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const yesterdayStr = yesterday.toLocaleDateString('en-CA');

  let newStreak = 1;
  if (currentState.lastCheckInDate === yesterdayStr) {
    newStreak = currentState.currentStreak + 1;
  }

  const newHighest = Math.max(currentState.highestStreak, newStreak);
  const newMilestones = [...currentState.milestonesUnlocked];
  for (const m of [7, 30, 100]) {
    if (newStreak >= m && !newMilestones.includes(m)) {
      newMilestones.push(m);
    }
  }

  const newState: StreakState = {
    currentStreak: newStreak,
    lastCheckInDate: todayStr,
    highestStreak: newHighest,
    milestonesUnlocked: newMilestones,
  };

  return { newState, isNewCheckIn: true };
}
