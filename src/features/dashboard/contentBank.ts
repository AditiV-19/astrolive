export interface ReportBlock {
  opener: string;
  theme: string;
  actionableTip: string;
  journalPrompt: string;
  closing: string;
}

// Length: 15
const OPENERS = [
  "Today's planetary alignment interacts harmoniously with your natal Moon placement.",
  "With current transits accentuating your ascendant lord, clarity guides your decisions today.",
  "A thoughtful cosmic influence suggests focusing on intellectual pursuits and communication.",
  "Your chart receives a supportive aspect from Jupiter today, fostering constructive optimism.",
  "The current lunar position highlights your 10th house of career and professional focus.",
  "Sun transiting your natal sign provides renewed vitality and executive presence.",
  "Venus forming a beneficial angle brings warmth to your close personal connections.",
  "Mercury in alignment with your 3rd house sharpens problem-solving and writing skills.",
  "Mars in favorable aspect encourages energetic action and personal initiative.",
  "Saturn's grounding energy supports systematic effort and long-term planning.",
  "Rahu's subtle transit inspires creative innovation and out-of-the-box thinking.",
  "Ketu's introspective influence invites quiet contemplation and intuitive insights.",
  "The planetary configuration brings steady focus to your financial stewardship.",
  "A supportive planetary aspect enhances harmony in family discussions.",
  "Cosmic energies favor learning, research, and skill refinement today.",
];

// Length: 16 (Coprime with 15)
const THEMES = [
  "Focus on gradual, sustainable progress rather than impulsive rushes.",
  "Embrace open dialogue with colleagues and family members.",
  "Patience and attentive listening will yield meaningful results.",
  "Organize your priorities with calm determination.",
  "Reflect on long-term growth while managing daily commitments.",
  "Creative brainstorming and active learning are favored under today's transits.",
  "Maintain emotional equilibrium when dealing with unexpected schedule changes.",
  "Channel your passion into constructive collaborative endeavors.",
  "Cultivate inner stillness amidst busy external routines.",
  "Prioritize tasks that build lasting security and personal development.",
  "Strengthen trust through transparent and compassionate communication.",
  "Acknowledge small wins as vital steps toward your grander objectives.",
  "Seek clarity before making significant financial commitments.",
  "Practice flexibility and adaptability in your routine today.",
  "Focus your attention on quality rather than sheer speed of output.",
  "Align daily tasks with your core personal values and aspirations.",
];

// Length: 17 (Coprime with 15 and 16)
const TIPS = [
  "Dedicate 15 minutes to organize your priorities before starting major tasks.",
  "Reach out to an old colleague or mentor for a quick catch-up.",
  "Take brief breaks during focused work to keep your mind refreshed.",
  "Review upcoming goals with a balanced perspective.",
  "Practice mindful communication in all group discussions.",
  "Set clear boundaries around your work hours to preserve your energy.",
  "Write down three key goals to accomplish by the end of the day.",
  "Engage in light physical stretching or a quick walk during lunch.",
  "Double-check important emails or documents before sending them.",
  "Share appreciation with someone who supported you recently.",
  "Keep your workspace orderly to enhance mental clarity.",
  "Spend ten quiet minutes in nature or by a sunny window.",
  "Avoid multitasking; focus deeply on one item at a time.",
  "Drink extra water and take deep breaths during demanding moments.",
  "Reflect on a lesson learned from a recent challenge.",
  "Express genuine gratitude to a mentor or family member today.",
  "Take five slow, deep breaths whenever you transition between tasks.",
];

const PROMPTS = [
  "What is one goal you feel inspired to work toward this week?",
  "How can you practice active listening in your interactions today?",
  "What simple habit brought you clarity or peace of mind today?",
  "Which personal strength served you best during today's tasks?",
  "What is one positive realization you had about your career path?",
  "How did you handle a moment of stress or uncertainty today?",
  "What relationship or connection are you most grateful for right now?",
  "Which boundary helped protect your time and peace of mind today?",
];

const CLOSINGS = [
  "May your day be filled with steady progress and cosmic balance.",
  "Wishing you a peaceful and productive day ahead.",
  "Carry this sense of purpose with you into your evening.",
  "Stay grounded in your values as you navigate today.",
  "May clarity and confidence guide your path forward.",
];

export function generateDailyReport(dateStr: string, chartId: string): ReportBlock {
  const parts = dateStr.split('-').map(Number);
  const dayIndex = (parts[0] || 2026) * 365 + (parts[1] || 1) * 31 + (parts[2] || 1);

  let chartHash = 0;
  for (let i = 0; i < chartId.length; i++) {
    chartHash += chartId.charCodeAt(i);
  }

  const openerIdx = (dayIndex + chartHash) % OPENERS.length;
  const themeIdx = (dayIndex + chartHash) % THEMES.length;
  const tipIdx = (dayIndex + chartHash) % TIPS.length;
  const promptIdx = (dayIndex + chartHash) % PROMPTS.length;
  const closingIdx = (dayIndex + chartHash) % CLOSINGS.length;

  return {
    opener: OPENERS[openerIdx],
    theme: THEMES[themeIdx],
    actionableTip: TIPS[tipIdx],
    journalPrompt: PROMPTS[promptIdx],
    closing: CLOSINGS[closingIdx],
  };
}

export function simulate90Days(chartId: string): { totalDays: number; uniqueReports: number; hasDuplicates: boolean } {
  const generated = new Set<string>();
  const startDate = new Date('2026-01-01');

  for (let i = 0; i < 90; i++) {
    const current = new Date(startDate);
    current.setDate(startDate.getDate() + i);
    const dateStr = current.toISOString().split('T')[0];
    const report = generateDailyReport(dateStr, chartId);
    const fullText = `${report.opener} | ${report.theme} | ${report.actionableTip}`;
    generated.add(fullText);
  }

  return {
    totalDays: 90,
    uniqueReports: generated.size,
    hasDuplicates: generated.size < 90,
  };
}
