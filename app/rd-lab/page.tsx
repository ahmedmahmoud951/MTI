'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RDLab() {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Predictive Maintenance',
      category: 'Artificial Intelligence',
      description: 'Advanced machine learning system that predicts equipment failures before they happen',
      progress: 75,
      team: ['Dr. Ahmed Hassan', 'Eng. Fatima Al-Mansouri'],
      image: '🤖',
      technologies: ['TensorFlow', 'Python', 'IoT Sensors'],
    },
    {
      id: 2,
      title: 'Digital Twin Platform 2.0',
      category: 'Digital Twin',
      description: 'Next generation digital twin with real-time physics simulation and AR integration',
      progress: 60,
      team: ['Eng. Mohammed Al-Karim', 'Dev. Sarah Johnson'],
      image: '🌐',
      technologies: ['Unity Engine', 'C#', 'WebGL'],
    },
    {
      id: 3,
      title: 'Smart IoT Mesh Network',
      category: 'IoT',
      description: 'Resilient mesh network for connecting 10,000+ devices with automatic failover',
      progress: 85,
      team: ['Dr. Khalid Al-Rashid', 'Eng. David Lee'],
      image: '📡',
      technologies: ['Zigbee', 'LoRaWAN', 'Edge Computing'],
    },
    {
      id: 4,
      title: 'Computer Vision for Site Monitoring',
      category: 'AI & Surveillance',
      description: 'Real-time computer vision system for detecting safety hazards on construction sites',
      progress: 70,
      team: ['Dr. Noor Al-Madani', 'ML Eng. Alex Chen'],
      image: '👁️',
      technologies: ['OpenCV', 'YOLOv8', 'CUDA'],
    },
    {
      id: 5,
      title: 'Autonomous Inspection Drones',
      category: 'Robotics',
      description: 'AI-equipped drones for autonomous inspection of hard-to-reach infrastructure',
      progress: 55,
      team: ['Eng. Rashid Al-Jahani', 'Dev. Marcus Williams'],
      image: '🚁',
      technologies: ['ROS', 'Autonomous Navigation', 'SLAM'],
    },
    {
      id: 6,
      title: 'Blockchain for Asset Tracking',
      category: 'Blockchain',
      description: 'Distributed ledger system for transparent tracking of industrial assets',
      progress: 45,
      team: ['Dr. Hana Al-Khayyal', 'Eng. James Rodriguez'],
      image: '⛓️',
      technologies: ['Ethereum', 'Solidity', 'Smart Contracts'],
    },
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
      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-screen filter blur-3xl" />
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-blue-600/5 rounded-full mix-blend-screen filter blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <span className="text-purple-400 text-sm font-semibold">🔬 Innovation Hub</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold cyber-text mb-6">
            Research & Development Lab
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Pioneering cutting-edge solutions through continuous innovation and technological advancement
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="glass-card p-4 rounded-lg border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-400">15+</div>
              <div className="text-sm text-gray-400">Active Projects</div>
            </div>
            <div className="glass-card p-4 rounded-lg border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-400">45+</div>
              <div className="text-sm text-gray-400">Researchers</div>
            </div>
            <div className="glass-card p-4 rounded-lg border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-400">8</div>
              <div className="text-sm text-gray-400">Technology Areas</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold cyber-text mb-4">Current Research Projects</h2>
            <p className="text-gray-400 text-lg">
              Exploring the frontiers of engineering and technology
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-lg border border-purple-400/30 overflow-hidden group cursor-pointer"
              >
                <div className="absolute top-0 right-0 text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {project.image}
                </div>
                
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full mb-4">
                    <span className="text-purple-300 text-xs font-semibold">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-400">Progress</span>
                      <span className="text-xs text-purple-400 font-bold">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ delay: 0.2, duration: 1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                      />
                    </div>
                  </div>

                  {/* Team Members */}
                  <div className="mb-4 pb-4 border-b border-purple-400/20">
                    <p className="text-xs text-gray-500 mb-2">Team</p>
                    <div className="flex flex-wrap gap-2">
                      {project.team.map((member, idx) => (
                        <span key={idx} className="text-xs bg-purple-500/10 border border-purple-400/30 rounded px-2 py-1 text-purple-300">
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-300 rounded border border-blue-400/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold cyber-text mb-4">Development Roadmap</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {[
                { quarter: 'Q4 2024', milestone: 'Beta Launch of AI Predictive System' },
                { quarter: 'Q1 2025', milestone: 'Digital Twin 2.0 Release' },
                { quarter: 'Q2 2025', milestone: 'IoT Mesh Network Deployment' },
                { quarter: 'Q3 2025', milestone: 'Vision System Production Ready' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-1/2" />
                  <div className="hidden md:flex justify-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-800 z-10" />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="md:w-1/2 glass-card p-6 rounded-lg border border-purple-400/30"
                  >
                    <span className="text-purple-400 font-bold text-sm">{item.quarter}</span>
                    <p className="text-white font-semibold mt-2">{item.milestone}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-transparent to-blue-600/15" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-4xl font-bold cyber-text mb-6">Join Our Research Team</h2>
          <p className="text-xl text-gray-300 mb-8">
            We&rsquo;re looking for talented engineers and researchers to push the boundaries of innovation
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/careers"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View Open Positions
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
