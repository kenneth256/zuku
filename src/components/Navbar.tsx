'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#features',     label: 'Features'  },
  { href: '#plans',        label: 'Plans'      },
  { href: '#tv',           label: 'TV'         },
  { href: '#testimonials', label: 'Reviews'    },
  { href: '#faq',          label: 'FAQ'        },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        <a href="/" className={styles.logo} style={{ display: 'inline-flex', minHeight: '44px', minWidth: '44px', alignItems: 'center' }}>
          <span className={styles.logoMark} />
          ZUKU<span className={styles.logoAccent}>FIBER</span>
        </a>

        <nav className={styles.nav}>
          <ul className={styles.links}>
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} className={styles.link} style={{ display: 'inline-flex', minHeight: '44px', minWidth: '44px', alignItems: 'center', padding: '0 0.5rem' }}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.cta}>
          <a href="tel:+2560775260196" className={styles.phone} style={{ display: 'inline-flex', minHeight: '44px', alignItems: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            0775 260 196
          </a>
          <a href="#plans" className="btn btn-primary btn-sm">Get Started</a>
        </div>

      </div>
    </header>
  );
}
