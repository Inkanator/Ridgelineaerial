import type { Metadata } from 'next'
import Link from 'next/link'
import DroneLogo from '@/components/DroneLogo'

export const metadata: Metadata = {
  title: 'Payment Successful | Ridgeline Aerial',
}

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 flex flex-col">
      <div className="bg-navy py-10 px-4 text-center">
        <Link href="/" className="inline-flex items-center gap-3">
          <DroneLogo size={36} showMountains={false} />
          <span className="font-playfair text-white text-xl font-bold tracking-wide">
            Ridgeline Aerial
          </span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="font-playfair text-3xl text-navy font-bold mb-3">Payment Received!</h1>
          <p className="text-gray-500 mb-2">
            Thanks for booking with Ridgeline Aerial. Ian will be in touch shortly to confirm your session details.
          </p>
          <p className="text-gray-400 text-sm mb-8">
            If you have any questions, call or text{' '}
            <a href="tel:4239561268" className="text-gold font-semibold">
              423-956-1268
            </a>
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gold hover:bg-gold-light text-navy font-semibold rounded-xl transition-colors text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
