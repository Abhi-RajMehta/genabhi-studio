"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectModal = ({ isOpen, onClose }: ConnectModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Backdrop Blur Animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl" 
          />
          
          {/* Modal Container */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-[#0d0d0d] border border-white/10 p-8 rounded-[2.5rem] max-w-md w-full shadow-2xl overflow-hidden"
          >
            {/* Background Decor Glows */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="text-center mb-10 relative z-10">
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Let's Build.</h2>
              <p className="text-gray-400 text-sm">GenAbhi Studio: AI Movies & Digital Art</p>
            </div>
            
            <div className="space-y-4 relative z-10">
              
              {/* Email Card */}
              <motion.a 
                href="mailto:abhira5443@gmail.com"
                whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="flex items-center gap-4 p-5 bg-white/5 rounded-[1.5rem] border border-white/5 hover:border-blue-500/50 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">📧</div>
                <div>
                  <p className="text-[10px] text-blue-400 uppercase tracking-widest font-black">Email</p>
                  <p className="text-white font-medium text-sm">contact@genabhi.ai</p>
                </div>
              </motion.a>

              {/* WhatsApp Card */}
              <motion.a 
                href="https://wa.me/6207984609"
                target="_blank"
                whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="flex items-center gap-4 p-5 bg-white/5 rounded-[1.5rem] border border-white/5 hover:border-green-500/50 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-green-500/10 flex items-center justify-center">💬</div>
                <div>
                  <p className="text-[10px] text-green-400 uppercase tracking-widest font-black">WhatsApp</p>
                  <p className="text-white font-medium text-sm">Chat with Avi</p>
                </div>
              </motion.a>

              {/* Instagram Card */}
              <motion.a 
                href="https://instagram.com/genabhi.ai"
                target="_blank"
                whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="flex items-center gap-4 p-5 bg-white/5 rounded-[1.5rem] border border-white/5 hover:border-pink-500/50 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-pink-500/10 flex items-center justify-center">📸</div>
                <div>
                  <p className="text-[10px] text-pink-400 uppercase tracking-widest font-black">Instagram</p>
                  <p className="text-white font-medium text-sm">@genabhi.ai</p>
                </div>
              </motion.a>

            </div>

            <button 
              onClick={onClose}
              className="mt-10 w-full py-4 bg-white text-black text-[10px] font-black rounded-2xl transition-all uppercase tracking-[0.2em] hover:bg-gray-200"
            >
              Close
            </button>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ConnectModal