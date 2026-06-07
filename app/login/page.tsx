'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage.getItem('thchta-authenticated') === 'true') {
      router.replace('/dashboard');
    }
  }, [router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.localStorage.setItem('thchta-authenticated', 'true');
    window.localStorage.setItem('thchta-user-email', email || 'guest@thechattala.com');
    console.log('MVP login entry:', { email, password });
    router.push('/dashboard');
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', color: '#111827', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: 520, margin: '0 auto', background: '#ffffff', borderRadius: 24, padding: '2rem', boxShadow: '0 28px 80px rgba(15, 23, 42, 0.08)' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <p style={{ margin: 0, color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em' }}>Welcome back</p>
          <h1 style={{ margin: '1rem 0 0', fontSize: '2.1rem' }}>Sign in to The Chattala</h1>
          <p style={{ margin: '1rem 0 0', color: '#475569', lineHeight: 1.75 }}>Enter any credentials to access the app content instantly.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
          <label style={{ display: 'grid', gap: '0.5rem', fontWeight: 600 }}>
            Email address
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              style={{ width: '100%', padding: '1rem', borderRadius: 14, border: '1px solid #cbd5e1', background: '#f8fafc' }}
            />
          </label>

          <label style={{ display: 'grid', gap: '0.5rem', fontWeight: 600 }}>
            Password
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter any password"
              style={{ width: '100%', padding: '1rem', borderRadius: 14, border: '1px solid #cbd5e1', background: '#f8fafc' }}
            />
          </label>

          <button type="submit" style={{ width: '100%', padding: '1rem', borderRadius: 14, border: 'none', background: '#2563eb', color: '#ffffff', fontWeight: 700, cursor: 'pointer' }}>
            Continue to app
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.75 }}>
          Don’t have an account? <a href="/register" style={{ color: '#2563eb', textDecoration: 'none' }}>Create one now</a>.
        </p>
      </div>
    </main>
  );
}
