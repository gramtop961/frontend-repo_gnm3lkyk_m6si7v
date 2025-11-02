import { motion } from 'framer-motion';

const projects = [
  {
    id: 'atelier-nord',
    title: 'Atelier Nord Penthouse',
    location: 'Copenhagen',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&fm=webp',
    description:
      'Sheer voile with blackout interlining, ripple fold track in champagne anodized finish.',
  },
  {
    id: 'villa-aurum',
    title: 'Villa Aurum Suite',
    location: 'Lake Como',
    image:
      'https://images.unsplash.com/photo-1505692794403-34cb4b1b4d89?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&fm=webp',
    description:
      'Hand-stitched linen drapes with weighted hem and concealed motorized blinds.',
  },
  {
    id: 'residence-elm',
    title: 'Residence on Elm',
    location: 'Toronto',
    image:
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&fm=webp',
    description:
      'Layered sheer and blackout system for all-day control of light and privacy.',
  },
];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">Portfolio</h2>
            <p className="mt-2 text-neutral-600">A few recent rooms measured, made, and installed by Luxoréa.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-2xl border border-neutral-300 px-4 py-2 text-sm">Request Material Swatches</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden ring-1 ring-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={`${p.title} – ${p.location}`} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-neutral-900">{p.title}</h3>
                <p className="text-sm text-neutral-500">{p.location}</p>
                <p className="mt-3 text-neutral-700 text-sm leading-relaxed">{p.description}</p>
                <a href="#contact" className="mt-4 inline-block text-sm underline underline-offset-4">Request similar treatment</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
