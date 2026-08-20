import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bargainhunterninja.com"),
  title: "Sell Your Items for Cash in Fort Lauderdale | Bargain Hunter Ninja",
  description: "Sell video games, cameras, vintage toys, collectibles, clothing, electronics and sports gear for cash in Fort Lauderdale. Call or text for a fast local offer.",
  keywords: ["sell items for cash Fort Lauderdale", "cash buyer Broward County", "sell video games Fort Lauderdale", "sell vintage toys", "sell cameras", "sell collectibles", "sell electronics", "sell sports equipment"],
  alternates: { canonical: "https://bargainhunterninja.com/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "Turn Your Stuff Into Cash | Bargain Hunter Ninja", description: "Fast, fair local offers for quality items and collections in Broward and Miami-Dade.", url: "https://bargainhunterninja.com", siteName: "Bargain Hunter Ninja", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bargain Hunter Ninja — turn your stuff into cash" }] },
  twitter: { card: "summary_large_image", title: "Bargain Hunter Ninja", description: "South Florida's local buyer for quality items and collections.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#18243a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-US"><body>{children}</body></html>; }
