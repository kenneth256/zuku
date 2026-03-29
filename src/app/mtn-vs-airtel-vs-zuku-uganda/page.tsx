import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

export function generateMetadata(): Metadata {
  return {
    title: 'MTN vs Airtel vs Zuku Fiber Uganda 2026 | Full Comparison',
    description: 'Airtel vs MTN vs Zuku Uganda 2026 comparison. We compare fiber vs 5G, data caps, throttling, and price. See why Zuku is the best internet in Uganda.',
    keywords: [
      'Airtel vs MTN vs Zuku Uganda',
      'best internet in Uganda',
      'MTN vs Airtel vs Zuku Fiber',
      'best internet provider Uganda',
      'unlimited internet Uganda',
      'fiber vs 5 g Uganda',
      'MTN WakaNet vs Zuku',
      'Airtel 5 g vs Zuku Fiber',
      'fastest internet Uganda',
      'internet providers Uganda comparison',
      'home internet Uganda',
      'fiber internet Kampala',
      'internet price Uganda',
      'Zuku Fiber Uganda',
      'best ISP Uganda',
    ],
    openGraph: {
      title: 'MTN vs Airtel vs Zuku Fiber Uganda 2026 | Full Comparison',
      description: 'Which ISP is actually better for your home? We break down the true costs and performance of Uganda\'s top providers.',
      url: 'https://zukufiberuganda.vercel.app/mtn-vs-airtel-vs-zuku-uganda',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: {
      canonical: 'https://zukufiberuganda.vercel.app/mtn-vs-airtel-vs-zuku-uganda',
    },
  };
}

// FILE: src/app/mtn-vs-airtel-vs-zuku-uganda/page.tsx
export default function MtnAirtelZukuComparisonPage() {
  const faqData = [
    { q: "Is Zuku Fiber better than MTN or Airtel?", a: "Yes, for home and business use, Zuku Fiber is superior. Unlike MTN and Airtel which rely on mobile towers subject to congestion and weather, Zuku uses a dedicated fiber optic line that provides consistent speed and lower latency." },
    { q: "Which internet is best in Uganda?", a: "Zuku Fiber is widely considered the best internet in Uganda for consistency. While MTN and Airtel have good mobile coverage, fiber optics is the gold standard for high-bandwidth activities like streaming and gaming." },
    { q: "What is the cheapest internet in Uganda?", a: "For true unlimited usage, Zuku Fiber is the winner. Our UGX 75,000/month plan has no data cap, whereas mobile providers often have hidden fair usage limits that slow you down." },
    { q: "Does Zuku Fiber have data caps?", a: "No. Zuku Fiber Uganda provides 100% unlimited internet without data cap Uganda wide. MTN and Airtel plans usually come with volume limits or speed throttling after certain usage." },
    { q: "How much is fiber internet in Uganda?", a: "Zuku Fiber internet price in Uganda starts at UGX 75,000 for 25 Mbps. Mobile 5G routers can cost more upfront and typically have higher monthly data costs for comparable speeds." },
    { q: "Which ISP has the best coverage in Kampala?", a: "While MTN and Airtel have the widest mobile network, Zuku Fiber has the best fiber internet Kampala coverage in key residential areas like Ntinda, Kololo, Naguru, and Bugolobi." },
    { q: "What is the fastest internet in Uganda?", a: "Zuku Fiber offers symmetrical speeds up to 200 Mbps. While 5G can reach high burst speeds, fiber provides a constant, high-speed connection that doesn't drop." },
    { q: "Is fiber better than 5G in Uganda?", a: "Yes. Fiber has lower latency (avg 5ms vs 30ms+ on 5G), no data caps, and is not affected by the number of people using the local cell tower." }
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
            "name": "MTN vs Airtel vs Zuku Uganda",
            "item": "https://zukufiberuganda.vercel.app/mtn-vs-airtel-vs-zuku-uganda"
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
        "headline": "MTN vs Airtel vs Zuku Fiber Uganda 2026",
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
        <PageHero
          badge={{ text: '⚔️ The Ultimate Uganda ISP Showdown', color: 'green' }}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'MTN vs Airtel vs Zuku', href: '/mtn-vs-airtel-vs-zuku-uganda' },
          ]}
          title={<><span className="grad-g">MTN vs Airtel vs Zuku</span> Fiber Uganda 2026 — Which Is Best?</>}
          subtitle="We compared Uganda's biggest internet providers. Discover how Airtel vs MTN vs Zuku Uganda stack up when it comes to true speed, data caps, and monthly costs."
          ctas={[
            { label: 'Switch to Fiber Now', href: 'https://wa.me/2560775260196', primary: true },
            { label: 'Compare Prices', href: '/#plans' },
          ]}
          highlights={[
            '⚡ Free Installation',
            '· 📡 Free Wi-Fi Router',
            '· 📺 100+ TV Channels',
            '· 🔒 No Contracts',
          ]}
          stats={[
            { val: '5ms', label: 'Latency (Fiber)', color: 'var(--blue)' },
            { val: 'None', label: 'Data Cap', color: 'var(--green)' },
            { val: 'Zero', label: 'Throttling', color: 'var(--t0)' },
            { val: '24/7', label: 'Local Support', color: 'var(--yellow)' },
          ]}
        />

        {/* TABLE OF CONTENTS */}
        <section className="section" style={{ padding: '2rem 0', background: 'var(--bg-3)', borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontFamily: 'var(--font-head)' }}>Table of Contents</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#why-fiber" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: '500' }}>1. Why Fiber Outperforms Mobile Data</a></li>
              <li><a href="#comparison" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: '500' }}>2. Head-to-Head Comparison</a></li>
              <li><a href="#plans" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: '500' }}>3. Unlimited Fiber Packages</a></li>
              <li><a href="#testimonials" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: '500' }}>4. Why Customers Switch</a></li>
              <li><a href="#faq" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: '500' }}>5. Comparison FAQs</a></li>
            </ul>
          </div>
        </section>

        {/* 2. WHY ZUKU FIBER SECTION */}
        <section className="section" id="why-fiber" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Fiber Outperforms Mobile Data</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '📡', title: 'Fiber vs Mobile Signal', desc: 'Wireless 4G/5G signals drop due to weather and building walls. Fiber is a physical cable that delivers 100% of your speed 100% of the time.' },
                { icon: '♾️', title: 'True Unlimited Data', desc: 'MTN and Airtel have Fair Usage Policies (FUP). Zuku Fiber has zero caps. It&apos;s the only true internet without data cap Uganda can offer.' },
                { icon: '🚀', title: 'Zero Throttling', desc: 'Mobile operators slow down your speed during peak hours (7pm-10pm). Zuku never throttles. Enjoy the fastest internet Uganda has 24/7.' },
                { icon: '⚖️', title: 'Symmetrical Speed', desc: 'Upload as fast as you download. Mobile data is asymmetrical. Zuku is the best internet for working from home Uganda freelancers need.' },
                { icon: '💰', title: 'Fixed Monthly Billing', desc: 'No more "buying bundles" every day. One flat monthly fee from UGX 75,000 for everything you need. Cheapest internet bundles Uganda value.' },
                { icon: '🛡️', title: 'Network Security', desc: 'Every Zuku connection in Kampala includes built-in DDoS protection and encrypted DNS, which is rarely found on mobile broadband.' }
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
        <section className="section" id="comparison">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>MTN vs Airtel vs Zuku: Head-to-Head</h2>
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '950px' }}>
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
            <h2 className="section-title">Unlimited Fiber Packages</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>
              Why settle for limited data when you can have fiber? Every plan includes free installation and social-distance support.
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
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--t0)', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}>UGX</span> {plan.price}
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}> /mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem', padding: '0' }}>
                    {['100% Unlimited Data', 'Zero Monthly Caps', 'Symmetrical Fiber', 'Free Wi-Fi Router'].map((feat, j) => (
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
        <section className="section" id="testimonials">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Customers Switch</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { name: 'Nakato Mary', role: 'Business Consultant', quote: 'I used to pay for two mobile data lines just in case one was slow. Now Zuku Fiber is all I need. More speed, less cost.' },
                { name: 'Okello David', role: 'Graphic Designer', quote: 'Uploading client work on Airtel vs MTN vs Zuku Uganda — Zuku wins every time because of the symmetrical upload speeds.' },
                { name: 'Lubega Samuel', role: 'Family Man', quote: 'My kids stream on iPad while I work. No buffering, no data cap messages. Best ISP Uganda for families.' }
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
        <section className="section" id="faq" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Comparison FAQs</h2>
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
            <h2 className="section-title">Ready for the Best Internet in Uganda?</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              Stop compromising on mobile broadband. Get dedicated fiber internet Kampala residents trust.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Connect on WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              We cover: Ntinda, Kololo, Naguru, Bugolobi, Muyenga, Kisaasi, Kyanja, Bukoto, and Munyonyo.
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
