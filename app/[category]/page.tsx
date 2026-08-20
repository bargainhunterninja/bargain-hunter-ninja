import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import OfferForm from "../offer-form";
import SiteHeader from "../site-header";
import { buyingCategories, getBuyingCategory } from "../category-data";

const PHONE_DISPLAY = "954-290-0490";
const PHONE_LINK = "+19542900490";

export function generateStaticParams() {
  return buyingCategories.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getBuyingCategory(slug);
  if (!category) return {};
  const url = `https://bargainhunterninja.com/${category.slug}`;
  return {
    title: `${category.title} | Bargain Hunter Ninja`,
    description: category.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: category.title, description: category.metaDescription, url, type: "website", images: [{ url: category.image, width: 1254, height: 1254, alt: `${category.shortTitle} we buy in Fort Lauderdale` }] },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getBuyingCategory(slug);
  if (!category) notFound();
  const related = buyingCategories.filter((item) => item.slug !== category.slug);

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: category.title,
      description: category.metaDescription,
      url: `https://bargainhunterninja.com/${category.slug}`,
      provider: { "@id": "https://bargainhunterninja.com/#business" },
      areaServed: ["Fort Lauderdale", "Broward County", "Miami-Dade County", "South Florida"],
      serviceType: `Local cash buyer for ${category.shortTitle.toLowerCase()}`,
    }).replace(/</g, "\\u003c") }} />
    <SiteHeader />

    <section className="category-hero">
      <div className="category-hero-copy">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{category.shortTitle}</span></nav>
        <p className="eyebrow"><span /> Local South Florida buyer</p>
        <h1>{category.title}</h1>
        <p>{category.intro}</p>
        <div className="contact-buttons"><a className="button" href={`tel:${PHONE_LINK}`}>Call {PHONE_DISPLAY}</a><a className="button button-outline" href={`sms:${PHONE_LINK}`}>Text photos</a></div>
        <div className="trust-row"><span>✓ Local cash offers</span><span>✓ No shipping</span><span>✓ By appointment</span></div>
      </div>
      <img className="category-hero-image" src={category.image} alt={`${category.shortTitle} Bargain Hunter Ninja buys for cash in Fort Lauderdale`} width="1254" height="1254" />
    </section>

    <section className="category-details section">
      <div><p className="eyebrow"><span /> Items we consider</p><h2>What we buy</h2><ul className="buy-list">{category.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <aside><h2>Brands and names</h2><p>Examples include:</p><div className="brand-tags">{category.brands.map((brand) => <span key={brand}>{brand}</span>)}</div><p className="aside-note">Don’t see your brand listed? Send photos and the model or item name for review.</p></aside>
    </section>

    <section className="condition-section">
      <article><p className="eyebrow light"><span /> Honest condition details</p><h2>Used and vintage items are welcome.</h2><p>{category.conditionNote}</p></article>
      <article><p className="eyebrow light"><span /> Collections</p><h2>Sell more in one simple transaction.</h2><p>{category.collectionNote}</p></article>
    </section>

    <section className="section category-process"><div className="section-heading"><div><p className="eyebrow"><span /> How it works</p><h2>A straightforward local sale</h2></div><p>Send photos and details, receive a no-pressure resale offer, then choose a warehouse appointment or ask about pickup for a larger collection.</p></div><div className="mini-steps"><article><b>01</b><h3>Send details</h3><p>Include photos, condition, quantity and the amount you hope to receive.</p></article><article><b>02</b><h3>Review the offer</h3><p>We evaluate current resale demand and provide a straightforward cash offer.</p></article><article><b>03</b><h3>Schedule the sale</h3><p>Meet at our Fort Lauderdale warehouse by appointment or discuss local pickup.</p></article></div></section>

    <section className="faq-section section"><p className="eyebrow"><span /> Common questions</p><h2>{category.shortTitle} selling FAQ</h2><div className="faq-list">{category.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>

    <section className="offer-section" id="contact"><div className="offer-copy"><p className="eyebrow light"><span /> Get an offer</p><h2>Tell us about your {category.shortTitle.toLowerCase()}.</h2><p>We purchase for resale, so offers are based on condition and current resale demand rather than full online retail prices.</p><div className="address-card"><b>Warehouse visits by appointment only</b><address>700 NW 57th Ct<br />Fort Lauderdale, FL 33309</address><p>Please call or text before visiting. We are not open for walk-ins.</p></div></div><OfferForm initialItem={category.shortTitle} /></section>

    <section className="related-categories section"><p className="eyebrow"><span /> We also buy</p><h2>Explore other categories</h2><div>{related.map((item) => <Link href={`/${item.slug}`} key={item.slug}>{item.shortTitle}<span>→</span></Link>)}</div></section>

    <footer><Link className="brand-logo footer-logo" href="/" aria-label="Bargain Hunter Ninja home"><img src="/bargain-hunter-ninja-logo.jpeg" alt="Bargain Hunter Ninja" width="640" height="640" /></Link><p><a href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a> • <a href="mailto:bargainhunterninja@gmail.com">Email us</a><br />Warehouse visits by appointment only.</p><div className="footer-legal"><p>© 2026 Bargain Hunter Ninja. All rights reserved.</p></div></footer>
  </main>;
}
