export interface KnowledgeItem {
  id: string;
  topic: string;
  category: 'house' | 'planet' | 'dasha' | 'transit' | 'general';
  title: {
    en: string;
    hi: string;
  };
  summary: {
    en: string;
    hi: string;
  };
}

export const ASTROLOGY_KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    id: 'house_3',
    topic: '3rd House',
    category: 'house',
    title: {
      en: 'Third House (Bhav 3) - Communication & Courage',
      hi: 'तृतीय भाव (सहज भाव) - संचार और पराक्रम',
    },
    summary: {
      en: 'The 3rd house represents communication, intellect, younger siblings, courage, short travels, and self-expression.',
      hi: 'तृतीय भाव संचार, बुद्धि, छोटे भाई-बहन, पराक्रम, छोटी यात्राओं और आत्म-अभिव्यक्ति का प्रतिनिधित्व करता है।',
    },
  },
  {
    id: 'mercury_3rd',
    topic: 'Mercury in 3rd House',
    category: 'planet',
    title: {
      en: 'Mercury (Budh) in 3rd House',
      hi: 'तृतीय भाव में बुध (Mercury in 3rd House)',
    },
    summary: {
      en: 'Mercury placement in the 3rd house often suggests strong analytical skills, fluent communication, and curiosity in learning.',
      hi: 'तृतीय भाव में बुध की स्थिति तेज विश्लेषणात्मक क्षमता, स्पष्ट संचार और सीखने की तीव्र इच्छा दर्शाती है।',
    },
  },
  {
    id: 'dasha_basics',
    topic: 'What is a Dasha?',
    category: 'dasha',
    title: {
      en: 'Vimshottari Dasha System',
      hi: 'विंशोत्तरी महादशा परिचय',
    },
    summary: {
      en: 'Vimshottari Dasha is a 120-year planetary period cycle in Vedic Astrology that highlights which planet exerts dominant influence over specific periods of your life.',
      hi: 'विंशोत्तरी महादशा वैदिक ज्योतिष की 120-वर्षीय ग्रहीय अवधि प्रणाली है जो यह बताती है कि जीवन के किस काल में किस ग्रह का मुख्य प्रभाव रहेगा।',
    },
  },
];
