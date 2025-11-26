'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
}

const ecosystemChips = ['CCTV', 'VMS', 'Access Control', 'BMS', 'Radars', 'ICT & Cyber Security', 'Physical Security', 'Smart City · IoT']

const missionSuites = [
  {
    title: 'Track IT',
    tagline: 'Visitor & Personnel Experience',
    description:
      'A unified platform that integrates multiple security applications, automates workflows, and provides a single user interface for managing every visit.',
    bullets: ['Forehand visit registration and ID verification', 'Smart badges plus internal notification workflows', 'AI-powered visitor data tracking and insights'],
    image: '/pdf-assets/mti_page13_img02.jpeg',
  },
  {
    title: 'Traffic Management Suite',
    tagline: 'Tolling · Ticketing · Parking',
    description:
      'Modular platforms for tolling, ticketing, and parking built on resource efficiency, commercial viability, and reliable performance.',
    bullets: ['MTI ANPR/LPR engine with AI vehicle classification', 'Horizontal and vertical scalability for multi-site operations', 'Real-time billing, smart reporting, and subscription modules'],
    image: '/pdf-assets/mti_page32_img03.jpeg',
  },
  {
    title: 'C4I Systems',
    tagline: 'Command · Control · Communications · Infrastructure',
    description:
      'End-to-end C4I architecture delivering seamless operations for every building block of mission-critical infrastructure.',
    bullets: ['Unified visualization and control rooms', 'Live sensor fusion across CCTV, radar, GIS, and IoT', 'Vertical expansion to add new platforms on demand'],
    image: '/pdf-assets/mti_page20_img02.png',
  },
  {
    title: 'AI Analytics Fabric',
    tagline: 'Forensic, Customized Modules',
    description:
      'Machine learning solutions trained to detect faces, personal movement, vehicles, weapons, and custom threats while integrating diverse systems.',
    bullets: ['Integration Services Components (ISC) with orchestration and APIs', 'HTTP callbacks for event-driven automation', 'Continuous model training for new objects and risks'],
    image: '/pdf-assets/mti_page16_img01.jpeg',
  },
]

const integrationBlocks = [
  {
    title: 'Integration Services Components (ISC)',
    description: 'Non code-based components live on servers to connect local management tools and automate multiple systems.',
  },
  {
    title: 'Orchestration',
    description: 'Automation layer that coordinates workflows, triggers, and sequences across platforms without manual intervention.',
  },
  {
    title: 'Application Programming Interfaces',
    description: 'Documented APIs that allow rapid integration with third-party software, legacy infrastructure, and OEM hardware.',
  },
  {
    title: 'HTTP Callbacks',
    description: 'Event-driven callbacks linking source and destination systems for instant updates and alerts.',
  },
]

const buildingSecurity = [
  { title: 'Facial Recognition', detail: 'Matches faces at doors against stored credentials to prevent identity misuse.' },
  { title: 'Alert & Dispatch', detail: 'Unauthorized attempts trigger automated alerts without interrupting operators.' },
  { title: 'Door Control', detail: 'Full door actuation through the camera security system for faster responses.' },
  { title: 'Event Detection', detail: 'Live camera preview plus historical events for every access point to enhance investigations.' },
]

const situationalStats = [
  { value: '2 floors', label: 'Covered at walking speed in a single minute' },
  { value: '19 people', label: 'Entering or exiting a venue within 60 seconds' },
  { value: '48 m', label: 'Distance covered by a fleeing suspect' },
  { value: '1.5 km', label: 'Travelled by a suspect on a motorbike' },
  { value: '36,000 images', label: 'Captured by 50 cameras every minute' },
]

const gallery = [
  { src: '/pdf-assets/mti_page14_img02.jpeg', title: 'Visitor Journey Mapping', note: 'Track IT dashboards with live status' },
  { src: '/pdf-assets/mti_page15_img02.jpeg', title: 'Personnel Tracking Views', note: 'Cohesive control of multiple zones' },
  { src: '/pdf-assets/mti_page17_img07.png', title: 'Integration Fabric', note: 'Connects APIs, ISC, orchestration, and callbacks' },
  { src: '/pdf-assets/mti_page18_img02.png', title: 'AI Analytics Blocks', note: 'Flexible modules for new threats' },
]

