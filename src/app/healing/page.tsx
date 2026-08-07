'use client';

import React, { useState } from 'react';
import { Sparkles, Heart, Activity, Sun, Moon } from 'lucide-react';

const healingCategories = [
  { id: 'reiki', title: 'Reiki Healing', desc: 'Channel universal life energy for physical and emotional well-being.', icon: '✨' },
  { id: 'fengshui', title: 'Feng Shui Alignment', desc: 'Harmonize your environment with Five Elements (Wood, Fire, Earth, Metal, Water).', icon: '☯️' },
  { id: 'crystal', title: 'Crystal Therapy', desc: 'Amethyst, Quartz, and Rose Quartz for chakra balancing.', icon: '🔮' },
  { id: 'meditation', title: 'Mindful Meditation', desc: 'Guided Kundalini and Chakra meditation techniques.', icon: '🧘' },
  { id: 'ayurveda', title: 'Ayurvedic Wellness', desc: 'Dosha balancing (Vata, Pitta, Kapha) through herbs and diet.', icon: '🌿' },
];

export default function HealingPage() {
  const [selectedHealing, setSelectedHealing] = useState(healingCategories[0]);

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Holistic Energy Wellness
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide">
            Cosmic Healing & Wellness
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xl">
            Reiki Healing, Feng Shui, Crystal Therapy, Meditation, and Ayurvedic Wisdom.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {healingCategories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setSelectedHealing(cat)}
            className={`p-6 rounded-3xl border cursor-pointer transition shadow-sm flex flex-col justify-between h-48 ${
              selectedHealing.id === cat.id
                ? 'bg-purple-50 border-[#6b2cbd] ring-2 ring-purple-300'
                : 'bg-white border-purple-100 hover:shadow-md'
            }`}
          >
            <div className="space-y-2">
              <span className="text-3xl">{cat.icon}</span>
              <h3 className="font-extrabold text-lg text-slate-900">{cat.title}</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{cat.desc}</p>
            </div>

            <span className="text-xs font-extrabold text-[#6b2cbd] flex items-center gap-1 uppercase tracking-wider">
              Read Therapy Guide →
            </span>
          </div>
        ))}
      </div>

      {/* Selected Healing Detail */}
      <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-8 shadow-md space-y-4 animate-fadeIn">
        <div className="flex items-center gap-3 border-b border-purple-100 pb-4">
          <span className="text-4xl">{selectedHealing.icon}</span>
          <div>
            <h2 className="text-2xl font-black text-slate-900">{selectedHealing.title} Therapy</h2>
            <p className="text-xs text-purple-700 font-bold">{selectedHealing.desc}</p>
          </div>
        </div>

        <div className="space-y-3 text-xs text-slate-700 font-medium leading-relaxed">
          <p>
            Practicing <strong>{selectedHealing.title}</strong> cleanses stagnant energy fields and rejuvenates your mental and physical aura.
          </p>
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 font-semibold text-emerald-900">
            🌱 Daily Healing Tip: Spend 15 minutes in quiet reflection during sunrise to balance your solar plexus chakra.
          </div>
        </div>
      </div>
    </div>
  );
}
