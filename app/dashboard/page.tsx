'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = window.localStorage.getItem('thchta-authenticated');
    if (loggedIn !== 'true') {
      router.replace('/login');
    }
  }, [router]);

  const handleLogout = () => {
    window.localStorage.removeItem('thchta-authenticated');
    window.localStorage.removeItem('thchta-user-email');
    router.replace('/');
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', color: '#111827', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ margin: 0, color: '#2563eb', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              The Chattala Dashboard
            </p>
            <h1 style={{ margin: '0.5rem 0', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Welcome back to your local community hub.
            </h1>
            <p style={{ margin: 0, maxWidth: 760, lineHeight: 1.75, color: '#475569' }}>
              This is your quick MVP content area for The Chattala. The auth pages are intentionally simplified so any entry takes you inside the app.
            </p>
          </div>
          <button onClick={handleLogout} style={{ padding: '0.95rem 1.25rem', borderRadius: 999, border: 'none', background: '#111827', color: '#f8fafc', fontWeight: 700, cursor: 'pointer' }}>
            Logout
          </button>
        </div>

        <section style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ padding: '1.75rem', borderRadius: 24, background: '#ffffff', boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)' }}>
            <h2 style={{ margin: 0, fontSize: '1.4rem' }}>Community Feed</h2>
            <p style={{ margin: '0.75rem 0 0', color: '#475569', lineHeight: 1.75 }}>
              Showcase your local news, neighborhood updates, and popular posts in one place.
            </p>
          </div>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div style={{ padding: '1.5rem', borderRadius: 24, background: '#ffffff', boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)' }}>
              <h3 style={{ margin: 0 }}>Local Marketplace</h3>
              <p style={{ margin: '0.75rem 0 0', color: '#475569' }}>
                Browse nearby shops, offers, and services tailored to your neighborhood.
              </p>
            </div>
            <div style={{ padding: '1.5rem', borderRadius: 24, background: '#ffffff', boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)' }}>
              <h3 style={{ margin: 0 }}>Services & Professionals</h3>
              <p style={{ margin: '0.75rem 0 0', color: '#475569' }}>
                Find trusted local helpers for tutoring, repairs, deliveries, and more.
              </p>
            </div>
          </div>
        </section>

        <section style={{ display: 'grid', gap: '1rem', padding: '1.75rem', borderRadius: 24, background: '#e0f2fe' }}>
          <h2 style={{ margin: 0 }}>MVP quick launch mode</h2>
          <p style={{ margin: 0, lineHeight: 1.75, color: '#0c4a6e' }}>
            This dashboard is intentionally lightweight: it presents the core app experience without real authentication. Use it to show investors or stakeholders the product flow.
          </p>
        </section>
      </div>
    </main>
  );
}
