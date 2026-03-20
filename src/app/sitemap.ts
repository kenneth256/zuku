import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zukufiberuganda.vercel.app',
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://zukufiberuganda.vercel.app/contact',
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://zukufiberuganda.vercel.app/privacy',
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: 'https://zukufiberuganda.vercel.app/terms',
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ]
}