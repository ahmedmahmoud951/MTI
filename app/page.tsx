'use client'

import Link from 'next/link'
import Image from 'next/image'

const heroMetrics = [
  { label: 'Established', value: '1969' },
  { label: 'Annual Turnover', value: '5B+ EGP' },
  { label: 'Regional Footprint', value: '6+ Countries' },
  { label: 'Delivery Team', value: '1,000+ Specialists' },
]

const stats = [
  { number: '1969', label: 'Established', description: 'Founded by Mr. Omran Awadein in Cairo, Egypt' },
  { number: '5B+ EGP', label: 'Annual Turnover', description: 'Group revenue exceeding 5 Billion Egyptian Pounds' },
  { number: '1,000+', label: 'Employees', description: '60% engineering talent with 25% dedicated sales teams' },
  { number: '6+ Countries', label: 'Regional Footprint', description: 'Extended networks serving markets across MENA' },
]

const visionMission = [
  {
    title: 'Our Vision',
    content: 'Empower people by bringing inspiration and innovation to their lives, enabling them to live better and easier.',
  },
  {
    title: 'Our Mission',
    content: 'Be the #1 technology company in MENA within five years by delivering solutions that advance humanity and make everyday life effortless.',
  },
]

const highlights = [
  'Headquarters in Cairo, Egypt with more than five decades of regional presence',
  'Supplier of national security and enterprise communication solutions',
  'Annual group turnover exceeding 5 Billion Egyptian Pounds',
  '1,000+ employees with 60% engineering and 25% sales specialists',
  'Extended networks covering more than six countries and 3,000+ retailers',
]

const segments = ['SOHO & SME', 'LME', 'Wholesale', 'Retail', 'Key Accounts', 'End Users']

const achievements = [
  { metric: '97,500', label: 'Network Ports Delivered', value: 'USD 6,265,000' },
  { metric: '16,900', label: 'Processors Configured', value: 'USD 6,972,000' },
  { metric: '12,500', label: 'Screens & Consoles', value: 'USD 7,815,000' },
  { metric: '159,000', label: 'Terabytes Installed', value: 'USD 8,400,000' },
  { metric: '2,925', label: 'Units Commissioned', value: 'USD 9,637,500' },
  { metric: '97,650', label: 'Terminals Installed', value: 'USD 13,467,000' },
  { metric: '15,600', label: 'Kilometers of Cabling', value: 'USD 13,785,000' },
  { metric: '313,200', label: 'Surveillance Devices', value: 'USD 65,950,000' },
  { metric: 'Smart Cities & Ticketing', label: 'Integrated Smart Solutions', value: 'USD 11,400,000' },
]

const operations = [
  {
    icon: '🎥',
    title: 'CCTV Surveillance',
    description: 'End-to-end surveillance deployments ranging from standard facilities to highly sophisticated campuses.',
  },
  {
    icon: '🔐',
    title: 'Access Control',
    description: 'Advanced physical and electronic access control built with global technology partners.',
  },
  {
    icon: '🏙️',
    title: 'Smart & Safe Cities',
    description: 'Nation-scale programs including Egypt’s first Smart and Safe City for ACUD.',
  },
  {
    icon: '🛡️',
    title: 'Perimeter Security',
    description: 'Multi-sensor perimeter defense combining radar, long-range cameras, and thermal imaging.',
  },
  {
    icon: '⚓',
    title: 'Port Security',
    description: 'Sea and air port solutions that lower risk and elevate situational awareness.',
  },
  {
    icon: '🧠',
    title: 'Video Analytics',
    description: 'AI-driven facial, vehicle, and weapon detection to elevate incident response.',
  },
  {
    icon: '🚦',
    title: 'Intelligent Traffic & Tolling',
    description: 'Integrated tolling, ticketing, and parking platforms with in-house ANPR/LPR engines.',
  },
  {
    icon: '🖥️',
    title: 'Cyber Security',
    description: 'Comprehensive endpoint, application, network, and OT protection portfolios.',
  },
  {
    icon: '🔗',
    title: 'Technology Integration',
    description: 'Concise, scalable integration across diverse platforms and mission-critical systems.',
  },
]

