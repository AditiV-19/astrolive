'use client';

import React, { useState } from 'react';
import { ShoppingBag, Star, ShieldCheck, Sparkles, Filter } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  tag: string;
}

const storeProducts: Product[] = [
  {
    id: '1',
    name: 'Certified Natural Yellow Sapphire (Pukhraj)',
    category: 'Gemstones',
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 142,
    image: 'https://media.chingari.io/apipublic/uploads/profilePic/26db47d6-13aa-40ee-b5a1-9299924cae9d.jpg',
    tag: 'Lab Certified 📜',
  },
  {
    id: '2',
    name: '5 Mukhi Original Nepali Rudraksha Mala',
    category: 'Rudraksha',
    price: 1299,
    originalPrice: 1999,
    rating: 4.8,
    reviews: 280,
    image: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    tag: 'Energized ✨',
  },
  {
    id: '3',
    name: 'Pure Copper Sampoorna Shree Yantra',
    category: 'Yantras',
    price: 899,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 98,
    image: 'https://media.chingari.io/apipublic/uploads/profilePic/22dfc5d4-d377-46e1-81b0-c429b53b5025.png',
    tag: 'Vastu Proven 🏠',
  },
  {
    id: '4',
    name: '7 Chakra Healing Gemstone Bracelet',
    category: 'Bracelets',
    price: 599,
    originalPrice: 999,
    rating: 4.7,
    reviews: 512,
    image: 'https://media.chingari.io/apipublic/uploads/profilePic/d0fc6f35-dcab-4eb0-bff6-114aa9cc8795.jpg',
    tag: 'Best Seller 🔥',
  },
  {
    id: '5',
    name: 'Natural Blue Sapphire (Neelam) Stone',
    category: 'Gemstones',
    price: 5999,
    originalPrice: 8499,
    rating: 5.0,
    reviews: 64,
    image: 'https://media.chingari.io/apipublic/uploads/profilePic/fa0607c3-882c-42dd-93af-e28b7467c909.png',
    tag: 'Lab Certified 📜',
  },
  {
    id: '6',
    name: 'Feng Shui Brass Laughing Buddha',
    category: 'Feng Shui',
    price: 1499,
    originalPrice: 2199,
    rating: 4.8,
    reviews: 135,
    image: 'https://media.chingari.io/apipublic/uploads/profilePic/40d6d749-9c79-4454-b350-b76288fe6fcd.png',
    tag: 'Attract Wealth 💰',
  },
];

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = storeProducts.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            100% Authentic & Energized Astro Products
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide">
            AstroLive Official Store
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xl">
            Certified Gemstones, Sacred Rudraksha, Vastu Yantras, and Healing Crystal Bracelets.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white text-slate-900 px-5 py-3 rounded-2xl shadow-md font-bold text-xs">
          <ShoppingBag className="w-5 h-5 text-[#6b2cbd]" />
          <span>Cart Items:</span>
          <span className="bg-[#6b2cbd] text-white px-2 py-0.5 rounded-full text-xs">{cartCount}</span>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2">
        <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1 mr-2">
          <Filter className="w-3.5 h-3.5" /> Category:
        </span>
        {['All', 'Gemstones', 'Rudraksha', 'Yantras', 'Bracelets', 'Feng Shui'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition flex-shrink-0 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#6b2cbd] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-purple-50 border border-purple-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="bg-white border border-purple-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition group"
          >
            <div>
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 h-48 mb-4">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 bg-[#6b2cbd] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow">
                  {prod.tag}
                </span>
              </div>

              <h3 className="font-extrabold text-base text-slate-900 line-clamp-2">{prod.name}</h3>

              <div className="flex items-center gap-2 mt-2 text-xs">
                <div className="flex items-center text-amber-500 font-bold gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{prod.rating}</span>
                </div>
                <span className="text-slate-400 font-medium">({prod.reviews} Reviews)</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-purple-100 flex items-center justify-between">
              <div>
                <span className="text-slate-400 line-through text-xs mr-2">₹{prod.originalPrice}</span>
                <span className="text-lg font-black text-slate-900">₹{prod.price}</span>
              </div>

              <button
                onClick={() => setCartCount((c) => c + 1)}
                className="bg-gradient-to-r from-[#ffa767] to-[#eb468b] text-white font-extrabold px-5 py-2 rounded-full text-xs uppercase tracking-wider shadow hover:opacity-90 transition cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
