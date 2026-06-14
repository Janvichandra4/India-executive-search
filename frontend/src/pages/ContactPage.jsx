import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

const contactInfo = [
  {
    label: 'Email',
    value: 'info@indiaexecutivesearch.com',
    href:  'mailto:info@indiaexecutivesearch.com',
    Icon:  MailIcon,
  },
  {
    label: 'Phone',
    value: '+91 9560 454 774',
    href:  'tel:+919560454774',
    Icon:  PhoneIcon,
  },
  {
    label: 'Location',
    value: 'Gurgaon, Haryana — India',
    href:  null,
    Icon:  PinIcon,
  },
]

const inquiryTypes = [
  { key: 'mandate',   label: 'Client Mandate'       },
  { key: 'candidate', label: 'Candidate Inquiry'     },
  { key: 'advisory',  label: 'Advisory Consultation' },
]

export default function ContactPage() {
  const [form,    setForm]    = useState({ name: '', email: '', company: '', type: 'mandate', message: '' })
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')
  const [focused, setFocused] = useState(null)

  const set  = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const setT = (v)  => setForm(f => ({ ...f, type: v }))

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete all required fields before submitting.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed.')
      setSent(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Page header */}
      <section
        className="relative flex items-end overflow-hidden border-b border-white/[0.055]"
        style={{ minHeight: '52vh', paddingTop: '88px' }}
      >
        {/* Background image */}
        <div className="absolute inset-0 bg-surface-deep" />
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(6,5,4,0.96) 0%, rgba(6,5,4,0.65) 45%, rgba(6,5,4,0.45) 100%)',
          }}
        />
        <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

        <div className="relative z-10 lx-container pb-14 md:pb-20">
          <motion.span
            className="lx-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          >
            Contact
          </motion.span>
          <motion.h1
            className="lx-heading-display"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)' }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: EASE, delay: 0.45 }}
          >
            Discuss Your
            <br />
            <em className="text-gold not-italic">Leadership Requirement</em>
          </motion.h1>
        </div>
      </section>

      {/* Form section */}
      <section className="lx-section bg-surface">
        <div className="lx-container">

          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">

            {/* Contact details */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.p
                className="lx-body text-[16px] mb-12"
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } } }}
              >
                Whether you are seeking an exceptional leader for a critical mandate, or exploring
                your next opportunity in confidence, we welcome a discreet, no-obligation
                conversation.
              </motion.p>

              {contactInfo.map(({ label, value, href, Icon }) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-5 py-6 border-b border-white/[0.055] last:border-b-0 group"
                  variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } } }}
                >
                  <div className="w-10 h-10 border border-white/[0.08] flex items-center justify-center flex-shrink-0 text-gold/45 group-hover:border-gold/30 group-hover:text-gold/70 transition-all duration-400">
                    <Icon />
                  </div>
                  <div>
                    <p className="font-sans uppercase text-dimmer mb-1.5" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
                      {label}
                    </p>
                    {href
                      ? <a href={href} className="font-sans font-light text-pearl/90 hover:text-gold transition-colors duration-300" style={{ fontSize: '14px' }}>{value}</a>
                      : <p className="font-sans font-light text-pearl/90" style={{ fontSize: '14px' }}>{value}</p>
                    }
                  </div>
                </motion.div>
              ))}

              {/* LinkedIn */}
              <motion.div
                className="pt-8"
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } } }}
              >
                <p className="font-sans uppercase text-dimmer mb-4" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
                  Connect
                </p>
                <div className="flex flex-col gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/harishchandra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-pearl/75 hover:text-gold font-sans font-light transition-colors duration-300 group"
                    style={{ fontSize: '14px' }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <LinkedInIcon />
                    LinkedIn — Harish Chandra
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <path d="M1 8l7-7M8 1H3M8 1v5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/jaikiran-ahluwalia-a7095626/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-pearl/75 hover:text-gold font-sans font-light transition-colors duration-300 group"
                    style={{ fontSize: '14px' }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <LinkedInIcon />
                    LinkedIn — Jaikiran Ahluwalia
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <path d="M1 8l7-7M8 1H3M8 1v5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    className="border border-gold/18 bg-surface-card p-14 text-center"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <div className="w-12 h-12 border border-gold/25 flex items-center justify-center mx-auto mb-7">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M2.5 8.5l4.5 4.5 7.5-9" stroke="#C6A769" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-serif text-pearl text-2xl mb-3 font-normal">Thank you</p>
                    <p className="lx-body text-[14.5px]">
                      Your message has been received. We will respond within one business day.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Inquiry type */}
                    <div>
                      <p className="font-sans uppercase text-dimmer mb-3" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
                        Inquiry Type
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTypes.map(({ key, label }) => (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setT(key)}
                            className={`font-sans uppercase tracking-label px-5 py-2.5 border transition-all duration-300 outline-none ${
                              form.type === key
                                ? 'border-gold/60 text-gold bg-gold/[0.07]'
                                : 'border-white/[0.08] text-dimmer hover:border-white/20 hover:text-dim'
                            }`}
                            style={{ fontSize: '10.5px', letterSpacing: '0.18em' }}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <LuxInput label="Full Name"     name="name"  value={form.name}  onChange={set} focused={focused} onFocus={setFocused} required />
                      <LuxInput label="Email Address" name="email" type="email" value={form.email} onChange={set} focused={focused} onFocus={setFocused} required />
                    </div>

                    <LuxInput label="Organisation / Brand" name="company" value={form.company} onChange={set} focused={focused} onFocus={setFocused} />

                    <div>
                      <label className="font-sans uppercase text-dimmer mb-2.5 block" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={set}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        rows={5}
                        className="w-full bg-surface-card text-pearl placeholder-dimmer font-sans font-light px-5 py-4 resize-none outline-none transition-colors duration-400"
                        style={{
                          fontSize: '14px',
                          border: `1px solid ${focused === 'message' ? 'rgba(198,167,105,0.38)' : 'rgba(255,255,255,0.07)'}`,
                        }}
                        placeholder="Tell us about your requirement or inquiry…"
                      />
                    </div>

                    {error && (
                      <p className="font-sans text-[13px]" style={{ color: 'rgba(220,100,100,0.85)' }}>
                        {error}
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="btn-gold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                      whileHover={loading ? {} : { y: -2, boxShadow: '0 12px 28px rgba(198,167,105,0.22)' }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      {loading ? 'Sending…' : 'Submit Inquiry'}
                      {!loading && (
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                          <path d="M2 6.5h9M7.5 3l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

function LuxInput({ label, name, type = 'text', value, onChange, required, focused, onFocus }) {
  return (
    <div>
      <label className="font-sans uppercase text-dimmer mb-2.5 block" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        onFocus={() => onFocus(name)} onBlur={() => onFocus(null)}
        required={required}
        className="w-full bg-surface-card text-pearl placeholder-dimmer font-sans font-light px-5 py-4 outline-none transition-colors duration-400"
        style={{
          fontSize: '14px',
          border: `1px solid ${focused === name ? 'rgba(198,167,105,0.38)' : 'rgba(255,255,255,0.07)'}`,
        }}
        placeholder={label}
      />
    </div>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="13" height="9" rx="1" /><path d="M1 5l6.5 4.5L14 5" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 2.5H6l1.5 3.5-2 1.5a9 9 0 002.5 2.5l1.5-2L13 9.5v3.5a1 1 0 01-1 1C5 14 1 10 1 3.5a1 1 0 011-1z" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 1C5.57 1 4 2.57 4 4.5 4 7.5 7.5 14 7.5 14S11 7.5 11 4.5C11 2.57 9.43 1 7.5 1z" /><circle cx="7.5" cy="4.5" r="1.3" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  )
}
