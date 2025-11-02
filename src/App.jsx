import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import ContactForm from './components/ContactForm';

function track(event, payload = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload, timestamp: Date.now() });
}

export default function App() {
  useEffect(() => {
    document.title = 'Luxoréa — Custom Curtains & Blinds | Quiet Luxury, Precisely Tailored';
    const meta = document.querySelector('meta[name="description"]');
    const desc = 'Luxoréa designs, crafts, and installs custom curtains and blinds with millimetre accuracy. Monochrome palette, champagne accents, refined materials.';
    if (meta) meta.setAttribute('content', desc);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = desc;
      document.head.appendChild(m);
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          'name': 'Luxoréa',
          'url': window.location.origin,
          'logo': window.location.origin + '/logo.svg',
          'sameAs': [
            'https://www.instagram.com/',
            'https://www.pinterest.com/'
          ]
        },
        {
          '@type': 'Product',
          'name': 'Custom Curtains & Blinds',
          'brand': { '@type': 'Brand', 'name': 'Luxoréa' },
          'description': 'Bespoke window dressings designed, measured, and installed with quiet luxury.',
          'offers': {
            '@type': 'Offer',
            'priceCurrency': 'USD',
            'price': '0',
            'availability': 'https://schema.org/PreOrder'
          }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'How accurate are your measurements?',
              'acceptedAnswer': { '@type': 'Answer', 'text': 'We specify within millimetres using laser distance tools and verified plumb and level checks.' }
            },
            {
              '@type': 'Question',
              'name': 'Do you handle installation?',
              'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Discreet, on-time installation with protected surfaces and thorough cleanup.' }
            }
          ]
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', position: 1, name: 'Home', item: window.location.href + '#home' },
            { '@type': 'ListItem', position: 2, name: 'Portfolio', item: window.location.href + '#portfolio' },
            { '@type': 'ListItem', position: 3, name: 'Contact', item: window.location.href + '#contact' }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleCTA = (type) => {
    track('cta_click', { type });
    const target = document.getElementById('contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEvent = (type) => track(type);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero onCTA={handleCTA} />

        {/* Products & Process summary */}
        <section id="products" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-8">
                <h2 className="font-serif text-2xl">Curtains</h2>
                <p className="mt-3 text-neutral-700">Linen, wool, and performance blends with blackout or interlining options. Ripple fold, pleated, or wave headings on champagne-finish tracks.</p>
              </div>
              <div className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-8">
                <h2 className="font-serif text-2xl">Blinds</h2>
                <p className="mt-3 text-neutral-700">Roman, roller, and concealed motorized systems tuned for control and silence. Sheer to full blackout with exacting edges.</p>
              </div>
            </div>
            <div id="process" className="mt-12 rounded-2xl bg-neutral-50 ring-1 ring-neutral-200 p-8">
              <h3 className="font-serif text-xl">Process</h3>
              <ol className="mt-4 grid sm:grid-cols-3 gap-6 text-sm text-neutral-700">
                <li className="rounded-xl bg-white p-4 ring-1 ring-neutral-200">H.A.P.I Opening → Hear, Assess, Plan, Invite. We begin privately, on your terms.</li>
                <li className="rounded-xl bg-white p-4 ring-1 ring-neutral-200">Raymond-Chin persuasion → Present precise options, prove with samples, and let details speak.</li>
                <li className="rounded-xl bg-white p-4 ring-1 ring-neutral-200">Measurement, fabrication, and installation with calm efficiency.</li>
              </ol>
            </div>
            <div id="pricing" className="mt-12 rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-8">
              <h3 className="font-serif text-xl">Pricing Philosophy</h3>
              <p className="mt-3 text-neutral-700">We price for craftsmanship, longevity, and flawless fit. Transparent itemization, no hidden surcharges, and superior aftercare.</p>
            </div>
          </div>
        </section>

        <PortfolioGrid />

        {/* About / Testimonials / FAQ Summary */}
        <section id="about" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl">About Luxoréa</h2>
                <p className="mt-3 text-neutral-700">A studio dedicated to the language of drapery. We refine proportion, fall, and function so your rooms speak in a calm, confident tone.</p>
              </div>
              <aside className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-6">
                <p className="text-sm text-neutral-600">“The silence when blinds close and the way their linen drapes hold a line—impeccable.”</p>
                <p className="mt-2 text-sm text-neutral-500">— A. Merino, Private Client</p>
              </aside>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl">FAQ</h2>
            <div className="mt-6 grid gap-4">
              <details className="rounded-xl ring-1 ring-neutral-200 p-4 bg-white">
                <summary className="cursor-pointer font-medium">Do you provide swatches?</summary>
                <p className="mt-2 text-neutral-700">Yes. We courier swatches on request after a brief to ensure accurate selection.</p>
              </details>
              <details className="rounded-xl ring-1 ring-neutral-200 p-4 bg-white">
                <summary className="cursor-pointer font-medium">What’s the typical timeline?</summary>
                <p className="mt-2 text-neutral-700">Consultation within days, fabrication 10–21 days, installation scheduled to your calendar.</p>
              </details>
            </div>
          </div>
        </section>

        <ContactForm onEvent={handleEvent} />
      </main>

      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Luxoréa. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a className="hover:underline" href="#portfolio">See Portfolio</a>
            <a className="hover:underline" href="#contact">Book Private Design Assessment</a>
            <a className="hover:underline" href="#products">Products</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
