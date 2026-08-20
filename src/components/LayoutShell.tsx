'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

/**
 * Conditionally renders the global Navbar and Footer.
 * Hides them on /store routes (which have their own StoreNavbar + StoreFooter).
 */
export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStore = pathname.startsWith('/store');

  return (
    <>
      {!isStore && <Navbar />}
      <main className="flex-1">{children}</main>
      
      {/* Floating AI Assistant Widget */}
      {!isStore && (
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            href="/chat/assistant"
            className="flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl transition hover:scale-105 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
              color: 'white',
              border: '2px solid rgba(255,255,255,0.2)'
            }}
          >
            <span className="text-xl">✨</span>
            <span className="font-extrabold text-sm tracking-wide">Astro AI</span>
          </Link>
        </div>
      )}

      {!isStore && <Footer />}
    </>
  );
}
