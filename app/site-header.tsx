"use client";

import { useEffect, useState } from "react";

const PHONE_DISPLAY = "954-290-0490";
const PHONE_LINK = "+19542900490";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const closeMenu = () => setOpen(false);

  return <header className="site-header">
    <a className="brand-logo" href="#top" aria-label="Bargain Hunter Ninja home" onClick={closeMenu}>
      <img src="/bargain-hunter-ninja-logo.jpeg" alt="Bargain Hunter Ninja" width="640" height="640" />
    </a>
    <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
      <span /><span /><span />
    </button>
    <nav id="main-navigation" className={open ? "nav-open" : ""} aria-label="Main navigation">
      <a href="#we-buy" onClick={closeMenu}>What we buy</a>
      <a href="#how-it-works" onClick={closeMenu}>How it works</a>
      <a href="#about" onClick={closeMenu}>Why us</a>
      <a href="#contact" onClick={closeMenu}>Get an offer</a>
      <div className="mobile-nav-actions"><a className="button" href={`tel:${PHONE_LINK}`}>Call {PHONE_DISPLAY}</a><a className="button button-outline" href={`sms:${PHONE_LINK}`}>Text photos</a></div>
    </nav>
    <div className="header-actions"><a className="button button-small" href={`tel:${PHONE_LINK}`}>Call {PHONE_DISPLAY}</a><a className="button button-small button-outline" href={`sms:${PHONE_LINK}`}>Text photos</a></div>
  </header>;
}
