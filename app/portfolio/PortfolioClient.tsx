'use client'

type MediaCard =
  | { id: number; type: 'placeholder'; gradient: string; label: string }
  | { id: number; type: 'video'; src: string; label: string }

const allCards: MediaCard[] = [
  { id: 1, type: 'video', src: '/Sequence 01.mp4', label: 'Land & Outdoor' },
  { id: 2, type: 'placeholder', gradient: 'from-navy to-sky-brand', label: 'Real Estate' },
  { id: 3, type: 'placeholder', gradient: 'from-purple-900 to-purple-500', label: 'Events' },
  { id: 4, type: 'placeholder', gradient: 'from-gray-800 to-gray-500', label: 'Commercial' },
]

function ComingSoonOverlay({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
      <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
        <line x1="50" y1="44" x2="22" y2="28" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="44" x2="78" y2="28" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="56" x2="22" y2="72" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="56" x2="78" y2="72" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="22" cy="25" rx="13" ry="5" fill="white" />
        <ellipse cx="78" cy="25" rx="13" ry="5" fill="white" />
        <ellipse cx="22" cy="75" rx="13" ry="5" fill="white" />
        <ellipse cx="78" cy="75" rx="13" ry="5" fill="white" />
        <rect x="34" y="40" width="32" height="20" rx="5" fill="white" opacity="0.6" />
        <circle cx="50" cy="64" r="5" fill="white" opacity="0.4" />
      </svg>
      <span className="text-white/40 text-xs tracking-widest uppercase font-semibold">{label} — Coming Soon</span>
    </div>
  )
}

function ShowcaseCard({ card }: { card: MediaCard }) {
  return (
    <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
      {card.type === 'video' ? (
        <video
          src={card.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          <div className={`w-full h-full bg-gradient-to-br ${card.gradient}`} />
          <ComingSoonOverlay label={card.label} />
        </>
      )}
      <div className="absolute top-4 right-4 bg-gold/90 text-navy text-xs font-bold px-3 py-1 rounded-full tracking-wide">
        FEATURED
      </div>
    </div>
  )
}

export default function PortfolioClient() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Showcase cards — all full width */}
      <div className="flex flex-col gap-4">
        {allCards.map((card) => (
          <ShowcaseCard key={card.id} card={card} />
        ))}
      </div>

      {/* About the work */}
      <div className="mt-14 text-center max-w-2xl mx-auto">
        <div className="w-12 h-px bg-gold mx-auto mb-6" />
        <h3 className="font-playfair text-2xl text-navy font-semibold mb-3">Real Work. Real Shots.</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Every photo and video in this portfolio was captured by myself on actual client jobs across East Tennessee —
          no stock imagery, no filters. What you see is exactly the quality and style you can expect when you book with us.
        </p>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>
    </div>
  )
}
