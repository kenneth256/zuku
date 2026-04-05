import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Fiber Internet in Kampala 2026 | Fast & Unlimited',
    description: 'Experience the best fiber internet in Kampala 2026. Zuku Fiber offers symmetrical speeds and unlimited data from UGX 75,000/month. Check coverage now!',
    keywords: [
      'fiber internet Kampala',
      'best internet in Kampala',
      'fastest internet Uganda',
      'best WiFi in Kampala',
      'unlimited internet Uganda',
      'home internet Kampala',
      'best internet provider Uganda',
      'best ISP Uganda',
      'internet in Ntinda Kampala',
      'internet in Kololo Kampala',
      'internet in Bugolobi Kampala',
      'internet in Naguru Kampala',
      'Zuku Fiber Uganda',
      'fiber internet Uganda price',
      'internet without data cap Uganda',
    ],
    openGraph: {
      title: 'Fiber Internet in Kampala 2026 | Fast & Unlimited',
      description: 'The most reliable fiber internet Kampala residents can get. Truly unlimited, 24/7 support, and free installation.',
      url: 'https://zuku-seven.vercel.app/fiber-internet-kampala',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: {
      canonical: 'https://zuku-seven.vercel.app/fiber-internet-kampala',
    },
  };
}

// FILE: src/app/fiber-internet-kampala/page.tsx
export default function FiberInternetKampalaPage() {
  const coverageAreas = [
    'Kololo', 'Ntinda', 'Naguru', 'Bugolobi', 'Muyenga', 
    'Kisaasi', 'Kyanja', 'Bukoto', 'Munyonyo', 'Entebbe Road'
  ];

  const faqData = [
    { q: "Which ISP has the best coverage in Kampala?", a: "Zuku Fiber offers some of the best fiber internet Kampala coverage, specifically targeting high-demand residential areas like Kololo, Ntinda, Naguru, Bugolobi, and Muyenga with dedicated fiber optic infrastructure." },
    { q: "Which internet is best in Uganda?", a: "For stability and speed, Zuku Fiber is the best internet in Uganda. We bypass the congestion of mobile towers by bringing a physical fiber line directly to your house." },
    { q: "What is the fastest internet in Uganda?", a: "Zuku Fiber provides the fastest internet Uganda home users can access, with symmetrical speeds reaching up to 200 Mbps and ultra-low latency of 5ms." },
    { q: "Does Zuku Fiber have data caps?", a: "No. We are the leading provider for internet without data cap Uganda. All our packages are truly unlimited, allowing you to stream in 4K without worry." },
    { q: "How much is fiber internet in Uganda?", a: "Our fiber internet price in Uganda starts at UGX 75,000 per month. This includes a free Wi-Fi router, free installation, and 100+ digital TV channels." },
    { q: "Is Zuku Fiber available in Kampala?", a: "Yes, Zuku Fiber is available in most major Kampala neighborhoods. Contact us on WhatsApp to check the exact fiber availability for your specific street." },
    { q: "How do I pay for internet in Uganda?", a: "You can pay via MTN MoMo, Airtel Money, or bank transfer using our self-service portal or at any physical Zuku agent in the city." },
    { q: "Is fiber better than 4G in Uganda?", a: "Yes. Fiber is not affected by weather or the number of people using the local tower. It provides a much more stable and faster experience for families and remote workers." }
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
        "url": "https://zuku-seven.vercel.app/"
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
            "name": "Fiber Internet Kampala",
            "item": "https://zuku-seven.vercel.app/fiber-internet-kampala"
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
        "headline": "Fiber Internet in Kampala 2026",
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
              📡 Leading Fiber Network in Kampala
            </div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              <span className="grad-g">Fiber Internet in Kampala</span> — Fast, Unlimited & Available Now
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Experience the best WiFi in Kampala with Zuku Fiber. We bring world-class speeds and strictly unlimited data to your doorstep in Kololo, Ntinda, Bugolobi, and beyond.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Check Availability</Link>
              <Link href="/#plans" className="btn btn-ghost">Browse Speed Plans</Link>
            </div>
            
            <div className="animate-up d5" style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--t2)', fontSize: '0.875rem' }}>
              <span>⚡ Free Setup</span>
              <span>·</span>
              <span>📡 High-Range Router</span>
              <span>·</span>
              <span>📺 Digital TV Included</span>
              <span>·</span>
              <span>🔒 24/7 Local Support</span>
            </div>

            <div className="animate-up d5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              {[
                { label: 'Kampala Uptime', val: '99.9%', color: 'var(--t0)' },
                { label: 'Local Latency', val: '5ms', color: 'var(--blue)' },
                { label: 'Network Power', val: 'Fiber', color: 'var(--green)' },
                { label: 'Support Team', val: 'Kampala', color: 'var(--yellow)' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>The Best Fiber Internet Kampala Offers</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🚀', title: 'Dedicated Fiber', desc: 'We don&apos;t share your connection with the whole neighborhood tower. You get a dedicated fiber strand for the fastest internet Uganda can provide.' },
                { icon: '📺', title: 'Home Entertainment', desc: 'Keep the whole family happy with 100+ TV channels including sports, kids, and international news included in every plan.' },
                { icon: '⚖️', title: 'True Symmetry', desc: 'Work confidently with upload speeds that match your download speeds. The best internet for working from home Uganda professionals trust.' },
                { icon: '🛡️', title: 'Cyber Security', desc: 'Our fiber internet Kampala network comes with built-in DDoS protection, keeping your devices safe from online threats.' },
                { icon: '🛠️', title: 'Free Pro Install', desc: 'Our expert Kampala-based engineers handle everything from cabling to router setup at zero cost to you.' },
                { icon: '♾️', title: 'Strictly Unlimited', desc: 'Say goodbye to data caps. We offer the leading internet without data cap Uganda wide — no hidden limits, just pure speed.' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Comparing Kampala ISPs</h2>
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-3)', color: 'var(--t2)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Provider</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Technology</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Monthly Cost</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Max Speed</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Data Cap</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Peak Throttling</th>
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
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>None ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Free ✅</td>
                    </tr>
                    {[
                      { p: 'MTN WakaNet', t: '5G/Fiber', price: 'UGX 130,000', s: 'Varies', cap: 'Fair Usage ⚠️', th: 'Yes ❌', inst: 'UGX 100k+ ❌' },
                      { p: 'Airtel Uganda', t: '5G/4G', price: 'UGX 150,000', s: 'Varies', cap: 'Volume Caps ❌', th: 'Yes ❌', inst: 'Cost of Router ❌' },
                      { p: 'Roke Telkom', t: 'Wireless', price: 'UGX 112,000', s: '100 Mbps', cap: 'Time-based ⚠️', th: 'Yes ❌', inst: 'Varies ❌' },
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
              Simple, transparent pricing for everyone in Kampala. No contracts, just unlimited high-speed fiber.
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
                  <div style={{ fontSize: '0.9rem', color: 'var(--t2)', marginBottom: '2rem' }}>Unlimited High-Speed Fiber</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--t0)', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}>UGX</span> {plan.price}
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}> /mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem', padding: '0' }}>
                    {['Unlimited Browsing', 'Streaming Without Buffering', 'Dedicated Fiber Line', 'Free Installation'].map((feat, j) => (
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

        {/* 5. COVERAGE SECTION */}
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Where We Are Live in Kampala</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {coverageAreas.map((area, i) => (
                <div key={i} className="card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-3)' }}>
                  <div className="check" style={{ width: '24px', height: '24px' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" /></svg></div>
                  <span style={{ fontWeight: '600', color: 'var(--t0)', fontSize: '1.1rem' }}>{area}</span>
                </div>
              ))}
            </div>
            <p className="section-sub" style={{ margin: '3rem auto 0', textAlign: 'center' }}>
              Don&apos;t see your neighborhood? We are expanding every week. WhatsApp us to check your street address.
            </p>
          </div>
        </section>

        {/* 6. FAQ SECTION */}
        <section className="section" id="faq" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Common Questions in Kampala</h2>
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
            <h2 className="section-title">Upgrade to the Best Fiber Internet Kampala Deserves</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              Same-day connection available in many areas. No contracts, just 24/7 high-speed internet.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Check Availability via WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              Head Office: Diamond Trust Building, Kampala, Uganda
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
