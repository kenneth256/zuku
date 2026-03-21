import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Best Internet for Working From Home Uganda 2026 | Zuku Fiber',
    description: 'Best internet for working from home in Uganda 2026. Zuku Fiber delivers zero-throttle unlimited fiber from UGX 75,000/mo — perfect for video calls and remote work.',
    keywords: [
      'best internet for working from home Uganda',
      'work from home internet Uganda',
      'remote work internet Kampala',
      'best internet in Uganda',
      'unlimited internet Uganda',
      'fiber internet Kampala',
      'best fiber internet Uganda',
      'fastest internet Uganda',
      'best WiFi in Kampala',
      'home internet Uganda',
      'internet without data cap Uganda',
      'best ISP Uganda',
      'Zuku Fiber Uganda',
      'best internet provider Uganda',
      'best unlimited internet Uganda 2026',
    ],
    openGraph: {
      title: 'Best Internet for Working From Home Uganda 2026 | Zuku Fiber',
      description: 'Zero-throttle fiber internet for remote workers in Uganda. Symmetrical speeds, 99.9% uptime, 5ms latency. From UGX 75,000/month with free installation.',
      url: 'https://zukufiberuganda.vercel.app/work-from-home-internet-uganda',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: {
      canonical: 'https://zukufiberuganda.vercel.app/work-from-home-internet-uganda',
    },
  };
}

