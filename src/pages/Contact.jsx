import { useState } from 'react'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
)
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
)
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
)
const BadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
)
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
)

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const update = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend on static hosting — open the visitor's email client with the details.
    // Swap this for a Formspree endpoint or Firebase function to collect submissions directly.
    const subject = encodeURIComponent(`Consultation request from ${form.name || 'website'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    )
    window.location.href = `mailto:info@kozakadjusting.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Request a free consultation — no project is too small. We&apos;re available 24/7.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info-side">
              <h2>Get in Touch</h2>
              <p>
                Don&apos;t understand your coverage, or dealing with water or fire damage?
                Reach out and a New Jersey licensed public adjuster will help you understand
                your options — at no cost.
              </p>

              <div className="contact-item">
                <div className="contact-item__icon"><PhoneIcon /></div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+19732194973">(973) 219-4973</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item__icon"><ClockIcon /></div>
                <div>
                  <h4>Hours</h4>
                  <p>Open 24/7 — call any time</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item__icon"><MapPinIcon /></div>
                <div>
                  <h4>Service Area</h4>
                  <p>New Jersey &amp; Surrounding Areas</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item__icon"><BadgeIcon /></div>
                <div>
                  <h4>License</h4>
                  <p>NJ Public Adjuster License #1609652</p>
                </div>
              </div>
            </div>

            <div className="contact-form-box">
              {sent ? (
                <div className="form-success">
                  <div className="form-success__icon"><CheckIcon /></div>
                  <h3>Thank you!</h3>
                  <p>
                    Your message is ready to send from your email app. Prefer to talk now?
                    Call us any time at <a href="tel:+19732194973">(973) 219-4973</a>.
                  </p>
                </div>
              ) : (
                <>
                  <h3>Request a Free Consultation</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" type="text" value={form.name} onChange={update} required />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input id="email" name="email" type="email" value={form.email} onChange={update} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">How can we help?</label>
                      <textarea id="message" name="message" value={form.message} onChange={update} placeholder="Tell us about your situation — type of damage, when it happened, and any questions about your coverage." />
                    </div>
                    <button type="submit" className="btn btn-primary form-submit">Send Message</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
