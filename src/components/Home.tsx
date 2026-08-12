'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { MessageCircleMore } from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

// Card Data Interfaces
interface ChatAstrologer {
  id: string;
  name: string;
  avatar: string;
  skills: string[];
  languages: string[];
  exp: number;
  price: number;
  rating: number;
  orders: number;
}

interface ProfileAstrologer {
  id: string;
  name: string;
  avatar: string;
  skills: string[];
  languages: string[];
  exp: number;
  price: number;
}

interface LiveSession {
  id: string;
  name: string;
  avatar: string;
  languages: string[];
  isLive: boolean;
  viewers: number;
  verified: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  img: string;
  review: string;
}

// Data matching the UI
const chatAstrologers: ChatAstrologer[] = [
  {
    id: '1',
    name: 'Shiva',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/26db47d6-13aa-40ee-b5a1-9299924cae9d.jpg',
    skills: ['VEDIC', 'NUMEROLOGY', 'PALMISTRY'],
    languages: ['Hindi', 'English', 'Bhojpuri'],
    exp: 6,
    price: 14,
    rating: 4,
    orders: 120,
  },
  {
    id: '2',
    name: 'Srahvya',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    skills: ['TAROT', 'NUMEROLOGY'],
    languages: ['English', 'Hindi'],
    exp: 8,
    price: 14,
    rating: 5,
    orders: 120,
  },
  {
    id: '3',
    name: 'Lavi',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/22dfc5d4-d377-46e1-81b0-c429b53b5025.png',
    skills: ['VEDIC', 'TAROT', 'FACE READING'],
    languages: ['Hindi'],
    exp: 5,
    price: 16,
    rating: 4,
    orders: 120,
  },
  {
    id: '4',
    name: 'Sonia',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/d0fc6f35-dcab-4eb0-bff6-114aa9cc8795.jpg',
    skills: ['TAROT'],
    languages: ['Hindi'],
    exp: 4,
    price: 12,
    rating: 5,
    orders: 120,
  },
  {
    id: '5',
    name: 'Mystery',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/fa0607c3-882c-42dd-93af-e28b7467c909.png',
    skills: ['TAROT'],
    languages: ['English', 'Hindi', 'Bengali'],
    exp: 5,
    price: 12,
    rating: 4,
    orders: 120,
  },
  {
    id: '6',
    name: 'Divyanshi',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/40d6d749-9c79-4454-b350-b76288fe6fcd.png',
    skills: ['TAROT'],
    languages: ['Hindi', 'Bhojpuri'],
    exp: 5,
    price: 12,
    rating: 5,
    orders: 120,
  },
];

const profileAstrologers: ProfileAstrologer[] = [
  {
    id: '101',
    name: 'Lavi',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/22dfc5d4-d377-46e1-81b0-c429b53b5025.png',
    skills: ['Vedic', 'Tarot', 'Face Reading'],
    languages: ['Hindi'],
    exp: 5,
    price: 16.0,
  },
  {
    id: '102',
    name: 'Divyanshi',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/40d6d749-9c79-4454-b350-b76288fe6fcd.png',
    skills: ['Tarot'],
    languages: ['Hindi', 'Bhojpuri'],
    exp: 5,
    price: 12.0,
  },
  {
    id: '103',
    name: 'Shradha',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    skills: ['Tarot', 'Numerology'],
    languages: ['English', 'Hindi', 'Kannada', 'Marathi'],
    exp: 9,
    price: 14.0,
  },
];

