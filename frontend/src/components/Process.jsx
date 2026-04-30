import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const clientSteps = [
  {
    num: '01',
    title: 'Understanding Requirements',
    body:  'A confidential briefing to understand not just the role, but your organisation\'s culture, strategic direction, and the leadership qualities that will drive lasting success.',
  },
  {
    num: '02',
    title: 'Market Mapping',
    body:  'A comprehensive landscape review of available talent — both active and passive — across domestic and international luxury hospitality markets.',
  },
  {
    num: '03',
    title: 'Candidate Sourcing',
    body:  'Direct approaches to senior professionals through our proprietary network, ensuring access to leaders who are not visible in the open market.',
  },
  {
    num: '04',
    title: 'Evaluation & Shortlisting',
    body:  'Rigorous competency-based assessment, cultural alignment interviews, and reference validation — delivered as a curated, insight-rich shortlist.',
  },
  {
    num: '05',
    title: 'Placement & Follow-up',
    body:  'We remain engaged through offer negotiation, onboarding, and beyond — ensuring a smooth transition and long-term success for both parties.',
  },
]

const candidateSteps = [
  {
    num: '01',
    title: 'Profile Assessment',
    body:  'A thorough review of your experience, leadership style, and career trajectory to identify alignment with current and emerging mandates.',
  },
  {
    num: '02',
    title: 'Career Alignment',
    body:  'A candid conversation about your ambitions, preferred geographies, and the type of organisation where you will genuinely thrive.',
  },
  {
    num: '03',
    title: 'Interview Preparation',
    body:  'Detailed briefings on each client — their culture, challenges, and expectations — so you present your most compelling and authentic self.',
  },
  {
    num: '04',
    title: 'Placement Support',
    body:  'Guidance through offer negotiation, contract review, and notice-period transition, ensuring clarity and confidence at every stage.',
  },
  {
    num: '05',
    title: 'Long-term Career Guidance',
    body:  'Our relationship does not end at placement. We remain a confidential sounding board throughout your leadership journey.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Process() {
  const [tab, setTab] = useState('clients')
  const steps = tab === 'clients' ? clientSteps : candidateSteps

  return (
    <section id="process" className="bg-luxury py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <motion.span className="section-label" {...fadeUp(0)}>
              Our Process
            </motion.span>
            <motion.h2 className="section-title" {...fadeUp(0.1)}>
              How We Work With You
            </motion.h2>
          </div>
          <motion.p className="text-cream-muted font-light leading-relaxed" {...fadeUp(0.2)}>
            A structured, transparent process designed for organisations and individuals who value precision, confidentiality, and enduring results — not just rapid fulfilment.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          className="flex gap-1 bg-luxury-card border border-luxury-border p-1 rounded-none w-fit mb-16"
          {...fadeUp(0.3)}
        >
          {[
            { key: 'clients',     label: 'For Clients'    },
            { key: 'candidates',  label: 'For Candidates' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-7 py-3 text-xs font-sans uppercase tracking-label transition-all duration-300 ${
                tab === key
                  ? 'bg-gold text-luxury'
                  : 'text-cream-muted hover:text-cream'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {steps.map(({ num, title, body }, i) => (
              <motion.div
                key={num}
                className="relative group"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="bg-luxury-card border border-luxury-border p-8 h-full
                                transition-all duration-500 group-hover:border-gold/30 group-hover:bg-luxury-hover">

                  {/* Step number */}
                  <div
                    className="font-serif text-gold/30 group-hover:text-gold/50 transition-colors duration-300 mb-4 leading-none select-none"
                    style={{ fontSize: '3rem', letterSpacing: '-0.02em' }}
                    aria-hidden="true"
                  >
                    {num}
                  </div>

                  <h3 className="font-serif text-cream text-lg mb-3 group-hover:text-gold-light transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-cream-muted text-sm font-light leading-relaxed">{body}</p>

                  {/* Connecting line for all except last */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-0 right-0 hidden lg:block w-px h-full bg-luxury-border translate-x-3 pointer-events-none" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
