import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHero, PageCTA } from './AboutPage'

const EASE = [0.16, 1, 0.3, 1]

const PAGE_IMG =
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1920&q=80'

const candidateSteps = [
  {
    n: '01',
    title: 'Profile & Trajectory Assessment',
    body: 'A thorough exploration of your leadership experience, philosophy, and career arc — to understand where your capabilities align with current and upcoming mandates.',
  },
  {
    n: '02',
    title: 'Career & Ambition Alignment',
    body: 'A candid conversation about your aspirations, geographic preferences, and the organisations where you will genuinely thrive — not just succeed on paper.',
  },
  {
    n: '03',
    title: 'Curated Opportunity Matching',
    body: 'Confidential introductions to client organisations that represent a considered match — not a blanket circulation of your profile across every open role.',
  },
  {
    n: '04',
    title: 'Preparation & Client Briefing',
    body: 'Detailed briefings on each client — culture, strategic challenges, and leadership expectations — ensuring you present your most authentic self.',
  },
  {
    n: '05',
    title: 'Transition & Long-term Partnership',
    body: 'Guidance through offer, contract, and notice period — and a continuing relationship long after placement, as your trusted leadership sounding board.',
  },
]

const mandates = [
  {
    id: 1,
    ref:      'IES-GM-001',
    function: 'Property Leadership',
    title:    'General Manager',
    context:  'Pre-opening mandate, 5-Star Urban Hotel',
    location: 'National Capital Region, India',
    client:   'Confidential — International Brand',
    detail:   'A flagship pre-opening GM role for a premium international hotel brand entering the NCR market. The successful candidate will lead a comprehensive opening team and establish brand standards across all departments.',
    tags:     ['Pre-Opening', 'Luxury', 'India'],
  },
  {
    id: 2,
    ref:      'IES-COM-002',
    function: 'Commercial Leadership',
    title:    'Vice President — Commercial',
    context:  'Group mandate, Multi-property portfolio',
    location: 'Maldives & Southeast Asia',
    client:   'Confidential — Resort Brand',
    detail:   'A senior commercial leadership role overseeing revenue management, sales, and marketing strategy across a portfolio of island resort properties. India and international experience preferred.',
    tags:     ['Commercial', 'Resorts', 'International'],
  },
  {
    id: 3,
    ref:      'IES-CHRO-003',
    function: 'Human Resources Leadership',
    title:    'Chief Human Resources Officer',
    context:  'Heritage Hotels Group — India',
    location: 'Pan-India (Headquarters: Delhi)',
    client:   'Confidential — Heritage Hotels Group',
    detail:   'A transformational CHRO mandate for a respected Indian heritage hotel group. The role requires deep hospitality HR expertise and the ability to lead a people transformation across 12 properties.',
    tags:     ['CHRO', 'Heritage Hotels', 'India'],
  },
  {
    id: 4,
    ref:      'IES-OPS-004',
    function: 'Operations Leadership',
    title:    'Director of Operations',
    context:  'International Lifestyle Hotel Brand',
    location: 'Middle East (Dubai / Abu Dhabi)',
    client:   'Confidential — International Brand',
    detail:   'A high-visibility operations leadership role within a fast-growing international lifestyle hotel brand. Responsible for end-to-end operational performance and guest experience across two flagship properties.',
    tags:     ['Operations', 'Lifestyle', 'Middle East'],
  },
  {
    id: 5,
    ref:      'IES-REV-005',
    function: 'Revenue & Commercial',
    title:    'Director — Revenue Management',
    context:  'Group mandate, Multi-property portfolio',
    location: 'India (Multiple Cities)',
    client:   'Confidential — Hotel Group',
    detail:   'A strategic revenue leadership mandate covering a diversified portfolio of upper-upscale and business hotels across India. Expertise in technology-led revenue optimisation strongly preferred.',
    tags:     ['Revenue Management', 'Portfolio', 'India'],
  },
  {
    id: 6,
    ref:      'IES-AGM-006',
    function: 'Property Leadership',
    title:    'Area General Manager',
    context:  'Branded Residences + Hotel Mixed-use',
    location: 'Dubai, UAE',
    client:   'Confidential — Developer-Operator',
    detail:   'A rare dual-asset general management mandate overseeing a five-star hotel and branded residential tower. Requires prior experience managing mixed-use hospitality assets at senior leadership level.',
    tags:     ['Area GM', 'Branded Residences', 'Dubai'],
  },
]

