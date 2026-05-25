'use client'

import { useState } from 'react'
import Link from 'next/link'

function PriceRow({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
      <span className="text-gray-700 text-sm">{label}</span>
      <span className="font-semibold text-navy text-sm">{price}</span>
    </div>
  )
}

function SectionCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-navy px-6 py-4">
        <h3 className="font-playfair text-white text-lg font-semibold">{title}</h3>
      </div>
      <div className="px-6 py-4">{children}</div>
    </div>
  )
}

function TravelAndGoodToKnow() {
  return (
    <>
      <SectionCard title="Travel Fees">
        <PriceRow label="Under 30 min from Ian's location" price="Free" />
        <PriceRow label="30–60 minutes" price="$60" />
        <PriceRow label="60–90 minutes" price="$100" />
        <PriceRow label="90–120 minutes" price="$200" />
      </SectionCard>

      <div className="bg-sky-brand/10 border border-sky-brand/30 rounded-xl p-6">
        <h3 className="font-playfair text-navy text-lg font-semibold mb-3">Good to Know</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-gold mt-0.5">✓</span>
            All photos delivered high-res via online gallery link
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold mt-0.5">✓</span>
            All video fully edited — no raw footage
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold mt-0.5">✓</span>
            2–3 business day turnaround on most packages
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold mt-0.5">✓</span>
            FAA Part 107 certified &amp; fully insured
          </li>
        </ul>
      </div>
    </>
  )
}

function RealEstateTab() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* MLS Photography */}
        <SectionCard title="MLS Photography (by sq ft)">
          <PriceRow label="Under 2,000 sq ft" price="$110" />
          <PriceRow label="2,000–3,000 sq ft" price="$120" />
          <PriceRow label="3,000–4,000 sq ft" price="$160" />
          <PriceRow label="4,000–5,000 sq ft" price="$210" />
          <PriceRow label="Over 5,000 sq ft" price="$260" />
        </SectionCard>

        {/* Aerial Drone Photos */}
        <SectionCard title="Aerial Drone Photos">
          <PriceRow label="Under 5 acres" price="$75" />
          <PriceRow label="5–50 acres" price="$90" />
          <PriceRow label="51–100 acres" price="$120" />
          <PriceRow label="Over 100 acres" price="Call for quote" />
          <div className="mt-3 bg-gold/10 rounded-lg px-4 py-2 text-xs text-gold-dark font-medium">
            💡 Add aerial to an MLS package and save $15
          </div>
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Aerial Video */}
        <SectionCard title="Aerial Drone Video (w/ Full Editing)">
          <PriceRow label="1 minute" price="$100" />
          <PriceRow label="2 minutes" price="$200" />
        </SectionCard>

        {/* Walk-Through Video */}
        <SectionCard title="Walk-Through Video">
          <PriceRow label="1 minute" price="$120" />
          <PriceRow label="1.5 minutes" price="$160" />
          <PriceRow label="2 minutes" price="$200" />
        </SectionCard>
      </div>

      {/* Social Media Video */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="Drone Promo Video → Social Media Edit">
          <PriceRow label="15-second highlight" price="$30" />
          <PriceRow label="30-second highlight" price="$60" />
          <div className="mt-3 bg-gold/10 rounded-lg px-4 py-2 text-xs text-gold-dark font-medium">
            💡 Add-on to any drone video package
          </div>
        </SectionCard>

        <SectionCard title="Social Media Drone Video Only">
          <PriceRow label="15 seconds" price="$60" />
          <PriceRow label="30 seconds" price="$100" />
          <div className="mt-3 bg-gold/10 rounded-lg px-4 py-2 text-xs text-gold-dark font-medium">
            📱 Vertical or square format — ready to post
          </div>
        </SectionCard>
      </div>

      {/* Add-Ons */}
      <SectionCard title="Add-Ons">
        <PriceRow label="Twilight photos (3–5 pics)" price="$75" />
        <PriceRow label="Virtual staging (per image)" price="$20" />
        <PriceRow label="360° aerial panoramic" price="$20" />
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TravelAndGoodToKnow />
      </div>

      {/* Deposit Policy */}
      <div className="bg-gold/10 border border-gold/30 rounded-xl px-6 py-5">
        <div className="flex items-start gap-3">
          <span className="text-gold text-xl mt-0.5">💰</span>
          <div>
            <p className="font-playfair text-navy text-lg font-semibold mb-1">$100 Deposit Required</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              A $100 deposit is required to confirm and schedule your session. Should you need to cancel, or if the final deliverables don't meet your expectations, that deposit is returned to you in full — no questions asked. When everything goes smoothly, the $100 is simply applied toward your total. A receipt will be sent to your preferred email upon payment.
            </p>
          </div>
        </div>
      </div>

      {/* Cancellation */}
      <div className="bg-navy rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-playfair text-white text-lg font-semibold">Same-Day Cancellation or Reschedule</p>
          <p className="text-white/60 text-sm mt-1">Please give as much notice as possible — weather and scheduling can be tricky.</p>
        </div>
        <div className="text-3xl font-bold text-gold whitespace-nowrap">$50 fee</div>
      </div>
    </div>
  )
}

