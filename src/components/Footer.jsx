import { Link } from 'react-router-dom'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
)

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/kozak-icon-white.png" alt="" className="footer__logo-icon" />
              <span><strong>Kozak</strong> Adjusting LLC</span>
            </div>
            <p>
              New Jersey licensed public adjusters. We help homeowners and businesses
              get fair insurance payouts after water, fire, storm, and flood damage —
              with in-house remediation and reconstruction under one roof.
            </p>
            <div className="footer__certs">
              <span>NJ License #1609652</span>
              <span>Available 24/7</span>
              <span>No Upfront Costs</span>
            </div>
          </div>

          <div className="footer__col">
            <h4>Pages</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/public-adjusters">Public Adjusters</Link></li>
              <li><Link to="/water-fire-damage">Water &amp; Fire Damage</Link></li>
              <li><Link to="/reconstruction">Reconstruction</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/water-fire-damage">Water Damage Claims</Link></li>
              <li><Link to="/water-fire-damage">Fire Damage Claims</Link></li>
              <li><Link to="/reconstruction">Reconstruction</Link></li>
              <li><Link to="/">How Our Fees Work</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <div className="footer__contact-item">
              <PhoneIcon />
              <a href="tel:+19732194973">(973) 219-4973</a>
            </div>
            <div className="footer__contact-item">
              <ClockIcon />
              <span>Open 24/7</span>
            </div>
            <div className="footer__contact-item">
              <MapPinIcon />
              <span>New Jersey &amp; Surrounding Areas</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {year} Kozak Adjusting LLC. All rights reserved.</span>
          <span>NJ Licensed Public Adjusters &bull; License #1609652</span>
        </div>
      </div>
    </footer>
  )
}
