import { motion } from 'framer-motion'
import ServicesSection from '../components/ServicesSection'
import { PageHero, PageCTA } from './AboutPage'

const EASE = [0.16, 1, 0.3, 1]

const PAGE_IMG =
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1920&q=80'

const SPLIT_IMG =
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80'

const differentiators = [
  {
    n: '01',
    title: 'Deep Hospitality Specialisation',
    body: 'We work exclusively within hospitality. Our principals have operated inside the sector — giving us context and insight that generalist firms simply cannot replicate.',
  },
  {
    n: '02',
    title: 'Leadership-Only Search Focus',
    body: 'We do not recruit below the leadership tier. Every assignment receives our full attention, network, and institutional knowledge — from initial briefing to long-term follow-up.',
  },
  {
    n: '03',
    title: 'Confidential Search Execution',
    body: 'Discretion is foundational to our practice. Leadership transitions are managed with complete confidentiality for clients and candidates alike.',
  },
  {
    n: '04',
    title: 'India · Middle East · Asia Network',
    body: "An active, trust-based network across South Asia, the Gulf, and Southeast Asia — built over fifteen years of direct relationships with the region's finest hotel groups.",
  },
  {
    n: '05',
    title: 'Passive-Candidate Reach',
    body: 'The best leaders are rarely available on the open market. Our network access extends beyond visible candidates — reaching senior professionals who are not actively seeking.',
  },
  {
    n: '06',
    title: 'Founder-Led Engagement Model',
    body: 'Every mandate is personally led by our founder. You work with the principal, not a junior researcher — ensuring strategic alignment at every stage of the process.',
  },
]

const clientSteps = [
  {
    n: '01',
    title: 'Confidential Mandate Briefing',
    body: 'A private briefing on the role context, organisational culture, and the leadership qualities that will drive lasting success beyond formal competencies.',
  },
  {
    n: '02',
    title: 'Leadership Talent Mapping',
    body: 'A comprehensive review of the available leadership landscape — domestic and international — identifying exceptional individuals who fit the precise mandate profile.',
  },
  {
    n: '03',
    title: 'Proprietary Network Activation',
    body: 'Direct, discreet approaches to senior professionals through our trusted network — accessing candidates beyond the visible market who are not actively exploring.',
  },
  {
    n: '04',
    title: 'Evaluation & Curated Shortlist',
    body: 'Competency-based assessment, cultural alignment conversations, and thorough reference validation — delivered as a refined, fully-contextualised shortlist.',
  },
  {
    n: '05',
    title: 'Placement & Onboarding Support',
    body: 'Engaged through offer negotiation, onboarding, and the critical early months — ensuring a seamless, enduring transition for both client and candidate.',
  },
]

export default function EmployersPage({ navigate }) {
  return (
    <>
      <PageHero
        img={PAGE_IMG}
        label="For Employers"
        heading="Trusted Talent Advisory for the World's Finest Hospitality Brands"
        body="We partner with hotel owners, group CEOs, and CHROs navigating critical leadership decisions — with absolute discretion and long-term perspective."
      />

      {/* Why partner */}
      <section className="lx-section bg-surface">
        <div className="lx-container">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <span className="lx-label">Why Partner With IES</span>
              <h2
                className="lx-heading"
                style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
              >
                Why Hospitality Brands
                <br />
                Choose{' '}
                <span style={{ color: 'rgba(245,240,232,1)', fontStyle: 'normal' }}>
                  India Executive Search
                </span>
              </h2>
            </motion.div>
            <motion.p
              className="lx-body text-[16px] lg:self-end"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            >
              A practice designed around the demands of leadership-level mandates — not operational
              volume or generalist positioning. We operate with the rigour, discretion, and
              long-term focus that your most important hires deserve.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {differentiators.map(({ n, title, body }, i) => (
              <motion.div
                key={n}
                className="group border-b border-white/[0.055] py-8 flex gap-8 items-start"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.85, ease: EASE }}
              >
                <span
                  className="font-serif text-gold/68 group-hover:text-gold transition-colors duration-400 flex-shrink-0 mt-0.5"
                  style={{ fontSize: '1.3rem', letterSpacing: '0.06em', fontWeight: 300 }}
                  aria-hidden="true"
                >
                  {n}
                </span>
                <div>
                  <h3
                    className="font-display text-pearl/90 group-hover:text-pearl mb-3 transition-colors duration-400 leading-snug"
                    style={{ fontSize: '1.1rem', fontWeight: 400 }}
                  >
                    {title}
                  </h3>
                  <p className="lx-body text-[15.5px]">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Split: image + process intro */}
      <section className="overflow-hidden bg-surface-deep">
        <div className="grid lg:grid-cols-2 min-h-[520px]">
          <div className="relative overflow-hidden order-2 lg:order-1">
            <img
              src={SPLIT_IMG}
              alt="Luxury resort"
              className="w-full h-full object-cover"
              loading="lazy"
              style={{ minHeight: '360px' }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to right, transparent, rgba(6,5,4,0.35))' }}
            />
          </div>
          <div className="flex items-center px-10 py-16 md:px-16 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: EASE }}
            >
              <span className="lx-label">Our Process</span>
              <h2
                className="lx-heading mb-7"
                style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}
              >
                A Methodology Built
                <br />
                for Precision
              </h2>
              <div className="gold-rule w-12 mb-8" />
              <p className="lx-body text-[16px]">
                A structured, transparent engagement designed for organisations that value
                confidentiality, rigour, and enduring results — from initial briefing through
                to successful onboarding and long-term retention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="lx-section bg-surface">
        <div className="lx-container max-w-3xl">
          <div className="space-y-0">
            {clientSteps.map(({ n, title, body }, i) => (
              <motion.div
                key={n}
                className="group flex gap-8 py-9 border-b border-white/[0.055] last:border-b-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.07, duration: 0.85, ease: EASE }}
              >
                <span
                  className="font-serif text-gold/68 group-hover:text-gold transition-colors duration-400 flex-shrink-0 mt-1"
                  style={{ fontSize: '1.5rem', letterSpacing: '0.06em', fontWeight: 300 }}
                  aria-hidden="true"
                >
                  {n}
                </span>
                <div>
                  <h3
                    className="font-display text-pearl/90 group-hover:text-pearl mb-3 transition-colors duration-400"
                    style={{ fontSize: '1.15rem', fontWeight: 400, lineHeight: 1.3 }}
                  >
                    {title}
                  </h3>
                  <p className="lx-body text-[15.5px]">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesSection navigate={navigate} />

      <PageCTA
        heading="Discuss a Leadership Mandate"
        body="Ready to place an exceptional leader? We welcome a confidential, no-obligation briefing at your convenience."
        navigate={navigate}
        primaryLabel="Discuss a Mandate"
        primaryPage="contact"
        secondaryLabel="Learn About Us"
        secondaryPage="about"
      />
    </>
  )
}
