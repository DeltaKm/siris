import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { eventData } from "@/data/event-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const title = "SIRIS – Festa della Birra | 28, 29 e 30 Agosto 2026";
const description =
  "Il 28, 29 e 30 agosto 2026 a Caiazzo arriva SIRIS, la Festa della Birra. Il 29 agosto appuntamento speciale con la Notte Bianca. Birra, food, musica e divertimento.";

export const metadata: Metadata = {
  metadataBase: new URL(eventData.siteUrl),
  title,
  description,
  keywords: [
    "SIRIS",
    "Festa della Birra",
    "Caiazzo",
    "Notte Bianca",
    "eventi Caserta",
    "agosto 2026",
    "birra",
    "musica dal vivo",
    "street food",
  ],
  alternates: {
    // Sostituire con l'URL canonico definitivo
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "SIRIS – Festa della Birra",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/logos/siris/siris-logo.png",
        width: 204,
        height: 204,
        alt: "Logo SIRIS – Festa della Birra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logos/siris/siris-logo.png"],
  },
  icons: {
    icon: "/logos/siris/siris-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0906",
};

// Dati strutturati Event (JSON-LD) per i motori di ricerca
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Festival",
  name: eventData.fullName,
  description,
  startDate: eventData.startDate,
  endDate: eventData.endDate,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  image: [`${eventData.siteUrl}/logos/siris/siris-logo.png`],
  location: {
    "@type": "Place",
    name: eventData.venue.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Piazza Santo Stefano Menecillo",
      postalCode: "81013",
      addressLocality: eventData.town,
      addressRegion: eventData.province,
      addressCountry: eventData.country,
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
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
