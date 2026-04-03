import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'Zuku Fiber Internet Prices Uganda 2026 | Official Plans & Costs',
    description:
      'Official Zuku Fiber Uganda price list 2026. Plans from UGX 75,000/month (25 Mbps) to UGX 199,000/month (200 Mbps). Free installation & router on all plans.',
    keywords: [
      'Zuku Fiber prices Uganda',
      'Zuku internet plan Uganda',
      'how much is Zuku Fiber Uganda',
      'Zuku Fiber cost per month',
      'Zuku 25 Mbps price',
      'Zuku 50 Mbps price',
      'Zuku 100 Mbps price',
      'Zuku 200 Mbps price',
      'fiber internet price Uganda',
      'cheapest unlimited internet Uganda',
    ],
    openGraph: {
      title: 'Zuku Fiber Internet Prices Uganda 2026 — Official Plan List',
      description:
        'Official Zuku Fiber Uganda pricing. Unlimited fiber from UGX 75,000/month. Free installation, free router, 100+ TV channels on every plan.',
      url: 'https://zukufiberuganda.vercel.app/zuku-fiber-prices',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: {
      canonical: 'https://zukufiberuganda.vercel.app/zuku-fiber-prices',
    },
  };
}

// ─── Plan data — single source of truth for AI + UI ───────────────────────
const PLANS_1M = [
  { speed: 25,   price: 75000,   label: 'Home Basic',    desc: 'Perfect for solo users, social media, and light browsing.' },
  { speed: 50,   price: 89400,   label: 'Home Plus',     desc: 'Best for families, HD/4K streaming, and remote work.', popular: true },
  { speed: 100,  price: 110000,  label: 'Home Pro',      desc: 'Ideal for power users, gaming, and smart home setups.' },
  { speed: 200,  price: 199000,  label: 'Home Max',      desc: 'For heavy workloads, 8K streaming, and content creators.' },
];

const PLANS_3M = [
  { speed: 25,   price: 216000,  label: 'Home Basic 3M',  desc: 'Solo users — save 4% vs monthly.' },
  { speed: 50,   price: 257500,  label: 'Home Plus 3M',   desc: 'Families — great value quarterly plan.', popular: true },
  { speed: 100,  price: 316800,  label: 'Home Pro 3M',    desc: 'Power users — consistent 4% saving.' },
  { speed: 200,  price: 573000,  label: 'Home Max 3M',    desc: 'Max speeds at quarterly rate.' },
];

const PLANS_6M = [
  { speed: 25,   price: 423000,  label: 'Home Basic 6M',  desc: 'Solo users — 6-month value.' },
  { speed: 50,   price: 504000,  label: 'Home Plus 6M',   desc: 'Families at best semester rate.', popular: true },
  { speed: 100,  price: 620400,  label: 'Home Pro 6M',    desc: 'Power users — 6% saving.' },
  { speed: 200,  price: 1122000, label: 'Home Max 6M',    desc: 'Full-power for half a year.' },
];

const PLANS_12M = [
  { speed: 25,   price: 828000,   label: 'Home Basic Annual',  desc: 'Solo users — best annual value.' },
  { speed: 50,   price: 987000,   label: 'Home Plus Annual',   desc: 'Families — top annual deal.', popular: true },
  { speed: 100,  price: 1214400,  label: 'Home Pro Annual',    desc: 'Power users — 8% annual saving.' },
  { speed: 200,  price: 2197000,  label: 'Home Max Annual',    desc: 'Max speed, max savings.' },
];

function fmt(n: number) {
  return n.toLocaleString('en-UG');
}

