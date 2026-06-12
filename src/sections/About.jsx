import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Zap, Globe } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

/**
 * About Section
 * Personal introduction with key highlights and stats
 */
function About() {
  // Key highlights data
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code following best practices.',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating visually appealing interfaces with attention to detail and user experience.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and smooth user interactions.',
    },
    {
      icon: Globe,
      title: 'Responsive',
      description: 'Building mobile-first designs that work flawlessly across all devices and screen sizes.',
    },
  ]

  // Stats data
  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '100%', label: 'Commitment' },
  ]

  return (
    <section id="about" className="relative py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-primary/5 to-transparent opacity-50" />

      <div className="section-container relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about creating exceptional digital experiences with modern web technologies."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Turning ideas into{' '}
              <span className="gradient-text">reality</span>
            </h3>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I am a Front-End Developer with hands-on experience since 2023, including a full year working at a company building real-world production projects. I specialize in React and Tailwind CSS, with practical experience integrating and customizing e-commerce platforms like Salla and Zid.
              </p>
              <p>
                I am passionate about continuous learning and constantly improving my skills to deliver clean, efficient, and user-friendly interfaces. I enjoy turning designs into responsive, performant web applications.
              </p>
              <p>
                Outside of work, you'll find me exploring new front-end tools, following the latest trends in web development, and pushing myself to grow every day.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-dark-700/50 border border-dark-500/30 rounded-xl"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs md:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-6 bg-dark-700/50 border border-dark-500/30 rounded-xl 
                         hover:border-accent-primary/30 transition-all duration-300
                         hover:shadow-lg hover:shadow-accent-primary/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 
                              rounded-lg flex items-center justify-center mb-4 
                              group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-text-primary">
                  {item.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
