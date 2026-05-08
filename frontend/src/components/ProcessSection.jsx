import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp  = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}

const clientSteps = [
  {
    n: '01',
    title: 'Confidential Mandate Briefing',
    body:  'A private briefing on the role context, organisational culture, and the leadership qualities that will drive lasting success beyond formal competencies.',
  },
  {
    n: '02',
    title: 'Leadership Talent Mapping',
    body:  'A comprehensive review of the available leadership landscape — domestic and international — identifying exceptional individuals who fit the precise mandate profile.',
  },
  {
    n: '03',
    title: 'Proprietary Network Activation',
    body:  'Direct, discreet approaches to senior professionals through our trusted network — accessing candidates beyond the visible market who are not actively exploring.',
  },
  {
    n: '04',
    title: 'Evaluation & Curated Shortlist',
    body:  'Competency-based assessment, cultural alignment conversations, and thorough reference validation — delivered as a refined, fully-contextualised shortlist.',
  },
  {
    n: '05',
    title: 'Placement & Onboarding Support',
    body:  'Engaged through offer negotiation, onboarding, and the critical early months — ensuring a seamless, enduring transition for both client and candidate.',
  },
]

const candidateSteps = [
  {
    n: '01',
    title: 'Profile & Trajectory Assessment',
    body:  'A thorough exploration of your leadership experience, philosophy, and career arc — to understand where your capabilities align with current and upcoming mandates.',
  },
  {
    n: '02',
    title: 'Career & Ambition Alignment',
    body:  'A candid conversation about your aspirations, geographic preferences, and the organisations where you will genuinely thrive — not just succeed.',
  },
  {
    n: '03',
    title: 'Curated Opportunity Matching',
    body:  'Confidential introductions to client organisations that represent a considered match — not a blanket circulation of your profile.',
  },
  {
    n: '04',
    title: 'Preparation & Client Briefing',
    body:  'Detailed briefings on each client — culture, strategic challenges, and leadership expectations — ensuring you present your most authentic self.',
  },
  {
    n: '05',
    title: 'Transition & Long-term Partnership',
    body:  'Guidance through offer, contract, and notice period — and a continuing relationship long after placement, as your trusted leadership sounding board.',
  },
]

export default function ProcessSection() {
  const [tab, setTab] = useState('clients')
  const steps = tab === 'clients' ? clientSteps : candidateSteps

  return (
    <section id="process" className="lx-section bg-surface-deep overflow-hidden">
      <div className="lx-container">

        {/* Header */}
        <motion.div
          className="grid lg:grid-cols-2 gap-10 mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <motion.span className="lx-label" variants={fadeUp}>Our Process</motion.span>
            <motion.h2
              className="lx-heading"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)' }}
              variants={fadeUp}
            >
              A Methodology Built<br />
              for Precision
            </motion.h2>
          </div>
          <motion.p className="lx-body text-[14.5px] lg:self-end" variants={fadeUp}>
            A structured, transparent process designed for organisations and individuals who value
            confidentiality, precision, and enduring results.
          </motion.p>
        </motion.div>

        {/* Tab toggle */}
        <motion.div
          className="flex mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="flex gap-px bg-white/[0.05] border border-white/[0.06] p-1">
            {[
              { key: 'clients',    label: 'For Clients'    },
              { key: 'candidates', label: 'For Candidates' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-8 py-3 text-[9.5px] font-sans uppercase tracking-label transition-all duration-350 outline-none ${
                  tab === key
                    ? 'bg-gold text-surface-deep font-medium'
                    : 'text-dim hover:text-pearl'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Steps — vertical timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <motion.div
              className="space-y-0"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {steps.map(({ n, title, body }, i) => (
                <motion.div
                  key={n}
                  className="grid md:grid-cols-[80px_1fr] gap-0 group"
                  variants={fadeUp}
                >
                  {/* Left: Number + vertical connector */}
                  <div className="relative flex flex-col items-center pt-8 pb-0 hidden md:flex">
                    {/* Circle */}
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 relative z-10
                        transition-all duration-500 group-hover:border-gold
                        ${i === 0 ? 'border-gold/60 bg-surface-deep' : 'border-white/15 bg-surface-deep'}`}
                    >
                      <span className="font-serif text-gold/70 text-[12px]">{n}</span>
                    </div>
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 mt-3" style={{ background: 'rgba(255,255,255,0.055)' }} />
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="py-8 md:pl-8 border-b border-white/[0.055] last:border-b-0">
                    {/* Mobile number */}
                    <span className="md:hidden lx-label mb-3">{n}</span>
                    <h3
                      className="font-display text-pearl/90 group-hover:text-pearl mb-3 transition-colors duration-400"
                      style={{ fontSize: '1.1rem', fontWeight: 400, lineHeight: 1.3 }}
                    >
                      {title}
                    </h3>
                    <p className="lx-body text-[13.5px] max-w-2xl">{body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
