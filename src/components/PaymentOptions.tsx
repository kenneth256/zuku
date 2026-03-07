import styles from './PaymentOptions.module.css';

const METHODS = [
  { icon: '📱', name: 'MTN Mobile Money', desc: 'Pay with MTN MoMo — instant account activation.' },
  { icon: '📲', name: 'Airtel Money',     desc: 'Airtel Money payments accepted across Uganda.' },
  { icon: '🏦', name: 'Bank Transfer',    desc: 'Direct transfer via any Ugandan commercial bank.' },
  { icon: '🏪', name: 'Walk-in Agents',   desc: 'Pay cash at authorised Zuku agents in Kampala.' },
];

export default function PaymentOptions() {
  return (
    <section className="section" style={{ background: 'var(--bg-2)' }} id="payment">
      <div className="container">
        <div className={styles.header}>
          <span className="label label-green">
            <span className="label-dot" />
            Payment
          </span>
          <h2 className="section-title" style={{ marginTop: '1.25rem' }}>Pay your way.</h2>
          <p className="section-sub">
            Multiple convenient options — mobile money, bank transfer, or walk-in agents across Kampala.
          </p>
        </div>

        <div className={styles.grid}>
          {METHODS.map(m => (
            <div key={m.name} className={`card ${styles.card}`}>
              <span className={styles.icon}>{m.icon}</span>
              <h3 className={styles.name}>{m.name}</h3>
              <p className={styles.desc}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
