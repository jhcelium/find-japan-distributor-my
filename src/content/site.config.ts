// ============================================================
// NeoiDigital Multi-site Mother Template
// ONE-FILE CONFIGURATION — edit only this file per sub-site
// ============================================================

export type FAQ = {
  question: string;
  answer: string;
  /** URL segment for /faq/:slug answer pages */
  slug?: string;
  /** Short preview for the FAQ hub index */
  preview?: string;
  whyItMatters?: string;
  evaluationCriteria?: string[];
  commonMistakes?: string[];
  /** Other FAQ slugs for cross-links */
  relatedSlugs?: string[];
};

export type CTA = {
  label: string;
  href: string;
  /** Optional routing note, e.g. "You will be routed to the hub intake." */
  note?: string;
};

export type SiteConfig = {
  /** Full domain without protocol, e.g. "export-to-japan.neoidigital.com" */
  domain: string;
  /** Short display name shown in the header */
  siteName: string;
  /** One-line brand tagline */
  brandLine: string;
  /** Primary intent paragraph (one sentence) */
  primaryIntent: string;
  /** Main keywords (exactly 2) */
  mainKeywords: [string, string];
  /** Supporting / mid-tail keywords */
  supportingKeywords: string[];
  /** Long-tail keyword phrases */
  longTailKeywords: string[];
  /** Primary call-to-action button */
  primaryCTA: CTA;
  /** Always points to the hub — do not override the default */
  hubLink: string;
  /** Legal company name for footer */
  company: string;
  /** Show Osaka, Japan local-presence block when true */
  localPresence: boolean;
  /** Social-proof bullets (3–5 short factual points) */
  socialProofBullets: string[];
  /** FAQ entries (shown on /faq and previewed on home) */
  faq: FAQ[];
  /** Primary anchor keyword for Home copy emphasis (one phrase) */
  primaryAnchorKeyword?: string;
  /** Legal/Japanese company name for structured data and footer */
  companyLegalName?: string;
  /** Physical base location */
  companyBase?: string;
  /** Short operational note about company role */
  companyNote?: string;
  /** Set true to add Disallow: / in robots.txt and noindex,nofollow meta */
  noindex?: boolean;
  /** Slugs listed in sitemap as /faq/{slug} — keep in sync with FAQ[].slug */
  faqAnswerSlugs?: string[];
};

export const HUB_LINK = "https://www.japan-market.neoidigital.com/";

