'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { ProjectMeta } from '@/lib/projects'

const TABS = ['finance', 'engineering', 'utils'] as const
type Tab = typeof TABS[number]

export function Projects({ projects }: { projects: ProjectMeta[] }) {
  const [active, setActive] = useState<Tab>('finance')

  const filtered = projects.filter((p) => p.category === active)

  return (
    <section className="pb-16">
      <h2 className="text-xs text-neutral-500 tracking-widest uppercase mb-6">Projects</h2>

      <div className="flex gap-1 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-3 py-1 text-xs rounded-md transition-colors capitalize ${
              active === tab
                ? 'bg-neutral-800 text-neutral-100'
                : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-3">
        {filtered.length === 0 && (
          <p className="text-neutral-600 text-xs">No projects here yet.</p>
        )}
        {filtered.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <Card>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-neutral-200 text-sm mb-1">{p.title}</p>
                  <p className="text-neutral-500 text-xs leading-relaxed">{p.description}</p>
                </div>
                <Badge variant={p.status === 'in-progress' ? 'warning' : 'muted'}>
                  {p.status}
                </Badge>
              </div>
              {p.tags.length > 0 && (
                <div className="flex gap-2 mt-3 flex-wrap">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="muted">{t}</Badge>
                  ))}
                </div>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}