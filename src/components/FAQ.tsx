'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

const FAQS = [
  { q: 'What does free installation include?', a: 'Our engineers come to your home, run the fiber cable, install a wall socket, and set up your Wi-Fi network. Every plan, including our [Home Fiber](#plans), comes with free installation and a free router.' },
  { q: 'How long does installation take?', a: 'Most installations are completed in 2–4 hours. Same-day connections are available in many areas. You can check our [Coverage Map](#) or [Contact Support](/contact) to schedule.' },
  { q: 'Is the data truly unlimited?', a: 'Yes. No data caps or throttling. Our [Unlimited Plans](#plans) deliver fixed speeds 24/7, making them the best choice for Kampala households.' },
  { q: 'Which areas of Kampala do you cover?', a: 'We serve Kololo, Ntinda, Naguru, Bugolobi, and more. See our [Business Fiber](#plans) options for commercial coverage or WhatsApp us for home queries.' },
  { q: 'Can I upgrade or change my plan later?', a: 'Yes — upgrades take effect the same day. You can easily switch between our [25 Mbps to 200 Mbps plans](#plans) without any admin fees.' },
  { q: 'What happens if my connection goes down?', a: 'Contact our 24/7 team. Most issues are fixed in 30 mins. For billing queries, visit our [Payment Options](#payment) page.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': `Short Answer: ${f.a}`
      }
    }))
  };

  return (
    <section className="section" style={{ background: 'var(--bg-2)' }} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container">
        <div className={styles.inner}>

          {/* Left sticky */}
          <div className={styles.left}>
            <span className="label label-blue">
              <span className="label-dot" />
              FAQ
            </span>
            <h2 className="section-title" style={{ marginTop: '1.25rem' }}>
              Common<br />questions.
            </h2>
            <p className="section-sub">
              Can't find your answer? Call or WhatsApp us directly.
            </p>
            <div className={styles.contacts}>
              <a href="tel:+2560775260196" className={styles.contactLink}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
                0775 260 196
              </a>
              <a href="tel:+2560747505741" className={styles.contactLink}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
                0747 505 741
              </a>
            </div>
          </div>

          {/* Right accordion semantic switch to avoid stealth/cloaking penalties */}
          <div style={{ maxWidth: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
            {FAQS.map((f, i) => (
              <details key={i} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', padding: 0, margin: 0, background: 'var(--bg)' }}>
                <summary style={{ padding: '1.25rem 1.5rem', fontFamily: 'var(--font-head)', color: 'var(--t0)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {f.q}
                  <span style={{ transition: 'transform 0.3s' }}>+</span>
                </summary>
                <div style={{ padding: '0 1.5rem 1.25rem', color: 'var(--t1)', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                  <p><strong>Short Answer:</strong> {f.a}</p>
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
