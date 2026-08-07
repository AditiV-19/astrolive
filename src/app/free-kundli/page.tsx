'use client';

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Sparkles, PieChart, Shield } from 'lucide-react';

export default function FreeKundliPage() {
  const [formData, setFormData] = useState({
    name: 'Rahul Sharma',
    gender: 'Male',
    day: '15',
    month: '08',
    year: '1995',
    hour: '10',
    minute: '30',
    amPm: 'AM',
    city: 'New Delhi, India',
  });

  const [isGenerated, setIsGenerated] = useState(true);
  const [activeTab, setActiveTab] = useState<'basic' | 'charts' | 'dasha' | 'planets'>('basic');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerated(true);
  };

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Title & Banner Header */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              100% Free Accurate Calculation
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide">
            Free Janam Kundali Generator
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xl">
            Get your comprehensive birth chart, planetary positions, Lagna chart, Vimshottari Dasha, and Vedic astrology predictions.
          </p>
        </div>
      </div>

      {/* Kundli Form Input Card */}
      <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-8 shadow-md">
        <h2 className="font-extrabold text-xl text-slate-900 mb-6 flex items-center gap-2 border-b border-purple-100 pb-3">
          <Sparkles className="w-5 h-5 text-[#f26d85]" /> Enter Birth Details
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs font-semibold">
          {/* Name & Gender */}
          <div className="space-y-2">
            <label className="text-slate-700 uppercase">Full Name</label>
            <div className="relative">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Enter your name"
                required
              />
              <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-slate-700 uppercase">Gender</label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <option value="Male">Male ♂</option>
              <option value="Female">Female ♀</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="space-y-2">
            <label className="text-slate-700 uppercase">Date of Birth</label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="DD"
                value={formData.day}
                onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                className="bg-slate-50 border border-slate-200 rounded-2xl text-center py-3 text-slate-800"
              />
              <input
                type="text"
                placeholder="MM"
                value={formData.month}
                onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                className="bg-slate-50 border border-slate-200 rounded-2xl text-center py-3 text-slate-800"
              />
              <input
                type="text"
                placeholder="YYYY"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="bg-slate-50 border border-slate-200 rounded-2xl text-center py-3 text-slate-800"
              />
            </div>
          </div>

          {/* Time of Birth */}
          <div className="space-y-2">
            <label className="text-slate-700 uppercase">Time of Birth</label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="HH"
                value={formData.hour}
                onChange={(e) => setFormData({ ...formData, hour: e.target.value })}
                className="bg-slate-50 border border-slate-200 rounded-2xl text-center py-3 text-slate-800"
              />
              <input
                type="text"
                placeholder="MM"
                value={formData.minute}
                onChange={(e) => setFormData({ ...formData, minute: e.target.value })}
                className="bg-slate-50 border border-slate-200 rounded-2xl text-center py-3 text-slate-800"
              />
              <select
                value={formData.amPm}
                onChange={(e) => setFormData({ ...formData, amPm: e.target.value })}
                className="bg-slate-50 border border-slate-200 rounded-2xl text-center py-3 text-slate-800"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          {/* Place of Birth */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-slate-700 uppercase">Place of Birth</label>
            <div className="relative">
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="City name"
                required
              />
              <MapPin className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-3 pt-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#ffa767] to-[#eb468b] text-white font-extrabold py-3.5 rounded-2xl text-sm uppercase tracking-wider shadow-lg hover:opacity-95 transition cursor-pointer"
            >
              Generate Free Kundli Chart
            </button>
          </div>
        </form>
      </div>

      {/* Generated Kundli Output Results */}
      {isGenerated && (
        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="flex justify-center border-b border-purple-200 gap-2 sm:gap-6 text-xs sm:text-sm font-bold">
            {[
              { id: 'basic', label: 'Basic Details & Panchang' },
              { id: 'charts', label: 'Lagna & Moon Charts' },
              { id: 'dasha', label: 'Vimshottari Dasha' },
              { id: 'planets', label: 'Planetary Positions' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 uppercase tracking-wider border-b-2 transition cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-[#6b2cbd] text-[#6b2cbd] font-black'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Basic Details */}
          {activeTab === 'basic' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm space-y-4">
                <h3 className="font-extrabold text-lg text-slate-900 border-b border-purple-100 pb-2">
                  Avakhada Chakra & Panchang
                </h3>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex justify-between py-1 border-b border-purple-50">
                    <span className="font-semibold text-slate-500">Varna:</span>
                    <span className="font-extrabold text-slate-900">Kshatriya</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-50">
                    <span className="font-semibold text-slate-500">Vashya:</span>
                    <span className="font-extrabold text-slate-900">Chatushpada</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-50">
                    <span className="font-semibold text-slate-500">Yoni:</span>
                    <span className="font-extrabold text-slate-900">Ashwa (Horse)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-50">
                    <span className="font-semibold text-slate-500">Gana:</span>
                    <span className="font-extrabold text-slate-900">Deva</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-50">
                    <span className="font-semibold text-slate-500">Nadi:</span>
                    <span className="font-extrabold text-slate-900">Madhya</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-50">
                    <span className="font-semibold text-slate-500">Sign (Rashi):</span>
                    <span className="font-extrabold text-purple-700">Leo (Simha)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-purple-50">
                    <span className="font-semibold text-slate-500">Ascendant (Lagna):</span>
                    <span className="font-extrabold text-purple-700">Libra (Tula)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm space-y-4">
                <h3 className="font-extrabold text-lg text-slate-900 border-b border-purple-100 pb-2">
                  Key Cosmic Factors
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-900">Manglik Dosha:</span>
                    <span className="bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      No Mangal Dosha
                    </span>
                  </div>

                  <div className="p-3 bg-purple-50 border border-purple-100 rounded-2xl flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-900">Kalsarp Yoga:</span>
                    <span className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      Minor Anant Kalsarp
                    </span>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-100 rounded-2xl flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900">Sade Sati Phase:</span>
                    <span className="bg-amber-500 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      2nd Phase (Rising)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Lagna Charts */}
          {activeTab === 'charts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              {/* North Indian Lagna Chart */}
              <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm space-y-4 text-center">
                <h3 className="font-extrabold text-lg text-slate-900">Lagna Chart (D1)</h3>
                
                {/* SVG Vedic Kundali Diamond Chart */}
                <div className="w-64 h-64 mx-auto relative border-2 border-amber-600 bg-amber-50/40 p-2">
                  <svg viewBox="0 0 200 200" className="w-full h-full stroke-amber-700 stroke-[1.5] fill-none">
                    <rect x="0" y="0" width="200" height="200" />
                    <line x1="0" y1="0" x2="200" y2="200" />
                    <line x1="200" y1="0" x2="0" y2="200" />
                    <polygon points="100,0 200,100 100,200 0,100" />
                  </svg>
                  <span className="absolute top-2 left-2 text-[10px] font-bold text-purple-900">Sun, Mer</span>
                  <span className="absolute top-2 right-2 text-[10px] font-bold text-purple-900">Jup</span>
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-purple-900">Sat</span>
                  <span className="absolute bottom-2 right-2 text-[10px] font-bold text-purple-900">Ven</span>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-black text-amber-800">
                    Lagna 1
                  </span>
                </div>
              </div>

              {/* Moon Chart */}
              <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm space-y-4 text-center">
                <h3 className="font-extrabold text-lg text-slate-900">Chandra Chart (Moon)</h3>

                <div className="w-64 h-64 mx-auto relative border-2 border-indigo-600 bg-indigo-50/40 p-2">
                  <svg viewBox="0 0 200 200" className="w-full h-full stroke-indigo-700 stroke-[1.5] fill-none">
                    <rect x="0" y="0" width="200" height="200" />
                    <line x1="0" y1="0" x2="200" y2="200" />
                    <line x1="200" y1="0" x2="0" y2="200" />
                    <polygon points="100,0 200,100 100,200 0,100" />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-black text-indigo-800">
                    Simha 5
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Dasha */}
          {activeTab === 'dasha' && (
            <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-extrabold text-lg text-slate-900 border-b border-purple-100 pb-3">
                Vimshottari Dasha Periods
              </h3>

              <div className="space-y-3">
                {[
                  { planet: 'Sun (Surya)', duration: '1995 - 2001', status: 'Completed' },
                  { planet: 'Moon (Chandra)', duration: '2001 - 2011', status: 'Completed' },
                  { planet: 'Mars (Mangal)', duration: '2011 - 2018', status: 'Completed' },
                  { planet: 'Rahu', duration: '2018 - 2036', status: 'Active (Current Dasha)' },
                  { planet: 'Jupiter (Guru)', duration: '2036 - 2052', status: 'Upcoming' },
                ].map((dasha, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border flex items-center justify-between text-xs font-bold ${
                      dasha.status.includes('Active')
                        ? 'bg-purple-50 border-purple-300 text-[#6b2cbd]'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div>
                      <span className="text-sm font-black block">{dasha.planet}</span>
                      <span className="text-slate-500 font-normal">{dasha.duration}</span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] uppercase font-extrabold ${
                        dasha.status.includes('Active')
                          ? 'bg-[#6b2cbd] text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {dasha.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Planets Table */}
          {activeTab === 'planets' && (
            <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm overflow-x-auto animate-fadeIn">
              <h3 className="font-extrabold text-lg text-slate-900 mb-4">Planetary Positions & Degree</h3>

              <table className="w-full text-left text-xs font-semibold">
                <thead>
                  <tr className="bg-purple-50 text-slate-700 uppercase border-b border-purple-100">
                    <th className="p-3">Planet</th>
                    <th className="p-3">Rashi (Sign)</th>
                    <th className="p-3">Degree</th>
                    <th className="p-3">House</th>
                    <th className="p-3">Nakshatra</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-50 text-slate-800">
                  <tr><td className="p-3 font-bold text-amber-700">Sun ☀️</td><td className="p-3">Leo</td><td className="p-3">28° 14'</td><td className="p-3">1st</td><td className="p-3">Uttara Phalguni</td></tr>
                  <tr><td className="p-3 font-bold text-slate-700">Moon 🌙</td><td className="p-3">Leo</td><td className="p-3">14° 02'</td><td className="p-3">1st</td><td className="p-3">Purva Phalguni</td></tr>
                  <tr><td className="p-3 font-bold text-red-600">Mars ♂</td><td className="p-3">Libra</td><td className="p-3">05° 45'</td><td className="p-3">3rd</td><td className="p-3">Chitra</td></tr>
                  <tr><td className="p-3 font-bold text-emerald-600">Mercury ☿</td><td className="p-3">Virgo</td><td className="p-3">19° 30'</td><td className="p-3">2nd</td><td className="p-3">Hasta</td></tr>
                  <tr><td className="p-3 font-bold text-yellow-600">Jupiter ♃</td><td className="p-3">Sagittarius</td><td className="p-3">11° 10'</td><td className="p-3">5th</td><td className="p-3">Mula</td></tr>
                  <tr><td className="p-3 font-bold text-pink-600">Venus ♀</td><td className="p-3">Cancer</td><td className="p-3">22° 15'</td><td className="p-3">12th</td><td className="p-3">Ashlesha</td></tr>
                  <tr><td className="p-3 font-bold text-blue-600">Saturn ♄</td><td className="p-3">Aquarius</td><td className="p-3">08° 50'</td><td className="p-3">7th</td><td className="p-3">Shatabhisha</td></tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
