'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Canvas, useLoader } from '@react-three/fiber'
import { Edges, Float, Html, OrbitControls, Stars } from '@react-three/drei'
import {
  HiOutlineBuildingLibrary,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineMapPin,
  HiOutlineCamera,
  HiOutlineChartBarSquare,
  HiOutlineSquares2X2,
  HiOutlineCpuChip,
  HiOutlineServerStack,
} from 'react-icons/hi2'
import { animate, motion, useInView, useSpring } from 'framer-motion'
import { CSSProperties, Suspense, useEffect, useMemo, useRef, useState } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import { TextureLoader } from 'three'

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

type CounterStatProps = {
  value: number
  unit: string
  label: string
  accent: string
}

type DataPulseProps = {
  title: string
  value: string
  detail: string
  trend: string
  trendColor: string
  progress: number
}

const numberFormatter = new Intl.NumberFormat('en-US')
const deriveHeight = (value: number) => 0.35 + Math.log10(value) * 0.08

const heroHighlights = [
  'Toggle infrastructure, mobility, security, and experience layers live',
  'Trigger KPIs, alerts, and traffic overlays before procurement',
  'Invite bilingual operators, investors, and city leaders into the same 3D scene',
]

const kpiStats = [
  { value: 50947, unit: 'Cameras', label: 'Live across mega deployments', accent: 'from-cyan-500/20 via-slate-900 to-slate-950' },
  { value: 52346, unit: 'Devices', label: 'IoT + OT assets streaming to OpsPods', accent: 'from-blue-500/20 via-slate-900 to-slate-950' },
  { value: 2450, unit: 'Sensors', label: 'Thermal, LiDAR, and environmental nodes', accent: 'from-indigo-500/20 via-slate-900 to-slate-950' },
  { value: 400, unit: 'Sites', label: 'Airports, retail, smart city, and energy grids', accent: 'from-emerald-500/20 via-slate-900 to-slate-950' },
]

const layers = [
  {
    id: 'infra',
    label: 'Infrastructure Fabric',
    detail: 'Fiber mesh + OT networks + UPS grids',
    icon: <HiOutlineBuildingLibrary className="text-2xl" />,
    accent: 'from-cyan-500/10 via-slate-900 to-slate-950',
    bullets: ['Carrier-grade fiber mesh', 'Redundant UPS + genset sync', 'Hardened OT switching'],
  },
  {
    id: 'mobility',
    label: 'Mobility Spine',
    detail: 'Transit sensors, ANPR, traffic orchestration',
    icon: <HiOutlineGlobeAlt className="text-2xl" />,
    accent: 'from-amber-500/10 via-slate-900 to-slate-950',
    bullets: ['Autonomous tolling + ticketing', 'LiDAR crowd analytics', 'Real-time ANPR orchestration'],
  },
  {
    id: 'security',
    label: 'Security Stack',
    detail: 'Thermal PTZ, drone shields, incident AI',
    icon: <HiOutlineShieldCheck className="text-2xl" />,
    accent: 'from-purple-500/10 via-slate-900 to-slate-950',
    bullets: ['AI threat detection', 'Perimeter radar fusion', 'Drone incursion countermeasures'],
  },
  {
    id: 'experience',
    label: 'Experience Pods',
    detail: 'Immersive command centers + client walk-throughs',
    icon: <HiOutlineSparkles className="text-2xl" />,
    accent: 'from-emerald-500/10 via-slate-900 to-slate-950',
    bullets: ['LED CAVE pods', 'Dual-language ops playbooks', 'Guided ROI storytelling'],
  },
]

const projectTabs = [{ id: 'all', label: 'All Deployments' }, ...layers.map((layer) => ({ id: layer.id, label: layer.label }))]

const getLayerLabel = (layerId: string) => layers.find((layer) => layer.id === layerId)?.label ?? layerId
const getLayerIcon = (layerId: string): ReactNode => layers.find((layer) => layer.id === layerId)?.icon ?? (
  <span className="text-xl text-cyan-200">⬚</span>
)

