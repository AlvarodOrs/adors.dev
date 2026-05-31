import { cn } from '@/lib/utils'

export type BadgeVariant =
  | 'muted'
  | 'warning'
  | 'success'
  | 'deployed'

type BadgeProps = {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

export function Badge({ children, variant = 'muted', className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-block text-xs px-2 py-0.5 rounded font-mono tracking-wide',
      variant === 'muted' &&
        'bg-transparent text-neutral-500 border border-neutral-800',

      variant === 'warning' &&
        'bg-amber-950 text-amber-400 border border-amber-900',

      variant === 'success' &&
        'bg-violet-950 text-violet-400 border border-violet-900',

      variant === 'deployed' &&
        'bg-emerald-950 text-emerald-400 border border-emerald-900',
      className
    )}>
      {children}
    </span>
  )
}
