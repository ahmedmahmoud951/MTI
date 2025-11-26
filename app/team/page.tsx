'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Team() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  const generateEmployees = () => {
    const departments = [
      'Engineering', 'Digital Twin', 'IoT Solutions', 'AI & ML', 'Project Management',
      'Quality Assurance', 'DevOps', 'Security', 'Data Science', 'UX/UI Design',
      'Business Development', 'Operations', 'Research', 'Training', 'Support'
    ] as const

    const roles: Record<string, string[]> = {
      'Engineering': ['Senior Software Engineer', 'Software Engineer', 'Lead Developer', 'Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'Systems Engineer'],
      'Digital Twin': ['Digital Twin Specialist', '3D Visualization Engineer', 'Simulation Engineer', 'Virtual Reality Developer', 'AR/VR Engineer'],
      'IoT Solutions': ['IoT Architect', 'Sensor Engineer', 'Embedded Systems Developer', 'IoT Solutions Engineer', 'Hardware Engineer'],
      'AI & ML': ['AI Engineer', 'Machine Learning Engineer', 'Data Scientist', 'Computer Vision Engineer', 'NLP Engineer'],
      'Project Management': ['Project Manager', 'Technical Project Manager', 'Program Manager', 'Scrum Master', 'Product Owner'],
      'Quality Assurance': ['QA Engineer', 'Test Automation Engineer', 'Quality Assurance Lead', 'Manual Tester', 'Performance Tester'],
      'DevOps': ['DevOps Engineer', 'Site Reliability Engineer', 'Cloud Engineer', 'Infrastructure Engineer', 'Release Manager'],
      'Security': ['Security Engineer', 'Cybersecurity Analyst', 'Penetration Tester', 'Security Architect', 'Compliance Officer'],
      'Data Science': ['Data Scientist', 'Data Analyst', 'Business Intelligence Analyst', 'Data Engineer', 'Analytics Engineer'],
      'UX/UI Design': ['UX Designer', 'UI Designer', 'Product Designer', 'Design System Lead', 'Interaction Designer'],
      'Business Development': ['Business Development Manager', 'Sales Engineer', 'Account Manager', 'Partnership Manager', 'Market Analyst'],
      'Operations': ['Operations Manager', 'Technical Operations', 'IT Support Specialist', 'System Administrator', 'Network Engineer'],
      'Research': ['Research Scientist', 'R&D Engineer', 'Innovation Lead', 'Technology Researcher', 'PhD Researcher'],
      'Training': ['Technical Trainer', 'Learning & Development', 'Training Coordinator', 'Knowledge Manager', 'Education Specialist'],
      'Support': ['Technical Support Engineer', 'Customer Success Manager', 'Help Desk Specialist', 'Support Team Lead', 'Client Services']
    }

    const firstNames = [
      'محمد', 'أحمد', 'علي', 'عمر', 'خالد', 'سعد', 'حسن', 'يوسف', 'عبدالله', 'إبراهيم',
      'فاطمة', 'عائشة', 'سارة', 'نور', 'ليلى', 'هنا', 'مريم', 'زهراء', 'أمينة', 'ليلى',
      'مصطفى', 'عبدالرحمن', 'عبدالعزيز', 'سعد', 'عبدالكريم', 'عبدالوهاب', 'عبدالرزاق', 'عبدالجبار', 'عبدالقادر', 'عبدالحميد',
      'زينب', 'خديجة', 'عائشة', 'حفصة', 'أسماء', 'مريم', 'فاطمة', 'زهراء', 'أم كلثوم', 'عائشة'
    ]

    const lastNames = [
      'العلي', 'الأحمد', 'المحمد', 'الحسن', 'العمر', 'الخالد', 'السعد', 'اليوسف', 'عبدالله', 'الإبراهيم',
      'الفاطمي', 'العائشي', 'السارة', 'النوري', 'الليلي', 'الهاني', 'المريمي', 'الزهراء', 'الأمينة', 'الليلى',
      'المصطفى', 'عبدالرحمن', 'عبدالعزيز', 'السعدي', 'عبدالكريم', 'عبدالوهاب', 'عبدالرزاق', 'عبدالجبار', 'عبدالقادر', 'عبدالحميد'
    ]

    const employees: Array<{id: number; name: string; role: string; department: string; experience: number; avatar: string; email: string}> = []

    for (let i = 1; i <= 200; i++) {
      const department = departments[Math.floor(Math.random() * departments.length)]!
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]!
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]!
      const departmentRoles = roles[department] || []
      const role = departmentRoles[Math.floor(Math.random() * departmentRoles.length)] || 'Employee'
      const experience = Math.floor(Math.random() * 25) + 1

      employees.push({
        id: i,
        name: `${firstName} ${lastName}`,
        role: role,
        department: department,
        experience: experience,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=b6e3f4,c0aede,d1d4f9`,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@mti-engineering.com`
      })
    }

    return employees
  }

  const employees = generateEmployees()

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
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
    <div className="w-full pt-24 pb-20">
      {/* Hero Section */}
      <section className="min-h-96 flex items-center justify-center relative overflow-hidden mb-32">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold cyber-text"
          >
            Our Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Meet the talented professionals driving innovation at MTI Engineering Solutions since 1995
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl font-bold text-yellow-400"
          >
            200+ Experts • 15 Departments • Global Impact
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16 border-t border-yellow-500/20 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold cyber-text mb-4">
            Our Team Members
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our talented professionals across all departments
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search by name, role, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"
            />
            <div className="absolute right-3 top-3 text-yellow-400">
              🔍
            </div>
          </div>

          {/* Department Filter */}
          <div className="flex gap-2 flex-wrap">
            {['all', ...Array.from(new Set(employees.map(emp => emp.department)))].map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedDepartment === dept
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg shadow-yellow-500/50'
                    : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Showing {filteredEmployees.length} of {employees.length} team members
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {filteredEmployees.map((employee) => (
            <motion.div
              key={employee.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glow-box p-6 rounded-lg backdrop-blur-sm hover:bg-yellow-500/5 transition-colors duration-300 cursor-pointer group"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-yellow-400/50 group-hover:border-yellow-400 transition-colors">
                  <Image
                    src={employee.avatar}
                    alt={employee.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-yellow-400 mb-2 text-center group-hover:text-yellow-300 transition-colors">
                {employee.name}
              </h3>

              {/* Role */}
              <p className="text-sm font-semibold text-gray-300 mb-2 text-center">
                {employee.role}
              </p>

              {/* Department */}
              <p className="text-xs text-gray-400 mb-3 text-center bg-yellow-500/10 px-2 py-1 rounded-full">
                {employee.department}
              </p>

              {/* Experience */}
              <div className="text-center">
                <div className="text-lg font-bold cyber-text mb-1">
                  {employee.experience}
                </div>
                <div className="text-xs text-gray-400">
                  Years Experience
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredEmployees.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">No team members found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedDepartment('all')
              }}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Achievements Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-yellow-500/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold cyber-text mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Recognition and awards that reflect our commitment to excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              title: "Best Engineering Innovation 2024",
              issuer: "Middle East Engineering Excellence Awards",
              description: "Recognized for groundbreaking Digital Twin technology implementation"
            },
            {
              title: "IoT Excellence Award",
              issuer: "International IoT Association",
              description: "Excellence in IoT solutions and smart city implementations"
            },
            {
              title: "Cybersecurity Leadership",
              issuer: "GCC Cybersecurity Council",
              description: "Outstanding performance in enterprise security solutions"
            },
            {
              title: "Sustainable Technology Award",
              issuer: "Green Technology Initiative",
              description: "Innovation in energy-efficient engineering solutions"
            },
            {
              title: "Customer Satisfaction Excellence",
              issuer: "Business Excellence Forum",
              description: "Highest customer satisfaction ratings in the industry"
            },
            {
              title: "Innovation in AI & ML",
              issuer: "AI Middle East Summit",
              description: "Pioneering applications of AI in industrial automation"
            }
          ].map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glow-box p-8 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{achievement.title}</h3>
              <div className="text-gray-300 font-semibold mb-2">{achievement.issuer}</div>
              <p className="text-gray-400 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-yellow-500/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold cyber-text mb-4">
            Team Statistics
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Numbers that tell our story of growth and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Total Employees', value: '200+', description: 'Dedicated professionals' },
            { label: 'Departments', value: '15', description: 'Specialized divisions' },
            { label: 'Avg Experience', value: '12 Years', description: 'Industry expertise' },
            { label: 'Global Projects', value: '500+', description: 'Successful implementations' },
            { label: 'Countries Served', value: '50+', description: 'International presence' },
            { label: 'Certifications', value: '25+', description: 'Professional accreditations' },
            { label: 'Patents Filed', value: '15', description: 'Innovative solutions' },
            { label: 'Client Satisfaction', value: '98%', description: 'Excellence rating' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glow-box p-6 rounded-lg backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold cyber-text mb-2">
                {stat.value}
              </div>
              <div className="text-yellow-400 text-sm font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400 text-xs">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
