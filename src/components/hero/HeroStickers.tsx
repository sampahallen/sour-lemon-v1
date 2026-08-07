import { motion } from 'framer-motion'
import { LemonSlice } from '@/assets/stickers/LemonSlice'
import { CakeSlice } from '@/assets/stickers/CakeSlice'
import { JamJar } from '@/assets/stickers/JamJar'
import { StarBadge } from '@/assets/stickers/StarBadge'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { floatVariant } from '@/utils/motion'

export function HeroStickers() {
  const prefersReducedMotion = usePrefersReducedMotion()

  const floatProps = (amplitude: number, duration: number, delay: number) =>
    prefersReducedMotion
      ? {}
      : { variants: floatVariant(amplitude, duration, delay), animate: 'animate' }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-[9%] top-[18%] w-10 opacity-30 sm:left-[11%] sm:w-12 lg:w-14"
        {...floatProps(8, 5, 0)}
      >
        <LemonSlice className="h-full w-full" />
      </motion.div>
      <motion.div
        className="absolute right-[8%] top-[14%] w-9 opacity-25 sm:w-11 lg:w-12"
        {...floatProps(10, 6, 0.3)}
      >
        <StarBadge className="h-full w-full" />
      </motion.div>
      <motion.div
        className="absolute left-[18%] top-[60%] hidden w-10 opacity-20 sm:block lg:w-12"
        {...floatProps(9, 5.5, 0.6)}
      >
        <CakeSlice className="h-full w-full" />
      </motion.div>
      <motion.div
        className="absolute right-[16%] top-[56%] hidden w-10 opacity-20 md:block lg:w-12"
        {...floatProps(7, 4.5, 0.9)}
      >
        <JamJar className="h-full w-full" />
      </motion.div>
      <motion.div
        className="absolute left-[4%] top-[40%] hidden w-8 opacity-15 lg:block"
        {...floatProps(6, 5, 1.2)}
      >
        <StarBadge className="h-full w-full" />
      </motion.div>
      <motion.div
        className="absolute right-[5%] top-[38%] hidden w-8 opacity-15 lg:block"
        {...floatProps(11, 6.5, 0.2)}
      >
        <LemonSlice className="h-full w-full" />
      </motion.div>
    </div>
  )
}
