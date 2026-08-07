'use client';

import React, { useState } from 'react';
import { Calendar, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface Pooja {
  id: string;
  title: string;
  pandit: string;
  price: number;
  benefits: string[];
  date: string;
  image: string;
  tag: string;
}

const poojasData: Pooja[] = [
  {
    id: '1',
    title: 'Mahamrityunjaya Mantra Jaap & Hawan',
    pandit: 'Acharya Vidyanand Shastri',
    price: 2100,
    benefits: ['Good Health & Protection', 'Removes Negativity', 'Longevity & Peace'],
    date: 'Next Ekadashi (Aug 12, 2026)',
    image: 'https://media.chingari.io/apipublic/uploads/profilePic/26db47d6-13aa-40ee-b5a1-9299924cae9d.jpg',
    tag: 'Highly Recommended 🔥',
  },
  {
    id: '2',
    title: 'Kalsarp Dosha Nivaran Special Pooja',
    pandit: 'Pandit Rameshwar Trivedi',
    price: 3500,
    benefits: ['Career Growth Obstacle Removal', 'Peace of Mind', 'Family Prosperity'],
    date: 'Upcoming Amavasya (Aug 18, 2026)',
    image: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    tag: 'Special Ritual ✨',
  },
  {
    id: '3',
    title: 'Mangal Shanti & Marriage Remedial Pooja',
    pandit: 'Guruji Devender Jha',
    price: 2700,
    benefits: ['Removes Marriage Delays', 'Harmonious Relationship', 'Calms Mangal Dosha'],
    date: 'Tuesday Special (Aug 15, 2026)',
    image: 'https://media.chingari.io/apipublic/uploads/profilePic/22dfc5d4-d377-46e1-81b0-c429b53b5025.png',
    tag: 'Marriage Remedy 💍',
  },
];

export default function PoojaPage() {
  const [selectedPooja, setSelectedPooja] = useState<Pooja | null>(null);

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Live Video Stream Puja
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide">
            Book Online Vedic Pooja
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xl">
            Perform personalized Poojas by experienced Pandits at holy Tirth Kshetras. Get Prasad delivered to your home.
          </p>
        </div>
      </div>

      {/* Pooja Listing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {poojasData.map((pooja) => (
          <div
            key={pooja.id}
            className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition"
          >
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-40 bg-slate-100">
                <img src={pooja.image} alt={pooja.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-[#6b2cbd] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow">
                  {pooja.tag}
                </span>
              </div>

              <h3 className="font-extrabold text-lg text-slate-900 leading-snug">{pooja.title}</h3>

              <div className="text-xs text-slate-500 font-semibold space-y-1">
                <p className="flex items-center gap-1.5 text-purple-900">
                  <ShieldCheck className="w-4 h-4 text-[#6b2cbd]" /> {pooja.pandit}
                </p>
                <p className="flex items-center gap-1.5 text-slate-600">
                  <Calendar className="w-4 h-4 text-slate-400" /> {pooja.date}
                </p>
              </div>

              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">Key Benefits:</span>
                {pooja.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-purple-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-semibold">Total Dakshina</span>
                <span className="text-xl font-black text-slate-900">₹{pooja.price}</span>
              </div>

              <button
                onClick={() => setSelectedPooja(pooja)}
                className="bg-gradient-to-r from-[#ffa767] to-[#eb468b] text-white font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider shadow hover:opacity-90 transition cursor-pointer"
              >
                Book Pooja
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedPooja && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-6 animate-fadeIn">
            <div className="flex justify-between items-start border-b border-purple-100 pb-4">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">{selectedPooja.title}</h3>
                <p className="text-xs text-purple-700 font-bold">By {selectedPooja.pandit}</p>
              </div>
              <button onClick={() => setSelectedPooja(null)} className="text-slate-400 hover:text-slate-600 font-bold text-xl">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <p className="text-slate-600 font-medium">
                Enter Sankalp details for your online Pooja. Live streaming link and video recording will be shared on WhatsApp.
              </p>

              <div className="space-y-2 font-semibold">
                <div>
                  <label className="text-slate-600 block mb-1">Devotee Name (Yajman)</label>
                  <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs" />
                </div>
                <div>
                  <label className="text-slate-600 block mb-1">Gotra</label>
                  <input type="text" placeholder="Kashyap / Bharadwaj / Not Sure" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs" />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button onClick={() => setSelectedPooja(null)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-full text-xs transition">
                Cancel
              </button>
              <button className="flex-1 bg-gradient-to-r from-[#ffa767] to-[#eb468b] text-white font-extrabold py-2.5 rounded-full text-xs shadow-md transition">
                Confirm Booking (₹{selectedPooja.price})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
