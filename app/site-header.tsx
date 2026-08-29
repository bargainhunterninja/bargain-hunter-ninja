"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
    <Link className="brand-logo" href="/" aria-label="Bargain Hunter Ninja home" onClick={closeMenu}>
      <img src="/bargain-hunter-ninja-logo.jpeg" alt="Bargain Hunter Ninja" width="640" height="640" />
    </Link>
    <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
      <span /><span /><span />
    </button>
    <nav id="main-navigation" className={open ? "nav-open" : ""} aria-label="Main navigation">
      <Link href="/#we-buy" onClick={closeMenu}>What we buy</Link>
      <Link href="/#how-it-works" onClick={closeMenu}>How it works</Link>
      <Link href="/#about" onClick={closeMenu}>Why us</Link>
      <Link href="/moving" onClick={closeMenu}>Moving?</Link>
      <a href="#contact" onClick={closeMenu}>Get an offer</a>
      <div className="mobile-nav-actions"><a className="button" href={`tel:${PHONE_LINK}`}>Call {PHONE_DISPLAY}</a><a className="button button-outline" href={`sms:${PHONE_LINK}`}>Text photos</a></div>
    </nav>
    <div className="header-actions"><a className="button button-small" href={`tel:${PHONE_LINK}`}>Call {PHONE_DISPLAY}</a><a className="button button-small button-outline" href={`sms:${PHONE_LINK}`}>Text photos</a></div>
  </header>;
}
