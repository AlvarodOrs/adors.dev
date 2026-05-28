export type ProjectMeta = {
  slug: string
  title: string
  description: string
  status: 'in-progress' | 'complete'
  tags: string[]
  date: string
}

export type Project = {
  meta: ProjectMeta
  content: string
}

const projects: Project[] = [
  {
    meta: {
      slug: 'quant-trading-research',
      title: 'Quantitative Trading Research',
      description: 'A backtesting framework for evaluating quantitative trading strategies on public market data.',
      status: 'in-progress',
      tags: ['python', 'finance', 'data'],
      date: '2025-05-01',
    },
    content: `
## Overview

Building a backtesting framework for evaluating quantitative trading strategies on public market data (Yahoo Finance). The project covers data ingestion, strategy evaluation, and performance metrics.

## Scope

- **Data handling** — loading, cleaning, and structuring time series market data
- **Strategy implementation** — baseline strategies including momentum and moving average crossovers
- **Evaluation** — PnL computation, returns, volatility, and drawdown metrics

## Status

In progress. No live trading involved.
    `.trim(),
  },
]

export function getAllProjects(): ProjectMeta[] {
  return projects
    .map((p) => p.meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getProject(slug: string): Project {
  const project = projects.find((p) => p.meta.slug === slug)
  if (!project) throw new Error(`Project not found: ${slug}`)
  return project
}