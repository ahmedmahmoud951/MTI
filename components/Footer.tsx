'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Digital Twin', href: '/digital-twin' },
        { label: '3D Visualization', href: '/visualization' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Compliance', href: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
                MTI
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold cyber-text">MTI</span>
                <span className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">Engineering Solutions</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Leading engineering solutions since 1995. Pioneering Digital Twin technology.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div
              key={section.title}
            >
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-500/20 pt-8">
          {/* Social Links */}
          <div
            className="flex justify-center gap-6 mb-6"
          >
            {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>© {currentYear} MTI Engineering Solutions. All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-600">
              Building the future with Digital Twin technology since 1995
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
