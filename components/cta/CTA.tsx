'use client'

import { siteContent } from '@/content/content'

export default function CTA() {
  const { title, description, buttonText, contactEmail } = siteContent.cta

  return (
    <section id="cta" className="py-20 md:py-28 bg-warm-sand">
      <div className="max-w-content mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-deep-blue mb-4">
          {title}
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto mb-8 text-lg">
          {description}
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="inline-block bg-warm-gold text-deep-blue font-semibold px-8 py-3 rounded-lg shadow-card hover:bg-amber-500 hover:-translate-y-0.5 transition-all duration-200"
        >
          {buttonText}
        </a>
        <p className="text-text-secondary text-sm mt-6">
          Email: {contactEmail}
        </p>
      </div>
    </section>
  )
}