// ============================================================
// PRESETS — one entry per sub-site
// ============================================================
export const SITE_PRESETS: Record<string, SiteConfig> = {

  // ── 1 ──────────────────────────────────────────────────────
  "japan-market-entry": {
    domain: "japan-market-entry.neoidigital.com",
    siteName: "Japan Market Entry",
    brandLine: "Structured market entry for Malaysian companies entering Japan.",
    primaryIntent:
      "We help Malaysian SMEs navigate Japan's B2B market with a repeatable, risk-managed entry process.",
    mainKeywords: [
      "japan market entry",
      "japan market entry consulting for malaysian companies",
    ],
    supportingKeywords: [
      "enter japan market",
      "japan business entry support",
      "japan market entry strategy",
      "japan b2b market entry",
      "malaysia japan business expansion",
    ],
    longTailKeywords: [
      "japan market entry support for malaysian companies",
      "how to enter the japan market from malaysia",
      "japan market entry strategy for smes in malaysia",
      "japan market entry consulting firm in japan",
      "malaysia company expanding to japan step by step",
      "japan market entry risk and distributor selection",
      "japan b2b market entry support osaka japan",
    ],
    primaryCTA: {
      label: "Start Your Japan Market Entry",
      href: "mailto:hello@neoidigital.com?subject=Japan Market Entry Inquiry",
    },
    hubLink: HUB_LINK,
    company: "NeoiDigital",
    localPresence: true,
    socialProofBullets: [
      "Japan-based coordinator in Osaka, Japan",
      "Direct distributor network across key product categories",
      "Structured 4-phase entry process for B2B markets",
      "Malaysia–Japan bilingual communication support",
      "Hands-on trade show follow-up and meeting facilitation",
    ],
    faq: [
      {
        question: "How long does Japan market entry typically take for a Malaysian SME?",
        answer:
          "A realistic first-phase timeline is 6–12 months, covering market assessment, distributor identification, initial meetings, and contract preparation. Timeline varies by product category and regulatory requirements.",
      },
      {
        question: "What does 'market entry support' include?",
        answer:
          "It includes market feasibility assessment, distributor shortlisting, introductory meeting facilitation, proposal support, and post-meeting follow-up coordination.",
      },
      {
        question: "Does my product need Japanese regulatory approval before entering the market?",
        answer:
          "It depends on the product category. Food, cosmetics, and medical devices have specific labelling and approval requirements. We assess these requirements during the initial evaluation.",
      },
      {
        question: "Do you work with companies outside Malaysia?",
        answer:
          "Our primary focus is Malaysian and ASEAN-based companies. We have the deepest experience with the Malaysia–Japan corridor.",
      },
      {
        question: "What product categories do you have distributor connections for?",
        answer:
          "Food and beverage, health and wellness, industrial components, and select consumer goods. We confirm category fit during an initial consultation.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  "malaysia-japan-bridge": {
    domain: "malaysia-japan-bridge.neoidigital.com",
    siteName: "Malaysia–Japan Bridge",
    brandLine: "Connecting Malaysian exporters to Japan's B2B market.",
    primaryIntent:
      "We act as the operational bridge between Malaysian companies and their Japan distributor or buyer relationships.",
    mainKeywords: [
      "malaysia japan business bridge",
      "malaysia to japan market entry",
    ],
    supportingKeywords: [
      "malaysia japan trade support",
      "malaysia japan expansion service",
      "malaysia to japan export consulting",
      "asean japan market entry support",
      "halal export to japan from malaysia",
    ],
    longTailKeywords: [
      "malaysia to japan market entry service",
      "malaysia japan business bridge for exporters",
      "japan market entry for malaysian halal products",
      "malaysia japan fta and export frameworks",
      "malaysia companies expanding to japan case studies",
      "malaysia japan business culture and trust building",
    ],
    primaryCTA: {
      label: "Enquire About the Bridge Service",
      href: "mailto:hello@neoidigital.com?subject=Malaysia-Japan Bridge Inquiry",
    },
    hubLink: HUB_LINK,
    company: "NeoiDigital",
    localPresence: true,
    socialProofBullets: [
      "Dedicated Malaysia–Japan trade corridor focus",
      "Halal product export experience to Japanese retailers",
      "Japan-side relationship management support",
      "FTA framework guidance for qualifying exporters",
      "Bilingual documentation and proposal preparation",
    ],
    faq: [
      {
        question: "What makes the Malaysia–Japan trade corridor different from other markets?",
        answer:
          "Japan's B2B market operates on long-term trust relationships, category specialisation, and formal introduction protocols. Malaysian exporters need local coordination to navigate this effectively.",
      },
      {
        question: "Can you help with halal certification acceptance in Japan?",
        answer:
          "We can guide on which Japanese halal certification bodies distributors typically recognise and help you prepare the documentation requirements.",
      },
      {
        question: "How does the Malaysia–Japan FTA affect export costs?",
        answer:
          "The Malaysia–Japan EPA provides preferential tariff rates for qualifying goods. We help identify whether your product category qualifies and how to apply the framework.",
      },
      {
        question: "Do I need a Japanese company to import my products?",
        answer:
          "Yes, Japanese customs requires a licensed importer of record. We help identify suitable importer partners as part of distributor identification.",
      },
      {
        question: "What languages are your services conducted in?",
        answer:
          "We operate in English, Malay, and Japanese, covering both the Malaysia-side planning and Japan-side communication.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  "find-japan-distributor": {
    domain: "find-japan-distributor.neoidigital.com",
    siteName: "NeoiDigital",
    brandLine: "Find a Japan Distributor",
    primaryIntent:
      "A structured way to find and qualify Japan-side distributors, sales agents, or resellers for Malaysia exporters.",
    primaryAnchorKeyword: "find distributor in japan",
    mainKeywords: [
      "find distributor in japan",
      "japan distributor search service",
    ],
    supportingKeywords: [
      "japan b2b distributor",
      "japan sales agent search",
      "find reseller in japan",
      "japan distribution partner",
      "japan channel partner search",
    ],
    longTailKeywords: [
      "how to find a distributor in japan",
      "find reliable distributor in japan for malaysian products",
      "japan distributor search service for smes",
      "choose the right distributor category in japan",
      "japan distributor with after sales support",
      "find japan b2b partner for long term expansion",
    ],
    primaryCTA: {
      label: "Request a distributor search call",
      href: "https://www.japan-market.neoidigital.com/",
      note: "You will be routed to the hub intake.",
    },
    hubLink: HUB_LINK,
    company: "NeoiDigital",
    companyLegalName: "ネオインスパイア株式会社",
    companyBase: "Osaka, Japan",
    companyNote: "Japan-side outreach and follow-up to reduce drop-off after first contact.",
    localPresence: true,
    socialProofBullets: [
      "Category-fit screening: distributor type and coverage before outreach.",
      "Qualification logic: capability, after-sales, and channel conflicts checked early.",
      "Japan-side outreach: structured brief + targeted contact, not bulk emailing.",
      "Follow-up discipline: cadence and next-step control to reduce drop-off.",
      "Decision-ready outputs: shortlist with rationale and risks, not raw lists.",
    ],
    noindex: false,
    faqAnswerSlugs: [
      "how-do-i-find-a-distributor-in-japan",
      "distributor-vs-sales-agent-vs-reseller-japan",
      "find-distributor-japan-without-wasting-months",
      "screen-reliability-after-sales-japan",
      "how-many-candidates-shortlist-japan",
      "information-needed-japan-distributor-search",
      "choose-right-distributor-category-japan",
      "timeline-outreach-first-deals-japan",
      "common-failure-patterns-japan-partners",
    ],
    faq: [
      {
        question: "How Do I Find a Distributor in Japan?",
        slug: "how-do-i-find-a-distributor-in-japan",
        preview:
          "Match channel motion and commercial reality first, then screen names for category fit, coverage, and capability — contact lists alone do not replace qualification.",
        answer:
          "Start by defining how your product should reach buyers in Japan — channel, geography, and commercial terms — then map which distributor categories and partner types actually run that motion. A list of contacts does not replace fit: you still need to screen for portfolio overlap, coverage, logistics, compliance handling, and after-sales capacity before investing in introductions. A concise written brief (product, MOQ, price corridor, certifications) keeps screening comparable and avoids months of unfocused outreach. From there, targeted contact and disciplined follow-up produce a small shortlist you can evaluate side by side.",
        whyItMatters:
          "Japanese B2B distribution rewards consistency and trust, but trust without operational fit rarely turns into listings or repeat orders. The real work is placing your SKU in the right channel stack, confirming who can import and support it locally, and whether a partner will commit — not simply who replies to email.",
        evaluationCriteria: [
          "End-buyer and channel match (retail, foodservice, industrial, e-commerce, or mixed)",
          "Geographic coverage versus your launch plan (national vs. regional strength)",
          "Partner-type fit: stockholding distributor vs. commission agent vs. opportunistic reseller",
          "Importer-of-record and compliance behaviour for your product category",
          "Warehousing, logistics, and after-sales capacity aligned to your SKU and MOQ",
        ],
        commonMistakes: [
          "Treating distributor search as a contact hunt instead of a qualification process",
          "Omitting channel, MOQ, or price corridor and expecting partners to infer fit",
          "Equating a well-known company name with suitability for your specific category",
          "Granting exclusivity or deep diligence before willingness and capability are proven",
        ],
        relatedSlugs: [
          "find-distributor-japan-without-wasting-months",
          "information-needed-japan-distributor-search",
          "choose-right-distributor-category-japan",
        ],
      },
      {
        question: "What is the difference between a distributor, sales agent, and reseller in Japan?",
        slug: "distributor-vs-sales-agent-vs-reseller-japan",
        preview:
          "Distributors buy and hold inventory with coverage obligations; sales agents earn commission without stock; resellers are often opportunistic with lighter coverage — wrong type stalls progress.",
        answer:
          "A distributor buys and resells your product, assuming inventory risk and coverage obligations by territory or channel. A sales agent works on commission without holding stock, providing relationship access to buyers with less capital commitment. A reseller operates opportunistically with limited coverage commitment — terms vary widely and are often appropriate for e-commerce or niche channels. The right choice depends on your product category, volume expectations, and after-sales requirements.",
        whyItMatters:
          "Commercial terms, inventory risk, and who owns the customer relationship differ by partner type. Approaching the wrong structure wastes meetings and signals you do not understand how your category moves in Japan.",
        evaluationCriteria: [
          "Whether your category expects stockholding and local fulfilment",
          "Whether you need importer-of-record and compliance handled by the partner",
          "Channel access: retail listings vs. project or B2B account sales",
          "Capital and MOQ the partner can absorb vs. commission-only motion",
        ],
        commonMistakes: [
          "Treating a commission agent like a full distributor without confirming stock and logistics",
          "Choosing a reseller for nationwide retail coverage without written obligations",
          "Mixing partner types in the same outreach wave without a clear ask",
        ],
        relatedSlugs: [
          "find-distributor-japan-without-wasting-months",
          "choose-right-distributor-category-japan",
        ],
      },
      {
        question: "How do you find a distributor in Japan without wasting months?",
        slug: "find-distributor-japan-without-wasting-months",
        preview:
          "Use a tight brief, pre-screen for category fit, and targeted outreach — not bulk lists — so you reach a qualified shortlist in weeks, not endless cold cycles.",
        answer:
          "Start with a clear category-fit brief: product type, target channel, price corridor, and MOQ. We use structured outreach to a pre-screened network rather than cold mass contact. A defined screening checklist — covering coverage, capability, and channel conflicts — is applied before any introduction is made. This reduces the time from brief to qualified shortlist to four to eight weeks.",
        whyItMatters:
          "Time is lost to vague briefs, wrong categories, and partners who never intended to onboard a new foreign SKU. Structure front-loads rejection so effort goes only to plausible fits.",
        evaluationCriteria: [
          "Brief completeness: channel, price band, MOQ, certifications",
          "Evidence the candidate covers your geography and account type",
          "Early signal on willingness to engage (response quality, meeting appetite)",
          "Conflict checks before exclusivity or deep diligence",
        ],
        commonMistakes: [
          "Sending generic decks without channel or MOQ clarity",
          "Measuring success by email volume instead of qualified meetings",
          "Skipping follow-up cadence after the first non-reply",
        ],
        relatedSlugs: [
          "how-do-i-find-a-distributor-in-japan",
          "information-needed-japan-distributor-search",
          "timeline-outreach-first-deals-japan",
        ],
      },
      {
        question: "How do you screen for reliability and after-sales support?",
        slug: "screen-reliability-after-sales-japan",
        preview:
          "Reliability is verified through portfolio fit, logistics, compliance experience, and explicit after-sales capacity — not brand name alone.",
        answer:
          "We check category fit and portfolio overlap, geographic coverage, sales motion and account type, warehousing and logistics capacity, compliance handling experience, after-sales support capability, and potential conflicts of interest. After-sales capability — warranty handling, returns, and customer service SLA — is a core qualification requirement, not a bonus.",
        whyItMatters:
          "Japan buyers expect local support. A partner without after-sales capacity becomes a single point of failure after the first quality or service incident.",
        evaluationCriteria: [
          "Documented warranty, returns, and escalation path",
          "Service parts or technical support reach for your product type",
          "Warehouse conditions matching product requirements",
          "Track record in your category (references, active SKUs)",
        ],
        commonMistakes: [
          "Assuming a large name equals strong after-sales for your SKU",
          "Not asking for SLA or ticket handling before contract discussion",
          "Ignoring conflict of interest with competing lines",
        ],
        relatedSlugs: [
          "distributor-vs-sales-agent-vs-reseller-japan",
          "common-failure-patterns-japan-partners",
        ],
      },
      {
        question: "How many candidates do you usually shortlist?",
        slug: "how-many-candidates-shortlist-japan",
        preview:
          "Typically three to five qualified partners with rationale each — fit and engagement beat long undifferentiated lists.",
        answer:
          "We typically present three to five qualified candidates. Volume is not the objective — fit, willingness to engage, and capability alignment are. A smaller, well-qualified shortlist is more actionable than a long raw list. Each candidate entry includes individual rationale and risk notes.",
        whyItMatters:
          "Decision quality drops with too many options and no comparability framework. A shortlist forces explicit trade-offs on coverage, risk, and speed.",
        evaluationCriteria: [
          "Each name maps to a clear channel and geography thesis",
          "Comparable notes on risk, upside, and required next steps",
          "Confirmed or probable appetite to engage before you invest travel",
        ],
        commonMistakes: [
          "Requesting ten-plus names without screening criteria",
          "Treating all candidates as interchangeable",
          "Omitting risk notes to appear \"positive\"",
        ],
        relatedSlugs: [
          "information-needed-japan-distributor-search",
          "find-distributor-japan-without-wasting-months",
        ],
      },
      {
        question: "What information do you need to start a Japan distributor search?",
        slug: "information-needed-japan-distributor-search",
        preview:
          "Product spec, target channel, price corridor, MOQ, logistics, certifications, and how fast you can respond — a one-page brief is enough to start.",
        answer:
          "Product specification, target channel (retail, foodservice, or industrial), price corridor, MOQ, logistics capability, certification or labelling constraints, and your internal response timeline. A one-page product brief in English is sufficient to start. The more specific your brief, the faster the category-fit screening.",
        whyItMatters:
          "Japan partners filter quickly on commercial viability and regulatory fit. Missing basics triggers slow back-and-forth or silent drop-off.",
        evaluationCriteria: [
          "HS or category clarity and sample lead time",
          "Incoterms and export readiness from Malaysia",
          "Label and compliance status for Japan",
          "Internal owner for replies within a defined SLA",
        ],
        commonMistakes: [
          "\"We'll decide pricing later\" without a corridor",
          "No designated person for Japan-side follow-up",
          "Omitting certification constraints until late stage",
        ],
        relatedSlugs: [
          "find-distributor-japan-without-wasting-months",
          "choose-right-distributor-category-japan",
        ],
      },
      {
        question: "How do you choose the right distributor category in Japan?",
        slug: "choose-right-distributor-category-japan",
        preview:
          "Match how your product actually reaches buyers — importers, wholesalers, trading houses, regional distributors, industrial, or e-com — mismatch is a top failure mode.",
        answer:
          "Distributor categories in Japan are structured around how product moves through the market — specialty import distributors, wholesalers, trading companies, regional distributors, OEM or industrial distributors, and e-commerce-focused resellers each serve different channels and geographies. Category mismatch between your product and a distributor's channel model is one of the most common early-stage failures.",
        whyItMatters:
          "The same product may flow through different channel stacks. The wrong category never lists you, or lists you without velocity.",
        evaluationCriteria: [
          "End-buyer type: retail shelf vs. foodservice vs. industrial account",
          "Geographic coverage vs. national vs. regional strength",
          "SKU breadth expectations vs. your launch size",
          "Whether trading company or specialist importer is the norm in your segment",
        ],
        commonMistakes: [
          "Pitching retail distributors for purely industrial motion (or the reverse)",
          "Ignoring regional vs. national coverage assumptions",
          "Selecting e-com-only partners for offline-heavy categories without a plan",
        ],
        relatedSlugs: [
          "distributor-vs-sales-agent-vs-reseller-japan",
          "common-failure-patterns-japan-partners",
        ],
      },
      {
        question: "What is a realistic timeline from outreach to first deals?",
        slug: "timeline-outreach-first-deals-japan",
        preview:
          "Rough guide: four to eight weeks to a vetted shortlist, then months of commercial discussion; first PO often three to six months from a solid brief.",
        answer:
          "From a confirmed brief to a qualified shortlist typically takes four to eight weeks. First commercial discussions take an additional four to twelve weeks depending on category and partner decision cycle. A realistic path to a first purchase order is three to six months from brief to contract. Timelines extend when brief clarity is low or when product certification is incomplete.",
        whyItMatters:
          "Planning cash flow, samples, and team availability against realistic cycles prevents abandoning good processes too early.",
        evaluationCriteria: [
          "Whether certifications are already aligned for Japan",
          "Complexity of channel (retail listing vs. direct B2B)",
          "Partner decision authority and meeting cadence",
          "Your sample and data readiness",
        ],
        commonMistakes: [
          "Expecting a PO after one meeting",
          "Stopping outreach when the first partner delays",
          "Starting before labels or reg data are stable",
        ],
        relatedSlugs: [
          "find-distributor-japan-without-wasting-months",
          "how-many-candidates-shortlist-japan",
        ],
      },
      {
        question: "What are common failure patterns when selecting Japan partners?",
        slug: "common-failure-patterns-japan-partners",
        preview:
          "Brand chasing, unclear coverage, skipped after-sales checks, weak follow-up, and early exclusivity — most are avoidable with upfront qualification.",
        answer:
          "Selecting on brand name rather than category fit; not defining coverage expectations upfront; skipping after-sales capability checks; failing to follow up after initial contact; and agreeing to exclusive arrangements before validating commitment. Most failures are preventable with structured qualification before the first outreach.",
        whyItMatters:
          "These patterns destroy trust on both sides and burn leverage before terms are clear. Recognising them early preserves optionality.",
        evaluationCriteria: [
          "Written clarity on territory, channel, and exclusivity triggers",
          "After-sales and conflict diligence completed before signing",
          "Defined internal follow-up ownership",
        ],
        commonMistakes: [
          "Equating fame with fit for your SKU",
          "Verbal coverage promises without confirmation",
          "Granting exclusivity before proving sell-through intent",
        ],
        relatedSlugs: [
          "screen-reliability-after-sales-japan",
          "choose-right-distributor-category-japan",
        ],
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  "japan-trade-shows": {
    domain: "japan-trade-shows.neoidigital.com",
    siteName: "Japan Trade Shows",
    brandLine: "Use Japan's trade shows as a structured market entry channel.",
    primaryIntent:
      "We help Malaysian exporters select, prepare for, and follow up on Japan B2B trade shows as part of a broader market entry plan.",
    mainKeywords: [
      "japan trade shows",
      "japan b2b exhibitions",
    ],
    supportingKeywords: [
      "japan trade fairs 2026",
      "foodex japan support",
      "japan b2b expo support",
      "japan trade show preparation",
      "japan exhibition follow up service",
    ],
    longTailKeywords: [
      "japan trade shows for market entry",
      "foodex japan support for malaysian exporters",
      "how to use japan trade shows to enter the market",
      "japan trade show preparation and follow up service",
      "which japan trade fair is right for my product",
      "japan b2b exhibitions for malaysian companies",
    ],
    primaryCTA: {
      label: "Get Trade Show Guidance",
      href: "mailto:hello@neoidigital.com?subject=Japan Trade Show Support",
    },
    hubLink: HUB_LINK,
    company: "NeoiDigital",
    localPresence: true,
    socialProofBullets: [
      "Experience with FOODEX Japan and major B2B category shows",
      "Pre-show briefing on buyer and distributor profiles",
      "On-the-ground support during show days",
      "Post-show follow-up coordination with qualified contacts",
      "Japan-based coordinator in Osaka, Japan",
    ],
    faq: [
      {
        question: "Which Japan trade shows are most relevant for Malaysian exporters?",
        answer:
          "FOODEX Japan (food and beverage), Japan Pack, Medtec Japan, and Cosme Tokyo are category-specific starting points. Selection depends on your product type and target channel.",
      },
      {
        question: "Do I need to exhibit, or can I attend as a visitor?",
        answer:
          "Visiting first as a buyer-oriented observer is often more efficient for initial market research. Exhibiting is appropriate once you have a confirmed distributor or buyer interest.",
      },
      {
        question: "What happens after the trade show?",
        answer:
          "Follow-up is where most SMEs lose momentum. We coordinate post-show outreach, translate materials if needed, and maintain contact with qualified leads on your behalf.",
      },
      {
        question: "How far in advance should we plan for a Japan trade show?",
        answer:
          "Exhibiting requires 4–6 months of preparation. For attending as a visitor, 6–8 weeks is usually sufficient if your product samples and materials are ready.",
      },
      {
        question: "Can you translate our materials into Japanese for the show?",
        answer:
          "We handle core product summary and presentation translation as part of trade show preparation support.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  "japan-local-presence": {
    domain: "japan-local-presence.neoidigital.com",
    siteName: "Japan Local Presence",
    brandLine: "On-the-ground coordination in Japan for Malaysian exporters.",
    primaryIntent:
      "We provide Japan-based local coordination so Malaysian companies can maintain relationships, attend meetings, and follow up without relocating.",
    mainKeywords: [
      "local presence in japan",
      "japan on the ground support",
    ],
    supportingKeywords: [
      "japan local coordinator",
      "japan in market presence",
      "japan b2b meeting support",
      "japan relationship building support",
      "osaka japan business support",
    ],
    longTailKeywords: [
      "why local presence in japan matters for b2b",
      "japan on the ground support for malaysian companies",
      "local presence in japan for distributor meetings",
      "japan market entry with osaka japan based team",
      "japan follow up and relationship management service",
    ],
    primaryCTA: {
      label: "Discuss Local Presence Options",
      href: "mailto:hello@neoidigital.com?subject=Japan Local Presence",
    },
    hubLink: HUB_LINK,
    company: "NeoiDigital",
    localPresence: true,
    socialProofBullets: [
      "Physical base in Osaka, Japan — central trade and distribution hub",
      "Meeting attendance and bilingual facilitation",
      "Regular relationship check-ins with distributors",
      "No full relocation or Japan entity required",
      "Transparent activity reporting to the Malaysia team",
    ],
    faq: [
      {
        question: "Why does local presence matter in Japan specifically?",
        answer:
          "Japanese B2B relationships are built on consistent in-person contact. Distributors and buyers want to know that their overseas partner has a reliable local point of contact who can respond quickly.",
      },
      {
        question: "Does my company need to set up a Japanese legal entity?",
        answer:
          "Not necessarily for initial market entry. Many companies begin with a coordinator arrangement before evaluating whether a formal entity is needed.",
      },
      {
        question: "Where are you physically based in Japan?",
        answer:
          "Our coordinator is based in Osaka, Japan — a central commercial hub with direct access to Tokyo, Nagoya, and key distribution networks across western Japan.",
      },
      {
        question: "What activities can your local coordinator handle?",
        answer:
          "Meeting attendance, distributor visits, trade show participation, material delivery, relationship maintenance, and market observation reports.",
      },
      {
        question: "How is progress reported back to our Malaysia team?",
        answer:
          "We provide structured activity reports after each engagement — meeting notes, distributor feedback, and recommended next actions.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  "export-to-japan": {
    domain: "export-to-japan.neoidigital.com",
    siteName: "Export to Japan",
    brandLine: "A practical guide to exporting from Malaysia to Japan.",
    primaryIntent:
      "We help Malaysian exporters understand requirements, select the right channel, and execute their first Japan export with reduced risk.",
    mainKeywords: [
      "export from malaysia to japan",
      "export to japan from malaysia",
    ],
    supportingKeywords: [
      "malaysia export to japan guide",
      "malaysia japan export consulting",
      "export to japan requirements",
      "japan import regulations for malaysia",
      "malaysia japan fta utilisation",
    ],
    longTailKeywords: [
      "how to export from malaysia to japan",
      "malaysia to japan export requirements and regulations",
      "export to japan from malaysia step by step",
      "export compliance and labelling for japan market",
      "malaysia japan halal export to japan supermarkets",
      "export readiness assessment for japan market",
    ],
    primaryCTA: {
      label: "Request Export Readiness Assessment",
      href: "https://www.japan-market.neoidigital.com/contact",
    },
    hubLink: HUB_LINK,
    company: "NeoiDigital",
    localPresence: true,
    socialProofBullets: [
      "End-to-end export process guidance — from readiness to first shipment",
      "Japan import regulation guidance by product category",
      "Malaysia–Japan EPA tariff framework application support",
      "Labelling and compliance checklist for Japan market",
      "Japan-based coordinator for importer coordination",
    ],
    faq: [
      {
        question: "What are the basic requirements to export from Malaysia to Japan?",
        answer:
          "You need a licensed exporter registration in Malaysia, compliant product labelling in Japanese, a Japanese importer of record, and any category-specific certifications (e.g. food safety, halal if applicable).",
      },
      {
        question: "How does the Malaysia–Japan EPA reduce tariffs?",
        answer:
          "The EPA provides preferential tariff rates for qualifying goods with Malaysian origin. You need a Certificate of Origin (Form MJEPA) from MITI or an approved issuing body.",
      },
      {
        question: "What labelling is required for food products sold in Japan?",
        answer:
          "Japanese Food Labelling Standards require ingredient lists, allergen declarations, best-before dates, and net weight — all in Japanese. We help prepare compliant label briefs.",
      },
      {
        question: "Do I need to visit Japan to start exporting?",
        answer:
          "Not immediately. Initial distributor or importer identification, product review, and documentation preparation can be managed remotely with our Japan-side coordination.",
      },
      {
        question: "What is an export readiness assessment?",
        answer:
          "It is a structured review of your product's commercial viability in Japan — pricing, certifications, labelling gap analysis, and channel fit — before committing to distributor search or trade show participation.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  "free-japan-consultation": {
    domain: "free-japan-consultation.neoidigital.com",
    siteName: "Japan Market Entry Consultation",
    brandLine: "Talk to a Japan-based consultant before committing to market entry.",
    primaryIntent:
      "We offer a structured strategy call for Malaysian SMEs to assess Japan market fit, understand timelines, and identify the right entry approach — at no cost.",
    mainKeywords: [
      "japan market entry consultation",
      "free japan market entry consulting",
    ],
    supportingKeywords: [
      "japan market entry advisory",
      "japan expansion consultation",
      "japan market entry strategy call",
      "japan b2b consultation",
      "is japan right for my business",
    ],
    longTailKeywords: [
      "free japan market entry consultation for malaysian companies",
      "talk to japan market entry consultant in japan",
      "understand japan market entry cost and timeline",
      "should my malaysia business enter the japan market",
      "japan market entry risk assessment call",
    ],
    primaryCTA: {
      label: "Book a Free Strategy Call",
      href: "mailto:hello@neoidigital.com?subject=Free Japan Market Entry Consultation",
    },
    hubLink: HUB_LINK,
    company: "NeoiDigital",
    localPresence: true,
    socialProofBullets: [
      "Japan-based consultant — not a remote generalist",
      "30-minute focused call with a structured agenda",
      "Honest assessment of Japan market fit for your product",
      "No sales pressure — objective market readiness feedback",
      "Follow-up summary email after each consultation",
    ],
    faq: [
      {
        question: "What happens during the free consultation?",
        answer:
          "We review your product, target channel, pricing, and readiness. You receive a direct assessment of Japan market fit, key risks, and a suggested first step.",
      },
      {
        question: "Is there any obligation after the free call?",
        answer:
          "No. The consultation is independent of any engagement. We provide our honest view, and you decide if and how to proceed.",
      },
      {
        question: "What should I prepare before the call?",
        answer:
          "Product specification or catalogue, current pricing structure, target customer type (retail, B2B, wholesale), and any existing certifications.",
      },
      {
        question: "How long does the call take?",
        answer:
          "30 minutes. We keep it focused so both parties get useful output within the time.",
      },
      {
        question: "What if Japan is not the right market for my product?",
        answer:
          "We say so directly. If Japan is not appropriate at this stage, we explain the gaps and what would need to change before re-evaluating.",
      },
    ],
  },
};

// ============================================================
// ACTIVE SITE — change only this line per sub-site repo
// ============================================================
export const ACTIVE_SITE_KEY = "find-japan-distributor";
export const siteConfig: SiteConfig = SITE_PRESETS[ACTIVE_SITE_KEY];
