import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { site, whatsappLink } from '../site.config.js'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="bar">
        <div className="container bar-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img className="brand-logo" src="/brand.png" alt="" />
            <span className="brand-text">{site.name}</span>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>

          <nav className={open ? 'nav nav-open' : 'nav'}>
            {site.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Header picture - change it via site.headerImage in src/site.config.js */}
      <div className="hero" style={{ backgroundImage: `url(${site.headerImage})` }}>
        <div className="container hero-inner">
          <p className="hero-kicker">{site.tagline}</p>
          <h1>{site.name}</h1>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>{site.name}</h4>
          <p>{site.tagline}</p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul className="footer-links">
            {site.nav.map((item) => (
              <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Reach us</h4>
          <p>{site.contact.phone}</p>
          <p><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
          <p>{site.contact.address}</p>
        </div>
      </div>
      <div className="container footer-base">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 4C9.4 4 4 8.7 4 14.5c0 3.3 1.7 6.3 4.4 8.3L7 27.8l5.5-2.3c1.1.3 2.3.5 3.5.5 6.6 0 12-4.7 12-10.5S22.6 4 16 4zm0 19c-1.1 0-2.2-.2-3.2-.5l-.5-.2-3.3 1.4.9-3.2-.4-.6c-2.4-1.7-3.9-4.2-3.9-6.9C5.6 9.8 10.3 6 16 6s10.4 3.8 10.4 8.5S21.7 23 16 23z"
        />
      </svg>
      <span>WhatsApp</span>
    </a>
  )
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useEffect(() => { document.title = site.name }, [])

  return (
    <>
      <Header />
      <main className="container page"><Outlet /></main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