const FAQ = [
  { q: 'How much is Zuku Fiber internet in Uganda?', a: 'Zuku Fiber plans in Uganda start at UGX 75,000/month for 25 Mbps. The 50 Mbps plan is UGX 89,400/month, 100 Mbps is UGX 110,000/month, and 200 Mbps is UGX 199,000/month. All prices include free installation and a free Wi-Fi router.' },
  { q: 'What does the Zuku Fiber plan include?', a: 'Every Zuku Fiber plan includes: unlimited data (no cap), free professional fiber installation, free dual-band Wi-Fi router, 100+ digital TV channels, and 24/7 Kampala-based customer support.' },
  { q: 'Is there a discount for paying quarterly or annually?', a: 'Yes. Paying 3 months saves approximately 4%, 6 months saves up to 6%, and 12 months saves up to 8% compared to the monthly rate. For example, the 50 Mbps plan is UGX 89,400/month or UGX 987,000/year.' },
  { q: 'Does Zuku charge for installation?', a: 'No. Installation is completely free for all new subscribers on all plans. There are no hidden setup fees or hardware costs.' },
  { q: 'What is the cheapest Zuku Fiber plan?', a: 'The cheapest Zuku Fiber plan is 25 Mbps for UGX 75,000 per month. It includes unlimited data, free Wi-Fi router, free installation, and 100+ TV channels.' },
  { q: 'How do I pay for Zuku Fiber?', a: 'You can pay via MTN Mobile Money, Airtel Money, bank transfer, or at any Zuku agent outlet in Kampala. WhatsApp 0775 260 196 to get started.' },
  { q: 'Does Zuku Fiber have data caps?', a: 'No. All Zuku Fiber plans are truly unlimited — there are no data caps, no Fair Usage Policy, and no throttling at any speed tier.' },
  { q: 'What speed should I get for working from home?', a: 'The 50 Mbps plan (UGX 89,400/month) is ideal for remote workers. It handles multiple simultaneous HD video calls, cloud uploads, and 4K streaming. Heavy developers or multi-person office setups should consider 100 Mbps (UGX 110,000/month).' },
];

