import { MapPin, Monitor, FileText, Users, ArrowRight } from 'lucide-react';

const channels = [
  {
    icon: Users,
    label: 'Field Marketing',
    desc: 'On-ground teams deployed across target districts to educate riders and drivers directly.',
    stat: '5,000+ contacts/week',
  },
  {
    icon: Monitor,
    label: 'Digital Ad Campaigns',
    desc: 'Precision-targeted Meta and Google campaigns driving app installs and feature awareness.',
    stat: '2.4M impressions',
  },
  {
    icon: FileText,
    label: 'Landing Pages',
    desc: 'Conversion-optimized landing pages built for each audience segment with A/B tested copy.',
    stat: '34% conversion rate',
  },
  {
    icon: MapPin,
    label: 'User Onboarding',
    desc: 'Step-by-step onboarding flows, email sequences, and in-app guides designed by Pixel.',
    stat: '78% activation rate',
  },
];

const results = [
  { value: '120K', label: 'New Users Acquired' },
  { value: '4.2x', label: 'Return on Ad Spend' },
  { value: '6 Weeks', label: 'Time to Launch' },
  { value: '98%', label: 'Onboarding Completion' },
];

export default function CaseStudy() {
  return (
    <section id="case-studies" className="relative bg-[#060f1e] py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/4 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            Case Study
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Product Launch{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Support System
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            How Pixel helped a mobility tech company launch a new in-app feature and acquire 120,000 users in 6 weeks.
          </p>
        </div>

        {/* Case study card */}
        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 overflow-hidden">
          {/* Top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

          <div className="p-8 md:p-12">
            {/* Client context */}
            <div className="flex flex-col md:flex-row gap-6 md:items-center mb-10 pb-10 border-b border-slate-800">
              <div className="flex-1">
                <div className="text-xs text-cyan-500 font-semibold tracking-widest uppercase mb-2">The Challenge</div>
                <h3 className="text-2xl font-black text-white mb-3">
                  Launching a New Mobility Feature to 3 Million Users
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  A leading ride-hailing and delivery platform needed to launch a new subscription feature. The challenge: educate both drivers and riders, drive feature adoption, and onboard users at scale — across digital and physical touchpoints simultaneously.
                </p>
              </div>
              <div className="md:w-48 shrink-0">
                <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5 text-center">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Industry</div>
                  <div className="text-white font-bold">Mobility Tech</div>
                  <div className="mt-3 text-xs text-slate-500 uppercase tracking-widest mb-1">Market</div>
                  <div className="text-white font-bold">Multi-City</div>
                  <div className="mt-3 text-xs text-slate-500 uppercase tracking-widest mb-1">Duration</div>
                  <div className="text-white font-bold">6 Weeks</div>
                </div>
              </div>
            </div>

            {/* Execution channels */}
            <div className="mb-10">
              <div className="text-xs text-cyan-500 font-semibold tracking-widest uppercase mb-6">Pixel's Execution</div>
              <div className="grid sm:grid-cols-2 gap-4">
                {channels.map(({ icon: Icon, label, desc, stat }) => (
                  <div
                    key={label}
                    className="group flex gap-4 p-5 rounded-xl border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-800/40 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-bold text-sm">{label}</span>
                        <span className="text-cyan-400 text-xs font-semibold">{stat}</span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="text-xs text-cyan-500 font-semibold tracking-widest uppercase mb-6">Results Delivered</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {results.map(({ value, label }) => (
                  <div
                    key={label}
                    className="text-center p-5 rounded-xl bg-gradient-to-b from-slate-800/60 to-slate-900/40 border border-slate-700"
                  >
                    <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      {value}
                    </div>
                    <div className="text-slate-500 text-xs mt-2">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors"
          >
            Start a similar project with Pixel
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
