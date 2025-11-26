'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Floor3() {
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
            Floor 3
          </h1>
          <p className="text-xl text-blue-400 mb-2">IoT Solutions & Network Operations Center</p>
          <p className="text-gray-400">Command Center for Connected Systems</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* IoT Command Center */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glow-box p-8 rounded-lg backdrop-blur-sm hover:bg-blue-500/5 transition-colors"
          >
            <div className="text-5xl mb-4">📡</div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">IoT Command Center</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Central hub managing thousands of IoT devices across multiple locations. Real-time monitoring, device control, and network optimization.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>✓ 10,000+ Connected Devices</p>
              <p>✓ Real-time Device Management</p>
              <p>✓ Automated Alerts & Responses</p>
              <p>✓ Network Redundancy Systems</p>
            </div>
          </motion.div>

          {/* Network Operations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glow-box p-8 rounded-lg backdrop-blur-sm hover:bg-blue-500/5 transition-colors"
          >
            <div className="text-5xl mb-4">🌐</div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Network Operations</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Mission-critical infrastructure managing data flows, security protocols, and system availability. 24/7 monitoring and support.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>✓ Multi-Protocol Support</p>
              <p>✓ Cybersecurity Monitoring</p>
              <p>✓ 99.99% Uptime SLA</p>
              <p>✓ Disaster Recovery Systems</p>
            </div>
          </motion.div>
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glow-box p-8 rounded-lg backdrop-blur-sm mb-12"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">IoT Technologies Deployed</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { name: '5G Networks', icon: '📶' },
              { name: 'MQTT Protocol', icon: '📨' },
              { name: 'Edge Computing', icon: '🖥️' },
              { name: 'Cloud Sync', icon: '☁️' }
            ].map((tech) => (
              <div key={tech.name} className="p-6 bg-blue-500/10 rounded-lg border border-blue-400/30 text-center">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h4 className="text-blue-300 font-semibold text-sm">{tech.name}</h4>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glow-box p-8 rounded-lg backdrop-blur-sm mb-12"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Network Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Data Points/Day', value: '50M+' },
              { label: 'Average Latency', value: '12ms' },
              { label: 'System Reliability', value: '99.99%' },
              { label: 'Active Connections', value: '10K+' }
            ].map((stat) => (
              <div key={stat.label} className="p-6 bg-blue-500/10 rounded-lg border border-blue-400/30 text-center">
                <div className="text-3xl font-bold cyber-text mb-2">{stat.value}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glow-box p-8 rounded-lg backdrop-blur-sm mb-12"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Smart Capabilities</h3>
          <div className="space-y-3">
            {[
              'Autonomous device provisioning and management',
              'Self-healing network with automatic failover',
              'AI-powered anomaly detection and response',
              'End-to-end encryption for all communications',
              'Real-time performance analytics and reporting'
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-blue-400 text-lg flex-shrink-0">◆</span>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
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
          <p className="text-blue-300 mb-6 font-semibold">Navigate between floors:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { floor: 'Ground', link: '/building/ground', icon: '🏢' },
              { floor: 'Floor 1', link: '/building/floor-1', icon: '🔬' },
              { floor: 'Floor 2', link: '/building/floor-2', icon: '🌐' },
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
