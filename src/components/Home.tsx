import { MessageCircle, MessageCircleMore } from 'lucide-react';
import React from 'react';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';

// Card Data Interfaces
interface ChatAstrologer {
  id: string;
  name: string;
  avatar: string;
  skills: string[];
  languages: string[];
  exp: number;
  price: number;
  rating: number;
  orders: number;
}

interface ProfileAstrologer {
  id: string;
  name: string;
  avatar: string;
  skills: string[];
  languages: string[];
  exp: number;
  price: number;
}

// Data matching the UI
const chatAstrologers: ChatAstrologer[] = [
  {
    id: '1',
    name: 'Shiva',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/26db47d6-13aa-40ee-b5a1-9299924cae9d.jpg',
    skills: ['VEDIC', 'NUMEROLOGY', 'PALMISTRY'],
    languages: ['Hindi', 'English', 'Bhojpuri'],
    exp: 6,
    price: 14,
    rating: 4,
    orders: 120,
  },
  {
    id: '2',
    name: 'Srahvya',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    skills: ['TAROT', 'NUMEROLOGY'],
    languages: ['English', 'Hindi'],
    exp: 8,
    price: 14,
    rating: 5,
    orders: 120,
  },
  {
    id: '3',
    name: 'Lavi',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/22dfc5d4-d377-46e1-81b0-c429b53b5025.png',
    skills: ['VEDIC', 'TAROT', 'FACE READING'],
    languages: ['Hindi'],
    exp: 5,
    price: 16,
    rating: 4,
    orders: 120,
  },
  {
    id: '4',
    name: 'Sonia',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/d0fc6f35-dcab-4eb0-bff6-114aa9cc8795.jpg',
    skills: ['TAROT'],
    languages: ['Hindi'],
    exp: 4,
    price: 12,
    rating: 5,
    orders: 120,
  },
  {
    id: '5',
    name: 'Mystery',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/fa0607c3-882c-42dd-93af-e28b7467c909.png',
    skills: ['TAROT'],
    languages: ['English', 'Hindi', 'Bengali'],
    exp: 5,
    price: 12,
    rating: 4,
    orders: 120,
  },
  {
    id: '6',
    name: 'Divyanshi',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/40d6d749-9c79-4454-b350-b76288fe6fcd.png',
    skills: ['TAROT'],
    languages: ['Hindi', 'Bhojpuri'],
    exp: 5,
    price: 12,
    rating: 5,
    orders: 120,
  },
];

const profileAstrologers: ProfileAstrologer[] = [
  {
    id: '101',
    name: 'Lavi',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/22dfc5d4-d377-46e1-81b0-c429b53b5025.png',
    skills: ['Vedic', 'Tarot', 'Face Reading'],
    languages: ['Hindi'],
    exp: 5,
    price: 16.0,
  },
  {
    id: '102',
    name: 'Divyanshi',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/40d6d749-9c79-4454-b350-b76288fe6fcd.png',
    skills: ['Tarot'],
    languages: ['Hindi', 'Bhojpuri'],
    exp: 5,
    price: 12.0,
  },
  {
    id: '103',
    name: 'Shradha',
    avatar: 'https://media.chingari.io/apipublic/uploads/profilePic/0509b3e0-9221-467f-a007-3fb26bb36dcd.png',
    skills: ['Tarot', 'Numerology'],
    languages: ['English', 'Hindi', 'Kannada', 'Marathi'],
    exp: 9,
    price: 14.0,
  },
];

