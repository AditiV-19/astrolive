'use client';

import React, { useState } from 'react';
import { Users, Send, Heart, Gift, Volume2, ShieldCheck } from 'lucide-react';

interface LiveStream {
  id: string;
  name: string;
  avatar: string;
  languages: string[];
  viewers: number;
  topic: string;
}

const liveStreamsData: LiveStream[] = [
  {
    id: '1',
    name: 'Aacharya Anand',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/26db47d6-13aa-40ee-b5a1-9299924cae9d.jpg',
    languages: ['Hindi', 'English'],
    viewers: 342,
    topic: 'Free Kundli Guidance & Career Remedies 🪐',
  },
  {
    id: '2',
    name: 'Dr. Radhika',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    languages: ['English', 'Hindi'],
    viewers: 512,
    topic: 'Love & Relationship Tarot Reading 🔮',
  },
  {
    id: '3',
    name: 'Astro Sunita',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/d0fc6f35-dcab-4eb0-bff6-114aa9cc8795.jpg',
    languages: ['Hindi', 'Punjabi'],
    viewers: 189,
    topic: 'Today Panchang & Shubh Muhurat Predictions ✨',
  },
  {
    id: '4',
    name: 'Guruji Shastri',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/22dfc5d4-d377-46e1-81b0-c429b53b5025.png',
    languages: ['Hindi', 'Gujarati'],
    viewers: 420,
    topic: 'Lal Kitab Remedies for Money & Family 📜',
  },
];

export default function LivePage() {
  const [activeStream, setActiveStream] = useState<LiveStream>(liveStreamsData[0]);
  const [comments, setComments] = useState<string[]>([
    'Ramesh: Pranam Guruji 🙏',
    'Neha: Please check my marriage timing',
    'Amit: Har Har Mahadev! ✨',
    'Pooja: Thank you for the wonderful prediction',
  ]);
  const [inputComment, setInputComment] = useState('');
  const [heartsCount, setHeartsCount] = useState(124);

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputComment.trim()) return;
    setComments((prev) => [...prev, `You: ${inputComment}`]);
    setInputComment('');
  };

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-wide">
            Live Astrology Sessions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Watch astrologers live, ask questions in real-time, and get remedies.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          {liveStreamsData.length} Live Streams
        </div>
      </div>

      {/* Main Active Live Player & Chat Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stream Video Player Box */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-slate-950 aspect-video shadow-2xl flex flex-col justify-between p-6">
          <img
            src={activeStream.avatar}
            alt={activeStream.name}
            className="absolute inset-0 w-full h-full object-cover opacity-60 filter blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />

          {/* Top Bar of Active Stream */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={activeStream.avatar}
                alt={activeStream.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-red-500 shadow-md"
              />
              <div>
                <h3 className="font-extrabold text-white text-base flex items-center gap-1">
                  {activeStream.name}
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                </h3>
                <p className="text-xs text-slate-300 font-medium">{activeStream.topic}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white">
              <Users className="w-4 h-4 text-red-400" />
              <span className="font-bold">{activeStream.viewers} Watching</span>
            </div>
          </div>

          {/* Stream Center Play Indicator */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-2">
            <div className="w-16 h-16 rounded-full bg-red-600/80 text-white flex items-center justify-center animate-pulse shadow-lg cursor-pointer">
              <Volume2 className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full">
              LIVE BROADCASTING
            </span>
          </div>

          {/* Bottom Stream Controls */}
          <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/20">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setHeartsCount((h) => h + 1)}
                className="flex items-center gap-1.5 bg-rose-500/80 hover:bg-rose-600 text-white px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>{heartsCount}</span>
              </button>

              <button className="flex items-center gap-1.5 bg-amber-500/80 hover:bg-amber-600 text-white px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer">
                <Gift className="w-4 h-4" />
                <span>Send Gift</span>
              </button>
            </div>

            <button className="bg-[#f26d85] hover:bg-[#e05871] text-white text-xs font-extrabold px-5 py-2 rounded-full shadow-md uppercase">
              Call Astrologer ₹15/min
            </button>
          </div>
        </div>

        {/* Live Chat Box */}
        <div className="bg-white border border-purple-100 rounded-3xl p-5 shadow-lg flex flex-col justify-between h-[420px] lg:h-auto">
          <div>
            <h4 className="font-extrabold text-sm text-slate-900 uppercase border-b border-purple-100 pb-3 flex items-center gap-2">
              💬 Live Consultation Chat
            </h4>

            <div className="space-y-2 py-4 max-h-[300px] overflow-y-auto scrollbar-none text-xs">
              {comments.map((c, i) => (
                <div key={i} className="bg-purple-50/70 p-2.5 rounded-xl text-slate-800 font-medium">
                  {c}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSendComment} className="flex items-center gap-2 pt-2 border-t border-purple-100">
            <input
              type="text"
              placeholder="Ask your query live..."
              value={inputComment}
              onChange={(e) => setInputComment(e.target.value)}
              className="flex-1 bg-slate-100 text-slate-800 text-xs px-4 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button type="submit" className="bg-[#6b2cbd] text-white p-2.5 rounded-full hover:bg-[#5922a1] transition cursor-pointer">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Grid of Other Live Streams */}
      <div className="space-y-4">
        <h3 className="font-extrabold text-xl text-slate-900 uppercase">Other Active Live Streams</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {liveStreamsData.map((stream) => (
            <div
              key={stream.id}
              onClick={() => setActiveStream(stream)}
              className={`rounded-2xl p-4 bg-white border cursor-pointer transition shadow-sm flex flex-col justify-between ${
                activeStream.id === stream.id ? 'border-[#6b2cbd] ring-2 ring-purple-300' : 'border-purple-100 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3">
                <img src={stream.avatar} alt={stream.name} className="w-12 h-12 rounded-full object-cover border-2 border-red-500" />
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">{stream.name}</h4>
                  <p className="text-[10px] text-slate-500 font-medium">{stream.languages.join(' | ')}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs pt-2 border-t border-purple-50">
                <span className="text-red-600 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span> Live
                </span>
                <span className="text-slate-500 font-semibold">{stream.viewers} Watching</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
