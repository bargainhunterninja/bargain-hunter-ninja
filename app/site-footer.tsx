import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/bargain_hunter_ninja/";
const FACEBOOK_URL = "https://www.facebook.com/people/Bargain-Hunter-Ninja/61593412928611/";
const EBAY_STORE_URL = "https://ebay.io/m/G2IDDO";

export default function SiteFooter() {
  return <footer>
    <Link className="brand-logo footer-logo" href="/" aria-label="Bargain Hunter Ninja home"><img src="/bargain-hunter-ninja-logo.jpeg" alt="Bargain Hunter Ninja" width="640" height="640" /></Link>
    <p><a href="tel:+19542900490">954-290-0490</a> • <a href="mailto:bargainhunterninja@gmail.com">Email us</a><br />Warehouse visits by appointment only.</p>
    <div className="footer-legal"><div className="social-links" aria-label="Follow Bargain Hunter Ninja">
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Bargain Hunter Ninja on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.25" /><circle className="social-dot" cx="17.4" cy="6.7" r="1" /></svg><span>Instagram</span></a>
      <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Bargain Hunter Ninja on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.3 8.3V6.8c0-.8.5-1 1-1h2.5V2.1L14.4 2C11 2 9.8 4.1 9.8 6.5v1.8H7.5v4.2h2.3V22h4.5v-9.5h3l.5-4.2h-3.5Z" /></svg><span>Facebook</span></a>
      <a href={EBAY_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Shop the Bargain Hunter Ninja eBay store"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5h16l-1.3 11H5.3L4 7.5Zm3.2 0a4.8 4.8 0 0 1 9.6 0M8.5 12h7" /></svg><span>eBay Store</span></a>
    </div><p>© 2026 Bargain Hunter Ninja. All rights reserved.</p></div>
  </footer>;
}
