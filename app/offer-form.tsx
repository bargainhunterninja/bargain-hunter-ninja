"use client";
import { FormEvent } from "react";

export default function OfferForm() {
  function submitOffer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Offer request: ${data.get("item") || "Items for sale"}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nItem(s): ${data.get("item")}\nCondition and details: ${data.get("details")}\n\nPlease attach photos before sending this email.`);
    window.location.href = `mailto:bargainhunterninja@gmail.com?subject=${subject}&body=${body}`;
  }
  return <form className="offer-form" onSubmit={submitOffer}>
    <div><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required /></div>
    <div><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
    <div className="full"><label htmlFor="item">What are you selling?</label><input id="item" name="item" placeholder="Example: Nintendo games, vintage shirts, camera collection" required /></div>
    <div className="full"><label htmlFor="details">Condition and details</label><textarea id="details" name="details" rows={5} placeholder="Brands, model numbers, quantity, condition and anything else we should know" required /></div>
    <div className="full photo-note"><b>Have photos?</b><span>After tapping “Email my offer request,” your email app opens. Attach your photos there before sending.</span></div>
    <button className="button full" type="submit">Email my offer request</button><small className="full">Prefer texting? Send photos directly to <a href="sms:+19542900490">954-290-0490</a>.</small>
  </form>;
}
