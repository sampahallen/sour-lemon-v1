export function CollabIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 220" className={className} aria-hidden="true">
      <circle cx="54" cy="60" r="10" fill="#6E7A3A" opacity="0.85" />
      <circle cx="220" cy="180" r="14" fill="#F66A38" opacity="0.85" />
      <circle cx="230" cy="50" r="7" fill="#F3D98B" opacity="0.9" />

      <path
        d="M110 40L170 40L200 110C204 118 198 128 188 128H92C82 128 76 118 80 110Z"
        fill="#F3D98B"
        stroke="#4A2C1D"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M120 40L112 20H168L160 40Z" fill="#4A2C1D" />
      <path
        d="M120 128L124 160C128 176 152 176 156 160L160 128"
        fill="#F8F0C9"
        stroke="#4A2C1D"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M124 160C128 168 152 168 156 160" fill="none" stroke="#F66A38" strokeWidth="3" strokeLinecap="round" />

      <g transform="rotate(-35 90 150)">
        <rect x="80" y="150" width="90" height="12" rx="6" fill="#4A2C1D" />
        <rect x="60" y="146" width="24" height="20" rx="4" fill="#F66A38" />
        <path
          d="M170 150C182 148 190 156 188 166C186 174 176 176 170 168Z"
          fill="#F8F0C9"
          stroke="#4A2C1D"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