export default function CandidatesPage({ navigate }) {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const functions = ['All', ...Array.from(new Set(mandates.map(m => m.function)))]
  const filtered = filter === 'All' ? mandates : mandates.filter(m => m.function === filter)

  const handleExpress = (m) => {
    setSelected(m)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <PageHero
        img={PAGE_IMG}
        label="For Candidates"
        heading="Leadership Opportunities Managed with Complete Discretion"
        body="A curated selection of confidential mandates currently in progress. All engagements are handled with absolute discretion and long-term professional care."
      />

      {/* Expression of interest form */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.section
            key="interest"
            className="lx-section bg-surface-deep"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="lx-container max-w-2xl">
              <button
                onClick={() => setSelected(null)}
                className="flex items-center gap-3 text-dim hover:text-pearl mb-10 transition-colors duration-300 outline-none"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M10 6.5H2M5 3L1.5 6.5 5 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-sans text-[11px] uppercase tracking-label">Back to Mandates</span>
              </button>

              <span className="lx-label">Confidential Application</span>
              <h2 className="lx-heading mb-3" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)' }}>
                {selected.title}
              </h2>
              <p className="lx-body text-[15px] mb-10">{selected.context} · {selected.location}</p>

              <InterestForm onBack={() => setSelected(null)} />
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Mandates */}
      {!selected && (
        <>
          <section className="lx-section bg-surface">
            <div className="lx-container">

              {/* Filters */}
              <motion.div
                className="flex flex-wrap gap-2 mb-14"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                {functions.map(fn => (
                  <button
                    key={fn}
                    onClick={() => setFilter(fn)}
                    className={`font-sans uppercase tracking-label px-5 py-2.5 border transition-all duration-300 outline-none ${
                      filter === fn
                        ? 'border-gold/60 text-gold bg-gold/[0.06]'
                        : 'border-white/[0.08] text-dimmer hover:border-white/20 hover:text-dim'
                    }`}
                    style={{ fontSize: '10.5px', letterSpacing: '0.18em' }}
                  >
                    {fn}
                  </button>
                ))}
              </motion.div>

              {/* Grid */}
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              >
                {filtered.map(m => (
                  <MandateCard key={m.id} m={m} onExpress={handleExpress} />
                ))}
              </motion.div>

            </div>
          </section>

          {/* Process */}
          <section className="lx-section bg-surface-deep">
            <div className="lx-container">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  <span className="lx-label">Our Process for Candidates</span>
                  <h2
                    className="lx-heading mb-7"
                    style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
                  >
                    Precision Matching,
                    <br />
                    Long-term Partnership
                  </h2>
                  <div className="gold-rule w-12 mb-8" />
                  <p className="lx-body text-[16px]">
                    We do not approach leaders indiscriminately. Every conversation begins with a
                    genuine understanding of where you are, where you aspire to be, and the
                    environments in which you will truly flourish.
                  </p>
                </motion.div>

                <div className="space-y-0">
                  {candidateSteps.map(({ n, title, body }, i) => (
                    <motion.div
                      key={n}
                      className="group py-7 border-b border-white/[0.055] last:border-b-0 flex gap-7"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ delay: i * 0.07, duration: 0.8, ease: EASE }}
                    >
                      <span
                        className="font-serif text-gold/35 group-hover:text-gold/65 transition-colors duration-400 flex-shrink-0 mt-0.5"
                        style={{ fontSize: '0.9rem', letterSpacing: '0.06em', fontWeight: 300 }}
                        aria-hidden="true"
                      >
                        {n}
                      </span>
                      <div>
                        <h3
                          className="font-display text-pearl/90 group-hover:text-pearl mb-2.5 transition-colors duration-400"
                          style={{ fontSize: '1.08rem', fontWeight: 400, lineHeight: 1.3 }}
                        >
                          {title}
                        </h3>
                        <p className="lx-body text-[15px]">{body}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* Submit profile */}
          <PageCTA
            heading="Not Actively Looking — But Open to a Conversation?"
            body="Many of the leaders we place were not actively exploring when we first connected. Submit your profile in confidence, and we will reach out only if a truly relevant mandate arises."
            navigate={navigate}
            primaryLabel="Submit Your Profile"
            primaryPage="contact"
            secondaryLabel="Learn About Us"
            secondaryPage="about"
          />
        </>
      )}
    </>
  )
}

/* ─── Mandate card ─────────────────────────────────────── */

