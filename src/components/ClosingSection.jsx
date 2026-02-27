import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ClosingSection.css'

gsap.registerPlugin(ScrollTrigger)

export default function ClosingSection() {
  const sectionRef = useRef(null)
  const greetingRef = useRef(null)
  const wishRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const greeting = greetingRef.current
    const wish = wishRef.current
    const line = lineRef.current
    if (!section || !greeting || !wish || !line) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        greeting,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
      gsap.fromTo(
        wish,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.9,
          delay: 0.35,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          delay: 0.6,
          ease: 'power2.out',
          transformOrigin: 'center',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="closing-section" aria-label="To Anam">
      <div className="closing-section__bg" aria-hidden="true" />
      <div className="closing-section__overlay" aria-hidden="true" />
      <div className="closing-section__inner">
        <p ref={greetingRef} className="closing-section__greeting">
          Happy Birthday, Anam.
        </p>
        <p ref={wishRef} className="closing-section__wish">
          Here’s to more calm, more chaos, and forever.
        </p>
        <div ref={lineRef} className="closing-section__line" />
      </div>
    </section>
  )
}
