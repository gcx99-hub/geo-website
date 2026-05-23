'use client'

import { siteContent } from '@/content/content'
import { motion } from 'framer-motion'

export default function Hero() {
  const { title, trustPoints, hook, cta } = siteContent.hero

  return (
    <section className="min-h-screen flex items-center justify-center bg-warm-sand px-4 md:px-6">
      <div className="max-w-content mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-medium text-deep-blue/90 mb-6 leading-[1.2] tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-1 mb-8 text-text-secondary/80 text-sm md:text-base"
        >
          {trustPoints.map((point, idx) => (
            <p key={idx}>{point}</p>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-deep-blue/60 mb-10 max-w-2xl mx-auto font-light"
        >
          {hook}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#timeline"
            className="inline-block bg-warm-gold/10 text-deep-blue/80 font-normal px-7 py-2.5 rounded-full border border-warm-gold/30 hover:bg-warm-gold/20 hover:border-warm-gold/50 transition-all duration-200 backdrop-blur-sm"
          >
            {cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
