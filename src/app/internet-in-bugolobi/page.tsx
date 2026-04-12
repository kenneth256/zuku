import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Best Internet in Bugolobi Kampala 2026 | Zuku Fiber',
    description: 'Get the fastest home internet in Bugolobi Kampala. Zuku Fiber offers unlimited high-speed fiber internet for Bugolobi residents from UGX 75,000/month. Free install.',
    keywords: [
      'internet in Bugolobi',
      'best internet in Bugolobi Kampala',
      'WiFi in Bugolobi',
      'fiber internet Bugolobi',
      'Zuku Fiber Bugolobi',
      'unlimited internet Uganda',
      'best internet provider Uganda',
      'fiber internet Kampala',
      'home internet Bugolobi',
      'cheapest internet bundles Uganda',
      'fastest internet Uganda',
      'internet without data cap Uganda',
      'Zuku Fiber Uganda',
      'Village Mall Bugolobi internet',
      'best ISP Uganda',
    ],
    openGraph: {
      title: 'Best Internet in Bugolobi Kampala 2026 | Zuku Fiber',
      description: 'The preferred choice for Bugolobi families and businesses. Unlimited fiber, low latency, and 24/7 dedicated support.',
      url: 'https://zuku-seven.vercel.app/internet-in-bugolobi',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: {
      canonical: 'https://zuku-seven.vercel.app/internet-in-bugolobi',
    },
  };
}

