import React from 'react';
import PersonalizedDashboard from '@/features/dashboard/PersonalizedDashboard';

export const metadata = {
  title: 'Personalized Daily Dashboard | AstroLive',
  description: 'Your real-time transit report, streak tracker, and planetary reflection daily guide.',
};

export default function DashboardPage() {
  return <PersonalizedDashboard />;
}
