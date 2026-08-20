# Analytics Events Documentation

## Overview
This document specifies the event taxonomy and instrumentation standard for AstroLive across Phase 1, Phase 2, and Phase 3 features.

## Event Dispatch Interface (`src/lib/analytics.ts` proposed contract)
```typescript
export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp?: string;
}

export function trackEvent(eventName: string, properties?: Record<string, any>): void {
  const payload = {
    event: eventName,
    properties: {
      ...properties,
      url: typeof window !== 'undefined' ? window.location.href : '',
    },
    timestamp: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics Event]', payload);
  }
  // Integration point for PostHog / Mixpanel / Google Analytics
}
```

## Mandatory Phase 1 Event Taxonomy

| Event Name | Trigger Context | Payload Properties |
| :--- | :--- | :--- |
| `assistant_opened` | User opens the AI Beginner Assistant chat modal or page | `{ source: string, language: 'en' \| 'hi' }` |
| `assistant_message_sent` | User sends a query to the AI Assistant | `{ query_length: number, category?: string }` |
| `assistant_escalated_to_human` | AI Assistant triggers confidence boundary and suggests human astrologer | `{ reason: string, last_query: string }` |
| `dashboard_opened` | User views daily personalized transit dashboard | `{ streak_count: number, active_rashi: string }` |
| `dashboard_streak_incremented` | User completes daily streak check-in | `{ streak_count: number, reward_unlocked?: string }` |
| `calculator_profile_selected` | User switches profile in calculators flow | `{ profile_type: 'student' \| 'career' \| 'marriage' \| 'parent' }` |
| `family_member_invited` | User generates an invite/share link for Family Circle | `{ channel: 'whatsapp' \| 'link_copy', relation: string }` |
| `referral_completed` | Invited user completes signup via referral link | `{ referrer_id: string, referee_id: string }` |
