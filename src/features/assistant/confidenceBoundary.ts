export interface ConfidenceCheckResult {
  shouldEscalate: boolean;
  reason?: string;
  suggestedAction?: string;
}

const HUMAN_ESCALATION_KEYWORDS = [
  'when will',
  'kab hogi',
  'kab hoga',
  'should i take',
  'should i buy',
  'should i marry',
  'why do i keep having',
  'will i get',
  'job offer',
  'remedy for',
  'marriage timing',
  'divorce',
];

export function checkConfidenceBoundary(question: string): ConfidenceCheckResult {
  const normalized = question.toLowerCase().trim();

  for (const keyword of HUMAN_ESCALATION_KEYWORDS) {
    if (normalized.includes(keyword)) {
      return {
        shouldEscalate: true,
        reason: 'This question involves personal timing, major life choices, or complex planetary synthesis best evaluated by an expert astrologer.',
        suggestedAction: 'Connect with a certified astrologer for a personalized 1-on-1 session.',
      };
    }
  }

  return {
    shouldEscalate: false,
  };
}
