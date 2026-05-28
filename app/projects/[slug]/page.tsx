import { getProject, getAllProjects } from '@/lib/projects'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { meta, content } = getProject(params.slug)
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <Link href="/" className="text-neutral-500 hover:text-neutral-200 text-sm transition-colors mb-10 inline-block">
        ← back
      </Link>
      <div className="flex items-center gap-3 mb-3">
        <h1 className="text-2xl font-normal text-neutral-100">{meta.title}</h1>
        <Badge variant={meta.status === 'in-progress' ? 'warning' : 'muted'}>{meta.status}</Badge>
      </div>
      <p className="text-neutral-500 text-sm mb-8">{meta.description}</p>
      {meta.tags.length > 0 && (
        <div className="flex gap-2 mb-10 flex-wrap">
          {meta.tags.map((t) => <Badge key={t} variant="muted">{t}</Badge>)}
        </div>
      )}
      <article className="prose prose-invert prose-sm max-w-none prose-neutral">
        <MDXRemote source={content} />
      </article>
    </main>
  )
}
