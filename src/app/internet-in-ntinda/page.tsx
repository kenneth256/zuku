import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Best Internet in Ntinda Kampala 2026 | Zuku Fiber',
    description: 'Get the fastest and most reliable internet in Ntinda Kampala. Zuku Fiber offers unlimited high-speed home internet from UGX 75,000/month. Free installation.',
    keywords: [
      'internet in Ntinda',
      'best internet in Ntinda Kampala',
      'WiFi in Ntinda',
      'fiber internet Ntinda',
      'Zuku Fiber Ntinda',
      'unlimited internet Uganda',
      'best internet provider Uganda',
      'fiber internet Kampala',
      'home internet Ntinda',
      'cheapest internet bundles Uganda',
      'fastest internet Uganda',
      'internet without data cap Uganda',
      'Zuku Fiber Uganda',
      'internet providers Uganda comparison',
      'best ISP Uganda',
    ],
    openGraph: {
      title: 'Best Internet in Ntinda Kampala 2026 | Zuku Fiber',
      description: 'Localized high-speed fiber for Ntinda residents. Enjoy unlimited data for streaming, gaming, and remote work.',
      url: 'https://zuku-seven.vercel.app/internet-in-ntinda',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: {
      canonical: 'https://zuku-seven.vercel.app/internet-in-ntinda',
    },
  };
}

