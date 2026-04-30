import { useState } from 'react'
import { motion } from 'framer-motion'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } }
const reveal  = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }

const contactInfo = [
  { label: 'Email',    value: 'info@indiaexecutivesearch.com', href: 'mailto:info@indiaexecutivesearch.com', Icon: MailIcon    },
  { label: 'Phone',    value: '+91 9560 454 774',              href: 'tel:+919560454774',                   Icon: PhoneIcon   },
  { label: 'Location', value: 'Gurgaon, Haryana — India',     href: null,                                  Icon: PinIcon     },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <section id="contact" className="lx-section bg-surface-deep">
      <div className="lx-container">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-20"
          variants={stagger} initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span className="lx-label" variants={reveal} transition={{ duration: 0.8 }}>
            Contact
          </motion.span>
          <motion.h2
            className="lx-heading text-4xl md:text-5xl mb-6"
            variants={reveal} transition={{ duration: 0.8 }}
          >
            Let's Begin a Conversation
          </motion.h2>
          <motion.p className="lx-body" variants={reveal} transition={{ duration: 0.8 }}>
            Whether you are seeking an exceptional leader or exploring your next opportunity, we welcome a discreet, no-obligation conversation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">

          {/* Contact details */}
          <motion.div
            className="lg:col-span-2 space-y-10"
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, amount: 0.2 }}
          >
            {contactInfo.map(({ label, value, href, Icon }) => (
              <motion.div key={label} className="flex items-start gap-5" variants={reveal} transition={{ duration: 0.8 }}>
                <div className="w-10 h-10 border border-white/[0.08] flex items-center justify-center flex-shrink-0 text-gold/50">
                  <Icon />
                </div>
                <div>
                  <p className="text-dimmer text-[10px] font-sans uppercase tracking-label mb-1">{label}</p>
                  {href
                    ? <a href={href} className="text-pearl font-sans font-light text-sm hover:text-gold transition-colors duration-300">{value}</a>
                    : <p className="text-pearl font-sans font-light text-sm">{value}</p>
                  }
                </div>
              </motion.div>
            ))}

            <motion.div variants={reveal} transition={{ duration: 0.8 }}>
              <div className="border-t border-white/[0.06] pt-8">
                <p className="text-dimmer text-[10px] font-sans uppercase tracking-label mb-4">Follow</p>
                <motion.a
                  href="https://www.linkedin.com/in/harish-chandra"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-dim hover:text-gold text-sm font-sans font-light transition-colors duration-300 group"
                  whileHover={{ y: -2 }}
                >
                  <LinkedInIcon />
                  LinkedIn — Connect with Harish
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <path d="M1.5 8.5l7-7M8.5 1.5H3M8.5 1.5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sent ? (
              <motion.div
                className="border border-gold/20 bg-surface-card p-12 text-center"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9l4.5 4.5 7.5-9" stroke="#C6A769" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-serif text-pearl text-2xl mb-3">Thank you</p>
                <p className="lx-body text-sm">Your message has been received. We will be in touch within one business day.</p>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <InputField label="Full Name"      name="name"    value={form.name}    onChange={set} required />
                  <InputField label="Email Address"  name="email"   type="email" value={form.email}   onChange={set} required />
                </div>
                <InputField label="Organisation"    name="company" value={form.company} onChange={set} />
                <div>
                  <label className="text-dimmer text-[10px] font-sans uppercase tracking-label mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={set} rows={5}
                    className="w-full bg-surface-card border border-white/[0.08] text-pearl placeholder-dimmer
                               font-sans font-light text-sm px-5 py-4 resize-none
                               outline-none focus:border-gold/40 transition-colors duration-300"
                    placeholder="Tell us about your requirement or inquiry..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-gold"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Get in Touch
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function InputField({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="text-dimmer text-[10px] font-sans uppercase tracking-label mb-2 block">{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange} required={required}
        className="w-full bg-surface-card border border-white/[0.08] text-pearl placeholder-dimmer
                   font-sans font-light text-sm px-5 py-4
                   outline-none focus:border-gold/40 transition-colors duration-300"
        placeholder={label}
      />
    </div>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="14" height="10" rx="1" />
      <path d="M1 5l7 5 7-5" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 2.5h3.5l1.5 3.5-2 1.5a9.5 9.5 0 003 3l1.5-2L13.5 10V13.5a1 1 0 01-1 1C5 14.5 1.5 9 1.5 3.5a1 1 0 011-1z" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1C5.79 1 4 2.79 4 5c0 3.5 4 10 4 10s4-6.5 4-10c0-2.21-1.79-4-4-4z" />
      <circle cx="8" cy="5" r="1.5" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  )
}
