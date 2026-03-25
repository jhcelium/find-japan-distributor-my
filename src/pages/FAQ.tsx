import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle, canonicalUrl } from "../lib/seo";
import { faqsWithAnswerPages } from "../lib/faq";

const DATE_PUBLISHED = "2026-03-02";
const DATE_MODIFIED = "2026-03-16";

export default function FAQ() {
  const title = pageTitle("Japan Distributor FAQ Hub");
  const description =
    "Practical answers on finding, evaluating, and selecting distributors in Japan — partner types, screening, timelines, and what to prepare. Malaysia exporters.";

  const answerPages = faqsWithAnswerPages();

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
      <SEOHead
        path="/faq"
        title={title}
        description={description}
        isFaq={true}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        <section className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Japan distributor FAQ — answer hub
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed mb-4">
            This hub answers practical questions about{" "}
            <strong className="text-neutral-800">finding</strong>,{" "}
            <strong className="text-neutral-800">evaluating</strong>, and{" "}
            <strong className="text-neutral-800">selecting</strong> distributors,
            sales agents, and resellers in Japan. Each topic links to a focused
            answer page: direct summary, why it matters, criteria, mistakes, and
            related questions.
          </p>
          <ul className="text-sm text-neutral-500 space-y-2">
            <li>
              <Link to="/" className="underline hover:text-neutral-900">
                Distributor search process on Home →
              </Link>
            </li>
            <li>
              <a
                href={siteConfig.hubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-900"
              >
                Japan Market Hub (intake) →
              </a>
            </li>
          </ul>
        </section>

        <section className="border-t border-neutral-200 pt-10" aria-labelledby="faq-topics-heading">
          <h2 id="faq-topics-heading" className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            All topics
          </h2>
          <ul className="space-y-0 divide-y divide-neutral-200 border-t border-neutral-200">
            {answerPages.map((item) => (
              <li key={item.slug} className="py-8 first:pt-0">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  <Link
                    to={`/faq/${item.slug}`}
                    className="hover:underline"
                  >
                    {item.question}
                  </Link>
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                  {item.preview
                    ? item.preview
                    : item.answer.length > 220
                      ? `${item.answer.slice(0, 217).trim()}…`
                      : item.answer}
                </p>
                <Link
                  to={`/faq/${item.slug}`}
                  className="text-xs font-medium text-neutral-900 underline hover:no-underline"
                >
                  Read full answer →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            More on this site
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-neutral-700 underline hover:text-neutral-900">
                About Japan distributor search support →
              </Link>
            </li>
          </ul>
        </section>

        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Want help applying this to your product?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Request a short call — we confirm category fit and next steps. No
              obligation.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
