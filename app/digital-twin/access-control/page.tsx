'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function AccessControlProject() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleVideoEnd = () => {
      if (currentVideoIndex < 30) {
        setCurrentVideoIndex(currentVideoIndex + 1)
      }
    }

    const video = videoRef.current
    if (video) {
      video.addEventListener('ended', handleVideoEnd)
      return () => video.removeEventListener('ended', handleVideoEnd)
    }
  }, [currentVideoIndex])

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
                  <h1 className="text-4xl md:text-6xl font-black text-white mb-2 leading-tight">
                    <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      Integrated Visitor Management
                    </span>
                    <br />
                    &amp; Biometric Security Platform
                  </h1>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3 mb-12"
              >
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-orange-400 animate-pulse mt-2 flex-shrink-0" />
                  <p className="text-lg text-gray-300">نظام أمني شامل يدمج التصديق، التتبع، التعرف البيومتري، والوصول الآمن لبيئة محكمة ومُراقبة</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-orange-400 mb-3">نظرة عامة على النظام</h3>
                  <div className="space-y-3 text-gray-300 text-base leading-relaxed">
                    <p><strong>الهدف:</strong> إدارة آمنة وفعالة للزوار (مدنيين، عسكريين، أجانب) والقوة الأساسية (الموظفين/العسكريين)، مع تكامل بيومتري للهويات (بصمات، وجوه).</p>
                    <p><strong>الفوائد:</strong> أمان عالٍ، تتبع فوري، تقارير احترافية، تحديث تلقائي للبيانات.</p>
                    <p><strong>المكونات الرئيسية:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>تطبيقات سطح المكتب/الموبايل للإدارة والتتبع</li>
                      <li>خوادم الذكاء الاصطناعي للتعرف على الوجه وبصمة الإصبع و OCR للبطاقات</li>
                      <li>قاعدة بيانات مشتركة</li>
                    </ul>
                  </div>
                </div>
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

      {/* System Components Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-32 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-6" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">مكونات النظام</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">اكتشف كيفية عمل كل جزء من أجزاء منصتنا المتكاملة</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Desktop Management App */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="group relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-2xl rounded-3xl p-8 border border-blue-500/20 group-hover:border-blue-500/60 transition-all duration-500 h-full shadow-2xl group-hover:shadow-blue-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">💻</div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center group-hover:bg-blue-500/30 transition-all">
                  <span className="text-xl">→</span>
                </div>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">تطبيق سطح المكتب</h3>
              <p className="text-blue-300 font-semibold text-xs mb-5 opacity-80">إدارة الزوار والبوابات بكفاءة</p>
              <ul className="space-y-2.5 text-sm text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <span>إضافة، تعديل، حذف الزوار (مدني، عسكري، أجنبي)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <span>إدارة البوابات ومستخدمي التابلت</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <span>استيراد جماعي من Excel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <span>إدارة القائمة السوداء</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-blue-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-400 font-semibold">1 فيديو</span>
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-xs font-bold text-blue-400">🎬</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biometric Access System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            />
            <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-2xl rounded-3xl p-8 border border-purple-500/20 group-hover:border-purple-500/60 transition-all duration-500 h-full shadow-2xl group-hover:shadow-purple-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">👆</div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center group-hover:bg-purple-500/30 transition-all">
                  <span className="text-xl">→</span>
                </div>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">نظام البيومتري</h3>
              <p className="text-purple-300 font-semibold text-xs mb-5 opacity-80">الدخول والخروج الذكي المتقدم</p>
              <ul className="space-y-2.5 text-sm text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <span>قراءة البصمات بدقة &gt; 99%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <span>استخراج بيانات الهوية (OCR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <span>تسجيل آلي للدخول والخروج</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <span>خوادم AI بسرعة &lt; 2 ثانية</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-purple-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-400 font-semibold">31 فيديو</span>
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-xs font-bold text-purple-400">🎬</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dashboard &amp; Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
            <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-2xl rounded-3xl p-8 border border-green-500/20 group-hover:border-green-500/60 transition-all duration-500 h-full shadow-2xl group-hover:shadow-green-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">📊</div>
                <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/40 flex items-center justify-center group-hover:bg-green-500/30 transition-all">
                  <span className="text-xl">→</span>
                </div>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">لوحة التحكم</h3>
              <p className="text-green-300 font-semibold text-xs mb-5 opacity-80">التتبع والتقارير الذكية</p>
              <ul className="space-y-2.5 text-sm text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <span>لوحات تفاعلية بتحديث فوري</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <span>تقارير PDF شاملة باللغة العربية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <span>تتبع حالة الزوار والقوة الأساسية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-1 group-hover:scale-125 transition-transform">✓</span>
                  <span>إحصائيات وسجلات تفصيلية</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-green-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-400 font-semibold">1 فيديو</span>
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-xs font-bold text-green-400">🎬</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Desktop App Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-32 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-6 mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/20 border border-blue-500/50 text-2xl"
            >
              💻
            </motion.div>
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-2">تطبيق سطح المكتب</h2>
              <p className="text-blue-300 text-base font-medium">إدارة الزوار والبوابات بكفاءة عالية</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur rounded-3xl p-8 border border-blue-500/30 mb-8">
            <h3 className="text-xl font-bold text-blue-200 mb-4">الوصف</h3>
            <div className="space-y-3 text-gray-300">
              <p>تطبيق سطح مكتب لإدارة تصديق الزوار والبوابات بكفاءة عالية.</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>إدارة الزوار:</strong> إضافة، تعديل، حذف زوار (مدني، عسكري، أجنبي)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>إدارة البوابات:</strong> إضافة، تعديل، حذف بيانات البوابات ومستخدمي التابلت</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>تصفية متقدمة:</strong> تصفية حسب الحالة (مسموح/محظور) أو نوع الزائر</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>استيراد من Excel:</strong> استيراج جماعي للبيانات مع دعم تنسيقات التاريخ المختلفة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>القائمة السوداء:</strong> إدارة فعالة للزوار المحظورين</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Desktop App Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="group relative"
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-0 group-hover:opacity-25 transition-all duration-700"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl overflow-hidden border border-blue-500/30 group-hover:border-blue-500/60 shadow-2xl backdrop-blur-xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/20 px-6 py-4 border-b border-blue-500/20">
              <div className="flex items-center gap-3">
                <span className="text-xl">💻</span>
                <div>
                  <h4 className="text-lg font-bold text-blue-200">تطبيق سطح المكتب</h4>
                  <p className="text-xs text-blue-300/70">Desktop Application Demo</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-video bg-black overflow-hidden">
              <video className="w-full h-full object-cover" controls autoPlay muted>
                <source src="/Tab/Video2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Biometric System Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-32 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-6 mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
              className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/20 border border-purple-500/50 text-2xl"
            >
              👆
            </motion.div>
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-2">نظام البيومتري</h2>
              <p className="text-purple-300 text-base font-medium">الدخول والخروج الذكي - 31 فيديو توضيحي</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur rounded-3xl p-8 border border-purple-500/30 mb-12">
            <h3 className="text-xl font-bold text-purple-200 mb-4">الوصف</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>تطبيق شامل لإدارة الدخول والخروج باستخدام البصمات والهويات.</p>
              <ul className="space-y-2 ml-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">•</span>
                  <span><strong>قراءة البصمات:</strong> تكامل مع Morpho SDK لقراءة بصمات الأصابع بدقة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">•</span>
                  <span><strong>استخراج الهوية:</strong> استخلاص البيانات من صور الهويات لضمان التحقق</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">•</span>
                  <span><strong>تسجيل آلي:</strong> دخول وخروج تلقائي لتبسيط العملية</span>
                </li>
              </ul>
              <div className="bg-purple-900/30 rounded-2xl p-4 mt-4">
                <p className="font-bold text-purple-200 mb-3">خادم التعرف البيومتري (AI) & (OCR)</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2 text-xs">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>تعرف فوري على البصمات والوجوه بدقة &gt; 99%</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>تسجيل بصور متعددة + دعم ONNX للسرعة</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>خصوصية 100%: لا يحفظ الصور أبدًا</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>استجابة في أقل من ثانية</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Biometric Videos - Premium Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="group relative"
        >
          {/* Outer Glow */}
          <motion.div
            className="absolute -inset-6 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-700"
            animate={{ scale: [1, 1.02, 1], opacity: [0, 0.2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Main Container */}
          <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl overflow-hidden border border-purple-500/30 group-hover:border-purple-500/60 shadow-2xl backdrop-blur-xl">
            
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-900/40 via-slate-900/40 to-purple-900/20 px-8 py-6 border-b border-purple-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-lg">
                    👆
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">نظام البيومتري</h3>
                    <p className="text-purple-300 text-xs">الفيديو {currentVideoIndex + 1} من 31</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {Math.round(((currentVideoIndex + 1) / 31) * 100)}%
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-800/50 rounded-full overflow-hidden border border-purple-500/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentVideoIndex + 1) / 31) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black overflow-hidden">
              <video
                key={currentVideoIndex}
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
              >
                <source src={`/Tab/Tab${currentVideoIndex + 1}.mp4`} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Center Play Indicator */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-full border-3 border-purple-500/50 flex items-center justify-center"
                >
                  <div className="w-0 h-0 border-l-8 border-l-transparent border-r-0 border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1 opacity-60" />
                </motion.div>
              </motion.div>
            </div>

            {/* Controls Footer */}
            <div className="bg-gradient-to-r from-purple-900/20 via-slate-900/30 to-purple-900/20 px-8 py-6 border-t border-purple-500/20">
              <div className="flex items-center justify-between gap-6">
                {/* Previous Button */}
                <motion.button
                  onClick={() => setCurrentVideoIndex(Math.max(0, currentVideoIndex - 1))}
                  disabled={currentVideoIndex === 0}
                  whileHover={{ scale: currentVideoIndex !== 0 ? 1.05 : 1 }}
                  whileTap={{ scale: currentVideoIndex !== 0 ? 0.95 : 1 }}
                  className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: currentVideoIndex === 0 
                      ? 'rgba(100, 116, 139, 0.2)' 
                      : 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2))',
                    border: `1px solid ${currentVideoIndex === 0 ? 'rgba(100, 116, 139, 0.3)' : 'rgba(168, 85, 247, 0.3)'}`,
                  }}
                >
                  <span className="text-xl">←</span>
                  <span className="text-sm text-purple-200 group-btn-hover:text-purple-100">السابق</span>
                </motion.button>

                {/* Video Counter */}
                <div className="flex items-center gap-3 px-6 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <span className="text-sm font-bold text-purple-300">{currentVideoIndex + 1}</span>
                  <span className="text-gray-500">/</span>
                  <span className="text-sm text-gray-400">31</span>
                </div>

                {/* Next Button */}
                <motion.button
                  onClick={() => setCurrentVideoIndex(Math.min(30, currentVideoIndex + 1))}
                  disabled={currentVideoIndex === 30}
                  whileHover={{ scale: currentVideoIndex !== 30 ? 1.05 : 1 }}
                  whileTap={{ scale: currentVideoIndex !== 30 ? 0.95 : 1 }}
                  className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: currentVideoIndex === 30 
                      ? 'rgba(100, 116, 139, 0.2)' 
                      : 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.3))',
                    border: `1px solid ${currentVideoIndex === 30 ? 'rgba(100, 116, 139, 0.3)' : 'rgba(236, 72, 153, 0.3)'}`,
                  }}
                >
                  <span className="text-sm text-purple-200 group-btn-hover:text-purple-100">التالي</span>
                  <span className="text-xl">→</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Dashboard Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-32 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-6 mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
              className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-500/20 border border-green-500/50 text-2xl"
            >
              📊
            </motion.div>
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-2">لوحة التحكم</h2>
              <p className="text-green-300 text-base font-medium">التتبع والتقارير الشاملة</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur rounded-3xl p-8 border border-green-500/30 mb-8">
            <h3 className="text-xl font-bold text-green-200 mb-4">الوصف</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>تطبيق متقدم لتتبع الزوار والقوة الأساسية بلوحات تحكم وتقارير شاملة.</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span><strong>لوحات تفاعلية:</strong> إحصائيات فورية للحاضرين والمنصرفين، تحديث كل 5 ثوانٍ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span><strong>تقارير PDF:</strong> تقارير يومية/أسبوعية باللغة العربية مع رسوم بيانية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span><strong>تتبع الحالة:</strong> تحديد حالة الزائر (داخل/خارج) حسب البوابة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span><strong>إدارة القوة:</strong> مراقبة حضور وانصراف القوة الأساسية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span><strong>السجلات:</strong> سجل الحضور والانصراف وسجل الزيارات</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="group relative"
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl blur-3xl opacity-0 group-hover:opacity-25 transition-all duration-700"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl overflow-hidden border border-green-500/30 group-hover:border-green-500/60 shadow-2xl backdrop-blur-xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/20 px-6 py-4 border-b border-green-500/20">
              <div className="flex items-center gap-3">
                <span className="text-xl">📊</span>
                <div>
                  <h4 className="text-lg font-bold text-green-200">لوحة التحكم</h4>
                  <p className="text-xs text-green-300/70">Dashboard & Analytics Demo</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-video bg-black overflow-hidden">
              <video className="w-full h-full object-cover" controls autoPlay muted>
                <source src="/Tab/Video1.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
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
