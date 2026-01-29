"use client"
import React from 'react'

const projects = [
  { 
    id: 1, 
    title: 'Krishna Mythology', 
    desc: 'Ancient stories, AI cinematic reality.', 
    size: 'md:col-span-2',
    video: '/videos/krishna.mp4' // Public folder mein video hona chahiye
  },
  { 
    id: 2, 
    title: 'Comedy Skits', 
    desc: 'Mama cat & Kitten airplane adventures.', 
    size: 'md:col-span-1',
    video: '/videos/comedy.mp4'
  },
  { 
    id: 3, 
    title: 'Digital Invites', 
    desc: 'Premium 3D Wedding Invitations.', 
    size: 'md:col-span-1',
    video: '/videos/invite.mp4'
  },
  { 
    id: 4, 
    title: 'Mythological_Battle',
    desc: 'The Era of Shah Jahan & Taj Mahal.', 
    size: 'md:col-span-2',
    video: '/videos/Mythological_Battle.mp4'
  },
]

export default function Showcase() {
  return (
    <section className="h-full bg-[#050505] py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Showcase</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${project.size} group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-700 cursor-pointer`}
            >
              {/* Video Background - Automatic Play on Hover/Load */}
              <video 
  key={project.video} // Force refresh on link change
  autoPlay 
  loop 
  muted 
  playsInline 
  preload="metadata" // "auto" ki jagah "metadata" fast load hota hai
  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
  onLoadedData={(e) => (e.target as HTMLVideoElement).play()} // Forced Play logic
>
  <source src={project.video} type="video/mp4" />
</video>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
              
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{project.desc}</p>
              </div>

              <span className="absolute top-6 right-6 text-white/5 font-bold text-6xl group-hover:text-blue-500/20 transition-colors duration-500">
                0{project.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}