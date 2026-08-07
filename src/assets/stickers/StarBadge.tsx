export function StarBadge({
  className = '',
  label = 'new!',
}: {
  className?: string
  label?: string
}) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path
        d="M60 4 71 26 95 16 90 42 114 52 92 66 100 90 75 84 66 108 54 86 30 96 34 70 8 62 28 46 20 22 46 30Z"
        fill="#F66A38"
        stroke="#4A2C1D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fontFamily="'Baloo 2', sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#F8F0C9"
        transform="rotate(-8 60 60)"
      >
        {label}
      </text>
    </svg>
  )
}
