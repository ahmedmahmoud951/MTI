'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GroundFloor() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold cyber-text mb-4">
            Ground Floor
          </h1>
          <p className="text-xl text-blue-400 mb-2">Welcome to MTI Engineering Reception & Lobby</p>
          <p className="text-gray-400">Your gateway to innovation and excellence</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Reception Area */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glow-box p-8 rounded-lg backdrop-blur-sm hover:bg-blue-500/5 transition-colors"
          >
            <div className="text-5xl mb-4">🏢</div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Reception Area</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Our state-of-the-art reception welcomes clients and guests with modern amenities. Advanced digital displays showcase our latest projects and innovations.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>✓ 24/7 Security & Access Control</p>
              <p>✓ Digital Info Display System</p>
              <p>✓ Video Wall Presentation</p>
              <p>✓ Smart Check-in System</p>
            </div>
          </motion.div>

          {/* Lobby */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glow-box p-8 rounded-lg backdrop-blur-sm hover:bg-blue-500/5 transition-colors"
          >
            <div className="text-5xl mb-4">🌟</div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Main Lobby</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A stunning atrium space featuring impressive architecture and cutting-edge technology integration. Perfect for corporate events and presentations.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>✓ Panoramic Glass Architecture</p>
              <p>✓ Smart Lighting System</p>
              <p>✓ Collaborative Spaces</p>
              <p>✓ VIP Meeting Lounge</p>
            </div>
          </motion.div>
        </div>

        {/* Floor Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glow-box p-8 rounded-lg backdrop-blur-sm mb-12"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Ground Floor Layout</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-500/10 rounded-lg border border-blue-400/30">
              <div className="text-3xl mb-2">📍</div>
              <h4 className="text-blue-300 font-semibold mb-2">North Wing</h4>
              <p className="text-sm text-gray-400">Main Reception, Security, Information Desk</p>
            </div>
            <div className="p-6 bg-blue-500/10 rounded-lg border border-blue-400/30">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="text-blue-300 font-semibold mb-2">Central Hub</h4>
              <p className="text-sm text-gray-400">Main Lobby, Elevators, Facilities</p>
            </div>
            <div className="p-6 bg-blue-500/10 rounded-lg border border-blue-400/30">
              <div className="text-3xl mb-2">🍽️</div>
              <h4 className="text-blue-300 font-semibold mb-2">South Wing</h4>
              <p className="text-sm text-gray-400">Café, Dining Area, Lounge</p>
            </div>
          </div>
        </motion.div>

        {/* Next Floors Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-300 mb-6 font-semibold">Explore other floors:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { floor: 'Floor 1', link: '/building/floor-1', icon: '🔬' },
              { floor: 'Floor 2', link: '/building/floor-2', icon: '🌐' },
              { floor: 'Floor 3', link: '/building/floor-3', icon: '📡' },
              { floor: 'Floor 4', link: '/building/floor-4', icon: '👔' }
            ].map((item) => (
              <Link href={item.link} key={item.floor}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group glass-button p-4 text-center rounded-lg backdrop-blur-md border border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all cursor-pointer"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-blue-400 font-bold text-sm group-hover:text-blue-300">
                    {item.floor}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
