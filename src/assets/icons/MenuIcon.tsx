export function MenuIcon({
  open,
  className = '',
}: {
  open: boolean
  className?: string
}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <line
        x1="3"
        y1="7"
        x2="21"
        y2="7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          transformOrigin: '12px 12px',
          transform: open ? 'translateY(5px) rotate(45deg)' : 'none',
          transition: 'transform 0.25s ease',
        }}
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ opacity: open ? 0 : 1, transition: 'opacity 0.2s ease' }}
      />
      <line
        x1="3"
        y1="17"
        x2="21"
        y2="17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          transformOrigin: '12px 12px',
          transform: open ? 'translateY(-5px) rotate(-45deg)' : 'none',
          transition: 'transform 0.25s ease',
        }}
      />
    </svg>
  )
}
