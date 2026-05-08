import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.45 } } }
const up      = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } } }

export default function HeroSection({ onNavigateOpportunities }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY       = useTransform(scrollYProgress, [0, 1], [0, 110])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Background system ── */}
      <div className="absolute inset-0 bg-surface-deep" />

      {/* Warm atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 72% 58% at 50% 46%, rgba(198,167,105,0.07) 0%, transparent 62%)',
        }}
      />

      {/* Depth gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(170deg, rgba(14,11,7,0.88) 0%, rgba(8,8,7,0.45) 48%, rgba(7,8,11,0.88) 100%)',
        }}
      />

      {/* Cinematic zoom-in on mount */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 110% 80% at 50% 50%, rgba(198,167,105,0.04) 0%, transparent 55%)',
        }}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3.5, ease: EASE }}
      />

      {/* Vignettes */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/55 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      {/* Grain */}
      <div className="absolute inset-0 grain opacity-55 pointer-events-none" />

      {/* Corner brackets — animated in */}
      {[
        'top-[84px] left-7 md:left-12 border-t border-l',
        'top-[84px] right-7 md:right-12 border-t border-r',
        'bottom-12 left-7 md:left-12 border-b border-l',
        'bottom-12 right-7 md:right-12 border-b border-r',
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-10 h-10 border-gold/[0.2] pointer-events-none ${cls}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 + i * 0.1, duration: 0.8 }}
        />
      ))}

      {/* Thin decorative horizontal band */}
      <div
        className="absolute inset-x-0 pointer-events-none hidden lg:block"
        style={{ top: 'calc(50% - 8rem)' }}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.025] to-transparent" />
      </div>

      {/* ── Parallax content wrapper ── */}
      <motion.div
        className="relative z-10 text-center lx-container"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div variants={stagger} initial="hidden" animate="show">

          {/* Eyebrow */}
          <motion.div className="flex items-center justify-center gap-4 mb-11" variants={up}>
            <span className="block w-9 h-px bg-gold/28 flex-shrink-0" aria-hidden="true" />
            <span className="lx-label mb-0">India Executive Search</span>
            <span className="block w-9 h-px bg-gold/28 flex-shrink-0" aria-hidden="true" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="lx-heading-display mb-9 text-balance"
            style={{ fontSize: 'clamp(2.75rem, 5.8vw, 5.6rem)' }}
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
            className="font-sans font-light leading-relaxed max-w-[500px] mx-auto mb-14"
            style={{ fontSize: 'clamp(14px, 1.4vw, 15.5px)', color: 'rgba(237,237,237,0.48)' }}
            variants={up}
          >
            Connecting visionary hospitality leaders with the world's most respected hotel and resort brands.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={up}
          >
            <motion.a
              href="#contact"
              className="btn-gold"
              whileHover={{ y: -3, boxShadow: '0 14px 36px rgba(198,167,105,0.26)' }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              Discuss a Leadership Mandate
              <ArrowIcon />
            </motion.a>

            <motion.button
              onClick={onNavigateOpportunities}
              className="btn-outline"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              Explore Leadership Opportunities
            </motion.button>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to content"
      >
        <span
          className="font-sans uppercase transition-opacity duration-300 group-hover:opacity-100 opacity-40"
          style={{ fontSize: '8px', letterSpacing: '0.26em', color: '#C6A769' }}
        >
          Scroll
        </span>
        <div className="w-px h-12 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full"
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
      <path d="M2 6.5h9M7.5 3l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
