export function FoodIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 220" className={className} aria-hidden="true">
      <path d="M10 180C40 172 240 172 270 180" stroke="#4A2C1D" strokeWidth="3" strokeLinecap="round" fill="none" />

      <rect x="24" y="120" width="70" height="58" rx="14" fill="#F66A38" stroke="#4A2C1D" strokeWidth="3.5" />
      <path
        d="M28 120C34 108 40 128 46 116C52 104 58 124 64 112C70 100 76 120 82 108C86 100 90 106 90 116V120Z"
        fill="#F8F0C9"
        stroke="#4A2C1D"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="59" cy="102" r="5" fill="#F3D98B" stroke="#4A2C1D" strokeWidth="2" />

      <rect x="112" y="96" width="66" height="82" rx="14" fill="#F3D98B" stroke="#4A2C1D" strokeWidth="3.5" />
      <rect x="122" y="70" width="46" height="34" rx="10" fill="#F8F0C9" stroke="#4A2C1D" strokeWidth="3" />
      <path
        d="M126 70C130 60 138 78 142 66C146 56 154 74 158 62C162 56 166 62 166 68V70Z"
        fill="#F66A38"
        stroke="#4A2C1D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="132" cy="130" r="4" fill="#6E7A3A" />
      <circle cx="158" cy="150" r="4" fill="#F66A38" />

      <path d="M204 92H236V100H204Z" fill="#4A2C1D" />
      <path
        d="M200 100H240C243 100 245 103 245 106V170C245 176 240 181 234 181H206C200 181 195 176 195 170V106C195 103 197 100 200 100Z"
        fill="#FCEFC0"
        stroke="#4A2C1D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M198 140C210 136 230 136 242 140V170C242 176 238 178 234 178H206C202 178 198 176 198 170Z" fill="#6E7A3A" />
    </svg>
  )
}
