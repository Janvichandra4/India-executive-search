import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } }
const reveal  = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }

const clientTestimonials = [
  {
    quote: 'India Executive Search brought us a General Manager who didn\'t just fill a position — they transformed the DNA of our property. The quality of the shortlist, the depth of briefing, and the precision of fit was unlike anything we had experienced.',
    name:  'Priya Sharma',
    role:  'Owner, Boutique Luxury Retreats, Rajasthan',
  },
  {
    quote: 'We have placed three senior leaders through IES across different properties over five years. Their understanding of luxury hospitality culture is exceptional. They do not send candidates — they send colleagues.',
    name:  'Rahul Mehta',
    role:  'Group CEO, Heritage Hotels Collection',
  },
  {
    quote: 'Harish and his team operate with the discretion and professionalism essential at leadership level. The candidate placed as our VP of Operations exceeded every benchmark we set at the time of briefing.',
    name:  'Ananya Krishnan',
    role:  'Regional Director — South Asia, International Luxury Hotels Group',
  },
  {
    quote: 'What sets IES apart is their willingness to tell you when a candidate isn\'t right — even when it would be easier to close. That integrity is rare, and it is why we consider them a genuine advisory partner.',
    name:  'Vikram Singhania',
    role:  'Managing Partner, Singhania Hospitality Ventures',
  },
]

const candidateTestimonials = [
  {
    quote: 'I was not actively looking, but the conversation Harish initiated opened a door I hadn\'t considered. The preparation support, the transparency, and the follow-up after joining — this is what a truly professional search firm does.',
    name:  'Deepak Nair',
    role:  'Vice President — Operations, Placed at a Leading Maldivian Resort Brand',
  },
  {
    quote: 'The briefing I received before my final interview was more thorough than anything I had prepared myself. IES clearly invests in the long-term success of their placements — not just the transaction.',
    name:  'Shalini Bose',
    role:  'Director — Food & Beverage, Placed at a Five-Star Urban Hotel, Mumbai',
  },
  {
    quote: 'Three years on, I am still in the role IES placed me in — and thriving. That speaks to the quality of the match. This was not a numbers game; it was a considered, precise placement.',
    name:  'Arjun Kapoor',
    role:  'General Manager, Placed at Heritage Mountain Property, Himachal Pradesh',
  },
]

function QuoteMark() {
  return (
    <svg
      width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true"
      className="mx-auto mb-8"
    >
      <path
        d="M0 36V21.6C0 10.8 6 3.6 18 0l3 4.8C14.4 7.2 10.8 11.4 10.8 15.6H18V36H0zm28 0V21.6C28 10.8 34 3.6 46 0l2 4.8C41.4 7.2 38.8 11.4 38.8 15.6H46V36H28z"
        fill="rgba(198,167,105,0.2)"
      />
    </svg>
  )
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
      : (prev - 1 + list.length) % list.length
    )
  }

  const slideVariants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -50 : 50 }),
  }

  const t = list[index]

  return (
    <section id="testimonials" className="lx-section bg-surface overflow-hidden">
      <div className="lx-container">

        {/* Header — centered */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          variants={stagger} initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span className="lx-label" variants={reveal} transition={{ duration: 0.8 }}>
            Testimonials
          </motion.span>
          <motion.h2
            className="lx-heading text-4xl md:text-5xl mb-6"
            variants={reveal} transition={{ duration: 0.8 }}
          >
            Voices That Matter
          </motion.h2>
        </motion.div>

        {/* Category toggle — centered */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="flex gap-px bg-surface-card border border-white/[0.06] p-1">
            {[
              { key: 'clients',    label: 'Clients'    },
              { key: 'candidates', label: 'Candidates' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => switchCat(key)}
                className={`px-7 py-2.5 text-[10px] font-sans uppercase tracking-label transition-all duration-300 ${
                  category === key
                    ? 'bg-gold text-surface-deep font-medium'
                    : 'text-dim hover:text-pearl'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Carousel — centered */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[320px] flex items-center">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={`${category}-${index}`}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <motion.div
                  className="lx-card text-center"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <QuoteMark />

                  <blockquote
                    className="font-serif text-pearl font-normal italic leading-relaxed mb-10 text-center"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: '1.75' }}
                  >
                    "{t.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full border border-gold/30 bg-surface flex items-center justify-center mb-2">
                      <span className="font-serif text-gold text-sm">{t.name[0]}</span>
                    </div>
                    <p className="font-sans text-pearl text-sm font-medium">{t.name}</p>
                    <p className="lx-body text-xs text-center max-w-sm">{t.role}</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation — centered */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Prev */}
            <motion.button
              onClick={() => go(-1)}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-dim hover:border-gold/50 hover:text-gold transition-all duration-300"
              whileHover={{ y: -2 }}
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
                  className={`rounded-full transition-all duration-300 ${
                    i === index ? 'w-5 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/15'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <motion.button
              onClick={() => go(1)}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-dim hover:border-gold/50 hover:text-gold transition-all duration-300"
              whileHover={{ y: -2 }}
              aria-label="Next"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </div>

          {/* Counter */}
          <p className="text-center text-dimmer text-[10px] font-sans uppercase tracking-label mt-5">
            {String(index + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}
          </p>
        </div>

      </div>
    </section>
  )
}
