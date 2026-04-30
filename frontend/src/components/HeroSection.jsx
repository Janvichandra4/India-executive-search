import { motion } from 'framer-motion'

/* ── shared variants ── */
const reveal = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0 },
}
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.18 } },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-surface-deep" />

      {/* Zoom-in atmosphere layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 45%, rgba(198,167,105,0.055) 0%, transparent 65%),' +
            'linear-gradient(175deg, #0d0b08 0%, #0a0a0a 45%, #080808 100%)',
        }}
        initial={{ scale: 1.1, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Dark overlay — simulates hero photo overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* Grain */}
      <div className="absolute inset-0 grain opacity-50 pointer-events-none" />

      {/* Corner brackets */}
      {[
        'top-24 left-10 md:left-16 border-t border-l',
        'top-24 right-10 md:right-16 border-t border-r',
        'bottom-16 left-10 md:left-16 border-b border-l',
        'bottom-16 right-10 md:right-16 border-b border-r',
      ].map((cls, i) => (
        <div key={i} className={`absolute w-10 h-10 border-gold/25 pointer-events-none ${cls}`} />
      ))}

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 text-center lx-container"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Label */}
        <motion.span
          className="lx-label justify-center flex"
          variants={reveal}
          transition={{ duration: 0.8 }}
        >
          India Executive Search
        </motion.span>

        {/* Headline */}
        <motion.h1
          className="lx-heading mb-7"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)', lineHeight: '1.08' }}
          variants={reveal}
          transition={{ duration: 0.9 }}
        >
          Executive Search for the
          <br />
          <em className="text-gold not-italic">World's Finest</em>
          <br />
          Hospitality Brands
        </motion.h1>

        {/* Rule */}
        <motion.div
          className="gold-rule w-14 mx-auto mb-8"
          variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Sub */}
        <motion.p
          className="lx-body text-lg max-w-xl mx-auto mb-12"
          variants={reveal}
          transition={{ duration: 0.8 }}
        >
          Connecting visionary leaders with luxury hospitality, travel, and tourism organisations worldwide.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={reveal}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="btn-gold"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Hire Talent
            <ArrowRight />
          </motion.a>
          <motion.a
            href="#services"
            className="btn-outline"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Explore Opportunities
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ cursor: 'pointer' }}
      >
        <span className="text-dimmer text-[10px] font-sans uppercase tracking-wide">Scroll</span>
        <motion.div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(198,167,105,0.2), rgba(198,167,105,0.6))', transformOrigin: 'top' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2.5 7.5h10M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
