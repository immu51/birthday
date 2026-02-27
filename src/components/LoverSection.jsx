import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './LoverSection.css'

gsap.registerPlugin(ScrollTrigger)

export default function LoverSection() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const overlayRef = useRef(null)
  const titleRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const bg = bgRef.current
    const overlay = overlayRef.current
    const title = titleRef.current
    const line = lineRef.current
    if (!section || !bg || !title || !line) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        { scale: 1.15 },
        {
          scale: 1,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'center center',
            scrub: 1.2,
          },
        }
      )
      gsap.fromTo(
        overlay,
        { opacity: 0.6 },
        {
          opacity: 0.4,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'center center',
            scrub: true,
          },
        }
      )
      gsap.fromTo(
        title,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
      gsap.fromTo(
        line,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.25,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="lover-section" aria-label="For the two of us">
      <div ref={bgRef} className="lover-section__bg" />
      <div ref={overlayRef} className="lover-section__overlay" aria-hidden="true" />
      <div className="lover-section__vignette" aria-hidden="true" />
      <div className="lover-section__grain" aria-hidden="true" />
      <div className="lover-section__content">
        <h2 ref={titleRef} className="lover-section__title">
          You &amp; I
        </h2>
        <p ref={lineRef} className="lover-section__line">
          My favourite place is wherever you are.
        </p>
      </div>
    </section>
  )
}
