import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About',        href: '#about'        },
  { label: 'Services',     href: '#services'     },
  { label: 'Our Process',  href: '#process'      },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-surface/85 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="lx-container h-[70px] flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-baseline gap-3 group">
            <span className="font-serif text-gold text-xl font-normal tracking-widest group-hover:text-gold-light transition-colors duration-300">
              IES
            </span>
            <span className="hidden sm:block text-dimmer text-[10px] font-sans uppercase tracking-label border-l border-white/[0.1] pl-3">
              India Executive Search
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="relative text-dim text-[11px] font-sans uppercase tracking-label hover:text-pearl transition-colors duration-300 group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-5">
            <motion.a
              href="#contact"
              className="hidden md:inline-flex btn-gold text-[10px] py-3 px-6"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Hire Talent
            </motion.a>

            <button
              className="lg:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span className={`block w-5 h-px bg-pearl transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block w-3 h-px bg-pearl transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-pearl transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-surface/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-9"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-dim hover:text-gold transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Hire Talent
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
