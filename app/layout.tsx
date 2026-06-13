import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ponkudam.org"),
  title: "Ponkudam Gold & Diamond | Jewellery Store in Pantheerankavu, Calicut",
  description:
    "Discover timeless gold and diamond jewellery from Ponkudam Gold & Diamond in Pantheerankavu, Calicut. Explore bridal, gold, diamond and everyday jewellery collections.",
  alternates: {
    canonical: "https://ponkudam.org"
  },
  openGraph: {
    title: "Ponkudam Gold & Diamond | Jewellery Store in Pantheerankavu, Calicut",
    description:
      "Discover timeless gold and diamond jewellery from Ponkudam Gold & Diamond in Pantheerankavu, Calicut. Explore bridal, gold, diamond and everyday jewellery collections.",
    url: "https://ponkudam.org",
    siteName: "Ponkudam Gold & Diamond",
    images: [
      {
        url: "/images/hero-jewellery.png",
        width: 1200,
        height: 630,
        alt: "Gold and diamond jewellery from Ponkudam"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
