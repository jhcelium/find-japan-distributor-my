import type { FAQ } from "../content/site.config";
import { siteConfig } from "../content/site.config";

/** FAQs that have a dedicated /faq/:slug answer page */
export function faqsWithAnswerPages(): FAQ[] {
  return siteConfig.faq.filter((f): f is FAQ & { slug: string } => Boolean(f.slug));
}

export function getFaqBySlug(slug: string | undefined): FAQ | undefined {
  if (!slug) return undefined;
  return siteConfig.faq.find((f) => f.slug === slug);
}

export function metaTitleFromQuestion(question: string, maxLen = 52): string {
  if (question.length <= maxLen) return question;
  const cut = question.slice(0, maxLen - 1).trim();
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > 20 ? cut.slice(0, lastSpace) : cut;
  return `${base}…`;
}

export function metaDescriptionFromFaq(item: FAQ): string {
  const src = item.preview ?? item.answer;
  return src.length <= 160 ? src : `${src.slice(0, 157).trim()}…`;
}
