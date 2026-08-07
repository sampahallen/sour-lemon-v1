export function CakeSlice({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path
        d="M14 106C10 104 8 100 9 95L28 34C30 27 36 22 43 22H77C84 22 90 27 92 34L111 95C112 100 110 104 106 106C92 113 76 116 60 116C44 116 28 113 14 106Z"
        fill="#F8F0C9"
      />
      <path d="M60 30 30 96H90Z" fill="#F3D98B" stroke="#4A2C1D" strokeWidth="3" strokeLinejoin="round" />
      <path d="M42 60H78" stroke="#4A2C1D" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 78H84" stroke="#4A2C1D" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M30 96C34 90 38 96 42 90C46 96 50 90 54 96C58 90 62 96 66 90C70 96 74 90 78 96C82 90 86 96 90 96"
        fill="none"
        stroke="#F66A38"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="60" cy="24" r="6" fill="#F66A38" />
      <path d="M60 18C61 12 65 10 68 11" stroke="#6E7A3A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="48" cy="70" r="2" fill="#F66A38" />
      <circle cx="70" cy="66" r="2" fill="#6E7A3A" />
      <circle cx="56" cy="84" r="2" fill="#F66A38" />
    </svg>
  )
}
