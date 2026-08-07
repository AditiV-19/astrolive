'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const navCategoriesData = [
  { label: 'STORE', link: '/store', list: [] },
  {
    label: 'HOROSCOPE',
    link: '/horoscope',
    list: [
      { name: "Today's Horoscope", link: '/horoscope?tab=today' },
      { name: "Yesterday's Horoscope", link: '/horoscope?tab=yesterday' },
      { name: "Tomorrow's Horoscope", link: '/horoscope?tab=tomorrow' },
      { name: 'Monthly Horoscope', link: '/horoscope?tab=monthly' },
      { name: 'Yearly Horoscope', link: '/horoscope?tab=yearly' },
      { name: 'Chinese Horoscope', link: '/horoscope?tab=chinese' },
    ],
  },
  { label: 'ASTROLOGY', link: '/chat', list: [{ name: 'Planets', link: '/horoscope' }] },
  { label: 'BLOG', link: '/blog', list: [{ name: 'Blog', link: '/blog' }] },
  {
    label: 'OCCULT',
    link: '/occult',
    list: [
      { name: 'Palmistry', link: '/occult?tab=palmistry' },
      { name: 'Tarot Reading', link: '/occult?tab=tarot' },
      { name: 'Psychic', link: '/occult?tab=psychic' },
      { name: 'Vastu', link: '/occult?tab=vastu' },
      { name: 'Numerology', link: '/occult?tab=numerology' },
      { name: 'Mantra', link: '/occult?tab=mantra' },
    ],
  },
  {
    label: 'FREE REPORTS',
    link: '/free-reports',
    list: [
      { name: 'Kaalsarp Yoga/ Dosha', link: '/free-reports?report=kaalsarp' },
      { name: 'Gemstones Report', link: '/free-reports?report=gemstone' },
      { name: 'Mangal Dosha Report', link: '/free-reports?report=mangal' },
      { name: 'Varshphal', link: '/free-reports?report=varshphal' },
      { name: 'Sade Sati Report', link: '/free-reports?report=sadesati' },
    ],
  },
  {
    label: 'HEALING',
    link: '/healing',
    list: [
      { name: 'Feng Shui', link: '/healing?tab=fengshui' },
      { name: 'Reiki Healing', link: '/healing?tab=reiki' },
      { name: 'Meditation', link: '/healing?tab=meditation' },
      { name: 'Yoga', link: '/healing?tab=yoga' },
      { name: 'Ayurveda', link: '/healing?tab=ayurveda' },
    ],
  },
  {
    label: 'PANCHANG',
    link: '/panchang',
    list: [
      { name: "Today's Panchang", link: '/panchang' },
      { name: 'Hora Calculator', link: '/panchang?tab=hora' },
      { name: 'Choghadiya', link: '/panchang?tab=choghadiya' },
    ],
  },
  {
    label: 'LAL KITAB',
    link: '/occult?tab=lalkitab',
    list: [
      { name: 'Lal Kitab Home', link: '/occult?tab=lalkitab' },
      { name: 'Houses', link: '/occult?tab=lalkitab' },
      { name: 'Planets', link: '/occult?tab=lalkitab' },
    ],
  },
  { label: 'KP', link: '/occult?tab=kp', list: [{ name: 'KP System', link: '/occult?tab=kp' }] },
  { label: 'COMPATIBILITY', link: '/kundli-matching', list: [{ name: 'Zodiac Compatibility', link: '/love-calculator' }] },
  {
    label: 'CALCULATORS',
    link: '/love-calculator',
    list: [
      { name: 'Love Calculator', link: '/love-calculator' },
      { name: 'Friendship Calculator', link: '/love-calculator?tab=friendship' },
    ],
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  return (
    <>
      {/* Top Header */}
      <header className="bg-white sticky top-0 z-50 px-6 py-3 shadow-sm border-b border-purple-50">
        <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://media.chingari.io/apipublic/chingari-web-assets/images/astro/astro-icon.png"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-extrabold text-xl tracking-wide text-slate-900">
              ASTROLIVE
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/wallet"
              className="bg-purple-50 hover:bg-purple-100 text-[#6b2cbd] font-bold px-4 py-1.5 rounded-full text-xs transition flex items-center gap-1.5"
            >
              <span>👛 Wallet</span>
              <span className="bg-[#6b2cbd] text-white px-1.5 py-0.5 rounded-full text-[10px]">₹0</span>
            </Link>
            
            <button className="bg-[#f26d85] hover:bg-[#e05871] text-white font-bold px-6 py-1.5 rounded-full text-xs transition uppercase tracking-wider shadow-sm cursor-pointer">
              LOGIN
            </button>
          </div>
        </div>
      </header>

      {/* Sub Navigation Bar */}
      <div className="w-full flex justify-center py-2 px-4 relative z-[9999]">
        <nav
          style={{
            alignItems: 'center',
            backgroundAttachment: 'scroll',
            backgroundClip: 'border-box',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            backgroundImage: 'linear-gradient(190.46deg, rgb(226, 175, 250), rgb(102, 128, 254))',
            backgroundOrigin: 'padding-box',
            borderBottomLeftRadius: '50px',
            borderBottomRightRadius: '50px',
            borderTopLeftRadius: '50px',
            borderTopRightRadius: '50px',
            boxShadow: 'rgba(0, 0, 0, 0.16) 4px 4px 14px 0px',
            boxSizing: 'border-box',
            color: 'rgb(255, 255, 255)',
            colorScheme: 'light',
            display: 'flex',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            height: '44px',
            justifyContent: 'space-evenly',
            lineHeight: '24px',
            overflowX: 'visible',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            width: '1440px',
            maxWidth: '100%',
          }}
          className="scrollbar-none px-4 relative overflow-visible"
        >
          {navCategoriesData.map((cat, idx) => (
            <div
              key={idx}
              className="relative py-2 px-2 group cursor-pointer flex-shrink-0"
              onMouseEnter={() => setActiveDropdown(cat.label)}
              onMouseLeave={() => setActiveDropdown(null)}
              onClick={() => router.push(cat.link)}
            >
              <span className="hover:opacity-80 transition text-xs font-bold tracking-wide uppercase flex items-center gap-1">
                {cat.label}
              </span>

              {cat.list.length > 0 && activeDropdown === cat.label && (
                <div className="absolute top-full left-0 mt-0 bg-white text-slate-800 rounded-xl shadow-xl border border-purple-100 py-2 w-52 z-[99999] animate-fadeIn">
                  {cat.list.map((subItem, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-4 py-2 hover:bg-purple-50 hover:text-[#6b2cbd] text-xs font-semibold cursor-pointer transition text-left capitalize"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(subItem.link);
                        setActiveDropdown(null);
                      }}
                    >
                      {subItem.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
