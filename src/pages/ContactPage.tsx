import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    subject: 'general'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '', subject: 'general' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#050d1a] text-white">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>

          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get in Touch with PIXEL Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Have questions about our cards or services? We're here to help and would love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300 mb-4">Send us an email and we'll respond within 24 hours.</p>
              <a href="mailto:hello@pixelcard.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                hello@pixelcard.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4">
                <Phone className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-300 mb-4">Call us during business hours for immediate support.</p>
              <a href="tel:+1-555-PIXEL-01" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                +1 (555) PIXEL-01
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4">
                <MapPin className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-gray-300 mb-4">We operate globally with local support in major cities.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Find a location
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: 'What is NFC and how does it work?', a: 'NFC (Near Field Communication) allows devices to communicate when tapped together. Our PIXEL cards use secure NFC chips to share your digital profile instantly.' },
                  { q: 'Can I update my information after ordering?', a: 'Absolutely! Your digital profile updates in real-time. All your PIXEL cards will reflect the latest information without reprinting.' },
                  { q: 'What devices are compatible?', a: 'Our cards work with any NFC-enabled smartphone including iPhones (XS and later) and most Android devices.' },
                  { q: 'Is my data secure?', a: 'Yes, we use enterprise-grade encryption and comply with all data protection regulations.' }
                ].map((faq, i) => (
                  <details key={i} className="group bg-slate-900 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors cursor-pointer">
                    <summary className="font-semibold text-gray-200 group-open:text-cyan-400 transition-colors flex justify-between items-center">
                      {faq.q}
                      <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-gray-300 mt-4">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
                    Thank you for reaching out! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-300 block mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-300 block mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-300 block mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-300 block mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="bulk">Bulk Order</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-300 block mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
