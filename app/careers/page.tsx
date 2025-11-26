'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [expandedBenefits, setExpandedBenefits] = useState(false)

  const jobs = [
    {
      id: 1,
      title: 'Senior AI/ML Engineer',
      department: 'Research & Development',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '5+ years',
      salary: 'AED 180K - 250K',
      description: 'Lead development of AI-powered predictive maintenance systems',
      requirements: [
        'Master\'s in Computer Science or related field',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with industrial IoT systems',
        'Strong ML algorithms background',
      ],
      responsibilities: [
        'Design and implement machine learning models',
        'Optimize algorithms for edge computing',
        'Lead R&D initiatives in predictive analytics',
        'Mentor junior engineers',
      ],
    },
    {
      id: 2,
      title: 'Digital Twin Developer',
      department: 'Software Development',
      location: 'Abu Dhabi, UAE',
      type: 'Full-time',
      experience: '3-5 years',
      salary: 'AED 150K - 200K',
      description: 'Develop next-generation digital twin platform with real-time simulation',
      requirements: [
        'Strong C# and Unity Game Engine experience',
        'WebGL and 3D graphics knowledge',
        'Real-time systems experience',
        'Cloud architecture understanding',
      ],
      responsibilities: [
        'Build immersive 3D environments',
        'Implement physics simulation engine',
        'Optimize performance for thousands of concurrent users',
        'Collaborate with industrial partners',
      ],
    },
    {
      id: 3,
      title: 'IoT Solutions Architect',
      department: 'Engineering',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '7+ years',
      salary: 'AED 200K - 280K',
      description: 'Design scalable IoT solutions for enterprise deployments',
      requirements: [
        'Deep expertise in IoT protocols (MQTT, CoAP)',
        'Edge computing and cloud integration',
        'Cybersecurity fundamentals',
        'Experience with 5G and mesh networks',
      ],
      responsibilities: [
        'Design enterprise IoT architectures',
        'Lead technical proposals for major clients',
        'Oversee IoT implementations',
        'Mentor technical teams',
      ],
    },
    {
      id: 4,
      title: 'Computer Vision Engineer',
      department: 'AI Systems',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '3-5 years',
      salary: 'AED 140K - 190K',
      description: 'Develop computer vision systems for surveillance and safety',
      requirements: [
        'Expertise in OpenCV and PyTorch',
        'YOLOv8 or similar object detection experience',
        'Video processing and streaming knowledge',
        'Real-time system optimization',
      ],
      responsibilities: [
        'Implement advanced vision algorithms',
        'Optimize models for edge devices',
        'Develop safety detection systems',
        'Collaborate with hardware teams',
      ],
    },
    {
      id: 5,
      title: 'Full Stack Developer',
      department: 'Web Development',
      location: 'Remote / Dubai',
      type: 'Full-time',
      experience: '2-4 years',
      salary: 'AED 100K - 150K',
      description: 'Build responsive web applications for our dashboard and client portals',
      requirements: [
        'React and Next.js expertise',
        'TypeScript proficiency',
        'Node.js backend experience',
        'PostgreSQL database knowledge',
      ],
      responsibilities: [
        'Develop responsive UI components',
        'Build RESTful APIs',
        'Implement real-time data visualization',
        'Ensure code quality and performance',
      ],
    },
    {
      id: 6,
      title: 'Solutions Engineer',
      department: 'Sales Engineering',
      location: 'Dubai / Riyadh',
      type: 'Full-time',
      experience: '4-6 years',
      salary: 'AED 130K - 180K',
      description: 'Translate customer needs into technical solutions and oversee implementations',
      requirements: [
        'Sales and technical acumen',
        'Industrial automation knowledge',
        'Project management experience',
        'Strong communication skills',
      ],
      responsibilities: [
        'Conduct technical discovery with clients',
        'Design custom solutions',
        'Lead implementation projects',
        'Build long-term client relationships',
      ],
    },
  ]

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: '🏥', title: 'Health Benefits', description: 'Comprehensive medical and dental coverage' },
    { icon: '📚', title: 'Training & Development', description: 'Continuous learning and certification programs' },
    { icon: '🚀', title: 'Career Growth', description: 'Clear career progression paths' },
    { icon: '🏠', title: 'Flexible Work', description: 'Remote and hybrid work options' },
    { icon: '🎯', title: 'Innovation Projects', description: 'Work on cutting-edge technologies' },
    { icon: '👥', title: 'Team Culture', description: 'Collaborative and inclusive environment' },
    { icon: '⏳', title: 'Time Off', description: '25 days annual leave + public holidays' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="w-full overflow-hidden pt-20">
      {/* Header Section */}
      <section className="relative overflow-hidden py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/5 rounded-full mix-blend-screen filter blur-3xl" />
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-cyan-600/5 rounded-full mix-blend-screen filter blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
        >
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <span className="text-green-400 text-sm font-semibold">👥 Join Our Team</span>
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold cyber-text">
              Careers at MTI Engineering
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Build the future with us. We&apos;re looking for talented engineers and innovators to join our world-class team.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold cyber-text mb-4">Why Join Us?</h2>
            <p className="text-gray-400 text-lg">
              Comprehensive benefits and opportunities for growth
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-card p-6 rounded-lg border border-green-400/30 text-center group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold cyber-text mb-4">Open Positions</h2>
            <p className="text-gray-400 text-lg">
              {jobs.length} exciting opportunities available now
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                className="glass-card border border-green-400/30 overflow-hidden cursor-pointer group hover:border-green-400/60 transition-all"
              >
                <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">💼</div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-green-400 text-sm font-semibold">{job.department}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30">
                            {job.location}
                          </span>
                          <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-400/30">
                            {job.experience}
                          </span>
                          <span className="text-xs px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-400/30">
                            {job.salary}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: selectedJob === job.id ? 180 : 0 }}
                    className="text-2xl text-green-400"
                  >
                    ▼
                  </motion.div>
                </div>

                {/* Expanded Job Details */}
                {selectedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-green-400/20 p-6 bg-slate-800/30"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">About This Role</h4>
                        <p className="text-gray-300 mb-4">{job.description}</p>
                        
                        <h5 className="text-base font-bold text-green-400 mb-3">Responsibilities</h5>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex gap-2">
                              <span className="text-green-400 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-base font-bold text-green-400 mb-3">Requirements</h5>
                        <ul className="space-y-2 mb-6">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex gap-2">
                              <span className="text-green-400 mt-1">✓</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
                        >
                          Apply Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-green-500/10 via-transparent to-cyan-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold cyber-text mb-4">Our Culture</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              At MTI Engineering, we believe innovation thrives in a collaborative, inclusive, and inspiring environment where every team member can reach their full potential.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Innovation First',
                description: 'We encourage creative thinking and experimentation. Your ideas matter and can shape the future.',
              },
              {
                title: 'Collaborative Spirit',
                description: 'Success is a team effort. We support each other and celebrate collective achievements.',
              },
              {
                title: 'Continuous Learning',
                description: 'Tech evolves fast. We invest in your growth with training, conferences, and mentorship.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 rounded-lg border border-cyan-400/30 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-4xl font-bold cyber-text mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you don&rsquo;t see your dream role above, send us your CV and let&rsquo;s talk!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:careers@mtiengineering.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
          >
            Send Your Application
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
}
