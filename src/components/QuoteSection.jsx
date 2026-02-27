import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './QuoteSection.css'

gsap.registerPlugin(ScrollTrigger)

const QUOTE = "Some days I forget how lucky I am. Then I remember you."

export default function QuoteSection() {
  const sectionRef = useRef(null)
  const quoteRef = useRef(null)
  const nameRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const quote = quoteRef.current
    const name = nameRef.current
    if (!section || !quote || !name) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        quote,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
      gsap.fromTo(
        name,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="quote-section" aria-label="A message for you">
      <div className="quote-section__bg" aria-hidden="true" />
      <div className="quote-section__overlay" aria-hidden="true" />
      <div className="quote-section__inner">
        <blockquote ref={quoteRef} className="quote-section__text">
          {QUOTE}
        </blockquote>
        <p ref={nameRef} className="quote-section__name">
          — For Anam
        </p>
      </div>
    </section>
  )
}
