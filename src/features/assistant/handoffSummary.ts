export interface HandoffPayload {
  userQuestion: string;
  chartSummary: {
    rashi: string;
    lagna: string;
    currentDasha: string;
  };
  conversationHistorySnippet: Array<{ role: 'user' | 'assistant'; text: string }>;
  timestamp: string;
}

export function buildHandoffSummary(
  question: string,
  history: Array<{ role: 'user' | 'assistant'; text: string }>
): HandoffPayload {
  return {
    userQuestion: question,
    chartSummary: {
      rashi: 'Leo (Simha)',
      lagna: 'Libra (Tula)',
      currentDasha: 'Rahu (2018 - 2036)',
    },
    conversationHistorySnippet: history.slice(-4),
    timestamp: new Date().toISOString(),
  };
}
