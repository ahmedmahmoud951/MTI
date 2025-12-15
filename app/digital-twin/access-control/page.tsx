'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function AccessControlProject() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const videos = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    videoUrl: `/Tab/Tab${i + 1}.mp4`,
  }))

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      const nextIndex = (currentVideoIndex + 1) % videos.length
      setCurrentVideoIndex(nextIndex)
    }

    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [currentVideoIndex, videos.length])

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 min-h-screen">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob opacity-20" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob-delay opacity-20" />
      </div>

      {/* Header with Back Button */}
      <section className="relative z-10 pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <Link href="/digital-twin" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6">
              <span>←</span>
              <span className="font-semibold">العودة للمشاريع</span>
            </Link>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              منظومة التحكم في
              <br />
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                دخول الأشخاص
              </span>
            </h1>
            <p className="text-orange-300 text-lg font-semibold mt-4">AI-Powered Access Control System</p>
          </div>
          <div className="hidden md:block text-8xl">🤖</div>
        </div>
      </section>

      {/* Video Player Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Video Container */}
          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/40 via-orange-500/40 to-yellow-500/40 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-black rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <video
                ref={videoRef}
                key={`video-${currentVideoIndex}`}
                className="w-full h-auto aspect-video"
                controls
                autoPlay
                muted
              >
                <source src={videos[currentVideoIndex]?.videoUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-orange-500/50" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-orange-500/50" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-orange-500/50" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-orange-500/50" />
            </div>
          </div>

          {/* Video Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {[
              { label: 'عدد الأجزاء', value: '23' },
              { label: 'الجزء الحالي', value: `${currentVideoIndex + 1}` },
              { label: 'التقدم', value: `${Math.round(((currentVideoIndex + 1) / 23) * 100)}%` },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center"
              >
                <p className="text-gray-400 text-sm font-semibold mb-2">{stat.label}</p>
                <p className="text-4xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-white font-bold">تقدم المشاهدة</h3>
              <span className="text-orange-400 font-bold">{Math.round(((currentVideoIndex + 1) / 23) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
              <motion.div
                animate={{ width: `${((currentVideoIndex + 1) / 23) * 100}%` }}
                transition={{ duration: 0.8 }}
                className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Project Details Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-20 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">مميزات النظام</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            { title: 'التعرف على الوجوه', desc: 'تقنية AI متقدمة بدقة 99.8%', icon: '🔍' },
            { title: 'التحكم الذكي', desc: 'إدارة الصلاحيات بشكل آلي وفوري', icon: '⚙️' },
            { title: 'المراقبة الفورية', desc: 'تتبع دخول وخروج الأشخاص بالوقت الفعلي', icon: '📊' },
            { title: 'التقارير الشاملة', desc: 'تحليل مفصل للعمليات والإحصائيات', icon: '📋' },
            { title: 'الأمان العالي', desc: 'حماية متقدمة لبيانات الوصول', icon: '🔒' },
            { title: 'التكامل السلس', desc: 'يعمل مع جميع الأنظمة الموجودة', icon: '🔗' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 group-hover:border-orange-500/40 transition-all duration-300">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-20 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '500+', label: 'نقطة دخول' },
            { number: '10,000+', label: 'مستخدم يومي' },
            { number: '99.95%', label: 'توفر النظام' },
            { number: '99.8%', label: 'دقة التعرف' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center"
            >
              <p className="text-3xl font-black text-orange-400 mb-2">{stat.number}</p>
              <p className="text-gray-400 font-semibold">{stat.label}</p>
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
            <h2 className="text-4xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
              هل تريد تنفيذ هذا النظام؟
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              احصل على عرض توضيحي مخصص واكتشف كيف يمكن لهذا النظام تحسين الأمان والكفاءة في مؤسستك
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300"
            >
              احجز استشارة مجانية
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer spacer */}
      <div className="h-20" />
    </div>
  )
}
