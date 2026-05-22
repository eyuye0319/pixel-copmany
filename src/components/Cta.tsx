import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

export default function Cta() {
  return (
    <section id="contact" className="relative bg-[#060f1e] py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Large glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-8">
          Get Started
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
          Let's Turn Your Idea{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Into Customers
          </span>
        </h2>

        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Whether you're launching a product, scaling a brand, or need a complete growth system — Pixel has the team, the tools, and the track record to make it happen.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="mailto:hello@pixelcreative.io"
            className="group flex items-center gap-2.5 px-8 py-4 text-base font-bold text-[#050d1a] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 w-full sm:w-auto justify-center"
          >
            <Mail size={18} />
            Send Us an Email
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/message/pixelcreative"
            className="group flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white border border-slate-700 rounded-xl hover:border-cyan-500/50 hover:bg-cyan-500/8 transition-all w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} className="text-cyan-400" />
            WhatsApp Us
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-slate-600 text-sm">
          {[
            'Free initial consultation',
            'Dedicated account manager',
            'Results-focused approach',
            'No hidden fees',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cyan-500/60" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
