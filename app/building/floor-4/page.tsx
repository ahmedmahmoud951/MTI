'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Floor4() {
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
            Floor 4
          </h1>
          <p className="text-xl text-blue-400 mb-2">Executive Offices & Strategic Planning</p>
          <p className="text-gray-400">Leadership & Innovation Hub</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Executive Suites */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glow-box p-8 rounded-lg backdrop-blur-sm hover:bg-blue-500/5 transition-colors"
          >
            <div className="text-5xl mb-4">👔</div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Executive Suites</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Premium office spaces designed for senior leadership with state-of-the-art technology integration, panoramic views, and executive meeting facilities.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>✓ C-Suite Offices</p>
              <p>✓ Board Room Conference</p>
              <p>✓ Private Dining Facilities</p>
              <p>✓ Executive Lounge</p>
            </div>
          </motion.div>

          {/* Strategic Planning */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glow-box p-8 rounded-lg backdrop-blur-sm hover:bg-blue-500/5 transition-colors"
          >
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Strategic Planning</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Dedicated spaces for long-term strategic initiatives, innovation planning, and business development. Advanced collaboration tools and analytics.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>✓ Innovation Labs</p>
              <p>✓ Strategy War Rooms</p>
              <p>✓ Business Intelligence Centers</p>
              <p>✓ Future Tech Exploration</p>
            </div>
          </motion.div>
        </div>

        {/* Department Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glow-box p-8 rounded-lg backdrop-blur-sm mb-12"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Key Departments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-500/10 rounded-lg border border-blue-400/30">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="text-blue-300 font-semibold mb-2">Finance & Operations</h4>
              <p className="text-sm text-gray-400">Budget management, financial planning, operational efficiency</p>
            </div>
            <div className="p-6 bg-blue-500/10 rounded-lg border border-blue-400/30">
              <div className="text-3xl mb-2">👥</div>
              <h4 className="text-blue-300 font-semibold mb-2">Human Resources</h4>
              <p className="text-sm text-gray-400">Talent development, recruitment, employee engagement</p>
            </div>
            <div className="p-6 bg-blue-500/10 rounded-lg border border-blue-400/30">
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="text-blue-300 font-semibold mb-2">Global Relations</h4>
              <p className="text-sm text-gray-400">International partnerships, market expansion, investor relations</p>
            </div>
          </div>
        </motion.div>

        {/* Executive Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glow-box p-8 rounded-lg backdrop-blur-sm mb-12"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Premium Amenities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Smart Meeting Rooms', desc: 'AI-powered scheduling and presentation systems', icon: '🎤' },
              { title: 'Secure Communications', desc: 'Encrypted videoconferencing and secure channels', icon: '🔒' },
              { title: 'Analytics Dashboard', desc: 'Real-time company performance metrics', icon: '📈' },
              { title: 'Executive Portal', desc: 'Unified interface for strategic data access', icon: '🔐' },
              { title: 'Wellness Center', desc: 'Premium facilities for executive wellness', icon: '💪' },
              { title: 'Private Parking', desc: 'Dedicated executive parking garage', icon: '🅿️' }
            ].map((feature, i) => (
              <div key={i} className="p-4 bg-blue-500/10 rounded-lg border border-blue-400/20 hover:border-blue-400/40 transition-colors flex items-start gap-4">
                <div className="text-2xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="text-blue-300 font-semibold mb-1 text-sm">{feature.title}</h4>
                  <p className="text-xs text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glow-box p-8 rounded-lg backdrop-blur-sm mb-12"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Strategic Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-blue-300 font-semibold mb-4 flex items-center gap-2">
                <span className="text-xl">🎯</span> Our Mission
              </h4>
              <p className="text-gray-300 leading-relaxed">
                To revolutionize engineering and IoT solutions by delivering cutting-edge technology that transforms industries and improves lives globally.
              </p>
            </div>
            <div>
              <h4 className="text-blue-300 font-semibold mb-4 flex items-center gap-2">
                <span className="text-xl">🚀</span> Our Vision
              </h4>
              <p className="text-gray-300 leading-relaxed">
                To be the world&rsquo;s leading provider of Digital Twin and IoT solutions, empowering organizations to achieve unprecedented operational excellence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-300 mb-6 font-semibold">Explore other departments:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { floor: 'Ground', link: '/building/ground', icon: '🏢' },
              { floor: 'Floor 1', link: '/building/floor-1', icon: '🔬' },
              { floor: 'Floor 2', link: '/building/floor-2', icon: '🌐' },
              { floor: 'Floor 3', link: '/building/floor-3', icon: '📡' }
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
