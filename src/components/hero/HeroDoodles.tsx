import { Squiggle, Star, Sparkle, Smiley, Arrow, WavyLine, FruitDot } from '@/assets/doodles/doodleIcons'

export function HeroDoodles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Star className="absolute left-[6%] top-[12%] h-6 w-6 rotate-6 text-flame/30" />
      <Sparkle className="absolute left-[14%] top-[72%] hidden h-7 w-7 text-olive/35 md:block" />
      <Squiggle className="absolute left-[3%] top-[46%] h-4 w-16 -rotate-6 text-cocoa/20" />
      <Smiley className="absolute right-[9%] top-[8%] hidden h-8 w-8 rotate-3 text-cocoa/25 lg:block" />
      <WavyLine className="absolute right-[4%] top-[58%] h-4 w-20 text-flame/25" />
      <Arrow className="absolute left-[42%] top-[6%] hidden h-6 w-12 rotate-6 text-olive/30 md:block" />
      <FruitDot className="absolute right-[20%] top-[85%] h-5 w-5 text-flame/25" />
      <Star className="absolute right-[30%] top-[18%] hidden h-4 w-4 text-olive/30 lg:block" />
      <Sparkle className="absolute left-[48%] top-[90%] hidden h-5 w-5 text-flame/25 md:block" />
      <FruitDot className="absolute left-[30%] top-[10%] hidden h-4 w-4 text-olive/25 sm:block" />
      <Squiggle className="absolute right-[24%] top-[80%] hidden h-3 w-12 rotate-3 text-flame/20 lg:block" />
      <Star className="absolute left-[24%] top-[30%] hidden h-3 w-3 text-cocoa/20 xl:block" />
    </div>
  )
}
