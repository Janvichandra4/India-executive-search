import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'

const EASE = [0.16, 1, 0.3, 1]

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'
const INTERLUDE_IMG =
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1920&q=80'

const stats = [
  { value: '200+', label: 'Senior Placements'    },
  { value: '15+',  label: 'Years of Expertise'   },
  { value: '50+',  label: 'Client Organisations' },
  { value: '20+',  label: 'Countries Served'     },
]

export default function HomePage({ navigate }) {
  return (
    <>
      <HeroSection navigate={navigate} />
      <CredentialStrip />
      <AboutPreview navigate={navigate} />
      <ServicesSection navigate={navigate} />
      <VisualInterlude />
      <TestimonialsSection />
      <HomeCTA navigate={navigate} />
    </>
  )
}

/* ─── Credential strip ─────────────────────────────────── */

function CredentialStrip() {
  return (
    <section className="py-14 border-y border-white/[0.055]" style={{ backgroundColor: '#0d0a06' }}>
      <div className="lx-container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              className={`text-center py-4 ${i < stats.length - 1 ? 'border-r border-white/[0.07]' : ''}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.7, ease: EASE }}
            >
              <p
                className="font-serif text-gold mb-1.5 leading-none"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
              >
                {value}
              </p>
              <p className="font-sans text-dimmer uppercase" style={{ fontSize: '10.5px', letterSpacing: '0.18em' }}>
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── About preview (editorial split screen) ───────────── */

function AboutPreview({ navigate }) {
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  }

  return (
    <section className="lx-section bg-surface overflow-hidden">
      <div className="lx-container">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-14 lg:gap-24 items-center">

          {/* Image column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src={ABOUT_IMG}
                alt="Luxury resort infinity pool overlooking the ocean"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              {/* Bottom fade */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(8,7,6,0.55))' }}
              />
              {/* Thin gold inner border */}
              <div className="absolute inset-4 border border-gold/[0.12] pointer-events-none" />
            </div>

            {/* Location caption */}
            <p className="lx-label mt-5 mb-0 opacity-60">India · Middle East · Asia</p>

            {/* Dot grid accent */}
            <div
              className="absolute -bottom-5 -right-4 w-24 h-24 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #C6A769 1px, transparent 1px)',
                backgroundSize: '9px 9px',
              }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Content column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span className="lx-label" variants={fadeUp}>About India Executive Search</motion.span>

            <motion.h2
              className="lx-heading mb-7 text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
              variants={fadeUp}
            >
              Where Deep Expertise
              <br />
              Meets Discreet Counsel
            </motion.h2>

            <motion.div
              className="gold-rule w-14 mb-9"
              style={{ transformOrigin: 'left' }}
              variants={{
                hidden: { scaleX: 0 },
                show:   { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
              }}
            />

            <motion.p className="lx-body text-[16px] mb-6" variants={fadeUp}>
              Founded on a single conviction — that exceptional organisations are built by exceptional
              people. For over fifteen years, we have served as trusted talent advisors to the world's
              most distinguished hospitality brands.
            </motion.p>

            <motion.p className="lx-body text-[16px] mb-12" variants={fadeUp}>
              Rooted in India and operating across global luxury corridors, we bring rigorous industry
              knowledge, an extensive network, and an unwavering commitment to precision in every
              assignment.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" variants={fadeUp}>
              <button onClick={() => navigate('about')} className="btn-gold">
                Our Story
                <Arr />
              </button>
              <button onClick={() => navigate('employers')} className="btn-outline">
                For Employers
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ─── Visual interlude ─────────────────────────────────── */

function VisualInterlude() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height: '62vh' }}>
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: 1.18 }}>
        <img
          src={INTERLUDE_IMG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(6,5,4,0.6) 0%, rgba(6,5,4,0.75) 100%)' }}
      />
      <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

      {/* Centered statement */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center lx-container">

        <motion.div
          className="mb-8 opacity-[0.18]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.18, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: EASE }}
          aria-hidden="true"
        >
          <svg width="64" height="46" viewBox="0 0 64 46" fill="none">
            <path
              d="M0 46V28C0 13.5 8.5 4.5 25.5 0L29 6.5C21 9 16.5 15 16.5 20.5H27.5V46H0zm36 0V28C36 13.5 44.5 4.5 61.5 0L65 6.5C57 9 52.5 15 52.5 20.5H63.5V46H36z"
              fill="#C6A769"
            />
          </svg>
        </motion.div>

        <motion.p
          className="lx-heading-display text-balance max-w-[820px]"
          style={{ fontSize: 'clamp(1.7rem, 4vw, 3.5rem)', color: 'rgba(245,240,232,0.88)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
        >
          Every engagement is executed with{' '}
          <em className="text-gold not-italic">discretion, rigour,</em>
          {' '}and long-term strategic focus.
        </motion.p>

        <motion.div
          className="gold-rule-center mx-auto my-9"
          style={{ width: '4rem' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
        />

        <motion.p
          className="lx-label mb-0"
          style={{ opacity: 0.6 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          No Volume Mandates &nbsp;·&nbsp; Founder-Led &nbsp;·&nbsp; Always Retained
        </motion.p>
      </div>
    </section>
  )
}

/* ─── Home CTA ─────────────────────────────────────────── */

function HomeCTA({ navigate }) {
  return (
    <section className="lx-section bg-surface-deep">
      <div className="lx-container">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="lx-label">Begin a Conversation</span>
            <h2
              className="lx-heading mb-6 text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
            >
              Your Next Leadership
              <br />
              Chapter Starts Here
            </h2>
            <div className="gold-rule w-14 mb-8" />
            <p className="lx-body text-[16px]">
              Whether you represent a hotel group seeking your next General Manager, or you are a
              senior executive ready for your next chapter — we are here for a discreet,
              no-obligation conversation.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <button onClick={() => navigate('employers')} className="btn-gold">
              For Employers
              <Arr />
            </button>
            <button onClick={() => navigate('candidates')} className="btn-outline">
              For Candidates
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function Arr() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2 6.5h9M7.5 3l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
