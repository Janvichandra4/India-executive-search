import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp  = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}

const contactInfo = [
  { label: 'Email',    value: 'info@indiaexecutivesearch.com', href: 'mailto:info@indiaexecutivesearch.com', Icon: MailIcon    },
  { label: 'Phone',    value: '+91 9560 454 774',              href: 'tel:+919560454774',                   Icon: PhoneIcon   },
  { label: 'Location', value: 'Gurgaon, Haryana — India',     href: null,                                  Icon: PinIcon     },
]

const inquiryTypes = [
  { key: 'mandate',   label: 'Client Mandate'       },
  { key: 'candidate', label: 'Candidate Inquiry'     },
  { key: 'advisory',  label: 'Advisory Consultation' },
]

export default function ContactSection() {
  const [form,    setForm]    = useState({ name: '', email: '', company: '', type: 'mandate', message: '' })
  const [sent,    setSent]    = useState(false)
  const [focused, setFocused] = useState(null)

  const set  = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const setT = (v)  => setForm(f => ({ ...f, type: v }))
  const submit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <section id="contact" className="lx-section bg-surface-deep">
      <div className="lx-container">

        {/* Header */}
        <motion.div
          className="grid lg:grid-cols-2 gap-10 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <motion.span className="lx-label" variants={fadeUp}>Contact</motion.span>
            <motion.h2
              className="lx-heading"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)' }}
              variants={fadeUp}
            >
              Discuss Your<br />
              Leadership Requirement
            </motion.h2>
          </div>
          <motion.p className="lx-body text-[14.5px] lg:self-end" variants={fadeUp}>
            Whether you are seeking an exceptional leader for a critical mandate, or exploring your
            next opportunity in confidence, we welcome a discreet, no-obligation conversation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">

          {/* Left — contact details */}
          <motion.div
            className="lg:col-span-2 space-y-0"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {contactInfo.map(({ label, value, href, Icon }) => (
              <motion.div
                key={label}
                className="flex items-start gap-5 py-6 border-b border-white/[0.055] last:border-b-0 group"
                variants={fadeUp}
              >
                <div className="w-9 h-9 border border-white/[0.07] flex items-center justify-center flex-shrink-0 text-gold/45 group-hover:border-gold/30 group-hover:text-gold/70 transition-all duration-400">
                  <Icon />
                </div>
                <div>
                  <p className="text-dimmer text-[9px] font-sans uppercase tracking-label mb-1.5">{label}</p>
                  {href
                    ? <a href={href} className="font-sans font-light text-[13.5px] text-pearl/75 hover:text-gold transition-colors duration-300">{value}</a>
                    : <p className="font-sans font-light text-[13.5px] text-pearl/75">{value}</p>
                  }
                </div>
              </motion.div>
            ))}

            {/* LinkedIn */}
            <motion.div className="pt-8" variants={fadeUp}>
              <p className="text-dimmer text-[9px] font-sans uppercase tracking-label mb-4">Connect</p>
              <motion.a
                href="https://www.linkedin.com/in/harish-chandra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-dim hover:text-gold text-[13px] font-sans font-light transition-colors duration-300 group"
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
            </motion.div>
          </motion.div>

          {/* Right — form */}
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
                  <p className="lx-body text-[13.5px]">Your message has been received. We will respond within one business day.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={submit}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                >
                  {/* Inquiry type */}
                  <div>
                    <p className="text-dimmer text-[9px] font-sans uppercase tracking-label mb-3">Inquiry Type</p>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map(({ key, label }) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setT(key)}
                          className={`text-[9.5px] font-sans uppercase tracking-label px-4 py-2.5 border transition-all duration-300 outline-none ${
                            form.type === key
                              ? 'border-gold/60 text-gold bg-gold/[0.07]'
                              : 'border-white/[0.08] text-dimmer hover:border-white/20 hover:text-dim'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <LuxInput label="Full Name"     name="name"  value={form.name}  onChange={set} focused={focused} onFocus={setFocused} required />
                    <LuxInput label="Email Address" name="email" type="email" value={form.email} onChange={set} focused={focused} onFocus={setFocused} required />
                  </div>

                  {/* Organisation */}
                  <LuxInput label="Organisation / Brand" name="company" value={form.company} onChange={set} focused={focused} onFocus={setFocused} />

                  {/* Message */}
                  <div>
                    <label className="text-dimmer text-[9px] font-sans uppercase tracking-label mb-2.5 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={set}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      rows={5}
                      className="w-full bg-surface-card text-pearl placeholder-dimmer font-sans font-light text-[13.5px] px-5 py-4 resize-none outline-none transition-colors duration-400"
                      style={{
                        border: `1px solid ${focused === 'message' ? 'rgba(198,167,105,0.35)' : 'rgba(255,255,255,0.07)'}`,
                      }}
                      placeholder="Tell us about your requirement or inquiry…"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-gold"
                    whileHover={{ y: -3, boxShadow: '0 12px 28px rgba(198,167,105,0.22)' }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    Submit Inquiry
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                      <path d="M2 6.5h9M7.5 3l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function LuxInput({ label, name, type = 'text', value, onChange, required, focused, onFocus }) {
  return (
    <div>
      <label className="text-dimmer text-[9px] font-sans uppercase tracking-label mb-2.5 block">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => onFocus(name)}
        onBlur={() => onFocus(null)}
        required={required}
        className="w-full bg-surface-card text-pearl placeholder-dimmer font-sans font-light text-[13.5px] px-5 py-4 outline-none transition-colors duration-400"
        style={{
          border: `1px solid ${focused === name ? 'rgba(198,167,105,0.35)' : 'rgba(255,255,255,0.07)'}`,
        }}
        placeholder={label}
      />
    </div>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="13" height="9" rx="1" />
      <path d="M1 5l6.5 4.5L14 5" />
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
      <path d="M7.5 1C5.57 1 4 2.57 4 4.5 4 7.5 7.5 14 7.5 14S11 7.5 11 4.5C11 2.57 9.43 1 7.5 1z" />
      <circle cx="7.5" cy="4.5" r="1.3" />
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
