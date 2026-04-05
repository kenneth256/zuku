import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Best Internet in Bukoto Kampala 2026 | Zuku Fiber',
    description: 'Unlimited fiber internet in Bukoto Kampala from UGX 75,000/month. Zuku Fiber — free installation, 99.9% uptime, zero data caps. Get connected today.',
    keywords: ['internet in Bukoto', 'fiber internet Bukoto', 'Zuku Fiber Bukoto', 'WiFi Bukoto Kampala', 'unlimited internet Uganda', 'home internet Bukoto', 'best ISP Uganda'],
    openGraph: {
      title: 'Best Internet in Bukoto Kampala 2026 | Zuku Fiber',
      description: 'Unlimited fiber internet in Bukoto. Free installation, no data caps.',
      url: 'https://zuku-seven.vercel.app/internet-in-bukoto',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: { canonical: 'https://zuku-seven.vercel.app/internet-in-bukoto' },
  };
}

export default function InternetInBukotoPage() {
  const faqData = [
    { q: 'Is Zuku Fiber available in Bukoto?', a: 'Yes. Zuku Fiber has full coverage across Bukoto, including Kira Road and residential estates. We install within 24–48 hours of sign-up.' },
    { q: 'What is the best internet in Bukoto?', a: 'Zuku Fiber is the top-rated ISP for Bukoto. Our dedicated fiber delivers consistent speeds all day — unlike MTN or Airtel mobile data which slows at peak hours.' },
    { q: 'How much is fiber internet in Bukoto?', a: 'Plans start at UGX 75,000/month for 25 Mbps. Our most popular Bukoto plan is 50 Mbps at UGX 89,400/month.' },
    { q: 'Does Zuku throttle speeds in Bukoto?', a: 'Never. All plans are fully unlimited and unthrottled — no Fair Usage Policies, no peak-hour slowdowns, no data caps.' },
    { q: 'How do I get Zuku Fiber in Bukoto?', a: 'WhatsApp 0775 260 196. Our Bukoto-area engineer schedules a free installation, typically within one business day.' },
    { q: 'Is Zuku better than Airtel in Bukoto?', a: 'Yes. Fiber delivers consistent 5ms latency vs 30ms+ on Airtel 5G. No data caps, free installation, and symmetrical speed.' },
    { q: 'Can I get a static IP in Bukoto?', a: 'Yes — static IP is available on business plans. WhatsApp 0747 505 741 to arrange it for your home office.' },
    { q: 'What is the fastest internet in Bukoto?', a: 'Zuku Fiber offers symmetrical speeds up to 200 Mbps in Bukoto — the fastest consistent broadband available in the area.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        'name': 'Zuku Fiber Bukoto',
        'address': { '@type': 'PostalAddress', 'streetAddress': 'Kira Road, Bukoto', 'addressLocality': 'Bukoto, Kampala', 'addressCountry': 'Uganda' },
        'telephone': '+256775260196',
        'geo': { '@type': 'GeoCoordinates', 'latitude': 0.3453, 'longitude': 32.5933 },
        'url': 'https://zuku-seven.vercel.app/internet-in-bukoto',
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://zuku-seven.vercel.app/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Internet in Bukoto', 'item': 'https://zuku-seven.vercel.app/internet-in-bukoto' },
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
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="label label-green animate-up d1"><span className="label-dot" />🏘️ Bukoto&apos;s Top Fiber Provider</div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              High-Speed <span className="grad-g">Internet in Bukoto</span> — Zuku Fiber Uganda
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              From Kira Road to the residential estates off Bukoto main road — Zuku Fiber delivers unlimited broadband with no data caps and no throttling to every Bukoto home.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Check Bukoto Coverage</Link>
              <Link href="/zuku-fiber-prices" className="btn btn-ghost">View Speed Plans</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              {[{ label: 'Uptime SLA', val: '99.9%', color: 'var(--t0)' }, { label: 'Latency', val: '5ms', color: 'var(--blue)' }, { label: 'Max Speed', val: '200 Mbps', color: 'var(--green)' }, { label: 'Data Limit', val: 'Unlimited', color: 'var(--yellow)' }].map((s, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem', background: 'var(--bg-3)', border: '1px solid var(--border-2)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--t2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{s.label}</div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: '700', color: s.color }}>{s.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Bukoto Homes Choose Zuku</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🚀', title: 'Fiber on Kira Road', desc: 'Our fiber runs the full Kira Road corridor into Bukoto estates — consistent speed at every address.' },
                { icon: '🏠', title: 'Perfect for Home Offices', desc: 'Bukoto is a hotspot for entrepreneurs. Zuku symmetrical speeds make video calls and cloud work seamless.' },
                { icon: '📺', title: '4K Streaming on Every Plan', desc: 'Stream Netflix and YouTube in 4K. Our 50 Mbps plan handles four screens simultaneously without buffering.' },
                { icon: '💰', title: 'From UGX 75,000/mo', desc: 'Replace 3 mobile data SIMs with one flat monthly plan. No daily bundle stress.' },
                { icon: '♾️', title: 'No Data Cap — Ever', desc: 'Game downloads, Zoom marathons, weekend streaming. No warning message will ever interrupt you.' },
                { icon: '📞', title: 'Fast Local Support', desc: 'Kampala-based engineers. Most Bukoto issues resolved within 30 minutes of your call.' },
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

        <section className="section" id="plans">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Bukoto Fiber Plans</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>All plans include free installation, free Wi-Fi router, and 100+ TV channels.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[{ speed: '25 Mbps', price: '75,000' }, { speed: '50 Mbps', price: '89,400', popular: true }, { speed: '100 Mbps', price: '110,000' }, { speed: '200 Mbps', price: '199,000' }].map((plan, i) => (
                <div key={i} className="card" style={{ padding: '3rem 2rem', border: plan.popular ? '1px solid var(--green-bd)' : '1px solid var(--border)', position: 'relative' }}>
                  {plan.popular && <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--green)', color: '#000', padding: '0.4rem 1rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>Most Popular</div>}
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-head)' }}>{plan.speed}</h3>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--t0)', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--t2)' }}>UGX</span> {plan.price} <span style={{ fontSize: '0.9rem', color: 'var(--t2)' }}>/mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem', padding: 0 }}>
                    {['Truly Unlimited Data', 'Symmetrical Speed', 'Free Wi-Fi Router', 'Free Installation'].map((feat, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--t1)', fontSize: '0.9rem' }}>
                        <div className="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg></div>{feat}
                      </li>
                    ))}
                  </ul>
                  <Link href="https://wa.me/2560775260196" className={`btn ${plan.popular ? 'btn-primary' : 'btn-ghost'}`} style={{ width: '100%' }}>Get Connected</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Bukoto Internet FAQs</h2>
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

        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Get Fiber Internet in Bukoto Today</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>Free installation · Free router · Same-day connection in most Bukoto zones.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Order via WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              Also: <Link href="/internet-in-ntinda" style={{ color: 'var(--blue)' }}>Ntinda</Link> · <Link href="/internet-in-naguru" style={{ color: 'var(--blue)' }}>Naguru</Link> · <Link href="/internet-in-kololo" style={{ color: 'var(--blue)' }}>Kololo</Link> · <Link href="/internet-in-kiwatule" style={{ color: 'var(--blue)' }}>Kiwatule</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
