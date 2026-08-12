'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Star } from 'lucide-react';

interface Astrologer {
  id: string;
  name: string;
  avatar: string;
  skills: string[];
  languages: string[];
  exp: number;
  price: number;
  rating: number;
  orders: number;
  isOnline: boolean;
}

const callAstrologersData: Astrologer[] = [
  {
    id: '101',
    name: 'Lavi',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/22dfc5d4-d377-46e1-81b0-c429b53b5025.png',
    skills: ['Vedic', 'Tarot', 'Face Reading'],
    languages: ['Hindi'],
    exp: 5,
    price: 16.0,
    rating: 4.8,
    orders: 190,
    isOnline: true,
  },
  {
    id: '102',
    name: 'Divyanshi',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/40d6d749-9c79-4454-b350-b76288fe6fcd.png',
    skills: ['Tarot', 'Vastu'],
    languages: ['Hindi', 'Bhojpuri'],
    exp: 5,
    price: 15.0,
    rating: 4.9,
    orders: 230,
    isOnline: true,
  },
  {
    id: '103',
    name: 'Shradha',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    skills: ['Tarot', 'Numerology'],
    languages: ['English', 'Hindi', 'Kannada', 'Marathi'],
    exp: 9,
    price: 18.0,
    rating: 4.9,
    orders: 410,
    isOnline: true,
  },
  {
    id: '104',
    name: 'Guruji Shastri',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/26db47d6-13aa-40ee-b5a1-9299924cae9d.jpg',
    skills: ['Vedic', 'Panchang', 'Lal Kitab'],
    languages: ['Hindi', 'Gujarati'],
    exp: 14,
    price: 22.0,
    rating: 5.0,
    orders: 680,
    isOnline: true,
  },
];

export default function CallPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredAstrologers = callAstrologersData.filter((astro) => {
    const matchesSearch = astro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      astro.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (selectedFilter === 'All') return matchesSearch;
    return matchesSearch && astro.skills.some(s => s.toLowerCase() === selectedFilter.toLowerCase());
  });

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Title & Banner Header */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide">
            Talk to Astrologer
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium">
            Direct audio consultation with India's top certified astrologers.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search by name or skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white text-slate-800 text-xs font-semibold pl-10 pr-4 py-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2">
        <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1 mr-2">
          <Filter className="w-3.5 h-3.5" /> Filter:
        </span>
        {['All', 'Vedic', 'Tarot', 'Numerology', 'Panchang', 'Vastu'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition flex-shrink-0 cursor-pointer ${
              selectedFilter === cat
                ? 'bg-[#6b2cbd] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-purple-50 border border-purple-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Astrologers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAstrologers.map((astro) => (
          <Link
            key={astro.id}
            href={`/astrologer/${astro.id}`}
            className="bg-white border border-purple-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between hover:shadow-lg hover:scale-[1.01] transition-all duration-200 cursor-pointer block"
          >
            <div className="flex justify-between items-start gap-2">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm flex-shrink-0">
                <img src={astro.avatar} alt={astro.name} className="w-full h-full object-cover" />
                <span className="absolute top-0 right-1 w-3 h-3 bg-[#2ccb72] rounded-full border-2 border-white" />
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <div className="flex flex-wrap justify-end gap-1">
                  {astro.skills.map((s, i) => (
                    <span
                      key={i}
                      className="bg-purple-50 text-[#6b2cbd] text-[9px] font-bold px-2 py-0.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="bg-[#c2a3f0] text-purple-950 font-bold text-xs px-3 py-1 rounded-full">
                  ₹{astro.price.toFixed(2)}/min
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-1.5">
              <h3 className="font-extrabold text-lg text-slate-800 flex items-center gap-1.5">
                {astro.name} <span className="text-[#f26d85] text-sm">♀</span>
              </h3>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <span>🗣</span> {astro.languages.join(', ')}
              </p>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <span>🎓</span> {astro.exp} Years Experience
              </p>
            </div>

            <div className="pt-4 mt-3 border-t border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{astro.rating}</span>
                <span className="text-slate-400 font-normal">({astro.orders})</span>
              </div>

              <span className="bg-[#2ccb72] text-white font-bold px-5 py-2 rounded-full text-xs flex items-center gap-1.5 shadow-sm">
                View Profile
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
