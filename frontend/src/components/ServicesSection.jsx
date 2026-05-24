import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const fadeUp  = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}

const services = [
  {
    n: '01',
    title: 'Executive Search & Advisory',
    body:  'Bespoke retained search for C-suite and senior leadership mandates. Every assignment is conducted with full rigour, absolute discretion, and a long-term strategic perspective.',
    tags:  ['C-Suite', 'Retained', 'Confidential'],
  },
  {
    n: '02',
    title: 'Hotel Operations Leadership',
    body:  'Targeted search for General Managers, Resident Managers, F&B Leaders, Rooms Division heads, and operational leadership across property types and brand scales.',
    tags:  ['General Managers', 'Operations', 'F&B'],
  },
  {
    n: '03',
    title: 'Commercial & Revenue Leadership',
    body:  'Leadership mandates spanning sales, marketing, revenue management, and business development — for single properties and multi-market portfolios.',
    tags:  ['Sales', 'Revenue', 'Marketing'],
  },
  {
    n: '04',
    title: 'Pre-Opening & Expansion Hiring',
    body:  'End-to-end leadership staffing support for hotel launches, brand transitions, and portfolio expansion projects — precision-timed to your opening milestones.',
    tags:  ['Pre-Opening', 'Brand Transitions', 'Expansion'],
  },
  {
    n: '05',
    title: 'Talent Advisory & Succession',
    body:  'Confidential counsel to boards, owners, and group CEOs on succession strategy, organisational design, and the hospitality talent landscape.',
    tags:  ['Boards', 'Succession', 'Advisory'],
  },
  {
    n: '06',
    title: 'Market Intelligence & Benchmarking',
    body:  'Compensation benchmarking, talent mapping, and competitive intelligence to inform high-stakes leadership decisions with accuracy and confidence.',
    tags:  ['Benchmarking', 'Talent Mapping', 'Intelligence'],
  },
  {
    n: '07',
    title: 'Digital & Technology Leadership',
    body:  'Placing technology and digital leaders who guide hospitality brands through transformation — from revenue-tech to AI adoption — without compromising the guest experience.',
    tags:  ['Technology', 'Digital', 'AI'],
  },
]

export default function ServicesSection({ navigate }) {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="services" className="lx-section bg-surface overflow-hidden">
      <div className="lx-container">

        {/* Header */}
        <motion.div
          className="grid lg:grid-cols-2 gap-10 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div>
            <motion.span className="lx-label" variants={fadeUp}>Core Services</motion.span>
            <motion.h2
              className="lx-heading"
              style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
              variants={fadeUp}
            >
              A Practice Built for
              <br />
              Hospitality Leadership
            </motion.h2>
          </div>
          <motion.p className="lx-body text-[16px] lg:self-end lg:pt-2" variants={fadeUp}>
            No volume mandates. Every engagement is executed with discretion, rigour, and long-term
            strategic focus — from initial briefing through to successful onboarding.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="border-t border-white/[0.055]"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map(({ n, title, body, tags }) => (
            <motion.div
              key={n}
              className="border-b border-white/[0.055]"
              variants={fadeUp}
            >
              <button
                className="w-full flex items-center justify-between py-7 group text-left outline-none"
                onClick={() => setExpanded(expanded === n ? null : n)}
                aria-expanded={expanded === n}
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span
                    className="font-serif flex-shrink-0 transition-colors duration-400"
                    style={{
                      fontSize: '0.95rem',
                      color: expanded === n ? 'rgba(198,167,105,0.9)' : 'rgba(198,167,105,0.30)',
                      letterSpacing: '0.06em',
                      fontWeight: 300,
                    }}
                    aria-hidden="true"
                  >
                    {n}
                  </span>
                  <span
                    className={`font-serif transition-colors duration-400 ${
                      expanded === n ? 'text-gold-light' : 'text-pearl group-hover:text-pearl/80'
                    }`}
                    style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
                  >
                    {title}
                  </span>
                </div>

                <motion.span
                  className="flex-shrink-0 ml-4 text-gold/50 group-hover:text-gold transition-colors duration-300"
                  animate={{ rotate: expanded === n ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <PlusIcon />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {expanded === n && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-[calc(1.7rem+1.5rem)] md:pl-[calc(2.5rem+2.5rem)]">
                      <p className="lx-body text-[15px] mb-5 max-w-2xl">{body}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map(tag => (
                          <span
                            key={tag}
                            className="font-sans uppercase text-dimmer border border-white/[0.08] px-3 py-1.5"
                            style={{ fontSize: '9.5px', letterSpacing: '0.18em' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {navigate && (
                        <button
                          onClick={() => navigate('contact')}
                          className="inline-flex items-center gap-2 text-gold font-sans uppercase hover:text-gold-light transition-colors duration-300 group"
                          style={{ fontSize: '10.5px', letterSpacing: '0.18em' }}
                        >
                          <span>Enquire about this service</span>
                          <motion.span className="inline-block" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                            <ArrowSmIcon />
                          </motion.span>
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function ArrowSmIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
      <path d="M2 5.5h7M6 2.5l3.5 3-3.5 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
