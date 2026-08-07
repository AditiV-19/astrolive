'use client';

import React, { useState } from 'react';
import { Compass, Sparkles, BookOpen, Sun, Heart, Eye } from 'lucide-react';

const occultTopics = [
  { id: 'palmistry', title: 'Palmistry (Hast Rekha)', desc: 'Learn to read Life Line, Heart Line, Head Line and Fate Line on your palms.', icon: '✋' },
  { id: 'tarot', title: 'Tarot Card Reading', desc: 'Pick 3 cards for Past, Present, and Future guidance.', icon: '🃏' },
  { id: 'numerology', title: 'Numerology & Name Tuning', desc: 'Calculate your Life Path Number and compatibility.', icon: '🔢' },
  { id: 'vastu', title: 'Vastu Shastra Guidelines', desc: 'Harmonize your home and office direction energies for wealth.', icon: '🏠' },
  { id: 'lalkitab', title: 'Lal Kitab Remedies', desc: 'Simple, effective remedies for planetary afflictions.', icon: '📕' },
  { id: 'mantra', title: 'Mantras & Chalisas', desc: 'Sacred Vedic chants, Hanuman Chalisa, Gayatri Mantra.', icon: '🕉️' },
];

export default function OccultPage() {
  const [selectedTopic, setSelectedTopic] = useState(occultTopics[0]);

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Sacred Ancient Knowledge
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide">
            Occult & Mystical Sciences
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xl">
            Explore Palmistry, Tarot Reading, Numerology, Vastu Shastra, Mantras, and Lal Kitab.
          </p>
        </div>
      </div>

      {/* Grid of Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {occultTopics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => setSelectedTopic(topic)}
            className={`p-6 rounded-3xl border cursor-pointer transition shadow-sm flex flex-col justify-between h-48 ${
              selectedTopic.id === topic.id
                ? 'bg-purple-50 border-[#6b2cbd] ring-2 ring-purple-300'
                : 'bg-white border-purple-100 hover:shadow-md'
            }`}
          >
            <div className="space-y-2">
              <span className="text-3xl">{topic.icon}</span>
              <h3 className="font-extrabold text-lg text-slate-900">{topic.title}</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{topic.desc}</p>
            </div>

            <span className="text-xs font-extrabold text-[#6b2cbd] flex items-center gap-1 uppercase tracking-wider">
              Explore Guide →
            </span>
          </div>
        ))}
      </div>

      {/* Selected Topic Content Viewer */}
      <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-8 shadow-md space-y-4 animate-fadeIn">
        <div className="flex items-center gap-3 border-b border-purple-100 pb-4">
          <span className="text-4xl">{selectedTopic.icon}</span>
          <div>
            <h2 className="text-2xl font-black text-slate-900">{selectedTopic.title} Guide</h2>
            <p className="text-xs text-purple-700 font-bold">{selectedTopic.desc}</p>
          </div>
        </div>

        <div className="space-y-3 text-xs text-slate-700 font-medium leading-relaxed">
          <p>
            Welcome to the <strong>{selectedTopic.title}</strong> knowledge hub. In Vedic and occult tradition, understanding these subtle energy principles helps align your personal vibration with universal cosmic flow.
          </p>
          <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 font-semibold space-y-1">
            <span className="text-[#6b2cbd] font-black text-xs block uppercase">Key Principle:</span>
            <span>Always practice spiritual remedies with pure intent and faith for optimal results.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
