import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', color: '#111827' }}>
      <section style={{ padding: '4rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div>
              <p style={{ margin: 0, color: '#2563eb', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                Local-first community app
              </p>
              <h1 style={{ margin: '1rem 0', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05 }}>
                The Chattala — connect, discover, and shop locally in Chattogram.
              </h1>
              <p style={{ maxWidth: 760, lineHeight: 1.8, fontSize: '1.05rem', color: '#475569' }}>
                Launch your local community super-app with a clean MVP homepage, polished sign-in/register screens,
                and a demo dashboard that brings your main app content to life.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
                <Link href="/login" style={{ padding: '0.95rem 1.5rem', background: '#2563eb', color: '#fff', borderRadius: 12, textDecoration: 'none', fontWeight: 600 }}>
                  Sign In
                </Link>
                <Link href="/register" style={{ padding: '0.95rem 1.5rem', background: '#e2e8f0', color: '#111827', borderRadius: 12, textDecoration: 'none', fontWeight: 600 }}>
                  Create Account
                </Link>
              </div>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ display: 'grid', gap: '0.5rem', padding: '1.5rem', borderRadius: 24, background: '#ffffff', boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Designed for fast launch</h2>
                <p style={{ margin: 0, color: '#475569', lineHeight: 1.7 }}>
                  Present a clean landing experience with core product messaging, auth access, and a simple authenticated dashboard.
                </p>
              </div>
              <div style={{ display: 'grid', gap: '0.5rem', padding: '1.5rem', borderRadius: 24, background: '#ffffff', boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Local marketplace & community</h2>
                <p style={{ margin: 0, color: '#475569', lineHeight: 1.7 }}>
                  Highlight community feed, shops, and services with a modern design that matches your MVP vision.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem', padding: '2rem', borderRadius: 24, background: '#0f172a', color: '#f8fafc' }}>
            <h2 style={{ margin: 0 }}>Launch-ready MVP content</h2>
            <p style={{ margin: 0, lineHeight: 1.8, maxWidth: 760 }}>
              Use this updated homepage plus a non-functional auth shell to demo your concept quickly. Visitors can sign in or register and go straight into the app content without waiting for backend auth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
