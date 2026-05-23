'use client'

import { siteContent } from '@/content/content'

export default function CTA() {
  const { title, description, buttonText, contactEmail } = siteContent.cta

  return (
    <section id="cta" className="py-16 md:py-20 bg-warm-sand/30">
      <div className="max-w-content mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-deep-blue/90 mb-4">
          {title}
        </h2>
        <p className="text-text-secondary/70 max-w-xl mx-auto mb-8 text-base md:text-lg font-light">
          {description}
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="inline-block bg-warm-gold/10 text-deep-blue/80 font-normal px-8 py-3 rounded-full border border-warm-gold/30 hover:bg-warm-gold/20 transition-all duration-200"
        >
          {buttonText}
        </a>
        <p className="text-text-secondary/50 text-sm mt-6">
          Email: {contactEmail}
        </p>
      </div>
    </section>
  )
}
