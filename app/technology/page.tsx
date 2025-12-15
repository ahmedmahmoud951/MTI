'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAnimationConfig } from '@/lib/animationConfig'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Technology() {
  const [mounted, setMounted] = useState(false)
  const animConfig = useAnimationConfig()

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center space-y-6 md:space-y-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.p 
              animate={mounted && animConfig.enabled ? { opacity: [1, 0.7, 1] } : { opacity: 1 }}
              transition={{ duration: 4, repeat: animConfig.enabled ? Infinity : 0 }}
              className="text-cyan-400 uppercase tracking-[0.4em] text-xs sm:text-sm font-bold mb-3 md:mb-4"
            >
              ✨ Advanced Security Solutions ✨
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-4 md:mb-6"
            >
              <div className="w-8 md:w-12 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black cyber-text leading-tight">
                Our Technology
              </h1>
              <div className="w-8 md:w-12 h-1 bg-gradient-to-l from-cyan-500 to-transparent rounded-full" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-bold"
            >
              Cutting-Edge AI-Powered Solutions
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our next-generation technology platform engineered to deliver intelligent, scalable security solutions for modern enterprises. Powered by advanced AI and edge computing technology.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          >
            <motion.div
              variants={itemVariants}
              className="w-full"
            >
              <Link href="/digital-twin/i-pro-active-guard">
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative h-full"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl" />

                  <motion.div
                    animate={mounted && animConfig.enabled ? { 
                      boxShadow: [
                        '0 0 20px rgba(6, 182, 212, 0.3)',
                        '0 0 40px rgba(6, 182, 212, 0.5)',
                        '0 0 20px rgba(6, 182, 212, 0.3)'
                      ]
                    } : {}}
                    transition={{ duration: animConfig.boxShadowDuration, repeat: animConfig.enabled ? Infinity : 0 }}
                    className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-cyan-500/30 hover:border-cyan-400/80 backdrop-blur-xl overflow-hidden cursor-pointer shadow-2xl h-full flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />

                    <div className="relative z-10 space-y-6 flex flex-col h-full">
                      <motion.div
                        animate={mounted && animConfig.enabled ? { 
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ duration: animConfig.rotateDuration, repeat: animConfig.enabled ? Infinity : 0, ease: "easeInOut" }}
                        className="flex justify-center"
                      >
                        <motion.div
                          animate={mounted && animConfig.enabled ? { scale: [1, 1.15, 1] } : {}}
                          transition={{ duration: animConfig.pulseDuration + 0.5, repeat: animConfig.enabled ? Infinity : 0 }}
                          className="text-5xl sm:text-6xl md:text-7xl inline-block"
                        >
                          🔐
                        </motion.div>
                      </motion.div>

                      <div className="space-y-2 md:space-y-4 text-center">
                        <motion.h2 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="text-2xl sm:text-3xl md:text-4xl font-black cyber-text"
                        >
                          i-PRO Active Guard
                        </motion.h2>
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="text-sm sm:text-base md:text-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold"
                        >
                          AI Video Intelligence
                        </motion.p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-4 flex-grow flex flex-col justify-between"
                      >
                        <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                          Advanced AI analytics for real-time threat detection and intelligent video search.
                        </p>

                        <motion.div
                          className="w-full flex justify-center"
                        >
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative group/btn"
                          >
                            <motion.div
                              animate={mounted && animConfig.enabled ? { 
                                boxShadow: [
                                  '0 0 15px rgba(6, 182, 212, 0.4), inset 0 0 15px rgba(6, 182, 212, 0.2)',
                                  '0 0 35px rgba(6, 182, 212, 0.8), inset 0 0 20px rgba(6, 182, 212, 0.4)',
                                  '0 0 15px rgba(6, 182, 212, 0.4), inset 0 0 15px rgba(6, 182, 212, 0.2)'
                                ]
                              } : {}}
                              transition={{ duration: animConfig.boxShadowDuration, repeat: animConfig.enabled ? Infinity : 0 }}
                              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center text-2xl sm:text-3xl font-black shadow-2xl overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 -skew-x-12" />
                              
                              <motion.div
                                animate={mounted && animConfig.enabled ? { rotate: 360 } : {}}
                                transition={{ duration: animConfig.rotateDuration, repeat: animConfig.enabled ? Infinity : 0, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-300 border-r-blue-300"
                              />

                              <motion.span
                                animate={mounted && animConfig.enabled ? { 
                                  y: [0, -3, 0],
                                  opacity: [1, 0.8, 1]
                                } : {}}
                                transition={{ duration: animConfig.pulseDuration - 0.5, repeat: animConfig.enabled ? Infinity : 0 }}
                                className="relative z-10"
                              >
                                ✨
                              </motion.span>
                            </motion.div>

                            <motion.div
                              animate={mounted && animConfig.enabled ? { 
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.5, 0.5]
                              } : {}}
                              transition={{ duration: animConfig.pulseDuration, repeat: animConfig.enabled ? Infinity : 0, delay: 0.5 }}
                              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 blur-lg opacity-60"
                            />
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="flex justify-center gap-1 pt-2"
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={mounted && animConfig.enabled ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: animConfig.pulseDuration, repeat: animConfig.enabled ? Infinity : 0, delay: i * 0.15 }}
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full"
            >
              <Link href="/digital-twin/access-control">
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative h-full"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-600 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl" />

                  <motion.div
                    animate={mounted && animConfig.enabled ? { 
                      boxShadow: [
                        '0 0 20px rgba(239, 68, 68, 0.3)',
                        '0 0 40px rgba(239, 68, 68, 0.5)',
                        '0 0 20px rgba(239, 68, 68, 0.3)'
                      ]
                    } : {}}
                    transition={{ duration: animConfig.boxShadowDuration, repeat: animConfig.enabled ? Infinity : 0 }}
                    className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-red-500/30 hover:border-red-400/80 backdrop-blur-xl overflow-hidden cursor-pointer shadow-2xl h-full flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500" />

                    <div className="relative z-10 space-y-6 flex flex-col h-full">
                      <motion.div
                        animate={mounted && animConfig.enabled ? { 
                          y: [0, -12, 0],
                          rotate: [0, -8, 8, 0]
                        } : {}}
                        transition={{ duration: animConfig.rotateDuration, repeat: animConfig.enabled ? Infinity : 0, ease: "easeInOut" }}
                        className="flex justify-center"
                      >
                        <motion.div
                          className="relative"
                        >
                          <motion.div
                            animate={mounted && animConfig.enabled ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: animConfig.pulseDuration + 0.5, repeat: animConfig.enabled ? Infinity : 0 }}
                            className="text-5xl sm:text-6xl md:text-7xl inline-block"
                          >
                            👥
                          </motion.div>
                          <motion.div
                            animate={mounted && animConfig.enabled ? { 
                              x: [0, 4, 0],
                              y: [0, -4, 0]
                            } : {}}
                            transition={{ duration: animConfig.pulseDuration, repeat: animConfig.enabled ? Infinity : 0, delay: 0.2 }}
                            className="absolute -bottom-2 -right-2 text-2xl sm:text-3xl"
                          >
                            🔐
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      <div className="space-y-2 md:space-y-4 text-center">
                        <motion.h2 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black cyber-text leading-tight"
                        >
                          Integrated Visitor Management & Biometric Security Platform
                        </motion.h2>
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="text-xs sm:text-sm md:text-base bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent font-bold"
                        >
                          Smart Access & Visitor Control System
                        </motion.p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-4 flex-grow flex flex-col justify-between"
                      >
                        <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                          Comprehensive visitor management with advanced facial recognition, biometric authentication, and intelligent access control for secure facility management.
                        </p>

                        <motion.div
                          className="w-full flex justify-center"
                        >
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative group/btn"
                          >
                            <motion.div
                              animate={mounted && animConfig.enabled ? { 
                                boxShadow: [
                                  '0 0 15px rgba(239, 68, 68, 0.4), inset 0 0 15px rgba(239, 68, 68, 0.2)',
                                  '0 0 35px rgba(239, 68, 68, 0.8), inset 0 0 20px rgba(239, 68, 68, 0.4)',
                                  '0 0 15px rgba(239, 68, 68, 0.4), inset 0 0 15px rgba(239, 68, 68, 0.2)'
                                ]
                              } : {}}
                              transition={{ duration: animConfig.boxShadowDuration, repeat: animConfig.enabled ? Infinity : 0 }}
                              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 flex items-center justify-center text-2xl sm:text-3xl font-black shadow-2xl overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 -skew-x-12" />
                              
                              <motion.div
                                animate={mounted && animConfig.enabled ? { rotate: 360 } : {}}
                                transition={{ duration: animConfig.rotateDuration, repeat: animConfig.enabled ? Infinity : 0, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-transparent border-t-red-300 border-r-orange-300"
                              />

                              <motion.span
                                animate={mounted && animConfig.enabled ? { 
                                  y: [0, -3, 0],
                                  opacity: [1, 0.8, 1]
                                } : {}}
                                transition={{ duration: animConfig.pulseDuration - 0.5, repeat: animConfig.enabled ? Infinity : 0 }}
                                className="relative z-10"
                              >
                                ⚡
                              </motion.span>
                            </motion.div>

                            <motion.div
                              animate={mounted && animConfig.enabled ? { 
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.5, 0.5]
                              } : {}}
                              transition={{ duration: animConfig.pulseDuration, repeat: animConfig.enabled ? Infinity : 0, delay: 0.5 }}
                              className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-yellow-400 blur-lg opacity-60"
                            />
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="flex justify-center gap-1 pt-2"
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={mounted && animConfig.enabled ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: animConfig.pulseDuration, repeat: animConfig.enabled ? Infinity : 0, delay: i * 0.15 }}
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-orange-400"
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

        <div className="max-w-4xl mx-auto px-3 sm:px-4 relative z-10 text-center space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black cyber-text mb-4">
              Why Choose i-PRO Active Guard?
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {[
              { icon: '⚡', title: 'Edge Intelligence', desc: 'Zero-latency threat detection at the camera level' },
              { icon: '🔐', title: 'Privacy First', desc: 'Secure edge devices with no centralized storage' },
              { icon: '🚀', title: 'Scalable', desc: 'Deploy across 1 to 1,000 locations seamlessly' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 space-y-3">
                  <div className="text-3xl sm:text-4xl inline-block p-2 sm:p-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
