import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Cheapest Internet in Uganda 2026 | Unlimited Fiber',
    description: 'Get the cheapest internet in Uganda 2026. Zuku Fiber offers unlimited high-speed internet from just UGX 75,000/month. No data caps, no contracts.',
    keywords: [
      'cheapest internet in Uganda',
      'cheapest internet bundles Uganda',
      'best internet in Uganda',
      'unlimited internet Uganda',
      'best fiber internet Uganda',
      'internet price Uganda',
      'low cost internet Kampala',
      'cheapest wifi Uganda',
      'cheapest data bundles Uganda',
      'fiber internet Uganda price',
      'internet providers Uganda comparison',
      'home internet Uganda',
      'internet without data cap Uganda',
      'best ISP Uganda',
      'Zuku Fiber Uganda',
    ],
    openGraph: {
      title: 'Cheapest Internet in Uganda 2026 | Unlimited Fiber',
      description: 'Unlimited high-speed internet from just UGX 75,000/month. Escape the high cost of mobile data bundles.',
      url: 'https://zukufiberuganda.vercel.app/cheapest-internet-uganda',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: {
      canonical: 'https://zukufiberuganda.vercel.app/cheapest-internet-uganda',
    },
  };
}

// FILE: src/app/cheapest-internet-uganda/page.tsx
export default function CheapestInternetUgandaPage() {
  const faqData = [
    { q: "What is the cheapest internet in Uganda?", a: "Zuku Fiber is currently the provider of the cheapest internet in Uganda for unlimited usage. While mobile bundles might seem cheap upfront, our UGX 75,000/month plan offers true unlimited high-speed data without the need to keep topping up." },
    { q: "How much is fiber internet in Uganda?", a: "Zuku Fiber internet prices in Uganda are highly competitive: 25 Mbps at UGX 75,000, 50 Mbps at UGX 89,400, 100 Mbps at UGX 110,000, and 200 Mbps at UGX 199,000. All plans include free installation." },
    { q: "Which internet is best in Uganda?", a: "The best internet in Uganda depends on your needs, but for cost and reliability, Zuku Fiber is #1. We offer symmetrical fiber speeds and a 99.9% uptime SLA that mobile providers can't match." },
    { q: "Does Zuku Fiber have data caps?", a: "No. Zuku Fiber Uganda specializes in internet without data cap Uganda wide. Your family can stream, download, and browse 24/7 without ever hitting a limit." },
    { q: "Which ISP has the best coverage in Kampala?", a: "Zuku Fiber covers the most high-traffic residential areas in Kampala including Kololo, Ntinda, Naguru, Bugolobi, Muyenga, Kisaasi, Kyanja, Bukoto, Munyonyo, and Entebbe Road." },
    { q: "How do I pay for internet in Uganda?", a: "Payment for the cheapest internet bundles Uganda has to offer is simple. Use MTN MoMo, Airtel Money, bank transfer, or any Zuku agent in Kampala." },
    { q: "Is fiber better than 4G in Uganda?", a: "Absolutely. Fiber is cheaper per gigabyte, much faster for uploads, and doesn't get congested during peak hours like 4G mobile networks." },
    { q: "Can I get unlimited internet without a data cap in Uganda?", a: "Yes. Zuku Fiber was built specifically to provide true unlimited internet. No throttling, no resets, just pure fiber speed at the cheapest internet price Uganda can offer." }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Zuku Fiber Uganda",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Diamond Trust Building",
          "addressLocality": "Kampala",
          "addressCountry": "Uganda"
        },
        "telephone": "+256775260196",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 0.3476,
          "longitude": 32.5825
        },
        "url": "https://zukufiberuganda.vercel.app/"
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
            "name": "Cheapest Internet Uganda",
            "item": "https://zukufiberuganda.vercel.app/cheapest-internet-uganda"
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
              💰 Most Affordable High-Speed Fiber in 2026
            </div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              <span className="grad-g">Cheapest Internet in Uganda</span> 2026 — Unlimited From UGX 75,000
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Stop overpaying for mobile bundles that run out in days. Zuku Fiber provides reliable, truly unlimited high-speed internet without data cap Uganda for the price of a few movie tickets.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Start Saving on WhatsApp</Link>
              <Link href="/#plans" className="btn btn-ghost">Compare Speed Plans</Link>
            </div>
            
            <div className="animate-up d5" style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--t2)', fontSize: '0.875rem' }}>
              <span>⚡ Free Installation</span>
              <span>·</span>
              <span>📡 Free Wi-Fi Router</span>
              <span>·</span>
              <span>📺 100+ TV Channels</span>
              <span>·</span>
              <span>🔒 No Contracts</span>
            </div>

            <div className="animate-up d5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              {[
                { label: 'Unbeatable Price', val: 'UGX 75k', color: 'var(--green)' },
                { label: 'True Data', val: 'Unlimited', color: 'var(--blue)' },
                { label: 'Install Fee', val: 'UGX 0', color: 'var(--t0)' },
                { label: 'Min Speed', val: '25 Mbps', color: 'var(--yellow)' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Fiber is Cheaper Than Mobile</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '💰', title: 'Zero Data Bundles', desc: 'One flat monthly fee gives you everything. No more stressful "MB balance" messages. Truly the cheapest internet in Uganda.' },
                { icon: '🚀', title: 'Speed Stability', desc: 'Mobile data slow at night? Fiber stays consistent 24/7. Fastest internet Uganda residents can trust for a fixed price.' },
                { icon: '🆓', title: 'Free Everything', desc: 'Free router, free professional installation, and free digital TV. We save you over UGX 300,000 in upfront costs.' },
                { icon: '📺', title: '100+ TV Channels', desc: 'Save on DStv/Gotv bills. Every plan includes sports, news, and kids channels at no extra charge.' },
                { icon: '⚡', title: 'Symmetrical Speed', desc: 'Uploads are as fast as downloads. Best internet for working from home Uganda freelancers need to save money.' },
                { icon: '🔒', title: 'No Commitment', desc: 'No long-term contracts. Pay as you go, and pause anytime. Flexible home internet Uganda families love.' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Price & Value Comparison</h2>
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-3)', color: 'var(--t2)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Provider</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Technology</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Starting Price</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Speed</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Data Cap</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Throttling</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Free Install</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: 'var(--green-bg)', borderLeft: '3px solid var(--green)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '600' }}>Zuku Fiber ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Pure Fiber</td>
                      <td style={{ padding: '1rem 1.25rem' }}>UGX 75,000/mo</td>
                      <td style={{ padding: '1rem 1.25rem' }}>200 Mbps</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>None ✅</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>Never ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Yes ✅</td>
                    </tr>
                    {[
                      { p: 'MTN WakaNet', t: '5G/Fiber', price: 'UGX 130,000/mo', s: 'Varies', cap: 'Fair Usage ⚠️', th: 'Yes ❌', inst: 'No ❌' },
                      { p: 'Airtel Uganda', t: '5G/4G', price: 'UGX 150,000/mo', s: 'Varies', cap: 'Volume Caps ❌', th: 'Yes ❌', inst: 'No ❌' },
                      { p: 'Roke Telkom', t: 'Wireless', price: 'UGX 112,000/mo', s: '100 Mbps', cap: 'Time-based ⚠️', th: 'Yes ❌', inst: 'Usually No ❌' },
                      { p: 'Faibanet', t: 'Fiber', price: 'UGX 100,000/mo', s: '50 Mbps', cap: 'Limited ⚠️', th: 'Unclear', inst: 'Often No ❌' }
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
            <h2 className="section-title">Cheapest Internet Bundles Uganda</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>
              Why pay more for less? Get unlimited high-speed fiber internet for your Kampala home today.
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
                      Most Popular
                    </div>
                  )}
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-head)' }}>{plan.speed}</h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--t2)', marginBottom: '2rem' }}>Unlimited Home Fiber</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--t0)', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}>UGX</span> {plan.price}
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}> /mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem', padding: '0' }}>
                    {['Unlimited Data', 'Zero Throttling', 'Fiber Optic Speeds', 'Free Installation'].map((feat, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--t1)', fontSize: '0.9rem' }}>
                        <div className="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link href="https://wa.me/2560775260196" className={`btn ${plan.popular ? 'btn-primary' : 'btn-ghost'}`} style={{ width: '100%' }}>Select This Plan</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIALS SECTION */}
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>What Our Users Save</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { name: 'Otim Peter', role: 'Business Owner', quote: 'I used to spend UGX 250,000 on mobile bundles weekly. Zuku Fiber gives me more speed for just UGX 110,000 a month.' },
                { name: 'Achieng Grace', role: 'University Student', quote: 'Best fiber internet Uganda student life could ask for. Split the bill with roommates and pay almost nothing for unlimited wifi.' },
                { name: 'Semakula John', role: 'Remote Worker', quote: 'Stable, 5ms latency, and the cheapest internet price Uganda offers for true fiber. My productivity has doubled.' }
              ].map((t, i) => (
                <div key={i} className="card" style={{ padding: '2.5rem' }}>
                  <div style={{ color: 'var(--yellow)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>★★★★★</div>
                  <p style={{ color: 'var(--t1)', fontStyle: 'italic', marginBottom: '2rem' }}>&quot;{t.quote}&quot;</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--bg-4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--green)' }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--t0)' }}>{t.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--t2)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ SECTION */}
        <section className="section" id="faq">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Frequently Asked Questions</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {faqData.map((faq, i) => (
                <details key={i} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '0.5rem' }}>
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
        <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Start Saving with Unlimited Fiber Today</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              No more data monitoring. No more expensive bundles. Just the cheapest internet in Uganda for one low monthly fee.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Sign Up on WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call Support</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              Available in: Kololo, Ntinda, Naguru, Bugolobi, Muyenga, Kisaasi, Kyanja, Bukoto, and Munyonyo.
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
