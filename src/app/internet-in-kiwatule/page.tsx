import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Best Internet in Kiwatule Kampala 2026 | Zuku Fiber',
    description: 'Get unlimited fiber internet in Kiwatule Kampala from UGX 75,000/month. Zuku Fiber — free installation, 99.9% uptime, zero data caps. Check coverage today.',
    keywords: ['internet in Kiwatule', 'fiber internet Kiwatule', 'Zuku Fiber Kiwatule', 'WiFi Kiwatule Kampala', 'unlimited internet Uganda', 'home internet Kiwatule', 'best ISP Kampala'],
    openGraph: {
      title: 'Best Internet in Kiwatule Kampala 2026 | Zuku Fiber',
      description: 'Unlimited fiber internet in Kiwatule. Free installation, no data caps, 99.9% uptime.',
      url: 'https://zuku-seven.vercel.app/internet-in-kiwatule',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: { canonical: 'https://zuku-seven.vercel.app/internet-in-kiwatule' },
  };
}

export default function InternetInKiwatulePage() {
  const faqData = [
    { q: 'Is Zuku Fiber available in Kiwatule?', a: 'Yes. Zuku Fiber covers Kiwatule including areas along Kiwatule Road and the estates near Naalya. Most installations are completed within 24–48 hours.' },
    { q: 'What is the best internet in Kiwatule?', a: 'Zuku Fiber is the top choice for Kiwatule homes and offices. Dedicated fiber delivers consistent speed 24/7 — unlike mobile data that slows during peak hours on congested towers.' },
    { q: 'How much is fiber internet in Kiwatule?', a: 'Kiwatule plans start at UGX 75,000/month for 25 Mbps unlimited. Our most popular plan for Kiwatule families is 50 Mbps at UGX 89,400/month.' },
    { q: 'Does Zuku Fiber have data caps in Kiwatule?', a: 'No. All Kiwatule plans are 100% unlimited — no data caps, no fair usage policy, no throttling. Ever.' },
    { q: 'How do I get Zuku Fiber in Kiwatule?', a: 'WhatsApp 0775 260 196 or call to schedule your free installation. Our team covers Kiwatule and usually arrives within one business day.' },
    { q: 'Is fiber better than 5G in Kiwatule?', a: 'Yes. Fiber gives consistent 5ms latency vs 30ms+ on 5G. And fiber is not affected by how many users are on the local tower — you always get full speed.' },
    { q: 'Does Zuku Fiber cover Naalya near Kiwatule?', a: 'Yes. Our coverage extends into Naalya, which borders Kiwatule. WhatsApp us with your specific address for an immediate coverage confirmation.' },
    { q: 'What speed is best for gaming in Kiwatule?', a: 'Our 25 Mbps or 50 Mbps plan is perfect for online gaming in Kiwatule, thanks to our 5ms fiber latency. Low ping beats raw Mbps for gaming performance.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        'name': 'Zuku Fiber Kiwatule',
        'address': { '@type': 'PostalAddress', 'streetAddress': 'Kiwatule Road', 'addressLocality': 'Kiwatule, Kampala', 'addressCountry': 'Uganda' },
        'telephone': '+256775260196',
        'geo': { '@type': 'GeoCoordinates', 'latitude': 0.3601, 'longitude': 32.6351 },
        'url': 'https://zuku-seven.vercel.app/internet-in-kiwatule',
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://zuku-seven.vercel.app/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Internet in Kiwatule', 'item': 'https://zuku-seven.vercel.app/internet-in-kiwatule' },
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
            <div className="label label-green animate-up d1"><span className="label-dot" />📡 Kiwatule Fiber Coverage</div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              High-Speed <span className="grad-g">Internet in Kiwatule</span> — Zuku Fiber Uganda
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Zuku Fiber provides the premier unlimited fiber-optic internet connection for Kiwatule residents. By delivering dedicated, symmetrical speeds directly to your home or office, you ensure 100% stable performance with strictly zero data caps and no throttling. Discover our high-speed plans with free installation, a premium Wi-Fi router, and uninterrupted remote work reliability perfectly tailored for Kiwatule.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Check Kiwatule Coverage</Link>
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Kiwatule Residents Choose Zuku Fiber</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🏗️', title: 'Growing Neighbourhood, Reliable Internet', desc: 'As Kiwatule develops rapidly with new homes and estates, Zuku Fiber scales to serve every new address without congestion.' },
                { icon: '🎮', title: 'Low-Latency Gaming', desc: 'Our fiber achieves 5ms ping — ideal for online gaming. No more lag spikes from crowded mobile towers on match night.' },
                { icon: '📚', title: 'E-Learning & School Work', desc: 'Kiwatule families with students benefit from stable, unlimited internet for online classes, research, and assignments.' },
                { icon: '💼', title: 'Work From Home Ready', desc: 'Symmetrical upload speeds mean your Zoom never freezes and your Google Drive uploads finish in seconds.' },
                { icon: '💰', title: 'Affordable Flat Rate', desc: 'From UGX 75,000/month — one price, truly unlimited. No daily bundle purchases, no hidden fees.' },
                { icon: '🔒', title: 'Zero Throttling', desc: 'Zuku doesn\'t slow you down at 9pm when everyone is online. Your fiber line is dedicated, not shared.' },
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
            <h2 className="section-title">Kiwatule Fiber Plans</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>All plans include free installation, free Wi-Fi router, and 100+ digital TV channels.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[{ speed: '25 Mbps', price: '75,000' }, { speed: '50 Mbps', price: '89,400', popular: true }, { speed: '100 Mbps', price: '110,000' }, { speed: '200 Mbps', price: '199,000' }].map((plan, i) => (
                <div key={i} className="card" style={{ padding: '3rem 2rem', border: plan.popular ? '1px solid var(--green-bd)' : '1px solid var(--border)', position: 'relative' }}>
                  {plan.popular && <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--green)', color: '#000', padding: '0.4rem 1rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>Best for Kiwatule</div>}
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-head)' }}>{plan.speed}</h3>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--t0)', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--t2)' }}>UGX</span> {plan.price} <span style={{ fontSize: '0.9rem', color: 'var(--t2)' }}>/mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem', padding: 0 }}>
                    {['Truly Unlimited Data', 'Low-Latency Fiber', 'Free Wi-Fi Router', 'Free Installation'].map((feat, j) => (
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

        <section className="section" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Areas Covered in Kiwatule</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Kiwatule Road', desc: 'Full fiber coverage along the main Kiwatule Road corridor.' },
                { title: 'Kiwatule Estates', desc: 'Residential estates and gated communities off Kiwatule Road.' },
                { title: 'Naalya Border', desc: 'Extended coverage into the Naalya area that borders Kiwatule.' },
                { title: 'Najjera Junction', desc: 'Fiber access for homes near the Kiwatule–Najjera junction zone.' },
              ].map((area, i) => (
                <div key={i} className="card" style={{ padding: '2rem', background: 'var(--bg-3)' }}>
                  <h3 style={{ marginBottom: '1rem', color: 'var(--blue)', fontSize: '1.25rem' }}>{area.title}</h3>
                  <p style={{ color: 'var(--t1)' }}>{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Kiwatule Internet FAQs</h2>
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
            <h2 className="section-title">Get Fiber Internet in Kiwatule</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>Free installation · Free router · Same-day connection in most Kiwatule zones.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Order via WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              Also: <Link href="/internet-in-najjera" style={{ color: 'var(--blue)' }}>Najjera</Link> · <Link href="/internet-in-ntinda" style={{ color: 'var(--blue)' }}>Ntinda</Link> · <Link href="/internet-in-bukoto" style={{ color: 'var(--blue)' }}>Bukoto</Link> · <Link href="/internet-in-kyambogo" style={{ color: 'var(--blue)' }}>Kyambogo</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
