import { StubPage } from './StubPage'
import { ShopIllustration } from '@/assets/illustrations/ShopIllustration'

export function Shop() {
  return (
    <StubPage
      title="The Shop"
      description="Nostalgia-inspired merch, remixed games and small-batch goods are on their way. The general store is still being stocked."
      accent="olive"
      icon={<ShopIllustration className="h-full w-full" />}
    />
  )
}
