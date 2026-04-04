import { NextResponse } from 'next/server'

const BASE = 'https://zukufiberuganda.vercel.app'

const pages = [
  // ── Homepage ──────────────────────────────────────────────────────────
  { loc: BASE, lastmod: '2026-04-05', changefreq: 'weekly', priority: '1.0' },

  // ── Core Commercial Pages ─────────────────────────────────────────────
  { loc: `${BASE}/zuku-fiber-prices`,           lastmod: '2026-04-05', changefreq: 'weekly',  priority: '0.98' },
  { loc: `${BASE}/best-internet-uganda`,        lastmod: '2026-04-05', changefreq: 'weekly',  priority: '0.95' },
  { loc: `${BASE}/cheapest-internet-uganda`,    lastmod: '2026-04-05', changefreq: 'weekly',  priority: '0.93' },
  { loc: `${BASE}/fiber-internet-kampala`,      lastmod: '2026-04-05', changefreq: 'weekly',  priority: '0.92' },
  { loc: `${BASE}/mtn-vs-airtel-vs-zuku-uganda`, lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.90' },

  // ── Use-Case Pages ────────────────────────────────────────────────────
  { loc: `${BASE}/work-from-home-internet-uganda`, lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.88' },
  { loc: `${BASE}/business-solutions`,          lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.87' },

  // ── Neighbourhood / Local SEO Pages ───────────────────────────────────
  { loc: `${BASE}/internet-in-ntinda`,   lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.82' },
  { loc: `${BASE}/internet-in-kololo`,   lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.82' },
  { loc: `${BASE}/internet-in-naguru`,   lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.82' },
  { loc: `${BASE}/internet-in-bugolobi`, lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.82' },
  { loc: `${BASE}/internet-in-muyenga`,  lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.82' },
  { loc: `${BASE}/internet-in-bukoto`,   lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.82' },
  { loc: `${BASE}/internet-in-kiwatule`, lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.82' },
  { loc: `${BASE}/internet-in-najjera`,  lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.82' },
  { loc: `${BASE}/internet-in-kyambogo`, lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.82' },

  // ── Company Pages ─────────────────────────────────────────────────────
  { loc: `${BASE}/about`,   lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.75' },
  { loc: `${BASE}/contact`, lastmod: '2026-04-05', changefreq: 'monthly', priority: '0.72' },

  // ── Legal Pages ───────────────────────────────────────────────────────
  { loc: `${BASE}/privacy`, lastmod: '2026-03-26', changefreq: 'yearly', priority: '0.3' },
  { loc: `${BASE}/terms`,   lastmod: '2026-03-26', changefreq: 'yearly', priority: '0.3' },
]

function buildXml(): string {
  const entries = pages
    .map(
      (p) => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`
}

export async function GET() {
  const xml = buildXml()

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Tell every proxy/CDN layer NOT to compress this response.
      // Vercel's edge respects this when set on the Response itself.
      'Content-Encoding': 'identity',
      // Prevent stale caches from serving an old sitemap to GSC
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
