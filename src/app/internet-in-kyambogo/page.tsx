import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Best Internet in Kyambogo Kampala 2026 | Zuku Fiber',
    description: 'Unlimited fiber internet in Kyambogo Kampala from UGX 75,000/month. Zuku Fiber — free installation, 99.9% uptime, zero data caps. Students and staff welcome.',
    keywords: ['internet in Kyambogo', 'fiber internet Kyambogo', 'Zuku Fiber Kyambogo', 'WiFi Kyambogo Kampala', 'internet Kyambogo University area', 'unlimited internet Uganda', 'home internet Kyambogo'],
    openGraph: {
      title: 'Best Internet in Kyambogo Kampala 2026 | Zuku Fiber',
      description: 'Unlimited fiber internet in Kyambogo for students, families, and professionals. Free installation, no data caps.',
      url: 'https://zuku-seven.vercel.app/internet-in-kyambogo',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: { canonical: 'https://zuku-seven.vercel.app/internet-in-kyambogo' },
  };
}

export default function InternetInKyambogoPage() {
  const faqData = [
    { q: 'Is Zuku Fiber available in Kyambogo?', a: 'Yes. Zuku Fiber covers Kyambogo including residential areas around Kyambogo University, Upper Kyambogo, and the routes extending toward Ntinda. We install within 24–48 hours.' },
    { q: 'What is the best internet in Kyambogo?', a: 'Zuku Fiber is the top-rated internet for Kyambogo residential users. Students, lecturers, and families prefer our fiber for its consistency — no slow-downs even when the whole neighbourhood is online.' },
    { q: 'How much is fiber internet in the Kyambogo area?', a: 'Plans start at UGX 75,000/month for 25 Mbps — ideal for students and single users. Families and home offices usually choose 50 Mbps at UGX 89,400/month.' },
    { q: 'Does Zuku Fiber cap speeds for students in Kyambogo?', a: 'No. Every Zuku plan — including the entry 25 Mbps plan — is genuinely unlimited. Download lecture notes, stream tutorials, and submit assignments without ever hitting a data cap.' },
    { q: 'How do I get Zuku Fiber near Kyambogo University?', a: 'WhatsApp 0775 260 196 with your exact address. Our team will confirm coverage and schedule a free installation, typically within one business day.' },
    { q: 'Is Kyambogo covered by Zuku\'s residential plans?', a: 'Yes. Both residential home plans and business plans are available in Kyambogo. Students renting off-campus can get our standard home plans; small businesses can get dedicated broadband.' },
    { q: 'Is fiber better than 4G for studying online in Kyambogo?', a: 'Significantly better. Fiber gives you stable latency (5ms), unlimited data, and consistent speed whether it\'s 2am or 8pm. Mobile 4G congests around university areas during class hours.' },
    { q: 'Can Zuku Fiber support multiple students on one connection?', a: 'Yes. Our 50 Mbps plan comfortably supports 5–6 students streaming, on video calls, and downloading simultaneously. Our 100 Mbps plan handles larger shared households.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        'name': 'Zuku Fiber Kyambogo',
        'address': { '@type': 'PostalAddress', 'streetAddress': 'Kyambogo Road', 'addressLocality': 'Kyambogo, Kampala', 'addressCountry': 'Uganda' },
        'telephone': '+256775260196',
        'geo': { '@type': 'GeoCoordinates', 'latitude': 0.3394, 'longitude': 32.6267 },
        'url': 'https://zuku-seven.vercel.app/internet-in-kyambogo',
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://zuku-seven.vercel.app/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Internet in Kyambogo', 'item': 'https://zuku-seven.vercel.app/internet-in-kyambogo' },
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
            <div className="label label-green animate-up d1"><span className="label-dot" />🎓 Kyambogo Fiber Coverage</div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              High-Speed <span className="grad-g">Internet in Kyambogo</span> — Zuku Fiber Uganda
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Zuku Fiber provides the premier unlimited fiber-optic internet connection for Kyambogo residents. By delivering dedicated, symmetrical speeds directly to your home or office, you ensure 100% stable performance with strictly zero data caps and no throttling. Discover our high-speed plans with free installation, a premium Wi-Fi router, and uninterrupted remote work reliability perfectly tailored for Kyambogo.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Check Kyambogo Coverage</Link>
              <Link href="/zuku-fiber-prices" className="btn btn-ghost">View Speed Plans</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              {[{ label: 'Uptime SLA', val: '99.9%', color: 'var(--t0)' }, { label: 'Latency', val: '5ms', color: 'var(--blue)' }, { label: 'Max Speed', val: '200 Mbps', color: 'var(--green)' }, { label: 'Data Cap', val: 'None', color: 'var(--yellow)' }].map((s, i) => (
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Kyambogo Residents Choose Zuku Fiber</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🎓', title: 'Perfect for University Students', desc: 'Download lecture recordings, join online classes, and submit assignments without ever worrying about running out of data. UGX 75,000/month covers everything.' },
                { icon: '📡', title: 'Consistent Speed Near Campus', desc: 'Mobile towers around Kyambogo University get congested during class hours. Zuku fiber bypasses that entirely with a dedicated line to your home.' },
                { icon: '👨‍👩‍👧', title: 'Whole-Family Internet', desc: 'Our 50 Mbps plan handles 5–6 simultaneous connections — students studying, parents working, and kids streaming — no slowdown.' },
                { icon: '🏢', title: 'Home Office Near Nakawa', desc: 'Kyambogo is close to Nakawa industrial hub. Many residents work from home. Zuku symmetrical speeds make video meetings and file transfers seamless.' },
                { icon: '🎮', title: 'Gaming & Streaming', desc: '5ms fiber latency is ideal for online gaming. Combine with unlimited data and you can play all night without throttling.' },
                { icon: '💰', title: 'One Flat Rate, No Surprises', desc: 'UGX 75,000–199,000/month. No MTN data cards. No expiry dates. Just unlimited internet on a billing cycle you control.' },
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
            <h2 className="section-title">Kyambogo Fiber Plans</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>All plans include free installation, free Wi-Fi router, and 100+ digital TV channels.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[{ speed: '25 Mbps', price: '75,000' }, { speed: '50 Mbps', price: '89,400', popular: true }, { speed: '100 Mbps', price: '110,000' }, { speed: '200 Mbps', price: '199,000' }].map((plan, i) => (
                <div key={i} className="card" style={{ padding: '3rem 2rem', border: plan.popular ? '1px solid var(--green-bd)' : '1px solid var(--border)', position: 'relative' }}>
                  {plan.popular && <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--green)', color: '#000', padding: '0.4rem 1rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>Popular in Kyambogo</div>}
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-head)' }}>{plan.speed}</h3>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--t0)', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--t2)' }}>UGX</span> {plan.price} <span style={{ fontSize: '0.9rem', color: 'var(--t2)' }}>/mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem', padding: 0 }}>
                    {['Truly Unlimited Data', 'Symmetrical Fiber Speed', 'Free Wi-Fi Router', 'Free Installation'].map((feat, j) => (
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Coverage in Kyambogo</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Upper Kyambogo', desc: 'Residential zones above Kyambogo University with full fiber coverage.' },
                { title: 'Kyambogo Road', desc: 'Coverage along the main Kyambogo road corridor extending toward Ntinda.' },
                { title: 'Around Kyambogo University', desc: 'Staffed residential areas and off-campus student housing around the university.' },
                { title: 'Kyambogo–Ntinda Border', desc: 'Seamless coverage extending into the Ntinda zone for border-area residents.' },
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Kyambogo Internet FAQs</h2>
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
            <h2 className="section-title">Get Fiber Internet in Kyambogo</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>Free installation · Free router · Same-day connection in most Kyambogo zones.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Order via WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              Also: <Link href="/internet-in-ntinda" style={{ color: 'var(--blue)' }}>Ntinda</Link> · <Link href="/internet-in-naguru" style={{ color: 'var(--blue)' }}>Naguru</Link> · <Link href="/internet-in-kiwatule" style={{ color: 'var(--blue)' }}>Kiwatule</Link> · <Link href="/internet-in-najjera" style={{ color: 'var(--blue)' }}>Najjera</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
