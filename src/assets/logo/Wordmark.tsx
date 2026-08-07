function LemonMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 4C63 4 72 9 82 20C93 31 96 42 96 50C96 61 91 71 82 80C71 91 60 96 50 96C38 96 28 91 18 82C7 71 4 60 4 50C4 39 8 28 18 18C28 8 39 4 50 4Z"
        fill="#F66A38"
      />
      <circle cx="50" cy="50" r="38" fill="#FCEFC0" />
      <g stroke="#F66A38" strokeWidth="3" strokeLinecap="round">
        <line x1="50" y1="50" x2="50" y2="17" />
        <line x1="50" y1="50" x2="78" y2="33.5" />
        <line x1="50" y1="50" x2="78" y2="66.5" />
        <line x1="50" y1="50" x2="50" y2="83" />
        <line x1="50" y1="50" x2="22" y2="66.5" />
        <line x1="50" y1="50" x2="22" y2="33.5" />
      </g>
      <circle cx="50" cy="50" r="7" fill="#F3D98B" />
    </svg>
  )
}

type WordmarkProps = {
  className?: string
  light?: boolean
  iconOnly?: boolean
}

export function Wordmark({ className = '', light = false, iconOnly = false }: WordmarkProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-display font-extrabold leading-none tracking-tight ${className}`}
    >
      <LemonMark className="h-[1.2em] w-[1.2em] shrink-0 -rotate-6" />
      {!iconOnly && (
        <span className={light ? 'text-cream' : 'text-cocoa'}>
          Sour <span className={light ? 'text-butter' : 'text-flame'}>Lemon</span>
        </span>
      )}
    </span>
  )
}
