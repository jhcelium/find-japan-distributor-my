import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FAQList from "../components/FAQList";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle, canonicalUrl } from "../lib/seo";

export default function FAQ() {
  const title = pageTitle("Japan Distributor Search FAQ");
  const description =
    "Common questions about finding a Japan distributor — partner types, screening criteria, timelines, and what to prepare. Direct answers for Malaysia exporters.";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/") },
      { "@type": "ListItem", position: 2, name: "FAQ", item: canonicalUrl("/faq") },
    ],
  };

  return (
    <>
      <SEOHead path="/faq" title={title} description={description} isFaq={true} />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        {/* Page header */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Japan Distributor Search — Common Questions
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Direct answers on partner types, category fit, screening criteria,
            timelines, and what to prepare before starting a Japan distributor
            search.
          </p>
        </section>

        {/* All FAQs from config */}
        <section className="border-t border-neutral-200 pt-2">
          <FAQList items={siteConfig.faq} />
        </section>

        {/* Internal nav */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            More on This Site
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-neutral-700 underline hover:text-neutral-900">
                Distributor search process, readiness check, and method →
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-neutral-700 underline hover:text-neutral-900">
                About our Japan distributor search approach →
              </Link>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Have a question not covered here?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Reach out directly. We respond to all enquiries within one
              business day.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
