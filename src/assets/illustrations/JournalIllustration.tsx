export function JournalIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 220" className={className} aria-hidden="true">
      <path
        d="M40 60C70 50 100 54 138 66V182C100 170 70 166 40 176Z"
        fill="#F8F0C9"
        stroke="#4A2C1D"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M236 60C206 50 176 54 138 66V182C176 170 206 166 236 176Z"
        fill="#F8F0C9"
        stroke="#4A2C1D"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M56 84C78 78 100 80 122 88" stroke="#E3C9A3" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M56 104C78 98 100 100 122 108" stroke="#E3C9A3" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M56 124C72 120 88 121 104 126" stroke="#F66A38" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M154 84C176 78 198 80 220 88" stroke="#E3C9A3" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M154 104C176 98 198 100 220 108" stroke="#E3C9A3" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="188" cy="128" r="9" fill="none" stroke="#6E7A3A" strokeWidth="3" />

      <g transform="rotate(28 210 150)">
        <rect x="180" y="146" width="70" height="10" rx="5" fill="#6E7A3A" stroke="#4A2C1D" strokeWidth="2.5" />
        <path d="M250 146L262 151L250 156Z" fill="#4A2C1D" />
      </g>

      <g transform="translate(122 26) rotate(-6)">
        <circle cx="16" cy="16" r="16" fill="#F3D98B" stroke="#F66A38" strokeWidth="3" />
        <circle cx="16" cy="16" r="6" fill="#FCEFC0" />
      </g>
    </svg>
  )
}
