'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function BuildingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
      
      <div className="fixed bottom-8 left-8 right-8 flex gap-4 justify-center z-50 pointer-events-auto">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-500/20 border border-blue-400/60 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all"
          >
            Back to Lobby
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
