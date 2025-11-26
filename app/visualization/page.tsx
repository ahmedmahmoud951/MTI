'use client'

import { Canvas } from '@react-three/fiber'
import { Edges, Float, Html, OrbitControls, Stars } from '@react-three/drei'
import { motion, useSpring } from 'framer-motion'
import { CSSProperties, Suspense, useMemo, useState } from 'react'
import type { MouseEvent } from 'react'

interface ScenarioModule {
  id: string
  title: string
  location: string
  status: string
  summary: string
  metrics: string[]
  color: string
  glow: string
  layer: string
  position: [number, number, number]
  footprint: [number, number]
  height: number
  camerasDeployed: number
  texture: string
}

const numberFormatter = new Intl.NumberFormat('en-US')
const deriveHeight = (value: number) => 0.35 + Math.log10(value) * 0.08

const kpiStats = [
  { value: `${numberFormatter.format(50947)} Cameras`, label: 'Live across mega deployments' },
  { value: `${numberFormatter.format(52346)} Connected devices`, label: 'IoT and OT assets streaming to OpsPods' },
  { value: `${numberFormatter.format(2450)} Smart sensors`, label: 'Thermal, LiDAR, and environmental nodes' },
  { value: `${numberFormatter.format(400)} Deployment sites`, label: 'Egypt · Saudi Arabia · UAE · Kuwait' },
]

const layers = [
  { id: 'infra', label: 'Infrastructure Fabric', detail: 'Fiber mesh + OT networks + UPS grids' },
  { id: 'mobility', label: 'Mobility Spine', detail: 'Transit sensors, ANPR, traffic orchestration' },
  { id: 'security', label: 'Security Stack', detail: 'Thermal PTZ, drone shields, incident AI' },
  { id: 'experience', label: 'Experience Pods', detail: 'Immersive command centers + client walk-throughs' },
]

const getLayerLabel = (layerId: string) => layers.find((layer) => layer.id === layerId)?.label ?? layerId

const scenarioModules: ScenarioModule[] = [
  {
    id: 'kayan',
    title: 'KAYAN Mega Grid',
    location: 'Saudi Arabia · Smart District',
    status: 'Active',
    summary: 'Transit-centric giga-project core with synchronized PTZ swarms, LiDAR mobility analytics, and bilingual ops before groundworks.',
    metrics: [
      `${numberFormatter.format(40000)} cameras deployed`,
      'AI threat detection hub',
      'Real-time OpsPods with AR twins',
    ],
    color: '#38bdf8',
    glow: '#0ea5e9',
    layer: 'mobility',
    position: [-3.6, 0.42, 1.4],
    footprint: [3.2, 2.2],
    height: deriveHeight(40000),
    camerasDeployed: 40000,
    texture: '/pdf-assets/mti_page40_img01.jpeg',
  },
  {
    id: 'hamra',
    title: 'Al Hamra Retail Spine',
    location: 'Saudi Arabia · Premium Retail',
    status: 'Active',
    summary: 'Immersive domes spanning Red Sea luxury anchors with queue, dwell, and VIP overlays mapped to live spend KPIs.',
    metrics: [
      `${numberFormatter.format(3500)} cameras across anchors`,
      'VIP heatmaps + queue AI',
      'POS exception sync',
    ],
    color: '#f97316',
    glow: '#fb923c',
    layer: 'experience',
    position: [-0.4, 0.32, -2.1],
    footprint: [2.6, 1.9],
    height: deriveHeight(3500),
    camerasDeployed: 3500,
    texture: '/pdf-assets/mti_page40_img08.jpeg',
  },
  {
    id: 'cairo',
    title: 'Cairo Airport Shield',
    location: 'Egypt · Cairo International',
    status: 'Active',
    summary: 'International airport perimeter, terminal, and runway flow unified with bilingual incident desks and analytics.',
    metrics: [
      `${numberFormatter.format(700)} aviation cameras`,
      'Perimeter + runway coverage',
      '24/7 incident desk',
    ],
    color: '#a855f7',
    glow: '#c084fc',
    layer: 'security',
    position: [2.4, 0.35, -0.4],
    footprint: [3, 1.7],
    height: deriveHeight(700),
    camerasDeployed: 700,
    texture: '/pdf-assets/mti_page20_img02.png',
  },
  {
    id: 'watanya',
    title: 'Watanya Energy Grid',
    location: 'Kuwait · National Fuel',
    status: 'Active',
    summary: 'Autonomous fueling stations with ruggedized PTZ, LPR capsules, and satellite backhaul across desert logistics.',
    metrics: [
      `${numberFormatter.format(2500)} ruggedized cameras`,
      'Hybrid satellite uplink',
      'Remote desert fueling',
    ],
    color: '#22c55e',
    glow: '#4ade80',
    layer: 'infra',
    position: [3.5, 0.33, 2.2],
    footprint: [2.2, 1.5],
    height: deriveHeight(2500),
    camerasDeployed: 2500,
    texture: '/pdf-assets/mti_page38_img02.png',
  },
]

