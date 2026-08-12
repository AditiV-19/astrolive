'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Star, ShoppingBag, ChevronLeft, ChevronRight, Check, ArrowRight, Sparkles } from 'lucide-react';
import {
  STORE_PRODUCTS,
  STORE_CATEGORIES,
  COMBO_DEALS,
  SHOP_BY_PURPOSE,
  TESTIMONIALS,
  WHY_US,
  Product,
} from '@/lib/storeData';

// Slideshow images for product/collection presentation mode (transitions every 5-6s)
const PRESENTATION_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1200&h=600&fit=crop',
    title: 'Divine Amethyst Geode Crystals',
    description: 'Banish negative aura. Perfect for living rooms and healing centers.',
    tag: 'Healing Energies 🌿'
  },
  {
    image: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=1200&h=600&fit=crop',
    title: 'Sacred Nepali Rudraksha Malas',
    description: 'Hand-picked original beads from Nepal, Vedic energized with pure mantras.',
    tag: 'Vedic Authenticity 🙏'
  },
  {
    image: 'https://images.unsplash.com/photo-1551122089-4e3e72477432?w=1200&h=600&fit=crop',
    title: 'Precious & Semi-precious Gemstones',
    description: 'Lab-certified natural stones aligned to your birth chart requirements.',
    tag: 'Lab Certified 📜'
  }
];

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-8 md:mb-10">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
          {subtitle}
        </p>
      )}
      <div
        className="mx-auto mt-4 w-16 h-1 rounded-full"
        style={{ background: 'var(--accent-purple)' }}
      />
    </div>
  );
}

function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: () => void }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div
      className="rounded-2xl p-4 flex flex-col justify-between hover:shadow-lg transition group relative overflow-hidden"
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
      }}
    >
      <Link href={`/store/product?id=${product.id}`} className="block flex-1 cursor-pointer">
        {/* Badge */}
        {product.badge && (
          <span
            className="absolute top-3 left-3 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full z-10"
            style={{
              background: product.badge === 'NEW' ? '#10b981' : 'var(--accent-purple)',
              color: '#fff',
            }}
          >
            {product.badge}
          </span>
        )}

        {/* Discount badge */}
        <span
          className="absolute top-3 right-3 text-[9px] font-extrabold px-2 py-0.5 rounded-full z-10"
          style={{ background: '#ef4444', color: '#fff' }}
        >
          -{discount}%
        </span>

        {/* Image */}
        <div
          className="rounded-xl overflow-hidden h-44 mb-3"
          style={{ background: 'var(--search-bg)' }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            loading="lazy"
          />
        </div>

        {/* Tag */}
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full w-fit mb-2 block"
          style={{
            background: 'var(--hero-badge-bg)',
            color: 'var(--hero-badge-text)',
          }}
        >
          {product.tag}
        </span>

        {/* Name */}
        <h3
          className="font-bold text-sm line-clamp-2 mb-2 leading-snug hover:text-purple-400 transition-colors"
          style={{ color: 'var(--text-primary)' }}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3 text-xs">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-400'}
              />
            ))}
          </div>
          <span style={{ color: 'var(--text-muted)' }}>
            {product.rating} ({product.reviews})
          </span>
        </div>
      </Link>

      {/* Price + Add to Cart */}
      <div
        className="pt-3 mt-auto flex items-center justify-between"
        style={{ borderTop: '1px solid var(--border-color)' }}
      >
        <div>
          <span className="line-through text-xs mr-1.5" style={{ color: 'var(--text-muted)' }}>
            ₹{product.originalPrice.toLocaleString()}
          </span>
          <span className="text-lg font-black" style={{ color: 'var(--text-primary)' }}>
            ₹{product.price.toLocaleString()}
          </span>
        </div>
        <button
          onClick={onAddToCart}
          className="flex items-center gap-1.5 font-bold px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition cursor-pointer hover:opacity-90 shadow-sm"
          style={{
            background: 'var(--accent-purple)',
            color: 'var(--btn-primary-text)',
          }}
        >
          <ShoppingBag size={12} />
          Add
        </button>
      </div>
    </div>
  );
}

