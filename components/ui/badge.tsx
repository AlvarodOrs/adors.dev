import { cn } from '@/lib/utils'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'default' | 'muted' | 'warning'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-block text-xs px-2 py-0.5 rounded font-mono tracking-wide',
      variant === 'default' && 'bg-neutral-800 text-neutral-300 border border-neutral-700',
      variant === 'muted' && 'bg-transparent text-neutral-500 border border-neutral-800',
      variant === 'warning' && 'bg-amber-950 text-amber-400 border border-amber-900',
      className
    )}>
      {children}
    </span>
  )
}
