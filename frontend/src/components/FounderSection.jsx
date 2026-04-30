import { motion } from 'framer-motion'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } }
const reveal  = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }

const paras = [
  `For over fifteen years, I have dedicated my career to understanding what separates extraordinary leaders from merely capable ones — particularly within the world's most demanding hospitality environments.`,
  `Having operated across luxury hotel brands spanning India, Southeast Asia, and the Gulf, I understand the nuanced demands of this industry: operational precision, cultural sensitivity, and the guest-first philosophy that defines truly exceptional hospitality. These qualities cannot be assessed from a résumé alone.`,
  `Our practice is built on relationships earned over years, not databases assembled overnight. We serve as trusted counsel to hotel owners, group CEOs, and CHROs navigating critical talent decisions — with absolute discretion and a long-term perspective that extends well beyond the placement itself.`,
  `I also advise on digital transformation and AI adoption within the hospitality sector — a domain I believe will define the next decade of competitive differentiation for brands willing to lead rather than follow.`,
]

export default function FounderSection() {
  return (
    <section id="founder" className="lx-section bg-surface overflow-hidden">
      <div className="lx-container">
        <motion.span
          className="lx-label"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          Founder's Note
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Portrait */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] max-w-[340px] bg-surface-card border border-white/[0.06] overflow-hidden">
              {/* Portrait gradient placeholder */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(155deg, rgba(25,22,14,1) 0%, rgba(10,10,10,1) 100%)',
                }}
              />
              {/* Monogram */}
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <span
                  className="font-serif select-none"
                  style={{
                    fontSize: '7rem',
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(198,167,105,0.15)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  HC
                </span>
              </div>
              {/* Inner frame */}
              <div className="absolute inset-4 border border-gold/[0.08] pointer-events-none" />
            </div>

            {/* Name card */}
            <div className="mt-7 border-l-2 border-gold/60 pl-5">
              <p className="font-serif text-pearl text-xl mb-1">Harish Chandra</p>
              <p className="text-dimmer text-[10px] font-sans uppercase tracking-label">
                Founder &amp; Managing Director
              </p>
            </div>

            {/* Dot grid decoration */}
            <div
              className="absolute -bottom-8 -right-8 w-28 h-28 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #C6A769 1px, transparent 1px)',
                backgroundSize: '10px 10px',
              }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="lg:pt-14"
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h2
              className="lx-heading text-4xl md:text-5xl mb-8"
              variants={reveal} transition={{ duration: 0.8 }}
            >
              A Practice Built on Conviction, Not Convenience
            </motion.h2>

            <motion.div
              className="gold-rule w-12 mb-8"
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
            />

            {paras.map((p, i) => (
              <motion.p
                key={i}
                className="lx-body text-[15px] mb-5 last:mb-0"
                variants={reveal}
                transition={{ duration: 0.8 }}
              >
                {p}
              </motion.p>
            ))}

            {/* Signature */}
            <motion.div
              className="mt-10 pt-8 border-t border-white/[0.06]"
              variants={reveal} transition={{ duration: 0.8 }}
            >
              <p
                className="font-serif italic text-gold mb-1"
                style={{ fontSize: '1.7rem', letterSpacing: '0.01em' }}
              >
                Harish Chandra
              </p>
              <p className="text-dimmer text-[10px] font-sans uppercase tracking-label">
                Founder — India Executive Search
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
