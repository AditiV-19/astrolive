'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { STORE_PRODUCTS } from '@/lib/storeData';

export default function CartPage() {
  const router = useRouter();
  const [items, setItems] = useState([
    { product: STORE_PRODUCTS[0], quantity: 1 }, // Yellow Sapphire
    { product: STORE_PRODUCTS[12], quantity: 1 } // 7 Chakra bracelet
  ]);

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  const handleQuantity = (id: string, q: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, quantity: Math.max(1, q) } : item
      )
    );
  };

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleProceedCheckout = () => {
    const isLoggedIn = localStorage.getItem('astrolive-logged-in') === 'true';
    if (!isLoggedIn) {
      localStorage.setItem('login-redirect-url', '/store/checkout');
      router.push('/store/login');
    } else {
      router.push('/store/checkout');
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-8 text-white flex items-center gap-3">
        <ShoppingBag className="text-purple-400" /> Shopping Cart
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <p className="text-sm text-slate-400">Your shopping cart is empty.</p>
          <Link href="/store" className="inline-block py-3 px-8 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition">
            Browse Store
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart list */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-4 rounded-3xl border justify-between items-center"
                style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
              >
                <img src={item.product.image} className="w-16 h-16 rounded-2xl object-cover flex-shrink-0" />
                <div className="flex-1">
                  <Link href={`/store/product?id=${item.product.id}`} className="font-bold text-xs text-white hover:text-purple-400 transition-colors block line-clamp-1">
                    {item.product.name}
                  </Link>
                  <p className="text-xs text-purple-300 font-bold mt-1">₹{item.product.price.toLocaleString()}</p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Quantity Control */}
                  <div className="flex items-center border rounded-xl overflow-hidden text-xs" style={{ borderColor: 'var(--border-color)' }}>
                    <button onClick={() => handleQuantity(item.product.id, item.quantity - 1)} className="px-2.5 py-1 hover:bg-white/5">-</button>
                    <span className="px-3 py-1 font-bold text-white">{item.quantity}</span>
                    <button onClick={() => handleQuantity(item.product.id, item.quantity + 1)} className="px-2.5 py-1 hover:bg-white/5">+</button>
                  </div>

                  <button
                    onClick={() => handleRemove(item.product.id)}
                    className="p-2 rounded-xl border hover:bg-red-500/10 text-red-400 transition cursor-pointer"
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Info */}
          <div className="p-6 rounded-3xl border space-y-4 h-fit" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
            <h3 className="font-extrabold text-white text-base">Cart Summary</h3>

            <div className="flex justify-between text-xs py-2 border-b" style={{ borderColor: 'var(--border-color)' }}>
              <span>Subtotal:</span>
              <span className="font-bold text-white">₹{subtotal.toLocaleString()}</span>
            </div>

            <button
              onClick={handleProceedCheckout}
              className="w-full flex items-center justify-center gap-2 font-bold px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs uppercase tracking-wider transition cursor-pointer"
            >
              Proceed to Checkout
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
