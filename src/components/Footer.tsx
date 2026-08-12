'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircleMore } from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <footer
      className="w-full pt-12 pb-8"
      style={{
        background: theme === 'dark' ? 'transparent' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#1a1025',
        borderTop: theme === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <div className="max-w-[1440px] w-[90%] lg:w-[85%] mx-auto space-y-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-10" style={{ borderBottom: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` }}>

          {/* Column 1: Logo, Buttons, Socials */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="https://media.chingari.io/apipublic/chingari-web-assets/images/astro/astro-icon.png"
                alt="Astro"
                className="w-9 h-9 object-contain"
              />
              <span className="font-extrabold text-2xl tracking-wide notranslate" style={{ color: theme === 'dark' ? '#fff' : '#1a1025' }}>
                ASTROLIVE
              </span>
            </Link>

            <div className="space-y-4 pt-2">
              <Link
                href="/chat"
                className="h-[60px] min-w-[280px] max-w-[360px] w-full font-extrabold px-6 rounded-[40px] text-xs shadow-md hover:bg-slate-50 transition flex items-center justify-between cursor-pointer"
                style={{ background: '#fff', color: '#1a1025' }}
              >
                <div className="flex items-center gap-2">
                  <MessageCircleMore className="w-5 h-5 text-[#f26d85]" />
                  <span>{t('nav.chat_with_astrologer', 'Chat with Astrologer')}</span>
                </div>
                <span className="text-[#f26d85] font-bold text-xs flex items-center gap-1">
                  (<img src="/rupee-icon-orange.svg" alt="rupee" className="w-3.5 h-3.5" /> 10/min)
                </span>
              </Link>

              <Link
                href="/call"
                className="h-[60px] min-w-[280px] max-w-[360px] w-full font-extrabold px-6 rounded-[40px] text-xs shadow-md hover:bg-slate-50 transition flex items-center justify-between cursor-pointer"
                style={{ background: '#fff', color: '#1a1025' }}
              >
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="w-4 h-4 text-[#f26d85]" />
                  <span>{t('nav.talk_to_astrologer', 'Talk to Astrologer')}</span>
                </div>
                <span className="text-[#f26d85] font-bold text-xs flex items-center gap-1">
                  (<img src="/rupee-icon-orange.svg" alt="rupee" className="w-3.5 h-3.5" /> 15/min)
                </span>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/astrolive_future" target="_blank" rel="noreferrer">
                <img src="/instagram.svg" alt="instagram" className="w-9 h-9 hover:scale-110 transition cursor-pointer" />
              </a>
              <a href="mailto:help@astrolive.app" target="_blank" rel="noreferrer">
                <img src="/mail.svg" alt="email" className="w-9 h-9 hover:scale-110 transition cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552253798986" target="_blank" rel="noreferrer">
                <img src="/facebook.svg" alt="facebook" className="w-9 h-9 hover:scale-110 transition cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Column 2: Horoscope */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase" style={{ color: theme === 'dark' ? '#fff' : '#1a1025' }}>
              {t('nav.horoscope', 'Horoscope')}
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(26,16,37,0.7)' }}>
              <li className="cursor-pointer hover:underline"><Link href="/horoscope?tab=today">Today&apos;s Horoscope</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/horoscope?tab=yesterday">Yesterday&apos;s Horoscope</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/horoscope?tab=tomorrow">Tomorrow&apos;s Horoscope</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/horoscope?tab=monthly">Monthly Horoscope</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/horoscope?tab=yearly">Yearly Horoscope</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/horoscope?tab=chinese">Chinese Horoscope</Link></li>
            </ul>
          </div>

          {/* Column 3: Kundli & Reports */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase" style={{ color: theme === 'dark' ? '#fff' : '#1a1025' }}>
              {t('nav.kundli_reports', 'Kundli & Reports')}
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(26,16,37,0.7)' }}>
              <li className="cursor-pointer hover:underline"><Link href="/free-kundli">Free Kundli</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/kundli-matching">Kundli Matching</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/free-reports?report=kaalsarp">Kaalsarp Yoga/Dosha</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/free-reports?report=gemstone">Gemstones Report</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/free-reports?report=mangal">Mangal Dosha Report</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/free-reports?report=varshphal">Varshphal</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/free-reports?report=sadesati">Sade Sati Report</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/free-reports?report=pitra">Pitra Dosha Report</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/free-reports?report=numerology">Numerology Report</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/free-reports?report=partner">Partner Report</Link></li>
            </ul>
          </div>

          {/* Column 4: Pooja & Remedies */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase" style={{ color: theme === 'dark' ? '#fff' : '#1a1025' }}>
              {t('nav.pooja_remedies', 'Pooja & Remedies')}
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(26,16,37,0.7)' }}>
              <li className="cursor-pointer hover:underline"><Link href="/pooja">Book a Pooja</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/healing">Healing</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/healing?tab=fengshui">Feng Shui</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/healing?tab=reiki">Reiki Healing</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/healing?tab=meditation">Meditation</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/healing?tab=yoga">Yoga</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/healing?tab=crystal">Crystal Therapy</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/healing?tab=ayurveda">Ayurveda</Link></li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-10" style={{ borderBottom: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` }}>

          {/* Explore */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase" style={{ color: theme === 'dark' ? '#fff' : '#1a1025' }}>
              {t('nav.explore', 'Explore')}
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(26,16,37,0.7)' }}>
              <li className="cursor-pointer hover:underline"><Link href="/store">Store</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/blog">Blog</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/live">Live Sessions</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/wallet">Wallet</Link></li>
            </ul>
          </div>

          {/* Panchang */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase" style={{ color: theme === 'dark' ? '#fff' : '#1a1025' }}>
              {t('nav.panchang', 'Panchang')}
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(26,16,37,0.7)' }}>
              <li className="cursor-pointer hover:underline"><Link href="/panchang">Today&apos;s Panchang</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/panchang?tab=calendar">Indian Calendar</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/panchang?tab=hora">Hora Calculator</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/panchang?tab=choghadiya">Choghadiya</Link></li>
            </ul>
          </div>

          {/* Occult */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase" style={{ color: theme === 'dark' ? '#fff' : '#1a1025' }}>
              {t('nav.occult', 'Occult')}
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(26,16,37,0.7)' }}>
              <li className="cursor-pointer hover:underline"><Link href="/occult?tab=palmistry">Palmistry</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/occult?tab=tarot">Tarot Reading</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/occult?tab=numerology">Numerology</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/occult?tab=vastu">Vastu</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/occult?tab=chinese">Chinese Astrology</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/occult?tab=nadi">Nadi Astrology</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/occult?tab=nakshatra">Nakshatra</Link></li>
            </ul>
          </div>

          {/* Astrology */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase" style={{ color: theme === 'dark' ? '#fff' : '#1a1025' }}>
              {t('nav.astrology', 'Astrology')}
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(26,16,37,0.7)' }}>
              <li className="cursor-pointer hover:underline"><Link href="/horoscope?tab=planets">Planets</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/horoscope?tab=houses">Houses</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/occult?tab=lalkitab">Lal Kitab</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/occult?tab=kp">KP System</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/horoscope?tab=compatibility">Zodiac Compatibility</Link></li>
            </ul>
          </div>

          {/* Calculators */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase" style={{ color: theme === 'dark' ? '#fff' : '#1a1025' }}>
              Calculators
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(26,16,37,0.7)' }}>
              <li className="cursor-pointer hover:underline"><Link href="/love-calculator">Love Calculator</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/love-calculator?tab=friendship">Friendship Calculator</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 pt-0">
          <div className="space-y-2">
            <p className="text-xs lg:text-sm font-medium" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(26,16,37,0.5)' }}>
              @2026 Tech4Billion Media Pvt. Ltd. All Rights Reserved
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs lg:text-sm" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(26,16,37,0.6)' }}>
            <Link href="/blog" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="/blog" className="hover:underline">Refund Policy</Link>
            <span>|</span>
            <Link href="/blog" className="hover:underline">Terms and Conditions</Link>
            <span>|</span>
            <Link href="/blog" className="hover:underline">About Us</Link>
            <span>|</span>
            <Link href="/blog" className="hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
