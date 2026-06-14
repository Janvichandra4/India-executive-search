import { motion } from 'framer-motion'
import FounderSection from '../components/FounderSection'

const EASE = [0.16, 1, 0.3, 1]

const PAGE_IMG =
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1920&q=80'

const pillars = [
  {
    n: '01',
    title: 'Industry-Embedded Knowledge',
    body: 'Our principals have held senior roles within luxury hospitality. We understand what truly matters beyond the résumé — the cultural fit, operational philosophy, and leadership temperament that define lasting success.',
  },
  {
    n: '02',
    title: 'Leadership-Tier Specialisation',
    body: 'From General Managers and CHROs to Group CEOs — we operate exclusively at the leadership tier, with full retention rigour and a long-term perspective on every engagement we accept.',
  },
  {
    n: '03',
    title: 'India & Global Network',
    body: 'Headquartered in Gurgaon, with active mandates spanning South Asia, the Gulf, Southeast Asia, and Europe — a network built over fifteen years of direct, trust-based relationships.',
  },
]

const stats = [
  { value: '200+', label: 'Senior Placements'    },
  { value: '15+',  label: 'Years of Expertise'   },
  { value: '50+',  label: 'Client Organisations' },
  { value: '20+',  label: 'Countries Served'     },
]

export default function AboutPage({ navigate }) {
  return (
    <>
      <PageHero
        img={PAGE_IMG}
        label="About Us"
        heading="A Practice Built on Conviction, Not Convenience"
      />

      {/* Mission statement */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#0d0a06' }}>
        <div className="lx-container">
          <motion.div
            className="max-w-[900px] mx-auto text-center"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <p
              className="lx-heading-display text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.8vw, 3.4rem)', color: 'rgba(245,240,232,0.88)' }}
            >
              Founded on a single conviction:{' '}
              <em className="text-gold not-italic">exceptional organisations
              are built by exceptional people.</em>
            </p>
            <motion.div
              className="gold-rule-center mx-auto mt-10"
              style={{ width: '4rem' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <FounderSection />

      {/* Three pillars */}
      <section className="lx-section bg-surface-deep">
        <div className="lx-container">
          <motion.div
            className="max-w-2xl mb-16"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="lx-label">Our Differentiators</span>
            <h2
              className="lx-heading"
              style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
            >
              What Sets Our Practice Apart
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-0 border-t border-white/[0.055]">
            {pillars.map(({ n, title, body }, i) => (
              <motion.div
                key={n}
                className="group py-10 md:pr-10 border-b md:border-b-0 md:border-r border-white/[0.055] last:border-r-0"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.1, duration: 0.85, ease: EASE }}
              >
                <span
                  className="block font-serif text-gold/68 group-hover:text-gold transition-colors duration-400 mb-5 select-none leading-none"
                  style={{ fontSize: '1.7rem', fontWeight: 300 }}
                  aria-hidden="true"
                >
                  {n}
                </span>
                <h3
                  className="font-display text-pearl/90 group-hover:text-pearl mb-4 transition-colors duration-400 leading-snug"
                  style={{ fontSize: '1.18rem', fontWeight: 400 }}
                >
                  {title}
                </h3>
                <p className="lx-body text-[15.5px]">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-surface border-y border-white/[0.055]">
        <div className="lx-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
              >
                <p
                  className="font-serif text-gold mb-2 leading-none"
                  style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
                >
                  {value}
                </p>
                <p className="font-sans uppercase" style={{ fontSize: '10.5px', letterSpacing: '0.18em', color: 'rgba(245,240,232,0.55)' }}>
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        heading="Begin a Discreet Conversation"
        body="Whether you are seeking an exceptional leader for a critical mandate, or exploring your next leadership chapter, we welcome a no-obligation conversation."
        navigate={navigate}
        primaryLabel="Contact Us"
        primaryPage="contact"
        secondaryLabel="View Opportunities"
        secondaryPage="candidates"
      />
    </>
  )
}

/* ─── Shared page components ──────────────────────────── */

export function PageHero({ img, label, heading, body }) {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ minHeight: '62vh', paddingTop: '88px' }}
    >
      <div className="absolute inset-0 bg-surface-deep" />
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={img}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(6,5,4,0.96) 0%, rgba(6,5,4,0.65) 45%, rgba(6,5,4,0.42) 100%)',
        }}
      />
      <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

      <div className="relative z-10 lx-container pb-16 md:pb-24">
        <motion.span
          className="lx-label"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        >
          {label}
        </motion.span>
        <motion.h1
          className="lx-heading-display text-balance"
          style={{ fontSize: 'clamp(2.6rem, 5.8vw, 5.4rem)', maxWidth: '780px' }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: EASE, delay: 0.45 }}
        >
          {heading}
        </motion.h1>
        {body && (
          <motion.p
            className="lx-body text-[16px] mt-7 max-w-[560px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
          >
            {body}
          </motion.p>
        )}
      </div>
    </section>
  )
}

export function PageCTA({ heading, body, navigate, primaryLabel, primaryPage, secondaryLabel, secondaryPage }) {
  return (
    <section className="lx-section bg-surface-deep">
      <div className="lx-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="lx-label">Work With Us</span>
            <h2 className="lx-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>
              {heading}
            </h2>
            {body && <p className="lx-body text-[16px] mt-6">{body}</p>}
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <button onClick={() => navigate(primaryPage)} className="btn-gold">
              {primaryLabel}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 6.5h9M7.5 3l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {secondaryLabel && (
              <button onClick={() => navigate(secondaryPage)} className="btn-outline">
                {secondaryLabel}
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
