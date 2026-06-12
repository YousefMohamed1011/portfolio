import React from 'react'
import { motion } from 'framer-motion'

/**
 * SectionHeading Component
 * Reusable animated section heading with subtitle
 * @param {string} title - Main heading text
 * @param {string} subtitle - Optional subtitle text
 * @param {string} align - Text alignment ('left' | 'center' | 'right')
 */
function SectionHeading({ title, subtitle, align = 'center' }) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={`mb-12 md:mb-16 ${alignClasses[align]}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-1 w-24 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mt-6 
                   ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}
      />
    </div>
  )
}

export default SectionHeading
