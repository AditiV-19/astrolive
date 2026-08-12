'use client';

import React, { useState } from 'react';
import StoreNavbar from '@/components/StoreNavbar';
import StoreFooter from '@/components/StoreFooter';
import Link from 'next/link';
import { Heart, ShoppingBag, X, Trash2, ArrowRight } from 'lucide-react';

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Hardcode simple state list of items with removal support in drawers
  const [wishlistItems, setWishlistItems] = useState([
    { id: 'p1', name: 'Certified Natural Yellow Sapphire', price: 3499, image: 'https://images.unsplash.com/photo-1551122089-4e3e72477432?w=80&h=80&fit=crop' },
    { id: 'p5', name: '5 Mukhi Nepali Rudraksha Mala', price: 1299, image: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=80&h=80&fit=crop' }
  ]);

  const [cartItems, setCartItems] = useState([
    { id: 'p1', name: 'Certified Natural Yellow Sapphire', price: 3499, quantity: 1, image: 'https://images.unsplash.com/photo-1551122089-4e3e72477432?w=80&h=80&fit=crop' },
    { id: 'p13', name: '7 Chakra Healing Gemstone Bracelet', price: 599, quantity: 1, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=80&h=80&fit=crop' }
  ]);

  const removeWishlist = (id: string) => {
    setWishlistItems((prev) => prev.filter((x) => x.id !== id));
  };

  const removeCart = (id: string) => {
    setCartItems((prev) => prev.filter((x) => x.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <StoreNavbar
        onWishlistClick={() => setWishlistOpen(true)}
        onCartClick={() => setCartOpen(true)}
        cartCount={cartItems.length}
        wishlistCount={wishlistItems.length}
      />
      <div className="flex-1">{children}</div>
      <StoreFooter />

      {/* Wishlist Drawer sliding in from right covering ~40% width */}
      {wishlistOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
          {/* Backdrop Click */}
          <div className="absolute inset-0 -z-10" onClick={() => setWishlistOpen(false)} />
          
          <aside className="w-full sm:w-[40%] h-full flex flex-col justify-between p-6 shadow-2xl animate-slideInRight" style={{ background: 'var(--card-bg)', borderLeft: '1px solid var(--card-border)' }}>
            <div>
              <div className="flex items-center justify-between pb-4 border-b mb-6" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-2">
                  <Heart className="text-pink-500 fill-current" size={20} />
                  <h3 className="font-extrabold text-base text-white">Your Wishlist</h3>
                </div>
                <button onClick={() => setWishlistOpen(false)} className="p-1 rounded-full hover:bg-white/5 transition" style={{ color: 'var(--text-primary)' }}>
                  <X size={20} />
                </button>
              </div>

              {wishlistItems.length === 0 ? (
                <p className="text-xs text-slate-400 py-6">Wishlist is empty.</p>
              ) : (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border relative group" style={{ borderColor: 'var(--card-border)' }}>
                      <img src={item.image} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs text-white truncate">{item.name}</h4>
                        <p className="text-[11px] text-purple-300 font-bold mt-0.5">₹{item.price.toLocaleString()}</p>
                      </div>
                      <button onClick={() => removeWishlist(item.id)} className="p-1.5 rounded-lg border hover:bg-red-500/10 text-red-400 transition" style={{ borderColor: 'var(--border-color)' }}>
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 border-t space-y-3" style={{ borderColor: 'var(--border-color)' }}>
              <Link href="/store/wishlist" onClick={() => setWishlistOpen(false)} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition block text-center">
                View Entire Wishlist
              </Link>
              <button onClick={() => setWishlistOpen(false)} className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-xs transition">
                Close Panel
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Cart Drawer sliding in from right covering ~40% width */}
      {cartOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
          {/* Backdrop Click */}
          <div className="absolute inset-0 -z-10" onClick={() => setCartOpen(false)} />

          <aside className="w-full sm:w-[40%] h-full flex flex-col justify-between p-6 shadow-2xl animate-slideInRight" style={{ background: 'var(--card-bg)', borderLeft: '1px solid var(--card-border)' }}>
            <div>
              <div className="flex items-center justify-between pb-4 border-b mb-6" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-2">
                  <ShoppingBag className="text-purple-400" size={20} />
                  <h3 className="font-extrabold text-base text-white">Your Shopping Cart</h3>
                </div>
                <button onClick={() => setCartOpen(false)} className="p-1 rounded-full hover:bg-white/5 transition" style={{ color: 'var(--text-primary)' }}>
                  <X size={20} />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <p className="text-xs text-slate-400 py-6">Your shopping cart is empty.</p>
              ) : (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border relative group" style={{ borderColor: 'var(--card-border)' }}>
                      <img src={item.image} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs text-white truncate">{item.name}</h4>
                        <p className="text-[11px] text-purple-300 font-bold mt-0.5">{item.quantity} x ₹{item.price.toLocaleString()}</p>
                      </div>
                      <button onClick={() => removeCart(item.id)} className="p-1.5 rounded-lg border hover:bg-red-500/10 text-red-400 transition" style={{ borderColor: 'var(--border-color)' }}>
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 border-t space-y-3" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                <span>Subtotal:</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <Link href="/store/cart" onClick={() => setCartOpen(false)} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition block text-center">
                View Entire Cart
              </Link>
              <button onClick={() => setCartOpen(false)} className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-xs transition">
                Close Panel
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
