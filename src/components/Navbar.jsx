import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#products', label: 'Products' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing Philosophy' },
  { href: '#about', label: 'About' },
  { href: '#journal', label: 'Journal' },
  { href: '#contact', label: 'Contact' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      elevated ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-white/50'
    }`} aria-label="Primary">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" role="navigation">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl tracking-wide font-serif font-semibold select-none" aria-label="Luxoréa home">Luxoréa</a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 rounded-md px-1 py-1">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="rounded-2xl bg-neutral-900 text-white text-sm px-4 py-2 shadow-sm hover:shadow-md transition-shadow">Book Private Design Assessment</a>
          </div>
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu" className="md:hidden p-2 rounded-xl border border-neutral-200">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 grid gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block text-neutral-800" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-2xl bg-neutral-900 text-white text-sm px-4 py-2 w-fit shadow-sm">Book Private Design Assessment</a>
          </div>
        </div>
      )}
    </header>
  );
}
