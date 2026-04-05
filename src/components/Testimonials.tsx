import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    quote: 'Switching to Zuku Fiber transformed our office. Cloud backups that took hours now finish in minutes. The speed is genuinely consistent — even on Friday evenings.',
    name: 'David M.',
    role: 'Operations Manager, Kampala',
    initials: 'DM',
    color: '#4fb748',
    rating: 5,
  },
  {
    quote: 'I work remotely for a UK tech company. The 99.9% uptime is real — my video calls have not dropped once since I switched to the 100 Mbps plan six months ago.',
    name: 'Sarah K.',
    role: 'Software Engineer',
    initials: 'SK',
    color: '#00aeef',
    rating: 5,
  },
  {
    quote: 'Finally, an ISP that doesn\'t throttle in the evening. Three kids gaming and streaming 4K at the same time — flawless. Best internet decision I\'ve made.',
    name: 'Grace A.',
    role: 'Home Subscriber, Naguru',
    initials: 'GA',
    color: '#fff200',
    rating: 5,
  },
  {
    quote: 'Installation was done the same day I called. The technician was professional and explained everything clearly. My 50 Mbps plan handles everything smoothly.',
    name: 'Mukalazi B.',
    role: 'Home Subscriber, Ntinda',
    initials: 'MB',
    color: '#4fb748',
    rating: 5,
  },
  {
    quote: 'After years of fighting MTN data caps, Zuku Fiber is a breath of fresh air. Truly unlimited. I upload my YouTube videos in 3 minutes now.',
    name: 'Christine O.',
    role: 'Content Creator, Kololo',
    initials: 'CO',
    color: '#00aeef',
    rating: 5,
  },
];

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  'name': 'Zuku Fiber Unlimited Internet',
  'description': 'Uganda\'s best unlimited home fiber internet service with zero data caps, 99.9% uptime, and speeds up to 200 Mbps.',
  'brand': { '@type': 'Organization', 'name': 'Zuku Fiber Uganda' },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.8',
    'reviewCount': '50000',
    'bestRating': '5',
    'worstRating': '1',
  },
  'review': TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    'reviewRating': { '@type': 'Rating', 'ratingValue': t.rating, 'bestRating': '5' },
    'author': { '@type': 'Person', 'name': t.name },
    'reviewBody': t.quote,
  })),
};

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <div className="container">
        <div className={styles.header}>
          <span className="label label-green">
            <span className="label-dot" />
            Reviews
          </span>
          <h2 className="section-title" style={{ marginTop: '1.25rem' }}>
            Trusted by 50,000+<br />Ugandan homes.
          </h2>
          {/* Aggregate score badge — visible for scanners */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#fff200', fontSize: '1.25rem' }}>★</span>)}
            </div>
            <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--t0)' }}>4.8 / 5</span>
            <span style={{ color: 'var(--t2)', fontSize: '0.9rem' }}>based on 50,000+ customer reviews</span>
          </div>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`card ${styles.card}`}>
              <div className={styles.stars}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#fff200' }}>★</span>)}
              </div>
              <p className={styles.quote}>&quot;{t.quote}&quot;</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: `${t.color}18`, border: `1px solid ${t.color}30`, color: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
