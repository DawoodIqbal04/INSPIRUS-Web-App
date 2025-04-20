import { grotesk, sans } from '@/font'
import React from 'react'

const CasesStudies = () => {
  return (
    <section>
        <div className="flex items-center justify-start gap-10">
                <h1 className={`text-4xl ${grotesk.className}`}>
                  <mark className="bg-primary px-2 rounded-lg">Case Studies</mark>
                </h1>
                <p className={`${sans.className} tracking-wide`}>
                Explore Real-Life Examples of Our Proven Digital Web Success<br /> through Our Case Studies
                </p>
              </div>
    </section>
  )
}

export default CasesStudies