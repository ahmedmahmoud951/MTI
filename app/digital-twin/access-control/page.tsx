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

  const floatingItems = [
    { delay: 0, x: -150, y: -150, emoji: '🔐', size: 'text-5xl' },
    { delay: 0.3, x: 150, y: -120, emoji: '👤', size: 'text-4xl' },
    { delay: 0.6, x: -120, y: 150, emoji: '🔍', size: 'text-4xl' },
    { delay: 0.9, x: 180, y: 100, emoji: '✅', size: 'text-5xl' },
    { delay: 1.2, x: -180, y: 50, emoji: '🛡️', size: 'text-4xl' },
  ]

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-15"
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"
        />
      </div>

      {/* Floating Animated Icons */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {floatingItems.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${item.size} opacity-10`}
            initial={{ x: 0, y: 0, rotate: 0 }}
            animate={{
              x: [0, item.x, 0],
              y: [0, item.y, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              delay: item.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ top: '20%', left: '10%' }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* Header with Back Button */}
      <section className="relative z-10 pt-16 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link href="/digital-twin" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 hover:gap-3 transition-all duration-300 font-semibold">
              <motion.span
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ←
              </motion.span>
              <span>العودة للمشاريع</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="flex items-start gap-6 mb-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl md:text-7xl flex-shrink-0"
                >
                  🤖
                </motion.div>
                <div>
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-2 leading-tight">
                    منظومة التحكم في
                    <br />
                    <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      دخول الأشخاص
                    </span>
                  </h1>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-2 mb-12"
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-orange-400 animate-pulse" />
                  <p className="text-lg text-gray-300">نظام ذكي متكامل للتحكم والمراقبة</p>
                </div>
                <p className="text-orange-400 font-semibold text-lg ml-6">AI-Powered Access Control System</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="prose prose-invert max-w-none mb-8"
              >
                <p className="text-gray-300 text-lg leading-relaxed">
                  تقنية متقدمة تجمع بين الذكاء الاصطناعي والأمان السيبراني لتوفير حل شامل لإدارة النفاذ. النظام يعمل على مدار الساعة مع دقة عالية وموثوقية مضمونة.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { label: 'دقة التعرف', value: '99.8%', icon: '🎯' },
                { label: 'نقاط الدخول', value: '500+', icon: '🚪' },
                { label: 'توفر النظام', value: '99.95%', icon: '⚡' },
                { label: 'المستخدمين اليوميين', value: '10,000+', icon: '👥' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.08 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative p-5 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-2xl border border-white/10 group-hover:border-orange-500/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{stat.icon}</span>
                      <span className="text-3xl font-black text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Player Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-12 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white">عرض توضيحي</h2>
                <p className="text-gray-400 text-lg mt-2">اكتشف كيفية عمل النظام في بيئة واقعية</p>
              </div>
            </div>
          </motion.div>

          {/* Video Container with Premium Design */}
          <div className="relative group">
            {/* Glowing background */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-red-500/40 via-orange-500/30 to-yellow-500/10 rounded-4xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            {/* Main video card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-b from-black via-slate-900 to-black rounded-4xl overflow-hidden border border-orange-500/20 group-hover:border-orange-500/50 shadow-2xl transition-all duration-500"
            >
              {/* Video wrapper */}
              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  key={`video-${currentVideoIndex}`}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                >
                  <source src={videos[currentVideoIndex]?.videoUrl} type="video/mp4" />
                </video>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Video info bar */}
              <div className="px-6 py-4 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                    </span>
                    <span className="text-sm font-semibold text-gray-300">الفيديو {currentVideoIndex + 1} من 23</span>
                  </div>
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {Math.round(((currentVideoIndex + 1) / 23) * 100)}% مكتمل
                </div>
              </div>

              {/* Progress indicator */}
              <motion.div
                animate={{ width: `${((currentVideoIndex + 1) / 23) * 100}%` }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Project Details Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1.5 w-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-black text-white">مميزات النظام</h2>
              <div className="h-1.5 w-16 bg-gradient-to-l from-red-500 to-orange-500 rounded-full" />
            </div>
            <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto">
              تقنيات متقدمة وحلول ذكية مصممة لتوفير أفضل أداء وأمان في إدارة النفاذ والمراقبة
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { title: 'التعرف على الوجوه', desc: 'تقنية AI متقدمة بدقة 99.8%', icon: '🔍', color: 'from-blue-500' },
            { title: 'التحكم الذكي', desc: 'إدارة الصلاحيات بشكل آلي وفوري', icon: '⚙️', color: 'from-purple-500' },
            { title: 'المراقبة الفورية', desc: 'تتبع دخول وخروج الأشخاص بالوقت الفعلي', icon: '📊', color: 'from-cyan-500' },
            { title: 'التقارير الشاملة', desc: 'تحليل مفصل للعمليات والإحصائيات', icon: '📋', color: 'from-green-500' },
            { title: 'الأمان العالي', desc: 'حماية متقدمة لبيانات الوصول', icon: '🔒', color: 'from-red-500' },
            { title: 'التكامل السلس', desc: 'يعمل مع جميع الأنظمة الموجودة', icon: '🔗', color: 'from-yellow-500' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} to-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700`} />
              <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 group-hover:border-orange-500/60 transition-all duration-300 h-full shadow-lg group-hover:shadow-2xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-full blur-2xl" />
                <motion.div
                  animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.2 }}
                  className="text-7xl mb-6 inline-block"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-black text-white mb-3 leading-tight">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{feature.desc}</p>
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="flex items-center gap-2 text-orange-400 font-semibold text-sm"
                >
                  <span>←</span>
                  <span>اكتشف المزيد</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">أرقام تتحدث</h2>
          <p className="text-gray-400 text-lg">شاهد نتائج النظام المؤثرة</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { number: '500+', label: 'نقطة دخول', icon: '🚪', color: 'from-red-500' },
            { number: '10,000+', label: 'مستخدم يومي', icon: '👥', color: 'from-blue-500' },
            { number: '99.95%', label: 'توفر النظام', icon: '⚡', color: 'from-green-500' },
            { number: '99.8%', label: 'دقة التعرف', icon: '🎯', color: 'from-purple-500' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} to-orange-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500`} />
              <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-orange-500/50 transition-all duration-300 text-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl mb-4"
                >
                  {stat.icon}
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.p>
                <p className="text-gray-300 font-semibold text-lg">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden"
        >
          <motion.div
            animate={{ 
              x: [0, 30, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-red-600/50 via-orange-600/40 to-yellow-600/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-12 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-20 blur-2xl"
          />
          
          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10 group-hover:border-orange-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500/5 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center relative z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6 text-5xl"
              >
                ✨
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                هل تريد تنفيذ هذا النظام؟
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                احصل على عرض توضيحي مخصص واكتشف كيف يمكن لهذا النظام تحسين الأمان والكفاءة في مؤسستك بشكل ملموس وفعال
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: '0 0 40px rgba(239, 68, 68, 0.6)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group/btn"
                >
                  <motion.div
                    animate={{ x: [0, 500] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white/20 -left-full group-hover/btn:left-full transition-all duration-500"
                  />
                  <span className="relative">احجز استشارة مجانية</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-transparent border-2 border-orange-500/50 hover:border-orange-400 text-orange-300 hover:text-orange-200 font-bold text-lg rounded-xl transition-all duration-300"
                >
                  اطلب عرض توضيحي
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer spacer */}
      <div className="h-24" />
    </div>
  )
}
