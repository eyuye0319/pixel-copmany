import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CaseStudiesPage() {
  const navigate = useNavigate();

  const caseStudies = [
    {
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Creative Studio - ArtCo',
      role: 'Freelance Designer',
      company: 'Independent Consultant',
      metric: '40%',
      metricLabel: 'Increased Engagement',
      story: 'Sarah, a freelance designer, used PIXEL cards to streamline her networking at industry events. By tapping her card, clients could instantly access her portfolio and testimonials. Within 3 months, her engagement increased by 40% and she landed 5 major projects.',
      results: [
        '40% increase in networking engagement',
        '5 high-value client acquisitions',
        'Reduced business card waste by 100%',
        'Real-time portfolio updates'
      ]
    },
    {
      image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Tech Startup - InnovateLabs',
      role: 'Onboarding Specialist',
      company: 'Growth Stage Team',
      metric: '60%',
      metricLabel: 'Faster Client Onboarding',
      story: 'InnovateLabs distributed PIXEL cards to their entire team at conferences. Prospects could instantly access their entire service catalog, case studies, and team bios. The result? 60% faster onboarding and higher-quality leads.',
      results: [
        '60% faster client onboarding process',
        '35% higher quality leads',
        'Seamless team coordination',
        'Unified brand presence'
      ]
    },
    {
      image: 'https://images.pexels.com/photos/3182814/pexels-photo-3182814.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Creative Agency - BrandForce',
      role: 'Creative Director',
      company: 'Award-Winning Agency',
      metric: '80%',
      metricLabel: 'Portfolio Conversion Rate',
      story: 'BrandForce implemented PIXEL cards across their 25-person creative team. Each card linked to an interactive portfolio showcasing real-time project updates. They saw an 80% conversion rate when prospects interacted with their cards.',
      results: [
        '80% conversion rate on card interactions',
        'Real-time portfolio syncing',
        '25-person team coordination',
        'Award-winning project showcase'
      ]
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
              PIXEL Stories: Creativity in Action
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              See how creative professionals and organizations are transforming their networking with PIXEL cards.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="group">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="relative rounded-xl overflow-hidden h-96 md:h-full">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="mb-6">
                      <p className="text-cyan-400 text-sm font-semibold mb-2 uppercase tracking-wider">{study.role}</p>
                      <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                      <p className="text-gray-400">{study.company}</p>
                    </div>

                    <div className="bg-cyan-500/10 rounded-lg p-4 mb-6 border border-cyan-500/20">
                      <p className="text-cyan-400 text-sm mb-1 uppercase tracking-wider">Key Result</p>
                      <p className="text-4xl font-bold text-cyan-300 mb-2">{study.metric}</p>
                      <p className="text-gray-300">{study.metricLabel}</p>
                    </div>

                    <p className="text-gray-300 mb-8 leading-relaxed">{study.story}</p>

                    <div className="space-y-3">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-200">{result}</span>
                        </div>
                      ))}
                    </div>

                    <button className="mt-8 w-full py-3 border border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 font-semibold">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
