'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 'kayan',
    title: 'Strategic Leadership – KAYAN',
    category: 'Defense',
    location: 'New Administrative Capital, Egypt',
    image: '/pdf-assets/mti_page25_img01.jpeg',
    investment: 'National Command Infrastructure',
    summary:
      'Two-phase delivery of Egypt’s strategic leadership compound covering 20,000 acres with full command-and-control capabilities.',
    highlights: [
      'Coverage spreads across fences, gates, buildings, warehouses, parking, and public-service areas',
      'Systems integrated with IoT platforms, BMS, GIS, and physical security layers',
      'Delivered alongside national defense agencies with phased handovers',
    ],
    metrics: [
      { label: 'CCTV', value: '40,000' },
      { label: 'Access Points', value: '27,000' },
      { label: 'ANPR Lanes', value: '60' },
      { label: 'Radars', value: '11' },
      { label: 'Multi-Sensors', value: '11' },
    ],
  },
  {
    id: 'al-hamra',
    title: 'Al Hamra Port Security Enhancement',
    category: 'Ports',
    location: 'Mediterranean Coast, Egypt',
    image: '/pdf-assets/mti_page27_img01.jpeg',
    investment: 'Port Security Modernization',
    summary:
      'Securing the 2,800 m border fence, tank farms, administrative buildings, and accommodations through multi-layered detection.',
    highlights: [
      'Marine and ground radars with ranges up to 4 km plus AIS antenna up to 10 km',
      'Gates equipped with road blockers, bollards, sliding doors, turnstiles, and RFID readers',
      'Electric deterrent fence and centralized monitoring for every perimeter event',
    ],
    metrics: [
      { label: 'Outdoor Cameras', value: '81' },
      { label: 'PTZ Cameras', value: '40' },
      { label: 'Multi-Sensor Units', value: '3' },
      { label: 'LPR Cameras', value: '4' },
      { label: 'Security Gates', value: '8' },
    ],
  },
  {
    id: 'cairo-airport',
    title: 'Cairo International Airport & EgyptAir',
    category: 'Airports',
    location: 'Cairo, Egypt',
    image: '/pdf-assets/mti_page29_img01.jpeg',
    investment: 'Aviation Security & Operations',
    summary:
      'Integrated security for Cairo International Airport, EgyptAir offices, and Borg El Arab Airport.',
    highlights: [
      '4,000 m perimeter secured with day/night vision cameras and mobile units',
      '700 cameras live today with 800 more under construction plus 1,800 for EgyptAir offices',
      '19 multi-sensor cameras, 14 ground radars, and 54 LPR cameras for roadway coverage',
    ],
    metrics: [
      { label: 'Active Cameras', value: '700+' },
      { label: 'Expansion Cameras', value: '800' },
      { label: 'EgyptAir Cameras', value: '1,800' },
      { label: 'Ground Radars', value: '14' },
      { label: 'LPR Units', value: '54' },
    ],
  },
  {
    id: 'burj-al-arab',
    title: 'Burj Al Arab Airport Security & Safety',
    category: 'Airports',
    location: 'Alexandria, Egypt',
    image: '/pdf-assets/mti_page31_img01.jpeg',
    investment: 'Civil Aviation Safety',
    summary:
      'Complete CCTV, access control, and fire alarm modernization for Burj Al Arab Airport.',
    highlights: [
      '726 cameras provide 100% visual coverage of the airport',
      '52 access control points manage secure movement across terminals',
      '1,500 fire alarm sensors distributed throughout passenger and operations zones',
    ],
    metrics: [
      { label: 'Cameras', value: '726' },
      { label: 'Access Points', value: '52' },
      { label: 'Fire Sensors', value: '1,500' },
    ],
  },
  {
    id: 'watanya',
    title: 'National Roads Company – WATANYA',
    category: 'Transportation',
    location: 'Eight Expressways, Egypt',
    image: '/pdf-assets/mti_page32_img02.jpeg',
    investment: 'Toll Gates Management',
    summary:
      'Multi-phase rollout enhancing toll operations, safety, and traffic management across eight expressways.',
    highlights: [
      'Advanced ticketing and collection for seamless traveler experiences',
      'Real-time monitoring across multiple collection stations and control centers',
      'Integrated access control and strategic checkpoints throughout the network',
    ],
    metrics: [
      { label: 'Road Cameras', value: '900' },
      { label: 'LPR Cameras', value: '400' },
      { label: 'Microwave Links', value: '160' },
      { label: 'Strategic Points', value: '400' },
    ],
  },
  {
    id: 'suez-tunnels',
    title: 'Suez Canal Tunnels – Payment & Security',
    category: 'Transportation',
    location: 'Ismailia · Port Said, Egypt',
    image: '/pdf-assets/mti_page33_img05.jpeg',
    investment: 'Tunnel Operations Upgrade',
    summary:
      'AI-enabled monitoring, access control, automatic vehicle identification, and ticketing to modernize tunnel toll stations.',
    highlights: [
      'Enhanced safety and traffic flow for high-volume tunnel corridors',
      'AI vehicle classification linked to e-payment and subscription plans',
      'Improved passenger experience via automated ticketing and monitoring',
    ],
    metrics: [
      { label: 'Focus', value: 'Tolling · Access · AI Classification' },
      { label: 'Objective', value: 'Security & Efficiency' },
    ],
  },
  {
    id: 'olympic-city',
    title: 'Egyptian Olympic City',
    category: 'Sports',
    location: 'New Administrative Capital, Egypt',
    image: '/pdf-assets/mti_page34_img02.jpeg',
    investment: 'Mega Sports City Security',
    summary:
      'Safe and secure environment for visitors and athletes through pervasive surveillance and IoT-led management.',
    highlights: [
      '6000 cameras provide comprehensive coverage of venues and fan zones',
      '400 access control points plus 40 LPR cameras for vehicle management',
      'IoT and GIS platforms connect devices, maintenance, and operations systems',
    ],
    metrics: [
      { label: 'Cameras', value: '6,000' },
      { label: 'Access Points', value: '400' },
      { label: 'LPR Cameras', value: '40' },
    ],
  },
  {
    id: 'suez-canal-security',
    title: 'Suez Canal Security Project',
    category: 'Defense',
    location: 'Suez Canal, Egypt',
    image: '/pdf-assets/mti_page35_img02.jpeg',
    investment: 'Navigation Channel Protection',
    summary:
      'Supply and operation of electro-optical surveillance, radars, sensors, and communication systems to secure the navigation channel.',
    highlights: [
      'Integrated sensor suites for maritime situational awareness',
      'High-availability communications linking field devices and command centers',
      'Designed for the Suez Canal Authority and naval stakeholders',
    ],
    metrics: [
      { label: 'Focus', value: 'Electro-Optical · Radars · Sensors' },
      { label: 'Scope', value: 'Navigation Channel' },
    ],
  },
]

