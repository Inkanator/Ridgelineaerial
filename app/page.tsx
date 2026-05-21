import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ridgeline Aerial | Aerial Photography & Video – East Tennessee',
  description:
    'Professional FAA Part 107 certified drone photography and video in East Tennessee. Real estate, events, construction, commercial, and land services.',
}

const services = [
  {
    icon: '🏠',
    title: 'Real Estate MLS',
    desc: 'High-res aerial photos and video that make listings stand out.',
  },
  {
    icon: '🎉',
    title: 'Events',
    desc: 'Weddings, graduations, and festivals captured from above.',
  },
  {
    icon: '🏗️',
    title: 'Construction',
    desc: 'Progress documentation — single visits or recurring schedules.',
  },
  {
    icon: '🌲',
    title: 'Outdoor & Land',
    desc: 'Showcase your acreage, hunting land, or recreation property.',
  },
  {
    icon: '🏢',
    title: 'Commercial',
    desc: 'Exterior shots and promo videos for businesses and storefronts.',
  },
  {
    icon: '🎬',
    title: 'Drone Video',
    desc: 'Fully edited cinematic video for any use case.',
  },
]

const stats = [
  { value: 'FAA', label: 'Part 107 Certified' },
  { value: '2–3', label: 'Day Turnaround' },
  { value: 'HD', label: 'High-Res Delivery' },
  { value: '100%', label: 'Full Editing Included' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
        {/* Animated grid background */}
        <div className="absolute inset-0 animate-grid opacity-60" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/50 to-navy" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fade-in">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-sky-brand/20 border border-sky-brand/40 rounded-full px-4 py-2 mb-8">
            <svg className="w-4 h-4 text-sky-brand" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-sky-brand tracking-wide">FAA Part 107 Certified</span>
          </div>

          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
            Aerial Photography &amp; Video{' '}
            <span className="text-gold">Elevated.</span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional drone services across East Tennessee — real estate, events, construction, land, and commercial. Delivered fast, fully edited, and ready to impress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-gold hover:bg-gold-light text-navy font-semibold rounded transition-colors text-sm tracking-wide"
            >
              View Services &amp; Pricing
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold rounded transition-colors text-sm tracking-wide"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-4xl text-navy font-bold mb-4">What We Offer</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From MLS listings to construction progress, we cover every angle from the air.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href="/services"
                className="group p-8 rounded-xl border border-gray-100 hover:border-gold/40 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="font-playfair text-xl text-navy font-semibold mb-2 group-hover:text-gold transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-navy-dark py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-playfair text-4xl font-bold text-gold mb-1">{s.value}</div>
              <div className="text-white/60 text-sm uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-4xl text-navy font-bold mb-4">Ready to Book?</h2>
          <p className="text-gray-500 mb-8">Call or text Ian directly — fast response guaranteed.</p>
          <a
            href="tel:4239561268"
            className="inline-block font-playfair text-4xl sm:text-5xl font-bold text-navy hover:text-gold transition-colors mb-8"
          >
            423-956-1268
          </a>
          <div>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold rounded transition-colors text-sm"
            >
              Send a Message Instead →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
