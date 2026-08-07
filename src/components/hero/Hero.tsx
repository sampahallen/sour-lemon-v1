import { motion } from 'framer-motion'
import { HeroGroovyBackground } from './HeroGroovyBackground'
import { HeroDoodles } from './HeroDoodles'
import { HeroStickers } from './HeroStickers'
import { HeroWordmark } from './HeroWordmark'
import { HeroProductShelf } from './HeroProductShelf'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { fadeInUp } from '@/utils/motion'

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section
      id="home-hero"
      className="relative -mt-20 flex min-h-[calc(100vh+3.5rem)] flex-col overflow-x-hidden bg-cream md:min-h-[calc(100vh+5rem)] lg:-mt-24 lg:min-h-[calc(100vh+7rem)]"
    >
      <HeroGroovyBackground />
      <HeroDoodles />
      <HeroStickers />

      <div className="relative flex flex-1 items-center justify-center px-6 pb-4 pt-20 lg:pt-24">
        <motion.div
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={prefersReducedMotion ? undefined : 'visible'}
          variants={prefersReducedMotion ? undefined : fadeInUp}
        >
          <HeroWordmark />
        </motion.div>
      </div>

      <HeroProductShelf />

      <SectionDivider color="butter" className="relative" />
    </section>
  )
}
