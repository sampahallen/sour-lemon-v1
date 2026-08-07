type ProductPlaceholderProps = {
  label: string
}

export function ProductPlaceholder({ label }: ProductPlaceholderProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-t-[1.75rem] rounded-b-lg border border-cocoa/12 bg-cream/80 p-2 shadow-[0_10px_28px_-12px_rgba(74,44,29,0.18)]">
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0 text-cocoa/30 sm:h-8 sm:w-8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
        <path d="M21 15l-5-5-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-center text-[0.6rem] font-bold uppercase leading-tight tracking-wide text-cocoa/45 sm:text-xs">
        {label}
      </span>
    </div>
  )
}
