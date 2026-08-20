'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, MessageSquare, UserCheck, Globe, Send, ShieldAlert, ArrowRight } from 'lucide-react';
import { checkConfidenceBoundary, ConfidenceCheckResult } from './confidenceBoundary';
import { ASTROLOGY_KNOWLEDGE_BASE } from './knowledgeBase';
import { buildHandoffSummary, HandoffPayload } from './handoffSummary';
import { trackEvent } from '@/lib/analytics';

export default function AIAssistantChat() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ id: string; role: 'user' | 'assistant'; text: string; isEscalation?: boolean }>>([
    {
      id: 'init',
      role: 'assistant',
      text:
        language === 'en'
          ? "Namaste! I am your AI Astrology Guide. I can help explain your birth chart, planetary placements, and astrology basics. How can I help you today?"
          : "नमस्ते! मैं आपका AI ज्योतिष सहायक हूँ। मैं आपकी कुंडली, ग्रहों की स्थिति और ज्योतिषीय अवधारणाओं को समझने में मदद कर सकता हूँ। आज आप क्या जानना चाहते हैं?",
    },
  ]);
  const [handoffData, setHandoffData] = useState<HandoffPayload | null>(null);

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim()) return;

    trackEvent('assistant_message_sent', { query_length: textToSend.length, language });

    const userMsg = { id: Date.now().toString(), role: 'user' as const, text: textToSend };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    if (!queryText) setInputQuery('');

    // Check confidence boundary
    const boundaryResult = checkConfidenceBoundary(textToSend);

    if (boundaryResult.shouldEscalate) {
      trackEvent('assistant_escalated_to_human', { reason: boundaryResult.reason, last_query: textToSend });
      const summary = buildHandoffSummary(textToSend, updatedMessages);
      setHandoffData(summary);

      const assistantMsg = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        text:
          language === 'en'
            ? "This question involves personal timing or major life choices best evaluated by an expert astrologer. I have prepared a conversation summary so our astrologer can assist you immediately."
            : "यह प्रश्न व्यक्तिगत समय या महत्वपूर्ण निर्णय से संबंधित है, जिसका विश्लेषण किसी विशेषज्ञ ज्योतिषी द्वारा सबसे अच्छा किया जाता है। मैंने एक सारांश तैयार किया है ताकि हमारे ज्योतिषी आपकी तुरंत मदद कर सकें।",
        isEscalation: true,
      };
      setMessages([...updatedMessages, assistantMsg]);
    } else {
      // Direct chart-aware educational answer
      let replyText = '';
      const lower = textToSend.toLowerCase();

      if (lower.includes('mercury') || lower.includes('3rd house') || lower.includes('बुध')) {
        replyText =
          language === 'en'
            ? "Based on your chart (Libra Lagna), Mercury in the 3rd house often suggests strong analytical thinking, clear communication skills, and curiosity in learning new subjects."
            : "आपकी कुंडली (तुला लग्न) के अनुसार, 3rd हाउस में बुध की स्थिति तेज विश्लेषणात्मक क्षमता, स्पष्ट संवाद कौशल और नया सीखने की उत्सुकता का संकेत देती है।";
      } else if (lower.includes('dasha') || lower.includes('दशा')) {
        replyText =
          language === 'en'
            ? "Vimshottari Dasha is a 120-year planetary cycle. In your chart, you are currently running Rahu Mahadasha (2018-2036), which often highlights periods of rapid learning and ambitious goals."
            : "विंशोत्तरी महादशा 120-वर्षीय ग्रहीय चक्र है। आपकी कुंडली में वर्तमान में राहु महादशा (2018-2036) चल रही है, जो तीव्र प्रगति और महत्वाकांक्षी लक्ष्यों का संकेत देती है।";
      } else {
        replyText =
          language === 'en'
            ? "Vedic astrology teaches that planetary placements reflect personal strengths and natural tendencies. Your chart highlights a strong Sun in Leo, suggesting inherent leadership potential."
            : "वैदिक ज्योतिष सिखाता है कि ग्रहों की स्थितियाँ आपकी स्वाभाविक क्षमताओं को दर्शाती हैं। आपकी कुंडली में सिंह राशि में सूर्य की स्थिति नेतृत्व क्षमता का संकेत देती है।";
      }

      const assistantMsg = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        text: replyText,
      };
      setMessages([...updatedMessages, assistantMsg]);
    }
  };

  return (
    <div className="max-w-[1000px] w-[92%] mx-auto py-8 space-y-6">
      {/* Header Banner */}
      <div className="relative border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4"
           style={{ background: 'var(--card-bg)', backdropFilter: 'blur(12px)' }}>
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              AI Astrological Guide
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-wide" style={{ color: 'var(--text-primary)' }}>
            Astrology Beginner Assistant
          </h1>
          <p className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
            Educational companion for understanding your birth chart placements and Vedic astrology concepts.
          </p>
        </div>

        {/* Language Switcher */}
        <div className="relative z-10 flex items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20">
          <Globe className="w-4 h-4 text-white ml-2" />
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-xl text-xs font-extrabold transition cursor-pointer ${
              language === 'en' ? 'bg-white text-[#6b2cbd]' : 'text-white hover:bg-white/10'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('hi')}
            className={`px-3 py-1 rounded-xl text-xs font-extrabold transition cursor-pointer ${
              language === 'hi' ? 'bg-white text-[#6b2cbd]' : 'text-white hover:bg-white/10'
            }`}
          >
            हिंदी
          </button>
        </div>
      </div>

      {/* Suggested Test Questions */}
      <div className="bg-purple-50/50 border border-purple-100 rounded-3xl p-4 space-y-2">
        <span className="text-xs font-extrabold text-[#6b2cbd] uppercase tracking-wider block">
          Try asking (Click to test):
        </span>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "What does it mean that I have Mercury in my 3rd house?",
            "When will I get married?",
            "What is a dasha?",
            "Should I take this job offer?",
            "Why do I keep having relationship problems?",
          ].map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="bg-white hover:bg-purple-100 text-slate-700 border border-purple-200 px-3 py-1.5 rounded-2xl font-medium transition cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Window */}
      <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-md min-h-[380px] max-h-[500px] overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 text-xs font-medium leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-[#9282eb] to-[#ba8af8] text-white rounded-br-none'
                  : msg.isEscalation
                  ? 'bg-amber-50 border border-amber-200 text-amber-900 rounded-bl-none'
                  : 'bg-slate-50 border border-purple-100 text-slate-800 rounded-bl-none'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1 text-[10px] font-bold opacity-80">
                {msg.role === 'user' ? (
                  <span>You</span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#f26d85]" /> Astro AI Assistant
                  </span>
                )}
              </div>
              <p>{msg.text}</p>

              {msg.isEscalation && handoffData && (
                <div className="mt-3 pt-3 border-t border-amber-200 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-amber-950">
                    <span className="flex items-center gap-1">
                      <UserCheck className="w-4 h-4 text-amber-700" /> Conversation Summary Ready
                    </span>
                  </div>
                  <p className="text-[10px] text-amber-800">
                    Question: "{handoffData.userQuestion}" | Chart: {handoffData.chartSummary.rashi}, {handoffData.chartSummary.currentDasha}
                  </p>
                  <Link
                    href={`/chat?handoff=true&q=${encodeURIComponent(handoffData.userQuestion)}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffa767] to-[#eb468b] text-white font-extrabold text-xs px-4 py-2 rounded-xl shadow hover:opacity-95 transition"
                  >
                    Talk to Expert Astrologer <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex gap-2">
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={
            language === 'en'
              ? 'Ask about your chart, houses, planets, or astrology concepts...'
              : 'अपनी कुंडली, भाव या ग्रहों के बारे में पूछें...'
          }
          className="flex-1 bg-white border border-purple-200 rounded-2xl px-5 py-3.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
        />
        <button
          onClick={() => handleSend()}
          className="bg-gradient-to-r from-[#ffa767] to-[#eb468b] text-white px-6 rounded-2xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition cursor-pointer"
        >
          <Send className="w-4 h-4" /> Send
        </button>
      </div>
    </div>
  );
}
