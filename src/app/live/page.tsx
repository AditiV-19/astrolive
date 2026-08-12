'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Users, Send, Heart, Share2, ArrowLeft, Volume2, Maximize, Settings, CheckCircle2, Play, Pause, Gift, Sparkles } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';

interface LiveStream {
  id: string;
  name: string;
  avatar: string;
  languages: string[];
  viewers: string;
  topic: string;
  thumbnail: string;
  followers: string;
}

const liveStreamsData: LiveStream[] = [
  {
    id: '1',
    name: 'Aacharya Anand',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/26db47d6-13aa-40ee-b5a1-9299924cae9d.jpg',
    languages: ['Hindi', 'English'],
    viewers: '2.6K',
    topic: 'Daily Kundli Analysis, Astro Remedies & Career Guidance 🪐',
    thumbnail: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=600',
    followers: '120K',
  },
  {
    id: '2',
    name: 'Dr. Radhika',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    languages: ['English', 'Hindi'],
    viewers: '1.7K',
    topic: 'Love & Relationship Tarot Card Readings Live 🔮',
    thumbnail: 'https://images.unsplash.com/photo-1568219656418-15932992ab4b?q=80&w=600',
    followers: '85K',
  },
  {
    id: '3',
    name: 'Astro Sunita',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/d0fc6f35-dcab-4eb0-bff6-114aa9cc8795.jpg',
    languages: ['Hindi', 'Punjabi'],
    viewers: '3.4K',
    topic: 'Shubh Muhurat, Today Panchang & Daily Predictions ✨',
    thumbnail: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=600',
    followers: '240K',
  },
  {
    id: '4',
    name: 'Guruji Shastri',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/22dfc5d4-d377-46e1-81b0-c429b53b5025.png',
    languages: ['Hindi', 'Gujarati'],
    viewers: '820',
    topic: 'Lal Kitab Secrets for Health & Wealth Remedies 📜',
    thumbnail: 'https://images.unsplash.com/photo-1532980400857-e8d9d275a8b8?q=80&w=600',
    followers: '64K',
  },
  {
    id: '5',
    name: 'Tarot Megha',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/93df455c-cfb9-43c3-88bb-84a1a364be2c.jpg',
    languages: ['Hindi', 'English'],
    viewers: '4.1K',
    topic: 'Weekly Horoscope predictions & live healing cards 🃏',
    thumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600',
    followers: '175K',
  },
  {
    id: '6',
    name: 'Siddharth Astro',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/f135b5a4-56b2-4d2c-80a5-298a28e3bb2a.jpg',
    languages: ['Hindi', 'Sanskrit'],
    viewers: '1.2K',
    topic: 'Saturn Transit & Rahu Ketu transition remedies 🪐',
    thumbnail: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=600',
    followers: '90K',
  },
];

interface ChatMessage {
  id: string;
  user: string;
  avatar: string;
  message: string;
}