function MandateCard({ m, onExpress }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="group border border-white/[0.07] bg-surface-card hover:border-white/[0.12] transition-colors duration-500"
      variants={{
        hidden: { opacity: 0, y: 28 },
        show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
      }}
    >
      <div className="p-7 pb-5">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="lx-label mb-2" style={{ fontSize: '9.5px' }}>{m.function}</p>
            <h3
              className="font-serif text-pearl/90 group-hover:text-pearl transition-colors duration-400"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', fontWeight: 400, lineHeight: 1.25 }}
            >
              {m.title}
            </h3>
          </div>
          <span
            className="font-sans text-dimmer flex-shrink-0 mt-1"
            style={{ fontSize: '9px', letterSpacing: '0.12em' }}
          >
            {m.ref}
          </span>
        </div>

        <div className="space-y-1.5 mb-5">
          <p className="font-sans font-light text-dim" style={{ fontSize: '14px' }}>{m.context}</p>
          <div className="flex items-center gap-2">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-gold/50 flex-shrink-0">
              <path d="M5 1C3.34 1 2 2.34 2 4 2 6.5 5 9 5 9s3-2.5 3-5c0-1.66-1.34-3-3-3z" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="5" cy="4" r="1" fill="currentColor" />
            </svg>
            <p className="font-sans font-light text-dimmer" style={{ fontSize: '13px' }}>{m.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {m.tags.map(t => (
            <span
              key={t}
              className="font-sans uppercase text-dimmer border border-white/[0.07] px-2.5 py-1.5"
              style={{ fontSize: '9px', letterSpacing: '0.18em' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <button
        className="w-full flex items-center justify-between px-7 py-4 border-t border-white/[0.055] text-dim hover:text-pearl transition-colors duration-300 outline-none"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-sans uppercase" style={{ fontSize: '10.5px', letterSpacing: '0.18em' }}>
          {open ? 'Close Detail' : 'View Detail'}
        </span>
        <motion.svg
          width="14" height="14" viewBox="0 0 14 14" fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-7 pt-1">
              <p className="lx-body text-[14.5px] mb-6">{m.detail}</p>
              <button
                onClick={() => onExpress(m)}
                className="btn-gold"
                style={{ fontSize: '10px', paddingTop: '0.7rem', paddingBottom: '0.7rem' }}
              >
                Express Interest
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                  <path d="M2 5.5h7M6 2.5l3.5 3-3.5 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ─── Expression of interest form ──────────────────────── */

function InterestForm({ onBack }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', current: '', message: '' })
  const set = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  if (sent) {
    return (
      <div className="border border-gold/18 bg-surface-card p-14 text-center">
        <div className="w-12 h-12 border border-gold/25 flex items-center justify-center mx-auto mb-7">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M2.5 8.5l4.5 4.5 7.5-9" stroke="#C6A769" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-serif text-pearl text-2xl mb-3 font-normal">Expression of Interest Received</p>
        <p className="lx-body text-[14.5px]">
          We will review your profile in confidence and be in touch within two business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <FormInput label="Full Name"     name="name"  value={form.name}  onChange={set} required />
        <FormInput label="Email Address" name="email" type="email" value={form.email} onChange={set} required />
      </div>
      <FormInput label="Current Role & Organisation" name="current" value={form.current} onChange={set} />
      <div>
        <label className="font-sans uppercase text-dimmer mb-2.5 block" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
          Brief Note (Optional)
        </label>
        <textarea
          name="message" value={form.message} onChange={set} rows={4}
          className="w-full bg-surface-card border border-white/[0.07] text-pearl placeholder-dimmer font-sans font-light px-5 py-4 resize-none outline-none focus:border-gold/35 transition-colors duration-400"
          style={{ fontSize: '14px' }}
          placeholder="Anything you'd like us to know in confidence…"
        />
      </div>
      <p className="lx-body text-[13px]">
        Your profile will be reviewed confidentially. We will not share your details without prior consent.
      </p>
      <motion.button
        type="submit"
        className="btn-gold"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25, ease: EASE }}
      >
        Submit in Confidence
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 6h8M6.5 2.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </form>
  )
}

function FormInput({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="font-sans uppercase text-dimmer mb-2.5 block" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange} required={required}
        className="w-full bg-surface-card border border-white/[0.07] text-pearl placeholder-dimmer font-sans font-light px-5 py-4 outline-none focus:border-gold/35 transition-colors duration-400"
        style={{ fontSize: '14px' }}
        placeholder={label}
      />
    </div>
  )
}
