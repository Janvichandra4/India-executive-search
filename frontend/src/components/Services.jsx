import { motion } from 'framer-motion'

const services = [
  {
    icon: SearchIcon,
    title: 'Executive Search',
    description:
      'Bespoke retained search for C-suite and senior leadership roles across luxury hospitality, travel, and tourism organisations globally.',
  },
  {
    icon: LeadershipIcon,
    title: 'Leadership Hiring',
    description:
      'Strategic acquisition of department heads, General Managers, and functional leaders who define brand culture and operational excellence.',
  },
  {
    icon: AdvisoryIcon,
    title: 'Talent Advisory',
    description:
      'Confidential counsel to boards and owners on succession planning, organisational design, and the talent landscape within luxury hospitality.',
  },
  {
    icon: IntelligenceIcon,
    title: 'Market Intelligence',
    description:
      'In-depth compensation benchmarking, talent mapping, and competitive intelligence to support informed, strategic people decisions.',
  },
  {
    icon: DigitalIcon,
    title: 'Digital & AI Transformation Hiring',
    description:
      'Placing technology and innovation leaders who can guide hospitality brands through digital transformation without compromising the guest experience.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Services() {
  return (
    <section id="services" className="bg-luxury py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.span className="section-label" {...fadeUp(0)}>
            Core Services
          </motion.span>
          <motion.h2 className="section-title mb-6" {...fadeUp(0.1)}>
            Tailored for Luxury Hospitality Recruitment
          </motion.h2>
          <motion.p
            className="text-cream-muted font-light leading-relaxed"
            {...fadeUp(0.2)}
          >
            Each engagement is approached with the same rigour and discretion we would expect if the positions were our own. No volume mandates — only commitments we can honour with excellence.
          </motion.p>
        </div>

        {/* Cards grid: 3 + 2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              className="group relative bg-luxury-card border border-luxury-border p-8 cursor-default
                         transition-all duration-500 ease-luxury
                         hover:border-gold/40 hover:bg-luxury-hover"
              {...fadeUp(i * 0.08)}
            >
              {/* Gold corner accent on hover */}
              <span className="absolute top-0 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />

              {/* Icon */}
              <div className="w-10 h-10 mb-6 text-gold/70 group-hover:text-gold transition-colors duration-300">
                <Icon />
              </div>

              {/* Title */}
              <h3 className="font-serif text-cream text-xl mb-4 group-hover:text-gold-light transition-colors duration-300">
                {title}
              </h3>

              {/* Description */}
              <p className="text-cream-muted text-sm font-light leading-relaxed">
                {description}
              </p>

              {/* Bottom indicator */}
              <div className="mt-8 flex items-center gap-2 text-cream-faint group-hover:text-gold text-xs uppercase tracking-label transition-colors duration-300">
                <span>Learn more</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Icons ── */

function SearchIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="10" />
      <path d="M26 26l6 6" />
    </svg>
  )
}

function LeadershipIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="13" r="5" />
      <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" />
      <path d="M20 4l2 4h-4l2-4z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function AdvisoryIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="20,4 24,14 35,14 26,21 29,32 20,25 11,32 14,21 5,14 16,14" />
    </svg>
  )
}

function IntelligenceIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6,32 14,20 20,26 28,14 34,20" />
      <rect x="4" y="4" width="32" height="32" rx="2" />
    </svg>
  )
}

function DigitalIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="10" width="28" height="20" rx="2" />
      <path d="M14 10V6M26 10V6M6 18h28" />
      <circle cx="20" cy="25" r="3" />
      <path d="M20 22v-4M20 28v1" />
    </svg>
  )
}
