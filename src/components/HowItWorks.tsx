import { Lightbulb, Map, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Idea from Client',
    desc: 'You share your vision — a product launch, a new service, an app, or a campaign. We listen, ask the right questions, and understand what success looks like for your business.',
    detail: 'Discovery & Briefing',
  },
  {
    number: '02',
    icon: Map,
    title: 'Strategy Design',
    desc: 'Our team crafts a full-funnel growth strategy tailored to your audience, market, and goals. This covers digital, creative, and field approaches working in sync.',
    detail: 'Planning & Architecture',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execution',
    desc: 'We deploy simultaneously across digital channels and the field. Designers produce assets, developers build systems, marketers launch campaigns, and field teams activate on the ground.',
    detail: 'Digital + Field Activation',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Customer Acquisition & Growth',
    desc: 'Leads become customers. Customers become advocates. We track every conversion, optimize every channel, and continuously scale what works — until you own your market.',
    detail: 'Results & Optimization',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#050d1a] py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(34,211,238,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            The Process
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            How{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Pixel Works
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            A proven, repeatable system that turns a client's idea into a market reality.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ number, icon: Icon, title, desc, detail }, i) => (
              <div key={number} className="relative flex flex-col">
                {/* Step connector dots */}
                <div className="hidden lg:flex absolute -top-[17px] left-1/2 -translate-x-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-[#050d1a] border-2 border-cyan-500/60 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                </div>

                <div
                  className={`group flex flex-col p-7 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300 h-full ${
                    i % 2 === 0 ? '' : 'lg:mt-8'
                  }`}
                >
                  {/* Number badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                    <span className="text-4xl font-black text-slate-800 group-hover:text-slate-700 transition-colors">
                      {number}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-cyan-500 tracking-widest uppercase mb-2">{detail}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
