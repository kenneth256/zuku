import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Business Internet Solutions — Dedicated SME & Enterprise Connectivity | Zuku Fiber Uganda',
  description: 'Zuku Fiber Uganda delivers dedicated business internet, SME broadband, managed connectivity, and enterprise fiber solutions to businesses across Kampala. 99.9% uptime SLA, symmetrical speeds, 24/7 local support.',
  keywords: [
    'business internet Uganda',
    'dedicated business internet Kampala',
    'SME broadband Uganda',
    'enterprise fiber internet Uganda',
    'managed connectivity Uganda',
    'Zuku Fiber business solutions',
  ],
  openGraph: {
    title: 'Business Internet Solutions — Zuku Fiber Uganda',
    description: 'Dedicated business internet, SME broadband, and enterprise connectivity solutions for Kampala businesses — guaranteed uptime, symmetrical speeds, 24/7 local support.',
    url: 'https://www.zukufiber.co.ug/business-solutions',
    siteName: 'Zuku Fiber Uganda',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.zukufiber.co.ug/business-solutions',
  },
};

const services = [
  {
    icon: '🔌',
    name: 'Dedicated Business Internet',
    type: 'Dedicated Internet Access',
    desc: 'Guaranteed symmetrical speeds with enterprise-grade SLAs for critical business operations. Zero data caps, no throttling, and a committed information rate (CIR) so your business always gets its full allocation.',
    bullets: ['99.9% uptime SLA', 'Symmetrical speeds up to 1.5 Gbps', 'Committed Information Rate (CIR)', 'Priority technical support'],
    color: 'var(--green)',
  },
  {
    icon: '🏢',
    name: 'SME Broadband Packages',
    type: 'SME Broadband',
    desc: 'Cost-effective, reliable fiber internet solutions designed for the specific needs of small and medium enterprises in Kampala — with static IP, business-grade router, and local account management.',
    bullets: ['Starting from UGX 75,000/month', 'Static IP address included', 'Free business-grade router', 'Flexible contracts'],
    color: 'var(--blue)',
  },
  {
    icon: '⚙️',
    name: 'Managed Connectivity Services',
    type: 'Managed Network Service',
    desc: 'End-to-end network management, 24/7 monitoring, and proactive support to ensure seamless business operations. We watch your connection so you can focus on running your business.',
    bullets: ['24/7 network monitoring', 'Proactive fault resolution', 'Dedicated account manager', 'Monthly performance reports'],
    color: 'var(--yellow)',
  },
  {
    icon: '🔒',
    name: 'VPN & Secure Connectivity',
    type: 'VPN Solutions',
    desc: 'Site-to-site VPN tunnels and secure remote access for distributed teams and multi-branch businesses across Uganda — encrypted, reliable, and fully managed by our local engineers.',
    bullets: ['Site-to-site VPN tunnels', 'Remote access VPN', 'Layer 2 & Layer 3 options', 'Full encryption & DDoS protection'],
    color: 'var(--green)',
  },
  {
    icon: '☁️',
    name: 'Cloud Interconnects',
    type: 'Cloud Connectivity',
    desc: 'Low-latency, high-throughput cloud connectivity for businesses leveraging AWS, Azure, Google Cloud, or local data centres in Uganda. Bypass public internet bottlenecks with a dedicated private circuit.',
    bullets: ['Sub-5ms latency to regional cloud hubs', 'Dedicated private circuits', 'Scalable bandwidth on demand', 'SLA-backed availability'],
    color: 'var(--blue)',
  },
  {
    icon: '📞',
    name: 'VoIP Business Telephony',
    type: 'VoIP Telephony',
    desc: 'Crystal-clear HD voice for your office — our fiber network provides the QoS guarantees that VoIP calls need to sound professional every time, with unlimited Uganda minutes and competitive international rates.',
    bullets: ['HD voice quality', 'Unlimited local minutes', 'Number porting available', 'PBX & cloud-phone integration'],
    color: 'var(--yellow)',
  },
];