// FILE: src/app/internet-in-bugolobi/page.tsx
export default function InternetInBugolobiPage() {
  const faqData = [
    { q: "Is Zuku Fiber available in Bugolobi?", a: "Yes. Zuku Fiber has extensive network coverage across Bugolobi, including areas near Village Mall, Bugolobi Market, and the various residential apartment blocks along Luthuli Avenue." },
    { q: "What is the best internet in Bugolobi?", a: "Zuku Fiber is the top-rated internet in Bugolobi for home users. Unlike mobile data providers, we offer a dedicated fiber optic cable directly to your house, ensuring zero congestion and 100% stable speed." },
    { q: "How much is fiber internet in Bugolobi?", a: "Bugolobi fiber plans start at UGX 75,000 for 25 Mbps. Our most popular plan for Bugolobi households is the 50 Mbps package for UGX 89,400, which includes free installation and a WiFi router." },
    { q: "Does Zuku Fiber have data caps in Bugolobi?", a: "No. All Zuku packages are truly unlimited. We provide the best internet without data cap Uganda wide, meaning you can stream movies and attend work meetings without ever worrying about balances." },
    { q: "How do I sign up for Zuku in Bugolobi?", a: "It's easy! Reach out to us on WhatsApp (0775 260 196) with your apartment or house details. Our Bugolobi-based technical team will handle the installation and setup for you at no professional cost." },
    { q: "Which ISP has the best coverage in Kampala?", a: "Zuku Fiber is a leader in fiber internet Kampala deployment, with concentrated networks in Bugolobi, Ntinda, Kololo, and Naguru." },
    { q: "Is fiber better than 4G/5G in Bugolobi?", a: "Yes. Fiber optics provides a much lower ping (5ms) which is essential for video conferencing and online gaming. It is also not affected by the high volume of mobile users often found around Village Mall." },
    { q: "Can I get unlimited internet without a data cap in Uganda?", a: "Yes, Zuku Fiber is the primary provider of internet without data cap Ugandawide. Upgrade your Bugolobi home to a limit-free life today." }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Zuku Fiber Bugolobi",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Luthuli Avenue",
          "addressLocality": "Bugolobi, Kampala",
          "addressCountry": "Uganda"
        },
        "telephone": "+256775260196",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 0.3167,
          "longitude": 32.6133
        },
        "url": "https://zuku-seven.vercel.app/internet-in-bugolobi"
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
            "name": "Internet in Bugolobi",
            "item": "https://zuku-seven.vercel.app/internet-in-bugolobi"
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
        "headline": "Best Internet in Bugolobi Kampala 2026",
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
            <div className="label label-blue animate-up d1">
              <span className="label-dot" />
              🏗️ Specialized Fiber for Bugolobi Homes
            </div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              High-Speed <span className="grad-g">Fiber Internet in Bugolobi</span> — Zuku Fiber Uganda
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Zuku Fiber provides the premier unlimited fiber-optic internet connection for Bugolobi residents. By delivering dedicated, symmetrical speeds directly to your home or office, you ensure 100% stable performance with strictly zero data caps and no throttling. Discover our high-speed plans with free installation, a premium Wi-Fi router, and uninterrupted remote work reliability perfectly tailored for Bugolobi.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Check Bugolobi Coverage</Link>
              <Link href="/#plans" className="btn btn-ghost">View Fiber Plans</Link>
            </div>
            
            <div className="animate-up d5" style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--t2)', fontSize: '0.875rem' }}>
              <span>⚡ Free Setup</span>
              <span>·</span>
              <span>📡 High-Range WiFi</span>
              <span>·</span>
              <span>📺 100+ TV Channels</span>
              <span>·</span>
              <span>🔒 24/7 Priority Support</span>
            </div>

            <div className="animate-up d5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              {[
                { label: 'Uptime', val: '99.9%', color: 'var(--t0)' },
                { label: 'Latency', val: '5ms Ping', color: 'var(--blue)' },
                { label: 'Tech', val: 'Full Fiber', color: 'var(--green)' },
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Bugolobi Prefers Zuku Fiber</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🚀', title: 'Dedicated Bandwidth', desc: 'Unlike shared mobile towers near Bugolobi Market, our fiber gives you a private lane to the internet for the fastest internet Uganda offers.' },
                { icon: '📺', title: 'Full Entertainment', desc: 'Stream your favorite shows in 4K while the family enjoys 100+ digital TV channels including sports and movies at no extra cost.' },
                { icon: '⚖️', title: 'Remote Work Ready', desc: 'The best internet for working from home Uganda professionals in Bugolobi rely on for Zoom and high-speed data transfers.' },
                { icon: '🛡️', title: 'Network Security', desc: 'Our fiber internet Kampala network includes dedicated hardware firewall protection to keep your home devices safe from intrusions.' },
                { icon: '🛠️', title: 'Expert Setup', desc: 'Our Bugolobi installation team handles everything from internal wiring to WiFi range extension at zero cost to you.' },
                { icon: '♾️', title: 'Truly Unlimited', desc: 'Experience true internet without data cap Uganda. No Fair Usage Policy, no speed resets, just continuous fiber performance.' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Internet Providers Bugolobi Comparison</h2>
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-3)', color: 'var(--t2)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Provider</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Fiber Technology</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Monthly Price</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Max Speed</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Data Cap</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Throttling</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Install Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: 'var(--green-bg)', borderLeft: '3px solid var(--green)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '600' }}>Zuku Fiber ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Full Fiber</td>
                      <td style={{ padding: '1rem 1.25rem' }}>UGX 75,000</td>
                      <td style={{ padding: '1rem 1.25rem' }}>200 Mbps</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>None ✅</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>Never ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Free ✅</td>
                    </tr>
                    {[
                      { p: 'MTN WakaNet', t: '5G/Fiber', price: 'UGX 130,000', s: 'Varies', cap: 'Fair Usage ⚠️', th: 'Yes ❌', inst: 'No ❌' },
                      { p: 'Airtel Uganda', t: '5G/4G', price: 'UGX 150,000', s: 'Varies', cap: 'Volume Caps ❌', th: 'Yes ❌', inst: 'No ❌' },
                      { p: 'Roke Telkom', t: 'Wireless', price: 'UGX 112,000', s: '100 Mbps', cap: 'Time-based ⚠️', th: 'Yes ❌', inst: 'Paid ❌' },
                      { p: 'Faibanet', t: 'Fiber', price: 'UGX 100,000', s: '50 Mbps', cap: 'Limited ⚠️', th: 'Unclear', inst: 'Paid ❌' }
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
              Simple pricing. Superior performance. Join the best internet in Bugolobi network today.
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
                      Best For Bugolobi
                    </div>
                  )}
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-head)' }}>{plan.speed}</h3>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--t0)', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}>UGX</span> {plan.price}
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}> /mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem', padding: '0' }}>
                    {['Zero Usage Limits', 'Low Ping for Gaming', 'Symmetrical Bandwidth', 'Free Home Installation'].map((feat, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--t1)', fontSize: '0.9rem' }}>
                        <div className="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link href="https://wa.me/2560775260196" className={`btn ${plan.popular ? 'btn-primary' : 'btn-ghost'}`} style={{ width: '100%' }}>Order Now</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. LOCAL CONTENT SECTION */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Coverage in All Bugolobi Zones</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
              {[
                { title: 'Luthuli Avenue', desc: 'Symmetrical fiber for the executive homes and corporate offices along the main drive.' },
                { title: 'Bugolobi Flats', desc: 'High-capacity network designed to serve the larger family complexes with zero buffering.' },
                { title: 'Village Mall Area', desc: 'Secure WiFi for residents and shoppers requiring high-speed fiber internet bugolobi access.' },
                { title: 'Bandali Rise', desc: 'Reliable fiber bridging the gap between residential rest and commercial energy.' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Bugolobi WiFi FAQs</h2>
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
            <h2 className="section-title">Experience the Best Internet in Bugolobi</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              Join the thousands of homes in Bugolobi, Ntinda, Naguru, and Kololo enjoying limit-free high-speed internet.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Connect via WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              Free fiber installation and high-range WiFi router for all new Bugolobi subscribers.
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
