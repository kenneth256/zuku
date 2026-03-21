import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Ultra-Fast Fiber Internet in Kololo Kampala 2026 | Zuku Fiber',
    description: 'Premier home internet in Kololo Kampala. Zuku Fiber provides dedicated, high-speed unlimited internet for Kololo residents and businesses from UGX 75,000.',
    keywords: [
      'internet in Kololo',
      'best internet in Kololo Kampala',
      'fiber internet Kololo',
      'WiFi in Kololo',
      'Zuku Fiber Kololo',
      'unlimited internet Uganda',
      'best internet provider Uganda',
      'fiber internet Kampala',
      'home internet Kololo',
      'fastest internet Uganda',
      'internet without data cap Uganda',
      'Zuku Fiber Uganda',
      'internet providers Uganda comparison',
      'best ISP Uganda',
    ],
    openGraph: {
      title: 'Ultra-Fast Fiber Internet in Kololo Kampala 2026 | Zuku Fiber',
      description: 'The standard for high-speed internet in Kololo. Unlimited data, low latency, and 24/7 priority support.',
      url: 'https://zukufiberuganda.vercel.app/internet-in-kololo',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: {
      canonical: 'https://zukufiberuganda.vercel.app/internet-in-kololo',
    },
  };
}

// FILE: src/app/internet-in-kololo/page.tsx
export default function InternetInKololoPage() {
  const faqData = [
    { q: "Is Zuku Fiber available in Kololo?", a: "Yes. Zuku Fiber has comprehensive coverage throughout Kololo. We serve residential homes, apartments, and corporate offices near Acacia Mall, Kololo Airstrip, and along Prince Charles Drive." },
    { q: "What is the best internet in Kololo?", a: "Zuku Fiber is the best internet in Kololo for users who require high uptime and consistent speeds. Our dedicated fiber infrastructure is perfect for executive home offices and luxury residences." },
    { q: "How much is fiber internet in Kololo?", a: "Kololo fiber plans start at UGX 75,000 for 25 Mbps. For power users, our 100 Mbps (UGX 110,000) and 200 Mbps (UGX 199,000) plans are highly recommended for large households." },
    { q: "Does Zuku Fiber have data caps in Kololo?", a: "No. Every Zuku Fiber plan in Kololo is strictly unlimited. We provide the premier internet without data cap Uganda experience with zero throttling." },
    { q: "How fast can I get connected in Kololo?", a: "We prioritize Kololo installations. Contact us on WhatsApp (0775 260 196), and we can typically have your high-speed fiber active within 24 to 48 hours." },
    { q: "Which ISP has the best coverage in Kampala?", a: "Zuku Fiber is a leader in fiber internet Kampala deployment, with Kololo being one of our primary established network zones." },
    { q: "Is fiber better than 4G/5G in Kololo?", a: "Yes. While 5G is available in Kololo, it still suffers from latency spikes. Zuku Fiber provides a stable 5ms connection, essential for secure video conferencing and high-speed streaming." },
    { q: "Can I get unlimited internet without a data cap in Uganda?", a: "Absolutely. Zuku Fiber is the first choice for internet without data cap Uganda wide, especially for residents in premium areas like Kololo." }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Zuku Fiber Kololo",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Prince Charles Drive",
          "addressLocality": "Kololo, Kampala",
          "addressCountry": "Uganda"
        },
        "telephone": "+256775260196",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 0.3292,
          "longitude": 32.5936
        },
        "url": "https://zukufiberuganda.vercel.app/internet-in-kololo"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://zukufiberuganda.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Internet in Kololo",
            "item": "https://zukufiberuganda.vercel.app/internet-in-kololo"
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
              💎 Premium Fiber for Kololo Residents
            </div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              Ultra-Fast <span className="grad-g">Fiber Internet in Kololo</span> — Zuku Fiber Uganda
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Enjoy the gold standard of home connectivity. Zuku Fiber brings dedicated, symmetrical speeds and truly unlimited data to the most prestigious neighborhood in Kampala.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Check Kololo Availability</Link>
              <Link href="/#plans" className="btn btn-ghost">Explore Premium Plans</Link>
            </div>
            
            <div className="animate-up d5" style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--t2)', fontSize: '0.875rem' }}>
              <span>⚡ Priority Installation</span>
              <span>·</span>
              <span>📡 Premium 5GHz WiFi</span>
              <span>·</span>
              <span>📺 100+ TV Channels</span>
              <span>·</span>
              <span>🔒 24/7 VIP Support</span>
            </div>

            <div className="animate-up d5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              {[
                { label: 'Uptime SLA', val: '99.99%', color: 'var(--t0)' },
                { label: 'Zero Lag', val: '5ms Ping', color: 'var(--blue)' },
                { label: 'Network', val: 'Full Fiber', color: 'var(--green)' },
                { label: 'Data Cap', val: 'Unlimited', color: 'var(--yellow)' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Excellence in Connectivity</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🏛️', title: 'Diplomatic Standard', desc: 'Secure, high-bandwidth connections trusted by embassies and international organizations throughout Kololo.' },
                { icon: '🚀', title: 'Dedicated Speed', desc: 'We don&apos;t use shared mobile towers. Your Kololo home gets a physical fiber strand for the fastest internet Uganda offers.' },
                { icon: '⚖️', title: 'Work From Home', desc: 'Symmetrical speeds mean your video calls are crystal clear. The best internet for working from home Uganda professionals deserve.' },
                { icon: '📺', title: 'Home Cinema', desc: 'Stream 4K content on multiple devices simultaneously without a single second of buffering. Digital TV included.' },
                { icon: '🛡️', title: 'Enterprise Security', desc: 'Built-in protection against DDoS and local network threats. The secure fiber internet Kampala residents rely on.' },
                { icon: '♾️', title: 'No Usage Limits', desc: 'Strictly unlimited data. No Fair Usage Policy, no slowdowns, no surprises. Truly the best ISP Uganda choice for Kololo.' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Kololo ISP Performance Score</h2>
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-3)', color: 'var(--t2)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Provider</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Type</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Pricing</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Symmetry</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Data Cap</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Peak Speed</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Support</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: 'var(--blue-bg)', borderLeft: '3px solid var(--blue)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '600' }}>Zuku Fiber ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Fiber Optic</td>
                      <td style={{ padding: '1rem 1.25rem' }}>From 75k</td>
                      <td style={{ padding: '1rem 1.25rem' }}>100% Yes ✅</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>None ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>200 Mbps</td>
                      <td style={{ padding: '1rem 1.25rem' }}>24/7 VIP</td>
                    </tr>
                    {[
                      { p: 'MTN WakaNet', t: '5G/Fiber', price: '130,000+', s: 'No', cap: 'Fair Usage ⚠️', th: 'Varies', inst: 'Standard' },
                      { p: 'Airtel Uganda', t: '5G/4G', price: '150,000+', s: 'No', cap: 'Volume Caps ❌', th: 'Varies', inst: 'Standard' },
                      { p: 'Roke Telkom', t: 'Wireless', price: '112,000', s: 'No', cap: 'Managed ⚠️', th: '100 Mbps', inst: 'Corporate' },
                      { p: 'Faibanet', t: 'Fiber', price: '100,000', s: 'Maybe', cap: 'Limited ⚠️', th: '50 Mbps', inst: 'Basic' }
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
            <h2 className="section-title">Kololo Premium Fiber Plans</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>
              World-class internet pricing for Kampala&apos;s premier residences. No contracts, no setup fees, just performance.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[
                { speed: '25 Mbps', price: '75,000' },
                { speed: '50 Mbps', price: '89,400' },
                { speed: '100 Mbps', price: '110,000', popular: true },
                { speed: '200 Mbps', price: '199,000' }
              ].map((plan, i) => (
                <div key={i} className="card" style={{ padding: '3rem 2rem', border: plan.popular ? '1px solid var(--blue-bd)' : '1px solid var(--border)', position: 'relative' }}>
                  {plan.popular && (
                    <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--blue)', color: '#fff', padding: '0.4rem 1rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>
                      Recommended for Kololo
                    </div>
                  )}
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-head)' }}>{plan.speed}</h3>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--t0)', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}>UGX</span> {plan.price}
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}> /mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem', padding: '0' }}>
                    {['100% Unlimited Fiber', 'HD Streaming Quality', 'Low Latency for Pros', 'Free Pro Installation'].map((feat, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--t1)', fontSize: '0.9rem' }}>
                        <div className="check" style={{ borderColor: 'var(--blue-bd)', background: 'var(--blue-bg)' }}><svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg></div>
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
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Kololo Neighborhood Coverage</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Lower Kololo', desc: 'High-speed fiber available across Wampewo Avenue and surrounding residential pockets.' },
                { title: 'Upper Kololo', desc: 'Dedicated lines for embassies and hilltop residences near the Airstrip.' },
                { title: 'Acacia & Summit View', desc: 'Seamless connectivity for the bustling commercial and high-end living zones.' },
                { title: 'Lugogo & Naguru Border', desc: 'Reliable fiber bridging the gap between Kololo and Naguru business hubs.' }
              ].map((area, i) => (
                <div key={i} className="card" style={{ padding: '2rem', background: 'var(--bg-3)' }}>
                  <h3 style={{ marginBottom: '1rem', color: 'var(--green)', fontSize: '1.25rem' }}>{area.title}</h3>
                  <p style={{ color: 'var(--t1)' }}>{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ SECTION */}
        <section className="section" id="faq" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Kololo Internet FAQs</h2>
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
            <h2 className="section-title">Join the Elite Network in Kololo</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              Don&apos;t settle for anything less than pure fiber. Get connected with Zuku Fiber today.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Check Availability</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call Priority Support</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              We serve all residential and corporate clients in Kololo, Kampala.
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
