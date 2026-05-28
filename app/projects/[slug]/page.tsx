import { getProject, getAllProjects } from '@/lib/projects'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { meta, content } = getProject(slug)
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <Link href="/" className="text-neutral-500 hover:text-neutral-200 text-sm transition-colors mb-10 inline-block">
        ← back
      </Link>
      <div className="flex items-center gap-3 mb-3">
        <h1 className="text-2xl font-normal text-neutral-100">{meta.title}</h1>
        <Badge variant={meta.status === 'in-progress' ? 'warning' : 'muted'}>{meta.status}</Badge>
      </div>
      <p className="text-neutral-500 text-sm mb-4">{meta.description}</p>
      {meta.repo && (
        <a href={meta.repo} target="_blank" rel="noopener noreferrer"
          className="text-neutral-500 hover:text-neutral-200 text-sm transition-colors inline-block mb-8">
          github ↗
        </a>
      )}
      {meta.tags.length > 0 && (
        <div className="flex gap-2 mb-10 flex-wrap">
          {meta.tags.map((t) => <Badge key={t} variant="muted">{t}</Badge>)}
        </div>
      )}
      <article
        className="prose prose-invert prose-sm max-w-none prose-neutral"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
      />
    </main>
  )
}

function renderMarkdown(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hul])/gm, '')
    .replace(/(<\/h[23]>|<\/ul>)\s*<\/p><p>/g, '$1')
    .trim()
}