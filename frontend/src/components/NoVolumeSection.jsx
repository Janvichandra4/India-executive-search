import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export default function NoVolumeSection() {
  return (
    <section className="relative overflow-hidden py-40 md:py-56 bg-surface-deep">

      {/* Atmospheric background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(198,167,105,0.04) 0%, transparent 65%)',
        }}
      />
      <div className="absolute inset-0 grain opacity-50 pointer-events-none" />

      {/* Horizontal rule top */}
      <div className="absolute top-0 inset-x-0 section-rule" />
      {/* Horizontal rule bottom */}
      <div className="absolute bottom-0 inset-x-0 section-rule" />

      <div className="lx-container text-center">

        {/* Giant quotation mark */}
        <motion.div
          className="mx-auto mb-10 opacity-[0.12]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.12, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: EASE }}
          aria-hidden="true"
        >
          <svg width="72" height="52" viewBox="0 0 72 52" fill="none">
            <path
              d="M0 52V31.2C0 15.6 8.8 5.2 26 0l4.4 7C20.4 10.4 15.6 16.8 15.6 22.8H26V52H0zm40 0V31.2C40 15.6 48.8 5.2 66 0l4 7C63.2 10.4 58.8 16.8 58.8 22.8H68V52H40z"
              fill="#C6A769"
            />
          </svg>
        </motion.div>

        {/* Statement */}
        <motion.p
          className="lx-heading-display mx-auto text-balance"
          style={{
            fontSize: 'clamp(1.7rem, 3.8vw, 3.6rem)',
            maxWidth: '900px',
            color: 'rgba(245,240,232,0.82)',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
        >
          Every engagement is executed with{' '}
          <em className="text-gold not-italic">discretion, rigour,</em>
          {' '}and long-term strategic focus.
        </motion.p>

        {/* Rule */}
        <motion.div
          className="gold-rule-center mx-auto my-10"
          style={{ width: '4rem', transformOrigin: 'center' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
        />

        {/* Tagline */}
        <motion.p
          className="lx-label mb-0"
          style={{ opacity: 0.6 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          No Volume Mandates &nbsp;·&nbsp; Founder-Led &nbsp;·&nbsp; Always Retained
        </motion.p>

      </div>
    </section>
  )
}
