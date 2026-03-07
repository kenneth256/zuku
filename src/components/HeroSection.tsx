'use client';
import { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ── Minimal 3D particle field via vanilla Three.js CDN ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId: number;
    let THREE: typeof import('three') | null = null;

    const init = () => {
      const T = (window as any).THREE;
      if (!T) return;
      THREE = T;

      const renderer = new T.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      const setSize = () => {
        renderer.setSize(canvas.parentElement!.clientWidth, canvas.parentElement!.clientHeight);
        camera.aspect = canvas.parentElement!.clientWidth / canvas.parentElement!.clientHeight;
        camera.updateProjectionMatrix();
      };

      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(55, 1, 0.1, 200);
      camera.position.z = 50;
      setSize();

      /* Particles */
      const count = 1400;
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      const palette = [
        new T.Color('#4fb748'), new T.Color('#00aeef'),
        new T.Color('#fff200'), new T.Color('#2e3192'),
      ];
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 140;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 140;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 140;
        const c = palette[Math.floor(Math.random() * 4)];
        col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      }
      const geo = new T.BufferGeometry();
      geo.setAttribute('position', new T.BufferAttribute(pos, 3));
      geo.setAttribute('color', new T.BufferAttribute(col, 3));
      const points = new T.Points(geo, new T.PointsMaterial({ size: 0.28, vertexColors: true, transparent: true, opacity: 0.55 }));
      scene.add(points);

      /* Rings */
      const mkRing = (r: number, col: number, rx: number, op: number) => {
        const m = new T.Mesh(new T.TorusGeometry(r, 0.07, 6, 80), new T.MeshBasicMaterial({ color: col, transparent: true, opacity: op }));
        m.rotation.x = rx;
        return m;
      };
      const r1 = mkRing(18, 0x4fb748, 0.5, 0.14);
      const r2 = mkRing(26, 0x00aeef, 1.0, 0.09);
      scene.add(r1, r2);

      let mouse = { x: 0, y: 0 };
      const onMouse = (e: MouseEvent) => {
        mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('mousemove', onMouse);
      window.addEventListener('resize', setSize);

      let t = 0;
      const tick = () => {
        animId = requestAnimationFrame(tick);
        t += 0.003;
        points.rotation.y = t * 0.06;
        points.rotation.x = t * 0.02;
        r1.rotation.z = t * 0.18;
        r2.rotation.z = -t * 0.10;
        camera.position.x += (mouse.x * 6 - camera.position.x) * 0.02;
        camera.position.y += (mouse.y * 4 - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      };
      tick();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('mousemove', onMouse);
        window.removeEventListener('resize', setSize);
        renderer.dispose();
      };
    };

    if ((window as any).THREE) {
      return init() ?? undefined;
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.onload = () => init();
      document.head.appendChild(script);
    }
  }, []);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const els = document.querySelectorAll('.animate-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Background 3D canvas */}
      <div className={styles.canvasWrap}>
        <canvas ref={canvasRef} className={styles.canvas} />
      </div>

      {/* Subtle gradient glow */}
      <div className={styles.glow} />

      <div className={`container ${styles.inner}`}>

        {/* Left: copy */}
        <div className={styles.copy}>
          <div className={`label label-green animate-up ${styles.eyebrow}`}>
            <span className="label-dot" />
            Now live in Kampala
          </div>

          <h1 className={`${styles.title} animate-up d1`}>
            Zuku Fiber:<br />
            Best Unlimited Home<br />
            <span className="grad-g">Internet in Uganda.</span>
          </h1>

          <p className={`${styles.sub} animate-up d2`}>
            Free installation. Free router. Free TV channels.
            No contracts, no throttling — just fast fiber for your home.
          </p>

          <div className={`${styles.actions} animate-up d3`}>
            <a href="#plans" className="btn btn-primary">
              View Plans
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="https://wa.me/2560775260196" target="_blank" rel="noopener" className="btn btn-ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Trust row */}
          <div className={`${styles.trust} animate-up d4`}>
            {[
              { icon: '⚡', label: 'Free Install' },
              { icon: '📡', label: 'Free Router' },
              { icon: '📺', label: 'Free TV' },
              { icon: '🔒', label: 'No Contracts' },
            ].map(t => (
              <div key={t.label} className={styles.trustItem}>
                <span className={styles.trustIcon}>{t.icon}</span>
                <span className={styles.trustLabel}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: stat cards */}
        <div className={`${styles.cards} animate-up d3`}>
          <div className={styles.cardGrid}>

            <div className={`${styles.statCard} ${styles.cardLarge}`}>
              <div className={styles.statTop}>
                <span className={styles.statLabel}>Starting from</span>
              </div>
              <div className={styles.statBig}>
                <span className={styles.statCurrency}>UGX</span>
                <span className={styles.statNum}>75,000</span>
              </div>
              <span className={styles.statSub}>/ month · 25 Mbps</span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statLabel}>Uptime SLA</span>
              <div className={`${styles.statMed} text-green`}>99.9%</div>
              <div className={styles.miniBar}>
                <div className={styles.miniBarFill} style={{ width: '99.9%', background: 'var(--green)' }} />
              </div>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statLabel}>Max Speed</span>
              <div className={`${styles.statMed} text-blue`}>1.5 Gbps</div>
              <span className={styles.statSub}>Symmetrical</span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statLabel}>Support</span>
              <div className={`${styles.statMed}`} style={{ color: 'var(--yellow)' }}>24 / 7</div>
              <span className={styles.statSub}>Local Kampala team</span>
            </div>

          </div>

          {/* Floating number badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>+50,000 happy homes</span>
          </div>
        </div>

      </div>

      {/* Bottom fade */}
      <div className={styles.bottomFade} />
    </section>
  );
}
