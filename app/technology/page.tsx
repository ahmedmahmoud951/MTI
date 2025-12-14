'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const activeGuardFeatures = [
  {
    id: 1,
    title: 'Intelligent Text Search',
    subtitle: 'Generative AI-Powered Discovery',
    description: 'Revolutionary free-text search powered by Generative AI empowers security teams to flexibly filter recorded footage within video management systems (VMS) using natural language input for precise people and vehicle searches. Transform hours of investigation into seconds.',
    image: '/Active Guard/182661.webp',
    accent: 'from-blue-500 to-cyan-400',
    borderColor: 'border-blue-500/40',
  },
  {
    id: 2,
    title: 'Visual Similarity Engine',
    subtitle: 'Smart Person Matching',
    description: 'Advanced image similarity search enables operators to locate visually similar appearances within video footage, supporting rapid investigations without relying on personal attributes. Find suspects by appearance alone, not by profile.',
    image: '/Active Guard/182666.webp',
    accent: 'from-purple-500 to-pink-400',
    borderColor: 'border-purple-500/40',
  },
  {
    id: 3,
    title: 'Advanced Person Detection',
    subtitle: 'Multi-Attribute Classification',
    description: 'Sophisticated AI extracts and classifies facial characteristics and clothing into rich categories including gender, age, color, and accessories. Process up to 20 people simultaneously with precision detection starting at 60px width. Optimized for 50+ lux illumination.',
    image: '/Active Guard/AI People Detectionimage.jpg',
    accent: 'from-emerald-500 to-teal-400',
    borderColor: 'border-emerald-500/40',
  },
  {
    id: 4,
    title: 'Intelligent Motion Analytics',
    subtitle: 'AI-Driven Video Intelligence',
    description: 'AI-VMD (Artificial Intelligence Video Motion Detection) delivers enterprise-grade threat detection: intruder identification, cross-line detection, loitering alerts, direction tracking, speeding identification, and real-time people counting. Threats detected instantly at the edge.',
    image: '/Active Guard/AI-VMD.webp',
    accent: 'from-orange-500 to-red-400',
    borderColor: 'border-orange-500/40',
  },
  {
    id: 5,
    title: 'Enterprise Architecture',
    subtitle: 'Distributed Intelligence System',
    description: 'i-PRO Active Guard stores the finest images and rich metadata captured by edge AI cameras, correlating with watchlists registered in client software to issue intelligent alarms when matches are found. Runs on modest hardware—no expensive servers required. Deploy anywhere.',
    image: '/Active Guard/system-configuration-diagram.webp',
    accent: 'from-indigo-500 to-blue-400',
    borderColor: 'border-indigo-500/40',
  },
]

