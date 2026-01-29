"use client"
import React, { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, OrbitControls, Float } from '@react-three/drei'
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'
import { motion } from 'framer-motion'

// Context & Components Import
import { useTheme } from './context/ThemeContext'
import MagicConsole from './components/MagicConsole'
import SocialHub from './components/SocialHub' 
import Navbar from './Navbar'
import Showcase from './Showcase'
import Lab from './Lab'
import TechStack from './TechStack' 
import Assistant from './components/Assistant'

function ParticleSphere({ color }: { color: string }) {
  const ref = useRef<any>(null)
  const sphere = useMemo(() => {
    try {
      const data = random.inSphere(new Float32Array(15000), { radius: 1.5 }) as Float32Array
      for (let i = 0; i < data.length; i++) {
        if (isNaN(data[i])) data[i] = 0
      }
      return data
    } catch (e) {
      return new Float32Array(15000).fill(0)
    }
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15
      ref.current.rotation.y -= delta / 20
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={1}
        />
      </Points>
    </group>
  )
}

export default function Home() {
  const { currentTheme } = useTheme();

  return (
    <main className="h-screen w-full bg-[#050505] relative overflow-y-auto snap-y snap-mandatory scroll-smooth overflow-x-hidden">
      
      <Navbar /> 

      {/* 1. HERO SECTION & MAGIC CONSOLE */}
      <section id="hero" className="h-screen w-full relative flex items-center justify-center snap-start">
        <div className="absolute z-10 text-center px-4 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold text-white tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 uppercase"
          >
            GenAbhi Studio
          </motion.h1>
          <p className="text-blue-400 mt-6 tracking-[0.5em] md:tracking-[0.8em] text-[10px] md:text-xs uppercase font-medium">
            AI Movies • Digital Arts • Cinematic Stories
          </p>

          <MagicConsole />
        </div>

        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
              <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <ParticleSphere color={currentTheme.color} />
              </Float>
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      </section>

      {/* 2. SHOWCASE SECTION */}
      <section id="showcase" className="min-h-screen w-full snap-start">
        <Showcase />
      </section>

      {/* 3. THE LAB & TECH STACK */}
      <section id="lab" className="min-h-screen w-full snap-start">
        <Lab />
      </section>

      <section id="tools" className="min-h-screen w-full snap-start">
        <TechStack />
      </section>

      {/* 4. UNIQUE SOCIAL HUB (Cinematic Slide) */}
      <section className="min-h-screen w-full snap-start flex flex-col items-center justify-center py-20 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
            Join The <span className="text-blue-500">Universe</span>
          </h3>
          <p className="text-gray-500 text-xs tracking-[0.5em] uppercase mt-4">GenAbhi Studio Everywhere</p>
        </motion.div>
        
        <div className="w-full relative z-10">
          <SocialHub />
        </div>
      </section>

      {/* 5. FINAL FOOTER (Copyright integrated here) */}
      <footer className="min-h-[70vh] w-full snap-start flex flex-col items-center justify-center bg-[#030303] border-t border-white/5 p-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 text-center max-w-5xl w-full">
          <div>
            <h4 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">500+</h4>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-2 font-bold">AI Characters</p>
          </div>
          <div>
            <h4 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">100+</h4>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-2 font-bold">Rendered Scenes</p>
          </div>
          <div>
            <h4 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">2026</h4>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-2 font-bold">Future Ready</p>
          </div>
          <div>
            <h4 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">PATNA</h4>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-2 font-bold">Studio Hub</p>
          </div>
        </div>
        
        {/* --- PROFESSIONAL COPYRIGHT SECTION --- */}
        <div className="text-center border-t border-white/5 pt-12 w-full max-w-2xl">
          <p className="text-gray-400 text-[10px] tracking-[0.6em] uppercase font-black mb-4">GenAbhi Studio</p>
          
          <div className="flex flex-col gap-2">
            <p className="text-gray-600 text-[9px] uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} <span className="text-white">GenAbhi Studio</span>. All Rights Reserved.
            </p>
            <p className="text-gray-800 text-[8px] italic uppercase tracking-[0.1em]">
              Crafting the future of Indian Cinema with AI • Made with ❤️ in Patna
            </p>
          </div>
        </div>
      </footer>

      <Assistant />
      
    </main>
  )
}