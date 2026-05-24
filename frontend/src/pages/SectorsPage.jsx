import { motion } from 'framer-motion'
import { PageHero, PageCTA } from './AboutPage'

const EASE = [0.16, 1, 0.3, 1]

const PAGE_IMG =
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1920&q=80'

const sectors = [
  {
    n: '01',
    title: 'Luxury Hotels & Resorts',
    body:  'Palace, ultra-luxury, and five-star independent hotels and branded resorts. Leadership search at the highest tier of global hospitality.',
    tags:  ['Palace Hotels', 'Ultra-Luxury', 'Five-Star'],
  },
  {
    n: '02',
    title: 'Business & Upper Upscale Hotels',
    body:  'Internationally branded upper-upscale properties and corporate hospitality portfolios across major Indian and international markets.',
    tags:  ['Upper Upscale', 'Corporate', 'International Brands'],
  },
  {
    n: '03',
    title: 'Boutique & Independent Hotels',
    body:  'Owner-operated, design-led, and lifestyle independent properties that require leaders who understand craft, individuality, and the guest relationship.',
    tags:  ['Boutique', 'Design Hotels', 'Independent'],
  },
  {
    n: '04',
    title: 'Wellness & Spa Retreats',
    body:  'Destination wellness, ayurvedic resorts, and integrated wellness hospitality — a rapidly evolving sector demanding specialised leadership.',
    tags:  ['Wellness', 'Ayurveda', 'Destination Retreats'],
  },
  {
    n: '05',
    title: 'Destination Wedding Resorts',
    body:  'Iconic event venues and celebrations-focused hospitality properties, where leadership must blend operational excellence with experiential vision.',
    tags:  ['Weddings', 'Events', 'Experiential'],
  },
  {
    n: '06',
    title: 'Serviced Apartments & Extended Stay',
    body:  'Branded residences, long-stay products, and mixed-use hospitality assets — a growing segment requiring distinct operational leadership skills.',
    tags:  ['Branded Residences', 'Extended Stay', 'Mixed-Use'],
  },
  {
    n: '07',
    title: 'Convention & MICE Hotels',
    body:  'Large-format convention hotels and MICE-driven hospitality enterprises, where commercial acumen meets large-scale operational leadership.',
    tags:  ['MICE', 'Conventions', 'Large Format'],
  },
  {
    n: '08',
    title: 'Lifestyle Hospitality Brands',
    body:  'Emerging lifestyle, experiential, and new-format hospitality concepts that are redefining guest expectations across Asia and globally.',
    tags:  ['Lifestyle', 'Experiential', 'New Format'],
  },
  {
    n: '09',
    title: 'Hospitality Technology & Travel',
    body:  'Revenue-tech, travel management, and hospitality innovation ventures — placing technology and digital leaders who guide brands through transformation.',
    tags:  ['RevTech', 'Digital', 'Innovation'],
  },
]

const tiers = [
  {
    label: 'Group Leadership',
    roles: ['Group Chief Executive', 'Managing Director', 'Chief Operating Officer'],
  },
  {
    label: 'Functional Leaders',
    roles: ['Chief Human Resources Officer', 'VP Commercial', 'Head of Development'],
  },
  {
    label: 'Property Leadership',
    roles: ['General Manager', 'Resident Manager', 'Director of Operations'],
  },
  {
    label: 'Departmental Heads',
    roles: ['Director — Food & Beverage', 'Director — Revenue Management', 'Director — Sales & Marketing'],
  },
]

export default function SectorsPage({ navigate }) {
  return (
    <>
      <PageHero
        img={PAGE_IMG}
        label="Industry Coverage"
        heading="Hospitality Sectors We Serve"
        body="From legacy palace hotels to emerging lifestyle concepts — our network and intelligence span the full breadth of the global hospitality industry."
      />

      {/* Sectors grid */}
      <section className="lx-section bg-surface">
        <div className="lx-container">

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          >
            {sectors.map(({ n, title, body, tags }) => (
              <motion.div
                key={n}
                className="group relative bg-surface p-8 overflow-hidden cursor-default"
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
                }}
              >
                {/* Hover fill */}
                <div className="absolute inset-0 bg-gold/[0.025] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Top line reveal */}
                <span className="absolute top-0 left-0 h-px bg-gold/50 transition-all duration-500 w-0 group-hover:w-full" />

                <span
                  className="block font-serif text-gold/20 group-hover:text-gold/45 transition-colors duration-400 mb-5 leading-none select-none"
                  style={{ fontSize: '1.9rem', fontWeight: 300 }}
                  aria-hidden="true"
                >
                  {n}
                </span>

                <h3
                  className="font-display text-pearl/85 group-hover:text-pearl transition-colors duration-400 leading-snug mb-3"
                  style={{ fontSize: '1.08rem', fontWeight: 400 }}
                >
                  {title}
                </h3>

                <p className="lx-body text-[14.5px] leading-relaxed mb-5">{body}</p>

                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t => (
                    <span
                      key={t}
                      className="text-[9.5px] font-sans uppercase tracking-label text-dimmer border border-white/[0.07] px-2.5 py-1.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Leadership scope */}
      <section className="lx-section bg-surface-deep">
        <div className="lx-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <span className="lx-label">Leadership Scope</span>
              <h2
                className="lx-heading mb-7"
                style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
              >
                From General Managers
                <br />
                to Group CEOs
              </h2>
              <div className="gold-rule w-12 mb-8" />
              <p className="lx-body text-[16px] mb-10">
                We operate exclusively at the leadership tier — from General Managers and Commercial
                Directors to CHROs, Development Heads, and Group CEOs — with the rigour and network
                that elite mandates demand.
              </p>
              <button onClick={() => navigate('contact')} className="btn-gold">
                Discuss a Mandate
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 6.5h9M7.5 3l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1, ease: EASE }}
            >
              {tiers.map(({ label, roles }, i) => (
                <div
                  key={label}
                  className="group border-b border-white/[0.055] last:border-b-0 py-6"
                >
                  <p className="lx-label mb-4 text-[9.5px]">{label}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {roles.map((role, j) => (
                      <span key={role} className="font-serif text-dim group-hover:text-pearl/80 transition-colors duration-400" style={{ fontSize: '1rem', fontWeight: 300 }}>
                        {role}
                        {j < roles.length - 1 && (
                          <span className="text-gold/30 ml-4 not-italic" aria-hidden="true">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      <PageCTA
        heading="Operating Across Every Sector"
        body="Our mandate coverage spans the full breadth of the hospitality industry. Whatever your property type, brand scale, or geography — we have the network and expertise to deliver."
        navigate={navigate}
        primaryLabel="Discuss a Mandate"
        primaryPage="contact"
        secondaryLabel="For Employers"
        secondaryPage="employers"
      />
    </>
  )
}
