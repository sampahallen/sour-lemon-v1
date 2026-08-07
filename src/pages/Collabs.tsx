import { StubPage } from './StubPage'
import { CollabIllustration } from '@/assets/illustrations/CollabIllustration'

export function Collabs() {
  return (
    <StubPage
      title="Collabs"
      description="Artists, chefs and other creative weirdos — we're lining up the next round of collaborations. Check back soon for the lineup."
      accent="cocoa"
      icon={<CollabIllustration className="h-full w-full" />}
    />
  )
}
