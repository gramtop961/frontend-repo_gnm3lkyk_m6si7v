import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onCTA }) {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <p className="text-sm tracking-widest uppercase text-neutral-500">Quiet Luxury. Precisely Tailored.</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-neutral-900">
            Custom Curtains & Blinds crafted to your room’s geometry
          </h1>
          <p className="mt-6 text-neutral-700 leading-relaxed max-w-xl">
            We design, measure, and install window dressings with millimetre accuracy.
            A monochrome language, subtle champagne accents, and materials that fall flawlessly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => onCTA('book_assessment')}
              className="rounded-2xl bg-neutral-900 text-white px-6 py-3 text-sm shadow-sm hover:shadow-md inline-flex items-center gap-2">
              Book Private Design Assessment <ArrowRight size={16} />
            </button>
            <a href="#portfolio" className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm text-neutral-900 hover:bg-neutral-50">
              See Portfolio
            </a>
            <button onClick={() => onCTA('request_swatches')} className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm text-neutral-900 hover:bg-neutral-50">
              Request Material Swatches
            </button>
            <button onClick={() => onCTA('get_quote')} className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm text-neutral-900 hover:bg-neutral-50">
              Get Precise Quotation
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-6"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ring-1 ring-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDN8fGN1cnRhaW5zfGVufDB8fHx8fDE3MDAwMDAwMDA&fm=webp"
              alt="Floor-to-ceiling curtains in soft off-white drape with champagne hardware"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