const stackHighlights = [
  {
    title: 'Device Layer',
    bullets: ['Panasonic i-PRO PTZ + thermal arrays', 'MTI LPR capsules with Jetson Orin compute'],
  },
  {
    title: 'Data + AI Fabric',
    bullets: ['Genetec Mission Control orchestration', 'MTI Vision AI Fabric with Arabic OCR and weapon intel'],
  },
  {
    title: 'Visualization Layer',
    bullets: ['Three.js immersive sandbox integrated with digital twin', 'OpsBridge dashboards mirrored in VR/AR'],
  },
  {
    title: 'Experience Layer',
    bullets: ['LED CAVE pods, haptics, bilingual operator journey mapping', 'Client-ready guided tours before deployment'],
  },
]

const journey = [
  { title: 'Diagnose', detail: 'We ingest CAD, LiDAR, and live feeds then map risks + KPIs.' },
  { title: 'Compose', detail: 'Shaders, textures, and real camera specs baked into the scene with latency overlays.' },
  { title: 'Pilot', detail: 'Client walks the 3D campus, triggers incidents, and toggles layers before procurement.' },
  { title: 'Deploy', detail: 'Scene syncs with live ops once physical rollout starts for continuity.' },
]

function DigitalDistrict({
  activeModule,
  activeLayer,
  onSelectModule,
}: {
  activeModule: string
  activeLayer: string
  onSelectModule: (value: string) => void
}) {
  const modules = useMemo(() => scenarioModules, [])

  return (
    <Canvas camera={{ position: [10, 8, 12], fov: 38 }} shadows>
      <color attach="background" args={['#020617']} />
      <Stars radius={60} depth={40} factor={4} fade speed={1} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 10, 4]} intensity={1.1} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#0f172a" metalness={0.2} roughness={0.9} />
      </mesh>
      <gridHelper args={[30, 30, '#1d4ed8', '#0f172a']} position={[0, -0.19, 0]} />
      {modules.map((module) => {
        const baseHeight = module.height
        const heightMultiplier = module.id === activeModule ? 1.85 : module.layer === activeLayer ? 1.3 : 1
        const height = baseHeight * heightMultiplier
        const centerY = module.position[1] + (height - baseHeight) / 2
        const emissive = module.id === activeModule || module.layer === activeLayer ? module.glow : '#1f2937'
        const labelY = centerY + height / 2 + 0.35
        return (
          <Float
            key={module.id}
            speed={module.id === activeModule ? 2.2 : 1.1}
            floatIntensity={module.layer === activeLayer ? 1.2 : 0.3}
            rotationIntensity={module.id === activeModule ? 0.5 : 0.2}
          >
            <mesh
              position={[module.position[0], centerY, module.position[2]]}
              castShadow
              onPointerDown={() => onSelectModule(module.id)}
              onPointerOver={() => onSelectModule(module.id)}
            >
              <boxGeometry args={[module.footprint[0], height, module.footprint[1]]} />
              <meshStandardMaterial
                color={module.color}
                emissive={emissive}
                emissiveIntensity={module.id === activeModule ? 1.2 : 0.4}
                metalness={0.6}
                roughness={0.25}
              />
              <Edges scale={1.05} color={module.id === activeModule ? '#e0f2fe' : '#1f2937'} />
            </mesh>
            <Html position={[module.position[0], labelY, module.position[2]]} center>
              <div className="px-3 py-1 rounded-full bg-white/10 border border-white/30 text-[0.65rem] uppercase tracking-[0.4em] text-white">
                {module.title.split(' ')[0]}
              </div>
            </Html>
          </Float>
        )
      })}
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.2} minDistance={6} maxDistance={20} />
    </Canvas>
  )
}

type ProjectCardProps = {
  scenario: ScenarioModule
  isActive: boolean
  onSelect: () => void
}

