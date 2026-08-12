// ──────────────────────────────────────────────
// AstroLive Store — Centralised Data
// ──────────────────────────────────────────────

/* ───── Types ───── */
export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  tag: string;
  badge?: string; // e.g. "NEW", "BESTSELLER"
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string; // emoji
  slug: string;
}

export interface ComboDeal {
  id: string;
  name: string;
  items: string[];
  originalPrice: number;
  comboPrice: number;
  image: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
  verified: boolean;
}

export interface PurposeCard {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string; // gradient start color
}

export interface WhyUsCard {
  id: string;
  title: string;
  icon: string;
  description: string;
}

/* ───── Categories ───── */
export const STORE_CATEGORIES: Category[] = [
  { id: 'gemstones', name: 'Gemstones', icon: '💎', slug: 'gemstones' },
  { id: 'rudraksha', name: 'Rudraksha', icon: '📿', slug: 'rudraksha' },
  { id: 'crystals', name: 'Crystals', icon: '🔮', slug: 'crystals' },
  { id: 'yantras', name: 'Yantras', icon: '🕉️', slug: 'yantras' },
  { id: 'bracelets', name: 'Bracelets', icon: '⭕', slug: 'bracelets' },
  { id: 'vastu', name: 'Vastu', icon: '🏠', slug: 'vastu' },
  { id: 'combos', name: 'Spiritual Combos', icon: '✨', slug: 'combos' },
  { id: 'pooja', name: 'Pooja Essentials', icon: '🪔', slug: 'pooja' },
];

/* ───── Nav Items for Store Navbar ───── */
export const STORE_NAV_ITEMS = [
  'Gemstones',
  'Rudraksha',
  'Crystals',
  'Yantras',
  'Bracelets',
  'Vastu',
  'Combos',
  'Pooja Items',
];

