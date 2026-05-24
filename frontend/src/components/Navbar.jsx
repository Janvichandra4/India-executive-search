import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export default function Navbar({ currentPage, navigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [currentPage])

  const links = [
    { label: 'About',      page: 'about'      },
    { label: 'Employers',  page: 'employers'  },
    { label: 'Candidates', page: 'candidates' },
    { label: 'Sectors',    page: 'sectors'    },
    { label: 'Contact',    page: 'contact'    },
  ]

  const isActive = (p) => currentPage === p

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-surface-deep/95 backdrop-blur-2xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        <div className="lx-container h-[88px] flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-4 group outline-none cursor-pointer"
            aria-label="India Executive Search — Home"
          >
            <span
              className="font-serif text-gold group-hover:text-gold-light transition-colors duration-500"
              style={{ fontSize: '1.2rem', letterSpacing: '0.28em', fontWeight: 400 }}
            >
              IES
            </span>
            <span className="hidden sm:flex items-center border-l border-white/[0.1] pl-4">
              <span
                className="font-sans uppercase text-dim group-hover:text-pearl/60 transition-colors duration-500"
                style={{ fontSize: '10px', letterSpacing: '0.22em', lineHeight: 1, fontWeight: 400 }}
              >
                India Executive Search
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary navigation">
            {links.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className={`relative font-sans uppercase transition-colors duration-400 outline-none group ${
                  isActive(page) ? 'text-gold' : 'text-dim hover:text-pearl'
                }`}
                style={{ fontSize: '12px', letterSpacing: '0.18em', fontWeight: 500 }}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-500 ${
                    isActive(page)
                      ? 'w-full bg-gold opacity-100'
                      : 'w-0 bg-gold/50 opacity-60 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-5">
            <motion.button
              onClick={() => navigate('contact')}
              className="hidden md:inline-flex btn-gold"
              style={{ fontSize: '10.5px', paddingTop: '0.72rem', paddingBottom: '0.72rem', paddingLeft: '1.6rem', paddingRight: '1.6rem' }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              Discuss a Mandate
            </motion.button>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-[5.5px] p-2 -mr-1 outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <motion.span
                className="block w-[22px] h-[1.5px] bg-pearl origin-center"
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
              <motion.span
                className="block w-[14px] h-[1.5px] bg-pearl"
                animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block w-[22px] h-[1.5px] bg-pearl origin-center"
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
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
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: 'rgba(6,5,4,0.98)', backdropFilter: 'blur(28px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="absolute inset-0 grain opacity-50 pointer-events-none" />

            {/* Mobile header */}
            <div className="relative z-10 lx-container h-[76px] flex items-center justify-between">
              <button onClick={() => { navigate('home'); setOpen(false) }} className="outline-none">
                <span className="font-serif text-gold" style={{ fontSize: '1.2rem', letterSpacing: '0.28em' }}>
                  IES
                </span>
              </button>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-dim hover:text-pearl transition-colors outline-none"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Mobile links */}
            <nav className="relative z-10 flex flex-col justify-center flex-1 lx-container pb-16">
              {[{ label: 'Home', page: 'home' }, ...links].map(({ label, page }, i) => (
                <motion.button
                  key={page}
                  onClick={() => { navigate(page); setOpen(false) }}
                  className={`block w-full text-left font-serif py-5 border-b border-white/[0.07] outline-none transition-colors duration-300 ${
                    isActive(page) ? 'text-gold' : 'text-pearl/75 hover:text-gold'
                  }`}
                  style={{ fontSize: 'clamp(1.9rem, 5vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.55, ease: EASE }}
                >
                  {label}
                </motion.button>
              ))}

              <motion.button
                onClick={() => { navigate('contact'); setOpen(false) }}
                className="btn-gold mt-10 self-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                Discuss a Mandate
                <ArrowIcon />
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2 6.5h9M7.5 3l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
