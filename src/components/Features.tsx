import { Zap, Shield, Headphones, CreditCard, RefreshCw, Lock, Clock, Globe } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Delivery',
    description: 'Receive your product credentials immediately after payment.',
  },
  {
    icon: Shield,
    title: 'Warranty Included',
    description: 'All products come with replacement warranty.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our team is available around the clock to help you.',
  },
  {
    icon: CreditCard,
    title: 'Multiple Payments',
    description: 'Pay with crypto, PayPal, card, and more.',
  },
  {
    icon: RefreshCw,
    title: 'Free Replacements',
    description: 'Get free account replacements if issues arise.',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your data is protected with enterprise security.',
  },
  {
    icon: Clock,
    title: 'Long-Lasting Accounts',
    description: 'Accounts designed to work for months or years.',
  },
  {
    icon: Globe,
    title: 'Worldwide Access',
    description: 'Products work globally with no restrictions.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're committed to providing the best digital products with exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:transform hover:scale-[1.02]"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
