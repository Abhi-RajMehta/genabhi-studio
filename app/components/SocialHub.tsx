"use client"
import { motion } from 'framer-motion'
import { FaInstagram, FaYoutube, FaGithub, FaFacebook, FaXTwitter } from 'react-icons/fa6'

const socialLinks = [

  { id: 1, name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/genabhi.ai?igsh=MWI1cnZzdWtzMmUz', color: '#E1306C' },

  { id: 2, name: 'YouTube', icon: <FaYoutube />, url: 'https://youtube.com/@avi_raj.?si=AIjpLIMzGR7BIX7o', color: '#FF0000' },

  { id: 3, name: 'X', icon: <FaXTwitter />, url: 'https://x.com/AkGamin07510770', color: '#ffffff' },

  { id: 4, name: 'Facebook', icon: <FaFacebook />, url: 'https://facebook.com/yourlink', color: '#1877F2' },

  { id: 5, name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/Abhi-RajMehta', color: '#6e5494' },

]

export default function SocialHub() {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-10 px-4 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/5 max-w-4xl mx-auto mb-20">
      {socialLinks.map((link) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.2, 
            rotate: 8,
            boxShadow: `0px 0px 20px ${link.color}55` 
          }}
          whileTap={{ scale: 0.9 }}
          className="relative text-3xl md:text-4xl text-gray-400 transition-colors duration-300 flex items-center justify-center p-4 bg-[#0d0d0d] rounded-2xl border border-white/10 hover:border-white/20 group"
          style={{ color: 'inherit' }}
        >
          {/* Glowing Background on Hover */}
          <span 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
            style={{ backgroundColor: link.color }}
          ></span>
          
          <span className="z-10 group-hover:text-white transition-colors duration-300">
            {link.icon}
          </span>

          {/* Tooltip */}
          <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 text-[10px] uppercase font-black tracking-widest text-white bg-[#1a1a1a] px-3 py-1 rounded border border-white/10">
            {link.name}
          </span>
        </motion.a>
      ))}
    </div>
  )
}