import OfferForm from "./offer-form";
import SiteHeader from "./site-header";

const categories = [
  { image: "/real-products/video-games.webp", title: "Video Games", text: "PlayStation, Nintendo, Xbox, games, controllers, handhelds and collections." },
  { image: "/real-products/cameras.webp", title: "Cameras", text: "Canon, Nikon, Sony, point-and-shoot, DSLR and film cameras, lenses and accessories." },
  { image: "/real-products/vintage-toys.webp", title: "Vintage Toys", text: "Barbie, LEGO, action figures, dolls, playsets, die-cast and sealed toys." },
  { image: "/real-products/collectibles.webp", title: "Collectibles", text: "Pokémon cards, comics, sports cards, memorabilia, figures and unique collections." },
  { image: "/real-products/clothing.webp", title: "Clothing", text: "Nike, Levi’s, vintage tees, jackets, sportswear, hats and sought-after brands." },
  { image: "/real-products/sports-gear.webp", title: "Sports Gear", text: "Callaway and other quality golf clubs, bags, pool cues, wrestling gear and equipment." },
  { image: "/real-products/electronics.webp", title: "Electronics", text: "Sony, Technics, audio gear, VCRs, turntables, headphones and vintage technology." },
];

const steps = [
  ["01", "Tell us what you have", "Call or text with a few photos and a quick description."],
  ["02", "Get a straightforward offer", "We evaluate the items and give you a fair, no-pressure cash offer."],
  ["03", "Choose how to meet", "Visit our Fort Lauderdale-area location by appointment or ask about pickup."],
];

const PHONE_DISPLAY = "954-290-0490";
const PHONE_LINK = "+19542900490";

function ContactButtons({ compact = false }: { compact?: boolean }) {
  const className = compact ? "button button-small" : "button";
  return <div className="contact-buttons"><a className={className} href={`tel:${PHONE_LINK}`}>Call {PHONE_DISPLAY}</a><a className={`${className} button-outline`} href={`sms:${PHONE_LINK}`}>Text photos</a></div>;
}

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return <a className={`brand-logo${footer ? " footer-logo" : ""}`} href="#top" aria-label="Bargain Hunter Ninja home"><img src="/bargain-hunter-ninja-logo.jpeg" alt="Bargain Hunter Ninja" width="640" height="640" /></a>;
}

