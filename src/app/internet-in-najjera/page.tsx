import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Best Internet in Najjera Kampala 2026 | Zuku Fiber',
    description: 'Unlimited fiber internet in Najjera Kampala from UGX 75,000/month. Zuku Fiber — free installation, 99.9% uptime, zero data caps. Check coverage today.',
    keywords: ['internet in Najjera', 'fiber internet Najjera', 'Zuku Fiber Najjera', 'WiFi Najjera Kampala', 'internet provider Najjera Kampala', 'unlimited internet Uganda', 'home internet Najjera'],
    openGraph: {
      title: 'Best Internet in Najjera Kampala 2026 | Zuku Fiber',
      description: 'Unlimited fiber internet in Najjera. Free installation, no data caps, 99.9% uptime.',
      url: 'https://zuku-seven.vercel.app/internet-in-najjera',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: { canonical: 'https://zuku-seven.vercel.app/internet-in-najjera' },
  };
}

export default function InternetInNajjeraPage() {
  const faqData = [
    { q: 'Is Zuku Fiber available in Najjera?', a: 'Yes. Zuku Fiber covers Najjera including the areas along Najjera Road, Najjera estates, and the zones bordering Kiwatule and Naalya. Our team installs within 24–48 hours.' },
    { q: 'What is the best internet provider in Najjera Kampala?', a: 'Zuku Fiber is the leading home internet provider in Najjera. We offer dedicated fiber optic lines — not shared mobile towers — so your speed stays consistent no matter how many neighbours are online.' },
    { q: 'How much is fiber internet in Najjera?', a: 'Plans start at UGX 75,000/month for 25 Mbps. Our 50 Mbps plan at UGX 89,400/month is the most popular for Najjera families and home office users.' },
    { q: 'Does Zuku Fiber have data caps in Najjera?', a: 'No. All Najjera plans are completely unlimited — no data caps, no fair usage policy, and no throttling at any time of day.' },
    { q: 'How do I get Zuku Fiber in Najjera?', a: 'WhatsApp 0775 260 196 or call us. Our Najjera installation team will survey your site and have you connected, typically within one business day.' },
    { q: 'Does Zuku Fiber cover Naalya near Najjera?', a: 'Yes. Our coverage extends from Najjera into Naalya. WhatsApp us your exact address for an instant coverage check.' },
    { q: 'Why is fiber better than 4G in Najjera?', a: 'Fiber internet gives you consistent 5ms latency and full symmetric speed — regardless of tower congestion. In Najjera, where 4G towers can get busy in the evenings, fiber is much more reliable.' },
    { q: 'Can I install Zuku Fiber in a rented house in Najjera?', a: 'Yes. Zuku Fiber installs in rented properties. The installation is non-invasive and the equipment can be removed if you move. You keep the same account and can reconnect at your new address.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        'name': 'Zuku Fiber Najjera',
        'address': { '@type': 'PostalAddress', 'streetAddress': 'Najjera Road', 'addressLocality': 'Najjera, Kampala', 'addressCountry': 'Uganda' },
        'telephone': '+256775260196',
        'geo': { '@type': 'GeoCoordinates', 'latitude': 0.3712, 'longitude': 32.6278 },
        'url': 'https://zuku-seven.vercel.app/internet-in-najjera',
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://zuku-seven.vercel.app/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Internet in Najjera', 'item': 'https://zuku-seven.vercel.app/internet-in-najjera' },
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
            <div className="label label-green animate-up d1"><span className="label-dot" />📡 Najjera Fiber Coverage</div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              High-Speed <span className="grad-g">Internet in Najjera</span> — Zuku Fiber Uganda
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Zuku Fiber provides the premier unlimited fiber-optic internet connection for Najjera residents. By delivering dedicated, symmetrical speeds directly to your home or office, you ensure 100% stable performance with strictly zero data caps and no throttling. Discover our high-speed plans with free installation, a premium Wi-Fi router, and uninterrupted remote work reliability perfectly tailored for Najjera.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Check Najjera Coverage</Link>
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Najjera Families Choose Zuku Fiber</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🏡', title: 'Dedicated Line to Your Home', desc: 'Unlike mobile broadband on shared towers, Zuku runs a dedicated fiber cable to your door — your speed is yours alone.' },
                { icon: '📱', title: 'Connect Every Device', desc: 'Phones, laptops, smart TVs, tablets, and gaming consoles — all on one unlimited connection from UGX 75,000/month.' },
                { icon: '🎓', title: 'E-Learning & School Support', desc: 'Najjera has many families with school-age children. Stable unlimited internet means smooth UNEB online resources and seamless Google Classroom.' },
                { icon: '🏢', title: 'Home Office Grade', desc: 'Work from home reliably with symmetrical upload speeds. Zoom calls stay crisp and cloud file uploads finish fast.' },
                { icon: '🎬', title: 'Stream Without Buffering', desc: 'Netflix, YouTube, and DSTV in HD. Our 50 Mbps plan handles multiple screens at full quality simultaneously.' },
                { icon: '💰', title: 'No More Daily Bundles', desc: 'One flat monthly payment covers everything. No counting MBs, no sudden top-ups, no surprise charges.' },
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
            <h2 className="section-title">Najjera Fiber Plans</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>All plans include free installation, free Wi-Fi router, and 100+ digital TV channels.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[{ speed: '25 Mbps', price: '75,000' }, { speed: '50 Mbps', price: '89,400', popular: true }, { speed: '100 Mbps', price: '110,000' }, { speed: '200 Mbps', price: '199,000' }].map((plan, i) => (
                <div key={i} className="card" style={{ padding: '3rem 2rem', border: plan.popular ? '1px solid var(--green-bd)' : '1px solid var(--border)', position: 'relative' }}>
                  {plan.popular && <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--green)', color: '#000', padding: '0.4rem 1rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>Best for Najjera</div>}
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Najjera Internet FAQs</h2>
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
            <h2 className="section-title">Get Fiber Internet in Najjera</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>Free installation · Free router · Same-day connection in most Najjera zones.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Order via WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              Also: <Link href="/internet-in-kiwatule" style={{ color: 'var(--blue)' }}>Kiwatule</Link> · <Link href="/internet-in-ntinda" style={{ color: 'var(--blue)' }}>Ntinda</Link> · <Link href="/internet-in-kyambogo" style={{ color: 'var(--blue)' }}>Kyambogo</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
