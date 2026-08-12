'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useSearchParams } from 'next/navigation';
import { Star, Shield, Award, Sparkles, ShoppingBag, Heart, CheckCircle2, ChevronRight, HelpCircle, ShieldAlert } from 'lucide-react';
import { STORE_PRODUCTS, COMBO_DEALS } from '@/lib/storeData';

export default function ProductDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const product = STORE_PRODUCTS.find((p) => p.id === id) || STORE_PRODUCTS[0];

  if (!product) {
    notFound();
  }

  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  // Curate related recommendations (filter by category and exclude current product)
  const relatedProducts = STORE_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  // Fallback if not enough matching category items
  const recommendations = relatedProducts.length >= 2 
    ? relatedProducts 
    : STORE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-16">
      {/* ─── Product Header Row ─── */}
      <div className="space-y-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
          <Link href="/store" className="hover:text-primary transition">Store</Link>
          <ChevronRight size={10} />
          <span className="capitalize">{product.category}</span>
          <ChevronRight size={10} />
          <span className="font-semibold text-white">{product.name}</span>
        </nav>

        {/* Main product view grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left image display */}
          <div className="space-y-4">
            <div
              className="rounded-3xl overflow-hidden aspect-square border shadow-sm relative"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span
                  className="absolute top-4 left-4 text-xs font-black uppercase px-3 py-1 rounded-full text-white"
                  style={{ background: 'var(--accent-purple)' }}
                >
                  {product.badge}
                </span>
              )}
              <span
                className="absolute top-4 right-4 text-xs font-black px-3 py-1 rounded-full text-white bg-red-500"
              >
                -{discount}% Off
              </span>
            </div>
          </div>

          {/* Right info detail details */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full w-fit"
                style={{
                  background: 'var(--hero-badge-bg)',
                  color: 'var(--accent-purple)',
                }}
              >
                {product.tag}
              </span>

              <h1 className="text-2xl sm:text-3xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-400'}
                    />
                  ))}
                </div>
                <span className="font-bold animate-pulse" style={{ color: 'var(--text-primary)' }}>{product.rating}</span>
                <span style={{ color: 'var(--text-muted)' }}>({product.reviews} customer reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-3xl font-black" style={{ color: 'var(--text-primary)' }}>
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="line-through text-base" style={{ color: 'var(--text-muted)' }}>
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {product.description}
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div
                  className="flex items-center gap-3 p-3 rounded-xl border text-xs"
                  style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
                >
                  <Award className="text-amber-500 w-5 h-5 flex-shrink-0" />
                  <div>
                    <div className="font-bold" style={{ color: 'var(--text-primary)' }}>100% Certified Authentic</div>
                    <div style={{ color: 'var(--text-muted)' }}>Lab certificate included</div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 p-3 rounded-xl border text-xs"
                  style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
                >
                  <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent-purple)' }} />
                  <div>
                    <div className="font-bold" style={{ color: 'var(--text-primary)' }}>Vedic Energized</div>
                    <div style={{ color: 'var(--text-muted)' }}>Rituals done by Astrologers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart checkout elements */}
            <div className="space-y-4 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center rounded-xl border overflow-hidden"
                  style={{ borderColor: 'var(--border-color)', background: 'var(--search-bg)' }}
                >
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-2 hover:bg-white/5 transition font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-2 hover:bg-white/5 transition font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-xl uppercase tracking-wider text-xs shadow-md transition hover:opacity-90 cursor-pointer"
                  style={{
                    background: 'var(--accent-purple)',
                    color: 'var(--btn-primary-text)',
                  }}
                >
                  <ShoppingBag size={14} />
                  {addedToCart ? 'Added Successfully!' : 'Add to Cart'}
                </button>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-3 rounded-xl border transition cursor-pointer hover:bg-white/5"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: isWishlisted ? '#ec4899' : 'var(--text-primary)',
                    background: 'var(--search-bg)',
                  }}
                  aria-label="Wishlist"
                >
                  <Heart size={18} className={isWishlisted ? 'fill-current' : ''} />
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <CheckCircle2 size={13} className="text-emerald-500" />
                <span>In stock, ready to dispatch within 24 hours.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Detailed Benefits & Protections Section ─── */}
      <section className="space-y-6">
        <h2 className="text-xl font-extrabold border-b pb-2" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}>
          Benefits & Spiritual Protections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl space-y-2 border" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold mb-3">🛡️</div>
            <h4 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>How it Protects You</h4>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Absorbs negative energy signatures in your surroundings and builds a subtle auric shield against hostile cosmic alignments.
            </p>
          </div>
          <div className="p-5 rounded-2xl space-y-2 border" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold mb-3">✨</div>
            <h4 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>Why it is Used</h4>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Astrologically recommended to align planetary frequencies in your birth chart, enhancing strength, peace, clarity, and wealth creation.
            </p>
          </div>
          <div className="p-5 rounded-2xl space-y-2 border" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold mb-3">📜</div>
            <h4 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>Vedic Certificate</h4>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Shipped with a physical lab purity report confirming material legitimacy and Vedic ritual siddhi card tags.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Combo Offers ─── */}
      <section className="space-y-6">
        <h2 className="text-xl font-extrabold border-b pb-2" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}>
          Recommended Combo Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMBO_DEALS.slice(0, 2).map((combo) => (
            <div
              key={combo.id}
              className="rounded-2xl overflow-hidden flex flex-col sm:flex-row border group hover:shadow-lg transition"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div className="sm:w-[40%] h-40 sm:h-auto overflow-hidden bg-slate-800">
                <img src={combo.image} alt={combo.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 w-fit">
                  {combo.tag}
                </span>
                <h4 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{combo.name}</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-black" style={{ color: 'var(--text-primary)' }}>₹{combo.comboPrice.toLocaleString()}</span>
                  <span className="line-through text-xs" style={{ color: 'var(--text-muted)' }}>₹{combo.originalPrice.toLocaleString()}</span>
                </div>
                <button
                  className="w-full py-2 text-white font-bold rounded-lg text-[10px] uppercase tracking-wider transition hover:opacity-90"
                  style={{ background: 'var(--accent-purple)', color: 'var(--btn-primary-text)' }}
                >
                  Buy Bundle
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Explore More Recommendations ─── */}
      <section className="space-y-6">
        <h2 className="text-xl font-extrabold border-b pb-2" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}>
          Explore More Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {recommendations.map((rec) => (
            <Link
              key={rec.id}
              href={`/store/product?id=${rec.id}`}
              className="p-3 rounded-2xl border flex flex-col justify-between group hover:shadow-md transition"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <div className="rounded-xl overflow-hidden aspect-square mb-2 bg-slate-800">
                <img src={rec.image} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <h4 className="font-bold text-xs line-clamp-1 group-hover:text-purple-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                {rec.name}
              </h4>
              <p className="text-xs font-black mt-1" style={{ color: 'var(--accent-purple)' }}>₹{rec.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── User Reviews Section ─── */}
      <section className="space-y-6">
        <h2 className="text-xl font-extrabold border-b pb-2" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}>
          User Reviews ({product.reviews})
        </h2>
        <div className="space-y-4">
          {[
            { name: 'Karan Malhotra', date: '3 days ago', text: 'Highly recommend this product! It arrived fully certified and the energy level was amazing.', rating: 5 },
            { name: 'Saraswati Sen', date: '1 week ago', text: 'Beautiful craftsmanship and fast shipping. I checked the certification, it is completely authentic.', rating: 5 },
            { name: 'Vijay Pillai', date: '2 weeks ago', text: 'A great item. Vedic activation card was present in the box. Excellent quality.', rating: 4 }
          ].map((rev, i) => (
            <div key={i} className="p-5 rounded-2xl border space-y-3" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold block" style={{ color: 'var(--text-primary)' }}>{rev.name}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{rev.date}</span>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, rIdx) => (
                    <Star
                      key={rIdx}
                      size={12}
                      className={rIdx < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-400'}
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {rev.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
