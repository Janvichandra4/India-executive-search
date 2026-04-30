import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

const stats = [
  { value: 200,  suffix: '+', label: 'Senior Placements'       },
  { value: 15,   suffix: '+', label: 'Years of Expertise'      },
  { value: 50,   suffix: '+', label: 'Client Organisations'    },
  { value: 20,   suffix: '+', label: 'Countries Served'        },
]

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 20, restDelta: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) mv.set(to)
  }, [isInView, mv, to])

  useEffect(() => {
    return spring.on('change', (v) => setDisplay(Math.round(v)))
  }, [spring])

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function About() {
  return (
    <section id="about" className="bg-luxury-deep py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

          {/* Left — positioning */}
          <div>
            <motion.span className="section-label" {...fadeUp(0)}>
              About Us
            </motion.span>

            <motion.h2 className="section-title mb-8" {...fadeUp(0.1)}>
              Where Deep Expertise Meets Discreet Counsel
            </motion.h2>

            <motion.div
              className="gold-line w-12 mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
            />

            <motion.p
              className="text-cream-muted text-lg font-light leading-relaxed mb-6"
              {...fadeUp(0.25)}
            >
              India Executive Search was founded on a single belief: that exceptional organisations are built by exceptional people. For over a decade and a half, we have served as the trusted talent advisors to the world's most distinguished hospitality brands.
            </motion.p>

            <motion.p
              className="text-cream-muted font-light leading-relaxed"
              {...fadeUp(0.35)}
            >
              Rooted in India and operating across global luxury corridors — from the Maldives to the Middle East, Southeast Asia to Europe — we bring rigorous industry knowledge, an extensive network, and an unwavering commitment to precision in every assignment.
            </motion.p>
          </div>

          {/* Right — pillars */}
          <div className="space-y-6">
            {[
              {
                title: 'Industry-Embedded Knowledge',
                body:  'Our consultants have held senior roles within luxury hospitality. We understand the culture, the standards, and the nuances that matter.',
              },
              {
                title: 'Executive-Level Placements',
                body:  'From General Managers and Chief Human Resource Officers to Owners and Brand Presidents — we operate exclusively at the leadership tier.',
              },
              {
                title: 'India & Global Reach',
                body:  'Headquartered in Gurgaon with active placement capabilities across four continents and 20+ countries.',
              },
            ].map(({ title, body }, i) => (
              <motion.div
                key={title}
                className="border-l-2 border-luxury-border pl-6 hover:border-gold transition-colors duration-500"
                {...fadeUp(0.15 + i * 0.12)}
              >
                <h3 className="font-serif text-cream text-lg mb-2">{title}</h3>
                <p className="text-cream-muted text-sm font-light leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          className="border-t border-luxury-border pt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="font-serif text-gold mb-2"
                style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1 }}
              >
                <Counter to={value} suffix={suffix} />
              </div>
              <div className="text-cream-muted text-xs font-sans uppercase tracking-label">
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
