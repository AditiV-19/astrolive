'use client';

import React, { useState } from 'react';
import { Sun, Moon, Calendar, MapPin, Clock, Compass } from 'lucide-react';

export default function PanchangPage() {
  const [selectedDate, setSelectedDate] = useState('2026-08-08');
  const [selectedCity, setSelectedCity] = useState('New Delhi');
  const [activeTab, setActiveTab] = useState<'panchang' | 'hora' | 'choghadiya'>('panchang');

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Title Header */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Authentic Vedic Panchang
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide">
            Today's Panchang & Shubh Muhurat
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xl">
            Check daily Tithi, Nakshatra, Rahu Kaal, Abhijit Muhurat, Choghadiya, and Hora timings.
          </p>
        </div>
      </div>

      {/* Date & City Picker Bar */}
      <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-56">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-800"
            />
          </div>

          <div className="relative flex-1 sm:w-56">
            <input
              type="text"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              placeholder="City Name"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-800"
            />
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-purple-50 p-1 rounded-2xl gap-1 text-xs font-bold w-full sm:w-auto">
          {[
            { id: 'panchang', label: 'Today Panchang' },
            { id: 'hora', label: 'Hora Timings' },
            { id: 'choghadiya', label: 'Choghadiya' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`px-4 py-2 rounded-xl transition cursor-pointer ${
                activeTab === t.id ? 'bg-[#6b2cbd] text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'panchang' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Sun & Moon Timings Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-5 shadow-sm space-y-1">
              <div className="flex items-center gap-2 text-amber-700 font-extrabold text-xs">
                <Sun className="w-5 h-5" /> Sunrise
              </div>
              <p className="text-xl font-black text-slate-900">05:48 AM</p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-3xl p-5 shadow-sm space-y-1">
              <div className="flex items-center gap-2 text-orange-700 font-extrabold text-xs">
                <Sun className="w-5 h-5" /> Sunset
              </div>
              <p className="text-xl font-black text-slate-900">07:12 PM</p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-3xl p-5 shadow-sm space-y-1">
              <div className="flex items-center gap-2 text-indigo-700 font-extrabold text-xs">
                <Moon className="w-5 h-5" /> Moonrise
              </div>
              <p className="text-xl font-black text-slate-900">02:15 AM</p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-3xl p-5 shadow-sm space-y-1">
              <div className="flex items-center gap-2 text-purple-700 font-extrabold text-xs">
                <Moon className="w-5 h-5" /> Moonset
              </div>
              <p className="text-xl font-black text-slate-900">03:40 PM</p>
            </div>
          </div>

          {/* Panchang 5 Elements Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-extrabold text-lg text-slate-900 border-b border-purple-100 pb-3">
                5 Primary Panchang Elements
              </h3>

              <div className="space-y-3 text-xs font-semibold">
                <div className="flex justify-between py-1.5 border-b border-purple-50">
                  <span className="text-slate-500">Tithi:</span>
                  <span className="text-slate-900 font-extrabold">Krishna Ekadashi (till 04:32 PM)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-purple-50">
                  <span className="text-slate-500">Nakshatra:</span>
                  <span className="text-slate-900 font-extrabold">Mrigashirsha (till 11:20 PM)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-purple-50">
                  <span className="text-slate-500">Yoga:</span>
                  <span className="text-slate-900 font-extrabold">Siddhi (till 08:15 AM)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-purple-50">
                  <span className="text-slate-500">Karana:</span>
                  <span className="text-slate-900 font-extrabold">Bava (till 04:32 PM)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-purple-50">
                  <span className="text-slate-500">Weekday (Vara):</span>
                  <span className="text-purple-700 font-extrabold">Shanivara (Saturday)</span>
                </div>
              </div>
            </div>

            {/* Shubh & Ashubh Timings */}
            <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-extrabold text-lg text-slate-900 border-b border-purple-100 pb-3">
                Auspicious & Inauspicious Timings
              </h3>

              <div className="space-y-3 text-xs font-semibold">
                <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-2xl flex justify-between items-center text-emerald-900">
                  <span>✨ Abhijit Muhurat (Shubh):</span>
                  <span className="font-extrabold">12:00 PM - 12:54 PM</span>
                </div>

                <div className="p-3 bg-red-50 border border-red-100 rounded-2xl flex justify-between items-center text-red-900">
                  <span>⛔ Rahu Kalam (Avoid work):</span>
                  <span className="font-extrabold">09:05 AM - 10:45 AM</span>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-100 rounded-2xl flex justify-between items-center text-amber-900">
                  <span>⚠️ Yamaganda Kaal:</span>
                  <span className="font-extrabold">02:00 PM - 03:40 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Hora Timings */}
      {activeTab === 'hora' && (
        <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm space-y-4 animate-fadeIn">
          <h3 className="font-extrabold text-lg text-slate-900 border-b border-purple-100 pb-3">
            Daily Hora Planetary Periods
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-semibold">
            {[
              { time: '05:48 AM - 06:48 AM', planet: 'Surya (Sun)', type: 'Good for Government & Authority' },
              { time: '06:48 AM - 07:48 AM', planet: 'Shukra (Venus)', type: 'Good for Arts & Relationship' },
              { time: '07:48 AM - 08:48 AM', planet: 'Budha (Mercury)', type: 'Good for Business & Education' },
              { time: '08:48 AM - 09:48 AM', planet: 'Chandra (Moon)', type: 'Good for Travel & Harmony' },
              { time: '09:48 AM - 10:48 AM', planet: 'Shani (Saturn)', type: 'Avoid new contracts' },
              { time: '10:48 AM - 11:48 AM', planet: 'Guru (Jupiter)', type: 'Highly Auspicious for all work' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-purple-50/70 rounded-2xl border border-purple-100 flex justify-between items-center">
                <div>
                  <span className="font-bold text-purple-950 block">{item.planet}</span>
                  <span className="text-slate-500 font-normal">{item.type}</span>
                </div>
                <span className="bg-white text-slate-800 px-3 py-1 rounded-full font-bold shadow-sm">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Choghadiya */}
      {activeTab === 'choghadiya' && (
        <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm space-y-4 animate-fadeIn">
          <h3 className="font-extrabold text-lg text-slate-900 border-b border-purple-100 pb-3">
            Day & Night Choghadiya Timings
          </h3>

          <div className="space-y-2 text-xs font-bold">
            {[
              { time: '05:48 AM - 07:28 AM', name: 'Amrit', status: 'Good (Auspicious)', bg: 'bg-emerald-100 text-emerald-900' },
              { time: '07:28 AM - 09:08 AM', name: 'Kaal', status: 'Loss (Inauspicious)', bg: 'bg-red-100 text-red-900' },
              { time: '09:08 AM - 10:48 AM', name: 'Shubh', status: 'Good (Auspicious)', bg: 'bg-emerald-100 text-emerald-900' },
              { time: '10:48 AM - 12:28 PM', name: 'Roga', status: 'Bad (Inauspicious)', bg: 'bg-rose-100 text-rose-900' },
              { time: '12:28 PM - 02:08 PM', name: 'Udveg', status: 'Bad (Anxiety)', bg: 'bg-amber-100 text-amber-900' },
              { time: '02:08 PM - 03:48 PM', name: 'Char', status: 'Neutral (Travel)', bg: 'bg-blue-100 text-blue-900' },
            ].map((c, i) => (
              <div key={i} className={`p-3 rounded-2xl flex justify-between items-center ${c.bg}`}>
                <span>{c.name} Choghadiya ({c.status})</span>
                <span className="font-extrabold">{c.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
