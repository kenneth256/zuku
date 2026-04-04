import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zukufiberuganda.vercel.app'
  const now = new Date()

  return [
    // ── Homepage ──────────────────────────────────────────────────────────
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── Core Commercial Pages ─────────────────────────────────────────────
    {
      url: `${baseUrl}/zuku-fiber-prices`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/best-internet-uganda`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/cheapest-internet-uganda`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.93,
    },
    {
      url: `${baseUrl}/fiber-internet-kampala`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/mtn-vs-airtel-vs-zuku-uganda`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.90,
    },

    // ── Use-Case Pages ────────────────────────────────────────────────────
    {
      url: `${baseUrl}/work-from-home-internet-uganda`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/business-solutions`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.87,
    },

    // ── Neighbourhood / Local SEO Pages ───────────────────────────────────
    { url: `${baseUrl}/internet-in-ntinda`, lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${baseUrl}/internet-in-kololo`, lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${baseUrl}/internet-in-naguru`, lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${baseUrl}/internet-in-bugolobi`, lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${baseUrl}/internet-in-muyenga`, lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${baseUrl}/internet-in-bukoto`, lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${baseUrl}/internet-in-kiwatule`, lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${baseUrl}/internet-in-najjera`, lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${baseUrl}/internet-in-kyambogo`, lastModified: now, changeFrequency: 'monthly', priority: 0.82 },

    // ── Company Pages ─────────────────────────────────────────────────────
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.72,
    },

    // ── Legal Pages ───────────────────────────────────────────────────────
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
