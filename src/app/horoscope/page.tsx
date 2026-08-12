'use client';

import React, { useState, useEffect } from 'react';
import { ZODIAC_SIGNS, ZodiacSign } from '@/lib/zodiacData';
import { ZodiacWheel } from '@/components/ZodiacWheel';

export default function HoroscopePage() {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'love' | 'career' | 'health'>('overview');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle Sector Click
  const handleSelectSign = (sign: ZodiacSign) => {
    setSelectedSign(sign);
    setIsPaused(true);
    setActiveTab('overview');
  };

  const handleClose = () => {
    setSelectedSign(null);
    setIsPaused(false);
  };

  // Keyboard shortcut: ESC to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedSign) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSign]);

  // Filtered signs for quick search
  const filteredSigns = ZODIAC_SIGNS.filter((sign) =>
    sign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sign.element.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950">
      
      {/* Background Subtle Stars & Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      {/* MAIN CONTAINER - BLURS OUT WHEN A HOROSCOPE SECTOR IS CLICKED */}
      <div
        className={`relative z-10 flex-1 flex flex-col transition-all duration-700 ease-in-out ${
          selectedSign ? 'blur-md brightness-50 scale-[0.99] pointer-events-none' : 'blur-0 opacity-100'
        }`}
      >
        {/* Header Navigation Bar */}
        <header className="pt-6 pb-3 px-5 text-center max-w-4xl mx-auto">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 pb-1.5">
            Daily Zodiac Forecast
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-1.5 leading-relaxed">
            Click on any sector of the rotating wheel to pop out its constellation and unlock your detailed daily horoscope reading.
          </p>

          {/* Quick Sign Selector Ribbon */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 max-w-2xl mx-auto">
            {ZODIAC_SIGNS.map((sign) => (
              <button
                key={sign.id}
                onClick={() => handleSelectSign(sign)}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium transition-all flex items-center gap-1 border cursor-pointer ${
                  selectedSign?.id === sign.id
                    ? `${sign.themeColor} scale-105 shadow-md`
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-amber-500/40 hover:text-amber-200'
                }`}
              >
                <span>{sign.symbol}</span>
                <span>{sign.name}</span>
              </button>
            ))}
          </div>
        </header>

        {/* Central Interactive Wheel Stage */}
        <section className="flex-1 flex flex-col items-center justify-center my-6 relative min-h-[420px] sm:min-h-[550px]">
          <ZodiacWheel
            selectedSignId={selectedSign?.id || null}
            onSelectSign={handleSelectSign}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
          />
        </section>

        {/* Page Footer */}
        <footer className="py-6 text-center text-xs text-slate-500 border-t border-slate-900">
          <p>© AstroLive Daily Celestial Forecast • Crafted with Precision</p>
        </footer>
      </div>

      {/* RIGHT-SIDE SLIDING HOROSCOPE DRAWER & BACKDROP OVERLAY */}
      {selectedSign && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Click Overlay */}
          <div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md animate-fadeIn transition-opacity duration-500"
            onClick={handleClose}
          />

          {/* Right-Side Panel Drawer */}
          <aside className="relative w-full max-w-xl h-full bg-slate-950/95 border-l border-amber-500/30 p-6 sm:p-8 md:p-10 shadow-[0_0_80px_rgba(245,158,11,0.2)] flex flex-col justify-between overflow-y-auto z-10 animate-slideInRight">
            
            {/* Top Close Bar */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-14 h-14 rounded-2xl border-2 ${selectedSign.themeColor} flex items-center justify-center text-3xl shadow-lg`}
                  >
                    {selectedSign.symbol}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                        {selectedSign.element} • {selectedSign.modality}
                      </span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-white mt-1">{selectedSign.name}</h2>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{selectedSign.dates}</p>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="w-11 h-11 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-300 hover:text-amber-300 flex items-center justify-center text-lg transition-all hover:rotate-90 cursor-pointer shrink-0"
                  aria-label="Close horoscope drawer"
                >
                  ✕
                </button>
              </div>

              {/* Motto Banner */}
              <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Astrological Motto</span>
                  <p className="text-lg font-serif font-bold text-amber-300 tracking-wide">"{selectedSign.motto}"</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Ruler</span>
                  <p className="text-sm font-semibold text-slate-200">
                    {selectedSign.rulerSymbol} {selectedSign.rulerName}
                  </p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-800 mt-6 gap-2">
                {[
                  { id: 'overview', label: 'Overview', icon: '✨' },
                  { id: 'love', label: 'Love', icon: '💖' },
                  { id: 'career', label: 'Career', icon: '💼' },
                  { id: 'health', label: 'Health', icon: '🌿' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`pb-3 px-3 text-sm font-medium transition-all flex items-center gap-1.5 border-b-2 cursor-pointer ${
                      activeTab === tab.id
                        ? 'border-amber-400 text-amber-300 font-bold'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content Display */}
              <div className="py-6 text-slate-200 leading-relaxed font-sans min-h-[160px]">
                {activeTab === 'overview' && (
                  <div className="space-y-4 animate-fadeIn">
                    <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
                      {selectedSign.horoscope.overview}
                    </p>
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm flex items-start gap-2">
                      <span className="text-base shrink-0">💡</span>
                      <span><strong>Cosmic Tip:</strong> {selectedSign.horoscope.cosmicTip}</span>
                    </div>
                  </div>
                )}

                {activeTab === 'love' && (
                  <div className="space-y-3 animate-fadeIn">
                    <h4 className="text-xs uppercase font-mono text-pink-400 tracking-wider">Heart & Relationships</h4>
                    <p className="text-slate-200 leading-relaxed text-base">
                      {selectedSign.horoscope.love}
                    </p>
                    <div className="mt-4 p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                      <span>Most Compatible Today:</span>
                      <span className="font-bold text-slate-200">{selectedSign.compatibleSign}</span>
                    </div>
                  </div>
                )}

                {activeTab === 'career' && (
                  <div className="space-y-3 animate-fadeIn">
                    <h4 className="text-xs uppercase font-mono text-amber-400 tracking-wider">Work & Finances</h4>
                    <p className="text-slate-200 leading-relaxed text-base">
                      {selectedSign.horoscope.career}
                    </p>
                  </div>
                )}

                {activeTab === 'health' && (
                  <div className="space-y-3 animate-fadeIn">
                    <h4 className="text-xs uppercase font-mono text-emerald-400 tracking-wider">Vitality & Well-being</h4>
                    <p className="text-slate-200 leading-relaxed text-base">
                      {selectedSign.horoscope.health}
                    </p>
                  </div>
                )}
              </div>

              {/* Astrological House & Specs Summary Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-900/80 rounded-2xl border border-slate-800 text-center text-xs">
                <div>
                  <span className="text-slate-500 block mb-1 font-mono text-[10px] uppercase">Lucky Color</span>
                  <span className="font-bold text-amber-300">{selectedSign.luckyColor}</span>
                </div>
                <div className="border-x border-slate-800">
                  <span className="text-slate-500 block mb-1 font-mono text-[10px] uppercase">Lucky Number</span>
                  <span className="font-extrabold text-lg text-amber-400">{selectedSign.luckyNumber}</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1 font-mono text-[10px] uppercase">Astrological House</span>
                  <span className="font-bold text-slate-300">{selectedSign.house.split(' ')[0]}</span>
                </div>
              </div>
            </div>

            {/* Drawer Action Footer */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-4">
              <button
                onClick={handleClose}
                className="flex-1 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 text-sm cursor-pointer"
              >
                Close & Resume Spin
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </main>
  );
}