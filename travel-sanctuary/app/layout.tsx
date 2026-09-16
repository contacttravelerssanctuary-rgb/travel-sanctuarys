import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Traveler's Sanctuary LLC | Your Home Between Assignments",
  description:
    "Comfortable, furnished housing for travel nurses, consultants, agency contractors, and anyone working an assignment away from home in Wylie, Texas.",
  openGraph: {
    title: "Traveler's Sanctuary LLC",
    description: "Comfortable living for the traveling professional. Furnished housing in Wylie, Texas.",
    type: "website",
    locale: "en_US",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Traveler's Sanctuary LLC",
  description: "Comfortable, furnished housing for travel nurses, consultants, and traveling professionals.",
  telephone: "+1-469-831-9855",
  email: "contacttravelerssanctuary@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wylie",
    addressRegion: "TX",
    postalCode: "75098",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
