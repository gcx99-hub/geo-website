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
          className="text-3xl md:text-5xl font-bold text-deep-blue mb-6 leading-tight"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2 mb-8 text-text-secondary"
        >
          {trustPoints.map((point, idx) => (
            <p key={idx}>{point}</p>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-deep-blue/80 mb-10 max-w-2xl mx-auto"
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
            className="inline-block bg-warm-gold text-deep-blue font-semibold px-8 py-3 rounded-lg shadow-card hover:bg-amber-500 hover:-translate-y-0.5 transition-all duration-200"
          >
            {cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
