import React from 'react';
import AIAssistantChat from '@/features/assistant/AIAssistantChat';

export const metadata = {
  title: 'AI Beginner Assistant | AstroLive',
  description: 'Learn astrology and understand your birth chart placements with your personal AI guide.',
};

export default function AIAssistantPage() {
  return <AIAssistantChat />;
}
