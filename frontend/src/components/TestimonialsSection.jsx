import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } }
const fadeUp  = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}

const clientTestimonials = [
  {
    quote:   'India Executive Search brought us a General Manager who didn\'t simply fill a position — they transformed the DNA of our property. The quality of the shortlist, the depth of briefing, and the precision of fit was unlike anything we had experienced.',
    name:    'Priya Sharma',
    role:    'Owner, Boutique Luxury Retreats',
    org:     'Rajasthan, India',
    initial: 'P',
  },
  {
    quote:   'We have placed three senior leaders through IES across different properties over five years. Their understanding of hospitality culture is exceptional. They do not send candidates — they send colleagues.',
    name:    'Rahul Mehta',
    role:    'Group Chief Executive',
    org:     'Heritage Hotels Collection',
    initial: 'R',
  },
  {
    quote:   'Harish and his team operate with the discretion and professionalism essential at leadership level. The candidate placed as our VP of Operations exceeded every benchmark we set at the time of briefing.',
    name:    'Ananya Krishnan',
    role:    'Regional Director — South Asia',
    org:     'International Luxury Hotels Group',
    initial: 'A',
  },
  {
    quote:   'What sets IES apart is their willingness to tell you when a candidate isn\'t right — even when it would be easier to close. That integrity is rare, and it is why we consider them a genuine advisory partner.',
    name:    'Vikram Singhania',
    role:    'Managing Partner',
    org:     'Singhania Hospitality Ventures',
    initial: 'V',
  },
]

const candidateTestimonials = [
  {
    quote:   'I was not actively looking, but the conversation Harish initiated opened a door I hadn\'t considered. The preparation support, the transparency, and the follow-up after joining — this is what a truly professional search firm does.',
    name:    'Deepak Nair',
    role:    'Vice President — Operations',
    org:     'Leading Maldivian Resort Brand',
    initial: 'D',
  },
  {
    quote:   'The briefing I received before my final interview was more thorough than anything I had prepared myself. IES clearly invests in the long-term success of their placements — not just the transaction.',
    name:    'Shalini Bose',
    role:    'Director — Food & Beverage',
    org:     'Five-Star Urban Hotel, Mumbai',
    initial: 'S',
  },
  {
    quote:   'Three years on, I am still in the role IES placed me in — and thriving. That speaks to the quality of the match. This was not a numbers game; it was a considered, precise placement.',
    name:    'Arjun Kapoor',
    role:    'General Manager',
    org:     'Heritage Mountain Property, Himachal Pradesh',
    initial: 'A',
  },
]

const slideVariants = {
  enter:  (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
  exit:   (d) => ({ opacity: 0, x: d > 0 ? -40 : 40, transition: { duration: 0.35, ease: EASE } }),
}

export default function TestimonialsSection() {
  const [category, setCategory] = useState('clients')
  const [index,    setIndex]    = useState(0)
  const [dir,      setDir]      = useState(1)

  const list = category === 'clients' ? clientTestimonials : candidateTestimonials

  const switchCat = (cat) => { setCategory(cat); setIndex(0); setDir(1) }
  const go = (d) => {
    setDir(d)
    setIndex(prev => d === 1
      ? (prev + 1) % list.length
      : (prev - 1 + list.length) % list.length)
  }

  const t = list[index]

  return (
    <section id="testimonials" className="lx-section bg-surface-deep overflow-hidden">
      <div className="lx-container">

        {/* Header */}
        <motion.div
          className="grid lg:grid-cols-2 gap-10 mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div>
            <motion.span className="lx-label" variants={fadeUp}>Testimonials</motion.span>
            <motion.h2
              className="lx-heading"
              style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
              variants={fadeUp}
            >
              Voices That Define
              <br />
              Our Practice
            </motion.h2>
          </div>
          <motion.p className="lx-body text-[16px] lg:self-end" variants={fadeUp}>
            What distinguishes us is not what we say about ourselves — but what our clients and
            candidates say after years of engagement.
          </motion.p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          className="flex mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="flex gap-px bg-white/[0.05] border border-white/[0.06] p-1">
            {[
              { key: 'clients',    label: 'From Clients'    },
              { key: 'candidates', label: 'From Candidates' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => switchCat(key)}
                className={`px-7 py-2.5 font-sans uppercase tracking-label transition-all duration-350 outline-none ${
                  category === key
                    ? 'bg-gold text-surface-deep font-semibold'
                    : 'text-dim hover:text-pearl'
                }`}
                style={{ fontSize: '10.5px', letterSpacing: '0.18em' }}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Testimonial display */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">

          {/* Main quote */}
          <div className="relative min-h-[280px] flex items-start">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={`${category}-${index}`}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <div className="mb-8" aria-hidden="true">
                  <svg width="44" height="34" viewBox="0 0 44 34" fill="none">
                    <path
                      d="M0 34V19.6C0 9.8 5.95 3.4 17.85 0l3 5.1C14.1 7.65 10.2 11.9 10.2 15.75H17V34H0zm25 0V19.6C25 9.8 30.95 3.4 42.85 0l0.85 5.1C37.1 7.65 34 11.9 34 15.75H40.8V34H25z"
                      fill="rgba(198,167,105,0.24)"
                    />
                  </svg>
                </div>

                <blockquote
                  className="font-serif text-pearl/80 font-normal italic leading-relaxed mb-10"
                  style={{ fontSize: 'clamp(1.08rem, 2vw, 1.35rem)', lineHeight: 1.72, fontWeight: 300 }}
                >
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full border border-gold/25 bg-surface-card flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <span className="font-serif text-gold" style={{ fontSize: '1rem' }}>{t.initial}</span>
                  </div>
                  <div>
                    <p className="font-sans text-pearl font-medium mb-0.5" style={{ fontSize: '14.5px' }}>{t.name}</p>
                    <p className="lx-body mb-0" style={{ fontSize: '13px' }}>{t.role}</p>
                    <p className="font-sans text-gold/55" style={{ fontSize: '12px' }}>{t.org}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation sidebar */}
          <div className="flex flex-row lg:flex-col justify-between lg:justify-center gap-6 lg:gap-10 border-t lg:border-t-0 lg:border-l border-white/[0.055] pt-8 lg:pt-0 lg:pl-12">

            <div className="flex flex-col justify-center">
              <p className="font-serif text-gold" style={{ fontSize: '2.6rem', fontWeight: 300, lineHeight: 1 }}>
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="text-dimmer font-sans uppercase mt-1" style={{ fontSize: '10.5px', letterSpacing: '0.18em' }}>
                / {String(list.length).padStart(2, '0')}
              </p>
            </div>

            <div className="flex lg:flex-col gap-2 items-center justify-center">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
                  className={`rounded-full transition-all duration-400 ${
                    i === index
                      ? 'bg-gold w-5 h-1.5 lg:w-1.5 lg:h-5'
                      : 'bg-white/15 hover:bg-white/30 w-1.5 h-1.5'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex lg:flex-col gap-3">
              <motion.button
                onClick={() => go(-1)}
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-dim hover:border-gold/50 hover:text-gold transition-all duration-300 outline-none"
                whileHover={{ y: -2 }}
                aria-label="Previous testimonial"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
              <motion.button
                onClick={() => go(1)}
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-dim hover:border-gold/50 hover:text-gold transition-all duration-300 outline-none"
                whileHover={{ y: -2 }}
                aria-label="Next testimonial"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