export default function StorePage() {
  const [cartCount, setCartCount] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const latestScrollRef = useRef<HTMLDivElement>(null);

  const bestSellers = STORE_PRODUCTS.filter((p) => p.badge === 'BESTSELLER');
  const latestProducts = STORE_PRODUCTS.filter((p) => p.badge === 'NEW');

  const addToCart = () => setCartCount((c) => c + 1);

  const scrollLatest = (dir: 'left' | 'right') => {
    if (latestScrollRef.current) {
      const amount = 320;
      latestScrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  // Presentation slideshow timer (5.5 seconds transition)
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % PRESENTATION_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════
          1. HERO BANNER — Presentation Slideshow Mode
      ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Slideshow Active Image background with smooth blur transition overlay */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
        <img
          src={PRESENTATION_SLIDES[slideIndex].image}
          alt="Presentation product image"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out"
        />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20">
            <Sparkles size={14} className="text-amber-400" />
            {PRESENTATION_SLIDES[slideIndex].tag}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
            {PRESENTATION_SLIDES[slideIndex].title}
          </h1>

          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-white/90 drop-shadow">
            {PRESENTATION_SLIDES[slideIndex].description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg transition hover:opacity-90 cursor-pointer flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #c9a0ff 0%, #a855f7 100%)',
                color: '#1a1025',
              }}
            >
              Shop Now
              <ArrowRight size={16} />
            </button>
            <button
              className="px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition cursor-pointer hover:bg-white/20 border border-white/40 text-white"
            >
              Explore Collection
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {PRESENTATION_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === slideIndex ? 'bg-purple-400 w-6' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. CATEGORY RIBBON
      ═══════════════════════════════════════════ */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Shop by Category" subtitle="Browse our curated collection of authentic astrology products" />
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3 md:gap-5">
            {STORE_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-2xl cursor-pointer transition hover:scale-105 group"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-2xl md:text-3xl transition group-hover:scale-110"
                  style={{ background: 'var(--hero-badge-bg)' }}
                >
                  {cat.icon}
                </div>
                <span className="text-[10px] md:text-xs font-bold text-center leading-tight" style={{ color: 'var(--text-primary)' }}>
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. BEST SELLERS
      ═══════════════════════════════════════════ */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-[1300px] mx-auto">
          <SectionTitle title="Best Sellers" subtitle="Our most loved products — trusted by thousands of customers" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. SHOP BY PURPOSE
      ═══════════════════════════════════════════ */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Shop by Purpose" subtitle="Find products aligned to your specific needs and goals" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SHOP_BY_PURPOSE.map((purpose) => (
              <div
                key={purpose.id}
                className="rounded-2xl p-6 cursor-pointer transition hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                }}
              >
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                  style={{ background: purpose.color }}
                />

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${purpose.color}15` }}
                  >
                    {purpose.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                      {purpose.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {purpose.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs font-bold group-hover:gap-2 transition-all" style={{ color: purpose.color }}>
                  <span>Browse Products</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. BEST COMBO DEALS
      ═══════════════════════════════════════════ */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-[1300px] mx-auto">
          <SectionTitle title="Best Combo Deals" subtitle="Save more when you buy curated bundles — handpicked by our astrologers" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {COMBO_DEALS.map((combo) => (
              <div
                key={combo.id}
                className="rounded-2xl overflow-hidden flex flex-col sm:flex-row group hover:shadow-lg transition"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                }}
              >
                {/* Image */}
                <div className="sm:w-[45%] h-48 sm:h-auto overflow-hidden" style={{ background: 'var(--search-bg)' }}>
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  {/* Tag */}
                  <span
                    className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full w-fit mb-3"
                    style={{ background: '#10b981', color: '#fff' }}
                  >
                    {combo.tag}
                  </span>

                  <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text-primary)' }}>
                    {combo.name}
                  </h3>

                  <ul className="space-y-1.5 mb-4">
                    {combo.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        <Check size={12} style={{ color: '#10b981' }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="line-through text-xs mr-2" style={{ color: 'var(--text-muted)' }}>
                        ₹{combo.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>
                        ₹{combo.comboPrice.toLocaleString()}
                      </span>
                    </div>
                    <button
                      onClick={addToCart}
                      className="flex items-center gap-1.5 font-bold px-4 py-2 rounded-full text-[10px] uppercase tracking-wider transition cursor-pointer hover:opacity-90 shadow-sm"
                      style={{
                        background: 'var(--accent-purple)',
                        color: 'var(--btn-primary-text)',
                      }}
                    >
                      <ShoppingBag size={12} />
                      Add Combo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. LATEST COLLECTIONS — Horizontal Scroll
      ═══════════════════════════════════════════ */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex items-end justify-between mb-8 md:mb-10">
            <div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                Latest Collections
              </h2>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                Just arrived — fresh additions to our store
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollLatest('left')}
                className="w-9 h-9 rounded-full flex items-center justify-center transition cursor-pointer hover:opacity-80"
                style={{
                  background: 'var(--wallet-bg)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollLatest('right')}
                className="w-9 h-9 rounded-full flex items-center justify-center transition cursor-pointer hover:opacity-80"
                style={{
                  background: 'var(--accent-purple)',
                  color: 'var(--btn-primary-text)',
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={latestScrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-none pb-4"
          >
            {latestProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[280px]">
                <ProductCard product={product} onAddToCart={addToCart} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. TESTIMONIALS (Seamless infinite marquee animation)
      ═══════════════════════════════════════════ */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto">
          <SectionTitle title="What Our Customers Say" subtitle="Read real experiences from our spiritual store shoppers" />

          <div className="marquee-container py-4">
            <div className="marquee-content flex gap-5">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  className="min-w-[300px] sm:min-w-[360px] max-w-[400px] rounded-3xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition relative"
                  style={{
                    background: 'var(--section-card-bg)',
                    border: '1px solid var(--section-card-border)',
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-3xl border shadow-sm"
                        style={{ background: 'var(--hero-badge-bg)', borderColor: 'var(--accent-purple)' }}
                      >
                        {t.avatar}
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-400'}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed font-medium mb-6 italic" style={{ color: 'var(--text-muted)' }}>
                      &quot;{t.text}&quot;
                    </p>
                  </div>

                  <div className="pt-3 flex items-center justify-between" style={{ borderTop: '1px solid var(--section-card-border)' }}>
                    <div>
                      <h4 className="font-extrabold text-sm" style={{ color: 'var(--text-primary)' }}>{t.name}</h4>
                      <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Bought: {t.product}</p>
                    </div>
                    {t.verified && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 bg-emerald-500/10 text-emerald-500">
                        <Check size={9} /> Verified
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. WHY US
      ═══════════════════════════════════════════ */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="Why AstroLive Store?" subtitle="Your trust is our top priority" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl p-5 text-center flex flex-col items-center gap-3 hover:scale-[1.02] transition"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-3xl"
                  style={{ background: 'var(--hero-badge-bg)' }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. CTA BANNER — Before Footer
      ═══════════════════════════════════════════ */}
      <section className="py-10 md:py-14 px-4">
        <div
          className="max-w-5xl mx-auto rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(200,160,255,0.1) 0%, rgba(168,85,247,0.08) 100%)',
            border: '1px solid rgba(200,160,255,0.15)',
          }}
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[120px] opacity-20" style={{ background: '#7c3aed' }} />

          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-3 relative z-10"
            style={{ color: 'var(--text-primary)' }}
          >
            Not sure what&apos;s right for you?
          </h2>
          <p className="text-sm max-w-lg mx-auto mb-6 relative z-10" style={{ color: 'var(--text-muted)' }}>
            Talk to our expert astrologers for a personalized gemstone recommendation based on your birth chart.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <a
              href="/chat"
              className="px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition hover:opacity-90 cursor-pointer"
              style={{
                background: 'var(--accent-purple)',
                color: 'var(--btn-primary-text)',
              }}
            >
              Consult an Astrologer
            </a>
            <a
              href="/"
              className="px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition cursor-pointer hover:bg-white/5"
              style={{
                border: '1px solid var(--btn-outline-border)',
                color: 'var(--btn-outline-text)',
              }}
            >
              Back to AstroLive
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
