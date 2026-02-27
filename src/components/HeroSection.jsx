import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import './HeroSection.css'

const LINES = [
  'You are my calm.',
  'My chaos.',
  'My forever.',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
}

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function HeroSection() {
  const bgRef = useRef(null)

  useEffect(() => {
    if (!bgRef.current) return
    gsap.to(bgRef.current, {
      scale: 1.08,
      duration: 8,
      ease: 'power2.out',
    })
  }, [])

  return (
    <section className="hero" aria-label="Birthday dedication">
      <div ref={bgRef} className="hero__bg" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__vignette" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__bokeh hero__bokeh--1" aria-hidden="true" />
      <div className="hero__bokeh hero__bokeh--2" aria-hidden="true" />
      <div className="hero__bokeh hero__bokeh--3" aria-hidden="true" />
      <div className="hero__content">
        <motion.h1
          className="hero__title"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
            hidden: {},
          }}
        >
          <motion.span
            className="hero__title-word"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
          >
            Happy
          </motion.span>{' '}
          <motion.span
            className="hero__title-word"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
          >
            Birthday.
          </motion.span>
        </motion.h1>
        <motion.p
          className="hero__name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Anam
        </motion.p>
        <motion.div
          className="hero__lines"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {LINES.map((line, i) => (
            <motion.span key={i} className="hero__line" variants={lineVariants}>
              {line}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="hero__scroll"
        aria-hidden="true"
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: { delay: 2, duration: 0.8 },
          y: {
            delay: 2.5,
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <span className="hero__scroll-arrow" />
      </motion.div>
    </section>
  )
}
