import { cn } from '@/lib/utils'

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      'border border-neutral-800 rounded-lg p-5 bg-neutral-900/50 hover:border-neutral-700 transition-colors',
      className
    )}>
      {children}
    </div>
  )
}
