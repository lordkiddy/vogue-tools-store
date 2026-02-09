import { Shield, Zap, Users, Lock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-gray-950 to-gray-950"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm text-purple-300">Premium Digital Products</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Vogue Tools Store
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Your trusted source for premium digital products. Instant delivery, secure payments, and 24/7 support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="https://t.me/voguetools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            Browse Products
          </a>
          <a 
            href="#features" 
            className="px-8 py-4 border border-gray-700 rounded-full font-semibold hover:bg-gray-800 transition-colors text-lg"
          >
            Learn More
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-4">
            <Users className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
            <div className="text-2xl font-bold">15K+</div>
            <div className="text-gray-400 text-sm">Happy Customers</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-4">
            <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
            <div className="text-2xl font-bold">4.9/5</div>
            <div className="text-gray-400 text-sm">Rating</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-4">
            <Shield className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <div className="text-2xl font-bold">100%</div>
            <div className="text-gray-400 text-sm">Secure</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-4">
            <Lock className="w-8 h-8 mx-auto mb-2 text-purple-400" />
            <div className="text-2xl font-bold">Instant</div>
            <div className="text-gray-400 text-sm">Delivery</div>
          </div>
        </div>
      </div>
    </section>
  )
}
