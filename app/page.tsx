export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <div>
        <h1>The Chattala</h1>
        <p>Your local dev server is running.</p>
        <p>Visit <strong>http://localhost:9002</strong></p>
      </div>
    </main>
  );
}
