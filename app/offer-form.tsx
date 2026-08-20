"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function OfferForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submitOffer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    try {
      const response = await fetch("/__forms.html", { method: "POST", body: new FormData(form) });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <div className="offer-form form-confirmation" role="status"><span className="confirmation-check">✓</span><h3>We received your items!</h3><p>Thanks for reaching out. Bargain Hunter Ninja will review your submission and contact you as soon as possible.</p><button className="button" type="button" onClick={() => setStatus("idle")}>Submit another item</button></div>;
  }

  return <form className="offer-form" name="seller-offer" method="POST" encType="multipart/form-data" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submitOffer}>
    <input type="hidden" name="form-name" value="seller-offer" />
    <p className="form-honeypot" aria-hidden="true"><label>Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    <div><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required /></div>
    <div><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required /></div>
    <div className="full"><label htmlFor="email">Email address <span>(optional)</span></label><input id="email" name="email" type="email" inputMode="email" autoComplete="email" /></div>
    <div className="full"><label htmlFor="item">What are you selling?</label><input id="item" name="item" placeholder="Example: Nintendo games, vintage shirts, camera collection" required /></div>
    <div className="full"><label htmlFor="details">Condition and details</label><textarea id="details" name="details" rows={5} placeholder="Brands, model numbers, quantity, condition and anything else we should know" required /></div>
    <fieldset className="full photo-fields"><legend>Upload photos <span>(optional)</span></legend><p>Add up to three JPG, PNG or HEIC photos. Keep the combined upload under 8 MB.</p><div className="photo-inputs"><label>Photo 1<input name="photo-1" type="file" accept="image/jpeg,image/png,image/heic,image/heif" /></label><label>Photo 2<input name="photo-2" type="file" accept="image/jpeg,image/png,image/heic,image/heif" /></label><label>Photo 3<input name="photo-3" type="file" accept="image/jpeg,image/png,image/heic,image/heif" /></label></div></fieldset>
    <button className="button full" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Send my offer request"}</button>
    <p className={`form-status full${status === "error" ? " form-error" : ""}`} aria-live="polite">{status === "error" ? <>We couldn’t send the form. Please try again or text photos to <a href="sms:+19542900490">954-290-0490</a>.</> : "We’ll only use your information to respond to your offer request."}</p>
  </form>;
}