export default function Technology() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videos = [
    '/Active Guard/ActiveGuard 1.mp4',
    '/Active Guard/ActiveGuard 2.mp4',
    '/Active Guard/ActiveGuard 3.mp4',
    '/Active Guard/ActiveGuard 4.mp4',
    '/Active Guard/ActiveGuard 5.mp4',
    '/Active Guard/ActiveGuard 6.mp4',
  ]

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      if (currentVideoIndex < videos.length - 1) {
        setCurrentVideoIndex(currentVideoIndex + 1)
      }
    }

    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [currentVideoIndex, videos.length])

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center space-y-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.p 
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-cyan-400 uppercase tracking-[0.5em] text-xs font-bold mb-4"
            >
              Next-Generation Security Intelligence
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-black cyber-text leading-tight mb-4">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                i-PRO
              </motion.span>
              {' '}
              <motion.span 
                initial={{ opacity: 0, color: '#7dd3fc' }}
                animate={{ opacity: 1, color: ['#7dd3fc', '#a78bfa', '#7dd3fc'] }}
                transition={{ duration: 2, delay: 0.4, repeat: Infinity }}
                className="inline-block"
              >
                Active Guard
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">
              AI-Powered Video Intelligence Platform
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your security infrastructure with cutting-edge AI analytics that detect threats in real-time, enable intelligent searches across massive video archives, and deliver actionable intelligence—all powered by edge computing for unmatched privacy and performance.
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 font-bold text-white shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Request Demo & Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black cyber-text mb-4">See It In Action</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experience the power of i-PRO Active Guard with cutting-edge AI video intelligence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-lg pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-black/20" />
            
            <video
              key={currentVideoIndex}
              ref={videoRef}
              className="w-full h-auto aspect-video bg-black object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ clipPath: 'inset(40px 0 0 0)' }}
              controls
              autoPlay
              muted
              playsInline
            >
              <source src={videos[currentVideoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-8 w-full text-white">
                  <h3 className="text-2xl font-bold mb-2">i-PRO Active Guard Platform</h3>
                  <p className="text-gray-200">Advanced AI-powered video intelligence for intelligent security</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black cyber-text mb-4"
            >
              Breakthrough Capabilities
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {activeGuardFeatures.map((feature, index) => (
              <motion.div key={feature.id} variants={itemVariants} className="group">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  {index % 2 === 0 ? (
                    <>
                      <div className="relative">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                          className={`relative rounded-2xl overflow-hidden ${feature.borderColor} border-2 shadow-2xl`}
                        >
                          <div className={`absolute -inset-1 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl pointer-events-none`} />
                          <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500`} />
                        </motion.div>
                      </div>

                      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="space-y-6">
                        <div>
                          <p className={`text-sm font-bold uppercase tracking-[0.4em] mb-2 bg-gradient-to-r ${feature.accent} bg-clip-text text-transparent`}>
                            {feature.subtitle}
                          </p>
                          <h3 className="text-4xl font-black text-white mb-4">{feature.title}</h3>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                        <div className={`w-12 h-1 bg-gradient-to-r ${feature.accent} rounded-full`} />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="space-y-6">
                        <div>
                          <p className={`text-sm font-bold uppercase tracking-[0.4em] mb-2 bg-gradient-to-r ${feature.accent} bg-clip-text text-transparent`}>
                            {feature.subtitle}
                          </p>
                          <h3 className="text-4xl font-black text-white mb-4">{feature.title}</h3>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                        <div className={`w-12 h-1 bg-gradient-to-r ${feature.accent} rounded-full`} />
                      </motion.div>

                      <div className="relative">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                          className={`relative rounded-2xl overflow-hidden ${feature.borderColor} border-2 shadow-2xl`}
                        >
                          <div className={`absolute -inset-1 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl pointer-events-none`} />
                          <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500`} />
                        </motion.div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black cyber-text mb-4">Why Choose Active Guard?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Enterprise-grade AI security that scales from single sites to nationwide deployments
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: '⚡', title: 'Edge Intelligence', desc: 'Processing happens at the camera level for zero-latency threat detection', color: 'from-blue-500/20 to-cyan-500/20' },
              { icon: '🔐', title: 'Privacy First', desc: 'No centralized storage required—metadata stays on secure edge devices', color: 'from-purple-500/20 to-pink-500/20' },
              { icon: '🚀', title: 'Scalable Infrastructure', desc: 'Runs on standard hardware; deploy across 1 or 1,000 locations seamlessly', color: 'from-green-500/20 to-emerald-500/20' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-6xl mb-4 inline-block p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black cyber-text"
          >
            Ready to Transform Your Security?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg"
          >
            Discover how i-PRO Active Guard delivers intelligent video analytics, forensic search capabilities, and actionable threat intelligence across your entire security infrastructure.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.div whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)' }} transition={{ duration: 0.3 }}>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Schedule Your Demo
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.8)' }} transition={{ duration: 0.3 }}>
              <Link
                href="/services"
                className="inline-block px-10 py-4 rounded-xl border-2 border-blue-400 text-blue-300 font-bold hover:bg-blue-500/10 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
