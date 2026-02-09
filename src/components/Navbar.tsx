import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Vogue Tools
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#products" className="hover:text-cyan-400 transition-colors">Products</a>
              <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
              <a href="#reviews" className="hover:text-cyan-400 transition-colors">Reviews</a>
              <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
              <a 
                href="https://t.me/voguetools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Shop Now
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Products</a>
            <a href="#features" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Features</a>
            <a href="#reviews" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Reviews</a>
            <a href="#faq" className="block px-3 py-2 hover:bg-gray-800 rounded-md">FAQ</a>
            <a href="https://t.me/voguetools" className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-md text-center mt-4">
              Shop Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
