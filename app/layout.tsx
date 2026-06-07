import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Chattala',
  description: 'Local development placeholder for The Chattala',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
