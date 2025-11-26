'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

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

const officeDetails = [
  { icon: '📍', title: 'Headquarters', detail: '1345 Kornish El Nile Street, Cairo, Egypt' },
  { icon: '📞', title: 'Phone', detail: '+20 2 2205 5555 (24/7 reception)' },
  { icon: '📠', title: 'Fax', detail: '+20 2 2225 5545' },
  { icon: '✉️', title: 'Email', detail: 'info@mtiholding.net' },
  { icon: '🌐', title: 'Website', detail: 'www.mtiholding.net' },
]

const supportHighlights = [
  { label: 'First Response', value: '2 hours', note: 'During business hours (Sunday–Thursday)' },
  { label: 'After Hours', value: '24 hours', note: 'Critical escalations and hotline callbacks' },
  { label: 'Coverage', value: '6+ countries', note: 'Regional networks across MENA' },
  { label: 'Retail Partners', value: '3,000+', note: 'Directly connected distribution points' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! The MTI corporate office will contact you shortly.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <div className="w-full bg-slate-950 text-white">
      <section className="pt-28 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-blue-300 uppercase tracking-[0.4em] text-xs">
            Official Contact · MTI Group
          </motion.p>
          <motion.h1 initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold cyber-text">
            Let’s Plan Your Next Deployment
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-lg text-gray-300 max-w-3xl mx-auto">
            Reach the MTI headquarters in Cairo for national programs, regional partnerships, or support requests. Official details are sourced directly from the MTI Group Corporate Profile (15 Sep 2025).
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={itemVariants} className="glow-box rounded-2xl p-6 backdrop-blur-sm border border-blue-500/20">
              <div className="w-full h-64 rounded-xl overflow-hidden mb-6">
                <Image src="/pdf-assets/mti_page01_img01.jpeg" alt="MTI Cairo Headquarters" width={900} height={600} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Corporate Office</h2>
              <ul className="space-y-3 text-gray-300 text-sm">
                {officeDetails.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="text-blue-400 text-xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p>{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-2xl border border-blue-500/20 p-6 bg-slate-900/60">
              <h3 className="text-xl font-bold text-white mb-4">Service-Level Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {supportHighlights.map((stat) => (
                  <div key={stat.label} className="glow-box p-4 rounded-xl text-center">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs uppercase tracking-wide text-blue-300">{stat.label}</p>
                    <p className="text-[12px] text-gray-400 mt-2">{stat.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glow-box p-8 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
            <p className="text-gray-400 text-sm mb-6">
              Share your brief and the MTI team will respond via the official contact center in Cairo.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/60 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/60 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Company / Entity</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/60 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none"
                  placeholder="Ministry, enterprise, or partner"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/60 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none resize-none"
                  placeholder="Share your project scope, location, and desired timeline"
                />
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-slate-900/70 border-t border-blue-500/10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
              title: 'General Inquiries',
              content: 'For government tenders, smart-city programs, and strategic partnerships, email info@mtiholding.net or call +20 2 2205 5555.'
            },
            {
              title: 'After-Sales & Support',
              content: 'Existing customers can reference their project code when calling the hotline for priority routing and remote diagnostics.'
            }].map((card) => (
              <motion.div key={card.title} variants={itemVariants} className="p-6 rounded-2xl border border-blue-500/20 bg-slate-950/60">
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-sm text-gray-300">{card.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
