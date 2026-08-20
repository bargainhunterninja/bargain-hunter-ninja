"use client";

import Script from "next/script";
import { useEffect } from "react";

export const GA_MEASUREMENT_ID = "G-SLCLPZEFBR";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAnalyticsEvent(name: string, parameters: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, {
    ...parameters,
    page_path: window.location.pathname,
    transport_type: "beacon",
  });
}

export default function GoogleAnalytics() {
  useEffect(() => {
    function trackContactClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href^="tel:"], a[href^="sms:"]');
      if (!link) return;
      const isCall = link.href.startsWith("tel:");
      trackAnalyticsEvent(isCall ? "click_to_call" : "click_to_text", {
        contact_method: isCall ? "phone" : "text_message",
      });
    }

    document.addEventListener("click", trackContactClick);
    return () => document.removeEventListener("click", trackContactClick);
  }, []);

  return <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    ` }} />
  </>;
}
