import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/utils/motion'

type Product = {
  name: string
  category: string
  bg: string
  image: string
}

const products: Product[] = [
  {
    name: 'Lemon Drop Mini Cake',
    category: 'Citrus',
    bg: 'color-mix(in srgb, var(--color-flame) 22%, var(--color-cream) 78%)',
    image: '/images/mini-cakes/lemon-drop.png',
  },
  {
    name: 'Sour Cherry Swirl Mini Cake',
    category: 'Cherry',
    bg: 'color-mix(in srgb, var(--color-olive) 22%, var(--color-cream) 78%)',
    image: '/images/mini-cakes/sour-cherry-swirl.png',
  },
  {
    name: 'Pistachio Rose Mini Cake',
    category: 'Pistachio',
    bg: 'color-mix(in srgb, var(--color-sand) 70%, var(--color-cream) 30%)',
    image: '/images/mini-cakes/pistachio-rose.png',
  },
]

export function BestSellers() {
  return (
    <section id="food" className="relative bg-cream py-20 lg:py-28">
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
              This Month&apos;s Mini Cakes
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-cocoa sm:text-4xl">Top Picks</h2>
          </div>
          <Button to="/bakery" variant="outline" accent="cocoa">
            Shop All
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-[2rem] border-2 border-cocoa/10 p-6 pt-10"
              style={{ backgroundColor: product.bg }}
            >
              <span className="font-display text-xs font-bold uppercase tracking-wide text-cocoa/50">
                {product.category}
              </span>
              <div className="mx-auto mt-2 aspect-square w-full max-w-[220px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain drop-shadow-[0_18px_14px_rgba(83,48,32,0.18)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center font-display text-lg font-bold text-cocoa">{product.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
