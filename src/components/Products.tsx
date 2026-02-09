import { useState } from 'react'
import { Star, Zap, Check } from 'lucide-react'

const categories = ['All', 'Streaming', 'Software', 'Security', 'Keys']

const products = [
  {
    id: 1,
    name: 'Netflix Premium',
    category: 'Streaming',
    description: '4K UHD • Multiple Users • No Ads',
    price: 4.99,
    originalPrice: 15.99,
    rating: 4.9,
    sales: 2847,
    features: ['4K Quality', '4 Screens', 'Offline Download', 'No Ads'],
    popular: true,
  },
  {
    id: 2,
    name: 'Spotify Premium',
    category: 'Streaming',
    description: 'HiFi • Offline • No Ads',
    price: 2.99,
    originalPrice: 10.99,
    rating: 4.8,
    sales: 3421,
    features: ['HiFi Audio', 'Offline Mode', 'Unlimited Skips', 'No Ads'],
  },
  {
    id: 3,
    name: 'Disney+ Bundle',
    category: 'Streaming',
    description: 'Star+ • Hulu • No Ads',
    price: 6.99,
    originalPrice: 24.99,
    rating: 4.9,
    sales: 1893,
    features: ['All 3 Services', '4K Quality', 'Offline Download', 'Family Plan'],
    popular: true,
  },
  {
    id: 4,
    name: 'NordVPN Premium',
    category: 'Security',
    description: '6 Devices • 5000+ Servers',
    price: 1.99,
    originalPrice: 11.99,
    rating: 4.8,
    sales: 5632,
    features: ['Fast Speeds', 'No Logs', 'Kill Switch', '24/7 Support'],
  },
  {
    id: 5,
    name: 'YouTube Premium',
    category: 'Streaming',
    description: 'Music + Video • No Ads',
    price: 3.99,
    originalPrice: 13.99,
    rating: 4.7,
    sales: 2156,
    features: ['Background Play', 'YouTube Music', 'No Ads', 'Offline'],
  },
  {
    id: 6,
    name: 'Canva Pro',
    category: 'Software',
    description: 'Unlimited Designs • Brand Kit',
    price: 2.49,
    originalPrice: 12.99,
    rating: 4.9,
    sales: 4521,
    features: ['Premium Templates', 'Brand Kit', 'Magic Resize', 'Background Remover'],
    popular: true,
  },
  {
    id: 7,
    name: 'ChatGPT Plus',
    category: 'Software',
    description: 'GPT-4 • Advanced AI • Priority',
    price: 9.99,
    originalPrice: 20.00,
    rating: 4.9,
    sales: 6789,
    features: ['GPT-4 Access', 'DALL-E 3', 'Priority Support', 'No Rate Limits'],
  },
  {
    id: 8,
    name: 'Adobe Creative Cloud',
    category: 'Software',
    description: 'All Apps • 100GB Cloud',
    price: 14.99,
    originalPrice: 54.99,
    rating: 4.8,
    sales: 3214,
    features: ['All Adobe Apps', '100GB Storage', 'Fonts Library', 'Templates'],
  },
  {
    id: 9,
    name: 'Windows 11 Pro Key',
    category: 'Keys',
    description: 'Lifetime License • Instant Delivery',
    price: 7.99,
    originalPrice: 199.00,
    rating: 4.8,
    sales: 8923,
    features: ['Lifetime Key', 'Instant Delivery', 'Support', 'Multi-language'],
    popular: true,
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our premium selection of digital products. All with instant delivery and warranty.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:transform hover:scale-[1.02]"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm">{product.description}</p>
                </div>
                {product.popular && (
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-xs rounded-full">
                    Popular
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.features.map((feature, idx) => (
                  <span key={idx} className="flex items-center gap-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                    <Check size={12} className="text-green-400" />
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">{product.sales.toLocaleString()} sales</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold">${product.price}</span>
                  <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
                </div>
                <a 
                  href="https://t.me/voguetools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Zap size={16} />
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
