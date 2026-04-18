import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage My Practice Marketplace',
  description: 'Healthcare services marketplace for private medical practices.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
