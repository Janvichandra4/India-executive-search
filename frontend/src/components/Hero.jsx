import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-luxury" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(14,34,18,0.55) 0%, transparent 70%)',
        }}
      />

      {/* Grain */}
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-60" />

      {/* Decorative horizontal rule — top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-border to-transparent" />

      {/* Watermark monogram */}
      <div
        className="absolute select-none pointer-events-none"
        aria-hidden="true"
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(180px, 30vw, 420px)',
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(201,169,110,0.045)',
          letterSpacing: '-0.05em',
          userSelect: 'none',
        }}
      >
        IES
      </div>

      {/* Corner brackets */}
      <div className="absolute top-24 left-8 md:left-14 w-12 h-12 border-t border-l border-gold/30 pointer-events-none" />
      <div className="absolute top-24 right-8 md:right-14 w-12 h-12 border-t border-r border-gold/30 pointer-events-none" />
      <div className="absolute bottom-16 left-8 md:left-14 w-12 h-12 border-b border-l border-gold/30 pointer-events-none" />
      <div className="absolute bottom-16 right-8 md:right-14 w-12 h-12 border-b border-r border-gold/30 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6 md:px-10"
        style={{ y, opacity }}
      >
        {/* Label */}
        <motion.span
          className="section-label justify-center flex"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          India Executive Search
        </motion.span>

        {/* Headline */}
        <motion.h1
          className="font-serif font-light text-cream leading-tight mb-6 text-balance"
          style={{
            fontSize: 'clamp(2.6rem, 6vw, 5.2rem)',
            letterSpacing: '-0.025em',
            lineHeight: '1.1',
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Executive Search for the
          <br />
          <em className="text-gold not-italic">World's Finest</em> Hospitality Brands
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="gold-line w-16 mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Subheadline */}
        <motion.p
          className="font-sans font-light text-cream-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Connecting visionary leaders with luxury hospitality, travel, and tourism organisations worldwide.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#contact" className="btn-primary">
            Hire Talent
            <ArrowRight />
          </a>
          <a href="#services" className="btn-secondary">
            Explore Opportunities
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-cream-faint text-xs font-sans uppercase tracking-label">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-luxury-border to-gold/60"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
