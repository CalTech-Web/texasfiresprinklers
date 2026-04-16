import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Fire Sprinkler Installation & Service in Texas | E&R Ibukun LLC",
    template: "%s | E&R Ibukun LLC",
  },
  description:
    "E&R Ibukun LLC provides expert fire sprinkler installation, inspection, and emergency services across all of Texas. Licensed contractor SCR-G-3451926. Call (832) 961-8372.",
  metadataBase: new URL("https://texasfiresprinklers.com"),
  openGraph: {
    siteName: "E&R Ibukun LLC",
    locale: "en_US",
    type: "website",
    url: "https://texasfiresprinklers.com",
    images: [
      {
        url: "/gallery/er-ibukun-hero.jpeg",
        width: 1920,
        height: 1080,
        alt: "E&R Ibukun LLC - Fire Protection Services in Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/gallery/er-ibukun-hero.jpeg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "E&R Ibukun LLC",
  alternateName: "Texas Fire Sprinklers",
  url: "https://texasfiresprinklers.com",
  logo: "https://texasfiresprinklers.com/logos/logo.jpeg",
  image: "https://texasfiresprinklers.com/gallery/er-ibukun-hero.jpeg",
  description:
    "Houston-based fire protection company serving all of Texas with expert fire sprinkler installation, inspection, and emergency services for residential and commercial properties.",
  telephone: "+18329618372",
  email: "edwin_ibukun@outlook.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7961 Fields Street",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77028",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.797,
    longitude: -95.276,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "State", name: "Texas" },
    { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Dallas", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Austin", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "San Antonio", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Fort Worth", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "El Paso", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Arlington", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Corpus Christi", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Plano", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Lubbock", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Katy", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Sugar Land", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "The Woodlands", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Pearland", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "League City", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Pasadena", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Baytown", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Conroe", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  priceRange: "$$",
  hasMap: "https://www.google.com/maps/place/7961+Fields+St,+Houston,+TX+77028",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Texas Fire Sprinkler Certificate of Registration",
    identifier: "SCR-G-3451926",
    recognizedBy: {
      "@type": "Organization",
      name: "Texas Department of Insurance State Fire Marshal's Office",
    },
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+18329618372",
      contactType: "customer service",
      areaServed: "US-TX",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    },
    {
      "@type": "ContactPoint",
      telephone: "+18329618372",
      contactType: "emergency",
      areaServed: "US-TX",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Fire Sprinkler Installation and Inspection",
        url: "https://texasfiresprinklers.com/services#FireSprinklerSystems",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Fire Extinguisher Services",
        url: "https://texasfiresprinklers.com/services#FireExtinguisherServices",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Fire Suppression Systems",
        url: "https://texasfiresprinklers.com/services#FireSuppressionSystems",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "24/7 Emergency Fire Protection Service",
        url: "https://texasfiresprinklers.com/services#EmergencyService",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Houston, Texas" />
        <meta name="geo.position" content="29.797;-95.276" />
        <meta name="ICBM" content="29.797, -95.276" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
