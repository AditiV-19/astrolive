export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp?: string;
}

export function trackEvent(eventName: string, properties?: Record<string, any>): void {
  const payload: AnalyticsEvent = {
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
}
