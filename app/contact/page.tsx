import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ian Robertson at Ridgeline Aerial. Call, text, or send a message to book drone photography or video services in East Tennessee.',
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="bg-navy py-16 px-4 text-center">
        <h1 className="font-playfair text-5xl text-white font-bold mb-4">Contact</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Ready to book or have questions? Ian responds fast — usually same day.
        </p>
      </div>
      <ContactClient />
    </div>
  )
}
