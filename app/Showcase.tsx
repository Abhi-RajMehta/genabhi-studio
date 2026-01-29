"use client"
import React from 'react'

const projects = [
  { 
    id: 1, 
    title: 'Krishna Mythology', 
    desc: 'Ancient stories, AI cinematic reality.', 
    size: 'md:col-span-2',
    // Vercel Blob URL yahan paste karein
    video: 'https://aapka-link-id.public.blob.vercel-storage.com/krishna.mp4' 
  },
  { 
    id: 2, 
    title: 'Comedy Skits', 
    desc: 'Mama cat & Kitten airplane adventures.', 
    size: 'md:col-span-1',
    video: 'https://aapka-link-id.public.blob.vercel-storage.com/comedy.mp4'
  },
  { 
    id: 3, 
    title: 'Digital Invites', 
    desc: 'Premium 3D Wedding Invitations.', 
    size: 'md:col-span-1',
    video: 'https://aapka-link-id.public.blob.vercel-storage.com/invite.mp4'
  },
  { 
    id: 4, 
    title: 'Mythological Battle', 
    desc: 'The Era of Shah Jahan & Taj Mahal.', 
    size: 'md:col-span-2',
    video: 'https://aapka-link-id.public.blob.vercel-storage.com/Mythological_Battle.mp4'
  },
]

export default function Showcase() {
  return (
    <section className="min-h-screen bg-[#050505] py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight uppercase italic">
          Featured <span className="text-blue-500">Works</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${project.size} group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-700 cursor-pointer`}
            >
              {/* Video Background - Optimized for Vercel Blob */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-700"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
              
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="text-xl md:text-3xl font-black text-white uppercase italic tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-2 tracking-widest uppercase">
                  {project.desc}
                </p>
              </div>

              {/* Project Number Background */}
              <span className="absolute top-6 right-6 text-white/5 font-black text-7xl group-hover:text-blue-500/10 transition-colors duration-500">
                0{project.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}