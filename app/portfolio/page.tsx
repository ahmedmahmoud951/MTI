'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'


export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const portfolioItems = [
    {
      id: 1,
      title: 'Smart City Infrastructure - Dubai',
      category: 'Smart City Solutions',
      description: 'Comprehensive smart city implementation with IoT sensors, traffic management, and environmental monitoring across 500+ square kilometers.',
      image: '🏙️',
      stats: { sensors: '10,000+', efficiency: '35%', cost: '$2.5M saved' },
      technologies: ['IoT Sensors', 'AI Analytics', 'Cloud Platform', 'Mobile App'],
      videoContent: 'Show aerial drone footage of smart city, sensor installations, control center operations, and citizen app demonstrations'
    },
    {
      id: 2,
      title: 'Digital Twin Factory - Saudi Aramco',
      category: 'Digital Twin Technology',
      description: 'Virtual replica of petrochemical processing facility enabling predictive maintenance and operational optimization.',
      image: '🏭',
      stats: { uptime: '99.8%', savings: '$15M', alerts: '500+ prevented' },
      technologies: ['Digital Twin Platform', 'AI Prediction', 'Real-time Sync', 'AR Visualization'],
      videoContent: 'Demonstrate virtual factory walkthrough, predictive maintenance alerts, performance optimization, and AR maintenance guides'
    },
    {
      id: 3,
      title: 'Advanced Surveillance Network - Qatar',
      category: 'Security Solutions',
      description: 'AI-powered surveillance system covering major infrastructure with facial recognition and automated threat detection.',
      image: '📹',
      stats: { cameras: '2,500', accuracy: '96%', response: '15s avg' },
      technologies: ['AI Analytics', 'Facial Recognition', 'Edge Computing', 'Cloud Storage'],
      videoContent: 'Show security control room, AI threat detection in real-time, incident response procedures, and system integration'
    },
    {
      id: 4,
      title: 'Automated Manufacturing Line - UAE',
      category: 'Industrial Automation',
      description: 'Complete automation of production facility with robotics, quality control, and predictive maintenance systems.',
      image: '🤖',
      stats: { productivity: '45%', defects: '80%', roi: '280%' },
      technologies: ['Industrial Robotics', 'PLC Systems', 'Quality Vision', 'Predictive Maintenance'],
      videoContent: 'Display automated production line operation, robotic assembly, quality inspection systems, and maintenance procedures'
    },
    {
      id: 5,
      title: 'IoT Agriculture Platform - Oman',
      category: 'IoT Solutions',
      description: 'Smart agriculture system monitoring soil conditions, weather patterns, and crop health across 10,000 hectares.',
      image: '🌾',
      stats: { yield: '25%', water: '40%', farms: '500+' },
      technologies: ['Soil Sensors', 'Weather Stations', 'Drone Integration', 'AI Analytics'],
      videoContent: 'Show farm drone footage, sensor data visualization, automated irrigation systems, and crop health monitoring'
    },
    {
      id: 6,
      title: 'Critical Infrastructure Protection - Kuwait',
      category: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solution protecting national critical infrastructure with advanced threat detection.',
      image: '🔒',
      stats: { threats: '1M+', blocked: '99.9%', compliance: '100%' },
      technologies: ['Threat Intelligence', 'Zero Trust', 'SIEM Platform', 'Incident Response'],
      videoContent: 'Demonstrate security operations center, threat detection dashboards, incident response simulations, and compliance reporting'
    }
  ]

  const categories = ['All', 'Smart City Solutions', 'Digital Twin Technology', 'Security Solutions', 'Industrial Automation', 'IoT Solutions', 'Cybersecurity']

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 cyber-text"
            >
              Our Portfolio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Showcasing innovation across industries. From smart cities to industrial automation,
              discover how we&rsquo;ve transformed operations worldwide.
            </motion.p>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-400 rounded-full hover:bg-blue-500/30 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                className="glow-box p-6 rounded-lg backdrop-blur-sm hover:bg-blue-500/5 transition-all duration-300 cursor-pointer group"
              >
                {/* Project Image/Icon */}
                <div className="text-8xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>

                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-400 text-sm rounded-full mb-4">
                  {item.category}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(item.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-400">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Video Content Note */}
                <div className="border-t border-blue-500/20 pt-4">
                  <p className="text-xs text-gray-500 italic leading-relaxed">
                    🎥 {item.videoContent}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold cyber-text mb-4">
              Impact & Results
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Measurable outcomes across all our implementations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '500+', label: 'Projects Completed', icon: '✅' },
              { number: '99.8%', label: 'Average Uptime', icon: '⚡' },
              { number: '$50M+', label: 'Cost Savings Generated', icon: '💰' },
              { number: '25+', label: 'Countries Served', icon: '🌍' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center glow-box p-6 rounded-lg"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-3xl md:text-4xl font-bold cyber-text mb-2">
                  {metric.number}
                </div>
                <div className="text-blue-400 text-sm font-semibold">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold cyber-text mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations that have transformed their operations with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-block px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-lg hover:bg-blue-400/10 transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}