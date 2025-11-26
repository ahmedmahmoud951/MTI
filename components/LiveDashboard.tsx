'use client'

import { useEffect, useState } from 'react'

export function LiveDashboard() {
  const [metrics, setMetrics] = useState({
    activeProjects: 0,
    totalDevices: 0,
    cameras: 0,
    sensors: 0,
    deploymentPoints: 0,
    systemHealth: 0,
  })

  useEffect(() => {
    const finalMetrics = {
      activeProjects: 8,
      totalDevices: 52346,
      cameras: 50947,
      sensors: 2450,
      deploymentPoints: 400,
      systemHealth: 99.7,
    }

    const animationDuration = 2000
    const steps = 60
    const stepDuration = animationDuration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep += 1
      setMetrics({
        activeProjects: Math.floor((finalMetrics.activeProjects / steps) * currentStep),
        totalDevices: Math.floor((finalMetrics.totalDevices / steps) * currentStep),
        cameras: Math.floor((finalMetrics.cameras / steps) * currentStep),
        sensors: Math.floor((finalMetrics.sensors / steps) * currentStep),
        deploymentPoints: Math.floor((finalMetrics.deploymentPoints / steps) * currentStep),
        systemHealth: parseFloat(((finalMetrics.systemHealth / steps) * currentStep).toFixed(1)),
      })

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const metricCards = [
    {
      title: 'Active Projects',
      value: metrics.activeProjects,
      unit: '',
      icon: '📊',
      neonColor: '#00D9FF',
      status: 'Operational',
      detail: 'KAYAN · Al Hamra · Cairo Airport · Burj Al Arab · WATANYA · Suez Tunnels · Olympic City · Suez Canal',
    },
    {
      title: 'Cameras Deployed',
      value: metrics.cameras.toLocaleString(),
      unit: '+',
      icon: '🎥',
      neonColor: '#00FF41',
      status: 'Live',
      detail: 'Real-Time Surveillance across all sites',
    },
    {
      title: 'Connected Devices',
      value: metrics.totalDevices.toLocaleString(),
      unit: '+',
      icon: '📡',
      neonColor: '#FF006E',
      status: 'Active',
      detail: 'Radars, sensors, access points, and controllers',
    },
    {
      title: 'Smart Sensors',
      value: metrics.sensors.toLocaleString(),
      unit: '+',
      icon: '🔍',
      neonColor: '#FFD60A',
      status: 'Monitoring',
      detail: 'Multi-sensor, ground, and marine units',
    },
    {
      title: 'Deployment Points',
      value: metrics.deploymentPoints.toLocaleString(),
      unit: '+',
      icon: '📍',
      neonColor: '#FF10F0',
      status: 'Strategic',
      detail: 'Key infrastructure locations and checkpoints',
    },
    {
      title: 'System Health',
      value: metrics.systemHealth,
      unit: '%',
      icon: '⬆️',
      neonColor: '#0081CF',
      status: 'Excellent',
      detail: 'Network uptime and operational status',
    },
  ]

  return (
    <section className="py-32 relative overflow-visible bg-gradient-to-b from-slate-950 via-black to-slate-950">
      <style>{`
        @keyframes pulse-border {
          0%, 100% { box-shadow: 0 0 20px rgba(0,217,255,0.5); }
          50% { box-shadow: 0 0 40px rgba(0,217,255,0.8); }
        }
        .pulse-border { animation: pulse-border 2s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 10px #00D9FF' }} />
            <span className="text-cyan-400 font-bold text-sm uppercase tracking-widest" style={{ textShadow: '0 0 10px #00D9FF' }}>✓ Live Metrics</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-cyan-400 via-pink-400 to-lime-400 bg-clip-text text-transparent">
            Real-Time Operations Hub
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Live monitoring of MTI Engineering&rsquo;s infrastructure and operations across major deployments
          </p>
        </div>

        {/* Organized Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metricCards.map((metric, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 transform"
              style={{
                border: `2px solid ${metric.neonColor}`,
                boxShadow: `0 0 15px ${metric.neonColor}40, inset 0 0 15px ${metric.neonColor}08`,
              }}
            >
              {/* Glassmorphic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/50 to-black/70 backdrop-blur-lg" />

              {/* Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: metric.neonColor }} />

              {/* Content */}
              <div className="relative p-6 z-10">
                {/* Icon Top Right */}
                <div className="absolute top-4 right-4 text-3xl opacity-40 group-hover:opacity-100 transition-opacity group-hover:scale-125 transform duration-300">
                  {metric.icon}
                </div>

                {/* Title */}
                <p className="text-xs font-bold uppercase tracking-wider mb-4 pr-12" style={{ color: metric.neonColor, textShadow: `0 0 8px ${metric.neonColor}` }}>
                  {metric.title}
                </p>

                {/* Value */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl lg:text-5xl font-black font-mono" style={{ color: metric.neonColor, textShadow: `0 0 15px ${metric.neonColor}, 0 0 30px ${metric.neonColor}60` }}>
                    {typeof metric.value === 'string' ? metric.value : metric.value.toLocaleString ? metric.value.toLocaleString() : metric.value}
                  </span>
                  {metric.unit && <span className="text-lg font-bold" style={{ color: metric.neonColor, opacity: 0.7 }}>{metric.unit}</span>}
                </div>

                {/* Status Badge */}
                <div className="mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: metric.neonColor, boxShadow: `0 0 8px ${metric.neonColor}` }} />
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider text-black"
                    style={{ backgroundColor: metric.neonColor }}
                  >
                    {metric.status}
                  </span>
                </div>

                {/* Detail Text */}
                <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">{metric.detail}</p>

                {/* Bottom Progress Bar */}
                <div className="mt-4 h-1 bg-slate-800/40 rounded-full overflow-hidden border border-slate-700/20">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: '100%',
                      backgroundColor: metric.neonColor,
                      boxShadow: `0 0 8px ${metric.neonColor}`,
                    }}
                  />
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" style={{ boxShadow: `inset 0 0 30px ${metric.neonColor}30` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Performance Chart */}
        <div className="mt-32 relative group">
          <div
            className="absolute inset-0 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(0,217,255,0.2) 0%, transparent 70%)',
            }}
          />

          <div
            className="p-8 lg:p-12 rounded-3xl overflow-hidden backdrop-blur-xl"
            style={{
              border: '2px solid #00D9FF',
              boxShadow: '0 0 30px rgba(0,217,255,0.3), inset 0 0 30px rgba(0,217,255,0.1)',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

            <h3 className="text-2xl lg:text-3xl font-black mb-8 flex items-center gap-3">
              <span style={{ color: '#00D9FF', textShadow: '0 0 15px #00D9FF' }}>
                ◆ System Performance (24-Hour)
              </span>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#00FF41', boxShadow: '0 0 10px #00FF41' }} />
            </h3>

            <div className="h-64 flex items-end justify-between gap-2 px-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 group/bar rounded-t-lg opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer transform hover:scale-y-125 origin-bottom"
                  style={{
                    height: `${30 + Math.sin(i / 4) * 40 + Math.random() * 20}%`,
                    background: `linear-gradient(180deg, #00FF41 0%, #00D9FF 50%, #FF006E 100%)`,
                    boxShadow: `0 0 20px rgba(0,217,255,0.6), inset 0 0 10px rgba(0,255,65,0.4)`,
                    filter: 'drop-shadow(0 0 8px rgba(0,217,255,0.4))',
                  }}
                  title={`Hour ${i + 1}: ${Math.floor(Math.random() * 100)}% Load`}
                />
              ))}
            </div>

            <div className="flex justify-between items-center mt-8 pt-8 border-t border-cyan-500/20">
              <p className="text-xs text-gray-400">Data refreshes every 5 seconds</p>
              <p className="text-xs font-bold" style={{ color: '#00FF41', textShadow: '0 0 10px #00FF41' }}>Last updated: Just now ✓</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full mix-blend-screen filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full mix-blend-screen filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-lime-500/5 rounded-full mix-blend-screen filter blur-3xl pointer-events-none" />
    </section>
  )
}
