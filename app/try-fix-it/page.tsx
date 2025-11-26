'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Scenario {
  id: string
  title: string
  description: string
  icon: string
  problem: string
  userSteps: string[]
  mtiSolution: string[]
  color: string
}

const scenarios: Scenario[] = [
  {
    id: 'sensor-failure',
    title: 'IoT Sensor Failure',
    description: 'Critical sensor stopped transmitting data',
    icon: '📡',
    problem: 'Temperature sensor in Plant A stopped responding. Temperature readings are unavailable for 45 minutes.',
    userSteps: [
      'Restart the device (may help)',
      'Check the connection cable (cable is intact)',
      'Change the battery (works briefly, then fails again)',
    ],
    mtiSolution: [
      '🔍 AI Detection: Anomaly detected - sensor heartbeat missing',
      '⚡ Root Cause Analysis: Firmware corruption identified',
      '🔧 Auto-Fix: Remote firmware update deployed',
      '✅ Recovery: Sensor back online with full diagnostics',
      '📊 Data Backfill: Historical data restored from cloud backup',
    ],
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 'camera-offline',
    title: 'Camera System Down',
    description: 'Security camera network partially offline',
    icon: '📹',
    problem: 'Building surveillance cameras on Level 3 showing offline status. Security gap in critical area.',
    userSteps: [
      'Reboot camera manually (restarts but fails again)',
      'Check network cable (connection looks fine)',
      'Power cycle the switch (temporary fix)',
    ],
    mtiSolution: [
      '🎥 System Scan: Multi-point failure detected',
      '🔐 Security Alert: Issued real-time security patch',
      '🌐 Network Optimization: Auto-rerouted through redundant path',
      '🔄 Load Balancing: Distributed traffic across backup servers',
      '🛡️ Enhanced Monitoring: AI guards the area until full recovery',
    ],
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'data-congestion',
    title: 'Data Congestion',
    description: 'System receiving too much data at once',
    icon: '📊',
    problem: 'Data gateway receiving 50,000 readings/sec. System latency increasing. Risk of data loss.',
    userSteps: [
      'Increase bandwidth (expensive, slow process)',
      'Reduce data frequency (lose critical information)',
      'Add more storage (temporary measure)',
    ],
    mtiSolution: [
      '🤖 ML Analysis: Identified redundant data streams',
      '🧠 Smart Filtering: AI-powered data compression activated',
      '⚙️ Edge Computing: Processing moved closer to data source',
      '🔄 Pipeline Optimization: Load redistribution completed',
      '📈 Result: Processing 100K readings/sec with 99.9% efficiency',
    ],
    color: 'from-green-400 to-teal-500',
  },
  {
    id: 'security-breach',
    title: 'Security Threat',
    description: 'Unauthorized access attempt detected',
    icon: '🔒',
    problem: 'Suspicious login attempts from unknown IP. Potential security breach detected. System access at risk.',
    userSteps: [
      'Block the IP manually (more IPs appear)',
      'Reset all passwords (time-consuming)',
      'Disable the account (service disruption)',
    ],
    mtiSolution: [
      '🛡️ Threat Detection: AI identified botnet attack pattern',
      '⚡ Immediate Action: Threat isolated in sandbox',
      '🔐 Security Hardening: Multi-factor authentication enforced',
      '🚨 Alerts: Real-time monitoring activated across all systems',
      '✅ Resolution: Breach contained, attack prevented before spread',
    ],
    color: 'from-rose-400 to-pink-500',
  },
  {
    id: 'temperature-alert',
    title: 'Temperature Spike',
    description: 'Abnormal temperature reading in equipment',
    icon: '🌡️',
    problem: 'Equipment temperature spiked to 95°C. Thermal shutdown imminent in 5 minutes if not resolved.',
    userSteps: [
      'Increase cooling fans (temporary relief)',
      'Manual inspection (equipment stops working)',
      'Shutdown the equipment (service loss)',
    ],
    mtiSolution: [
      '🌡️ Predictive Analysis: Issue predicted 2 hours before occurrence',
      '⚙️ Automatic Response: Cooling system auto-increased',
      '🔧 Maintenance Trigger: Preventive maintenance scheduled',
      '📊 Root Cause: Dust buildup identified and cleared',
      '✅ Optimization: Temperature now stable at 65°C',
    ],
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'pressure-critical',
    title: 'Pressure Overload',
    description: 'Generator pressure exceeding safe limits',
    icon: '⚙️',
    problem: 'Generator pressure reached 150 PSI (limit: 100 PSI). Emergency shutdown risk. Production at risk.',
    userSteps: [
      'Release pressure valve (risky, unstable)',
      'Reduce load manually (inconsistent control)',
      'Emergency stop (complete production halt)',
    ],
    mtiSolution: [
      '⚙️ Digital Twin Simulation: Predicted overload 30 min earlier',
      '🤖 Auto-Control: Smart regulation system engaged',
      '📉 Load Redistribution: Workload spread across units',
      '🔍 Diagnostics: Root cause - maintenance filter clogged',
      '✅ Prevention: Filter replaced, pressure optimized to 95 PSI',
    ],
    color: 'from-purple-400 to-indigo-500',
  },
]

