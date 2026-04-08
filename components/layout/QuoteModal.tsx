'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { X, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function QuoteModal() {
  const t = useTranslations('quoteModal')
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickup: '',
    delivery: '',
    packageType: '',
    urgency: '',
    notes: ''
  })

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('openQuoteModal', handleOpen)
    return () => window.removeEventListener('openQuoteModal', handleOpen)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      pickup: '',
      delivery: '',
      packageType: '',
      urgency: '',
      notes: ''
    })
  }

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

  const packageTypes = [
    { value: 'envelope', label: t('packageTypes.envelope') },
    { value: 'box', label: t('packageTypes.box') },
    { value: 'pallet', label: t('packageTypes.pallet') },
    { value: 'medical', label: t('packageTypes.medical') },
    { value: 'dangerous', label: t('packageTypes.dangerous') },
    { value: 'other', label: t('packageTypes.other') },
  ]

  const urgencyOptions = [
    { value: 'sameDay', label: t('urgencyOptions.sameDay') },
    { value: 'nextDay', label: t('urgencyOptions.nextDay') },
    { value: 'scheduled', label: t('urgencyOptions.scheduled') },
    { value: 'asap', label: t('urgencyOptions.asap') },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-xl font-bold text-primary">{t('title')}</h2>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-grey-light rounded-lg transition-colors"
                aria-label={t('close')}
              >
                <X className="w-5 h-5 text-grey-text" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {t('success')}
                  </h3>
                  <button
                    onClick={handleClose}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
                  >
                    {t('close')}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        {t('email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        {t('phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors"
                        placeholder="1-888-252-9623"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      {t('pickup')}
                    </label>
                    <input
                      type="text"
                      name="pickup"
                      value={formData.pickup}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors"
                      placeholder="123 Main St, Montreal, QC"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      {t('delivery')}
                    </label>
                    <input
                      type="text"
                      name="delivery"
                      value={formData.delivery}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors"
                      placeholder="456 Elm St, Toronto, ON"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        {t('packageType')}
                      </label>
                      <select
                        name="packageType"
                        value={formData.packageType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors"
                      >
                        <option value="">{t('packageType')}</option>
                        {packageTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        {t('urgency')}
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors"
                      >
                        <option value="">{t('urgency')}</option>
                        {urgencyOptions.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      {t('notes')}
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-accent-cyan transition-colors resize-none"
                      placeholder="Any special instructions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-accent-cyan text-white font-semibold rounded-lg hover:bg-accent-teal transition-colors"
                  >
                    {t('submit')}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}