import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp  = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}

const differentiators = [
  {
    n: '01',
    title: 'Deep Hospitality Specialisation',
    body:  'We work exclusively within hospitality. Our principals have operated inside the sector — giving us context and insight that generalist firms simply cannot replicate.',
  },
  {
    n: '02',
    title: 'Leadership-Only Search Focus',
    body:  'We do not recruit below the leadership tier. Every assignment receives our full attention, network, and institutional knowledge.',
  },
  {
    n: '03',
    title: 'Confidential Search Execution',
    body:  'Discretion is foundational to our practice. Leadership transitions are managed with complete confidentiality — for clients and candidates alike.',
  },
  {
    n: '04',
    title: 'India · Middle East · Asia Network',
    body:  'An active, trust-based network across South Asia, the Gulf, and Southeast Asia — built over fifteen years of direct relationships.',
  },
  {
    n: '05',
    title: 'Passive-Candidate Reach',
    body:  'The best leaders are rarely available. Our network access extends beyond the open market — reaching senior professionals who are not actively seeking.',
  },
  {
    n: '06',
    title: 'Founder-Led Engagement Model',
    body:  'Every mandate is personally led by our founder. You work with the principal, not a junior researcher — ensuring strategic alignment throughout.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="lx-section bg-surface-deep">
      <div className="lx-container">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.span className="lx-label" variants={fadeUp}>Why Partner With Us</motion.span>
          <motion.h2
            className="lx-heading mb-6"
            style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)' }}
            variants={fadeUp}
          >
            Why Hospitality Brands<br />
            Choose{' '}
            <span style={{ color: 'rgba(245,240,232,1)' }}>India Executive Search</span>
          </motion.h2>
          <motion.p className="lx-body text-[14.5px]" variants={fadeUp}>
            A practice designed around the demands of leadership-level mandates — not operational
            volume or generalist positioning.
          </motion.p>
        </motion.div>

        {/* 2-column grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-x-12 gap-y-0"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {differentiators.map(({ n, title, body }) => (
            <motion.div
              key={n}
              className="group border-b border-white/[0.055] py-8 flex gap-8 items-start"
              variants={fadeUp}
            >
              {/* Number */}
              <span
                className="font-serif text-gold/68 group-hover:text-gold transition-colors duration-300 flex-shrink-0 mt-0.5"
                style={{ fontSize: '1.3rem', letterSpacing: '0.06em', fontWeight: 300 }}
                aria-hidden="true"
              >
                {n}
              </span>

              <div>
                <h3
                  className="font-display text-pearl/90 group-hover:text-pearl mb-2.5 transition-colors duration-400 leading-snug"
                  style={{ fontSize: '1.05rem', fontWeight: 400 }}
                >
                  {title}
                </h3>
                <p className="lx-body text-[13.5px]">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-20 pt-10 border-t border-white/[0.055] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="font-serif text-pearl/70" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', fontWeight: 300 }}>
            Ready to discuss your next leadership mandate?
          </p>
          <motion.a
            href="#contact"
            className="btn-gold flex-shrink-0"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            Begin a Conversation
            <ArrowIcon />
          </motion.a>
        </motion.div>

      </div>
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
