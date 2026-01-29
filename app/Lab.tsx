"use client"
import React from 'react'

const Lab = () => {
  return (
    <section className="h-screen w-full bg-[#050505] flex items-center justify-center snap-start px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white mb-6">Inside the AI Lab</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Hum latest Generative AI models ka use karke mythology aur history ko 
            cinematic reality mein badalte hain. Chahe wo Krishna ki leela ho ya 
            comedy characters, har frame AI dwara optimize kiya jata hai.
          </p>
          <div className="mt-8 flex gap-4">
            <span className="px-4 py-2 bg-white/5 rounded-full text-blue-400 text-xs border border-white/10">Stable Diffusion</span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-purple-400 text-xs border border-white/10">Gen-3 Alpha</span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-green-400 text-xs border border-white/10">Luma Dream Machine</span>
          </div>
        </div>
        
        {/* Futuristic Card for Lab Animation */}
        <div className="relative aspect-square bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="text-blue-500 font-mono text-xs animate-pulse">PROCESSING_AI_FRAME_99%...</div>
        </div>
      </div>
    </section>
  )
}

export default Lab