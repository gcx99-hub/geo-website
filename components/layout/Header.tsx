'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
   <header className="sticky top-0 z-50 bg-deep-blue/80 backdrop-blur-sm text-white border-b border-white/10">
      <div className="max-w-content mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
       <Link href="/" className="text-xl font-normal tracking-wide">
          GEO·内测
      </Link>
       <nav className="hidden md:flex gap-8">
    <Link href="#timeline" className="text-white/70 hover:text-white/95 font-normal transition">周期</Link>
    <Link href="#critique" className="text-white/70 hover:text-white/95 font-normal transition">观察</Link>
    <Link href="#cta" className="text-white/70 hover:text-white/95 font-normal transition">联系</Link>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-deep-blue/95 backdrop-blur-sm px-4 pb-4"
        >
          <nav className="flex flex-col gap-4">
            <Link href="#timeline" onClick={() => setIsOpen(false)}>周期</Link>
            <Link href="#critique" onClick={() => setIsOpen(false)}>观察</Link>
            <Link href="#cta" onClick={() => setIsOpen(false)}>联系</Link>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
