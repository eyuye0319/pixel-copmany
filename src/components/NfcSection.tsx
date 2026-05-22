import { Wifi, Smartphone, CreditCard, Zap, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'NFC Business Cards',
    desc: 'Premium smart cards that instantly share your contact, portfolio, or social profiles with a single tap. No app required.',
  },
  {
    icon: Smartphone,
    title: 'Smart Packaging',
    desc: 'Embed NFC chips in product packaging to deliver instant product info, tutorials, warranties, and upsell experiences.',
  },
  {
    icon: Zap,
    title: 'Instant Customer Connection',
    desc: 'Customers tap your product, display, or card — and land directly in your onboarding flow, store, or campaign.',
  },
  {
    icon: Wifi,
    title: 'Campaign-Ready Tags',
    desc: 'Deploy NFC tags at events, retail locations, and activations. Track engagement, capture leads, and drive conversions in real time.',
  },
];

export default function NfcSection() {
  return (
    <section id="nfc" className="relative bg-[#050d1a] py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Decorative tech circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-cyan-500/5 absolute -inset-[250px]" />
        <div className="w-[700px] h-[700px] rounded-full border border-cyan-500/4 absolute -inset-[350px]" />
        <div className="w-[900px] h-[900px] rounded-full border border-cyan-500/3 absolute -inset-[450px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
              NFC Smart Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Connect Instantly{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                With One Tap
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Pixel designs and deploys NFC-powered solutions that bridge the physical and digital worlds. From smart business cards to campaign-enabled packaging, we give your brand instant connectivity with every customer touchpoint.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                'No app downloads required — works on all modern smartphones',
                'Customizable destination URLs for each campaign or product',
                'Real-time analytics on every tap and customer interaction',
                'Fully branded and premium quality materials',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>
                  <span className="text-slate-400 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-[#050d1a] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-cyan-500/25"
            >
              Get NFC Solutions
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all duration-300"
              >
                <div className="relative mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  {/* NFC signal rings */}
                  <div className="absolute top-0 left-0 w-12 h-12 rounded-xl border border-cyan-400/20 scale-110 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="absolute top-0 left-0 w-12 h-12 rounded-xl border border-cyan-400/10 scale-125 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom highlight strip */}
        <div className="mt-20 grid md:grid-cols-3 gap-5">
          {[
            { stat: '1 Tap', label: 'to connect with your brand' },
            { stat: '0 Apps', label: 'required to use NFC cards' },
            { stat: 'Instant', label: 'lead capture and analytics' },
          ].map(({ stat, label }) => (
            <div
              key={stat}
              className="flex items-center gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/40"
            >
              <div className="text-2xl font-black text-cyan-400 shrink-0">{stat}</div>
              <div className="text-slate-500 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
