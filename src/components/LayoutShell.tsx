'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
      {!isStore && <Footer />}
    </>
  );
}
