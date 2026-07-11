import { FAQS } from '../data/faqs'

// Accessible accordion using native <details>/<summary>. Renders the shared
// FAQ list; the matching FAQPage JSON-LD is emitted via the page's <Seo>.
export default function FaqSection({ faqs = FAQS, heading = 'Frequently Asked Questions', lead }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="sec-hd">
          <div className="sec-label">Answers</div>
          <h2 className="sec-title">{heading}</h2>
          {lead && <p className="sec-sub">{lead}</p>}
        </div>
        <div className="faq-list">
          {faqs.map(({ q, a }, i) => (
            <details className="faq-item" key={i}>
              <summary className="faq-item__q">{q}</summary>
              <div className="faq-item__a">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