/* ───── Products ───── */
export const STORE_PRODUCTS: Product[] = [
  // Gemstones
  {
    id: 'p1',
    name: 'Certified Natural Yellow Sapphire (Pukhraj)',
    slug: 'yellow-sapphire-pukhraj',
    category: 'gemstones',
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1551122089-4e3e72477432?w=400&h=400&fit=crop',
    tag: 'Lab Certified 📜',
    badge: 'BESTSELLER',
    description: 'Premium lab-certified Yellow Sapphire for Jupiter — enhances wisdom, wealth, and marital bliss.',
  },
  {
    id: 'p2',
    name: 'Natural Blue Sapphire (Neelam) Stone',
    slug: 'blue-sapphire-neelam',
    category: 'gemstones',
    price: 5999,
    originalPrice: 8499,
    rating: 5.0,
    reviews: 164,
    image: 'https://images.unsplash.com/photo-1583937443566-6adcb3e89967?w=400&h=400&fit=crop',
    tag: 'Lab Certified 📜',
    badge: 'BESTSELLER',
    description: 'Powerful Saturn stone — brings career success, financial discipline, and protection.',
  },
  {
    id: 'p3',
    name: 'Natural Emerald (Panna) Stone — 5 Carat',
    slug: 'emerald-panna',
    category: 'gemstones',
    price: 4299,
    originalPrice: 6499,
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1567306295427-94503f8300d7?w=400&h=400&fit=crop',
    tag: 'Mercury Stone 🌿',
    badge: 'NEW',
    description: 'Vivid green Emerald for Mercury — boosts intellect, communication, and business acumen.',
  },
  {
    id: 'p4',
    name: 'Certified Ruby (Manik) Stone — 3 Carat',
    slug: 'ruby-manik',
    category: 'gemstones',
    price: 3799,
    originalPrice: 5499,
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1599707367790-a54bafa66a1a?w=400&h=400&fit=crop',
    tag: 'Sun Stone ☀️',
    description: 'Deep red Ruby for Sun — enhances leadership, confidence, and vitality.',
  },

  // Rudraksha
  {
    id: 'p5',
    name: '5 Mukhi Original Nepali Rudraksha Mala',
    slug: '5-mukhi-rudraksha-mala',
    category: 'rudraksha',
    price: 1299,
    originalPrice: 1999,
    rating: 4.8,
    reviews: 580,
    image: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=400&h=400&fit=crop',
    tag: 'Energized ✨',
    badge: 'BESTSELLER',
    description: '108+1 beads authentic Nepali 5 Mukhi Rudraksha mala — brings peace, health, and spiritual growth.',
  },
  {
    id: 'p6',
    name: '7 Mukhi Rudraksha — Gold Capped Pendant',
    slug: '7-mukhi-rudraksha-pendant',
    category: 'rudraksha',
    price: 2499,
    originalPrice: 3999,
    rating: 4.9,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f0?w=400&h=400&fit=crop',
    tag: 'Lakshmi Bead 🙏',
    description: 'Gold-capped 7 Mukhi Rudraksha for Mahalakshmi — attracts abundance and good fortune.',
  },
  {
    id: 'p7',
    name: 'Dhan Rudraksha Bracelet — Power Combo',
    slug: 'dhan-rudraksha-bracelet',
    category: 'rudraksha',
    price: 1899,
    originalPrice: 2799,
    rating: 4.7,
    reviews: 320,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop',
    tag: 'Wealth Magnet 💰',
    badge: 'NEW',
    description: 'Powerful combination of Rudraksha beads specifically selected for attracting wealth and prosperity.',
  },

  // Crystals
  {
    id: 'p8',
    name: 'Natural Rose Quartz Healing Sphere',
    slug: 'rose-quartz-sphere',
    category: 'crystals',
    price: 899,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?w=400&h=400&fit=crop',
    tag: 'Love Crystal 💖',
    badge: 'BESTSELLER',
    description: 'Polished Rose Quartz sphere — opens the heart chakra, attracts love, and promotes emotional healing.',
  },
  {
    id: 'p9',
    name: 'Citrine Raw Crystal Cluster',
    slug: 'citrine-raw-cluster',
    category: 'crystals',
    price: 1199,
    originalPrice: 1899,
    rating: 4.7,
    reviews: 186,
    image: 'https://images.unsplash.com/photo-1615486511262-c7b3b33898da?w=400&h=400&fit=crop',
    tag: 'Success Stone 🌟',
    description: 'Natural Citrine cluster — the "merchant stone" that attracts wealth and positive energy.',
  },
  {
    id: 'p10',
    name: 'Amethyst Geode — Medium Size',
    slug: 'amethyst-geode',
    category: 'crystals',
    price: 1599,
    originalPrice: 2499,
    rating: 4.9,
    reviews: 278,
    image: 'https://images.unsplash.com/photo-1576022162028-3a412b8e3638?w=400&h=400&fit=crop',
    tag: 'Spiritual Shield 🛡️',
    badge: 'NEW',
    description: 'Stunning Amethyst geode — protects against negative energy, enhances intuition and meditation.',
  },

  // Yantras
  {
    id: 'p11',
    name: 'Pure Copper Sampoorna Shree Yantra',
    slug: 'shree-yantra-copper',
    category: 'yantras',
    price: 899,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=400&h=400&fit=crop',
    tag: 'Vastu Proven 🏠',
    badge: 'BESTSELLER',
    description: 'Energized copper Shree Yantra for Lakshmi — attracts abundance, removes financial obstacles.',
  },
  {
    id: 'p12',
    name: 'Kuber Yantra — Gold Plated',
    slug: 'kuber-yantra-gold',
    category: 'yantras',
    price: 1299,
    originalPrice: 1999,
    rating: 4.8,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1604933762023-7213af7ff7e7?w=400&h=400&fit=crop',
    tag: 'Wealth Yantra 💰',
    description: 'Gold-plated Kuber Yantra — invokes Lord Kuber for wealth accumulation and financial security.',
  },

  // Bracelets
  {
    id: 'p13',
    name: '7 Chakra Healing Gemstone Bracelet',
    slug: '7-chakra-bracelet',
    category: 'bracelets',
    price: 599,
    originalPrice: 999,
    rating: 4.7,
    reviews: 812,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
    tag: 'Best Seller 🔥',
    badge: 'BESTSELLER',
    description: 'Multi-stone bracelet aligned to all 7 chakras — balances energy, promotes holistic healing.',
  },
  {
    id: 'p14',
    name: 'Tiger Eye Stone Bracelet — 8mm Beads',
    slug: 'tiger-eye-bracelet',
    category: 'bracelets',
    price: 449,
    originalPrice: 799,
    rating: 4.8,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    tag: 'Courage Stone 🐯',
    badge: 'BESTSELLER',
    description: 'Natural Tiger Eye bracelet — boosts courage, confidence, and protection from evil eye.',
  },
  {
    id: 'p15',
    name: 'Black Tourmaline Protection Bracelet',
    slug: 'black-tourmaline-bracelet',
    category: 'bracelets',
    price: 549,
    originalPrice: 899,
    rating: 4.6,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop',
    tag: 'Shield ⚔️',
    description: 'Powerful Black Tourmaline bracelet — the ultimate protection stone against negativity.',
  },
  {
    id: 'p16',
    name: 'Pyrite Abundance Bracelet',
    slug: 'pyrite-bracelet',
    category: 'bracelets',
    price: 699,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop',
    tag: 'Money Magnet 💸',
    badge: 'NEW',
    description: 'Natural Pyrite bracelet — known as "Fool\'s Gold," attracts wealth and positive financial energy.',
  },

  // Vastu
  {
    id: 'p17',
    name: 'Feng Shui Brass Laughing Buddha',
    slug: 'laughing-buddha-brass',
    category: 'vastu',
    price: 1499,
    originalPrice: 2199,
    rating: 4.8,
    reviews: 235,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=400&fit=crop',
    tag: 'Attract Wealth 💰',
    badge: 'BESTSELLER',
    description: 'Handcrafted brass Laughing Buddha — symbol of happiness, wealth, and good fortune.',
  },
  {
    id: 'p18',
    name: 'Vastu Tortoise — Crystal Glass',
    slug: 'vastu-tortoise-crystal',
    category: 'vastu',
    price: 799,
    originalPrice: 1299,
    rating: 4.7,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1604933762023-7213af7ff7e7?w=400&h=400&fit=crop',
    tag: 'Longevity 🐢',
    description: 'Crystal glass Vastu Tortoise — symbolizes longevity, stability, and steady growth.',
  },
  {
    id: 'p19',
    name: 'Evil Eye Wall Hanging — Handcrafted',
    slug: 'evil-eye-wall-hanging',
    category: 'vastu',
    price: 499,
    originalPrice: 899,
    rating: 4.9,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
    tag: 'Protection 🧿',
    badge: 'NEW',
    description: 'Beautiful handcrafted evil eye wall hanging — protects your home from negative energy.',
  },

  // Pooja Essentials
  {
    id: 'p20',
    name: 'Complete Navgraha Pooja Kit',
    slug: 'navgraha-pooja-kit',
    category: 'pooja',
    price: 1999,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=400&h=400&fit=crop',
    tag: 'Complete Kit 📦',
    badge: 'NEW',
    description: 'All-in-one Navgraha Pooja kit with mantras card — pacifies all nine planets.',
  },
  {
    id: 'p21',
    name: 'Brass Diya Set — Pack of 12',
    slug: 'brass-diya-set',
    category: 'pooja',
    price: 399,
    originalPrice: 699,
    rating: 4.7,
    reviews: 890,
    image: 'https://images.unsplash.com/photo-1604684338748-8d554b5e981d?w=400&h=400&fit=crop',
    tag: 'Festival Ready 🪔',
    badge: 'BESTSELLER',
    description: 'Traditional brass diya set of 12 — perfect for daily pooja, festivals, and special occasions.',
  },
  {
    id: 'p22',
    name: 'Premium Incense Sticks Collection — 6 Fragrances',
    slug: 'incense-sticks-collection',
    category: 'pooja',
    price: 349,
    originalPrice: 599,
    rating: 4.6,
    reviews: 1240,
    image: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f0?w=400&h=400&fit=crop',
    tag: 'Aromatic 🌸',
    description: 'Six divine fragrances — Sandalwood, Rose, Lavender, Jasmine, Mogra, and Chandan. 120 sticks total.',
  },
  {
    id: 'p23',
    name: 'Gomti Chakra Set — 11 Pieces',
    slug: 'gomti-chakra-set',
    category: 'pooja',
    price: 299,
    originalPrice: 499,
    rating: 4.8,
    reviews: 670,
    image: 'https://images.unsplash.com/photo-1604933762023-7213af7ff7e7?w=400&h=400&fit=crop',
    tag: 'Sacred Shell 🐚',
    badge: 'BESTSELLER',
    description: 'Original Gomti Chakra from Gomti River — used in Lakshmi pooja for wealth and prosperity.',
  },
  {
    id: 'p24',
    name: 'Camphor Tablets — Pure Organic (100g)',
    slug: 'camphor-tablets-organic',
    category: 'pooja',
    price: 199,
    originalPrice: 349,
    rating: 4.5,
    reviews: 2100,
    image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=400&h=400&fit=crop',
    tag: 'Daily Pooja 🔥',
    description: '100% pure organic camphor tablets — purifies air, creates sacred atmosphere for pooja.',
  },
];

