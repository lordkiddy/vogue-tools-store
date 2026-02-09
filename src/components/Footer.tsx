import { ArrowUp, Send } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'Netflix', href: '#' },
    { name: 'Spotify', href: '#' },
    { name: 'Disney+', href: '#' },
    { name: 'NordVPN', href: '#' },
    { name: 'ChatGPT', href: '#' },
  ],
  support: [
    { name: 'Contact Us', href: '#' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-gray-800 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-gray-400">Join thousands of satisfied customers today.</p>
            </div>
            <a 
              href="https://t.me/voguetools"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <Send size={18} />
              Contact on Telegram
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Vogue Tools
            </span>
            <p className="mt-4 text-gray-400 text-sm">
              Your trusted source for premium digital products. Instant delivery, secure payments, and 24/7 support.
            </p>
            <a 
              href="https://t.me/voguetools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-cyan-400 hover:text-cyan-300"
            >
              @voguetools
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive deals and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-purple-500 text-sm"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-r-lg">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Vogue Tools Store. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Back to top
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
