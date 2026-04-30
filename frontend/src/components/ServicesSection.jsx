import { motion } from 'framer-motion'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } }
const reveal  = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }

const services = [
  {
    n: '01',
    Icon: SearchIcon,
    title: 'Executive Search',
    body:  'Bespoke retained search for C-suite and senior leadership mandates. Every assignment is approached with full rigour and absolute discretion.',
  },
  {
    n: '02',
    Icon: PeopleIcon,
    title: 'Leadership Hiring',
    body:  'Strategic acquisition of General Managers, department heads, and functional leaders who define brand culture and operational excellence.',
  },
  {
    n: '03',
    Icon: AdvisoryIcon,
    title: 'Talent Advisory',
    body:  'Confidential counsel to boards and owners on succession planning, organisational design, and the luxury talent landscape.',
  },
  {
    n: '04',
    Icon: ChartIcon,
    title: 'Market Intelligence',
    body:  'Compensation benchmarking, talent mapping, and competitive intelligence to support informed, strategic people decisions.',
  },
  {
    n: '05',
    Icon: DigitalIcon,
    title: 'Digital & AI Transformation',
    body:  'Placing technology leaders who guide hospitality brands through digital transformation without compromising the guest experience.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="lx-section bg-surface-deep">
      <div className="lx-container">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-20"
          variants={stagger} initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span className="lx-label" variants={reveal} transition={{ duration: 0.8 }}>
            Core Services
          </motion.span>
          <motion.h2
            className="lx-heading text-4xl md:text-5xl mb-6"
            variants={reveal} transition={{ duration: 0.8 }}
          >
            Tailored for Luxury Hospitality Recruitment
          </motion.h2>
          <motion.p className="lx-body" variants={reveal} transition={{ duration: 0.8 }}>
            No volume mandates. Every engagement is approached with the rigour and care we would apply to our own careers.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger} initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.1 }}
        >
          {services.map(({ n, Icon, title, body }) => (
            <motion.div
              key={n}
              className="lx-card group cursor-default relative overflow-hidden"
              variants={reveal}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            >
              {/* Top gold reveal line */}
              <span className="absolute top-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full" />

              {/* Number */}
              <div
                className="font-serif text-gold/20 group-hover:text-gold/35 transition-colors duration-300 mb-5 leading-none select-none"
                style={{ fontSize: '2.5rem', letterSpacing: '-0.02em' }}
                aria-hidden="true"
              >
                {n}
              </div>

              {/* Icon */}
              <div className="w-9 h-9 text-gold/60 group-hover:text-gold transition-colors duration-300 mb-6">
                <Icon />
              </div>

              {/* Title */}
              <h3 className="font-serif text-pearl text-xl mb-4 group-hover:text-gold-light transition-colors duration-300">
                {title}
              </h3>

              {/* Body */}
              <p className="lx-body text-sm leading-relaxed">{body}</p>

              {/* Arrow */}
              <div className="flex items-center gap-2 mt-8 text-dimmer group-hover:text-gold text-[10px] uppercase tracking-label transition-colors duration-300">
                <span>Enquire</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

/* ── Icons ── */
function SearchIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="10" />
      <path d="M24 24l7 7" />
    </svg>
  )
}
function PeopleIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="11" r="5" />
      <path d="M4 32c0-5.52 4.48-10 10-10s10 4.48 10 10" />
      <circle cx="26" cy="11" r="4" opacity="0.5" />
      <path d="M30 32c0-4.5-2.5-8-6-9.5" opacity="0.5" />
    </svg>
  )
}
function AdvisoryIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="18,3 22,13 33,13 24.5,19.5 27.5,30 18,23.5 8.5,30 11.5,19.5 3,13 14,13" />
    </svg>
  )
}
function ChartIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="30" height="30" rx="2" />
      <polyline points="8,26 14,18 19,22 26,12 30,16" />
    </svg>
  )
}
function DigitalIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="28" height="20" rx="2" />
      <path d="M13 8V5M23 8V5M4 16h28" />
      <circle cx="18" cy="23" r="3" />
      <path d="M18 20v-3" />
    </svg>
  )
}
