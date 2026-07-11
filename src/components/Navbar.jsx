import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/public-adjusters', label: 'Public Adjusters' },
  { to: '/water-fire-damage', label: 'Water & Fire Damage' },
  { to: '/reconstruction', label: 'Reconstruction' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={close}>
          <img src="/Kozak_Logo.png" alt="Kozak Adjusting — NJ Licensed Public Adjusters" className="navbar__logo-img" />
        </Link>

        <ul className={`navbar__links${isOpen ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={close}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href="tel:+19732194973" className="btn btn-primary navbar__cta" onClick={close}>
              (973) 219-4973
            </a>
          </li>
        </ul>

        <button
          className={`navbar__burger${isOpen ? ' open' : ''}`}
          onClick={() => setIsOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