const scenarioModules: ScenarioModule[] = [
  {
    id: 'kayan',
    title: 'KAYAN Mega Grid',
    location: 'Saudi Arabia · Smart District',
    status: 'Active',
    summary: 'Transit-centric giga-project core with synchronized PTZ swarms, LiDAR mobility analytics, and bilingual ops.',
    metrics: [`${numberFormatter.format(40000)} cameras deployed`, 'AI threat detection hub', 'Real-time OpsPods with AR twins'],
    color: '#38bdf8',
    glow: '#0ea5e9',
    layer: 'mobility',
    position: [-3.6, 0.42, 1.4],
    footprint: [3.2, 2.2],
    height: deriveHeight(40000),
    camerasDeployed: 40000,
    texture: '/pdf-assets/mti_page26_img03.jpeg',
  },
  {
    id: 'hamra',
    title: 'Al Hamra Retail Spine',
    location: 'Saudi Arabia · Premium Retail',
    status: 'Active',
    summary: 'Immersive domes spanning Red Sea luxury anchors with queue, dwell, and VIP overlays mapped to spend KPIs.',
    metrics: [`${numberFormatter.format(3500)} cameras across anchors`, 'VIP heatmaps + queue AI', 'POS exception sync'],
    color: '#f97316',
    glow: '#fb923c',
    layer: 'experience',
    position: [-0.4, 0.32, -2.1],
    footprint: [2.6, 1.9],
    height: deriveHeight(3500),
    camerasDeployed: 3500,
    texture: '/pdf-assets/mti_page27_img01.jpeg',
  },
  {
    id: 'cairo',
    title: 'Cairo Airport Shield',
    location: 'Egypt · Cairo International',
    status: 'Active',
    summary: 'Airport perimeter, terminal, and runway flow unified with bilingual incident desks and analytics.',
    metrics: [`${numberFormatter.format(700)} aviation cameras`, 'Perimeter + runway coverage', '24/7 incident desk'],
    color: '#a855f7',
    glow: '#c084fc',
    layer: 'security',
    position: [2.4, 0.35, -0.4],
    footprint: [3, 1.7],
    height: deriveHeight(700),
    camerasDeployed: 700,
    texture: '/pdf-assets/mti_page31_img01.jpeg',
  },
  {
    id: 'watanya',
    title: 'Watanya Energy Grid',
    location: 'Kuwait · National Fuel',
    status: 'Active',
    summary: 'Autonomous fueling stations with ruggedized PTZ, LPR capsules, and satellite backhaul across desert logistics.',
    metrics: [`${numberFormatter.format(2500)} ruggedized cameras`, 'Hybrid satellite uplink', 'Remote desert fueling'],
    color: '#22c55e',
    glow: '#4ade80',
    layer: 'infra',
    position: [3.5, 0.33, 2.2],
    footprint: [2.2, 1.5],
    height: deriveHeight(2500),
    camerasDeployed: 2500,
    texture: '/pdf-assets/mti_page32_img02.jpeg',
  },
]

const journey = [
  { title: 'Diagnose', detail: 'Ingest CAD, LiDAR, and live feeds to map risks, choke points, and KPIs.', icon: '🧭' },
  { title: 'Compose', detail: 'Bake shaders, materials, and camera specs into the sandbox with latency overlays.', icon: '🎛️' },
  { title: 'Pilot', detail: 'Clients walk the 3D campus, trigger incidents, and align stakeholders pre-award.', icon: '🛰️' },
  { title: 'Deploy', detail: 'Scene syncs with live ops when rollout starts so teams never leave the twin.', icon: '🚀' },
]

const immersionChips = [
  { label: 'Live Layers', value: '4', detail: 'Infra · Mobility · Security · Experience', icon: <HiOutlineSquares2X2 /> },
  { label: 'KPI Widgets', value: '42', detail: 'Updated every 4 seconds from OpsPods', icon: <HiOutlineChartBarSquare /> },
  { label: 'Scenario Types', value: '9', detail: 'Airports · Retail · Smart Cities · Energy', icon: <HiOutlineServerStack /> },
  { label: 'OpsPods Online', value: '12', detail: 'Egypt · KSA · UAE · Kuwait', icon: <HiOutlineCpuChip /> },
]

const dataStreams: DataPulseProps[] = [
  {
    title: 'Thermal · PTZ Coverage',
    value: '96% uptime',
    detail: 'Perimeter availability across giga projects',
    trend: '+1.8% QoQ',
    trendColor: 'text-emerald-400',
    progress: 96,
  },
  {
    title: 'AI Alerts Correlated',
    value: '18,400 / mo',
    detail: 'Incidents triaged inside OpsPods',
    trend: '-12% false positives',
    trendColor: 'text-cyan-300',
    progress: 82,
  },
  {
    title: 'Digital Twin Sessions',
    value: '740 hrs',
    detail: 'Client walkthrough hours per quarter',
    trend: '+32% adoption',
    trendColor: 'text-emerald-300',
    progress: 74,
  },
  {
    title: 'Sensor Fusion Nodes',
    value: '2,450',
    detail: 'Thermal, LiDAR, ANPR, weather feeds',
    trend: '+210 this year',
    trendColor: 'text-sky-300',
    progress: 68,
  },
]

