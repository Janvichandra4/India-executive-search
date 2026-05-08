import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

const navLinks = [
  { label: 'About',                  href: '#about'        },
  { label: 'Services',               href: '#services'     },
  { label: 'Our Process',            href: '#process'      },
  { label: 'Hospitality Sectors',    href: '#sectors'      },
  { label: 'Testimonials',           href: '#testimonials' },
  { label: 'Contact',                href: '#contact'      },
]

const serviceLinks = [
  'Executive Search & Advisory',
  'Hotel Operations Leadership',
  'Commercial & Revenue Leadership',
  'Pre-Opening & Expansion Hiring',
  'Talent Advisory & Succession',
  'Market Intelligence',
]

const locations = [
  'Gurgaon', 'Mumbai', 'Bengaluru', 'Dubai',
]

export default function Footer({ onNavigateOpportunities }) {
  return (
    <footer className="bg-surface-deep border-t border-white/[0.05]">

      {/* Main footer body */}
      <div className="lx-container py-20 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline gap-3.5 mb-6">
              <span className="font-serif text-gold tracking-widest" style={{ fontSize: '1rem', letterSpacing: '0.28em' }}>IES</span>
              <span className="text-dimmer text-[9px] font-sans uppercase tracking-widest border-l border-white/[0.07] pl-3">
                India Executive Search
              </span>
            </div>
            <p className="lx-body text-[13px] mb-6 max-w-[240px]">
              Premium hospitality executive search and leadership advisory. India, Middle East, and Asia.
            </p>
            {/* Locations */}
            <div className="flex flex-wrap gap-x-3 gap-y-1.5">
              {locations.map((city, i) => (
                <span key={city} className="text-dimmer text-[10px] font-sans">
                  {city}{i < locations.length - 1 && <span className="ml-3 text-dimmest">·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="text-dimmer text-[9px] font-sans uppercase tracking-label mb-6">Navigation</p>
            <nav className="space-y-3.5" aria-label="Footer navigation">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="block text-dim text-[13px] font-sans font-light hover:text-gold transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={onNavigateOpportunities}
                className="block text-dim text-[13px] font-sans font-light hover:text-gold transition-colors duration-300 text-left"
              >
                Leadership Opportunities
              </button>
            </nav>
          </div>

          {/* Col 3 — Services */}
          <div>
            <p className="text-dimmer text-[9px] font-sans uppercase tracking-label mb-6">Our Services</p>
            <ul className="space-y-3.5">
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#services" className="text-dim text-[13px] font-sans font-light hover:text-gold transition-colors duration-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className="text-dimmer text-[9px] font-sans uppercase tracking-label mb-6">Reach Us</p>
            <div className="space-y-4">
              <a href="mailto:info@indiaexecutivesearch.com"
                className="block text-dim text-[13px] font-sans font-light hover:text-gold transition-colors duration-300">
                info@indiaexecutivesearch.com
              </a>
              <a href="tel:+919560454774"
                className="block text-dim text-[13px] font-sans font-light hover:text-gold transition-colors duration-300">
                +91 9560 454 774
              </a>
              <motion.a
                href="https://www.linkedin.com/in/harish-chandra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-dim text-[13px] font-sans font-light hover:text-gold transition-colors duration-300 mt-2"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                LinkedIn
              </motion.a>
            </div>
          </div>

        </div>
      </div>

      {/* SEO strip */}
      <div className="border-t border-white/[0.04]">
        <div className="lx-container py-5">
          <p className="text-dimmest text-[11px] font-sans leading-relaxed">
            Hospitality Executive Search India &nbsp;·&nbsp; Hotel Leadership Hiring &nbsp;·&nbsp;
            Hotel Recruitment Consultants &nbsp;·&nbsp; Luxury Hotel Recruitment India &nbsp;·&nbsp;
            Hospitality Talent Advisory &nbsp;·&nbsp; Hotel General Manager Recruitment &nbsp;·&nbsp;
            Gurgaon &nbsp;·&nbsp; Mumbai &nbsp;·&nbsp; Bengaluru &nbsp;·&nbsp; Dubai
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/[0.04]">
        <div className="lx-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dimmer text-[11px] font-sans">
            © {new Date().getFullYear()} India Executive Search. All rights reserved.
          </p>
          <p className="text-dimmer text-[11px] font-sans">
            Hospitality Executive Search &nbsp;·&nbsp; India &amp; Global
          </p>
        </div>
      </div>
    </footer>
  )
}
