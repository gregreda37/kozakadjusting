// Shared FAQ content — rendered on the page AND emitted as FAQPage JSON-LD
// so the questions are eligible for rich results in Google.

export const FAQS = [
  {
    q: 'What does a public adjuster do?',
    a: 'A public adjuster is a licensed insurance professional who works exclusively for the policyholder — not the insurance company. We review your policy, inspect and document the damage, prepare and file the claim, and negotiate with your insurer to reach the fairest possible settlement.',
  },
  {
    q: 'How is a public adjuster different from the insurance company’s adjuster?',
    a: 'The adjuster your insurer sends works for the insurance company and represents its financial interests. A public adjuster represents you. Our only goal is to make sure your claim is fully documented and fairly paid.',
  },
  {
    q: 'How much does a public adjuster cost?',
    a: 'There are no upfront costs. Public adjusters typically work on a contingency fee — a percentage of the settlement (commonly in the range of 5–20%). You only pay when we successfully recover or increase your settlement.',
  },
  {
    q: 'Is it worth hiring a public adjuster?',
    a: 'If your claim is denied, underpaid, delayed, or complex, a public adjuster can often recover significantly more than the insurer’s initial offer — even after the fee. We also handle the paperwork, deadlines, and negotiation so you can focus on getting back to normal.',
  },
  {
    q: 'When should I call a public adjuster?',
    a: 'The best time is as soon as damage happens, before you accept any offer or sign anything from your insurer. That said, you can bring in a public adjuster at any point — for a new claim, a claim in progress, a lowball offer, or a denied claim.',
  },
  {
    q: 'What types of claims do you handle?',
    a: 'We handle residential and commercial property claims including water damage, fire and smoke damage, storm and wind damage, flooding, burst pipes, mold, roof damage, and business interruption. We can also handle the remediation and reconstruction in-house.',
  },
  {
    q: 'Are you licensed in New Jersey?',
    a: 'Yes. Kozak Adjusting LLC is a licensed New Jersey public adjuster, NJ License #1609652, regulated by the New Jersey Department of Banking and Insurance.',
  },
  {
    q: 'Can you help if my claim was already denied or underpaid?',
    a: 'Yes. A denial or low offer is not the end of the road. We can review the decision, re-document the loss, and re-open or dispute the claim to pursue a fairer outcome.',
  },
]

// Build a schema.org FAQPage object from the FAQ list.
export function faqSchema(faqs = FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}
