import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'

/**
 * Main App Component
 * Orchestrates all sections of the portfolio
 * Uses a single-page layout with smooth scroll navigation
 */
function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-text-primary">
      {/* Navigation - Fixed at top */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
