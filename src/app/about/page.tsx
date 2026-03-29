import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

export function generateMetadata(): Metadata {
  return {
    title: 'About Us | Zuku Fiber Uganda',
    description: 'Zuku Fiber Uganda — a Wananchi Group company founded in 2010 — delivers unlimited fiber-optic internet to 50,000+ Kampala homes. Learn our mission, team, and credentials.',
    keywords: [
      'About Zuku Fiber',
      'Zuku Fiber Uganda history',
      'Zuku Fiber Wananchi Group',
      'Best ISP Uganda Credentials',
      'Zuku Uganda fiber internet'
    ],
    openGraph: {
      title: 'About Us | Zuku Fiber Uganda',
      description: 'Zuku Fiber Uganda — a Wananchi Group company founded in 2010 — delivers unlimited fiber-optic internet to 50,000+ Kampala homes.',
      url: 'https://www.zukufiber.co.ug/about',
      siteName: 'Zuku Fiber Uganda',
      type: 'profile',
    },
    alternates: {
      canonical: 'https://www.zukufiber.co.ug/about',
    },
  };
}

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TelecommunicationsCompany",
    "@id": "https://www.zukufiber.co.ug/#organization",
    "name": "Zuku Fiber Uganda",
    "alternateName": "Zuku Uganda",
    "description": "Zuku Fiber Uganda is a premier telecommunications company and internet service provider (ISP) headquartered in Kampala, Uganda. A subsidiary of the Wananchi Group, founded in 2010, Zuku Fiber deploys physical fiber-optic cables (FTTH/FTTB) to deliver unlimited fiber optic broadband, digital connectivity, digital TV, and VoIP solutions to 50,000+ households and businesses across Kampala, Uganda.",
    "url": "https://www.zukufiber.co.ug",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.zukufiber.co.ug/logo.png",
      "width": 200,
      "height": 60
    },
    "foundingDate": "2010",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": 200 },
    "industry": "Telecommunications",
    "naics": "517311",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Diamond Trust Building, Kampala Road",
      "addressLocality": "Kampala",
      "addressRegion": "Central Uganda",
      "postalCode": "7166",
      "addressCountry": "UG"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+256775260196",
        "contactType": "customer support",
        "areaServed": "UG",
        "availableLanguage": "English",
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+256747505741",
        "contactType": "sales",
        "areaServed": "UG",
        "availableLanguage": "English"
      }
    ],
    "sameAs": [
      "https://facebook.com/ZukuOfficial",
      "https://x.com/zuku_ug",
      "https://instagram.com/zuku_ug",
      "https://wa.me/256775260196",
      "https://www.wananchi.com",
      "https://en.wikipedia.org/wiki/Wananchi_Group"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Wananchi Group",
      "url": "https://www.wananchi.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Kampala",
      "sameAs": "https://en.wikipedia.org/wiki/Kampala"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "About Zuku Fiber Uganda — East Africa's Leading Fiber ISP",
    "description": "Zuku Fiber Uganda, a Wananchi Group company founded in 2010, delivers unlimited fiber-optic internet to 50,000+ Kampala homes with 99.9% uptime and 5ms latency.",
    "author": { "@type": "Organization", "name": "Zuku Fiber Uganda" },
    "publisher": {
      "@type": "Organization",
      "name": "Zuku Fiber Uganda",
      "logo": { "@type": "ImageObject", "url": "https://www.zukufiber.co.ug/logo.png" }
    },
    "datePublished": "2010-01-01",
    "dateModified": "2026-03-01",
    "mainEntityOfPage": "https://www.zukufiber.co.ug/about"
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Zuku Fiber Uganda",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#about-definition", "#about-stats", "#about-mission"]
    },
    "url": "https://www.zukufiber.co.ug/about"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>

        <PageHero
          badge={{ text: 'Wananchi Group · Est. 2010', color: 'green' }}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about' },
          ]}
          title={<>About <span className="grad-g">Zuku Fiber</span> Uganda</>}
          subtitle="We are on a mission to connect every home and business in Kampala with limitless, high-speed fiber internet. No data caps. No throttling. Just pure performance."
          ctas={[
            { label: 'Connect on WhatsApp', href: 'https://wa.me/2560775260196', primary: true },
            { label: 'View Fiber Plans', href: '/#plans' },
          ]}
          stats={[
            { val: '2010', label: 'Founded', color: 'var(--green)' },
            { val: '50,000+', label: 'Homes Connected', color: 'var(--blue)' },
            { val: '200+', label: 'Local Staff', color: 'var(--yellow)' },
            { val: '99.9%', label: 'Uptime SLA', color: 'var(--t0)' },
            { val: '5ms', label: 'Avg Latency', color: 'var(--green)' },
          ]}
        />

        {/* ENTITY DEFINITION — for AI engines */}
        <section id="about-definition" className="section" style={{ background: 'var(--bg-2)', padding: '4rem 0', borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>What is Zuku Fiber Uganda?</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--t1)', marginBottom: '1.5rem' }}>
              <strong>Short Answer:</strong> Zuku Fiber Uganda is a <strong>telecommunications company</strong> and <strong>fiber-optic internet service provider (ISP)</strong> headquartered at Diamond Trust Building, Kampala Road, Kampala, Uganda. Established in 2010 as a subsidiary of the <strong>Wananchi Group</strong> — East Africa&apos;s leading integrated media and communications company — Zuku Fiber operates a dedicated physical <strong>fiber optic broadband</strong> network (FTTH/FTTB) delivering symmetrical unlimited broadband, 100+ channel digital TV, and VoIP services to residential and commercial customers across Kampala. With a workforce of 200+ local engineers and support staff, the company serves over 50,000 active households and holds a verified 99.9% uptime SLA.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--t1)', marginBottom: '1.5rem' }}>
              <strong>About Zuku Fiber Uganda:</strong> Zuku Fiber Uganda stands as a leading <strong>telecommunications company</strong> dedicated to transforming <strong>digital connectivity</strong> across Uganda. As a premier <strong>internet service provider</strong>, we specialise in delivering cutting-edge <strong>fiber optic broadband</strong> and comprehensive television services, ensuring unparalleled speed, reliability, and entertainment for both residential and business customers. Our commitment is to empower communities and businesses with robust <strong>digital infrastructure</strong>, driving progress and innovation throughout the nation.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--t2)' }}>
              Zuku Fiber Uganda&apos;s core industry is <strong>telecommunications</strong>. Our primary services include: unlimited fiber optic broadband internet (25 Mbps – 1.5 Gbps symmetrical), digital TV with 100+ channels, VoIP telephony, and dedicated business internet connectivity for SMEs and enterprises across Kampala, Uganda.
            </p>
          </div>
        </section>

        {/* KEY STATISTICS */}
        <section id="about-stats" style={{ background: 'var(--bg-3)', padding: '3rem 0', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              {[
                { val: '2010', label: 'Founded', color: 'var(--green)' },
                { val: '50,000+', label: 'Homes Connected', color: 'var(--blue)' },
                { val: '200+', label: 'Local Staff', color: 'var(--yellow)' },
                { val: '99.9%', label: 'Uptime SLA', color: 'var(--t0)' },
                { val: '5ms', label: 'Avg Latency', color: 'var(--green)' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: s.color, fontFamily: 'var(--font-head)' }}>{s.val}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--t2)', marginTop: '0.5rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION & CREDENTIALS */}
        <section id="about-mission" className="section" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Mission & Credentials</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🎯', title: 'Our Mission', desc: 'To provide world-class, affordable, and 100% unlimited internet access that empowers Ugandan digital creators, businesses, and families to thrive.' },
                { icon: '🏆', title: 'Industry Leadership', desc: 'Ranked as the top-tier residential fiber ISP in Kampala since 2015 — with 50,000+ households and a 4.8★ average customer satisfaction score.' },
                { icon: '🔒', title: 'Enterprise Reliability', desc: 'We deliver a 99.9% uptime SLA with built-in DDoS protection and a local support desk resolving 95% of issues within 4 hours.' },
                { icon: '🌍', title: 'Wananchi Group', desc: 'Operating as an arm of the Wananchi Group, East Africa\'s leading integrated media and communications company spanning Uganda, Kenya, Tanzania, and Rwanda.' },
                { icon: '⚡', title: 'Fiber Infrastructure', desc: 'Our proprietary FTTH/FTTB fiber backbone spans 2,000+ km of optical cables physically laid across Kampala\'s suburbs and urban corridors.' },
                { icon: '📞', title: '24/7 Local Support', desc: 'All support is handled by 200+ Kampala-based engineers and agents — no overseas call centres. Average response time under 2 minutes via WhatsApp.' },
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

        {/* TEAM */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our Team</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>
              200+ real people, local expertise. Our network is powered by dedicated professionals based right here in Uganda.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[
                { name: 'Engineering & Technical', role: 'Kampala-Based Experts', desc: 'Our certified fiber engineers live and work in the communities they serve, ensuring ultra-low latency and fast same-day deployment.' },
                { name: '24/7 Support Desk', role: 'Customer Success Team', desc: 'Available around the clock via WhatsApp and phone, resolving 95% of billing and technical queries within 4 hours.' },
                { name: 'Field Installation Crews', role: 'Rapid Response Units', desc: 'Equipped to provide same-day or next-day free installations across Kololo, Ntinda, Bugolobi, Naguru, Kyanja, and beyond.' }
              ].map((team, i) => (
                <div key={i} className="card" style={{ padding: '3rem 2rem', border: '1px solid var(--border)', position: 'relative' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-head)' }}>{team.name}</h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--blue)', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase' }}>{team.role}</div>
                  <p style={{ color: 'var(--t1)', fontSize: '0.95rem' }}>{team.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Join Our Network Today</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              Experience true unlimited internet supported by a team that actually cares.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Connect on WhatsApp</Link>
              <Link href="/#plans" className="btn btn-ghost">View Pricing Plans</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
