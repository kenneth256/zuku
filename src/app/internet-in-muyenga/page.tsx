import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Best Internet in Muyenga Kampala 2026 | Zuku Fiber',
    description: 'Get unlimited fiber internet in Muyenga Kampala from UGX 75,000/month. Zuku Fiber offers free installation, free router, and 99.9% uptime. Check coverage today.',
    keywords: [
      'internet in Muyenga',
      'best internet in Muyenga Kampala',
      'fiber internet Muyenga',
      'Zuku Fiber Muyenga',
      'WiFi Muyenga Kampala',
      'unlimited internet Uganda',
      'home internet Muyenga',
      'fastest internet Uganda',
      'internet without data cap Uganda',
      'best ISP Uganda',
    ],
    openGraph: {
      title: 'Best Internet in Muyenga Kampala 2026 | Zuku Fiber',
      description: 'Unlimited fiber internet in Muyenga for streaming, gaming, and remote work. Free installation, no data caps.',
      url: 'https://zuku-seven.vercel.app/internet-in-muyenga',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: {
      canonical: 'https://zuku-seven.vercel.app/internet-in-muyenga',
    },
  };
}

export default function InternetInMuyengaPage() {
  const faqData = [
    { q: 'Is Zuku Fiber available in Muyenga?', a: 'Yes! Zuku Fiber has active fiber infrastructure throughout Muyenga, including areas around Muyenga Hill, Tank Hill Road, and the Muyenga market zone. We can typically install within 24–48 hours of your sign-up.' },
    { q: 'What is the best internet in Muyenga?', a: 'Zuku Fiber is the top-rated internet provider in Muyenga for home and home-office use. Our dedicated fiber lines are unaffected by mobile tower congestion, giving you full-speed access 24/7 — even during peak evening hours.' },
    { q: 'How much is fiber internet in Muyenga?', a: 'Zuku Fiber plans in Muyenga start at UGX 75,000/month for 25 Mbps symmetrical. Our most popular Muyenga plan is 50 Mbps at UGX 89,400/month — ideal for families and remote workers.' },
    { q: 'Does Zuku Fiber have data caps in Muyenga?', a: 'No. All Muyenga plans are 100% unlimited. There are no data caps, no Fair Usage Policies, and no throttling — ever. Stream, download, and work without limits.' },
    { q: 'How do I get Zuku Fiber in Muyenga?', a: 'WhatsApp us on 0775 260 196 or call to schedule a free site survey. Our Muyenga installation team will set up your fiber line and Wi-Fi router at no charge and usually within 24 hours.' },
    { q: 'Is fiber internet better than 4G in Muyenga?', a: 'Yes. Fiber is far more stable than 4G or 5G mobile internet, especially in Muyenga during busy evening hours when mobile networks slow down. Our fiber maintains consistent 5ms latency at all times.' },
    { q: 'What speed should I get for working from home in Muyenga?', a: 'Our 50 Mbps plan (UGX 89,400/month) is ideal for remote workers in Muyenga. It handles multiple Zoom calls, cloud uploads, and 4K streaming simultaneously without any slowdown.' },
    { q: 'Can my whole family use the same Zuku Fiber connection?', a: 'Absolutely. Even our entry 25 Mbps plan supports 3–4 simultaneous devices. Families with 5+ devices — streaming, gaming, and working from home — typically select our 50 Mbps or 100 Mbps Muyenga plans.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        'name': 'Zuku Fiber Muyenga',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Tank Hill Road',
          'addressLocality': 'Muyenga, Kampala',
          'addressCountry': 'Uganda',
        },
        'telephone': '+256775260196',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 0.2964,
          'longitude': 32.5973,
        },
        'url': 'https://zuku-seven.vercel.app/internet-in-muyenga',
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://zuku-seven.vercel.app/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Internet in Muyenga', 'item': 'https://zuku-seven.vercel.app/internet-in-muyenga' },
        ],
      },
      {
        '@type': 'FAQPage',
        'mainEntity': faqData.map(faq => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': { '@type': 'Answer', 'text': faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>

        {/* HERO */}
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="label label-green animate-up d1">
              <span className="label-dot" />
              🏡 Muyenga&apos;s #1 Fiber Provider
            </div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              High-Speed <span className="grad-g">Internet in Muyenga</span> — Zuku Fiber Uganda
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Zuku Fiber provides the premier unlimited fiber-optic internet connection for Muyenga residents. By delivering dedicated, symmetrical speeds directly to your home or office, you ensure 100% stable performance with strictly zero data caps and no throttling. Discover our high-speed plans with free installation, a premium Wi-Fi router, and uninterrupted remote work reliability perfectly tailored for Muyenga.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Check Muyenga Coverage</Link>
              <Link href="/zuku-fiber-prices" className="btn btn-ghost">View Speed Plans</Link>
            </div>
            <div className="animate-up d5" style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--t2)', fontSize: '0.875rem' }}>
              <span>⚡ Install in 24h</span><span>·</span>
              <span>📡 Free 5GHz Router</span><span>·</span>
              <span>📺 100+ TV Channels</span><span>·</span>
              <span>🔒 No Data Caps</span>
            </div>
            <div className="animate-up d5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              {[
                { label: 'Uptime SLA', val: '99.9%', color: 'var(--t0)' },
                { label: 'Latency', val: '5ms', color: 'var(--blue)' },
                { label: 'Max Speed', val: '200 Mbps', color: 'var(--green)' },
                { label: 'Data Limit', val: 'Unlimited', color: 'var(--yellow)' },
              ].map((stat, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem', background: 'var(--bg-3)', border: '1px solid var(--border-2)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--t2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{stat.label}</div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: '700', color: stat.color }}>{stat.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ZUKU FIBER FOR MUYENGA */}
        <section className="section" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Muyenga Residents Choose Zuku</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🌊', title: 'Fiber to Your Hillside Home', desc: 'Even on the elevated terrain of Muyenga Hill — where mobile signals can be inconsistent — Zuku fiber runs direct cable to your home for constant, reliable speeds.' },
                { icon: '🎬', title: 'Stream Netflix in 4K', desc: 'Enjoy every lake-view evening with Netflix, YouTube, and DSTV streaming in HD. Our 50 Mbps+ plans handle 4K on multiple screens simultaneously.' },
                { icon: '🏠', title: 'Work From Home in Muyenga', desc: 'Muyenga&apos;s residential calm is perfect for remote work. Zuku gives you the symmetrical upload speeds for flawless Zoom calls and fast cloud uploads.' },
                { icon: '💰', title: 'From UGX 75,000/month', desc: 'No more daily mobile bundles. One flat monthly rate covers everything — truly unlimited data, free Wi-Fi router, and 100+ TV channels.' },
                { icon: '🔒', title: 'No Data Caps, Ever', desc: 'Download, stream, and upload as much as you want. Zuku is the only ISP in Muyenga with genuinely unlimited internet — no Fair Usage Policy.' },
                { icon: '📞', title: '24/7 Local Support', desc: 'Our Kampala-based engineers can reach Muyenga fast. Most technical issues resolved within 30 minutes of your call or WhatsApp.' },
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

        {/* COMPARISON TABLE */}
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>ISP Comparison for Muyenga Residents</h2>
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-3)', color: 'var(--t2)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Provider</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Technology</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Price (UGX)</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Speed</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Data Cap</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Throttling</th>
                      <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Install</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: 'var(--green-bg)', borderLeft: '3px solid var(--green)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '600' }}>Zuku Fiber ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Fiber Optic</td>
                      <td style={{ padding: '1rem 1.25rem' }}>75,000/mo</td>
                      <td style={{ padding: '1rem 1.25rem' }}>200 Mbps</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>None ✅</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>None ✅</td>
                      <td style={{ padding: '1rem 1.25rem' }}>Free ✅</td>
                    </tr>
                    {[
                      { p: 'MTN WakaNet', t: '5G/Fiber', price: '130,000/mo', s: 'Varies', cap: 'Fair Usage ⚠️', th: 'Yes ❌', inst: 'No ❌' },
                      { p: 'Airtel Uganda', t: '5G/4G', price: '150,000/mo', s: 'Varies', cap: 'Volume Caps ❌', th: 'Yes ❌', inst: 'No ❌' },
                      { p: 'Roke Telkom', t: 'Wireless', price: '112,000/mo', s: '100 Mbps', cap: 'Mixed ⚠️', th: 'Yes ❌', inst: 'Paid ❌' },
                      { p: 'Faibanet', t: 'Fiber', price: '100,000/mo', s: '50 Mbps', cap: 'Limited ⚠️', th: 'Unclear', inst: 'Paid ❌' },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
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

        {/* PRICING */}
        <section className="section" style={{ background: 'var(--bg-2)' }} id="plans">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Muyenga Fiber Plans</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>
              Choose your speed. All plans include free installation, a free Wi-Fi router, and 100+ TV channels.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[
                { speed: '25 Mbps', price: '75,000' },
                { speed: '50 Mbps', price: '89,400', popular: true },
                { speed: '100 Mbps', price: '110,000' },
                { speed: '200 Mbps', price: '199,000' },
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
                    {['Truly Unlimited Data', 'Symmetrical Fiber Speed', 'Free Wi-Fi Router', 'Free Fiber Installation'].map((feat, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--t1)', fontSize: '0.9rem' }}>
                        <div className="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg></div>
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

        {/* COVERAGE AREAS */}
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Coverage in Muyenga</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Tank Hill Road', desc: 'Full fiber coverage along Tank Hill — Muyenga\'s most sought-after residential stretch.' },
                { title: 'Muyenga Hill', desc: 'High-elevation fiber served via our dedicated aerial cable infrastructure.' },
                { title: 'Muyenga Market Area', desc: 'Reliable connectivity for homes and small businesses near Muyenga market.' },
                { title: 'Munyonyo Border', desc: 'Seamless coverage extending into the Munyonyo and Kabalagala border zones.' },
              ].map((area, i) => (
                <div key={i} className="card" style={{ padding: '2rem', background: 'var(--bg-3)' }}>
                  <h3 style={{ marginBottom: '1rem', color: 'var(--blue)', fontSize: '1.25rem' }}>{area.title}</h3>
                  <p style={{ color: 'var(--t1)' }}>{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Muyenga Internet FAQs</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {faqData.map((faq, i) => (
                <details key={i} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '0.5rem', background: 'var(--bg)' }}>
                  <summary style={{ padding: '1.25rem 1.5rem', fontFamily: 'var(--font-head)', color: 'var(--t0)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {faq.q}<span style={{ transition: 'transform 0.3s' }}>⌄</span>
                  </summary>
                  <div style={{ padding: '0 1.5rem 1.25rem', color: 'var(--t1)', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Get Fiber Internet in Muyenga Today</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              Join hundreds of Muyenga households already enjoying Zuku Fiber. Free installation, free router, same-day connection in most areas.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Order via WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>
              Also covering: <Link href="/internet-in-kololo" style={{ color: 'var(--blue)' }}>Kololo</Link> · <Link href="/internet-in-ntinda" style={{ color: 'var(--blue)' }}>Ntinda</Link> · <Link href="/internet-in-naguru" style={{ color: 'var(--blue)' }}>Naguru</Link> · <Link href="/internet-in-bugolobi" style={{ color: 'var(--blue)' }}>Bugolobi</Link> · <Link href="/internet-in-bukoto" style={{ color: 'var(--blue)' }}>Bukoto</Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