function ProjectCard({ scenario, isActive, onSelect }: ProjectCardProps) {
  const rotateX = useSpring(0, { stiffness: 180, damping: 18, mass: 0.6 })
  const rotateY = useSpring(0, { stiffness: 180, damping: 18, mass: 0.6 })

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const relativeX = event.clientX - rect.left
    const relativeY = event.clientY - rect.top
    const x = ((relativeX - rect.width / 2) / (rect.width / 2)) * 10
    const y = ((rect.height / 2 - relativeY) / (rect.height / 2)) * 10
    rotateY.set(x)
    rotateX.set(y)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const camerasLabel = `${numberFormatter.format(scenario.camerasDeployed)} Cameras`
  const layerLabel = getLayerLabel(scenario.layer)

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative w-full h-full rounded-[28px] border p-6 text-left transition-colors ${
        isActive
          ? 'border-cyan-300/80 shadow-[0_0_45px_rgba(34,211,238,0.35)]'
          : 'border-white/10 shadow-none hover:border-white/30'
      }`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d' as CSSProperties['transformStyle'],
        backgroundImage: `linear-gradient(150deg, rgba(2,6,23,0.92), rgba(15,23,42,0.65)), url(${scenario.texture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isActive ? 'opacity-70' : 'opacity-0 group-hover:opacity-40'
        }`}
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(34,211,238,0.4), transparent 55%)',
        }}
      />
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.5em] text-gray-300">
          <span>{scenario.location}</span>
          <span className="text-cyan-200">{scenario.status}</span>
        </div>
        <h3 className="text-2xl font-semibold text-white">{scenario.title}</h3>
        <p className="text-sm text-gray-100 leading-relaxed">{scenario.summary}</p>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-2xl border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold text-white">
            {camerasLabel}
          </span>
          <span className="rounded-2xl border border-white/15 bg-black/20 px-4 py-2 text-xs text-gray-200">
            Layer · {layerLabel}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {scenario.metrics.map((metric) => (
            <span key={metric} className="rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-xs text-gray-100">
              {metric}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  )
}

export default function Visualization() {
  const [activeLayer, setActiveLayer] = useState(layers[0]?.id || 'infra')
  const [activeModule, setActiveModule] = useState(scenarioModules[0]?.id || 'kayan')

  const activeDetails = scenarioModules.find((module) => module.id === activeModule)

  return (
    <div className="w-full overflow-hidden pt-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-5 w-[26rem] h-[26rem] bg-blue-500/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-cyan-500/10 blur-[160px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <p className="text-blue-300 uppercase tracking-[0.6em] text-xs mb-4">Immersive Digital District</p>
          <h1 className="text-5xl md:text-6xl font-bold cyber-text text-white mb-6">Walk the Project in 3D Before Groundwork</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We stack every technology layer—fiber, PTZ, OpsPods, analytics—so clients can enter the scene, trigger scenarios, and measure KPIs before procurement begins.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {kpiStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-blue-500/20 bg-white/5 p-5">
                <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-200 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-8">
        <div className="rounded-[32px] border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-0">
            <div className="h-[520px] rounded-[32px] overflow-hidden">
              <Suspense fallback={<div className="h-full w-full flex items-center justify-center text-white">Loading 3D</div>}>
                <DigitalDistrict activeLayer={activeLayer} activeModule={activeModule} onSelectModule={setActiveModule} />
              </Suspense>
            </div>
            <div className="p-6 lg:p-10 space-y-6 border-t lg:border-l border-white/10">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Layer Focus</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {layers.map((layer) => (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      className={`rounded-2xl border px-4 py-3 text-left transition-all ${
                        activeLayer === layer.id
                          ? 'border-blue-400/60 bg-blue-500/10 text-white'
                          : 'border-white/10 text-gray-300 hover:border-white/30'
                      }`}
                    >
                      <div className="text-sm font-semibold">{layer.label}</div>
                      <p className="text-xs text-gray-400 mt-1">{layer.detail}</p>
                    </button>
                  ))}
                </div>
              </div>
              {activeDetails && (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="text-xs uppercase tracking-[0.4em] text-gray-300">Active Scenario</div>
                  <h3 className="text-2xl font-semibold text-white mt-3">{activeDetails.title}</h3>
                  <p className="text-sm text-blue-200 mb-3">{activeDetails.location}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{activeDetails.summary}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-3 text-center">
                      <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gray-400">Cameras</p>
                      <p className="text-lg font-semibold text-white">{numberFormatter.format(activeDetails.camerasDeployed)}</p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-3 text-center">
                      <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gray-400">Status</p>
                      <p className="text-base font-semibold text-blue-200">{activeDetails.status}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeDetails.metrics.map((metric) => (
                      <span key={metric} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-gray-100">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-cyan-300 uppercase tracking-[0.5em] text-xs mb-3">Scenario Tours</p>
            <h2 className="text-4xl font-bold text-white">Real Projects Inside the Scene</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarioModules.map((scenario) => (
              <div key={scenario.id} style={{ perspective: '1600px' }}>
                <ProjectCard scenario={scenario} isActive={activeModule === scenario.id} onSelect={() => setActiveModule(scenario.id)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-blue-200 uppercase tracking-[0.5em] text-xs mb-3">Technology Layers</p>
            <h2 className="text-4xl font-bold text-white">Stacked from Device to OpsPod</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stackHighlights.map((highlight) => (
              <div key={highlight.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  {highlight.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-blue-300">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-purple-200 uppercase tracking-[0.5em] text-xs mb-3">Client Journey</p>
            <h2 className="text-4xl font-bold text-white">Clients Steer Before Construction</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {journey.map((step, idx) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm uppercase tracking-[0.4em] text-gray-400">Step {idx + 1}</div>
                <h3 className="text-xl font-semibold text-white mt-3">{step.title}</h3>
                <p className="text-sm text-gray-300 mt-3 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="rounded-[32px] border border-cyan-400/40 bg-gradient-to-r from-blue-600/30 via-slate-900 to-cyan-500/20 p-10">
            <h2 className="text-4xl font-bold text-white mb-4">Want a Live Demo?</h2>
            <p className="text-gray-200 text-lg mb-8">
              Share the site plan or reference photos and we will send a WebGL/VR tour showing every layer, KPI, and visitor journey before contracts are signed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 rounded-full bg-white text-slate-900 font-semibold">
                Book an Interactive Session
              </a>
              <a href="/projects" className="px-8 py-4 rounded-full border border-white/40 text-white">
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
