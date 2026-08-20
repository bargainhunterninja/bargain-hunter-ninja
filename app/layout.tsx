import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bargainhunterninja.com"),
  title: "Bargain Hunter Ninja | We Buy Your Items for Cash",
  description: "Local South Florida buyer of video games, cameras, vintage toys, clothing, electronics, sports gear and collections. Call or text for a cash offer.",
  openGraph: { title: "Turn Your Stuff Into Cash | Bargain Hunter Ninja", description: "Fast, fair local offers for quality items and collections in Broward and Miami-Dade.", url: "https://bargainhunterninja.com", siteName: "Bargain Hunter Ninja", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bargain Hunter Ninja — turn your stuff into cash" }] },
  twitter: { card: "summary_large_image", title: "Bargain Hunter Ninja", description: "South Florida's local buyer for quality items and collections.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