/* ───── Combo Deals ───── */
export const COMBO_DEALS: ComboDeal[] = [
  {
    id: 'c1',
    name: 'Dhan Yog Combo',
    items: ['Yellow Sapphire Ring', 'Kuber Yantra', 'Citrine Bracelet', 'Gomti Chakra Set'],
    originalPrice: 7999,
    comboPrice: 4999,
    image: 'https://images.unsplash.com/photo-1551122089-4e3e72477432?w=600&h=400&fit=crop',
    tag: 'Save ₹3,000 🎉',
  },
  {
    id: 'c2',
    name: 'Complete Protection Kit',
    items: ['Black Tourmaline Bracelet', 'Evil Eye Hanging', '5 Mukhi Rudraksha', 'Camphor Tablets'],
    originalPrice: 4299,
    comboPrice: 2499,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=400&fit=crop',
    tag: 'Save ₹1,800 🛡️',
  },
  {
    id: 'c3',
    name: 'Love & Harmony Bundle',
    items: ['Rose Quartz Sphere', '7 Chakra Bracelet', 'Incense Sticks Collection', 'Brass Diya Set'],
    originalPrice: 3499,
    comboPrice: 1999,
    image: 'https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?w=600&h=400&fit=crop',
    tag: 'Save ₹1,500 💖',
  },
  {
    id: 'c4',
    name: 'Career Booster Pack',
    items: ['Blue Sapphire Pendant', 'Tiger Eye Bracelet', 'Shree Yantra', 'Pyrite Stone'],
    originalPrice: 9499,
    comboPrice: 5999,
    image: 'https://images.unsplash.com/photo-1583937443566-6adcb3e89967?w=600&h=400&fit=crop',
    tag: 'Save ₹3,500 🚀',
  },
];

