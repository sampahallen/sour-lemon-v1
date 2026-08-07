const VIEW_WIDTH = 1440
const VIEW_HEIGHT = 900

type Ribbon = {
  cyTop: number
  bandHeight: number
  amplitude: number
  period: number
  phase: number
  color: string
  opacity: number
}

function buildRibbonPath(ribbon: Ribbon): string {
  const { cyTop, bandHeight, amplitude, period, phase } = ribbon
  const half = period / 2
  const segments = Math.ceil((VIEW_WIDTH - phase) / half)
  const cyBottom = cyTop + bandHeight

  const top: string[] = [`M${phase},${cyTop}`]
  for (let i = 0; i < segments; i++) {
    const segStart = phase + i * half
    const segEnd = phase + (i + 1) * half
    const goingUp = i % 2 === 0
    const controlY = goingUp ? cyTop - amplitude : cyTop + amplitude
    top.push(`C${segStart + half / 3},${controlY} ${segStart + (half * 2) / 3},${controlY} ${segEnd},${cyTop}`)
  }

  const bottom: string[] = []
  for (let i = segments - 1; i >= 0; i--) {
    const segStart = phase + i * half
    const segEnd = phase + (i + 1) * half
    const wasGoingUp = i % 2 === 0
    const controlY = wasGoingUp ? cyBottom - amplitude : cyBottom + amplitude
    bottom.push(`C${segEnd - half / 3},${controlY} ${segEnd - (half * 2) / 3},${controlY} ${segStart},${cyBottom}`)
  }

  return [...top, `L${phase + segments * half},${cyBottom}`, ...bottom, 'Z'].join(' ')
}

const ribbons: Ribbon[] = [
  {
    cyTop: 40,
    bandHeight: 280,
    amplitude: 70,
    period: 640,
    phase: 0,
    color: 'color-mix(in srgb, var(--color-butter) 65%, var(--color-cream) 35%)',
    opacity: 0.6,
  },
  {
    cyTop: 320,
    bandHeight: 300,
    amplitude: 85,
    period: 580,
    phase: -90,
    color: 'color-mix(in srgb, var(--color-sand) 60%, var(--color-cream) 40%)',
    opacity: 0.5,
  },
  {
    cyTop: 610,
    bandHeight: 310,
    amplitude: 75,
    period: 600,
    phase: 70,
    color: 'color-mix(in srgb, var(--color-flame) 18%, var(--color-cream) 82%)',
    opacity: 0.45,
  },
]

export function HeroGroovyBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -inset-24 blur-3xl">
        <svg
          viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          {ribbons.map((ribbon, index) => (
            <path key={index} d={buildRibbonPath(ribbon)} fill={ribbon.color} opacity={ribbon.opacity} />
          ))}
        </svg>
      </div>
    </div>
  )
}
