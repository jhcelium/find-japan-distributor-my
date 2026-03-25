import { siteConfig } from "../content/site.config";

/** Build canonical URL for a given path */
export function canonicalUrl(path: string): string {
  const domain = siteConfig.domain;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `https://${domain}${cleanPath}`;
}

/** Build full page title */
export function pageTitle(subtitle?: string): string {
  if (!subtitle) return siteConfig.siteName;
  return `${subtitle} | ${siteConfig.siteName}`;
}

const SPEAKABLE_SPEC = {
  "@type": "SpeakableSpecification",
  cssSelector: ["h1", "main > section:first-child > p"],
};

const ORG_REF = {
  "@type": "Organization",
  name: siteConfig.company,
  url: `https://${siteConfig.domain}`,
};

/** JSON-LD: Organization — E-E-A-T enriched */
export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company,
    ...(siteConfig.companyLegalName && {
      legalName: siteConfig.companyLegalName,
    }),
    url: `https://${siteConfig.domain}`,
    description: siteConfig.primaryIntent,
    inLanguage: "en-MY",
    knowsAbout: [
      "Japan B2B distribution",
      "Japan distributor search and qualification",
      "Japan sales agent identification",
      "Malaysia-to-Japan export facilitation",
      "Japan channel partner selection",
      "Japan after-sales support evaluation",
      "Japan trade show follow-up coordination",
    ],
    areaServed: [
      { "@type": "Country", name: "Japan" },
      { "@type": "Country", name: "Malaysia" },
    ],
    ...(siteConfig.localPresence && {
      address: {
        "@type": "PostalAddress",
        addressLocality: "Osaka",
        addressRegion: "Osaka",
        addressCountry: "JP",
      },
    }),
  };
}

/** JSON-LD: WebSite — with about, publisher, description */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: `https://${siteConfig.domain}`,
    description: siteConfig.primaryIntent,
    inLanguage: "en-MY",
    publisher: ORG_REF,
    about: {
      "@type": "Thing",
      name: "Japan Distributor Search and Qualification",
      description:
        "Structured identification, screening, and qualification of Japan-side distributors, sales agents, and resellers for Malaysia exporters.",
    },
    speakable: SPEAKABLE_SPEC,
  };
}

/** JSON-LD: WebPage — with speakable, dates, inLanguage */
export function webPageJsonLd(
  path: string,
  name: string,
  description: string,
  datePublished?: string,
  dateModified?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: canonicalUrl(path),
    inLanguage: "en-MY",
    isPartOf: {
      "@type": "WebSite",
      url: `https://${siteConfig.domain}`,
    },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    publisher: ORG_REF,
    speakable: SPEAKABLE_SPEC,
  };
}

/** JSON-LD: FAQPage — all items, with speakable */
export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    speakable: SPEAKABLE_SPEC,
  };
}

/** JSON-LD: FAQPage — single Q&A (answer asset page) */
export function faqSingleQuestionJsonLd(question: string, answer: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      },
    ],
    speakable: SPEAKABLE_SPEC,
  };
}
