'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Language = 'English' | 'Hindi' | 'Bengali' | 'Marathi' | 'Punjabi' | 'Gujarati';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  English: {
    // Navbar
    'nav.store': 'Store',
    'nav.talk_to_astrologer': 'Talk to Astrologer',
    'nav.chat_with_astrologer': 'Chat with Astrologer',
    'nav.call_an_astrologer': 'Call an Astrologer',
    'nav.live_sessions': 'Live Sessions',
    'nav.kundli_reports': 'Kundli & Reports',
    'nav.free_kundli': 'Free Kundli',
    'nav.kundli_matching': 'Kundli Matching',
    'nav.horoscope': 'Horoscope',
    'nav.pooja_remedies': 'Pooja & Remedies',
    'nav.book_a_pooja': 'Book a Pooja',
    'nav.explore': 'Explore',
    'nav.occult': 'Occult',
    'nav.astrology': 'Astrology',
    'nav.daily_spin': 'Daily Spin',
    'nav.search_placeholder': 'Search for astrologers, reports...',
    'nav.login': 'Log In',

    // Hero Section
    'hero.badge': 'Premium Consultation',
    'hero.heading_1': 'Talk to a real astrologer — your first consultation ',
    'hero.heading_free': 'free',
    'hero.pricing_subtext': 'Transparent pricing',
    'hero.chat': 'chat',
    'hero.call': 'call',
    'hero.chat_now': 'Chat Now',
    'hero.call_now': 'Call Now',
    'hero.online_count': 'astrologers online',

    // Features / Astrologer Sections
    'home.our_astrologers': 'Our Astrologers',
    'home.experience_guide': 'Experienced guides available round the clock',
    'home.top_astrologers': 'Top Astrologers',
    'home.chat_button': 'Chat',
    'home.call_button': 'Call',
    'home.reviews': 'What Our Clients Say',

    // Footer
    'footer.description': 'AstroLive: India\'s trusted astrology app. Get personalized predictions, live consultations, and cosmic guidance.',
    'footer.links_title': 'Quick Links',
    'footer.support_title': 'Support',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2026 AstroLive. All rights reserved.',
  },
  Hindi: {
    // Navbar
    'nav.store': 'स्टोर',
    'nav.talk_to_astrologer': 'ज्योतिषी से बात करें',
    'nav.chat_with_astrologer': 'ज्योतिषी से चैट करें',
    'nav.call_an_astrologer': 'ज्योतिषी को कॉल करें',
    'nav.live_sessions': 'लाइव सत्र',
    'nav.kundli_reports': 'कुंडली और रिपोर्ट',
    'nav.free_kundli': 'मुफ़्त कुंडली',
    'nav.kundli_matching': 'कुंडली मिलान',
    'nav.horoscope': 'राशिफल',
    'nav.pooja_remedies': 'पूजा और उपाय',
    'nav.book_a_pooja': 'पूजा बुक करें',
    'nav.explore': 'अन्वेषण करें',
    'nav.occult': 'गुप्त विज्ञान',
    'nav.astrology': 'ज्योतिष',
    'nav.daily_spin': 'दैनिक स्पिन',
    'nav.search_placeholder': 'ज्योतिषियों, रिपोर्टों की खोज करें...',
    'nav.login': 'लॉग इन करें',

    // Hero Section
    'hero.badge': 'प्रीमियम परामर्श',
    'hero.heading_1': 'एक असली ज्योतिषी से बात करें — आपका पहला परामर्श बिल्कुल ',
    'hero.heading_free': 'मुफ्त',
    'hero.pricing_subtext': 'पारदर्शी कीमतें',
    'hero.chat': 'चैट',
    'hero.call': 'कॉल',
    'hero.chat_now': 'अभी चैट करें',
    'hero.call_now': 'अभी कॉल करें',
    'hero.online_count': 'ज्योतिषी ऑनलाइन हैं',

    // Features / Astrologer Sections
    'home.our_astrologers': 'हमारे ज्योतिषी',
    'home.experience_guide': '24 घंटे अनुभवी मार्गदर्शक उपलब्ध हैं',
    'home.top_astrologers': 'शीर्ष ज्योतिषी',
    'home.chat_button': 'चैट करें',
    'home.call_button': 'कॉल करें',
    'home.reviews': 'हमारे ग्राहक क्या कहते हैं',

    // Footer
    'footer.description': 'एस्ट्रोलाइव: भारत का भरोसेमंद ज्योतिष ऐप। व्यक्तिगत भविष्यवाणियां, लाइव परामर्श और ब्रह्मांडीय मार्गदर्शन प्राप्त करें।',
    'footer.links_title': 'त्वरित लिंक',
    'footer.support_title': 'सहायता',
    'footer.terms': 'नियम एवं शर्तें',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.copyright': '© 2026 एस्ट्रोलाइव। सर्वाधिकार सुरक्षित।',
  },
  Bengali: {
    // Navbar
    'nav.store': 'স্টোর',
    'nav.talk_to_astrologer': 'জ্যোতিষীর সাথে কথা বলুন',
    'nav.chat_with_astrologer': 'জ্যোতিষীর সাথে চ্যাট করুন',
    'nav.call_an_astrologer': 'জ্যোতিষীকে কল করুন',
    'nav.live_sessions': 'লাইভ সেশন',
    'nav.kundli_reports': 'কুন্ডলী ও রিপোর্ট',
    'nav.free_kundli': 'ফ্রি কুন্ডলী',
    'nav.kundli_matching': 'কুন্ডলী ম্যাচিং',
    'nav.horoscope': 'রাশিফল',
    'nav.pooja_remedies': 'পূজা ও প্রতিকার',
    'nav.book_a_pooja': 'পূজা বুক করুন',
    'nav.explore': 'অন্বেষণ করুন',
    'nav.occult': 'গুপ্তবিদ্যা',
    'nav.astrology': 'জ্যোতিষশাস্ত্র',
    'nav.daily_spin': 'ডেইলি স্পিন',
    'nav.search_placeholder': 'জ্যোতিষী, রিপোর্ট খুঁজুন...',
    'nav.login': 'লগ ইন',

    // Hero Section
    'hero.badge': 'প্রিমিয়াম পরামর্শ',
    'hero.heading_1': 'একজন প্রকৃত জ্যোতিষীর সাথে কথা বলুন — আপনার প্রথম পরামর্শ ',
    'hero.heading_free': 'বিনামূল্যে',
    'hero.pricing_subtext': 'স্বচ্ছ মূল্য',
    'hero.chat': 'চ্যাট',
    'hero.call': 'কল',
    'hero.chat_now': 'এখনই চ্যাট করুন',
    'hero.call_now': 'এখনই কল করুন',
    'hero.online_count': 'জ্যোতিষী অনলাইনে আছেন',

    // Features / Astrologer Sections
    'home.our_astrologers': 'আমাদের জ্যোতিষীগণ',
    'home.experience_guide': 'চব্বিশ ঘন্টা অভিজ্ঞ গাইড উপলব্ধ আছে',
    'home.top_astrologers': 'শীর্ষ জ্যোতিষী',
    'home.chat_button': 'চ্যাট',
    'home.call_button': 'কল',
    'home.reviews': 'গ্রাহকদের মতামত',

    // Footer
    'footer.description': 'অ্যাস্ট্রোলাইভ: ভারতের বিশ্বস্ত জ্যোতিষ অ্যাপ। ব্যক্তিগতকৃত ভবিষ্যদ্বাণী, লাইভ পরামর্শ এবং মহাজাগতিক নির্দেশনা পান।',
    'footer.links_title': 'দ্রুত লিঙ্ক',
    'footer.support_title': 'সহায়তা',
    'footer.terms': 'শর্তাবলী',
    'footer.privacy': 'গোপনীয়তা নীতি',
    'footer.copyright': '© 2026 অ্যাস্ট্রোলাইভ। সর্বস্বত্ব সংরক্ষিত।',
  },
  Marathi: {
    // Navbar
    'nav.store': 'स्टोर',
    'nav.talk_to_astrologer': 'ज्योतिषांशी बोला',
    'nav.chat_with_astrologer': 'ज्योतिषांशी चॅट करा',
    'nav.call_an_astrologer': 'ज्योतिषांना कॉल करा',
    'nav.live_sessions': 'लाइव्ह सत्रे',
    'nav.kundli_reports': 'कुंडली आणि अहवाल',
    'nav.free_kundli': 'मोफत कुंडली',
    'nav.kundli_matching': 'कुंडली जुळवणी',
    'nav.horoscope': 'राशीभविष्य',
    'nav.pooja_remedies': 'पूजा आणि उपाय',
    'nav.book_a_pooja': 'पूजा बुक करा',
    'nav.explore': 'एक्सप्लोर करा',
    'nav.occult': 'गुप्त विज्ञान',
    'nav.astrology': 'ज्योतिषशास्त्र',
    'nav.daily_spin': 'दैनिक स्पिन',
    'nav.search_placeholder': 'ज्योतिषी, अहवाल शोधा...',
    'nav.login': 'लॉग इन करा',

    // Hero Section
    'hero.badge': 'प्रीमियम सल्ला',
    'hero.heading_1': 'खऱ्या ज्योतिषाशी बोला — तुमचा पहिला सल्ला ',
    'hero.heading_free': 'मोफत',
    'hero.pricing_subtext': 'पारदर्शक किंमत',
    'hero.chat': 'चॅट',
    'hero.call': 'कॉल',
    'hero.chat_now': 'आताच चॅट करा',
    'hero.call_now': 'आताच कॉल करा',
    'hero.online_count': 'ज्योतिषी ऑनलाइन आहेत',

    // Features / Astrologer Sections
    'home.our_astrologers': 'आमचे ज्योतिषी',
    'home.experience_guide': '२४ तास अनुभवी मार्गदर्शक उपलब्ध',
    'home.top_astrologers': 'शीर्ष ज्योतिषी',
    'home.chat_button': 'चॅट करा',
    'home.call_button': 'कॉल करा',
    'home.reviews': 'आमचे ग्राहक काय म्हणतात',

    // Footer
    'footer.description': 'अॅस्ट्रोलाइव्ह: भारताचे विश्वासार्ह ज्योतिष अॅप। वैयक्तिकृत अंदाज, थेट सल्ला आणि वैश्विक मार्गदर्शन मिळवा।',
    'footer.links_title': 'क्विक लिंक्स',
    'footer.support_title': 'सपोर्ट',
    'footer.terms': 'अटी आणि शर्ती',
    'footer.privacy': 'गोपनीयता धोरण',
    'footer.copyright': '© 2026 अॅस्ट्रोलाइव्ह। सर्व हक्क राखीव.',
  },
  Punjabi: {
    // Navbar
    'nav.store': 'ਸਟੋਰ',
    'nav.talk_to_astrologer': 'ਜੋਤਸ਼ੀ ਨਾਲ ਗੱਲ ਕਰੋ',
    'nav.chat_with_astrologer': 'ਜੋਤਸ਼ੀ ਨਾਲ ਚੈਟ ਕਰੋ',
    'nav.call_an_astrologer': 'ਜੋਤਸ਼ੀ ਨੂੰ ਕਾਲ ਕਰੋ',
    'nav.live_sessions': 'ਲਾਈਵ ਸੈਸ਼ਨ',
    'nav.kundli_reports': 'ਕੁੰਡਲੀ ਅਤੇ ਰਿਪੋਰਟਾਂ',
    'nav.free_kundli': 'ਮੁਫ਼ਤ ਕੁੰਡਲੀ',
    'nav.kundli_matching': 'ਕੁੰਡਲੀ ਮਿਲਾਨ',
    'nav.horoscope': 'ਰਾਸ਼ੀਫਲ',
    'nav.pooja_remedies': 'ਪੂਜਾ ਅਤੇ ਉਪਾਅ',
    'nav.book_pooja': 'ਪੂਜਾ ਬੁੱਕ ਕਰੋ',
    'nav.explore': 'ਐਕਸਪਲੋਰ ਕਰੋ',
    'nav.occult': 'ਗੁਪਤ ਵਿਗਿਆਨ',
    'nav.astrology': 'ਜੋਤਸ਼',
    'nav.daily_spin': 'ਰੋਜ਼ਾਨਾ ਸਪਿਨ',
    'nav.search_placeholder': 'ਜੋਤਸ਼ੀਆਂ, ਰਿਪੋਰਟਾਂ ਦੀ ਖੋਜ ਕਰੋ...',
    'nav.login': 'ਲੌਗ ਇਨ',

    // Hero Section
    'hero.badge': 'ਪ੍ਰੀਮੀਅਮ ਸਲਾਹ',
    'hero.heading_1': 'ਇੱਕ ਅਸਲੀ ਜੋਤਸ਼ੀ ਨਾਲ ਗੱਲ ਕਰੋ — ਤੁਹਾਡੀ ਪਹਿਲੀ ਸਲਾਹ ',
    'hero.heading_free': 'ਮੁਫ਼ਤ',
    'hero.pricing_subtext': 'ਪਾਰਦਰਸ਼ੀ ਕੀਮਤਾਂ',
    'hero.chat': 'ਚੈਟ',
    'hero.call': 'ਕਾਲ',
    'hero.chat_now': 'ਹੁਣੇ ਚੈਟ ਕਰੋ',
    'hero.call_now': 'ਹੁਣੇ ਕਾਲ ਕਰੋ',
    'hero.online_count': 'ਜੋਤਸ਼ੀ ਆਨਲਾਈਨ ਹਨ',

    // Features / Astrologer Sections
    'home.our_astrologers': 'ਸਾਡੇ ਜੋਤਸ਼ੀ',
    'home.experience_guide': '24 ਘੰਟੇ ਤਜਰਬੇਕਾਰ ਮਾਰਗਦਰਸ਼ਕ ਉਪਲਬਧ ਹਨ',
    'home.top_astrologers': 'ਚੋਟੀ ਦੇ ਜੋਤਸ਼ੀ',
    'home.chat_button': 'ਚੈਟ',
    'home.call_button': 'ਕਾਲ',
    'home.reviews': 'ਸਾਡੇ ਗਾਹਕ ਕੀ ਕਹਿੰਦੇ ਹਨ',

    // Footer
    'footer.description': 'ਐਸਟ੍ਰੋਲਾਈਵ: ਭਾਰਤ ਦੀ ਭਰੋਸੇਮੰਦ ਜੋਤਸ਼ ਐਪ। ਨਿੱਜੀ ਭਵਿੱਖਬਾਣੀਆਂ, ਲਾਈਵ ਸਲਾਹ ਅਤੇ ਬ੍ਰਹਿਮੰਡੀ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਾਪਤ ਕਰੋ।',
    'footer.links_title': 'ਤੁਰੰਤ ਲਿੰਕ',
    'footer.support_title': 'ਸਹਾਇਤਾ',
    'footer.terms': 'ਨਿਯਮ ਅਤੇ ਸ਼ਰਤਾਂ',
    'footer.privacy': 'ਪਰਦੇਦਾਰੀ ਨੀਤੀ',
    'footer.copyright': '© 2026 ਐਸਟ੍ਰੋਲਾਈਵ। ਸਭ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।',
  },
  Gujarati: {
    // Navbar
    'nav.store': 'સ્ટોર',
    'nav.talk_astrologer': 'જ્યોતિષી સાથે વાત કરો',
    'nav.chat_astrologer': 'જ્યોતિષી સાથે ચેટ કરો',
    'nav.call_astrologer': 'જ્યોતિષીને કોલ કરો',
    'nav.live_sessions': 'લાઇવ સત્રો',
    'nav.kundli_reports': 'કુંડળી અને અહેવાલ',
    'nav.free_kundli': 'મફત કુંડળી',
    'nav.kundli_matching': 'કુંડળી મિલાન',
    'nav.horoscope': 'રાશિફળ',
    'nav.pooja_remedies': 'પૂજા અને ઉપાય',
    'nav.book_pooja': 'પૂજા બુક કરો',
    'nav.explore': 'એક્સ્પ્લોર કરો',
    'nav.occult': 'ગુપ્ત વિજ્ઞાન',
    'nav.astrology': 'જ્યોતિષશાસ્ત્ર',
    'nav.daily_spin': 'દૈનિક સ્પિન',
    'nav.search_placeholder': 'જ્યોતિષીઓ, અહેવાલો શોધો...',
    'nav.login': 'લોગ ઇન કરો',

    // Hero Section
    'hero.badge': 'પ્રીમિયમ પરામર્શ',
    'hero.heading_1': 'એક સાચા જ્યોતિષી સાથે વાત કરો — તમારી પ્રથમ પરામર્શ ',
    'hero.heading_free': 'મફત',
    'hero.pricing_subtext': 'પારદર્શક કિંમતો',
    'hero.chat': 'ચેટ',
    'hero.call': 'કોલ',
    'hero.chat_now': 'હમણાં જ ચેટ કરો',
    'hero.call_now': 'હમણાં જ કોલ કરો',
    'hero.online_count': 'જ્યોતિષીઓ ઓનલાઇન છે',

    // Features / Astrologer Sections
    'home.our_astrologers': 'અમારા જ્યોતિષીઓ',
    'home.experience_guide': 'ચોવીસ કલાક અનુભવી માર્ગદર્શકો ઉપલબ્ધ છે',
    'home.top_astrologers': 'ટોચના જ્યોતિષીઓ',
    'home.chat_button': 'ચેટ કરો',
    'home.call_button': 'કોલ કરો',
    'home.reviews': 'અમારા ગ્રાહકો શું કહે છે',

    // Footer
    'footer.description': 'એસ્ટ્રોલાઇવ: ભારતની વિશ્વસનીય જ્યોતિષ એપ્લિકેશન. વ્યક્તિગત આગાહીઓ, લાઇવ પરામર્શ અને કોસ્મિક માર્ગદર્શન મેળવો.',
    'footer.links_title': 'ઝડપી લિંક્સ',
    'footer.support_title': 'સપોર્ટ',
    'footer.terms': 'નિયમો અને શરતો',
    'footer.privacy': 'ગોપનીયતા નીતિ',
    'footer.copyright': '© 2026 એસ્ટ્રોલાઇવ. સર્વાધિકાર સુરક્ષિત.',
  },
};

