import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import FAQList from "../components/FAQList";
import { siteConfig } from "../content/site.config";
import { pageTitle, canonicalUrl } from "../lib/seo";

const DATE_PUBLISHED = "2026-03-02";
const DATE_MODIFIED = "2026-03-16";

// Service structured data — machine-readable service declaration
const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Japan Distributor Search Service",
  description:
    "Structured distributor identification, category fit screening, and qualification for Malaysia exporters entering Japan.",
  provider: {
    "@type": "Organization",
    name: "NeoiDigital",
    legalName: "ネオインスパイア株式会社",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Osaka",
      addressCountry: "JP",
    },
  },
  areaServed: { "@type": "Country", name: "Japan" },
  serviceType: "B2B Distributor Search and Qualification",
  audience: {
    "@type": "Audience",
    audienceType: "Malaysia exporters and SMEs seeking Japan distribution partners",
  },
};

// Homepage FAQPage JSON-LD — 3 conversion FAQs, full answers from config
const HOME_FAQ_PREVIEW_KEYS = [
  "What is the difference between a distributor, sales agent, and reseller in Japan?",
  "What information do you need to start a Japan distributor search?",
  "What is a realistic timeline from outreach to first deals?",
];
const HOME_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faq
    .filter((f) => HOME_FAQ_PREVIEW_KEYS.includes(f.question))
    .map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "main > section:first-child > p"],
  },
};

// HowTo schema — maps to Section D method steps
const HOWTO_JSONLD = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Find and Qualify a Japan Distributor",
  description:
    "A four-step structured process to identify, screen, and qualify Japan-side distributors for Malaysia exporters.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Define partner type and category fit",
      text: "Confirm whether a distributor, sales agent, or reseller structure suits your product and channel model. Category fit is verified before any name is shortlisted.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map distributor categories and coverage logic",
      text: "Identify which distributor categories cover your target channel and geography. Coverage obligations and exclusivity implications are assessed at this stage.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Outreach with a structured brief and meeting setup",
      text: "Approach candidates using a targeted brief with named contacts and defined response tracking, not bulk emailing.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Follow-up cadence and decision memo",
      text: "Manage follow-up timing and maintain next-step control. Deliver a decision memo with shortlist rationale, risks, and a recommended action plan.",
    },
  ],
};

// DefinedTermSet schema — partner type definitions (Section E)
const DEFINED_TERMS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Japan Distribution Partner Types",
  description:
    "Key partner types used in Japan B2B distribution: distributor, sales agent, and reseller.",
  url: canonicalUrl("/"),
  hasDefinedTerm: [
    {
      "@type": "DefinedTerm",
      name: "Distributor (Japan)",
      description:
        "Buys and resells your product, assuming inventory risk and coverage obligations by territory or channel.",
    },
    {
      "@type": "DefinedTerm",
      name: "Sales Agent (Japan)",
      description:
        "Commission-based intermediary that does not hold inventory but provides relationship access to buyers.",
    },
    {
      "@type": "DefinedTerm",
      name: "Reseller (Japan)",
      description:
        "Opportunistic partner with limited coverage commitment, often appropriate for e-commerce or niche channels.",
    },
  ],
};

// C) Diagnostic Block
const READINESS_CHECKLIST = [
  "Clear product category and HS code / market segment",
  "Target channels identified (retail / foodservice / industrial)",
  "Price corridor and MOQ confirmed",
  "Certification and label constraints documented",
  "Logistics capability confirmed (minimum order, lead time)",
  "After-sales and service expectations defined",
  "One-page product brief available (English acceptable)",
  "Internal response SLA set (reply within N business days)",
];

// D) Method Block
const METHOD_STEPS = [
  {
    step: "1",
    title: "Define partner type and category fit",
    body: "We confirm whether a distributor, sales agent, or reseller structure suits your product and channel model. Category fit is verified before any name is shortlisted.",
  },
  {
    step: "2",
    title: "Map distributor categories and coverage logic",
    body: "We identify which distributor categories cover your target channel and geography. Coverage obligations and exclusivity implications are assessed at this stage.",
  },
  {
    step: "3",
    title: "Outreach with a structured brief and meeting setup",
    body: "We approach candidates using a targeted brief — not bulk emailing. Japan channel partner search is handled directly with named contacts and defined response tracking.",
  },
  {
    step: "4",
    title: "Follow-up cadence and decision memo",
    body: "We manage follow-up timing and maintain next-step control to reduce drop-off. You receive a decision memo with shortlist rationale, risks, and a recommended two-to-four week action plan.",
  },
];

