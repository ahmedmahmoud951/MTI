'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const primaryRoutes = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cameras', href: '/cameras' },
    { label: 'Projects', href: '/projects' },
    { label: 'Immersive 3D', href: '/visualization' },
    { label: 'Technology', href: '/technology' },
    { label: 'Digital Twin', href: '/digital-twin' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: '🤖 AI Assistant', href: '/ai' },
    { label: 'Contact', href: '/contact' },
  ]



  const mobileLinks = primaryRoutes

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-blue-500/30 bg-slate-950/80 backdrop-blur-2xl">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-6">
            <div>
              <Link href="/" className="flex items-center gap-3 group" aria-label="MTI Engineering Solutions home">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl" />
                  <Image
                    src="/pdf-assets/mti_page01_img02.jpeg"
                    alt="MTI Engineering Solutions logo"
                    width={80}
                    height={80}
                    className="w-16 h-16 lg:w-20 lg:h-20 object-contain drop-shadow-xl transition-all duration-500 relative z-10 rounded-xl"
                    priority
                  />
                </motion.div>

                <motion.div 
                  className="hidden sm:flex flex-col leading-none gap-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-baseline gap-2 group/text">
                    <motion.span 
                      className="text-xl lg:text-2xl font-black cyber-text tracking-widest"
                      whileHover={{ scale: 1.1, color: '#06b6d4' }}
                      transition={{ duration: 0.3 }}
                    >
                      MTI
                    </motion.span>
                    <motion.span 
                      className="text-xs lg:text-sm uppercase tracking-[0.25em] bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent font-bold"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      ENGINEERING
                    </motion.span>
                  </div>
                  
                  <motion.div
                    className="relative px-2 py-1 rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.span 
                      className="text-xs lg:text-sm uppercase tracking-[0.4em] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-bold relative z-10"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Solutions
                    </motion.span>
                  </motion.div>
                </motion.div>
              </Link>
            </div>

            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="flex flex-wrap justify-between gap-0 px-8 py-3 rounded-full border border-blue-500/30 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-sm shadow-[0_0_50px_rgba(59,130,246,0.2)] w-full">
                {primaryRoutes.map((route, index) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-xs xl:text-sm font-semibold uppercase tracking-[0.3em] text-gray-200 hover:text-white transition-all duration-300 px-4 py-2 hover:bg-blue-500/10 rounded-md ${
                      index < primaryRoutes.length - 1 ? 'border-r border-blue-400/50' : ''
                    }`}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>



            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden rounded-full border border-blue-400/40 p-2 text-blue-300 hover:text-white hover:border-white"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>


        </div>
      </div>

      {isOpen && (
        <div
          className="lg:hidden border-t border-blue-500/20 bg-slate-950/95 px-4 pb-6"
        >
          <div className="grid grid-cols-1 gap-2 pt-4">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-200 hover:text-white hover:bg-blue-500/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
