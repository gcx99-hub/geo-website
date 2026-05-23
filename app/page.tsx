'use client'

import Hero from '@/components/hero/Hero'
import Timeline from '@/components/timeline/Timeline'
import Critique from '@/components/critique/Critique'
import CTA from '@/components/cta/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      <Critique />
      <CTA />
    </>
  )
}
