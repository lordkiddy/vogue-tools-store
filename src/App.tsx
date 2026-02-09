import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
