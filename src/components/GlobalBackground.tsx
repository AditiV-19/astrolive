'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useTheme } from './ThemeProvider';

// Simple deterministic pseudo-random generator based on index seed
function pseudoRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function StarField() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo(() => {
    const result = [];
    for (let i = 0; i < 180; i++) {
      const r1 = pseudoRandom(i * 5 + 1);
      const r2 = pseudoRandom(i * 5 + 2);
      const r3 = pseudoRandom(i * 5 + 3);
      const r4 = pseudoRandom(i * 5 + 4);
      const r5 = pseudoRandom(i * 5 + 5);

      const size = r1 < 0.6 ? 'sm' : r2 < 0.8 ? 'md' : 'lg';
      result.push({
        id: i,
        size,
        left: `${(r3 * 100).toFixed(2)}%`,
        top: `${(r4 * 100).toFixed(2)}%`,
        delay: `${(r5 * 6).toFixed(2)}s`,
        duration: `${(3 + r1 * 4).toFixed(2)}s`,
      });
    }
    return result;
  }, []);

  if (!mounted) {
    return null; // Avoid rendering un-hydrated mismatch on server vs client
  }

  return (
    <div className="star-field" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      {/* Nebula glow spots */}
      <div
        className="nebula-glow"
        style={{
          width: '500px',
          height: '500px',
          top: '5%',
          right: '10%',
          background: 'radial-gradient(circle, #7c3aed, transparent)',
        }}
      />
      <div
        className="nebula-glow"
        style={{
          width: '400px',
          height: '400px',
          bottom: '15%',
          left: '3%',
          background: 'radial-gradient(circle, #4f46e5, transparent)',
        }}
      />
      <div
        className="nebula-glow"
        style={{
          width: '300px',
          height: '300px',
          top: '50%',
          left: '45%',
          background: 'radial-gradient(circle, #a855f7, transparent)',
          opacity: 0.05,
        }}
      />
      <div
        className="nebula-glow"
        style={{
          width: '350px',
          height: '350px',
          top: '70%',
          right: '25%',
          background: 'radial-gradient(circle, #6366f1, transparent)',
          opacity: 0.06,
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star star--${star.size}`}
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      {/* Constellation lines */}
      {[
        { left: '12%', top: '25%', width: '80px', rotate: '35deg' },
        { left: '18%', top: '30%', width: '60px', rotate: '-15deg' },
        { left: '70%', top: '15%', width: '100px', rotate: '20deg' },
        { left: '75%', top: '22%', width: '55px', rotate: '-40deg' },
        { left: '45%', top: '60%', width: '70px', rotate: '10deg' },
        { left: '50%', top: '55%', width: '90px', rotate: '-25deg' },
        { left: '30%', top: '75%', width: '65px', rotate: '45deg' },
        { left: '85%', top: '70%', width: '50px', rotate: '-10deg' },
        { left: '8%', top: '65%', width: '75px', rotate: '30deg' },
        { left: '60%', top: '85%', width: '85px', rotate: '-20deg' },
        { left: '25%', top: '45%', width: '60px', rotate: '55deg' },
        { left: '90%', top: '40%', width: '70px', rotate: '-35deg' },
      ].map((line, i) => (
        <div
          key={i}
          className="constellation-line"
          style={{
            left: line.left,
            top: line.top,
            width: line.width,
            transform: `rotate(${line.rotate})`,
          }}
        />
      ))}
    </div>
  );
}

export default function GlobalBackground() {
  const { theme } = useTheme();

  if (theme !== 'dark') return null;

  return <StarField />;
}

