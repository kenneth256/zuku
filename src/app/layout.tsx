import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['500', '600', '700'],
  display: 'swap', 
  variable: '--font-head' 
});

export const metadata: Metadata = {
  title: 'Zuku Fiber Uganda | Unlimited Home Internet from UGX 75,000/mo',
  description: 'Zuku Fiber delivers unlimited home internet in Kampala from UGX 75,000/month. Free installation, free router, 99.9% uptime. Get connected today.',
  keywords: 'Zuku Fiber Uganda, fiber internet Uganda, unlimited internet Kampala, best internet Uganda, cheapest fiber internet Uganda, home internet Kampala, Zuku fiber plans Uganda',
  alternates: {
    canonical: 'https://zukufiberuganda.vercel.app',
  },
  verification: {
    google: 'NnCHKbX_mKbC2Pt0D10rEHLCeHrfcEZcQyw9vY_VtbU',
  },
  other: {
    'theme-color': '#e31d24',
    'format-detection': 'telephone=no',
  },
  openGraph: {
    title: 'Zuku Fiber Uganda | Unlimited Home Internet from UGX 75,000/mo',
    description: 'Zuku Fiber delivers unlimited home internet in Kampala from UGX 75,000/month. Free installation, free router, 99.9% uptime. Get connected today.',
    url: 'https://zukufiberuganda.vercel.app',
    siteName: 'Zuku Fiber Uganda',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Zuku Fiber Uganda - Best Unlimited Internet' }],
    locale: 'en_UG',
    type: 'website',
  },
  appleWebApp: {
    title: 'Zuku Fiber',
    statusBarStyle: 'default',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TelecommunicationsCompany',
      '@id': 'https://zukufiberuganda.vercel.app/#organization',
      'name': 'Zuku Fiber Uganda',
      'alternateName': 'Zuku Uganda',
      'url': 'https://zukufiberuganda.vercel.app',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://zukufiberuganda.vercel.app/logo.png',
        'width': 200,
        'height': 60
      },
      'image': 'https://zukufiberuganda.vercel.app/og-image.png',
      'description': 'Zuku Fiber Uganda is a premier telecommunications company and internet service provider, delivering reliable high-speed fiber optic broadband and television services to 50,000+ homes and businesses across Kampala, Uganda. A subsidiary of the Wananchi Group, founded in 2010.',
      'foundingDate': '2010',
      'numberOfEmployees': { '@type': 'QuantitativeValue', 'value': 200 },
      'industry': 'Telecommunications',
      'naics': '517311',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Diamond Trust Building, Kampala Road',
        'addressLocality': 'Kampala',
        'addressRegion': 'Central Uganda',
        'postalCode': '7166',
        'addressCountry': 'UG'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 0.3136,
        'longitude': 32.5811
      },
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+256775260196',
          'contactType': 'customer support',
          'areaServed': 'UG',
          'availableLanguage': 'English',
          'contactOption': 'TollFree'
        },
        {
          '@type': 'ContactPoint',
          'telephone': '+256747505741',
          'contactType': 'sales',
          'areaServed': 'UG',
          'availableLanguage': 'English'
        }
      ],
      'priceRange': 'UGX 75,000 – UGX 199,000',
      'areaServed': {
        '@type': 'City',
        'name': 'Kampala',
        'sameAs': 'https://en.wikipedia.org/wiki/Kampala'
      },
      'sameAs': [
        'https://facebook.com/ZukuOfficial',
        'https://x.com/zuku_ug',
        'https://instagram.com/zuku_ug',
        'https://www.wananchi.com',
        'https://en.wikipedia.org/wiki/Wananchi_Group'
      ],
      'parentOrganization': {
        '@type': 'Organization',
        'name': 'Wananchi Group',
        'url': 'https://www.wananchi.com'
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Zuku Fiber Internet & TV Plans',
        'itemListElement': [
          {
            '@type': 'Offer',
            'name': 'Zuku Home 25 Mbps',
            'description': 'Unlimited fiber internet at 25 Mbps symmetrical — starting from UGX 75,000/month with free installation and free router.',
            'price': '75000',
            'priceCurrency': 'UGX',
            'eligibleRegion': { '@type': 'Place', 'name': 'Kampala, Uganda' }
          },
          {
            '@type': 'Offer',
            'name': 'Zuku Home 1.5 Gbps Max Speed',
            'description': 'Symmetrical gigabit fiber internet for power users and businesses — no throttling, no data caps, 99.9% uptime SLA.',
            'price': '199000',
            'priceCurrency': 'UGX',
            'eligibleRegion': { '@type': 'Place', 'name': 'Kampala, Uganda' }
          }
        ]
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        'opens': '00:00',
        'closes': '23:59'
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://zukufiberuganda.vercel.app/#website',
      'url': 'https://zukufiberuganda.vercel.app',
      'name': 'Zuku Fiber Uganda — Best Unlimited Home Internet in Uganda',
      'description': 'Zuku Fiber Uganda: Uganda\'s premier fiber-optic internet service provider. Unlimited broadband starting from UGX 75,000/month — free installation, free router, 24/7 local support in Kampala.',
      'publisher': { '@id': 'https://zukufiberuganda.vercel.app/#organization' },
      'inLanguage': 'en-UG'
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://zukufiberuganda.vercel.app' }
      ]
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script defer src="https://www.googletagmanager.com/gtag/js?id=G-D4D1HRPXEC" />
        <script defer dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-D4D1HRPXEC');
        `}} />
        <script defer dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WRMRV9QW');
        `}} />
      </head>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif', WebkitFontSmoothing: 'antialiased' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRMRV9QW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <a href="#hero" className="skip-to-content" style={{ display: 'inline-flex', minHeight: '44px', minWidth: '44px', alignItems: 'center', padding: '12px 16px' }}>Skip to Main Content</a>
        {children}
      </body>
    </html>
  );
}
