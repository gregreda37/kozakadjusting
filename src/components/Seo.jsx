import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://kozakadjusting.com'
const DEFAULT_OG = `${SITE_URL}/og-image.png`

/**
 * Per-page SEO: title, meta description, canonical, Open Graph / Twitter,
 * and optional JSON-LD structured data blocks.
 *
 * @param {string} title       Full <title> (include brand).
 * @param {string} description Meta description (~150-160 chars).
 * @param {string} path        Route path for canonical/OG url, e.g. "/reconstruction".
 * @param {object|object[]} [schema] JSON-LD object(s) to inject.
 * @param {string} [image]     Absolute OG image URL.
 */
export default function Seo({ title, description, path = '/', schema, image = DEFAULT_OG }) {
  const url = `${SITE_URL}${path}`
  const blocks = schema ? (Array.isArray(schema) ? schema : [schema]) : []

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Kozak Adjusting" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(block)}</script>
      ))}
    </Helmet>
  )
}
