import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

/**
 * Contact Section
 * Interactive contact form with validation and social links
 * Form is UI-ready and can be connected to a backend service
 */
function Contact() {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    message: '',
  })

  const [errors, setErrors] = useState({})

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    // Simulate form submission (replace with actual API call)
    setFormStatus({ submitted: true, success: false, error: false, message: 'Sending...' })

    // Simulate API delay
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon.',
      })

      // Reset form after success
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, error: false, message: '' })
      }, 5000)
    }, 1500)
  }

  // Contact info
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'karsayousef74@gmail.com',
      href: 'mailto:karsayousef74@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+01026025061',
      href: 'tel:+01026025061',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Giza',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  // Input field component for reusability
  const InputField = ({ label, name, type = 'text', placeholder, value, error, rows }) => (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-text-secondary">
        {label}
      </label>
      {rows ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 bg-dark-800 border rounded-lg text-text-primary placeholder-text-muted 
                     focus:outline-none focus:ring-2 transition-all duration-300 resize-none
                     ${error 
                       ? 'border-red-500/50 focus:ring-red-500/30' 
                       : 'border-dark-500/50 focus:ring-accent-primary/30 focus:border-accent-primary/50'
                     }`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 bg-dark-800 border rounded-lg text-text-primary placeholder-text-muted 
                     focus:outline-none focus:ring-2 transition-all duration-300
                     ${error 
                       ? 'border-red-500/50 focus:ring-red-500/30' 
                       : 'border-dark-500/50 focus:ring-accent-primary/30 focus:border-accent-primary/50'
                     }`}
        />
      )}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-400 flex items-center gap-1"
        >
          <AlertCircle className="w-3 h-3" />
          {error}
        </motion.p>
      )}
    </div>
  )

  return (
    <section id="contact" className="relative py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />

      <div className="section-container relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I would love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Let us talk about everything
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Whether you have a question, want to start a project, or just want to connect, 
                feel free to reach out. I am always open to discussing new projects, creative ideas, 
                or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-dark-700/50 border border-dark-500/30 rounded-xl 
                           hover:border-accent-primary/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 
                                rounded-lg flex items-center justify-center flex-shrink-0
                                group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">{info.label}</p>
                    <p className="text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-text-muted mb-4">Follow me on</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-700/50 border border-dark-500/30 rounded-lg text-text-muted 
                             hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-dark-700/50 border border-dark-500/30 rounded-xl p-6 md:p-8 
                          hover:border-accent-primary/20 transition-all duration-300">

              {/* Form Status Message */}
              {formStatus.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    formStatus.success 
                      ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                      : formStatus.error 
                        ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                        : 'bg-accent-primary/10 border border-accent-primary/30 text-accent-primary'
                  }`}
                >
                  {formStatus.success ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{formStatus.message}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <InputField
                    label="Your Name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    error={errors.name}
                  />
                  <InputField
                    label="Your Email"
                    name="email"
                    type="email"
                    placeholder="user@example.com"
                    value={formData.email}
                    error={errors.email}
                  />
                </div>

                <InputField
                  label="Subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  error={errors.subject}
                />

                <InputField
                  label="Message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  error={errors.message}
                  rows={5}
                />

                <motion.button
                  type="submit"
                  disabled={formStatus.submitted && !formStatus.success && !formStatus.error}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {formStatus.submitted && !formStatus.success && !formStatus.error 
                    ? 'Sending...' 
                    : 'Send Message'
                  }
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
