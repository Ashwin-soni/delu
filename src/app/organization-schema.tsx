
export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.delulogic.in/#organization",
        "name": "DeluLogic",
        "alternateName": "DeluLogic Solutions",
        "url": "https://www.delulogic.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.delulogic.in/delulogic-logo.png"
        },
        "description":
          "DeluLogic helps businesses grow through website development, Meta Ads, Google Ads and social media management.",
        "sameAs": [
          "https://www.instagram.com/delulogic_solutions/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.delulogic.in/#website",
        "url": "https://www.delulogic.in/",
        "name": "DeluLogic",
        "publisher": {
          "@id": "https://www.delulogic.in/#organization"
        },
        "inLanguage": "en-IN"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
      }}
    />
  )
}
