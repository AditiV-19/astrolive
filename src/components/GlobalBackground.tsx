'use client';

import React, { useMemo } from 'react';
import { useTheme } from './ThemeProvider';

function StarField() {
  const stars = useMemo(() => {
    const result = [];
    for (let i = 0; i < 180; i++) {
      const size = Math.random() < 0.6 ? 'sm' : Math.random() < 0.8 ? 'md' : 'lg';
      result.push({
        id: i,
        size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${3 + Math.random() * 4}s`,
      });
    }
    return result;
  }, []);

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
