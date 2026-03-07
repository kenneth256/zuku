import styles from './TVLineup.module.css';

const CHANNELS = [
  'BBC World','CNN','Al Jazeera','Bloomberg',
  'SuperSport 1','SuperSport 2','NTV Uganda','Bukedde TV',
  'Disney Channel','Nickelodeon','Cartoon Network','Discovery',
  'National Geo','History CH','MTV','Comedy Central',
  'Fox News','DW News','France 24','CGTN',
  '+ 80 more','','','',
];

export default function TVLineup() {
  return (
    <section className="section" id="tv">
      <div className="container">
        <div className={styles.inner}>

          {/* Left */}
          <div className={styles.copy}>
            <span className="label label-blue">
              <span className="label-dot" />
              Digital TV
            </span>
            <h2 className="section-title" style={{ marginTop: '1.25rem' }}>
              100+ channels.<br />
              <span className="text-blue">Zero extra cost.</span>
            </h2>
            <p className="section-sub">
              Every Zuku Fiber plan bundles our full digital TV package —
              news, sports, kids, and entertainment — included free for as long as you're a subscriber.
            </p>
            <ul className={styles.perks}>
              {['HD & 4K quality','Live & on-demand','Pause & rewind','Multi-device'].map(p => (
                <li key={p}>
                  <div className="check">
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: channel grid */}
          <div className={styles.channels}>
            <div className={styles.channelGrid}>
              {CHANNELS.slice(0, 20).map((ch, i) => (
                <div key={i} className={`${styles.chip} ${ch.startsWith('+') ? styles.moreChip : ''}`}>
                  {ch}
                </div>
              ))}
              <div className={`${styles.chip} ${styles.moreChip}`}>+ 80 more</div>
            </div>
            <div className={styles.tvNote}>
              <span className={styles.tvNoteDot} />
              Included free in every plan
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
