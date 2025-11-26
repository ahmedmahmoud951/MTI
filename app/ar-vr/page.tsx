'use client'

import { motion } from 'framer-motion'

export default function ARVR() {
  const features = [
    {
      icon: '🥽',
      title: 'AR Project Visualization',
      description: 'View industrial projects in augmented reality directly on your smartphone',
      details: 'See machinery, equipment, and structural designs overlaid on real-world environments',
    },
    {
      icon: '🎮',
      title: 'VR Site Walkthroughs',
      description: 'Experience immersive virtual tours of our completed projects and facilities',
      details: 'Navigate through digital environments with full 360° interaction capabilities',
    },
    {
      icon: '📐',
      title: '3D Model Inspection',
      description: 'Examine detailed 3D models of equipment and systems in real-time',
      details: 'Rotate, scale, and analyze components from every angle with precision measurements',
    },
    {
      icon: '🔍',
      title: 'Digital Twin Exploration',
      description: 'Interact with live digital twins of physical systems and production lines',
      details: 'Monitor operations, simulate scenarios, and optimize processes in a virtual environment',
    },
  ]

  const useCases = [
    {
      industry: 'Manufacturing',
      example: 'Visualize factory layouts and robot movements before installation',
    },
    {
      industry: 'Construction',
      example: 'Preview building designs and site conditions in AR before work begins',
    },
    {
      industry: 'Oil & Gas',
      example: 'Inspect offshore platforms and pipelines through VR simulations',
    },
    {
      industry: 'Smart Cities',
      example: 'Explore urban infrastructure projects with interactive data overlays',
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
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/5 rounded-full mix-blend-screen filter blur-3xl" />
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-violet-600/5 rounded-full mix-blend-screen filter blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-6">
            <span className="text-indigo-400 text-sm font-semibold">🌐 Immersive Technology</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold cyber-text mb-6">
            AR & VR Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience industrial solutions through augmented and virtual reality technology
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold cyber-text mb-4">Immersive Experiences</h2>
            <p className="text-gray-400 text-lg">
              Revolutionary ways to interact with industrial solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-lg border border-indigo-400/30 group cursor-pointer"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="p-4 bg-indigo-500/10 border border-indigo-400/30 rounded-lg">
                  <p className="text-sm text-indigo-300">{feature.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-indigo-500/10 via-transparent to-violet-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold cyber-text mb-4">Industry Applications</h2>
            <p className="text-gray-400 text-lg">
              How AR/VR transforms different industries
            </p>
          </motion.div>

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
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-lg border border-indigo-400/30 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl mt-2">🏢</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {useCase.industry}
                    </h3>
                    <p className="text-gray-400">{useCase.example}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-lg border border-indigo-400/30"
          >
            <h2 className="text-3xl font-bold cyber-text mb-8">Powered by Cutting-Edge Technology</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-4">AR Technologies</h3>
                <div className="space-y-3">
                  {['ARCore', 'ARKit', 'OpenAR', 'Mesh Engines'].map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="p-3 bg-indigo-500/10 border border-indigo-400/30 rounded-lg flex items-center gap-3"
                    >
                      <span className="text-indigo-400">◆</span>
                      <span className="text-gray-300">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-4">VR Technologies</h3>
                <div className="space-y-3">
                  {['Unreal Engine 5', 'Unity 3D', 'WebXR', 'Real-time Rendering'].map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="p-3 bg-indigo-500/10 border border-indigo-400/30 rounded-lg flex items-center gap-3"
                    >
                      <span className="text-indigo-400">◆</span>
                      <span className="text-gray-300">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-lg border border-indigo-400/30 text-center"
          >
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-3xl font-bold cyber-text mb-4">Experience It Now</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to see the future of industrial technology? Schedule a demo with our AR/VR specialists
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {['Desktop', 'Mobile', 'VR Headset'].map((device, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-indigo-500/20 border border-indigo-400/50 text-indigo-300 rounded-lg hover:bg-indigo-500/30 transition-colors font-semibold"
                >
                  Try on {device}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
            >
              Schedule AR/VR Demo
            </motion.button>
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
          <h2 className="text-4xl font-bold cyber-text mb-6">Transform Your Industry</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how AR and VR can revolutionize your operations and decision-making
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}
