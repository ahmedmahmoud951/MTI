'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function History() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null)

  const timelineEvents = [
    {
      year: '1969',
      title: 'MTI Founded',
      description: 'Mr. Omran Awadein establishes Misr Trade & Investment in Cairo, laying the foundation for a diversified technology and distribution group.',
      icon: '🏛️',
      milestone: 'Foundation',
    },
    {
      year: '1990s-2000s',
      title: 'Regional Distribution Era',
      description: 'Distribution and service networks expand beyond Egypt, connecting more than six countries and over 3,000 retailers directly to MTI.',
      icon: '🌍',
      milestone: 'Regional Growth',
    },
    {
      year: '2015',
      title: 'Smart & Safe City Leadership',
      description: 'MTI is engaged in Egypt’s first Smart and Safe City project (ACUD), delivering command, control, and integrated security infrastructure.',
      icon: '🏙️',
      milestone: 'Smart City',
    },
    {
      year: 'KAYAN Strategic Project',
      title: 'National Command Infrastructure',
      description: 'Delivered CCTV, access control, radar tracking, multisensors, and IoT/BMS integration across a 20,000 acre strategic leadership compound.',
      icon: '🎯',
      milestone: 'Defense Infrastructure',
    },
    {
      year: 'Al Hamra Port',
      title: 'Integrated Port Security',
      description: 'Secured critical oil export terminals with marine and ground radars, multi-sensor cameras, LPR, RFID-enabled gates, and deterrent fencing.',
      icon: '⚓',
      milestone: 'Maritime Security',
    },
    {
      year: 'Cairo Airports',
      title: 'National Aviation Protection',
      description: 'Implemented 2,500+ cameras, thermal sensors, 14 ground radars, and 54 LPR cameras to secure Cairo International Airport, EgyptAir, and Borg El Arab Airport.',
      icon: '✈️',
      milestone: 'Aviation Security',
    },
    {
      year: 'Watanya & Suez Corridor',
      title: 'Mobility & Tolling Modernization',
      description: 'Deployed 900 cameras, 400 LPR systems, microwave links, and smart ticketing to enhance expressways, national tollgates, and the Suez Canal tunnel network.',
      icon: '🚦',
      milestone: 'Transportation',
    },
    {
      year: 'Olympic City',
      title: 'Mega Sports City Security',
      description: 'Installed 6,000 cameras, 400 access control points, IoT platforms, and GIS monitoring to safeguard Egypt’s Olympic City and national venues.',
      icon: '🏟️',
      milestone: 'Mega Events',
    },
    {
      year: 'Today',
      title: 'Digital Command & Software Platforms',
      description: 'Operating capital-wide citizens control centers while delivering MTI Track IT, Ai Analytics, Tolling, and C4I software suites across government and enterprise.',
      icon: '🛰️',
      milestone: 'Digital Command',
    },
  ]

  const achievements = [
    { number: '50+ Years', label: 'of business presence', icon: '📆' },
    { number: '5B+ EGP', label: 'annual group turnover', icon: '💰' },
    { number: '1,000+', label: 'employees across MTI', icon: '👥' },
    { number: '60%', label: 'engineering workforce', icon: '🛠️' },
    { number: '6+ Countries', label: 'served by MTI networks', icon: '🌐' },
    { number: '3,000+', label: 'retailers directly connected', icon: '🛒' },
  ]

  const platforms = [
    {
      title: 'Track IT',
      description: 'Visitor management and personnel tracking solution combining pre-registration, ID verification, and unified notifications.',
      icon: '🆔',
    },
    {
      title: 'Tolling, Ticketing & Parking',
      description: 'Resource-efficient traffic platforms with in-house ANPR/LPR engines, modular automation, and centralized analytics.',
      icon: '🧾',
    },
    {
      title: 'C4I Systems',
      description: 'End-to-end command, control, communications, and critical infrastructure systems integrating every security building block.',
      icon: '🛡️',
    },
    {
      title: 'Ai Analytics',
      description: 'Forensic-grade AI analytics covering facial, vehicle, weapon, and anomaly detection with robust integration services.',
      icon: '🤖',
    },
  ]

  const pillars = [
    { title: 'Visionary Leadership', desc: 'Guidance that drives diversification, innovation, and long-term investment.', icon: '🚀' },
    { title: 'Integrated Technology', desc: 'Seamless convergence of CCTV, radar, IoT, cyber, and software assets.', icon: '🔗' },
    { title: 'National Impact', desc: 'Programs that safeguard strategic assets, transport corridors, and mega cities.', icon: '🏛️' },
    { title: 'Global Partnerships', desc: 'Alliances with leading OEMs to deliver best-in-class solutions.', icon: '🤝' },
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
      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-rose-500/5 rounded-full mix-blend-screen filter blur-3xl" />
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-pink-600/5 rounded-full mix-blend-screen filter blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-block px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full mb-6">
            <span className="text-rose-400 text-sm font-semibold">📚 Since 1969</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold cyber-text mb-6">
            MTI Group Heritage
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Over five decades of safeguarding nations, modernizing infrastructure, and delivering smart-city innovation across Egypt and the wider MENA region.
          </p>
        </motion.div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.label}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-card p-6 rounded-lg border border-rose-400/30 text-center group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold text-rose-400 mb-1">
                  {achievement.number}
                </div>
                <div className="text-sm text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold cyber-text mb-4">Milestones & Strategic Programs</h2>
            <p className="text-gray-400 text-lg">
              Tap into the projects that shaped MTI&rsquo;s leadership in security, technology integration, and smart infrastructure.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-500 via-pink-500 to-rose-600" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  variants={itemVariants}
                  onClick={() => setSelectedYear(selectedYear === event.year ? null : event.year)}
                  className={`flex items-center gap-8 cursor-pointer ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="w-full lg:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`glass-card p-8 rounded-lg border transition-all ${
                        selectedYear === event.year
                          ? 'border-rose-400/60 bg-rose-500/10'
                          : 'border-rose-400/30 hover:border-rose-400/60'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{event.icon}</span>
                        <div>
                          <div className="text-rose-400 font-bold text-lg">{event.year}</div>
                          <div className="text-xs text-gray-400">{event.milestone}</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 hover:text-rose-400 transition-colors">
                        {event.title}
                      </h3>

                      <p className="text-gray-400 text-sm">{event.description}</p>

                      {selectedYear === event.year && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 pt-4 border-t border-rose-400/20"
                        >
                          <p className="text-gray-300 text-sm">
                            The program demonstrates MTI&rsquo;s ability to blend surveillance, analytics, cyber security, and bespoke software into unified national platforms.
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  <div className="hidden lg:flex justify-center w-full lg:w-0">
                    <motion.div
                      whileHover={{ scale: 1.4 }}
                      className={`w-6 h-6 rounded-full border-4 cursor-pointer z-10 transition-all ${
                        selectedYear === event.year
                          ? 'bg-rose-400 border-slate-800 scale-125'
                          : 'bg-rose-500 border-slate-800 hover:bg-rose-400'
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-rose-500/10 via-transparent to-pink-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold cyber-text mb-4">MTI Software Solutions & Platforms</h2>
            <p className="text-gray-400 text-lg">
              Mission-critical platforms powering visitor management, tolling ecosystems, and forensic-grade analytics.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {platforms.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 rounded-lg border border-rose-400/30 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold cyber-text mb-4">Leadership Pillars</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-card p-6 rounded-lg border border-rose-400/30 text-center group cursor-pointer"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-4xl font-bold cyber-text mb-6">Shape the Next MTI Chapter</h2>
          <p className="text-xl text-gray-300 mb-8">
            Collaborate with MTI Group to bring advanced surveillance, ICT, and software ecosystems to life across the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-rose-500/50 transition-all"
            >
              Explore Partnerships
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-button font-bold rounded-lg border-2 border-rose-400/50 text-rose-300 hover:text-rose-200"
            >
              Contact MTI Group
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
