"use client"
import React from 'react'
import { motion } from 'framer-motion'

const TechStack = () => {
  const tools = [
    {
      name: 'NANO BANANA',
      role: 'IMAGE GENERATION',
      desc: 'High-fidelity cinematic posters aur characters create karne ke liye.',
      color: 'text-yellow-400',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor">
          <motion.path 
            d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="1.5"
            animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          />
          <motion.path 
            d="M2 12L12 17L22 12" strokeWidth="1.5" opacity="0.6"
            animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          />
          <path d="M2 17L12 22L22 17" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      name: 'VEO & GROK',
      role: 'VIDEO & LOGIC',
      desc: 'Google Veo se realistic motion aur Grok se creative research.',
      color: 'text-blue-400',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor">
          <motion.circle 
            cx="12" cy="12" r="9" strokeWidth="1.5"
            animate={{ strokeDasharray: ["1, 150", "90, 150", "90, 150"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <motion.path 
            d="M10 9L15 12L10 15V9Z" fill="currentColor"
            animate={{ scale: [0.8, 1.1, 0.8] }} transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </svg>
      )
    },
    {
      name: 'ELEVENLABS',
      role: 'NEURAL VOICE',
      desc: 'Duniya ki sabse advanced AI voice synthesis characters ke liye.',
      color: 'text-purple-400',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor">
          {[1, 2, 3, 4].map((i) => (
            <motion.line
              key={i} x1={6 + (i*4)} y1="8" x2={6 + (i*4)} y2="16" strokeWidth="2"
              animate={{ y1: [8, 4, 8], y2: [16, 20, 16] }}
              transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
            />
          ))}
        </svg>
      )
    },
    {
      name: 'ADOBE MASTER',
      role: 'POST PRODUCTION',
      desc: 'Final color grading aur cinematic editing Premiere aur After Effects mein.',
      color: 'text-red-500',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor">
          <motion.rect 
            x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5"
            animate={{ rotate: [0, 90, 0] }} transition={{ repeat: Infinity, duration: 4 }}
          />
          <path d="M9 9L15 15M15 9L9 15" strokeWidth="1.5" opacity="0.6" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-blue-500 text-[10px] tracking-[0.5em] font-black uppercase mb-4 italic">
              Production Stack
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none">
              Powerful Tools. <br /> Unique Results.
            </h3>
          </div>
          <p className="text-gray-500 text-sm max-w-xs border-l border-white/10 pl-6">
            Bridging Patna’s creativity with International AI standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] transition-all group"
            >
              <div className={`${tool.color} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {tool.icon}
              </div>
              <p className="text-[9px] text-gray-500 font-bold tracking-[0.2em] mb-2">{tool.role}</p>
              <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{tool.name}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TechStack