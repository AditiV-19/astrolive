'use client';

import React, { useState } from 'react';
import { Heart, Sparkles, Flame, Smile, Lock } from 'lucide-react';

export default function LoveCalculatorPage() {
  const [person1, setPerson1] = useState({ name: 'Alexander', sign: 'Leo' });
  const [person2, setPerson2] = useState({ name: 'Sophia', sign: 'Aries' });
  const [matchScore, setMatchScore] = useState<number | null>(88);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const score = Math.floor(Math.random() * 20) + 80;
    setMatchScore(score);
  };

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Zodiac Love Compatibility
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide">
            Love & Friendship Calculator
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xl">
            Calculate your love percentage, zodiac synergy, and relationship harmony score instantly.
          </p>
        </div>
      </div>

      {/* Input Card */}
      <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-8 shadow-md">
        <form onSubmit={handleCalculate} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-semibold">
          <div className="space-y-3 bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
            <h3 className="font-extrabold text-sm text-rose-800 flex items-center gap-1.5">
              <span>💖 First Partner</span>
            </h3>

            <div>
              <label className="text-slate-600 block mb-1">Your Name</label>
              <input
                type="text"
                value={person1.name}
                onChange={(e) => setPerson1({ ...person1, name: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5"
                required
              />
            </div>

            <div>
              <label className="text-slate-600 block mb-1">Zodiac Sign</label>
              <select
                value={person1.sign}
                onChange={(e) => setPerson1({ ...person1, sign: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5"
              >
                {['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-3 bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
            <h3 className="font-extrabold text-sm text-purple-800 flex items-center gap-1.5">
              <span>💖 Second Partner</span>
            </h3>

            <div>
              <label className="text-slate-600 block mb-1">Partner's Name</label>
              <input
                type="text"
                value={person2.name}
                onChange={(e) => setPerson2({ ...person2, name: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5"
                required
              />
            </div>

            <div>
              <label className="text-slate-600 block mb-1">Zodiac Sign</label>
              <select
                value={person2.sign}
                onChange={(e) => setPerson2({ ...person2, sign: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5"
              >
                {['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#ffa767] to-[#eb468b] text-white font-extrabold py-3.5 rounded-2xl text-sm uppercase tracking-wider shadow-lg hover:opacity-95 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5 fill-white" /> Calculate Love Percentage
            </button>
          </div>
        </form>
      </div>

      {/* Love Score Result */}
      {matchScore !== null && (
        <div className="bg-white border border-purple-100 rounded-3xl p-8 shadow-sm space-y-6 text-center animate-fadeIn">
          <div className="max-w-xs mx-auto bg-gradient-to-tr from-rose-500 to-pink-500 text-white rounded-full w-44 h-44 flex flex-col items-center justify-center shadow-xl space-y-1 my-4">
            <Heart className="w-8 h-8 fill-white animate-pulse" />
            <span className="text-4xl font-black">{matchScore}%</span>
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-rose-100">Love Match</span>
          </div>

          <h3 className="font-black text-2xl text-slate-900">
            {person1.name} & {person2.name} ({person1.sign} + {person2.sign})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left text-xs font-semibold">
            <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100 space-y-1">
              <span className="text-rose-800 font-extrabold flex items-center gap-1">
                <Flame className="w-4 h-4 text-rose-600" /> Passion & Attraction
              </span>
              <p className="text-slate-600 font-normal">High chemical attraction and natural romantic spark.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 space-y-1">
              <span className="text-purple-800 font-extrabold flex items-center gap-1">
                <Smile className="w-4 h-4 text-purple-600" /> Communication
              </span>
              <p className="text-slate-600 font-normal">Deep mental understanding and mutual support.</p>
            </div>

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 space-y-1">
              <span className="text-amber-800 font-extrabold flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-amber-600" /> Long-Term Marriage
              </span>
              <p className="text-slate-600 font-normal">Strong foundation for a lifelong harmonious bond.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
