import React from 'react'
import { motion } from 'framer-motion'

/**
 * AnimatedCard Component
 * Reusable card with hover animations and glow effect
 * @param {ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 * @param {number} delay - Animation delay in seconds
 */
function AnimatedCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`group relative bg-dark-700/50 border border-dark-500/30 rounded-xl p-6 
                 hover:border-accent-primary/30 transition-all duration-300
                 hover:shadow-lg hover:shadow-accent-primary/10 ${className}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default AnimatedCard
