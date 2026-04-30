import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } }
const reveal  = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }

const clientSteps = [
  {
    n: '01',
    title: 'Understanding Requirements',
    body:  'A confidential briefing on the role, culture, and the leadership qualities that will drive lasting success.',
  },
  {
    n: '02',
    title: 'Market Mapping',
    body:  'A comprehensive review of available talent across domestic and international luxury hospitality markets.',
  },
  {
    n: '03',
    title: 'Candidate Sourcing',
    body:  'Direct approaches to senior professionals through our proprietary network — beyond the open market.',
  },
  {
    n: '04',
    title: 'Evaluation & Shortlisting',
    body:  'Competency-based assessment, cultural alignment interviews, and reference validation delivered as a curated shortlist.',
  },
  {
    n: '05',
    title: 'Placement & Follow-up',
    body:  'We remain engaged through offer negotiation, onboarding, and beyond to ensure enduring success.',
  },
]

const candidateSteps = [
  {
    n: '01',
    title: 'Profile Assessment',
    body:  'A thorough review of your experience, leadership style, and career trajectory to identify alignment with current mandates.',
  },
  {
    n: '02',
    title: 'Career Alignment',
    body:  'A candid conversation about your ambitions, geography preferences, and organisations where you will genuinely thrive.',
  },
  {
    n: '03',
    title: 'Interview Preparation',
    body:  'Detailed briefings on each client — culture, challenges, and expectations — so you present your most authentic self.',
  },
  {
    n: '04',
    title: 'Placement Support',
    body:  'Guidance through offer negotiation, contract review, and notice-period transition with clarity and confidence.',
  },
  {
    n: '05',
    title: 'Long-term Guidance',
    body:  'Our relationship does not end at placement. We remain a confidential sounding board throughout your leadership journey.',
  },
]

export default function ProcessSection() {
  const [tab, setTab] = useState('clients')
  const steps = tab === 'clients' ? clientSteps : candidateSteps

  return (
    <section id="process" className="lx-section bg-surface-deep overflow-hidden">
      <div className="lx-container">

        {/* Header — centered */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={stagger} initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span className="lx-label" variants={reveal} transition={{ duration: 0.8 }}>
            Our Process
          </motion.span>
          <motion.h2
            className="lx-heading text-4xl md:text-5xl mb-6"
            variants={reveal} transition={{ duration: 0.8 }}
          >
            How We Work With You
          </motion.h2>
          <motion.p className="lx-body" variants={reveal} transition={{ duration: 0.8 }}>
            A structured, transparent process designed for organisations and individuals who value precision, confidentiality, and enduring results.
          </motion.p>
        </motion.div>

        {/* Tabs — centered */}
        <motion.div
          className="flex justify-center mb-20"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="flex gap-px bg-surface-card border border-white/[0.06] p-1">
            {[
              { key: 'clients',    label: 'For Clients'    },
              { key: 'candidates', label: 'For Candidates' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-8 py-3 text-[10px] font-sans uppercase tracking-label transition-all duration-300 ${
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

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">

              {/* Connecting line — desktop only */}
              <div
                className="hidden md:block absolute top-[23px] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent pointer-events-none"
                style={{ left: '10%', right: '10%' }}
              />

              <motion.div
                className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6"
                variants={stagger} initial="hidden"
                animate="show"
              >
                {steps.map(({ n, title, body }) => (
                  <motion.div
                    key={n}
                    className="flex flex-col items-center text-center"
                    variants={reveal}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Circle number */}
                    <div
                      className="w-12 h-12 rounded-full border border-gold/35 bg-surface-deep flex items-center justify-center mb-7 relative z-10 flex-shrink-0
                                 transition-all duration-400 hover:border-gold hover:bg-surface-card"
                    >
                      <span className="font-serif text-gold text-sm">{n}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-pearl text-base mb-3 leading-snug px-1">
                      {title}
                    </h3>

                    {/* Body */}
                    <p className="lx-body text-sm leading-relaxed px-2">{body}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
