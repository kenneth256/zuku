import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://zukufiberuganda.vercel.app', lastModified: new Date('2026-03-30'), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://zukufiberuganda.vercel.app/about', lastModified: new Date('2026-03-30'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://zukufiberuganda.vercel.app/business-solutions', lastModified: new Date('2026-03-30'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://zukufiberuganda.vercel.app/best-internet-uganda', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.95 },
    { url: 'https://zukufiberuganda.vercel.app/mtn-vs-airtel-vs-zuku-uganda', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://zukufiberuganda.vercel.app/cheapest-internet-uganda', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://zukufiberuganda.vercel.app/fiber-internet-kampala', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://zukufiberuganda.vercel.app/work-from-home-internet-uganda', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://zukufiberuganda.vercel.app/internet-in-ntinda', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://zukufiberuganda.vercel.app/internet-in-kololo', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://zukufiberuganda.vercel.app/internet-in-naguru', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://zukufiberuganda.vercel.app/internet-in-bugolobi', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://zukufiberuganda.vercel.app/contact', lastModified: new Date('2026-03-26'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://zukufiberuganda.vercel.app/privacy', lastModified: new Date('2026-03-26'), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://zukufiberuganda.vercel.app/terms', lastModified: new Date('2026-03-26'), changeFrequency: 'yearly', priority: 0.3 },
  ]
}

