import styles from './Footer.module.css';

const COLS = [
  {
    heading: 'Services',
    links: [
      { label: 'Home Fiber', href: '/#plans' },
      { label: 'Business Internet', href: '/business-solutions' },
      { label: 'Zuku TV', href: '/#tv' },
      { label: 'Coverage Map', href: '/#coverage' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help Center & FAQ', href: '/best-internet-uganda#faq' },
      { label: 'Talk to Sales', href: 'tel:+2560775260196' },
      { label: 'support@zukufiber.co.ug', href: 'mailto:support@zukufiber.co.ug' },
      { label: 'Diamond Trust Bldg, KLA', href: '/contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Zuku', href: '/about' },
      { label: 'Business Solutions', href: '/business-solutions' },
      { label: 'Compare Speeds', href: '/mtn-vs-airtel-vs-zuku-uganda' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
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
              {[['FB', 'https://facebook.com/ZukuOfficial'], ['X', 'https://x.com/zuku_ug'], ['IG', 'https://instagram.com/zuku_ug'], ['WA', 'https://wa.me/2560775260196']].map(([l, h]) => (
                <a key={l} href={h} className={styles.socialBtn} target="_blank" rel="noopener" style={{ display: 'inline-flex', minWidth: '44px', minHeight: '44px', alignItems: 'center', justifyContent: 'center' }}>{l}</a>
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
                    <a href={l.href} className={styles.colLink} style={{ display: 'inline-flex', minHeight: '44px', alignItems: 'center', padding: '0.25rem 0' }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dense Entity Description for Knowledge Graph */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', paddingBottom: '2rem', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1rem', color: 'var(--t0)', margin: '0 0 0.5rem', fontFamily: 'var(--font-head)' }}>About Zuku Fiber Uganda</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--t2)', lineHeight: '1.6', margin: 0 }}>
            Zuku Fiber Uganda is a premier <strong>telecommunications company</strong> and <strong>internet service provider (ISP)</strong> headquartered in Kampala, Uganda. Operating as a subsidiary of the Wananchi Group, Zuku Fiber is categorised within the <strong>telecommunications and fiber optic broadband</strong> industry. Our core services include unlimited <strong>fiber optic broadband internet</strong> (25 Mbps–1.5 Gbps symmetrical), <strong>dedicated business internet</strong> for SMEs and enterprises, digital TV with 100+ channels, and VoIP telephony — all delivered via physical FTTH/FTTB infrastructure directly to residential and commercial premises across Kampala, Uganda.
          </p>
        </div>

        {/* Global SEO Interlinking Hub */}
        <div className={styles.seoHub}>
          <div>
            <h3 className={styles.seoColHead}>Kampala Coverage Areas</h3>
            <ul className={styles.seoLinks}>
              <li><a href="/internet-in-bukoto" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Bukoto</a></li>
              <li><a href="/internet-in-ntinda" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Ntinda</a></li>
              <li><a href="/internet-in-bugolobi" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Bugolobi</a></li>
              <li><a href="/internet-in-muyenga" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Muyenga</a></li>
              <li><a href="/internet-in-kololo" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Kololo</a></li>
              <li><a href="/internet-in-kiwatule" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Kiwatule</a></li>
              <li><a href="/internet-in-najjera" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Najjera</a></li>
              <li><a href="/internet-in-naguru" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Naguru</a></li>
              <li><a href="/internet-in-kyambogo" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Kyambogo</a></li>
              <li><a href="/fiber-internet-kampala" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>All Kampala Areas</a></li>
            </ul>
          </div>
          <div>
            <h3 className={styles.seoColHead}>Internet Guides &amp; Resources</h3>
            <ul className={styles.seoLinks}>
              <li><a href="/best-internet-uganda" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Best Internet in Uganda</a></li>
              <li><a href="/cheapest-internet-uganda" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Cheapest WiFi Plans</a></li>
              <li><a href="/mtn-vs-airtel-vs-zuku-uganda" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>MTN vs Airtel vs Zuku</a></li>
              <li><a href="/work-from-home-internet-uganda" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Work From Home Internet</a></li>
              <li><a href="/zuku-fiber-prices" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Zuku Price Guide 2026</a></li>
              <li><a href="/business-solutions" className={styles.seoLink} style={{ display: 'inline-flex', padding: '0.25rem 0', minHeight: '44px', alignItems: 'center' }}>Business &amp; Office Fiber</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Zuku Fiber Uganda. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="/privacy" style={{ display: 'inline-flex', minHeight: '44px', alignItems: 'center', padding: '0 0.5rem' }}>Privacy Policy</a>
            <a href="/terms" style={{ display: 'inline-flex', minHeight: '44px', alignItems: 'center', padding: '0 0.5rem' }}>Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
