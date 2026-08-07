import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { bouncyPulse } from '@/utils/motion'

export function HeroWordmark() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div
      role="img"
      aria-label="Sour Lemon"
      data-navbar-avoid="true"
      className="pointer-events-none relative z-10 select-none text-center"
    >
      <motion.span
        variants={prefersReducedMotion ? undefined : bouncyPulse(8, 0.04, 3.2, 0)}
        animate={prefersReducedMotion ? undefined : 'animate'}
        className="block -rotate-3 font-display text-[26vw] font-extrabold leading-[0.8] text-[color-mix(in_srgb,var(--color-flame)_88%,var(--color-cream)_12%)] sm:text-[20vw] lg:text-[10rem] xl:text-[12.5rem] 2xl:text-[14.5rem]"
      >
        SOUR
      </motion.span>
      <motion.span
        variants={prefersReducedMotion ? undefined : bouncyPulse(8, 0.04, 3.2, 0.3)}
        animate={prefersReducedMotion ? undefined : 'animate'}
        className="-mt-3 block rotate-2 font-display text-[19vw] font-extrabold leading-[0.8] text-[color-mix(in_srgb,var(--color-cocoa)_90%,var(--color-cream)_10%)] sm:text-[15vw] lg:-mt-6 lg:text-[7.75rem] xl:text-[9.75rem] 2xl:text-[11rem]"
      >
        LEMON
      </motion.span>
    </div>
  )
}
