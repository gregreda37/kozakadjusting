import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import FaqSection from '../components/FaqSection'
import { faqSchema } from '../data/faqs'

const TYPES = [
  {
    title: 'Company (Staff) Adjuster',
    who: 'Works for the insurance company',
    desc: 'Employed directly by your insurer. Their job is to evaluate your claim on behalf of the company that pays it.',
  },
  {
    title: 'Independent Adjuster',
    who: 'Hired by the insurance company',
    desc: 'A contractor the insurer brings in during busy periods. Still paid by — and working for — the insurance company.',
  },
  {
    title: 'Public Adjuster',
    who: 'Works for YOU',
    desc: 'The only adjuster who legally represents the policyholder. We advocate for your interests and your maximum fair settlement.',
    highlight: true,
  },
]

const WHEN = [
  'Your claim was denied, and you believe the damage should be covered.',
  'The settlement offer feels too low to actually repair the damage.',
  'Your claim is large, complex, or involves both structure and contents.',
  'The process is dragging on and you’re not getting clear answers.',
  'You don’t have time to document everything and fight the back-and-forth.',
  'You simply want an expert in your corner from day one.',
]

const CLAIMS = [
  { t: 'Water Damage', d: 'Burst pipes, leaks, appliance failures, and flooding.' },
  { t: 'Fire & Smoke', d: 'Structural fire loss plus smoke, soot, and odor damage.' },
  { t: 'Storm & Wind', d: 'Wind, hail, and severe-weather damage to roof and structure.' },
  { t: 'Flood', d: 'Flood-related loss and the documentation it requires.' },
  { t: 'Mold', d: 'Mold resulting from water intrusion or unresolved leaks.' },
  { t: 'Roof Damage', d: 'Roof leaks and weather-related roofing loss.' },
  { t: 'Business Interruption', d: 'Lost income and expenses while a business recovers.' },
  { t: 'Denied & Underpaid', d: 'Reopening claims that were denied or lowballed.' },
]

const PROCESS = [
  { n: '01', t: 'Free Policy Review', d: 'We review your insurance policy and explain exactly what you’re entitled to — in plain English.' },
  { n: '02', t: 'Damage Assessment', d: 'We thoroughly inspect and document every element of the loss, so nothing is missed or undervalued.' },
  { n: '03', t: 'Claim Preparation & Filing', d: 'We build a detailed, properly valued claim and file it with all supporting documentation.' },
  { n: '04', t: 'Negotiation', d: 'We handle all communication and negotiation with your insurer to reach the fairest settlement.' },
  { n: '05', t: 'Settlement & Recovery', d: 'Once settled, you get paid — and we can handle the remediation and rebuild in-house.' },
]

