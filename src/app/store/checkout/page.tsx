'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export default function CheckoutPage() {
  const [success, setSuccess] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 text-center">
        <div className="max-w-md p-8 rounded-3xl border shadow-xl space-y-5" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
          <CheckCircle2 size={60} className="text-emerald-500 mx-auto" />
          <h1 className="text-3xl font-black" style={{ color: 'var(--text-primary)' }}>Order Placed!</h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Thank you for shopping at AstroLive Store. Your order has been registered and Vedic purification ritual has been initiated.
          </p>
          <Link href="/store" className="block w-full py-3 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition hover:opacity-90" style={{ background: 'var(--accent-purple)', color: 'var(--btn-primary-text)' }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: 'var(--text-muted)' }}>
        <Link href="/store" className="hover:text-primary transition">Store</Link>
        <ChevronRight size={10} />
        <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Checkout</span>
      </nav>

      <h1 className="text-3xl font-black mb-8" style={{ color: 'var(--text-primary)' }}>Billing & Delivery</h1>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left billing form details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-3xl border space-y-4" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
            <h3 className="font-extrabold text-base" style={{ color: 'var(--text-primary)' }}>Shipping Address</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>First Name</label>
                <input required type="text" className="w-full px-4 py-2 rounded-xl border bg-transparent text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Last Name</label>
                <input required type="text" className="w-full px-4 py-2 rounded-xl border bg-transparent text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Street Address</label>
              <input required type="text" className="w-full px-4 py-2 rounded-xl border bg-transparent text-sm mb-2" placeholder="House number and street name" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
              <input type="text" className="w-full px-4 py-2 rounded-xl border bg-transparent text-sm" placeholder="Apartment, suite, unit, etc. (optional)" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Town / City</label>
                <input required type="text" className="w-full px-4 py-2 rounded-xl border bg-transparent text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>State</label>
                <input required type="text" className="w-full px-4 py-2 rounded-xl border bg-transparent text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>PIN Code</label>
                <input required type="text" className="w-full px-4 py-2 rounded-xl border bg-transparent text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Phone</label>
                <input required type="tel" className="w-full px-4 py-2 rounded-xl border bg-transparent text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Email Address</label>
                <input required type="email" className="w-full px-4 py-2 rounded-xl border bg-transparent text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right side summary panel */}
        <div className="space-y-6">
          <div className="p-6 rounded-3xl border space-y-4" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
            <h3 className="font-extrabold text-base" style={{ color: 'var(--text-primary)' }}>Your Order</h3>

            <div className="space-y-3 py-3 border-b" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
              <div className="flex justify-between text-xs">
                <span>Certified Natural Yellow Sapphire x 1</span>
                <span>₹3,499</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>7 Chakra Healing Bracelet x 1</span>
                <span>₹599</span>
              </div>
            </div>

            <div className="space-y-2 text-xs py-2 border-b" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
              <div className="flex justify-between">
                <span>Cart Subtotal</span>
                <span>₹4,098</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-emerald-500 font-semibold">FREE</span>
              </div>
            </div>

            <div className="flex justify-between text-sm font-bold pt-2" style={{ color: 'var(--text-primary)' }}>
              <span>Order Total</span>
              <span>₹4,098</span>
            </div>

            {/* Payment options */}
            <div className="pt-4 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <input defaultChecked type="radio" id="cod" name="payment" className="accent-purple-500" />
                <label htmlFor="cod" className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Cash on Delivery (COD)</label>
              </div>
              <div className="flex items-center gap-2.5 opacity-60">
                <input disabled type="radio" id="online" name="payment" className="accent-purple-500" />
                <label htmlFor="online" className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>Online Credit/Debit Card/UPI</label>
              </div>
            </div>

            <button type="submit" className="w-full py-3 mt-4 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition hover:opacity-90" style={{ background: 'var(--accent-purple)', color: 'var(--btn-primary-text)' }}>
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
