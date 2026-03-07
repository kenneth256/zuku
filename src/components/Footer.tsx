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
      { label: 'Diamond Trust Bldg, KLA', href: '#' },
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
              <h4 className={styles.colHead}>{col.heading}</h4>
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

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Zuku Fiber Uganda. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
