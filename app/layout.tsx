import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ridgeline Aerial | Drone Photography & Video – East Tennessee',
    template: '%s | Ridgeline Aerial',
  },
  description:
    'FAA Part 107 certified drone photography and video services in East Tennessee. Real estate, events, construction, commercial, and land aerial coverage by Ian Robertson.',
  keywords: [
    'drone photography',
    'aerial photography',
    'East Tennessee',
    'FAA Part 107',
    'real estate drone',
    'drone video',
    'Ridgeline Aerial',
  ],
  authors: [{ name: 'Ian Robertson' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ridgeline Aerial',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
