import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/utils/motion'

type Story = {
  title: string
  tag: string
  bg: string
}

const stories: Story[] = [
  {
    title: 'Why Is There A Lemon On Everything?',
    tag: 'Origin Story',
    bg: 'color-mix(in srgb, var(--color-flame) 20%, var(--color-cream) 80%)',
  },
  {
    title: 'Inside The Jam Test Kitchen',
    tag: 'Recipes',
    bg: 'color-mix(in srgb, var(--color-olive) 20%, var(--color-cream) 80%)',
  },
  {
    title: 'Notes From The Next Drop',
    tag: 'Behind The Counter',
    bg: 'color-mix(in srgb, var(--color-sand) 65%, var(--color-cream) 35%)',
  },
]

export function LatestStories() {
  return (
    <section id="journal" className="relative bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
        >
          <div>
            <span className="font-display text-sm font-bold uppercase tracking-wide text-flame">
              Behind The Counter
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-cocoa sm:text-4xl">Latest Stories</h2>
          </div>
          <Button to="/journal" variant="outline" accent="cocoa">
            Read the Journal
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {stories.map((story) => (
            <motion.div
              key={story.title}
              variants={fadeInUp}
              className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[2rem] border-2 border-cocoa/10 p-6"
              style={{ backgroundColor: story.bg }}
            >
              <span className="font-display text-xs font-bold uppercase tracking-wide text-cocoa/50">
                {story.tag}
              </span>
              <p className="mt-3 font-display text-xl font-bold leading-snug text-cocoa">{story.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
