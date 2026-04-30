import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const clientTestimonials = [
  {
    quote: 'India Executive Search brought us a General Manager who didn\'t just fill a position — they changed the DNA of our property. The quality of the shortlist and the depth of briefing was unlike anything we\'d experienced with other search firms.',
    name:  'Priya Sharma',
    title: 'Owner',
    org:   'Boutique Luxury Retreats, Rajasthan',
  },
  {
    quote: 'We have placed three CHROs through IES across different properties in the last five years. Their understanding of luxury hospitality culture is exceptional. They do not send you candidates — they send you colleagues.',
    name:  'Rahul Mehta',
    title: 'Group CEO',
    org:   'Heritage Hotels Collection',
  },
  {
    quote: 'Harish and his team operate with a level of discretion and professionalism that is essential when you are recruiting at the leadership level. The candidate they placed as our VP of Operations exceeded every benchmark we set.',
    name:  'Ananya Krishnan',
    title: 'Regional Director — South Asia',
    org:   'International Luxury Hotels Group',
  },
  {
    quote: 'What sets IES apart is their willingness to tell you when a candidate isn\'t right, even when it would be easier to close the deal. That integrity is rare, and it is why we consider them a true advisory partner.',
    name:  'Vikram Singhania',
    title: 'Managing Partner',
    org:   'Singhania Hospitality Ventures',
  },
]

const candidateTestimonials = [
  {
    quote: 'I was not actively looking, but the conversation Harish initiated opened a door I hadn\'t considered. The preparation support, the transparency throughout the process, and the follow-up after joining — this is what a truly professional search firm does.',
    name:  'Deepak Nair',
    title: 'Vice President — Operations',
    org:   'Placed at a Leading Maldivian Resort Brand',
  },
  {
    quote: 'The briefing I received before my final interview was more thorough than anything I had prepared myself. India Executive Search clearly invests in the long-term success of their placements, not just the transaction.',
    name:  'Shalini Bose',
    title: 'Director — Food & Beverage',
    org:   'Placed at a Five-Star Urban Hotel, Mumbai',
  },
  {
    quote: 'Three years on, I am still in the role IES placed me in — and thriving. That speaks to the quality of the match. This wasn\'t a numbers game; it was a considered, precise placement.',
    name:  'Arjun Kapoor',
    title: 'General Manager',
    org:   'Placed at Heritage Mountain Property, Himachal Pradesh',
  },
]

const QuoteIcon = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
    <path d="M0 24V14.4C0 7.2 4 2.4 12 0l2 3.2C9.6 4.8 7.2 7.6 7.2 10.4H12V24H0zm18 0V14.4C18 7.2 22 2.4 30 0l2 3.2C27.6 4.8 25.2 7.6 25.2 10.4H30V24H18z" fill="currentColor" />
  </svg>
)

export default function Testimonials() {
  const [category, setCategory] = useState('clients')
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const list = category === 'clients' ? clientTestimonials : candidateTestimonials
  const current = list[index]

  const switchCategory = (cat) => {
    setCategory(cat)
    setIndex(0)
    setDirection(1)
  }

  const navigate = (dir) => {
    setDirection(dir)
    setIndex((prev) =>
      dir === 1
        ? (prev + 1) % list.length
        : (prev - 1 + list.length) % list.length
    )
  }

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit:  (d) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  }

  return (
    <section id="testimonials" className="bg-luxury-deep py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <motion.span
              className="section-label"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              Testimonials
            </motion.span>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            >
              Voices That Matter
            </motion.h2>
          </div>

          {/* Category toggle */}
          <motion.div
            className="flex gap-1 bg-luxury-card border border-luxury-border p-1 w-fit"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { key: 'clients',     label: 'Clients'     },
              { key: 'candidates',  label: 'Candidates'  },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => switchCategory(key)}
                className={`px-6 py-2.5 text-xs font-sans uppercase tracking-label transition-all duration-300 ${
                  category === key ? 'bg-gold text-luxury' : 'text-cream-muted hover:text-cream'
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Testimonial card */}
        <div className="relative min-h-[320px] flex items-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`${category}-${index}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="bg-luxury-card border border-luxury-border p-10 md:p-14 max-w-4xl">
                {/* Quote icon */}
                <div className="text-gold/30 mb-8">
                  <QuoteIcon />
                </div>

                <blockquote
                  className="font-serif text-cream font-light leading-relaxed mb-10 text-balance"
                  style={{ fontSize: 'clamp(1.05rem, 2vw, 1.3rem)', lineHeight: '1.7' }}
                >
                  "{current.quote}"
                </blockquote>

                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-luxury-hover border border-luxury-border flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-gold text-sm">{current.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-cream font-sans text-sm font-medium">{current.name}</p>
                    <p className="text-cream-muted text-xs font-sans mt-0.5">{current.title} · {current.org}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 mt-10">
          {/* Prev / Next */}
          <button
            onClick={() => navigate(-1)}
            className="w-11 h-11 border border-luxury-border flex items-center justify-center text-cream-muted hover:border-gold hover:text-gold transition-all duration-300"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={() => navigate(1)}
            className="w-11 h-11 border border-luxury-border flex items-center justify-center text-cream-muted hover:border-gold hover:text-gold transition-all duration-300"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {list.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                className={`w-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'bg-gold h-4' : 'bg-luxury-border h-1.5'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <span className="ml-auto text-cream-faint text-xs font-sans uppercase tracking-label">
            {String(index + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}
          </span>
        </div>

      </div>
    </section>
  )
}
