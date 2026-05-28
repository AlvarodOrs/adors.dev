import { cn } from '@/lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost'
  asChild?: boolean
}

export function Button({ children, variant = 'default', className, ...props }: ButtonProps) {
  return (
    <button className={cn(
      'inline-flex items-center gap-2 text-sm px-4 py-2 rounded transition-colors font-mono',
      variant === 'default' && 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700 border border-neutral-700',
      variant === 'ghost' && 'text-neutral-400 hover:text-neutral-200',
      className
    )} {...props}>
      {children}
    </button>
  )
}
