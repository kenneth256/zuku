'use client';
import { useState } from 'react';
import styles from './Plans.module.css';

type Cycle = '1 Month' | '3 Months' | '6 Months' | '12 Months';

const CYCLES: Cycle[] = ['1 Month', '3 Months', '6 Months', '12 Months'];

const PLANS = {
  '1 Month': [
    { speed: 25, price: '75,000', popular: false, desc: 'Solo users, browsing & social media.' },
    { speed: 50, price: '89,400', popular: true, desc: 'Families, HD streaming & remote work.' },
    { speed: 100, price: '110,000', popular: false, desc: 'Power users, gaming & smart homes.' },
    { speed: 200, price: '199,000', popular: false, desc: 'Heavy workloads & content creators.' },
    { speed: 'Enterprise', price: 'Custom', popular: false, desc: 'Dedicated bandwidth & custom solutions.' },
  ],
  '3 Months': [
    { speed: 25, price: '216,000', popular: false, desc: 'Solo users, browsing & social media.' },
    { speed: 50, price: '257,500', popular: true, desc: 'Families, HD streaming & remote work.' },
    { speed: 100, price: '316,800', popular: false, desc: 'Power users, gaming & smart homes.' },
    { speed: 200, price: '573,000', popular: false, desc: 'Heavy workloads & content creators.' },
    { speed: 'Enterprise', price: 'Custom', popular: false, desc: 'Dedicated bandwidth & custom solutions.' },
  ],
  '6 Months': [
    { speed: 25, price: '423,000', popular: false, desc: 'Solo users, browsing & social media.' },
    { speed: 50, price: '504,000', popular: true, desc: 'Families, HD streaming & remote work.' },
    { speed: 100, price: '620,400', popular: false, desc: 'Power users, gaming & smart homes.' },
    { speed: 200, price: '1,122,000', popular: false, desc: 'Heavy workloads & content creators.' },
    { speed: 'Enterprise', price: 'Custom', popular: false, desc: 'Dedicated bandwidth & custom solutions.' },
  ],
  '12 Months': [
    { speed: 25, price: '828,000', popular: false, desc: 'Solo users, browsing & social media.' },
    { speed: 50, price: '987,000', popular: true, desc: 'Families, HD streaming & remote work.' },
    { speed: 100, price: '1,214,400', popular: false, desc: 'Power users, gaming & smart homes.' },
    { speed: 200, price: '2,197,000', popular: false, desc: 'Heavy workloads & content creators.' },
    { speed: 'Enterprise', price: 'Custom', popular: false, desc: 'Dedicated bandwidth & custom solutions.' },
  ],
};

const FEATURES = [
  'Unlimited data — no caps',
  'Free professional installation',
  'Free Wi-Fi router',
  '100+ TV channels',
  '24/7 local support',
];

function CheckIcon() {
  return (
    <div className="check">
      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="2,6 5,9 10,3" />
      </svg>
    </div>
  );
}

export default function Plans() {
  const [cycle, setCycle] = useState<Cycle>('1 Month');

  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': PLANS[cycle].map((plan, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Service',
        'name': typeof plan.speed === 'number' ? `${plan.speed} Mbps Fiber Internet` : 'Enterprise Fiber Solutions',
        'description': plan.desc,
        'provider': {
          '@type': 'Organization',
          'name': 'Zuku Fiber Uganda'
        },
        'offers': {
          '@type': 'Offer',
          'price': plan.price.replace(/,/g, ''),
          'priceCurrency': 'UGX'
        }
      }
    }))
  };

  const handleSelect = (speed: number | string, price: string) => {
    const isEnterprise = speed === 'Enterprise';
    const msg = encodeURIComponent(
      isEnterprise
        ? `Hi Zuku Fiber! I'm interested in an Enterprise plan. Please provide more details and a quote.`
        : `Hi Zuku Fiber! I'd like the ${speed} Mbps plan — UGX ${price} (${cycle}). Please guide me on next steps.`
    );
    window.open(`https://wa.me/2560775260196?text=${msg}`, '_blank');
  };

  return (
    <section className="section" id="plans" style={{ background: 'var(--bg-2)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <span className="label label-green">
            <span className="label-dot" />
            Pricing
          </span>
          <h2 className="section-title" style={{ marginTop: '1.25rem' }}>
            Simple, honest pricing.
          </h2>
          <p className="section-sub">
            No hidden fees. No contracts. All plans include free installation,
            free router and 100+ TV channels from day one.
          </p>

          {/* Billing toggle */}
          <div className={styles.toggle}>
            {CYCLES.map(c => (
              <button
                key={c}
                className={`${styles.toggleBtn} ${cycle === c ? styles.active : ''}`}
                onClick={() => setCycle(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {PLANS[cycle].map(plan => (
            <div
              key={plan.speed}
              className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && (
                <div className={styles.popularTag}>Most Popular</div>
              )}

              <div className={styles.speed}>
                <span className={styles.speedNum}>{plan.speed}</span>
                {typeof plan.speed === 'number' && <span className={styles.speedUnit}>Mbps</span>}
              </div>

              <p className={styles.desc}>{plan.desc}</p>

              <div className={styles.price}>
                {typeof plan.speed === 'number' ? (
                  <>
                    <span className={styles.currency}>UGX</span>
                    <span className={styles.amount}>{plan.price}</span>
                    <span className={styles.period}>/{cycle === '1 Month' ? 'mo' : cycle.toLowerCase()}</span>
                  </>
                ) : (
                  <span className={styles.amount}>Contact for Quote</span>
                )}
              </div>

              <ul className={styles.features}>
                {FEATURES.map(f => (
                  <li key={f}>
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`${styles.planBtn} ${plan.popular ? styles.planBtnPrimary : styles.planBtnGhost}`}
                onClick={() => handleSelect(plan.speed, plan.price)}
              >
                {typeof plan.speed === 'number' ? `Get ${plan.speed} Mbps` : 'Talk to Sales'}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          ))}
        </div>

        {/* Free bundle note */}
        <div className={styles.freeNote}>
          <span>🎁</span>
          <span>Every plan includes <strong>free installation + free router + 100+ TV channels</strong>. Optional TV Add-ons: <strong>UGX 8,300/mo</strong>.</span>
        </div>

      </div>
    </section>
  );
}