const faqs = [
  {
    q: 'What uptime SLA does Zuku Fiber provide for business customers?',
    a: 'Zuku Fiber Uganda provides a 99.9% network uptime SLA for all business internet customers. This is backed by our local Kampala-based engineering team who resolve 95% of issues within 4 hours.',
  },
  {
    q: 'What speeds are available for business internet in Kampala?',
    a: 'Business internet speeds range from 25 Mbps all the way up to 1.5 Gbps symmetrical (upload = download). Dedicated Business Internet and Enterprise tiers feature Committed Information Rate (CIR) guarantees.',
  },
  {
    q: 'Can Zuku Fiber connect multiple business branches in Kampala?',
    a: 'Yes. Our Managed Connectivity and VPN solutions are purpose-designed for multi-site businesses. We can deliver site-to-site connectivity for branches across Kololo, Ntinda, Bugolobi, Naguru, Kyanja, and all Kampala suburbs we serve.',
  },
  {
    q: 'Is business internet different from home internet?',
    a: 'Business internet tiers come with symmetrical speeds, static IP addresses, priority technical support, Committed Information Rates (CIR), and dedicated account management — features not available on residential home packages.',
  },
  {
    q: 'How quickly can Zuku Fiber install business internet?',
    a: 'Standard business installations are completed within 3–5 business days. Our field crews are Kampala-based and can often offer same-day site surveys with next-day installation timelines for priority business customers.',
  },
];

