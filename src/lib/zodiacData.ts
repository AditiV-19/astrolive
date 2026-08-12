export interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  motto: string; // e.g. "I Act", "I Have"
  dates: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  house: string; // e.g. "1st House Angular"
  modality: 'Cardinal' | 'Fixed' | 'Mutable';
  rulerSymbol: string; // e.g. "♂"
  rulerName: string; // e.g. "Mars"
  colorHex: string;
  themeColor: string; // Tailwind color class
  horoscope: {
    overview: string;
    love: string;
    career: string;
    health: string;
    cosmicTip: string;
  };
  luckyColor: string;
  luckyNumber: number;
  compatibleSign: string;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    symbol: '♈',
    motto: 'I Act',
    dates: 'Mar 21 - Apr 19',
    element: 'Fire',
    house: '1st House Angular',
    modality: 'Cardinal',
    rulerSymbol: '♂',
    rulerName: 'Mars',
    colorHex: '#ef4444',
    themeColor: 'border-red-500 text-red-400 bg-red-500/10',
    horoscope: {
      overview: 'Today brings a dynamic surge of creative drive and courage. Trust your instinct when launching new initiatives or pitching bold ideas.',
      love: 'Passion peaks today. A frank, heartfelt conversation with your partner or crush sparks magnetic connection.',
      career: 'Your natural initiative sets you apart. Step up to lead a challenging project; colleagues will follow your enthusiasm.',
      health: 'High energy calls for physical activity. A cardio workout or intense walk will release built-up tension.',
      cosmicTip: 'Fuel your inner fire, but remember to pace yourself so you don’t burn out early.'
    },
    luckyColor: 'Crimson Red',
    luckyNumber: 9,
    compatibleSign: 'Leo & Sagittarius'
  },
  {
    id: 'taurus',
    name: 'Taurus',
    symbol: '♉',
    motto: 'I Have',
    dates: 'Apr 20 - May 20',
    element: 'Earth',
    house: '2nd House Succedent',
    modality: 'Fixed',
    rulerSymbol: '♀',
    rulerName: 'Venus',
    colorHex: '#10b981',
    themeColor: 'border-emerald-500 text-emerald-400 bg-emerald-500/10',
    horoscope: {
      overview: 'Patience and steady persistence yield rich rewards today. Ground yourself in tactile, comforting routines.',
      love: 'Affection deepens through simple acts of kindness. Prepare a meal or offer a soothing gesture to someone special.',
      career: 'Financial matters are in focus. A methodical audit of your budget or investments brings clarity and security.',
      health: 'Focus on nourishing foods and plenty of water. Rest your throat and neck area if feeling fatigued.',
      cosmicTip: 'Root deeply into your values before making any major financial decisions.'
    },
    luckyColor: 'Forest Emerald',
    luckyNumber: 6,
    compatibleSign: 'Virgo & Capricorn'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    symbol: '♊',
    motto: 'I Think',
    dates: 'May 21 - Jun 20',
    element: 'Air',
    house: '3rd House Cadent',
    modality: 'Mutable',
    rulerSymbol: '☿',
    rulerName: 'Mercury',
    colorHex: '#38bdf8',
    themeColor: 'border-sky-500 text-sky-400 bg-sky-500/10',
    horoscope: {
      overview: 'Curiosity opens surprising doorways today. Expect vibrant conversations, intriguing news, or a spontaneous idea exchange.',
      love: 'Witty banter and playful intellect keep sparks flying. Share your favorite books or humorous observations.',
      career: 'Multitasking comes naturally today. Write that email pitch, collaborate on brainstorms, or finish pending drafts.',
      health: 'Mindful breathing exercises will calm a racing mind. Give your eyes a break from digital screens.',
      cosmicTip: 'Embrace mental flexibility; unexpected news leads to exciting opportunities.'
    },
    luckyColor: 'Electric Cyan',
    luckyNumber: 5,
    compatibleSign: 'Libra & Aquarius'
  },
  {
    id: 'cancer',
    name: 'Cancer',
    symbol: '♋',
    motto: 'I Feel',
    dates: 'Jun 21 - Jul 22',
    element: 'Water',
    house: '4th House Angular',
    modality: 'Cardinal',
    rulerSymbol: '☽',
    rulerName: 'Moon',
    colorHex: '#60a5fa',
    themeColor: 'border-blue-500 text-blue-400 bg-blue-500/10',
    horoscope: {
      overview: 'Intuition is heightened under current lunar alignments. Trust your gut feel regarding home, family, and emotional boundaries.',
      love: 'Nurturing energy surrounds your relationships. Soften your guard and allow vulnerable feelings to be shared.',
      career: 'Your empathetic leadership creates harmony in team dynamics. Protect your energy while listening to others.',
      health: 'Prioritize restorative rest, warm teas, and a soothing bath to cleanse your emotional field.',
      cosmicTip: 'Your home is your sanctuary—create a cozy space where your soul can recharge.'
    },
    luckyColor: 'Silver Moon',
    luckyNumber: 2,
    compatibleSign: 'Scorpio & Pisces'
  },
  {
    id: 'leo',
    name: 'Leo',
    symbol: '♌',
    motto: 'I Will',
    dates: 'Jul 23 - Aug 22',
    element: 'Fire',
    house: '5th House Succedent',
    modality: 'Fixed',
    rulerSymbol: '☉',
    rulerName: 'Sun',
    colorHex: '#f97316',
    themeColor: 'border-orange-500 text-orange-400 bg-orange-500/10',
    horoscope: {
      overview: 'Your radiant charisma shines brightly today. Share your creative gifts generously, and don’t hesitate to take center stage.',
      love: 'Romance takes on a grand, theatrical flare. Plan a memorable date or send a heartfelt compliment.',
      career: 'Leadership comes effortlessly. Pitching ambitious concepts will win enthusiastic buy-in from key stakeholders.',
      health: 'Postural exercises and heart-opening yoga poses enhance your vitality and spinal alignment.',
      cosmicTip: 'Let your authentic light shine without seeking external validation.'
    },
    luckyColor: 'Radiant Gold',
    luckyNumber: 1,
    compatibleSign: 'Aries & Sagittarius'
  },
  {
    id: 'virgo',
    name: 'Virgo',
    symbol: '♍',
    motto: 'I Analyse',
    dates: 'Aug 23 - Sep 22',
    element: 'Earth',
    house: '6th House Cadent',
    modality: 'Mutable',
    rulerSymbol: '☿',
    rulerName: 'Mercury',
    colorHex: '#14b8a6',
    themeColor: 'border-teal-500 text-teal-400 bg-teal-500/10',
    horoscope: {
      overview: 'Precision, organization, and attention to detail bring immense satisfaction. Streamline routines to free up creative bandwidth.',
      love: 'Practical helpfulness speaks louder than dramatic gestures today. Offer a helping hand to your significant other.',
      career: 'You spot details everyone else missed. Quality assurance and systematic refinement earn quiet admiration.',
      health: 'Gut health and mindful eating are key today. Incorporate fresh greens and probiotics into your diet.',
      cosmicTip: 'Perfection is a horizon, not a destination. Celebrate your incremental progress.'
    },
    luckyColor: 'Olive Jade',
    luckyNumber: 5,
    compatibleSign: 'Taurus & Capricorn'
  },
  {
    id: 'libra',
    name: 'Libra',
    symbol: '♎',
    motto: 'I Balance',
    dates: 'Sep 23 - Oct 22',
    element: 'Air',
    house: '7th House Angular',
    modality: 'Cardinal',
    rulerSymbol: '♀',
    rulerName: 'Venus',
    colorHex: '#ec4899',
    themeColor: 'border-pink-500 text-pink-400 bg-pink-500/10',
    horoscope: {
      overview: 'Harmony, aesthetics, and diplomatic resolution rule your day. Seek compromise where tension has lingered.',
      love: 'Mutual understanding blossoms. Articulating your needs with gentle tact brings deep partnership intimacy.',
      career: 'Mediating a disagreement or facilitating a group consensus highlights your master negotiation skills.',
      health: 'Kidney and lower back health benefit from ample hydration and gentle stretching.',
      cosmicTip: 'True balance comes from honoring your own boundaries as much as pleasing others.'
    },
    luckyColor: 'Rose Quartz',
    luckyNumber: 7,
    compatibleSign: 'Gemini & Aquarius'
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    symbol: '♏',
    motto: 'I Desire',
    dates: 'Oct 23 - Nov 21',
    element: 'Water',
    house: '8th House Succedent',
    modality: 'Fixed',
    rulerSymbol: '♇',
    rulerName: 'Pluto / Mars',
    colorHex: '#6366f1',
    themeColor: 'border-indigo-500 text-indigo-400 bg-indigo-500/10',
    horoscope: {
      overview: 'Deep transformational insight is at your fingertips. Dive into research, confidential projects, or personal healing.',
      love: 'Intense emotional magnetic pulls bring profound breakthroughs in trust and soul connection.',
      career: 'Strategic focus allows you to uncover hidden inefficiencies or solve complex underlying problems.',
      health: 'Detoxifying rituals, deep breathing, and letting go of grudges refresh your vital stamina.',
      cosmicTip: 'Embrace transformation; releasing what no longer serves makes space for authentic power.'
    },
    luckyColor: 'Midnight Burgundy',
    luckyNumber: 8,
    compatibleSign: 'Cancer & Pisces'
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    symbol: '♐',
    motto: 'I See',
    dates: 'Nov 22 - Dec 21',
    element: 'Fire',
    house: '9th House Cadent',
    modality: 'Mutable',
    rulerSymbol: '♃',
    rulerName: 'Jupiter',
    colorHex: '#f59e0b',
    themeColor: 'border-amber-500 text-amber-400 bg-amber-500/10',
    horoscope: {
      overview: 'Optimism and expansive horizons call your name. Explore philosophy, new cultures, or plan a future adventure.',
      love: 'Shared humor and adventurous exploration spark romantic joy. Plan a spontaneous outing.',
      career: 'Big-picture thinking propels your goals forward. Inspire others with your vision for growth.',
      health: 'Outdoors movement, hiking, or leg stretches release stored nervous energy.',
      cosmicTip: 'The universe favors the bold learner—expand your mind beyond habitual comfort zones.'
    },
    luckyColor: 'Royal Saffron',
    luckyNumber: 3,
    compatibleSign: 'Aries & Leo'
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    symbol: '♑',
    motto: 'I Use',
    dates: 'Dec 22 - Jan 19',
    element: 'Earth',
    house: '10th House Angular',
    modality: 'Cardinal',
    rulerSymbol: '♄',
    rulerName: 'Saturn',
    colorHex: '#78716c',
    themeColor: 'border-stone-500 text-stone-400 bg-stone-500/10',
    horoscope: {
      overview: 'Disciplined determination aligns key milestones. Your long-term ambition is recognized by mentors and peers.',
      love: 'Loyalty and steadfast commitment are your ultimate expressions of affection today.',
      career: 'Structure and strategic planning yield major progress. Professional authority comes naturally.',
      health: 'Take care of bones, joints, and posture with strength training and proper alignment.',
      cosmicTip: 'Brick by brick, great monuments are built. Trust your steady discipline.'
    },
    luckyColor: 'Slate Onyx',
    luckyNumber: 4,
    compatibleSign: 'Taurus & Virgo'
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    symbol: '♒',
    motto: 'I Know',
    dates: 'Jan 20 - Feb 18',
    element: 'Air',
    house: '11th House Succedent',
    modality: 'Fixed',
    rulerSymbol: '♅',
    rulerName: 'Uranus / Saturn',
    colorHex: '#06b6d4',
    themeColor: 'border-cyan-500 text-cyan-400 bg-cyan-500/10',
    horoscope: {
      overview: 'Innovative breakthroughs and humanitarian vision highlight your day. Pioneer unconventional solutions.',
      love: 'Intellectual freedom and genuine friendship form the bedrock of your romantic attraction.',
      career: 'Tech advances, group networking, and original ideas get enthusiastic recognition.',
      health: 'Circulation and ankle mobility need attention. Try gentle cardiovascular movement.',
      cosmicTip: 'Embrace your unique individuality; your vision paves the way for future trends.'
    },
    luckyColor: 'Cosmic Turquoise',
    luckyNumber: 11,
    compatibleSign: 'Gemini & Libra'
  },
  {
    id: 'pisces',
    name: 'Pisces',
    symbol: '♓',
    motto: 'I Believe',
    dates: 'Feb 19 - Mar 20',
    element: 'Water',
    house: '12th House Cadent',
    modality: 'Mutable',
    rulerSymbol: '♆',
    rulerName: 'Neptune / Jupiter',
    colorHex: '#a855f7',
    themeColor: 'border-purple-500 text-purple-400 bg-purple-500/10',
    horoscope: {
      overview: 'Mystical intuition and artistic imagination surge today. Channel your sensitivity into music, poetry, or meditation.',
      love: 'Soulful, empathetic connection transcends words. Express your feelings through art or music.',
      career: 'Creative problem-solving flourishes. Trust intuitive sparks even if they defy conventional logic.',
      health: 'Foot reflexology, grounding barefoot walks, or meditation will balance your aura.',
      cosmicTip: 'Surrender to the flow of universal timing; trust the unseen magic around you.'
    },
    luckyColor: 'Amethyst Violet',
    luckyNumber: 7,
    compatibleSign: 'Cancer & Scorpio'
  }
];