// E) Partner Types
const PARTNER_TYPES = [
  {
    type: "Distributor",
    description:
      "Buys and resells your product. Assumes inventory risk. Typically has coverage obligations by territory or channel.",
  },
  {
    type: "Sales Agent",
    description:
      "Commission-based. Does not hold inventory. Provides relationship access to buyers. Less capital commitment from partner side.",
  },
  {
    type: "Reseller",
    description:
      "Opportunistic. Limited coverage commitment. Terms vary widely. Often appropriate for e-commerce or niche channels.",
  },
];

// F) Distributor Categories
const DISTRIBUTOR_CATEGORIES = [
  "Specialty import distributors",
  "Wholesalers",
  "Trading companies",
  "Regional distributors",
  "OEM / industrial distributors",
  "E-commerce focused resellers",
];

// G) Reliability Checks
const RELIABILITY_CHECKS = [
  "Category fit and portfolio overlap (does your product fit their current lines?)",
  "Geographic coverage (prefectures and channels they actively serve)",
  "Sales motion and account type (do they sell to your target channel?)",
  "Warehousing and logistics capacity (temperature, volume, lead time)",
  "Compliance handling (import paperwork, labelling, customs experience)",
  "After-sales support capacity (warranty, returns, customer service SLA)",
  "Conflict of interest (exclusive competing lines in the same category)",
];

// H) Outputs
const OUTPUTS = [
  "3–5 partner shortlist with individual rationale",
  "Partner-type recommendation (distributor vs agent vs reseller)",
  "Outreach log with contact status and response notes",
  "Meeting brief pack (product summary, commercial terms, key questions)",
  "Risks and red flags summary per candidate",
  "Next-step action plan (two-to-four week roadmap)",
];

// J) 3 FAQ keys for homepage preview — reuses JSON-LD key list
const FAQ_PREVIEW_QUESTIONS = HOME_FAQ_PREVIEW_KEYS;

