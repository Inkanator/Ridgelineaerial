'use client'

type MediaCard = { id: number; src: string; label: string }

const S3 = 'https://ridgeline-media-687346587814-us-east-2-an.s3.us-east-2.amazonaws.com'

const allCards: MediaCard[] = [
  { id: 1, src: `${S3}/Above House.mp4`, label: 'Land & Outdoor' },
  { id: 2, src: `${S3}/Rays House.mov`, label: 'Real Estate' },
  { id: 3, src: `${S3}/EMS base 3.mov`, label: 'Commercial' },
  { id: 4, src: `${S3}/above vilas.mov`, label: 'Land & Outdoor' },
]

function ShowcaseCard({ card }: { card: MediaCard }) {
  return (
    <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden cursor-pointer shadow-lg">
      <video
        src={card.src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-gold/90 text-navy text-xs font-bold px-3 py-1 rounded-full tracking-wide">
        FEATURED
      </div>
    </div>
  )
}

export default function PortfolioClient() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
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