const fundamentals = [
  { title: 'Accountability', description: 'Greater transparency and service quality to meet evolving civic needs.' },
  { title: 'Collaboration', description: 'Shared resources and synchronized operations across agencies.' },
  { title: 'Connectivity', description: 'Tight integration between operational technologies and IT systems.' },
  { title: 'Sustainability', description: 'Lower total cost of ownership through efficient, productive systems.' },
  { title: 'Intelligence', description: 'Data-led decision making for proactive urban management.' },
  { title: 'Resilience', description: 'Contingency-ready infrastructure that keeps critical services online.' },
]



export default function Home() {
  return (
    <>
      <main className="bg-slate-950 text-white">
      <section className="relative border-b border-slate-800/50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-cyan-900/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/80 shadow-2xl shadow-blue-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <Image
                src="/1659540133081.jfif"
                alt="MTI Group headquarters"
                width={1920}
                height={1080}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                priority
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 cyber-text">
                    MTI Engineering Solutions
                  </h1>
                  <p className="text-lg text-blue-200">
                    Precision security, communications, and smart city programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-slate-800/30 bg-gradient-to-r from-slate-900/50 via-slate-950 to-slate-900/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-2 gap-8">
            {heroMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className="group relative rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-8 text-center shadow-lg shadow-slate-900/50 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:border-blue-500/50 hover:scale-105 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <p className="text-4xl font-bold text-white mb-2 transition-transform duration-300 group-hover:scale-110">
                    {metric.value}
                  </p>
                  <p className="text-sm uppercase tracking-wider text-blue-300 font-medium">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-slate-800/30 bg-gradient-to-b from-slate-950 to-slate-900/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-transparent to-blue-900/5"></div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.3fr,0.7fr]">
          <div className="space-y-8">
            {visionMission.map((item, index) => (
              <div
                key={item.title}
                className="group relative rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-10 shadow-xl shadow-slate-900/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:border-blue-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <h3 className="mb-4 text-3xl font-bold text-blue-200 cyber-text transition-all duration-300 group-hover:text-blue-100 group-hover:scale-105">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed transition-all duration-300 group-hover:text-slate-200">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="group relative rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-10 shadow-xl shadow-slate-900/30 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:border-cyan-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 cyber-text transition-all duration-300 group-hover:text-cyan-100 group-hover:scale-105">
                Operational Highlights
              </h3>
              <p className="mb-8 text-slate-400 text-base transition-all duration-300 group-hover:text-slate-300">
                Consistent delivery against strategic programs across MENA.
              </p>
              <ul className="space-y-5 text-slate-200">
                {highlights.map((highlight, index) => (
                  <li key={highlight} className="flex items-start gap-3 leading-relaxed hover:bg-slate-800/30 p-3 rounded-lg transition-all duration-300 hover:scale-105">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 transition-all duration-300 group-hover/item:bg-blue-300 group-hover/item:scale-125"></div>
                    <span className="transition-all duration-300 group-hover/item:text-blue-200">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-slate-800/30 bg-gradient-to-b from-slate-900/30 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-blue-900/5"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-8 shadow-lg shadow-slate-900/50 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:border-purple-500/50 hover:scale-105 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10 text-center">
                  <p className="text-4xl font-bold text-white mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-100">
                    {stat.number}
                  </p>
                  <p className="text-blue-200 font-semibold text-lg mb-2 transition-all duration-300 group-hover:text-purple-200">
                    {stat.label}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed transition-all duration-300 group-hover:text-slate-300">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-slate-800/30 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/5 via-transparent to-orange-900/5"></div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div
            className="group relative rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-10 shadow-xl shadow-slate-900/30 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <h2
                className="mb-6 text-4xl font-bold text-white cyber-text"
              >
                Market Segments
              </h2>
              <p
                className="mb-8 text-slate-300 text-lg leading-relaxed"
              >
                Tailored commercial structures and service models for diverse government and enterprise partners.
              </p>
              <div
                className="mb-10 flex flex-wrap gap-4"
              >
                {segments.map((segment, index) => (
                  <span
                    key={segment}
                    className="rounded-full border border-blue-500/50 px-5 py-3 text-sm text-blue-200 hover:border-blue-400 hover:text-white transition-all duration-300 hover:bg-blue-500/20"
                  >
                    {segment}
                  </span>
                ))}
              </div>
              <div
                className="rounded-2xl border border-blue-400/40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8"
              >
                <p className="text-sm uppercase tracking-wider text-blue-200 mb-2">Distribution Reach</p>
                <p className="text-4xl font-bold text-white mb-2">3,000+ Retailers</p>
                <p className="text-blue-100 text-base">Directly connected to MTI&apos;s nationwide logistics and service network.</p>
              </div>
            </div>
          </div>

          <div
            className="group relative rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-10 shadow-xl shadow-slate-900/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <h2
                className="mb-8 text-4xl font-bold text-white cyber-text"
              >
                Recent Achievements
              </h2>
              <div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                {achievements.map((item, index) => (
                  <div
                    key={item.label + item.metric}
                    className="group relative rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-6 shadow-md shadow-slate-900/50 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:border-red-500/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <div className="relative z-10">
                      <p
                        className="text-3xl font-bold text-white mb-2"
                      >
                        {item.metric}
                      </p>
                      <p
                        className="text-sm font-semibold text-blue-200 mb-1"
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-sm text-slate-400"
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-slate-800/30 bg-gradient-to-b from-slate-900/30 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-transparent to-teal-900/5"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div
            className="mb-16 text-center"
          >
            <h2
              className="text-5xl font-bold text-white mb-4 cyber-text"
            >
              Core Domains
            </h2>
            <p
              className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Integrated capabilities covering surveillance, mobility, infrastructure security, and cyber resilience.
            </p>
          </div>
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {operations.map((operation, index) => (
              <div
                key={operation.title}
                className="group relative rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-8 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-500 hover:border-indigo-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div
                    className="mb-6 text-5xl text-center"
                  >
                    {operation.icon}
                  </div>
                  <h3
                    className="mb-4 text-2xl font-bold text-white text-center"
                  >
                    {operation.title}
                  </h3>
                  <p
                    className="text-slate-400 text-center leading-relaxed"
                  >
                    {operation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-slate-900/10"></div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {fundamentals.map((item, index) => (
              <div
                key={item.title}
                className="group relative rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-8 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-500/20 transition-all duration-500 hover:border-slate-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <h3
                    className="text-xl font-bold text-white mb-3"
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-slate-400 leading-relaxed"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="group relative rounded-3xl border border-slate-700/50 bg-gradient-to-br from-blue-600/20 via-slate-900/80 to-slate-950 p-12 text-center shadow-2xl shadow-slate-900/50 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <p
                className="mb-4 text-sm uppercase tracking-wider text-blue-200 font-medium"
              >
                Partner with MTI
              </p>
              <h2
                className="mb-6 text-4xl font-bold text-white cyber-text"
              >
                Deliver bold infrastructure programs with confidence
              </h2>
              <p
                className="mb-10 text-slate-200 text-lg leading-relaxed"
              >
                Engage the MTI engineering, delivery, and service ecosystem to power national security, smart mobility, and
                digital infrastructure initiatives.
              </p>
              <div
                className="flex flex-wrap justify-center gap-6"
              >
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-900/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
                >
                  Start a Project
                </Link>
                <Link
                  href="/projects"
                  className="rounded-full border-2 border-blue-400 px-8 py-4 font-semibold text-blue-100 transition-all duration-300 hover:border-blue-300 hover:text-white hover:bg-blue-500/10 hover:scale-105"
                >
                  See Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}
