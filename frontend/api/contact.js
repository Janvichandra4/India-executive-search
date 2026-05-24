import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const INQUIRY_LABELS = {
  mandate:   'Client Mandate',
  candidate: 'Candidate Inquiry',
  advisory:  'Advisory Consultation',
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, company, type, message } = req.body ?? {}

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  const inquiryLabel = INQUIRY_LABELS[type] ?? 'General Inquiry'
  const companyLine  = company?.trim() ? `<p><strong>Organisation:</strong> ${company}</p>` : ''

  try {
    await resend.emails.send({
      // Change the `from` address once indiaexecutivesearch.com is verified in Resend.
      from:     'IES Contact <onboarding@resend.dev>',
      to:       'harisdoon@gmail.com',
      replyTo:  email.trim(),
      subject:  `[IES] ${inquiryLabel} — ${name.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1a1a1a;">
          <h2 style="border-bottom: 2px solid #C6A769; padding-bottom: 10px; color: #111;">
            New Inquiry — India Executive Search
          </h2>
          <table style="width:100%; border-collapse:collapse; margin-top:16px;">
            <tr><td style="padding:8px 0; font-weight:600; width:140px;">Type</td><td>${inquiryLabel}</td></tr>
            <tr><td style="padding:8px 0; font-weight:600;">Name</td><td>${name.trim()}</td></tr>
            <tr><td style="padding:8px 0; font-weight:600;">Email</td><td><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
            ${companyLine ? `<tr><td style="padding:8px 0; font-weight:600;">Organisation</td><td>${company.trim()}</td></tr>` : ''}
          </table>
          <h3 style="margin-top:24px; color:#333;">Message</h3>
          <div style="background:#f7f7f7; padding:16px; border-left:3px solid #C6A769; white-space:pre-wrap; line-height:1.6;">
            ${message.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}
          </div>
          <p style="margin-top:24px; font-size:12px; color:#888;">
            Reply directly to this email to respond to ${name.trim()}.
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Message could not be sent. Please try again or contact us directly.' })
  }
}
