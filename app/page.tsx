import OfferForm from "./offer-form";

const categories = [
  { icon: "🎮", title: "Video Games", text: "Consoles, games, controllers, handhelds and collections—modern or vintage." },
  { icon: "📷", title: "Cameras", text: "Point-and-shoot, DSLR and film cameras, lenses and accessories." },
  { icon: "🧸", title: "Vintage Toys", text: "Action figures, dolls, playsets, die-cast, sealed toys and collections." },
  { icon: "👕", title: "Clothing", text: "Vintage tees, jackets, sportswear, hats, denim and sought-after brands." },
  { icon: "⛳", title: "Sports Gear", text: "Golf clubs and bags, pool cues, wrestling gear and quality equipment." },
  { icon: "📻", title: "Electronics", text: "Audio gear, VCRs, home electronics and interesting vintage technology." },
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

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Bargain Hunter Ninja home"><span className="brand-mark" aria-hidden="true">忍</span><span><strong>Bargain Hunter</strong><em>Ninja</em></span></a>
      <nav aria-label="Main navigation"><a href="#we-buy">What we buy</a><a href="#how-it-works">How it works</a><a href="#about">Why us</a></nav>
      <ContactButtons compact />
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Serving Broward &amp; Miami-Dade</p>
        <h1>Turn your stuff into <em>cash.</em></h1>
        <p className="hero-lede">We buy video games, vintage toys, cameras, clothing, electronics, sports gear and entire collections. Fast offers. Local service. No online listing hassles.</p>
        <ContactButtons />
        <div className="trust-row" aria-label="Service benefits"><span>✓ Fair cash offers</span><span>✓ By appointment</span><span>✓ Local pickup available</span></div>
      </div>
      <div className="hero-art" aria-label="A curated collection of items we buy">
        <div className="sun" /><div className="item-card card-game"><span>🎮</span><b>Games</b></div><div className="item-card card-camera"><span>📷</span><b>Cameras</b></div><div className="item-card card-shirt"><span>👕</span><b>Vintage</b></div><div className="item-card card-toy"><span>🤖</span><b>Toys</b></div><div className="hero-badge"><strong>We buy</strong><span>new • used • vintage</span></div>
      </div>
    </section>

    <section className="proof-strip"><p>Skip the marketplace headaches</p><strong>No fees</strong><i>•</i><strong>No shipping</strong><i>•</i><strong>No waiting</strong><i>•</i><strong>No strangers at your home</strong></section>

    <section className="section" id="we-buy">
      <div className="section-heading"><div><p className="eyebrow"><span /> What we buy</p><h2>Your shelves might be worth more than you think.</h2></div><p>From one great item to a full collection, send us photos and we’ll let you know what we can offer.</p></div>
      <div className="category-grid">{categories.map((category) => <article className="category-card" key={category.title}><div className="category-icon" aria-hidden="true">{category.icon}</div><h3>{category.title}</h3><p>{category.text}</p></article>)}</div>
      <p className="category-note">Have something else? <a href={`sms:${PHONE_LINK}`}>Send us a photo—we buy all kinds of quality items.</a></p>
    </section>

    <section className="steps-section" id="how-it-works">
      <div className="steps-intro"><p className="eyebrow light"><span /> Simple process</p><h2>Cash in three easy steps.</h2><p>No confusing quotes, no obligation and no need to photograph and list every item yourself.</p></div>
      <div className="steps">{steps.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="section about" id="about">
      <div className="about-card"><p className="eyebrow"><span /> The local advantage</p><h2>A real local buyer—not an automated trade-in.</h2><p>Bargain Hunter Ninja is a South Florida resale business with hands-on experience evaluating everything from everyday electronics to hard-to-find vintage collectibles.</p><ul><li>Knowledge across many categories</li><li>Safe Fort Lauderdale-area meeting location</li><li>Appointments that respect your time</li><li>Pickup options for larger collections</li></ul></div>
      <blockquote><span>“</span><p>Our goal is simple: make selling your items easy, comfortable and worthwhile.</p><cite>— Bargain Hunter Ninja</cite></blockquote>
    </section>

    <section className="offer-section" id="contact"><div className="offer-copy"><p className="eyebrow light"><span /> Get an offer</p><h2>Tell us what you want to sell.</h2><p>Call or text us directly, or fill out the form. Include the brand, model, condition and anything else we should know.</p><ContactButtons /><div className="address-card"><b>Warehouse visits by appointment only</b><address>700 NW 57th Ct<br />Fort Lauderdale, FL 33309</address><p>Please call or text before visiting. We are not open for walk-ins.</p></div></div><OfferForm /></section>

    <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">忍</span><span><strong>Bargain Hunter</strong><em>Ninja</em></span></a><p><a href="tel:+19542900490">954-290-0490</a> • <a href="mailto:bargainhunterninja@gmail.com">Email us</a><br />Warehouse visits by appointment only.</p><p>© 2026 Bargain Hunter Ninja. All rights reserved.</p></footer>
  </main>;
}