function GeneralServicesTab() {
  return (
    <div className="space-y-8">
      {/* Events */}
      <div>
        <h2 className="font-playfair text-2xl text-navy font-bold mb-4">
          Events — Weddings, Graduations, Festivals
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SectionCard title="Drone Photos">
            <PriceRow label="Up to 1 hour" price="$150" />
            <PriceRow label="Up to 2 hours" price="$250" />
            <PriceRow label="Half day" price="$400" />
          </SectionCard>

          <SectionCard title="Video (w/ Full Editing)">
            <PriceRow label="1–2 min highlight" price="$200" />
            <PriceRow label="3–5 min full edit" price="$350" />
            <PriceRow label="Photo + Video combo" price="Call for quote" />
          </SectionCard>
        </div>
      </div>

      {/* Construction */}
      <div>
        <h2 className="font-playfair text-2xl text-navy font-bold mb-4">
          Construction &amp; Progress Documentation
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SectionCard title="Single Visit">
            <PriceRow label="Drone photo documentation" price="$120" />
            <PriceRow label="Photo + video summary" price="$200" />
          </SectionCard>

          <SectionCard title="Recurring Visits">
            <PriceRow label="Monthly visits" price="$100/visit" />
            <PriceRow label="Weekly visits" price="$80/visit" />
            <div className="mt-3 bg-gold/10 rounded-lg px-4 py-2 text-xs text-gold-dark font-medium">
              💡 Discount applied automatically on recurring bookings
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Commercial */}
      <div>
        <h2 className="font-playfair text-2xl text-navy font-bold mb-4">
          Commercial Business &amp; Storefronts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SectionCard title="Drone Photos">
            <PriceRow label="Exterior / storefront" price="$125" />
            <PriceRow label="Full property &amp; grounds" price="$200" />
          </SectionCard>

          <SectionCard title="Video">
            <PriceRow label="1 min promo" price="$175" />
            <PriceRow label="2 min promo" price="$275" />
          </SectionCard>
        </div>
      </div>

      {/* Outdoor & Land */}
      <div>
        <h2 className="font-playfair text-2xl text-navy font-bold mb-4">
          Outdoor Recreation &amp; Hunting Land
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SectionCard title="Drone Photos">
            <PriceRow label="Under 50 acres" price="$100" />
            <PriceRow label="50–150 acres" price="$175" />
            <PriceRow label="Over 150 acres" price="Call for quote" />
          </SectionCard>

          <SectionCard title="Video">
            <PriceRow label="1 min land tour" price="$150" />
            <PriceRow label="2 min land tour" price="$250" />
            <div className="mt-3 bg-gold/10 rounded-lg px-4 py-2 text-xs text-gold-dark font-medium">
              🌿 Great for land listings, hunting leases &amp; personal keepsakes
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h2 className="font-playfair text-2xl text-navy font-bold mb-4">
          Social Media Clips
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SectionCard title="Drone Promo Video → Social Media Edit">
            <PriceRow label="15-second highlight" price="$30" />
            <PriceRow label="30-second highlight" price="$60" />
            <div className="mt-3 bg-gold/10 rounded-lg px-4 py-2 text-xs text-gold-dark font-medium">
              💡 Add-on to any video package
            </div>
          </SectionCard>

          <SectionCard title="Social Media Drone Video Only">
            <PriceRow label="15 seconds" price="$100" />
            <PriceRow label="30 seconds" price="$200" />
            <div className="mt-3 bg-gold/10 rounded-lg px-4 py-2 text-xs text-gold-dark font-medium">
              📱 Vertical or square format — ready to post
            </div>
          </SectionCard>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TravelAndGoodToKnow />
      </div>

      {/* Deposit Policy */}
      <div className="bg-gold/10 border border-gold/30 rounded-xl px-6 py-5">
        <div className="flex items-start gap-3">
          <span className="text-gold text-xl mt-0.5">💰</span>
          <div>
            <p className="font-playfair text-navy text-lg font-semibold mb-1">$100 Deposit Required</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              A $100 deposit is required to confirm and schedule your session. Should you need to cancel, or if the final deliverables don't meet your expectations, that deposit is returned to you in full — no questions asked. When everything goes smoothly, the $100 is simply applied toward your total. A receipt will be sent to your preferred email upon payment.
            </p>
          </div>
        </div>
      </div>

      {/* Cancellation */}
      <div className="bg-navy rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-playfair text-white text-lg font-semibold">Same-Day Cancellation or Reschedule</p>
          <p className="text-white/60 text-sm mt-1">Please give as much notice as possible.</p>
        </div>
        <div className="text-3xl font-bold text-gold whitespace-nowrap">$50 fee</div>
      </div>
    </div>
  )
}

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<'realestate' | 'general'>('realestate')

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex gap-2 mb-10 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('realestate')}
          className={`px-6 py-3 font-semibold text-sm transition-colors border-b-2 -mb-px ${
            activeTab === 'realestate'
              ? 'text-navy border-gold'
              : 'text-gray-500 border-transparent hover:text-navy'
          }`}
        >
          Real Estate MLS
        </button>
        <button
          onClick={() => setActiveTab('general')}
          className={`px-6 py-3 font-semibold text-sm transition-colors border-b-2 -mb-px ${
            activeTab === 'general'
              ? 'text-navy border-gold'
              : 'text-gray-500 border-transparent hover:text-navy'
          }`}
        >
          General Services
        </button>
      </div>

      {activeTab === 'realestate' ? <RealEstateTab /> : <GeneralServicesTab />}

      {/* Book CTA */}
      <div className="mt-14 text-center">
        <p className="text-gray-500 mb-4">Questions about pricing? Just reach out.</p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-gold hover:bg-gold-light text-navy font-semibold rounded transition-colors"
        >
          Book a Session →
        </Link>
      </div>
    </div>
  )
}
