import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './MomentSection.css'

gsap.registerPlugin(ScrollTrigger)

export default function MomentSection() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const lineRef = useRef(null)
  const yearRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const bg = bgRef.current
    const line = lineRef.current
    const year = yearRef.current
    if (!section || !bg || !line || !year) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        { scale: 1.1 },
        {
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
          },
        }
      )
      gsap.fromTo(
        line,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
      gsap.fromTo(
        year,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="moment-section" aria-label="A moment">
      <div ref={bgRef} className="moment-section__bg" />
      <div className="moment-section__overlay" />
      <div className="moment-section__vignette" aria-hidden="true" />
      <div className="moment-section__grain" aria-hidden="true" />
      <div className="moment-section__content">
        <p ref={lineRef} className="moment-section__line">
          Every moment with you feels like a gift.
        </p>
        <span ref={yearRef} className="moment-section__year">
          Always.
        </span>
      </div>
    </section>
  )
}
