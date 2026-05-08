import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } }
const fadeUp  = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

const paras = [
  `For over fifteen years, I have dedicated my career to understanding what separates extraordinary leaders from merely capable ones — particularly within the world's most demanding hospitality environments.`,
  `Having operated across hotel brands spanning India, Southeast Asia, and the Gulf, I understand the nuanced demands of this industry: operational precision, cultural sensitivity, and the guest-first philosophy that defines truly exceptional hospitality. These qualities cannot be evaluated through résumés alone.`,
  `Our practice is built on relationships earned over years, not databases assembled overnight. We serve as trusted counsel to hotel owners, group CEOs, and CHROs navigating critical talent decisions — with absolute discretion and a long-term perspective that extends well beyond the placement itself.`,
  `I also advise on digital transformation and AI adoption within the hospitality sector — a domain that will define the next decade of competitive differentiation for brands willing to lead rather than follow.`,
]

export default function FounderSection() {
  return (
    <section id="founder" className="lx-section bg-surface overflow-hidden">
      <div className="lx-container">

        <motion.span
          className="lx-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          Founder's Note
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Portrait column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1, ease: EASE }}
          >
            {/* Portrait frame */}
            <div className="relative aspect-[4/5] max-w-[320px] bg-surface-card border border-white/[0.06] overflow-hidden">

              {/* Gradient background */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(145deg, rgba(26,20,10,1) 0%, rgba(10,10,10,1) 60%, rgba(7,9,12,1) 100%)' }}
              />

              {/* Warm light from top-right */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 50% at 75% 20%, rgba(198,167,105,0.06) 0%, transparent 60%)' }}
              />

              {/* Monogram */}
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <span
                  className="font-serif select-none"
                  style={{
                    fontSize: '7.5rem',
                    fontWeight: 300,
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(198,167,105,0.12)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  HC
                </span>
              </div>

              {/* Inner frame */}
              <div className="absolute inset-5 border border-gold/[0.07] pointer-events-none" />

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-card/80 to-transparent pointer-events-none" />
            </div>

            {/* Name card */}
            <div className="mt-8 border-l-[2px] border-gold/55 pl-5">
              <p className="font-serif text-pearl text-xl mb-1.5 font-normal">Harish Chandra</p>
              <p className="text-dimmer text-[9.5px] font-sans uppercase tracking-label">
                Founder &amp; Managing Director
              </p>
              <p className="text-dimmer text-[9.5px] font-sans uppercase tracking-label mt-1 opacity-60">
                India Executive Search
              </p>
            </div>

            {/* Dot-grid decoration */}
            <div
              className="absolute -bottom-8 -right-6 w-24 h-24 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #C6A769 1px, transparent 1px)',
                backgroundSize: '9px 9px',
              }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Text column */}
          <motion.div
            className="lg:pt-16"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
          >
            <motion.h2
              className="lx-heading mb-8"
              style={{ fontSize: 'clamp(1.9rem, 3.4vw, 3rem)' }}
              variants={fadeUp}
            >
              A Practice Built on<br />
              Conviction, Not Convenience
            </motion.h2>

            <motion.div
              className="gold-rule w-12 mb-9"
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } } }}
              style={{ transformOrigin: 'left' }}
            />

            {paras.map((p, i) => (
              <motion.p
                key={i}
                className="lx-body text-[14.5px] mb-5 last:mb-0"
                variants={fadeUp}
              >
                {p}
              </motion.p>
            ))}

            {/* Signature block */}
            <motion.div
              className="mt-12 pt-9 border-t border-white/[0.055]"
              variants={fadeUp}
            >
              <p
                className="font-serif italic text-gold mb-1.5"
                style={{ fontSize: '1.85rem', fontWeight: 300, letterSpacing: '0.01em' }}
              >
                Harish Chandra
              </p>
              <p className="text-dimmer text-[9.5px] font-sans uppercase tracking-label">
                Founder — India Executive Search
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
