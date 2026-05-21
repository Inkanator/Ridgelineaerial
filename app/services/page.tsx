import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Transparent drone photography and video pricing for real estate MLS, events, construction, commercial, and land services in East Tennessee.',
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="bg-navy py-16 px-4 text-center">
        <h1 className="font-playfair text-5xl text-white font-bold mb-4">Services &amp; Pricing</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Straightforward pricing with no hidden fees. All packages include full editing and fast turnaround.
        </p>
      </div>
      <ServicesClient />
    </div>
  )
}