const navCategories = [
  'STORE',
  'HOROSCOPE',
  'ASTROLOGY',
  'BLOG',
  'OCCULT',
  'FREE REPORTS',
  'HEALING',
  'PANCHANG',
  'LAL KITAB',
  'KP',
  'COMPATIBILITY',
  'CALCULATORS',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fbf9fe] via-[#f7f3fd] to-[#f1e9fa] text-slate-800 font-sans antialiased pb-16">
      {/* 1. Header */}
      <header className="bg-white sticky top-0 z-50 px-6 py-3 shadow-sm border-b border-purple-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://media.chingari.io/apipublic/chingari-web-assets/images/astro/astro-icon.png"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-extrabold text-xl tracking-wide text-slate-900">
              ASTROLIVE
            </span>
          </div>
          <button className="bg-[#f26d85] hover:bg-[#e05871] text-white font-bold px-6 py-1.5 rounded-full text-xs transition uppercase tracking-wider shadow-sm">
            LOGIN
          </button>
        </div>
      </header>

      {/* 2. Sub Navigation */}
      <div className="w-full flex justify-center py-2 px-4">
        <nav
          style={{
            alignItems: 'center',
            backgroundAttachment: 'scroll',
            backgroundClip: 'border-box',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            backgroundImage: 'linear-gradient(190.46deg, rgb(226, 175, 250), rgb(102, 128, 254))',
            backgroundOrigin: 'padding-box',
            borderBottomLeftRadius: '50px',
            borderBottomRightRadius: '50px',
            borderTopLeftRadius: '50px',
            borderTopRightRadius: '50px',
            boxShadow: 'rgba(0, 0, 0, 0.16) 4px 4px 14px 0px',
            boxSizing: 'border-box',
            color: 'rgb(255, 255, 255)',
            colorScheme: 'dark',
            display: 'flex',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            height: '43.9687px',
            justifyContent: 'space-evenly',
            lineHeight: '24px',
            overflowX: 'auto',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            width: '1440px',
            maxWidth: '100%',
          }}
          className="scrollbar-none px-4"
        >
          {navCategories.map((cat, idx) => (
            <span
              key={idx}
              className="hover:opacity-80 cursor-pointer transition px-2 flex-shrink-0"
              style={{ fontSize: '13px' }}
            >
              {cat}
            </span>
          ))}
        </nav>
      </div>

      {/* 3. Hero Banner */}
      <section className="max-w-6xl mx-auto px-4 pt-4 pb-8">
        <div className="banner_banner_cont__STScB relative rounded-3xl bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Planet SVG */}
          <img
            alt="Planet"
            loading="lazy"
            width="210"
            height="210"
            decoding="async"
            data-nimg="1"
            className="banner_planet_img__Rr9_K"
            src="/planet.fb43e317.svg"
            style={{
              aspectRatio: '1 / 1',
              borderBottomColor: 'rgb(229, 231, 235)',
              borderBottomStyle: 'solid',
              borderBottomWidth: '0px',
              borderImageOutset: '0',
              borderImageRepeat: 'stretch',
              borderImageSlice: '100%',
              borderImageSource: 'none',
              borderImageWidth: '1',
              borderLeftColor: 'rgb(229, 231, 235)',
              borderLeftStyle: 'solid',
              borderLeftWidth: '0px',
              borderRightColor: 'rgb(229, 231, 235)',
              borderRightStyle: 'solid',
              borderRightWidth: '0px',
              borderTopColor: 'rgb(229, 231, 235)',
              borderTopStyle: 'solid',
              borderTopWidth: '0px',
              bottom: '-35px',
              boxSizing: 'border-box',
              color: 'transparent',
              colorScheme: 'dark',
              display: 'block',
              fontFamily: 'Poppins, sans-serif',
              fontFeatureSettings: 'normal',
              fontVariationSettings: 'normal',
              height: '99.9937px',
              left: '-45px',
              lineHeight: '24px',
              maxWidth: '100%',
              objectFit: 'contain',
              overflowClipMargin: 'content-box',
              overflowX: 'clip',
              overflowY: 'clip',
              position: 'absolute',
              tabSize: 4,
              textSizeAdjust: '100%',
              textTransform: 'uppercase',
              verticalAlign: 'middle',
              width: '99.9937px',
              WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          <div className="banner_banner_text__k4jBB max-w-lg space-y-6 z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-wide uppercase">
              Are you worried about your future?
            </h1>
            <h2 className="text-white/90 text-xs sm:text-sm leading-relaxed font-medium">
              Where celestial guidance meets digital convenience. Explore your destiny,connect with authentic
              <span className="font-bold"> Astrologers Live</span>
            </h2>

            <div className="space-y-3 pt-2">
              <div className="banner_banner_btn__w9TCN cursor-pointer w-full sm:w-80 flex items-center justify-between bg-white hover:bg-slate-50 text-slate-800 font-extrabold px-5 py-3 rounded-full shadow-lg transition">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="banner_icon_cont__jnHwA text-[#f26d85]">
                    <MessageCircleMore/>
                  </div>
                  <span>Chat With <span className="banner_astrologer__BazSh text-[#f26d85]">Astrologer</span></span>
                </div>
                <span className="banner_rate__nBjvx text-[#f26d85] text-xs font-bold flex items-center gap-1">
                  (
                  <img
                    alt="rupee"
                    loading="lazy"
                    width="14"
                    height="14"
                    decoding="async"
                    data-nimg="1"
                    src="/rupee-icon-orange.svg"
                    style={{ color: 'transparent' }}
                  />
                  10/min)
                </span>
              </div>

              <div className="banner_banner_btn__w9TCN cursor-pointer w-full sm:w-80 flex items-center justify-between bg-white hover:bg-slate-50 text-slate-800 font-extrabold px-5 py-3 rounded-full shadow-lg transition">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="banner_icon_cont__jnHwA text-[#f26d85]">
                    <FaPhoneAlt/>
                  </div>
                  <span>Talk to <span className="banner_astrologer__BazSh text-[#f26d85]">Astrologer</span></span>
                </div>
                <span className="banner_rate__nBjvx text-[#f26d85] text-xs font-bold flex items-center gap-1">
                  (
                  <img
                    alt="rupee"
                    loading="lazy"
                    width="14"
                    height="14"
                    decoding="async"
                    data-nimg="1"
                    src="/rupee-icon-orange.svg"
                    style={{ color: 'transparent' }}
                  />
                  15/min)
                </span>
              </div>
            </div>
          </div>

          <div className="banner_banner_slider__9dSdC relative z-10 flex justify-center lg:pr-6">
            <div className="banner_slider_img_cont__tkSpf">
              {/* Banner Slider Image with exact computed CSS styles */}
              <img
                alt=""
                fetchPriority="high"
                width="1080"
                height="1080"
                decoding="async"
                data-nimg="1"
                className="banner_slider_img__CIWa4"
                srcSet="/SingleBanner.webp"
                style={{
                  aspectRatio: 'auto 1080 / 1080',
                  borderBottomColor: 'rgb(229, 231, 235)',
                  borderBottomLeftRadius: '12px',
                  borderBottomRightRadius: '12px',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '0px',
                  borderImageOutset: '0',
                  borderImageRepeat: 'stretch',
                  borderImageSlice: '100%',
                  borderImageSource: 'none',
                  borderImageWidth: '1',
                  borderLeftColor: 'rgb(229, 231, 235)',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '0px',
                  borderRightColor: 'rgb(229, 231, 235)',
                  borderRightStyle: 'solid',
                  borderRightWidth: '0px',
                  borderTopColor: 'rgb(229, 231, 235)',
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                  borderTopStyle: 'solid',
                  borderTopWidth: '0px',
                  boxSizing: 'border-box',
                  color: 'transparent',
                  colorScheme: 'dark',
                  display: 'block',
                  fontFamily: 'Poppins, sans-serif',
                  fontFeatureSettings: 'normal',
                  fontVariationSettings: 'normal',
                  height: '295.987px',
                  lineHeight: '24px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  overflowClipMargin: 'content-box',
                  overflowX: 'clip',
                  overflowY: 'clip',
                  tabSize: 4,
                  textSizeAdjust: '100%',
                  textTransform: 'uppercase',
                  verticalAlign: 'middle',
                  width: '416.306px',
                  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Links Cards */}
      <section className="max-w-6xl mx-auto px-4 py-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { title: 'Daily Horoscope', icon: '✨', bg: 'bg-gradient-to-br from-[#8050cb] to-[#592b9b]' },
            { title: "Today's Panchang", icon: '🪐', bg: 'bg-gradient-to-br from-[#0c8299] to-[#085a6b]' },
            { title: "Kundli's Match", icon: '💍', bg: 'bg-gradient-to-br from-[#883d3b] to-[#602725]' },
            { title: 'Free Kundli', icon: '📜', bg: 'bg-gradient-to-br from-[#3b3a61] to-[#252443]' },
            { title: 'Love Calculator', icon: '💖', bg: 'bg-gradient-to-br from-[#a3521b] to-[#71350e]' },
            { title: 'Wallet', icon: '👛', bg: 'bg-gradient-to-br from-[#77339d] to-[#4e1b6c]' },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-2xl p-4 h-28 flex flex-col justify-between shadow-md text-white hover:scale-[1.02] transition cursor-pointer`}
            >
              <span className="text-xl">{item.icon}</span>
              <p className="font-bold text-xs tracking-tight leading-snug">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Section: Chat With Astrologers */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="w-24"></div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-slate-900 uppercase text-center">
            CHAT WITH ASTROLOGERS
          </h2>
          <button className="bg-[#f26d85] hover:bg-[#e05871] text-white text-xs font-bold px-4 py-2 rounded-full transition flex items-center gap-1 uppercase tracking-wider shadow-sm">
            VIEW MORE →
          </button>
        </div>

        {/* 6 Chat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chatAstrologers.map((astro) => (
            <div
              key={astro.id}
              className="bg-[#f7f2fb] border border-purple-100 rounded-3xl p-4 shadow-sm flex flex-col justify-between"
            >
              <div className="flex gap-3">
                <div className="flex flex-col items-center gap-1 min-w-[64px]">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#f26d85]">
                    <img src={astro.avatar} alt={astro.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="bg-[#2ccb72] text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Online
                  </span>
                  <div className="text-amber-400 text-[10px] font-bold tracking-tighter">
                    {'★'.repeat(astro.rating)}
                  </div>
                </div>

                <div className="flex-1 space-y-1">
                  <h3 className="font-extrabold text-base text-slate-800">{astro.name}</h3>
                  <div className="flex flex-wrap gap-1">
                    {astro.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-orange-100 text-orange-700 text-[9px] font-bold px-1.5 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium pt-0.5">
                    {astro.languages.join(', ')}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-600">
                    Exp: {astro.exp} Yrs
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 mt-2 border-t border-purple-100/60">
                <span className="bg-[#b3e2d5] text-emerald-900 text-[10px] font-bold px-2.5 py-1 rounded-full">
                  ₹{astro.price} / min
                </span>
                <button className="bg-[#6b2cbd] hover:bg-[#5922a1] text-white font-bold px-5 py-1 rounded-full text-xs transition flex items-center gap-1 shadow-sm">
                  💬 Chat
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Section: Our Astrologers */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="w-24"></div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-slate-900 uppercase text-center">
            OUR ASTROLOGERS
          </h2>
          <button className="bg-[#f26d85] hover:bg-[#e05871] text-white text-xs font-bold px-4 py-2 rounded-full transition flex items-center gap-1 uppercase tracking-wider shadow-sm">
            VIEW MORE →
          </button>
        </div>

        {/* Bottom Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {profileAstrologers.map((astro) => (
            <div
              key={astro.id}
              className="bg-white rounded-3xl p-5 shadow-sm border border-purple-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-2">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm flex-shrink-0">
                    <img src={astro.avatar} alt={astro.name} className="w-full h-full object-cover" />
                    <span className="absolute top-0 right-1 w-3 h-3 bg-[#2ccb72] rounded-full border-2 border-white" />
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex flex-wrap justify-end gap-1">
                      {astro.skills.map((s, i) => (
                        <span
                          key={i}
                          className="bg-slate-100 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <span className="bg-[#c2a3f0] text-purple-950 font-bold text-xs px-3 py-1 rounded-full">
                      ₹{astro.price.toFixed(2)}/min
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  <h3 className="font-extrabold text-lg text-slate-800 flex items-center gap-1.5">
                    {astro.name} <span className="text-[#f26d85] text-sm">♀</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <span>🗣</span> {astro.languages.join(', ')}
                  </p>
                  <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <span>🎓</span> {astro.exp} Years Experience
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}