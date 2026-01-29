"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function MagicConsole() {
  const [val, setVal] = useState("")
  const { changeTheme, currentTheme } = useTheme()

  const suggestions = ['Krishna', 'Space', 'Neon', 'Matrix', 'Danger']

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto mt-12 p-4 z-50 relative pointer-events-auto"
    >
      <p className="text-[9px] mb-3 text-blue-400/50 font-mono text-center uppercase tracking-[0.4em]">
        System Interface
      </p>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
        <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl rounded-xl p-2 flex items-center border border-white/10">
          <span className="text-blue-500 px-3 font-mono text-sm animate-pulse">{">"}</span>
          <input 
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (changeTheme(val), setVal(""))}
            placeholder="Enter command (e.g. Space)..."
            className="bg-transparent border-none outline-none text-white font-mono text-[11px] w-full py-2 placeholder:text-gray-700"
          />
          <button 
            onClick={() => {changeTheme(val); setVal("");}}
            className="px-4 py-1.5 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg text-[9px] text-blue-400 uppercase font-black transition-all border border-blue-500/20"
          >
            EXECUTE
          </button>
        </div>
      </div>

      {/* Suggestion Chips */}
      <div className="flex flex-wrap gap-2 justify-center mt-5">
        {suggestions.map((tag) => (
          <button
            key={tag}
            onClick={() => changeTheme(tag)}
            className="text-[7px] md:text-[8px] px-3 py-1 rounded-md border border-white/5 bg-white/5 text-gray-500 hover:text-white hover:border-blue-500/30 transition-all uppercase font-bold tracking-widest"
          >
            {tag}
          </button>
        ))}
      </div>

      <p className="text-[8px] text-center mt-4 text-gray-600 uppercase tracking-[0.3em]">
        Active Aura: <span style={{ color: currentTheme.color }}>{currentTheme.name}</span>
      </p>
    </motion.div>
  )
}