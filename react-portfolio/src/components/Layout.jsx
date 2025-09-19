import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

export default function Layout({children}){
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-[#071025] transition-colors duration-300">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
          <a href="#hero" className="font-semibold text-lg text-brand">Malvin Machingura</a>

          {/* desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex gap-4 items-center">
              <li><a href="#about" className="text-sm hover:underline focus:outline-none">About</a></li>
              <li><a href="#skills" className="text-sm hover:underline focus:outline-none">Skills</a></li>
              <li><a href="#projects" className="text-sm hover:underline focus:outline-none">Projects</a></li>
              <li><a href="#contact" className="text-sm hover:underline focus:outline-none">Contact</a></li>
              <li><ThemeToggle /></li>
            </ul>
          </nav>

          {/* mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={()=>setOpen(v=>!v)}
              className="p-2 rounded focus:outline-none focus:ring"
            >
              {/* simple hamburger */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* mobile menu animated */}
        <AnimatePresence>
          {open && (
            <motion.nav initial={{opacity:0, y:-8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-8}} className="md:hidden">
              <div className="max-w-4xl mx-auto p-4 border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/70 backdrop-blur">
                <ul className="flex flex-col gap-2">
                  <li><a href="#about" onClick={()=>setOpen(false)} className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900">About</a></li>
                  <li><a href="#skills" onClick={()=>setOpen(false)} className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900">Skills</a></li>
                  <li><a href="#projects" onClick={()=>setOpen(false)} className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900">Projects</a></li>
                  <li><a href="#contact" onClick={()=>setOpen(false)} className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900">Contact</a></li>
                </ul>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {children}

      <footer className="border-t border-gray-200 dark:border-gray-800 mt-12">
        <div className="max-w-4xl mx-auto p-4 text-sm text-muted-foreground">
          <p className="text-center">© {new Date().getFullYear()} Malvin T Machingura — Built with React + Vite</p>
        </div>
      </footer>
    </div>
  )
}
