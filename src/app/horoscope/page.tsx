'use client';

import React, { useState } from 'react';
import { Sparkles, Heart, Briefcase, Activity, DollarSign, Star } from 'lucide-react';

const zodiacSigns = [
  { sign: 'Aries', symbol: '♈', dates: 'Mar 21 - Apr 19', color: 'bg-red-50 text-red-600 border-red-200' },
  { sign: 'Taurus', symbol: '♉', dates: 'Apr 20 - May 20', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
  { sign: 'Gemini', symbol: '♊', dates: 'May 21 - Jun 20', color: 'bg-amber-50 text-amber-600 border-amber-200' },
  { sign: 'Cancer', symbol: '♋', dates: 'Jun 21 - Jul 22', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
  { sign: 'Leo', symbol: '♌', dates: 'Jul 23 - Aug 22', color: 'bg-orange-50 text-orange-600 border-orange-200' },
  { sign: 'Virgo', symbol: '♍', dates: 'Aug 23 - Sep 22', color: 'bg-[#f7f2fb] text-[#6b2cbd] border-purple-200' },
  { sign: 'Libra', symbol: '♎', dates: 'Sep 23 - Oct 22', color: 'bg-pink-50 text-pink-600 border-pink-200' },
  { sign: 'Scorpio', symbol: '♏', dates: 'Oct 23 - Nov 21', color: 'bg-[#260e2e]/5 text-purple-900 border-purple-300' },
  { sign: 'Sagittarius', symbol: '♐', dates: 'Nov 22 - Dec 21', color: 'bg-blue-50 text-blue-600 border-blue-200' },
  { sign: 'Capricorn', symbol: '♑', dates: 'Dec 22 - Jan 19', color: 'bg-slate-100 text-slate-700 border-slate-300' },
  { sign: 'Aquarius', symbol: '♒', dates: 'Jan 20 - Feb 18', color: 'bg-cyan-50 text-cyan-600 border-cyan-200' },
  { sign: 'Pisces', symbol: '♓', dates: 'Feb 19 - Mar 20', color: 'bg-teal-50 text-teal-600 border-teal-200' },
];

export default function HoroscopePage() {
  const [activeTab, setActiveTab] = useState<'today' | 'yesterday' | 'tomorrow' | 'monthly' | 'yearly'>('today');
  const [selectedSign, setSelectedSign] = useState<typeof zodiacSigns[0] | null>(zodiacSigns[4]); // Leo default

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Celestial Guidance & Horoscope
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide">
            Free Daily & Yearly Horoscope
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xl">
            Select your Zodiac sign to get accurate predictions on Love, Career, Finances, and Health.
          </p>
        </div>
      </div>

      {/* Horoscope Timeline Tabs */}
      <div className="flex justify-center border-b border-purple-200 gap-2 sm:gap-6 text-xs sm:text-sm font-bold overflow-x-auto scrollbar-none">
        {[
          { id: 'today', label: "Today's Horoscope" },
          { id: 'yesterday', label: "Yesterday's" },
          { id: 'tomorrow', label: "Tomorrow's" },
          { id: 'monthly', label: 'Monthly' },
          { id: 'yearly', label: 'Yearly 2026' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`pb-3 uppercase tracking-wider border-b-2 transition cursor-pointer flex-shrink-0 ${
              activeTab === tab.id
                ? 'border-[#6b2cbd] text-[#6b2cbd] font-black'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 12 Zodiac Signs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {zodiacSigns.map((item) => (
          <div
            key={item.sign}
            onClick={() => setSelectedSign(item)}
            className={`p-4 rounded-3xl border text-center cursor-pointer transition shadow-sm flex flex-col items-center justify-between h-36 ${item.color} ${
              selectedSign?.sign === item.sign ? 'ring-2 ring-[#6b2cbd] shadow-md scale-105' : 'hover:scale-102'
            }`}
          >
            <span className="text-4xl font-black">{item.symbol}</span>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900">{item.sign}</h3>
              <p className="text-[10px] text-slate-500 font-semibold">{item.dates}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Sign Predictions View */}
      {selectedSign && (
        <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-8 shadow-md space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-purple-100 pb-4 gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="text-5xl">{selectedSign.symbol}</span>
              <div>
                <h2 className="text-2xl font-black text-slate-900 uppercase">
                  {selectedSign.sign} Horoscope ({activeTab})
                </h2>
                <p className="text-xs text-purple-700 font-bold">{selectedSign.dates}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-purple-50 p-3 rounded-2xl text-xs font-bold">
              <div>
                <span className="text-slate-500 block">Lucky Number:</span>
                <span className="text-[#6b2cbd] font-black text-sm">7</span>
              </div>
              <div className="border-l border-purple-200 pl-3">
                <span className="text-slate-500 block">Lucky Color:</span>
                <span className="text-purple-900 font-black text-sm">Royal Purple</span>
              </div>
            </div>
          </div>

          {/* Predictions Categorized */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
            <div className="p-5 bg-rose-50/60 border border-rose-100 rounded-2xl space-y-2">
              <h4 className="font-extrabold text-sm text-rose-800 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-600 fill-rose-600" /> Love & Relationship
              </h4>
              <p className="text-slate-700 font-medium">
                Venus aligns favorably today, encouraging open communication with your partner. Singles might receive a surprising text from someone special.
              </p>
            </div>

            <div className="p-5 bg-blue-50/60 border border-blue-100 rounded-2xl space-y-2">
              <h4 className="font-extrabold text-sm text-blue-800 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" /> Career & Business
              </h4>
              <p className="text-slate-700 font-medium">
                Your dedication to ongoing projects will catch the attention of senior leadership. Perfect day to propose innovative ideas.
              </p>
            </div>

            <div className="p-5 bg-emerald-50/60 border border-emerald-100 rounded-2xl space-y-2">
              <h4 className="font-extrabold text-sm text-emerald-800 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-600" /> Wealth & Finances
              </h4>
              <p className="text-slate-700 font-medium">
                Financial stability improves today. A past investment is likely to yield unexpected gains. Avoid speculative trading.
              </p>
            </div>

            <div className="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl space-y-2">
              <h4 className="font-extrabold text-sm text-amber-800 flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-600" /> Health & Energy
              </h4>
              <p className="text-slate-700 font-medium">
                Energy levels remain high. Maintaining proper hydration and a light evening walk will help relieve accumulated stress.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
