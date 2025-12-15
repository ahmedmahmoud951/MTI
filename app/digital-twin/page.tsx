'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function DigitalTwin() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: '🔄',
      title: 'Real-time Synchronization',
      description: 'Continuous sync between physical and digital worlds',
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Predict failures and optimize operations',
    },
    {
      icon: '🤖',
      title: 'AI-Powered Insights',
      description: 'Machine learning for intelligent decision making',
    },
    {
      icon: '🎮',
      title: '3D Visualization',
      description: 'Interactive 3D models of physical assets',
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Simulate scenarios to maximize efficiency',
    },
    {
      icon: '🔐',
      title: 'Secure Integration',
      description: 'Enterprise-grade security and compliance',
    },
  ]

  const useCases = [
    {
      title: 'Manufacturing',
      description: 'Optimize production lines and reduce downtime',
      stats: '40% efficiency gain',
    },
    {
      title: 'Energy Distribution',
      description: 'Smart grid management and power optimization',
      stats: '25% energy savings',
    },
    {
      title: 'Smart Cities',
      description: 'Urban infrastructure monitoring and management',
      stats: '50+ cities globally',
    },
    {
      title: 'Healthcare',
      description: 'Hospital operations and equipment management',
      stats: '30% cost reduction',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="w-full pt-24 pb-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-yellow-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full mix-blend-screen filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold cyber-text mb-6"
          >
            Digital Twin Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Bridge the gap between the physical and digital world with our revolutionary Digital Twin solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Explore Now
          </motion.div>
        </div>
      </section>

      {/* What is Digital Twin */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold cyber-text mb-6">
              What is a Digital Twin?
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              A Digital Twin is a virtual replica of a physical object, system, or process that exists in cyberspace. It runs in real-time, synchronized with IoT sensors and data from the physical world.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              By combining real-world sensor data with advanced analytics and AI, Digital Twins enable organizations to:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-yellow-400 font-bold">✓</span>
                Monitor operations in real-time
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400 font-bold">✓</span>
                Predict maintenance needs before failures
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400 font-bold">✓</span>
                Simulate scenarios for optimization
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400 font-bold">✓</span>
                Reduce costs and improve efficiency
              </li>
            </ul>
          </div>

          {/* 3D Visualization Placeholder */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glow-box rounded-lg p-8 backdrop-blur-sm h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🌐</div>
              <p className="text-yellow-400 font-semibold">3D Digital Twin Visualization</p>
              <p className="text-gray-400 text-sm mt-2">Interactive 3D model with real-time data</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 border-t border-yellow-500/20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold cyber-text text-center mb-12"
        >
          Digital Twin in Action
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video 1 - Digital Twin 5D Demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glow-box rounded-lg overflow-hidden backdrop-blur-sm"
          >
            <video
              className="w-full h-auto aspect-video bg-black"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/digital-twin-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">🎬 Digital Twin 5D Technology Demo</h3>
              <p className="text-gray-400 text-sm">
                Experience the cutting-edge Digital Twin technology in action. Watch our 5D visualization system showcase real-time asset monitoring and predictive analytics.
              </p>
            </div>
          </motion.div>

          {/* Video 2 - Transform Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glow-box rounded-lg overflow-hidden backdrop-blur-sm"
          >
            <video
              className="w-full h-auto aspect-video bg-black"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/digital-twin-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">🎬 Transform Learning Experience</h3>
              <p className="text-gray-400 text-sm">
                Discover how our Digital Twin technology transforms learning and training processes. See interactive simulations that enhance understanding and skill development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-yellow-500/20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold cyber-text text-center mb-12"
        >
          Key Features
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glow-box p-8 rounded-lg backdrop-blur-sm hover:bg-yellow-500/5 transition-colors"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-yellow-500/20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold cyber-text text-center mb-12"
        >
          Industry Applications
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glow-box p-8 rounded-lg backdrop-blur-sm hover:bg-yellow-500/5 transition-colors"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                {useCase.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <div className="text-lg font-bold text-yellow-400 border-t border-yellow-500/20 pt-4">
                📈 {useCase.stats}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-4xl mx-auto px-4 py-20 border-t border-yellow-500/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glow-box p-12 rounded-lg backdrop-blur-sm text-center"
        >
          <h2 className="text-3xl font-bold cyber-text mb-8">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['IoT Sensors', 'Cloud Computing', 'AI/ML', '3D Visualization', 'Real-time Analytics', 'Big Data', 'Edge Computing', 'Cybersecurity'].map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30 text-yellow-400 font-semibold"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glow-box p-12 rounded-lg backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-6">
            Ready to Implement Digital Twin?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let us help you transform your operations with cutting-edge Digital Twin technology
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </motion.div>
      </section>
    </div>
  )
}
