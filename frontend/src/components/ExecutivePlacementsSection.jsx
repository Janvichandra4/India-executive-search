import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const fadeUp  = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}

/* Leadership hierarchy displayed as a typographic cluster */
const tiers = [
  {
    label: 'Group Leadership',
    roles: ['Group Chief Executive', 'Managing Director', 'Chief Operating Officer'],
    size:  'text-[1.15rem] md:text-[1.3rem]',
  },
  {
    label: 'Functional Leaders',
    roles: ['Chief Human Resources Officer', 'VP Commercial', 'Head of Development'],
    size:  'text-base md:text-[1.1rem]',
  },
  {
    label: 'Property Leadership',
    roles: ['General Manager', 'Resident Manager', 'Director of Operations'],
    size:  'text-sm md:text-base',
  },
  {
    label: 'Departmental Heads',
    roles: ['Director — Food & Beverage', 'Director — Revenue Management', 'Director — Sales & Marketing'],
    size:  'text-[13px] md:text-sm',
  },
]

export default function ExecutivePlacementsSection() {
  return (
    <section className="lx-section bg-surface-deep overflow-hidden">
      <div className="lx-container">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — heading */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span className="lx-label" variants={fadeUp}>Leadership Scope</motion.span>

            <motion.h2
              className="lx-heading mb-7"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)' }}
              variants={fadeUp}
            >
              From General Managers to<br />
              Group CEOs
            </motion.h2>

            <motion.div
              className="gold-rule w-12 mb-8"
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } } }}
              style={{ transformOrigin: 'left' }}
            />

            <motion.p className="lx-body text-[14.5px] mb-10" variants={fadeUp}>
              From General Managers and Commercial Directors to CHROs, Development Heads, and Group
              CEOs — we operate exclusively at the leadership tier, with the rigour and network that
              elite mandates demand.
            </motion.p>

            <motion.a href="#contact" className="btn-gold" variants={fadeUp}
              whileHover={{ y: -3 }} transition={{ duration: 0.3, ease: EASE }}>
              Discuss a Mandate
              <ArrowIcon />
            </motion.a>
          </motion.div>

          {/* Right — role cluster */}
          <motion.div
            className="relative"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Background large numeral */}
            <div
              className="absolute -top-10 -right-4 font-serif text-white/[0.025] select-none pointer-events-none leading-none"
              style={{ fontSize: '14rem', fontWeight: 300 }}
              aria-hidden="true"
            >
              L
            </div>

            <div className="relative space-y-0">
              {tiers.map(({ label, roles, size }, ti) => (
                <motion.div
                  key={label}
                  className="group border-b border-white/[0.055] last:border-b-0 py-6"
                  variants={fadeUp}
                >
                  {/* Tier label */}
                  <p className="lx-label mb-4 text-[8px]">{label}</p>

                  {/* Roles */}
                  <div className="flex flex-wrap gap-3">
                    {roles.map(role => (
                      <span
                        key={role}
                        className={`font-serif text-dim group-hover:text-pearl/80 transition-colors duration-400 ${size}`}
                        style={{ fontWeight: 300, letterSpacing: '-0.01em' }}
                      >
                        {role}
                        {roles.indexOf(role) < roles.length - 1 && (
                          <span className="text-gold/30 ml-3 mr-0 not-italic" aria-hidden="true">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

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
