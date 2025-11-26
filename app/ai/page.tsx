'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

interface ConversationThread {
  id: string
  title: string
  messages: Message[]
  timestamp: Date
}

interface KnowledgeBase {
  company: any
  infrastructure: any
  services: any[]
  projects: any[]
  cameras: any
  faq: Array<{ question: string; answer: string }>
  deployment: any
  troubleshooting: any
  contact: any
}

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [conversations, setConversations] = useState<ConversationThread[]>([])
  const [activeConversation, setActiveConversation] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [knowledgeBase, setKnowledgeBase] = useState<KnowledgeBase | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const loadKnowledgeBase = async () => {
      try {
        const response = await fetch('/docs/knowledge-base.json')
        const kb = await response.json()
        setKnowledgeBase(kb)
      } catch (error) {
        console.error('Failed to load knowledge base:', error)
      }
    }
    loadKnowledgeBase()
  }, [])

  const isArabic = (text: string): boolean => {
    return /[\u0600-\u06FF]/.test(text)
  }

  const searchKnowledgeBase = (query: string): string | null => {
    if (!knowledgeBase) return null

    const lowerQuery = query.toLowerCase()
    const isAr = isArabic(query)

    for (const faq of knowledgeBase.faq) {
      const questionMatch = faq.question.toLowerCase().includes(lowerQuery) ||
        lowerQuery.split(' ').some(word => word.length > 2 && faq.question.toLowerCase().includes(word))

      if (questionMatch) {
        return faq.answer
      }
    }

    if (lowerQuery.includes('camera') || lowerQuery.includes('surveillance') || lowerQuery.includes('كاميرا') || lowerQuery.includes('تصوير')) {
      const cameraTypes = knowledgeBase.cameras.types
        .map((c: any) => `• ${c.name}: ${c.description}`)
        .join('\n')
      return isAr 
        ? `📹 أنواع الكاميرات المتاحة:\n\n${cameraTypes}\n\nلقد قمنا بتوزيع أكثر من ${knowledgeBase.infrastructure.camerasDeployed.toLocaleString()} كاميرا عبر منطقة الشرق الأوسط وشمال أفريقيا مع قدرات تحليل ذكية متقدمة.`
        : `📹 Camera Types Available:\n\n${cameraTypes}\n\nWe've deployed over ${knowledgeBase.infrastructure.camerasDeployed.toLocaleString()} cameras across MENA with advanced AI analytics.`
    }

    if (lowerQuery.includes('service') || lowerQuery.includes('خدمة')) {
      const servicesList = knowledgeBase.services
        .slice(0, 3)
        .map((s: any) => `• ${s.name}: ${s.description}`)
        .join('\n')
      return isAr
        ? `🎯 خدماتنا الرئيسية:\n\n${servicesList}`
        : `🎯 Our Key Services:\n\n${servicesList}`
    }

    if (lowerQuery.includes('project') || lowerQuery.includes('مشروع')) {
      const projectsList = knowledgeBase.projects
        .slice(0, 3)
        .map((p: any) => `• ${p.name} (${p.location}): ${p.camerasDeployed.toLocaleString()} كاميرا`)
        .join('\n')
      return isAr
        ? `🏢 مشاريعنا الرئيسية:\n\n${projectsList}`
        : `🏢 Major Projects:\n\n${projectsList}`
    }

    if (lowerQuery.includes('deployment') || lowerQuery.includes('نشر')) {
      return isAr
        ? `🚀 عملية النشر تتكون من 4 مراحل:\n\n1. التقييم\n2. التخطيط\n3. التنفيذ\n4. التقييم\n\nكل مرحلة تضمن أقل وقت توقف وأقصى موثوقية.`
        : `🚀 Deployment Process:\n\n1. Assessment\n2. Planning\n3. Implementation\n4. Evaluation\n\nMinimal downtime, maximum reliability.`
    }

    if (lowerQuery.includes('security') || lowerQuery.includes('أمان')) {
      return isAr
        ? `🔐 الأمان هو أولويتنا:\n\n• تشفير عسكري\n• المصادقة الثنائية\n• التحكم في الوصول\n• تدقيقات منتظمة`
        : `🔐 Security First:\n\n• Military-grade encryption\n• 2FA authentication\n• Role-based access control\n• Regular audits`
    }

    if (lowerQuery.includes('uptime') || lowerQuery.includes('موثوقية')) {
      return isAr
        ? `⚡ الموثوقية: ${knowledgeBase.infrastructure.systemUptime}\n\n• وقت استجابة API: ${knowledgeBase.infrastructure.avgResponseTime}\n• توفر النظام طوال الوقت`
        : `⚡ System Uptime: ${knowledgeBase.infrastructure.systemUptime}\n\n• API Response: ${knowledgeBase.infrastructure.avgResponseTime}\n• Always available`
    }

    return null
  }

  const generateAIResponse = (userMessage: string, conversationHistory: Message[]): string => {
    const kbAnswer = searchKnowledgeBase(userMessage)
    const isAr = isArabic(userMessage)

    if (kbAnswer) {
      return kbAnswer
    }

    const fallbackResponses = isAr ? [
      "🤔 سؤال ممتاز! هل يمكنك إعطائي المزيد من التفاصيل؟",
      "💡 تتخصص MTI في حلول المراقبة الذكية. ماذا تود معرفة المزيد عنه؟",
      "📞 للمزيد من المعلومات، تواصل معنا: support@mti-engineering.com",
    ] : [
      "🤔 Great question! Can you provide more details?",
      "💡 MTI specializes in intelligent surveillance solutions. What would you like to know?",
      "📞 For more info, contact us: support@mti-engineering.com",
    ]

    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)] || ""
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    const updatedMessages = [...messages, userMessage]
    
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(input, updatedMessages),
        sender: 'ai',
        timestamp: new Date(),
      }
      
      setMessages(prev => {
        const allMessages = [...prev, aiResponse]
        return allMessages.slice(-20)
      })
      
      setIsLoading(false)
    }, 800)
  }

  const startNewConversation = () => {
    const newId = Date.now().toString()
    const newConversation: ConversationThread = {
      id: newId,
      title: 'New Chat',
      messages: [],
      timestamp: new Date(),
    }
    setConversations(prev => [newConversation, ...prev])
    setMessages([])
    setActiveConversation(newId)
  }

  const deleteConversation = (id: string) => {
    setConversations(prev => prev.filter(c => c.id !== id))
    if (activeConversation === id) {
      setActiveConversation(null)
      setMessages([])
    }
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-black to-slate-950 text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0,217,255,0.3), inset 0 0 20px rgba(0,217,255,0.1); }
          50% { box-shadow: 0 0 40px rgba(0,217,255,0.5), inset 0 0 30px rgba(0,217,255,0.2); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .float-animation { animation: float 3s ease-in-out infinite; }
        .glow-effect { animation: glow 2s ease-in-out infinite; }
        .slide-in { animation: slideIn 0.5s ease-out; }
        .pulse-dot { animation: pulse 2s ease-in-out infinite; }
        .gradient-text { 
          background: linear-gradient(135deg, #00d9ff, #ff10f0, #00ff41, #00d9ff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 3s ease infinite;
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* SIDEBAR */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-0'} transition-all duration-300 bg-gradient-to-b from-black via-slate-900/50 to-black border-r border-cyan-500/30 flex flex-col overflow-hidden flex-shrink-0`}>
        <div className="p-6 space-y-4 border-b border-cyan-500/20">
          <button
            onClick={startNewConversation}
            className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
          >
            <span className="text-xl">✨</span>
            <span>New Chat</span>
          </button>
        </div>

        <div className="px-4 py-3 border-b border-cyan-500/20">
          <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">History</p>
          <p className="text-xs text-gray-500 mt-2">{conversations.length} chats</p>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-2">
          {conversations.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">No conversations yet</p>
            </div>
          ) : (
            conversations.map(conv => (
              <div key={conv.id} className="group relative">
                <button
                  onClick={() => setActiveConversation(conv.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeConversation === conv.id
                      ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/20 border border-cyan-400/50'
                      : 'bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50'
                  }`}
                >
                  <p className="text-sm font-medium truncate">{conv.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{conv.messages.length} msgs</p>
                </button>
                <button
                  onClick={() => deleteConversation(conv.id)}
                  className="absolute right-2 top-3 opacity-0 group-hover:opacity-100 transition-opacity p-1 text-red-400 hover:text-red-300"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* MAIN CHAT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="h-20 bg-gradient-to-r from-black/70 via-slate-900/50 to-black/70 border-b border-cyan-500/30 flex items-center px-6 gap-4 flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-cyan-400 hover:text-cyan-300 text-2xl transition-colors p-2 hover:bg-slate-800/50 rounded-lg"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
          
          <div className="flex-1">
            <h1 className="text-2xl font-black gradient-text">MTI AI Assistant</h1>
            <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot"></span>
              English • عربي • Always Online
            </p>
          </div>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-6">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center">
              <div className="text-center space-y-8 slide-in">
                <div className="float-animation text-7xl">🤖</div>
                
                <div>
                  <h2 className="text-4xl font-black gradient-text mb-4">Welcome to MTI AI</h2>
                  <p className="text-gray-400 max-w-lg text-lg">
                    Ask anything about video surveillance, IoT solutions, or deployment. Bilingual support 24/7.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
                  {[
                    { icon: '🏗️', label: 'Projects', desc: 'View MTI projects' },
                    { icon: '📹', label: 'Cameras', desc: 'Camera types' },
                    { icon: '🚀', label: 'Deployment', desc: 'How to deploy' },
                    { icon: '🔒', label: 'Security', desc: 'Security features' },
                    { icon: '⚡', label: 'Uptime', desc: '99.7% reliability' },
                    { icon: '🌍', label: 'MENA', desc: 'Our region' },
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setInput(item.label)
                      }}
                      className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400/60 rounded-xl transition-all duration-300 group cursor-pointer"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                      <p className="text-sm font-bold text-gray-200">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-400/30 max-w-2xl mx-auto">
                  <p className="text-sm text-cyan-200">
                    💡 <strong>Tip:</strong> Type in English or Arabic for instant bilingual responses!
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {messages.map((msg) => (
            <div key={msg.id} className="slide-in group">
              <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-md px-6 py-4 rounded-2xl transition-all ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-br from-cyan-500/40 to-blue-500/30 border border-cyan-400/60 text-cyan-50'
                      : 'bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-pink-400/40 text-gray-100'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10 gap-3">
                    <span className="text-xs text-gray-400">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    {msg.sender === 'ai' && (
                      <button
                        onClick={() => copyToClipboard(msg.text, msg.id)}
                        className="text-xs px-2 py-1 bg-slate-700/50 hover:bg-slate-600 rounded opacity-0 group-hover:opacity-100 transition-all"
                        title="Copy"
                      >
                        {copiedId === msg.id ? '✓' : '📋'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-pink-400/40 px-6 py-4 rounded-2xl flex items-center gap-3">
                <span className="text-sm text-gray-300">AI Thinking</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-pink-500 rounded-full pulse-dot"></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full pulse-dot" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full pulse-dot" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* INPUT */}
        <div className="h-24 bg-gradient-to-t from-black via-slate-900/30 to-transparent border-t border-cyan-500/30 flex items-center px-6 flex-shrink-0">
          <div className="w-full max-w-3xl mx-auto flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
              placeholder="Ask in English or Arabic... (Press Enter)"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-slate-800/70 to-slate-900/50 border border-cyan-500/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 flex-shrink-0"
            >
              <span className="text-lg">{isLoading ? '⏳' : '🚀'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