function CounterStat({ value, unit, label, accent }: CounterStatProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`rounded-3xl border border-white/10 bg-gradient-to-br ${accent} p-6 shadow-[0_20px_50px_rgba(2,6,23,0.6)]`}
    >
      <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Metric</p>
      <p className="mt-3 text-4xl font-bold text-white">
        {numberFormatter.format(displayValue)} <span className="text-base font-semibold text-blue-200">{unit}</span>
      </p>
      <p className="mt-2 text-sm text-blue-100/80 leading-relaxed">{label}</p>
    </motion.div>
  )
}

function DataPulseCard({ title, value, detail, trend, trendColor, progress }: DataPulseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
    >
      <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gray-400">{title}</p>
      <p className="text-3xl font-semibold text-white mt-4">{value}</p>
      <p className="text-sm text-gray-300 mt-2 leading-relaxed">{detail}</p>
      <div className="mt-4 h-2 rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </div>
      <p className={`text-xs font-semibold mt-3 ${trendColor}`}>{trend}</p>
    </motion.div>
  )
}

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
  const moduleTextures = useLoader(TextureLoader, modules.map((module) => module.texture))

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
      {modules.map((module, index) => {
        const baseHeight = module.height
        const heightMultiplier = module.id === activeModule ? 1.85 : module.layer === activeLayer ? 1.3 : 1
        const height = baseHeight * heightMultiplier
        const centerY = module.position[1] + (height - baseHeight) / 2
        const emissive = module.id === activeModule || module.layer === activeLayer ? module.glow : '#1f2937'
        const labelY = centerY + height / 2 + 0.35
        const texture = moduleTextures[index]
        return (
          <group key={module.id}>
            <mesh
              position={[module.position[0], module.position[1] - 0.05, module.position[2]]}
              rotation={[-Math.PI / 2.1, 0, 0]}
              onPointerDown={() => onSelectModule(module.id)}
              onPointerOver={() => onSelectModule(module.id)}
            >
              <planeGeometry args={[module.footprint[0] * 1.8, module.footprint[1] * 1.8]} />
              <meshStandardMaterial
                map={texture}
                color="#ffffff"
                transparent
                opacity={module.id === activeModule ? 0.95 : 0.7}
                metalness={0.25}
                roughness={0.6}
              />
            </mesh>
            <Float
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
          </group>
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
  const layerIcon = getLayerIcon(scenario.layer)

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative flex h-full w-full flex-col rounded-[28px] border p-6 text-left transition-all duration-300 ${
        isActive ? 'border-cyan-300/80 shadow-[0_0_55px_rgba(34,211,238,0.35)]' : 'border-white/10 hover:border-white/30'
      }`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d' as CSSProperties['transformStyle'],
        backgroundImage: 'linear-gradient(160deg, rgba(2,6,23,0.95), rgba(15,23,42,0.75))',
      }}
    >
      <div className="absolute inset-0 pointer-events-none rounded-[28px] bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
      <div className="relative z-10 flex flex-col gap-5">
        <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={scenario.texture}
            alt={`${scenario.title} visualization`}
            fill
            sizes="(min-width: 1280px) 420px, (min-width: 768px) 50vw, 90vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-slate-900/30 to-slate-950/80" />
          <div className="absolute inset-x-3 top-3 flex flex-wrap items-center gap-2 text-[0.55rem] uppercase tracking-[0.4em] text-white/80">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-[0.55rem] font-semibold">
              <HiOutlineMapPin className="text-base" />
              {scenario.location}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-3 py-1 text-[0.55rem] font-semibold text-slate-900">
              {scenario.status}
            </span>
          </div>
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-black/50 px-4 py-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/40 text-white">
                {layerIcon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-200">{layerLabel}</p>
                <h3 className="text-2xl font-semibold text-white">{scenario.title}</h3>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900">
              <HiOutlineCamera className="text-base" />
              {camerasLabel}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-100 leading-relaxed">{scenario.summary}</p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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

function TimelineStep({ step, index }: { step: (typeof journey)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative rounded-3xl border border-white/10 bg-white/5 p-6"
    >
      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-gray-400">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-base font-semibold text-blue-200">{index + 1}</span>
        <span>Step</span>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="text-3xl">{step.icon}</span>
        <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
      </div>
      <p className="mt-4 text-sm text-gray-300 leading-relaxed">{step.detail}</p>
      <div className="absolute -left-4 top-10 hidden h-1 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 md:block" />
    </motion.div>
  )
}

export default function VisualizationClient() {
  const [activeLayer, setActiveLayer] = useState(layers[0]?.id || 'infra')
  const [activeModule, setActiveModule] = useState(scenarioModules[0]?.id || 'kayan')
  const [projectTab, setProjectTab] = useState('all')

  const activeDetails = scenarioModules.find((module) => module.id === activeModule)
  const activeTexture = activeDetails?.texture
  const filteredProjects = useMemo(() => {
    if (projectTab === 'all') return scenarioModules
    return scenarioModules.filter((module) => module.layer === projectTab)
  }, [projectTab])

  return (
    <div className="relative w-full overflow-hidden bg-slate-950 text-white scroll-smooth">
      <section id="overview" className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-950/90 to-blue-950/40 py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 left-5 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-[200px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-12 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6 text-center"
          >
            <p className="text-xs uppercase tracking-[0.6em] text-blue-200">Immersive Digital District</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold cyber-text text-white">Walk the mission-critical project before groundwork.</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              MTI renders every layer—fiber, PTZ, OpsPods, analytics, and experience pods—so leaders can review KPIs, incidents, and ROI inside a living 3D sandbox.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
              <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-3">Control Narrative</p>
              <ul className="space-y-3 text-sm text-gray-200">
                {heroHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/60 to-slate-800/40 p-6 flex flex-col justify-between">
              <p className="text-sm uppercase tracking-[0.4em] text-blue-200 mb-4">Live Simulation</p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-semibold text-white">Layer Sync</p>
                  <p className="mt-2 text-gray-300">OpsPods react to every scene toggle, instantly updating KPI decks.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-semibold text-white">Stakeholder Mode</p>
                  <p className="mt-2 text-gray-300">Switch between operator, investor, and regulator journeys with one tap.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {kpiStats.map((stat) => (
              <CounterStat key={stat.unit} value={stat.value} unit={stat.unit} label={stat.label} accent={stat.accent} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dataStreams.map((stream) => (
              <DataPulseCard key={stream.title} {...stream} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative border-b border-white/10 bg-slate-950/90 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center space-y-4"
          >
            <p className="text-xs uppercase tracking-[0.6em] text-cyan-200">Active Scenarios</p>
            <h2 className="text-4xl font-bold">Live modules streaming from the immersive deck</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Drag, rotate, and select modules to see the KPIs, alerts, and delivery readiness per project.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-950/80 to-slate-900/70 shadow-[0_50px_140px_rgba(10,20,40,0.9)] overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                {activeTexture && (
                  <Image
                    src={activeTexture}
                    alt="Scenario cinematic backdrop"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-35 mix-blend-screen blur-sm"
                    priority={false}
                  />
                )}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-32 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-[180px]" />
                  <div className="absolute bottom-[-20rem] left-[-10rem] h-[36rem] w-[36rem] rounded-full bg-blue-600/10 blur-[200px]" />
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 60%)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
                </div>
              </div>
              <div className="absolute inset-x-6 top-6 z-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-xs uppercase tracking-[0.4em] text-slate-200">
                <span>Immersive 3D District</span>
                <span className="text-cyan-200">Layer · {getLayerLabel(activeLayer)}</span>
              </div>
              <div className="relative h-[640px] sm:h-[780px] lg:h-[920px] xl:h-[1040px] 2xl:h-[1180px]">
                <Suspense fallback={<div className="flex h-full w-full items-center justify-center text-white">Loading 3D</div>}>
                  <DigitalDistrict activeLayer={activeLayer} activeModule={activeModule} onSelectModule={setActiveModule} />
                </Suspense>
              </div>
              {activeDetails && (
                <div className="absolute inset-x-6 bottom-6 z-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/45 px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/30 to-blue-500/40 text-white">
                      {getLayerIcon(activeDetails.layer)}
                    </div>
                    <div>
                      <p className="text-[0.55rem] uppercase tracking-[0.5em] text-blue-200">Active Module</p>
                      <p className="text-2xl font-semibold text-white">{activeDetails.title}</p>
                      <p className="text-xs text-blue-100">{activeDetails.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-100">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1">
                      <HiOutlineCamera className="text-base" />
                      {numberFormatter.format(activeDetails.camerasDeployed)} Cameras
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1">
                      {activeDetails.status}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1">
                      {getLayerLabel(activeDetails.layer)}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-6 rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-900/80 via-slate-900 to-slate-950 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Layer Focus</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {layers.map((layer) => (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      className={`group relative overflow-hidden rounded-2xl border px-4 py-4 text-left backdrop-blur transition-all shadow-[0_20px_55px_rgba(3,7,18,0.7)] ${
                        activeLayer === layer.id
                          ? 'border-cyan-400/70 bg-gradient-to-br from-cyan-500/15 via-cyan-500/5 to-transparent text-white'
                          : 'border-white/10 text-gray-300 hover:border-white/30 hover:bg-white/5'
                      }`}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/5 to-transparent" />
                      <div className="relative flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-white/10 to-white/5 text-cyan-200 shadow-[0_10px_35px_rgba(8,47,73,0.6)]">
                          {layer.icon}
                        </span>
                        <div>
                          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-blue-200">Layer</p>
                          <span className="text-base font-semibold">{layer.label}</span>
                        </div>
                      </div>
                      <p className="relative mt-2 text-xs text-gray-300">{layer.detail}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {immersionChips.map((chip) => (
                  <div
                    key={chip.label}
                    className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/40 to-slate-950/70 p-5 shadow-[0_25px_60px_rgba(2,6,23,0.8)]"
                  >
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/10 to-transparent rounded-3xl" />
                    <div className="relative flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-200 shadow-[0_10px_35px_rgba(14,165,233,0.4)]">
                        {chip.icon}
                      </span>
                      <p className="text-[0.6rem] uppercase tracking-[0.4em] text-gray-300">{chip.label}</p>
                    </div>
                    <p className="relative mt-3 text-3xl font-semibold text-white">{chip.value}</p>
                    <p className="relative text-xs text-gray-300 mt-1">{chip.detail}</p>
                  </div>
                ))}
              </div>
              {activeDetails && (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-5">
                  <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/15">
                    <Image
                      src={activeDetails.texture}
                      alt={`${activeDetails.title} immersive preview`}
                      fill
                      sizes="(min-width: 1024px) 360px, 80vw"
                      className="object-cover"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-slate-900/20 to-slate-950/80" />
                    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                      <div>
                        <p className="text-[0.55rem] uppercase tracking-[0.5em] text-blue-200">Active Scenario</p>
                        <h3 className="text-xl font-semibold text-white">{activeDetails.title}</h3>
                        <p className="text-xs text-blue-100">{activeDetails.location}</p>
                      </div>
                      <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-900">{activeDetails.status}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">{activeDetails.summary}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-3 text-center">
                      <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gray-400">Cameras</p>
                      <p className="text-lg font-semibold text-white">{numberFormatter.format(activeDetails.camerasDeployed)}</p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-3 text-center">
                      <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gray-400">Layer</p>
                      <p className="text-base font-semibold text-cyan-200">{getLayerLabel(activeDetails.layer)}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
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
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              {projectTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectTab(tab.id)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                    projectTab === tab.id ? 'border-cyan-400 bg-cyan-500/10 text-white' : 'border-white/15 text-gray-300 hover:border-white/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((scenario) => (
                <div key={scenario.id} style={{ perspective: '1600px' }}>
                  <ProjectCard scenario={scenario} isActive={activeModule === scenario.id} onSelect={() => setActiveModule(scenario.id)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="layers" className="border-b border-white/5 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center space-y-3"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-blue-200">Technology Layers</p>
            <h2 className="text-4xl font-bold">Device to experience, rendered as cards</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Each layer carries its own KPIs, icons, and badges so teams instantly see ownership across the stack.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {layers.map((layer) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`rounded-[32px] border border-white/10 bg-gradient-to-br ${layer.accent} p-8`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{layer.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-300">Layer</p>
                    <h3 className="text-2xl font-semibold text-white">{layer.label}</h3>
                    <p className="text-sm text-gray-200">{layer.detail}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {layer.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-gray-100">
                      {bullet}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="border-b border-white/5 bg-slate-950/80 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-purple-200">Client Journey</p>
            <h2 className="text-4xl font-bold">Timeline from diagnosis to live ops</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Teams co-pilot the environment as a timeline, making approvals feel like a guided mission.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {journey.map((step, index) => (
              <TimelineStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-slate-950 to-slate-950" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-[36px] border border-cyan-400/40 bg-gradient-to-r from-blue-600/40 via-slate-950 to-cyan-500/30 p-10 text-center space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-200">Call to Action</p>
            <h2 className="text-4xl font-bold">Request a live, guided demo</h2>
            <p className="text-gray-200 text-lg">
              Share your site plan or reference imagery and receive a WebGL or VR tour showing every KPI, route, and operator perspective before contracts are signed.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-10 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-blue-900/40 transition hover:scale-105"
              >
                Book Interactive Session
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-white/40 px-10 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Link
        href="/contact"
        className="fixed bottom-6 right-4 z-50 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-cyan-500/40 transition hover:scale-105"
      >
        Book Live Demo
      </Link>
    </div>
  )
}
