import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

export function generateMetadata(): Metadata {
  return {
    title: 'Contact Us | Zuku Fiber Uganda',
    description: 'Get in touch with Zuku Fiber Uganda for unlimited home fiber, business internet, and 24/7 technical support in Kampala.',
    keywords: [
      'Contact Zuku Fiber',
      'Zuku Fiber customer care',
      'Zuku Uganda phone number',
      'Zuku Fiber address',
      'Zuku Fiber support'
    ],
    openGraph: {
      title: 'Contact Us | Zuku Fiber Uganda',
      description: 'Get in touch with Zuku Fiber Uganda for unlimited home fiber, business internet, and 24/7 technical support in Kampala.',
      url: 'https://zukufiberuganda.vercel.app/contact',
      siteName: 'Zuku Fiber Uganda',
      type: 'website',
    },
    alternates: {
      canonical: 'https://zukufiberuganda.vercel.app/contact',
    },
  };
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Zuku Fiber Uganda Contact Page",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zuku Fiber Uganda",
      "url": "https://zukufiberuganda.vercel.app",
      "logo": "https://zukufiberuganda.vercel.app/logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+2560775260196",
          "contactType": "Customer Support",
          "areaServed": "UG",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+2560747505741",
          "contactType": "Sales and Installation",
          "areaServed": "UG",
          "availableLanguage": "English"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Diamond Trust Building",
        "addressLocality": "Kampala",
        "addressCountry": "Uganda"
      },
      "email": "support@zukufiber.co.ug"
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)' }}>
        <PageHero
          badge={{ text: 'Here to Help · 24/7 Support', color: 'green' }}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Contact', href: '/contact' },
          ]}
          title={<>Get in <span className="grad-g">Touch</span> with Us</>}
          subtitle="Whether you need to schedule a free installation, upgrade your fiber plan, or get 24/7 technical support, our team in Kampala is ready."
          ctas={[
            { label: 'WhatsApp Us Now', href: 'https://wa.me/2560775260196', primary: true },
            { label: 'Call 0775 260 196', href: 'tel:+2560775260196' },
          ]}
          highlights={[
            '⚡ Average response: 2 minutes',
            '· 📍 Diamond Trust Bldg, Kampala',
            '· ✉️ support@zukufiber.co.ug',
          ]}
        />

        {/* CONTACT INFO GRID */}
        <section className="section" style={{ background: 'var(--bg-2)' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>How to Reach Us</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {/* WhatsApp/Phone Card */}
              <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📞</div>
                <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-head)' }}>Call or WhatsApp</h3>
                <p style={{ color: 'var(--t1)', marginBottom: '1.5rem' }}>Fastest way to reach our 24/7 customer care and sales team.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--t0)' }}>
                  <a href="tel:+2560775260196" style={{ textDecoration: 'none', color: 'var(--blue)' }}>0775 260 196</a>
                  <a href="tel:+2560747505741" style={{ textDecoration: 'none', color: 'var(--blue)' }}>0747 505 741</a>
                </div>
              </div>

              {/* Email Card */}
              <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✉️</div>
                <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-head)' }}>Email Us</h3>
                <p style={{ color: 'var(--t1)', marginBottom: '1.5rem' }}>For corporate inquiries, partnerships, or detailed billing questions.</p>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  <a href="mailto:support@zukufiber.co.ug" style={{ textDecoration: 'none', color: 'var(--green)' }}>support@zukufiber.co.ug</a>
                </div>
              </div>

              {/* Location Card */}
              <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🏢</div>
                <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-head)' }}>Visit Our Office</h3>
                <p style={{ color: 'var(--t1)', marginBottom: '1.5rem' }}>Need face-to-face assistance? Drop by our main office.</p>
                <div style={{ fontWeight: '600', color: 'var(--t0)' }}>
                  Diamond Trust Building<br />
                  Kampala, Uganda
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ or EXTRA CTA SECTION */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Ready to Switch to Better Internet?</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              Join thousands of Ugandans across Kampala enjoying true unlimited fiber speeds.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/2560775260196" className="btn btn-primary">Connect Instantly on WhatsApp</Link>
              <Link href="/#plans" className="btn btn-ghost">View Fiber Plans</Link>
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
