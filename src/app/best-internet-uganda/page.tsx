import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Best Internet Providers in Uganda 2026 | Zuku Fiber',
    description: 'Compare the best internet providers in Uganda 2026. Zuku Fiber offers unlimited fiber from UGX 75,000/month — no caps, no throttling. Free install included.',
    keywords: [
      'best internet in Uganda',
      'best internet provider Uganda',
      'fastest internet Uganda',
      'best fiber internet Uganda',
      'unlimited internet Uganda',
      'best WiFi in Kampala',
      'cheapest internet bundles Uganda',
      'home internet Uganda',
      'fiber internet Kampala',
      'internet providers Uganda comparison',
      'best internet for working from home Uganda',
      'Airtel vs MTN vs Zuku Uganda',
      'best unlimited internet Uganda 2026',
      'internet in Kampala',
      'best ISP Uganda',
    ],
    openGraph: {
      title: 'Best Internet Providers in Uganda 2026 | Zuku Fiber',
      description: 'Compare the best internet providers in Uganda 2026. Zuku Fiber offers unlimited fiber from UGX 75,000/month — no caps, no throttling.',
      url: 'https://zukufiberuganda.vercel.app/best-internet-uganda',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: {
      canonical: 'https://zukufiberuganda.vercel.app/best-internet-uganda',
    },
  };
}

// FILE: src/app/best-internet-uganda/page.tsx
export default function BestInternetUgandaPage() {
  const faqData = [
    { q: "Which internet is best in Uganda?", a: "Zuku Fiber is widely considered the best internet in Uganda for home use. Unlike mobile providers, we offer a dedicated fiber optic connection with 99.9% uptime, zero data caps, and symmetrical speeds (upload = download)." },
    { q: "What is the cheapest internet in Uganda?", a: "For true unlimited usage, Zuku Fiber is the cheapest internet in Uganda. Our plans start at just UGX 75,000/month for 25 Mbps, which is far more cost-effective than buying daily or weekly mobile data bundles." },
    { q: "Does Zuku Fiber have data caps?", a: "No. Zuku Fiber Uganda provides strictly unlimited internet without data caps. There is no 'Fair Usage Policy' (FUP) that slows you down after you use a certain amount of data." },
    { q: "How much is fiber internet in Uganda?", a: "Fiber internet in Uganda with Zuku starts at UGX 75,000 for 25 Mbps, UGX 89,400 for 50 Mbps, UGX 110,000 for 100 Mbps, and UGX 199,000 for 200 Mbps. Installation is free." },
    { q: "Which ISP has the best coverage in Kampala?", a: "Zuku Fiber has extensive coverage in Kampala's major residential areas including Kololo, Ntinda, Naguru, Bugolobi, Muyenga, Kisaasi, Kyanja, Bukoto, Munyonyo, and the Entebbe Road corridor." },
    { q: "What is the fastest internet in Uganda?", a: "Zuku Fiber offers speeds up to 200 Mbps for residential users, which is currently the fastest and most stable home internet speed available in Uganda." },
    { q: "How do I pay for internet in Uganda?", a: "You can pay for your Zuku Fiber subscription easily through MTN MoMo, Airtel Money, bank transfer, or at various walk-in agent locations across Kampala." },
    { q: "Is fiber better than 4G in Uganda?", a: "Yes, fiber is significantly better than 4G/5G for home use. Fiber offers lower latency (avg 5ms), more consistent speeds, and truly unlimited data, whereas 4G is subject to congestion and strict data limits." },
    { q: "Can I get unlimited internet without a data cap in Uganda?", a: "Yes, Zuku Fiber is the leading provider of internet without data cap Uganda wide. Enjoy 24/7 high-speed connectivity for streaming, gaming, and remote work without worrying about balances." }
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
            "name": "Best Internet in Uganda",
            "item": "https://zukufiberuganda.vercel.app/best-internet-uganda"
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
            <div className="label label-green animate-up d1">
              <span className="label-dot" />
              🏆 Uganda&apos;s #1 Ranked Provider — 2026
            </div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              The <span className="grad-g">Best Internet in Uganda</span> 2026 — Compared & Ranked
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Stop guessing and start surfing. We compared speed, reliability, and price across every ISP. Discover why Zuku Fiber is the best internet provider Uganda has for families and professionals.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Sign Up on WhatsApp</Link>
              <Link href="/#plans" className="btn btn-ghost">View Fiber Plans</Link>
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
                { label: 'Uptime SLA', val: '99.9%', color: 'var(--t0)' },
                { label: 'Max Speed', val: '200 Mbps', color: 'var(--blue)' },
                { label: 'Low Latency', val: '5ms', color: 'var(--yellow)' },
                { label: 'Data Limit', val: 'Unlimited', color: 'var(--green)' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Zuku Fiber Wins #1</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🚀', title: 'Zero Throttling', desc: 'No slowdowns at 9pm on a Friday. Your speed is guaranteed 24/7, making it the fastest internet Uganda offers.' },
                { icon: '⚖️', title: 'Symmetrical Speeds', desc: 'Upload as fast as you download. Perfect for video calls, gaming, and working from home Uganda style.' },
                { icon: '📞', title: 'Kampala-Based Support', desc: 'Our engineers are locals, not overseas. Get 24/7 dedicated support right here in Kampala.' },
                { icon: '💰', title: 'Honest Pricing', desc: 'From UGX 75,000/month with zero hidden fees. It&apos;s the cheapest internet bundles Uganda has for fiber.' },
                { icon: '🛡️', title: 'DDoS Protection', desc: 'Your home network is shielded from cyber threats by default. Secure fiber internet Kampala residents trust.' },
                { icon: '📺', title: 'Free Digital TV', desc: 'Every plan includes 100+ TV channels for sports, news, and entertainment at no extra cost.' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Internet Providers Uganda Comparison</h2>
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
            <h2 className="section-title">Unlimited Fiber Plans</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>
              The best fiber internet Uganda households use for streaming and gaming. Every plan includes free installation and router.
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
                  <Link href="https://wa.me/2560775260196" className={`btn ${plan.popular ? 'btn-primary' : 'btn-ghost'}`} style={{ width: '100%' }}>Order Now</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIALS SECTION */}
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Success Stories</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { name: 'Kato James', role: 'Software Developer', quote: 'Zuku is the best internet for working from home Uganda has to offer. Low latency and solid uptime.' },
                { name: 'Nalubega Sarah', role: 'Digital Creator', quote: 'I used to struggle with 4G data caps. Now I upload 4K videos in minutes with fiber internet Kampala coverage.' },
                { name: 'Muwonge Brian', role: 'Gamer', quote: 'The zero throttling guarantee is real. My ping stays low even during peak hours. Best ISP Uganda for gaming.' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Your Questions, Answered</h2>
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
            <h2 className="section-title">Switch to Uganda&apos;s Best High-Speed Internet</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              Join thousands of homes in Kololo, Ntinda, Naguru, and Bugolobi enjoying unlimited internet without data cap Uganda.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Connect via WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <div style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              Address: Diamond Trust Building, Kampala, Uganda · Email: support@zukufiber.co.ug
            </div>
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
