'use client';

import React, { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  snippet: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Saturn Transit 2026: Impact on All 12 Zodiac Signs',
    category: 'Astrology',
    author: 'Aacharya Anand',
    date: 'Aug 05, 2026',
    readTime: '5 min read',
    image: 'https://media.chingari.io/apipublic/uploads/profilePic/26db47d6-13aa-40ee-b5a1-9299924cae9d.jpg',
    snippet: 'Discover how Saturn movement through Aquarius and Pisces influences your career, health, and finances.',
    content: 'Saturn is the planet of karma and discipline. In 2026, Saturn transit brings significant transformations for cardinal and fixed signs. Performing Saturday Shani Puja and chanting Shani Chalisa helps alleviate negative influences.',
  },
  {
    id: '2',
    title: 'Powerful Mahamrityunjaya Mantra Benefits for Peace & Longevity',
    category: 'Remedies',
    author: 'Dr. Radhika',
    date: 'Aug 02, 2026',
    readTime: '4 min read',
    image: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-[#0509b3e0-9221-467f-a007-3fb26bb36dcd].png',
    snippet: 'Chanting the Mahamrityunjaya Mantra 108 times daily creates a protective shield against illness and fear.',
    content: 'The Moksha Mantra dedicated to Lord Shiva bestows longevity, spiritual awakening, and liberation from fear. Best chanted during Brahma Muhurta.',
  },
  {
    id: '3',
    title: 'Vastu Tips for Home Entrance to Attract Wealth & Positivity',
    category: 'Vastu',
    author: 'Guruji Shastri',
    date: 'Jul 28, 2026',
    readTime: '6 min read',
    image: 'https://media.chingari.io/apipublic/uploads/profilePic/22dfc5d4-d377-46e1-81b0-c429b53b5025.png',
    snippet: 'Keep your main door clean, well-lit, and decorated with Swastika symbol to attract Goddess Lakshmi.',
    content: 'North and East facing main entrances are highly auspicious according to Vastu Shastra. Avoid placing dustbins or shoes near the doorway.',
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = blogPosts.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            AstroLive Articles & News
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide">
            Astrology Blog & Rituals
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xl">
            Read daily horoscopes, festival rituals, gemstone guides, and Vastu insights written by Vedic scholars.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white text-slate-800 text-xs font-semibold pl-10 pr-4 py-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="bg-white border border-purple-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden h-44 bg-slate-100">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <span className="absolute top-3 left-3 bg-[#6b2cbd] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow">
                  {post.category}
                </span>
              </div>

              <h3 className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-[#6b2cbd] transition">
                {post.title}
              </h3>

              <p className="text-xs text-slate-500 font-medium line-clamp-2">{post.snippet}</p>
            </div>

            <div className="pt-4 mt-4 border-t border-purple-100 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
              <div className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                <span>{post.author}</span>
              </div>

              <div className="flex items-center gap-1 text-[#6b2cbd] font-extrabold">
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto scrollbar-none animate-fadeIn">
            <div className="flex justify-between items-start border-b border-purple-100 pb-4">
              <div>
                <span className="bg-purple-100 text-[#6b2cbd] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                  {selectedPost.category}
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 mt-2">{selectedPost.title}</h2>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium mt-1">
                  <span>By {selectedPost.author}</span> • <span>{selectedPost.date}</span> • <span>{selectedPost.readTime}</span>
                </div>
              </div>
              <button onClick={() => setSelectedPost(null)} className="text-slate-400 hover:text-slate-600 font-bold text-xl">✕</button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p className="font-semibold text-slate-900">{selectedPost.snippet}</p>
              <p>{selectedPost.content}</p>
              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 font-medium text-purple-950">
                💡 Astrological Note: Consult our verified live astrologers for personalized chart analysis and custom remedies.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
