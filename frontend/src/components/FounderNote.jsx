import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function FounderNote() {
  return (
    <section id="founder" className="bg-luxury-deep py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

        <motion.span className="section-label" {...fadeUp(0)}>
          Founder's Note
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — portrait */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Photo frame */}
            <div className="relative aspect-[4/5] bg-luxury-card border border-luxury-border overflow-hidden max-w-sm">

              {/* Placeholder portrait */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="w-full h-full"
                  style={{
                    background: 'linear-gradient(160deg, rgba(20,40,25,0.9) 0%, rgba(6,8,10,1) 100%)',
                  }}
                />
                {/* Monogram overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span
                    className="font-serif text-gold/20 select-none"
                    style={{ fontSize: '9rem', letterSpacing: '-0.05em' }}
                  >
                    HC
                  </span>
                </div>
              </div>

              {/* Gold frame accent */}
              <div className="absolute inset-0 border border-gold/10 pointer-events-none" />
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold/[0.06] pointer-events-none" />
            </div>

            {/* Name card beneath */}
            <div className="mt-6 border-l-2 border-gold pl-5">
              <p className="font-serif text-cream text-xl mb-1">Harish Chandra</p>
              <p className="text-cream-muted text-xs font-sans uppercase tracking-label">
                Founder &amp; Managing Director
              </p>
            </div>

            {/* Decorative gold dot grid */}
            <div
              className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #C9A96E 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />
          </motion.div>

          {/* Right — text */}
          <div className="lg:pt-12">
            <motion.h2
              className="section-title mb-8"
              {...fadeUp(0.1)}
            >
              A Practice Built on Conviction, Not Convenience
            </motion.h2>

            <motion.div
              className="gold-line w-12 mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ transformOrigin: 'left' }}
            />

            {[
              `For over fifteen years, I have dedicated my career to understanding what separates extraordinary leaders from merely capable ones — particularly within the world's most demanding hospitality environments. India Executive Search was founded on a single conviction: that the right placement transforms not just an organisation, but the lives of everyone it touches.`,
              `Having worked across luxury hotel brands spanning India, Southeast Asia, and the Gulf, I understand the nuanced demands of this industry — operational precision, cultural sensitivity, and above all, the guest-first philosophy that defines truly exceptional hospitality. These are not traits one can assess from a résumé alone.`,
              `Our practice is built on relationships earned over years, not databases assembled overnight. We serve as trusted counsel to hotel owners, group CEOs, and CHROs navigating critical talent decisions — with absolute discretion, genuine rigour, and a long-term perspective that extends well beyond the placement itself.`,
              `I also serve as an advisor on digital transformation and AI adoption within the hospitality sector — a domain I believe will define the next decade of competitive differentiation for brands willing to lead rather than follow.`,
            ].map((para, i) => (
              <motion.p
                key={i}
                className="text-cream-muted font-light leading-relaxed mb-5 last:mb-0"
                {...fadeUp(0.25 + i * 0.1)}
              >
                {para}
              </motion.p>
            ))}

            {/* Signature */}
            <motion.div
              className="mt-10 pt-8 border-t border-luxury-border"
              {...fadeUp(0.65)}
            >
              <p
                className="text-gold font-serif italic mb-1"
                style={{ fontSize: '1.8rem', letterSpacing: '0.02em' }}
              >
                Harish Chandra
              </p>
              <p className="text-cream-muted text-xs font-sans uppercase tracking-label">
                Founder — India Executive Search
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
