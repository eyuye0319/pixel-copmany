import { Users, TrendingUp, Globe, Target } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Customer Acquisition',
    desc: 'We build systems that bring real customers — not just clicks and impressions.',
  },
  {
    icon: Globe,
    title: 'End-to-End Execution',
    desc: 'From strategy to creative production to field activation, we own every step.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Engine',
    desc: 'We treat every campaign as a revenue engine, optimized for measurable growth.',
  },
  {
    icon: Users,
    title: 'Brand + Field',
    desc: 'We combine digital precision with human-scale field teams for total market coverage.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#050d1a] py-28 overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="absolute top-40 right-0 w-64 h-64 bg-blue-700/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
              About Pixel
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              We Bring Customers,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Not Just Marketing
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Most agencies stop at impressions. Pixel goes further. We are a full-service growth and customer acquisition agency that manages the entire journey — from the first moment someone hears your brand name to the moment they become a loyal customer.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              When a company launches a product, app, or service, Pixel becomes the bridge between that company and its customers. We handle awareness, education, onboarding, conversion, and growth — all under one roof.
            </p>

            {/* Brand strip */}
            <div className="flex flex-wrap gap-3">
              {['Marketing Agency', 'Brand Activation', 'Creative Production', 'Field Sales', 'Digital Solutions'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-300 border border-slate-700 rounded-lg bg-slate-800/40"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Positioning statement */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-600/10 to-cyan-500/5 rounded-3xl" />
          <div className="relative border border-slate-800 rounded-3xl px-8 py-10 md:px-14 md:py-12 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-semibold leading-relaxed max-w-4xl mx-auto">
              "Pixel is a creative growth agency that helps brands{' '}
              <span className="text-cyan-400">connect with customers</span> through digital marketing, creative media,
              technology, and field activation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
