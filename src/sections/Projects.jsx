import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronRight, Star, Eye } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

/**
 * Projects Section
 * Interactive project showcase with filtering, cards, and links
 */
function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Filter categories
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'react', label: 'React' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'fullstack', label: 'Full Stack' },
  ]

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing products, orders, and analytics. Features real-time data visualization, dark mode support, and responsive design.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['react', 'javascript', 'fullstack'],
      tech: ['React', 'Redux', 'Tailwind CSS', 'Chart.js', 'Node.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['react', 'javascript'],
      tech: ['React', 'Framer Motion', 'Local Storage', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      id: 3,
      title: 'Weather Application',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics with hourly and daily predictions.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      tags: ['javascript', 'react'],
      tech: ['React', 'OpenWeather API', 'Geolocation', 'CSS Animations'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'A modern social media platform with real-time messaging, post creation, likes, comments, and user profiles with authentication.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      tags: ['react', 'fullstack'],
      tech: ['React', 'Firebase', 'Authentication', 'Real-time DB'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      id: 5,
      title: 'Portfolio Generator',
      description: 'An interactive portfolio generator that allows developers to create stunning portfolios with customizable themes and sections.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['react', 'javascript'],
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Recipe Finder App',
      description: 'A recipe discovery application with search, filtering, favorites, and detailed cooking instructions with nutritional information.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      tags: ['javascript', 'react'],
      tech: ['React', 'Spoonacular API', 'Responsive Design', 'CSS Grid'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
  ]

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="relative py-20 md:py-32">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work showcasing modern web development techniques and creative solutions."
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-accent-primary/25'
                  : 'bg-dark-700/50 border border-dark-500/30 text-text-secondary hover:text-text-primary hover:border-accent-primary/30'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-dark-700/50 border border-dark-500/30 rounded-xl overflow-hidden
                         hover:border-accent-primary/30 transition-all duration-300
                         hover:shadow-xl hover:shadow-accent-primary/10"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent 
                                opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 bg-accent-primary/90 
                                  rounded-full text-xs font-medium text-white">
                      <Star className="w-3 h-3 fill-white" />
                      Featured
                    </div>
                  )}

                  {/* View indicator */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 bg-dark-800/90 
                                rounded-full text-xs font-medium text-text-secondary opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-3 h-3" />
                    View
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-600/80 border border-dark-500/30 rounded-md 
                                 text-xs text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-dark-600 border border-dark-500/30 
                               rounded-lg text-sm text-text-secondary hover:text-text-primary 
                               hover:border-accent-primary/30 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary 
                               rounded-lg text-sm text-white font-medium hover:shadow-lg hover:shadow-accent-primary/25 
                               transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary 
                     transition-colors font-medium"
          >
            View All Projects on GitHub
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
