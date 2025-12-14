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
      delayChildren: 0.3,
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

const customerSegments = ['SOHO & SME', 'LME', 'Wholesale', 'Retail', 'Key Accounts', 'End Users']

const serviceAreas = [
  {
    title: 'CCTV Surveillance & Command',
    badge: 'Security Infrastructure',
    summary:
      'MTI deploys CCTV surveillance solutions that scale from typical facilities to highly sophisticated campuses, all unified under centralized command and control.',
    bullets: [
      '313,200 surveillance devices delivered across national programs',
      'Thermal, PTZ, and multi-sensor cameras visualized on a single pane of glass',
      'Round-the-clock situational awareness powered by AI video analytics',
    ],
    stats: [
      { label: 'Devices Deployed', value: '313,200' },
      { label: 'Units Commissioned', value: '2,925' },
    ],
    image: '/pdf-assets/mti_page30_img01.jpeg',
  },
  {
    title: 'Access Control & Identity',
    badge: 'Physical Security',
    summary:
      'Advanced physical and electronic access control solutions delivered with leading global technology partners to secure every entrance.',
    bullets: [
      '27,000+ access points integrated for the KAYAN command complex',
      'Turnstiles, RFID, bollards, and vehicle barriers managed from central dashboards',
      'Seamless linkage with CCTV, BMS, GIS, and IoT platforms',
    ],
    stats: [
      { label: 'Access Points', value: '27,000+' },
      { label: 'Gates Secured', value: '9 Strategic' },
    ],
    image: '/pdf-assets/mti_page31_img01.jpeg',
  },
  {
    title: 'Smart & Safe City Programs',
    badge: 'Urban Platforms',
    summary:
      'Engaged in Egypt’s first Smart & Safe City (ACUD) with fully integrated command centers connecting security agencies, utilities, and citizen services.',
    bullets: [
      'Control room infrastructure with large-scale visualization walls',
      'Road, square, and utility monitoring integrated with GIS and IoT feeds',
      'Capital Citizens Control & Services Center (COC) delivering digital signage and communications',
    ],
    stats: [
      { label: 'Capital Districts', value: 'Entire ACUD' },
      { label: 'Connected Agencies', value: 'Security + Utilities' },
    ],
    image: '/pdf-assets/mti_page36_img02.jpeg',
  },
  {
    title: 'Perimeter & Port Security',
    badge: 'Critical Assets',
    summary:
      'Layered protection for strategic compounds, ports, and air bases using radar, multi-sensor cameras, and automated response workflows.',
    bullets: [
      'Al Hamra Port secured with marine and ground radars plus deterrent fences',
      '40,000+ CCTV feeds, ANPR, and radar tracking deployed across the KAYAN project',
      'Integrated command rooms covering sea, air, and land perimeters',
    ],
    stats: [
      { label: 'Marine & Ground Radars', value: '4+' },
      { label: 'PTZ Cameras', value: '40' },
    ],
    image: '/pdf-assets/mti_page27_img01.jpeg',
  },
  {
    title: 'Video Analytics & AI Security',
    badge: 'AI Platforms',
    summary:
      'Forensic-grade AI analytics power face, personal, vehicle, and weapon detection to keep venues safe and responsive.',
    bullets: [
      'Visitor identification, personal tracking, and anomaly detection',
      'Weapon, vehicle, and behavior analytics tailored to mission needs',
      'Multi-source ingestion with integration services, orchestration, and webhooks',
    ],
    stats: [
      { label: 'AI Modules', value: 'Face · Vehicle · Weapon' },
      { label: 'Integration Methods', value: 'API · ISC · Orchestration' },
    ],
    image: '/pdf-assets/mti_page13_img04.jpeg',
  },
]

