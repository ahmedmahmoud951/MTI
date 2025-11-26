'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  variant?: 'default' | 'success' | 'warning' | 'info'
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'default',
}: CTASectionProps) {
  const variantStyles = {
    default: {
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      glow: 'hover:shadow-blue-500/70',
      border: 'border-blue-400/50',
      textColor: 'text-blue-300',
    },
    success: {
      gradient: 'from-green-500 via-green-600 to-green-700',
      glow: 'hover:shadow-green-500/70',
      border: 'border-green-400/50',
      textColor: 'text-green-300',
    },
    warning: {
      gradient: 'from-orange-500 via-orange-600 to-orange-700',
      glow: 'hover:shadow-orange-500/70',
      border: 'border-orange-400/50',
      textColor: 'text-orange-300',
    },
    info: {
      gradient: 'from-cyan-500 via-cyan-600 to-cyan-700',
      glow: 'hover:shadow-cyan-500/70',
      border: 'border-cyan-400/50',
      textColor: 'text-cyan-300',
    },
  }

  const style = variantStyles[variant]

  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold cyber-text mb-6">{title}</h2>
        <p className="text-xl text-gray-300 mb-8">{description}</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCTA && (
            <motion.div
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={primaryCTA.href}
                className={`inline-block px-8 py-4 bg-gradient-to-r ${style.gradient} text-white font-bold rounded-lg hover:shadow-lg ${style.glow} transition-all duration-300 border border-${variant}-400/50`}
              >
                {primaryCTA.label}
              </Link>
            </motion.div>
          )}

          {secondaryCTA && (
            <motion.div
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={secondaryCTA.href}
                className={`inline-block px-8 py-4 glass-button font-bold rounded-lg border-2 ${style.border} ${style.textColor} hover:${style.textColor}/80 transition-all duration-300`}
              >
                {secondaryCTA.label}
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
