'use client';

import React, { useState, useEffect } from 'react';
import { Flame, Award, Calendar, Sparkles, BookOpen, CheckCircle, Sun, Compass } from 'lucide-react';
import { calculateUpdatedStreak, StreakState } from './streakTracker';
import { generateDailyReport, ReportBlock } from './contentBank';
import { trackEvent } from '@/lib/analytics';

export default function PersonalizedDashboard() {
  const [streakState, setStreakState] = useState<StreakState>({
    currentStreak: 3,
    lastCheckInDate: '',
    highestStreak: 5,
    milestonesUnlocked: [],
  });

  const [dailyReport, setDailyReport] = useState<ReportBlock | null>(null);
  const [journalEntry, setJournalEntry] = useState('');
  const [isJournalSaved, setIsJournalSaved] = useState(false);

  useEffect(() => {
    const todayStr = new Date().toLocaleDateString('en-CA');
    const report = generateDailyReport(todayStr, 'user_default_chart');
    setDailyReport(report);

    // Initial streak trigger
    const { newState, isNewCheckIn } = calculateUpdatedStreak(streakState, new Date());
    if (isNewCheckIn) {
      setStreakState(newState);
      trackEvent('dashboard_streak_incremented', { streak_count: newState.currentStreak });
    }
    trackEvent('dashboard_opened', { streak_count: streakState.currentStreak });
  }, []);

  const handleJournalSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!journalEntry.trim()) return;
    setIsJournalSaved(true);
    setTimeout(() => setIsJournalSaved(false), 3000);
  };

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Header Banner */}
      <div className="relative border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
           style={{ background: 'var(--card-bg)', backdropFilter: 'blur(12px)' }}>
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Personalized Daily Insights
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide" style={{ color: 'var(--text-primary)' }}>
            Your Transit Dashboard
          </h1>
          <p className="text-xs sm:text-sm font-medium max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Chart-specific real-time daily reports, streak milestones, and cosmic alignment prompts tailored to your Kundli.
          </p>
        </div>

        {/* Streak Counter Header Pill */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-3xl text-center space-y-1 shadow-inner min-w-[180px]">
          <div className="flex items-center justify-center gap-1.5 text-amber-300">
            <Flame className="w-6 h-6 fill-amber-300 animate-bounce" />
            <span className="text-3xl font-black text-white">{streakState.currentStreak}</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-white/90 block">
            Day Check-in Streak
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Daily Report Card (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          {dailyReport && (
            <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
              <div className="flex items-center justify-between border-b border-purple-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-purple-50 rounded-2xl border border-purple-100">
                    <Sun className="w-5 h-5 text-[#6b2cbd]" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-lg text-slate-900">Today's Chart Transit Summary</h2>
                    <span className="text-xs text-slate-500 font-semibold">
                      Calculated for Rahul Sharma (Libra Lagna)
                    </span>
                  </div>
                </div>
                <span className="bg-purple-100 text-[#6b2cbd] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                  {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>

              {/* Opener & Planetary Theme */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                <p className="p-4 bg-purple-50/60 border border-purple-100 rounded-2xl text-purple-950 font-semibold">
                  ✨ {dailyReport.opener}
                </p>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
                    Core Planetary Theme:
                  </h3>
                  <p className="text-slate-800 font-medium">{dailyReport.theme}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
                    Actionable Guidance:
                  </h3>
                  <p className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-950 font-semibold">
                    🌱 {dailyReport.actionableTip}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-purple-50 flex items-center justify-between text-xs text-slate-500">
                <span>{dailyReport.closing}</span>
                <span className="font-bold text-[#6b2cbd] flex items-center gap-1">
                  <Compass className="w-4 h-4" /> Transit Active
                </span>
              </div>
            </div>
          )}

          {/* Optional Daily Journaling Prompt */}
          <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-8 shadow-md space-y-4">
            <h2 className="font-extrabold text-lg text-slate-900 flex items-center gap-2 border-b border-purple-100 pb-3">
              <BookOpen className="w-5 h-5 text-[#f26d85]" /> Daily Reflection Journal
            </h2>
            <p className="text-xs text-slate-600 font-medium">
              {dailyReport?.journalPrompt}
            </p>

            <form onSubmit={handleJournalSave} className="space-y-3">
              <textarea
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                placeholder="Write your reflections here (optional)..."
                rows={3}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#ffa767] to-[#eb468b] text-white font-extrabold text-xs px-6 py-2.5 rounded-2xl shadow hover:opacity-95 transition cursor-pointer"
                >
                  Save Entry
                </button>
                {isJournalSaved && (
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" /> Reflection Saved!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar: Milestones & Streak Details */}
        <div className="space-y-6">
          <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-md space-y-4">
            <h3 className="font-extrabold text-base text-slate-900 border-b border-purple-100 pb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" /> Milestone Rewards
            </h3>
            <div className="space-y-3">
              {[
                { days: 7, title: '7-Day Cosmic Novice', reward: 'Kundli Planetary Deep Dive Unlock' },
                { days: 30, title: '30-Day Astrological Scholar', reward: 'Custom Transit Digest Access' },
                { days: 100, title: '100-Day Cosmic Master', reward: 'Exclusive Live Astrologer Session Credit' },
              ].map((m) => {
                const isUnlocked = streakState.currentStreak >= m.days;
                return (
                  <div
                    key={m.days}
                    className={`p-4 rounded-2xl border flex items-start gap-3 transition ${
                      isUnlocked
                        ? 'bg-purple-50 border-purple-200 text-[#6b2cbd]'
                        : 'bg-slate-50 border-slate-200 opacity-60 text-slate-600'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl text-xs font-black ${
                        isUnlocked ? 'bg-[#6b2cbd] text-white' : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {m.days}D
                    </div>
                    <div className="space-y-0.5 text-xs">
                      <span className="font-black block">{m.title}</span>
                      <span className="text-[11px] text-slate-600 font-medium block">{m.reward}</span>
                      {isUnlocked && (
                        <span className="text-[10px] font-extrabold text-emerald-600 uppercase block">
                          ✓ Unlocked
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
