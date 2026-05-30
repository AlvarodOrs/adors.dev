import { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/projects'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects()

  return [
    {
      url: 'https://adors.dev',
      lastModified: new Date(),
      priority: 1,
    },
    ...projects.map((p) => ({
      url: `https://adors.dev/projects/${p.slug}`,
      lastModified: new Date(p.date),
      priority: 0.9,
    })),
  ]
}