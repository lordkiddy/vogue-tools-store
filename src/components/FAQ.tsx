import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does instant delivery work?',
    answer: 'Once you complete your payment, you\'ll receive your account credentials immediately via Telegram or email. Most orders are delivered within 1-5 minutes.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept PayPal, credit/debit cards, crypto (BTC, ETH, USDT), and other payment methods. Contact us for alternative payment options.',
  },
  {
    question: 'Is there a warranty on products?',
    answer: 'Yes! All our products come with a replacement warranty. If your account has any issues within the warranty period, we\'ll replace it for free.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'We offer refunds for legitimate issues. If your account doesn\'t work as described, contact us within 24 hours for a full refund.',
  },
  {
    question: 'How long do accounts last?',
    answer: 'Most accounts last 1-6 months depending on the product. We offer warranty protection so you\'ll get a replacement if any issues occur.',
  },
  {
    question: 'Do you offer bulk discounts?',
    answer: 'Yes! Contact us on Telegram for bulk orders. We offer special discounts for resellers and large orders.',
  },
  {
    question: 'Are the accounts safe to use?',
    answer: 'Absolutely! All our accounts are legally created and safe to use. We never use stolen or hacked credentials.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can reach us on Telegram at @voguetools. We\'re available 24/7 to help with any questions or issues.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-400">
            Got questions? We've got answers. Can't find what you're looking for? Contact us!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
