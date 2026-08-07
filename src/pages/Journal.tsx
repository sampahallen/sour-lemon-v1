import { StubPage } from './StubPage'
import { JournalIllustration } from '@/assets/illustrations/JournalIllustration'

export function Journal() {
  return (
    <StubPage
      title="The Journal"
      description="Recipes, drop notes and stories from the kitchen table — the journal is being written. First entries land soon."
      accent="flame"
      icon={<JournalIllustration className="h-full w-full" />}
    />
  )
}