const liveSessions: LiveSession[] = [
  {
    id: '201',
    name: 'Aacharya Anand',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/26db47d6-13aa-40ee-b5a1-9299924cae9d.jpg',
    languages: ['Hindi', 'English'],
    isLive: true,
    viewers: 248,
    verified: true,
  },
  {
    id: '202',
    name: 'Dr. Radhika',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    languages: ['English', 'Hindi'],
    isLive: true,
    viewers: 412,
    verified: true,
  },
  {
    id: '203',
    name: 'Astro Sunita',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/d0fc6f35-dcab-4eb0-bff6-114aa9cc8795.jpg',
    languages: ['Hindi', 'Punjabi'],
    isLive: true,
    viewers: 189,
    verified: true,
  },
  {
    id: '204',
    name: 'Guruji Shastri',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/22dfc5d4-d377-46e1-81b0-c429b53b5025.png',
    languages: ['Hindi', 'Gujarati'],
    isLive: true,
    viewers: 320,
    verified: true,
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ananya Sharma',
    location: 'Mumbai, Maharashtra',
    img: '/face1.jpg',
    review:
      'I have been using AstroLive for the past month, and it has been an amazing experience. The interface is sleek and user-friendly, making it easy to navigate. The astrologers are very knowledgeable and provide insightful guidance. The Live Chat feature is particularly helpful, allowing me to get instant answers to my questions. Highly recommended for anyone seeking guidance from good astrologers!',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    img: '/face2.jpg',
    review:
      'AstroLive has quickly become my favorite astrology platform. The variety of astrologers and their expertise is truly impressive. I consulted for a career-related query, and the guidance I received was spot on. Despite being a new platform, it operates smoothly and efficiently. Kudos to the AstroLive team for creating such a fantastic service!',
  },
  {
    id: 3,
    name: 'Priya Patel',
    location: 'Ahmedabad, Gujarat',
    img: '/face3.jpg',
    review:
      'AstroLive is a great platform with a lot to offer. The navigation is intuitive, and I love how easy it is to find and consult with different astrologers. The astrologers are experienced, and their readings have been very accurate. I am very impressed with this new platform!',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Bangalore, Karnataka',
    img: '/face4.jpg',
    review:
      "I've been using AstroLive for about a month, and it's been a wonderful experience. The live sessions and the ability to consult astrologers based on their domains, like Vedic and Tarot, are excellent features. The platform is new but already shows great promise with its user-friendly design and reliable service. Looking forward to more features and improvements. Great job, AstroLive team!",
  },
];

// ========== Avatar Stack ==========
function AvatarStack() {
  const avatars = [
    'https://media.chingari.io/apipublic/uploads/profilePic/26db47d6-13aa-40ee-b5a1-9299924cae9d.jpg',
    'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    'https://media.chingari.io/apipublic/uploads/profilePic/d0fc6f35-dcab-4eb0-bff6-114aa9cc8795.jpg',
  ];

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="astrologer"
            className="w-9 h-9 rounded-full object-cover border-2"
            style={{ borderColor: 'var(--bg-primary)', zIndex: avatars.length - i }}
          />
        ))}
      </div>
      <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
        <span className="font-bold" style={{ color: 'var(--accent-purple)' }}>450+</span> astrologers online
      </span>
    </div>
  );
}

