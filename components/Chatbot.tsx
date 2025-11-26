'use client'

import { useState } from 'react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 I'm MTI Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')

  const quickReplies = [
    { text: 'Services', icon: '💼' },
    { text: 'Careers', icon: '👥' },
    { text: 'Contact', icon: '📞' },
    { text: 'Schedule Demo', icon: '📅' },
  ]

  const botResponses: { [key: string]: string } = {
    services:
      'We offer Digital Twin solutions, IoT Integration, AI-powered Surveillance, and Smart Sites monitoring. Which one interests you?',
    careers:
      'Great! We have exciting opportunities in AI/ML, Digital Twin Development, and IoT Solutions. Visit our careers page to see all positions.',
    contact:
      'You can reach us at info@mtiengineering.com or call +971-4-XXX-XXXX. Would you like to schedule a call?',
    'schedule demo':
      "I'd be happy to help schedule a demo! What solution would you like to see in action?",
    hello: "Hello! How can I assist you today?",
    hi: "Hi there! What can I help you with?",
    default:
      "Thanks for your message! For more detailed information, please contact our team at info@mtiengineering.com",
  }

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setInputValue('')

    setTimeout(() => {
      const lowerText = messageText.toLowerCase()
      const matchKey = Object.keys(botResponses).find((key) => lowerText.includes(key)) || 'default'
      const botResponse: string = botResponses[matchKey] || botResponses['default'] || ''

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
          <div
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-blue-400/30 flex flex-col z-40"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div>
                  <h3 className="text-white font-bold">MTI Assistant</h3>
                  <p className="text-xs text-blue-100">Online - Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-500/50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-br-none'
                        : 'bg-slate-700/50 text-gray-200 border border-blue-400/30 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div
                  className="space-y-2 mt-4"
                >
                  <p className="text-xs text-gray-400 px-2">Quick replies:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickReply(reply.text)}
                        className="text-xs px-3 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 hover:bg-blue-500/30 hover:scale-105 transition-all"
                      >
                        {reply.icon} {reply.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-blue-400/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-slate-700 border border-blue-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 transition-colors text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110 transition-all border-2 border-blue-300/50"
      >
        {isOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <span
            className="text-2xl"
          >
            💬
          </span>
        )}
      </button>
    </>
  )
}