// FILE: src/app/internet-in-ntinda/page.tsx
export default function InternetInNtindaPage() {
  const faqData = [
    { q: "Is Zuku Fiber available in Ntinda?", a: "Yes! Zuku Fiber has extensive coverage across Ntinda, including areas near Capital Shoppers, Ntinda Shopping Centre, and the Ministers' Village. We offer same-day or next-day installation in most parts of Ntinda." },
    { q: "What is the best internet in Ntinda?", a: "Zuku Fiber is the top-rated internet in Ntinda for home users. Unlike mobile data, our fiber connection is not affected by tower congestion on the busy Ntinda-Nakawa road, giving you 100% of your speed consistently." },
    { q: "How much is fiber internet in Ntinda?", a: "Our Ntinda fiber packages start at UGX 75,000 for 25 Mbps. We also offer 50 Mbps for UGX 89,400, which is our most popular plan for families in the area." },
    { q: "Does Zuku Fiber have data caps in Ntinda?", a: "No. All our Ntinda plans provide true unlimited internet. There are no data caps or fair usage policies that slow down your connection after heavy use." },
    { q: "How do I get Zuku Fiber in Ntinda?", a: "Simply chat with us on WhatsApp or call 0775 260 196. Our local Ntinda installation team will visit your home to set up your fiber line and Wi-Fi router for free." },
    { q: "Which ISP has the best coverage in Kampala?", a: "Zuku Fiber dominates fiber internet Kampala coverage in key residential zones like Ntinda, Kololo, and Naguru, offering dedicated lines that mobile providers can't match." },
    { q: "Is fiber better than 4G/5G in Ntinda?", a: "Yes. Fiber is much more stable than 4G or 5G, especially during peak evening hours in Ntinda when mobile networks often slow down due to high user volume." },
    { q: "Can I get unlimited internet without a data cap in Uganda?", a: "Zuku Fiber is the leading provider of internet without data cap Uganda wide. We offer the best high-speed internet in Ntinda with no limits on streaming or downloads." }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Zuku Fiber Ntinda",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ntinda Road",
          "addressLocality": "Ntinda, Kampala",
          "addressCountry": "Uganda"
        },
        "telephone": "+256775260196",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 0.3533,
          "longitude": 32.6100
        },
        "url": "https://zuku-seven.vercel.app/internet-in-ntinda"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://zuku-seven.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Internet in Ntinda",
            "item": "https://zuku-seven.vercel.app/internet-in-ntinda"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      {
        "@type": "Article",
        "headline": "Best Internet in Ntinda Kampala 2026",
        "author": {
          "@type": "Organization",
          "name": "Zuku Fiber"
        },
        "datePublished": "2024-01-01T08:00:00+03:00"
      }
    ]
  };

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>
        {/* 1. HERO SECTION */}
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="label label-green animate-up d1">
              <span className="label-dot" />
              🏠 Ntinda&apos;s #1 Choice for Home Fiber
            </div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              High-Speed <span className="grad-g">Home Internet in Ntinda</span> — Zuku Fiber Uganda
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Zuku Fiber provides the premier unlimited fiber-optic internet connection for Ntinda residents. By delivering dedicated, symmetrical speeds directly to your home or office, you ensure 100% stable performance with strictly zero data caps and no throttling. Discover our high-speed plans with free installation, a premium Wi-Fi router, and uninterrupted remote work reliability perfectly tailored for Ntinda.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Check Ntinda Coverage</Link>
              <Link href="/#plans" className="btn btn-ghost">View Speed Plans</Link>
            </div>
            
            <div className="animate-up d5" style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--t2)', fontSize: '0.875rem' }}>
              <span>⚡ Install in 24h</span>
              <span>·</span>
              <span>📡 Free 5GHz Router</span>
              <span>·</span>
              <span>📺 100+ TV Channels</span>
              <span>·</span>
              <span>🔒 24/7 Ntinda Support</span>
            </div>

            <div className="animate-up d5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              {[
                { label: 'Local Uptime', val: '99.9%', color: 'var(--t0)' },
                { label: 'Latency', val: '5ms', color: 'var(--blue)' },
                { label: 'Max Speed', val: '200 Mbps', color: 'var(--green)' },
                { label: 'Data Limit', val: 'Unlimited', color: 'var(--yellow)' }
              ].map((stat, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem', background: 'var(--bg-3)', border: '1px solid var(--border-2)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--t2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{stat.label}</div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: '700', color: stat.color }}>{stat.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. WHY ZUKU FIBER SECTION */}
        <section className="section" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Ntinda Families Love Zuku</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🚀', title: 'Fiber Over 5G', desc: 'Ntinda mobile towers are heavily congested. Our dedicated fiber lines bypass the noise to deliver the best internet in Ntinda.' },
                { icon: '📺', title: 'Entertainment First', desc: 'Stream Netflix and YouTube in HD while the kids watch digital TV. 100+ channels are included free with every plan.' },
                { icon: '⚖️', title: 'Work From Home', desc: 'The best internet for working from home Uganda professionals in Ntinda can find. Smooth Zoom calls and fast file uploads.' },
                { icon: '📞', title: 'Local Presence', desc: 'Our team is always nearby. If you need support in Ntinda, we arrive fast to ensure your fiber internet Kampala experience is flawless.' },
                { icon: '💰', title: 'Best Value', desc: 'From UGX 75,000/month. No more daily data bundles. It&apos;s the cheapest internet bundles Uganda has for family use.' },
                { icon: '♾️', title: 'Truly Unlimited', desc: 'Internet without data cap Uganda. Download large work files or 4K movies without ever worrying about limits.' }
              ].map((f, i) => (
                <div key={i} className="card" style={{ padding: '2.5rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{f.icon}</div>
                  <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-head)' }}>{f.title}</h3>
                  <p style={{ color: 'var(--t1)' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. COMPARISON TABLE SECTION */}
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>ISP Comparison for Ntinda Residents</h2>
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-3)', color: 'var(--t2)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Provider</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Technology</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Price (UGX)</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Speed</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Data Cap</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Throttling</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Install</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: 'var(--green-bg)', borderLeft: '3px solid var(--green)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '600' }}>Zuku Fiber ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Fiber Optic</td>
                      <td style={{ padding: '1rem 1.25rem' }}>75,000/mo</td>
                      <td style={{ padding: '1rem 1.25rem' }}>200 Mbps</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>None ✅</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>None ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Free ✅</td>
                    </tr>
                    {[
                      { p: 'MTN WakaNet', t: '5G/Fiber', price: '130,000/mo', s: 'Varies', cap: 'Fair Usage ⚠️', th: 'Yes ❌', inst: 'No ❌' },
                      { p: 'Airtel Uganda', t: '5G/4G', price: '150,000/mo', s: 'Varies', cap: 'Volume Caps ❌', th: 'Yes ❌', inst: 'No ❌' },
                      { p: 'Roke Telkom', t: 'Wireless', price: '112,000/mo', s: '100 Mbps', cap: 'Mixed ⚠️', th: 'Yes ❌', inst: 'Paid ❌' },
                      { p: 'Faibanet', t: 'Fiber', price: '100,000/mo', s: '50 Mbps', cap: 'Limited ⚠️', th: 'Unclear', inst: 'Paid ❌' }
                    ].map((row, i) => (
                      <tr key={i} className="row-hover" style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.2s' }}>
                        <td style={{ padding: '1rem 1.25rem' }}>{row.p}</td>
                        <td style={{ padding: '1rem 1.25rem' }}>{row.t}</td>
                        <td style={{ padding: '1rem 1.25rem' }}>{row.price}</td>
                        <td style={{ padding: '1rem 1.25rem' }}>{row.s}</td>
                        <td style={{ padding: '1rem 1.25rem' }}>{row.cap}</td>
                        <td style={{ padding: '1rem 1.25rem' }}>{row.th}</td>
                        <td style={{ padding: '1rem 1.25rem' }}>{row.inst}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRICING SECTION */}
        <section className="section" style={{ background: 'var(--bg-2)' }} id="plans">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Ntinda Fiber Plans</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>
              Choose the package that fits your home. No hidden costs, just high-speed internet in Ntinda.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[
                { speed: '25 Mbps', price: '75,000' },
                { speed: '50 Mbps', price: '89,400', popular: true },
                { speed: '100 Mbps', price: '110,000' },
                { speed: '200 Mbps', price: '199,000' }
              ].map((plan, i) => (
                <div key={i} className="card" style={{ padding: '3rem 2rem', border: plan.popular ? '1px solid var(--green-bd)' : '1px solid var(--border)', position: 'relative' }}>
                  {plan.popular && (
                    <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--green)', color: '#000', padding: '0.4rem 1rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>
                      Best For Ntinda Homes
                    </div>
                  )}
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-head)' }}>{plan.speed}</h3>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--t0)', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}>UGX</span> {plan.price}
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}> /mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem', padding: '0' }}>
                    {['Truly Unlimited Data', 'Speed for 5+ Devices', 'Low-Latency Gaming', 'Free Fiber Installation'].map((feat, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--t1)', fontSize: '0.9rem' }}>
                        <div className="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link href="https://wa.me/2560775260196" className={`btn ${plan.popular ? 'btn-primary' : 'btn-ghost'}`} style={{ width: '100%' }}>Get Connected</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. LOCAL CONTENT SECTION */}
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Coverage in Ntinda</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Ministers&apos; Village', desc: 'Full high-capacity fiber coverage for the entire residential zone.' },
                { title: 'Ntinda Road', desc: 'Fast internet specifically designed to handle the high density of commercial areas.' },
                { title: 'Kigowa & Kyambogo', desc: 'Stable fiber optic connections for both residents and university students.' },
                { title: 'Stretcher & Naguru Border', desc: 'Seamless high-speed handoff between Ntinda and Naguru neighborhoods.' }
              ].map((area, i) => (
                <div key={i} className="card" style={{ padding: '2rem', background: 'var(--bg-3)' }}>
                  <h3 style={{ marginBottom: '1rem', color: 'var(--blue)', fontSize: '1.25rem' }}>{area.title}</h3>
                  <p style={{ color: 'var(--t1)' }}>{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ SECTION */}
        <section className="section" id="faq" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Ntinda WiFi FAQs</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {faqData.map((faq, i) => (
                <details key={i} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '0.5rem', background: 'var(--bg)' }}>
                  <summary style={{ padding: '1.25rem 1.5rem', fontFamily: 'var(--font-head)', color: 'var(--t0)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {faq.q}
                    <span style={{ transition: 'transform 0.3s' }}>⌄</span>
                  </summary>
                  <div style={{ padding: '0 1.5rem 1.25rem', color: 'var(--t1)', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA BANNER */}
        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Experience the Best Internet in Ntinda</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              Ready to leave mobile data behind? Join the thousands of Ntinda residents already using Zuku Fiber.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Order Now via WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              Free router and installation for all new Ntinda subscribers.
            </p>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
      <Footer />
    </>
  );
}
