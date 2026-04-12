import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Cheapest Home Internet & Wi-Fi in Uganda (Prices) | Zuku Fiber',
    description: 'Looking for the cheapest internet in Uganda? Discover how much Wi-Fi costs and find the best unlimited home internet providers in Uganda. Plans start at UGX 75k/month.',
    keywords: [
      'best unlimited internet in uganda', 'best home internet in uganda', 'how much is a wifi in uganda',
      'cheapest internet in uganda', 'cheap internet in uganda', 'cheapest wifi in uganda',
      'best home internet providers in uganda that reflect the brand' // Preserved exact keyword from query list
    ],
    openGraph: {
      title: 'Cheapest Home Internet & Wi-Fi in Uganda (2026 Prices)',
      description: 'Stop overpaying for data bundles. Get unlimited Wi-Fi at home for a low flat monthly fee with free installation.',
      url: 'https://zuku-seven.vercel.app/cheapest-home-internet-in-uganda',
      siteName: 'Zuku Fiber Uganda',
      type: 'article',
    },
    alternates: { canonical: 'https://zuku-seven.vercel.app/cheapest-home-internet-in-uganda' },
  };
}

export default function CheapestHomeInternetUgandaPage() {
  const faqData = [
    { q: 'How much is Wi-Fi in Uganda?', a: 'Setting up private Wi-Fi at home typically costs between UGX 75,000 and UGX 200,000 per month depending on the speed you choose. With Zuku Fiber, the router and installation are completely free; you only pay the monthly subscription fee.' },
    { q: 'What is the cheapest internet in Uganda?', a: 'For heavy data users, the "cheapest" option is an unlimited fiber plan. While buying a UGX 2,000 daily mobile bundle seems cheap, checking video social media costs you over UGX 60,000 a month for very limited data. Zuku Fiber at UGX 75,000/month gives you infinite data.' },
    { q: 'Who are the best home internet providers in Uganda?', a: 'Zuku Fiber is widely considered one of the best home internet providers in Uganda because they specialize in household connectivity. They offer great value, reliable speeds, and a free dual-band router.' },
    { q: 'Where can I get cheap internet in Uganda without daily limits?', a: 'If you are within Kampala suburbs like Ntinda, Naalya, Kyambogo, or Bugolobi, Zuku Fiber provides cheap internet starting at 75k per month with absolutely zero daily data limits.' },
    { q: 'Is there unlimited internet in Uganda?', a: 'Yes! Zuku Fiber offers truly unlimited internet. There are no data caps, no fair usage policies that throttle your speed to uselessness, and no hidden fees.' }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        'headline': 'Finding the Cheapest & Best Home Internet in Uganda',
        'description': 'Pricing analysis. Breaking down the true cost of cheap data-capped internet vs unlimited fiber in Uganda.',
        'author': { '@type': 'Organization', 'name': 'Zuku Fiber Uganda' },
        'publisher': { '@type': 'Organization', 'name': 'Zuku Fiber Uganda', 'logo': { '@type': 'ImageObject', 'url': 'https://zuku-seven.vercel.app/favicon.ico' } },
        'mainEntityOfPage': { '@type': 'WebPage', '@id': 'https://zuku-seven.vercel.app/cheapest-home-internet-in-uganda' }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://zuku-seven.vercel.app/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Guides', 'item': 'https://zuku-seven.vercel.app/business-solutions' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Cheapest Home Internet in Uganda', 'item': 'https://zuku-seven.vercel.app/cheapest-home-internet-in-uganda' },
        ],
      },
      {
        '@type': 'FAQPage',
        'mainEntity': faqData.map(f => ({ '@type': 'Question', 'name': f.q, 'acceptedAnswer': { '@type': 'Answer', 'text': f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>
        
        {/* Banner Section */}
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'var(--bg-2)' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
            <div className="label label-blue animate-up d1"><span className="label-dot" />🏠 Home Wi-Fi Deals</div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              The <span className="grad-b">Cheapest Unlimited</span> Home Internet in Uganda
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Zuku Fiber provides the premier unlimited fiber-optic internet connection for Cheapest Home Uganda residents. By delivering dedicated, symmetrical speeds directly to your home or office, you ensure 100% stable performance with strictly zero data caps and no throttling. Discover our high-speed plans with free installation, a premium Wi-Fi router, and uninterrupted remote work reliability perfectly tailored for Cheapest Home Uganda.
            </p>
          </div>
        </section>

        {/* The True Cost breakdown */}
        <section className="section" style={{ paddingBottom: '3rem' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>The Hidden Cost of Mobile Data</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div className="card" style={{ padding: '2.5rem', background: 'var(--bg-3)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--t2)' }}>Mobile Subscriptions (The Trap)</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.8rem 0', borderBottom: '1px solid var(--border)', color: 'var(--t1)' }}>• UGX 3,000 Daily Bundle</li>
                  <li style={{ padding: '0.8rem 0', borderBottom: '1px solid var(--border)', color: 'var(--t1)' }}>• Times 30 days = <strong style={{ color: 'var(--t0)' }}>UGX 90,000/mo</strong></li>
                  <li style={{ padding: '0.8rem 0', borderBottom: '1px solid var(--border)', color: 'var(--t1)' }}>• You get maybe 1–2 GB per day.</li>
                  <li style={{ padding: '0.8rem 0', color: 'var(--t1)' }}>• Family members have to buy their own.</li>
                </ul>
              </div>
              <div className="card" style={{ padding: '2.5rem', background: 'var(--bg)', border: '2px solid var(--green)' }}>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--green)' }}>Zuku Fiber (The Solution)</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.8rem 0', borderBottom: '1px solid var(--border)', color: 'var(--t1)' }}>• UGX 75,000 Monthly Flat Rate</li>
                  <li style={{ padding: '0.8rem 0', borderBottom: '1px solid var(--border)', color: 'var(--t1)' }}>• Times 1 month = <strong style={{ color: 'var(--t0)' }}>UGX 75,000/mo</strong></li>
                  <li style={{ padding: '0.8rem 0', borderBottom: '1px solid var(--border)', color: 'var(--t1)' }}>• You get <strong>Infinite GBs</strong> of data.</li>
                  <li style={{ padding: '0.8rem 0', color: 'var(--t1)' }}>• The whole family shares the Wi-Fi.</li>
                </ul>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--t1)' }}>
              When looking for cheap internet in Uganda, unlimited fiber is actually cheaper per gigabyte than any mobile offering.
            </p>
          </div>
        </section>

        {/* Home Internet Providers Content */}
        <section className="section" style={{ background: 'var(--bg-3)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
               <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>How much is a Wi-Fi in Uganda?</h2>
               <p style={{ color: 'var(--t1)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                  If you are wondering "how much is a router" or "how much is Wi-Fi connection in Uganda," here is good news. 
                  Unlike some providers who charge you upwards of UGX 150,000 just to install the equipment, <strong>Zuku Fiber gives you the Wi-Fi router for FREE</strong>. 
                  You pay absolutely nothing for installation. You only pay for your first month's internet bundle.
               </p>

               <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--t0)' }}>Best Home Internet Providers in Uganda</h3>
               <p style={{ color: 'var(--t1)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                 As families consume more internet with smart TVs, smartphones, and laptops, a strong home internet connection is necessary. 
                 Zuku provides some of the best home internet in Uganda because it allows you to connect multiple devices without seeing an extra bill.
               </p>

               <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                 <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--blue)' }}>Top Rated Plan for Homes:</h4>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                       <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--t0)' }}>Zuku 50 Mbps Package</div>
                       <div style={{ color: 'var(--t1)' }}>Perfect for a family of 4-6 people.</div>
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--green)' }}>UGX 89,400 <span style={{ fontSize: '1rem', color: 'var(--t2)', fontWeight: 'normal' }}>/ mo</span></div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" id="faq">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Pricing & Wi-Fi FAQs</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {faqData.map((faq, i) => (
                <details key={i} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '0.5rem', background: 'var(--bg)' }}>
                  <summary style={{ padding: '1.25rem 1.5rem', fontFamily: 'var(--font-head)', color: 'var(--t0)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{faq.q}<span>⌄</span></summary>
                  <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid var(--border)', color: 'var(--t1)' }}>{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Stop Overpaying for Data</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>Switch to the cheapest unlimited Wi-Fi in Uganda. Get Zuku today.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Message on WhatsApp</Link>
              <Link href="/zuku-fiber-prices" className="btn btn-ghost">View All Prices</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