const categories = ['All', 'Defense', 'Ports', 'Airports', 'Transportation', 'Sports']

const outcomeStats = [
  { label: 'Major Programs', value: '8', detail: 'documented from the MTI profile' },
  { label: 'Cameras Deployed', value: '50,000+', detail: 'across defense, aviation, and sports cities' },
  { label: 'Radars & Sensors', value: '25+', detail: 'marine, ground, and multi-sensor units' },
  { label: 'National Corridors', value: '8 expressways', detail: 'modernized through WATANYA & tunnel projects' },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 left-0 w-[32rem] h-[32rem] bg-blue-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-cyan-500/10 blur-[120px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 space-y-6 text-center">
          <p className="text-blue-300 uppercase tracking-[0.4em] text-xs mb-4">Success Stories · MTI Group</p>
          <h1 className="text-4xl md:text-6xl font-bold cyber-text mb-6">
            Real Programs Securing Egypt&apos;s Critical Infrastructure
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Every project listed here is sourced directly from the MTI Group corporate profile dated 15 September 2025. Transforming national security, commerce, and mobility across MENA.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-slate-900/60 to-slate-950 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-400 mb-6">Filter by Category</p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 transform ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-blue-400 shadow-lg shadow-blue-500/40 scale-105'
                    : 'border-slate-600 text-slate-300 hover:border-blue-400/60 hover:text-blue-200 hover:bg-blue-500/5 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/40 transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 hover:-translate-y-4 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent transition-all duration-500 rounded-3xl" />
                <div className="relative overflow-hidden h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={960}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-xs font-bold px-4 py-2 rounded-full text-white shadow-lg shadow-blue-500/40">
                    {project.category}
                  </span>
                </div>
                <div className="p-8 flex flex-col gap-5 flex-1 relative z-10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2">{project.location}</p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors mb-2">{project.title}</h3>
                    <p className="text-sm text-blue-200 font-semibold">{project.investment}</p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">{project.summary}</p>
                  <ul className="space-y-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="text-blue-400 font-bold flex-shrink-0">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {project.metrics.map((metric) => (
                      <div key={`${project.id}-${metric.label}`} className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl p-4 border border-blue-400/30 text-center group-hover:border-blue-300/50 group-hover:bg-blue-900/40 transition-all">
                        <p className="text-lg font-bold text-blue-100">{metric.value}</p>
                        <p className="text-xs text-slate-400 mt-1 group-hover:text-slate-300 transition-colors">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-700/50">
                    <Link href="/contact" className="group/btn px-4 py-2 rounded-full text-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg shadow-blue-900/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 inline-block">
                      Discuss Similar Project
                    </Link>
                    <Link href="/services" className="group/btn px-4 py-2 rounded-full text-sm border-2 border-blue-400/50 text-blue-200 font-semibold transition-all duration-300 hover:border-blue-300 hover:bg-blue-500/10 hover:text-white hover:scale-105 inline-block">
                      View Services
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-900/60 to-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold cyber-text mb-4">Key Outcomes</h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">Snapshot of what these projects delivered on the ground across Egypt and the MENA region.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {outcomeStats.map((stat) => (
              <div key={stat.label} className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/40 p-8 text-center transition-all duration-500 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-transparent transition-all duration-500 rounded-3xl" />
                <div className="relative z-10">
                  <p className="text-3xl font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-[0.3em] font-semibold mb-3 group-hover:text-slate-300 transition-colors">{stat.label}</p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{stat.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
