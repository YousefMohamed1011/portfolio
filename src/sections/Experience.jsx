import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

/**
 * Experience Section
 * Timeline-style work experience display with animated entries
 */
function Experience() {
  // Work experience data
  const experiences = [
{
  id: 1,
  role: 'Front-End Developer',
  company: 'Azrrk',
  location: 'Mansoura',
  period: '2025 - Present',
  type: 'Full-time',
  description: 'Working on building and customizing e-commerce storefronts for Salla and Zid platforms. Developing themes and UI components with a focus on performance and clean, maintainable code.',
  achievements: [
    'Built and customized multiple Salla & Zid themes from scratch',
    'Developed reusable UI components using Tailwind CSS and Twig templating',
    'Improved storefront performance and user experience across multiple client projects',
  ],
  technologies: ['Twig', 'Tailwind CSS', 'Liquid', 'Salla', 'Zid'],
}
  ]

  return (
    <section id="experience" className="relative py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-accent-secondary/5 to-transparent opacity-50" />

      <div className="section-container relative z-10">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey building exceptional digital experiences for leading companies."
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent md:-translate-x-1/2" />

          {/* Experience Entries */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 bg-accent-primary rounded-full 
                              border-4 border-dark-900 md:-translate-x-1/2 z-10 shadow-lg shadow-accent-primary/50" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className="group relative bg-dark-700/50 border border-dark-500/30 rounded-xl p-6 
                                hover:border-accent-primary/30 transition-all duration-300
                                hover:shadow-lg hover:shadow-accent-primary/10">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-accent-primary/10 border border-accent-primary/20 
                                       rounded-full text-xs font-medium text-accent-primary">
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-text-muted">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-text-primary mb-1">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-1 text-sm text-text-secondary mb-4">
                        <Briefcase className="w-4 h-4 text-accent-secondary" />
                        {exp.company}
                        <span className="mx-2">•</span>
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>

                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                            <ChevronRight className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-dark-600/80 border border-dark-500/30 rounded-md 
                                     text-xs text-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
