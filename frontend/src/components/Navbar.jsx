import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export default function Navbar({ onNavigateOpportunities }) {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'About',     href: '#about'        },
    { label: 'Services',  href: '#services'      },
    { label: 'Process',   href: '#process'       },
    { label: 'Our Sectors', href: '#sectors'     },
    { label: 'Opportunities', href: null, action: onNavigateOpportunities },
    { label: 'Contact',   href: '#contact'       },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-surface-deep/92 backdrop-blur-xl border-b border-white/[0.05]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0,    opacity: 1 }}
        transition={{ duration: 1, ease: EASE }}
      >
        <div className="lx-container h-[72px] flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-baseline gap-3.5 group" aria-label="India Executive Search — Home">
            <span className="font-serif text-gold tracking-widest group-hover:text-gold-light transition-colors duration-500"
                  style={{ fontSize: '1.05rem', letterSpacing: '0.28em' }}>
              IES
            </span>
            <span className="hidden sm:flex items-center text-dimmer text-[9px] font-sans uppercase tracking-widest border-l border-white/[0.08] pl-3.5 leading-none">
              India Executive Search
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            {links.map(({ label, href, action }) => (
              <a
                key={label}
                href={href ?? '#'}
                onClick={action ? (e) => { e.preventDefault(); action() } : undefined}
                className="relative text-dim text-[10px] font-sans uppercase tracking-label hover:text-pearl transition-colors duration-400 group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold/55 transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-5">
            <motion.a
              href="#contact"
              className="hidden md:inline-flex btn-gold"
              style={{ fontSize: '9px', paddingTop: '0.65rem', paddingBottom: '0.65rem', paddingLeft: '1.4rem', paddingRight: '1.4rem' }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              Discuss a Mandate
            </motion.a>

            {/* Animated burger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2 -mr-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              <motion.span
                className="block w-5 h-px bg-pearl origin-center"
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
              <motion.span
                className="block w-3.5 h-px bg-pearl"
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-px bg-pearl origin-center"
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ backgroundColor: 'rgba(7,7,6,0.97)', backdropFilter: 'blur(24px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {/* Decorative grain */}
            <div className="absolute inset-0 grain opacity-60 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-7">
              {links.map(({ label, href, action }, i) => (
                <motion.a
                  key={label}
                  href={href ?? '#'}
                  onClick={(e) => {
                    if (action) { e.preventDefault(); action() }
                    setOpen(false)
                  }}
                  className="font-serif text-2xl text-dim hover:text-gold transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, ease: EASE }}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-gold mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Discuss a Mandate
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
