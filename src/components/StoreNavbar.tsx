'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Heart, ShoppingBag, Mic, Search, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

// Rich competitive dropdown categories inspired by top astrology stores (Gemstones, Rudraksha, Crystals, Vastu, Pooja, etc.)
export const DROPDOWN_MENU = {
  Gemstones: [
    { name: 'Yellow Sapphire (Pukhraj)', id: 'p1' },
    { name: 'Blue Sapphire (Neelam)', id: 'p2' },
    { name: 'Emerald (Panna)', id: 'p3' },
    { name: 'Ruby (Manik)', id: 'p4' },
    { name: 'Red Coral (Moonga)', id: 'p1' },
    { name: 'Pearl (Moti)', id: 'p2' },
    { name: 'Hessonite (Gomed)', id: 'p3' },
    { name: 'Cats Eye (Lehsuniya)', id: 'p4' }
  ],
  Rudraksha: [
    { name: '5 Mukhi Rudraksha Mala', id: 'p5' },
    { name: '7 Mukhi Rudraksha Pendant', id: 'p6' },
    { name: 'Dhan Rudraksha Bracelet', id: 'p7' },
    { name: '1 Mukhi Nepali Round', id: 'p5' },
    { name: 'Gauri Shankar Rudraksha', id: 'p6' },
    { name: 'Rudraksha Kada / Bracelet', id: 'p7' }
  ],
  Crystals: [
    { name: 'Rose Quartz Healing Sphere', id: 'p8' },
    { name: 'Citrine Raw Cluster', id: 'p9' },
    { name: 'Amethyst Geode', id: 'p10' },
    { name: 'Clear Quartz Pyramids', id: 'p8' },
    { name: 'Black Tourmaline Raw', id: 'p10' },
    { name: 'Selenite Charging Plate', id: 'p9' }
  ],
  Yantras: [
    { name: 'Copper Shree Yantra', id: 'p11' },
    { name: 'Gold Plated Kuber Yantra', id: 'p12' },
    { name: 'Mahalaxmi Yantra Frame', id: 'p11' },
    { name: 'Vyas Yantra for Study', id: 'p12' }
  ],
  Bracelets: [
    { name: '7 Chakra Healing Bracelet', id: 'p13' },
    { name: 'Tiger Eye Courage Bracelet', id: 'p14' },
    { name: 'Black Tourmaline Shield', id: 'p15' },
    { name: 'Pyrite Abundance Bracelet', id: 'p16' },
    { name: 'Hematite Grounding Bracelet', id: 'p13' }
  ],
  Vastu: [
    { name: 'Brass Laughing Buddha', id: 'p17' },
    { name: 'Crystal Glass Tortoise', id: 'p18' },
    { name: 'Evil Eye Wall Hanging', id: 'p19' },
    { name: 'Vastu Pyramids Set', id: 'p18' },
    { name: 'Camphor Diffuser Lamp', id: 'p17' }
  ]
};

interface StoreNavbarProps {
  onWishlistClick?: () => void;
  onCartClick?: () => void;
  cartCount?: number;
  wishlistCount?: number;
}

