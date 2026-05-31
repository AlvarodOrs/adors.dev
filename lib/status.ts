import type { BadgeVariant } from '@/components/ui/badge'

export type ProjectStatus =
  | 'planned'
  | 'in-progress'
  | 'completed'
  | 'live'

export const statusVariant: Record<ProjectStatus, BadgeVariant> = {
  planned: 'muted',
  'in-progress': 'warning',
  completed: 'success',
  live: 'deployed',
}