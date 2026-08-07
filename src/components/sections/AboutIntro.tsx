import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/motion'

export function AboutIntro() {
  return (
    <section className="relative bg-butter py-24 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:max-w-5xl lg:px-10">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          className="font-display text-3xl font-bold leading-[1.15] text-[color-mix(in_srgb,var(--color-olive)_75%,var(--color-cocoa)_25%)] sm:text-4xl lg:text-5xl xl:text-[3.25rem]"
        >
          Sour Lemon is where playful food meets art, design and nostalgia. We make whimsical
          cakes, handcrafted pantry treats and thoughtful merch inspired by the moments we all
          grew up with.
        </motion.h1>
      </div>
    </section>
  )
}
