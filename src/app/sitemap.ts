import type { MetadataRoute } from 'next'

const BASE = 'https://zukufiberuganda.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Homepage ──────────────────────────────────────────────────────────
    {
      url: `${BASE}`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── Core Commercial Pages ─────────────────────────────────────────────
    {
      url: `${BASE}/zuku-fiber-prices`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'weekly',
      priority: 0.98,
    },
    {
      url: `${BASE}/best-internet-uganda`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/cheapest-internet-uganda`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'weekly',
      priority: 0.93,
    },
    {
      url: `${BASE}/fiber-internet-kampala`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${BASE}/mtn-vs-airtel-vs-zuku-uganda`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.90,
    },

    // ── Use-Case Pages ────────────────────────────────────────────────────
    {
      url: `${BASE}/work-from-home-internet-uganda`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE}/business-solutions`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.87,
    },

    // ── Neighbourhood / Local SEO Pages ───────────────────────────────────
    {
      url: `${BASE}/internet-in-ntinda`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-kololo`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-naguru`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-bugolobi`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-muyenga`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-bukoto`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-kiwatule`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-najjera`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-kyambogo`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },

    // ── Company Pages ─────────────────────────────────────────────────────
    {
      url: `${BASE}/about`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/contact`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.72,
    },

    // ── Legal Pages ───────────────────────────────────────────────────────
    {
      url: `${BASE}/privacy`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
