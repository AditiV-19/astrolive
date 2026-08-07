'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircleMore } from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(145.78deg, #b18bfd 13.8%, #6846eb 93.2%)',
        fontFamily: 'Poppins, sans-serif',
      }}
      className="w-full mt-16 pt-12 pb-8 text-white"
    >
      <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto space-y-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pb-12 border-b border-white">
          {/* Column 1: Logo & Buttons */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="https://media.chingari.io/apipublic/chingari-web-assets/images/astro/astro-icon.png"
                alt="Astro"
                className="w-9 h-9 object-contain"
              />
              <span className="font-extrabold text-2xl tracking-wide text-white">
                ASTROLIVE
              </span>
            </Link>

            <div className="space-y-4 pt-2">
              <Link
                href="/chat"
                className="h-[60px] min-w-[280px] max-w-[360px] w-full bg-white text-slate-900 font-extrabold px-6 rounded-[40px] text-xs shadow-md hover:bg-slate-50 transition flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <MessageCircleMore className="w-5 h-5 text-[#f26d85]" />
                  <span>Chat With <span className="text-[#f26d85]">Astrologer</span></span>
                </div>
                <span className="text-[#f26d85] font-bold text-xs flex items-center gap-1">
                  (<img src="/rupee-icon-orange.svg" alt="rupee" className="w-3.5 h-3.5" /> 10/min)
                </span>
              </Link>

              <Link
                href="/call"
                className="h-[60px] min-w-[280px] max-w-[360px] w-full bg-white text-slate-900 font-extrabold px-6 rounded-[40px] text-xs shadow-md hover:bg-slate-50 transition flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="w-4 h-4 text-[#f26d85]" />
                  <span>Talk to <span className="text-[#f26d85]">Astrologer</span></span>
                </div>
                <span className="text-[#f26d85] font-bold text-xs flex items-center gap-1">
                  (<img src="/rupee-icon-orange.svg" alt="rupee" className="w-3.5 h-3.5" /> 15/min)
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: HOME */}
          <div className="space-y-3">
            <h4 className="font-bold text-base lg:text-lg uppercase text-white leading-loose">
              HOME
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm text-white font-normal">
              <li className="relative flex items-center gap-2 cursor-pointer hover:underline">
                <Link href="/pooja">Book a Pooja</Link>
                <span
                  style={{
                    background: 'linear-gradient(125.75deg, #ffa767 -8.85%, #eb468b 90.19%)',
                  }}
                  className="text-white text-[9px] px-2 py-0.5 rounded-full font-medium capitalize"
                >
                  New
                </span>
              </li>
              <li className="cursor-pointer hover:underline"><Link href="/panchang">Today’s Panchang</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/kundli-matching">Kundli’s Match</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/free-kundli">Free Kundli</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/love-calculator">Love Calculator</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: HOROSCOPE */}
          <div className="space-y-3">
            <h4 className="font-bold text-base lg:text-lg uppercase text-white leading-loose">
              HOROSCOPE
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm text-white font-normal">
              <li className="cursor-pointer hover:underline"><Link href="/horoscope?tab=today">Daily HOROSCOPE</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/horoscope?tab=monthly">Monthly HOROSCOPE</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/horoscope?tab=yearly">Yearly HOROSCOPE</Link></li>
            </ul>
          </div>

          {/* Column 4: LIVE ASTROLOGY */}
          <div className="space-y-3">
            <h4 className="font-bold text-base lg:text-lg uppercase text-white leading-loose">
              LIVE ASTROLOGY
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm text-white font-normal">
              <li className="cursor-pointer hover:underline"><Link href="/live">live session</Link></li>
              <li className="cursor-pointer hover:underline"><Link href="/call">Video Call</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center font-medium text-white text-sm lg:text-base tracking-[2px] pt-4">
          @2026 Tech4Billion Media Pvt. Ltd. All Rights Reserved
        </p>

        {/* Policy Links */}
        <div className="flex flex-wrap items-center justify-center text-xs lg:text-sm text-white font-normal gap-2 tracking-wider">
          <Link href="/blog" className="cursor-pointer hover:underline">Privacy Policy</Link>
          <span className="px-1">|</span>
          <Link href="/blog" className="cursor-pointer hover:underline">Refund Policy</Link>
          <span className="px-1">|</span>
          <Link href="/blog" className="cursor-pointer hover:underline">Terms and Conditions</Link>
          <span className="px-1">|</span>
          <Link href="/blog" className="cursor-pointer hover:underline">About Us</Link>
          <span className="px-1">|</span>
          <Link href="/blog" className="cursor-pointer hover:underline">Contact Us</Link>
        </div>

        {/* Address */}
        <div className="text-center text-[11px] lg:text-xs text-white/90 font-normal space-y-1">
          <p>GST Number: 29AAHCT9333P1ZF</p>
          <p>Address: 62/63 The Pavilion, WeWork The Pavilion, Church Street, Bangalore, Karnataka, 560001</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <a href="https://www.instagram.com/astrolive_future" target="_blank" rel="noreferrer">
            <img src="/instagram.svg" alt="instagram" className="w-10 h-10 hover:scale-110 transition cursor-pointer" />
          </a>
          <a href="mailto:help@astrolive.app" target="_blank" rel="noreferrer">
            <img src="/mail.svg" alt="email" className="w-10 h-10 hover:scale-110 transition cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61552253798986" target="_blank" rel="noreferrer">
            <img src="/facebook.svg" alt="facebook" className="w-10 h-10 hover:scale-110 transition cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
}
