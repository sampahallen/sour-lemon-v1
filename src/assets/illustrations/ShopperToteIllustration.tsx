export function ShopperToteIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 220" className={className} aria-hidden="true">
      <circle cx="56" cy="42" r="8" fill="#6E7A3A" opacity="0.85" />
      <circle cx="234" cy="148" r="10" fill="#F66A38" opacity="0.85" />
      <circle cx="238" cy="42" r="6" fill="#F3D98B" opacity="0.9" />

      <path d="M120 92C104 98 92 118 90 142" stroke="#4A2C1D" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M112 100C98 108 90 126 93 146" stroke="#4A2C1D" strokeWidth="4" strokeLinecap="round" fill="none" />

      <path
        d="M116 92C116 81 132 76 152 76C172 76 188 81 188 92L198 178C199 186 193 192 185 192H119C111 192 105 186 106 178Z"
        fill="#F66A38"
        stroke="#4A2C1D"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <circle cx="152" cy="54" r="28" fill="#FCEFC0" stroke="#4A2C1D" strokeWidth="4" />
      <path d="M126 44C126 24 178 24 178 44C178 32 170 28 152 28C134 28 126 32 126 44Z" fill="#4A2C1D" />
      <circle cx="143" cy="56" r="3.5" fill="#4A2C1D" />
      <circle cx="163" cy="56" r="3.5" fill="#4A2C1D" />
      <path d="M142 68C148 74 158 74 164 68" stroke="#4A2C1D" strokeWidth="3" strokeLinecap="round" fill="none" />

      <rect
        x="58"
        y="136"
        width="64"
        height="58"
        rx="10"
        fill="#F3D98B"
        stroke="#4A2C1D"
        strokeWidth="4"
        transform="rotate(-6 90 165)"
      />
      <g transform="rotate(-6 90 165)">
        <path
          d="M76 146C76 135 84 127 95 127C106 127 114 135 114 146"
          fill="none"
          stroke="#4A2C1D"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="95" cy="165" r="9" fill="#F66A38" />
        <path d="M91 165L99 165M95 161L95 169" stroke="#F8F0C9" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      <rect x="122" y="190" width="18" height="26" rx="8" fill="#4A2C1D" />
      <rect x="164" y="190" width="18" height="26" rx="8" fill="#4A2C1D" />
      <path d="M40 216C90 206 210 206 260 216" stroke="#4A2C1D" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.3" />
    </svg>
  )
}
