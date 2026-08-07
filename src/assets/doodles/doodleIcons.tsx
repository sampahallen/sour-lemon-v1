type DoodleProps = {
  className?: string
}

export function Squiggle({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 14C8 4 14 4 18 12C22 20 28 20 32 10C36 2 42 2 46 10C50 18 54 16 58 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Star({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 2L24 15.5L38 15.5L26.5 24L31 38L20 29.3L9 38L13.5 24L2 15.5L16 15.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Sparkle({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 2C21 12 22 18 30 20C22 22 21 28 20 38C19 28 18 22 10 20C18 18 19 12 20 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Smiley({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="14" cy="17" r="2" fill="currentColor" />
      <circle cx="26" cy="17" r="2" fill="currentColor" />
      <path
        d="M11 24C14 30 26 30 29 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function Arrow({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 50 30" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 20C16 6 32 4 46 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 8L47 12L40 22"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function WavyLine({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 8C8 2 14 2 20 8C26 14 32 14 38 8C44 2 50 2 56 8C62 14 68 14 74 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function FruitDot({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 30 30" fill="none" className={className} aria-hidden="true">
      <circle cx="15" cy="16" r="11" fill="currentColor" />
      <path
        d="M15 5C15 5 12 2 9 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