export default function PublicAdjusters() {
  return (
    <>
      <Seo
        title="What Is a Public Adjuster? | NJ Public Adjuster Guide | Kozak Adjusting"
        description="Learn what a public adjuster does, how they differ from insurance-company adjusters, when to hire one, and how fees work. New Jersey licensed public adjusters — free consultation, (973) 219-4973."
        path="/public-adjusters"
        schema={faqSchema()}
      />

      <div className="page-banner">
        <div className="container">
          <h1>What Is a Public Adjuster?</h1>
          <p>Everything you need to know about public adjusters in New Jersey — what we do, when to hire one, and how we help you get a fair insurance settlement.</p>
        </div>
      </div>

      {/* Definition */}
      <section className="section">
        <div className="container">
          <div className="legal-body">
            <p className="legal-intro">
              A <strong>public adjuster</strong> is a state-licensed insurance professional who
              represents <em>you</em> — the policyholder — in preparing, filing, and negotiating an
              insurance claim. Unlike the adjuster the insurance company sends out, a public adjuster
              works only for you, with one goal: securing the fair, maximum settlement you’re entitled
              to under your policy.
            </p>
            <p>
              When your home or business is damaged by fire, water, a storm, or a flood, the insurance
              company assigns its own adjuster to evaluate the loss. That adjuster is paid by — and
              works for — the insurer. The result is often a settlement that reflects the company’s
              interests more than yours. A public adjuster levels the playing field.
            </p>
          </div>
        </div>
      </section>

      {/* Three types of adjusters */}
      <section className="section section--alt">
        <div className="container">
          <div className="sec-hd">
            <div className="sec-label">Know the Difference</div>
            <h2 className="sec-title">The Three Types of Insurance Adjusters</h2>
            <p className="sec-sub">Only one of them actually works for you.</p>
          </div>
          <div className="grid-3">
            {TYPES.map(({ title, who, desc, highlight }) => (
              <div className={`card info-card card--lift adjuster-type${highlight ? ' adjuster-type--you' : ''}`} key={title}>
                <div className="adjuster-type__tag">{who}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to hire */}
      <section className="section">
        <div className="container">
          <div className="home-split">
            <div className="home-split__text">
              <div className="sec-label sec-label--left">Timing</div>
              <h2>When Should You Hire a Public Adjuster?</h2>
              <p>
                The best time to call is <em>as soon as damage happens</em> — ideally before you
                accept any offer or sign anything from your insurer. But it’s never too late: we can
                step in on a new claim, one already in progress, a lowball offer, or a denied claim.
              </p>
              <ul className="coverage-list">
                {WHEN.map((w, i) => (
                  <li key={i}><span className="coverage-list__check">&#10003;</span> {w}</li>
                ))}
              </ul>
            </div>
            <div className="home-split__img card info-card who-card">
              <div className="who-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3>Earlier is better</h3>
              <p>
                Bringing us in early means the loss is documented correctly from the start — which
                almost always leads to a stronger, faster claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of claims */}
      <section className="section section--alt">
        <div className="container">
          <div className="sec-hd">
            <div className="sec-label">Coverage</div>
            <h2 className="sec-title">Types of Claims We Handle</h2>
            <p className="sec-sub">Residential and commercial property claims across New Jersey.</p>
          </div>
          <div className="grid-3 advantage-grid">
            {CLAIMS.map(({ t, d }) => (
              <div className="card info-card card--lift" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claims process */}
      <section className="section">
        <div className="container">
          <div className="sec-hd">
            <div className="sec-label">The Process</div>
            <h2 className="sec-title">How the Public Adjusting Process Works</h2>
            <p className="sec-sub">A clear, five-step path from first call to final settlement.</p>
          </div>
          <div className="process-grid process-grid--5">
            {PROCESS.map(({ n, t, d }) => (
              <div className="process-step card" key={n}>
                <div className="process-step__num">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees + licensing */}
      <section className="section section--alt">
        <div className="container">
          <div className="grid-2">
            <div className="card info-card">
              <div className="sec-label sec-label--left">Fees</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 12 }}>No Upfront Cost</h3>
              <p style={{ color: 'var(--clr-text-lt)' }}>
                Public adjusters work on a contingency fee — a percentage of the settlement (commonly
                5–20%). You pay nothing up front, and we’re only paid when we successfully recover or
                increase your settlement. Our interests are aligned with yours: the more we recover for
                you, the better for everyone.
              </p>
            </div>
            <div className="card info-card">
              <div className="sec-label sec-label--left">Licensing</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 12 }}>Licensed &amp; Regulated in NJ</h3>
              <p style={{ color: 'var(--clr-text-lt)' }}>
                Kozak Adjusting LLC is a licensed New Jersey public adjuster —
                <strong> NJ License #1609652</strong> — regulated by the New Jersey Department of
                Banking and Insurance. Working with a licensed public adjuster means you have a
                qualified, accountable advocate handling your claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (with FAQPage schema via Seo above) */}
      <FaqSection lead="Common questions about public adjusters and the claims process in New Jersey." />

      {/* CTA */}
      <section className="cta-banner">
        <h2>Have an Insurance Claim? Let’s Talk.</h2>
        <p>Get a free consultation with a New Jersey licensed public adjuster. No upfront cost — we only get paid when you do.</p>
        <div className="cta-banner__actions">
          <a href="tel:+19732194973" className="btn btn-warm">Call (973) 219-4973</a>
          <Link to="/contact" className="btn btn-outline-white">Request Consultation</Link>
        </div>
      </section>
    </>
  )
}
