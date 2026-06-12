import React from 'react'
import { motion } from 'framer-motion'

import { ArrowDown, Github, Linkedin, Download } from 'lucide-react'

/**
 * Hero Section
 * Professional introduction with animated background elements
 * Features profile image, headline, description, and CTA buttons
 */
function Hero() {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  // Scroll down handler
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl"
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex-shrink-0"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-accent-primary/30"
              />

              {/* Second ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full border-2 border-dashed border-accent-secondary/20"
              />

              {/* Profile image container */}
              <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 
                            border-2 border-accent-primary/30">
                <img
                  src="https://i.ibb.co/BSZxzp6/2f5dccab-18a0-44fd-818c-1abb6a18feb3.jpg"
                  alt="Developer Profile"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating badges */}
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
  className="absolute -top-2 -right-2 bg-dark-700 border border-dark-500 rounded-lg px-3 py-1 
             text-xs font-medium text-accent-primary shadow-lg"
>
  React.js
</motion.div>

<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
  className="absolute -bottom-2 -left-2 bg-dark-700 border border-dark-500 rounded-lg px-3 py-1 
             text-xs font-medium text-yellow-400 shadow-lg"
>
  JavaScript
</motion.div>

<motion.div
  animate={{ x: [0, 10, 0] }}
  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
  className="absolute top-10 -left-10 bg-dark-700 border border-dark-500 rounded-lg px-3 py-1 
             text-xs font-medium text-cyan-400 shadow-lg"
>
  Tailwind CSS
</motion.div>

<motion.div
  animate={{ x: [0, -10, 0] }}
  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
  className="absolute bottom-10 -right-10 bg-dark-700 border border-dark-500 rounded-lg px-3 py-1 
             text-xs font-medium text-green-400 shadow-lg"
>
  Liquid
</motion.div>

<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
  className="absolute top-1/2 -right-12 bg-dark-700 border border-dark-500 rounded-lg px-3 py-1 
             text-xs font-medium text-purple-400 shadow-lg"
>
  Twig
</motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-dark-700/80 border border-dark-500/50 rounded-full 
                             text-sm text-accent-primary font-medium">
                Front-End Developer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              I am{' '}
              <span className="gradient-text">Yousef</span>
              <br />
              Mohamed 
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
            >
              I craft responsive, performant, and visually stunning web applications 
              using modern technologies. Passionate about creating intuitive user 
              interfaces and delivering exceptional digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/YousefMohamed1011"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-700/50 border border-dark-500/30 rounded-lg text-text-muted 
                         hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-700/50 border border-dark-500/30 rounded-lg text-text-muted 
                         hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="/resume.pdf"
                className="p-3 bg-dark-700/50 border border-dark-500/30 rounded-lg text-text-muted 
                         hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300"
                aria-label="Download Resume"
              >
                <Download className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-primary transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
