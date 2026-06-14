import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp  = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

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
    detail:   'A transformational CHRO mandate for a respected Indian heritage hotel group. The role requires deep hospitality HR expertise and the ability to lead a people transformation at scale across 12 properties.',
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

function MandateCard({ m, onExpress }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="group border border-white/[0.06] bg-surface-card hover:border-white/[0.1] transition-colors duration-500"
      variants={fadeUp}
    >
      {/* Card header */}
      <div className="p-7 pb-5">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="lx-label mb-2 text-[8.5px]">{m.function}</p>
            <h3
              className="font-serif text-pearl/90 group-hover:text-pearl transition-colors duration-400"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.28rem)', fontWeight: 400, lineHeight: 1.25 }}
            >
              {m.title}
            </h3>
          </div>
          <span
            className="font-sans text-[9px] text-dimmer tracking-wide flex-shrink-0 mt-1"
            style={{ letterSpacing: '0.12em' }}
          >
            {m.ref}
          </span>
        </div>

        <div className="space-y-1.5 mb-5">
          <p className="font-sans text-[13px] font-light text-dim">{m.context}</p>
          <div className="flex items-center gap-2">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-gold/50 flex-shrink-0">
              <path d="M5 1C3.34 1 2 2.34 2 4 2 6.5 5 9 5 9s3-2.5 3-5c0-1.66-1.34-3-3-3z" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="5" cy="4" r="1" fill="currentColor" />
            </svg>
            <p className="font-sans text-[12px] font-light text-dimmer">{m.location}</p>
          </div>
          <p className="font-sans text-[12px] font-light text-dimmer opacity-70">{m.client}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {m.tags.map(t => (
            <span
              key={t}
              className="text-[8.5px] font-sans uppercase tracking-label text-dim border border-white/[0.14] px-2.5 py-1.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Expand toggle */}
      <button
        className="w-full flex items-center justify-between px-7 py-4 border-t border-white/[0.055] text-dim hover:text-pearl transition-colors duration-300 group/btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-sans text-[9.5px] uppercase tracking-label">
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

      {/* Expanded detail */}
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
              <p className="lx-body text-[13.5px] mb-6">{m.detail}</p>
              <button
                onClick={() => onExpress(m)}
                className="btn-gold"
                style={{ fontSize: '9px', paddingTop: '0.7rem', paddingBottom: '0.7rem' }}
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

export default function LeadershipOpportunitiesPage({ onBack }) {
  const [selected, setSelected] = useState(null)
  const [filter,   setFilter]   = useState('All')
  const [formSent, setFormSent] = useState(false)
  const [form,     setForm]     = useState({ name: '', email: '', current: '', message: '' })

  const functions = ['All', ...Array.from(new Set(mandates.map(m => m.function)))]

  const filtered = filter === 'All'
    ? mandates
    : mandates.filter(m => m.function === filter)

  const handleExpress = (m) => { setSelected(m); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const set  = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = (e) => { e.preventDefault(); setFormSent(true) }

  return (
    <div className="bg-surface font-sans text-pearl overflow-x-hidden min-h-screen">

      {/* ── Minimal nav bar ── */}
      <motion.header
        className="fixed top-0 inset-x-0 z-50 bg-surface-deep/90 backdrop-blur-xl border-b border-white/[0.05]"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="lx-container h-[68px] flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-3 text-dim hover:text-pearl transition-colors duration-300 group"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M10 7H2M5 3L1.5 7 5 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-sans text-[10px] uppercase tracking-label">Back to Main Site</span>
          </button>
          <div className="flex items-baseline gap-3.5">
            <span className="font-serif text-gold tracking-widest" style={{ fontSize: '1rem', letterSpacing: '0.28em' }}>IES</span>
            <span className="hidden sm:block text-[10px] font-sans uppercase tracking-widest border-l border-white/[0.08] pl-3.5" style={{ color: 'rgba(198,167,105,0.65)' }}>
              India Executive Search
            </span>
          </div>
        </div>
      </motion.header>

      <main className="pt-[68px]">

        {/* ── Hero ── */}
        <section className="relative py-32 md:py-44 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(198,167,105,0.055) 0%, transparent 60%)' }}
          />
          <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none" />

          <div className="lx-container text-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.span className="lx-label justify-center flex" variants={fadeUp}>
                Leadership Opportunities
              </motion.span>
              <motion.h1
                className="lx-heading-display mb-7 text-balance"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4.6rem)', maxWidth: '700px', margin: '0 auto 1.75rem' }}
                variants={fadeUp}
              >
                Current Leadership<br />
                <em className="text-gold not-italic">Mandates</em>
              </motion.h1>
              <motion.div
                className="gold-rule-center mx-auto mb-9"
                style={{ width: '4rem', transformOrigin: 'center' }}
                variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1, ease: EASE } } }}
              />
              <motion.p
                className="lx-body text-[14.5px] max-w-[500px] mx-auto"
                style={{ color: 'rgba(237,237,237,0.45)' }}
                variants={fadeUp}
              >
                A curated selection of confidential leadership mandates currently in progress.
                All engagements are managed with absolute discretion.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── If an opportunity is selected, show expression of interest form ── */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.section
              key="interest-form"
              className="lx-section bg-surface-deep"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <div className="lx-container max-w-2xl">
                <button
                  onClick={() => setSelected(null)}
                  className="flex items-center gap-2 text-dim hover:text-pearl mb-10 transition-colors duration-300"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M9 6H2M4 3L1 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-sans text-[10px] uppercase tracking-label">Back to All Mandates</span>
                </button>

                <span className="lx-label">Confidential Application</span>
                <h2 className="lx-heading mb-3" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.6rem)' }}>
                  {selected.title}
                </h2>
                <p className="lx-body text-[13.5px] mb-10">{selected.context} · {selected.location}</p>

                {formSent ? (
                  <div className="border border-gold/18 bg-surface-card p-12 text-center">
                    <div className="w-11 h-11 border border-gold/25 flex items-center justify-center mx-auto mb-6">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8l4 4 8-9" stroke="#C6A769" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-serif text-pearl text-xl mb-2 font-normal">Expression of Interest Received</p>
                    <p className="lx-body text-[13px]">
                      We will review your profile in confidence and be in touch within two business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <PageInput label="Full Name"     name="name"    value={form.name}    onChange={set} required />
                      <PageInput label="Email Address" name="email"   type="email" value={form.email} onChange={set} required />
                    </div>
                    <PageInput label="Current Role & Organisation" name="current" value={form.current} onChange={set} />
                    <div>
                      <label className="text-dimmer text-[9px] font-sans uppercase tracking-label mb-2.5 block">
                        Brief Note (Optional)
                      </label>
                      <textarea
                        name="message" value={form.message} onChange={set} rows={4}
                        className="w-full bg-surface-card border border-white/[0.07] text-pearl placeholder-dimmer font-sans font-light text-[13.5px] px-5 py-4 resize-none outline-none focus:border-gold/35 transition-colors duration-400"
                        placeholder="Anything you'd like us to know in confidence…"
                      />
                    </div>
                    <p className="lx-body text-[12px]">
                      Your profile will be reviewed confidentially. We will not share your details without prior consent.
                    </p>
                    <motion.button
                      type="submit"
                      className="btn-gold"
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      Submit in Confidence
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6h8M6.5 2.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* ── Mandates grid ── */}
        {!selected && (
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
                    className={`text-[9.5px] font-sans uppercase tracking-label px-4 py-2.5 border transition-all duration-300 outline-none ${
                      filter === fn
                        ? 'border-gold/55 text-gold bg-gold/[0.06]'
                        : 'border-white/[0.07] text-dimmer hover:border-white/20 hover:text-dim'
                    }`}
                  >
                    {fn}
                  </button>
                ))}
              </motion.div>

              {/* Grid */}
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                variants={stagger}
                initial="hidden"
                animate="show"
              >
                {filtered.map(m => (
                  <MandateCard key={m.id} m={m} onExpress={handleExpress} />
                ))}
              </motion.div>

              {/* Submit profile CTA */}
              <motion.div
                className="mt-20 pt-16 border-t border-white/[0.055] grid lg:grid-cols-2 gap-10 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.85, ease: EASE }}
              >
                <div>
                  <span className="lx-label">For Senior Executives</span>
                  <h2 className="lx-heading mb-4" style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.6rem)' }}>
                    Not Actively Looking —<br />
                    But Open to a Conversation?
                  </h2>
                  <p className="lx-body text-[14px]">
                    Many of the leaders we place were not actively exploring when we first connected.
                    Submit your profile in confidence, and we will reach out only if a relevant mandate arises.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                  <motion.a
                    href="mailto:info@indiaexecutivesearch.com"
                    className="btn-gold"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    Submit Your Profile
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6h8M6.5 2.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.a>
                  <motion.button
                    onClick={onBack}
                    className="btn-outline"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    Return to Main Site
                  </motion.button>
                </div>
              </motion.div>

            </div>
          </section>
        )}

      </main>

      {/* Minimal footer */}
      <footer className="border-t border-white/[0.05] py-8">
        <div className="lx-container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dimmer text-[11px] font-sans">
            © {new Date().getFullYear()} India Executive Search. All enquiries handled with complete discretion.
          </p>
          <button
            onClick={onBack}
            className="text-dimmer hover:text-gold text-[11px] font-sans transition-colors duration-300"
          >
            indiaexecutivesearch.com
          </button>
        </div>
      </footer>
    </div>
  )
}

function PageInput({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="text-dimmer text-[9px] font-sans uppercase tracking-label mb-2.5 block">{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange} required={required}
        className="w-full bg-surface-card border border-white/[0.07] text-pearl placeholder-dimmer font-sans font-light text-[13.5px] px-5 py-4 outline-none focus:border-gold/35 transition-colors duration-400"
        placeholder={label}
      />
    </div>
  )
}
