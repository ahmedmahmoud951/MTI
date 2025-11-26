import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Chatbot } from '@/components/Chatbot'
import './globals.css'

export const metadata: Metadata = {
  title: 'MTI Engineering Solutions',
  description: 'Leading engineering solutions company since 1995. Digital Twin, IoT, and Advanced Surveillance Systems.',
  keywords: 'engineering, digital twin, IoT, surveillance, smart solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
