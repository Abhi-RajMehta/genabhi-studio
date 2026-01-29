"use client"
import React, { createContext, useContext, useState } from 'react'

const themes: any = {
  default: { color: "#00f2ff", name: "GenAbhi Standard" },
  krishna: { color: "#ffcc00", name: "Divine Gold" },
  mughal: { color: "#00ff88", name: "Royal Emerald" },
  neon: { color: "#ff00ff", name: "Cyberpunk Pink" },
  danger: { color: "#ff4d4d", name: "Crimson Red" },
  space: { color: "#8800ff", name: "Deep Nebula" },
  sun: { color: "#ff8800", name: "Solar Flare" },
  matrix: { color: "#003300", name: "Matrix Grid" },
  ice: { color: "#ffffff", name: "Arctic Frost" },
  ocean: { color: "#0044ff", name: "Deep Sea" }
}

const ThemeContext = createContext<any>(null)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.default)

  const changeTheme = (prompt: string) => {
    const p = prompt.toLowerCase()
    
    // Smart Mapping
    if (p.includes("krishna") || p.includes("gold")) setCurrentTheme(themes.krishna)
    else if (p.includes("mughal") || p.includes("green") || p.includes("nature")) setCurrentTheme(themes.mughal)
    else if (p.includes("neon") || p.includes("pink") || p.includes("cyber")) setCurrentTheme(themes.neon)
    else if (p.includes("red") || p.includes("danger") || p.includes("fire")) setCurrentTheme(themes.danger)
    else if (p.includes("space") || p.includes("purple") || p.includes("galaxy")) setCurrentTheme(themes.space)
    else if (p.includes("sun") || p.includes("orange") || p.includes("warm")) setCurrentTheme(themes.sun)
    else if (p.includes("matrix") || p.includes("code")) setCurrentTheme(themes.matrix)
    else if (p.includes("ice") || p.includes("white") || p.includes("cold")) setCurrentTheme(themes.ice)
    else if (p.includes("ocean") || p.includes("blue") || p.includes("water")) setCurrentTheme(themes.ocean)
    else setCurrentTheme(themes.default)
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)