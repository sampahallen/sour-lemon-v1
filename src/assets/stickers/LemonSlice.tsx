export function LemonSlice({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="58" fill="#F8F0C9" />
      <circle cx="60" cy="60" r="50" fill="#F3D98B" stroke="#F66A38" strokeWidth="5" />
      <circle cx="60" cy="60" r="38" fill="#FCEFC0" stroke="#F66A38" strokeWidth="3" />
      <g stroke="#F66A38" strokeWidth="2.5" strokeLinecap="round">
        <line x1="60" y1="60" x2="60" y2="24" />
        <line x1="60" y1="60" x2="91" y2="42" />
        <line x1="60" y1="60" x2="91" y2="78" />
        <line x1="60" y1="60" x2="60" y2="96" />
        <line x1="60" y1="60" x2="29" y2="78" />
        <line x1="60" y1="60" x2="29" y2="42" />
      </g>
      <circle cx="60" cy="60" r="6" fill="#F3D98B" stroke="#F66A38" strokeWidth="2" />
    </svg>
  )
}
