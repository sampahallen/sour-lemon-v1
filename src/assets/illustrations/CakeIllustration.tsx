export function CakeIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 320" className={className} aria-hidden="true">
      <ellipse cx="160" cy="278" rx="118" ry="18" fill="#4A2C1D" opacity="0.12" />

      <rect x="60" y="196" width="200" height="76" rx="18" fill="#F3D98B" stroke="#4A2C1D" strokeWidth="4" />
      <circle cx="95" cy="234" r="6" fill="#F66A38" />
      <circle cx="140" cy="246" r="5" fill="#6E7A3A" />
      <circle cx="190" cy="230" r="6" fill="#F66A38" />
      <circle cx="230" cy="248" r="5" fill="#6E7A3A" />

      <path
        d="M70 196C80 210 90 186 100 200C110 214 120 188 130 202C140 216 150 190 160 204C170 216 180 190 190 204C200 216 210 190 220 204C230 216 240 190 250 200V196Z"
        fill="#F66A38"
        stroke="#4A2C1D"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <rect x="90" y="126" width="140" height="70" rx="16" fill="#F66A38" stroke="#4A2C1D" strokeWidth="4" />
      <path
        d="M96 126C100 138 108 116 116 128C124 140 132 116 140 128C148 140 156 116 164 128C172 140 180 116 188 128C196 140 204 116 212 128C220 140 224 132 224 126V122H96Z"
        fill="#F8F0C9"
        stroke="#4A2C1D"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <rect x="112" y="70" width="96" height="60" rx="14" fill="#F8F0C9" stroke="#4A2C1D" strokeWidth="4" />

      <path
        d="M130 70C130 54 150 50 150 62C150 72 168 70 166 58C164 46 184 44 186 60C188 72 202 68 200 56"
        fill="none"
        stroke="#4A2C1D"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <rect x="154" y="34" width="10" height="30" rx="3" fill="#F3D98B" stroke="#4A2C1D" strokeWidth="2.5" />
      <path d="M159 34C155 26 163 22 159 14" fill="none" stroke="#F66A38" strokeWidth="3" strokeLinecap="round" />
      <path d="M159 20C157 14 161 10 159 6" fill="none" stroke="#F3D98B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
