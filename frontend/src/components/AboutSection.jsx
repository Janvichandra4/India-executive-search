import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

const reveal = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } }

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
    title: 'Executive-Level Placements',
    body:  'From General Managers and CHROs to Group CEOs — we operate exclusively at the leadership tier, with full retention rigour.',
  },
  {
    title: 'India & Global Reach',
    body:  'Headquartered in Gurgaon, with active mandates spanning South Asia, the Gulf, Southeast Asia, and Europe.',
  },
]

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 55, damping: 18 })
  const [val, setVal] = useState(0)

  useEffect(() => { if (inView) mv.set(to) }, [inView, mv, to])
  useEffect(() => spring.on('change', v => setVal(Math.round(v))), [spring])

  return <span ref={ref}>{val}{suffix}</span>
}

export default function AboutSection() {
  return (
    <section id="about" className="lx-section bg-surface">
      <div className="lx-container">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start mb-24">

          {/* Left */}
          <motion.div
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span className="lx-label" variants={reveal} transition={{ duration: 0.8 }}>
              About Us
            </motion.span>

            <motion.h2
              className="lx-heading text-4xl md:text-5xl mb-8"
              variants={reveal} transition={{ duration: 0.8 }}
            >
              Where Deep Expertise Meets Discreet Counsel
            </motion.h2>

            <motion.div
              className="gold-rule w-12 mb-8"
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
            />

            <motion.p className="lx-body text-[15px] mb-6" variants={reveal} transition={{ duration: 0.8 }}>
              India Executive Search was founded on a single conviction: that exceptional organisations are built by exceptional people. For over fifteen years, we have served as trusted talent advisors to the world's most distinguished hospitality brands.
            </motion.p>

            <motion.p className="lx-body text-[15px]" variants={reveal} transition={{ duration: 0.8 }}>
              Rooted in India and operating across global luxury corridors — from the Maldives to the Middle East, Southeast Asia to Europe — we bring rigorous industry knowledge, an extensive network, and an unwavering commitment to precision in every assignment.
            </motion.p>
          </motion.div>

          {/* Right — pillars */}
          <motion.div
            className="space-y-8 lg:pt-16"
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, amount: 0.2 }}
          >
            {pillars.map(({ title, body }) => (
              <motion.div
                key={title}
                className="border-l border-white/10 pl-6 hover:border-gold/40 transition-colors duration-500"
                variants={reveal}
                transition={{ duration: 0.8 }}
              >
                <h3 className="font-serif text-pearl text-lg mb-2">{title}</h3>
                <p className="lx-body text-sm">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="border-t border-white/[0.06] pt-16 grid grid-cols-2 md:grid-cols-4 gap-10"
          variants={stagger} initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map(({ to, suffix, label }) => (
            <motion.div
              key={label}
              className="text-center"
              variants={reveal}
              transition={{ duration: 0.8 }}
            >
              <div
                className="font-serif text-gold mb-2"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', lineHeight: 1 }}
              >
                <Counter to={to} suffix={suffix} />
              </div>
              <div className="text-dimmer text-[11px] font-sans uppercase tracking-label">{label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
