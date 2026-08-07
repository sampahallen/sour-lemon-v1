import { StubPage } from './StubPage'
import { CakeIllustration } from '@/assets/illustrations/CakeIllustration'

export function Bakery() {
  return (
    <StubPage
      title="The Bakery"
      description="Whimsical cakes, mini cakes and made-to-order sweetness — the full menu is coming soon. For now, peek at what's baking on the homepage."
      accent="flame"
      icon={<CakeIllustration className="h-full w-full" />}
    />
  )
}
