'use client'

import { motion } from 'framer-motion'

export default function About() {
  const missionVision = [
    {
      title: 'Our Vision',
      description: 'Empower people by bringing inspiration and innovation to their lives so they can live better and more easily.',
      accent: 'Vision',
    },
    {
      title: 'Our Mission',
      description: 'Become the #1 technology company in the MENA region within five years by delivering solutions that advance humanity and simplify everyday life.',
      accent: 'Mission',
    },
  ]

  const highlights = [
    'Established in 1969 by Mr. Omran Awadein with headquarters in Cairo, Egypt.',
    'Annual group turnover exceeding 5 Billion Egyptian Pounds.',
    '1,000+ employees with 60% engineering staff and 25% specialized sales forces.',
    'Extended presence across more than six countries with 3,000+ retailers directly connected.',
    'Supplier of national security, enterprise communication, and smart city technologies.',
  ]

  const markets = ['SOHO & SME', 'LME', 'Wholesale', 'Retail', 'Key Accounts', 'End Users']

  const values = [
    {
      icon: '📊',
      title: 'Accountability',
      description: 'Transparent delivery that aligns with national priorities and civic expectations.',
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Coordinated operations with partners, agencies, and customers across the region.',
    },
    {
      icon: '🔗',
      title: 'Connectivity',
      description: 'Deep integration between OT, IT, and cyber platforms for always-on performance.',
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Efficient solutions that reduce total cost of ownership and extend asset life.',
    },
    {
      icon: '🧠',
      title: 'Intelligence',
      description: 'Data-driven decision making across surveillance, transportation, and command centers.',
    },
  ]

  const timeline = [
    {
      year: 1969,
      title: 'Foundation',
      description: 'Misr Trade & Investment begins operations in Cairo, building a multi-vertical technology portfolio.',
    },
    {
      year: 1990,
      title: 'Regional Distribution',
      description: 'Retail and service networks expand beyond Egypt, reaching thousands of partners across MENA.',
    },
    {
      year: 2015,
      title: 'Smart & Safe Cities',
      description: 'MTI is engaged in Egypt’s first Smart and Safe City program for the Administrative Capital.',
    },
    {
      year: 2020,
      title: 'Command & Control Leadership',
      description: 'Large-scale C4I deployments integrate CCTV, radar, IoT, GIS, and cyber platforms nationwide.',
    },
    {
      year: 2024,
      title: 'Mission-Critical Software',
      description: 'MTI Track IT, Ai Analytics, and tolling platforms operate across transportation and security ecosystems.',
    },
  ]

  const metrics = [
    { label: 'Annual Turnover', value: '5B+ EGP' },
    { label: 'Employees', value: '1,000+' },
    { label: 'Engineering Talent', value: '60%' },
    { label: 'Countries Served', value: '6+' },
    { label: 'Retail Partners', value: '3,000+' },
    { label: 'Years in Operation', value: '50+' },
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
      <section className="min-h-96 flex items-center justify-center relative overflow-hidden mb-32">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-600/20 rounded-full mix-blend-screen filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold cyber-text"
          >
            MTI Engineering Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Established in 1969, MTI Engineering Solutions delivers security, communications, and smart-city infrastructure across Egypt and the wider MENA region.
          </motion.p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {missionVision.map((item) => (
            <div key={item.title} className="glow-box p-8 rounded-lg backdrop-blur-sm">
              <p className="text-yellow-400 text-xs uppercase tracking-[0.3em] mb-3">{item.accent}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glow-box p-8 md:p-12 rounded-lg backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Story</h2>
          <p className="text-gray-300 leading-relaxed mb-4 text-lg">
            MTI Engineering Solutions began as a visionary trading and technology enterprise and evolved into a diversified organization serving national security, infrastructure, and consumer markets. Our leadership continues to invest in large-scale surveillance, ICT, tolling, and cyber programs that reinforce Egypt&apos;s digital future.
          </p>
          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-gray-300">
                <span className="text-yellow-400 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glow-box p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Market Segments</h2>
          <p className="text-gray-300 mb-6">
            Tailored go-to-market strategies serve every layer of the ecosystem.
          </p>
          <div className="flex flex-wrap gap-3">
            {markets.map((segment) => (
              <span key={segment} className="px-4 py-2 border border-yellow-500/30 rounded-full text-sm text-yellow-300">
                {segment}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold cyber-text text-center mb-12"
        >
          Leadership Values
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              className="glow-box p-6 rounded-lg text-center backdrop-blur-sm"
            >
              <div className="text-4xl mb-3">{value.icon}</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold cyber-text text-center mb-12"
        >
          Milestones
        </motion.h2>

        <div className="space-y-8">
          {timeline.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glow-box p-6 rounded-lg backdrop-blur-sm"
            >
              <div className="text-yellow-400 font-bold text-lg mb-2">{event.year}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-gray-400">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Group Snapshot</h2>
          <p className="text-gray-400 text-lg">Key indicators that define MTI&rsquo;s scale and credibility.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="glow-box p-6 rounded-lg text-center"
            >
              <div className="text-2xl font-bold text-yellow-400 mb-2">{metric.value}</div>
              <p className="text-gray-400 text-sm">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
