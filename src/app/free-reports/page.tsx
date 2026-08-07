'use client';

import React, { useState } from 'react';
import { FileText, Sparkles, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

const reportsList = [
  { id: 'kaalsarp', title: 'Kaalsarp Yoga / Dosha Report', desc: 'Identify Kaalsarp presence and get specific Vedic remedies.', icon: '🐍', tag: 'Most Popular' },
  { id: 'gemstone', title: 'Gemstones Recommendation', desc: 'Discover your lucky Ratna based on Lagna lord and planetary strength.', icon: '💎', tag: 'Free Advice' },
  { id: 'mangal', title: 'Mangal Dosha Analysis', desc: 'Detailed analysis of 1st, 4th, 7th, 8th, and 12th house Mars.', icon: '🔥', tag: 'Marriage Special' },
  { id: 'varshphal', title: 'Varshphal (Annual Horoscope)', desc: 'Yearly solar return chart predictions and monthly trends.', icon: '📜', tag: 'Annual Guide' },
  { id: 'sadesati', title: 'Shani Sade Sati Report', desc: 'Check active Sade Sati phase, 7.5 years Saturn cycle & remedies.', icon: '🪐', tag: 'Saturn Check' },
  { id: 'numerology', title: 'Numerology Report', desc: 'Calculate Life Path Number, Destiny Number, and Lucky Name tuning.', icon: '🔢', tag: 'Instant Result' },
];

export default function FreeReportsPage() {
  const [selectedReport, setSelectedReport] = useState(reportsList[0]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            100% Free Detailed Vedic Reports
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide">
            Free Astrology PDF Reports
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xl">
            Get personalized in-depth Vedic analysis reports for Doshas, Gemstones, Dasha, and Career.
          </p>
        </div>
      </div>

      {/* Reports Grid & Active Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Reports Selection List */}
        <div className="space-y-3">
          <h3 className="font-extrabold text-lg text-slate-900 mb-4">Select Report Type</h3>
          {reportsList.map((rep) => (
            <div
              key={rep.id}
              onClick={() => { setSelectedReport(rep); setSubmitted(false); }}
              className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                selectedReport.id === rep.id
                  ? 'bg-purple-50 border-[#6b2cbd] ring-2 ring-purple-300'
                  : 'bg-white border-purple-100 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{rep.icon}</span>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">{rep.title}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{rep.desc}</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-purple-600 flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* Selected Report Form & Output */}
        <div className="lg:col-span-2 bg-white border border-purple-100 rounded-3xl p-6 sm:p-8 shadow-md">
          <div className="border-b border-purple-100 pb-4 mb-6">
            <span className="bg-purple-100 text-[#6b2cbd] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
              {selectedReport.tag}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-2">{selectedReport.title}</h2>
            <p className="text-xs text-slate-500 font-medium">{selectedReport.desc}</p>
          </div>

          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-xs font-semibold">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-700 block mb-1">Your Full Name</label>
                  <input type="text" placeholder="Rahul Sharma" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" required />
                </div>
                <div>
                  <label className="text-slate-700 block mb-1">Gender</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
                    <option>Male ♂</option>
                    <option>Female ♀</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-slate-700 block mb-1">Date</label>
                  <input type="text" placeholder="DD" className="w-full bg-slate-50 border border-slate-200 rounded-xl text-center py-2.5" required />
                </div>
                <div>
                  <label className="text-slate-700 block mb-1">Month</label>
                  <input type="text" placeholder="MM" className="w-full bg-slate-50 border border-slate-200 rounded-xl text-center py-2.5" required />
                </div>
                <div>
                  <label className="text-slate-700 block mb-1">Year</label>
                  <input type="text" placeholder="YYYY" className="w-full bg-slate-50 border border-slate-200 rounded-xl text-center py-2.5" required />
                </div>
              </div>

              <div>
                <label className="text-slate-700 block mb-1">Place of Birth</label>
                <input type="text" placeholder="City Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5" required />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ffa767] to-[#eb468b] text-white font-extrabold py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition cursor-pointer"
              >
                Generate Free {selectedReport.title}
              </button>
            </form>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between text-xs font-bold text-emerald-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Report Generated Successfully!</span>
                </div>
                <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-[10px]">Ready</span>
              </div>

              <div className="p-6 bg-purple-50/60 rounded-2xl border border-purple-100 space-y-3 text-xs leading-relaxed">
                <h4 className="font-extrabold text-sm text-[#6b2cbd]">Key Report Findings:</h4>
                <p className="text-slate-700 font-medium">
                  Based on your planetary configuration, your Lagna lord Jupiter is strongly placed. Wearing a <strong>Yellow Sapphire (Pukhraj)</strong> in gold on Thursdays will enhance wisdom and financial stability.
                </p>
                <div className="p-3 bg-white rounded-xl font-semibold text-slate-800 border border-purple-100">
                  ⚡ Suggested Remedy: Perform Vishnu Sahasranama chanting on Thursdays and donate yellow lentils.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
