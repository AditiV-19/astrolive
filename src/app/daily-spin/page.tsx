'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Gift, X } from 'lucide-react';

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

// Exact segments mapped from image_813115.png (clockwise from top vertical line)
const WHEEL_SEGMENTS = ['Saturn', 'Mystery', 'Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter'];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSpinnerOpen, setIsSpinnerOpen] = useState(false);
  const router = useRouter();

  // Spinner State
  const [rotation, setRotation] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [prize, setPrize] = useState<string | null>(null);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setPrize(null);

    // Randomize the outcome
    const targetSegmentIndex = Math.floor(Math.random() * WHEEL_SEGMENTS.length);
    
    // Calculate rotation to land exactly in the middle of the selected segment
    const segmentDegree = 360 / WHEEL_SEGMENTS.length;
    const extraSpins = 360 * 5; 
    
    // In our mapping, segment 0 (Saturn) spans 0 to 45 degrees. Its center is at 22.5.
    // To land on it, the wheel must rotate negatively to bring 22.5 to the 0-degree (top) position.
    // Or, spinning forward: 360 - 22.5
    const targetDegree = 360 - (targetSegmentIndex * segmentDegree + (segmentDegree / 2));
    
    // Add current rotation (minus modulo to prevent infinite state growth wrapping bugs)
    const totalRotation = rotation + extraSpins + (targetDegree - (rotation % 360));

    setRotation(totalRotation);

    // Wait for the 4-second CSS transition to finish
    setTimeout(() => {
      setIsSpinning(false);
      setPrize(WHEEL_SEGMENTS[targetSegmentIndex]);
    }, 4000);
  };

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

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsSpinnerOpen(true)}
              className="bg-amber-100 hover:bg-amber-200 text-amber-700 font-bold px-3 py-1.5 rounded-full text-xs transition flex items-center gap-1.5 shadow-sm border border-amber-200 cursor-pointer"
              title="Spin for Daily Rewards"
            >
              <Gift className="w-3.5 h-3.5 animate-pulse" />
              <span className="hidden sm:inline">Daily Spin</span>
            </button>

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
      <div className="w-full flex justify-center py-2 px-4 relative z-[9000]">
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

      {/* Daily Spin Deep Space Modal aligned to image_813115.png */}
      {isSpinnerOpen && (
        <div className="fixed inset-0 z-[10000] bg-[#1a113d] flex flex-col items-center justify-center p-4 transition-all duration-300">
          
          {/* Pure CSS Starry Background Overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
              { top: '10%', left: '15%', size: '3px' }, { top: '25%', left: '80%', size: '2px' },
              { top: '45%', left: '10%', size: '4px' }, { top: '65%', left: '90%', size: '2px' },
              { top: '85%', left: '30%', size: '3px' }, { top: '15%', left: '60%', size: '2px' },
              { top: '75%', left: '70%', size: '4px' }, { top: '50%', left: '50%', size: '2px' },
              { top: '30%', left: '30%', size: '1px' }, { top: '80%', left: '15%', size: '2px' }
            ].map((star, i) => (
              <div 
                key={i} 
                className="absolute bg-white rounded-full opacity-70" 
                style={{ top: star.top, left: star.left, width: star.size, height: star.size }} 
              />
            ))}
          </div>
          
          {/* Close Button */}
          <button 
            onClick={() => setIsSpinnerOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition cursor-pointer z-50"
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
              className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border-[8px] border-[#ffd700] bg-[#1a113d] shadow-[0_0_40px_rgba(255,215,0,0.3)] relative overflow-hidden"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)',
                willChange: 'transform'
              }}
            >
              {/* Lines & Text Labels */}
             {WHEEL_SEGMENTS.map((seg, i) => {
  const baseAngle = i * 45 + 22.5;
  const flip = baseAngle > 180; // left half of the wheel needs the opposite spin

  return (
    <div key={seg}>
      {/* Divider line */}
      <div
        className="absolute top-0 left-1/2 w-[2px] h-[50%] bg-[#ffd700] origin-bottom -translate-x-1/2"
        style={{ transform: `rotate(${i * 45}deg)` }}
      />

      {/* Label */}
      <div
        className="absolute top-1/2 left-1/2 origin-top flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{ transform: `rotate(${baseAngle}deg) translateY(-90px)` }}
      >
        <span
          className="text-[#ffd700] font-bold text-sm sm:text-lg tracking-wider whitespace-nowrap drop-shadow-md select-none"
          style={{ transform: `rotate(${flip ? 90 : -90}deg)` }}
        >
          {seg}
        </span>
      </div>
    </div>
  );
})}
              
              {/* Center Sunburst Pivot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[3px] border-[#ffd700] bg-[#1a113d] flex items-center justify-center z-20">
                 <div className="relative w-full h-full">
                   {/* The 8 inner ticks aligning with the dividers */}
                   {[0, 45, 90, 135].map(deg => (
                     <div 
                       key={deg} 
                       className="absolute top-0 left-1/2 w-[2px] h-full bg-[#ffd700] -translate-x-1/2" 
                       style={{ transform: `rotate(${deg}deg)` }} 
                     />
                   ))}
                   {/* Center mask covering the middle of the ticks */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#1a113d] rounded-full" />
                 </div>
              </div>

            </div>
          </div>

          {/* Controls */}
<div className="flex flex-col items-center mt-12 z-10 h-32">
  <button 
    onClick={handleSpin}
    disabled={isSpinning}
    className="bg-transparent border-2 border-[#ffd700] hover:bg-[#ffd700]/20 text-[#ffd700] font-extrabold py-3.5 px-12 rounded-full transition-all uppercase tracking-widest shadow-[0_0_15px_rgba(255,215,0,0.2)] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
  >
    {isSpinning ? 'Consulting Stars...' : 'Spin the Wheel'}
  </button>

  {/* Testing helper: Force reset state */}
  {isSpinning && (
    <button 
      onClick={() => { setIsSpinning(false); setPrize(null); }}
      className="mt-2 text-xs text-white/40 hover:text-white underline cursor-pointer"
    >
      Force Reset (For Testing)
    </button>
  )}

  {prize && (
    <div className="mt-8 text-[#ffd700] font-bold text-2xl tracking-widest animate-fadeIn drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">
      {prize.toUpperCase()}
    </div>
  )}
</div>

        </div>
      )}
    </>
  );
}