type SimulationStep = 'selection' | 'problem' | 'reveal' | 'solution'

export default function TryFixIt() {
  const [step, setStep] = useState<SimulationStep>('selection')
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null)
  const [userAttemptCount, setUserAttemptCount] = useState(0)
  const [revealProgress, setRevealProgress] = useState(0)

  const handleSelectScenario = (scenario: Scenario) => {
    setSelectedScenario(scenario)
    setUserAttemptCount(0)
    setRevealProgress(0)
    setStep('problem')
  }

  const handleUserAttempt = () => {
    setUserAttemptCount(userAttemptCount + 1)
    setStep('reveal')
    startMTISolutionReveal()
  }

  const startMTISolutionReveal = () => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 15
      setRevealProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setStep('solution')
        }, 500)
      }
    }, 300)
  }

  const handleReset = () => {
    setStep('selection')
    setSelectedScenario(null)
    setUserAttemptCount(0)
    setRevealProgress(0)
  }

  return (
    <div className="w-full overflow-hidden pt-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-screen filter blur-3xl" />
          <div className="absolute -bottom-10 right-10 w-96 h-96 bg-pink-600/5 rounded-full mix-blend-screen filter blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <span className="text-purple-400 text-sm font-semibold">🎮 Interactive Simulator</span>
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold cyber-text mb-2">
              حل المشكلة بنفسك
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-300">
              Try to Fix It
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience real engineering challenges. Attempt to solve them yourself, then discover how MTI Engineering&rsquo;s advanced AI and expertise delivers superior solutions.
          </p>
        </motion.div>
      </section>

      <AnimatePresence mode="wait">
        {/* Selection Screen */}
        {step === 'selection' && (
          <motion.div
            key="selection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-32"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-white mb-6">Choose Your Challenge</h2>
                <p className="text-lg text-gray-400">Select an engineering scenario to test your problem-solving skills</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scenarios.map((scenario, idx) => (
                  <motion.button
                    key={scenario.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => handleSelectScenario(scenario)}
                    className="group text-left"
                  >
                    <div className={`glass-card p-6 rounded-lg border border-gray-600/50 hover:border-purple-400/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-purple-500/10 bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-slate-700`}>
                      <div className="text-5xl mb-4">{scenario.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {scenario.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">{scenario.description}</p>
                      <div className="flex items-center text-purple-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                        Start Challenge →
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Problem View */}
        {step === 'problem' && selectedScenario && (
          <motion.div
            key="problem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-32"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-8 md:p-12 rounded-lg border border-gray-600/50 space-y-8"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-4">
                    <div className="text-7xl">{selectedScenario.icon}</div>
                    <h2 className="text-4xl font-bold text-white">{selectedScenario.title}</h2>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    ← Back
                  </button>
                </div>

                <div className={`bg-gradient-to-r ${selectedScenario.color} p-0.5 rounded-lg`}>
                  <div className="bg-slate-900 p-8 rounded-lg">
                    <p className="text-lg text-gray-100 font-semibold leading-relaxed">{selectedScenario.problem}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">⏱️ Can you solve it?</h3>
                  <motion.button
                    onClick={handleUserAttempt}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
                  >
                    Show MTI Solution
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}



        {/* MTI Solution Reveal */}
        {step === 'reveal' && selectedScenario && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-8 rounded-lg border border-purple-500/50 bg-gradient-to-b from-purple-900/20 to-transparent"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-purple-300 mb-2">Let MTI Engineering Handle It...</h2>
                  <p className="text-gray-400">Advanced AI & Expert Engineering in Action</p>
                </div>

                <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden mb-8">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${revealProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>

                <div className="space-y-4 mb-8">
                  {selectedScenario.mtiSolution.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: revealProgress > (idx * 20) ? 1 : 0.3, x: 0 }}
                      className="p-4 bg-slate-700/50 rounded-lg border border-purple-400/20"
                    >
                      <p className="text-gray-200">{step}</p>
                    </motion.div>
                  ))}
                </div>

                {revealProgress >= 100 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-gradient-to-r from-green-900/20 to-green-900/5 rounded-lg border border-green-500/30"
                  >
                    <p className="text-green-300 font-semibold text-center mb-4">✅ Problem Solved!</p>
                    <p className="text-gray-300 text-center mb-6">
                      That&rsquo;s how MTI Engineering combines AI, Digital Twin technology, and expert engineering to solve real-world problems in seconds.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Solution View */}
        {step === 'solution' && selectedScenario && (
          <motion.div
            key="solution"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="glass-card p-8 rounded-lg border border-green-500/50 bg-gradient-to-br from-green-900/20 to-transparent">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">✅</div>
                    <div>
                      <h2 className="text-2xl font-bold text-green-300 mb-4">Challenge Complete!</h2>
                      <p className="text-gray-300 mb-4">
                        Your attempts took about 30 seconds, but MTI&rsquo;s advanced systems solved it in {selectedScenario.mtiSolution.length} intelligent steps.
                      </p>
                      <p className="text-gray-400 text-sm">
                        This is the difference between manual troubleshooting and AI-powered engineering excellence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-lg border border-purple-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">🎯 Key Takeaway</h3>
                  <p className="text-gray-300 mb-4">
                    MTI Engineering&rsquo;s engineering decision simulator demonstrates real-world problem-solving power through:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold">🤖</span>
                      <span className="text-gray-300"><strong>Predictive AI:</strong> Problems detected before they become critical</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 font-bold">🔮</span>
                      <span className="text-gray-300"><strong>Digital Twin:</strong> Simulate solutions before implementation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">⚡</span>
                      <span className="text-gray-300"><strong>Instant Response:</strong> Automated corrective actions in milliseconds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 font-bold">📊</span>
                      <span className="text-gray-300"><strong>Data Intelligence:</strong> Root cause analysis with 99.9% accuracy</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    onClick={handleReset}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    Try Another Challenge
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-4 px-6 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-600 transition-all"
                  >
                    <a href="/contact">Contact Us</a>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Features Section */}
      {step === 'selection' && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="py-20 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose MTI Engineering?</h2>
              <p className="text-gray-400">Experience shows the difference</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🚀',
                  title: 'Ultra-Fast Response',
                  desc: 'Problems solved in milliseconds, not hours',
                },
                {
                  icon: '🧠',
                  title: 'AI-Powered Decision Making',
                  desc: 'Machine learning predicts issues before they occur',
                },
                {
                  icon: '💎',
                  title: '99.9% Success Rate',
                  desc: 'Proven reliability across 500+ projects',
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-lg border border-gray-600/50 text-center"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </div>
  )
}