const langCodeMap: Record<Language, string> = {
  English: 'en',
  Hindi: 'hi',
  Bengali: 'bn',
  Marathi: 'mr',
  Punjabi: 'pa',
  Gujarati: 'gu',
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'English',
  setLanguage: () => {},
  t: (key: string) => key,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('English');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Get stored language from localStorage
    const stored = localStorage.getItem('astrolive-language') as Language | null;
    if (stored && translations[stored]) {
      setLanguageState(stored);
    }

    // 2. Load Google Translate script if not present
    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // 3. Define callback for script initialization
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,bn,mr,pa,gu',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // 4. Create hidden widget mount point
    const divId = 'google_translate_element';
    if (!document.getElementById(divId)) {
      const div = document.createElement('div');
      div.id = divId;
      div.style.display = 'none';
      document.body.appendChild(div);
    }

    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('astrolive-language', lang);

      // Set cookies for Google Translate to pickup
      const code = langCodeMap[lang];
      const cookieValue = `googtrans=/en/${code}`;
      document.cookie = `${cookieValue}; path=/;`;
      document.cookie = `${cookieValue}; path=/; domain=${window.location.hostname};`;
      
      // Handle subdomains if any
      const domainParts = window.location.hostname.split('.');
      if (domainParts.length >= 2) {
        const baseDomain = `.${domainParts.slice(-2).join('.')}`;
        document.cookie = `${cookieValue}; path=/; domain=${baseDomain};`;
      }

      // Reload the page to trigger Translate element on all content
      window.location.reload();
    }
  }, []);

  const t = useCallback(
    (key: string, defaultValue?: string) => {
      const activeDict = translations[language] || translations['English'];
      return activeDict[key] || defaultValue || translations['English'][key] || key;
    },
    [language]
  );

  // Avoid hydrations mismatch by showing hidden content or simple fallback
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
