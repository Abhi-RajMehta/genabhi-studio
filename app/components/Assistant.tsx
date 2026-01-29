"use client"
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Namaste! Main GenAbhi Studio ka AI Assistant hoon. Main aapki kaise madad kar sakta hoon?' }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isLoading])

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    
    const userMsg = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [{ role: 'user', content: text }] 
        }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.text }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'ai', text: "Opps! Lagta hai signal weak hai. Dubara try karein?" }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 h-[500px] bg-[#0d0d0d]/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 bg-blue-600/10 border-b border-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-lg shadow-lg shadow-blue-500/20">🤖</div>
              <div>
                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">GenAbhi AI</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-gray-500 text-[8px] font-bold uppercase">Live & Ready</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 no-scrollbar scroll-smooth">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-3xl text-[11px] leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white/5 text-gray-300 border border-white/5 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" />
                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Field */}
            <div className="p-4 bg-white/[0.02] border-t border-white/5">
              <div className="relative flex items-center">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                  placeholder="Ask me anything..."
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white text-[11px] outline-none focus:border-blue-500/50 transition-all pr-12"
                />
                <button 
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim()}
                  className="absolute right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 shadow-lg disabled:opacity-50"
                >
                  <span className="text-white text-xs">↑</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl shadow-2xl border-4 border-white/10 relative overflow-hidden group z-[210]"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <span className="text-lg text-white font-bold">✕</span> : <span>🤖</span>}
      </motion.button>
    </div>
  )
}

export default Assistant