export default function ZukuFiberPricesPage() {
  const pricingJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        'name': 'Zuku Fiber Internet Plans Uganda 2026',
        'description': 'Official pricing for all Zuku Fiber unlimited broadband plans in Uganda.',
        'itemListElement': PLANS_1M.map((p, i) => ({
          '@type': 'ListItem',
          'position': i + 1,
          'item': {
            '@type': 'Product',
            'name': `Zuku Fiber ${p.speed} Mbps — ${p.label}`,
            'description': p.desc,
            'brand': { '@type': 'Brand', 'name': 'Zuku Fiber Uganda' },
            'offers': {
              '@type': 'Offer',
              'price': p.price,
              'priceCurrency': 'UGX',
              'priceSpecification': {
                '@type': 'UnitPriceSpecification',
                'price': p.price,
                'priceCurrency': 'UGX',
                'referenceQuantity': { '@type': 'QuantitativeValue', 'value': 1, 'unitCode': 'MON' },
              },
              'availability': 'https://schema.org/InStock',
              'seller': { '@type': 'Organization', 'name': 'Zuku Fiber Uganda' },
              'areaServed': { '@type': 'City', 'name': 'Kampala, Uganda' },
            },
          },
        })),
      },
      {
        '@type': 'FAQPage',
        'mainEntity': FAQ.map(f => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://zukufiberuganda.vercel.app/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Zuku Fiber Prices', 'item': 'https://zukufiberuganda.vercel.app/zuku-fiber-prices' },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>

        {/* ── HERO ── */}
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '5rem', textAlign: 'center' }}>
          <div className="container">
            <div className="label label-green animate-up d1">
              <span className="label-dot" />
              Official Pricing — Updated April 2026
            </div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginTop: '2rem' }}>
              Zuku Fiber <span className="grad-g">Prices Uganda</span> 2026
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              Unlimited fiber from <strong>UGX 75,000/month</strong>. No data caps, no throttling, no hidden fees.
              Free installation + free router on every plan.
            </p>
            <div className="animate-up d4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Order via WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>

            {/* Quick stats */}
            <div className="animate-up d5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              {[
                { label: 'Lowest Price', val: 'UGX 75,000/mo', color: 'var(--green)' },
                { label: 'Max Speed', val: '200 Mbps', color: 'var(--blue)' },
                { label: 'Data Caps', val: 'None — Ever', color: 'var(--t0)' },
                { label: 'Install Fee', val: 'UGX 0', color: 'var(--yellow)' },
              ].map((s, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem', background: 'var(--bg-3)', border: '1px solid var(--border-2)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--t2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{s.label}</div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.4rem', fontWeight: '700', color: s.color }}>{s.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI-READABLE PRICING BLOCK (visible + machine-friendly) ── */}
        <section id="pricing-table" className="section" style={{ background: 'var(--bg-2)', paddingTop: '1rem' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Monthly Plans</h2>
            <p className="section-sub" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              All plans include unlimited data, free installation, free Wi-Fi router, and 100+ TV channels.
            </p>

            {/* ── MONTHLY PRICING GRID ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
              {PLANS_1M.map((p) => (
                <div
                  key={p.speed}
                  className="card"
                  style={{
                    padding: '2.5rem 2rem',
                    border: p.popular ? '2px solid var(--green-bd)' : '1px solid var(--border)',
                    position: 'relative',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                >
                  {p.popular && (
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--green)', color: '#000', padding: '0.3rem 1rem', borderRadius: 'var(--radius-pill)', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ fontSize: '0.75rem', color: 'var(--t2)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>{p.label}</div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: '800', color: 'var(--t0)', marginBottom: '0.25rem' }}>
                    {p.speed} <span style={{ fontSize: '1rem', fontWeight: '500' }}>Mbps</span>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--t2)' }}>UGX </span>
                    <span style={{ fontSize: '1.75rem', fontWeight: '700', color: p.popular ? 'var(--green)' : 'var(--t0)' }}>{fmt(p.price)}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--t2)' }}>/mo</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--t1)', marginBottom: '1.5rem', minHeight: '2.5rem' }}>{p.desc}</p>
                  <Link
                    href={`https://wa.me/2560775260196?text=${encodeURIComponent(`Hi Zuku Fiber! I'd like the ${p.speed} Mbps plan at UGX ${fmt(p.price)}/month. Please guide me on next steps.`)}`}
                    className={`btn ${p.popular ? 'btn-primary' : 'btn-ghost'}`}
                    style={{ width: '100%', textAlign: 'center', display: 'block' }}
                  >
                    Get {p.speed} Mbps
                  </Link>
                </div>
              ))}
            </div>

            {/* Enterprise note */}
            <div style={{ background: 'var(--bg-3)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>🏢</div>
              <h3 style={{ fontFamily: 'var(--font-head)', marginBottom: '0.5rem' }}>Enterprise / Business Plans</h3>
              <p style={{ color: 'var(--t1)', marginBottom: '1.5rem' }}>
                Need dedicated bandwidth, multiple IPs, or a custom SLA? We provide tailored enterprise fiber solutions for offices, hotels, schools, and apartment complexes in Kampala.
              </p>
              <Link href="https://wa.me/2560775260196?text=Hi%20Zuku%20Fiber!%20I%27m%20interested%20in%20an%20Enterprise%20plan.%20Please%20send%20a%20custom%20quote." className="btn btn-primary">
                Request Enterprise Quote
              </Link>
            </div>

            {/* ── EXTENDED BILLING TABLE ── */}
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Multi-Month Savings</h2>
            <p className="section-sub" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              Pay for 3, 6, or 12 months upfront and save up to 8%. Prices in UGX.
            </p>
            <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-3)', fontSize: '0.72rem', color: 'var(--t2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Speed</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>1 Month</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>3 Months</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>6 Months</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>12 Months</th>
                  </tr>
                </thead>
                <tbody>
                  {PLANS_1M.map((p, i) => (
                    <tr key={p.speed} style={{ borderTop: '1px solid var(--border)', background: i % 2 === 0 ? 'var(--bg)' : 'var(--bg-2)' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '600', color: 'var(--t0)' }}>{p.speed} Mbps</td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'right', color: 'var(--t1)' }}>UGX {fmt(PLANS_1M[i].price)}</td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'right', color: 'var(--t1)' }}>UGX {fmt(PLANS_3M[i].price)}</td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'right', color: 'var(--t1)' }}>UGX {fmt(PLANS_6M[i].price)}</td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'right', color: 'var(--green)', fontWeight: '700' }}>UGX {fmt(PLANS_12M[i].price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--t2)', marginTop: '1rem' }}>
              * All plans include free professional installation, free dual-band Wi-Fi router, and 100+ digital TV channels.
            </p>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>What Every Plan Includes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '♾️', title: 'Truly Unlimited Data', desc: 'Zero data caps, no Fair Usage Policy, no throttling — ever. Use as much as you want, 24/7.' },
                { icon: '🛠️', title: 'Free Professional Installation', desc: 'Our Kampala-based engineers handle everything: fiber cabling, wall sockets, and full WiFi setup at no charge.' },
                { icon: '📡', title: 'Free Dual-Band Wi-Fi Router', desc: 'A premium router covering your whole home is included at no cost. No rental fees.' },
                { icon: '📺', title: '100+ Digital TV Channels', desc: 'Sports, news, kids, and movies included from day one. Optional Zuku TV add-ons from UGX 8,300/mo.' },
                { icon: '🔒', title: '24/7 Local Support', desc: 'Kampala-based engineers, not overseas call centres. Most issues resolved within 30 minutes.' },
                { icon: '⚡', title: 'Symmetrical Speeds', desc: 'Your upload speed equals your download speed — critical for video calls, gaming, and cloud work.' },
              ].map((f, i) => (
                <div key={i} className="card" style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-head)', marginBottom: '0.75rem' }}>{f.title}</h3>
                  <p style={{ color: 'var(--t1)', fontSize: '0.9rem' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPETITOR PRICE CONTEXT ── */}
        <section className="section" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>How Zuku Compares to Other ISPs</h2>
            <p className="section-sub" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Same or better speed — at a fraction of the price. No data caps is what makes the difference.
            </p>
            <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-3)', fontSize: '0.72rem', color: 'var(--t2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Provider</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Technology</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Starting Price</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Max Speed</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Data Cap</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'left' }}>Free Install</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: 'var(--green-bg)', borderLeft: '3px solid var(--green)' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: '700' }}>Zuku Fiber ✅</td>
                    <td style={{ padding: '1rem 1.25rem' }}>Pure Fiber</td>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: 'var(--green)' }}>UGX 75,000/mo</td>
                    <td style={{ padding: '1rem 1.25rem' }}>200 Mbps</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>None ✅</td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--green)', fontWeight: '600' }}>Free ✅</td>
                  </tr>
                  {[
                    { p: 'MTN WakaNet', t: '5G/Fixed Wireless', price: 'UGX 130,000+', s: 'Varies', cap: 'Fair Usage ⚠️', inst: 'No ❌' },
                    { p: 'Airtel Uganda', t: '5G/4G', price: 'UGX 150,000+', s: 'Varies', cap: 'Volume Caps ❌', inst: 'No ❌' },
                    { p: 'Roke Telkom', t: 'Wireless', price: 'UGX 112,000+', s: '100 Mbps', cap: 'Time-based ⚠️', inst: 'Paid ❌' },
                    { p: 'Faibanet', t: 'Fiber', price: 'UGX 100,000+', s: '50 Mbps', cap: 'Limited ⚠️', inst: 'Paid ❌' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                      <td style={{ padding: '1rem 1.25rem' }}>{row.p}</td>
                      <td style={{ padding: '1rem 1.25rem' }}>{row.t}</td>
                      <td style={{ padding: '1rem 1.25rem' }}>{row.price}</td>
                      <td style={{ padding: '1rem 1.25rem' }}>{row.s}</td>
                      <td style={{ padding: '1rem 1.25rem' }}>{row.cap}</td>
                      <td style={{ padding: '1rem 1.25rem' }}>{row.inst}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="section">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Pricing FAQs</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {FAQ.map((f, i) => (
                <details key={i} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '0.5rem', background: 'var(--bg)' }}>
                  <summary style={{ padding: '1.25rem 1.5rem', fontFamily: 'var(--font-head)', color: 'var(--t0)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {f.q}
                    <span>⌄</span>
                  </summary>
                  <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid var(--border)', color: 'var(--t1)' }}>
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Ready to Get Connected?</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              WhatsApp us to check coverage and schedule your free installation today.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Order on WhatsApp</Link>
              <Link href="tel:+2560775260196" className="btn btn-ghost">Call 0775 260 196</Link>
            </div>
            <p style={{ color: 'var(--t2)', fontSize: '0.875rem' }}>
              Serving: Kololo · Ntinda · Naguru · Bugolobi · Muyenga · Kisaasi · Kyanja · Bukoto · Munyonyo · Entebbe Road
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