export default function StoreNavbar({
  onWishlistClick,
  onCartClick,
  cartCount = 0,
  wishlistCount = 0
}: StoreNavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      setSearchQuery('');
    }
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full"
        style={{
          background: 'var(--bg-header)',
          borderBottom: '1px solid var(--border-color)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        {/* ─── Top Row ─── */}
        <div className="max-w-[1440px] w-[90%] lg:w-[85%] mx-auto py-2 md:py-2.5">
          <div className="flex items-center justify-between gap-2 md:gap-4">

            {/* Left: Hamburger + Logo */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-lg"
                style={{ color: 'var(--text-primary)' }}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* Logo (Just ASTROLIVE, no store word) */}
              <Link href="/store" className="flex items-center gap-1.5 md:gap-2 cursor-pointer">
                <img
                  src="https://media.chingari.io/apipublic/chingari-web-assets/images/astro/astro-icon.png"
                  alt="Logo"
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
                <span
                  className="font-extrabold text-sm md:text-lg tracking-wide notranslate"
                  style={{ color: 'var(--text-primary)' }}
                >
                  AstroLive
                </span>
              </Link>
            </div>

            {/* Center: Search Bar with Mic Icon */}
            <div className="hidden lg:flex flex-1 mx-3 lg:mx-6 relative max-w-2xl">
              <div
                className="relative flex items-center w-full rounded-full overflow-hidden transition-all duration-300"
                style={{
                  background: 'var(--search-bg)',
                  border: '1px solid var(--search-border)',
                }}
              >
                <div
                  className="pl-4 pr-2 flex items-center cursor-pointer"
                  style={{ color: 'var(--text-muted)' }}
                  onClick={handleSearchSubmit}
                >
                  <Search size={15} />
                </div>
                <input
                  type="text"
                  placeholder="Search gemstones, rudraksha, bracelets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearchSubmit();
                  }}
                  className="w-full py-2 pr-2 bg-transparent text-sm font-medium outline-none placeholder:font-normal"
                  style={{ color: 'var(--text-primary)' }}
                />
                {/* Voice search mic icon */}
                <button
                  className="pr-4 pl-2 flex items-center cursor-pointer transition hover:scale-110"
                  style={{ color: 'var(--accent-purple)' }}
                  aria-label="Voice search"
                  title="Search by voice"
                >
                  <Mic size={16} />
                </button>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-1.5 md:gap-2.5 flex-shrink-0">
              {/* Light/Dark Mode Button brought back */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center rounded-full p-2 hover:bg-white/5 transition"
                style={{ color: 'var(--text-primary)' }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Wishlist Icon */}
              <button
                onClick={onWishlistClick}
                className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full transition cursor-pointer hover:bg-white/5"
                style={{
                  background: 'var(--wallet-bg)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
                aria-label="Wishlist"
                title="Wishlist"
              >
                <Heart size={15} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-pink-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Icon */}
              <button
                onClick={onCartClick}
                className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full transition cursor-pointer hover:bg-white/5"
                style={{
                  background: 'var(--wallet-bg)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
                aria-label="Cart"
                title="Shopping Cart"
              >
                <ShoppingBag size={15} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 text-white text-[9px] font-bold rounded-full flex items-center justify-center" style={{ background: 'var(--accent-purple)' }}>
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Conditionally render Sign In/Sign Up or Profile icon based on login state */}
              {typeof window !== 'undefined' && localStorage.getItem('astrolive-logged-in') === 'true' ? (
                <button
                  onClick={() => {
                    localStorage.removeItem('astrolive-logged-in');
                    window.location.reload();
                  }}
                  className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full transition cursor-pointer overflow-hidden"
                  style={{
                    background: 'var(--accent-purple)',
                    color: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                  }}
                  aria-label="User profile"
                  title="Logout"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </button>
              ) : (
                <Link
                  href="/store/login"
                  className="text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-xl transition-all"
                  style={{
                    background: 'var(--accent-purple)',
                    color: 'var(--btn-primary-text)',
                  }}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* ─── Bottom Row: Dropdown Navigation for Desktop ─── */}
        <nav
          className="hidden lg:block w-full"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <div className="max-w-[1440px] w-[90%] lg:w-[85%] mx-auto flex items-center gap-2 flex-nowrap">
            {Object.keys(DROPDOWN_MENU).map((category) => (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div
                  className="px-4 py-2 cursor-pointer text-xs font-semibold tracking-wide uppercase flex items-center gap-1 transition-colors hover:text-purple-400"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {category}
                  <span className="text-[9px] opacity-60">▼</span>
                </div>

                {/* Dropdown Options Box */}
                {activeDropdown === category && (
                  <div
                    className="absolute top-full left-0 mt-0 rounded-xl py-2 w-56 shadow-2xl z-[99999]"
                    style={{
                      background: 'var(--dropdown-bg)',
                      border: '1px solid var(--border-color)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    {DROPDOWN_MENU[category as keyof typeof DROPDOWN_MENU].map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={`/store/product?id=${subItem.id}`}
                        className="block px-4 py-2 text-xs font-medium transition hover:bg-purple-500/10 hover:text-purple-300"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* ─── Mobile Drawer ─── */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed left-0 right-0 top-[52px] md:top-[60px] bottom-0 z-40 overflow-y-auto py-4 px-6 flex flex-col gap-2"
            style={{
              background: 'var(--bg-header)',
              borderTop: '1px solid var(--border-color)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              height: 'calc(100vh - 52px)',
            }}
          >
            {/* Mobile Search */}
            <div
              className="relative flex items-center w-full rounded-full overflow-hidden mb-3"
              style={{
                background: 'var(--search-bg)',
                border: '1px solid var(--search-border)',
              }}
            >
              <div className="pl-4 pr-2 flex items-center" style={{ color: 'var(--text-muted)' }}>
                <Search size={15} />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pr-2 bg-transparent text-sm font-medium outline-none"
                style={{ color: 'var(--text-primary)' }}
              />
              <button className="pr-4 pl-2" style={{ color: 'var(--accent-purple)' }} aria-label="Voice search">
                <Mic size={16} />
              </button>
            </div>

            {Object.keys(DROPDOWN_MENU).map((category) => (
              <div key={category} className="w-full border-b py-2" style={{ borderColor: 'var(--border-color)' }}>
                <span className="font-bold text-sm uppercase block mb-1" style={{ color: 'var(--text-primary)' }}>
                  {category}
                </span>
                <div className="pl-3 flex flex-col gap-1.5 mt-1">
                  {DROPDOWN_MENU[category as keyof typeof DROPDOWN_MENU].slice(0, 4).map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={`/store/product?id=${subItem.id}`}
                      className="text-xs"
                      style={{ color: 'var(--text-secondary)' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      • {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
