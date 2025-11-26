'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Floor2() {
  const router = useRouter()

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen pb-20 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center pt-20 mb-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold cyber-text mb-3">
          Innovation Center
        </h1>
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-xl text-blue-400 font-semibold">Floor 2</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400">Digital Twin & Advanced Solutions</span>
        </div>
      </motion.div>

      {/* Main Image - Full Width Large */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full px-4 mb-16"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/50 to-blue-400/50 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur" />
          <Image
            src="/50144.jpg"
            alt="Innovation Center Floor 2"
            width={1920}
            height={1080}
            className="relative w-full h-96 md:h-screen max-h-screen rounded-2xl shadow-2xl drop-shadow-2xl object-cover border border-blue-400/30"
            priority
          />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glow-box p-10 rounded-xl mb-12 border border-blue-400/40"
        >
          <h2 className="text-4xl font-bold cyber-text mb-6">Welcome to Our Innovation Center</h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            This is where tomorrow&rsquo;s solutions are created today. Our Innovation Center features advanced technology platforms, collaborative spaces, and creative environments designed to foster breakthrough ideas and accelerate development cycles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-lg border border-blue-400/50 cursor-pointer group overflow-hidden"
            >
              <p className="text-2xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">🌐</p>
              <p className="text-blue-300 font-bold mb-2 text-lg">Digital Twin Technology</p>
              <p className="text-gray-400">Virtual replica systems and simulations</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-lg border border-blue-400/50 cursor-pointer group overflow-hidden"
            >
              <p className="text-2xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">💡</p>
              <p className="text-blue-300 font-bold mb-2 text-lg">Creative Spaces</p>
              <p className="text-gray-400">Inspiring environments for innovation</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-lg border border-blue-400/50 cursor-pointer group overflow-hidden"
            >
              <p className="text-2xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">🚀</p>
              <p className="text-blue-300 font-bold mb-2 text-lg">Next Gen Solutions</p>
              <p className="text-gray-400">Cutting-edge product development</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-lg border border-blue-400/50 cursor-pointer group overflow-hidden"
            >
              <p className="text-2xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">🎯</p>
              <p className="text-blue-300 font-bold mb-2 text-lg">Future Ready</p>
              <p className="text-gray-400">Preparing for tomorrow&rsquo;s challenges</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-8"
        >
          <p className="text-blue-300 mb-8 font-semibold text-lg">Explore other areas:</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/building/floor-1">
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button px-8 py-3 text-blue-400 rounded-lg font-semibold border border-blue-400/50"
              >
                ← Floor 1
              </motion.button>
            </Link>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/70 transition-all font-semibold border border-blue-400/50"
              >
                Back to Building
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
