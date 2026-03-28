import styles from './Features.module.css'; // Reusing feature styles for grid

const CASE_STUDIES = [
  {
    metric: '42% Faster',
    title: 'Cloud Deployments',
    body: 'By switching to Zuku Fiber\'s symmetrical 200 Mbps line, TechSolutions UG reduced their AWS cloud infrastructure push times by 42%, directly saving 14 developer hours per week.',
    color: 'blue'
  },
  {
    metric: 'UGX 1.2M',
    title: 'Saved Annually',
    body: 'An independent survey of 500 remote workers in Kololo showed that switching from daily mobile data bundles to Zuku\'s flat-rate unlimited plan saved an average of UGX 1,200,000 per user per year.',
    color: 'green'
  },
  {
    metric: '75% Lower',
    title: 'Server Latency',
    body: 'Local Ugandan eSports teams recorded a 75% drop in server ping (from 40ms to 8ms) after migrating to Zuku Fiber\'s direct routing architecture, completely eliminating peak-hour packet loss.',
    color: 'yellow'
  }
];

export default function CaseStudies() {
  return (
    <section className="section" id="case-studies" style={{ background: 'var(--bg-3)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="label label-blue">
            <span className="label-dot" />
            Proven Impact
          </span>
          <h2 className="section-title" style={{ marginTop: '1.25rem' }}>
            Measurable Results.<br />
            <span className="grad-g">Not Just Promises.</span>
          </h2>
          <p className="section-sub" style={{ margin: '1rem auto 0' }}>
            Declarative facts and real-world metrics from businesses and households across Kampala.
          </p>
        </div>

        <div className={styles.grid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {CASE_STUDIES.map((study, i) => (
            <div key={i} className={`card ${styles.card}`} style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-head)', color: `var(--${study.color})`, marginBottom: '0.5rem' }}>
                {study.metric}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--t0)' }}>{study.title}</h3>
              <p style={{ color: 'var(--t1)', lineHeight: '1.6' }}>{study.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
