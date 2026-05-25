import type { Metadata } from 'next'
import PaymentClient from './PaymentClient'
import PaymentEntry from './PaymentEntry'
import DroneLogo from '@/components/DroneLogo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pay Invoice | Ridgeline Aerial',
  description: 'Pay for your Ridgeline Aerial drone photography or video session securely online.',
}

interface Props {
  searchParams: Promise<{ amount?: string; desc?: string }>
}

export default async function PayPage({ searchParams }: Props) {
  const params = await searchParams
  const amount = parseFloat(params.amount ?? '')
  const description = params.desc ?? 'Ridgeline Aerial Service'
  const hasValidAmount = !isNaN(amount) && amount > 0

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-navy py-10 px-4 text-center">
        <Link href="/" className="inline-flex items-center gap-3 mb-4">
          <DroneLogo size={36} showMountains={false} />
          <span className="font-playfair text-white text-xl font-bold tracking-wide">
            Ridgeline Aerial
          </span>
        </Link>
        <h1 className="font-playfair text-3xl text-white font-bold mt-2">Pay Invoice</h1>
      </div>

      {/* Content */}
      <div className="max-w-lg mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {hasValidAmount ? (
            <PaymentClient amount={amount} description={description} />
          ) : (
            <PaymentEntry />
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Questions?{' '}
          <a href="tel:4239561268" className="text-navy hover:text-gold transition-colors font-medium">
            Call or text Ian at 423-956-1268
          </a>
        </p>
      </div>
    </div>
  )
}
