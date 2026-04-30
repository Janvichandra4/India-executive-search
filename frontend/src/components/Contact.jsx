import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

const details = [
  {
    label: 'Email',
    value: 'info@indiaexecutivesearch.com',
    href:  'mailto:info@indiaexecutivesearch.com',
    Icon: EmailIcon,
  },
  {
    label: 'Phone',
    value: '+91 9560 454 774',
    href:  'tel:+919560454774',
    Icon: PhoneIcon,
  },
  {
    label: 'Location',
    value: 'Gurgaon, Haryana — India',
    href:  null,
    Icon: LocationIcon,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire up your backend / email service here
    setSent(true)
  }

  return (
    <section id="contact" className="bg-luxury py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.span className="section-label" {...fadeUp(0)}>
            Contact
          </motion.span>
          <motion.h2 className="section-title mb-6" {...fadeUp(0.1)}>
            Let's Begin a Conversation
          </motion.h2>
          <motion.p className="text-cream-muted font-light leading-relaxed" {...fadeUp(0.2)}>
            Whether you are seeking an exceptional leader or exploring your next opportunity, we would welcome a discreet, no-obligation conversation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">

          {/* Contact details */}
          <motion.div
            className="lg:col-span-2 space-y-10"
            {...fadeUp(0.25)}
          >
            {details.map(({ label, value, href, Icon }) => (
              <div key={label} className="flex items-start gap-5">
                <div className="w-10 h-10 border border-luxury-border flex items-center justify-center flex-shrink-0 text-gold/60">
                  <Icon />
                </div>
                <div>
                  <p className="text-cream-muted text-xs font-sans uppercase tracking-label mb-1">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-cream font-light hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-cream font-light text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* LinkedIn */}
            <div className="pt-4 border-t border-luxury-border">
              <p className="text-cream-muted text-xs font-sans uppercase tracking-label mb-4">Follow</p>
              <a
                href="https://www.linkedin.com/in/harish-chandra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-cream-muted hover:text-gold transition-colors duration-300 text-sm font-light group"
              >
                <LinkedInIcon />
                LinkedIn
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                >
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="lg:col-span-3" {...fadeUp(0.35)}>
            {sent ? (
              <motion.div
                className="border border-gold/30 bg-luxury-card p-10 text-center"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mx-auto mb-6">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4.5 4.5 7.5-9" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-serif text-cream text-2xl mb-3">Thank you</p>
                <p className="text-cream-muted text-sm font-light leading-relaxed">
                  Your message has been received. We will be in touch within one business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                  <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>
                <Field label="Organisation" name="company" value={form.company} onChange={handleChange} />
                <div>
                  <label className="text-cream-muted text-xs font-sans uppercase tracking-label mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-luxury-card border border-luxury-border text-cream placeholder-cream-faint
                               text-sm font-light px-5 py-4 resize-none
                               outline-none focus:border-gold/50 transition-colors duration-300"
                    placeholder="Tell us about your requirement or inquiry..."
                  />
                </div>

                <button type="submit" className="btn-primary">
                  Get in Touch
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="text-cream-muted text-xs font-sans uppercase tracking-label mb-2 block">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-luxury-card border border-luxury-border text-cream placeholder-cream-faint
                   text-sm font-light px-5 py-4
                   outline-none focus:border-gold/50 transition-colors duration-300"
        placeholder={label}
      />
    </div>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="14" height="10" rx="1" />
      <path d="M2 6l7 5 7-5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h4l1.5 3.5-2 1.5a10 10 0 003.5 3.5l1.5-2L15 11v4a1 1 0 01-1 1C6 16 2 10 2 4a1 1 0 011-1z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 1C6.24 1 4 3.24 4 6c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z" />
      <circle cx="9" cy="6" r="1.5" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <path d="M4.477 2.5a1.977 1.977 0 110 3.955 1.977 1.977 0 010-3.955zM2.5 7.5h4v8h-4v-8zm5.5 0h3.8v1.1h.05c.53-.95 1.82-1.95 3.75-1.95 4.02 0 4.76 2.5 4.76 5.75v6.6H16.4V13.5c0-1.5-.03-3.4-2.2-3.4-2.2 0-2.55 1.6-2.55 3.3V19.5H8V7.5z" />
    </svg>
  )
}
