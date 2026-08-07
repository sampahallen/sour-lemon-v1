export function JamJar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} aria-hidden="true">
      <path d="M30 8H70C71 8 72 9 72 10V18H28V10C28 9 29 8 30 8Z" fill="#6E7A3A" stroke="#4A2C1D" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="24" y="16" width="52" height="8" rx="3" fill="#4A2C1D" />
      <path
        d="M22 24H78C82 24 85 27 85 31V102C85 108 80 113 74 113H26C20 113 15 108 15 102V31C15 27 18 24 22 24Z"
        fill="#FCEFC0"
        stroke="#4A2C1D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M20 60C30 56 70 56 80 60V102C80 106 76 109 72 109H28C24 109 20 106 20 102Z" fill="#F66A38" />
      <rect x="26" y="66" width="48" height="30" rx="4" fill="#F8F0C9" stroke="#4A2C1D" strokeWidth="2" transform="rotate(-3 50 81)" />
      <text
        x="50"
        y="85"
        textAnchor="middle"
        fontFamily="'Baloo 2', sans-serif"
        fontSize="11"
        fill="#4A2C1D"
        transform="rotate(-3 50 81)"
      >
        jam
      </text>
    </svg>
  )
}
