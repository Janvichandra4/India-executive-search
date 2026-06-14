import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const fadeUp  = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

const sectors = [
  { n: '01', title: 'Luxury Hotels & Resorts',         body: 'Palace, ultra-luxury, and five-star independent hotels and branded resorts.' },
  { n: '02', title: 'Business & Upper Upscale Hotels', body: 'Internationally branded upper-upscale properties and corporate hospitality portfolios.' },
  { n: '03', title: 'Boutique & Independent Hotels',   body: 'Owner-operated, design-led, and lifestyle independent properties.' },
  { n: '04', title: 'Wellness & Spa Retreats',         body: 'Destination wellness, ayurvedic resorts, and integrated wellness hospitality.' },
  { n: '05', title: 'Destination Wedding Resorts',     body: 'Iconic event venues and celebrations-focused hospitality properties.' },
  { n: '06', title: 'Serviced Apartments & Extended Stay', body: 'Branded residences, long-stay products, and mixed-use hospitality assets.' },
  { n: '07', title: 'Convention & MICE Hotels',        body: 'Large-format convention hotels and MICE-driven hospitality enterprises.' },
  { n: '08', title: 'Lifestyle Hospitality Brands',    body: 'Emerging lifestyle, experiential, and new-format hospitality concepts.' },
  { n: '09', title: 'Hospitality Technology & Travel', body: 'Revenue-tech, travel management, and hospitality innovation ventures.' },
]

export default function SectorsSection() {
  return (
    <section id="sectors" className="lx-section bg-surface">
      <div className="lx-container">

        {/* Header */}
        <motion.div
          className="grid lg:grid-cols-2 gap-10 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div>
            <motion.span className="lx-label" variants={fadeUp}>Industry Coverage</motion.span>
            <motion.h2
              className="lx-heading"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)' }}
              variants={fadeUp}
            >
              Hospitality Sectors<br />
              We Serve
            </motion.h2>
          </div>
          <motion.p className="lx-body text-[14.5px] lg:self-end" variants={fadeUp}>
            From legacy palace hotels to emerging lifestyle concepts, our network and intelligence
            span the full breadth of the global hospitality industry.
          </motion.p>
        </motion.div>

        {/* 3×3 sector grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {sectors.map(({ n, title, body }) => (
            <motion.div
              key={n}
              className="group relative bg-surface p-8 overflow-hidden cursor-default"
              variants={fadeUp}
            >
              {/* Hover gold tint fill */}
              <motion.div
                className="absolute inset-0 bg-gold/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Top gold line reveal */}
              <span
                className="absolute top-0 left-0 h-px bg-gold/50 transition-all duration-500 w-0 group-hover:w-full"
                aria-hidden="true"
              />

              {/* Number */}
              <span
                className="block font-serif text-gold/65 group-hover:text-gold transition-colors duration-400 mb-5 leading-none select-none"
                style={{ fontSize: '1.8rem', fontWeight: 300 }}
                aria-hidden="true"
              >
                {n}
              </span>

              {/* Title */}
              <h3
                className="font-display text-pearl group-hover:text-ivory transition-colors duration-400 leading-snug mb-3"
                style={{ fontSize: '1.05rem', fontWeight: 400 }}
              >
                {title}
              </h3>

              {/* Body */}
              <p className="lx-body text-[13px] leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
