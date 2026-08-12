'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { allAstrologers } from '@/lib/astrologersData';
import { Star, MessageCircle, Video, Users, Award, CheckCircle, Zap, Heart } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

function AnimatedNumber({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1500; // 1.5 seconds count-up duration

    let animationFrameId: number;

    const updateNumber = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      if (elapsed >= duration) {
        setCurrent(value);
      } else {
        const progress = elapsed / duration;
        // Cubic ease-out deceleration curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCurrent(easeOut * value);
        animationFrameId = requestAnimationFrame(updateNumber);
      }
    };

    animationFrameId = requestAnimationFrame(updateNumber);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value]);

  return <span>{current.toFixed(decimals)}{suffix}</span>;
}

export default function AstrologerProfilePage() {
  const params = useParams();
  const router = useRouter();
  const { theme } = useTheme();
  const [isFollowing, setIsFollowing] = useState(false);
  const [consultType, setConsultType] = useState<'chat' | 'video'>('chat');

  const astro = allAstrologers.find((a) => a.id === params.id);

  if (!astro) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Astrologer not found
          </p>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 rounded-full text-white font-bold cursor-pointer"
            style={{ background: 'var(--accent-purple)' }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const isDark = theme === 'dark';

  const statItems = [
    { 
      icon: <Star className="w-5 h-5" style={{ color: '#f59e0b' }} />, 
      value: <AnimatedNumber value={astro.rating} decimals={2} />, 
      label: 'RATING' 
    },
    { 
      icon: <Users className="w-5 h-5" style={{ color: '#22c55e' }} />, 
      value: <AnimatedNumber value={astro.orders} />, 
      label: 'CONSULTS' 
    },
    { 
      icon: <Award className="w-5 h-5" style={{ color: '#a78bfa' }} />, 
      value: <AnimatedNumber value={astro.exp} suffix="y" />, 
      label: 'PRACTICE' 
    },
    { 
      icon: <Users className="w-5 h-5" style={{ color: '#f472b6' }} />, 
      value: <AnimatedNumber value={astro.followers} />, 
      label: 'FOLLOWERS' 
    },
  ];

  // Booking Card Component to avoid duplication
  const BookingCard = () => (
    <div className="rounded-3xl p-5 shadow-md" style={{ background: 'var(--section-card-bg)', border: '1px solid var(--section-card-border)' }}>
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
        <span className="text-sm font-bold text-[#22c55e]">Available now</span>
      </div>

      {/* Chat Option */}
      <div 
        onClick={() => setConsultType('chat')}
        className="flex items-center justify-between p-3.5 rounded-2xl mb-3 cursor-pointer transition-all duration-200" 
        style={{ 
          background: consultType === 'chat'
            ? (isDark ? 'rgba(107,44,189,0.15)' : 'rgba(107,44,189,0.06)')
            : (isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'), 
          border: consultType === 'chat'
            ? '1.5px solid rgba(168,85,247,0.45)'
            : '1px solid var(--section-card-border)'
        }}
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-9 h-9 rounded-xl flex items-center justify-center" 
            style={{ 
              background: isDark ? 'rgba(107,44,189,0.3)' : 'rgba(107,44,189,0.1)' 
            }}
          >
            <MessageCircle className="w-4 h-4" style={{ color: isDark ? '#c9a0ff' : '#6b2cbd' }} />
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Chat</p>
            <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Per minute billing</p>
          </div>
        </div>
        <span className="text-sm font-extrabold" style={{ color: '#f59e0b' }}>₹{astro.price}/min</span>
      </div>

      {/* Video Call Option */}
      <div 
        onClick={() => setConsultType('video')}
        className="flex items-center justify-between p-3.5 rounded-2xl mb-4 cursor-pointer transition-all duration-200" 
        style={{ 
          background: consultType === 'video'
            ? (isDark ? 'rgba(107,44,189,0.15)' : 'rgba(107,44,189,0.06)')
            : (isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'), 
          border: consultType === 'video'
            ? '1.5px solid rgba(168,85,247,0.45)'
            : '1px solid var(--section-card-border)'
        }}
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-9 h-9 rounded-xl flex items-center justify-center" 
            style={{ 
              background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)' 
            }}
          >
            <Video className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Video Call</p>
            <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Face-to-face session</p>
          </div>
        </div>
        <span className="text-sm font-extrabold" style={{ color: '#f59e0b' }}>₹{astro.videoPrice}/min</span>
      </div>

      <button className="w-full py-4 rounded-2xl text-white font-extrabold text-sm flex items-center justify-center gap-2 transition hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer" style={{ background: 'linear-gradient(135deg, #f26d2e, #eb4827)' }}>
        {consultType === 'chat' ? (
          <>
            <MessageCircle className="w-4 h-4" /> Start Chat →
          </>
        ) : (
          <>
            <Video className="w-4 h-4" /> Start Video Call →
          </>
        )}
      </button>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
          <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>{astro.consultingNow} people consulting right now</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>Only {astro.chatSlots} chat slots left today</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>Only {astro.videoSlots} video slots left today</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full py-8 px-4 sm:px-6 lg:px-16 xl:px-24" style={{ background: 'transparent' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* LEFT PANEL */}
          <div className="lg:col-span-2 space-y-5">
            {/* Profile Card */}
            <div className="rounded-3xl p-6 shadow-md" style={{ background: 'var(--section-card-bg)', border: '1px solid var(--section-card-border)' }}>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg" style={{ border: '3px solid var(--section-card-border)' }}>
                    <img src={astro.avatar} alt={astro.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2" style={{ background: '#22c55e', borderColor: isDark ? '#1a1025' : '#fff' }} />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-2xl sm:text-3xl font-extrabold" style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {astro.name}
                    </h1>
                    {astro.verified && (
                      <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full" style={{ background: isDark ? 'rgba(34,197,94,0.15)' : 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)' }}>
                        <CheckCircle className="w-3 h-3" /> Verified
                      </span>
                    )}
                    
                    {/* Follow Button */}
                    <button 
                      onClick={() => setIsFollowing(!isFollowing)}
                      className="ml-auto sm:ml-0 flex items-center gap-1 text-xs font-bold px-4 py-1.5 rounded-full transition duration-300 hover:scale-105 cursor-pointer"
                      style={{
                        background: isFollowing ? 'var(--accent-purple)' : 'transparent',
                        color: isFollowing ? '#1a1025' : 'var(--accent-purple)',
                        border: '1px solid var(--accent-purple)'
                      }}
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      {isFollowing ? 'Following' : 'Follow'}
                    </button>
                  </div>
                  
                  {/* Specialization in Purple Theme Color */}
                  <p className="text-sm font-bold" style={{ color: 'var(--accent-purple)' }}>
                    {astro.skills.join(' · ')}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', color: 'var(--text-secondary)' }}>
                      🌐 {astro.languages.join(' · ')}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', color: 'var(--text-secondary)' }}>
                      <Zap className="w-3 h-3 text-amber-400" /> Avg reply {astro.avgReply}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-0 mt-6 rounded-2xl overflow-hidden" style={{ border: '1px solid var(--section-card-border)', background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)' }}>
                {statItems.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center py-5 px-2" style={{ borderRight: i < statItems.length - 1 ? '1px solid var(--section-card-border)' : 'none' }}>
                    {stat.icon}
                    <span className="text-xl sm:text-2xl font-extrabold mt-1" style={{ color: 'var(--text-primary)', fontFamily: "'Playfair Display', Georgia, serif" }}>{stat.value}</span>
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-widest mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Booking Section: Displayed just above the About/Who-is section for mobile viewports */}
            <div className="block lg:hidden">
              <BookingCard />
            </div>

            {/* About & Info Card */}
            <div className="rounded-3xl p-6 shadow-md space-y-5" style={{ background: 'var(--section-card-bg)', border: '1px solid var(--section-card-border)' }}>
              <div>
                <h2 className="text-xl font-extrabold mb-3" style={{ color: 'var(--text-primary)', borderLeft: '3px solid #6b2cbd', paddingLeft: '12px' }}>
                  Who {astro.name} is
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{astro.bio}</p>
              </div>
              <div style={{ height: '1px', background: 'var(--section-card-border)' }} />
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>Specializes In</h3>
                <div className="flex flex-wrap gap-2">
                  {astro.specialties.map((spec, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: isDark ? 'rgba(107,44,189,0.2)' : 'rgba(107,44,189,0.08)', color: isDark ? '#c9a0ff' : '#6b2cbd', border: isDark ? '1px solid rgba(107,44,189,0.3)' : '1px solid rgba(107,44,189,0.15)' }}>
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews Card (Moved directly after About, no tabs) */}
            <div className="rounded-3xl p-6 shadow-md space-y-4" style={{ background: 'var(--section-card-bg)', border: '1px solid var(--section-card-border)' }}>
              <h2 className="text-xl font-extrabold mb-3" style={{ color: 'var(--text-primary)', borderLeft: '3px solid #6b2cbd', paddingLeft: '12px' }}>
                User Reviews
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>{astro.rating.toFixed(1)}</div>
                <div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4" style={{ fill: s <= Math.round(astro.rating) ? '#f59e0b' : 'transparent', color: s <= Math.round(astro.rating) ? '#f59e0b' : 'var(--text-muted)' }} />
                    ))}
                  </div>
                  <p className="text-xs font-semibold mt-0.5" style={{ color: 'var(--text-muted)' }}>Based on {astro.orders} consultations</p>
                </div>
              </div>
              {[
                { name: 'Priya S.', date: '2 days ago', stars: 5, text: `${astro.name} is absolutely amazing! The reading was incredibly accurate and the guidance helped me make a life-changing decision. Highly recommend!` },
                { name: 'Rahul M.', date: '1 week ago', stars: 5, text: `Very insightful session. ${astro.name} understood my situation quickly and gave practical advice that I have already started implementing.` },
                { name: 'Anita K.', date: '2 weeks ago', stars: Math.round(astro.rating), text: `Professional and compassionate. The session felt very personal and the predictions have been spot on so far. Will definitely consult again.` },
              ].map((review, i) => (
                <div key={i} className="p-4 rounded-2xl" style={{ background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)', border: '1px solid var(--section-card-border)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold text-white" style={{ background: 'linear-gradient(135deg, #6b2cbd, #a855f7)' }}>{review.name[0]}</div>
                      <div>
                        <p className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>{review.name}</p>
                        <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} className="w-3 h-3" style={{ fill: s <= review.stars ? '#f59e0b' : 'transparent', color: s <= review.stars ? '#f59e0b' : 'var(--text-muted)' }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL (Desktop only) */}
          <div className="hidden lg:block space-y-4 lg:sticky lg:top-[100px]">
            <BookingCard />
          </div>
        </div>
      </div>
    </div>
  );
}
