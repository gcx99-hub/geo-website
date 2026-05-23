'use client'

import { siteContent } from '@/content/content'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Critique() {
  const { title, issues, conclusion } = siteContent.critique
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="critique" className="py-20 md:py-24 bg-card-white">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-deep-blue text-center mb-12">
          {title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {issues.map((issue, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="pl-4 border-l-3 border-sage-green"
              style={{ borderLeftWidth: '3px', borderLeftColor: '#3A7D76' }}
            >
              <p className="text-text-primary text-base md:text-lg">{issue}</p>
            </motion.div>
          ))}
          <motion.p
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 text-xl md:text-2xl text-sage-green font-medium text-center pt-6 border-t border-border-light"
          >
            {conclusion}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
