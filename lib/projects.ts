import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDir = path.join(process.cwd(), 'content/projects')

export type ProjectMeta = {
  slug: string
  title: string
  description: string
  status: 'in-progress' | 'complete'
  tags: string[]
  date: string
}

export function getAllProjects(): ProjectMeta[] {
  const files = fs.readdirSync(projectsDir)
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(projectsDir, f), 'utf8')
      const { data } = matter(raw)
      return { slug, ...data } as ProjectMeta
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getProject(slug: string) {
  const filePath = path.join(projectsDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { meta: { slug, ...data } as ProjectMeta, content }
}
