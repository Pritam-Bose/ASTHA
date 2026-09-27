import { Link } from 'react-router-dom'
import Card from '../components/Card.jsx'
import { site, whatsappLink } from '../site.config.js'

export default function Home() {
  return (
    <>
      <section className="section">
        <h2>The solutions you are looking for, for your devices and your software</h2>
        <p className="lead">
          Astha Provides works in the IT sector: we test your websites for weaknesses, keep your
          devices and software running, build the things you need, and supply the hardware and
          licences behind them. One contact for all of it.
        </p>
        <div className="actions">
          <Link className="btn" to="/services">See our services</Link>
          <a className="btn btn-outline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <section className="section">
        <h2>What we do</h2>
        <div className="grid grid-4">
          {site.services.map((s) => (
            <Card key={s.title} image={s.image} title={s.title} text={s.text} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split">
          <div>
            <h2>Why businesses stay with Astha</h2>
            <ul className="ticks">
              <li>One partner across security, support, development and supply.</li>
              <li>Findings explained in plain language, ranked by real risk.</li>
              <li>Work scoped to what you actually need, not what sells.</li>
              <li>Support that answers, and follows through after the handover.</li>
            </ul>
          </div>
          <div className="panel">
            <h3>Talk to us</h3>
            <p>Tell us what is breaking, what you want built, or what you need tested. We will tell you honestly whether we are the right fit.</p>
            <a className="btn" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
