import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    quote: 'Switching to Zuku Fiber transformed our office. Cloud backups that took hours now finish in minutes. The speed is genuinely consistent — even on Friday evenings.',
    name: 'David M.',
    role: 'Operations Manager, Kampala',
    initials: 'DM',
    color: '#4fb748',
  },
  {
    quote: 'I work remotely for a UK tech company. The 99.9% uptime is real — my video calls have not dropped once since I switched to the 100 Mbps plan six months ago.',
    name: 'Sarah K.',
    role: 'Software Engineer',
    initials: 'SK',
    color: '#00aeef',
  },
  {
    quote: 'Finally, an ISP that doesn\'t throttle in the evening. Three kids gaming and streaming 4K at the same time — flawless. Best internet decision I\'ve made.',
    name: 'Grace A.',
    role: 'Home Subscriber, Naguru',
    initials: 'GA',
    color: '#fff200',
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <span className="label label-green">
            <span className="label-dot" />
            Reviews
          </span>
          <h2 className="section-title" style={{ marginTop: '1.25rem' }}>
            Trusted by 50,000+<br />Ugandan homes.
          </h2>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`card ${styles.card}`}>
              <div className={styles.stars}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#fff200' }}>★</span>)}
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
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