export default function BusinessSolutionsPage() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Zuku Fiber Business Solutions — Enterprise & SME Internet in Uganda',
    'description': 'Zuku Fiber Uganda provides dedicated business internet, SME broadband, managed network services, VPN solutions, and cloud connectivity for businesses across Kampala, Uganda.',
    'url': 'https://www.zukufiber.co.ug/business-solutions',
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.zukufiber.co.ug' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Business Solutions', 'item': 'https://www.zukufiber.co.ug/business-solutions' },
      ],
    },
    'mainEntity': {
      '@type': 'Service',
      'name': 'Zuku Fiber Business Connectivity Solutions for Uganda',
      'description': 'Dedicated business internet, SME broadband, managed network services, VPN solutions, and cloud connectivity specifically for Ugandan businesses requiring high performance and reliability.',
      'serviceType': 'Business Internet Service Provider',
      'provider': {
        '@type': 'TelecommunicationsCompany',
        '@id': 'https://www.zukufiber.co.ug/#organization',
        'name': 'Zuku Fiber Uganda',
        'url': 'https://www.zukufiber.co.ug',
      },
      'areaServed': {
        '@type': 'AdministrativeArea',
        'name': 'Kampala, Uganda',
      },
      'audience': {
        '@type': 'Audience',
        'audienceType': 'BusinessAudience',
        'name': 'Businesses, SMEs, Enterprises, Industrial Clients, Corporations in Uganda',
      },
      'offers': {
        '@type': 'OfferCatalog',
        'name': 'Zuku Fiber Business Services Catalog',
        'itemListElement': services.map(s => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': s.name,
            'description': s.desc,
            'serviceType': s.type,
          },
        })),
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>

        <PageHero
          badge={{ text: 'Business & Enterprise Connectivity', color: 'blue' }}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Business Solutions', href: '/business-solutions' },
          ]}
          title={<>Fiber Internet Built for<br /><span className="grad-g">Uganda Businesses.</span></>}
          subtitle="Dedicated business internet, SME broadband, and enterprise connectivity solutions for companies across Kampala — with guaranteed uptime, symmetrical speeds, and 24/7 local support from our Kampala engineering team."
          ctas={[
            { label: 'Talk to Sales', href: 'https://wa.me/256747505741', primary: true },
            { label: 'View Home Plans', href: '/#plans' },
          ]}
          stats={[
            { val: '99.9%', label: 'Uptime SLA', color: 'var(--green)' },
            { val: '1.5 Gbps', label: 'Max Speed', color: 'var(--blue)' },
            { val: '4hr', label: 'Avg Fix Time', color: 'var(--yellow)' },
            { val: '200+', label: 'Local Engineers', color: 'var(--t0)' },
            { val: '24/7', label: 'Support', color: 'var(--green)' },
          ]}
        />

        {/* ENTITY DEFINITION */}
        <section style={{ background: 'var(--bg-2)', padding: '4rem 0', borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--t1)' }}>
              Zuku Fiber Uganda is a <strong>telecommunications company</strong> and <strong>internet service provider (ISP)</strong> delivering high-speed <strong>fiber optic broadband</strong> to homes and businesses in Kampala, Uganda. Our business internet services are purpose-built for SMEs, enterprises, and large organisations that require <strong>dedicated internet access</strong>, guaranteed uptime, symmetrical bandwidth, and professional managed connectivity — all supported by 200+ Kampala-based engineers.
            </p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="services" className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div className="label label-blue section-label">Business Services</div>
              <h2 className="section-title">Our Business Internet Services</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Six core services purpose-built for Kampala businesses — from SME broadband to enterprise-grade dedicated internet access.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {services.map((s, i) => (
                <div key={i} className="card" style={{ padding: '2.5rem', borderColor: s.color === 'var(--green)' ? 'var(--green-bd)' : s.color === 'var(--blue)' ? 'var(--blue-bd)' : 'rgba(255,242,0,0.15)' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-head)', color: 'var(--t0)' }}>{s.name}</h3>
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', color: s.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>{s.type}</div>
                  <p style={{ color: 'var(--t1)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {s.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--t2)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ZUKU FOR BUSINESS */}
        <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div className="label label-green section-label">Why Zuku Fiber</div>
              <h2 className="section-title">Why Kampala Businesses Choose Zuku Fiber</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '⚡', title: 'True Symmetrical Speeds', desc: 'Upload equals download. Critical for video conferencing, cloud backups, VoIP, and running remote-first businesses.' },
                { icon: '🎯', title: 'Committed Information Rate', desc: 'Your business bandwidth is reserved — not shared with residential users. Your speeds stay consistent at peak hours.' },
                { icon: '📍', title: 'Kampala-Based Support', desc: '200+ engineers and support agents in Kampala. No overseas call centres. Average WhatsApp response under 2 minutes.' },
                { icon: '🔒', title: 'Enterprise Security', desc: 'Built-in DDoS protection, static IP options, and optional managed firewall for compliance-conscious industries.' },
                { icon: '📊', title: 'Monthly SLA Reports', desc: 'Transparent uptime and performance reports every month so you can hold us accountable — and share with your board.' },
                { icon: '🌍', title: 'Wananchi Group Backbone', desc: "Backed by East Africa's leading telecommunications infrastructure operator spanning Uganda, Kenya, Tanzania, and Rwanda." },
              ].map((f, i) => (
                <div key={i} className="card" style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', fontFamily: 'var(--font-head)', color: 'var(--t0)' }}>{f.title}</h3>
                  <p style={{ color: 'var(--t2)', lineHeight: '1.65', fontSize: '0.9rem' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="label label-green section-label">FAQ</div>
              <h2 className="section-title">Business Internet — Frequently Asked Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {faqs.map((f, i) => (
                <div key={i} className="card" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-head)', color: 'var(--t0)', marginBottom: '0.75rem' }}>{f.q}</h3>
                  <p style={{ color: 'var(--t1)', lineHeight: '1.7', fontSize: '0.95rem' }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <div className="container">
            <div className="label label-green section-label" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>Get Connected</div>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Ready to Power Your Business with Zuku Fiber?</h2>
            <p className="section-sub" style={{ margin: '0 auto 2.5rem' }}>
              Talk to our Kampala sales team today. We&apos;ll survey your site, recommend the right plan, and have you connected within days.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/256747505741" className="btn btn-primary">
                Talk to Sales on WhatsApp
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </Link>
              <Link href="/#plans" className="btn btn-ghost">View Home Plans</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