export default function Home() {
  const title = pageTitle("Find a Japan Distributor");
  const description =
    "Find distributor in japan using a structured qualification workflow — partner type, category fit, outreach, and shortlist for Malaysia exporters. Japan-based in Osaka.";

  const faqPreview = siteConfig.faq.filter((f) =>
    FAQ_PREVIEW_QUESTIONS.includes(f.question)
  );

  return (
    <>
      <SEOHead
        path="/"
        title={title}
        description={description}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(SERVICE_JSONLD)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(HOME_FAQ_JSONLD)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(HOWTO_JSONLD)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(DEFINED_TERMS_JSONLD)}
        </script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* A) Hero — tool positioning */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            {siteConfig.domain}
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Find a Japan Distributor
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed mb-8">
            NeoiDigital helps Malaysia exporters{" "}
            <strong>find distributor in japan</strong> using a structured
            qualification workflow — partner type, coverage fit, and follow-up
            discipline.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTA />
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-neutral-300 text-neutral-700 text-sm font-medium px-6 py-3 hover:border-neutral-600 hover:text-neutral-900"
            >
              Japan Market Hub →
            </a>
          </div>
          <p className="text-xs text-neutral-400 mt-4 flex flex-wrap gap-x-4 gap-y-1">
            <Link to="/faq" className="underline hover:text-neutral-700">
              Distributor FAQ answers →
            </Link>
            <Link to="/about" className="underline hover:text-neutral-700">
              About our approach →
            </Link>
          </p>
        </section>

        {/* B) Standard Answer Block — "What this page solves" */}
        <section className="border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            What This Distributor Search Page Is For
          </h2>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-3xl">
            {[
              "This page is for Malaysia SMEs and exporters who need to identify and qualify a Japan-side distribution partner.",
              "\"Search\" here means a qualification process — defining partner type, screening candidates against fit criteria, conducting structured outreach, and managing follow-up.",
              "The output is a shortlist of 3–5 candidates with rationale, not a bulk directory result.",
              "Not all Japan distributors will accept new foreign products — category fit, MOQ commitment, and distributor willingness must be verified before any outreach begins.",
              "This service is relevant when you have a product brief, a target channel, and are ready to engage Japan partners within 60–90 days.",
              "This page does not cover market research, regulatory compliance, or product adaptation — those are separate engagements.",
              "If you do not yet have a confirmed product category or pricing structure, use the readiness check below before starting a search.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* C) Diagnostic Block — "Are you ready to approach Japan partners?" */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">
            Readiness Check (5 Minutes)
          </h2>
          <p className="text-sm text-neutral-500 mb-6">
            Confirm these before requesting a distributor search.
          </p>
          <ul className="space-y-2">
            {READINESS_CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-neutral-700"
              >
                <span className="mt-0.5 flex-shrink-0 h-4 w-4 border border-neutral-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-neutral-500 mt-4">
            If most items are confirmed, you are ready to proceed.
          </p>
        </section>

        {/* D) Method Block — "How we find and qualify partners" */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">
            How We Find and Qualify Japan Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {METHOD_STEPS.map((item) => (
              <div key={item.step}>
                <p className="text-xs font-semibold text-neutral-400 mb-2">
                  Step {item.step}
                </p>
                <p className="text-sm font-semibold text-neutral-900 mb-1">
                  {item.title}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* E) Partner Types Block */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            Distributor vs Sales Agent vs Reseller (Japan)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {PARTNER_TYPES.map((item) => (
              <div
                key={item.type}
                className="border-l-2 border-neutral-900 pl-4"
              >
                <p className="text-sm font-semibold text-neutral-900 mb-1">
                  {item.type}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-700 border-l-2 border-neutral-300 pl-4">
            Choosing the wrong partner type is the fastest way to stall. For
            long-term expansion, prioritise partners with clear coverage
            commitment, after-sales capability, and willingness to invest in the
            relationship.
          </p>
        </section>

        {/* F) Category Fit Block */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Choosing the Right Distributor Category
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6 max-w-3xl">
            To choose the right distributor category in japan, you need to map
            how your product reaches its end buyer — whether through specialty
            channels, regional wholesale, or direct import. Category mismatch is
            one of the most common early-stage failures.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {DISTRIBUTOR_CATEGORIES.map((cat) => (
              <li
                key={cat}
                className="flex items-start gap-2 text-sm text-neutral-700"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{cat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* G) Reliability Block */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Reliability Screening (What We Check)
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6 max-w-3xl">
            A japan distributor with after sales support is a core qualification
            requirement, not a bonus. The following checks are applied before any
            candidate is presented.
          </p>
          <ul className="space-y-3">
            {RELIABILITY_CHECKS.map((check) => (
              <li
                key={check}
                className="flex items-start gap-2 text-sm text-neutral-700"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{check}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* H) Output Block */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            What You Receive
          </h2>
          <ul className="space-y-3">
            {OUTPUTS.map((output) => (
              <li
                key={output}
                className="flex items-start gap-2 text-sm text-neutral-700"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{output}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Social Proof */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            What We Bring
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {siteConfig.socialProofBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span className="text-sm text-neutral-700">{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Regulatory Context — GEO / E-E-A-T */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            Regulatory Context
          </h2>
          <div className="max-w-3xl space-y-3 text-sm text-neutral-600 leading-relaxed">
            <p>
              Japan's distribution and import framework is overseen by the{" "}
              <strong className="text-neutral-800">
                Ministry of Economy, Trade and Industry (METI)
              </strong>{" "}
              for commercial regulations and business registration, and the{" "}
              <strong className="text-neutral-800">
                Japan External Trade Organization (JETRO)
              </strong>{" "}
              for trade promotion and foreign business support.
            </p>
            <p>
              Product-specific compliance — food safety, labelling, cosmetics,
              and industrial standards — falls under the Consumer Affairs Agency
              (CAA) and relevant ministry bodies. A distributor's compliance
              handling capability is part of our screening criteria because
              import documentation, labelling, and customs clearance are the
              distributor's operational responsibility in most partner
              structures.
            </p>
            <p className="text-xs text-neutral-400">
              This section provides context, not legal advice. Consult qualified
              trade counsel for binding regulatory interpretation.
            </p>
          </div>
        </section>

        {/* I) Coverage Map — de-emphasised, long-tail slice(0,6) */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">
            Coverage Map
          </h2>
          <p className="text-xs text-neutral-400 mb-6">
            Common search topics this page addresses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Main Keywords
              </h3>
              <ul className="space-y-2">
                {siteConfig.mainKeywords.map((kw) => (
                  <li key={kw} className="text-sm text-neutral-800 font-medium">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Supporting Keywords
              </h3>
              <ul className="space-y-1">
                {siteConfig.supportingKeywords.map((kw) => (
                  <li key={kw} className="text-sm text-neutral-600">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Long-tail Topics
              </h3>
              <ul className="space-y-1">
                {siteConfig.longTailKeywords.slice(0, 6).map((kw) => (
                  <li key={kw} className="text-sm text-neutral-500">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* J) FAQ Preview — 3 conversion FAQs + link to /faq */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Common Questions
          </h2>
          <FAQList items={faqPreview} />
          <div className="mt-6">
            <Link
              to="/faq"
              className="text-sm text-neutral-700 underline hover:text-neutral-900"
            >
              View all FAQ →
            </Link>
          </div>
        </section>

        {/* K) Final CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Start Your Distributor Search
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Share your product category, target channel, and constraints. We
              will confirm fit and the next steps.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
