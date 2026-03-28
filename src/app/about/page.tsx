import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateMetadata(): Metadata {
  return {
    title: 'About Us | Zuku Fiber Uganda',
    description: 'Learn about Zuku Fiber Uganda, our mission to provide limitless high-speed internet, our team of local engineers, and our credentials as the top ISP.',
    keywords: [
      'About Zuku Fiber',
      'Zuku Fiber Team',
      'Zuku Fiber Mission',
      'Best ISP Uganda Credentials',
      'Zuku Uganda'
    ],
    openGraph: {
      title: 'About Us | Zuku Fiber Uganda',
      description: 'Learn about Zuku Fiber Uganda, our mission to provide limitless high-speed internet, our team of local engineers, and our credentials as the top ISP.',
      url: 'https://zukufiberuganda.vercel.app/about',
      siteName: 'Zuku Fiber Uganda',
      type: 'profile',
    },
    alternates: {
      canonical: 'https://zukufiberuganda.vercel.app/about',
    },
  };
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zuku Fiber Uganda",
      "description": "Zuku Fiber is a leading Internet Service Provider in Uganda, established to deliver unlimited fiber-optic connectivity to homes and businesses across Kampala without data caps.",
      "url": "https://zukufiberuganda.vercel.app",
      "logo": "https://zukufiberuganda.vercel.app/logo.png",
      "foundingDate": "2010",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Diamond Trust Building",
        "addressLocality": "Kampala",
        "addressCountry": "Uganda"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+2560775260196",
        "contactType": "Customer Support",
        "areaServed": "UG",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>
        {/* HERO SECTION */}
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '3rem' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="label label-blue animate-up d1">
              <span className="label-dot" />
              Who We Are
            </div>
            <h1 className="section-title animate-up d2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '2rem' }}>
              About <span className="grad-g">Zuku Fiber</span> Uganda
            </h1>
            <p className="section-sub animate-up d3" style={{ margin: '0 auto 2.5rem' }}>
              We are on a mission to connect every home and business in Kampala with limitless, high-speed fiber internet. No data caps. No throttling. Just pure performance.
            </p>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="section" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Mission & Credentials</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🎯', title: 'Our Mission', desc: 'To provide world-class, affordable, and 100% unlimited internet access that empowers Ugandan digital creators, businesses, and families to thrive.' },
                { icon: '🏆', title: 'Industry Leadership', desc: 'Ranked as a top-tier residential fiber provider in Kampala with over 50,000 happy households connected.' },
                { icon: '🔒', title: 'Enterprise-Grade Reliability', desc: 'We deliver a 99.9% uptime SLA guarantee on our secure fiber-optic lines, offering built-in DDoS protection for all our users.' },
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

        {/* TEAM SECTION */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '4rem' }}>Meet the Team</h2>
            <p className="section-sub" style={{ margin: '0 auto 4rem' }}>
              Real people, local expertise. Our network is powered by dedicated professionals based right here in Uganda.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[
                { name: 'Engineering & Technical', role: 'Kampala-Based Experts', desc: 'Our certified engineers live and work in the communities they serve, ensuring ultra-low latency and fast deployment.' },
                { name: '24/7 Support Desk', role: 'Customer Success Team', desc: 'Available around the clock via WhatsApp and phone to resolve billing queries and technical troubleshooting within minutes.' },
                { name: 'Field Installation Crews', role: 'Rapid Response Units', desc: 'Equipped to provide same-day or next-day free installations across Kololo, Ntinda, Bugolobi, Naguru, and beyond.' }
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

        {/* CTA BANNER */}
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
      <Footer />
    </>
  );
}
