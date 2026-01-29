"use client"
import React, { useState } from 'react'
import ConnectModal from './ConnectModal'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-8 px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
            <a href="#hero">GenAbhi</a>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
  <a href="#hero" className="hover:text-white transition-colors">Studio</a>
  <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
  <a href="#lab" className="hover:text-white transition-colors">The Lab</a>
  {/* Yeh naya link add karein */}
  <a href="#tools" className="hover:text-white transition-colors">Tools</a>
</div>

          <button 
            onClick={() => setIsModalOpen(true)} // Modal Open Karega
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-full transition-all shadow-lg shadow-blue-500/30"
          >
            CONNECT
          </button>
        </div>
      </nav>

      {/* Modal Component Yahan Call Hoga */}
      <ConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Navbar