const tailoredSolutions = [
  {
    title: 'Track IT',
    subtitle: 'Visitors Management & Personnel Tracking',
    description:
      'Unified software that manages pre-registration, ID verification, badging, internal notifications, and AI-powered visitor analytics.',
    features: ['Forehand visit registration', 'Live personal tracking dashboards', 'Automated alerts for security teams'],
    image: '/pdf-assets/mti_page13_img01.jpeg',
  },
  {
    title: 'Tolling · Ticketing · Parking',
    subtitle: 'Traffic Management Suite',
    description:
      'Resource-efficient tolling with MTI’s in-house ANPR/LPR engine, multi-site scalability, and modular automation.',
    features: ['AI vehicle classification', 'E-payment and subscription modules', 'Real-time occupancy and analytics'],
    image: '/pdf-assets/mti_page32_img02.jpeg',
  },
  {
    title: 'C4I Systems',
    subtitle: 'Command · Control · Communications · Infrastructure',
    description:
      'End-to-end C4I platform integrating every building block of mission-critical infrastructure for seamless operations.',
    features: ['Unified dashboards', 'Live sensor fusion', 'Horizontal & vertical scalability'],
    image: '/pdf-assets/mti_page20_img02.png',
  },
  {
    title: 'AI Analytics',
    subtitle: 'Forensic, Customized Modules',
    description:
      'MTI software solutions deliver industry-specific analytics that integrate diversified systems for better performance.',
    features: ['Multi-source ingestion', 'Threat and asset detection', 'Continuous model training'],
    image: '/pdf-assets/mti_page16_img01.jpeg',
  },
]

const mobilitySolutions = [
  {
    title: 'Smart Tolling Platform',
    description:
      'Higher automation in tolling with AI-based vehicle classification, centralized billing, and ANPR/LPR-driven accuracy.',
    highlights: ['Resource-efficient automation', 'Centralized command with smart reporting', 'Multi-site deployment readiness'],
    image: '/pdf-assets/mti_page32_img03.jpeg',
  },
  {
    title: 'Ticketing Automation',
    description:
      'Complimentary ticketing that processes ANPR/LPR data, prints tickets automatically, and supports subscription models.',
    highlights: ['Auto issuance and payment reconciliation', 'Supports diverse e-payment options', 'Integrates with national mobility systems'],
    image: '/pdf-assets/mti_page33_img05.jpeg',
  },
  {
    title: 'Smart Parking & Traffic Flow',
    description:
      'AI-enabled parking detection using CCTV inputs plus analytics for occupancy, safety, and traffic-flow efficiency.',
    highlights: ['Real-time parking monitoring', 'IoT connectivity and safety sensors', 'Traffic-flow optimization dashboards'],
    image: '/pdf-assets/mti_page34_img02.jpeg',
  },
]

const programMetrics = [
  { value: '97,500', label: 'Network Ports Delivered' },
  { value: '97,650', label: 'Terminals Installed' },
  { value: '16,900', label: 'Processors Configured' },
  { value: '12,500', label: 'Screens & Consoles' },
  { value: '159,000', label: 'Terabytes Installed' },
  { value: '15,600 km', label: 'Cables Laid' },
  { value: 'USD 143.69M', label: '5-Year Turnover' },
  { value: '5B+ EGP', label: 'Annual Group Turnover' },
]

const safeCityPillars = [
  { title: 'Accountability', description: 'Transparent services responding to evolving civic needs.' },
  { title: 'Collaboration', description: 'Coordinated resources and shared information across agencies.' },
  { title: 'Connectivity', description: 'Tight linkage between OT platforms and enterprise IT systems.' },
  { title: 'Sustainability', description: 'Lower TCO through efficient, productive technologies.' },
  { title: 'Intelligence', description: 'Data-driven insights powering proactive decision making.' },
]

