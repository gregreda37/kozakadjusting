import { Link } from 'react-router-dom'

const SERVICES = [
  { title: 'Structural Repairs', desc: 'Framing, drywall, and structural work to bring your property back to a safe, sound condition.' },
  { title: 'Interior Finishes', desc: 'Flooring, paint, trim, and finish carpentry — restored to match or exceed the original.' },
  { title: 'Kitchens & Baths', desc: 'Full rebuilds of damaged kitchens and bathrooms, from cabinetry to fixtures.' },
  { title: 'Roofing & Exterior', desc: 'Roof, siding, and exterior repairs to seal the envelope and protect against future damage.' },
]

export default function Reconstruction() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Reconstruction</h1>
          <p>Once the damage is mitigated, we rebuild. From bare studs back to a finished home — one company, one contract, start to finish.</p>
        </div>
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="home-split">
            <div className="home-split__text">
              <div className="sec-label sec-label--left">One Company, The Whole Job</div>
              <h2>We Don&apos;t Just Adjust the Claim — We Rebuild</h2>
              <p>
                Most homeowners get bounced between an adjuster, a mitigation company, and
                a separate contractor. That means multiple schedules, multiple contracts,
                and people who may not communicate.
              </p>
              <p>
                Kozak Adjusting handles the claim <em>and</em> the reconstruction in-house.
                Because we know exactly what the settlement covers, the rebuild aligns with
                your claim — no surprises, no gaps, and one accountable team from the first
                call to the final walkthrough.
              </p>
              <div className="section-actions">
                <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
              </div>
            </div>
            <div className="home-split__img card info-card who-card">
              <div className="who-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 12l-8.5 8.5a2.121 2.121 0 01-3-3L12 9"/><path d="M17.64 15L22 10.64"/>
                  <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 00-3.94-1.64H9l.92.82A6.18 6.18 0 0112 8.4v1.56l2 2h2.47l2.26 1.91"/>
                </svg>
              </div>
              <h3>Claim-to-completion, in-house</h3>
              <p>
                The team that documented your loss rebuilds it — so what&apos;s covered
                gets restored, exactly as scoped.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--alt">
        <div className="container">
          <div className="sec-hd">
            <div className="sec-label">What We Rebuild</div>
            <h2 className="sec-title">Complete Reconstruction Services</h2>
            <p className="sec-sub">Every trade handled by one team — no subcontractor maze.</p>
          </div>
          <div className="grid-2 recon-grid">
            {SERVICES.map(({ title, desc }) => (
              <div className="card info-card card--lift recon-card" key={title}>
                <div className="recon-card__check">&#10003;</div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <h2>Ready to Rebuild?</h2>
        <p>From claim to completion, we&apos;ve got it covered. Call for a free consultation and we&apos;ll walk you through the whole process.</p>
        <div className="cta-banner__actions">
          <a href="tel:+19732194973" className="btn btn-warm">Call (973) 219-4973</a>
          <Link to="/contact" className="btn btn-outline-white">Request Consultation</Link>
        </div>
      </section>
    </>
  )
}
