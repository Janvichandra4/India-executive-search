import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } }
const fadeUp  = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

const stats = [
  { to: 200, suffix: '+', label: 'Senior Placements'    },
  { to: 15,  suffix: '+', label: 'Years of Expertise'   },
  { to: 50,  suffix: '+', label: 'Client Organisations' },
  { to: 20,  suffix: '+', label: 'Countries Served'     },
]

const pillars = [
  {
    title: 'Industry-Embedded Knowledge',
    body:  'Our principals have held senior roles within luxury hospitality. We understand what truly matters beyond the résumé.',
  },
  {
    title: 'Leadership-Tier Specialisation',
    body:  'From General Managers and CHROs to Group CEOs — we operate exclusively at leadership level, with full retention rigour.',
  },
  {
    title: 'India & Global Network',
    body:  'Headquartered in Gurgaon, with active mandates spanning South Asia, the Gulf, Southeast Asia, and Europe.',
  },
]

function Counter({ to, suffix }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const mv     = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 50, damping: 16 })
  const [val, setVal] = useState(0)

  useEffect(() => { if (inView) mv.set(to) }, [inView, mv, to])
  useEffect(() => spring.on('change', v => setVal(Math.round(v))), [spring])

  return <span ref={ref}>{val}{suffix}</span>
}

export default function AboutSection() {
  return (
    <section id="about" className="lx-section bg-surface">
      <div className="lx-container">

        {/* Editorial split */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-28">

          {/* Left column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.span className="lx-label" variants={fadeUp}>About Us</motion.span>

            <motion.h2
              className="lx-heading mb-8"
              style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
              variants={fadeUp}
            >
              Where Deep Expertise<br />
              Meets Discreet Counsel
            </motion.h2>

            <motion.div
              className="gold-rule w-14 mb-9"
              style={{ transformOrigin: 'left' }}
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } } }}
            />

            <motion.p className="lx-body text-[16px] mb-6" variants={fadeUp}>
              India Executive Search was founded on a single conviction: that exceptional organisations
              are built by exceptional people. For over fifteen years, we have served as trusted talent
              advisors to the world's most distinguished hospitality brands.
            </motion.p>

            <motion.p className="lx-body text-[16px] mb-6" variants={fadeUp}>
              Rooted in India and operating across global luxury corridors — from the Maldives to the
              Middle East, Southeast Asia to Europe — we bring rigorous industry knowledge, an extensive
              network, and an unwavering commitment to precision in every assignment.
            </motion.p>

            <motion.p
              className="font-sans text-[14px] leading-relaxed"
              style={{ color: 'rgba(198,167,105,0.72)', fontWeight: 300 }}
              variants={fadeUp}
            >
              We work across luxury, upper upscale, upscale, boutique, independent, and emerging
              hospitality brands.
            </motion.p>
          </motion.div>

          {/* Right column — pillars */}
          <motion.div
            className="space-y-0 lg:pt-20"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {pillars.map(({ title, body }, i) => (
              <motion.div
                key={title}
                className="group relative border-b border-white/[0.055] last:border-b-0 py-7 pl-6"
                variants={fadeUp}
              >
                <span className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.08] group-hover:bg-gold/40 transition-colors duration-500" />

                <span
                  className="absolute left-6 top-7 font-serif text-gold/25 select-none"
                  style={{ fontSize: '2.5rem', lineHeight: 1, fontWeight: 300 }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>

                <div className="relative z-10 pl-10 pt-1">
                  <h3
                    className="font-display text-pearl text-[1.1rem] mb-3 font-normal leading-snug group-hover:text-gold-light transition-colors duration-400"
                  >
                    {title}
                  </h3>
                  <p className="lx-body text-[15px]">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="border-t border-white/[0.055] pt-16 grid grid-cols-2 md:grid-cols-4 gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map(({ to, suffix, label }) => (
            <motion.div key={label} className="text-center group" variants={fadeUp}>
              <div
                className="font-serif text-gold mb-2 group-hover:text-gold-light transition-colors duration-400"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', letterSpacing: '-0.02em', lineHeight: 1, fontWeight: 300 }}
              >
                <Counter to={to} suffix={suffix} />
              </div>
              <div className="text-dimmer font-sans uppercase" style={{ fontSize: '10.5px', letterSpacing: '0.18em' }}>
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
