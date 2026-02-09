import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Alex M.',
    rating: 5,
    comment: 'Super fast delivery! Got my Netflix account within minutes. Works perfectly.',
    date: '2 days ago',
  },
  {
    name: 'Sarah K.',
    rating: 5,
    comment: 'Best place to get premium accounts. Customer support is amazing!',
    date: '1 week ago',
  },
  {
    name: 'Mike R.',
    rating: 5,
    comment: 'Been using their NordVPN for months. Never had any issues. Highly recommend!',
    date: '3 days ago',
  },
  {
    name: 'Emma L.',
    rating: 5,
    comment: 'Got Canva Pro at an amazing price. The account is still working great!',
    date: '5 days ago',
  },
  {
    name: 'James W.',
    rating: 4,
    comment: 'Quick delivery and good prices. Will definitely buy again.',
    date: '1 day ago',
  },
  {
    name: 'Olivia P.',
    rating: 5,
    comment: 'Excellent service! The ChatGPT Plus account works perfectly.',
    date: '4 days ago',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Customer Reviews
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{review.comment}"</p>
              <div className="flex justify-between items-center">
                <span className="font-medium">{review.name}</span>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-gray-800 rounded-2xl p-8 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div>
              <div className="text-4xl font-bold text-cyan-400">15K+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400">4.9/5</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400">50K+</div>
              <div className="text-gray-400">Total Orders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
