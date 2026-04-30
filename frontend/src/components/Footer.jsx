import { motion } from 'framer-motion'

const links = [
  { label: 'About',        href: '#about'        },
  { label: 'Services',     href: '#services'     },
  { label: 'Our Process',  href: '#process'      },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact'      },
]

export default function Footer() {
  return (
    <footer className="bg-surface-deep border-t border-white/[0.05]">
      <div className="lx-container py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-14">

          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-gold text-xl tracking-widest">IES</span>
              <span className="text-dimmer text-[10px] font-sans uppercase tracking-label border-l border-white/[0.08] pl-3">
                India Executive Search
              </span>
            </div>
            <p className="lx-body text-sm max-w-xs">
              Placing visionary leaders within luxury hospitality, travel, and tourism organisations across India and the world.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-dimmer text-[10px] font-sans uppercase tracking-label mb-6">Navigation</p>
            <nav className="space-y-4">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="block text-dim text-sm font-sans font-light hover:text-gold transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-dimmer text-[10px] font-sans uppercase tracking-label mb-6">Reach Us</p>
            <div className="space-y-4">
              <a href="mailto:info@indiaexecutivesearch.com"
                className="block text-dim text-sm font-sans font-light hover:text-gold transition-colors duration-300">
                info@indiaexecutivesearch.com
              </a>
              <a href="tel:+919560454774"
                className="block text-dim text-sm font-sans font-light hover:text-gold transition-colors duration-300">
                +91 9560 454 774
              </a>
              <p className="text-dim text-sm font-sans font-light">Gurgaon, Haryana — India</p>

              <motion.a
                href="https://www.linkedin.com/in/harish-chandra"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-dim text-sm font-sans font-light hover:text-gold transition-colors duration-300 mt-2"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                LinkedIn
              </motion.a>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="lx-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dimmer text-[11px] font-sans">
            © {new Date().getFullYear()} India Executive Search. All rights reserved.
          </p>
          <p className="text-dimmer text-[11px] font-sans">
            Gurgaon &nbsp;·&nbsp; India &nbsp;·&nbsp; Global
          </p>
        </div>
      </div>
    </footer>
  )
}
