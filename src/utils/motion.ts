import type { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

// Kept for later: pieces fly in from scattered off-screen origins. Currently unused
// in favor of slideUpVariant, which is lighter to animate (opacity + single-axis y only).
export function throwInVariant(x: number, y: number, restRotate = 0, delay = 0): Variants {
  return {
    hidden: { opacity: 0, x, y, rotate: restRotate + (x < 0 ? -1 : 1) * 30, scale: 0.75 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: restRotate,
      scale: 1,
      transition: { duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] },
    },
  }
}

export function slideUpVariant(distance = 400, delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }
}

export function floatVariant(amplitude = 10, duration = 4, delay = 0): Variants {
  return {
    animate: {
      y: [0, -amplitude, 0],
      transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
    },
  }
}

export function gentleRotate(degrees = 4, duration = 5, delay = 0): Variants {
  return {
    animate: {
      rotate: [-degrees, degrees, -degrees],
      transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
    },
  }
}

export function bouncyPulse(amplitude = 10, scaleAmount = 0.06, duration = 3, delay = 0): Variants {
  return {
    animate: {
      y: [0, -amplitude, 0],
      scale: [1, 1 + scaleAmount, 1],
      transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
    },
  }
}
