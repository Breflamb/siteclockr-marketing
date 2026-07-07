import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { OG_IMAGE, SITE_URL, seoKeywords } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CountryProvider } from "@/components/CountryContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — GPS site clock-in & attendance for construction`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [...seoKeywords],
  authors: [{ name: "SiteClockr" }],
  creator: "SiteClockr",
  publisher: "SiteClockr",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    alternateLocale: ["en_GB"],
    url: SITE_URL,
    title: `${site.name} — GPS site clock-in & attendance for construction`,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "SiteClockr — time and attendance for construction sites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — GPS site clock-in & attendance for construction`,
    description: site.description,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IE"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <CountryProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CountryProvider>
      </body>
    </html>
  );
}
