import { useState } from 'react'
import { site, whatsappLink } from '../site.config.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' })

  const filled = form.name.trim() || form.message.trim()
  const href = whatsappLink(
    filled
      ? `Hi Astha Provides, my name is ${form.name.trim() || 'a visitor'}. ${form.message.trim()}`.trim()
      : undefined,
  )

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  return (
    <>
      <section className="section">
        <div className="split">
          <div>
            <h2>Contact details</h2>
            <p className="lead warning">PLACEHOLDER details - edit <code>site.contact</code> in <code>src/site.config.js</code>.</p>
            <dl className="details">
              <dt>Phone</dt>
              <dd><a href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>{site.contact.phone}</a></dd>
              <dt>Email</dt>
              <dd><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></dd>
              <dt>Address</dt>
              <dd>{site.contact.address}</dd>
              <dt>Hours</dt>
              <dd>
                {site.contact.hours.map((h) => (
                  <span className="hours" key={h.days}>{h.days}: {h.time}</span>
                ))}
              </dd>
            </dl>
          </div>

          <div className="panel">
            <h3>Send it straight to WhatsApp</h3>
            <p>
              Fill this in and the button opens WhatsApp with your message already typed.
              Nothing is stored on a server, so there is no backend to maintain.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); window.open(href, '_blank', 'noopener,noreferrer') }}
            >
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" value={form.name} onChange={update('name')} autoComplete="name" />

              <label htmlFor="message">How can we help?</label>
              <textarea id="message" name="message" rows="4" value={form.message} onChange={update('message')} />

              <button className="btn" type="submit">Open WhatsApp</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
