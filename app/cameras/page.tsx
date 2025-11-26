'use client'

import Image from 'next/image'

export default function Cameras() {
  const stats = [
    { value: '25 Families', label: 'Camera archetypes', detail: 'PTZ, thermal, multi-sensor, covert, LPR' },
    { value: '313k+ Units', label: 'Live deployments', detail: 'Across KAYAN, ACUD, Watanya & Al Hamra' },
    { value: '<4.2 ms', label: 'Edge analytics latency', detail: 'Sensor → fusion → command center' },
    { value: 'IP67 / IK10', label: 'Hardening', detail: 'Desert proof sealing with anti-salt finishes' },
  ]

  const cameraFamilies = [
    {
      name: 'Command PTZ 77X',
      role: 'City grid sweeps + stadium patrols',
      description:
        'Flagship patrol dome for city grids, stadiums, and border corridors with AI auto-tracking and 77X optical reach.',
      image: '/cameras/WV-X67711-Z3L3_800x800_1.png.webp',
      specs: [
        { label: 'Sensor', value: '1/1.8" BSI 4K CMOS, 110 dB WDR' },
        { label: 'Reach', value: '77X optical zoom / 2.8 km recognition' },
        { label: 'Power', value: 'PoE++ / 45W heater kit, -50°C ready' },
        { label: 'Analytics', value: 'Edge people/vehicle classification + smart presets' },
      ],
      badges: ['77X Zoom', 'Gyro Stabilized', 'Auto Track AI'],
      tags: ['Perimeter grids', 'Stadiums', 'Smart downtowns'],
    },
    {
      name: 'Thermal Dual-Spectrum T940',
      role: 'Ports · Petrochemical · Borders',
      description:
        'Dual-channel thermal + color module for petrochemical, ports, and national energy corridors with on-board fire analytics.',
      image: '/cameras/WV-S1536L.png',
      specs: [
        { label: 'Sensor', value: '17µm VOx + 4 MP starlight visible' },
        { label: 'Range', value: 'Human @ 1.9 km | Vehicle @ 5 km' },
        { label: 'Ingress', value: 'IP67 / NEMA 4X / anti-salt marine coating' },
        { label: 'Analytics', value: 'Heat signatures, leak detection, fence breach' },
      ],
      badges: ['Dual Spectrum', 'Marine Coating', 'Fire Analytics'],
      tags: ['Ports', 'Oil & gas', 'Runways'],
    },
    {
      name: 'Edge LPR Capsule Vena',
      role: 'Tolling · Yards · Smart Mobility',
      description:
        'Compact ANPR / LPR capsule for tolling, ticketing, and logistics yards with zero-server plate decoding.',
      image: '/cameras/wv_s2236l.png',
      specs: [
        { label: 'Sensor', value: 'Sony STARVIS 2 8 MP' },
        { label: 'Speed', value: '0–250 km/h multi-lane capture' },
        { label: 'Compute', value: 'Jetson Orin NX + MTI Vena SDK' },
        { label: 'Analytics', value: 'Plates, class, color, axle counting' },
      ],
      badges: ['Jetson Orin', '0-250 km/h', 'MTI Vena SDK'],
      tags: ['Tolling', 'Customs', 'Transit hubs'],
    },
    {
      name: 'Immersive Dome 360º',
      role: 'Transit concourses + experience halls',
      description:
        'Multi-sensor panoramic array for plazas, transport interchanges, and immersive control rooms with synchronized stitching.',
      image: '/cameras/ptz800ｘ450_0.png.webp',
      specs: [
        { label: 'Sensor', value: '4 × 8 MP synchronized sensors' },
        { label: 'Coverage', value: '360º x 180º | 120 dB HDR' },
        { label: 'Storage', value: 'Quad microSD + RAID edge buffer' },
        { label: 'Analytics', value: 'Crowd heatmaps, dwell, queue intelligence' },
      ],
      badges: ['4x 8 MP', '120 dB HDR', 'Crowd Intel'],
      tags: ['Transit', 'Retail', 'Experience centers'],
    },
  ]

  const workflowLayers = [
    {
      title: 'Discover',
      detail: 'RFIs, thermal flux scans, LiDAR point clouds, and coverage simulations feed the MTI coverage composer.',
      metric: '72 hr response',
    },
    {
      title: 'Engineer',
      detail: 'Stack design with redundancy, optical budgets, and structured cabling tied to MTI BIM + digital twin.',
      metric: '41 design hours',
    },
    {
      title: 'Deploy',
      detail: 'Pre-terminated harnesses, drone-assisted alignment, and zero-touch provisioning with MTI OpsBridge.',
      metric: '3x faster install',
    },
    {
      title: 'Operate',
      detail: 'AI health, firmware orchestration, SLA dashboards, and operator journeys mapped in Arabic & English.',
      metric: '99.6% uptime',
    },
  ]

  const missionDeployments = [
    {
      name: 'KAYAN Downtown Digital District',
      location: 'New Administrative Capital',
      kpis: ['2,450 sensors', '58 multi-agency operators', 'City twin playback 24/7'],
      focus: 'Immersive cross-campus situational awareness with synchronized PTZ tracking and dome ceilings.',
    },
    {
      name: 'ACUD Smart Capital Security Spine',
      location: 'Egyptian New Capital',
      kpis: ['3.5 km secure boulevard', '420 thermal pairs', '26 command pods'],
      focus: 'Thermal + color pairings stitched into the digital twin for ministries, embassies, and logistics corridors.',
    },
    {
      name: 'Al Hamra + Red Sea Retail',
      location: 'KSA & Egypt',
      kpis: ['620 immersive domes', 'Retail analytics in Arabic', 'POS exception sync'],
      focus: 'Experience-first retail protection with queue, dwell, and VIP journey overlays.',
    },
    {
      name: 'Watanya Energy & Logistics',
      location: 'National fueling grid',
      kpis: ['Remote desert fueling', 'Edge LPR > 98.2% accuracy', 'Hybrid satellite backhaul'],
      focus: 'Autonomous fueling & yard visibility with ruggedized PTZ + LPR capsules.',
    },
  ]

  const techStack = [
    { tier: 'Devices', name: 'Panasonic i-PRO / iA-Series', detail: 'Anti-corrosion bodies, gyro stabilization, FIPS-ready crypto.' },
    { tier: 'Control', name: 'Genetec Mission Control', detail: 'Unified video + access orchestration with MTI playbooks.' },
    { tier: 'Analytics', name: 'MTI Vision AI Fabric', detail: 'Arabic OCR, smart crowd flows, weapon + intrusion models.' },
    { tier: 'Compute', name: 'Dell PowerEdge XR / Jetson', detail: 'Edge GPU clusters with smart fail-over + liquid cooling.' },
    { tier: 'Storage', name: 'Dell PowerScale / Hitachi VSP', detail: 'Multi-tier NVMe for 90-day retention & instant playback.' },
    { tier: 'Experience', name: 'Immersive Command Pods', detail: 'LED cave, spatial audio, bilingual operator journeys.' },
  ]

  const gallery = [
    { src: '/pdf-assets/mti_page29_img01.jpeg', alt: 'Field install crew' },
    { src: '/pdf-assets/mti_page40_img01.jpeg', alt: 'Immersive command pod' },
    { src: '/pdf-assets/mti_page25_img01.jpeg', alt: 'National operations walkthrough' },
    { src: '/pdf-assets/mti_page41_img01.jpeg', alt: 'MTI surveillance tower' },
  ]

  return (
    <div className="w-full overflow-hidden pt-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 left-0 w-[32rem] h-[32rem] bg-blue-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-cyan-500/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-blue-300 uppercase tracking-[0.6em] text-xs mb-4">MTI Surveillance Fabric</p>
            <h1 className="text-5xl md:text-6xl font-bold cyber-text mb-6">
              Camera Intelligence<br />Curated for Every Project
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We isolate each scenario—from ports and plazas to smart districts—and build the right camera family with unified control,
              edge analytics, and twin-ready integrations so the full story lives in one place.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="group rounded-2xl border border-blue-500/20 bg-gradient-to-br from-white/5 to-blue-500/10 p-4 text-center transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 hover:-translate-y-1">
                  <div className="text-lg font-bold text-white group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-blue-200">{stat.label}</p>
                  <p className="text-xs text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 blur-3xl" />
            <div className="group relative rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur p-8 shadow-2xl shadow-blue-900/40 transition-all duration-500 hover:border-blue-400/40 hover:shadow-3xl hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-2">
              <Image
                src="/cameras/ptz800ｘ450_0.png.webp"
                alt="MTI camera showcase"
                width={900}
                height={700}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
              <p className="text-sm text-gray-400 mt-4 group-hover:text-gray-300 transition-colors">
                PTZ, LPR, and thermal clusters operate as one network and tie directly into OpsBridge and immersive command pods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.5em] text-xs mb-3">Camera Models</p>
            <h2 className="text-4xl font-bold text-white mb-4">Our Camera Families</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Each carefully engineered for specific mission profiles—from sprawling city grids to precision logistics yards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cameraFamilies.map((cam) => (
              <div
                key={cam.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/40 transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 hover:-translate-y-3"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 p-8 items-center">
                  <div className="relative order-2 md:order-2 flex items-center justify-center min-h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <Image
                      src={cam.image}
                      alt={cam.name}
                      width={400}
                      height={400}
                      className="relative z-10 w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="order-1 md:order-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2">{cam.role}</p>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">{cam.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{cam.description}</p>
                    <div className="space-y-2 mb-6">
                      {cam.specs.slice(0, 2).map((spec) => (
                        <div key={spec.label} className="flex items-start gap-2 text-sm">
                          <span className="text-blue-300 font-semibold min-w-fit">{spec.label}:</span>
                          <span className="text-gray-300">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cam.badges.map((badge) => (
                        <span key={badge} className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/50 text-xs text-blue-200 group-hover:border-blue-300 group-hover:text-blue-100 transition-all">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-purple-300 uppercase tracking-[0.5em] text-xs mb-3">Use Cases</p>
            <h2 className="text-4xl font-bold text-white mb-4">Mission-Ready Deployments</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Applications across all sectors — each engineered with the right sensor, glass, and intelligence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cameraFamilies.map((family) => (
              <div
                key={family.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/60 to-slate-800/30 p-6 transition-all duration-500 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 rounded-3xl" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-purple-300 mb-1">{family.role}</p>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors">{family.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{family.description}</p>
                  <div className="space-y-2 mb-6 text-sm">
                    {family.specs.map((spec) => (
                      <div key={spec.label} className="flex gap-2">
                        <span className="text-purple-300 font-semibold whitespace-nowrap">{spec.label}:</span>
                        <span className="text-gray-400 group-hover:text-gray-200 transition-colors">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {family.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full border border-purple-400/30 text-xs text-purple-200 bg-purple-500/5 group-hover:border-purple-300 group-hover:bg-purple-500/15 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-300 uppercase tracking-[0.5em] text-xs mb-3">Workflow Layers</p>
            <h2 className="text-4xl font-bold text-white">From Survey to Operations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowLayers.map((layer) => (
              <div
                key={layer.title}
                className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/40 p-6 transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-transparent transition-all duration-500 rounded-3xl" />
                <div className="relative z-10">
                  <div className="text-xs uppercase tracking-[0.4em] text-cyan-200 group-hover:text-cyan-100 transition-colors">{layer.title}</div>
                  <h4 className="text-xl font-semibold text-white mt-3 mb-3 group-hover:scale-110 transition-transform duration-300">{layer.metric}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">{layer.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-300 uppercase tracking-[0.5em] text-xs mb-3">Field-Proven</p>
            <h2 className="text-4xl font-bold text-white">Live Deployments We Power</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Real-world systems delivering critical intelligence across MENA region</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionDeployments.map((deployment) => (
              <div
                key={deployment.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/40 p-8 transition-all duration-500 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-transparent transition-all duration-500 rounded-3xl" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-300 mb-1">{deployment.location}</p>
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-100 transition-colors">{deployment.name}</h3>
                    </div>
                    <span className="px-4 py-1 rounded-full border border-emerald-400/50 bg-emerald-500/10 text-xs text-emerald-200 whitespace-nowrap group-hover:border-emerald-300 group-hover:bg-emerald-500/20 transition-all">MTI Live</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">{deployment.focus}</p>
                  <div className="flex flex-wrap gap-2">
                    {deployment.kpis.map((kpi) => (
                      <span key={kpi} className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 border border-emerald-400/30 text-xs text-emerald-200 group-hover:border-emerald-300 group-hover:bg-emerald-500/30 transition-all">
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-indigo-300 uppercase tracking-[0.5em] text-xs mb-3">Tech Stack</p>
            <h2 className="text-4xl font-bold text-white">Hardware + Software as One Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((layer) => (
              <div
                key={layer.name}
                className="group relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/40 p-6 transition-all duration-500 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-105 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-transparent transition-all duration-500 rounded-3xl" />
                <div className="relative z-10">
                  <div className="text-xs uppercase tracking-[0.4em] text-indigo-300 group-hover:text-indigo-200 transition-colors">{layer.tier}</div>
                  <h3 className="text-2xl font-semibold text-white mt-2 group-hover:text-indigo-100 transition-colors">{layer.name}</h3>
                  <p className="text-gray-300 mt-3 text-sm group-hover:text-gray-200 transition-colors">{layer.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-rose-300 uppercase tracking-[0.5em] text-xs mb-3">On-Site Visuals</p>
            <h2 className="text-4xl font-bold text-white">Real-World Installations</h2>
            <p className="text-gray-400 mt-3">Deployments across critical infrastructure and smart city environments</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gallery.map((asset) => (
              <div
                key={asset.src}
                className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/70 shadow-lg transition-all duration-500 hover:border-rose-400/50 hover:shadow-2xl hover:shadow-rose-500/30 hover:scale-105 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-96">
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    width={900}
                    height={700}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-base text-gray-100 font-medium">{asset.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="group relative overflow-hidden rounded-[32px] border border-blue-500/20 bg-gradient-to-br from-blue-900/40 via-slate-900/80 to-cyan-900/30 p-12 transition-all duration-500 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent transition-all duration-500 rounded-[32px]" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">Ready to Map the Camera Network?</h2>
              <p className="text-gray-300 text-lg mb-8 group-hover:text-gray-200 transition-colors">
                Share a schematic or even a hand sketch and we will deliver a full camera map within 72 hours, complete with sample video and a 3D walk-through.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group/btn px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-xl shadow-blue-900/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 inline-block"
                >
                  Book a Design Session
                </a>
                <a
                  href="/visualization"
                  className="group/btn px-8 py-4 rounded-full border-2 border-blue-400/50 text-blue-100 font-semibold transition-all duration-300 hover:border-blue-300 hover:bg-blue-500/10 hover:text-white hover:scale-105 inline-block"
                >
                  Explore the 3D Scene
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
