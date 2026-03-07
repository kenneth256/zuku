import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zuku Fiber Uganda — Unlimited Home Internet',
  description: 'Get unlimited home internet from UGX 75,000/month. Free installation, free router, free TV channels. 20–200 Mbps fiber in Kampala.',
  keywords: 'Zuku Fiber, Uganda internet, fiber internet Kampala, unlimited internet Uganda',
  openGraph: {
    title: 'Zuku Fiber Uganda — Unlimited Home Internet',
    description: 'Unlimited fiber internet from UGX 75,000/month. Free installation, router & TV channels.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_UG',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
