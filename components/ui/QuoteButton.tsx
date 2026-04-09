'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface QuoteButtonProps {
  label: string
  className?: string
}

export default function QuoteButton({ label, className }: QuoteButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('openQuoteModal'))
  }

  return (
    <Link
      href="https://courriermdex.courier-connex.com/index.php?action=pricing" target="blank"
      className={className ?? 'inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent-cyan transition-colors'}
    >
      {label}
      <ArrowRight className="w-4 h-4" />
    </Link>
  )
}
