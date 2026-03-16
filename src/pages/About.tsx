import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle, canonicalUrl } from "../lib/seo";

// What this service actually delivers — distributor search specific
const DELIVERABLES = [
  {
    title: "Partner Type Selection",
    body: "We determine whether a distributor, sales agent, or reseller structure fits your product category and channel model before any candidate is approached.",
  },
  {
    title: "Category Fit Screening",
    body: "Not all Japan distributors accept new foreign products. We screen candidates against your category, channel, and coverage requirements — and confirm willingness to engage before introduction.",
  },
  {
    title: "Structured Outreach and Qualification",
    body: "We approach shortlisted candidates using a prepared product brief with defined response tracking. After-sales capability, channel conflicts, and commitment indicators are assessed during this phase.",
  },
  {
    title: "Decision-ready Shortlist",
    body: "You receive 3–5 qualified candidates with individual rationale, risk notes, and a recommended two-to-four week action plan — not a raw list of names.",
  },
];

const DATE_PUBLISHED = "2026-03-02";
const DATE_MODIFIED = "2026-03-16";

export default function About() {
  const title = pageTitle("Japan Distributor Search Support");
  const description =
    "NeoiDigital provides Japan distributor search support for Malaysia exporters — structured partner identification, category fit screening, and qualification before outreach.";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/") },
      { "@type": "ListItem", position: 2, name: "About", item: canonicalUrl("/about") },
    ],
  };

  return (
    <>
      <SEOHead
        path="/about"
        title={title}
        description={description}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Page header */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            About
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Japan Distributor Search Support
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            {siteConfig.primaryIntent}
          </p>
        </section>

        {/* Who we help */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Who We Help
          </h2>
          <div className="max-w-2xl space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              We work with Malaysia SMEs and exporters who have confirmed a
              product, a target channel, and a price corridor — and are ready to
              begin Japan partner outreach within 60–90 days.
            </p>
            <p>
              Our typical clients are manufacturers, food producers, health and
              wellness brands, and industrial component suppliers. They need
              qualified introductions and a structured process, not market
              research reports.
            </p>
            <p>
              Japan distributors are category-specific. A distributor strong in
              food does not necessarily cover industrial components, and regional
              coverage, after-sales capability, and exclusivity expectations vary
              widely. Identifying the right category fit and verifying commitment
              is where most unassisted searches stall.
            </p>
            <p>
              We also work with ASEAN-based companies using the Malaysia–Japan
              corridor as their first structured distribution-model entry into a
              developed market.
            </p>
          </div>
        </section>

        {/* What we deliver */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DELIVERABLES.map((item) => (
              <div key={item.title} className="border border-neutral-200 p-5">
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 mt-6">
            See the full process on the{" "}
            <Link to="/" className="underline hover:text-neutral-700">
              distributor search home page →
            </Link>
          </p>
        </section>

        {/* Where we operate */}
        {siteConfig.localPresence && (
          <section className="border-t border-neutral-200 pt-10">
            <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
              Where We Operate
            </h2>
            <div className="max-w-2xl space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                Our Japan-side coordinator is based in{" "}
                <strong className="text-neutral-900">Osaka, Japan</strong> — a
                central commercial hub with direct access to Tokyo, Nagoya, and
                key B2B distribution networks across western Japan.
              </p>
              <p>
                Osaka provides practical access to Japan's distributor ecosystem
                and serves as a base for candidate meetings, trade show
                attendance, and ongoing relationship maintenance without
                requiring clients to relocate or establish a Japan entity.
              </p>
              <p>
                Malaysia-side coordination is conducted remotely, with
                structured reporting after each Japan-side engagement.
              </p>
            </div>
          </section>
        )}

        {/* Hub link */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            Part of NeoiDigital Japan Market Hub
          </h2>
          <p className="text-sm text-neutral-600 mb-5 max-w-xl leading-relaxed">
            This site is part of a broader set of Japan market entry resources
            for Malaysian companies. The hub aggregates tools, guides, and
            consulting pathways across the full export journey.
          </p>
          <a
            href={siteConfig.hubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-900 text-neutral-900 text-sm px-4 py-2 hover:bg-neutral-900 hover:text-white"
          >
            Visit Japan Market Hub →
          </a>
        </section>

        {/* Internal nav */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            More on This Site
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-neutral-700 underline hover:text-neutral-900">
                Distributor search process and readiness check →
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-neutral-700 underline hover:text-neutral-900">
                Common questions about Japan distributor search →
              </Link>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Ready to start a Japan distributor search?
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
