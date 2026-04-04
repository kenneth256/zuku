import type { MetadataRoute } from "next";

const BASE_URL = "https://zukufiberuganda.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core Pages
  const corePages = [
    { url: `${BASE_URL}/zuku-fiber-prices`, changeFrequency: "weekly" as const, priority: 0.98 },
    { url: `${BASE_URL}/best-internet-uganda`, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${BASE_URL}/cheapest-internet-uganda`, changeFrequency: "weekly" as const, priority: 0.93 },
    { url: `${BASE_URL}/fiber-internet-kampala`, changeFrequency: "weekly" as const, priority: 0.92 },
  ];

  // Articles & Comparisons
  const articlePages = [
    { url: `${BASE_URL}/mtn-vs-airtel-vs-zuku-uganda`, changeFrequency: "monthly" as const, priority: 0.90 },
    { url: `${BASE_URL}/work-from-home-internet-uganda`, changeFrequency: "monthly" as const, priority: 0.88 },
    { url: `${BASE_URL}/business-solutions`, changeFrequency: "monthly" as const, priority: 0.87 },
  ];

  // Specific locations/neighborhoods
  const neighborhoods = [
    'ntinda', 'kololo', 'naguru', 'bugolobi', 'muyenga', 
    'bukoto', 'kiwatule', 'najjera', 'kyambogo'
  ];

  const neighborhoodPages = neighborhoods.map(location => ({
    url: `${BASE_URL}/internet-in-${location}`,
    changeFrequency: "monthly" as const,
    priority: 0.82
  }));

  // Static/Company Pages
  const staticPages = [
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.72 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly" as const, priority: 0.30 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly" as const, priority: 0.30 },
  ];

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...corePages.map(page => ({ ...page, lastModified: now })),
    ...articlePages.map(page => ({ ...page, lastModified: now })),
    ...neighborhoodPages.map(page => ({ ...page, lastModified: now })),
    ...staticPages.map(page => ({ ...page, lastModified: now })),
  ];
}
