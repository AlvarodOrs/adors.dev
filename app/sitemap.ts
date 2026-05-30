import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://adors.dev',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://adors.dev/projects/bayesian-financial-forecasting',
      lastModified: new Date(),
      priority: 0.9,
    },
  ]
}