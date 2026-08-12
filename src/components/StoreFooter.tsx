'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const footerSections = [
  {
    title: 'Shop by Category',
    links: [
      { name: 'Gemstones', href: '/store' },
      { name: 'Rudraksha', href: '/store' },
      { name: 'Crystals', href: '/store' },
      { name: 'Yantras', href: '/store' },
      { name: 'Bracelets', href: '/store' },
      { name: 'Vastu Products', href: '/store' },
      { name: 'Pooja Essentials', href: '/store' },
      { name: 'Spiritual Combos', href: '/store' },
    ],
  },
  {
    title: 'Shop by Purpose',
    links: [
      { name: 'Wealth & Prosperity', href: '/store' },
      { name: 'Love & Relationships', href: '/store' },
      { name: 'Health & Healing', href: '/store' },
      { name: 'Career & Success', href: '/store' },
      { name: 'Protection & Safety', href: '/store' },
      { name: 'Spiritual Growth', href: '/store' },
    ],
  },
  {
    title: 'Customer Support',
    links: [
      { name: 'Track Your Order', href: '/store' },
      { name: 'Returns & Exchange', href: '/store' },
      { name: 'FAQs', href: '/store' },
      { name: 'Contact Us', href: '/store' },
      { name: 'Shipping Policy', href: '/store' },
      { name: 'Bulk Orders', href: '/store' },
    ],
  },
  {
    title: 'About',
    links: [
      { name: 'About AstroLive Store', href: '/store' },
      { name: 'Certifications', href: '/store' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/store' },
      { name: 'Media & Press', href: '/store' },
    ],
  },
];

export default function StoreFooter() {
  const { theme } = useTheme();

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
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-10"
          style={{ borderBottom: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` }}
        >

          {/* Column 1: Brand + Socials */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/store" className="flex items-center gap-2 mb-2">
              <img
                src="https://media.chingari.io/apipublic/chingari-web-assets/images/astro/astro-icon.png"
                alt="Store"
                className="w-9 h-9 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span
                  className="font-extrabold text-xl tracking-wide notranslate"
                  style={{ color: theme === 'dark' ? '#fff' : '#1a1025' }}
                >
                  ASTROLIVE
                </span>
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: 'var(--accent-purple)' }}
                >
                  Store
                </span>
              </div>
            </Link>

            <p
              className="text-xs leading-relaxed"
              style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(26,16,37,0.6)' }}
            >
              India&apos;s most trusted astrology store. 100% authentic, lab-certified gemstones, energized Rudraksha, healing crystals, and sacred Vastu products.
            </p>

            {/* Trust Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              {['🏅 Certified', '🔮 Energized', '🚚 Free Shipping'].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: theme === 'dark' ? 'rgba(200,160,255,0.1)' : 'rgba(124,58,237,0.08)',
                    color: 'var(--accent-purple)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a href="https://www.instagram.com/astrolive_future" target="_blank" rel="noreferrer">
                <img src="/instagram.svg" alt="instagram" className="w-8 h-8 hover:scale-110 transition cursor-pointer" />
              </a>
              <a href="mailto:help@astrolive.app" target="_blank" rel="noreferrer">
                <img src="/mail.svg" alt="email" className="w-8 h-8 hover:scale-110 transition cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552253798986" target="_blank" rel="noreferrer">
                <img src="/facebook.svg" alt="facebook" className="w-8 h-8 hover:scale-110 transition cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Columns 2–5: Footer link sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4
                className="font-bold text-sm uppercase"
                style={{ color: theme === 'dark' ? '#fff' : '#1a1025' }}
              >
                {section.title}
              </h4>
              <ul
                className="space-y-2 text-xs lg:text-sm"
                style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(26,16,37,0.7)' }}
              >
                {section.links.map((link) => (
                  <li key={link.name} className="cursor-pointer hover:underline">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 pt-0">
          <div className="space-y-2">
            <p
              className="text-xs lg:text-sm font-medium"
              style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(26,16,37,0.5)' }}
            >
              ©2026 AstroLive Store — A Division of Tech4Billion Media Pvt. Ltd. All Rights Reserved
            </p>
          </div>
          <div
            className="flex flex-wrap items-center gap-2 text-xs lg:text-sm"
            style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(26,16,37,0.6)' }}
          >
            <Link href="/store" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="/store" className="hover:underline">Refund Policy</Link>
            <span>|</span>
            <Link href="/store" className="hover:underline">Terms and Conditions</Link>
            <span>|</span>
            <Link href="/store" className="hover:underline">Shipping Policy</Link>
            <span>|</span>
            <Link href="/" className="hover:underline" style={{ color: 'var(--accent-purple)' }}>
              Go to AstroLive →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
