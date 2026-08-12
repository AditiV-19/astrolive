'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, MessageCircle, Star } from 'lucide-react';

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

const astrologersData: Astrologer[] = [
  {
    id: '1',
    name: 'Shiva',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/26db47d6-13aa-40ee-b5a1-9299924cae9d.jpg',
    skills: ['Vedic', 'Numerology', 'Palmistry'],
    languages: ['Hindi', 'English', 'Bhojpuri'],
    exp: 6,
    price: 14,
    rating: 4,
    orders: 120,
    isOnline: true,
  },
  {
    id: '2',
    name: 'Srahvya',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    skills: ['Tarot', 'Numerology'],
    languages: ['English', 'Hindi'],
    exp: 8,
    price: 14,
    rating: 5,
    orders: 310,
    isOnline: true,
  },
  {
    id: '3',
    name: 'Lavi',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/22dfc5d4-d377-46e1-81b0-c429b53b5025.png',
    skills: ['Vedic', 'Tarot', 'Face Reading'],
    languages: ['Hindi'],
    exp: 5,
    price: 16,
    rating: 4,
    orders: 95,
    isOnline: true,
  },
  {
    id: '4',
    name: 'Sonia',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/d0fc6f35-dcab-4eb0-bff6-114aa9cc8795.jpg',
    skills: ['Tarot', 'Psychic'],
    languages: ['Hindi'],
    exp: 4,
    price: 12,
    rating: 5,
    orders: 210,
    isOnline: true,
  },
  {
    id: '5',
    name: 'Mystery',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/fa0607c3-882c-42dd-93af-e28b7467c909.png',
    skills: ['Tarot', 'KP System'],
    languages: ['English', 'Hindi', 'Bengali'],
    exp: 5,
    price: 12,
    rating: 4,
    orders: 140,
    isOnline: true,
  },
  {
    id: '6',
    name: 'Divyanshi',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/40d6d749-9c79-4454-b350-b76288fe6fcd.png',
    skills: ['Tarot', 'Vastu'],
    languages: ['Hindi', 'Bhojpuri'],
    exp: 5,
    price: 12,
    rating: 5,
    orders: 180,
    isOnline: true,
  },
  {
    id: '7',
    name: 'Dr. Radhika',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    skills: ['Vedic', 'Nadi Astrology'],
    languages: ['English', 'Hindi', 'Marathi'],
    exp: 11,
    price: 25,
    rating: 5,
    orders: 540,
    isOnline: true,
  },
  {
    id: '8',
    name: 'Aacharya Anand',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/26db47d6-13aa-40ee-b5a1-9299924cae9d.jpg',
    skills: ['Vedic', 'Lal Kitab', 'Panchang'],
    languages: ['Hindi', 'Sanskrit'],
    exp: 15,
    price: 30,
    rating: 5,
    orders: 890,
    isOnline: true,
  },
];

export default function ChatPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredAstrologers = astrologersData.filter((astro) => {
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
            Chat With Astrologers
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium">
            Connect instantly with verified Vedic, Tarot, and Numerology experts.
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
        {['All', 'Vedic', 'Tarot', 'Numerology', 'Palmistry', 'Psychic', 'Vastu'].map((cat) => (
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
            className="bg-[#f7f2fb] border border-purple-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between hover:shadow-lg hover:scale-[1.01] transition-all duration-200 cursor-pointer block"
          >
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1.5 min-w-[70px]">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#f26d85]">
                  <img src={astro.avatar} alt={astro.name} className="w-full h-full object-cover" />
                </div>
                <span className="bg-[#2ccb72] text-white text-[8px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Online
                </span>
                <div className="flex items-center text-amber-400 text-xs font-bold gap-0.5">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>{astro.rating}</span>
                </div>
              </div>

              <div className="flex-1 space-y-1.5">
                <h3 className="font-extrabold text-lg text-slate-800">{astro.name}</h3>
                <div className="flex flex-wrap gap-1">
                  {astro.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-orange-100 text-orange-700 text-[9px] font-bold px-2 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  🗣 {astro.languages.join(', ')}
                </p>
                <p className="text-xs font-semibold text-slate-600">
                  🎓 Exp: {astro.exp} Yrs | 📦 {astro.orders} Consultations
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 mt-3 border-t border-purple-100">
              <span className="bg-[#b3e2d5] text-emerald-900 text-xs font-extrabold px-3 py-1.5 rounded-full">
                ₹{astro.price} / min
              </span>
              <span className="bg-[#6b2cbd] text-white font-bold px-6 py-1.5 rounded-full text-xs flex items-center gap-1.5 shadow-sm">
                <MessageCircle className="w-3.5 h-3.5" /> View Profile
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
