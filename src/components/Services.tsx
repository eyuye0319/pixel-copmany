import { Video, Palette, BarChart2, Code2, Users, Megaphone, Share2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Video Editing & Creative Ads',
    desc: 'High-impact video content, reels, ads, and branded media that stop the scroll and drive action.',
    tags: ['Reels', 'Ad Creative', 'Motion Graphics'],
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    icon: Palette,
    title: 'Graphic Design & Branding',
    desc: 'Brand identity, visual systems, marketing materials — everything designed to build lasting recognition.',
    tags: ['Brand Identity', 'Visual Systems', 'Print & Digital'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: BarChart2,
    title: 'Digital Marketing & Paid Ads',
    desc: 'Data-driven paid campaigns across Meta, Google, TikTok, and more — optimized for customer acquisition.',
    tags: ['Meta Ads', 'Google Ads', 'Performance'],
    color: 'from-sky-400 to-sky-600',
  },
  {
    icon: Code2,
    title: 'Web Development & Landing Pages',
    desc: 'Conversion-optimized websites, landing pages, and onboarding systems built to turn visitors into customers.',
    tags: ['Landing Pages', 'Web Apps', 'Onboarding'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Users,
    title: 'Field Sales & Customer Registration',
    desc: 'On-the-ground teams that educate, engage, and register customers directly — where they live and work.',
    tags: ['Field Teams', 'Direct Sales', 'Lead Capture'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Megaphone,
    title: 'Brand Promotion Campaigns',
    desc: 'End-to-end brand campaigns that create awareness, generate buzz, and activate communities at scale.',
    tags: ['Campaigns', 'Activations', 'Events'],
    color: 'from-sky-500 to-blue-400',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    desc: 'Strategic content creation, community management, and growth across all major social platforms.',
    tags: ['Content', 'Community', 'Analytics'],
    color: 'from-cyan-400 to-sky-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#060f1e] py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Full-Service Growth{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Capabilities
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Everything your brand needs to acquire customers, build presence, and sustain growth — under one roof.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map(({ icon: Icon, title, desc, tags, color }) => (
            <div
              key={title}
              className="group relative p-7 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${color} opacity-5 rounded-full blur-2xl`} />
              </div>

              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} bg-opacity-10 flex items-center justify-center mb-5 shadow-lg`}>
                <Icon size={20} className="text-white" />
              </div>

              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium text-slate-400 border border-slate-700 rounded-md bg-slate-800/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 7th card — full width highlight */}
        <div className="mt-5">
          <div className="group relative p-7 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                <Share2 size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">{services[6].title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{services[6].desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 md:shrink-0">
                {services[6].tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-medium text-slate-400 border border-slate-700 rounded-md bg-slate-800/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-[#050d1a] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-cyan-500/25"
          >
            Discuss Your Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
