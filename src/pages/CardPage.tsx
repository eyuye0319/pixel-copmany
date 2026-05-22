import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CardPage() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantities, setQuantities] = useState({ essential: 1, pro: 1, executive: 1 });

  const cards = [
    {
      id: 'essential',
      name: 'The Essential',
      color: 'Matte Black',
      features: ['NFC chip', 'Basic analytics', 'Single profile link', '1 year support'],
      price: '$99',
      image: 'https://images.pexels.com/photos/3583447/pexels-photo-3583447.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'pro',
      name: 'The Pro',
      color: 'Carbon Fiber',
      features: ['Advanced NFC', 'Real-time analytics', 'Multi-profile linking', '2 year support', 'Priority support'],
      price: '$199',
      image: 'https://images.pexels.com/photos/3584314/pexels-photo-3584314.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'executive',
      name: 'The Executive',
      color: 'Polished Chrome',
      features: ['Premium NFC', 'Advanced analytics', 'Unlimited profiles', '5 year support', '24/7 support', 'Custom engraving'],
      price: '$299',
      image: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const colors = ['black', 'silver', 'rose', 'blue'];

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
              Order Your Custom PIXEL Card
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Choose the perfect card tier to match your professional needs and start networking smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                  selectedCard === card.id
                    ? 'border-cyan-500 bg-gradient-to-br from-slate-900 to-slate-800'
                    : 'border-slate-700 hover:border-cyan-500/50 bg-gradient-to-br from-slate-900/80 to-slate-800/80'
                }`}
              >
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <p className="absolute bottom-4 left-4 right-4 text-sm text-cyan-300 font-semibold">{card.color}</p>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{card.name}</h3>

                  <div className="mb-6">
                    <p className="text-3xl font-bold text-cyan-400 mb-1">{card.price}</p>
                    <p className="text-gray-400 text-sm">per card</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-200">
                        <Check size={16} className="text-cyan-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedCard === card.id && (
                    <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30 mb-4">
                      <label className="text-sm font-semibold text-gray-300 block mb-2">Quantity</label>
                      <select
                        value={quantities[card.id as keyof typeof quantities]}
                        onChange={(e) => setQuantities({ ...quantities, [card.id]: parseInt(e.target.value) })}
                        className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                      >
                        {[1, 5, 10, 25, 50, 100].map((qty) => (
                          <option key={qty} value={qty}>{qty}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCard === card.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}>
                    {selectedCard === card.id ? 'Selected' : 'Select Card'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Customization</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="text-sm font-semibold text-gray-300 block mb-4">Color</label>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all ${
                        selectedColor === color
                          ? 'border-cyan-400 scale-110'
                          : 'border-slate-600 hover:border-cyan-400/50'
                      } ${
                        color === 'black' ? 'bg-black' :
                        color === 'silver' ? 'bg-gray-300' :
                        color === 'rose' ? 'bg-rose-400' :
                        'bg-blue-400'
                      }`}
                      title={color.charAt(0).toUpperCase() + color.slice(1)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-300 block mb-4">Add-ons</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="text-gray-300">Custom engraving (+$25)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="text-gray-300">Premium packaging (+$15)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl p-8 border border-cyan-500/30">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Order Total</p>
                <p className="text-4xl font-bold text-cyan-300">{selectedCard ? '$299' : 'Select a card'}</p>
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!selectedCard}>
                Proceed to Checkout
              </button>
            </div>
            <p className="text-gray-400 text-sm">Free shipping on orders over $100. All cards include 1-year warranty.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
