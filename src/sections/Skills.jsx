import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Palette, 
  Server, 
  GitBranch, 
  Figma, 
  Terminal,
  Database,
  Layers,
  Smartphone,
  Workflow,
  Cloud,
  Bug
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import AnimatedCard from '../components/AnimatedCard'

/**
 * Skills Section
 * Organized skill categories with modern cards and progress indicators
 */
function Skills() {
  // Skill categories with their respective skills
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Redux / Context API', level: 85 },
        { name: 'TypeScript', level: 80 },
      ],
    },
    {
      title: 'UI/UX & Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'CSS Animations', level: 90 },
        { name: 'Design Systems', level: 80 },
        { name: 'Accessibility (a11y)', level: 85 },
        { name: 'Prototyping', level: 75 },
      ],
    },
    {
      title: 'Tools & Workflow',
      icon: Workflow,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Vite / Webpack', level: 85 },
        { name: 'npm / Yarn', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'ESLint / Prettier', level: 85 },
        { name: 'Jest / Testing', level: 75 },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      skills: [
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 },
        { name: 'Node.js Basics', level: 75 },
        { name: 'Firebase', level: 80 },
        { name: 'Authentication', level: 85 },
        { name: 'API Integration', level: 90 },
      ],
    },
  ]

  // Additional tech stack icons
  const techStack = [
    { name: 'React', icon: Code2 },
    { name: 'JavaScript', icon: Terminal },
    { name: 'Tailwind', icon: Palette },
    { name: 'Git', icon: GitBranch },
    { name: 'Figma', icon: Figma },
    { name: 'Mobile', icon: Smartphone },
    { name: 'Cloud', icon: Cloud },
  ]

  return (
    <section id="skills" className="relative py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      <div className="section-container relative z-10">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A comprehensive toolkit of modern technologies and methodologies for building exceptional web applications."
        />

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedCard key={category.title} delay={categoryIndex * 0.15}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 
                              rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-text-secondary">
                        {skill.name}
                      </span>
                      <span className="text-sm text-accent-primary font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: 0.3 + skillIndex * 0.1,
                          ease: 'easeOut'
                        }}
                        className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-center text-xl font-semibold text-text-primary mb-8">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group flex flex-col items-center gap-2 p-4 bg-dark-700/50 border border-dark-500/30 
                         rounded-xl hover:border-accent-primary/30 transition-all duration-300
                         hover:shadow-lg hover:shadow-accent-primary/10"
              >
                <tech.icon className="w-8 h-8 text-text-muted group-hover:text-accent-primary transition-colors" />
                <span className="text-xs text-text-muted group-hover:text-text-secondary transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
