import styles from './Footer.module.css';

const COLS = [
  {
    heading: 'Services',
    links: [
      { label: 'Home Fiber', href: '#plans' },
      { label: 'Business Fiber', href: '#plans' },
      { label: 'Digital TV', href: '#tv' },
      { label: 'Payment Options', href: '#payment' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Coverage Map', href: '#' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Terms of Use', href: '#' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: '0775 260 196', href: 'tel:+2560775260196' },
      { label: '0747 505 741', href: 'tel:+2560747505741' },
      { label: 'support@zukufiber.co.ug', href: 'mailto:support@zukufiber.co.ug' },
      { label: 'Diamond Trust Bldg, KLA', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoDot} />
              ZUKU<span className={styles.logoGreen}>FIBER</span>
            </div>
            <p className={styles.tagline}>
              Unlimited home internet for Uganda.<br />
              Built in Kampala, for Kampala.
            </p>
            <div className={styles.social}>
              {[['FB', 'https://facebook.com/ZukuOfficial'], ['X', 'https://x.com/zuku_ug'], ['IG', '#'], ['WA', 'https://wa.me/2560775260196']].map(([l, h]) => (
                <a key={l} href={h} className={styles.socialBtn} target="_blank" rel="noopener">{l}</a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {COLS.map(col => (
            <div key={col.heading} className={styles.col}>
              <h3 className={styles.colHead}>{col.heading}</h3>
              <ul className={styles.colLinks}>
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className={styles.colLink}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dense Entity Description for Knowledge Graph */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', paddingBottom: '2rem', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1rem', color: 'var(--t0)', marginBottom: '0.5rem', fontFamily: 'var(--font-head)' }}>About Zuku Fiber Uganda</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--t2)', lineHeight: '1.6' }}>
            Zuku Fiber Uganda is a premier Internet Service Provider (ISP) and telecommunications company headquartered in Kampala, Uganda. Operating as a subsidiary of the Wananchi Group entity, Zuku Fiber is categorized within the telecommunications and broadband networking industry. Our core business operations involve deploying physical fiber-optic cables directly to residential and commercial premises (FTTH/FTTB) to deliver high-speed, unlimited broadband internet, comprehensive digital TV packages, and VoIP communication solutions. By competing with mobile network operators like MTN Uganda and Airtel Uganda, Zuku Fiber establishes a dedicated fixed-line infrastructure designed specifically for digital professionals, remote workers, and data-heavy households requiring symmetrical, zero-throttled bandwidth and robust 5ms latency configurations.
          </p>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Zuku Fiber Uganda. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
