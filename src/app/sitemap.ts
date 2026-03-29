import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.zukufiber.co.ug', lastModified: new Date('2026-03-30'), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://www.zukufiber.co.ug/about', lastModified: new Date('2026-03-30'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.zukufiber.co.ug/business-solutions', lastModified: new Date('2026-03-30'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.zukufiber.co.ug/best-internet-uganda', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.95 },
    { url: 'https://www.zukufiber.co.ug/mtn-vs-airtel-vs-zuku-uganda', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.zukufiber.co.ug/cheapest-internet-uganda', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.zukufiber.co.ug/fiber-internet-kampala', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.zukufiber.co.ug/work-from-home-internet-uganda', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://www.zukufiber.co.ug/internet-in-ntinda', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.zukufiber.co.ug/internet-in-kololo', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.zukufiber.co.ug/internet-in-naguru', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.zukufiber.co.ug/internet-in-bugolobi', lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.zukufiber.co.ug/contact', lastModified: new Date('2026-03-26'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.zukufiber.co.ug/privacy', lastModified: new Date('2026-03-26'), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.zukufiber.co.ug/terms', lastModified: new Date('2026-03-26'), changeFrequency: 'yearly', priority: 0.3 },
  ]
}

