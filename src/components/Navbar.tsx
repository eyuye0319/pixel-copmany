import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Card', href: '/card' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050d1a]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Zap size={16} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Pixel<span className="text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-semibold text-white border border-slate-700 rounded-lg hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all duration-200"
          >
            Contact
          </Link>
          <Link
            to="/card"
            className="px-5 py-2 text-sm font-semibold text-[#050d1a] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25"
          >
            Get Card
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#050d1a]/98 backdrop-blur-md border-t border-slate-800`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/card"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2.5 text-sm font-semibold text-center text-[#050d1a] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"
          >
            Get Card
          </Link>
        </div>
      </div>
    </nav>
  );
}
