import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Share2, BarChart3, Palette } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Palette,
      title: 'Tap-and-Share Networking',
      description: 'Revolutionize how you exchange contact information. Our NFC-enabled cards let you share your digital profile with a single tap, making networking effortless and memorable.',
      features: ['Instant contact sharing', 'Digital profile linking', 'Analytics tracking', 'Multi-platform support']
    },
    {
      icon: Share2,
      title: 'Digital Profile Linkage',
      description: 'Connect your physical card to a comprehensive digital presence. Seamlessly link to your social media, portfolio, and business information for complete connectivity.',
      features: ['Social media integration', 'Portfolio showcase', 'Real-time updates', 'Custom branding']
    },
    {
      icon: Zap,
      title: 'Real-Time Content Updates',
      description: 'Keep your information fresh without reprinting. Update your digital content instantly and watch changes reflect across all your cards in real-time.',
      features: ['Live content sync', 'Version control', 'Backup systems', 'API access']
    },
    {
      icon: BarChart3,
      title: 'Interaction Analytics',
      description: 'Gain insights into how people engage with your card. Track taps, clicks, and conversions to understand your networking impact.',
      features: ['Engagement metrics', 'Conversion tracking', 'Geographic data', 'Custom reports']
    }
  ];

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
              Unlocking Creative Connections
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Our comprehensive suite of services transforms how creative professionals connect, share, and grow their networks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="text-cyan-400" size={28} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Networking?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Get your PIXEL card today and start creating meaningful connections that matter.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105">
              Get Your Card Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