export default function Technology() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="pt-28 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-blue-300 uppercase tracking-[0.4em] text-xs">
            MTI Software Solutions & Platforms
          </motion.p>
          <motion.h1 initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold cyber-text">
            Technology That Safeguards Cities, Terminals, and Mobility Networks
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-lg text-gray-300 max-w-3xl mx-auto">
            MTI blends AI, IoT, cyber, and integration services to deliver visitor management, tolling ecosystems, C4I platforms, and forensic analytics across Egypt and the wider MENA region.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-wrap justify-center gap-2">
            {ecosystemChips.map((chip) => (
              <span key={chip} className="px-4 py-2 rounded-full border border-blue-400/40 text-sm text-blue-200">
                {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Mission-Critical Suites</h2>
            <p className="text-gray-400 text-lg">Purpose-built technology stacks derived directly from MTI’s national programs.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionSuites.map((suite) => (
              <motion.div key={suite.title} variants={itemVariants} className="p-6 rounded-2xl border border-blue-500/20 bg-slate-900/70 space-y-4">
                <div className="w-full h-56 rounded-xl overflow-hidden">
                  <Image src={suite.image} alt={suite.title} width={820} height={520} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-blue-300 text-xs uppercase tracking-[0.3em]">{suite.tagline}</p>
                  <h3 className="text-2xl font-bold text-white mt-2">{suite.title}</h3>
                </div>
                <p className="text-sm text-gray-300">{suite.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {suite.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-blue-400">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/70">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Integration Fabric</h2>
            <p className="text-gray-400 text-lg">Connecting diversified systems into a single, automated command framework.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationBlocks.map((block) => (
              <motion.div key={block.title} variants={itemVariants} className="p-6 rounded-2xl border border-blue-500/20 bg-slate-950/60">
                <h3 className="text-xl font-bold text-white mb-2">{block.title}</h3>
                <p className="text-gray-300 text-sm">{block.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div variants={itemVariants} className="rounded-2xl border border-yellow-500/30 p-6 space-y-4 bg-slate-900/60">
              <div className="w-full h-56 rounded-xl overflow-hidden">
                <Image src="/pdf-assets/mti_page19_img01.jpeg" alt="Building Security System" width={820} height={520} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-yellow-400 text-xs uppercase tracking-[0.3em]">Building Security System</p>
                <h3 className="text-2xl font-bold text-white mt-2">Internal Movement Control</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                {buildingSecurity.map((item) => (
                  <li key={item.title} className="flex gap-2">
                    <span className="text-yellow-400">●</span>
                    <span>
                      <strong className="text-white">{item.title}:</strong> {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-2xl border border-blue-500/30 p-6 space-y-4 bg-slate-900/60">
              <div className="w-full h-56 rounded-xl overflow-hidden">
                <Image src="/pdf-assets/mti_page21_img02.jpeg" alt="Safe City Technology" width={820} height={520} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-blue-300 text-xs uppercase tracking-[0.3em]">Safe City Fundamentals</p>
                <h3 className="text-2xl font-bold text-white mt-2">Technology That Responds Instantly</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                {situationalStats.map((stat) => (
                  <li key={stat.value} className="flex gap-2">
                    <span className="text-blue-400">›</span>
                    <span>
                      <strong className="text-white">{stat.value}</strong> {stat.label}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Technology Gallery</h2>
            <p className="text-gray-400 text-lg">Reference visuals extracted from the MTI Group corporate profile.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gallery.map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="rounded-2xl overflow-hidden border border-blue-500/20">
                <div className="w-full h-72">
                  <Image src={item.src} alt={item.title} width={900} height={600} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 bg-slate-950/80">
                  <p className="text-sm uppercase text-blue-300 tracking-[0.3em]">{item.note}</p>
                  <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-600/10" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Modernize with MTI Technology</h2>
          <p className="text-gray-300 text-lg mb-6">
            Discuss your visitor journey, tolling corridor, or command center requirements and receive a tailored technology blueprint rooted in MTI’s national deployments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 font-bold">
              Request a Demo
            </Link>
            <Link href="/portfolio" className="px-8 py-4 rounded-lg border border-blue-400 text-blue-300">
              Explore Innovations
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
