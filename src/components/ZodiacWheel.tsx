'use client';

import React, { useState, useEffect } from 'react';
import { ZODIAC_SIGNS, ZodiacSign } from '@/lib/zodiacData';

interface ZodiacWheelProps {
  selectedSignId: string | null;
  onSelectSign: (sign: ZodiacSign) => void;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
}

export const ZodiacWheel: React.FC<ZodiacWheelProps> = ({
  selectedSignId,
  onSelectSign,
  isPaused,
  setIsPaused,
}) => {
  const [hoveredSignId, setHoveredSignId] = useState<string | null>(null);

  // Geometry Constants for SVG rendering
  const outerRadius = 270;
  const innerRadius = 80;
  const numSectors = 12;
  const angleStep = 360 / numSectors; // 30 degrees per sector

  // Helper to convert polar coordinates to Cartesian (degrees to radians, rotated -90deg so 0 starts at top)
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  // Helper to construct an SVG pie wedge sector path string
  const createSectorPath = (
    centerX: number,
    centerY: number,
    innerR: number,
    outerR: number,
    startAngle: number,
    endAngle: number
  ) => {
    const startOuter = polarToCartesian(centerX, centerY, outerR, startAngle);
    const endOuter = polarToCartesian(centerX, centerY, outerR, endAngle);
    const startInner = polarToCartesian(centerX, centerY, innerR, startAngle);
    const endInner = polarToCartesian(centerX, centerY, innerR, endAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return [
      `M ${startOuter.x} ${startOuter.y}`,
      `A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
      `L ${endInner.x} ${endInner.y}`,
      `A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}`,
      'Z',
    ].join(' ');
  };

  return (
    <div className="relative flex items-center justify-center p-4 select-none">
      {/* Outer Glow Halo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 blur-3xl pointer-events-none" />

      {/* SVG Zodiac Wheel Container */}
      <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[580px] md:h-[580px] lg:w-[620px] lg:h-[620px] transition-all duration-700">
        
        <svg
          viewBox="-300 -300 600 600"
          className="w-full h-full drop-shadow-[0_0_35px_rgba(245,158,11,0.2)]"
        >
          <defs>
            {/* Sector Fill Gradients */}
            <radialGradient id="wedgeNormal" cx="0" cy="0" r="100%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#1e293b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#090d16" stopOpacity="0.98" />
            </radialGradient>

            <radialGradient id="wedgeHover" cx="0" cy="0" r="100%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#451a03" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#78350f" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2e1005" stopOpacity="0.98" />
            </radialGradient>

            <radialGradient id="wedgeSelected" cx="0" cy="0" r="100%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#78350f" stopOpacity="0.98" />
              <stop offset="60%" stopColor="#b45309" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#451a03" stopOpacity="1" />
            </radialGradient>

            {/* Glowing Filter */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ROTATING GROUP (Contains background concentric circles and all 12 sectors) */}
          <g
            className={`transition-all duration-1000 ${
              isPaused || selectedSignId ? '[animation-play-state:paused]' : ''
            }`}
            style={{
              animation: 'spin 120s linear infinite',
              transformOrigin: '0px 0px',
            }}
          >
            {/* Concentric Guide Rings */}
            <circle r={outerRadius} fill="none" stroke="#d97706" strokeWidth="2.5" strokeOpacity="0.6" />
            <circle r={outerRadius - 32} fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
            <circle r={170} fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" />
            <circle r={120} fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="2 2" />
            <circle r={innerRadius} fill="none" stroke="#d97706" strokeWidth="2" strokeOpacity="0.7" />

            {/* Render 12 Zodiac Wedge Sectors */}
            {ZODIAC_SIGNS.map((sign, index) => {
              const startAngle = index * angleStep;
              const endAngle = (index + 1) * angleStep;
              const midAngle = startAngle + angleStep / 2;
              const midRad = ((midAngle - 90) * Math.PI) / 180;

              const isSelected = selectedSignId === sign.id;
              const isHovered = hoveredSignId === sign.id;

              // Pop-out Offset: calculate radial pop out vector for selected sector
              const popDistance = isSelected ? 32 : isHovered ? 10 : 0;
              const popX = popDistance * Math.cos(midRad);
              const popY = popDistance * Math.sin(midRad);

              // Radii for text / symbol placements inside the wedge
              const mottoPos = polarToCartesian(0, 0, 252, midAngle);
              const glyphPos = polarToCartesian(0, 0, 205, midAngle);
              const namePos = polarToCartesian(0, 0, 178, midAngle);
              const housePos = polarToCartesian(0, 0, 142, midAngle);
              const rulerPos = polarToCartesian(0, 0, 100, midAngle);

              return (
                <g
                  key={sign.id}
                  transform={`translate(${popX}, ${popY})`}
                  className="transition-transform duration-500 ease-out cursor-pointer group"
                  onClick={() => onSelectSign(sign)}
                  onMouseEnter={() => setHoveredSignId(sign.id)}
                  onMouseLeave={() => setHoveredSignId(null)}
                >
                  {/* Wedge Sector Base Arc */}
                  <path
                    d={createSectorPath(0, 0, innerRadius, outerRadius, startAngle, endAngle)}
                    fill={isSelected ? 'url(#wedgeSelected)' : isHovered ? 'url(#wedgeHover)' : 'url(#wedgeNormal)'}
                    stroke={isSelected ? '#fbbf24' : isHovered ? '#f59e0b' : '#334155'}
                    strokeWidth={isSelected ? '3' : isHovered ? '2' : '1'}
                    filter={isSelected ? 'url(#goldGlow)' : undefined}
                    className="transition-all duration-300"
                  />

                  {/* Outer Rim Motto ("I Act", "I Have", etc.) - All facing outwards */}
                  <g transform={`translate(${mottoPos.x}, ${mottoPos.y}) rotate(${midAngle})`}>
                    <text
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isSelected ? '#fef08a' : '#cbd5e1'}
                      fontSize="9.5"
                      fontWeight="bold"
                      letterSpacing="1"
                      className="font-serif tracking-widest uppercase transition-colors"
                    >
                      {sign.motto}
                    </text>
                  </g>

                  {/* Zodiac Symbol Glyph Circle */}
                  <g transform={`translate(${glyphPos.x}, ${glyphPos.y})`}>
                    <circle
                      r="16"
                      fill="#0f172a"
                      stroke={isSelected ? '#fbbf24' : isHovered ? sign.colorHex : '#475569'}
                      strokeWidth={isSelected || isHovered ? '2' : '1'}
                      className="transition-colors duration-300"
                    />
                    <text
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isSelected ? '#ffffff' : sign.colorHex}
                      fontSize="17"
                      fontWeight="bold"
                      className="transition-all duration-300"
                    >
                      {sign.symbol}
                    </text>
                  </g>

                  {/* Sign Name - Facing Outwards */}
                  <g transform={`translate(${namePos.x}, ${namePos.y}) rotate(${midAngle})`}>
                    <text
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isSelected ? '#ffffff' : '#e2e8f0'}
                      fontSize="10"
                      fontWeight="600"
                      className="font-sans transition-colors"
                    >
                      {sign.name}
                    </text>
                  </g>

                  {/* House & Modality Details - Facing Outwards */}
                  <g transform={`translate(${housePos.x}, ${housePos.y}) rotate(${midAngle})`}>
                    <text
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isSelected ? '#fde047' : '#94a3b8'}
                      fontSize="7"
                      fontWeight="500"
                      className="font-mono transition-colors"
                    >
                      {sign.house.split(' ')[0]} {sign.modality[0]}
                    </text>
                  </g>

                  {/* Ruling Planet Symbol Ring */}
                  <g transform={`translate(${rulerPos.x}, ${rulerPos.y})`}>
                    <circle
                      r="9"
                      fill="#1e293b"
                      stroke={isSelected ? '#f59e0b' : '#334155'}
                      strokeWidth="1"
                    />
                    <text
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isSelected ? '#fbbf24' : '#fbbf24'}
                      fontSize="9"
                      fontWeight="bold"
                    >
                      {sign.rulerSymbol}
                    </text>
                  </g>

                  {/* Radial Divider Lines */}
                  <line
                    x1={polarToCartesian(0, 0, innerRadius, startAngle).x}
                    y1={polarToCartesian(0, 0, innerRadius, startAngle).y}
                    x2={polarToCartesian(0, 0, outerRadius, startAngle).x}
                    y2={polarToCartesian(0, 0, outerRadius, startAngle).y}
                    stroke="#475569"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  />
                </g>
              );
            })}
          </g>

          {/* STATIC CENTRAL NIGHT SKY CORE WITH ASTROLIVE LOGO */}
          <g className="cursor-pointer" onClick={() => setIsPaused(!isPaused)}>
            {/* Center Background Night Sky Circle */}
            <circle r={innerRadius - 4} fill="#030712" stroke="#d97706" strokeWidth="2" />
            <circle r={innerRadius - 10} fill="#090d16" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />


            {/* AstroLive Official Logo Image */}
            <image
              href="https://media.chingari.io/apipublic/chingari-web-assets/images/astro/astro-icon.png"
              x="-47"
              y="-50"
              width="100"
              height="100"
              className="filter drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]"
            />

          </g>
        </svg>

        {/* Floating Hint Pill */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs px-3 py-1 rounded-full backdrop-blur-md shadow-lg flex items-center gap-1.5 whitespace-nowrap pointer-events-none">
          <span>Click any sign sector to reveal forecast</span>
        </div>
      </div>
    </div>
  );
};
