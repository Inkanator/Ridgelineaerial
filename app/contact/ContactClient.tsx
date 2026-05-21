'use client'

import { useState } from 'react'

const serviceOptions = [
  'Real Estate MLS Photography',
  'Aerial Drone Photos',
  'Drone Video',
  'Event Coverage',
  'Construction Documentation',
  'Commercial / Business',
  'Outdoor / Hunting Land',
  'Not sure — need a quote',
]

export default function ContactClient() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  function validate() {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.service) e.service = 'Please select a service'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left — contact info */}
        <div>
          <h2 className="font-playfair text-3xl text-navy font-bold mb-8">
            The Easiest Way to Reach Ian
          </h2>

          {/* Phone box */}
          <div className="bg-navy rounded-2xl p-8 mb-6">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-3">Call or Text Ian directly</p>
            <a
              href="tel:4239561268"
              className="block font-playfair text-4xl text-gold hover:text-gold-light transition-colors font-bold mb-2"
            >
              423-956-1268
            </a>
            <p className="text-white/50 text-sm">Available 7 days a week — usually responds within a few hours</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 px-6 py-4 bg-gray-50 rounded-xl border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-sky-brand/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-sky-brand" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Email</p>
              <a href="mailto:iango4053@gmail.com" className="text-navy font-medium hover:text-gold transition-colors text-sm">
                iango4053@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 mt-4 px-6 py-4 bg-gray-50 rounded-xl border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Location</p>
              <p className="text-navy font-medium text-sm">East Tennessee</p>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="font-playfair text-2xl text-navy font-bold mb-3">Message Sent!</h3>
              <p className="text-gray-500 max-w-sm">
                Thanks for reaching out. Ian will get back to you soon — or feel free to call or text{' '}
                <a href="tel:4239561268" className="text-gold font-semibold">
                  423-956-1268
                </a>{' '}
                for a faster response.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', message: '' }) }}
                className="mt-6 text-sm text-gray-400 hover:text-navy transition-colors underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-playfair text-2xl text-navy font-bold mb-2">Send an Inquiry</h2>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                    errors.name
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-gray-200 focus:border-sky-brand'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(optional) best number to reach you"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-brand text-sm outline-none transition-colors"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors bg-white ${
                    errors.service
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-gray-200 focus:border-sky-brand'
                  }`}
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell Ian about your project — location, date, any details that help..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-brand text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold hover:bg-gold-light text-navy font-semibold rounded-xl transition-colors text-sm"
              >
                Send Message
              </button>

              <p className="text-center text-sm text-gray-400">
                Or just call/text —{' '}
                <a href="tel:4239561268" className="text-navy font-semibold hover:text-gold transition-colors">
                  423-956-1268
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
