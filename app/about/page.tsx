import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Ian Robertson, owner and FAA Part 107 certified drone pilot behind Ridgeline Aerial in East Tennessee.',
}

const credentials = [
  { icon: '✈️', label: 'FAA Part 107 Certified' },
  { icon: '🛡️', label: 'Fully Insured' },
  { icon: '📍', label: 'East Tennessee Based' },
  { icon: '⚡', label: '2–3 Day Turnaround' },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-navy py-16 px-4 text-center">
        <h1 className="font-playfair text-5xl text-white font-bold mb-4">About</h1>
        <p className="text-white/60 max-w-xl mx-auto">The pilot behind the lens.</p>
      </div>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — Profile */}
          <div className="flex flex-col items-center text-center lg:sticky lg:top-24">
            {/* Portrait photo */}
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-xl ring-4 ring-gold/30">
              <Image
                src="/IMG_1757.jpeg"
                alt="Ian Robertson — Owner & Drone Pilot at Ridgeline Aerial"
                width={192}
                height={192}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <h2 className="font-playfair text-3xl text-navy font-bold">Ian Robertson</h2>
            <p className="text-sky-brand font-semibold mt-1 mb-4">Owner &amp; Drone Pilot</p>

            {/* Contact chips */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <a
                href="tel:4239561268"
                className="flex items-center gap-3 px-5 py-3 bg-navy text-white rounded-xl hover:bg-navy-light transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                423-956-1268
              </a>
              <a
                href="mailto:yourpictures@ridgelineaerial.org"
                className="flex items-center gap-3 px-5 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4 text-sky-brand shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                yourpictures@ridgelineaerial.org
              </a>
            </div>
          </div>

          {/* Right — Bio */}
          <div>
            <h2 className="font-playfair text-4xl text-navy font-bold leading-tight mb-6">
              Capturing East Tennessee From a New Perspective
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ian Robertson is the owner and pilot behind Ridgeline Aerial, based right here in East Tennessee. What started as a passion for aerial photography quickly became a mission to help people see their properties, events, and land in a way they never have before.
              </p>
              <p>
                Whether you&apos;re a real estate agent looking to make a listing pop, a couple who wants their wedding day captured from above, a contractor documenting a build from start to finish, or a landowner showcasing acreage — Ian brings professionalism, care, and a creative eye to every flight.
              </p>
              <p>
                All photos are delivered high-res via an easy online gallery link. Every video is fully edited — no raw footage, no guesswork. Clear pricing up front, fast turnaround, and a direct line to the person doing the work.
              </p>
            </div>

            {/* Credential badges */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-center gap-3 bg-navy/5 border border-navy/10 rounded-xl px-4 py-3"
                >
                  <span className="text-xl">{cred.icon}</span>
                  <span className="text-navy font-semibold text-sm">{cred.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