export default function Home() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://bargainhunterninja.com/#business",
      name: "Bargain Hunter Ninja",
      url: "https://bargainhunterninja.com/",
      logo: "https://bargainhunterninja.com/bargain-hunter-ninja-logo.jpeg",
      image: "https://bargainhunterninja.com/og.png",
      telephone: "+1-954-290-0490",
      email: "bargainhunterninja@gmail.com",
      description: "Local South Florida buyer paying cash for video games, cameras, vintage toys, collectibles, clothing, sports equipment and electronics.",
      priceRange: "$$",
      address: { "@type": "PostalAddress", streetAddress: "700 NW 57th Ct", addressLocality: "Fort Lauderdale", addressRegion: "FL", postalCode: "33309", addressCountry: "US" },
      areaServed: ["Fort Lauderdale", "Broward County", "Miami-Dade County", "South Florida"],
      openingHoursSpecification: { "@type": "OpeningHoursSpecification", description: "By appointment only" },
      contactPoint: { "@type": "ContactPoint", telephone: "+1-954-290-0490", contactType: "sales", availableLanguage: "English" }
    }).replace(/</g, "\\u003c") }} />
    <SiteHeader />

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Serving Broward &amp; Miami-Dade</p>
        <h1>Turn your stuff into <em>cash.</em></h1>
        <p className="hero-lede">Sell video games, vintage toys, cameras, clothing, electronics, sports gear and entire collections for cash in Fort Lauderdale. Fast offers, local service and no online listing hassles.</p>
        <ContactButtons />
        <div className="trust-row" aria-label="Service benefits"><span>✓ Fair cash offers</span><span>✓ By appointment</span><span>✓ Local pickup available</span></div>
      </div>
      <div className="hero-art photo-showcase" aria-label="Real examples of items we buy">
        <div className="hero-photo-grid"><img src="/real-products/video-games.webp" alt="Vintage Nintendo, Sega and modern PlayStation video games we buy" width="1254" height="1254" /><img src="/real-products/cameras.webp" alt="Canon, Nikon and Sony cameras we buy" width="1254" height="1254" /><img src="/real-products/collectibles.webp" alt="Sports cards and autographed memorabilia we buy" width="1254" height="1254" /><img src="/real-products/clothing.webp" alt="Vintage branded jackets, hats and clothing we buy" width="1254" height="1254" /></div><img className="hero-logo-stamp" src="/bargain-hunter-ninja-logo.jpeg" alt="Bargain Hunter Ninja logo" width="640" height="640" /><div className="hero-badge"><strong>We buy</strong><span>new • used • vintage</span></div>
      </div>
    </section>

    <section className="proof-strip"><p>Skip the marketplace headaches</p><strong>No fees</strong><i>•</i><strong>No shipping</strong><i>•</i><strong>No waiting</strong><i>•</i><strong>No strangers at your home</strong></section>

    <section className="section" id="we-buy">
      <div className="section-heading"><div><p className="eyebrow"><span /> What we buy</p><h2>Your shelves might be worth more than you think.</h2></div><p>From one great item to a full collection, send us photos and we’ll let you know what we can offer.</p></div>
      <div className="category-grid">{categories.map((category) => <article className="category-card" key={category.title}><img className="category-photo" src={category.image} alt={`${category.title} we buy for cash in Fort Lauderdale`} width="1254" height="1254" loading="lazy" /><div className="category-copy"><h3>{category.title}</h3><p>{category.text}</p></div></article>)}</div>
      <p className="category-note">Have something else? <a href={`sms:${PHONE_LINK}`}>Send us a photo—we buy all kinds of quality items.</a></p>
    </section>

    <section className="steps-section" id="how-it-works">
      <div className="steps-intro"><p className="eyebrow light"><span /> Simple process</p><h2>Cash in three easy steps.</h2><p>No confusing quotes, no obligation and no need to photograph and list every item yourself.</p></div>
      <div className="steps">{steps.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="section about" id="about">
      <div className="about-card"><p className="eyebrow"><span /> The local advantage</p><h2>A real Fort Lauderdale buyer—not an automated trade-in.</h2><p>Bargain Hunter Ninja buys new, used and vintage items throughout Broward and Miami-Dade. We have hands-on experience evaluating everything from everyday electronics and cameras to hard-to-find toys, clothing and collectibles.</p><ul><li>Knowledge across many categories</li><li>Safe Fort Lauderdale meeting location</li><li>Appointments that respect your time</li><li>Pickup options for larger collections</li></ul></div>
      <blockquote><span>“</span><p>Our goal is simple: make selling your items easy, comfortable and worthwhile.</p><cite>— Bargain Hunter Ninja</cite></blockquote>
    </section>

    <section className="offer-section" id="contact"><div className="offer-copy"><p className="eyebrow light"><span /> Get an offer</p><h2>Tell us what you want to sell.</h2><p>Call or text us directly, or fill out the form. Include the brand, model, condition and anything else we should know.</p><ContactButtons /><div className="address-card"><b>Warehouse visits by appointment only</b><address>700 NW 57th Ct<br />Fort Lauderdale, FL 33309</address><p>Please call or text before visiting. We are not open for walk-ins.</p></div></div><OfferForm /></section>

    <footer><BrandLogo footer /><p><a href="tel:+19542900490">954-290-0490</a> • <a href="mailto:bargainhunterninja@gmail.com">Email us</a><br />Warehouse visits by appointment only.</p><div className="footer-legal"><p>© 2026 Bargain Hunter Ninja. All rights reserved.</p></div></footer>
  </main>;
}
