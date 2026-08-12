'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { useLanguage, Language } from './LanguageProvider';
import { Gift, X } from 'lucide-react';

const navItems = [
  { label: 'Store', link: '/store', list: [] },
  {
    label: 'Talk to Astrologer',
    link: '/chat',
    list: [
      { name: 'Chat with Astrologer', link: '/chat' },
      { name: 'Call an Astrologer', link: '/call' },
      { name: 'Live Sessions', link: '/live' },
    ],
  },
  {
    label: 'Kundli & Reports',
    link: '/free-kundli',
    list: [
      { name: 'Free Kundli', link: '/free-kundli' },
      { name: 'Kundli Matching', link: '/kundli-matching' },
      { name: 'Kaalsarp Yoga/Dosha', link: '/free-reports?report=kaalsarp' },
      { name: 'Gemstones Report', link: '/free-reports?report=gemstone' },
      { name: 'Mangal Dosha Report', link: '/free-reports?report=mangal' },
      { name: 'Varshphal', link: '/free-reports?report=varshphal' },
      { name: 'Pooja Suggestion Report', link: '/free-reports?report=pooja' },
      { name: 'Numerology Report', link: '/free-reports?report=numerology' },
      { name: 'Sade Sati Report', link: '/free-reports?report=sadesati' },
      { name: 'Pitra Dosha Report', link: '/free-reports?report=pitra' },
      { name: 'Partner Report', link: '/free-reports?report=partner' },
      { name: 'Vimshottari Dasha', link: '/free-reports?report=vimshottari' },
    ],
  },
  {
    label: 'Horoscope',
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
  {
    label: 'Pooja & Remedies',
    link: '/pooja',
    list: [
      { name: 'Book a Pooja', link: '/pooja' },
      { name: 'Healing', link: '/healing' },
      { name: 'Feng Shui', link: '/healing?tab=fengshui' },
      { name: 'Reiki Healing', link: '/healing?tab=reiki' },
      { name: 'Meditation', link: '/healing?tab=meditation' },
      { name: 'Yoga', link: '/healing?tab=yoga' },
      { name: 'Crystal Therapy', link: '/healing?tab=crystal' },
      { name: 'Color Therapy', link: '/healing?tab=color' },
      { name: 'Acupressure Points', link: '/healing?tab=acupressure' },
      { name: 'Aromatherapy', link: '/healing?tab=aromatherapy' },
      { name: 'Ayurveda', link: '/healing?tab=ayurveda' },
      { name: 'Medical Astrology', link: '/healing?tab=medical' },
    ],
  },
  {
    label: 'Explore',
    link: '/store',
    list: [
      { name: 'Blog', link: '/blog' },
      { name: 'Panchang', link: '/panchang' },
      { name: "Today's Panchang", link: '/panchang?tab=today' },
      { name: 'Indian Calendar', link: '/panchang?tab=calendar' },
      { name: 'Hora Calculator', link: '/panchang?tab=hora' },
      { name: 'Choghadiya', link: '/panchang?tab=choghadiya' },
      { name: 'Love Calculator', link: '/love-calculator' },
      { name: 'Friendship Calculator', link: '/love-calculator?tab=friendship' },
    ],
  },
  {
    label: 'Occult',
    link: '/occult',
    list: [
      { name: 'Palmistry', link: '/occult?tab=palmistry' },
      { name: 'Tarot Reading', link: '/occult?tab=tarot' },
      { name: 'Numerology', link: '/occult?tab=numerology' },
      { name: 'Vastu', link: '/occult?tab=vastu' },
      { name: 'Chinese Astrology', link: '/occult?tab=chinese' },
      { name: 'Mantra', link: '/occult?tab=mantra' },
      { name: 'Chalisa', link: '/occult?tab=chalisa' },
      { name: 'Aarti', link: '/occult?tab=aarti' },
      { name: 'Nadi Astrology', link: '/occult?tab=nadi' },
      { name: 'Nakshatra', link: '/occult?tab=nakshatra' },
    ],
  },
  {
    label: 'Astrology',
    link: '/horoscope',
    list: [
      { name: 'Planets', link: '/horoscope?tab=planets' },
      { name: 'Lal Kitab', link: '/occult?tab=lalkitab' },
      { name: 'What is Lal Kitab?', link: '/occult?tab=lalkitab-about' },
      { name: 'Houses', link: '/horoscope?tab=houses' },
      { name: 'KP System', link: '/occult?tab=kp' },
      { name: 'Zodiac Compatibility', link: '/horoscope?tab=compatibility' },
    ],
  },
];

// Segments for the Daily Spin wheel (clockwise from top)
const WHEEL_SEGMENTS = ['Saturn', 'Mystery', 'Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter'];

// Sun icon for light mode
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

// Moon icon for dark mode
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileActiveSub, setMobileActiveSub] = useState<string | null>(null);
  const [headerHidden, setHeaderHidden] = useState(false);
  const { language: currentLang, setLanguage: setCurrentLang, t } = useLanguage();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  // Daily Spin state
  const [isSpinnerOpen, setIsSpinnerOpen] = useState(false);
  const [rotation, setRotation] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [prize, setPrize] = useState<string | null>(null);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setPrize(null);

    const targetSegmentIndex = Math.floor(Math.random() * WHEEL_SEGMENTS.length);
    const segmentDegree = 360 / WHEEL_SEGMENTS.length;
    const extraSpins = 360 * 5;
    const targetDegree = 360 - (targetSegmentIndex * segmentDegree + segmentDegree / 2);
    const totalRotation = rotation + extraSpins + (targetDegree - (rotation % 360));

    setRotation(totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setPrize(WHEEL_SEGMENTS[targetSegmentIndex]);
    }, 4000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 200;
      setHeaderHidden(scrollPosition >= threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search recommendation options
  const defaultRecommendations = [
    { label: 'Chat with Astrologers', value: 'chat', link: '/chat' },
    { label: 'Kundli Matching', value: 'matching', link: '/kundli-matching' },
    { label: 'Daily Horoscope', value: 'horoscope', link: '/horoscope' },
    { label: 'Panchang Today', value: 'panchang', link: '/panchang' },
    { label: 'Pooja Booking & Remedies', value: 'pooja', link: '/pooja' },
    { label: 'Love Calculator', value: 'love', link: '/love-calculator' },
  ];

  const searchResults = searchQuery.trim()
    ? defaultRecommendations.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : defaultRecommendations;

  const handleSearchSubmit = () => {
    if (searchResults.length > 0) {
      router.push(searchResults[0].link);
    } else {
      router.push('/chat'); // fallback
    }
    setShowSearchDropdown(false);
    setMobileSearchOpen(false);
  };

  return (
    <>
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${headerHidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}
      style={{
        background: 'var(--bg-header)',
        borderBottom: '1px solid var(--border-color)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {/* Top Header Row */}
      <div className="w-full px-3 md:px-5 lg:px-8 py-2 md:py-2.5">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          
          {/* Logo & Hamburguer menu button for mobile */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-primary focus:outline-none"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <Link href="/" className="flex items-center gap-1.5 md:gap-2 cursor-pointer">
              <img
                src="https://media.chingari.io/apipublic/chingari-web-assets/images/astro/astro-icon.png"
                alt="Logo"
                className="w-6 h-6 md:w-9 md:h-9 object-contain"
              />
              <span
                className="font-extrabold text-base md:text-xl tracking-wide notranslate"
                style={{ color: 'var(--text-primary)' }}
              >
                AstroLive
              </span>
            </Link>
          </div>

          {/* Search Bar (Desktop only) */}
          <div className="hidden lg:flex flex-1 mx-3 lg:mx-6 relative">
            <div
              className="relative flex items-center w-full rounded-full overflow-hidden transition-all duration-300"
              style={{
                background: 'var(--search-bg)',
                border: '1px solid var(--search-border)',
              }}
            >
              <div 
                className="pl-4 pr-2 flex items-center cursor-pointer" 
                style={{ color: 'var(--text-muted)' }}
                onClick={handleSearchSubmit}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input
                type="text"
                placeholder={t('nav.search_placeholder', 'Search astrologers, horoscope, kundli...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearchDropdown(true)}
                onBlur={() => setTimeout(() => setShowSearchDropdown(false), 200)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchSubmit();
                  }
                }}
                className="w-full py-2 pr-3 bg-transparent text-sm font-medium outline-none placeholder:font-normal"
                style={{ color: 'var(--text-primary)' }}
              />
            </div>

            {/* Search Dropdown recommendations */}
            {showSearchDropdown && (
              <div
                className="absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-2xl py-3 z-[99999] max-h-72 overflow-y-auto"
                style={{
                  background: 'var(--dropdown-bg)',
                  border: '1px solid var(--border-color)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="px-4 pb-2 text-[10px] uppercase font-bold tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  {searchQuery ? 'Matching Options' : 'Recommended Services'}
                </div>
                {searchResults.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2.5 text-xs font-semibold cursor-pointer flex items-center gap-2"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'var(--dropdown-hover)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--accent-purple)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                    }}
                    onClick={() => {
                      router.push(item.link);
                      setShowSearchDropdown(false);
                    }}
                  >
                    <span>🔍</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Icons (Adapts to mobile widths) */}
          <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
            {/* Search Icon Trigger for Mobile */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="lg:hidden p-2 rounded-full transition"
              style={{
                background: 'var(--wallet-bg)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
              }}
              aria-label="Toggle mobile search"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Daily Spin trigger - Golden Styled Button */}
            <button
              onClick={() => setIsSpinnerOpen(true)}
              className="hidden sm:flex font-bold px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] transition items-center gap-1 cursor-pointer shadow-md hover:brightness-105"
              style={{
                background: 'linear-gradient(135deg, #ffd700 0%, #ffaa00 100%)',
                color: '#3d2e11',
                border: '1px solid #ffcc00',
              }}
              title="Spin for Daily Rewards"
              aria-label="Daily Spin"
            >
              <Gift className="w-3 h-3 animate-pulse text-[#3d2e11]" />
              <span className="hidden md:inline">{t('nav.daily_spin', 'Daily Spin')}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle flex items-center justify-center rounded-full"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              style={{ width: 30, height: 30 }}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Language Selection Dropdown instead of Wallet */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                onBlur={() => setTimeout(() => setShowLangDropdown(false), 200)}
                className="font-bold px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs transition flex items-center gap-1 cursor-pointer"
                style={{
                  background: 'var(--wallet-bg)',
                  color: 'var(--wallet-text)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <span>🌐</span>
                <span>{currentLang}</span>
                <span className="text-[10px] opacity-60">▼</span>
              </button>

              {showLangDropdown && (
                <div
                  className="absolute right-0 top-full mt-2 rounded-2xl shadow-2xl py-2 w-36 z-[99999]"
                  style={{
                    background: 'var(--dropdown-bg)',
                    border: '1px solid var(--border-color)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {['English', 'Hindi', 'Bengali', 'Marathi', 'Punjabi', 'Gujarati'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang as Language);
                        setShowLangDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold cursor-pointer transition"
                      style={{
                        color: currentLang === lang ? 'var(--accent-purple)' : 'var(--text-primary)',
                        background: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'var(--dropdown-hover)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                      }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notification bell */}
            <button
              className="relative flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full transition cursor-pointer"
              style={{
                background: 'var(--wallet-bg)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
              }}
              aria-label="Notifications"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </button>

            {/* User avatar */}
            <button
              className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full transition cursor-pointer overflow-hidden"
              style={{
                background: 'var(--accent-purple)',
                color: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
              }}
              aria-label="User profile"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar Expansion */}
      {mobileSearchOpen && (
        <div className="lg:hidden w-full px-4 pb-3" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <div
            className="relative flex items-center w-full rounded-full overflow-hidden transition-all duration-300"
            style={{
              background: 'var(--search-bg)',
              border: '1px solid var(--search-border)',
            }}
          >
            <div 
              className="pl-4 pr-2 flex items-center cursor-pointer" 
              style={{ color: 'var(--text-muted)' }}
              onClick={handleSearchSubmit}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              type="text"
              placeholder={t('nav.search_placeholder', 'Search astrologers, horoscope...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearchSubmit();
                }
              }}
              className="w-full py-2 pr-4 bg-transparent text-sm font-medium outline-none"
              style={{ color: 'var(--text-primary)' }}
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Bottom Row: Navigation Links (Desktop view) */}
      <nav
        className="hidden lg:block w-full px-5 lg:px-8"
        style={{ borderTop: '1px solid var(--border-color)' }}
      >
        <div className="flex items-center gap-0 flex-nowrap w-full">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div
                className="px-2.5 py-2 cursor-pointer text-xs font-semibold tracking-wide uppercase flex items-center gap-1 flex-shrink-0"
                style={{ color: 'var(--text-primary)' }}
                onClick={() => router.push(item.link)}
              >
                {t('nav.' + item.label.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_'), item.label)}
                {item.list.length > 0 && (
                  <span className={`chevron-icon transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                )}
              </div>

              {/* Mega Dropdown menu */}
              {item.list.length > 0 && activeDropdown === item.label && (
                <div
                  className="absolute top-full left-0 mt-0 rounded-xl py-2"
                  style={{
                    background: 'var(--dropdown-bg)',
                    border: '1px solid var(--border-color)',
                    backdropFilter: 'blur(12px)',
                    zIndex: 99999,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3)',
                    ...(item.list.length > 6 ? { width: '480px' } : { width: '256px' }),
                  }}
                >
                  {item.list.length > 6 ? (
                    <div className="flex">
                      <div className="flex-1 py-1" style={{ borderRight: '1px solid var(--border-color)' }}>
                        {item.list.slice(0, Math.ceil(item.list.length / 2)).map((subItem, sIdx) => (
                          <Link
                            key={sIdx}
                            href={subItem.link}
                            className="block px-5 py-3 text-sm font-medium cursor-pointer no-underline"
                            style={{ color: 'var(--text-primary)' }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.background = 'var(--dropdown-hover)';
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.background = 'transparent';
                            }}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {t('nav.' + subItem.name.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_'), subItem.name)}
                          </Link>
                        ))}
                      </div>
                      <div className="flex-1 py-1">
                        {item.list.slice(Math.ceil(item.list.length / 2)).map((subItem, sIdx) => (
                          <Link
                            key={sIdx}
                            href={subItem.link}
                            className="block px-5 py-3 text-sm font-medium cursor-pointer no-underline"
                            style={{ color: 'var(--text-primary)' }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.background = 'var(--dropdown-hover)';
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.background = 'transparent';
                            }}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {t('nav.' + subItem.name.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_'), subItem.name)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    item.list.map((subItem, sIdx) => (
                      <Link
                        key={sIdx}
                        href={subItem.link}
                        className="block px-5 py-3 text-sm font-medium cursor-pointer no-underline"
                        style={{ color: 'var(--text-primary)' }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = 'var(--dropdown-hover)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = 'transparent';
                        }}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {t('nav.' + subItem.name.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_'), subItem.name)}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Drawer/Accordion Menu overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed left-0 right-0 top-[60px] md:top-[76px] bottom-0 z-40 overflow-y-auto py-4 px-6 flex flex-col gap-2"
          style={{
            background: 'var(--bg-header)',
            borderTop: '1px solid var(--border-color)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            height: 'calc(100vh - 60px)',
          }}
        >
          {/* Golden Daily Spin trigger for mobile drawer */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsSpinnerOpen(true);
            }}
            className="w-full flex items-center justify-center gap-2 font-bold text-sm uppercase py-3 rounded-full mb-2 cursor-pointer shadow-md"
            style={{
              background: 'linear-gradient(135deg, #ffd700 0%, #ffaa00 100%)',
              color: '#3d2e11',
              border: '1px solid #ffcc00',
            }}
          >
            <Gift className="w-4 h-4 text-[#3d2e11]" />
            {t('nav.daily_spin', 'Daily Spin')}
          </button>

          {navItems.map((item, idx) => (
            <div key={idx} className="w-full border-b" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center justify-between py-3">
                <Link
                  href={item.link}
                  className="font-bold text-base uppercase no-underline"
                  style={{ color: 'var(--text-primary)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.' + item.label.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_'), item.label)}
                </Link>
                {item.list.length > 0 && (
                  <button
                    onClick={() => setMobileActiveSub(mobileActiveSub === item.label ? null : item.label)}
                    className="p-1"
                    style={{ color: 'var(--text-muted)' }}
                    aria-label="Toggle sublist"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform duration-200 ${mobileActiveSub === item.label ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}
              </div>
              
              {/* Mobile sublist accordion */}
              {item.list.length > 0 && mobileActiveSub === item.label && (
                <div className="pl-4 pb-3 flex flex-col gap-2">
                  {item.list.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      href={sub.link}
                      className="text-sm font-semibold py-1.5 no-underline transition-colors"
                      style={{ color: 'var(--text-secondary)' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      • {t('nav.' + sub.name.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_'), sub.name)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>

    {/* Daily Spin Modal — Warm yellowish blurred backdrop styling */}
    {isSpinnerOpen && (
      <div className="fixed inset-0 z-[10000] bg-[#3d2e11]/50 backdrop-blur-xl flex flex-col items-center justify-center p-4 transition-all duration-300">

        {/* Close Button */}
        <button
          onClick={() => setIsSpinnerOpen(false)}
          className="absolute top-6 right-6 p-2 text-amber-200/60 hover:text-amber-100 bg-amber-500/10 hover:bg-amber-500/20 rounded-full transition cursor-pointer z-50"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Wheel Assembly */}
        <div className="relative flex flex-col items-center mt-12 animate-in zoom-in-95 duration-300">

          {/* The Glowing Top Indicator Triangle */}
          <div className="absolute -top-3 z-30 drop-shadow-[0_0_12px_rgba(255,215,0,0.9)] flex flex-col items-center">
            <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[28px] border-t-[#ffd700]" />
          </div>

          {/* The Rotating Wheel */}
          <div
            className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border-[8px] border-[#ffd700] bg-[#36290f] shadow-[0_0_50px_rgba(255,200,50,0.4)] relative overflow-hidden"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)',
              willChange: 'transform'
            }}
          >
            {/* Lines & Text Labels */}
            {WHEEL_SEGMENTS.map((seg, i) => {
              const baseAngle = i * 45 + 22.5;

              return (
                <div key={seg}>
                  {/* The vertical divider line anchored at center */}
                  <div
                    className="absolute top-0 left-1/2 w-[2px] h-[50%] bg-[#ffd700] origin-bottom -translate-x-1/2"
                    style={{ transform: `rotate(${i * 45}deg)` }}
                  />
                  {/* The Segment Text */}
                  <div 
                    className="absolute top-1/2 left-1/2 origin-top flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                    style={{ 
                      transform: `rotate(${baseAngle}deg) translateY(-90px)` 
                    }}
                  >
                     <span className="text-[#ffd700] font-bold text-sm sm:text-lg tracking-wider transform -rotate-90 whitespace-nowrap drop-shadow-md select-none">
                       {seg}
                     </span>
                  </div>
                </div>
              );
            })}
            
            {/* Center Sunburst Pivot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[3px] border-[#ffd700] bg-[#36290f] flex items-center justify-center z-20">
               <div className="relative w-full h-full">
                 {[0, 45, 90, 135].map(deg => (
                   <div 
                     key={deg} 
                     className="absolute top-0 left-1/2 w-[2px] h-full bg-[#ffd700] -translate-x-1/2" 
                     style={{ transform: `rotate(${deg}deg)` }} 
                   />
                 ))}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#36290f] rounded-full" />
               </div>
            </div>

          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center mt-8 z-10 h-32">
          <button 
            onClick={handleSpin}
            disabled={isSpinning}
            className="bg-amber-500/10 border-2 border-[#ffd700] hover:bg-[#ffd700]/30 text-[#ffd700] font-extrabold py-3.5 px-12 rounded-full transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(255,215,0,0.3)] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSpinning ? 'Consulting Stars...' : 'Spin the Wheel'}
          </button>

          {/* Testing Helper: Force Reset State */}
          {isSpinning && (
            <button 
              onClick={() => { setIsSpinning(false); setPrize(null); }}
              className="mt-3 text-xs text-amber-200/60 hover:text-amber-100 underline cursor-pointer"
            >
              Force Reset (For Testing)
            </button>
          )}

          {prize && (
            <div className="mt-6 text-[#ffd700] font-bold text-xl sm:text-2xl tracking-widest animate-fadeIn drop-shadow-[0_0_12px_rgba(255,215,0,0.9)] text-center">
              🎉 YOU WON: {prize.toUpperCase()}
            </div>
          )}
        </div>

      </div>
    )}
    </>
  );
}