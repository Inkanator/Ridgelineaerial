import Link from 'next/link'
import DroneLogo from './DroneLogo'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <DroneLogo size={40} showMountains={false} />
              <span className="font-playfair text-xl font-bold">Ridgeline Aerial</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional drone photography &amp; video services based in East Tennessee.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-gold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="tel:4239561268" className="hover:text-gold transition-colors">
                  📞 423-956-1268
                </a>
              </li>
              <li>
                <a href="mailto:yourpictures@ridgelineaerial.org" className="hover:text-gold transition-colors">
                  ✉️ yourpictures@ridgelineaerial.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>East Tennessee</span>
              </li>
            </ul>
          </div>

          {/* Quick links + badge */}
          <div>
            <h3 className="font-playfair text-gold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70 mb-6">
              {[
                ['/', 'Home'],
                ['/services', 'Services & Pricing'],
                ['/portfolio', 'Portfolio'],
                ['/about', 'About'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* FAA badge */}
            <div className="inline-flex items-center gap-2 bg-sky-brand/20 border border-sky-brand/40 rounded-full px-4 py-2">
              <svg className="w-4 h-4 text-sky-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold text-sky-brand">FAA Part 107 Certified</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/40">
          © 2026 Ridgeline Aerial. All rights reserved. | Ian Robertson, Owner &amp; Drone Pilot
        </div>
      </div>
    </footer>
  )
}
