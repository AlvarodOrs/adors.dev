import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/projects')

export type ProjectMeta = {
  slug: string
  title: string
  description: string
  status: 'planned' | 'in-progress' | 'completed' | 'live'
  category: 'finance' | 'engineering' | 'utils'
  tags: string[]
  date: string
  repo?: string
}

export type Project = {
  meta: ProjectMeta
  content: string
}

function parseProject(filename: string): Project {
  const slug = filename.replace(/\.mdx$/, '')
  const filePath = path.join(CONTENT_DIR, filename)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      status: data.status,
      category: data.category,
      tags: data.tags ?? [],
      date: data.date,
      repo: data.repo,
    },
    content: content.trim(),
  }
}

function getAllProjectFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))
}

export function getAllProjects(): ProjectMeta[] {
  return getAllProjectFiles()
    .map((filename) => parseProject(filename).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getProject(slug: string): Project {
  const filename = `${slug}.mdx`
  const filePath = path.join(CONTENT_DIR, filename)
  if (!fs.existsSync(filePath)) throw new Error(`Project not found: ${slug}`)
  return parseProject(filename)
}