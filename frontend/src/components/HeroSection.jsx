import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

const HERO_IMG =
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80'

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.14, delayChildren: 0.45 } },
}
const up = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
}

export default function HeroSection({ navigate }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY       = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const imgScale       = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-surface-deep" />
      <motion.div className="absolute inset-0 overflow-hidden" style={{ scale: imgScale }}>
        <img
          src={HERO_IMG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(145deg, rgba(6,5,4,0.90) 0%, rgba(8,7,5,0.60) 50%, rgba(6,5,4,0.90) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 72% 58% at 50% 46%, rgba(198,167,105,0.06) 0%, transparent 65%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/65 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 grain opacity-45 pointer-events-none" />

      {/* Corner brackets */}
      {[
        'top-[100px] left-7 md:left-12 border-t border-l',
        'top-[100px] right-7 md:right-12 border-t border-r',
        'bottom-12 left-7 md:left-12 border-b border-l',
        'bottom-12 right-7 md:right-12 border-b border-r',
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-10 h-10 border-gold/[0.24] pointer-events-none ${cls}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 + i * 0.1, duration: 0.8 }}
        />
      ))}

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 text-center lx-container"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div variants={stagger} initial="hidden" animate="show">

          {/* Eyebrow */}
          <motion.div className="flex items-center justify-center gap-5 mb-10" variants={up}>
            <span className="block w-10 h-px bg-gold/30 flex-shrink-0" aria-hidden="true" />
            <span
              className="font-sans uppercase text-gold tracking-wide mb-0"
              style={{ fontSize: '13px', letterSpacing: '0.28em', fontWeight: 500 }}
            >
              India Executive Search
            </span>
            <span className="block w-10 h-px bg-gold/30 flex-shrink-0" aria-hidden="true" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="lx-heading-display mb-9 text-balance"
            style={{ fontSize: 'clamp(3.2rem, 7.2vw, 6.8rem)' }}
            variants={up}
          >
            Executive Search for the
            <br />
            <em className="text-gold not-italic">World's Finest</em>
            <br />
            Hospitality Brands
          </motion.h1>

          {/* Animated gold rule */}
          <motion.div
            className="gold-rule-center mx-auto mb-10"
            style={{ width: '5rem', transformOrigin: 'center' }}
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              show:   { scaleX: 1, opacity: 1, transition: { duration: 1.2, ease: EASE } },
            }}
          />

          {/* Sub-headline */}
          <motion.p
            className="font-sans font-light leading-relaxed max-w-[560px] mx-auto mb-14"
            style={{ fontSize: 'clamp(15px, 1.55vw, 17.5px)', color: 'rgba(245,240,232,0.65)' }}
            variants={up}
          >
            Connecting visionary hospitality leaders with the world's most respected hotel and
            resort brands — India, Middle East, and Asia.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={up}
          >
            <motion.button
              onClick={() => navigate('contact')}
              className="btn-gold"
              whileHover={{ y: -3, boxShadow: '0 14px 36px rgba(198,167,105,0.28)' }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              Discuss a Leadership Mandate
              <ArrowIcon />
            </motion.button>

            <motion.button
              onClick={() => navigate('candidates')}
              className="btn-outline"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              Explore Opportunities
            </motion.button>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        aria-label="Scroll to content"
      >
        <span
          className="font-sans uppercase transition-opacity duration-300 group-hover:opacity-100 opacity-40"
          style={{ fontSize: '9px', letterSpacing: '0.26em', color: '#C6A769' }}
        >
          Scroll
        </span>
        <div className="w-px h-12 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(198,167,105,0.75))' }}
            animate={{ y: ['-100%', '120%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
          />
        </div>
      </motion.div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M2 6.5h9M7.5 3l4 3.5-4 3.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
