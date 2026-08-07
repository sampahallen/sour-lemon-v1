import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { Star, Sparkle, Squiggle } from '@/assets/doodles/doodleIcons'
import { fadeInUp } from '@/utils/motion'
import { cn } from '@/utils/cn'

type Accent = 'flame' | 'olive' | 'cocoa'

type StubPageProps = {
  title: string
  description: string
  accent?: Accent
  icon?: ReactNode
}

const bgClasses: Record<Accent, string> = {
  flame: 'bg-flame',
  olive: 'bg-olive',
  cocoa: 'bg-cocoa',
}

export function StubPage({ title, description, accent = 'flame', icon }: StubPageProps) {
  return (
    <div>
      <section
        data-navbar-theme="dark"
        className={cn('relative -mt-20 overflow-hidden text-cream lg:-mt-24', bgClasses[accent])}
      >
        <Star className="pointer-events-none absolute left-[8%] top-[15%] h-8 w-8 rotate-6 text-cream/25" />
        <Sparkle className="pointer-events-none absolute right-[12%] top-[65%] h-10 w-10 text-cream/20" />

        <motion.div
          className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center lg:py-36"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {icon && <div className="mb-6 h-24 w-24">{icon}</div>}
          <span className="font-display text-sm font-bold uppercase tracking-widest text-cream/70">
            Coming soon
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85">{description}</p>
          <Squiggle className="mt-6 h-4 w-24 text-cream/60" />
          <div className="mt-8">
            <Button to="/" variant="outline" accent="cream">
              Back to the World
            </Button>
          </div>
        </motion.div>
      </section>

      <SectionDivider color="cream" className={bgClasses[accent]} />
    </div>
  )
}
