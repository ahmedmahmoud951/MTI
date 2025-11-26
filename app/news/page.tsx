'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const articles = [
    {
      id: 1,
      title: 'AI Revolutionizes Predictive Maintenance in Industrial Settings',
      category: 'AI & Machine Learning',
      date: 'Nov 20, 2024',
      author: 'Dr. Ahmed Hassan',
      readTime: '8 min',
      image: '🤖',
      excerpt: 'Discover how our advanced AI models are reducing equipment downtime by up to 50% and saving millions in maintenance costs.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['AI', 'IoT', 'Industrial', 'Predictive Analytics'],
    },
    {
      id: 2,
      title: 'Digital Twin Technology Transforms Manufacturing Efficiency',
      category: 'Digital Twin',
      date: 'Nov 18, 2024',
      author: 'Eng. Sarah Johnson',
      readTime: '6 min',
      image: '🌐',
      excerpt: 'Learn how digital twins enable real-time optimization and virtual testing of production lines before implementation.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Digital Twin', 'Manufacturing', 'Simulation', 'Industry 4.0'],
    },
    {
      id: 3,
      title: 'IoT Mesh Networks: The Future of Connectivity',
      category: 'IoT Solutions',
      date: 'Nov 15, 2024',
      author: 'Dr. Khalid Al-Rashid',
      readTime: '7 min',
      image: '📡',
      excerpt: 'Explore how self-healing mesh networks are enabling connectivity in previously unreachable industrial environments.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['IoT', 'Networking', 'Edge Computing', 'Connectivity'],
    },
    {
      id: 4,
      title: 'Computer Vision for Safety: Preventing Workplace Accidents',
      category: 'Computer Vision',
      date: 'Nov 12, 2024',
      author: 'Dr. Noor Al-Madani',
      readTime: '9 min',
      image: '👁️',
      excerpt: 'Real-time computer vision systems detecting safety hazards and preventing accidents before they happen.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Computer Vision', 'Safety', 'Real-time Detection', 'AI'],
    },
    {
      id: 5,
      title: 'Autonomous Inspection Drones: Changing Site Monitoring',
      category: 'Robotics & Automation',
      date: 'Nov 10, 2024',
      author: 'Eng. Rashid Al-Jahani',
      readTime: '7 min',
      image: '🚁',
      excerpt: 'Autonomous drones equipped with AI are revolutionizing how we inspect infrastructure and manage construction sites.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Drones', 'Automation', 'Inspection', 'AI Navigation'],
    },
    {
      id: 6,
      title: 'Blockchain in Industrial Asset Management: A Game Changer',
      category: 'Blockchain',
      date: 'Nov 8, 2024',
      author: 'Dr. Hana Al-Khayyal',
      readTime: '8 min',
      image: '⛓️',
      excerpt: 'Implementing blockchain for transparent, immutable tracking of industrial assets across supply chains.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Blockchain', 'Asset Management', 'Supply Chain', 'Transparency'],
    },
    {
      id: 7,
      title: 'Cloud-Native Architecture for IoT at Scale',
      category: 'Cloud & Infrastructure',
      date: 'Nov 5, 2024',
      author: 'Eng. David Lee',
      readTime: '10 min',
      image: '☁️',
      excerpt: 'Architectural patterns for managing and scaling IoT deployments across cloud platforms.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Cloud', 'Architecture', 'Scalability', 'IoT'],
    },
    {
      id: 8,
      title: 'Cybersecurity in Connected Industrial Systems',
      category: 'Security',
      date: 'Nov 3, 2024',
      author: 'Security Team',
      readTime: '9 min',
      image: '🔒',
      excerpt: 'Best practices and strategies for securing interconnected industrial systems against cyber threats.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Cybersecurity', 'IoT Security', 'Industrial', 'Best Practices'],
    },
  ]

  const categories = [
    'all',
    'AI & Machine Learning',
    'Digital Twin',
    'IoT Solutions',
    'Computer Vision',
    'Robotics & Automation',
    'Blockchain',
    'Cloud & Infrastructure',
    'Security',
  ]

  const filteredArticles =
    selectedCategory === 'all'
      ? articles
      : articles.filter((article) => article.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="w-full overflow-hidden pt-20">
      {/* Header Section */}
      <section className="relative overflow-hidden py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/5 rounded-full mix-blend-screen filter blur-3xl" />
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-yellow-600/5 rounded-full mix-blend-screen filter blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
        >
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
            <span className="text-orange-400 text-sm font-semibold">📰 News & Insights</span>
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold cyber-text">
              Latest News & Articles
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest advances in AI, IoT, Digital Twin, and industrial technology
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-600 text-white border-orange-400'
                    : 'border-orange-400/30 text-orange-300 hover:border-orange-400/60 hover:bg-orange-500/10'
                }`}
              >
                {category === 'all' ? 'All Articles' : category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.length > 0 && filteredArticles[0] && (
        <section className="py-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card border border-orange-400/30 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="flex items-center justify-center text-7xl bg-orange-500/10 rounded-lg">
                  {filteredArticles[0]!.image}
                </div>
                <div className="flex flex-col justify-center">
                  <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-400/50 rounded-full mb-4 w-fit">
                    <span className="text-orange-300 text-sm font-semibold">Featured</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    {filteredArticles[0]!.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{filteredArticles[0]!.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredArticles[0]!.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-orange-500/10 text-orange-300 rounded-full border border-orange-400/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <span>By {filteredArticles[0].author}</span>
                    <span>{filteredArticles[0].date}</span>
                    <span>{filteredArticles[0].readTime} read</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.slice(1).map((article) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-card border border-orange-400/30 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="flex items-center justify-center text-5xl bg-orange-500/10 h-40 group-hover:bg-orange-500/20 transition-colors">
                  {article.image}
                </div>

                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-400/30 rounded-full mb-4">
                    <span className="text-orange-300 text-xs font-semibold">{article.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-orange-500/10 text-orange-300 rounded border border-orange-400/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-orange-400/20 pt-4">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{article.author}</span>
                      <span>{article.date}</span>
                    </div>
                    <div className="text-xs text-orange-400 mt-2 font-semibold">
                      {article.readTime} read
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-2xl text-gray-400">No articles found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-orange-500/10 via-transparent to-yellow-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card border border-orange-400/30 rounded-lg p-8 text-center"
          >
            <h2 className="text-4xl font-bold cyber-text mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter and get the latest insights on industrial innovation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-slate-700/50 border border-orange-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400/60 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
