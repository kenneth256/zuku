import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Fast Fiber Internet in Naguru Kampala 2026 | Zuku Fiber',
    description: 'Get high-speed home internet in Naguru Kampala. Zuku Fiber offers specialized fiber optic connections for Naguru residents from UGX 75,000/month. Unlimited data.',
    keywords: [
      'internet in Naguru',
      'best internet in Naguru Kampala',
      'WiFi in Naguru',
      'fiber internet Naguru',
      'Zuku Fiber Naguru',
      'unlimited internet Uganda',
      'best internet provider Uganda',
      'fiber internet Kampala',
      'home internet Naguru',
      'fastest internet Uganda',
      'internet without data cap Uganda',
      'Zuku Fiber Uganda',
      'Naguru Hill internet',
      'best ISP Uganda',
    ],
    openGraph: {
      title: 'Fast Fiber Internet in Naguru Kampala 2026 | Zuku Fiber',
      description: 'The preferred choice for Naguru residents. High-speed, low-latency, and strictly unlimited fiber internet.',
      url: 'https://zuku-seven.vercel.app/internet-in-naguru',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: {
      canonical: 'https://zuku-seven.vercel.app/internet-in-naguru',
    },
  };
}

// FILE: src/app/internet-in-naguru/page.tsx
export default function InternetInNaguruPage() {
  const faqData = [
    { q: "Is Zuku Fiber available in Naguru?", a: "Yes. Zuku Fiber covers all of Naguru, including Naguru Hill, areas surrounding Skyz Hotel, and the various residential complexes near Naguru Hospital. We specialize in high-speed home internet in Naguru." },
    { q: "What is the best internet in Naguru?", a: "Zuku Fiber is widely considered the best internet in Naguru for both home and small businesses. Our fiber lines offer much better stability than the mobile 4G towers that can get congested on the hill." },
    { q: "How much is fiber internet in Naguru?", a: "Naguru fiber plans start at UGX 75,000 for 25 Mbps. Our 50 Mbps plan for UGX 89,400 is highly recommended for families in Naguru who stream and game simultaneously." },
    { q: "Does Zuku Fiber have data caps in Naguru?", a: "No. Zuku provides strictly unlimited internet without data cap Uganda. You can use as much data as you want at the same fast speed throughout the month." },
    { q: "How do I get Zuku Fiber in Naguru?", a: "Contact us via WhatsApp (0775 260 196) with your street address. Our Kampala-based team will confirm coverage and can usually install your fiber the next business day." },
    { q: "Which ISP has the best coverage in Kampala?", a: "Zuku Fiber has extensive fiber internet Kampala coverage, with a strong presence in Naguru, Kololo, and Ntinda." },
    { q: "Is fiber better than mobile WiFi in Naguru?", a: "Yes. Fiber optics provides a much lower ping (5ms) which is better for video calls and gaming. It also doesn't slow down when other people in Naguru are using their phones." },
    { q: "Can I get unlimited internet without a data cap in Uganda?", a: "Zuku Fiber specializes in providing the highest quality internet without data cap Uganda wide, ensuring you never run out of data again." }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Zuku Fiber Naguru",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Naguru Hill",
          "addressLocality": "Naguru, Kampala",
          "addressCountry": "Uganda"
        },
        "telephone": "+256775260196",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 0.3421,
          "longitude": 32.6105
        },
        "url": "https://zuku-seven.vercel.app/internet-in-naguru"
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
            "name": "Internet in Naguru",
            "item": "https://zuku-seven.vercel.app/internet-in-naguru"
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
        "headline": "Fast Fiber Internet in Naguru Kampala 2026",
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
              🏔️ High-Performance Fiber on Naguru Hill
            </div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              Fast Unlimited <span className="grad-g">Fiber Internet in Naguru</span> — Zuku Fiber Uganda
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Zuku Fiber provides the premier unlimited fiber-optic internet connection for Naguru residents. By delivering dedicated, symmetrical speeds directly to your home or office, you ensure 100% stable performance with strictly zero data caps and no throttling. Discover our high-speed plans with free installation, a premium Wi-Fi router, and uninterrupted remote work reliability perfectly tailored for Naguru.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Check Naguru Coverage</Link>
              <Link href="/#plans" className="btn btn-ghost">View Speed Plans</Link>
            </div>
            
            <div className="animate-up d5" style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--t2)', fontSize: '0.875rem' }}>
              <span>⚡ Fast Setup</span>
              <span>·</span>
              <span>📡 High-Gain Router</span>
              <span>·</span>
              <span>📺 Digital TV Included</span>
              <span>·</span>
              <span>🔒 24/7 Local Support</span>
            </div>

            <div className="animate-up d5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              {[
                { label: 'Hill Connectivity', val: 'Fiber Optic', color: 'var(--blue)' },
                { label: 'Uptime SLA', val: '99.9%', color: 'var(--t0)' },
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Naguru Homes Choose Zuku</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🚀', title: 'Fiber Stability', desc: 'Unlike mobile signals that can drop on the slopes of Naguru Hill, our fiber is buried underground for maximum reliability.' },
                { icon: '♾️', title: 'Zero Data Caps', desc: 'The most reliable internet without data cap Uganda offers. Stream Netflix, host meetings, and download games without limits.' },
                { icon: '⚖️', title: 'Professional Speeds', desc: 'The best internet for working from home Uganda professionals in Naguru need. Upload and download at the same high speed.' },
                { icon: '📺', title: 'Free Digital TV', desc: 'Every plan include 100+ TV channels specifically curated for the Kampala market. No extra set-top box fees.' },
                { icon: '🛠️', title: 'Free Pro Installation', desc: 'Our dedicated Naguru installation team will set up your fiber line and teach you how to use your new Wi-Fi router for free.' },
                { icon: '📞', title: '24/7 Local Support', desc: 'Get support from people who know Naguru. We provide 24/7 technical monitoring to ensure you stay connected.' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Naguru ISP Comparison 2026</h2>
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-3)', color: 'var(--t2)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Provider</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Fiber Optic</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Price (UGX)</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Max Speed</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Data Cap</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Throttling</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Free Install</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: 'var(--green-bg)', borderLeft: '3px solid var(--green)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '600' }}>Zuku Fiber ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Yes</td>
                      <td style={{ padding: '1rem 1.25rem' }}>75,000</td>
                      <td style={{ padding: '1rem 1.25rem' }}>200 Mbps</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>None ✅</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>Never ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Free ✅</td>
                    </tr>
                    {[
                      { p: 'MTN WakaNet', t: 'Varies', price: '130,000', s: 'Varies', cap: 'Fair Usage ⚠️', th: 'Yes ❌', inst: 'No ❌' },
                      { p: 'Airtel Uganda', t: 'No (5G)', price: '150,000', s: 'Varies', cap: 'Volume Caps ❌', th: 'Yes ❌', inst: 'No ❌' },
                      { p: 'Roke Telkom', t: 'Varies', price: '112,000', s: '100 Mbps', cap: 'Time-based ⚠️', th: 'Yes ❌', inst: 'Paid ❌' },
                      { p: 'Faibanet', t: 'Yes', price: '100,000', s: '50 Mbps', cap: 'Limited ⚠️', th: 'Unclear', inst: 'Paid ❌' }
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
            <h2 className="section-title">Home Fiber Packages</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>
              Select the best internet in Naguru package for your lifestyle. No hidden fees or surprise charges.
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
                      Naguru Best Value
                    </div>
                  )}
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-head)' }}>{plan.speed}</h3>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--t0)', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}>UGX</span> {plan.price}
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}> /mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem', padding: '0' }}>
                    {['Unlimited Home Data', 'No Buffering in 4K', 'Symmetrical Speeds', 'Free WiFi Installation'].map((feat, j) => (
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
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Serving All Parts of Naguru</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
              {[
                { title: 'Naguru Hill Top', desc: 'Superior connectivity for residential estates and premium hotel zones.' },
                { title: 'Lower Naguru', desc: 'Reliable fiber internet Naguru residents use near the hospital and police headquarters.' },
                { title: 'Forest Hills', desc: 'Secure high-speed fiber for the entire Forest Hills residential area.' },
                { title: 'Naguru Commercial', desc: 'Symmetrical speeds for the growing tech and media companies on the hill.' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Naguru Internet FAQs</h2>
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
            <h2 className="section-title">Upgrade to Naguru&apos;s Best Fiber Network</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              Ready to leave mobile data for good? Start your journey with Zuku Fiber today.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Connect via WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              Installation is free for all new homes in Naguru and surrounding areas.
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
