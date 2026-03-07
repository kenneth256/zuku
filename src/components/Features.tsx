'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './Features.module.css';

const FEATURES = [
  {
    size: 'large',
    icon: '/assets/3d/speed.png',
    color: 'green',
    title: 'Zero Throttling. Ever.',
    body: 'Your 100 Mbps plan delivers 100 Mbps at 9 PM on a Friday. We never artificially restrict bandwidth during peak hours. What you pay for is what you always get.',
  },
  {
    size: 'medium',
    icon: '/assets/3d/symmetry.png',
    color: 'blue',
    title: 'True Symmetrical Speeds',
    body: 'Upload as fast as you download. Ideal for video calls, cloud backups, and content creators.',
  },
  {
    size: 'medium',
    icon: '/assets/3d/support.png',
    color: 'yellow',
    title: '24/7 Local Support',
    body: 'Kampala-based engineers — not a call center overseas. Fast response, every time.',
  },
  {
    size: 'small',
    icon: null,
    color: 'purple',
    title: '5ms Latency',
    body: 'Ultra-low ping for gaming, trading, and live video.',
  },
  {
    size: 'small',
    icon: null,
    color: 'red',
    title: 'Network Security',
    body: 'DDoS protection and encrypted DNS built in at the network level.',
  },
];

export default function Features() {
  useEffect(() => {
    const els = document.querySelectorAll('.animate-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="features">
      <div className="container">

        <div className={`${styles.header} animate-up`}>
          <span className="label label-green">
            <span className="label-dot" />
            Why Zuku Fiber
          </span>
          <h2 className="section-title" style={{ marginTop: '1.25rem' }}>
            Built for how<br />Uganda lives online.
          </h2>
          <p className="section-sub">
            Every part of our network is engineered for reliability, speed, and the real needs of Kampala households and businesses.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`card ${styles.card} ${styles[f.size]} ${styles[`color_${f.color}`]} animate-up d${i + 1}`}
            >
              {f.icon && (
                <div className={styles.img3d}>
                  <Image src={f.icon} alt={f.title} width={64} height={64} />
                </div>
              )}
              {!f.icon && (
                <div className={`${styles.iconDot} ${styles[`dot_${f.color}`]}`} />
              )}
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardBody}>{f.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