// FILE: src/app/work-from-home-internet-uganda/page.tsx
export default function WorkFromHomeInternetUgandaPage() {
  const faqData = [
    { q: 'What is the best internet for working from home in Uganda?', a: 'Zuku Fiber is the best internet for working from home in Uganda. Its symmetrical speeds, 5ms latency, zero throttling, and 99.9% uptime make it ideal for video calls, cloud work, and large file transfers.' },
    { q: 'Does Zuku Fiber work well for Zoom calls in Uganda?', a: 'Yes. Zuku Fiber delivers symmetrical speeds (equal upload and download) and 5ms latency, which eliminates video call lag and dropped calls. Subscribers report zero dropped calls even on the 25 Mbps plan.' },
    { q: 'Is fiber internet good enough for remote work in Uganda?', a: 'Fiber is the gold standard for remote work. Zuku Fiber\'s dedicated fiber optic connection doesn\'t slow down during busy hours, unlike mobile broadband from MTN or Airtel.' },
    { q: 'Which internet plan is best for video conferencing in Uganda?', a: 'The 50 Mbps plan at UGX 89,400/month is ideal for most remote workers. It supports multiple simultaneous video calls, cloud backups, and file transfers without any slowdown.' },
    { q: 'Does working from home internet in Uganda have data caps?', a: 'Not with Zuku Fiber. All plans are truly unlimited — no data caps, no fair usage policy, and no throttling even if you use hundreds of gigabytes per month for work.' },
    { q: 'What upload speed do I need for remote work in Uganda?', a: 'For video calls you need at least 5 Mbps upload. Zuku Fiber delivers symmetrical speeds — a 25 Mbps plan gives you 25 Mbps upload too, far more than enough for HD video conferencing.' },
    { q: 'Can I run my business from home in Kampala with Zuku Fiber?', a: 'Absolutely. Many businesses in Kololo, Ntinda, Naguru, and Bugolobi operate entirely from home on Zuku Fiber. The 100 Mbps or 200 Mbps plans are particularly popular for small businesses.' },
    { q: 'What happens if my work internet goes down in Uganda?', a: 'Zuku Fiber has a 99.9% uptime SLA. If your connection goes down, our 24/7 Kampala-based engineers respond quickly — most issues are resolved within 30 minutes.' }
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
            "name": "Work From Home Internet Uganda",
            "item": "https://zukufiberuganda.vercel.app/work-from-home-internet-uganda"
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
              💼 Built for Remote Workers in Kampala
            </div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              Best Internet for <span className="grad-g">Working From Home</span> Uganda 2026
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Zero throttling. Symmetrical speeds. 5ms latency. 99.9% uptime. Zuku Fiber is the only internet Uganda remote workers can truly rely on — from UGX 75,000/month.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Get Connected via WhatsApp</Link>
              <Link href="/#plans" className="btn btn-ghost">View Performance Plans</Link>
            </div>
            
            <div className="animate-up d5" style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--t2)', fontSize: '0.875rem' }}>
              <span>⚡ Same-Day Activation</span>
              <span>·</span>
              <span>📡 High-Stability Fiber</span>
              <span>·</span>
              <span>📺 Digital TV Included</span>
              <span>·</span>
              <span>🔒 24/7 Technical Support</span>
            </div>

            <div className="animate-up d5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              {[
                { label: 'Latency', val: '5ms', color: 'var(--blue)' },
                { label: 'Uptime SLA', val: '99.9%', color: 'var(--t0)' },
                { label: 'Upload/Download', val: 'Symmetrical', color: 'var(--green)' },
                { label: 'Usage', val: 'Unlimited', color: 'var(--yellow)' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Professional Standards for Remote Work</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '📹', title: 'Crystal-Clear Video', desc: 'Secure reliable Zoom and Teams calls with zero lag. Our 5ms latency ensures you never sound robotic on client calls.' },
                { icon: '☁️', title: 'Symmetrical Uploads', desc: 'Symmetrical fiber means your cloud backups and file uploads finish as fast as your downloads. Perfect for designers and devs.' },
                { icon: '🔌', title: 'Enterprise Reliability', desc: '99.9% uptime guaranteed. Kampala-based engineers resolve most issues within 30 minutes to keep your workday on track.' },
                { icon: '🚫', title: 'Limitless Data', desc: 'Truly unlimited internet without data cap Uganda. Download massive repositories or 4K videos without a single worry.' },
                { icon: '🔒', title: 'Built-in Security', desc: 'DDoS protection and encrypted DNS built directly into your fiber line to protect sensitive client data and credentials.' },
                { icon: '📞', title: 'Local Engineer Support', desc: 'Get support from fellow professionals in Kampala. We understand the local context and prioritize remote work connections.' }
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Remote Work ISP Comparison</h2>
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-3)', color: 'var(--t2)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Feature</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Zuku Fiber ✅</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Mobile 5G/4G</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>LTE WiFi Box</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="row-hover" style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.2s' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '600' }}>Latency (Lag)</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)' }}>5ms (Excellent)</td>
                      <td style={{ padding: '1rem 1.25rem' }}>45ms+ (Poor)</td>
                      <td style={{ padding: '1rem 1.25rem' }}>60ms+ (Variable)</td>
                    </tr>
                    <tr className="row-hover" style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.2s' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '600' }}>Upload Speed</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)' }}>Symmetrical 100%</td>
                      <td style={{ padding: '1rem 1.25rem' }}>~10% of Down</td>
                      <td style={{ padding: '1rem 1.25rem' }}>~15% of Down</td>
                    </tr>
                    <tr className="row-hover" style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.2s' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '600' }}>Data Cap</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)' }}>None (Unlimited)</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Daily/Monthly Caps</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Fair Usage (Throttled)</td>
                    </tr>
                    <tr className="row-hover" style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.2s' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '600' }}>Steady Speed</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)' }}>Guaranteed 24/7</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Peak Hour Congestion</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Tower Congestion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRICING SECTION */}
        <section className="section" style={{ background: 'var(--bg-2)' }} id="plans">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Remote Work Fiber Plans</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>
              Invest in your career with the most reliable internet provider Uganda professionals trust.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[
                { speed: '25 Mbps', price: '75,000', label: 'Solo Freelancer' },
                { speed: '50 Mbps', price: '89,400', popular: true, label: 'Heavy Zoom/Cloud' },
                { speed: '100 Mbps', price: '110,000', label: 'Tech Pro / Dev' },
                { speed: '200 Mbps', price: '199,000', label: 'Full Home Office' }
              ].map((plan, i) => (
                <div key={i} className="card" style={{ padding: '3rem 2rem', border: plan.popular ? '1px solid var(--blue-bd)' : '1px solid var(--border)', position: 'relative' }}>
                  {plan.popular && (
                    <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--blue)', color: '#fff', padding: '0.4rem 1rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>
                      Recommended for Pros
                    </div>
                  )}
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-head)' }}>{plan.speed}</h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--t2)', marginBottom: '2rem' }}>{plan.label}</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--t0)', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}>UGX</span> {plan.price}
                    <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--t2)' }}> /mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem', padding: '0' }}>
                    {['Symmetrical Fiber Speeds', 'Truly Unlimited Data', 'Dedicated IP Available', 'Priority Tech Support'].map((feat, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--t1)', fontSize: '0.9rem' }}>
                        <div className="check" style={{ borderColor: 'var(--blue-bd)', background: 'var(--blue-bg)' }}><svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg></div>
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

        {/* 5. TESTIMONIALS SECTION */}
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Success Stories from Kampala Pros</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { name: 'Sarah K.', role: 'Software Engineer, Kololo', quote: 'I work for a US-based tech company. The 99.9% uptime is vital — my video calls haven\'t dropped once in six months.' },
                { name: 'David M.', role: 'Operations Manager, Bugolobi', quote: 'Cloud backups used to take hours. Now they take minutes. Symmetrical fiber is the secret to my productivity.' },
                { name: 'Agnes N.', role: 'Virtual Assistant, Ntinda', quote: 'Best internet for working from home Uganda could offer. Truly unlimited and stable for daily Zoom sessions.' }
              ].map((t, i) => (
                <div key={i} className="card" style={{ padding: '2.5rem' }}>
                  <div style={{ color: 'var(--yellow)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>★★★★★</div>
                  <p style={{ color: 'var(--t1)', fontStyle: 'italic', marginBottom: '2rem' }}>&quot;{t.quote}&quot;</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--bg-4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--blue)' }}>
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Remote Work Internet FAQs</h2>
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
            <h2 className="section-title">Upgrade Your Career Connectivity Today</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              Join the thousands of professionals across Kampala, Entebbe, and beyond who never worry about their connection.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Sign Up on WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              Free fiber installation and premium 5GHz WiFi router for all new subscribers.
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
