'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DigitalTwin() {
  const projects = [
    {
      id: 'access-control',
      title: 'منظومة التحكم في دخول الأشخاص عن طريق الذكاء الصناعي',
      titleEn: 'AI-Powered Access Control System',
      description: 'نظام متكامل للتحكم والمراقبة الذكية مع تقنيات التعرف على الوجوه والأمان المتقدم',
      icon: '🔐',
      color: 'from-red-500 to-orange-600',
      accentColor: 'red',
      videos: 23,
      image: '🤖',
    },
  ]



  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-15"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"
        />
      </div>

      {/* Header Section */}
      <section className="relative z-10 pt-20 pb-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
              حلول رقمية
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-bold">Digital Twin Solutions</p>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-1.5 w-24 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          تقنيات متقدمة وحلول ذكية مصممة لإعادة تعريف معايير الأمان والكفاءة في مؤسستك
        </motion.p>
      </section>

      {/* Featured Project Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group"
        >
          {projects.map((project) => (
            <Link key={project.id} href={`/digital-twin/${project.id}`}>
              <div className="relative cursor-pointer">
                {/* Glowing background effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`absolute -inset-8 bg-gradient-to-br ${project.color} rounded-4xl blur-3xl opacity-40`}
                />
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/90 backdrop-blur-2xl rounded-4xl p-12 md:p-16 border border-orange-500/30 group-hover:border-orange-500/60 transition-all duration-500 shadow-2xl overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -ml-32 -mb-32" />
                  
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Icon and Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center md:items-start"
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -20, 0],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-8xl md:text-9xl mb-8"
                      >
                        {project.image}
                      </motion.div>
                      
                      {project.videos > 0 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.5 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 bg-gradient-to-r from-red-500/40 to-orange-500/40 backdrop-blur-md border border-red-400/60 rounded-2xl px-6 py-3"
                        >
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                          </span>
                          <span className="text-sm font-bold text-red-200">{project.videos} فيديو توضيحي</span>
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
                          {project.title}
                        </h2>
                        <p className="text-lg text-orange-400 font-bold mb-4">
                          {project.titleEn}
                        </p>
                      </div>

                      <p className="text-lg text-gray-300 leading-relaxed border-l-4 border-orange-500/60 pl-6">
                        {project.description}
                      </p>

                      <motion.div
                        whileHover={{ gap: '24px' }}
                        className="flex items-center gap-4 pt-4"
                      >
                        <span className="text-sm text-gray-400 font-semibold uppercase tracking-widest">
                          عرض التفاصيل
                        </span>
                        <motion.div
                          animate={{ x: [0, 8, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-2xl text-orange-400 font-black"
                        >
                          →
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 py-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden"
        >
          {/* Animated glowing background */}
          <motion.div
            animate={{ 
              x: [0, 20, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-red-600/50 via-orange-600/40 to-yellow-600/30 rounded-4xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
          />
          
          <div className="relative bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-900/95 backdrop-blur-2xl rounded-4xl p-12 md:p-20 border border-orange-500/30 group-hover:border-orange-500/60 transition-all duration-500 shadow-2xl overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl -mr-36 -mt-36" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl -ml-36 -mb-36" />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10 text-center space-y-8"
            >
              {/* Icon */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl"
              >
                ✨
              </motion.div>

              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    جاهز لتحويل عملك؟
                  </span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
              </div>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                اكتشف كيف يمكن لمنظومة التحكم الذكية تحسين الأمان والكفاءة في مؤسستك بشكل ملموس وقابل للقياس
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <motion.button
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: '0 0 50px rgba(239, 68, 68, 0.7)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group/btn"
                >
                  <motion.div
                    animate={{ x: [0, 500] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white/20 -left-full group-hover/btn:left-full transition-all duration-500"
                  />
                  <span className="relative">احجز عرض توضيحي مجاني</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-transparent border-2 border-orange-500/60 hover:border-orange-400 text-orange-300 hover:text-orange-200 font-bold text-lg rounded-xl transition-all duration-300"
                >
                  تواصل معنا الآن
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer spacer */}
      <div className="h-20" />
    </div>
  )
}
