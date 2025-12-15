'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DigitalTwin() {
  const projects = [
    {
      id: 'access-control',
      title: 'منظومة التحكم في دخول الأشخاص عن طريق الذكاء الصناعي',
      titleEn: 'AI-Powered Access Control System',
      description: 'نظام متكامل للتحكم والمراقبة الذكية مع تقنيات التعرف على الوجوه',
      icon: '🔐',
      color: 'from-red-500 to-orange-600',
      accentColor: 'red',
      videos: 23,
      image: '🤖',
    },
    {
      id: 'smart-surveillance',
      title: 'نظام المراقبة الذكية',
      titleEn: 'Smart Surveillance System',
      description: 'تقنيات مراقبة متقدمة مع تحليل فيديو AI',
      icon: '📹',
      color: 'from-blue-500 to-cyan-600',
      accentColor: 'blue',
      videos: 0,
      image: '📹',
    },
    {
      id: 'resource-management',
      title: 'إدارة الموارد الذكية',
      titleEn: 'Smart Resource Management',
      description: 'إدارة فعالة للموارد مع تحليلات فورية',
      icon: '📊',
      color: 'from-purple-500 to-pink-600',
      accentColor: 'purple',
      videos: 0,
      image: '📊',
    },
    {
      id: 'data-analytics',
      title: 'تحليل البيانات المتقدم',
      titleEn: 'Advanced Data Analytics',
      description: 'رؤى عميقة ودقيقة لعملياتك التجارية',
      icon: '📈',
      color: 'from-green-500 to-emerald-600',
      accentColor: 'green',
      videos: 0,
      image: '📈',
    },
    {
      id: 'cybersecurity',
      title: 'الأمن السيبراني المتقدم',
      titleEn: 'Advanced Cybersecurity',
      description: 'حماية كاملة لأنظمتك من التهديدات السيبرانية',
      icon: '🔒',
      color: 'from-yellow-500 to-orange-600',
      accentColor: 'yellow',
      videos: 0,
      image: '🔒',
    },
    {
      id: 'alerts',
      title: 'نظام التنبيهات الفورية',
      titleEn: 'Real-time Alerts System',
      description: 'تنبيهات فورية وذكية للأحداث الحرجة',
      icon: '🔔',
      color: 'from-rose-500 to-red-600',
      accentColor: 'rose',
      videos: 0,
      image: '🔔',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob opacity-20" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob-delay opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-10" />
      </div>

      {/* Header Section */}
      <section className="relative z-10 pt-32 pb-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              حلول رقمية
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-2">Digital Twin Solutions</p>
          <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg mt-8 max-w-2xl mx-auto"
        >
          منصة متكاملة للحلول الذكية والعمليات الرقمية المتقدمة
        </motion.p>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <Link href={`/digital-twin/${project.id}`}>
                <div className="relative h-full cursor-pointer">
                  {/* Glowing background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/30 transition-all duration-300 h-full flex flex-col overflow-hidden">
                    {/* Number badge */}
                    <div className="absolute top-6 right-6 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Icon */}
                    <div className="text-6xl mb-6 group-group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-yellow-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-sm text-orange-300 font-semibold mb-4">
                      {project.titleEn}
                    </p>

                    <p className="text-gray-400 text-sm flex-grow leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Divider */}
                    <div className="h-0.5 w-12 bg-gradient-to-r from-white/50 to-transparent rounded-full mb-4" />

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                        اكتشف المزيد
                      </span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-orange-400 text-xl"
                      >
                        →
                      </motion.div>
                    </div>

                    {/* Video count badge */}
                    {project.videos > 0 && (
                      <div className="absolute bottom-6 left-6 bg-gradient-to-r from-red-500/30 to-orange-500/30 backdrop-blur-md border border-red-400/50 rounded-lg px-3 py-1 text-sm font-semibold text-red-300">
                        {project.videos} فيديو
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-orange-600/40 to-yellow-600/40 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10 group-hover:border-orange-500/40 transition-all duration-300 text-center">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
              جاهز لتحويل عملك؟
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واكتشف كيف يمكن حلولنا الرقمية تحسين كفاءة عمليتك
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300"
            >
              احصل على استشارة مجانية
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer spacer */}
      <div className="h-20" />
    </div>
  )
}
