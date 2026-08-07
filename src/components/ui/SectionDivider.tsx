import { cn } from '@/utils/cn'

type SectionDividerProps = {
  color?: 'cream' | 'butter' | 'sand' | 'cocoa'
  flip?: boolean
  className?: string
}

const fillClasses: Record<'cream' | 'butter' | 'sand' | 'cocoa', string> = {
  cream: 'fill-cream',
  butter: 'fill-butter',
  sand: 'fill-sand',
  cocoa: 'fill-cocoa',
}

export function SectionDivider({ color = 'cream', flip = false, className = '' }: SectionDividerProps) {
  return (
    <div className={cn('-mb-px w-full overflow-hidden leading-none', flip && 'rotate-180', className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={cn('h-14 w-full md:h-20 lg:h-28', fillClasses[color])}
      >
        <path d="M0 100C300 100 420 20 720 20C1020 20 1140 100 1440 100V120H0Z" />
      </svg>
    </div>
  )
}