const initialChats = [
  { id: '1', user: '@SagarParmar-f7c7u', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Sagar', message: 'vehicle ki chat mein kya karoge' },
  { id: '2', user: '@devendra-w4h', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Dev', message: 'hello guruji' },
  { id: '3', user: '@Rajput_rathore', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Raj', message: 'namaskar' },
  { id: '4', user: '@MoiSheikh-p3q5v', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Moi', message: 'please check my career details' },
  { id: '5', user: '@kavyakiduniya_29', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Kavya', message: 'bhai 67 👍👍👍👍' },
  { id: '6', user: '@ZejnepiBrahimi', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Zej', message: 'said hi' },
  { id: '7', user: '@Surbhy05', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Sur', message: 'hello' },
  { id: '8', user: '@Faker-Gamer-0', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Fak', message: 'said hi' },
];

const mockComments = [
  'is transit going to impact my zodiac?',
  'pranam guruji 🙏 marriage timing please',
  'great advice, thank you!',
  'checking from delhi, namaste!',
  'Which gemstone should I wear?',
  'my date of birth is 12 Oct 1995 checking career',
  'radhe radhe guruji ✨',
];

export default function LivePage() {
  const { theme } = useTheme();
  const [activeStreamId, setActiveStreamId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [likeCount, setLikeCount] = useState(1500);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [chats, setChats] = useState<ChatMessage[]>(initialChats);
  const [inputMessage, setInputMessage] = useState('');
  const [showGiftPanel, setShowGiftPanel] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const activeStream = liveStreamsData.find((s) => s.id === activeStreamId);
  const isDark = theme === 'dark';

  // Autoscroll chat (scroll only within the chat container, not the whole page)
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  // Simulate incoming live chat messages
  useEffect(() => {
    if (!activeStreamId) return;

    const interval = setInterval(() => {
      const randomUser = `@user_${Math.floor(Math.random() * 9000 + 1000)}`;
      const randomText = mockComments[Math.floor(Math.random() * mockComments.length)];
      const seed = Math.random().toString(36).substring(7);

      setChats((prev) => [
        ...prev.slice(-30), // keep last 30 messages
        {
          id: Date.now().toString(),
          user: randomUser,
          avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`,
          message: randomText,
        },
      ]);
    }, 3500);

    return () => clearInterval(interval);
  }, [activeStreamId]);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setChats((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        user: '@You',
        avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=You',
        message: inputMessage,
      },
    ]);
    setInputMessage('');
  };

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  // GRID VIEW (Images 1)
  if (!activeStreamId || !activeStream) {
    return (
      <div className="max-w-[1440px] w-[90%] lg:w-[85%] mx-auto py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide" style={{ color: 'var(--text-primary)' }}>
              Live Now
            </h1>
            <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
              Consult with India's top astrologers in real-time broadcast sessions
            </p>
          </div>
        </div>

        {/* Live Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveStreamsData.map((stream) => (
            <div
              key={stream.id}
              onClick={() => setActiveStreamId(stream.id)}
              className="group cursor-pointer flex flex-col gap-3 rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={stream.thumbnail}
                  alt={stream.topic}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Red Live Badge */}
                <div className="absolute bottom-3 right-3 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1 uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                  LIVE
                </div>
              </div>

              {/* Detail Info Section */}
              <div className="flex gap-3 px-1">
                {/* Avatar */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-red-500/50 flex-shrink-0">
                  <img src={stream.avatar} alt={stream.name} className="w-full h-full object-cover" />
                </div>

                {/* Text Metadata */}
                <div className="flex-1 min-w-0 space-y-0.5">
                  <h4 className="font-extrabold text-sm line-clamp-1 group-hover:text-[var(--accent-purple)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {stream.topic}
                  </h4>
                  <p className="text-xs font-semibold notranslate" style={{ color: 'var(--text-secondary)' }}>
                    {stream.name}
                  </p>
                  <p className="text-[10px] font-medium" style={{ color: 'var(--text-secondary)' }}>
                    {stream.viewers} watching
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ACTIVE STREAM SPLIT VIEW (Image 2)
  return (
    <div className="max-w-[1440px] w-[95%] lg:w-[90%] mx-auto py-6 space-y-4">
      {/* Back to list trigger */}
      <button
        onClick={() => setActiveStreamId(null)}
        className="flex items-center gap-2 text-xs font-bold cursor-pointer hover:opacity-80 transition"
        style={{ color: 'var(--text-secondary)' }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Live Sessions</span>
      </button>

      {/* Main Split Screen Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Column: Player & Metadata */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* Black Screen Video Player Container */}
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-black flex flex-col justify-between group shadow-xl">
            {/* Simulation background image frame */}
            <img
              src={activeStream.thumbnail}
              alt="stream frame"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              style={{ display: isPlaying ? 'block' : 'none' }}
            />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                <span className="text-white font-bold text-xs uppercase tracking-wider">Stream Paused</span>
              </div>
            )}
            
            {/* Bottom Controls Row Overlay */}
            <div className="relative z-10 mt-auto bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex items-center justify-between text-white select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-4">
                <button onClick={() => setIsPlaying(!isPlaying)} className="cursor-pointer hover:scale-105 transition">
                  {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white" />}
                </button>
                <button className="cursor-pointer hover:scale-105 transition">
                  <Volume2 className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold tracking-wider">1:00</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded border border-white/10 uppercase">CC</span>
                <button className="cursor-pointer hover:rotate-45 transition duration-300">
                  <Settings className="w-5 h-5" />
                </button>
                <button className="cursor-pointer hover:scale-105 transition">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Video Topic Title */}
          <h2 className="text-lg sm:text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            {activeStream.topic}
          </h2>

          {/* Action Row & Channel details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 border-b" style={{ borderColor: 'var(--border-color)' }}>
            
            {/* Channel Info & Subscribe */}
            <div className="flex items-center gap-3">
              <img
                src={activeStream.avatar}
                alt={activeStream.name}
                className="w-11 h-11 rounded-full object-cover border"
                style={{ borderColor: 'var(--border-color)' }}
              />
              <div>
                <h3 className="font-extrabold text-sm flex items-center gap-1.5 notranslate" style={{ color: 'var(--text-primary)' }}>
                  {activeStream.name}
                  <CheckCircle2 className="w-4 h-4 fill-blue-500 text-white" />
                </h3>
                <p className="text-xs notranslate" style={{ color: 'var(--text-secondary)' }}>
                  {activeStream.followers} followers
                </p>
              </div>
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className="ml-4 font-extrabold px-5 py-2 rounded-full text-xs transition duration-200 shadow-sm cursor-pointer flex items-center gap-1.5 hover:scale-105"
                style={{
                  background: isFollowing ? 'var(--accent-purple)' : 'transparent',
                  color: isFollowing ? '#fff' : 'var(--accent-purple)',
                  border: '1.5px solid var(--accent-purple)',
                }}
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>

            {/* Like, Share, Superchat Gift */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <div className="flex items-center rounded-full overflow-hidden" style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)' }}>
                <button
                  onClick={toggleLike}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold transition hover:bg-black/10 cursor-pointer ${isLiked ? 'text-[#f26d85]' : ''}`}
                  style={{ color: isLiked ? '#f26d85' : 'var(--text-primary)' }}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span className="notranslate">{(likeCount / 1000).toFixed(1)}K</span>
                </button>
                <div className="w-px h-5 bg-slate-500/20" />
                <button className="px-3.5 py-2 hover:bg-black/10 transition cursor-pointer" style={{ color: 'var(--text-primary)' }}>
                  <Share2 className="w-3.5 h-3.5 rotate-180" />
                </button>
              </div>


              <button className="bg-[#f26d85] hover:bg-[#e05871] text-white font-extrabold px-6 py-2.5 rounded-full text-xs transition duration-200 shadow-md uppercase tracking-wider cursor-pointer">
                Call Guruji
              </button>
            </div>
          </div>

          {/* Description Stats Box */}
          <div className="p-4 rounded-2xl space-y-1.5 text-xs font-medium" style={{ background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)' }}>
            <div className="flex gap-2" style={{ color: 'var(--text-primary)' }}>
              <span className="font-extrabold notranslate">{activeStream.viewers} watching now</span>
              <span>•</span>
              <span className="text-slate-500">Started session 42 minutes ago</span>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>
              Welcome to the live chat! Remember to guard your privacy and abide by our community guidelines. Get free remedies and instant answers.
            </p>
          </div>

          {/* Superchat Gift Panel */}
          {showGiftPanel && (
            <div className="p-5 rounded-2xl space-y-4 animate-fadeIn" style={{ background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', border: '1px solid var(--section-card-border)' }}>
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-sm flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <Sparkles className="w-4 h-4 text-amber-500" /> Send a Superchat Gift
                </h4>
                <button onClick={() => setShowGiftPanel(false)} className="text-xs cursor-pointer hover:opacity-70" style={{ color: 'var(--text-secondary)' }}>✕</button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {[
                  { emoji: '🌸', label: 'Flower', price: 10 },
                  { emoji: '🪔', label: 'Diya', price: 29 },
                  { emoji: '📿', label: 'Rudraksha', price: 51 },
                  { emoji: '💎', label: 'Diamond', price: 99 },
                  { emoji: '🏆', label: 'Trophy', price: 199 },
                  { emoji: '👑', label: 'Crown', price: 499 },
                ].map((gift) => (
                  <button
                    key={gift.label}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl transition hover:scale-105 cursor-pointer"
                    style={{
                      background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                      border: '1px solid var(--section-card-border)',
                    }}
                  >
                    <span className="text-2xl">{gift.emoji}</span>
                    <span className="text-[10px] font-bold" style={{ color: 'var(--text-primary)' }}>{gift.label}</span>
                    <span className="text-[10px] font-extrabold notranslate" style={{ color: 'var(--accent-purple)' }}>₹{gift.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Top Chat Panel (Image 2) */}
        <div
          className="rounded-3xl shadow-xl flex flex-col justify-between h-[520px] lg:h-[480px] xl:h-[500px]"
          style={{
            background: 'var(--section-card-bg)',
            border: '1px solid var(--section-card-border)',
          }}
        >
          {/* Header */}
          <div className="px-5 py-3.5 border-b flex items-center justify-between" style={{ borderColor: 'var(--section-card-border)' }}>
            <h3 className="font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5" style={{ color: 'var(--text-primary)' }}>
              <span>Top chat</span>
              <span className="text-[10px] opacity-50">▼</span>
            </h3>
            <span className="text-[10px] bg-[#f26d85]/15 text-[#f26d85] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              Live
            </span>
          </div>

          {/* Messages List Area */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3.5 scrollbar-none">
            {chats.map((c) => (
              <div key={c.id} className="flex gap-2.5 text-xs items-start animate-fadeIn">
                <img src={c.avatar} alt={c.user} className="w-6 h-6 rounded-full object-cover bg-slate-200" />
                <div className="space-y-0.5 leading-snug">
                  <span className="font-bold text-slate-500 mr-2 hover:underline cursor-pointer notranslate">{c.user}</span>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{c.message}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input Chat Box Form */}
          <div className="p-4 border-t" style={{ borderColor: 'var(--section-card-border)' }}>
            <form onSubmit={handleSendChat} className="flex items-center gap-2">
              <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=You" alt="You" className="w-7 h-7 rounded-full object-cover flex-shrink-0" />
              <input
                type="text"
                placeholder="Chat..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 text-xs px-4 py-2.5 rounded-full focus:outline-none border"
                style={{
                  background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)',
                  borderColor: 'var(--section-card-border)',
                  color: 'var(--text-primary)',
                }}
              />
              <button
                type="submit"
                className="bg-[#6b2cbd] text-white p-2.5 rounded-full hover:bg-[#5922a1] transition cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
