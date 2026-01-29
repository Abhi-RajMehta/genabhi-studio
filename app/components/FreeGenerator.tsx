"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FreeGenerator() {
  const [prompt, setPrompt] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  const generate = () => {
    if (!prompt) return
    setLoading(true)
    
    // Pollinations AI: Free & Fast API
    const encodedPrompt = encodeURIComponent(prompt)
    const url = `https://pollinations.ai/p/${encodedPrompt}?width=1024&height=1024&seed=${Math.floor(Math.random() * 1000)}`
    
    // Image preload logic
    const img = new Image()
    img.src = url
    img.onload = () => {
      setImage(url)
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-[#0a0a0a] rounded-2xl border border-white/10 mt-20">
      <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">GenAbhi Free AI Lab</h2>
      <p className="text-gray-500 text-[10px] mb-6 tracking-widest uppercase italic font-bold">Try creating something divine or futuristic</p>

      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input 
          className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 text-white text-xs outline-none focus:border-blue-500 transition-all"
          placeholder="e.g. Lord Krishna in futuristic Patna, 8k cinematic..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button 
          onClick={generate}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black px-6 py-3 rounded-xl uppercase transition-all disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Magic"}
        </button>
      </div>

      {image && !loading && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-xl overflow-hidden border border-white/10"
        >
          <img src={image} alt="AI Generated" className="w-full h-auto object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
             <p className="text-[10px] text-gray-300 italic">Created by GenAbhi AI</p>
          </div>
        </motion.div>
      )}

      {loading && (
        <div className="h-64 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl">
           <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
           <p className="mt-4 text-[10px] text-gray-500 uppercase animate-pulse">Consulting the AI Gods...</p>
        </div>
      )}
    </div>
  )
}