const gallery = [
  { src: '/pdf-assets/mti_page25_img01.jpeg', caption: 'Strategic Leadership – KAYAN Command', location: 'New Administrative Capital' },
  { src: '/pdf-assets/mti_page27_img01.jpeg', caption: 'Al Hamra Port Security Enhancement', location: 'Al Alamein, Egypt' },
  { src: '/pdf-assets/mti_page29_img01.jpeg', caption: 'Cairo International Airport Integrated Security', location: 'Cairo, Egypt' },
  { src: '/pdf-assets/mti_page32_img02.jpeg', caption: 'WATANYA Toll Gates Management', location: 'National Roads Company' },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="pt-28 pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-blue-300 uppercase tracking-[0.4em] text-xs">
            Since 1969 · MTI Engineering Solutions
          </motion.p>
          <motion.h1 initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold cyber-text">
            Mission-Critical Services for Cities, Airports, Ports, and National Programs
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            From CCTV and access control to intelligent tolling and AI analytics, MTI Engineering Solutions delivers turnkey systems that keep Egypt and the wider MENA region moving safely.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-wrap gap-3 justify-center">
            {customerSegments.map((segment) => (
              <span key={segment} className="px-4 py-2 rounded-full border border-blue-400/40 text-sm text-blue-200">
                {segment}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Core Service Areas</h2>
            <p className="text-gray-400 text-lg">Each deployment blends field-proven hardware with MTI software, analytics, and integration expertise.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {serviceAreas.map((area) => (
              <motion.div key={area.title} variants={itemVariants} className="glow-box p-6 rounded-2xl backdrop-blur-sm border border-blue-500/20 space-y-5">
                <div className="relative w-full h-64 overflow-hidden rounded-xl">
                  <Image src={area.image} alt={area.title} width={900} height={600} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-blue-500/80 text-xs font-semibold px-3 py-1 rounded-full">
                    {area.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-200 mb-2">{area.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{area.summary}</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  {area.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-blue-400">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-4">
                  {area.stats.map((stat) => (
                    <div key={stat.label} className="bg-slate-900/60 rounded-lg p-4 text-center border border-blue-500/10">
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Tailor-Made Platforms</h2>
            <p className="text-gray-400 text-lg">Software suites designed to solve mission-critical challenges.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tailoredSolutions.map((solution) => (
              <motion.div key={solution.title} variants={itemVariants} className="rounded-2xl border border-yellow-500/20 p-6 space-y-4 bg-slate-950/60">
                <div className="relative w-full h-56 rounded-xl overflow-hidden">
                  <Image src={solution.image} alt={solution.title} width={800} height={520} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-yellow-400 text-xs uppercase tracking-[0.3em]">{solution.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white mt-2">{solution.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  {solution.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-yellow-400">●</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Intelligent Mobility & Tolling</h2>
            <p className="text-gray-400 text-lg">A modular suite covering toll plazas, smart ticketing, and AI-enabled parking.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mobilitySolutions.map((solution) => (
              <motion.div key={solution.title} variants={itemVariants} className="p-6 rounded-2xl border border-blue-500/20 bg-slate-900/60 space-y-4">
                <div className="w-full h-44 rounded-xl overflow-hidden">
                  <Image src={solution.image} alt={solution.title} width={600} height={400} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                <p className="text-gray-300 text-sm">{solution.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {solution.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="text-blue-400">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Program Scale & Delivery</h2>
            <p className="text-gray-400 text-lg">Measured impact across infrastructure roll-outs.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {programMetrics.map((metric) => (
              <motion.div key={metric.label} variants={itemVariants} className="glow-box rounded-2xl p-6 text-center">
                <p className="text-2xl font-bold text-white mb-2">{metric.value}</p>
                <p className="text-xs text-gray-400">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Safe City Pillars</h2>
            <p className="text-gray-400 text-lg">Guidelines underpinning every MTI deployment.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safeCityPillars.map((pillar) => (
              <motion.div key={pillar.title} variants={itemVariants} className="p-6 rounded-2xl border border-blue-500/20 bg-slate-900/60">
                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-gray-300 text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/70">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Field Gallery</h2>
            <p className="text-gray-400 text-lg">Snapshots from MTI Engineering Solutions programs across Egypt.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gallery.map((item) => (
              <motion.div key={item.caption} variants={itemVariants} className="rounded-2xl overflow-hidden border border-blue-500/20">
                <div className="w-full h-72">
                  <Image src={item.src} alt={item.caption} width={900} height={600} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 bg-slate-950/80">
                  <p className="text-sm uppercase text-blue-300 tracking-[0.3em]">{item.location}</p>
                  <h3 className="text-xl font-bold text-white mt-2">{item.caption}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-600/10" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Plan Your Next Deployment with MTI Engineering Solutions</h2>
          <p className="text-gray-300 text-lg mb-6">
            Share your city, airport, or industrial requirement and our engineering teams will design a tailored roadmap with visuals, KPIs, and integration milestones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 font-bold">
              Contact MTI
            </Link>
            <Link href="/projects" className="px-8 py-4 rounded-lg border border-blue-400 text-blue-300">
              View Success Stories
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
