import type { Metadata } from "next";
import Link from "next/link";
import OfferForm from "../offer-form";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

const PHONE_DISPLAY = "954-290-0490";
const PHONE_LINK = "+19542900490";
const PAGE_URL = "https://bargainhunterninja.com/moving";

const movingCategories = [
  ["Video Games", "/sell-video-games"],
  ["Cameras", "/sell-cameras"],
  ["Electronics", "/sell-electronics"],
  ["Vintage Clothing", "/sell-vintage-clothing"],
  ["Vintage Toys", "/sell-vintage-toys"],
  ["Collectibles", "/sell-collectibles"],
  ["Golf & Sports Gear", "/sell-sports-equipment"],
] as const;

const faqs = [
  {
    question: "Who buys belongings before a move in Fort Lauderdale?",
    answer: "Bargain Hunter Ninja buys selected electronics, video games, cameras, vintage clothing, toys, collectibles, golf equipment and other quality belongings with active resale demand. Send photos before packing so we can review what may be a fit.",
  },
  {
    question: "Can you buy several categories in one transaction?",
    answer: "Yes. A moving or downsizing purchase can include a mix of approved items, such as cameras, games, electronics, collectibles and sports gear. Group photos and an approximate item count help us evaluate larger lots efficiently.",
  },
  {
    question: "Do you offer pickup for moving sales?",
    answer: "Local pickup may be available for qualifying collections and larger purchases in Broward or Miami-Dade. Availability depends on the location, quantity, item types and agreed purchase value.",
  },
  {
    question: "Do you buy every household item or provide junk removal?",
    answer: "No. We are a resale buyer, not a junk-removal or full-house cleanout service. We selectively purchase items with resale demand and will let you know which belongings we can consider after reviewing your photos.",
  },
  {
    question: "How far in advance of my move should I contact you?",
    answer: "Earlier is better. Contact us before packing or donating so there is time to review photos, make an offer and schedule a warehouse appointment or qualifying pickup.",
  },
];

export const metadata: Metadata = {
  title: "Sell Belongings Before Moving in Fort Lauderdale | Bargain Hunter Ninja",
  description: "Moving or downsizing in Fort Lauderdale? Sell electronics, collectibles, video games, cameras, vintage clothing, toys and sports gear to a local cash buyer.",
  keywords: [
    "sell stuff before moving",
    "sell belongings before moving",
    "who buys household items near me",
    "sell electronics Fort Lauderdale",
    "sell collectibles Fort Lauderdale",
    "downsizing sell belongings",
    "moving sale buyer",
    "cash buyer for belongings",
    "estate buyer Fort Lauderdale",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Moving? Don’t Move It. Sell It!",
    description: "Sell selected belongings before your move to Bargain Hunter Ninja, a local buyer serving Broward and Miami-Dade.",
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/bargain-hunter-ninja-pickup-van.webp", width: 1536, height: 843, alt: "Bargain Hunter Ninja local pickup van" }],
  },
};

export default function MovingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Moving and downsizing resale buyer",
        description: metadata.description,
        url: PAGE_URL,
        provider: { "@id": "https://bargainhunterninja.com/#business" },
        areaServed: ["Fort Lauderdale", "Broward County", "Miami-Dade County", "South Florida"],
        serviceType: "Local cash buyer for selected belongings, collections and estate items",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <SiteHeader />

    <section className="moving-hero">
      <div className="moving-hero-copy">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Moving</span></nav>
        <p className="eyebrow"><span /> Moving or downsizing?</p>
        <h1>Moving?<em>Don’t move it.<br />Sell it!</em></h1>
        <p>Turn selected belongings into cash before moving day. Bargain Hunter Ninja buys quality items and collections throughout Fort Lauderdale, Broward and Miami-Dade—without the work of listing, shipping or meeting multiple buyers.</p>
        <div className="contact-buttons"><a className="button" href={`tel:${PHONE_LINK}`}>Call {PHONE_DISPLAY}</a><a className="button button-outline" href={`sms:${PHONE_LINK}`}>Text photos</a></div>
        <div className="trust-row"><span>✓ One local buyer</span><span>✓ Cash offers</span><span>✓ Pickup may be available</span></div>
      </div>
      <div className="moving-hero-visual">
        <img src="/bargain-hunter-ninja-pickup-van.webp" alt="Bargain Hunter Ninja pickup van available for qualifying moving and downsizing purchases" width="1536" height="843" />
        <strong>Sell before<br />moving day</strong>
      </div>
    </section>

    <section className="moving-buy-section section">
      <div className="section-heading"><div><p className="eyebrow"><span /> What we consider</p><h2>Sell the good stuff before you pack.</h2></div><p>We selectively purchase belongings with resale demand. Sell one desirable item or combine several approved categories into one straightforward transaction.</p></div>
      <div className="moving-category-grid">
        {movingCategories.map(([name, href]) => <Link href={href} key={href}><span>✓</span>{name}<b>View items →</b></Link>)}
        <a href="#contact"><span>+</span>And More<b>Send photos →</b></a>
      </div>
    </section>

    <section className="moving-message-section">
      <div><p className="eyebrow light"><span /> Less to pack. More cash in hand.</p><h2>A moving sale without managing a moving sale.</h2></div>
      <div className="moving-benefits">
        <article><b>01</b><h3>Skip individual listings</h3><p>No photographing every item for marketplaces, answering endless messages or shipping multiple packages.</p></article>
        <article><b>02</b><h3>Sell mixed belongings</h3><p>We can review multiple categories together, including electronics, cameras, games, clothing and collectibles.</p></article>
        <article><b>03</b><h3>Choose a convenient handoff</h3><p>Meet safely at our Fort Lauderdale warehouse by appointment or ask about pickup for a qualifying larger purchase.</p></article>
      </div>
    </section>

    <section className="section moving-audience">
      <div><p className="eyebrow"><span /> A practical option</p><h2>Moving, downsizing or handling an estate?</h2><p>We help South Florida sellers turn selected belongings into cash when time and space matter. This service is especially useful before a move, during downsizing, while clearing an inherited collection or when consolidating a household.</p><p>Because we purchase for resale, offers are based on condition and current resale demand—not full online retail value. You may earn more selling every item yourself; our value is a faster, simpler bulk transaction.</p></div>
      <aside><h3>For the fastest review, send:</h3><ul><li>Clear group photos</li><li>Brand and model numbers</li><li>Approximate item count</li><li>Condition and known issues</li><li>Your city and moving date</li><li>The amount you hope to receive</li></ul></aside>
    </section>

    <section className="faq-section section"><p className="eyebrow"><span /> Common questions</p><h2>Selling before a move FAQ</h2><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>

    <section className="offer-section" id="contact"><div className="offer-copy"><p className="eyebrow light"><span /> Get a moving-sale offer</p><h2>Show us what you don’t want to move.</h2><p>Upload photos of the items or collection, tell us where you are located and include your moving timeline. We’ll review the submission and let you know what we can consider.</p><div className="address-card"><b>Warehouse visits by appointment only</b><address>700 NW 57th Ct<br />Fort Lauderdale, FL 33309</address><p>Please call or text before visiting. Pickup is considered for qualifying larger purchases.</p></div></div><OfferForm initialItem="Moving or downsizing belongings" /></section>

    <SiteFooter />
  </main>;
}
