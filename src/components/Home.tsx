'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { MessageCircleMore } from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';

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

export default function Home() {
  const clientCarouselRef = useRef<HTMLDivElement>(null);

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
    <div className="pb-8">
      {/* Hero Banner */}
      <section className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto px-4 pt-4 pb-8">
        <div className="banner_banner_cont__STScB relative rounded-3xl bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
          
          {/* Planet SVG */}
          <img
            alt="Planet"
            loading="lazy"
            width="210"
            height="210"
            className="banner_planet_img__Rr9_K pointer-events-none z-1"
            src="/planet.fb43e317.svg"
            style={{
              height: '99.9937px',
              left: '-45px',
              bottom: '-35px',
              position: 'absolute',
              width: '99.9937px',
            }}
          />

          <div className="banner_banner_text__k4jBB max-w-lg space-y-6 z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-wide uppercase">
              Are you worried about your future?
            </h1>
            <h2 className="text-white/90 text-xs sm:text-sm leading-relaxed font-medium">
              Where celestial guidance meets digital convenience. Explore your destiny,connect with authentic
              <span className="font-bold"> Astrologers Live</span>
            </h2>

            <div className="space-y-3 pt-2">
              <Link
                href="/chat"
                className="banner_banner_btn__w9TCN cursor-pointer w-full sm:w-80 flex items-center justify-between bg-white hover:bg-slate-50 text-slate-800 font-extrabold px-5 py-3 rounded-full shadow-lg transition"
              >
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="banner_icon_cont__jnHwA text-[#f26d85]">
                    <MessageCircleMore />
                  </div>
                  <span>Chat With <span className="banner_astrologer__BazSh text-[#f26d85]">Astrologer</span></span>
                </div>
                <span className="banner_rate__nBjvx text-[#f26d85] text-xs font-bold flex items-center gap-1">
                  (
                  <img
                    alt="rupee"
                    width="14"
                    height="14"
                    src="/rupee-icon-orange.svg"
                  />
                  10/min)
                </span>
              </Link>

              <Link
                href="/call"
                className="banner_banner_btn__w9TCN cursor-pointer w-full sm:w-80 flex items-center justify-between bg-white hover:bg-slate-50 text-slate-800 font-extrabold px-5 py-3 rounded-full shadow-lg transition"
              >
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="banner_icon_cont__jnHwA text-[#f26d85]">
                    <FaPhoneAlt />
                  </div>
                  <span>Talk to <span className="banner_astrologer__BazSh text-[#f26d85]">Astrologer</span></span>
                </div>
                <span className="banner_rate__nBjvx text-[#f26d85] text-xs font-bold flex items-center gap-1">
                  (
                  <img
                    alt="rupee"
                    width="14"
                    height="14"
                    src="/rupee-icon-orange.svg"
                  />
                  15/min)
                </span>
              </Link>
            </div>
          </div>

          <div className="banner_banner_slider__9dSdC relative z-10 flex justify-center lg:pr-6">
            <div className="banner_slider_img_cont__tkSpf">
              <img
                alt="Banner Slider"
                width="1080"
                height="1080"
                className="banner_slider_img__CIWa4 rounded-xl shadow-lg"
                src="/SingleBanner.webp"
                style={{
                  height: '295px',
                  width: '416px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Cards */}
      <section className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto px-4 py-2">
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
      </section>

      {/* Section: Chat With Astrologers */}
      <section className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="w-24"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-slate-900 uppercase text-center">
            CHAT WITH ASTROLOGERS
          </h2>
          <Link
            href="/chat"
            className="bg-[#f26d85] hover:bg-[#e05871] text-white text-xs font-bold px-4 py-2 rounded-full transition flex items-center gap-1 uppercase tracking-wider shadow-sm cursor-pointer"
          >
            VIEW MORE →
          </Link>
        </div>

        {/* 6 Chat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chatAstrologers.map((astro) => (
            <div
              key={astro.id}
              className="bg-[#f7f2fb] border border-purple-100 rounded-3xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition"
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
                  <h3 className="font-extrabold text-base text-slate-800">{astro.name}</h3>
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
                  <p className="text-[10px] text-slate-500 font-medium pt-0.5">
                    {astro.languages.join(', ')}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-600">
                    Exp: {astro.exp} Yrs
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 mt-2 border-t border-purple-100/60">
                <span className="bg-[#b3e2d5] text-emerald-900 text-[10px] font-bold px-2.5 py-1 rounded-full">
                  ₹{astro.price} / min
                </span>
                <Link
                  href="/chat"
                  className="bg-[#6b2cbd] hover:bg-[#5922a1] text-white font-bold px-5 py-1 rounded-full text-xs transition flex items-center gap-1 shadow-sm cursor-pointer"
                >
                  💬 Chat
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Our Astrologers */}
      <section className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto px-4 pt-10 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="w-24"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-slate-900 uppercase text-center">
            OUR ASTROLOGERS
          </h2>
          <Link
            href="/call"
            className="bg-[#f26d85] hover:bg-[#e05871] text-white text-xs font-bold px-4 py-2 rounded-full transition flex items-center gap-1 uppercase tracking-wider shadow-sm cursor-pointer"
          >
            VIEW MORE →
          </Link>
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {profileAstrologers.map((astro) => (
            <div
              key={astro.id}
              className="bg-white rounded-3xl p-5 shadow-sm border border-purple-100 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
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
                          className="bg-slate-100 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded-full"
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

                <div className="mt-4 space-y-1">
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: LIVE SESSIONS */}
      <section className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto my-16 relative">
        <div
          style={{
            background: 'linear-gradient(190.46deg, rgba(226, 175, 250, 0.6), rgba(102, 128, 254, 0.06))',
            border: '1.63px solid rgba(255, 255, 255, 0.5)',
          }}
          className="relative rounded-[50px] p-6 sm:p-12 text-slate-900 shadow-md overflow-hidden"
        >
          {/* Background image overlay */}
          <img
            src="/live-bg.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none z-0"
          />

          {/* Heading & View More Button */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 uppercase text-center w-full">
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
      </section>

      {/* App Download Banner */}
      <section className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-10">
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
      </section>

      {/* Section: OUR HAPPY CLIENTS */}
      <section className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-slate-900 uppercase text-center mb-8">
          OUR HAPPY CLIENTS
        </h2>

        <div className="relative flex items-center gap-2">
          <button
            onClick={() => scrollClients('left')}
            className="p-2 rounded-full hover:bg-purple-100 transition z-10 flex-shrink-0 cursor-pointer"
            aria-label="Previous review"
          >
            <img src="/prev.svg" alt="Prev" className="w-10 h-10" />
          </button>

          <div
            ref={clientCarouselRef}
            className="flex gap-5 overflow-x-auto scrollbar-none py-4 px-1 scroll-smooth w-full"
          >
            {testimonials.map((client) => (
              <div
                key={client.id}
                className="min-w-[300px] sm:min-w-[360px] max-w-[400px] bg-white rounded-3xl p-6 shadow-md border border-purple-100 flex flex-col justify-between flex-shrink-0 hover:shadow-lg transition relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={client.img}
                      alt={client.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-purple-300 shadow-sm"
                    />
                    <img src="/quotes.svg" alt="quote" className="w-10 h-10 opacity-40" />
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6 italic">
                    "{client.review}"
                  </p>
                </div>

                <div className="border-t border-purple-100 pt-3">
                  <h4 className="font-extrabold text-sm text-slate-900">{client.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{client.location}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollClients('right')}
            className="p-2 rounded-full hover:bg-purple-100 transition z-10 flex-shrink-0 cursor-pointer"
            aria-label="Next review"
          >
            <img src="/prev.svg" alt="Next" className="w-10 h-10 rotate-180" />
          </button>
        </div>
      </section>
    </div>
  );
}