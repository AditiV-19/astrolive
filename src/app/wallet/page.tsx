'use client';

import React, { useState } from 'react';
import { Wallet as WalletIcon, CreditCard, Gift, ShieldCheck, History } from 'lucide-react';

const rechargePacks = [
  { amount: 100, bonus: 0, tag: 'Starter Pack' },
  { amount: 200, bonus: 20, tag: '10% Extra Bonus ✨' },
  { amount: 500, bonus: 100, tag: '20% Extra Bonus 🔥' },
  { amount: 1000, bonus: 300, tag: '30% Extra Bonus 👑' },
  { amount: 2000, bonus: 700, tag: 'Best Value 💎' },
];

export default function WalletPage() {
  const [balance, setBalance] = useState(0);
  const [selectedPack, setSelectedPack] = useState(rechargePacks[2]);
  const [activeTab, setActiveTab] = useState<'recharge' | 'history'>('recharge');

  return (
    <div className="max-w-[1440px] w-[90%] lg:w-[75%] mx-auto py-8 space-y-8">
      {/* Wallet Balance Header */}
      <div className="bg-gradient-to-r from-[#9282eb] via-[#ac83f1] to-[#ba8af8] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            AstroLive Secure Wallet
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide">
            My Astro Wallet
          </h1>
          <p className="text-xs sm:text-sm text-white/90 font-medium">
            Recharge your wallet to chat or call with astrologers instantly.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl text-center border border-white/20 min-w-[220px]">
          <span className="text-xs font-extrabold text-white/80 uppercase block">Available Balance</span>
          <span className="text-4xl font-black text-white block my-1">₹{balance.toFixed(2)}</span>
          <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">100% Safe & Encrypted</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-purple-200 gap-6 text-xs sm:text-sm font-bold">
        <button
          onClick={() => setActiveTab('recharge')}
          className={`pb-3 uppercase tracking-wider border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'recharge' ? 'border-[#6b2cbd] text-[#6b2cbd] font-black' : 'border-transparent text-slate-500'
          }`}
        >
          <CreditCard className="w-4 h-4" /> Add Money / Recharge
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`pb-3 uppercase tracking-wider border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'history' ? 'border-[#6b2cbd] text-[#6b2cbd] font-black' : 'border-transparent text-slate-500'
          }`}
        >
          <History className="w-4 h-4" /> Transaction History
        </button>
      </div>

      {activeTab === 'recharge' ? (
        <div className="space-y-6 animate-fadeIn">
          <h3 className="font-extrabold text-xl text-slate-900">Select Recharge Pack</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rechargePacks.map((pack, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPack(pack)}
                className={`p-6 rounded-3xl border cursor-pointer transition shadow-sm flex flex-col justify-between h-44 ${
                  selectedPack.amount === pack.amount
                    ? 'border-[#6b2cbd] bg-purple-50/60 ring-2 ring-purple-300'
                    : 'bg-white border-purple-100 hover:shadow-md'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-2xl font-black text-slate-900">₹{pack.amount}</span>
                  <span className="bg-[#6b2cbd] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow">
                    {pack.tag}
                  </span>
                </div>

                <div>
                  {pack.bonus > 0 ? (
                    <p className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <Gift className="w-4 h-4" /> Get ₹{pack.bonus} Free Bonus Cash
                    </p>
                  ) : (
                    <p className="text-xs text-slate-500 font-medium">Standard Pack</p>
                  )}
                  <p className="text-[11px] text-slate-400 font-medium mt-1">Total Talking Value: ₹{pack.amount + pack.bonus}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-md max-w-lg mx-auto text-center space-y-4">
            <div className="text-xs font-bold text-slate-700 flex justify-between border-b border-purple-50 pb-2">
              <span>Selected Pack:</span>
              <span className="text-slate-900 font-black">₹{selectedPack.amount}</span>
            </div>
            <div className="text-xs font-bold text-slate-700 flex justify-between border-b border-purple-50 pb-2">
              <span>Bonus Cash:</span>
              <span className="text-emerald-600 font-black">+ ₹{selectedPack.bonus}</span>
            </div>
            <div className="text-sm font-extrabold text-slate-900 flex justify-between pt-1">
              <span>Total Payable Amount:</span>
              <span className="text-[#6b2cbd] font-black text-lg">₹{selectedPack.amount}</span>
            </div>

            <button
              onClick={() => setBalance((b) => b + selectedPack.amount + selectedPack.bonus)}
              className="w-full bg-gradient-to-r from-[#ffa767] to-[#eb468b] text-white font-extrabold py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition cursor-pointer"
            >
              Proceed to Pay ₹{selectedPack.amount}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm text-center py-12 space-y-3 animate-fadeIn">
          <History className="w-12 h-12 text-slate-300 mx-auto" />
          <h4 className="font-extrabold text-base text-slate-700">No Transactions Yet</h4>
          <p className="text-xs text-slate-400 font-medium">Your recharge and consultation call history will appear here.</p>
        </div>
      )}
    </div>
  );
}
