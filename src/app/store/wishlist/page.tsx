'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { STORE_PRODUCTS } from '@/lib/storeData';

export default function WishlistPage() {
  const [items, setItems] = useState([
    STORE_PRODUCTS[0], // Yellow Sapphire
    STORE_PRODUCTS[4], // Nepali Rudraksha Mala
    STORE_PRODUCTS[7]  // Rose Quartz Sphere
  ]);

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-8 text-white flex items-center gap-3">
        <Heart className="text-pink-500 fill-current" /> My Wishlist
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <p className="text-sm text-slate-400">Your wishlist is empty.</p>
          <Link href="/store" className="inline-block py-3 px-8 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition">
            Browse Store
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 rounded-3xl border justify-between items-center"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <img src={item.image} className="w-16 h-16 rounded-2xl object-cover flex-shrink-0" />
              <div className="flex-1">
                <Link href={`/store/product?id=${item.id}`} className="font-bold text-xs text-white hover:text-purple-400 transition-colors block line-clamp-1">
                  {item.name}
                </Link>
                <p className="text-xs text-purple-300 font-bold mt-1">₹{item.price.toLocaleString()}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="p-2.5 rounded-xl border hover:bg-red-500/10 text-red-400 transition cursor-pointer"
                  style={{ borderColor: 'var(--border-color)' }}
                  title="Remove Item"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
