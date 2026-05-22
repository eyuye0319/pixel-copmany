import { Zap, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const links = {
  Services: ['Video & Creative Ads', 'Graphic Design', 'Digital Marketing', 'Web Development', 'Field Sales', 'Social Media'],
  Company: ['About Pixel', 'How It Works', 'Case Studies', 'NFC Solutions', 'Blog'],
  Contact: ['hello@pixelcreative.io', 'WhatsApp', 'LinkedIn', 'Instagram'],
};

const socials = [
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050d1a] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Pixel<span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              A full-service growth and customer acquisition agency. We help brands connect with customers through digital marketing, creative media, technology, and field activation.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href }) => (
                <a
                  key={href + Icon.name}
                  href={href}
                  className="w-9 h-9 rounded-lg border border-slate-800 bg-slate-900/60 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <div className="text-white text-xs font-bold tracking-widest uppercase mb-4">{section}</div>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-500 text-sm hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Pixel Creative Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-600 text-xs">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
