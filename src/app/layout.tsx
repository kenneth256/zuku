import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zuku Fiber Uganda — Affordable, Unlimited Fiber Internet in Uganda',
  description: 'Experience ultra-fast, truly unlimited zuku fiber internet in Uganda. Best home & business internet deals, 24/7 support, and 99.9% uptime.',
  keywords: 'Zuku Fiber, Uganda internet, fiber internet Kampala, unlimited internet Uganda, unlimited internet Kampala, affordable internet Uganda',
  alternates: {
    canonical: 'https://www.zukufiber.co.ug',
  },
  other: {
    'google-site-verification': 'QW7cYdUvpZOT67N-vUvxMOItYC6YntgzS_BF9MWvm_Q',
    'theme-color': '#e31d24',
    'format-detection': 'telephone=no',
  },
  openGraph: {
    title: 'Zuku Fiber Uganda — Affordable, Unlimited Fiber Internet in Uganda',
    description: 'Experience ultra-fast, truly unlimited zuku fiber internet in Uganda. Best home & business internet deals, 24/7 support, and 99.9% uptime.',
    url: 'https://www.zukufiber.co.ug',
    siteName: 'Zuku Fiber Uganda',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Zuku Fiber Uganda - Unlimited Internet' }],
    locale: 'en_UG',
    type: 'website',
  },
  appleWebApp: {
    title: 'Zuku Fiber',
    statusBarStyle: 'default',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Zuku Fiber Uganda',
    'url': 'https://www.zukufiber.co.ug',
    'logo': 'https://www.zukufiber.co.ug/logo.png',
    'sameAs': [
      'https://facebook.com/ZukuOfficial',
      'https://x.com/zuku_ug'
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Zuku Fiber Uganda',
    'url': 'https://www.zukufiber.co.ug',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://www.zukufiber.co.ug/?s={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Zuku Fiber Uganda',
    'image': 'https://www.zukufiber.co.ug/og-image.png',
    '@id': 'https://www.zukufiber.co.ug',
    'url': 'https://www.zukufiber.co.ug',
    'telephone': '+2560775260196',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Diamond Trust Bldg',
      'addressLocality': 'Kampala',
      'addressCountry': 'UG'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 0.3136,
      'longitude': 32.5811
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    }
  }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WRMRV9QW');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRMRV9QW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <a href="#hero" className="skip-to-content">Skip to Main Content</a>
        {children}
      </body>
    </html>
  );
}
