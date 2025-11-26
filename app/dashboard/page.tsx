'use client'

import { LiveDashboard } from '@/components/LiveDashboard'

export default function Dashboard() {
  return (
    <div className="w-full overflow-hidden pt-20 bg-gradient-to-b from-slate-950 via-black to-slate-950">
      <style>{`
        @keyframes scan-line {
          0% { top: 0; }
          100% { top: 100%; }
        }
        @keyframes pulse-border {
          0%, 100% { box-shadow: 0 0 20px rgba(0,217,255,0.5); }
          50% { box-shadow: 0 0 40px rgba(0,217,255,0.8); }
        }
        @keyframes glow-text {
          0%, 100% { text-shadow: 0 0 10px #00D9FF, 0 0 20px #00D9FF; }
          50% { text-shadow: 0 0 20px #FF006E, 0 0 40px #00D9FF; }
        }
        .pulse-border { animation: pulse-border 2s ease-in-out infinite; }
        .glow-text { animation: glow-text 3s ease-in-out infinite; }
      `}</style>

      {/* Header Section */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl" />
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-screen filter blur-3xl" />
          <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-lime-500/5 rounded-full mix-blend-screen filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/60 rounded-full pulse-border">
            <span className="text-cyan-300 text-sm font-bold tracking-widest uppercase" style={{ textShadow: '0 0 10px #00D9FF' }}>📊 Real-Time Operations Center</span>
          </div>
          <div>
            <h1 className="text-5xl md:text-7xl font-black cyber-text mb-4 glow-text">
              Operations Dashboard
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Live monitoring and analytics of MTI Engineering&rsquo;s infrastructure, deployments, and operational metrics across MENA region
          </p>
        </div>
      </section>

      {/* Live Dashboard Component */}
      <LiveDashboard />

      {/* Details Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-black/40 to-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ background: 'linear-gradient(to right, #0081CF, #00D9FF, #FF006E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 0 30px rgba(0,217,255,0.2)' }}>Infrastructure Status</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Real-time analysis of system performance and deployment health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-105 transform" style={{ border: '2px solid #0081CF', boxShadow: '0 0 20px rgba(0,129,207,0.4), inset 0 0 20px rgba(0,129,207,0.05)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/40 to-black/80 backdrop-blur-xl" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" />
              
              <h3 className="text-2xl font-black text-white mb-6 relative z-10" style={{ color: '#0081CF', textShadow: '0 0 15px #0081CF' }}>◆ System Health</h3>
              <div className="space-y-3 relative z-10">
                {[
                  { name: 'API Response Time', value: '42ms', status: 'Excellent' },
                  { name: 'Database Performance', value: '115ms', status: 'Excellent' },
                  { name: 'Cache Hit Rate', value: '96%', status: 'Excellent' },
                  { name: 'Error Rate', value: '0.01%', status: 'Excellent' },
                ].map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-lg border border-blue-400/30 group-hover:border-blue-300/60 transition-all backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(0, 129, 207, 0.08)', boxShadow: 'inset 0 0 10px rgba(0,129,207,0.1)' }}
                  >
                    <span className="text-gray-300 group-hover:text-gray-100 transition-colors">{metric.name}</span>
                    <div className="text-right">
                      <div className="font-bold text-lg" style={{ color: '#0081CF', textShadow: '0 0 10px #0081CF' }}>{metric.value}</div>
                      <div className="text-xs text-slate-400">{metric.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-105 transform" style={{ border: '2px solid #00FF41', boxShadow: '0 0 20px rgba(0,255,65,0.4), inset 0 0 20px rgba(0,255,65,0.05)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-green-900/40 to-black/80 backdrop-blur-xl" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-60" />
              
              <h3 className="text-2xl font-black text-white mb-6 relative z-10" style={{ color: '#00FF41', textShadow: '0 0 15px #00FF41' }}>◆ Regional Deployment</h3>
              <div className="space-y-3 relative z-10">
                {[
                  { region: 'Egypt (Primary)', status: '✅ Live', projects: 8, devices: 54342 },
                  { region: 'Saudi Arabia', status: '✅ Live', projects: 2, devices: 8500 },
                  { region: 'UAE / GCC', status: '✅ Live', projects: 2, devices: 4200 },
                  { region: 'Other Markets', status: '✅ Online', projects: 1, devices: 1500 },
                ].map((region, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-lg border border-lime-400/30 group-hover:border-lime-300/60 transition-all backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(0, 255, 65, 0.08)', boxShadow: 'inset 0 0 10px rgba(0,255,65,0.1)' }}
                  >
                    <div>
                      <div className="font-bold text-white group-hover:text-lime-100 transition-colors">{region.region}</div>
                      <div className="text-sm text-gray-400">{region.projects} Projects • {region.devices.toLocaleString()} Devices</div>
                    </div>
                    <span className="text-sm font-bold" style={{ color: '#00FF41', textShadow: '0 0 8px #00FF41' }}>{region.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black/40 to-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ background: 'linear-gradient(to right, #00FF41, #00D9FF, #FF006E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 0 30px rgba(0,255,65,0.2)' }}>System Alerts & Status</h2>
            <p className="text-gray-300">Recent operational updates and maintenance notifications</p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                type: 'Success',
                message: 'All systems operational across 8 major deployments. Cairo metropolitan region at 99.9% uptime.',
                time: 'Just now',
                icon: '✅',
                color: '#00FF41',
              },
              {
                type: 'Info',
                message: 'Scheduled infrastructure optimization completed successfully. API response improved by 18%.',
                time: '1 hour ago',
                icon: '🔔',
                color: '#00D9FF',
              },
              {
                type: 'Success',
                message: 'Backup of 68TB across all data centers completed successfully.',
                time: '3 hours ago',
                icon: '💾',
                color: '#00FF41',
              },
            ].map((alert, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border p-6 flex items-start gap-4 transition-all duration-300 backdrop-blur-sm"
                style={{
                  border: `2px solid ${alert.color}`,
                  boxShadow: `0 0 15px ${alert.color}40, inset 0 0 15px ${alert.color}10`,
                  backgroundColor: `${alert.color}08`,
                }}
              >
                <span className="text-3xl mt-1 flex-shrink-0">{alert.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg" style={{ color: alert.color, textShadow: `0 0 10px ${alert.color}` }}>{alert.type}</h4>
                    <span className="text-xs text-slate-400 font-medium">{alert.time}</span>
                  </div>
                  <p className="text-gray-300 group-hover:text-gray-100 transition-colors">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Status Section */}
      <section className="py-24 relative overflow-hidden bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="group relative overflow-hidden rounded-3xl p-10 transition-all duration-500 hover:scale-105" style={{ border: '2px solid #FF10F0', boxShadow: '0 0 30px rgba(255,16,240,0.4), inset 0 0 30px rgba(255,16,240,0.05)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/40 to-black/80 backdrop-blur-xl" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60" />
            
            <h3 className="text-3xl font-black text-white mb-8 relative z-10" style={{ color: '#FF10F0', textShadow: '0 0 15px #FF10F0' }}>◆ Services & Infrastructure Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Core API', status: 'Operational', uptime: '99.99%', devices: '68K+' },
                { name: 'IoT Gateway', status: 'Operational', uptime: '99.98%', devices: '54K+' },
                { name: 'Video Analytics', status: 'Operational', uptime: '99.97%', devices: '12K+' },
                { name: 'Digital Twin Service', status: 'Operational', uptime: '99.96%', devices: '8K+' },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="group/card relative overflow-hidden p-6 rounded-2xl border transition-all duration-300 hover:scale-110 transform backdrop-blur-sm"
                  style={{
                    border: '1px solid #FF10F0',
                    boxShadow: '0 0 15px rgba(255,16,240,0.3), inset 0 0 10px rgba(255,16,240,0.1)',
                    backgroundColor: 'rgba(255, 16, 240, 0.08)',
                  }}
                >
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#00FF41', boxShadow: '0 0 10px #00FF41' }} />
                    <h4 className="font-bold text-white text-lg group-hover/card:scale-105 transform" style={{ color: '#FF10F0', textShadow: '0 0 10px #FF10F0' }}>{service.name}</h4>
                  </div>
                  <p className="text-sm text-gray-300 group-hover/card:text-gray-100 transition-colors mb-3 relative z-10">{service.status}</p>
                  <div className="space-y-2 text-xs relative z-10">
                    <p className="font-bold" style={{ color: '#FF10F0', textShadow: '0 0 8px #FF10F0' }}>{service.uptime} Uptime</p>
                    <p className="text-slate-400 group-hover/card:text-slate-300 transition-colors">{service.devices} Connected</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