export default function Home() {
  const clientCarouselRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollClients = (direction: 'left' | 'right') => {
    if (clientCarouselRef.current) {
      const scrollAmount = clientCarouselRef.current.clientWidth * 0.8;
      clientCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {/* ====== HERO SECTION — Full Width, No Padding, No Rounded Corners ====== */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: 'transparent',
          minHeight: '85vh',
        }}
      >

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 py-16 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[85vh]">
          {/* Left Content */}
          <div className="max-w-xl space-y-8 lg:space-y-10 flex-1">
            {/* Premium Badge */}
            <div className="inline-block">
              <span
                className="text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full border"
                style={{
                  background: 'var(--hero-badge-bg)',
                  color: 'var(--hero-badge-text)',
                  borderColor: theme === 'dark' ? 'rgba(200,160,255,0.2)' : 'rgba(124,58,237,0.2)',
                }}
              >
                Premium Consultation
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight"
              style={{
                color: 'var(--text-primary)',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
              }}
            >
              Talk to a real astrologer — your first consultation{' '}
              <em
                style={{
                  color: 'var(--accent-purple)',
                  fontStyle: 'italic',
                  fontWeight: 800,
                }}
              >
                free
              </em>{' '}
            </h1>

            {/* Pricing Subtext */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, rgba(200,160,255,0.15), rgba(232,160,200,0.1))'
                  : 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(219,39,119,0.06))',
                border: theme === 'dark' ? '1px solid rgba(200,160,255,0.2)' : '1px solid rgba(124,58,237,0.15)',
              }}
            >
              <span className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>Transparent pricing</span>
              <span className="w-px h-5" style={{ background: 'var(--border-color)' }} />
              <span
                className="text-base font-extrabold"
                style={{ color: 'var(--accent-purple)' }}
              >
                ₹10/min
              </span>
              <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>chat</span>
              <span className="w-px h-5" style={{ background: 'var(--border-color)' }} />
              <span
                className="text-base font-extrabold"
                style={{ color: 'var(--accent-pink)' }}
              >
                ₹15/min
              </span>
              <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>call</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer"
                style={{
                  background: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                }}
              >
                <MessageCircleMore size={20} />
                Chat now
              </Link>

              <Link
                href="/call"
                className="flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold border transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                style={{
                  borderColor: 'var(--btn-outline-border)',
                  color: 'var(--btn-outline-text)',
                  background: 'transparent',
                }}
              >
                <FaPhoneAlt size={16} />
                Talk now
              </Link>
            </div>

            {/* Avatar Stack */}
            <AvatarStack />
          </div>

          {/* Right: Phone Mockup */}
          <div className="relative flex-1 flex justify-center lg:justify-end">
            {/* Glow behind phone */}
            {theme === 'dark' && (
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  filter: 'blur(100px)',
                  opacity: 0.2,
                }}
              >
                <div
                  className="w-80 h-80 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, #a855f7, #6366f1, transparent)',
                  }}
                />
              </div>
            )}
            <img
              src="/MobileSS.png"
              alt="AstroLive Mobile App"
              className="relative z-10 max-h-[500px] lg:max-h-[580px] object-contain drop-shadow-2xl"
              style={{
                filter: theme === 'dark' ? 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.15))' : 'drop-shadow(0 10px 30px rgba(0,0,0,0.12))',
              }}
            />
          </div>
        </div>
      </section>

      {/* ====== Our Services ====== */}
      <section
        className="w-full px-6 lg:px-16 xl:px-24 py-8"
        style={{ background: 'transparent' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide uppercase text-center"
            style={{ color: 'var(--section-heading)' }}
          >
            Our Services
          </h2>
        </div>
      </section>

      {/* ====== Quick Links Cards ====== */}
      <section
        className="w-full px-6 lg:px-16 xl:px-24 py-8"
        style={{ background: 'transparent' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { title: 'Daily Horoscope', icon: '✨', bg: 'bg-gradient-to-br from-[#8050cb] to-[#592b9b]', link: '/horoscope?tab=today' },
              { title: "Today's Panchang", icon: '🪐', bg: 'bg-gradient-to-br from-[#0c8299] to-[#085a6b]', link: '/panchang' },
              { title: "Kundli's Match", icon: '💍', bg: 'bg-gradient-to-br from-[#883d3b] to-[#602725]', link: '/kundli-matching' },
              { title: 'Free Kundli', icon: '📜', bg: 'bg-gradient-to-br from-[#3b3a61] to-[#252443]', link: '/free-kundli' },
              { title: 'Love Calculator', icon: '💖', bg: 'bg-gradient-to-br from-[#a3521b] to-[#71350e]', link: '/love-calculator' },
              { title: 'Wallet', icon: '👛', bg: 'bg-gradient-to-br from-[#77339d] to-[#4e1b6c]', link: '/wallet' },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`${item.bg} rounded-2xl p-4 h-28 flex flex-col justify-between shadow-md text-white hover:scale-[1.02] transition cursor-pointer`}
              >
                <span className="text-xl">{item.icon}</span>
                <p className="font-bold text-xs tracking-tight leading-snug">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Section: Chat With Astrologers ====== */}
      <section
        className="w-full px-6 lg:px-16 xl:px-24 pt-12 pb-6"
        style={{ background: 'transparent' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="w-24"></div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide uppercase text-center"
              style={{ color: 'var(--section-heading)' }}
            >
              CHAT WITH ASTROLOGERS
            </h2>
            <Link
              href="/chat"
              className="text-white text-xs font-bold px-4 py-2 rounded-full transition flex items-center gap-1 uppercase tracking-wider shadow-sm cursor-pointer"
              style={{ background: '#f26d85' }}
            >
              VIEW MORE →
            </Link>
          </div>

          {/* 6 Chat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {chatAstrologers.map((astro) => (
              <Link
                key={astro.id}
                href={`/astrologer/${astro.id}`}
                className="rounded-3xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-200 cursor-pointer block"
                style={{
                  background: 'var(--section-card-bg)',
                  border: '1px solid var(--section-card-border)',
                }}
              >
                <div className="flex gap-3">
                  <div className="flex flex-col items-center gap-1 min-w-[64px]">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#f26d85]">
                      <img src={astro.avatar} alt={astro.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="bg-[#2ccb72] text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Online
                    </span>
                    <div className="text-amber-400 text-[10px] font-bold tracking-tighter">
                      {'★'.repeat(astro.rating)}
                    </div>
                  </div>

                  <div className="flex-1 space-y-1">
                    <h3 className="font-extrabold text-base" style={{ color: 'var(--text-primary)' }}>{astro.name}</h3>
                    <div className="flex flex-wrap gap-1">
                      {astro.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-orange-100 text-orange-700 text-[9px] font-bold px-1.5 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] font-medium pt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {astro.languages.join(', ')}
                    </p>
                    <p className="text-[10px] font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Exp: {astro.exp} Yrs
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 mt-2" style={{ borderTop: '1px solid var(--section-card-border)' }}>
                  <span className="bg-[#b3e2d5] text-emerald-900 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    ₹{astro.price} / min
                  </span>
                  <span
                    className="bg-[#6b2cbd] text-white font-bold px-5 py-1 rounded-full text-xs flex items-center gap-1 shadow-sm"
                  >
                    💬 Chat
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Section: Our Astrologers ====== */}
      <section
        className="w-full px-6 lg:px-16 xl:px-24 pt-10 pb-6"
        style={{ background: 'transparent' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="w-24"></div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide uppercase text-center"
              style={{ color: 'var(--section-heading)' }}
            >
              OUR ASTROLOGERS
            </h2>
            <Link
              href="/call"
              className="text-white text-xs font-bold px-4 py-2 rounded-full transition flex items-center gap-1 uppercase tracking-wider shadow-sm cursor-pointer"
              style={{ background: '#f26d85' }}
            >
              VIEW MORE →
            </Link>
          </div>

          {/* Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {profileAstrologers.map((astro) => (
              <Link
                key={astro.id}
                href={`/astrologer/${astro.id}`}
                className="rounded-3xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-200 cursor-pointer block"
                style={{
                  background: 'var(--section-card-bg)',
                  border: '1px solid var(--section-card-border)',
                }}
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 shadow-sm flex-shrink-0" style={{ borderColor: 'var(--border-color)' }}>
                      <img src={astro.avatar} alt={astro.name} className="w-full h-full object-cover" />
                      <span className="absolute top-0 right-1 w-3 h-3 bg-[#2ccb72] rounded-full border-2" style={{ borderColor: 'var(--card-bg)' }} />
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex flex-wrap justify-end gap-1">
                        {astro.skills.map((s, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                            style={{ background: 'var(--search-bg)', color: 'var(--text-secondary)' }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <span className="font-bold text-xs px-3 py-1 rounded-full" style={{ background: 'var(--accent-purple)', color: theme === 'dark' ? '#1a1025' : '#fff' }}>
                        ₹{astro.price.toFixed(2)}/min
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1">
                    <h3 className="font-extrabold text-lg flex items-center gap-1.5" style={{ color: 'var(--text-primary)' }}>
                      {astro.name} <span className="text-[#f26d85] text-sm">♀</span>
                    </h3>
                    <p className="text-xs font-medium flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                      <span>🗣</span> {astro.languages.join(', ')}
                    </p>
                    <p className="text-xs font-medium flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                      <span>🎓</span> {astro.exp} Years Experience
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Section: LIVE SESSIONS ====== */}
      <section className="w-full px-6 lg:px-16 xl:px-24 my-16">
        <div className="max-w-[1440px] mx-auto">
          <div
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(190.46deg, rgba(100, 60, 160, 0.3), rgba(50, 40, 100, 0.15))'
                : 'linear-gradient(190.46deg, rgba(226, 175, 250, 0.6), rgba(102, 128, 254, 0.06))',
              border: '1px solid var(--section-card-border)',
            }}
            className="relative rounded-[50px] p-6 sm:p-12 shadow-md overflow-hidden"
          >
            {/* Background image overlay */}
            <img
              src="/live-bg.png"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              style={{ opacity: theme === 'dark' ? 0.4 : 0.8 }}
            />

            {/* Heading & View More Button */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-center w-full"
                style={{ color: 'var(--section-heading)' }}
              >
                LIVE SESSIONS
              </h2>

              <Link
                href="/live"
                style={{
                  background: 'linear-gradient(125.75deg, #ffa767 -8.85%, #eb468b 90.19%)',
                }}
                className="md:absolute right-0 top-0 h-[58px] w-[177px] text-white font-semibold text-sm rounded-[40px] border-2 border-white flex items-center justify-center gap-2 uppercase tracking-wider shadow-md hover:opacity-90 transition cursor-pointer flex-shrink-0"
              >
                <span>VIEW MORE</span>
                <img src="/rightarrow.svg" alt="arrow" className="w-3 h-3" />
              </Link>
            </div>

            {/* 4 Live Session Cards Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {liveSessions.map((session) => (
                <Link
                  key={session.id}
                  href="/live"
                  className="group relative overflow-hidden rounded-[20px] aspect-[0.7] text-white flex flex-col justify-between p-4 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={session.avatar}
                    alt={session.name}
                    className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/40 z-1" />

                  <div className="relative z-10 flex items-center justify-between text-xs font-medium">
                    <span className="text-white text-xs drop-shadow">
                      {session.languages.join(' | ')}
                    </span>

                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-normal text-white">
                      <div
                        style={{
                          background: 'linear-gradient(108.74deg, #ffa767 -12.1%, #eb468b 95.64%)',
                        }}
                        className="w-2 h-2 rounded-full animate-pulse"
                      />
                      Live
                    </div>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <div className="flex items-center gap-1.5 font-medium text-lg lg:text-xl text-white">
                      <span>{session.name}</span>
                      <span className="bg-blue-500 text-white text-[10px] rounded-full px-1">✓</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <span>🇮🇳</span>
                      <span className="bg-amber-400/90 text-slate-900 font-bold px-2 py-0.5 rounded text-[10px]">
                        Level 5
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== App Download Banner ====== */}
      <section className="w-full px-6 lg:px-16 xl:px-24 py-10">
        <div className="max-w-[1440px] mx-auto">
          <div
            style={{
              background: 'linear-gradient(146deg, #b18bfd 13.8%, #6846eb 93.2%)',
            }}
            className="relative rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden text-white"
          >
            <img
              src="/gift.svg"
              alt="gift"
              className="absolute top-4 left-4 w-20 h-20 opacity-90 pointer-events-none animate-bounce"
              style={{ animationDuration: '4s' }}
            />
            <img
              src="/Star.png"
              alt="star"
              className="absolute top-8 left-1/3 w-12 h-12 opacity-90 pointer-events-none"
            />
            <img
              src="/Star.png"
              alt="star"
              className="absolute bottom-6 left-1/4 w-10 h-10 opacity-75 pointer-events-none"
            />

            <div className="max-w-md space-y-6 z-10 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Download our app & get your first consultation for free
              </h2>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button className="flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-5 py-3 rounded-2xl shadow-lg border border-white/20 transition cursor-pointer">
                  <img src="/apple.svg" alt="Apple Store" className="w-6 h-6" />
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Download on</span>
                    <span className="block font-extrabold text-sm text-slate-900">Apple Store</span>
                  </div>
                </button>

                <button className="flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-5 py-3 rounded-2xl shadow-lg border border-white/20 transition cursor-pointer">
                  <img src="/playstore.svg" alt="Google Play" className="w-6 h-6" />
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Get it on</span>
                    <span className="block font-extrabold text-sm text-slate-900">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="relative z-10 flex justify-center">
              <img
                src="/MobileSS.png"
                alt="AstroLive Mobile App"
                className="max-h-[340px] sm:max-h-[400px] object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== Section: Testimonials ====== */}
      <section
        className="w-full px-6 lg:px-16 xl:px-24 py-10"
        style={{ background: 'transparent' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide uppercase text-center mb-8"
            style={{ color: 'var(--section-heading)' }}
          >
            Testimonials
          </h2>

          <div className="marquee-container py-4">
            <div className="marquee-content flex gap-5">
              {/* Double items for seamless infinite scroll */}
              {[...testimonials, ...testimonials].map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  className="min-w-[300px] sm:min-w-[360px] max-w-[400px] rounded-3xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition relative"
                  style={{
                    background: 'var(--section-card-bg)',
                    border: '1px solid var(--section-card-border)',
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <img
                        src={client.img}
                        alt={client.name}
                        className="w-14 h-14 rounded-full object-cover border-2 shadow-sm"
                        style={{ borderColor: 'var(--accent-purple)' }}
                      />
                      <img src="/quotes.svg" alt="quote" className="w-10 h-10 opacity-40" style={{ filter: theme === 'dark' ? 'invert(1) brightness(0.6)' : 'none' }} />
                    </div>

                    <p className="text-xs leading-relaxed font-medium mb-6 italic" style={{ color: 'var(--text-muted)' }}>
                      &quot;{client.review}&quot;
                    </p>
                  </div>

                  <div className="pt-3" style={{ borderTop: '1px solid var(--section-card-border)' }}>
                    <h4 className="font-extrabold text-sm" style={{ color: 'var(--text-primary)' }}>{client.name}</h4>
                    <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{client.location}</p>
                  </div>
                </div>
              ))}
            </div>          </div>
        </div>
      </section>
    </div>
  );
}