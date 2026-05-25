'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PaymentEntry() {
  const router = useRouter()
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const val = parseFloat(amount)
    if (isNaN(val) || val <= 0) {
      setError('Please enter a valid amount.')
      return
    }
    router.push(`/pay?amount=${val}&desc=Ridgeline+Aerial+Service`)
  }

  return (
    <div>
      <h2 className="font-playfair text-2xl text-navy font-bold mb-2">Enter Your Invoice Amount</h2>
      <p className="text-gray-500 text-sm mb-6">
        Ian will provide you with the amount due. Enter it below to pay securely.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount Due ($)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
            <input
              type="number"
              min="1"
              step="0.01"
              value={amount}
              onChange={(e) => { setAmount(e.target.value); setError('') }}
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:border-sky-brand text-sm outline-none transition-colors"
            />
          </div>
          {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gold hover:bg-gold-light text-navy font-semibold rounded-xl transition-colors text-sm"
        >
          Continue to Payment →
        </button>
      </form>

      <p className="text-center text-xs text-gray-400 mt-6">
        Not sure what you owe?{' '}
        <a href="tel:4239561268" className="text-navy font-semibold hover:text-gold transition-colors">
          Call or text Ian
        </a>
      </p>
    </div>
  )
}
