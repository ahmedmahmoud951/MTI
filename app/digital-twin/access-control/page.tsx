'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function AccessControlProject() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const videos = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    videoUrl: `/Tab/Tab${i + 1}.mp4`,
  }))

  const floatingItems = [
    { delay: 0, x: -100, y: -100, emoji: '🔐', size: 'text-4xl' },
    { delay: 0.2, x: 100, y: -80, emoji: '👤', size: 'text-3xl' },
    { delay: 0.4, x: -80, y: 100, emoji: '🔍', size: 'text-3xl' },
    { delay: 0.6, x: 120, y: 80, emoji: '✅', size: 'text-4xl' },
    { delay: 0.8, x: -120, y: 0, emoji: '🛡️', size: 'text-3xl' },
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
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/digital-twin" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 hover:gap-3 transition-all duration-300 font-semibold text-lg">
              <motion.span
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ←
              </motion.span>
              <span>العودة للمشاريع</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mb-6"
              >
                <span className="inline-block text-6xl md:text-7xl bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 rounded-2xl p-4">🤖</span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                منظومة التحكم في
                <br />
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  دخول الأشخاص
                </span>
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-3 mt-6"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-orange-400 animate-pulse" />
                <p className="text-xl text-gray-300 font-semibold">AI-Powered Access Control System</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:flex flex-col gap-4"
            >
              {[
                { icon: '🔍', text: 'تعرف ذكي على الوجوه' },
                { icon: '✅', text: 'موافقة فورية' },
                { icon: '📊', text: 'تحليل بيانات' },
                { icon: '🛡️', text: 'أمان عالي' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-gray-200 font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Player Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Video Title */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
              <h2 className="text-3xl font-black text-white">عرض توضيحي</h2>
            </div>
            <p className="text-gray-400 text-lg">مشاهدة النظام في العمل مع عروض توضيحية واقعية</p>
          </motion.div>

          {/* Main Video Container */}
          <div className="relative group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-red-500/60 via-orange-500/40 to-yellow-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-black rounded-3xl overflow-hidden border-2 border-orange-500/30 group-hover:border-orange-500/60 shadow-2xl transition-all duration-500"
            >
              <video
                ref={videoRef}
                className="w-full h-auto aspect-video"
                controls
                autoPlay
                muted
              >
                <source src={videos[0]?.videoUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Corner decorations with animation */}
              {[
                'top-4 left-4 border-t-2 border-l-2',
                'top-4 right-4 border-t-2 border-r-2',
                'bottom-4 left-4 border-b-2 border-l-2',
                'bottom-4 right-4 border-b-2 border-r-2',
              ].map((pos, idx) => (
                <motion.div
                  key={idx}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  className={`absolute w-6 h-6 ${pos} border-orange-500/70 group-hover:border-orange-400`}
                />
              ))}

              {/* Play indicator */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-8 right-8 flex items-center gap-2 bg-red-500/80 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                </span>
                <span className="text-white text-sm font-bold">مباشر</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Project Details Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black text-white">مميزات النظام</h2>
            <div className="h-1 w-12 bg-gradient-to-l from-red-500 to-orange-500 rounded-full" />
          </div>
          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto">
            اكتشف قدرات النظام المتقدمة والحلول الذكية المتكاملة
          </p>
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
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} to-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500`} />
              <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-orange-500/50 transition-all duration-300 h-full">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                  className="text-6xl mb-6 inline-block"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-black text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-4 flex items-center gap-2 text-orange-400 font-semibold"
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
