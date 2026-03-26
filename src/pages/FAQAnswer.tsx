import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { faqSingleQuestionJsonLd, canonicalUrl, pageTitle } from "../lib/seo";
import {
  getFaqBySlug,
  metaTitleFromQuestion,
  metaDescriptionFromFaq,
} from "../lib/faq";

const DATE_PUBLISHED = "2026-03-02";
const DATE_MODIFIED = "2026-03-25";

export default function FAQAnswer() {
  const { slug } = useParams<{ slug: string }>();
  const item = getFaqBySlug(slug);

  if (!item?.slug) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-sm text-neutral-600 mb-4">This FAQ answer was not found.</p>
        <Link to="/faq" className="text-sm underline text-neutral-900">
          Back to FAQ hub →
        </Link>
      </main>
    );
  }

  const path = `/faq/${item.slug}`;
  const titleShort = metaTitleFromQuestion(item.question);
  const title = pageTitle(`${titleShort} — FAQ`);
  const description = metaDescriptionFromFaq(item);
  const faqJsonLd = faqSingleQuestionJsonLd(item.question, item.answer);

  const related =
    item.relatedSlugs
      ?.map((s) => getFaqBySlug(s))
      .filter((f): f is NonNullable<typeof f> & { slug: string } => Boolean(f?.slug)) ?? [];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/") },
      { "@type": "ListItem", position: 2, name: "FAQ", item: canonicalUrl("/faq") },
      {
        "@type": "ListItem",
        position: 3,
        name: titleShort,
        item: canonicalUrl(path),
      },
    ],
  };

  return (
    <>
      <SEOHead
        path={path}
        title={title}
        description={description}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      </Helmet>

      <article className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <nav className="text-xs text-neutral-400">
          <Link to="/" className="underline hover:text-neutral-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/faq" className="underline hover:text-neutral-700">
            FAQ
          </Link>
        </nav>

        <header className="max-w-3xl border-b border-neutral-200 pb-8">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ answer
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 leading-tight">
            {item.question}
          </h1>
        </header>

        <section className="max-w-3xl" aria-labelledby="direct-answer-heading">
          <h2 id="direct-answer-heading" className="text-sm font-semibold text-neutral-900 mb-3">
            Direct answer
          </h2>
          <p className="text-sm text-neutral-700 leading-relaxed">{item.answer}</p>
        </section>

        {item.whyItMatters && (
          <section className="max-w-3xl border-t border-neutral-200 pt-8">
            <h2 className="text-sm font-semibold text-neutral-900 mb-3">
              Why this matters
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">{item.whyItMatters}</p>
          </section>
        )}

        {item.evaluationCriteria && item.evaluationCriteria.length > 0 && (
          <section className="max-w-3xl border-t border-neutral-200 pt-8">
            <h2 className="text-sm font-semibold text-neutral-900 mb-3">
              Evaluation criteria
            </h2>
            <ul className="space-y-2">
              {item.evaluationCriteria.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-sm text-neutral-700"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {item.commonMistakes && item.commonMistakes.length > 0 && (
          <section className="max-w-3xl border-t border-neutral-200 pt-8">
            <h2 className="text-sm font-semibold text-neutral-900 mb-3">
              Common mistakes
            </h2>
            <ul className="space-y-2">
              {item.commonMistakes.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-sm text-neutral-700"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {related.length > 0 && (
          <section className="max-w-3xl border-t border-neutral-200 pt-8">
            <h2 className="text-sm font-semibold text-neutral-900 mb-3">
              Related questions
            </h2>
            <ul className="space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/faq/${r.slug}`}
                    className="text-sm text-neutral-700 underline hover:text-neutral-900"
                  >
                    {r.question}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="max-w-3xl border-t border-neutral-200 pt-10 space-y-6">
          <div className="max-w-xl">
            <p className="text-sm text-neutral-600 mb-4">
              Need a structured search for your category?
            </p>
            <CTA />
          </div>
          <ul className="flex flex-wrap gap-4 text-xs text-neutral-400">
            <li>
              <Link to="/faq" className="underline hover:text-neutral-700">
                All FAQ questions →
              </Link>
            </li>
            <li>
              <Link to="/" className="underline hover:text-neutral-700">
                Distributor search home →
              </Link>
            </li>
            <li>
              <a
                href={siteConfig.hubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-700"
              >
                Japan Market Hub →
              </a>
            </li>
          </ul>
        </footer>
      </article>
    </>
  );
}
