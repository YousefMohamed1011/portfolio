// import React from 'react'
// import { motion } from 'framer-motion'
// import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'
// import SectionHeading from '../components/SectionHeading'

// /**
//  * Education Section
//  * Academic background with certifications and courses
//  */
// function Education() {
//   // Education data
//   const education = [
//     {
//       id: 1,
//       degree: 'Bachelor of Science in Computer Science',
//       institution: 'University of Technology',
//       location: 'Boston, MA',
//       period: '2015 - 2019',
//       gpa: '3.8/4.0',
//       description: "Focused on software engineering, web development, and human-computer interaction. Graduated with honors and Dean's List recognition.",
//       courses: ['Data Structures & Algorithms', 'Web Development', 'Database Systems', 'Software Engineering'],
//     },
//     {
//       id: 2,
//       degree: 'Associate Degree in Web Development',
//       institution: 'Community College of Design',
//       location: 'Online',
//       period: '2013 - 2015',
//       gpa: '3.9/4.0',
//       description: 'Intensive program covering front-end and back-end development fundamentals. Completed with highest honors.',
//       courses: ['HTML/CSS', 'JavaScript Fundamentals', 'UI/UX Design', 'Database Basics'],
//     },
//   ]

//   // Certifications
//   const certifications = [
//     {
//       name: 'Meta Front-End Developer Professional Certificate',
//       issuer: 'Meta (Facebook)',
//       date: '2023',
//       icon: Award,
//     },
//     {
//       name: 'React Developer Certification',
//       issuer: 'Udemy',
//       date: '2022',
//       icon: BookOpen,
//     },
//     {
//       name: 'JavaScript Algorithms & Data Structures',
//       issuer: 'freeCodeCamp',
//       date: '2021',
//       icon: GraduationCap,
//     },
//     {
//       name: 'Responsive Web Design Certification',
//       issuer: 'freeCodeCamp',
//       date: '2020',
//       icon: BookOpen,
//     },
//   ]

//   return (
//     <section id="education" className="relative py-20 md:py-32">
//       <div className="section-container">
//         <SectionHeading
//           title="Education"
//           subtitle="Academic foundation and continuous learning through certifications and courses."
//         />

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Education Timeline */}
//           <div>
//             <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-2">
//               <GraduationCap className="w-5 h-5 text-accent-primary" />
//               Academic Background
//             </h3>

//             <div className="space-y-8">
//               {education.map((edu, index) => (
//                 <motion.div
//                   key={edu.id}
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, margin: '-50px' }}
//                   transition={{ duration: 0.5, delay: index * 0.15 }}
//                   className="group relative bg-dark-700/50 border border-dark-500/30 rounded-xl p-6 
//                             hover:border-accent-primary/30 transition-all duration-300
//                             hover:shadow-lg hover:shadow-accent-primary/10"
//                 >
//                   {/* Glow effect */}
//                   <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 
//                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   <div className="relative z-10">
//                     <div className="flex flex-wrap items-center gap-3 mb-3">
//                       <span className="flex items-center gap-1 text-xs text-text-muted">
//                         <Calendar className="w-3 h-3" />
//                         {edu.period}
//                       </span>
//                       <span className="px-2 py-0.5 bg-accent-secondary/10 border border-accent-secondary/20 
//                                      rounded text-xs font-medium text-accent-secondary">
//                         GPA: {edu.gpa}
//                       </span>
//                     </div>

//                     <h4 className="text-lg font-bold text-text-primary mb-1">
//                       {edu.degree}
//                     </h4>
//                     <p className="text-sm text-text-secondary mb-1">
//                       {edu.institution}
//                     </p>
//                     <p className="text-xs text-text-muted mb-4">
//                       {edu.location}
//                     </p>

//                     <p className="text-sm text-text-secondary leading-relaxed mb-4">
//                       {edu.description}
//                     </p>

//                     {/* Key Courses */}
//                     <div className="flex flex-wrap gap-2">
//                       {edu.courses.map((course) => (
//                         <span
//                           key={course}
//                           className="px-2 py-1 bg-dark-600/80 border border-dark-500/30 rounded-md 
//                                    text-xs text-text-muted"
//                         >
//                           {course}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Certifications */}
//           <div>
//             <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-2">
//               <Award className="w-5 h-5 text-accent-secondary" />
//               Certifications
//             </h3>

//             <div className="space-y-4">
//               {certifications.map((cert, index) => (
//                 <motion.div
//                   key={cert.name}
//                   initial={{ opacity: 0, x: 30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, margin: '-50px' }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ x: 5, transition: { duration: 0.2 } }}
//                   className="group flex items-start gap-4 p-4 bg-dark-700/50 border border-dark-500/30 rounded-xl 
//                             hover:border-accent-primary/30 transition-all duration-300"
//                 >
//                   <div className="w-10 h-10 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 
//                                 rounded-lg flex items-center justify-center flex-shrink-0
//                                 group-hover:scale-110 transition-transform duration-300">
//                     <cert.icon className="w-5 h-5 text-accent-primary" />
//                   </div>

//                   <div className="flex-1 min-w-0">
//                     <h4 className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
//                       {cert.name}
//                     </h4>
//                     <p className="text-xs text-text-secondary mt-1">
//                       {cert.issuer}
//                     </p>
//                     <p className="text-xs text-text-muted mt-0.5">
//                       {cert.date}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Additional Learning */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="mt-8 p-6 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 
//                         border border-accent-primary/20 rounded-xl"
//             >
//               <h4 className="text-lg font-semibold text-text-primary mb-3">
//                 Continuous Learning
//               </h4>
//               <p className="text-sm text-text-secondary leading-relaxed">
//                 I believe in lifelong learning and regularly take online courses, attend workshops, 
//                 and participate in coding challenges to stay current with the latest technologies 
//                 and best practices in web development.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Education
