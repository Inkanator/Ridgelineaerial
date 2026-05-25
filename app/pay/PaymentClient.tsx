'use client'

import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function CheckoutForm({ amount, description }: { amount: number; description: string }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState('')
  const [processing, setProcessing] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!stripe || !elements) return

    setProcessing(true)
    setError('')

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/pay/success`,
      },
    })

    if (error) {
      setError(error.message ?? 'Something went wrong.')
      setProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 rounded-xl px-6 py-4 border border-gray-100">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Service</p>
        <p className="text-navy font-semibold">{description}</p>
      </div>

      <div className="bg-gray-50 rounded-xl px-6 py-4 border border-gray-100">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Amount Due</p>
        <p className="font-playfair text-3xl font-bold text-gold">
          ${amount.toFixed(2)}
        </p>
      </div>

      <PaymentElement />

      {error && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full py-4 bg-gold hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed text-navy font-semibold rounded-xl transition-colors"
      >
        {processing ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
      </button>

      <p className="text-center text-xs text-gray-400">
        Secured by Stripe · Your payment info is never stored by Ridgeline Aerial
      </p>
    </form>
  )
}

export default function PaymentClient({
  amount,
  description,
}: {
  amount: number
  description: string
}) {
  const [clientSecret, setClientSecret] = useState('')
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setLoadError(data.error)
        else setClientSecret(data.clientSecret)
      })
      .catch(() => setLoadError('Could not connect to payment processor.'))
  }, [amount, description])

  if (loadError) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">{loadError}</p>
        <p className="text-gray-500 text-sm">
          Please call or text Ian directly at{' '}
          <a href="tel:4239561268" className="text-navy font-semibold">
            423-956-1268
          </a>
        </p>
      </div>
    )
  }

  if (!clientSecret) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#C9A84C',
            colorText: '#0B1F3A',
            borderRadius: '12px',
            fontFamily: 'inherit',
          },
        },
      }}
    >
      <CheckoutForm amount={amount} description={description} />
    </Elements>
  )
}
