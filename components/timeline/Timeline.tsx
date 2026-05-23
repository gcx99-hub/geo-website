'use client'

import { siteContent } from '@/content/content'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const difficultyMap = {
  easy: { bg: '#DCFCE7', text: '#16A34A', label: '红利期' },
  medium: { bg: '#FEF9C3', text: '#CA8A04', label: '升温期' },
  hard: { bg: '#FFE4E6', text: '#E11D48', label: '内卷期' },
  unknown: { bg: '#F3E8FF', text: '#7C3AED', label: '新常态' },
}

export default function Timeline() {
  const { title, leftColumnLabel, rightColumnLabel, nodes } = siteContent.timeline
  const [visibleNodes, setVisibleNodes] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'))
            setVisibleNodes((prev) => {
              const newArr = [...prev]
              newArr[idx] = true
              return newArr
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px' }
    )

    const items = document.querySelectorAll('.timeline-node')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="timeline" className="py-16 md:py-20 bg-warm-sand/50">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-medium text-deep-blue/90 text-center mb-12">
          {title}
        </h2>
        <div className="hidden md:flex justify-between mb-4 text-sm text-text-secondary/60">
          <div className="w-[37%]">{leftColumnLabel}</div>
          <div className="w-[12%] text-center"></div>
          <div className="w-[37%]">{rightColumnLabel}</div>
        </div>

        <div className="space-y-8">
          {nodes.map((node, idx) => {
            const { bg, text, label } = difficultyMap[node.difficulty as keyof typeof difficultyMap]
            return (
              <div
                key={idx}
                className="timeline-node flex flex-col md:flex-row justify-between items-start gap-4"
                data-idx={idx}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={visibleNodes[idx] ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="md:w-[37%] bg-card-white/60 p-5 rounded-2xl border-0 shadow-sm backdrop-blur-sm"
                >
                  <div className="text-sm text-text-secondary/70 mb-1">{node.phase}</div>
                  <div className="text-base font-normal text-text-primary/90">{node.seoDescription}</div>
                </motion.div>

                <div className="md:w-[12%] flex justify-center text-text-secondary/30 text-xl">
                  →
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={visibleNodes[idx] ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.1 + 0.1 }}
                  className="md:w-[37%] bg-card-white/60 p-5 rounded-2xl shadow-sm backdrop-blur-sm"
                  style={{ borderLeft: `3px solid ${text}` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium" style={{ color: text }}>
                      {node.geoStatus}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: bg, color: text }}>
                      {label}
                    </span>
                  </div>
                  <div className="text-base font-normal text-text-primary/90">{node.geoDescription}</div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
