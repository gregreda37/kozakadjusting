import { Link } from 'react-router-dom'

const PROCESS = [
  { step: '01', title: 'Emergency Response', desc: 'Call us any time — we respond fast to assess the damage, document everything, and start protecting your property immediately.' },
  { step: '02', title: 'Mitigation & Cleanup', desc: 'Certified water extraction, structural drying, smoke and soot removal, and antimicrobial treatment to stop the damage from spreading.' },
  { step: '03', title: 'Claim & Payout', desc: 'We prepare and file a fully documented claim, then negotiate with your insurer to secure the maximum fair settlement.' },
]

export default function WaterFireDamage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Water &amp; Fire Damage</h1>
          <p>When water or fire strikes, every hour counts. We mitigate the damage fast and make sure your insurance claim reflects the full cost of putting things right.</p>
        </div>
      </div>

      <div className="cert-banner">
        <div className="container cert-banner__inner">
          <span className="cert-banner__badge">Available 24/7</span>
          <p>Emergency water and fire damage response across New Jersey — we handle both the cleanup and the insurance claim.</p>
          <a href="tel:+19732194973" className="btn btn-primary">Call (973) 219-4973</a>
        </div>
      </div>

      {/* Water damage */}
      <section className="section">
        <div className="container">
          <div className="home-split">
            <div className="home-split__text">
              <div className="sec-label sec-label--left">Water Damage</div>
              <h2>Water Damage Claims &amp; Remediation</h2>
              <p>
                Burst pipes, storms, flooding, and leaks can cause damage that spreads
                long after the water is gone — warped floors, ruined drywall, and hidden
                mold. We act quickly to dry out and stabilize your property, then document
                everything for your claim.
              </p>
              <ul className="coverage-list">
                <li><span className="coverage-list__check">&#10003;</span> Water extraction, drying, and dehumidification</li>
                <li><span className="coverage-list__check">&#10003;</span> Mold prevention and remediation</li>
                <li><span className="coverage-list__check">&#10003;</span> Damage assessment and full documentation</li>
                <li><span className="coverage-list__check">&#10003;</span> Claim preparation and negotiation with your insurer</li>
              </ul>
            </div>
            <div className="home-split__img card info-card who-card">
              <div className="who-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>
              </div>
              <h3>Fast mitigation, full recovery</h3>
              <p>
                Stopping the damage early protects your property and strengthens your
                claim. We handle both — so nothing gets missed or undervalued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fire damage */}
      <section className="section section--alt">
        <div className="container">
          <div className="home-split home-split--reverse">
            <div className="home-split__text">
              <div className="sec-label sec-label--left">Fire Damage</div>
              <h2>Fire &amp; Smoke Damage Claims</h2>
              <p>
                A fire is overwhelming. On top of the structural loss, there&apos;s smoke,
                soot, odor, and water damage from firefighting to deal with — plus a
                complicated insurance claim. We manage the entire process and fight for a
                fair, complete payout.
              </p>
              <ul className="coverage-list">
                <li><span className="coverage-list__check">&#10003;</span> Structural, smoke, and soot damage assessment</li>
                <li><span className="coverage-list__check">&#10003;</span> Odor removal and content cleaning</li>
                <li><span className="coverage-list__check">&#10003;</span> Complete claim documentation and filing</li>
                <li><span className="coverage-list__check">&#10003;</span> Negotiation to maximize your settlement</li>
              </ul>
            </div>
            <div className="home-split__img card info-card who-card">
              <div className="who-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/></svg>
              </div>
              <h3>Beyond the flames</h3>
              <p>
                Smoke, soot, and water can damage far more than the fire itself. We
                account for all of it so your settlement covers the true scope of the loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="sec-hd">
            <div className="sec-label">How It Works</div>
            <h2 className="sec-title">Respond. Restore. Recover.</h2>
            <p className="sec-sub">A clear process so you always know where things stand.</p>
          </div>
          <div className="process-grid">
            {PROCESS.map(({ step, title, desc }) => (
              <div className="process-step card" key={step}>
                <div className="process-step__num">{step}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <h2>Dealing With Water or Fire Damage Right Now?</h2>
        <p>We&apos;re available 24/7. Call for a free consultation and we&apos;ll get started on both the cleanup and the claim.</p>
        <div className="cta-banner__actions">
          <a href="tel:+19732194973" className="btn btn-warm">Call (973) 219-4973</a>
          <Link to="/contact" className="btn btn-outline-white">Request Consultation</Link>
        </div>
      </section>
    </>
  )
}
