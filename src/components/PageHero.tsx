import Link from 'next/link';

interface Badge {
  text: string;
  color?: 'green' | 'blue';
}

interface Stat {
  val: string;
  label: string;
  color?: string;
}

interface Breadcrumb {
  label: string;
  href: string;
}

interface CTA {
  label: string;
  href: string;
  primary?: boolean;
}

interface PageHeroProps {
  badge?: Badge;
  breadcrumbs?: Breadcrumb[];
  title: React.ReactNode;
  subtitle?: string;
  ctas?: CTA[];
  stats?: Stat[];
  highlights?: string[];
}

export default function PageHero({
  badge,
  breadcrumbs,
  title,
  subtitle,
  ctas = [],
  stats = [],
  highlights = [],
}: PageHeroProps) {
  const badgeClass = badge?.color === 'blue' ? 'label label-blue' : 'label label-green';

  return (
    <section
      style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid background pattern — matches homepage aesthetic */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(79,183,72,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,183,72,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />
      {/* Radial glow — matches homepage */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(79,183,72,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--t2)', marginBottom: '1.5rem', flexWrap: 'wrap' }}
          >
            {breadcrumbs.map((b, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {i > 0 && <span aria-hidden="true" style={{ color: 'var(--t3)' }}>/</span>}
                <Link href={b.href} style={{ color: i === breadcrumbs.length - 1 ? 'var(--t1)' : 'var(--green)', transition: 'color 0.2s' }}>
                  {b.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        {/* Badge / Eyebrow */}
        {badge && (
          <div style={{ marginBottom: '1.75rem' }}>
            <span className={badgeClass}>
              <span className="label-dot" />
              {badge.text}
            </span>
          </div>
        )}

        {/* Title */}
        <h1
          className="section-title animate-up d1"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '860px', margin: '0 auto 1.5rem' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="section-sub animate-up d2"
            style={{ margin: '0 auto 2.5rem', maxWidth: '600px', fontSize: '1.0625rem', lineHeight: '1.7' }}
          >
            {subtitle}
          </p>
        )}

        {/* CTAs */}
        {ctas.length > 0 && (
          <div
            className="animate-up d3"
            style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: highlights.length || stats.length ? '3.5rem' : '0' }}
          >
            {ctas.map((cta, i) => (
              <Link
                key={i}
                href={cta.href}
                className={cta.primary ? 'btn btn-primary' : 'btn btn-ghost'}
                target={cta.href.startsWith('http') ? '_blank' : undefined}
                rel={cta.href.startsWith('http') ? 'noopener' : undefined}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}

        {/* Highlights row */}
        {highlights.length > 0 && (
          <div
            className="animate-up d4"
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--t2)', fontSize: '0.85rem', marginBottom: stats.length ? '3.5rem' : '0' }}
          >
            {highlights.map((h, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>{h}</span>
            ))}
          </div>
        )}

        {/* Stats grid */}
        {stats.length > 0 && (
          <div
            className="animate-up d5"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(160px, 1fr))`,
              gap: '1.25rem',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem 1rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    color: s.color ?? 'var(--green)',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                  }}
                >
                  {s.val}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--t2)', lineHeight: '1.4' }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
