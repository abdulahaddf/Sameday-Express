'use client'

import { useTranslations } from 'next-intl'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const t = useTranslations('contactPage')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const subjects = [
    { value: 'general', label: t('form.subjects.general') },
    { value: 'quote', label: t('form.subjects.quote') },
    { value: 'track', label: t('form.subjects.track') },
    { value: 'other', label: t('form.subjects.other') },
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-grey-text mb-4">
            <Link href="/" className="hover:text-accent-cyan transition-colors">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">{t('title')}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-grey-text">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t('form.email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t('form.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors"
                        placeholder="1-888-252-9623"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      {t('form.subject')}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors"
                    >
                      <option value="">{t('form.subject')}</option>
                      {subjects.map(subject => (
                        <option key={subject.value} value={subject.value}>
                          {subject.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      {t('form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-accent-cyan text-white font-semibold rounded-lg hover:bg-accent-teal transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {t('form.submit')}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  {t('info.title')}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-cyan/10 rounded-xl">
                      <MapPin className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Address</p>
                      <p className="text-grey-text">{t('info.address')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-cyan/10 rounded-xl">
                      <Phone className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Phone</p>
                      <a 
                        href={`tel:${t('info.phone')}`}
                        className="text-grey-text hover:text-accent-cyan transition-colors"
                      >
                        {t('info.phone')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-cyan/10 rounded-xl">
                      <Mail className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Email</p>
                      <a 
                        href={`mailto:${t('info.email')}`}
                        className="text-grey-text hover:text-accent-cyan transition-colors"
                      >
                        {t('info.email')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-cyan/10 rounded-xl">
                      <Clock className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Hours</p>
                      <p className="text-grey-text">{t('info.hours')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Interactive Map</p>
                  <p className="text-gray-400 text-xs">516 Avenue Meloche, Dorval, QC</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}