'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef, useMemo } from 'react'

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

export default function TicketingSystem() {
  const [mounted, setMounted] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const nextVideoRef = useRef<HTMLVideoElement>(null)
  
  const videos = useMemo(() => [
    '/anfaq-final/anfaq-final 1.mp4',
    '/anfaq-final/anfaq-final 2.mp4',
    '/anfaq-final/anfaq-final 3.mp4',
    '/anfaq-final/anfaq-final 4.mp4',
  ], [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      setVideoReady(false)
    }
  }, [currentVideoIndex])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      if (currentVideoIndex < videos.length - 1) {
        setCurrentVideoIndex(currentVideoIndex + 1)
      } else {
        setCurrentVideoIndex(0)
      }
    }

    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [currentVideoIndex, videos.length])

  useEffect(() => {
    if (nextVideoRef.current && videos.length > 0) {
      const nextIndex = (currentVideoIndex + 1) % videos.length
      const nextVideo = videos[nextIndex]
      if (nextVideo) {
        nextVideoRef.current.src = nextVideo
        nextVideoRef.current.load()
      }
    }
  }, [currentVideoIndex, videos])

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center space-y-6 md:space-y-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.p 
              animate={mounted ? { opacity: [1, 0.7, 1] } : { opacity: 1 }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-yellow-400 uppercase tracking-[0.4em] text-xs sm:text-sm font-bold mb-3 md:mb-4"
            >
              ✨ Intelligent Toll Collection System ✨
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-4 md:mb-6"
            >
              <div className="w-8 md:w-12 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full" />
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black cyber-text leading-tight">
                Ticketing System
              </h1>
              <div className="w-8 md:w-12 h-1 bg-gradient-to-l from-yellow-500 to-transparent rounded-full" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 bg-clip-text text-transparent font-bold"
            >
              Automated Toll Collection & Revenue Management
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Advanced electronic toll collection system for seamless fee collection from vehicles passing through toll facilities. Real-time processing with automatic vehicle identification and secure transaction handling.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-3 sm:px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-600 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl" />
              
              <motion.div
                className="relative w-full rounded-3xl bg-black border border-yellow-500/30 overflow-hidden shadow-2xl"
              >
                {!videoReady && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 border-4 border-yellow-500/20 border-t-yellow-500 rounded-full"
                    />
                  </div>
                )}
                <video
                  ref={videoRef}
                  src={videos[currentVideoIndex]}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-auto"
                  onCanPlayThrough={() => {
                    setVideoReady(true)
                    if (videoRef.current) {
                      videoRef.current.play().catch(() => {})
                    }
                  }}
                />
                <video
                  ref={nextVideoRef}
                  style={{ display: 'none' }}
                  preload="metadata"
                />
                
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {videos.map((_, index) => (
                    <motion.div
                      key={index}
                      animate={currentVideoIndex === index ? { scale: 1.2 } : { scale: 1 }}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        currentVideoIndex === index 
                          ? 'bg-yellow-500' 
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-yellow-500/30 hover:border-yellow-400/80 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="text-5xl inline-block p-3 rounded-lg bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-all duration-300">
                  🛣️
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                  Seamless Collection
                </h3>
                <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  Automatic toll collection without stopping. Fast-track processing using RFID and LPR technology for smooth traffic flow and reduced congestion.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-yellow-500/30 hover:border-yellow-400/80 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="text-5xl inline-block p-3 rounded-lg bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-all duration-300">
                  💰
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                  Revenue Optimization
                </h3>
                <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  Maximize revenue collection with automated billing and transparent transaction records. Real-time financial reporting and analytics dashboard.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-yellow-500/30 hover:border-yellow-400/80 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="text-5xl inline-block p-3 rounded-lg bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-all duration-300">
                  🔍
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                  Intelligent Verification
                </h3>
                <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  Advanced vehicle identification and fraud detection. Multi-layer verification using license plate recognition and vehicle classification technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-yellow-500/30 hover:border-yellow-400/80 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="text-5xl inline-block p-3 rounded-lg bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-all duration-300">
                  📊
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                  Comprehensive Analytics
                </h3>
                <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  Detailed traffic analysis and reporting. Monitor vehicle patterns, peak hours, and revenue metrics to optimize toll operations.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 text-center"
          >
            <Link href="/technology">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Back to Technology
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