/* ───── Shop By Purpose ───── */
export const SHOP_BY_PURPOSE: PurposeCard[] = [
  {
    id: 'sp1',
    title: 'Wealth & Prosperity',
    icon: '💰',
    description: 'Gemstones, Yantras & Rudraksha for financial growth',
    color: '#f59e0b',
  },
  {
    id: 'sp2',
    title: 'Love & Relationships',
    icon: '💖',
    description: 'Crystals & bracelets to attract love and harmony',
    color: '#ec4899',
  },
  {
    id: 'sp3',
    title: 'Health & Healing',
    icon: '🌿',
    description: 'Healing crystals and chakra-balancing stones',
    color: '#10b981',
  },
  {
    id: 'sp4',
    title: 'Career & Success',
    icon: '🚀',
    description: 'Power stones for professional growth and ambition',
    color: '#3b82f6',
  },
  {
    id: 'sp5',
    title: 'Protection & Safety',
    icon: '🛡️',
    description: 'Evil eye protection, Black Tourmaline & Rudraksha',
    color: '#8b5cf6',
  },
  {
    id: 'sp6',
    title: 'Spiritual Growth',
    icon: '🧘',
    description: 'Meditation aids, malas, and sacred pooja items',
    color: '#f97316',
  },
];

/* ───── Testimonials ───── */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    avatar: '👩',
    rating: 5,
    text: 'The Yellow Sapphire ring changed my life! Within 3 months of wearing it, I got a promotion and my finances improved dramatically. Truly authentic and well-energized.',
    product: 'Yellow Sapphire (Pukhraj)',
    verified: true,
  },
  {
    id: 't2',
    name: 'Rahul Verma',
    avatar: '👨',
    rating: 5,
    text: 'Ordered the 5 Mukhi Rudraksha Mala. The quality is exceptional — each bead is genuine Nepali. I can feel the calming energy during my meditation sessions.',
    product: '5 Mukhi Rudraksha Mala',
    verified: true,
  },
  {
    id: 't3',
    name: 'Ananya Patel',
    avatar: '👩',
    rating: 5,
    text: 'The Rose Quartz sphere is beautiful! My therapist recommended it for emotional healing and it genuinely helps during my meditation. Packaging was also premium.',
    product: 'Rose Quartz Sphere',
    verified: true,
  },
  {
    id: 't4',
    name: 'Vikram Singh',
    avatar: '👨',
    rating: 4,
    text: 'Bought the Career Booster Pack combo. The Blue Sapphire pendant is stunning and the Tiger Eye bracelet is very comfortable. Great value for money!',
    product: 'Career Booster Pack',
    verified: true,
  },
  {
    id: 't5',
    name: 'Meera Iyer',
    avatar: '👩',
    rating: 5,
    text: 'The Shree Yantra is beautifully crafted in pure copper. Placed it in my pooja room and I can genuinely feel the positive vibrations. Highly recommended!',
    product: 'Shree Yantra',
    verified: true,
  },
  {
    id: 't6',
    name: 'Arjun Reddy',
    avatar: '👨',
    rating: 5,
    text: 'This is my 3rd order from AstroLive Store. The 7 Chakra bracelet was a gift for my wife and she absolutely loves it. Authentic products every single time.',
    product: '7 Chakra Bracelet',
    verified: true,
  },
];

/* ───── Why Us ───── */
export const WHY_US: WhyUsCard[] = [
  {
    id: 'w1',
    title: '100% Authentic & Certified',
    icon: '🏅',
    description: 'Every gemstone comes with a lab certificate. All products sourced from trusted suppliers with authenticity guarantee.',
  },
  {
    id: 'w2',
    title: 'Astrologer Energized',
    icon: '🔮',
    description: 'Each product is energized with proper Vedic mantras by our panel of expert astrologers before dispatch.',
  },
  {
    id: 'w3',
    title: 'Free Shipping Above ₹999',
    icon: '🚚',
    description: 'Enjoy free express shipping on all orders above ₹999. Secure packaging with insurance for high-value items.',
  },
  {
    id: 'w4',
    title: 'Easy 7-Day Returns',
    icon: '↩️',
    description: 'Not satisfied? Return within 7 days for a full refund. No questions asked. Your satisfaction is our priority.',
  },
];
