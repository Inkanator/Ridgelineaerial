'use client'

import { useState } from 'react'

type Category = 'All' | 'Real Estate' | 'Events' | 'Land & Outdoor' | 'Commercial'

const categories: Category[] = ['All', 'Real Estate', 'Events', 'Land & Outdoor', 'Commercial']

const placeholderCards = [
  { id: 1, category: 'Real Estate', gradient: 'from-navy to-sky-brand', aspect: 'aspect-[4/3]' },
  { id: 2, category: 'Land & Outdoor', gradient: 'from-emerald-800 to-emerald-500', aspect: 'aspect-square' },
  { id: 3, category: 'Events', gradient: 'from-purple-900 to-purple-500', aspect: 'aspect-[4/3]' },
  { id: 4, category: 'Commercial', gradient: 'from-gray-800 to-gray-500', aspect: 'aspect-[3/4]' },
  { id: 5, category: 'Real Estate', gradient: 'from-navy-dark to-navy', aspect: 'aspect-[4/3]' },
  { id: 6, category: 'Land & Outdoor', gradient: 'from-green-900 to-teal-600', aspect: 'aspect-[4/3]' },
  { id: 7, category: 'Events', gradient: 'from-rose-900 to-rose-500', aspect: 'aspect-square' },
  { id: 8, category: 'Commercial', gradient: 'from-slate-800 to-blue-700', aspect: 'aspect-[4/3]' },
  { id: 9, category: 'Real Estate', gradient: 'from-sky-900 to-sky-600', aspect: 'aspect-[3/4]' },
  { id: 10, category: 'Land & Outdoor', gradient: 'from-lime-900 to-lime-600', aspect: 'aspect-[4/3]' },
  { id: 11, category: 'Commercial', gradient: 'from-zinc-800 to-zinc-500', aspect: 'aspect-[4/3]' },
  { id: 12, category: 'Events', gradient: 'from-violet-900 to-violet-500', aspect: 'aspect-square' },
]

function DroneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
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
  )
}

export default function PortfolioClient() {
  const [filter, setFilter] = useState<Category>('All')

  const filtered =
    filter === 'All' ? placeholderCards : placeholderCards.filter((c) => c.category === filter)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              filter === cat
                ? 'bg-navy text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((card) => (
          <div
            key={card.id}
            className={`break-inside-avoid ${card.aspect} relative rounded-xl overflow-hidden group cursor-pointer`}
          >
            <div className={`w-full h-full bg-gradient-to-br ${card.gradient} min-h-[200px]`} />
            {/* Drone icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <DroneIcon />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-sm tracking-wide">{card.category}</span>
            </div>
            {/* Category chip */}
            <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
              {card.category}
            </div>
          </div>
        ))}
      </div>

      {/* Coming soon note */}
      <div className="mt-14 text-center bg-gray-50 rounded-2xl py-10 px-6 border border-gray-100">
        <div className="text-4xl mb-3">📸</div>
        <h3 className="font-playfair text-xl text-navy font-semibold mb-2">Portfolio images will appear here once uploaded</h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Real project photos and videos will replace these placeholders as work is completed. Check back soon.
        </p>
      </div>
    </div>
  )
}
