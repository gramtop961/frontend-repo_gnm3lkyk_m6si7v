import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function ContactForm({ onEvent }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('I’d like a private design assessment.');

  const emailHref = () => {
    const to = 'studio@luxorea.example';
    const subject = encodeURIComponent('Private Design Assessment – Luxoréa');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
    return `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const whatsappHref = () => {
    const phoneNumber = '15551234567'; // example international number
    const text = encodeURIComponent(`Luxoréa Inquiry\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n${message}`);
    return `https://wa.me/${phoneNumber}?text=${text}`;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onEvent?.('form_submit');
    // Soft submit: open email client as primary, WhatsApp is secondary quick action
    window.location.href = emailHref();
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">Begin with precision</h2>
            <p className="mt-3 text-neutral-700 max-w-prose">
              Share your room dimensions or a simple brief. We’ll advise the optimal fabric weight, lining, and hardware for a tailored fall and faultless function.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-600 text-sm">
              <li>• Lead time: typically 10–21 days depending on specification</li>
              <li>• Installation: discreet, on-time, fully protected surfaces</li>
              <li>• Swatches: couriered on request in protective envelopes</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-6">
            <div className="grid gap-4">
              <label className="grid gap-1">
                <span className="text-sm text-neutral-700">Name</span>
                <input required value={name} onChange={(e) => setName(e.target.value)}
                  className="rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Your full name" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-neutral-700">Email</span>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="you@example.com" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-neutral-700">Phone</span>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="+1 555 123 4567" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-neutral-700">Message</span>
                <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                  className="rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300" />
              </label>
              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" onClick={() => onEvent?.('cta_book_assessment')} className="rounded-2xl bg-neutral-900 text-white px-5 py-2.5 text-sm inline-flex items-center gap-2">
                  <Mail size={16} /> Send by Email
                </button>
                <a href={whatsappHref()} onClick={() => onEvent?.('cta_whatsapp')}
                  className="rounded-2xl border border-neutral-300 px-5 py-2.5 text-sm inline-flex items-center gap-2">
                  <Phone size={16} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
