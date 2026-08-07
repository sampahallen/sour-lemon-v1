export function ShopIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 220" className={className} aria-hidden="true">
      <path d="M46 84C46 62 62 48 82 48C102 48 118 62 118 84" fill="none" stroke="#4A2C1D" strokeWidth="5" strokeLinecap="round" />
      <path
        d="M30 84H134L124 190C123 197 117 202 110 202H54C47 202 41 197 40 190Z"
        fill="#F3D98B"
        stroke="#4A2C1D"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="70" cy="130" r="7" fill="#F66A38" />
      <path d="M92 122L108 138M108 122L92 138" stroke="#4A2C1D" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M58 160C74 152 90 168 106 160" stroke="#6E7A3A" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      <rect x="168" y="110" width="70" height="70" rx="14" fill="#F66A38" stroke="#4A2C1D" strokeWidth="4" transform="rotate(8 203 145)" />
      <g transform="rotate(8 203 145)" fill="#F8F0C9">
        <circle cx="188" cy="130" r="5" />
        <circle cx="218" cy="130" r="5" />
        <circle cx="188" cy="160" r="5" />
        <circle cx="218" cy="160" r="5" />
        <circle cx="203" cy="145" r="5" />
      </g>

      <circle cx="228" cy="70" r="26" fill="#FCEFC0" stroke="#4A2C1D" strokeWidth="3.5" />
      <path d="M228 70L242 52" stroke="#4A2C1D" strokeWidth="4" strokeLinecap="round" />
      <circle cx="228" cy="70" r="4" fill="#4A2C1D" />
    </svg>
  )
}
