import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Squiggle } from '@/assets/doodles/doodleIcons'
import { cn } from '@/utils/cn'

type SquiggleLinkProps = {
  children: ReactNode
  to: string
  className?: string
}

export function SquiggleLink({ children, to, className = '' }: SquiggleLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        'group relative inline-flex flex-col items-start font-display font-semibold text-cocoa',
        className,
      )}
    >
      <span className="transition-transform duration-200 group-hover:-translate-y-0.5">{children}</span>
      <Squiggle className="-mt-1 h-2 w-16 text-flame transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  )
}
