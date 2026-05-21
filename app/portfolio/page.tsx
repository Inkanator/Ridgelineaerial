import type { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse aerial drone photography and video samples from Ridgeline Aerial — real estate, events, land, and commercial work across East Tennessee.',
}

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      <div className="bg-navy py-16 px-4 text-center">
        <h1 className="font-playfair text-5xl text-white font-bold mb-4">Portfolio</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          A look at what&apos;s possible when you see East Tennessee from above.
        </p>
      </div>
      <PortfolioClient />
    </div>
  )
}
