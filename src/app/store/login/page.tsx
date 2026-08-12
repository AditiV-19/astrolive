'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate setting login token
    localStorage.setItem('astrolive-logged-in', 'true');
    
    // Redirect back to the checkout page if it was specified, else store homepage
    const redirectUrl = localStorage.getItem('login-redirect-url') || '/store/checkout';
    localStorage.removeItem('login-redirect-url');
    router.push(redirectUrl);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl border transition-all" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>Login to AstroLive</h1>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Securely login to proceed to checkout</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Email Address</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. you@example.com"
              required
              className="w-full px-4 py-2.5 rounded-xl border text-sm bg-transparent outline-none focus:border-purple-400"
              style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2.5 rounded-xl border text-sm bg-transparent outline-none focus:border-purple-400"
              style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all hover:opacity-90"
            style={{ background: 'var(--accent-purple)', color: 'var(--btn-primary-text)' }}
          >
            Login & Continue
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={() => {
              localStorage.setItem('astrolive-logged-in', 'true');
              const redirectUrl = localStorage.getItem('login-redirect-url') || '/store/checkout';
              localStorage.removeItem('login-redirect-url');
              router.push(redirectUrl);
            }}
            className="text-xs hover:underline text-purple-400 font-bold"
          >
            Quick Guest Bypass Login
          </button>
        </div>
      </div>
    </div>
  );
}
