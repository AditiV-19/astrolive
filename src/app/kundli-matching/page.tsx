'use client';

import React, { useState } from 'react';
import { Heart, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function KundliMatchingPage() {
  const [boyData, setBoyData] = useState({ name: 'Rahul', day: '15', month: '08', year: '1995', city: 'Delhi' });
  const [girlData, setGirlData] = useState({ name: 'Priya', day: '22', month: '11', year: '1997', city: 'Mumbai' });
  const [isCalculated, setIsCalculated] = useState(true);

  const handleMatch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculated(true);
  };

  const kootaScores = [
    { koota: 'Varna', max: 1, scored: 1, desc: 'Work compatibility and spiritual ego' },
    { koota: 'Vashya', max: 2, scored: 2, desc: 'Mutual attraction and control' },
    { koota: 'Tara', max: 3, scored: 1.5, desc: 'Destiny, health and longevity' },
    { koota: 'Yoni', max: 4, scored: 3, desc: 'Physical and intimate compatibility' },
    { koota: 'Maitri', max: 5, scored: 4, desc: 'Psychological rapport and friendship' },
    { koota: 'Gana', max: 6, scored: 6, desc: 'Temperament and behavioral nature' },
    { koota: 'Bhakoot', max: 7, scored: 7, desc: 'Love, financial prosperity and family' },
    { koota: 'Nadi', max: 8, scored: 3.5, desc: 'Health, genes and progeny compatibility' },
  ];

  const totalScore = kootaScores.reduce((acc, curr) => acc + curr.scored, 0);

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Title Header */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Vedic Ashta Koota Milan
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide">
            Kundli Match Making (Gun Milan)
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xl">
            Check marriage compatibility between bride & groom based on 36 Gun Milan points and Manglik Dosha.
          </p>
        </div>
      </div>

      {/* Matching Form */}
      <form onSubmit={handleMatch} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Boy's Details */}
        <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-md space-y-4">
          <h2 className="font-extrabold text-lg text-slate-900 border-b border-purple-100 pb-3 flex items-center gap-2">
            <span>👦 Boy's Details</span>
          </h2>

          <div className="space-y-3 text-xs font-semibold">
            <div>
              <label className="text-slate-600 block mb-1">Boy's Name</label>
              <input
                type="text"
                value={boyData.name}
                onChange={(e) => setBoyData({ ...boyData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5"
                required
              />
            </div>

            <div>
              <label className="text-slate-600 block mb-1">Date of Birth</label>
              <div className="grid grid-cols-3 gap-2">
                <input type="text" placeholder="DD" value={boyData.day} onChange={(e) => setBoyData({ ...boyData, day: e.target.value })} className="bg-slate-50 border border-slate-200 rounded-xl text-center py-2" />
                <input type="text" placeholder="MM" value={boyData.month} onChange={(e) => setBoyData({ ...boyData, month: e.target.value })} className="bg-slate-50 border border-slate-200 rounded-xl text-center py-2" />
                <input type="text" placeholder="YYYY" value={boyData.year} onChange={(e) => setBoyData({ ...boyData, year: e.target.value })} className="bg-slate-50 border border-slate-200 rounded-xl text-center py-2" />
              </div>
            </div>

            <div>
              <label className="text-slate-600 block mb-1">Place of Birth</label>
              <input
                type="text"
                value={boyData.city}
                onChange={(e) => setBoyData({ ...boyData, city: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5"
              />
            </div>
          </div>
        </div>

        {/* Girl's Details */}
        <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-md space-y-4">
          <h2 className="font-extrabold text-lg text-slate-900 border-b border-purple-100 pb-3 flex items-center gap-2">
            <span>👧 Girl's Details</span>
          </h2>

          <div className="space-y-3 text-xs font-semibold">
            <div>
              <label className="text-slate-600 block mb-1">Girl's Name</label>
              <input
                type="text"
                value={girlData.name}
                onChange={(e) => setGirlData({ ...girlData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5"
                required
              />
            </div>

            <div>
              <label className="text-slate-600 block mb-1">Date of Birth</label>
              <div className="grid grid-cols-3 gap-2">
                <input type="text" placeholder="DD" value={girlData.day} onChange={(e) => setGirlData({ ...girlData, day: e.target.value })} className="bg-slate-50 border border-slate-200 rounded-xl text-center py-2" />
                <input type="text" placeholder="MM" value={girlData.month} onChange={(e) => setGirlData({ ...girlData, month: e.target.value })} className="bg-slate-50 border border-slate-200 rounded-xl text-center py-2" />
                <input type="text" placeholder="YYYY" value={girlData.year} onChange={(e) => setGirlData({ ...girlData, year: e.target.value })} className="bg-slate-50 border border-slate-200 rounded-xl text-center py-2" />
              </div>
            </div>

            <div>
              <label className="text-slate-600 block mb-1">Place of Birth</label>
              <input
                type="text"
                value={girlData.city}
                onChange={(e) => setGirlData({ ...girlData, city: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#ffa767] to-[#eb468b] text-white font-extrabold py-4 rounded-2xl text-sm uppercase tracking-wider shadow-lg hover:opacity-95 transition cursor-pointer flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5 fill-white" /> Check Gun Milan Compatibility
          </button>
        </div>
      </form>

      {/* Match Results */}
      {isCalculated && (
        <div className="space-y-6 animate-fadeIn">
          {/* Main Score Banner */}
          <div className="bg-gradient-to-r from-[#7166f9] via-[#9686fc] to-[#84c4ff] rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Overall Compatibility Result
              </span>
              <h2 className="text-3xl font-black">
                {boyData.name} & {girlData.name}
              </h2>
              <p className="text-xs text-white/90 font-semibold max-w-md">
                High compatibility score! This marriage alliance is considered auspicious and highly favorable according to Vedic Jyotish.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl text-center border border-white/20 min-w-[200px]">
              <span className="block text-4xl sm:text-5xl font-black text-white">
                {totalScore} / 36
              </span>
              <span className="block text-xs font-bold uppercase tracking-wider text-amber-200 mt-1">
                Guns Matched (78%)
              </span>
            </div>
          </div>

          {/* Ashta Koota Score Breakdown */}
          <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="font-extrabold text-xl text-slate-900 border-b border-purple-100 pb-3">
              Ashta Koota Milan Breakdown
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {kootaScores.map((koota, idx) => (
                <div key={idx} className="p-4 bg-purple-50/60 border border-purple-100 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-slate-900">{koota.koota} Koota</span>
                      <span className="text-[10px] text-slate-500 font-semibold">({koota.desc})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-extrabold text-xs">
                    <span className="text-[#6b2cbd] text-sm">{koota.scored}</span>
                    <span className="text-slate-400">/ {koota.max}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Manglik Check Status */}
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between text-xs font-bold text-emerald-900">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Manglik Dosha Match Status:</span>
              </div>
              <span className="bg-emerald-600 text-white px-3 py-1 rounded-full uppercase text-[10px]">
                Both Non-Manglik (No Dosha)
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
