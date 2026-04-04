import type { MetadataRoute } from 'next'

const BASE = 'https://zukufiberuganda.vercel.app'

/** Use full ISO-8601 UTC timestamps so Google Search Console never sees
 *  a date shifted backward by the server's local timezone offset.     */
const d = (date: string) => new Date(`${date}T00:00:00.000Z`)

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Homepage ──────────────────────────────────────────────────────────
    {
      url: BASE,
      lastModified: d('2026-04-05'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── Core Commercial Pages ─────────────────────────────────────────────
    {
      url: `${BASE}/zuku-fiber-prices`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'weekly',
      priority: 0.98,
    },
    {
      url: `${BASE}/best-internet-uganda`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/cheapest-internet-uganda`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'weekly',
      priority: 0.93,
    },
    {
      url: `${BASE}/fiber-internet-kampala`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${BASE}/mtn-vs-airtel-vs-zuku-uganda`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.90,
    },

    // ── Use-Case Pages ────────────────────────────────────────────────────
    {
      url: `${BASE}/work-from-home-internet-uganda`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE}/business-solutions`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.87,
    },

    // ── Neighbourhood / Local SEO Pages ───────────────────────────────────
    {
      url: `${BASE}/internet-in-ntinda`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-kololo`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-naguru`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-bugolobi`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-muyenga`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-bukoto`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-kiwatule`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-najjera`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/internet-in-kyambogo`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },

    // ── Company Pages ─────────────────────────────────────────────────────
    {
      url: `${BASE}/about`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/contact`,
      lastModified: d('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.72,
    },

    // ── Legal Pages ───────────────────────────────────────────────────────
    {
      url: `${BASE}/privacy`,
      lastModified: d('2026-03-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified: d('2026-03-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
