import { Link } from 'react-router-dom'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const HandshakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0L12 5.35l-.77-.77a5.4 5.4 0 00-7.65 7.65l.77.77L12 20.66l7.65-7.66.77-.77a5.4 5.4 0 000-7.65z"/>
  </svg>
)

const DropletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
  </svg>
)

const HammerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 12l-8.5 8.5a2.121 2.121 0 01-3-3L12 9"/>
    <path d="M17.64 15L22 10.64"/>
    <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 00-3.94-1.64H9l.92.82A6.18 6.18 0 0112 8.4v1.56l2 2h2.47l2.26 1.91"/>
  </svg>
)

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
  </svg>
)

const BadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const REASONS = [
  { n: '1', title: 'Works for you, not the insurer', desc: 'Our only goal is your fair, maximum settlement — never the insurance company’s bottom line.' },
  { n: '2', title: 'Understands policy details & regulations', desc: 'We know the fine print and the New Jersey rules that protect you.' },
  { n: '3', title: 'Negotiates maximum payouts', desc: 'We build and defend the strongest, best-documented version of your claim.' },
  { n: '4', title: 'Handles the paperwork & stress', desc: 'Documentation, deadlines, and back-and-forth with the insurer — we own all of it.' },
  { n: '5', title: 'Accelerates claim resolution', desc: 'A properly filed claim moves faster and stalls less, so you recover sooner.' },
]

const ADVANTAGES = [
  { icon: <FileIcon />, title: 'Claims adjustment', desc: 'Full-service claim preparation, filing, and negotiation on your behalf.' },
  { icon: <DropletIcon />, title: 'Water & fire remediation', desc: 'In-house mitigation to stop damage from spreading fast.' },
  { icon: <HammerIcon />, title: 'Reconstruction', desc: 'We rebuild what was damaged — no juggling multiple contractors.' },
  { icon: <BadgeIcon />, title: 'Licensed & local', desc: 'NJ licensed public adjusters who know the local claims process.' },
  { icon: <ClockIcon />, title: 'Available 24/7', desc: 'Damage doesn’t wait for business hours, and neither do we.' },
  { icon: <HandshakeIcon />, title: 'One accountable team', desc: 'A single point of contact from your first call to the final payout.' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container">
          <div className="hero__text hero__text--center">
            <div className="hero__label">Water &middot; Fire &middot; Reconstruction &middot; New Jersey</div>
            <h1>
              New Jersey Licensed<br />
              <em>Public Adjusters</em>
            </h1>
            <p>
              Don&apos;t understand your insurance coverage? Or having trouble after a water
              or fire incident? Give us a call for a free consultation — we work for
              <em> you</em>, not the insurance company.
            </p>
            <div className="hero__actions">
              <a href="tel:+19732194973" className="btn btn-warm hero__call">
                <span className="hero__call-icon"><PhoneIcon /></span>
                (973) 219-4973
              </a>
              <Link to="/contact" className="btn btn-outline-white">Free Consultation</Link>
            </div>
            <div className="hero__trust">
              <span>NJ License #1609652</span>
              <span className="hero__trust-dot" />
              <span>Available 24/7</span>
              <span className="hero__trust-dot" />
              <span>No Upfront Costs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is a public adjuster ── */}
      <section className="section">
        <div className="container">
          <div className="home-split">
            <div className="home-split__text">
              <div className="sec-label sec-label--left">The Basics</div>
              <h2>What is a Public Adjuster?</h2>
              <p>
                A public adjuster is a licensed professional who helps homeowners and
                businesses get fair payments from their insurance company after damage
                happens — like from a fire, storm, or flood.
              </p>
              <p>
                Unlike the adjuster the insurance company sends, a public adjuster
                represents <em>you</em>. We review your policy, document the damage, and
                handle the entire claim so you receive everything you&apos;re entitled to.
              </p>
              <div className="section-actions">
                <Link to="/contact" className="btn btn-primary">Talk to an Adjuster</Link>
              </div>
            </div>
            <div className="home-split__img card info-card who-card">
              <div className="who-card__icon"><HandshakeIcon /></div>
              <h3>On your side, start to finish</h3>
              <p>
                From the first inspection to the final settlement, we advocate for your
                best outcome and take the paperwork and stress off your plate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why hire a public adjuster ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="sec-hd">
            <div className="sec-label">Why It Matters</div>
            <h2 className="sec-title">Why Hire a Public Adjuster?</h2>
            <p className="sec-sub">
              Insurance claims are complicated, and the insurer&apos;s adjuster works for
              them. Here&apos;s how we tip the scales back in your favor.
            </p>
          </div>
          <div className="reasons-grid">
            {REASONS.map(({ n, title, desc }) => (
              <div className="reason" key={n}>
                <div className="reason__num">{n}</div>
                <div>
                  <h3 className="reason__title">{title}</h3>
                  <p className="reason__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fees ── */}
      <section className="section">
        <div className="container">
          <div className="sec-hd">
            <div className="sec-label">Transparent Pricing</div>
            <h2 className="sec-title">How Our Fees Work</h2>
            <p className="sec-sub">
              You pay nothing up front. We only get paid when we successfully increase
              your settlement.
            </p>
          </div>
          <div className="grid-3 fee-cards">
            <div className="card info-card card--lift">
              <h3>No upfront costs</h3>
              <p>Nothing out of pocket to get started on your claim.</p>
            </div>
            <div className="card info-card card--lift">
              <h3>Percentage based</h3>
              <p>Our fee is a percentage of the settlement — typically 5–20%.</p>
            </div>
            <div className="card info-card card--lift">
              <h3>Only paid on results</h3>
              <p>We&apos;re compensated only when we increase your settlement.</p>
            </div>
          </div>

          <div className="fee-example">
            <h3>A quick example</h3>
            <p>
              Say your insurer&apos;s original offer was <strong>$50,000</strong>, and we
              increase it to <strong>$80,000</strong>. With a 10% fee:
            </p>
            <div className="fee-flow">
              <div className="fee-chip"><small>Original offer</small><strong>$50,000</strong></div>
              <span className="fee-arrow">&rarr;</span>
              <div className="fee-chip fee-chip--good"><small>New settlement</small><strong>$80,000</strong></div>
              <span className="fee-arrow">&rarr;</span>
              <div className="fee-chip"><small>Our 10% fee</small><strong>$8,000</strong></div>
              <span className="fee-arrow">&rarr;</span>
              <div className="fee-chip fee-chip--good"><small>You receive</small><strong>$72,000</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why choose Kozak ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="sec-hd">
            <div className="sec-label">Our Advantage</div>
            <h2 className="sec-title">Why Choose Kozak Adjusting?</h2>
            <p className="sec-sub">
              We handle your claim <em>and</em> the recovery — all under one roof. That
              means faster timelines and one accountable team from claim to completion.
            </p>
          </div>
          <div className="grid-3 advantage-grid">
            {ADVANTAGES.map(({ icon, title, desc }) => (
              <div className="card svc-card card--lift" key={title}>
                <div className="svc-card__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <h2>Damage at Your Home or Business?</h2>
        <p>
          Get a free consultation with a New Jersey licensed public adjuster. No upfront
          cost, and we only get paid when you do.
        </p>
        <div className="cta-banner__actions">
          <a href="tel:+19732194973" className="btn btn-warm">Call (973) 219-4973</a>
          <Link to="/contact" className="btn btn-outline-white">Request Consultation</Link>
        </div>
      </section>
    </>
  )
}
