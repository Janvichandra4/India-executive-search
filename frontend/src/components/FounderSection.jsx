import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } }
const fadeUp  = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

const founders = [
  {
    photo:    '/HC.jpeg',
    initials: 'HC',
    name:     'Harish Chandra',
    title:    'Founder & Managing Director',
    linkedIn: 'https://www.linkedin.com/in/harishchandra/',
    heading:  'A Practice Built on Conviction, Not Convenience',
    paras: [
      'For over fifteen years, I have dedicated my career to understanding what separates extraordinary leaders from merely capable ones — particularly within the world\'s most demanding hospitality environments.',
      'Having operated across hotel brands spanning India, Southeast Asia, and the Gulf, I understand the nuanced demands of this industry: operational precision, cultural sensitivity, and the guest-first philosophy that defines truly exceptional hospitality. These qualities cannot be evaluated through résumés alone.',
      'Our practice is built on relationships earned over years, not databases assembled overnight. We serve as trusted counsel to hotel owners, group CEOs, and CHROs navigating critical talent decisions — with absolute discretion and a long-term perspective that extends well beyond the placement itself.',
      'I also advise on digital transformation and AI adoption within the hospitality sector — a domain that will define the next decade of competitive differentiation for brands willing to lead rather than follow.',
    ],
    imageLeft: true,
  },
  {
    photo:    '/JK.jpeg',
    initials: 'JK',
    name:     'Jaikiran Ahluwalia',
    title:    'Partner — Board & CXO Practice',
    linkedIn: null,
    heading:  'Leadership Intelligence Across Two Decades of Industry Change',
    paras: [
      'Jaikiran Ahluwalia brings more than twenty years of senior leadership experience across travel, hospitality, and consumer services — having held executive roles at American Express, Carlson Wagonlit Travel, Yatra, Thomas Cook India, International Travel House, and Cleartrip. His career spans the full arc of the sector\'s transformation, from traditional travel management to digital-first platforms, affording him rare insight into what enduring leadership looks like across market cycles.',
      'At India Executive Search, Jaikiran leads our Board advisory and CXO practice — bringing to each engagement a practitioner\'s understanding of executive performance, cultural alignment, and the strategic priorities shaping the sector today. He advises clients on succession planning, senior talent mapping, and leadership architecture for organisations navigating change or scale.',
      'His particular strength lies in identifying leaders who are not simply capable of managing today\'s complexity, but positioned to shape what comes next — a distinction that matters most at the highest levels of organisational decision-making.',
    ],
    imageLeft: false,
  },
]

function FounderCard({ founder, index }) {
  const { photo, name, title, linkedIn, heading, paras, imageLeft } = founder

  const portrait = (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: imageLeft ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, ease: EASE }}
    >
      <div className="relative aspect-[4/5] max-w-[320px] bg-surface-card border border-white/[0.06] overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(6,5,4,0.45) 0%, transparent 55%)' }}
        />
        <div className="absolute inset-5 border border-gold/[0.08] pointer-events-none" />
      </div>

      <div className="mt-8 border-l-[2px] border-gold/55 pl-5">
        <p className="font-serif text-pearl text-[1.25rem] mb-1.5 font-normal">{name}</p>
        <p className="text-dimmer font-sans uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
          {title}
        </p>
        <p className="text-dimmer font-sans uppercase mt-1 opacity-55" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
          India Executive Search
        </p>
      </div>

      {linkedIn && (
        <div className="mt-5">
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-dim hover:text-gold font-sans font-light transition-colors duration-300 group"
            style={{ fontSize: '13px' }}
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" className="flex-shrink-0">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            LinkedIn
          </a>
        </div>
      )}

      <div
        className="absolute -bottom-8 pointer-events-none opacity-[0.06]"
        style={{
          [imageLeft ? 'right' : 'left']: '-1.5rem',
          width: '6rem', height: '6rem',
          backgroundImage: 'radial-gradient(circle, #C6A769 1px, transparent 1px)',
          backgroundSize: '9px 9px',
        }}
        aria-hidden="true"
      />
    </motion.div>
  )

  const text = (
    <motion.div
      className="lg:pt-16"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      <motion.h2
        className="lx-heading mb-8"
        style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)' }}
        variants={fadeUp}
      >
        {heading}
      </motion.h2>

      <motion.div
        className="gold-rule w-14 mb-9"
        style={{ transformOrigin: 'left' }}
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } } }}
      />

      {paras.map((p, i) => (
        <motion.p
          key={i}
          className="lx-body text-[16px] mb-6 last:mb-0"
          variants={fadeUp}
        >
          {p}
        </motion.p>
      ))}

      <motion.div
        className="mt-12 pt-9 border-t border-white/[0.055]"
        variants={fadeUp}
      >
        <p
          className="font-serif italic text-gold mb-1.5"
          style={{ fontSize: '1.75rem', fontWeight: 300, letterSpacing: '0.01em' }}
        >
          {name}
        </p>
        <p className="text-dimmer font-sans uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
          {title} — India Executive Search
        </p>
      </motion.div>
    </motion.div>
  )

  return (
    <div
      className={`grid lg:grid-cols-2 gap-16 lg:gap-28 items-start ${
        index > 0 ? 'pt-24 mt-24 border-t border-white/[0.055]' : ''
      }`}
    >
      {imageLeft ? portrait : text}
      {imageLeft ? text : portrait}
    </div>
  )
}

export default function FounderSection() {
  return (
    <section id="founder" className="lx-section bg-surface overflow-hidden">
      <div className="lx-container">

        <motion.span
          className="lx-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          Our Leadership
        </motion.span>

        {founders.map((founder, i) => (
          <FounderCard key={founder.name} founder={founder} index={i} />
        ))}

      </div>
    </section>
  )
}
